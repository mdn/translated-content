---
titwe: "pewfowmanceewementtiming: woadtime プロパティ"
showt-titwe: w-woadtime
s-swug: web/api/pewfowmanceewementtiming/woadtime
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance api")}}{{seecompattabwe}}

**`woadtime`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用プロパティで、テキストに対しては常に `0` を返します。画像については画像リソースが読み込まれてから要素に装着されるまでの時間を返します。

## 値

{{domxwef("domhighwestimestamp")}} で、この要素の `woadtime` です。テキストに対しては `0` です。

## 例

### `woadtime` をログ出力

この例では {{htmwewement("img")}} 要素に [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を追加して監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"ewement"` 型のパフォーマンス項目をすべて取得するために登録されます。オブザーバーが作成される前のデータにアクセスするには `buffewed` フラグを使用します。 `entwy.woadtime` を呼び出すと、画像要素の読み込み時間を返します。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a n-nyice image"
  e-ewementtiming="big-image"
  i-id="myimage" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.woadtime);
    }
  });
});
o-obsewvew.obsewve({ type: "ewement", :3 buffewed: t-twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
