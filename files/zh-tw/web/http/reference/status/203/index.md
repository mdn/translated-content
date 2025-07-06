---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Reference/Status/203
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`203 Non-Authoritative Information`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示請求成功，但*轉換*[_代理伺服器_](/zh-TW/docs/Glossary/Proxy_server)修改了原始伺服器 {{HTTPStatus("200")}}（`OK`）回應的標頭或附加內容。

此狀態碼的目的是允許轉換代理伺服器在對成功回應套用變更時通知用戶端，因為這可能會影響後續對內容的決策。對訊息的轉換可能意味著修改標頭以表示資源來自鏡像或備份，但也可能意味著以推測對用戶端有利的方式修改內容。這些修改可能包含惡意軟體過濾、格式轉碼、隱私過濾，或為用戶端提供關於未來請求的其他提示。

`203` 回應與已棄用的 {{HTTPHeader("Warning")}} 標頭的 [`214`](/zh-TW/docs/Web/HTTP/Reference/Headers/Warning#警告碼) `Transformation Applied` 值相似，該值可能適用於任何狀態碼的回應。

## 狀態

```http
203 Non-Authoritative Information
```

## 範例

### 接收過濾後的訊息回應

在此範例中，使用者向 `example.com` 發送一個 `GET` 請求以取得 ID 為 `123` 的內容。

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

一個代理伺服器根據已知不安全附件的惡意軟體過濾規則更改了訊息。回應內容有所修改，`attachment_url` 的值已替換為一個提供現行過濾資訊的連結：

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 123

{
  "comment": "來看看我的個人簡介！",
  "attachment_url": "https://example.com/attachment-unavailable-faq"
}
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server", "代理伺服器")}}
- {{HTTPHeader("Warning")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
