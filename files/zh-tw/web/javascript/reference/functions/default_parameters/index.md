---
title: 預設參數( Default parameters )
slug: Web/JavaScript/Reference/Functions/Default_parameters
---

{{jsSidebar("Functions")}}

**函式預設參數** 允許沒有值傳入或是傳入值為 `undefined 的情況下，參數能以指定的預設值初始化。`

## 語法

```plain
function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
   要執行的程序
}
```

## 說明

在 JavaScript 中，函式的參數預設值都為 `{{jsxref("undefined")}} 。然而，指定不同的預設值可能在一些場景很有用。這也是函式參數預設值可以幫上忙的地方。`

以往設定預設值有個普遍方法：在函式的內容裡檢查傳入參數是否為 `undefined ，如果是的話，爲他指定一個值。如下列範例，若函式被呼叫時，並沒有提供 b 的值，它的值就會是 undefined，在計算 a*b 時，以及呼叫 multiply 時，就會回傳 NaN。然而這在範例的第二行被阻止了：`:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5); // 5
```

有了 ES2015 的預設參數，再也不用於函式進行檢查了，現在只要簡單的在函式的起始處為 b 指定 1 的值：

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5); // 5
```

## 範例

### 傳入 `undefined`

這邊第二段函式呼叫中，僅管第二個傳入參數在呼叫時明確地指定為 undefined（雖不是 null），其顏色參數的值是預設值（rosybrown）。

```js
function setBackgroundColor(element, color = "rosybrown") {
  element.style.backgroundColor = color;
}

setBackgroundColor(someDiv); // color set to 'rosybrown'
setBackgroundColor(someDiv, undefined); // color set to 'rosybrown' too
setBackgroundColor(someDiv, "blue"); // color set to 'blue'
```

### 呼叫時賦予值

跟 Python 等語言不同的地方是，先前預設的代數值會拿來進行函式內的程序，也因此在函式呼叫的時候，會建立新物件。

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); //[1]
append(2); //[2], 而非 [1, 2]
```

諸如此類的做法，也適用在函式和變量。

```js
function callSomething(thing = something()) {
  return thing;
}

function something() {
  return "sth";
}

callSomething(); //sth
```

### 預設的參數中，先設定的可提供之後設定的使用

先前有碰到的參數，後來的即可使用。

```js
function singularAutoPlural(
  singular,
  plural = singular + "們",
  rallyingCry = plural + "，進攻啊!!!",
) {
  return [singular, plural, rallyingCry];
}

//["壁虎","壁虎們", "壁虎，進攻啊!!!"]
singularAutoPlural("壁虎");

//["狐狸","火紅的狐狸們", "火紅的狐狸們，進攻啊!!!"]
singularAutoPlural("狐狸", "火紅的狐狸們");

//["鹿兒", "鹿兒們", "鹿兒們 ... 有所好轉"]
singularAutoPlural(
  "鹿兒",
  "鹿兒們",
  "鹿兒們平心靜氣的 \
   向政府請願，希望事情有所好轉。",
);
```

This functionality is approximated in a straight forward fashion and demonstrates how many edge cases are handled.

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### 函式內再定義函式

Introduced in Gecko 33. Functions declared in the function body cannot be referred inside default parameters and throw a {{jsxref("ReferenceError")}} (currently a {{jsxref("TypeError")}} in SpiderMonkey, see [Firefox bug 1022967](https://bugzil.la/1022967)). Default parameters are always executed first, function declarations inside the function body evaluate afterwards.

```js
// 行不通的！ 最後會丟出 ReferenceError。
function f(a = go()) {
  function go() {
    return ":P";
  }
}
```

### Parameters without defaults after default parameters

Prior to Gecko 26, the following code resulted in a {{jsxref("SyntaxError")}}. This has been fixed in [Firefox bug 777060](https://bugzil.la/777060) and works as expected in later versions. Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Destructured parameter with default value assignment

You can use default value assignment with the [destructuring assignment](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) notation:

```js
function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

f(); // 6
```

## 規範

{{Specifications}}

## 瀏覽器的兼容性

{{Compat}}

## 參見

- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
