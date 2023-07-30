---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
---

{{JSRef}}

**`Symbol.for(key)`** 方法会根据给定的键 `key`，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中。

## 语法

```plain
Symbol.for(key);
```

### 参数

- key
  - : 一个字符串，作为 symbol 注册表中与某 symbol 关联的键（同时也会作为该 symbol 的描述）。

### 返回值

返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol。

## 描述

和 `Symbol()` 不同的是，用 `Symbol.for()` 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。`Symbol.for() 并不是每次都会创建一个新的 symbol`，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

### 全局 symbol 注册表

symbol 注册表中的记录结构：

| 字段名     | 字段值                          |
| ---------- | ------------------------------- |
| [[key]]    | 一个字符串，用来标识每个 symbol |
| [[symbol]] | 存储的 symbol 值                |

## 示例

```js
Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol

Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol

var sym = Symbol.for("mario");
sym.toString();
// "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串
```

为了防止冲突，最好给你要放入 symbol 注册表中的 symbol 带上键前缀。

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Symbol.keyFor()")}}
