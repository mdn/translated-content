---
title: URLSearchParams：entries() 方法
slug: Web/API/URLSearchParams/entries
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`entries()`** 方法返回一个用于遍历该对象中包含的所有键/值对的{{jsxref("Iteration_protocols", "迭代器", "", 1)}}。迭代器按照查询字符串中出现的顺序返回键/值对，每一组键和值都是字符串对象。

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

返回一个 {{jsxref("Iteration_protocols","iterator")}}。

## 示例

```js
// 创建一个测试用的 URLSearchParams 对象
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// 显示键/值对
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`);
}
```

结果如下：

```plain
key1, value1
key2, value2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}} 接口。
