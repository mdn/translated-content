---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
---

{{JSRef}}

**`JSON`** 物件包含了解析、或是轉換為 [JavaScript Object Notation](http://json.org/)（{{glossary("JSON")}}）格式的方法。這物件不能被呼叫或建構；而除了它的兩個方法屬性以外，本身也沒有特別的功能。

## 描述

### JavaScript Object Notation

JSON 是序列物件、陣列、數字、字串、布林值、還有 {{jsxref("null")}} 的語法。它建基、但不同於 JavaScript：有些 JavaScript 不是 JSON、而有些 JSON 不是 JavaScript。請參見 [JSON: The JavaScript subset that isn't](http://timelessrepo.com/json-isnt-a-javascript-subset)。

| JavaScript 型別 | 與 JSON 的差別                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 物件與陣列      | 屬性名稱必須是包含在雙引號中的字串；禁止尾後逗號。                                                                                                                                                                                                                                                                                                                                                                                                          |
| 數字            | 數字不可以 0 作為開頭(在 JSON.stringify 0 會被忽略，但是在 JSON.parse 會造成語法錯誤)；小數點前面必須至少有一位數字。                                                                                                                                                                                                                                                                                                                                       |
| 字串            | Only a limited set of characters may be escaped; certain control characters are prohibited; the Unicode line separator ([U+2028](http://unicode-table.com/en/2028/)) and paragraph separator ([U+2029](http://unicode-table.com/en/2029/)) characters are permitted; strings must be double-quoted. See the following example where {{jsxref("JSON.parse()")}} works fine and a {{jsxref("SyntaxError")}} is thrown when evaluating the code as JavaScript: |

```js
const code = '"\u2028\u2029"';
JSON.parse(code); // evaluates to "\u2028\u2029" in all engines
eval(code); // throws a SyntaxError in old engines
```

JSON 的完整語法如下：

```plain
JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

JSONNumber = - PositiveNumber
          or PositiveNumber
PositiveNumber = DecimalNumber
              or DecimalNumber . Digits
              or DecimalNumber . Digits ExponentPart
              or DecimalNumber ExponentPart
DecimalNumber = 0
             or OneToNine Digits
ExponentPart = e Exponent
            or E Exponent
Exponent = Digits
        or + Digits
        or - Digits
Digits = Digit
      or Digits Digit
Digit = 0 through 9
OneToNine = 1 through 9

JSONString = ""
          or " StringCharacters "
StringCharacters = StringCharacter
                or StringCharacters StringCharacter
StringCharacter = any character
                  except " or \ or U+0000 through U+001F
               or EscapeSequence
EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
              or \u HexDigit HexDigit HexDigit HexDigit
HexDigit = 0 through 9
        or A through F
        or a through f

JSONObject = { }
          or { Members }
Members = JSONString : JSON
       or Members , JSONString : JSON

JSONArray = [ ]
         or [ ArrayElements ]
ArrayElements = JSON
             or ArrayElements , JSON
```

Insignificant whitespace may be present anywhere except within a `JSONNumber` (numbers must contain no whitespace) or `JSONString` (where it is interpreted as the corresponding character in the string, or would cause an error). The tab character ([U+0009](http://unicode-table.com/en/0009/)), carriage return ([U+000D](http://unicode-table.com/en/000D/)), line feed ([U+000A](http://unicode-table.com/en/000A/)), and space ([U+0020](http://unicode-table.com/en/0020/)) characters are the only valid whitespace characters.

## 方法

- {{jsxref("JSON.parse()")}}
  - : 解析 JSON 字串，能改變給定值和屬性、接著回傳解析值。
- {{jsxref("JSON.stringify()")}}
  - : 回傳給定的 JSON 對應字串，可自行決定只想包括哪些特定屬性、或替換的屬性值。

## Polyfill

舊版瀏覽器並不支援 `JSON`。你可以在程式碼開頭插入以下程式碼，以解決這個問題。這個程式碼能實做不支援原生 `JSON` 物件的瀏覽器（如 Internet Explorer 6）。

以下演算法能仿製原生 `JSON` 物件。

```js
if (!window.JSON) {
  window.JSON = {
    parse: function (sJSON) {
      return eval("(" + sJSON + ")");
    },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var isArray =
        Array.isArray ||
        function (a) {
          return toString.call(a) === "[object Array]";
        };
      var escMap = {
        '"': '\\"',
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
      };
      var escFunc = function (m) {
        return (
          escMap[m] ||
          "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1)
        );
      };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return "null";
        } else if (typeof value === "number") {
          return isFinite(value) ? value.toString() : "null";
        } else if (typeof value === "boolean") {
          return value.toString();
        } else if (typeof value === "object") {
          if (typeof value.toJSON === "function") {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = "[";
            for (var i = 0; i < value.length; i++)
              res += (i ? ", " : "") + stringify(value[i]);
            return res + "]";
          } else if (toString.call(value) === "[object Object]") {
            var tmp = [];
            for (var k in value) {
              // in case "hasOwnProperty" has been shadowed
              if (hasOwnProperty.call(value, k))
                tmp.push(stringify(k) + ": " + stringify(value[k]));
            }
            return "{" + tmp.join(", ") + "}";
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })(),
  };
}
```

More complex well-known [polyfills](http://remysharp.com/2010/10/08/what-is-a-polyfill/) for the `JSON` object are [JSON2](https://github.com/douglascrockford/JSON-js) and [JSON3](http://bestiejs.github.com/json3).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.toJSON()")}}
