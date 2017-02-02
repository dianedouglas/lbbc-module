# _LBBC Module_

#### _Custom Drupal module to customize certain page elements with jQuery_

#### By Diane Douglas

## Description

#### [lbbc.org: Living Beyond Breast Cancer](http://www.lbbc.org/)

I've been doing some contract work with We Speak Brand in Philadelphia updating the Drupal website for the the charity organization Living Beyond Breast Cancer. It needed to have some security issues fixed by updating Drupal Core and various modules to the latest versions, and this module was built to take care of some display issues on their blog page. It is easily expanded to take care of other tasks that require jQuery.

## Setup/Installation Requirements

This is pretty specialized to their site, but the steps to install are:

1. Download the module from GitHub.
2. Place it into /sites/all/modules and enable the module in the Module Administration Page. 
3. The .module file uses `hook_node_view` to load the jQuery file only if nodes of a particular type and view mode are being viewed. This could easily be expanded to apply jQUery logic to other nodes by modifying the if statement in this hook.
4. The jQuery rewrites a tags section and moves the comments form to a different place on the page. 

Due to the heavily customized nature of the construction of their theme, it was much cleaner to use jQuery to modify the page like this rather than modify the theme template files. Also, the functionality of this module is purely concerned with the blogging section of the site so it made structural sense to me to keep it all in one place. 

Later, if needed, other jQuery files could of course be added with other hooks, or by modifying the if statement in the current hook to look for other nodes or view modes. The purpose of the module is to keep all jQuery related DOM customization in one place.

## Support and contact details

Please feel free to fork this repository and submit pull requests back. You can also contact me here:

* Email: diane.douglas1@gmail.com
* My Website: [www.MelodicCode.com](http://www.melodiccode.com)

## Technologies Used

* Drupal
* PHP
* jQuery

**By Diane Douglas**