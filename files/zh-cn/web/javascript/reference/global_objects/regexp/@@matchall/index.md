---
title: RegExp.prototype[@@matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
---

{{JSRef}}

**`[@@matchAll]`**方法返回对字符串使用正则表达式的所有匹配项。

\\{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html")}}

## 语法

```plain
regexp[Symbol.matchAll](str)
```

### 参数

- `str`
  - : 一个{{jsxref("String")}}的匹配对象。

### 返回值

一个[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)。

## 描述

本方法在{{jsxref("String.prototype.matchAll()")}}中被内部调用。例如，以下两个示例返回相同的结果。

```js
"abc".matchAll(/a/);

/a/[Symbol.matchAll]("abc");
```

本方法用于自定义`RegExp`子类中的匹配行为。

## 示例

### 直接调用

本方法的使用方法几乎与{{jsxref("String.prototype.matchAll()")}}相同，除了`this` 的不同以及参数顺序的的差异。

```js
var re = /[0-9]+/g;
var str = "2016-01-02";
var result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// ["2016", "01", "02"]
```

### 在子类中使用 `@@matchAll`

{{jsxref("RegExp")}} 的子类可以重写 `[@@matchAll]()` 方法来修改默认行为。例如，返回一个{{jsxref("Array", "数组", "", 1)}}而不是[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)：

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    var result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    } else {
      return Array.from(result);
    }
  }
}

var re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)", "g");
var str = "2016-01-02|2019-03-07";
var result = str.matchAll(re);
console.log(result[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(result[1]); // [ "2019-03-07", "2019", "03", "07" ]
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{JSxRef("String.prototype.matchAll()")}}
- {{JSxRef("Symbol.matchAll")}}
