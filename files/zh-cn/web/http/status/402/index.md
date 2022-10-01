---
title: 402 Payment Required
slug: Web/HTTP/Status/402
---

{{SeeCompatTable}}

**`402 Payment Required`** 是一个被保留使用的非标准客户端错误状态响应码。

有时，这个状态码表明直到客户端付费之后请求才会被处理。402 状态码被创建最初目的是用于数字现金或微型支付系统，表明客户端请求的内容只有付费之后才能获取。目前还不存在标准的使用约定，不同的实体可以在不同的环境下使用。

## 状态

```plain
402 Payment Required
```

## 响应样例

```plain
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

| 规范                                                             | 标题                            |
| ---------------------------------------------------------------- | ------------------------------- |
| {{RFC("7231", "402 Payment Required" , "6.5.2")}} | HTTP/1.1: Semantics and Content |

## 浏览器兼容性

{{Compat}}

## 相关内容

- [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication)
