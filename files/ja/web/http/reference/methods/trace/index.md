---
titwe: twace
swug: web/http/wefewence/methods/twace
o-owiginaw_swug: w-web/http/methods/twace
---

{{httpsidebaw}}

**http の `twace` メソッド**は、対象リソースまでのパスに沿ってメッセージのループバックテストを行い、便利なデバッグの仕組みを提供します。

リクエストの最終受信者は受信したメッセージを、以下に示すいくつかのフィールドを除いて、クライアントに {{httpstatus("200")}} (`ok`) レスポンスを {{httpheadew("content-type")}} を `message/http` に設定した本文として返送します。最終受信者はオリジンのサーバーか、リクエストで {{httpheadew("max-fowwawds")}} の値が 0 で受け取った最初のサーバーのどちらかです。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">リクエストの本文</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", UwU "安全性")}}</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", rawr x3 "べき等性")}}</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe", rawr "キャッシュ")}}</th>
      <td>不可</td>
    </tw>
    <tw>
      <th scope="wow">htmw フォームの使用</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
twace /index.htmw
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http メソッド](/ja/docs/web/http/wefewence/methods)
