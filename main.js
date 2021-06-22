
$( document ).ready(function() {
    createTemplate();
});

//filtering on event change of filter bar
$(".isSelected").on("change",function() {
    let filter = document.getElementsByClassName('isSelected');
    let category = "NULL";
    let priceRange = "NULL";
    for(let i = 1  ; i < filter.length ; i++){
        if( filter[i].checked && i <= 5){
            category = filter[i].value;
        }
        else if( filter[i].checked && ( i >= 6 && i <= 11)){
            priceRange = filter[i].value;
        }
    }

    // spliting the price range into two variables
    let lowestPrice = 0;
    let highestPrice = 0;
    if(priceRange !== "NULL"){
        let prSplit = priceRange.split("-");
        lowestPrice = parseInt(prSplit[0]);
        highestPrice = parseInt(prSplit[1]);
    }
    
    let flag = false; // for checking any product rendered on not
    createTemplate();  // calling it to render all products into the document
    if(category.toLowerCase() !== 'iphone'){
        $(document.getElementsByClassName('variant-section')).hide();
    }
    else{
        $(document.getElementsByClassName('variant-section')).show();
    }
    $(".product").hide();
    $(".product").each(function() {
        let productCategory = $(this).data("category");
        let productPrice = $(this).data("price");
        if ( priceRange === "NULL" && (category.toLowerCase() === productCategory.toLowerCase() || category === "all") ){
            $(this).show();
            flag = true;
        }
        else if ( category === "NULL" && lowestPrice <= productPrice && highestPrice > productPrice ){
            $(this).show();
            flag = true;
        }
        else if( ( category.toLowerCase() === productCategory.toLowerCase() || category === "all" )  && (lowestPrice <= productPrice && highestPrice > productPrice )){
            $(this).show();
            flag = true;
        }
    });
    if(flag === false){
        let x = '<div class="not-found">Not found, Try something else :(</div>';
        $("#products").html(x);
    }
});


//searching item
$("#search-form").submit(function(e) {
	e.preventDefault();
	let query = $("#search-form input").val().toLowerCase();
    resetFilter();
    let flag = false;
    createTemplate();
	$(".product").hide();
	$(".product").each(function() {
		let keywords = $(this).data("name").toLowerCase();
		if (keywords.indexOf(query) > -1 ){
			$(this).show();
            console.log($(this));
            flag = true;
		}
	});
    if(flag == false){
        let x = '<div class="not-found">Not found, Search something else</div>';
        $("#products").html(x);
    }
});

//reseting all filter after search
function resetFilter(){
    let filter = document.getElementsByClassName('isSelected');
    let filterItemLength = filter.length;
    for(let i = 0 ; i < filterItemLength ; i++)
      filter[i].checked = false;
}

//creating product card 
function createTemplate() {
    var products = "";
    let productListLength = data.length;
    for (let i = 0; i < productListLength ; i++) {
        let name = data[i].name,
            category = data[i].category,
            color = data[i].color,
            price = data[i].price,
            keywords = data[i].keywords,
            rating = data[i].rating,
            rawPrice = price.replace("$",""),
            image = data[i].image;
        rawPrice = parseInt(rawPrice);
        //create product cards
        products += "<div class='col-sm-4 product' data-category='" + category + "' data-name='" + keywords + "' data-price='" + rawPrice + "' data-color='" + color + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />" + name + "<br />Color: " + color + "<br />Rating: <span class='star'>" + rating + "</span><br />Price: " + price + "</div></div>";
    }
    $("#products").html(products);
}