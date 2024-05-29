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

- 回调函数
  - : 在每个元素上执行的函数，该函数传递以下参数：
    - `value`
      - : 当前遍历到的键值。
    - `key`
      - : 当前遍历到的键名。
    - `searchParams`
      - : 当前调用 `forEach()` 方法的实例对象。
- `thisArg` {{optional_inline}}
  - : 执行 `callback` 时 `this` 的值。

### 返回值

None ({{jsxref("undefined")}})。

## 示例

```js
// 创建 URLSearchParams 对象的实例对象，用于测试
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
