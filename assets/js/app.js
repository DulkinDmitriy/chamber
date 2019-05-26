// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import socket from "./socket"

let channel = socket.channel("room:global")

channel.join()
    .receive("ok", () => console.log("Successfully connected to global chat"))
    .receive("error", reason => console.log(reason))


window.onload = function () {
    let sendButton = document.getElementById("send-button")
    let owner = document.getElementById("owner")
    let message = document.getElementById("message")

    channel.on("render:new:message", message => {
        let container = document.getElementById("messages-container")
        renderMessage(container, message.owner, message.content)
    })

    sendButton.addEventListener("click", () => {
        switch ("") {
            case owner.value:
                alert("Please enter a username")
                return
            case message.value:
                alert("Please enter a message")
                return
        }

        channel.push("new:message", {
            owner: owner.value,
            content: message.value
        })

        message.value = ""
    })
}

function renderMessage(container, owner, content) {
    let date = new Date()
    let message = document.createElement("div")
    message.className = "message card"

    let messageOwner = messageItem("card-header", `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${owner}`)

    let messageContent = messageItem("card-body", content)

    message.appendChild(messageOwner)
    message.appendChild(messageContent)
    container.appendChild(message)
}

function messageItem(className, text) {
    let element = document.createElement("div")
    element.className = className
    element.innerText = text

    return element
}