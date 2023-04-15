const { SlashCommandBuilder } = require("discord.js");
const { getJsonFile } = require("../utils");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("howmanydays")
        .setDescription("Shows how many days since funny"),
    async execute(interaction) {
        const { daysSince } = await getJsonFile();
        await interaction.reply(`${daysSince} days`);
    },
};
