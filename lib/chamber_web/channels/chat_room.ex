defmodule ChamberWeb.ChatRoom do
  use ChamberWeb, :channel

  def join("room:global", _payload, socket) do
    {:ok, socket}
  end

  def handle_in("new:message", payload, socket) do
    broadcast(socket, "render:new:message", payload)

    {:reply, :ok, socket}
  end
end
