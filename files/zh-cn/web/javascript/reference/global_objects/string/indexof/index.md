---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
---

{{JSRef}}

{{jsxref("String")}} 的 **`indexOf()`** 方法在字符串中搜索指定子字符串，并返回其第一次出现的位置索引。它可以接受一个可选的参数指定搜索的起始位置，如果找到了指定的子字符串，则返回的位置索引大于或等于指定的数字。

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

## 语法

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### 参数

- `searchValue`

  - : 要搜索的子字符串。所有传入值都会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`indexOf()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。

- `position` {{optional_inline}}

  - : 该方法返回指定子字符串在大于或等于 `position` 位置的第一次出现的索引，默认为 `0`。如果 `position` 大于调用字符串的长度，则该方法根本不搜索调用字符串。如果 `position` 小于零，该方法的行为就像 `position` 为 `0` 时一样。

    - `hello world hello'.indexOf('o', -5)` 返回 `4`——因为它使该方法的行为类似于第二个参数为 `0`，并且 `o` 在大于或等于 `0` 位置的第一次出现是在 `4` 位置。

    - `'hello world hello'.indexOf('world', 12)` 返回 `-1`——因为，虽然子字符串 `world` 确实出现在索引 `6` 处，但该位置不大于或等于 `12`。

    - `'hello world hello'.indexOf('o', 99)` 返回 `-1`——因为 `99` 大于 `hello world hello` 的长度，这会导致方法根本不搜索字符串。

### 返回值

查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 `-1`。

#### 搜索空字符串时的返回值

搜索空字符串会产生奇怪的结果。如果没有第二个参数，或者第二个参数的值小于调用字符串的长度，则返回值与第二个参数的值相同：

```js
"hello world".indexOf(""); // 返回 0
"hello world".indexOf("", 0); // 返回 0
"hello world".indexOf("", 3); // 返回 3
"hello world".indexOf("", 8); // 返回 8
```

但是，如果第二个参数的值大于或等于字符串的长度，则返回值是字符串的长度：

```js
"hello world".indexOf("", 11); // 返回 11
"hello world".indexOf("", 13); // 返回 11
"hello world".indexOf("", 22); // 返回 11
```

在前一个实例中，该方法的行为就像在第二个参数指定的位置之后发现了一个空字符串。在后一个实例中，该方法的行为就好像在调用字符串的末尾找到了一个空字符串。

## 描述

字符串的索引从零开始：字符串的第一个字符的索引为 `0`，字符串的最后一个字符的索引为字符串长度减 1。

```js
"Blue Whale".indexOf("Blue"); // 返回  0
"Blue Whale".indexOf("Blute"); // 返回 -1
"Blue Whale".indexOf("Whale", 0); // 返回  5
"Blue Whale".indexOf("Whale", 5); // 返回  5
"Blue Whale".indexOf("Whale", 7); // 返回 -1
"Blue Whale".indexOf(""); // 返回  0
"Blue Whale".indexOf("", 9); // 返回  9
"Blue Whale".indexOf("", 10); // 返回 10
"Blue Whale".indexOf("", 11); // 返回 10
```

`indexOf()` 方法是区分大小写的。例如，下面的表达式将返回 `-1`：

```js
"Blue Whale".indexOf("blue"); // 返回 -1
```

### 检测指定字符串是否存在

当检查字符串中是否出现特定的子字符串时，正确的检查方法是测试返回值是否为 `-1`：

```js
"Blue Whale".indexOf("Blue") !== -1; // true；在 'Blue Whale' 中找到 'Blue'
"Blue Whale".indexOf("Bloe") !== -1; // false；'Blue Whale' 中不存在 'Bloe'
```

## 示例

### 使用 indexOf()

下面的例子使用 `indexOf()` 来定位字符串 `"Brave new world"` 中的子字符串。

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() 和区分大小写

下例定义了两个字符串变量。

两个变量包含相同的字符串，只是第二个字符串中的某些字符为大写。第一个 {{domxref("console.log()")}} 方法输出 `19`。但是由于 `indexOf()` 方法区分大小写，因此不会在 `myCapString` 中发现字符串 `“cheddar"`，所以第二个 `console.log()` 方法会输出 `-1`。

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### 使用 indexOf() 统计一个字符串中某个字母出现的次数

在下例中，使用 `count` 来记录字母 `e` 在字符串 `str` 中出现的次数：

```js
const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
