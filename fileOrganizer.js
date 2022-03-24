let fs = require('fs');
let folderPath = process.argv[2];

let folderExists = fs.existsSync(folderPath);

"C:\\Users\\hp\\Desktop\\FJP_Web\\Projects\\FileOrganizer\\Download"
if(folderExists){
    console.log("Present");
}
else{
    console.log("Please enter correct path");
}