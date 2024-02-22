
const accordionItemsHeaders = document.querySelectorAll(".accordion-item-header");
console.log(accordionItemsHeaders);
accordionItemsHeaders.forEach((accordionItemsHeader)=>{
    accordionItemsHeader.addEventListener("click", event =>{

    const currentlyActiveAccordionItemsHeader = document.querySelector(".accordion-item-header.active");

    if(currentlyActiveAccordionItemsHeader && currentlyActiveAccordionItemsHeader!==accordionItemsHeader){
        currentlyActiveAccordionItemsHeader.classList.toggle("active");
        currentlyActiveAccordionItemsHeader.nextElementSibling.style.maxHeight=0;
    }

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

// The scrollHeight value is equal to the minimum height the element would require in order
//  to fit all the content in the viewport without using a vertical scrollbar. The height is
// measured in the same way as clientHeight: it includes the element's padding, but not its
// border, margin or horizontal scrollbar (if present). It can also include the height of
// pseudo-elements such as ::before or ::after. If the element's content can fit without
// a need for vertical scrollbar, its scrollHeight is equal to clientHeight.