const { SlashCommandBuilder } = require("discord.js");
const { getJsonFile, updateJsonFile } = require("../utils");

// async function getJsonFile() {
//     const data = await fs.promises.readFile("lastFunny.json", "utf-8");
//     const parsedData = JSON.parse(data);
//     return parsedData;
// }

// async function updateJsonFile(data) {
//     fs.writeFile("lastFunny.json", JSON.stringify(data), err => err ? console.log(err) : console.log('json file updated'));
// }

module.exports = {
    data: new SlashCommandBuilder()
        .setName("carlosmadeafunny")
        .setDescription("Resets Carlos's joke counter"),
    async execute(interaction) {
        let lastFunnyJson = await getJsonFile();
        lastFunnyJson.daysSince = 0;
        await updateJsonFile(lastFunnyJson);
        await interaction.reply(
            "Carlos made a funny, days has been reset to 0"
        );
    },
};
