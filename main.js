const accordionItemsHeaders = document.querySelectorAll(".accordion-item-header");
console.log(accordionItemsHeaders);
accordionItemsHeaders.forEach((accordionItemsHeader)=>{
    accordionItemsHeader.addEventListener("click", event =>{
        console.log(accordionItemsHeader);
    accordionItemsHeader.classList.toggle("active");
    const accordionItemBody = accordionItemsHeader.nextElementSibling;
    console.log(accordionItemBody);
    if(accordionItemsHeader.classList.contains("active")){
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    })   
})