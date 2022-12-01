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
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#alfredo").offset().top}
            , 'slow'); 
    });
    $("#cScampi-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#cScampi").offset().top}
            , 'slow'); 
    });
    $("#sScampi-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#sScampi").offset().top}
            , 'slow'); 
    });
    $("#penne-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#penne").offset().top}
            , 'slow'); 
    });
    $("#italian-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#italian").offset().top}
            , 'slow'); 
    });
    $("#zuppa-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#zuppa").offset().top}
            , 'slow'); 
    });
    $("#gnocchi-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#gnocchi").offset().top}
            , 'slow'); 
    });
    $("#bread-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#bread").offset().top}
            , 'slow'); 
    });
    $("#salad-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#salad").offset().top}
            , 'slow'); 
    });
    $("#risotto-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#risotto").offset().top}
            , 'slow'); 
    });
    $("#chard-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#chard").offset().top}
            , 'slow'); 
    });
    $("#arancini-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#arancini").offset().top}
            , 'slow'); 
    });
    $("#mozz-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#mozz").offset().top}
            , 'slow'); 
    });
    $("#zucc-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#zucc").offset().top}
            , 'slow'); 
    });
    $("#cParm-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#cParm").offset().top}
            , 'slow'); 
    });
    $("#eParm-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#eParm").offset().top}
            , 'slow'); 
    });
    $("#HotDog-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#HotDog").offset().top}
            , 'slow'); 
    });
    $("#porchetta-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#porchetta").offset().top}
            , 'slow'); 
    });
    $("#stromboli-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#stromboli").offset().top}
            , 'slow'); 
    });
    $("#ice-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#ice").offset().top}
            , 'slow'); 
    });
    $("#cheesecake-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#cheesecake").offset().top}
            , 'slow'); 
    });
    $("#cannoli-pic").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $("#cannoli").offset().top}
            , 'slow'); 
    });
    
    //add to cart
    $(".addBtn").click(function(){
        var item = this.parentElement.firstElementChild.innerHTML;
        var price = $(this.parentElement).children().eq(1)[0].innerHTML;
        var src = $(this.parentElement.parentElement.firstElementChild).attr('src');
        console.log(item, price, src);

        var addedItems = $('.addedItems');

        for(var i = 0; i < addedItems.length; i++){
            if(addedItems[i].innerHTML == item){
                $("#overlay").css("visibility", "visible");
                $(".body").css("overflow-y", "hidden");
                $("#add-error").css("visibility", "visible");
                return;
            }
            else if(i == addedItems.length -1){
                $("#added-to").fadeTo(250, 1.0);
                $("#added-to").delay(750).fadeTo(250, 0.0);
            }
        }
        var cartItem = document.createElement('div');
        $(cartItem).addClass('cart-item');

        console.log("test");
        var content = 
            `
                <input type="number" value="1">
                <div>${price}</div>
                <img src="${src}" alt="">
                <div class="addedItems">${item}</div>
                <div class="removeBtn">Remove</div>
            `;

        cartItem.innerHTML = content;
        $('#cart-items-con').append(cartItem);

    });

    //remove from cart
    $(document).on("click", ".removeBtn", function(){
        this.parentElement.remove();
    });
});