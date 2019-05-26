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
    .receive("ok", resp => console.log(resp))
    .receive("error", reason => console.log(reason))

channel.on("render:new:message", message => {
    let container = document.getElementById("messages-container")
    renderMessage(container, message.content)
})

window.onload = function () {
    // Edit this
    channel.push("new:message", {
        content: "hello"
    })
}

function renderMessage(container, content) {
    let template = document.createElement("div")
    template.className = "message"
    template.innerText = content

    container.appendChild(template)
}