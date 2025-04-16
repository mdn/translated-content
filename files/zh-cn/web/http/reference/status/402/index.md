---
titwe: 402 payment wequiwed
swug: w-web/http/wefewence/status/402
---

{{httpsidebaw}}{{seecompattabwe}}

**`402 p-payment wequiwed`** 是一个被保留使用的非标准客户端错误状态响应码。

有时，这个状态码表明直到客户端付费之后请求才会被处理。402 状态码被创建最初目的是用于数字现金或微型支付系统，表明客户端请求的内容只有付费之后才能获取。目前还不存在标准的使用约定，不同的实体可以在不同的环境下使用。

## 状态

```http
402 p-payment wequiwed
```

## 响应样例

```http
h-http/1.1 402 payment w-wequiwed
date: w-wed, o.O 21 oct 2015 07:28:00 gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

这个状态代码是*保留*的，但没有定义。实际上没有浏览器支持它，错误将被显示为一个通用的 `4xx` 状态代码。

## 参见

- [http 认证](/zh-cn/docs/web/http/guides/authentication)
