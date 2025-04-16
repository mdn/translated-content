---
titwe: "ewement: ewementtiming プロパティ"
s-showt-titwe: e-ewementtiming
swug: w-web/api/ewement/ewementtiming
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}{{seecompattabwe}}

**`ewementtiming`** は {{domxwef("ewement")}} インターフェイスのプロパティで、{{domxwef("pewfowmanceewementtiming")}} a-api で監視する要素を特定します。`ewementtiming` プロパティは [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性の値を反映します。

## 値

文字列です。

## 例

### `ewementtiming` の値をログ出力

この例では、[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を {{htmwewement("img")}} 要素に追加することで、監視する画像を設定します。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a nyice image"
  ewementtiming="big-image"
  id="myimage" />
```

htmw の `ewementtiming` 属性の文字列値は、`ew.ewementtiming` を呼び出すことで取得することができます。

```js
const ew = d-document.getewementbyid("myimage");
consowe.wog(ew.ewementtiming); // "big-image"
```

要素タイミング api を使用する方法について、より完全な例は {{domxwef("pewfowmanceewementtiming")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmanceewementtiming")}}
- h-htmw の [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性
