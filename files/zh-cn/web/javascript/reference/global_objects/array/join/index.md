---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}

**`join()`** 方法将一个数组（或一个[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## 语法

```js
join()
join(separator)
```

### 参数

- `separator` {{optional_inline}}
  - : 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（`,`）分隔。如果`separator`是空字符串 (`""`)，则所有元素之间都没有任何字符。

### 返回值

一个所有数组元素连接的字符串。如果 `arr.length` 为 0，则返回空字符串。

## 描述

所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。

> **警告：** 如果一个元素为 `undefined` 或 `null`，它会被转换为空字符串。

## 示例

### 使用四种不同的分隔符连接数组元素

下例首先创建了一个数组 `a`，包含有三个元素，然后用四种不同的分隔符连接所有数组元素。首先是默认的分隔符逗号，然后是一个逗号加空格，接下来是一个加号前后加空格，最后是一个空字符串。

```js
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1 的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2 的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3 的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4 的值变为"WindRainFire"
```

### 连接类数组对象

下面的示例将连接类数组对象（arguments），通过在`Array.prototype.join`上调用{{jsxref("Function.prototype.call")}}。

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
