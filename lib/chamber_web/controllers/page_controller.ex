defmodule ChamberWeb.PageController do
  use ChamberWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
