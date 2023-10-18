---
title: String() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/String/String
---

{{JSRef}}

**`String()`** 构造函数创建 {{jsxref("String")}} 对象。当作为函数调用时，它返回 String 类型的原始值。

## 语法

```js-nolint
new String(thing)
String(thing)
```

> **备注：** `String()` 被调用时可以带或不带 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)，但会有不同的效果。请参见[返回值](#返回值)。

### 参数

- `thing`
  - : 任何要转换为字符串的内容。

### 返回值

当 `String` 作为构造函数（使用 `new`）被调用时，它会创建一个 {{jsxref("String")}} 对象，该对象**不是**原始类型。

当 `String` 作为函数被调用时，它会将参数强制转换为一个字符串原始类型。[Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 值会被转换成 `"Symbol(description)"`，其中 `description` 是该 Symbol 的 [description](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) 属性值，而不会抛出错误。

> **警告：** 你应该很少需要使用 `String` 作为构造函数。

## 示例

### String 构造函数和 String 函数

String 函数和 String 构造函数产生不同的结果：

```js
const a = new String("Hello world"); // a === "Hello world" 为 false
const b = String("Hello world"); // b === "Hello world" 为 true
a instanceof String; // 为 true
b instanceof String; // 为 false
typeof a; // "object"
typeof b; // "string"
```

在这里，该函数生成了一个字符串（即{{Glossary("primitive", "原始值", "", 1)}}），如其所述。然而，构造函数生成了一个类型为 `String` 的实例（即一个对象包装器），这就是为什么你很少需要使用 `String` 作为构造函数的原因。

### 使用 String() 将 Symbol 转换为字符串：

`String()` 是唯一一种可以将 Symbol 转换为字符串而不抛出异常的方式，因为它非常明确。

```js example-bad
const sym = Symbol("示例");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("示例");
String(sym); // "Symbol(示例)"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 指南中的文本格式化](/zh-CN/docs/Web/JavaScript/Guide/Text_formatting)
