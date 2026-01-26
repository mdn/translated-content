---
title: 428 Precondition Required
slug: Web/HTTP/Reference/Status/428
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`428 Precondition Required`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器要求請求是[有條件的](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests)。

通常 428 回應意味著必要的先決條件標頭（例如 {{HTTPHeader("If-Match")}}）的**缺失**。當先決條件標頭與伺服器端狀態**不匹配**時，回應應為 {{HTTPStatus("412", "412 Precondition Failed")}}。

## 狀態

```http
428 Precondition Required
```

## 範例

### 請求中缺少先決條件

用戶端從伺服器獲取了資源 `my-document`，在本地進行了更新，然後嘗試將更新後的文件發送回伺服器：

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
[…]
```

伺服器的實作要求所有針對特定路徑或文件類型的 {{HTTPMethod("PUT")}} 請求必須是條件的，並因此回應 428 錯誤：

```http
HTTP/1.1 428 Precondition Required
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
"code": "MissingPrecondition",
"message": "更新文件時需要包含先決條件標頭。",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 條件請求](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests)
- 條件標頭：{{HTTPHeader("If-Match")}}、{{HTTPHeader("If-None-Match")}}、{{HTTPHeader("If-Modified-Since")}}、{{HTTPHeader("If-Unmodified-Since")}}、{{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
