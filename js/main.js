

// about section tabs

(() =>{
       const aboutSection = document.querySelector(".about-section"),
       tabsConstainer = document.querySelector(".about-tabs");

       tabsConstainer.addEventListener("click",(event) =>{
        //    if event.target contains "tab-item" class and not contains 'active' class
           if(event.target.classList.contains("tab-item") && 
           !event.target.classList.contains("active")){
           const target = event.target.getAttribute("data-target");
        //    deactivate existing active 'tab-item'
           tabsConstainer.querySelector(".active").classList.remove("outer-shadow"
           ,"active");
        //    activate new 'tab-item'
           event.target.classList.add("active","outer-shadow");
        //    deactivate existing active 'tab-content'
           aboutSection.querySelector(".tab-content.active").classList.remove("active");
        // //    activate new 'tab-content'
        aboutSection.querySelector(target).classList.add("active");
           }
       })
})();


// portfolio filter

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioitemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");
    // Let itemIndex, slideIndex, screenshot;

    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") && 
        event.target.classList.contains("active")){
       filterContainer.querySelector(".active").classList.remove("active","outer-shadow");
       event.target.classList.add("active","outer-shadow");
       const target = event.target.getAttribute("data-target");
       portfolioItems.forEach((item)=>{
           if(target === item.getAttribute("data-category")){
        item.classList.remove("hide");
        item.classList.add("show");

           }
           else{
            item.classList.remove("hide");
            item.classList.add("show");
           }
       })
        }
    })
})();



















