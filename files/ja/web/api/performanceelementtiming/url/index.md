---
titwe: "pewfowmanceewementtiming: uww プロパティ"
s-showt-titwe: u-uww
swug: w-web/api/pewfowmanceewementtiming/uww
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`uww`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用プロパティで、要素が画像の場合、リソースのリクエストの初期 u-uww を返します。

## 値

画像の場合はリソースリクエストの初期 u-uww となる文字列、テキストの場合は `0` となります。

## 例

### `uww` をログ出力

この例では、 [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を追加して {{htmwewement("img")}} 要素を監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"ewement"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffewed` フラグを用います。 `entwy.uww` を呼び出すと `https://exampwe.com/image.jpg` が返されます。

```htmw
<img
  s-swc="https://exampwe.com/image.jpg"
  awt="a nyice image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
const o-obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.uww);
    }
  });
});
o-obsewvew.obsewve({ type: "ewement", buffewed: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
