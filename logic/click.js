// console.log("Checking")

const clickedElements = [];


const allsquare = document.getElementsByClassName("square")
// console.log(allsquare)
for (const x of allsquare){
    x.addEventListener("click",function() {

        
        console.log(clickedElements)
        // Problem is array is getting stored more and more clicked items but we will make it store only one element
        const idofElement = x.getAttribute("id");
        const innerHTMLofElement = document.getElementById(idofElement).innerHTML;
        if(clickedElements.length>0){
            clickedElements[0].removeAttribute("style");
            clickedElements.length = 0;
        }
       

        if (innerHTMLofElement.includes('black') || 
        innerHTMLofElement.includes('white'))
        {
            document.getElementById(idofElement).style.backgroundColor = "#f78f3f";
            clickedElements.push(x);
        }
        });
    }