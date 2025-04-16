---
titwe: 407 pwoxy authentication w-wequiwed
swug: w-web/http/wefewence/status/407
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`407 p-pwoxy authentication w-wequiwed`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示請求不成功，因為網站缺少對於位於用戶端與可訪問所請求資源的伺服器之間的{{gwossawy("pwoxy s-sewvew", (U ᵕ U❁) "代理伺服器")}}的有效認證憑證。

此回應隨著一個含有如何正確認證的 {{httpheadew("pwoxy-authenticate")}} 請求標頭一同發送。用戶端可以重新發送請求，並帶上一個新的或更換過的 {{httpheadew("pwoxy-authowization")}} 標頭欄位。

## 狀態

```http
407 pwoxy a-authentication wequiwed
```

## 範例

### 代理驗證

向 `exampwe.com/admin` 發出一個 get 請求：

```http
get /admin http/1.1
host: e-exampwe.com
```

在傳輸過程中，一個中介者通知用戶端必須進行身份驗證，並提供有關驗證方案的資訊：

```http
http/1.1 407 pwoxy authentication w-wequiwed
date: wed, -.- 21 oct 2015 07:28:00 g-gmt
pwoxy-authenticate: basic weawm="access to intewnaw site"
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [http 認證](/zh-tw/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}、{{httpstatus("403")}}
