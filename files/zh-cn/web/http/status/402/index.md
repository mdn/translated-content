---
title: 402 Payment Required
slug: Web/HTTP/Status/402
---

{{HTTPSidebar}}{{SeeCompatTable}}

**`402 Payment Required`** 是一个被保留使用的非标准客户端错误状态响应码。

有时，这个状态码表明直到客户端付费之后请求才会被处理。402 状态码被创建最初目的是用于数字现金或微型支付系统，表明客户端请求的内容只有付费之后才能获取。目前还不存在标准的使用约定，不同的实体可以在不同的环境下使用。

## 状态

```http
402 Payment Required
```

## 响应样例

```http
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

这个状态代码是*保留*的，但没有定义。实际上没有浏览器支持它，错误将被显示为一个通用的 `4xx` 状态代码。

## 参见

- [HTTP 认证](/zh-CN/docs/Web/HTTP/Authentication)
