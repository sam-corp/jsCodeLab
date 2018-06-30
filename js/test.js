var VEHICULES = new Array();
var counter = 0;
var current = 0;

//APPARITION DES ELEMENTS
$('.elm').click(function(){ //document.getElementByClass('elm')  --> JS
  // TODO: hide elements with class "zone" and show the current element data attributes
  // NOTE: You'll have to contact the attribute with a dot before showing it
  //$(this) --> ELEMENT ACTUEL
  $('.zone').hide(); //
  $('.'+$(this).attr('data')).toggle('drop');
  // $('.'+$(this).attr('data')).animate({}, 500);
});

//CREATION DE VEHICULE
$('.btCreateCar').click(function(){
  // TODO: Code to create a new car here you'll use our custom Function
  // NOTE: We use the following classes in the given order: txMarque, txColor, txCode  :: Those are input type elements
  // NOTE: testCreate(a, b, c) will help us to perform the task :: Remember to respect the order
  var a = $('.txMarque');
  var b = $('.txColor');
  var c = $('.txCode');
  testCreate(a,b,c);
  //testCreate($('.txMarque'), $('.txColor'), $('.txCode'));
});

//testCreate(nom, couleur, code)
//EFFACER UN VEHICULE
function deleteMe(a){
  // TODO: Remove the erased elements from DOM
  // NOTE: we will access id vehicle and vehicle0 then we concat with the paramter and we hide
  $('#vehicle'+a).hide();
  $('#vehicle0'+a).hide();
}

$('.btSaveMod').click(function(){
  // TODO: THE POPUP element does not hide itself
  // NOTE: access the class popup and make it hide

  if(testMod($('.txmMarque'), $('.txmColor'), $('.txmCode'))){
    $('.title'+current).html($('.txmMarque').val());
    $('.color'+current).html($('.txmColor').val());
    $('.code'+current).html($('.txmCode').val());
    $('.popup').hide();
  }else{
    // TODO: in a js dialog you'll show a message for this error
    alert('Une erreur est survenue');
  }
});

$('.bClose').click(function(){
  // TODO: Hide the popup element
  $('.popup').hide();
});

function modMe(a){
  /* No comment */
  $('.popup').show();
  $('.txmMarque').val(VEHICULES[a][0]);
  $('.txmColor').val(VEHICULES[a][1]);
  $('.txmCode').val(VEHICULES[a][2]);
  current = a;
}
