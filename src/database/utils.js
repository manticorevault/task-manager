const fs = require("fs-extra");
const { join } = require("path");

const loadQueries = async dirName => {
    const filePath = join(process.cwd(), "src", "database", dirName);

    const files = await fs.readdir(filePath)

    const dataFiles = files.filter( f => f.endsWith(".sql"))
    const dataQueries = {};

    for (const dataFile of dataFiles) {
        const singleQuery = fs.readFileSync(join(filePath, dataFile), { encoding: "UTF-8" });
        
        dataQueries[dataFile.replace(".sql", "")] = singleQuery;
    }

    return dataQueries;
}

module.exports = { loadQueries };