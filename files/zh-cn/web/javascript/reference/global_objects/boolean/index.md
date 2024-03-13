---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef}}

**`Boolean`** 对象是一个布尔值的对象包装器。

## 描述

如果需要，作为第一个参数传递的值将转换为布尔值。如果省略该参数或参数值为 `0`、`-0`、{{jsxref("null")}}、`false`、{{jsxref("NaN")}}、{{jsxref("undefined")}}，或空字符串（`""`），则该对象具有的初始值为 `false`。所有其他值，包括任何对象，空数组（`[]`）或字符串 `"false"`，都会创建一个初始值为 `true` 的对象。

注意不要将基本类型中的布尔值 `true` 和 `false` 与值为 `true` 和 `false` 的 `Boolean` 对象弄混了。

其值不是 {{jsxref("undefined")}} 或 {{jsxref("null")}} 的任何对象（包括其值为 `false` 的布尔对象）在传递给条件语句时都将计算为 `true`。例如，以下 {{jsxref("Statements/if...else", "if")}} 语句中的条件评估为 `true`：

```js
const x = new Boolean(false);
if (x) {
  // 这里的代码会被执行
}
```

基本类型的布尔值不受此规则影响。例如下面的 {{jsxref("Statements/if...else", "if")}} 语句的条件为假：

```js
const x = false;
if (x) {
  // 这里的代码不会执行
}
```

不要用创建 `Boolean` 对象的方式将一个非布尔值转化成布尔值，直接将 `Boolean` 当做转换函数来使用即可，或者使用[双重非（!!）运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!)：

```js
const x = Boolean(expression); // use this...
const x = !!expression; // ...or this
const x = new Boolean(expression); // don't use this!
```

对于任何对象，即使是值为 `false` 的 `Boolean` 对象，当将其传给 `Boolean` 函数时，生成的 `Boolean` 对象的值都是 `true`。

```js
const myFalse = new Boolean(false); // initial value of false
const g = Boolean(myFalse); // initial value of true
const myString = new String("Hello"); // string object
const s = Boolean(myString); // initial value of true
```

最后，不要在应该使用基本类型布尔值的地方使用 `Boolean` 对象。

> **备注：** 当将非标准属性 [`document.all`](/zh-CN/docs/Web/API/Document#属性) 用作此构造函数的参数时，结果是值为 `false` 的布尔对象。此属性是旧的、非标准的属性，不应使用。

当使用非严格相等（`==`）来比较一个对象和布尔原始值时，最重要的是需要弄明白最终比较的是什么。请看一下的示例：

```js
if ([]) {
  console.log("[] is truthy"); // logs "[] is truthy"
}
if ([] == false) {
  console.log("[] == false"); // logs "[] == false"
}
```

`[]` 是真值而 `[] == false` 也同时成立的原因是：非严格比较 `[] == false` 会将 `[]` 的原始值和 `false` 进行比较。而获取 `[]` 的原始值时，JavaScript 引擎会首先调用 `[].toString()`。其结果为 `""`，也是最终和 `false` 一起比较的值。换句话说，`[] == false` 等价于 `"" == false`，而 `""` 是假值——这也解释了为什么会得到这一结果。

## 构造函数

- {{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}
  - : 创建一个新的 `Boolean` 对象。

## 实例方法

- {{jsxref("Boolean.prototype.toString()")}}
  - : 根据对象的值返回字符串 `true` 或 `false`。覆盖了 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : 返回 {{jsxref("Boolean")}} 对象的原始值。覆盖了 {{jsxref("Object.prototype.valueOf()")}} 方法。

## 示例

### 以初始值 `false` 创建 `Boolean` 对象

```js
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);
```

### 以初始值 `true` 创建 `Boolean` 对象

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Boolean](/zh-CN/docs/Glossary/Boolean)
- [基本类型：布尔类型](/zh-CN/docs/Web/JavaScript/Data_structures#boolean_类型)
- [布尔类型（维基百科）](<https://zh.wikipedia.org/wiki/布林_(資料類型)>)
