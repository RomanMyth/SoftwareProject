$(document).ready(function(){
    $(".item").click(function(){
        $("#overlay").css("visibility", "visible");
        $(".body").css("overflow-y", "hidden");
    });

    $("#italian").click(function(){
        $("#italian-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#zuppa").click(function(){
        $("#zuppa-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#gnocchi").click(function(){
        $("#gnocchi-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#arancini").click(function(){
        $("#arancini-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#mozz").click(function(){
        $("#mozz-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#zucc").click(function(){
        $("#zucc-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#alfredo").click(function(){
        $("#alfredo-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#cScampi").click(function(){
        $("#cScampi-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#sScampi").click(function(){
        $("#sScampi-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#penne").click(function(){
        $("#penne-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#cParm").click(function(){
        $("#cParm-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#eParm").click(function(){
        $("#eParm-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#HotDog").click(function(){
        $("#HotDog-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#porchetta").click(function(){
        $("#porchetta-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#stromboli").click(function(){
        $("#stromboli-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#ice").click(function(){
        $("#ice-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#cheesecake").click(function(){
        $("#cheesecake-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#cannoli").click(function(){
        $("#cannoli-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#bread").click(function(){
        $("#bread-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#salad").click(function(){
        $("#salad-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#risotto").click(function(){
        $("#risotto-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });
    $("#chard").click(function(){
        $("#chard-info").css("visibility", "visible");
    }).children(':nth-child(2)').children(':nth-child(3)').click(function(e){
        return false;
    });


    $(".close").click(function(){
        $("#overlay").css("visibility", "hidden");
        $(".body").css("overflow-y", "visible");
        if($(this.parentElement).attr('id') == "add-error"){
            $(this.parentElement).css("visibility", "hidden");
        }
        else{
            $(this.parentElement.parentElement).css("visibility", "hidden");
        } 
    });

    $(".item").mouseover(function(){
        $(this).children(':nth-child(2)').children(':nth-child(4)').css("visibility", "visible");
    });
    $(".item").mouseleave(function(){
        $(this).children(':nth-child(2)').children(':nth-child(4)').css("visibility", "hidden");
    });

    $("#alfredo-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#alfredo").offset().top}
            , 'slow'); 
    });
    $("#cScampi-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#cScampi").offset().top}
            , 'slow'); 
    });
    $("#sScampi-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#sScampi").offset().top}
            , 'slow'); 
    });
    $("#penne-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#penne").offset().top}
            , 'slow'); 
    });
    $("#italian-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#italian").offset().top}
            , 'slow'); 
    });
    $("#zuppa-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#zuppa").offset().top}
            , 'slow'); 
    });
    $("#gnocchi-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#gnocchi").offset().top}
            , 'slow'); 
    });
    $("#bread-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#bread").offset().top}
            , 'slow'); 
    });
    $("#salad-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#salad").offset().top}
            , 'slow'); 
    });
    $("#risotto-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#risotto").offset().top}
            , 'slow'); 
    });
    $("#chard-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#chard").offset().top}
            , 'slow'); 
    });
    $("#arancini-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#arancini").offset().top}
            , 'slow'); 
    });
    $("#mozz-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#mozz").offset().top}
            , 'slow'); 
    });
    $("#zucc-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#zucc").offset().top}
            , 'slow'); 
    });
    $("#cParm-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#cParm").offset().top}
            , 'slow'); 
    });
    $("#eParm-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#eParm").offset().top}
            , 'slow'); 
    });
    $("#HotDog-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#HotDog").offset().top}
            , 'slow'); 
    });
    $("#porchetta-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#porchetta").offset().top}
            , 'slow'); 
    });
    $("#stromboli-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#stromboli").offset().top}
            , 'slow'); 
    });
    $("#ice-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#ice").offset().top}
            , 'slow'); 
    });
    $("#cheesecake-pic").click(function() {
        
        $('html,body').animate({
            scrollTop: $("#cheesecake").offset().top}
            , 'slow'); 
    });
    $("#cannoli-pic").click(function() {

        $('html,body').animate({
            scrollTop: $("#cannoli").offset().top}
            , 'slow'); 
    });
    
    //add to cart
    $(".addBtn").click(function(){
        var item = this.parentElement.firstElementChild.innerHTML;
        var price = $(this.parentElement).children().eq(1)[0].innerHTML;
        var src = $(this.parentElement.parentElement.firstElementChild).attr('src');

        var addedItems = $('.addedItems');

        for(var i = 0; i < addedItems.length; i++){
            if(addedItems[i].innerHTML == item){
                $("#overlay").css("visibility", "visible");
                $(".body").css("overflow-y", "hidden");
                $("#add-error").css("visibility", "visible");
                return;
            }
            else if(i == addedItems.length -addedItems.length1){
                $("#added-to").css('display', 'flex').hide().fadeIn('normal');
                $("#added-to").delay(750).fadeOut('normal');
            }
        }
        
        if(addedItems.length == 0){
            $("#added-to").css('display', 'flex').hide().fadeIn('normal');
            $("#added-to").delay(750).fadeOut('normal');
        }

        var cartItem = document.createElement('div');
        $(cartItem).addClass('cart-item');

        var content = 
            `
                <input class="quantity" type="number" value="1">
                <div class="cart-item-price">${price}</div>
                <img src="${src}" alt="">
                <div class="addedItems">${item}</div>
                <div class="removeBtn">Remove</div>
            `;

        cartItem.innerHTML = content;
        $('#cart-items-con').append(cartItem);

        //Receipt Section

        var receiptItem = document.createElement('div');
        $(receiptItem).addClass('receipt-item');
        var rcontent = 
            `
                <div class="finalQuantity"></div>
                <div class="receipt-item-price">${price}</div>
                <img src="${src}" alt="">
                <div class="addedReceiptItems">${item}</div>
            `;

        receiptItem.innerHTML = rcontent;
        $('#receipt-main').append(receiptItem);

        priceChange();
    });

    //remove from cart
    $(document).on("click", ".removeBtn", function(){
        this.parentElement.remove();
        priceChange();
    });

    //quantity change
    $(document).on("change", ".quantity", function(){
        priceChange();
        if(this.value <= 0){
            this.parentElement.remove();
        }
    });

    //Checkout Section
   
    $(".checkoutBtn").click(function(){ 
        var added = $('.addedItems');
        var receiptItems = $(".receipt-item");
        var itemQaunt = $(".quantity");
        if (added.length > 0){
            $("#checkout-con").css("visibility","visible"),
            $("#overlay").css("visibility","visible")
            for(var i = 0; i < added.length; i++){
                receiptItems[i].firstElementChild.innerHTML = itemQaunt[i].value;
            }  
        }
    });
    

    $(".closecheck").click(function(){
        $("#checkout-con").css("visibility", "hidden");
        $("#overlay").css("visibility", "hidden");
        $(".body").css("overflow-y", "visible");
    });

    $(".checkoutbottombtn").click(function(){
        $("#checkout-con").css("visibility", "hidden");
        $("#overlay").css("visibility", "hidden");
        $(".body").css("overflow-y", "visible");
    });

    var selected1 = false;
    var selected2 = false;
    var selected3 = false;
    var selected4 = false;
    $(".paymentdiv1").click(function(){
        if (selected1) {
            $(".paymentdiv1").css("border", "2px solid #9f9f9f");

        }
        else{
            $(".paymentdiv1").css("border", "2px solid black");
            $(".paymentdiv2").css("border", "2px solid #9f9f9f");
            $(".paymentdiv3").css("border", "2px solid #9f9f9f");
            $(".paymentdiv4").css("border", "2px solid #9f9f9f");
        }
        selected1 = !selected1;
    });
    $(".paymentdiv2").click(function(){
        if (selected2) {
            $(".paymentdiv2").css("border", "2px solid #9f9f9f");

        }
        else{
            $(".paymentdiv2").css("border", "2px solid black");
            $(".paymentdiv1").css("border", "2px solid #9f9f9f");
            $(".paymentdiv3").css("border", "2px solid #9f9f9f");
            $(".paymentdiv4").css("border", "2px solid #9f9f9f");
        }
        selected2 = !selected2;
    });
    $(".paymentdiv3").click(function(){
        if (selected3) {
            $(".paymentdiv3").css("border", "2px solid #9f9f9f");

        }
        else{
            $(".paymentdiv3").css("border", "2px solid black");
            $(".paymentdiv1").css("border", "2px solid #9f9f9f");
            $(".paymentdiv2").css("border", "2px solid #9f9f9f");
            $(".paymentdiv4").css("border", "2px solid #9f9f9f");
        }
        selected3 = !selected3;
    });
    $(".paymentdiv4").click(function(){
        if (selected4) {
            $(".paymentdiv4").css("border", "2px solid #9f9f9f");

        }
        else{
            $(".paymentdiv4").css("border", "2px solid black");
            $(".paymentdiv1").css("border", "2px solid #9f9f9f");
            $(".paymentdiv2").css("border", "2px solid #9f9f9f");
            $(".paymentdiv3").css("border", "2px solid #9f9f9f");
        }
        selected4 = !selected4;
    });
    $(".checkoutbottombtn").click(function(){
        $("#receipt-con").css("display", "flex");
        $("#cart-con").css("display", "none")

        var itemPrice = $(".receipt-item-price");
        var totalPrice = 0;
        var quantity = $(".finalQuantity");
        for(var i = 0; i < itemPrice.length; i++){
            var multiple = quantity[i].innerHTML;
            var price = parseFloat(itemPrice[i].innerHTML.replace("$", ""));

            for(var j = 0; j < multiple; j++){
                totalPrice += price;
            }
        }

        $("#receipt-total-price")[0].innerHTML = "Total: $" + Math.round(totalPrice * 100) / 100;
    });

    //Receipt Section
    $(".receipt-refresh-btn").click(function(){
        window.location.reload();
    });
});

//Price Change Function
function priceChange(){
    var itemPrice = $(".cart-item-price");
    var quantity = $(".quantity");
    var total = 0;

    for(var i = 0; i < itemPrice.length; i++){
        var multiple = quantity[i].value;  
        var price = parseFloat(itemPrice[i].innerHTML.replace("$", ""));

        for(var j = 0; j < multiple; j++){
            total += price;
        }
    }
    $("#total-price")[0].innerText = "$" + Math.round(total * 100) / 100;
}