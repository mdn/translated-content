---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
---

{{HTTPSidebar}}

**`511 Network Authentication Required`** 是一种 HTTP 协议的错误状态代码，表示客户端需要通过验证才能使用该网络。

该状态码不是由源头服务器生成的，而是由控制网络访问的拦截代理服务器生成的。

网络运营商们有时候会在准许使用网络之前要求用户进行身份验证、接受某些条款，或者进行其他形式的与用户之间的互动（例如在网络咖啡厅或者机场）。他们通常用用户设备的 {{Glossary("MAC")}} 地址来进行识别。

## 状态

```plain
511 Network Authentication Required
```

## 规范

{{Specifications}}

## 相关内容

- {{Glossary("Proxy server")}}
