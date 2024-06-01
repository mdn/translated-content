---
title: URLSearchParams：get() 方法
slug: Web/API/URLSearchParams/get
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`get()`** 方法返回第一个与查询参数对应的值。

## 语法

```js-nolint
get(name)
```

### 参数

- `name`
  - : 要返回的参数的键名。

### 返回值

如果找到了给定的查询参数，则返回一个字符串；否则返回 **`null`**。

## 示例

如果一个页面的 URL 是 `https://example.com/?name=Jonathan&age=18`，你可以这样解析参数“name”和“age”：

```js
let params = new URLSearchParams(document.location.search);
let name = params.get("name"); // 字符串“Jonathan”
let age = parseInt(params.get("age"), 10); // 数字 18
```

查找一个不存在于查询字符串中的键名则返回 **`null`**:

```js
let address = params.get("address"); // null
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
