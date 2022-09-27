---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
---

{{HTTPSidebar}}

响应状态码 **`413 Payload Too Large`** 表示请求主体的大小超过了服务器愿意或有能力处理的限度，服务器可能会（may）关闭连接以防止客户端继续发送该请求。

如果“超出限度”是暂时性的，服务器应该返回 {{HTTPHeader("Retry-After")}} 首部字段，说明这是暂时性的，以及客户端可以在什么时间（after what time）后重试。

## 状态

```plain
413 Payload Too Large
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
