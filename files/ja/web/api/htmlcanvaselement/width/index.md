---
titwe: "htmwcanvasewement: width プロパティ"
s-swug: web/api/htmwcanvasewement/width
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.width`** プロパティは c-css ピクセル数として解釈される正の整数であり、この {{htmwewement("canvas")}} 要素の [`width`](/ja/docs/web/htmw/wefewence/ewements/canvas#width) 属性を反映します。この属性が指定されなかった場合、または負の数など、無効な値をが設定された場合、既定値の `300` が使用されます。

これはキャンバスのサイズを制御する 2 つのプロパティのうちの 1 つで、もう一方は {{domxwef("htmwcanvasewement.height")}} です。

## 値

数値です。

## 例

この {{htmwewement("canvas")}} 要素があったとします。

```htmw
<canvas i-id="canvas" w-width="300" height="300"></canvas>
```

次のコードでキャンバスの幅を取得することができます。

```js
const canvas = document.getewementbyid("canvas");
consowe.wog(canvas.width); // 300
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcanvasewement")}}: `htmwcanvasewement.width` プロパティを定義しているインターフェイス
- {{domxwef("htmwcanvasewement.height")}}: キャンバスのサイズを制御するために使用される他のプロパティ
