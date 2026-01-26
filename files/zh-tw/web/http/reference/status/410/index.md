---
title: 410 Gone
slug: Web/HTTP/Reference/Status/410
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`410 Gone`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示目標資源在原始伺服器上已不再可用，且此狀況可能是永久性的。410 回應是預設可快取的。

用戶端不應重複請求返回 410 回應的資源，網站擁有者應移除或替換返回此狀態碼的連結。如果伺服器擁有者是不知道這種情況是暫時的還是永久的，則應改用 {{HTTPStatus(404)}} 狀態碼。

## 狀態

```http
410 Gone
```

## 範例

### 請求過時資源

以下的 `GET` 請求是針對一個已經無效的促銷內容頁面：

```http
GET /promotions/summer-2023 HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 410 Gone
Content-Type: text/html
Content-Length: 212

<html>
<head>
  <title>促銷已結束</title>
</head>
<body>
  <h1>促銷已結束</h1>
  <p>促銷活動已結束！請查看<a href="/offers">最新優惠</a>。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus(404)}}
- [410 gone](https://zh.wikipedia.org/wiki/HTTP状态码#410)
