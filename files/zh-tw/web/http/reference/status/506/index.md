---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Reference/Status/506
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`506 Variant Also Negotiates`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼於在內容協商中出現選擇資源的過程中出現遞迴循環時回傳。

[代理驅動內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation#代理驅動內容協商)使用戶端與伺服器在伺服器具有多個變體時，能夠協同決定最適合的資源變體。伺服器因組態錯誤而在建立回應時產生循環參考，故送出 `506` 狀態碼。

由於缺乏標準化規範以指導用戶端自動從回應中選擇，加上額外往返延緩了用戶端與伺服器間的互動，此機制極少被使用。[伺服器驅動內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation#伺服器驅動內容協商)更為常見，在此方式中，伺服器根據請求標頭（{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}} 等）直接選擇最適合用戶端的資源。

## 狀態

```http
506 Variant Also Negotiates
```

## 範例

### 具有變體的資源

在以下範例中，用戶端使用 {{HTTPHeader("Accept-Language")}} 標頭請求 `fr` 語系的頁面。可以使用 curl 執行：

```bash
curl -H "Negotiate: trans" -H "Accept-Language: fr;" http://example.com/index
```

這會產生下列請求：

```http
GET /index HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
Accept-Language: fr
```

由於伺服器組態錯誤，`fr` 語系的變體回應指向一個[類型映射](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps)，該類型映射本身會導致執行透明協商。伺服器可藉由在傳送選擇回應前偵測到 `TCN` 標頭來發現此狀況：

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233
TCN: list
Vary: negotiate,accept-language
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"another-map.html.fr.map" 1 {type text/html} {language fr} {length 45}}}}

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>Variant Also Negotiates</h1>
  <p>所請求資源的變體本身就是一個可協商的資源，這表示組態錯誤。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("300", "300 Multiple Choices")}}
- {{RFC("2295")}}
- [內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- Apache HTTP Server 文件中的[內容協商](https://httpd.apache.org/docs/2.4/content-negotiation.html)
- [Apache httpd `mod_negotiation.c` 原始碼](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691)（顯示觸發 `HTTP_VARIANT_ALSO_VARIES` 回應的條件）。
