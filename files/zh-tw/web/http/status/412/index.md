---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`412 Precondition Failed`** 用戶端錯誤回應碼表示拒絕訪問目標資源。這發生在條件請求上的方法不是 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}}，並且由 {{HTTPHeader("If-Unmodified-Since")}} 或 {{HTTPHeader("If-None-Match")}} 標頭定義的條件未得到滿足時。在這種情況下通常無法進行請求，例如上傳或修改資源，並返回此錯誤回應。

## 狀態

```http
412 Precondition Failed
```

## 範例

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 避免空中衝突

通過 `ETag` 和 {{HTTPHeader("If-Match")}} 標頭的幫助，你可以檢測到空中編輯衝突。

例如在編輯 MDN 時，當前的 wiki 內容被雜湊並放入回應中的 `Etag`：

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

當將更改保存到 wiki 頁面（發送資料）時，{{HTTPMethod("POST")}} 請求將包含 {{HTTPHeader("If-Match")}} 標頭，其中包含用於檢查新鮮度的 `ETag` 值。

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果雜湊值不匹配，這意味著文檔已在其中編輯，並且會拋出 {{HTTPStatus("412")}} `Precondition Failed` 錯誤。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
