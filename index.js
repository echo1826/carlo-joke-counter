require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const token = process.env.BOT_TOKEN;
const { getJsonFile, updateJsonFile } = require("./utils");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const commandsFolderPath = path.join(__dirname, "commands");
const commandFiles = fs
    .readdirSync(commandsFolderPath)
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsFolderPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(
            `WARNING The command at ${filePath} is missing a require "data" or "execute" property`
        );
    }
}

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(
            `No command matching ${interaction.commandName} was found`
        );
        return;
    }

    try {
        await command.execute(interaction);
    } catch (err) {
        console.error(err);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        }
    }
});

client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

setInterval(async () => {
    const data = await getJsonFile();
    data.daysSince++;
    await updateJsonFile(data);
}, 24 * 60 * 60 * 1000);
