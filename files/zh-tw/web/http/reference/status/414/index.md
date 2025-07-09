---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP **`414 URI Too Long`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示用戶端請求的 URI 長度超過伺服器願意解析的範圍。

此錯誤可能發生於以下幾種罕見情況：

- 用戶端錯誤地將 {{HTTPMethod("POST")}} 請求轉換為攜帶大量查詢資訊的 {{HTTPMethod("GET")}} 請求。
- 用戶端進入了重導迴圈（例如，重導的 URI 前綴指向自身的一部分）。
- 伺服器遭受來自用戶端的攻擊，試圖利用潛在的安全漏洞。

一些系統將 `414 URI Too Long` 實作為 `414 Request-URI Too Large`。

## 狀態

```http
414 URI Too Long
```

## 範例

### 使用 GET 進行表單提交

在以下範例中，HTML [`<form>` 方法](/zh-TW/docs/Web/HTML/Reference/Elements/form#方法)錯誤地使用了 `get` 而非 `post`。大量表單資料會附加到表單的 `action` 屬性所指定的 URL，並作為 GET 請求傳送：

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

該伺服器設定的 URI 長度上限被觸發，因此回應 414：

```http
HTTP/1.1 414 URI Too Long
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Length: 1234

<!doctype html>
<head>
  <title>414 - URI Too Long</title>
</head>
<body>
  <h1>414 - URI Too Long</h1>
  <p>伺服器無法處理提供的 URI，因為它超出了允許的長度。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{Glossary("URI")}}
