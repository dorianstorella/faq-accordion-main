 
const icon = document.getElementsByClassName("button-icon-plus") 

for (let index = 0; index < icon.length; index++) 
{
    const element = icon[index];
    element.setAttribute("onclick", "openOnglet()");
}

function openOnglet()
{
    

    let element = document.activeElement
    element.removeAttribute("src");
    element.setAttribute("src", "../faq-accordion-main/assets/images/icon-minus.svg");
    element.setAttribute("onclick", "closeOnglet()");
    element.nextElementSibling.style.display = "block";

}

function closeOnglet()
{
    let element = document.activeElement
    element.removeAttribute("src");
    element.setAttribute("src", "../faq-accordion-main/assets/images/icon-plus.svg");
    element.setAttribute("onclick", "openOnglet()");
    element.nextElementSibling.style.display = "none";
}

