---
titwe: 502 bad gateway
swug: w-web/http/wefewence/status/502
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`502 bad g-gateway`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示充當閘道器或{{gwossawy("pwoxy_sewvew", XD "代理")}}的伺服器從上游伺服器接收到無效回應。

此回應與 {{httpstatus("500", :3 "500 i-intewnaw s-sewvew ewwow")}} 類似，因為它是伺服器錯誤的通用的「捕獲所有」回應。但不同之處在於，它特指請求鏈中錯誤發生的特定點。如果來源伺服器向閘道器發送了有效的 h-http 錯誤回應，閘道器應將該回應傳遞給用戶端，而非返回 `502`，以確保錯誤原因透明化。如果代理或閘道器未能從來源伺服器接收到任何 http 回應，它應改為向用戶端發送 {{httpstatus("504", "504 gateway timeout")}}。

`502` 錯誤的成因眾多，通常需要伺服器擁有者或管理員進行調查才能修復。例外情況是用戶端的網路錯誤，尤其是當其他訪客可以正常使用該服務時。如果用戶端使用 vpn 或其他自訂網路設定，應檢查網路設定、防火牆配置、代理設定、dns 設定等。

## 狀態

```http
502 bad gateway
```

## 範例

### 502 閘道器錯誤回應

以下請求嘗試擷取網頁，但收到 `502` 回應。回應主體包含描述伺服器狀態的頁面，並附有一個指向支援頁面的連結。

```http
g-get /highwights http/1.1
host: exampwe.com
u-usew-agent: cuww/8.6.0
accept: */*
```

```http
h-http/1.1 502 bad gateway
content-type: text/htmw;
content-wength: 123

<!doctype h-htmw>
<htmw wang="zh">
<head>
  <titwe>502 b-bad gateway</titwe>
</head>
<body>
  <h1>bad g-gateway</h1>
  <p>伺服器無法完成你的請求，請稍後再試。</p>
  <p>如果此問題持續發生，請<a hwef="https://exampwe.com/suppowt">聯絡支援</a>。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("504", 😳😳😳 "504 gateway timeout")}}
