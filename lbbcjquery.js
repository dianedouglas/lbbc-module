jQuery(document).ready(function($){
  var allLinks = [];
  $('.node-blog-stories__field-secondary-topics-item a').each(function(index){
    var currentHref = $(this).attr('href');
    var currentText = $(this).text();
    allLinks[index] = { 
      currentText: currentText,
      currentHref: currentHref
    };
  });
  console.log(allLinks);
  // $("<p>Test</p>").insertAfter('.node-blog-stories--full .content');
  
  // add plain anchor tag for each link after the main content div of the page. Give it a class for styling of "blog-stories-tag"
  for (var i = 0; i < allLinks.length; i++) {
    var currentLink = allLinks[i];
    $('<a class="blog-stories-tag" href="' + currentLink.currentHref + '">' + currentLink.currentText + '</a>').insertAfter('.node-blog-stories--full .content');
  };
  
  // at the end clear out the variable.
  allLinks = [];
});
