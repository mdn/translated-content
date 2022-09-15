---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
---
{{JSRef}}

**`indexOf()`** 方法返回调用它的 {{jsxref("String")}} 对象中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。如果未找到该值，则返回 -1。

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

> **备注：** For the Array method, see {{jsxref("Array.prototype.indexOf()")}}.

## 语法

```plain
str.indexOf(searchValue [, fromIndex])
```

### 参数

- `searchValue`
  - : 要被查找的字符串值。如果没有提供确切地提供字符串，[_searchValue_ 会被强制设置为 `"undefined"`](https://tc39.github.io/ecma262/#sec-tostring)， 然后在当前字符串中查找这个值。举个例子：`'undefined'.indexOf()` 将会返回 0，因为 `undefined` 在位置 0 处被找到，但是 `'undefine'.indexOf()` 将会返回 -1 ，因为字符串 `'undefined'` 未被找到。
- `fromIndex` {{optional_inline}}
  - : 数字表示开始查找的位置。可以是任意整数，默认值为 `0`。如果 `fromIndex` 的值小于 `0`，或者大于 `str.length` ，那么查找分别从 `0` 和`str.length` 开始。（译者注： `fromIndex` 的值小于 `0`，等同于为空情况； `fromIndex` 的值大于或等于 `str.length` ，那么结果会直接返回 `-1` 。）举个例子，`'hello world'.indexOf('o', -5)` 返回 `4` ，因为它是从位置`0`处开始查找，然后 `o` 在位置`4`处被找到。另一方面，`'hello world'.indexOf('o', 11)` （或 `fromIndex` 填入任何大于`11`的值）将会返回 `-1` ，因为开始查找的位置`11`处，已经是这个字符串的结尾了。

### 返回值

查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 `-1`。

若被查找的字符串 `searchValue` 是一个空字符串，将会产生“奇怪”的结果。如果 `fromIndex` 值为空，或者 `fromIndex` 值小于被查找的字符串的长度，返回值和以下的 `fromIndex` 值一样：

```js
'hello world'.indexOf('') // 返回 0
'hello world'.indexOf('', 0) // 返回 0
'hello world'.indexOf('', 3) // 返回 3
'hello world'.indexOf('', 8) // 返回 8
```

另外，如果 `fromIndex` 值大于等于字符串的长度，将会直接返回字符串的长度（`str.length`）：

```js
'hello world'.indexOf('', 11) // 返回 11
'hello world'.indexOf('', 13) // 返回 11
'hello world'.indexOf('', 22) // 返回 11
```

从前面一个例子可以看出，被查找的值是空值时，JavaScript 将直接返回指定的索引值。从后面一个例子可以看出，被查找的值是空值时，JavaScript 将直接返回字符串的长度。

## 描述

字符串中的字符被从左向右索引。第一个字符的索引（index）是 `0`，变量名为 `stringName` 的字符串的最后一个字符的索引是 `stringName.length - 1` 。

```js
"Blue Whale".indexOf("Blue")       // 返回 0
"Blue Whale".indexOf("Blute")      // 返回 -1
"Blue Whale".indexOf("Whale", 0)   // 返回 5
"Blue Whale".indexOf("Whale", 5)   // 返回 5
"Blue Whale".indexOf("", -1)       // 返回 0
"Blue Whale".indexOf("", 9)        // 返回 9
"Blue Whale".indexOf("", 10)       // 返回 10
"Blue Whale".indexOf("", 11)       // 返回 10
```

`indexOf` 方法是区分大小写的。例如，下面的表达式将返回 `-1`：

```js
"Blue Whale".indexOf("blue")      // 返回 -1
```

### 检测是否存在某字符串

注意 `0` 并不会被当成 `true` ，`-1` 不会被当成 `false` 。所以当检测某个字符串是否存在于另一个字符串中时，可使用下面的方法：

```plain
'Blue Whale'.indexOf('Blue') !== -1    // true
'Blue Whale'.indexOf('Bloe') !== -1    // false
~('Blue Whale'.indexOf('Bloe'))        // 0，这是一种错误用法
```

## 示例

### 使用`indexOf()` 和 `lastIndexOf()`

下例使用 `indexOf()` 和 `lastIndexOf()` 方法定位字符串中 "`Brave new world`" 的值。

```js
var anyString = "Brave new world";

console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
// logs 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));
// logs 10

console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));
// logs 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
// logs 6
```

### `indexOf` 和区分大小写

下例定义了两个字符串变量。两个变量包含相同的字符串，除了第二个字符串中的某些字符为大写。第一个 `log` 方法输出 19。但是由于 `indexOf` 方法区分大小写，因此不会在 `myCapString` 中发现字符串 `“cheddar"`，所以，第二个 `log` 方法会输出 -1。

```js
var myString    = "brie, pepper jack, cheddar";
var myCapString = "Brie, Pepper Jack, Cheddar";

console.log('myString.indexOf("cheddar") is ' + myString.indexOf("cheddar"));
// logs 19
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf("cheddar"));
// logs -1
```

### 使用 `indexOf` 统计一个字符串中某个字母出现的次数

在下例中，设置了 `count` 来记录字母 `e` 在字符串 `str` 中出现的次数：

```js
// 翻译：生存还是毁灭？这是个问题。（莎士比亚《哈姆雷特》）
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count); // displays 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
