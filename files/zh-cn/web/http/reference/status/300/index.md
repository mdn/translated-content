---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
---

**`300 Multiple Choices`** 是一个用来表示重定向的响应状态码，表示该请求拥有多种可能的响应。用户代理或者用户自身应该从中选择一个。由于没有如何进行选择的标准方法，这个状态码极少使用。

假如服务器可以提供一个优先选择，那么它应该生成一个 {{HTTPHeader("Location")}} 首部。

## 状态

```plain
300 Multiple Choices
```

## 示例

参考这个页面： [w3.org page for a Multiple Choice response](https://www.w3.org/Style/Examples/007/figures.ht).

## 规范

{{Specifications}}

## 相关内容

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
- {{HTTPStatus("308")}} `Permanent Redirect`
