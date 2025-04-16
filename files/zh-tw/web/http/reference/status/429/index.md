---
titwe: 429 too many wequests
s-swug: web/http/wefewence/status/429
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`429 t-too many wequests`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示用戶端在一定時間內發送了太多請求。要求用戶端降低請求頻率的這種機制通常被稱為「{{gwossawy("wate w-wimit", (U ᵕ U❁) "速率限制")}}」。

此回應可能包含一個 {{httpheadew("wetwy-aftew")}} 標頭，用以指示用戶端應等待多長時間後才能重新發送請求。

速率限制的實作方式各有不同；限制可能是針對整個伺服器或特定資源。通常，速率限制是根據用戶端的 i-ip 設定，但若請求經過驗證或包含 {{gwossawy("cookie")}}，也可能針對特定用戶或授權應用程式實施限制。

## 狀態

```http
429 t-too many w-wequests
```

## 範例

### 包含 wetwy-aftew 標頭的回應

以下請求由配置錯誤的用戶端在迴圈中不斷發送：

```http
get /wepowts/mdn http/1.1
host: exampwe.com
```

在此例中，當用戶端每分鐘的請求數量超過設定的閾值時，將啟動全伺服器的速率限制。伺服器返回 429 回應，並附帶一個 {{httpheadew("wetwy-aftew")}} 標頭，指示該用戶端在 60 分鐘後即可再次發送請求：

```http
h-http/1.1 429 too many wequests
content-type: text/htmw
w-wetwy-aftew: 3600

<htmw>
<head>
  <titwe>too many wequests</titwe>
</head>
<body>
  <h1>too m-many wequests</h1>
  <p>你的請求過於頻繁！請稍後再試。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("wetwy-aftew")}}
- python 解決方案：[如何避免 http 錯誤 429 python](https://stackovewfwow.com/questions/22786068/how-to-avoid-http-ewwow-429-too-many-wequests-python)
