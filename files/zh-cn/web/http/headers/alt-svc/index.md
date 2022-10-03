---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
---

**`Alt-Svc`** 全称为“Alternative-Service”，直译为“备选服务”。该头部列举了当前站点备选的访问方式列表。一般用于在提供“QUIC”等新兴协议支持的同时，实现向下兼容。

## 语法

```plain
Alt-Svc: clear
Alt-Svc: <service-list>; ma=<max-age>
Alt-Svc: <service-list>; ma=<max-age>; persist=1
```

- `<service-list>`
  - : 使用分号隔离的访问方式列表，格式形如：`<service-name>="<host-name>:<port-number>"`。这里的`<service-name>`应当是一个有效的 {{Glossary("ALPN")}} 标识符。
- `<max-age>`{{Optional_Inline}}
  - : 当前访问方式的有效期，超过该时间后，服务端将不保证该访问方式依旧可用，客户端应当重新获取更新后的 Alt-Svc 列表。单位为秒，默认值为 24 小时（86400)。
- `persist`{{Optional_Inline}}
  - : 可选参数，用于标识当前访问方式在网络环境改变时或者会话间始终保持。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 引用

- [Identifying resources on the Web](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)\[在 Web 世界标记资源]
