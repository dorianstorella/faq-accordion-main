 
const icon = document.getElementsByClassName("button-icon-plus") 

function openOnglet()
{
    let element = document.activeElement
   // console.log(element.attributes);
    element.removeAttribute("src");
    element.setAttribute("src", "../faq-accordion-main/assets/images/icon-minus.svg");
    //console.log(element.children().css("display") == "none");
    console.log(element.children)
}

for (let index = 0; index < icon.length; index++) 
{
    const element = icon[index];
    element.addEventListener("click", openOnglet);
}