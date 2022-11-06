---
title: Object() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
---

{{JSRef}}

**`Object` 构造函数将给定的值包装为一个新对象。**

- 如果给定的值是 {{jsxref("null")}} 或 {{jsxref("undefined")}}, 它会创建并返回一个空对象。
- 否则，它将返回一个和给定的值相对应的类型的对象。
- 如果给定值是一个已经存在的对象，则会返回这个已经存在的值（相同地址）。

在非构造函数上下文中调用时， `Object` 和 `new Object()`表现一致。

## 语法

```plain
new Object()
new Object(value)
```

### 参数

- `value`
  - : 任意值

## 例子

### 创建一个新对象

```plain
let o = new Object()
o.foo = 42

console.log(o)
// Object { foo: 42 }
```

### 使用 `Object` 创建 `undefined` 和 `null` 类型

下面的例子保存了一个空 `Object` 对象在 `o`:

```js
let o = new Object()
```

```js
let o = new Object(undefined)
```

```js
let o = new Object(null)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Object initializer](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
