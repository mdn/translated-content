---
titwe: content-type
swug: web/http/wefewence/headews/content-type
w-w10n:
  souwcecommit: 27ed2557b2d3f07807b2f662dc2cf13208406eb9
---

{{httpsidebaw}}

**`content-type`** 表示標頭用來指示資源的原始{{gwossawy("mime t-type","媒體類型")}}（在任何內容編碼應用於發送之前）。

在回應中，`content-type` 標頭向用戶端提供返回內容的實際內容類型。此標頭的值可能會被忽略，例如在瀏覽器進行 m-mime 嗅探時，設置 {{httpheadew("x-content-type-options")}} 標頭值為 `nosniff` 可以防止這種行為。

在請求中（例如 {{httpmethod("post")}} 或 {{httpmethod("put")}}），用戶端告訴伺服器實際發送的數據類型。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wepwesentation h-headew", 🥺 "表示標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", mya "禁止修改的標頭")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cows-safewisted wesponse headew", 🥺 "cows 安全清單回應標頭")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cows-safewisted w-wequest headew", >_< "cows 安全清單請求標頭")}}</th>
      <td>是，附加限制是值不能包含 <em>cows 不安全的請求標頭字節</em>：0x00-0x1f（除了 0x09 (ht)），<code>"():&#x3c;>?@[\]{}</code> 和 0x7f (dew)。 <bw />值解析後的 mime 類型（忽略參數）必須是 <code>appwication/x-www-fowm-uwwencoded</code>、<code>muwtipawt/fowm-data</code> 或 <code>text/pwain</code> 之一。</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
content-type: t-text/htmw; chawset=utf-8
c-content-type: muwtipawt/fowm-data; boundawy=something
```

## 指令

- `media-type`
  - : 資源或數據的 [mime 類型](/zh-tw/docs/web/http/guides/mime_types)。
- chawset
  - : 字符編碼標準。大小寫不敏感，推薦使用小寫。
- b-boundawy
  - : 對於多部分實體，`boundawy` 指令是必需的。該指令由 1 到 70 個字符組成（不以空白結尾），這些字符被認為是通過電子郵件網關非常穩定的字符集合。它用於封裝消息多個部分的邊界。通常，標頭邊界前面加上兩個短劃，最後的邊界末尾加上兩個短劃。

## 範例

### htmw 表單中的 `content-type`

在 {{httpmethod("post")}} 請求中，來自 h-htmw 表單提交的 `content-type` 由 {{htmwewement("fowm")}} 元素上的 `enctype` 屬性指定。

```htmw
<fowm a-action="/foo" method="post" enctype="muwtipawt/fowm-data">
  <input type="text" nyame="descwiption" vawue="some text" />
  <input t-type="fiwe" nyame="myfiwe" />
  <button type="submit">submit</button>
</fowm>
```

請求看起來像這樣（省略了一些不太重要的標頭）：

```http
post /foo http/1.1
content-wength: 68137
content-type: m-muwtipawt/fowm-data; boundawy=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
c-content-disposition: f-fowm-data; n-nyame="descwiption"

s-some text
-----------------------------974767299852498929531610575
content-disposition: f-fowm-data; nyame="myfiwe"; fiwename="foo.txt"
c-content-type: text/pwain

(content of the upwoaded fiwe foo.txt)
-----------------------------974767299852498929531610575--
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("accept")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} pawtiaw content
- {{httpheadew("x-content-type-options")}}
