/* documentation comment

## StrictjQuery.js

#### Wish jQuery would bark when you had a bad selector? Maybe `$('#buttonn')` was a typo or `#button` actually isn't on the page. With StrictjQuery.js, an error will be thrown so you can see and fix the issue. When you want to fail safely, jQuery's default behavior, do this: `$('#button', failsafe)`

Download this file and rename it from `StrictjQuery.js.markdown` to `StrictjQuery.js` to use (otherwise you loose this documentation)
```javascript
*/
;(function strictjQuery() {
  'use strict';

  //could probably intercept $.fn.init instead
  window.oldjQuery = $;
  $ = function strictSelectorOverride( selector, context ) {
    
    //if it's not a string or clearly html..
    if ( typeof selector !== 'string'
         || ( selector.charAt(          0          ) === '<' &&
              selector.charAt( selector.length - 1 ) === '>' &&
              selector.length >= 3 )
       )
    {
      return oldjQuery.apply(this, [].slice.call(arguments, 0) );
    }
    
    if ( context === 'failsafe' ) {
      return oldjQuery.call(this, selector); //don't do apply because context is 'failsafe'
    } else {
      var result = oldjQuery.apply(this, [].slice.call(arguments, 0) );
      if (typeof result.length === 'number') {
        if (result.length > 0) {
          return result;
        } else {
          return $.badSelectorAction.call(this, selector, context);
        }
      } else {
        //.length is undefined or not a number, result is unknown, just return it.
        return result;
      }
    }
  };

  
  window.failsafe = 'failsafe';
  
  //On failure, StrictjQuery throws it's own `SelectorError` which you can detect like this:
  /**
   * try {
   *   $('#tricky-node').hide()
   * } catch ( e ) {
   *   if ( e instanceof SelectorError ) {
   *     //e.selector === '#tricky-node'
   *   } else {
   *     throw e;
   *   }
   * }
   */
  window.SelectorError = function SelectorErrorFn( selector, context ) {
    this.message = this.selector = selector;
                   this.context  = context;
  };
  SelectorError.prototype = new Error();
  
  // Don't like throwing errors? Defined $.badSelectorAction to be whatever you want.
  $.badSelectorAction = function badSelectorActionFn( selector, context ) {
    throw new SelectorError( selector, context );
    //In your user defined version, you can return a jQuery object here to maintain chaining
  };

})();
/*
```
*/
