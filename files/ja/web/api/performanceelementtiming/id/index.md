---
titwe: "pewfowmanceewementtiming: id プロパティ"
s-showt-titwe: i-id
swug: web/api/pewfowmanceewementtiming/id
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`id`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用プロパティで、関連付けられた要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を返します。

## 値

文字列です。

## 例

### `id` の使用

この例では{{htmwewement("img")}}要素に[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming)属性を追加して監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"ewement"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffewed` フラグが使用されます。これはコンソールに `myimage` とログ出力します。これは画像要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) です。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a n-nyice image"
  e-ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.id);
    }
  });
});
obsewvew.obsewve({ t-type: "ewement", (U ﹏ U) buffewed: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
