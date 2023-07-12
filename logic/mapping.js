const arrayOfFiles = document.querySelectorAll(".files");

const filesNameArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let fileNumber = 0;

for (const i of arrayOfFiles) {
  let c = 1;
  for (const j of i.children) {
    j.setAttribute("id",filesNameArray[fileNumber] + c);
    console.log(j)
    // console.log(filesNameArray[fileNumber] + c);
    c++; // Increment the counter for each child element
  }
  fileNumber++;
}

for (const i of arrayOfFiles){
    console.log(i.children);
}
