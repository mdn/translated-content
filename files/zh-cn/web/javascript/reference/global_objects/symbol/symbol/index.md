---
title: Symbol() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
---

{{JSRef}}

**`Symbol()`** 构造函数返回一个 **symbol** 类型的值，但是它并不完全支持构造函数的语法，因为它不支持 `new Symbol()` 语法，也无法被子类化。它可以作为 `class` 定义中 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 子句的值使用，但对它进行 [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 调用将会导致异常。

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## 语法

```js-nolint
Symbol()
Symbol(description)
```

> **备注：** `Symbol()` 只能在没有 {{jsxref("Operators/new", "new")}} 的情况下调用，尝试用 `new` 构造会抛出 {{jsxref("TypeError")}}。

## 参数

- `description` {{optional_inline}}
  - : 一个字符串，用来表示 symbol 的描述，可以用于调试，但不能直接访问 symbol 自身。

## 示例

### 创建 symbol

要创建一个新的原始 symbol，你可以传递一个可选的字符串作为 `description` 参数来创建 `Symbol()`：

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

上面的代码创建了三个新的 symbol，注意 `Symbol("foo")` 不会将字符串 `"foo"` 强制转换成 symbol，而是每次总是创建一个新的 symbol：

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

下面带有 {{jsxref("Operators/new", "new")}} 运算符的语法将会抛出一个 {{jsxref("TypeError")}}：

```js
const sym = new Symbol(); // TypeError
```

这一限制是为了防止开发人员创建一个显式的 `Symbol` 包装对象，而不是一个新的 symbol 值。这可能会让人感到困扰，因为在通常情况下，可以创建基本数据类型的显式包装对象（例如 `new Boolean`、`new String` 和 `new Number`）。

如果你真的想创建一个 `Symbol` 包装器对象，你可以使用 `Object()` 函数：

```js
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Symbol` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
