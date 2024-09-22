---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`401 Unauthorized`** 回應狀態碼表示用戶端請求未完成，因為它缺少對所請求資源的有效驗證憑證。

這個狀態碼隨著一個含有相關資訊的 HTTP {{HTTPHeader("WWW-Authenticate")}} 回應標頭一同發送給用戶端，該標頭包含了關於如何在提示用戶輸入驗證憑證後再次請求資源的資訊。

這個狀態碼與 {{HTTPStatus("403", "403 Forbidden")}} 狀態碼類似，唯一的區別是在導致這個狀態碼的情況下，用戶驗證可以允許訪問該資源。

## 狀態

```http
401 Unauthorized
```

## 範例

```http
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 驗證](/zh-TW/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}、{{HTTPStatus("407")}}
