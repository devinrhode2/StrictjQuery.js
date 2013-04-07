StrictjQuery.js
===============

Wish jQuery would bark when you had a bad selector?
Maybe `$('#buttonn')` was a typo or `#button` actually isn't on the page.
With StrictjQuery.js, an error will be thrown so you can see and fix the issue.
When you want to fail safely, jQuery's default behavior, do this: `$('#button', failsafe)`
