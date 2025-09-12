---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP **`300 Multiple Choices`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示該請求有多個可能的回應。使用者代理或使用者應該從中選擇一個。

> [!NOTE]
> 在[代理驅動的內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation#代理驅動的內容協商)中，當伺服器有多個資源變體時，用戶端和伺服器會協同決定給定資源的最佳變體。大多數用戶端缺乏自動從回應中選擇的方法，且額外的往返會減慢用戶端與伺服器之間的互動。[伺服器驅動的內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation#伺服器驅動的內容協商)更為常見，伺服器會根據請求標頭（{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}} 等）為用戶端選擇最合適的資源。

伺服器應在回應中包含內容，其中含有資源後設資料和 URI 的列表，使用者或使用者代理可以從中選擇。內容的格式是實作特定的，但應易於被使用者代理剖析（例如 HTML 或 JSON）。

如果伺服器有一個偏好的選項希望用戶端請求，它可以將其包含在 {{HTTPHeader("Location")}} 標頭中。

## 狀態

```http
300 Multiple Choices
```

## 範例

### 帶有資源列表的 300 回應

以下範例展示了透明內容協商的—回應交換過程。一個 Apache 伺服器提供了一個資源的多個變體，這些變體定義在一個[類型對應](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps)中；`index.html.en` 是英文版資源，`index.html.fr` 是法文版資源：

```http
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

`Negotiate: trans` 請求標頭表示用戶端希望使用透明內容協商來選擇資源。由於瀏覽器對此機制的支援不佳，必須改用像 curl 這樣的使用者代理：

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

這會產生以下請求：

```http
GET /index HTTP/1.1
Host: localhost
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
```

我們會收到一個 `300` 回應，其中包含所請求資源的不同表示法的詳細訊息：

```http
HTTP/1.1 300 Multiple Choices
Date: Fri, 30 Aug 2024 09:21:48 GMT
Server: Apache/2.4.59 (Unix)
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"index.html.fr" 1 {type text/html} {language fr} {length 45}}
Vary: negotiate,accept-language
TCN: list
Content-Length: 419
Content-Type: text/html; charset=iso-8859-1

<html><head>
<title>300 Multiple Choices</title>
</head><body>
<h1>Multiple Choices</h1>
可用變體：
<ul>
<li><a href="index.html.en">index.html.en</a>，類型 text/html，語言 en</li>
<li><a href="index.html.fr">index.html.fr</a>，類型 text/html，語言 fr</li>
</ul>
</body></html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 中的重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} 臨時重新導向
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache 伺服器協商演算法](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "HTTP 中的透明內容協商")}}
