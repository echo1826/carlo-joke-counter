const { SlashCommandBuilder } = require("discord.js");
const { daysSince } = require("../lastFunny.json");
const fs = require("node:fs");

async function getJsonFile() {
    const data = await fs.promises.readFile("lastFunny.json", "utf-8");
    return data;
}

async function updateJsonFile(data) {
  fs.writeFile("../lastFunny.json", data)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("howmanydays")
        .setDescription("Shows how many days since funny"),
    async execute(interaction) {
        let lastFunnyJson = await getJsonFile();
        lastFunnyJson.daysSince = 0;
        await interaction.reply(
            "Carlos made a funny, days has been reset to 0"
        );
    },
};
