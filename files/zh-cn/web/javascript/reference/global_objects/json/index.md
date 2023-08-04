---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
---

{{JSRef}}

**`JSON`** 对象包含两个方法：用于解析 [JavaScript Object Notation](https://json.org/)（{{glossary("JSON")}}）的 `parse()` 方法，以及将对象/值转换为 JSON 字符串的 `stringify()` 方法。除了这两个方法，JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。

## 描述

### JavaScript Object Notation

**JSON** 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 {{jsxref("null")}} 。它基于 JavaScript 语法，但与之不同：**JavaScript 不是 JSON，JSON 也不是 JavaScript**。参考 [JSON：并不是 JavaScript 的子集](http://timelessrepo.com/json-isnt-a-javascript-subset)。

<table>
 <caption>JavaScript 与 JSON 的区别</caption>
 <thead>
  <tr>
   <th scope="col">JavaScript 类型</th>
   <th scope="col">JSON 的不同点</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>对象和数组</td>
   <td>
    <p>属性名称必须是双引号括起来的字符串；最后一个属性后不能有逗号。</p>
   </td>
  </tr>
  <tr>
   <td>数值</td>
   <td>禁止出现前导零（JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；如果有小数点，则后面至少跟着一位数字。</td>
  </tr>
  <tr>
   <td>字符串</td>
   <td>
    <p>只有有限的一些字符可能会被转义；禁止某些控制字符；Unicode 行分隔符（<a href="http://unicode-table.com/cn/2028/">U+2028</a>）和段分隔符（<a href="http://unicode-table.com/cn/2029/">U+2029</a>）被允许 ; 字符串必须用双引号括起来。请参考下面的示例，可以看到 {{jsxref("JSON.parse()")}} 能够正常解析，但将其当作 JavaScript 解析时会抛出 {{jsxref("SyntaxError")}} 错误：</p>

  <pre class="brush: js">
let code = '"\u2028\u2029"';
JSON.parse(code); // 正常
eval(code); // 错误
</pre>
   </td>
  </tr>
 </tbody>
</table>

完整的 JSON 语法定义如下：

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

在`JSONNumber`（数字内部不允许包含空格）或`JSONString`（字符串内部的空格被解释为相应的字符，否则就有问题了）之外的任何位置可以有多余的空白字符。JSON 只支持这些空白字符：制表符（[U+0009](http://unicode-table.com/en/0009/)），回车（[U+000D](http://unicode-table.com/en/000D/)），换行（[U+00](http://unicode-table.com/en/0020/)0A）以及空格（[U+0020](http://unicode-table.com/en/0020/)）。

## 方法

- {{jsxref("JSON.parse()")}}
  - : 解析 JSON 字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性，在返回之前进行某些修改。
- {{jsxref("JSON.stringify()")}}
  - : 返回与指定值对应的 JSON 字符串，可以通过额外的参数，控制仅包含某些属性，或者以自定义方法来替换某些 key 对应的属性值。

## Polyfill

`JSON`对象可能不被老版本的浏览器支持。可以将下面的代码放到 JS 脚本最开始的位置，这样就可以在没有原生支持 JSON 对象的浏览器（如 IE6）中使用 `JSON`对象。

以下算法是对原生`JSON`对象的模仿：

```js
if (!window.JSON) {
  window.JSON = {
    parse: function (sJSON) {
      return eval("(" + sJSON + ")");
    },
    stringify: (function () {
      var toString = Object.prototype.toString;
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
              if (value.hasOwnProperty(k))
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

业界更专业，更强大的`JSON`对象 [polyfills](http://remysharp.com/2010/10/08/what-is-a-polyfill/) 是 [JSON2](https://github.com/douglascrockford/JSON-js) 和 [JSON3](http://bestiejs.github.com/json3)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.toJSON()")}}
