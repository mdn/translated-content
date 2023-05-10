---
title: Deprecated and obsolete features
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{JsSidebar("More")}}

본 페이지는 자바스크립트의 제외 예정인(즉, 아직 사용할 수 있지만 제거 계획이 있는) 기능과 제외된(즉, 더 이상 사용할 수 없는) 기능을 나열합니다.

## 제외 예정 기능

아래 기능은 아직 사용할 수 있지만, 언젠가 제거될 예정이므로 주의를 기울여야 합니다. 작성한 코드가 항목 중 하나를 포함하고 있다면 제거해야 합니다.

### RegExp 속성

아래 속성은 제외 예정입니다. 이는 {{jsxref("String.replace")}} 사용에 영향을 주지 않습니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
      <td>
        <p>
          Parenthesized substring matches, if any.<br /><strong
            >Warning:</strong
          >
          Using these properties can result in problems, since browser
          extensions can modify them. Avoid them!
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "$_")}}</td>
      <td>See <code>input</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.multiline", "$*")}}</td>
      <td>See <code>multiline</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
      <td>See <code>lastMatch</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "$+")}}</td>
      <td>See <code>lastParen</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
      <td>See <code>leftContext</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
      <td>See <code>rightContext</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "input")}}</td>
      <td>The string against which a regular expression is matched.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
      <td>The last matched characters.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
      <td>The last parenthesized substring match, if any.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
      <td>The substring preceding the most recent match.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
      <td>The substring following the most recent match.</td>
    </tr>
  </tbody>
</table>

The following are now properties of `RegExp` instances, no longer of the `RegExp` object:

| Property                                                     | Description                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.global", "global")}}             | Whether or not to test the regular expression against all possible matches in a string, or only against the first. |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | Whether or not to ignore case while attempting a match in a string.                                                |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}     | The index at which to start the next match.                                                                        |
| {{jsxref("RegExp.multiline", "multiline")}}     | Whether or not to search in strings across multiple lines.                                                         |
| {{jsxref("RegExp.source", "source")}}             | 패턴의 텍스트.                                                                                                     |

### RegExp 메서드

- {{jsxref("RegExp.compile", "compile()")}} 메서드는 제외될 예정입니다.
- `valueOf` 메서드는 더 이상 `RegExp` 전용이 아닙니다. {{jsxref("Object.valueOf()")}}를 사용하세요.

### Function 속성

- The {{jsxref("Global_Objects/Function/caller", "caller")}} and {{jsxref("Global_Objects/Function/arguments", "arguments")}} properties are deprecated, because they leak the function caller. Instead of the arguments property, you should use the {{jsxref("Functions/arguments", "arguments")}} object inside function closures.

### Legacy generator

- {{jsxref("Statements/Legacy_generator_function", "Legacy generator function statement")}} and {{jsxref("Operators/Legacy_generator_function", "Legacy generator function expression")}} are deprecated. Use {{jsxref("Statements/function*", "function* statement")}} and {{jsxref("Operators/function*", "function* expression")}} instead.
- {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} and {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} are deprecated.

### Iterator

- {{jsxref("Global_Objects/StopIteration", "StopIteration")}} is deprecated.
- {{jsxref("Global_Objects/Iterator", "Iterator")}} is deprecated.

### Object methods

- {{jsxref("Object.watch", "watch")}} and {{jsxref("Object.unwatch", "unwatch")}} are deprecated. Use {{jsxref("Proxy")}} instead.
- `__iterator__` is deprecated.
- `Object.prototype.__noSuchMethod__` is deprecated. Use {{jsxref("Proxy")}} instead.

### Date methods

- {{jsxref("Global_Objects/Date/getYear", "getYear")}} and {{jsxref("Global_Objects/Date/setYear", "setYear")}} are affected by the Year-2000-Problem and have been subsumed by {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} and {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.
- You should use {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} instead of the deprecated {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} method in new code.
- {{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} is deprecated.

### Functions

- {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}} are deprecated. Use regular {{jsxref("Operators/function", "functions")}} or {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} instead.

### Proxy

- [Proxy.create](/en-US/docs/Archive/Web/Old_Proxy_API) and [Proxy.createFunction](/en-US/docs/Archive/Web/Old_Proxy_API) are deprecated. Use {{jsxref("Proxy")}} instead.
- The following traps are obsolete:

  - `hasOwn` ([Firefox bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([Firefox bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([Firefox bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([Firefox bug 1007334](https://bugzil.la/1007334), Firefox 33)

### Escape sequences

- Octal escape sequences (\ followed by one, two, or three octal digits) are deprecated in string and regular expression literals.
- The {{jsxref("Global_Objects/escape", "escape")}} and {{jsxref("Global_Objects/unescape", "unescape")}} functions are deprecated. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} to encode and decode escape sequences for special characters.

### String methods

- [HTML wrapper methods](/en-US/docs/tag/HTML%20wrapper%20methods) like {{jsxref("String.prototype.fontsize")}} and {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.quote")}} is removed from Firefox 37.
- non standard `flags` parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, and {{jsxref("String.prototype.replace")}} are deprecated.

## Obsolete features

These obsolete features have been entirely removed from JavaScript and can no longer be used as of the indicated version of JavaScript.

### Object

- The [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) accessors are deprecated. Use [`Object.getPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) and [`Object.setPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) instead. This does not apply to the `__proto__` literal key in object literals.
- The [`Object.prototype.__defineGetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), and [`Object.prototype.__lookupSetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) methods are deprecated. Use [`Object.getOwnPropertyDescriptor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) and [`Object.defineProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) instead.

### Function

| Property                                                             | Description                 |
| -------------------------------------------------------------------- | --------------------------- |
| {{jsxref("Global_Objects/Function/arity", "arity")}} | Number of formal arguments. |

### Array

<table class="standard-table">
  <tbody>
    <tr>
      <td>Property</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>{{jsxref("Array.observe()")}}</td>
      <td>Asynchronously observing changes to Arrays.</td>
    </tr>
    <tr>
      <td>{{jsxref("Array.unobserve()")}}</td>
      <td>Remove observers.</td>
    </tr>
  </tbody>
</table>

### Number

- {{jsxref("Number.toInteger()")}}

### ParallelArray

- {{jsxref("ParallelArray")}}

### Statements

- {{jsxref("Statements/for_each...in", "for each...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- Destructuring {{jsxref("Statements/for...in", "for...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- let blocks and let expressions are obsolete.

### E4X

See [E4X](/en-US/docs/Archive/Web/E4X) for more information.

### Sharp variables

See [Sharp variables in JavaScript](/en-US/docs/Archive/Web/Sharp_variables_in_JavaScript) for more information.
