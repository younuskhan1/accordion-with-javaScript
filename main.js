//  First step:
// Event handlers are added to each question's element.

const accordionItemsHeaders = document.querySelectorAll(".accordion-item-header");
console.log(accordionItemsHeaders);
accordionItemsHeaders.forEach((accordionItemsHeader)=>{
    accordionItemsHeader.addEventListener("click", () =>{
    console.log(accordionItemsHeader);

    // Third step:
    // immediate below four lines of code is added at last so that previous clicked
    // question's answer can be automatically closed after the clicking on the latest 
    // clicked question.


    const currentlyActiveAccordionItemsHeader = document.querySelector(".accordion-item-header.active");

    // currentlyActiveAccordionItemsHeader is the latest clicked event handler/question and accordionItemsHeader 
    // is the previous clicked event handler/question so these two cannot be same at a time. 

    if(currentlyActiveAccordionItemsHeader && currentlyActiveAccordionItemsHeader!==accordionItemsHeader){
        currentlyActiveAccordionItemsHeader.classList.toggle("active");
        currentlyActiveAccordionItemsHeader.nextElementSibling.style.maxHeight=0;
    }

    
    // Second step:
    // active class is added to clicked accordionItemsHeader dynamically at the time of 
    // clicking on the event.


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