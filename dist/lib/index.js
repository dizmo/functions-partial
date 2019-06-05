"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* tslint:disable:ban-types interface-name */

require("./Function");
/**
 * Allows  to  bind  *any* argument  using  their names  rather their
 * positions. This approach is more flexible if the initial arguments
 * are to be left unbound. For example, from the function `fn`
 * ```javascript
 * fn(arg_0, arg_1, .., arg_[n-3], arg_[n-2], arg_[n-1])
 * ```
 * we can create a new function `gn` which requires all arguments but
 * the last and the *third last* parameter by applying the
 * ```javascript
 * gn = partial(fn, {arg_[n-3]: val_[n-3], arg_[n-1]: val_[n-1]})
 * ```
 * partial operation.  The invocation  of  `gn`  would be  like  `gn(
 * val_0, val_1, .., val_[n-2])`.  Notice that the relative positions
 * of the *unbound* arguments is left intact.
 */


function partial(fn, args) {
  return fn.partial(args);
}

exports.partial = partial;
exports["default"] = partial;
//# sourceMappingURL=index.js.map