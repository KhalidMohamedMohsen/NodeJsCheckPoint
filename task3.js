const fs = require("fs");

fs.writeFile("./docs/welcome.txt", "Hello Node", () => {
  console.log("file was written");
});

fs.readFile("./docs/welcome.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
