let fs = require('fs');
let path= require('path');
let folderPath = process.argv[2];

let folderExists = fs.existsSync(folderPath);

let extensions = {
    Audio : [".mp3"],
    Video : [".mp4", ".mkv"],
    Document : [".doc",".xlsx",".pdf",".txt"],
    Image : [".jpeg",".jpg",".png",".gif"],
    Software : [".exe"]
};

"C:\\Users\\hp\\Desktop\\FJP_Web\\Projects\\FileOrganizer\\Download"
if(folderExists){
    // console.log("Present");
    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
     let ext = path.extname(files[i]);
     let nameOfFile = giveFolderName(ext);  
    }
}
else{
    console.log("Please enter correct path");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]== ext){
                return key;
            }
        }
    }
    return 'Others';
}