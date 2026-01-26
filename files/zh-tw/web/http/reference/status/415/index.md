---
title: 415 Unsupported Media Type
slug: Web/HTTP/Reference/Status/415
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`415 Unsupported Media Type`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器拒絕接受請求，因為訊息的{{Glossary("HTTP Content", "內容")}}格式是不受支援的。

格式問題可能是由於請求中指定的 {{HTTPHeader("Content-Type")}} 或 {{HTTPHeader("Content-Encoding")}}，或是處理請求訊息內容時導致的。有些伺服器對於請求的 `Content-Type` 可能有嚴格的要求。例如，使用 `UTF8` 而非 `UTF-8` 來指定 {{glossary("UTF-8")}} 字元編碼可能會導致伺服器認為媒體類型無效。

## 狀態

```http
415 Unsupported Media Type
```

## 範例

### 缺少內容類型

在以下範例中，請求中完全缺少 {{HTTPHeader("Content-Type")}} 標頭：

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23

{
"user": "belgin",
"comment": "LGTM!"
}
```

如果伺服器實作要求該端點的請求至少要有 MIME 類型 `Content-Type: application/json;`，則可能會回應如下：

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### 無效的內容類型

在以下範例中，{{HTTPHeader("Content-Type")}} 標頭被錯誤地設定為 URL 編碼的表單數據，而實際上{{Glossary("HTTP Content", "內容")}}位於請求主體中：

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
"user": "belgin",
"comment": "LGTM!"
}
```

在這種情況下，伺服器會回應 415，並在 {{HTTPHeader("Accept-Post")}} 標頭中指明該請求所需的內容類型：

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
