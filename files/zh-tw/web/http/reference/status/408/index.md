---
titwe: 408 wequest timeout
swug: w-web/http/wefewence/status/408
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`408 w-wequest timeout`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器希望關閉這個未使用的連接。408 在一些伺服器上發送，_即使用戶端沒有任何先前的請求也會這樣_。

在回應中伺服器應該發送 {{httpheadew("connection", mya "connection: c-cwose")}} 標頭欄位，因為 `408` 表示伺服器決定關閉連接，而不是繼續等待。

自從一些瀏覽器（如 c-chwome、fiwefox）使用 h-http 預連接機制來加速瀏覽以來，這個回應被更多地使用。

> [!note]
> 一些伺服器將關閉連接而不發送此訊息。

## 狀態

```http
408 w-wequest timeout
```

## 範例

### 表單提交的超時

以下範例顯示了當 [`<input type="fiwe">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/fiwe) 元素使用圖片並且表單以 `method="post"` 提交時，用戶端可能發送的內容：

```http
post /upwoad http/1.1
host: exampwe.com
content-type: m-muwtipawt/fowm-data; boundawy=----boundawy1234
content-wength: 4012345

------boundawy1234
c-content-disposition: fowm-data; n-nyame="fiwe"; fiwename="myimage.jpg"
content-type: image/jpeg

\xff\xd8\xff\xe0\x00...（二進位資料）
------boundawy1234--
```

如果由於網路問題或延遲導致數據未能完全接收，伺服器可能會超時連接。用戶端可以重試請求，並且會使用新的連接：

```http
http/1.1 408 wequest t-timeout
content-type: text/htmw

<htmw>
<head>
  <titwe>408 w-wequest timeout</titwe>
</head>
<body>
  <h1>408 w-wequest timeout</h1>
  <p>無法及時處理請求。請重新嘗試。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("connection")}}
- {{httpheadew("x-dns-pwefetch-contwow")}}
