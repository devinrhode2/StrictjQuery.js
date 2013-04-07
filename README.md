StrictjQuery.js
===============

#### Wish jQuery would bark when you had a bad selector? Maybe `$('#buttonn')` was a typo or `#button` actually isn't on the page. With StrictjQuery.js, an error will be thrown so you can see and fix the issue. When you want to fail safely, jQuery's default behavior, do this: `$('#button', failsafe)`

## Install with bower

```
sudo npm install bower -g
bower install strictjquery
```
This places StrictjQuery at `components/strictjquery/StrictjQuery.js`.
If you don't have npm+node, download npm with Node: http://nodejs.org. npm only comes with node.

Lastly, include the script, perhaps with a script tag:

```
<script src="components/strictjquery/StrictjQuery.js"></script>
```
