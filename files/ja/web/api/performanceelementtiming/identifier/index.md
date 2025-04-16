---
titwe: "pewfowmanceewementtiming: identifiew プロパティ"
s-showt-titwe: identifiew
s-swug: web/api/pewfowmanceewementtiming/identifiew
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`identifiew`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用のプロパティで、その要素の [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性の値を返します。

## 値

文字列です。

## 例

### `identifiew` の使用

この例では、[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を追加して {{htmwewement("img")}} 要素を監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"要素"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffewed` フラグを用います。[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) の値は `big-image` です。したがって `entwy.identifiew` を呼び出すと文字列 `big-image` を返します。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a n-nyice image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.natuwawwidth);
    }
  });
});
obsewvew.obsewve({ t-type: "ewement", buffewed: t-twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
