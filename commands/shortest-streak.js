const { SlashCommandBuilder } = require("discord.js");
const { getJsonFile, updateJsonFile } = require("../utils");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("shorteststreak")
  .setDescription("shortest days carlos went without a funny joke"),
  async execute(interaction) {
    let lastFunnyJson = await getJsonFile();
    await interaction.reply(`The shortest Carlos has gone without making a funny is ${lastFunnyJson.shortestStreak} ${lastFunnyJson.shortestStreak === 1 ? "day" : "days"}`);
  }
}