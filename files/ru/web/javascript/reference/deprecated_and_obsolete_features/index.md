---
title: Deprecated and obsolete features
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{JsSidebar("More")}}

This page lists features of JavaScript that are deprecated (that is, still available but planned for removal) and obsolete (that is, no longer usable).

## Deprecated features

These deprecated features can still be used, but should be used with caution because they are expected to be removed entirely sometime in the future. You should work to remove their use from your code.

### RegExp properties

The following properties are deprecated. This does not affect their use in {{jsxref("String.replace", "replacement strings", "", 1)}}:

| Свойство                                          | Описание                                                                                                                                                   |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.n", "$1-$9")}}                   | Parenthesized substring matches, if any. **Warning:** Using these properties can result in problems, since browser extensions can modify them. Avoid them! |
| {{jsxref("RegExp.input", "$_")}}                  | Смотрите `input`.                                                                                                                                          |
| {{jsxref("RegExp.multiline", "$*")}}              | Смотрите `multiline`.                                                                                                                                      |
| {{jsxref("RegExp.lastMatch", "$&amp;")}}          | Смотрите `lastMatch`.                                                                                                                                      |
| {{jsxref("RegExp.lastParen", "$+")}}              | Смотрите `lastParen`.                                                                                                                                      |
| {{jsxref("RegExp.leftContext", "$`")}}            | Смотрите `leftContext`.                                                                                                                                    |
| {{jsxref("RegExp.rightContext", "$'")}}           | Смотрите `rightContext`.                                                                                                                                   |
| {{jsxref("RegExp.input", "input")}}               | The string against which a regular expression is matched.                                                                                                  |
| {{jsxref("RegExp.lastMatch", "lastMatch")}}       | The last matched characters.                                                                                                                               |
| {{jsxref("RegExp.lastParen", "lastParen")}}       | The last parenthesized substring match, if any.                                                                                                            |
| {{jsxref("RegExp.leftContext", "leftContext")}}   | The substring preceding the most recent match.                                                                                                             |
| {{jsxref("RegExp.rightContext", "rightContext")}} | The substring following the most recent match.                                                                                                             |

The following are now properties of `RegExp` instances, no longer of the `RegExp` object:

| Свойство                                      | Описание                                                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.global", "global")}}         | Whether or not to test the regular expression against all possible matches in a string, or only against the first. |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | Whether or not to ignore case while attempting a match in a string.                                                |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}   | The index at which to start the next match.                                                                        |
| {{jsxref("RegExp.multiline", "multiline")}}   | Whether or not to search in strings across multiple lines.                                                         |
| {{jsxref("RegExp.source", "source")}}         | The text of the pattern.                                                                                           |

### RegExp methods

- The {{jsxref("RegExp.compile", "compile()")}} method is deprecated.
- The `valueOf` method is no longer specialized for `RegExp`. Use {{jsxref("Object.valueOf()")}}.

### Function properties

- The {{jsxref("Global_Objects/Function/caller", "caller")}} and {{jsxref("Global_Objects/Function/arguments", "arguments")}} properties are deprecated, because they leak the function caller. Instead of the arguments property, you should use the {{jsxref("Functions/arguments", "arguments")}} object inside function closures.

### Legacy generator

- {{jsxref("Statements/Legacy_generator_function", "Legacy generator function statement")}} and {{jsxref("Operators/Legacy_generator_function", "Legacy generator function expression")}} are deprecated. Use {{jsxref("Statements/function*", "function* statement")}} and {{jsxref("Operators/function*", "function* expression")}} instead.
- {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} and {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} are deprecated.

### Iterator

- {{jsxref("Global_Objects/StopIteration", "StopIteration")}} устарел.
- {{jsxref("Global_Objects/Iterator", "Iterator")}} устарел.

### Object methods

- {{jsxref("Object.watch", "watch")}} and {{jsxref("Object.unwatch", "unwatch")}} are deprecated. Use {{jsxref("Proxy")}} instead.
- `__iterator__` устарел.
- `Object.prototype.__noSuchMethod__` is deprecated. Use {{jsxref("Proxy")}} instead.

