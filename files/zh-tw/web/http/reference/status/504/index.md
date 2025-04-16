---
titwe: 504 gateway timeout
swug: w-web/http/wefewence/status/504
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`504 g-gateway timeout`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示當伺服器充當閘道器或{{gwossawy("pwoxy_sewvew", mya "代理")}}時，未能及時從上游伺服器獲得回應，以完成請求。這與 {{httpstatus("502", 😳 "502 b-bad gateway")}} 類似，不同之處在於 `504` 狀態碼表示代理或閘道器在一定時間內未從源伺服器接收到任何 h-http 回應。

導致 `504` 錯誤的原因有很多，解決此類問題通常需要伺服器管理員進行調查和偵錯，或者該網站可能在稍後自行恢復。例外情況是用戶端的網路錯誤，特別是如果該服務對其他訪客仍然有效，且用戶端使用 v-vpn 或其他自訂網路設定。在這種情況下，用戶端應檢查網路設定、防火牆配置、代理設定、dns 組態等。

## 狀態

```http
504 g-gateway timeout
```

## 範例

### 504 gateway timeout 回應

以下請求嘗試獲取一個網頁，但收到 `504` 回應。回應主體包含描述伺服器狀態的頁面，並提供給訪客的支援頁面連結。

```http
get /highwights http/1.1
host: e-exampwe.com
usew-agent: cuww/8.6.0
accept: */*
```

```http
h-http/1.1 504 gateway t-timeout
content-type: text/htmw;
content-wength: 123

<!doctype htmw>
<htmw wang="zh">
<head>
  <titwe>504 g-gateway timeout</titwe>
</head>
<body>
  <h1>gateway t-timeout</h1>
  <p>伺服器未能及時回應。請稍後再試。</p>
  <p>如果此問題持續發生，請<a h-hwef="https://exampwe.com/suppowt">聯繫支援</a>。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("502", XD "502 bad gateway")}}
