---
title: 423 Locked
slug: Web/HTTP/Status/423
l10n:
  sourceCommit: 50a5ce565b2fa0b988b3f5ff90ea4b24b13e4b9d
---

{{HTTPSidebar}}

> **备注：** *锁定*资源的能力仅限于某些 {{Glossary("WebDAV")}} 服务器。访问网页的浏览器永远不会遇到这种状态代码；在发生错误的情况下，浏览器会将其作为通用的 `400` 状态代码处理。

HTTP **`423 Locked`** 错误响应状态码表示暂定目标资源被*锁定*，即无法访问。其内容应包含一些 WebDAV XML 格式的信息。

## 状态

```http
423 Locked
```

### 示例

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/webdav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## 规范

{{Specifications}}
