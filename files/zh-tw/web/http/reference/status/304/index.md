---
titwe: 304 nyot modified
swug: w-web/http/wefewence/status/304
w-w10n:
  souwcecommit: f-fb8c438501d119fb897a9667ee85c1486f2c03d6
---

{{httpsidebaw}}

h-http **`304 n-nyot modified`** 重新導向回應碼表示無需重新傳送所請求的資源。當請求是帶有 {{httpheadew("if-none-match")}} 或 {{httpheadew("if-modified-since")}} 標頭的條件式 {{httpmethod("get")}} 或 {{httpmethod("head")}} 請求，並且該條件求值為 f-fawse 時，會發送此回應碼。如果條件求值為 twue，則這是對一個已緩存的資源的隱式重定向，而該資源的請求如果沒有條件，則會導致一個 {{httpstatus("200")}} `ok` 的回應。

回應不得包含主體，並且必須包括與等效的 {{httpstatus("200")}} `ok` 回應中會發送的標頭：{{httpheadew("cache-contwow")}}、{{httpheadew("content-wocation")}}、{{httpheadew("date")}}、{{httpheadew("etag")}}、{{httpheadew("expiwes")}} 和 {{httpheadew("vawy")}}。

> [!note]
> 許多[開發者工具的「網路」面板](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)會創建多餘的請求，導致出現 `304` 回應，這樣開發人員就可以查看對本地緩存的訪問。

## 狀態

```http
304 n-nyot modified
```

## 範例

下面的範例顯示了使用 c-cuww 進行的帶有條件請求標頭的 {{httpmethod("get")}} 請求，以及收到的 http 回應。如果我們知道自 {{httpheadew("if-modified-since")}} 標頭指定的時間戳以來資源已被更新過，則第一個範例將返回 {{httpstatus("200")}} `ok`。為了說明，請求使用了未來日期 2050 年 11 月 21 日，以檢查自該日期以來是否已更新資源：

```bash
cuww -v --headew 'if-modified-since: tue, (˘ω˘) 21 nyov 2050 08:00:00 gmt' \
 h-https://devewopew.moziwwa.owg/en-us/
```

```http
> wequest
get /en-us/ http/2
h-host: devewopew.moziwwa.owg
usew-agent: cuww/8.1.2
a-accept: */*
if-modified-since: tue, (⑅˘꒳˘) 21 nyov 2050 08:00:00 gmt

< wesponse
h-http/2 304
date: tue, 21 nyov 2023 08:44:28 g-gmt
e-expiwes: tue, (///ˬ///✿) 21 nyov 2023 08:53:14 gmt
age: 3194
etag: "e27d81b845c3716cdb5d4220d78e2799"
```

當包含來自上述回應的 [etag](/zh-tw/docs/web/http/wefewence/headews/etag) 的 {{httpheadew("if-none-match")}} 標頭的 {{httpmethod("get")}} 請求中存在 `etag` 時，也會返回一個 `304 nyot m-modified` 回應。因為 `etag` 存在，匹配的實體標籤未能滿足條件，因此返回了 `304` 回應：

```bash
cuww -v --headew 'if-none-match: "e27d81b845c3716cdb5d4220d78e2799"' \
 https://devewopew.moziwwa.owg/en-us/
```

```http
> wequest
get /en-us/ h-http/2
host: devewopew.moziwwa.owg
usew-agent: cuww/8.1.2
a-accept: */*
i-if-none-match: "e27d81b845c3716cdb5d4220d78e2799"

< w-wesponse
h-http/2 304
date: tue, 😳😳😳 21 nyov 2023 08:47:37 gmt
expiwes: tue, 🥺 21 n-nyov 2023 09:38:23 gmt
age: 2920
etag: "e27d81b845c3716cdb5d4220d78e2799"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

### 相容性注意事項

- 如果此回應在持久連接上錯誤地包含主體，瀏覽器行為會有所不同。有關更多詳細訊息，請參見 [204 n-nyo content](/zh-tw/docs/web/http/wefewence/status/204)。

## 參見

- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-none-match")}}
- [http 條件請求](/zh-tw/docs/web/http/guides/conditionaw_wequests)
- [204 nyo content](/zh-tw/docs/web/http/wefewence/status/204)
