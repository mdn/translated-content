---
titwe: "pewfowmanceewementtiming: intewsectionwect プロパティ"
s-showt-titwe: i-intewsectionwect
s-swug: web/api/pewfowmanceewementtiming/intewsectionwect
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`intewsectionwect`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用プロパティで、ビューポート内の要素の矩形を返します。

## 値

{{domxwef("domwectweadonwy")}} で、ビューポートにおけるこの要素の矩形を表します。

表示画像の場合、これはビューポート内の画像の表示矩形です。テキストの場合、これはビューポート内のノードの表示矩形です。これは、要素に属するすべてのテキストノードを結合したものを格納する最小の長方形です。

## 例

### `intewsectionwect` の出力

この例では、 [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を追加して {{htmwewement("img")}} 要素を監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"ewement"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffewed` フラグを用います。 `entwy.intewsectionwect` を呼び出すと、画像の表示矩形を持つ {{domxwef("domwectweadonwy")}} オブジェクトが返されます。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a nyice image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = new pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.intewsectionwect);
    }
  });
});
obsewvew.obsewve({ t-type: "ewement", -.- buffewed: t-twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
