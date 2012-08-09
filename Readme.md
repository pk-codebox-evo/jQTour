jQuery Tour
-----------

My simple implementation of a Tour plugins out there.

1. I am relying on absolute positioned divs. These placeholders are to injected dynamically into DOM.
2. With every click, the DOM is 1st cleared of all the elements and then a dynamically created element has to be placed dynamically as positioned by the CSS class.
3. Takes an array of JSON objects containing the *TITLE*  and *DESCRIPTION* of the placeholder. The array order determines the order of the placeholders to be displayed.

TODO:

1. Make a jQuery Plugin.
2. Not fully tested.

[jsFiddle Implementation](http://jsfiddle.net/abhimehta/Brbps/)


Inspired from

1. http://www.zurb.com/playground/jquery-joyride-feature-tour-plugin
2. http://codecanyon.net/item/jquery-tour-the-flexible-tour-plugin/1052564
