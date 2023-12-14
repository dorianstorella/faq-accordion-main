function openOnglet()
{
    let closeOtherOnglet = document.getElementsByClassName("button-icon-plus");
    
    for (let index = 0; index < closeOtherOnglet.length; index++)
    {
        const element = closeOtherOnglet[index];

        if(element.parentElement.nextElementSibling.style.display === "block")
        {
            element.parentElement.nextElementSibling.style.display = "none";
            element.setAttribute("src", "../faq-accordion-main/assets/images/icon-plus.svg");
            element.setAttribute("onclick", "openOnglet()");
        }
        
    }
    
    let element = document.activeElement
    element.setAttribute("src", "../faq-accordion-main/assets/images/icon-minus.svg");
    element.setAttribute("onclick", "closeOnglet()");
    element.parentElement.nextElementSibling.style.display = "block";

}

function closeOnglet()
{
    let element = document.activeElement
    element.setAttribute("src", "../faq-accordion-main/assets/images/icon-plus.svg");
    element.setAttribute("onclick", "openOnglet()");
    element.parentElement.nextElementSibling.style.display = "none";
}

