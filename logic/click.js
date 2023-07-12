// console.log("Checking")

const allsquare = document.getElementsByClassName("square")
// console.log(allsquare)
for (const x of allsquare){
    x.addEventListener("click",function() {
        console.log(x)
        });
    }