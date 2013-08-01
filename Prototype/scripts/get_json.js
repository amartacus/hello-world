var content = $('content');

content.childElements('.my_information').each(function(e){
    e.remove();
})