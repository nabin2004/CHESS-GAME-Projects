// console.log("Checking")

const arrayOfpawn = []

for(const i of filesNameArray){ //accessing array of another library
    arrayOfpawn.push(document.getElementById(i+2));

}

for(const i of filesNameArray){ //accessing array of another library
    arrayOfpawn.push(document.getElementById(i+7));
    
}

for(const i of arrayOfpawn){
    i.addEventListener('click',()=>{
        console.log(i);
    });
}