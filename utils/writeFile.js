const fs = require('node:fs');

module.exports = async function updateJsonFile(data) {
    fs.writeFile("lastFunny.json", JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("json file updated")
    );
};
