$(document).ready(function(){
    $(".item").click(function(){
        $("#overlay").css("visibility", "visible");
        $(".body").css("overflow-y", "hidden");
    });

    $("#italian").click(function(){
        $("#italian-info").css("visibility", "visible");
    });
    $("#zuppa").click(function(){
        $("#zuppa-info").css("visibility", "visible");
    });
    $("#gnocchi").click(function(){
        $("#gnocchi-info").css("visibility", "visible");
    });
    $("#arancini").click(function(){
        $("#arancini-info").css("visibility", "visible");
    });
    $("#mozz").click(function(){
        $("#mozz-info").css("visibility", "visible");
    });
    $("#zucc").click(function(){
        $("#zucc-info").css("visibility", "visible");
    });
    $("#alfredo").click(function(){
        $("#alfredo-info").css("visibility", "visible");
    });
    $("#cScampi").click(function(){
        $("#cScampi-info").css("visibility", "visible");
    });
    $("#sScampi").click(function(){
        $("#sScampi-info").css("visibility", "visible");
    });
    $("#penne").click(function(){
        $("#penne-info").css("visibility", "visible");
    });
    $("#cParm").click(function(){
        $("#cParm-info").css("visibility", "visible");
    });
    $("#eParm").click(function(){
        $("#eParm-info").css("visibility", "visible");
    });
    $("#HotDog").click(function(){
        $("#HotDog-info").css("visibility", "visible");
    });
    $("#porchetta").click(function(){
        $("#porchetta-info").css("visibility", "visible");
    });
    $("#stromboli").click(function(){
        $("#stromboli-info").css("visibility", "visible");
    });
    $("#ice").click(function(){
        $("#ice-info").css("visibility", "visible");
    });
    $("#cheesecake").click(function(){
        $("#cheesecake-info").css("visibility", "visible");
    });
    $("#cannoli").click(function(){
        $("#cannoli-info").css("visibility", "visible");
    });
    $("#bread").click(function(){
        $("#bread-info").css("visibility", "visible");
    });
    $("#salad").click(function(){
        $("#salad-info").css("visibility", "visible");
    });
    $("#risotto").click(function(){
        $("#risotto-info").css("visibility", "visible");
    });
    $("#chard").click(function(){
        $("#chard-info").css("visibility", "visible");
    });


    $(".close").click(function(){
        $("#overlay").css("visibility", "hidden");
        $(".body").css("overflow-y", "visible");
        $(this.parentElement.parentElement).css("visibility", "hidden");
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
});