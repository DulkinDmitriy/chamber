# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :chamber,
  ecto_repos: [Chamber.Repo]

# Configures the endpoint
config :chamber, ChamberWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "M7PG+XZo48wi6CLd/8wdQ4WpzRcQUiEZY7Le7w59Dmugci1xysvDsxrVLfRo/CCa",
  render_errors: [view: ChamberWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Chamber.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
