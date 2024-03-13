---
title: URLSearchParams.get()
slug: Web/API/URLSearchParams/get
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 接口的**get()**方法返回第一个与搜索参数对应的值**。**

## 语法

```
URLSearchParams.get(name)
```

### 参数

- 键名
  - : 将要返回的参数的键名。

### 返回值

返回一个 {{domxref("USVString")}} ；如果没找到，返回 **`null`**.

## 示例

如果一个页面的 URL 是 `https://example.com/?name=Jonathan&age=18` ，你可以这样解析参数“name”和“age”:

```
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18
```

查找一个不存在的键名则返回 **`null`**:

```
let address = params.get("address"); // null
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
