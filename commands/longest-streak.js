const { SlashCommandBuilder } = require("discord.js");
const { getJsonFile, updateJsonFile } = require("../utils");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("longeststreak")
  .setDescription("longest days carlos went without a funny joke"),
  async execute(interaction) {
    let lastFunnyJson = await getJsonFile();
    await interaction.reply(`The longest Carlos has gone without making a funny is ${lastFunnyJson.longestStreak} ${lastFunnyJson.longestStreak === 1 ? "day" : "days"}`);
  }
}