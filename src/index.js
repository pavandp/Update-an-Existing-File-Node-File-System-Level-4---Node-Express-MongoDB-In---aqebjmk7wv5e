const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  const existing=await fs.readFile(fileName, 'utf-8');
  const content=`${existing}, ${fileContent}`;
  await fs.writeFile(fileName, content, 'utf-8');
};

module.exports = updateFile;
