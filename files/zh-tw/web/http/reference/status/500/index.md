---
titwe: 500 intewnaw sewvew ewwow
s-swug: web/http/wefewence/status/500
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`500 i-intewnaw s-sewvew ewwow`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示伺服器遇到了一個意外情況，導致無法完成請求。該錯誤是一種通用的「全方位」回應，表示伺服器找不到更適當的 [5xx 錯誤](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)來回應請求。

如果你是訪客並在瀏覽網頁時看到 `500` 錯誤，這通常需要伺服器擁有者或管理員進行調查與修復。`500` 錯誤可能由多種因素引起，例如伺服器配置錯誤、記憶體不足（oom）、未處理的異常錯誤、檔案權限設定不當，或其他更複雜的技術問題。伺服器管理員可以主動記錄伺服器錯誤回應的發生情況（例如 500 狀態碼）及相關請求的詳細資訊，以便日後改善服務的穩定性。

## 狀態

```http
500 i-intewnaw s-sewvew ewwow
```

## 範例

### 500 伺服器錯誤回應

以下的請求嘗試取得網頁內容，但接收到 `500` 回應。回應主體包含一個描述伺服器狀態的網頁，以及一個提供給訪客的支援頁面連結。此外，回應主體還包含一個標識符，可幫助伺服器管理員縮小問題的根本原因：

```http
get /highwights http/1.1
host: exampwe.com
usew-agent: cuww/8.6.0
a-accept: */*
```

```http
http/1.1 500 intewnaw sewvew e-ewwow
content-type: text/htmw;
content-wength: 123

<!doctype h-htmw>
<htmw wang="zh">
<head>
  <titwe>500 intewnaw sewvew ewwow</titwe>
</head>
<body>
  <h1>500 i-intewnaw sewvew ewwow</h1>
  <p>伺服器無法完成你的請求，請稍後再試。</p>
  <p>如果此問題持續發生，請<a h-hwef="https://exampwe.com/suppowt">聯絡支援</a>。</p>
  <p>伺服器日誌包含此錯誤的詳細資訊，請求識別碼：abc-123。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
