---
title: 409 Conflict
slug: Web/HTTP/Status/409
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`409 Conflict`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示請求與目標資源的當前狀態存在衝突。

In {{glossary("WebDAV")}} remote web authoring, 409 conflict responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.例如,conflicts occur if a request to create collection `/a/b/c/d/` is made, and `/a/b/c/` does not exist, the request must fail with a 409.此外，在上傳比伺服器上現有檔案更舊的檔案時，可能會收到 409 回應，導致版本控制衝突。

In other systems, 409 responses may be used for implementation-specific purposes, such as to indicate that the server has received multiple requests to update the same resource.

## 狀態

```http
409 Conflict
```

## Examples

### Concurrent tasks disallowed

In the following example, we want to kick off an automation process that performs a common task in the system:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
"task": "emailDogOwners",
"template": "pickup"
}
```

In this implementation, the server disallows two concurrent jobs from running and returns a 409, providing the client an opportunity to check if they meant to perform the action or run a different task:

```http
HTTP/1.1 409 Conflict
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
"code": "AutomationConflict",
"task": "emailDogOwners",
"message": "Task locked. Cannot start a new automation since job is already running.",
"runningTaskId": "123"
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP response status codes](/zh-TW/docs/Web/HTTP/Status)
- {{HTTPMethod("PUT")}}
