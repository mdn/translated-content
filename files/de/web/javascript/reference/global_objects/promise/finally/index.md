---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/finally
---
{{JSRef}}

finally () gibt ein {{jsxref ("Promise")}} zurück. Wenn das Promise erfüllt oder abgelehnt wird, wird die angegebene callback-Funktion ausgeführt. Dies stellt eine Möglichkeit für Code bereit, der ausgeführt werden muss, unabhängig davon, ob das Promise erfolgreich erfüllt wurde oder nicht. Auf diese Weise können Sie vermeiden, dass derselbe Code für die beiden Handlern des Promise {{jsxref ("Promise.then", "then ()")}} und {{jsxref ("Promise.catch", "catch ()")}} geschrieben werden muss.

## Syntax

    p.finally(onFinally);

    p.finally(function() {
       // settled (fulfilled or rejected)
    });

### Parameters

- `onFinally`
  - : A {{jsxref("Function")}} called when the `Promise` is settled.

### Return value

Returns a {{jsxref("Promise")}} whose `finally` handler is set to the specified function, `onFinally`.

## Description

The `finally()` method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.

The `finally()` method is very similar to calling `.then(onFinally, onFinally)` however there are couple of differences:

- When creating a function inline, you can pass it once, instead of being forced to either declare it twice, or create a variable for it
- A `finally` callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected. This use case is for precisely when you _do not care_ about the rejection reason, or the fulfillment value, and so there's no need to provide it.
- Unlike `Promise.resolve(2).then(() => {}, () => {})` (which will be resolved with `undefined`), `Promise.resolve(2).finally(() => {})` will be resolved with `2`.
- Similarly, unlike `Promise.reject(3).then(() => {}, () => {})` (which will be fulfilled with `undefined`), `Promise.reject(3).finally(() => {})` will be rejected with `3`.

> **Note:** A `throw` (or returning a rejected promise) in the `finally` callback will reject the new promise with the rejection reason specified when calling `throw()`.

## Examples

```js
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; });
```

## Specifications

| Specification                                                     | Status  | Comment |
| ----------------------------------------------------------------- | ------- | ------- |
| [TC39 proposal](https://github.com/tc39/proposal-promise-finally) | Stage 4 |         |

## Browser compatibility

{{Compat("javascript.builtins.Promise.finally")}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
