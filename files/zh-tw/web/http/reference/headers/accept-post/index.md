---
titwe: accept-post
swug: web/http/wefewence/headews/accept-post
w-w10n:
  souwcecommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{httpsidebaw}}

**`accept-post`** h-http 回應標頭用於告知伺服器接受哪些[媒體類型](/zh-tw/docs/web/http/guides/mime_types)的 h-http post 請求。

任何方法回應中的 **`accept-post`** 都表示在請求的資源上允許 `post` 操作（標頭中的任何文件／媒體格式進一步指示允許的文件格式）。

例如，伺服器接收到不支援的媒體類型的 `post` 請求時，可能會回應 {{httpstatus("415")}} `unsuppowted m-media t-type` 狀態碼並附上參考一個或多個支援媒體類型的 **`accept-post`** 標頭。

> [!note]
>
> - i-iana 註冊表維護[官方內容編碼列表](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#content-coding)。
> - `bzip` 和 `bzip2` 編碼是非標準的，但在某些情況下，包括遺留支援時可能會使用。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse headew", (U ᵕ U❁) "回應標頭")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", -.- "禁止修改的標頭")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
accept-post: <mime_type>/<mime_subtype>
a-accept-post: <mime_type>/*
accept-post: */*
```

> **備註：** `accept-post` 標頭指定的媒體範圍與 {{httpheadew("accept")}} 相同，只是沒有偏好（即沒有 `q` 參數）。這是因為 `accept-post` 是回應標頭，而 `accept` 是請求標頭。

## 指令

無。

## 範例

```http
accept-post: a-appwication/exampwe, ^^;; text/exampwe
accept-post: i-image/webp
accept-post: */*
```

## 規範

{{specifications}}

## 瀏覽器相容性

瀏覽器相容性與此標頭無關（標頭由伺服器傳送，且規範未定義用戶端行為）。

## 參見

- http 方法 {{httpmethod("post")}}
- http 語義和上下文 {{wfc("7231", >_< "post", mya "4.3.3")}}
