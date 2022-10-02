---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
---

{{JSRef("Global_Objects", "Date")}} {{ Deprecated_header() }}

The **`toGMTString()`** method converts a date to a string, using Internet GMT conventions. The exact format of the value returned by `toGMTString` varies according to the platform and browser, in general it should represent a human readable date string.

**Note**: `toGMTString` is deprecated and should no longer be used, it's only there for backwards compatibility, use {{jsxref("Date.toUTCString", "toUTCString()")}} instead.

## Syntax

```plain
dateObj.toGMTString()
```

## Examples

### Example: Using `toGMTString`

In this example, the `toGMTString` method converts the date to GMT (UTC) using the operating system's time-zone offset and returns a string value that is similar to the following form. The exact format depends on the platform.

```js
var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
