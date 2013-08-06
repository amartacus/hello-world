document.observe('dom:loaded', function(){
   var change_color_button_el = $('change_color');
    change_color_button_el.observe('click', function(){
       var random_hex_color = [];
       for(var i = 0; i < 6; i++){
           random_hex_color.push((Math.floor((Math.random()* 16))).toString(16));
       } 
       $('content').setStyle({'color': '#'+ random_hex_color.join('')});
       change_color_button_el.setStyle({'color': '#'+ random_hex_color.join('')});
    });
    
});