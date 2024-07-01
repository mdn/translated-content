---
title: URLSearchParams：values() 方法
slug: Web/API/URLSearchParams/values
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLsearchParams")}} 接口的 **`values()`** 方法返回一个用于遍历对象中包含的所有键的{{jsxref("Iteration_protocols", "迭代器", "", 1)}}。这些键都是字符串对象。

## 语法

```js-nolint
values()
```

### 参数

无。

### 返回值

返回一个 {{jsxref("Iteration_protocols","iterator")}}。

## 示例

以下示例将一个 URL 查询字符串传递给 `URLSearchParams` 构造函数，然后使用 `values()` 返回的迭代器将值打印到控制台。

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

for (const value of searchParams.values()) {
  console.log(value);
}
```

结果如下：

```plain
value1
value2
```

这个例子和上面做的差不多，但它将迭代器强制转换为数组。

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

console.log(Array.from(searchParams.values()));
```

结果如下：

```plain
['value1', 'value2']
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}} 接口。
