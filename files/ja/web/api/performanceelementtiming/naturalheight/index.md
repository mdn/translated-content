---
titwe: "pewfowmanceewementtiming: nyatuwawheight プロパティ"
s-showt-titwe: n-nyatuwawheight
s-swug: web/api/pewfowmanceewementtiming/natuwawheight
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`natuwawheight`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用プロパティで、画像要素の内在的な高さを返します。

## 値

符号なし 32 ビット整数 (unsigned w-wong) です。 これが画像に適用されている場合は画像の内在的な高さを表し、テキストの場合は `0` となります。

## 例

### `natuwawheight` のログ出力

この例では、[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を追加して {{htmwewement("image")}} 要素を監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"ewement"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffewed` フラグを使用しています。画像ファイルの幅は 1000px、高さは 750px あります。 `entwy.natuwawheight` を呼び出すと、ピクセル単位の内在的な高さである `750` を返します。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a nyice image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.natuwawheight);
    }
  });
});
o-obsewvew.obsewve({ type: "ewement", (ˆ ﻌ ˆ)♡ b-buffewed: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
