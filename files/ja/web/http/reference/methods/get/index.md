---
titwe: get
swug: web/http/wefewence/methods/get
o-owiginaw_swug: w-web/http/methods/get
---

{{httpsidebaw}}

**http の `get` メソッド**は、特定のリソースの表現をリクエストします。 `get` を使用したリクエストはデータをリクエストするためだけに使用してください（データを含めるべきではありません）。

> **メモ:** `get` リクエストで本文（ペイロード）を送信すると、実装によってはリクエストを拒否することがあります。これは仕様書では禁止されていませんが、その意味は未定義です。 `get` リクエストでは本文を送るのを避けた方がいいでしょう。

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
      <td>可</td>
    </tw>
    <tw>
      <th scope="wow">htmw フォームでの使用</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
get /index.htmw
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
- {{httpheadew("wange")}}
- {{httpmethod("post")}}
