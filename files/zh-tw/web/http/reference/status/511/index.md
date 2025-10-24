---
title: 511 Network Authentication Required
slug: Web/HTTP/Reference/Status/511
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`511 Network Authentication Required`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示用戶端需要進行驗證以獲得網路訪問權限。此狀態不是由原始伺服器產生，而是由攔截流量的{{Glossary("Proxy_server", "代理伺服器")}}發送，以控制對網路的訪問。

網路運營商有時需要某些驗證、接受條款或其他用戶互動才能授予訪問權限（例如在網吧或機場）。他們通常使用媒體存取控制（MAC）位址來識別未執行此操作的用戶端。

## 狀態

```http
511 Network Authentication Required
```

## 範例

### 針對 GET 請求的 511 回應

在以下範例中，用戶端嘗試訪問網路上的某個資源。由於請求尚未通過驗證，代理伺服器回應 `511` 狀態碼，以提示訪客登入。`511` 狀態碼的設計確保非瀏覽器用戶端不會將回應誤解為來自原始伺服器的內容。瀏覽器會透過 {{HTMLelement("meta")}} 標籤在 10 秒後自動重新導向，或者用戶可以手動點擊回應主體中的連結：

```http
GET /document HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html>
<head>
  <title>Network Authentication Required</title>
<meta http-equiv="refresh" content="10; url=https://login.example.net/">
</head>
<body>
  <p>你需要<a href="https://login.example.net/">在本地網路進行身份驗證</a>才能獲得訪問權限。</p>
</body>
</html>
```

## 規格

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{Glossary("Proxy server", "代理伺服器")}}
