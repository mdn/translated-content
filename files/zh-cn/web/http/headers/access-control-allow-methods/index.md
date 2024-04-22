---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

响应首部 **`Access-Control-Allow-Methods`** 在对 {{glossary("preflight request")}}.（预检请求）的应答中明确了客户端所要访问的资源允许使用的方法或方法列表。

| 报头类型                              | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Access-Control-Allow-Methods: <method>, <method>, ...
```

## 指令

- \<method>
  - : 用逗号隔开的允许使用的 [HTTP request methods](/zh-CN/docs/Web/HTTP/Methods) 列表。

## 例子

```plain
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性注解

- 最新规范中提到的通配符值 (\*) 尚未在以下浏览器中实现：

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: [Firefox bug 1309358](https://bugzil.la/1309358)
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)

## 查看更多

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
