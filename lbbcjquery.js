jQuery(document).ready(function($){
  $('.node-blog-stories__field-secondary-topics-item a').each(function(){
    var currentLink = $(this).attr('href');
    var currentText = $(this).text();
    console.log(currentText);
  });
});