
/* custom js */

$('#title').attr( "data-0", "background-color:rgb(113,208,173); top: 0%;" );
$('#title').attr( "data-200", "background-color:rgb(174,207,110); top: -100%;" );

$('.panel:nth-of-type(2)').attr( "data-400", "top: 0%;" );
$('.panel:nth-of-type(2)').attr( "data-600", "top: -100%;" );

$('.panel:nth-of-type(3)').attr( "data-800", "top: 0%;" );
// $('.panel:nth-of-type(3)').attr( "data-100", "top: -100%;" );
$('.panel:nth-of-type(3)').children('h1').attr( "data-1000", "color:rgb(57,111,172);" );
$('.panel:nth-of-type(3)').children('h1').attr( "data-1200", "color:rgb(83,32,96);" );
$('.panel:nth-of-type(3)').children('h1').attr( "data-1400", "color:rgb(179,230,218);" );
$('.panel:nth-of-type(3)').children('h1').attr( "data-1600", "color:rgb(180,86,60);" );

skrollr.init();