---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

**`Boolean`** 是布林值的包覆器。

## 語法

```plain
new Boolean([value])
```

### 參數

- `value` {{optional_inline}}
  - : 這個`Boolean`物件的初始值。

## 說明

傳入的第一個參數值，如果需要的話，會被轉換成布林值。如果沒傳值，或者是`0`、`-0`、{{jsxref("null")}}、`false`、{{jsxref("NaN")}}、{{jsxref("undefined")}}、空字串(`""`)的話，這個物件的值會被初始化成`false`。大多數情況下，DOM 物件 {{domxref("document.all")}} 被傳入後，也會將其初始化為`false`。至於其他的值，包含所有物件或`"false"`字串，都會使其初始化為`true`。

不要將原始型別的布林值和這個布林物件搞混，它們並不相同。

在判斷式中，任何物件只要不是 {{jsxref("undefined")}} 或 {{jsxref("null")}} ，儘管是值為`false` 的 `Boolean` 物件，都會被轉換成`true`。舉例來說，下列的 {{jsxref("Statements/if...else", "if")}} 判斷式中的布林值即為`true`：

```js
var x = new Boolean(false);
if (x) {
  // this code is executed
}
```

以上這個行為和`Boolean`原始型別沒有關連，反倒是下面的 {{jsxref("Statements/if...else", "if")}} 判斷式會正確地將其視為`false`：

```js
var x = false;
if (x) {
  // this code is not executed
}
```

不要用`Boolean`物件將非布林值轉換成布林值。反而要將`Boolean`視為函式去轉換非布林值：

```js
var x = Boolean(expression); // 較好
var x = new Boolean(expression); // 不要用
```

如果你要指定任何物件，包括值為`false`的`Boolean`物件，作為`Boolean`物件的初始值，則該`Boolean`物件的值依舊為`true`。

```js
var myFalse = new Boolean(false); // 初始值給false，實際上為true
var g = new Boolean(myFalse); // 想當然耳，true
var myString = new String("Hello"); // 字串物件，'Hello'
var s = new Boolean(myString); // 依舊為true
```

不要使用`Boolean`物件代替`Boolean`的原始型別！

## 屬性

- `Boolean.length`
  - : 長度永遠為 1。
- {{jsxref("Boolean.prototype")}}
  - : 原型為`Boolean`的建構式。

## 方法

全域的`Boolean`物件自身沒有任何方法，它只有從原型鏈繼承而來的方法。

## `Boolean` 實體

所有 `Boolean` 實體會繼承 {{jsxref("Boolean.prototype")}} 。和所有建構式一樣，原型物件會指派給實體那些繼承的屬性和方法。

### 方法

- {{jsxref("Boolean.prototype.toString()")}}
  - : Returns a string of either `true` or `false` depending upon the value of the object. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Returns the primitive value of the {{jsxref("Boolean")}} object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.

## 範例

### 用 `false` 作為初始值建立 `Boolean` 物件

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### 用 `true` 作為初始值建立 `Boolean` 物件

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Su Lin");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Boolean.prototype")}}
- {{Glossary("Boolean")}}
- [布林資料類型（維基百科）](<https://zh.wikipedia.org/wiki/布林_(資料類型)>)
