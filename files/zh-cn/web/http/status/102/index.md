---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}{{deprecated_header}}

在 HTTP 协议中，**`102 Processing`** 状态码向客户端表示已收到完整请求，并且服务器正在处理该请求。

仅当服务器预计请求需要很长时间时会发送此状态码，以告知客户端请求尚未终止。

> [!NOTE]
> 此状态码已被弃用，不应再发送。客户端可能仍然接受并简单地忽略该状态码。

## 状态

```plain
102 Processing
```

## 规范

{{Specifications}}

## 参见

- {{HTTPHeader("Expect")}}
- {{HTTPStatus("100")}}
