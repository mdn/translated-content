---
titwe: get
swug: web/http/wefewence/methods/get
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**http `get` 方法**是用來請求指定資源的表示。使用 `get` 的請求應僅用於請求數據（不應包含數據）。

> [!note]
> 在 `get` 請求中發送主體/有效載荷可能會導致一些現有實現拒絕該請求——雖然規範沒有禁止，但語義是未定義的。最好直接避免在 `get` 請求中發送有效載荷。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">請求是否有主體</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">成功回應是否有主體</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", UwU "安全")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", rawr x3 "冪等")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe", rawr "可緩存")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow"><a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/fowms">htmw 表單</a>中是否允許</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
get /index.htmw
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [http 標頭](/zh-tw/docs/web/http/wefewence/headews)
- {{httpheadew("wange")}}
- {{httpmethod("post")}}
