---
title: 樣板字面值
slug: Web/JavaScript/Reference/Template_literals
---

樣板字面值（Template literals）是允許嵌入運算式的字串字面值（string literals）。你可以透過樣板字面值來使用多行字串及字串內插（string interpolation）功能。他們在 ES2015 規範的先行版本中被稱為「樣板字串（template strings）」。

## 語法

```plain
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

## 描述

樣板字面值（Template literals）被反引號（back-tick，[重音符號](https://zh.wikipedia.org/wiki/%E9%87%8D%E9%9F%B3%E7%AC%A6)）：\` \` 字元封閉，代替了雙或單引號。樣板字面值可以包含由錢字元及花括號所構成（`${expression}`）的佔位符（placeholders）。這個在佔位符中的運算式以及在它們之間的文字會被傳入一個函式。預設函式只是將這些部分組合成一個單一的字串。如果在樣板字面值前有一個運算式（`tag` here），則此樣板字串被稱為「標籤樣板字面值（tagged template literal）」。在此情況下，標籤運算式（通常是一個函式）會被呼叫來處理樣板字面值，讓你可以在函式回傳之前進行操作。要在樣板字面值中跳脫一個反引號，可以於反引號前加上一個反斜線（backslash）**\\** 。

```js
`\`` === "`"; // --> true
```

### 多行字串

任何在樣板字面值中使用、插入的換行符號，都是樣板字面值的一部份。在普通的字串中，我們需要使用如下的語法以達到換行的效果：

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

但使用樣板字面值，你只需要撰寫如下所示的程式碼，就能達到同樣的效果：

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### 運算式內插

要在普通的字串中內嵌運算式，我們必須使用如下語法：

```js
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

現在有了樣板字面值，我們可以用一種更優雅的寫法，讓語法更具可讀性：

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### 巢狀樣板

In certain times, nesting a template is the easiest and perhaps more readable way to have configurable strings. Within a backticked template it is simple to allow inner backticks simply by using them inside a placeholder `${ }` within the template. For instance, if condition a is true: then return this templated literal.

In ES5:

```js
var classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

In ES2015 with template literals and without nesting:

```js
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

In ES2015 with nested template literals:

```js
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### 標籤樣板字面值

標籤樣板字面值是一種更高級的樣板字面值形式，允許你透過標籤函數操作樣板字面值的輸出。標籤函數的第一個參數是一字串陣列，其餘參數則是處理過的表達式。最終，你可以返回一個經處理後的字串，甚至是完全不一樣的東西（如下述第二個範例中）。標籤函數的名稱可以是任何你想要的。

```js
var person = "Mike";
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${person} is a ${age}`;

console.log(output);
// that Mike is a youngster
```

標籤函數不一定要回傳一個字串，如下列範例：

```js
function template(strings, ...keys) {
  return function (...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function (key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure("Y", "A"); // "YAY!"
var t2Closure = template`${0} ${"foo"}!`;
t2Closure("Hello", { foo: "World" }); // "Hello World!"
```

### 原始字串

標籤函數的第一個參數，帶有一個特殊的屬性「 `raw` 」，允許你獲取原始輸入的、未處理任何[轉義序列](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings)的字串值。

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

此外, 使用 {{jsxref("String.raw()")}} 方法建立的原始字串，也與預設的樣板函數和字串串接會建立的字串相同。

```js
var str = String.raw`Hi\n${2 + 3}!`;
// "Hi\n5!"

str.length;
// 6

str.split("").join(",");
// "H,i,\,n,5,!"
```

### 標籤樣板字面值和跳脫序列

在 ES2016 的規範中，標籤樣板字面值遵守下列跳脫序列（escape sequences）規則：

- 萬國碼 (Unicode) 跳脫序列由 "\u" 作為開頭, 例： `\u00A9`
- 萬國碼位 (Unicode code point) 由 "\u{}" 作為開頭, 例： `\u{2F804}`
- 十六進位制碼由 "\x" 作為開頭, 例： `\xA9`
- 十進位制碼由 "\\" 作為開頭, 例： \251

這表示像是下述的標籤樣板字面值是有問題的，因為根據 ECMAScript 規範，一個語法分析器會嘗試以萬國碼轉義序列去解析它，然後發現序列有誤：

```js
latex`\unicode`;
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
```

Tagged template literals should allow the embedding of languages (for example [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language), or [LaTeX](https://en.wikipedia.org/wiki/LaTeX)), where other escapes sequences are common. The ECMAScript proposal [Template Literal Revision](https://tc39.es/proposal-template-literal-revision/) (stage 4, to be integrated in the ECMAScript 2018 standard) removes the syntax restriction of ECMAScript escape sequences from tagged template literals.

However, illegal escape sequence must still be represented in the "cooked" representation. They will show up as {{jsxref("undefined")}} element in the "cooked" array:

l be represented in the "cooked" representation. They will show up as {{jsxref("undefined")}} element in the "cooked" array:

```js
function latex(str) {
  return { cooked: str[0], raw: str.raw[0] };
}

latex`\unicode`;

// { cooked: undefined, raw: "\\unicode" }
```

Note that the escape sequence restriction is only dropped from _tagged_ template literals and not from _untagged_ template literals:

```js example-bad
let bad = `bad escape sequence: \unicode`;
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
