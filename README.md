# Giveaway Bot

A Discord giveaway bot built with discord.js v14 and [discord-giveaways](https://www.npmjs.com/package/discord-giveaways).

## Features

- Start and drop giveaways
- End, pause, and unpause active giveaways
- Reroll winners
- Manage giveaways with slash commands
- Configure the default giveaway appearance and behaviour

## Requirements

- Node.js 18 or newer
- A Discord application and bot token
- The bot invited to your server with the required channel and giveaway permissions

## Setup

1. Clone this repository and install dependencies:

   ```sh
   git clone https://github.com/TasfiqSami/Giveaway-Bot.git
   cd Giveaway-Bot
   npm install
   ```

2. Set the `DISCORD_BOT_TOKEN` environment variable in your terminal or hosting provider's environment/secrets settings. Do not put the token in `config.json` or commit it to Git.

   PowerShell:

   ```powershell
   $env:DISCORD_BOT_TOKEN = "your-bot-token"
   ```

   Linux / macOS:

   ```sh
   export DISCORD_BOT_TOKEN="your-bot-token"
   ```

3. Review `config.json` and set your server ID and giveaway preferences.

4. Start the bot:

   ```sh
   npm start
   ```

## Commands

- `/start-giveaway`
- `/drop-giveaway`
- `/end-giveaway`
- `/pause-giveaway`
- `/unpause-giveaway`
- `/reroll-giveaway`

## Tests

Run the lightweight authorization tests with:

```sh
npm test
```

## Token safety

If a bot token was previously committed to this repository, regenerate it in the Discord Developer Portal before deploying. Removing a token from the current file does not remove it from earlier Git history.
