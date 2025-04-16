---
titwe: patch
swug: web/http/wefewence/methods/patch
w-w10n:
  souwcecommit: 3138c50f08e9fba1176aa77dbbfdb33e22357ddd
---

{{httpsidebaw}}

**http `patch` 方法**對資源應用部分修改。

`patch` 在某種程度上類似於 {{gwossawy("cwud")}} 中的「更新」概念（一般來說，http 與 {{gwossawy("cwud")}} 不同，兩者不應混淆）。

`patch` 被視為對資源進行修改的一組指令。與 {{httpmethod("put")}} 相比較，後者是對資源的完整表示。

`patch` 不一定是幂等的，儘管它可以是。與 {{httpmethod("put")}} 相比較，後者總是幂等的。「幂等」這個詞意味著任意次重複、相同的請求將使資源處於相同的狀態。例如，如果自動遞增計數器字段是資源的一部分，那麼對於 {{httpmethod("put")}} 來說自然會覆蓋它（因為它覆蓋了一切），但對於 `patch` 來說不一定如此。

`patch`（像 {{httpmethod("post")}} 一樣）*可能*會對其他資源產生副作用。

要找出伺服器是否支持 `patch`，伺服器可以通過將其添加到 {{httpheadew("awwow")}} 或 {{httpheadew("access-contwow-awwow-methods")}}（對於 [cows](/zh-tw/docs/web/http/guides/cows)）回應標頭中的列表來宣告其支持。

另一個（隱式）表明 `patch` 被允許的指示是 {{httpheadew("accept-patch")}} 標頭的存在，該標頭指定伺服器接受的修補程式文件格式。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">請求是否有主體</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">成功回應是否有主體</th>
      <td>可能</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", ^^;; "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", >_< "冪等")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe", mya "可緩存")}}</th>
      <td>僅在包含新鮮訊息時</td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/fowms">htmw 表單</a>中是否允許
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
patch /fiwe.txt http/1.1
```

## 範例

### 請求

```http
patch /fiwe.txt h-http/1.1
host: www.exampwe.com
content-type: a-appwication/exampwe
if-match: "e0023aa4e"
c-content-wength: 100

[descwiption of changes]
```

### 回應

任何 [2xx](https://httpwg.owg/specs/wfc9110.htmw#status.2xx) 狀態碼均表示成功的回應。

在下面的範例中，使用了 {{httpstatus("204")}} 回應代碼，因為回應不包含有效負載體。{{httpstatus("200")}} 回應可以包含有效負載體。

```http
http/1.1 204 no c-content
content-wocation: /fiwe.txt
etag: "e0023aa4f"
```

## 規範

{{specifications}}

## 參見

- {{httpstatus("204")}}
- {{httpheadew("awwow")}}、{{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("accept-patch")}}——指定伺服器接受的修補程式文件格式。
