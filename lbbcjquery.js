var allLinks = [];
jQuery(document).ready(function($){
  $('.node-blog-stories__field-secondary-topics-item a').each(function(index){
    var currentLink = $(this).attr('href');
    var currentText = $(this).text();
    allLinks[index] = { 
      currentText: currentText,
      currentLink: currentLink
    };
  });
  console.log(allLinks);
  allLinks = [];
  $("<p>Test</p>").insertAfter('.node-blog-stories--full .content');
});
