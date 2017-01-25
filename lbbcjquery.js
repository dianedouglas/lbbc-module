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
  
  // add plain anchor tag for each link after the main content div of the page. Give it a class for styling of "blog-stories-tag"
  for (var i = 0; i < allLinks.length; i++) {
    var currentLink = allLinks[i];
    var htmlToAppend = '';
    if (i === 0) {
      // the links will get inserted one before the next, before the next etc because we user the 'insertAfter' method to add them right after the content.
      // so the first link should not have a comma after it.
      htmlToAppend = '<a class="blog-stories-tag" href="' + currentLink.currentHref + '">' + currentLink.currentText + '</a>';
    } else {
      htmlToAppend = '<a class="blog-stories-tag" href="' + currentLink.currentHref + '">' + currentLink.currentText + ', </a>';
    };
    $(htmlToAppend).insertAfter('.node-blog-stories--full .content');
  };
 
  // This HTML is taken from ADDITIONAL RELATED TOPICS to match styling. Could be changed easily to whatever by replacing this string. Added underline with inline style, could be replaced with custom class.
  var tagsSectionHeaderHTML = '<div style="text-decoration: underline;" class="link-group__title field__label field-secondary-topics__label node-blog-stories__field-secondary-topics-label node-blog-stories__field-secondary-topics-label--full">TAGS</div>';
  // After adding the links, add the "TAGS" header. It is inserted before the list of links because we insert it directly after the main content.
  $(tagsSectionHeaderHTML).insertAfter('.node-blog-stories--full .content');

  // hide the original secondary topics list
  $(".link-group.field.field-secondary-topics.field-type-taxonomy-term-reference").hide();

  // add some space above the "More In" section to match mockup. This is styling but is included in this code since that space should be added with the moved links only
  $('#block-views-manual-more-in-block-1').css("margin-top", "30px");

  // at the end clear out the variable.
  allLinks = [];

  // move the comments
  $('section.comments').prependTo('section.bottom-content');
});
