---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`403 Forbidden`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器理解請求，但拒絕處理。這個狀態與 {{HTTPStatus("401")}} 類似，但不同之處在於，即使進行驗證或重新驗證，**`403 Forbidden`** 回應並不會有所改變。請求失敗通常與應用程式邏輯有關，例如用戶對某個資源或操作的權限不足。

收到 `403` 回應的用戶端應預期即使重複發送相同請求，也會遭遇相同錯誤。伺服器擁有者可能會回應 {{HTTPStatus("404")}} 而非 403，以避免向權限不足的用戶端透露該資源的存在。

## 狀態

```http
403 Forbidden
```

## 範例

### 因權限不足導致請求失敗

以下範例為向用戶管理 API 發送的請求。請求包含使用 `Bearer` [驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)的 {{HTTPHeader("Authorization")}} 標頭，其中帶有存取權杖：

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

伺服器已驗證該請求，但由於權限不足，請求仍然失敗，回應主體中包含失敗的原因：

```http
HTTP/1.1 403 Forbidden
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 88

{
  "error": "InsufficientPermissions",
  "message": "刪除用戶需要「admin」角色權限。"
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("401")}}
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.403)
