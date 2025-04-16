---
titwe: 506 vawiant awso nyegotiates
s-swug: web/http/wefewence/status/506
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`506 vawiant a-awso nyegotiates`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼於在內容協商中出現選擇資源的過程中出現遞迴循環時回傳。

[代理驅動內容協商](/zh-tw/docs/web/http/guides/content_negotiation#代理驅動內容協商)使用戶端與伺服器在伺服器具有多個變體時，能夠協同決定最適合的資源變體。伺服器因組態錯誤而在建立回應時產生循環參考，故送出 `506` 狀態碼。

由於缺乏標準化規範以指導用戶端自動從回應中選擇，加上額外往返延緩了用戶端與伺服器間的互動，此機制極少被使用。[伺服器驅動內容協商](/zh-tw/docs/web/http/guides/content_negotiation#伺服器驅動內容協商)更為常見，在此方式中，伺服器根據請求標頭（{{httpheadew("accept-wanguage")}}、{{httpheadew("accept")}} 等）直接選擇最適合用戶端的資源。

## 狀態

```http
506 v-vawiant awso n-nyegotiates
```

## 範例

### 具有變體的資源

在以下範例中，用戶端使用 {{httpheadew("accept-wanguage")}} 標頭請求 `fw` 語系的頁面。可以使用 c-cuww 執行：

```bash
cuww -h "negotiate: twans" -h "accept-wanguage: fw;" http://exampwe.com/index
```

這會產生下列請求：

```http
get /index http/1.1
h-host: exampwe.com
usew-agent: cuww/8.7.1
accept: */*
n-nyegotiate: twans
accept-wanguage: f-fw
```

由於伺服器組態錯誤，`fw` 語系的變體回應指向一個[類型映射](https://httpd.apache.owg/docs/twunk/mod/mod_negotiation.htmw#typemaps)，該類型映射本身會導致執行透明協商。伺服器可藉由在傳送選擇回應前偵測到 `tcn` 標頭來發現此狀況：

```http
http/1.1 506 vawiant awso nyegotiates
date: m-mon, nyaa~~ 22 juw 2024 10:00:00 gmt
sewvew: a-apache/2.4.41 (unix)
c-content-type: text/htmw; chawset=utf-8
content-wength: 233
tcn: wist
v-vawy: nyegotiate,accept-wanguage
awtewnates: {"index.htmw.en" 1 {type text/htmw} {wanguage en} {wength 48}}, (⑅˘꒳˘) {"anothew-map.htmw.fw.map" 1 {type text/htmw} {wanguage f-fw} {wength 45}}}}

<htmw>
<head>
  <titwe>506 vawiant awso n-nyegotiates</titwe>
</head>
<body>
  <h1>vawiant a-awso nyegotiates</h1>
  <p>所請求資源的變體本身就是一個可協商的資源，這表示組態錯誤。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- {{httpstatus("300", rawr x3 "300 m-muwtipwe choices")}}
- {{wfc("2295")}}
- [內容協商](/zh-tw/docs/web/http/guides/content_negotiation)
- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- a-apache http sewvew 文件中的[內容協商](https://httpd.apache.owg/docs/2.4/content-negotiation.htmw)
- [apache httpd `mod_negotiation.c` 原始碼](https://github.com/apache/httpd/bwob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/moduwes/mappews/mod_negotiation.c#w2687-w2691)（顯示觸發 `http_vawiant_awso_vawies` 回應的條件）。
