---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
---

{{JSRef("Global_Objects", "Symbol")}}

## 概述

**`Symbol.keyFor(sym)`** 方法用来获取全局 symbol 注册表中与某个 symbol 关联的键。

## 语法

```plain
Symbol.keyFor(sym);
```

### 参数

- sym
  - : 必选参数，需要查找键值的某个 Symbol。

### 返回值

如果全局注册表中查找到该 symbol，则返回该 symbol 的 key 值，返回值为字符串类型。否则返回 undefined

## 示例

```js
// 创建一个全局 Symbol
var globalSym = Symbol.for("foo");
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined，

// 以下 Symbol 不是保存在全局 Symbol 注册表中
Symbol.keyFor(Symbol.iterator); // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Symbol.prototype.for()")}}
