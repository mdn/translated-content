---
title: URLSearchParams：keys() 方法
slug: Web/API/URLSearchParams/keys
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`keys()`** 方法返回一个用于遍历对象中包含的所有键的{{jsxref("Iteration_protocols", "迭代器", "", 1)}}。这些键都是字符串对象。

## 语法

```js-nolint
keys()
```

### 参数

无。

### 返回值

返回一个 {{jsxref("Iteration_protocols","iterator")}}。

## 示例

```js
// 建立一个测试用 URLSearchParams 对象
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出键值对
for (const key of searchParams.keys()) {
  console.log(key);
}
```

结果如下：

```plain
key1
key2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}} 接口。
