// console.log("Checking")

const allsquare = document.getElementsByClassName("square")
// console.log(allsquare)
for (const x of allsquare){
    x.addEventListener("click",function() {
        const idofElement = x.getAttribute("id")
        const innerHTMLofElement = document.getElementById(idofElement).innerHTML;
        if (innerHTMLofElement.includes('black') || innerHTMLofElement.includes('white')){
            document.getElementById(idofElement).style.backgroundColor = "#f78f3f"
        }
        });
    }