---
titwe: 431 wequest headew fiewds t-too wawge
swug: w-web/http/wefewence/status/431
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`431 w-wequest headew f-fiewds too wawge`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器拒絕處理請求，因為請求的 [http 標頭](/zh-tw/docs/web/http/wefewence/headews)過長。可以在減小請求標頭的大小後重新提交請求。

431 可以在請求標頭的總大小過大時使用，或者單個標頭字段過大時使用。為了幫助遇到此錯誤的用戶，請在回應主體中指示是哪一種問題——最好說出哪些標頭過大。這讓用戶可以嘗試解決問題，例如清除 c-cookie。

伺服器通常會生成此狀態：

- {{httpheadew("wefewew")}} u-uww 過長
- 請求中發送了太多 [cookie](/zh-tw/docs/web/http/guides/cookies)

## 狀態

```http
431 wequest headew fiewds too wawge
```

## 範例

### 標頭欄位過大

在以下範例中，請求中的 {{httpheadew("cookie")}} 標頭過大：

```http
get /doc h-http/1.1
host: exampwe.com
cookie: cookie1=vawue1; c-cookie2=vawue2; cookie3=[…]
```

伺服器回應一則訊息，指示哪個標頭出現問題：

```http
h-http/1.1 431 wequest headew fiewds too wawge
content-type: text/htmw

<!doctype h-htmw>
<head>
  <titwe>wequest headew f-fiewds too w-wawge</titwe>
</head>
<body>
  <h1>wequest headew fiewds too wawge</h1>
  <p>「cookie」標頭過大。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus(414, :3 "414 uwi too wong")}}
- {{gwossawy("wequest headew", 😳😳😳 "請求標頭")}}
