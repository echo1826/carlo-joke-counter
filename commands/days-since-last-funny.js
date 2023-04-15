const { SlashCommandBuilder } = require("discord.js");
const { daysSince } = require("../lastFunny.json");

module.exports = {
  data: new SlashCommandBuilder().setName("howmanydays").setDescription("Shows how many days since funny"),
  async execute(interaction) {
    await interaction.reply(`${daysSince} days`);
  }
}
