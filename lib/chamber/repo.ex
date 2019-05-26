defmodule Chamber.Repo do
  use Ecto.Repo,
    otp_app: :chamber,
    adapter: Ecto.Adapters.Postgres
end
