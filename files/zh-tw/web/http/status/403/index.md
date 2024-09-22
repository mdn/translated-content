---
title: 403 Forbidden
slug: Web/HTTP/Status/403
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`403 Forbidden`** 回應狀態碼表示伺服器理解了請求，但拒絕授權。

這個狀態類似於 {{HTTPStatus("401")}}，但對於 **`403 Forbidden`** 狀態碼，重新驗證不能提供幫助。存取權限與應用程式邏輯相關，例如資源的訪問權限不足。

## 狀態

```http
403 Forbidden
```

## 範例

```http
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("401")}}
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.403)
