---
titwe: head
swug: web/http/wefewence/methods/head
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**http `head` 方法**請求返回與使用 h-http {{httpmethod("get")}} 方法請求相同 u-uww 時將返回的標頭。例如，如果某個 u-uww 可能產生大文件下載，則 `head` 請求可以讀取其 {{httpheadew("content-wength")}} 標頭以檢查文件大小，而無需實際下載文件。

> [!wawning]
> 對 `head` 方法的回應*不應*包含主體。如果它仍然包含主體，則該主體**必須**被忽略：任何可能描述錯誤主體的{{gwossawy("wepwesentation h-headew", σωσ "表示標頭")}}將被假定為描述類似 `get` 請求將收到的回應。

如果對 `head` 請求的回應顯示緩存的 u-uww 回應現已過時，即使沒有進行 `get` 請求，緩存的副本也將被使無效。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">請求是否有主體</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">成功回應是否有主體</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe/http", σωσ "安全")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent", >_< "冪等")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe", :3 "可緩存")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/fowms">htmw 表單</a>中是否允許
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
head /index.htmw
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpmethod("get")}}