### Методы даты

- {{jsxref("Global_Objects/Date/getYear", "getYear")}} и {{jsxref("Global_Objects/Date/setYear", "setYear")}} are affected by the Year-2000-Problem and have been subsumed by {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} и {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.
- You should use {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} instead of the deprecated {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} method in new code.
- {{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} is deprecated.

### Functions

- {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}} are deprecated. Use regular {{jsxref("Operators/function", "functions")}} or {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} instead.

### Proxy

- [Proxy.create](/ru/docs/Archive/Web/Old_Proxy_API) and [Proxy.createFunction](/ru/docs/Archive/Web/Old_Proxy_API) are deprecated. Use {{jsxref("Proxy")}} instead.
- The following traps are obsolete:

  - `hasOwn` ({{bug(980565)}}, Firefox 33).
  - `getEnumerablePropertyKeys` ({{bug(783829)}}, Firefox 37)
  - `getOwnPropertyNames` ({{bug(1007334)}}, Firefox 33)
  - `keys` ({{bug(1007334)}}, Firefox 33)

### Escape sequences

- Octal escape sequences (\ followed by one, two, or three octal digits) are deprecated in string and regular expression literals.
- The {{jsxref("Global_Objects/escape", "escape")}} and {{jsxref("Global_Objects/unescape", "unescape")}} functions are deprecated. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} to encode and decode escape sequences for special characters.

### Методы строк

- [HTML wrapper methods](/ru/docs/tag/HTML%20wrapper%20methods) like {{jsxref("String.prototype.fontsize")}} and {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.quote")}} is removed from Firefox 37.
- non standard `flags` parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, and {{jsxref("String.prototype.replace")}} are deprecated.
- {{jsxref("String.prototype.substr")}} probably won't be removed anytime soon, but it's defined in [Annex B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr) of the ECMA-262 standard, whose [introduction](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) states: "… Programmers should not use or assume the existence of these features and behaviours when writing new ECMAScript code. …"

## Obsolete features

These obsolete features have been entirely removed from JavaScript and can no longer be used as of the indicated version of JavaScript.

### Объект

| Свойство                                                            | Описание                                                                       |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| {{jsxref("Global_Objects/Object/count", "**count**")}}              | Returns the number of enumerable properties directly on a user-defined object. |
| {{jsxref("Global_Objects/Object/Parent", "**parent**")}}            | Points to an object's context.                                                 |
| {{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}} | Evaluates a string of JavaScript code in the context of the specified object.  |
| {{jsxref("Object.observe()")}}                                      | Asynchronously observing the changes to an object.                             |
| {{jsxref("Object.unobserve()")}}                                    | Remove observers.                                                              |
| {{jsxref("Object.getNotifier()")}}                                  | Creates an object that allows to synthetically trigger a change.               |

### Function

| Свойство                                             | Описание                    |
| ---------------------------------------------------- | --------------------------- |
| {{jsxref("Global_Objects/Function/arity", "arity")}} | Number of formal arguments. |

### Массив

| Свойство                        | Описание                                   |
| ------------------------------- | ------------------------------------------ |
| {{jsxref("Array.observe()")}}   | Асинхронный просмотр изменений в массивах. |
| {{jsxref("Array.unobserve()")}} | Remove observers.                          |

### Число

- {{jsxref("Number.toInteger()")}}

### ParallelArray

- {{jsxref("ParallelArray")}}

### Statements

- {{jsxref("Statements/for_each...in", "for each...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- Destructuring {{jsxref("Statements/for...in", "for...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- let blocks and let expressions are obsolete.

### E4X

Смотрите [E4X](/ru/docs/Archive/Web/E4X).

### Sharp variables

Смотрите [Sharp variables in JavaScript](/ru/docs/Archive/Web/Sharp_variables_in_JavaScript).
