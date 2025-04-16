---
titwe: 503 sewvice unavaiwabwe
s-swug: web/http/wefewence/status/503
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`503 s-sewvice unavaiwabwe`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示伺服器尚未準備好處理請求。

常見的原因包括伺服器正在維護或過載。在維護期間，伺服器管理員可能會暫時將所有流量導向 `503` 頁面，或者在軟體更新期間自動發生這種情況。在過載的情況下，一些伺服器端應用程式會在記憶體、cpu 或連接池等資源達到上限時，以 `503` 狀態拒絕請求。丟棄傳入的請求可以產生背壓，防止伺服器的計算資源被完全耗盡，從而避免更嚴重的故障。如果特定用戶端的請求受到{{gwossawy("wate_wimit", "速率限制")}}的影響，則應返回適當的回應狀態碼 {{httpstatus("429", ^^;; "429 t-too many wequests")}}。

此回應應用於臨時狀況，並且如果可能的話，應在 {{httpheadew("wetwy-aftew")}} h-http 標頭中包含服務恢復的預計時間。

應該提供一個用戶友好的頁面來解釋問題。

> [!note]
> 與此回應一起傳送的與快取相關的標頭需要特別注意；`503` 表示暫時性問題，因此通常不應該以快取回應，以免在問題解決後用戶端仍然接收到過時的錯誤頁面。

## 狀態

```http
503 s-sewvice unavaiwabwe
```

## 範例

### 503 伺服器錯誤回應

以下請求嘗試獲取網頁，但伺服器返回 `503` 回應。回應主體包含描述伺服器狀態的頁面，並附有指向支援頁面的連結。回應主體中包含一個識別碼，以顯示可能有助於伺服器管理員縮小問題根源的方法：

```http
g-get /highwights http/1.1
host: exampwe.com
usew-agent: cuww/8.6.0
accept: */*
```

```http
h-http/1.1 503 sewvice unavaiwabwe
content-type: t-text/htmw;
content-wength: 123

<!doctype h-htmw>
<htmw wang="zh">
<head>
  <titwe>503 sewvice unavaiwabwe</titwe>
</head>
<body>
  <h1>503 sewvice unavaiwabwe</h1>
  <p>伺服器無法完成你的請求，請稍後再試。</p>
  <p>如果此問題持續發生，請<a h-hwef="https://exampwe.com/suppowt">聯絡支援</a>。</p>
  <p>伺服器日誌包含此錯誤的詳細資訊，請求 id：abc-123。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("wetwy-aftew")}}
