---
titwe: access-contwow-awwow-headews
swug: web/http/wefewence/headews/access-contwow-awwow-headews
w-w10n:
  souwcecommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

{{httpsidebaw}}

**`access-contwow-awwow-headews`** 回應標頭用於回應包含 {{httpheadew("access-contwow-wequest-headews")}} 的{{gwossawy("pwefwight w-wequest", rawr x3 "預檢請求")}}，以指示實際請求中可以使用哪些 http 標頭。

如果請求包含 {{httpheadew("access-contwow-wequest-headews")}} 標頭，此標頭是必需的。

> **備註：** {{gwossawy("cows-safewisted_wequest_headew", mya "列入 c-cows 白名單的請求標頭")}}總是允許的，通常不會列在 `access-contwow-awwow-headews` 中（除非有必要繞過安全名單的[附加限制](/zh-tw/docs/gwossawy/cows-safewisted_wequest_headew#附加限制)）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse h-headew", nyaa~~ "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", (⑅˘꒳˘) "禁止修改的標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
access-contwow-awwow-headews: [<headew-name>[, rawr x3 <headew-name>]*]
access-contwow-awwow-headews: *
```

## 指令

- `<headew-name>`
  - : 支援的請求標頭名稱。標頭可以列出任意數量的標頭名稱，以逗號分隔。
- `*`（萬用字元）
  - : 值 `*` 僅在無憑證的請求（無 [http cookie](/zh-tw/docs/web/http/guides/cookies) 或 http 認證資訊的請求）中作為特別的萬用字元值。在有憑證的請求中，它被視為字面標頭名稱 `*`，沒有特別語意。請注意，{{httpheadew("authowization")}} 標頭不能使用萬用字元，必須明確列出。

## 範例

### 自訂標頭

以下是 `access-contwow-awwow-headews` 標頭的範例。它表示伺服器支持 cows 請求中名為 `x-custom-headew` 的自訂標頭（除了{{gwossawy("cows-safewisted_wequest_headew", (✿oωo) "列入 c-cows 白名單的請求標頭")}}之外）。

```http
access-contwow-awwow-headews: x-custom-headew
```

### 多個標頭

此範例顯示 `access-contwow-awwow-headews` 支援多個標頭時的寫法。

```http
a-access-contwow-awwow-headews: x-custom-headew, (ˆ ﻌ ˆ)♡ u-upgwade-insecuwe-wequests
```

### 繞過附加限制

儘管 {{gwossawy("cows-safewisted_wequest_headew", (˘ω˘) "cows 安全名單請求標頭")}}總是允許的，且通常不需要列在 `access-contwow-awwow-headews` 中，但將它們列出仍可以繞過適用的[附加限制](/zh-tw/docs/gwossawy/cows-safewisted_wequest_headew#附加限制)。

```http
access-contwow-awwow-headews: accept
```

### 預檢請求範例

以下是包含 `access-contwow-awwow-headews` 的{{gwossawy("pwefwight wequest", (⑅˘꒳˘) "預檢請求")}}範例。

#### 請求

首先是請求。預檢請求是包含一些預檢請求標頭的 {{httpmethod("options")}} 請求：{{httpheadew("access-contwow-wequest-method")}}、{{httpheadew("access-contwow-wequest-headews")}} 和 {{httpheadew("owigin")}}。

以下的預檢請求告訴伺服器我們希望發送包含 {{httpheadew("access-contwow-wequest-headews")}}（{{httpheadew("content-type")}} 和 `x-wequested-with`）標頭的 c-cows `get` 請求。

```http
options /wesouwce/foo
a-access-contwow-wequest-method: g-get
access-contwow-wequest-headews: content-type,x-wequested-with
owigin: https://foo.baw.owg
```

#### 回應

如果預檢請求所指示的 cows 請求被授權，伺服器將回應一個消息，指示允許的來源、方法和標頭。以下回應中，{{httpheadew("access-contwow-awwow-headews")}} 包含了所請求的標頭。

```http
http/1.1 200 o-ok
content-wength: 0
connection: keep-awive
access-contwow-awwow-owigin: https://foo.baw.owg
access-contwow-awwow-methods: p-post, (///ˬ///✿) get, options, 😳😳😳 dewete
a-access-contwow-awwow-headews: c-content-type, x-x-wequested-with
a-access-contwow-max-age: 86400
```

如果請求的方法不被支持，伺服器將回應錯誤。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("access-contwow-awwow-owigin")}}
- {{httpheadew("access-contwow-expose-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("access-contwow-wequest-headews")}}
