---
title: URLSearchParams：forEach() 方法
slug: Web/API/URLSearchParams/forEach
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`forEach()`** 方法允许通过回调函数来遍历实例对象上的键值对。

## 语法

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### 参数

- `callback`
  - : 在每个元素上执行的函数，会传入以下参数：
    - `value`
      - : `URLSearchParams` 对象中正在处理的条目的值。
    - `key`
      - : `URLSearchParams` 对象中正在处理的条目的键。
    - `searchParams`
      - : 当前调用 `forEach()` 方法的 `URLSearchParams` 对象。
- `thisArg` {{optional_inline}}
  - : 执行 `callback` 时 `this` 的值。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
// 创建用于测试的 URLSearchParams 对象
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出值
searchParams.forEach((value, key) => {
  console.log(value, key);
});
```

结果是：

```plain
value1 key1
value2 key2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}} 接口。
