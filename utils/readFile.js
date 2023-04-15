const fs = require('node:fs');

module.exports = async function getJsonFile() {
    const data = await fs.promises.readFile("lastFunny.json", "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData;
};
