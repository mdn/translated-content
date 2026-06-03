---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Reference/Status/431
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`431 Request Header Fields Too Large`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器拒絕處理請求，因為請求的 [HTTP 標頭](/zh-TW/docs/Web/HTTP/Reference/Headers)過長。可以在減小請求標頭的大小後重新提交請求。

431 可以在請求標頭的總大小過大時使用，或者單個標頭字段過大時使用。為了幫助遇到此錯誤的用戶，請在回應主體中指示是哪一種問題——最好說出哪些標頭過大。這讓用戶可以嘗試解決問題，例如清除 cookie。

伺服器通常會生成此狀態：

- {{httpheader("Referer")}} URL 過長
- 請求中發送了太多 [Cookie](/zh-TW/docs/Web/HTTP/Guides/Cookies)

## 狀態

```http
431 Request Header Fields Too Large
```

## 範例

### 標頭欄位過大

在以下範例中，請求中的 {{httpheader("Cookie")}} 標頭過大：

```http
GET /doc HTTP/1.1
Host: example.com
Cookie: cookie1=value1; cookie2=value2; cookie3=[…]
```

伺服器回應一則訊息，指示哪個標頭出現問題：

```http
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: text/html

<!doctype html>
<head>
  <title>Request Header Fields Too Large</title>
</head>
<body>
  <h1>Request Header Fields Too Large</h1>
  <p>「Cookie」標頭過大。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus(414, "414 URI Too Long")}}
- {{Glossary("Request header", "請求標頭")}}
