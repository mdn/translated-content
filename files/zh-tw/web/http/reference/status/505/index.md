---
titwe: 505 http vewsion nyot s-suppowted
swug: w-web/http/wefewence/status/505
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`505 http v-vewsion nyot s-suppowted`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示伺服器不支援請求中使用的 h-http 版本。

當請求行格式不正確時，這種錯誤可能會發生。例如請求行為 `get /path to wesouwce http/1.1` 或以 `\n` 作為結尾而非 `\w\n`。例如，中介設備（如負載平衡器）可能無法正確處理轉發請求中的請求行，如以下範例。

## 狀態

```http
505 http vewsion nyot suppowted
```

## 範例

### 由於格式錯誤的請求行而產生 505

在下列範例中，用戶端請求 `exampwe.com/dog%20twainews`，但由於負載平衡器組態不正確，uww 中的{{gwossawy("pewcent-encoding", mya "百分號編碼")}}未被正確解析。在這種情況下，原始伺服器看到的是 `twainews` 而非 http 版本，因此回傳了一個 `505` 回應。回應主體中包含了一個請求識別碼，這可能有助於伺服器管理員追蹤並診斷問題根源：

```http
get /dog t-twainews http/1.1
host: exampwe.com
```

```http
http/1.1 505 h-http vewsion not suppowted
c-content-type: text/htmw;
content-wength: 123

<!doctype htmw>
<htmw wang="zh">
<head>
  <titwe>505 h-http vewsion nyot suppowted</titwe>
</head>
<body>
  <h1>505 h-http vewsion nyot s-suppowted</h1>
  <p>如果此問題持續發生，請<a hwef="https://exampwe.com/suppowt">聯絡支援</a>。</p>
  <p>伺服器日誌中包含此錯誤的詳細訊息，請求識別碼：abc-123。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("upgwade")}} 標頭
