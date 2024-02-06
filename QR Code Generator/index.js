import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Type your url:",
      type: "input",
    },
  ])
  .then(function (answer) {
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(url + ".png"));

    fs.writeFile("URL.txt", URL.toString(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
