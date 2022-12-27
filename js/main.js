let closeMenu = document.getElementById("closeMenu");
let menu      = document.getElementById("menu") ;
let inputVal  = document.getElementById("form1");
let listImg = document.querySelectorAll(".itemImages img") ;
let clicked = document.querySelector(".btn-them") ;
let numPrice= document.getElementById("numPrice");
menu.addEventListener("click" , function() {
    $(".nav-menu").css("left" , "0")
})
closeMenu.addEventListener("click" , function() {
    $(".nav-menu").css("left" , "-100%")
}) ;

for(let i =  0 ; i<listImg.length ; i++) {
    listImg[i].addEventListener("click" , function(e) {
        
        let imgSrc = $(e.target).attr("src");
        $(".mainImage").attr("src" , imgSrc) ;
    })
}
let GetVal ; 
clicked.addEventListener("click" , function() {
    GetVal =  $("#inputVal").val() ;
    numPrice.innerHTML = GetVal ;
    getAvge() ;
    displayProduct()
});


let priceNumber =Number( price.innerHTML) ;
let finalResult ;
function getAvge() {
    
      textgray2 =`$${priceNumber} * ${GetVal}` ;
      finalResult = `$`+ priceNumber * GetVal ; 
      console.log(finalResult)
      price.innerHTML = finalResult;
}

function displayProduct() {
    let cartona =``;
    for(let i = 0 ;i < GetVal.length;i++) {
        cartona+=`<div class="d-flex justify-content-between align-items-center">
        <img src="images/image-product-1.jpg" style="width: 100px;" alt="">
        <div>
            <h4>Fall Limited Edition Sneakers</h4>
            <p class="text-base"><span class="text-gray-2 mr-3"> ${textgray2}
            </span>
                 <strong id="total">${finalResult}</strong></p>
        </div>
        </div>`;
    }
    document.getElementById("rowData").innerHTML = cartona ;
  
}

$(".icon p").click(function() {
    $(".card").css("visibility" , "visible")
})
$(".icon i").click(function() {
    $(".card").css("visibility" , "hidden")
})

