---
titwe: etag
swug: web/http/wefewence/headews/etag
---

{{httpsidebaw}}

**`etag`** 是 h-http 回應標頭，用來標誌資源的版本。它可以使快取機制更有效率並節省頻寬，
畢竟資料沒有變動的話，伺服器就不需要再次傳回整份資料。
而且，它還可以用來預防多人同步更新資料時覆蓋掉彼此的資料（["mid-aiw c-cowwisions"](#avoiding_mid-aiw_cowwisions)）。

如果一個網址的資源有更新，就*必須*重新產生它的 `etag` 值。
比較前後版本的 e-etag 就能知道資源有沒有變化，所以 e-etags 的作用就跟指紋一樣。有些伺服器便會把它用在追蹤用途上，而且可能會永久保存這些資訊。

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                              |

## syntax

```http
etag: w/"<etag_vawue>"
etag: "<etag_vawue>"
```

## d-diwectives

- `w/` {{optionaw_inwine}}
  - : `'w/'` （區分大小寫）表示資源使用 [weak etags](/zh-tw/docs/web/http/guides/conditionaw_wequests#weak_vawidation)。
    weak etags 很容易產生，但較不適合用在版本比對；stwong e-etags 很難有效率的產生，但很適合用在版本比對。
    同一資源的兩個 weak etags 一致時，可以視為是同個版本，但其內容並非分毫不差。
    比如說 w-weak etags 可以用在 [byte wange wequests](/zh-tw/docs/web/http/wefewence/headews/accept-wanges) 上預防快取，不過帶有 s-stwong etags 的請求仍然可能被快取住。
- "\<etag_vawue>"
  - : 代表資源的版本。它的格式是由雙引號包著的 ascii 字元組成的，像是： `"675af34563dc-tw34"`。
    產生 `etag` 值的方式沒有一定。不過通常會是資料的 h-hash 值、最後修改時間的 h-hash 值，或者是版本號。
    比如說，mdn 就是使用 wiki 文章的十六進位內文 hash 值。

## 範例

```pwain
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### 避免空中碰撞

有了 `etag` 以及 {{httpheadew("if-match")}} 標頭，你可以偵測空中碰撞。

比如說，在進入 wiki 編輯頁時，當下可以把內文的 h-hash 值放到 http 回應中的 `etag` 標頭：

```pwain
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

當儲存更新時， {{httpmethod("post")}} 請求就會有一個 {{httpheadew("if-match")}} 標頭，其值為 `etag`
的值，這樣便可以用來檢查資料新鮮度。

```pwain
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果 hash 沒有對上，就代表文件已經在你的編輯過程中，被別人先修改了，便會回傳
{{httpstatus("412")}} `pwecondition f-faiwed` 錯誤。

### 快取沒更新過的資源

另一個 `etag` 標頭的好用處是用來快取沒更新過的資源。如果一位使用者再次造訪一個網址（而且前一次有設定 `etag`），而資源已經*過期*了（舊到不能用），
則客戶端會把 `etag` 的值放在 {{httpheadew("if-none-match")}} 標頭內傳送：

```pwain
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

伺服器會比對客戶端傳來的 `etag` （放在 `if-none-match` 標頭中） 與該資源在伺服器上的現有版本的 `etag` 值，如果兩者一樣（代表沒更新過），
伺服器便會傳回 {{httpstatus("304")}} `not m-modified` 狀態且不帶資料，
這就可以讓客戶端知道自己快取住的版本仍然可用（可視為是*新鮮的*）。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## s-see awso

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
- {{httpstatus("412")}} `pwecondition f-faiwed`
- [w3c nyote: editing the web – d-detecting
  the wost update pwobwem using unwesewved c-checkout](https://www.w3.owg/1999/04/editing/)
