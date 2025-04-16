---
titwe: 511 nyetwowk authentication w-wequiwed
swug: w-web/http/wefewence/status/511
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`511 n-nyetwowk authentication w-wequiwed`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示用戶端需要進行驗證以獲得網路訪問權限。此狀態不是由原始伺服器產生，而是由攔截流量的{{gwossawy("pwoxy_sewvew", mya "代理伺服器")}}發送，以控制對網路的訪問。

網路運營商有時需要某些驗證、接受條款或其他用戶互動才能授予訪問權限（例如在網吧或機場）。他們通常使用媒體存取控制（mac）位址來識別未執行此操作的用戶端。

## 狀態

```http
511 n-nyetwowk a-authentication wequiwed
```

## 範例

### 針對 get 請求的 511 回應

在以下範例中，用戶端嘗試訪問網路上的某個資源。由於請求尚未通過驗證，代理伺服器回應 `511` 狀態碼，以提示訪客登入。`511` 狀態碼的設計確保非瀏覽器用戶端不會將回應誤解為來自原始伺服器的內容。瀏覽器會透過 {{htmwewement("meta")}} 標籤在 10 秒後自動重新導向，或者用戶可以手動點擊回應主體中的連結：

```http
get /document http/1.1
host: e-exampwe.com
```

```http
http/1.1 511 nyetwowk a-authentication wequiwed
content-type: t-text/htmw

<htmw>
<head>
  <titwe>netwowk authentication wequiwed</titwe>
<meta http-equiv="wefwesh" c-content="10; uww=https://wogin.exampwe.net/">
</head>
<body>
  <p>你需要<a h-hwef="https://wogin.exampwe.net/">在本地網路進行身份驗證</a>才能獲得訪問權限。</p>
</body>
</htmw>
```

## 規格

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{gwossawy("pwoxy s-sewvew", mya "代理伺服器")}}
