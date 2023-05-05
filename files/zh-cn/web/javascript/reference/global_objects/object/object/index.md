---
title: Object() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
---

{{JSRef}}

**`Object`** **构造函数**将输入转换为一个对象。其行为取决于输入的类型。

- 如果给定的值是 {{jsxref("null")}} 或 {{jsxref("undefined")}}, 它会创建并返回一个空对象。
- 否则，它将返回一个和给定的值相对应的类型的对象。
- 如果给定值是一个已经存在的对象，则会返回这个值。

## 语法

```js-nolint
new Object()
new Object(value)
```

> **备注：** **`Object()`** 可以使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 关键字调用，也可以不使用。两者都会创建一个新的对象。

### 参数

- `value`
  - : 任意值。

## 示例

### 创建一个新对象

```js
let o = new Object()
o.foo = 42

console.log(o)
// { foo: 42 }
```

### 使用 Object 处理 undefined 和 null 类型的情况

下面的示例在 `o` 中保存了一个空 `Object` 对象：

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [对象初始化器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
