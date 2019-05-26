defmodule ChamberWeb.ChatRoom do
  use ChamberWeb, :channel
  alias ChamberWeb.Presence

  def join("room:global", _payload, socket) do
    Presence.track(socket, :online, %{ok: "test"})

    {:ok, socket}
  end

  def handle_in("new:message", payload, socket) do
    broadcast(socket, "render:new:message", payload)

    {:reply, :ok, socket}
  end
end
