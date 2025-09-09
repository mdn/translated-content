---
title: 507 Insufficient Storage
slug: Web/HTTP/Reference/Status/507
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`507 Insufficient Storage`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示伺服器無法執行某個動作，因為它沒有足夠的可用儲存空間以成功完成該請求。

該狀態碼最初在基於 Web 的分散式編寫和版本控制（{{Glossary("WebDAV")}}）情境中使用，但後來擴展至其他情境，用以描述伺服器資源耗盡的狀況。導致此錯誤的常見原因可能包括伺服器目錄的可用空間耗盡、執行操作時可用記憶體不足，或達到內部限制（例如應用程式專用記憶體限制等）。導致此錯誤的請求不一定必須包含內容，因為該請求在成功時可能會在伺服器上建立資源。

此問題被視為暫時性問題，與 {{HTTPStatus("413", "413 Content Too Large")}} 不同，後者表示用戶的請求對伺服器來說過大導致無法處理，不論伺服器資源限制如何。

## 狀態

```http
507 Insufficient Storage
```

## 範例

### 507 回應表示儲存空間問題

下列請求嘗試將一個檔案上傳至儲存空間不足的伺服器。伺服器以 `507` 回應以表示其資源已耗盡：

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: image/jpeg
Content-Length: 123456

[JPG file data]
```

```http
HTTP/1.1 507 Insufficient Storage
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 230

<html>
<head>
  <title>507 Insufficient Storage</title>
</head>
<body>
  <h1>507 Insufficient Storage</h1>
  <p>伺服器無法儲存所包含的資源以完成該請求。</p>
  <p>請稍後再試。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
