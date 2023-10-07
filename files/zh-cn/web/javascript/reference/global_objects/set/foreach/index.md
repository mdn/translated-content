---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
---

{{JSRef}}

**`forEach()`** 方法对 `Set` 对象中的每个值按插入顺序执行一次提供的函数。

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callback`

  - : 为集合中每个元素执行的回调函数，该函数接收三个参数：

    - `value`、`key`
      - : `Set` 中正在处理的当前元素。因为 `Set` 中没有键，所以 `value` 会被共同传递给这两个参数。
    - `set`
      - : 调用 `forEach()` 的 `Set` 对象。

- `thisArg`
  - : 值在执行 `callbackFn` 时作为 `this` 使用。

### 返回值

{{jsxref("undefined")}}。

## 描述

`forEach()` 方法对 `Set` 对象中实际存在的每个值执行一次提供的 `callback`。对于已删除的值，不会调用它。但是，它会对存在但值为 `undefined` 的值执行。

`callback` 被调用时带有**三个参数**：

- **元素的值**
- **元素的键**
- **被遍历的 `Set`**

但是由于 `Set` 对象中没有键（key），所以前两个参数都是 {{jsxref("Set")}} 中元素的值（**value**），之所以这样设计回调函数是为了和 {{jsxref("Map.foreach", "Map")}} 以及 {{jsxref("Array.forEach","Array")}} 的 `forEach()` 函数用法保持一致。

如果提供了一个 `thisArg` 参数给 `forEach` 函数，则参数将会作为回调函数中的 `this`值。否则 `this` 值为 `undefined`。回调函数中 `this` 的绑定是根据[函数被调用时通用的 `this` 绑定规则来决定的](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。

每个值都访问一次，除非在 `forEach()` 完成之前删除并重新添加它。在访问之前删除的值不会调用 `callback`。在 `forEach()` 完成之前添加的新值将被访问。

`forEach()` 对 `Set` 对象中的每个元素执行一次 `callback` 函数；它没有返回值。

## 示例

### 输出集合对象的内容

以下代码依次打印 `Set` 对象的元素：

```js
function logSetElements(value1, value2, set) {
  console.log(`s[${value}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
