---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
---

{{HTTPSidebar}}

**`Alt-Svc`** 全称为“Alternative-Service”，直译为“备选服务”。该头部列举了当前站点备选的访问方式列表。一般用于在提供“QUIC”等新兴协议支持的同时，实现向下兼容。

## 语法

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : 特殊值 `clear` 表示来源请求清除该源的所有备选服务。
- `<protocol-id>`
  - : {{Glossary("ALPN")}} 协议标识符。例如，`h2` 代表 HTTP/2，`h3-25` 代表 HTTP/3 的第 25 个草案。
- `<alt-authority>`
  - : 指定备选的权威的用引号包裹的字符串，包含可选的主机覆盖、冒号和必须的端口号。
- `ma=<max-age>`{{Optional_Inline}}
  - : 当前访问方式的有效期，超过该时间后，服务端将不保证该访问方式依旧可用，客户端应当重新获取更新后的 Alt-Svc 列表。单位为秒，默认值为 24 小时（86400)。
- `persist=1`{{Optional_Inline}}
  - : 可选参数，用于标识当前访问方式在网络环境改变时或者会话间始终保持。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [备选服务](https://www.mnot.net/blog/2016/03/09/alt-svc)（HTTP 工作组主席 Mark Nottingham 撰写的关于 `Alt-Svc` 的文章）
