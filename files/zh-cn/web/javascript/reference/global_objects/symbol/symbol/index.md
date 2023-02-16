---
title: Symbol() constructor
slug: Web/JavaScript/Reference/Global_Objects/symbol/symbol
---

{{JSRef}}

**`Symbol()`** 构造函数返回一个 **symbol** 类型的值，但是它不完全是一个构造函数，因为它不支持 `"new Symbol()"` 语法，也不可被继承。它可以作为 `class` 定义中 {{JSxRef("extends")}} 子句的值，但对它使用 {{JSxRef("super")}} 调用会导致异常。

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## 语法

```js-nolint
Symbol()
Symbol(description)
```

> **备注：** **`Symbol()`** 只能在没有 {{JSxRef("new")}} 的情况下调用，尝试用 `new` 构造调用会抛出 `{{JSxRef("TypeError")}}`

## 参数

- `description` {{optional_inline}}
  - : 一个字符串，用来表示 Symbol 的描述，可以用于调试 Symbol 但不能直接访问 Symbol 自身。

## 示例

### 创建 Symbols

要创建一个新的原始 Symbol，你可以传递一个可选的字符串作为 `description` 参数来创建 `Symbol()`:

```js-nolint
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

上面的代码创建了三个新的 symbols，注意 `Symbol("foo")` 不会将字符串 `"foo"` 强制转换成 symbol，而是每次总是创建一个新的 symbol:

```js-nolint
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

下面带有 {{JSxRef("new")}} 操作符的语法都将会抛出一个 {{JSxRef("TypeError")}}:

```js-nolint
const sym = new Symbol(); // TypeError
```

这一限制是为了防止开发人员创建一个精确的 `Symbol` 包装对象，而不是一个新的 symbol 值。这可能会让人感到困扰，因为在通常情况下，可以创建基本数据类型的精确包装对象（例如 `new Boolean`、`new String` 和 `new Number`）。

如果你的确想创建一个 `Symbol` 包装器对象，你可以使用 `Object()` 函数:

```js-nolint
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- [`core-js` 中 `Symbol` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
