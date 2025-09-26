---
title: 412 Precondition Failed
slug: Web/HTTP/Reference/Status/412
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`412 Precondition Failed`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示拒絕訪問目標資源。這發生在[條件請求](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests)上的方法不是 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}}，並且由 {{HTTPHeader("If-Unmodified-Since")}} 或 {{HTTPHeader("If-Match")}} 標頭定義的條件未得到滿足時。在這種情況下，請求（通常是上傳或修改資源）無法執行，並會返回此錯誤回應。

## 狀態

```http
412 Precondition Failed
```

## 範例

### 前置條件失敗

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 避免空中衝突

通過 `ETag` 和 {{HTTPHeader("If-Match")}} 標頭的幫助，你可以防止衝突或空中碰撞。例如在編輯一些 wiki 頁面時，內容被雜湊並放入成功回應中的 `ETag`：

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

當將更改保存到 wiki 頁面（發送資料）時，{{HTTPMethod("POST")}} 請求將包含 {{HTTPHeader("If-Match")}} 標頭，其中包含用於檢查新鮮度的 `ETag` 值。在將變更儲存至維基頁面（提交資料）時，{{HTTPMethod("POST")}} 請求將包含 {{HTTPHeader("If-Match")}} 標頭，該標頭包含用戶端從上次編輯時儲存的 ETag 值，以檢查伺服器上資源的新鮮度：

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果雜湊值不匹配，文件已在其中編輯，並且會拋出 `412 Precondition Failed` 錯誤。

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [條件請求](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}、{{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
