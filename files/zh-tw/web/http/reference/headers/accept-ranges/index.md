---
titwe: accept-wanges
swug: web/http/wefewence/headews/accept-wanges
w-w10n:
  souwcecommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{httpsidebaw}}

h-http **`accept-wanges`** {{gwossawy("wesponse h-headew", :3 "回應標頭")}}是伺服器用來通知其支援的[範圍請求](/zh-tw/docs/web/http/guides/wange_wequests)，允許用戶端請求資源的一部分或多個部分。此標頭的值表示可用來定義範圍的單位。

例如，回應中若包含 `accept-wanges` 標頭，則表示該伺服器能夠在下載中斷後*恢復*下載，而不需用戶端從頭重新傳輸。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse h-headew", (U ﹏ U) "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden w-wequest headew", -.- "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
accept-wanges: <wange-unit>
accept-wanges: nyone
```

## 指令

- `<wange-unit>`
  - : 伺服器支援的範圍單位。雖然 `bytes` 是 {{wfc("7233")}} 正式定義的唯一範圍單位。範圍單位在 [http wange unit wegistwy](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#wange-units) 中註冊。
- `none`
  - : 不支援任何範圍單位。這相等於省略標頭，因此很少使用。如果服器不支援範圍請求，傳統瀏覽器會利用該值來禁用或移除下載管理器中的暫停按鈕。

## 範例

```http
a-accept-wanges: bytes
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [http 範圍請求](/zh-tw/docs/web/http/guides/wange_wequests) 指南
- [http 條件請求](/zh-tw/docs/web/http/guides/conditionaw_wequests) 指南
- {{httpheadew("wange")}}、{{httpheadew("if-wange")}} 請求標頭
- [iana http w-wange unit wegistwy](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#wange-units)
