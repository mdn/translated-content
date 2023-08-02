---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
---

{{jsSidebar("Statements")}}

**`for...in`** **语句**以任意顺序迭代一个对象的除[Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性，包括继承的可枚举属性。

## 语法

```plain
for (variable in object)
  statement
```

- `variable`
  - : 在每次迭代时，variable 会被赋值为不同的属性名。
- `object`
  - : 非 Symbol 类型的可枚举属性被迭代的对象。

### 数组迭代和 `for...in`

> **备注：** `for...in`不应该用于迭代一个关注索引顺序的 {{jsxref("Array")}}。

### 仅迭代自身的属性

如果你只要考虑对象本身的属性，而不是它的原型，那么使用 {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} 或执行 {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} 来确定某属性是否是对象本身的属性（也能使用{{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable")}}）。或者，如果你知道不会有任何外部代码干扰，您可以使用检查方法扩展内置原型。

## 为什么用 for ... in?

`for ... in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`，那么`for ... in`的到底有什么用呢？

它最常用的地方应该是用于调试，可以更方便的去检查对象属性（通过输出到控制台或其他方式）。尽管对于处理存储数据，数组更实用些，但是你在处理有`key-value`数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用`for ... in`。

## 示例

下面的函数接受一个对象作为参数。被调用时迭代传入对象的所有可枚举属性然后返回一个所有属性名和其对应值的字符串。

```js
var obj = { a: 1, b: 2, c: 3 };

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

下面的函数说明了{{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}的用法：继承的属性不显示。

```js
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性：初始化函数表达式

在 SpiderMonkey 40 版本之前，可以在使用一个初始化表达式（`i=0`）在一个`for...in`循环中：

```js example-bad
var obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

这个非标准行为现在在版本 40 及更高版本中被忽略，并将在严格模式（[Firefox bug 748550](https://bugzil.la/748550) 和 [Firefox bug 1164741](https://bugzil.la/1164741)）中呈现{{jsxref("SyntaxError")}}（"[for-in loop head declarations may not have initializers](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)"）错误。

像其他引擎 V8(Chrome)，Chakra (IE/Edge)，JSC (WebKit/Safari) 正在研究去除这种不标准的行为。

## 相关链接

- {{jsxref("Statements/for...of", "for...of")}} 一个类似的迭代属性值的语句
- {{jsxref("Statements/for_each...in", "for each in")}} 一个类似的但是迭代的是对象的属性的值而不是其属性名字的语句（过时的）
- {{jsxref("Statements/for", "for")}}
- 迭代器和构造器（uses the `for...in` syntax）
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Array.prototype.forEach()")}}
