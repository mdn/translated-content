---
titwe: svgpointwist
swug: web/api/svgpointwist
w-w10n:
  souwcecommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{apiwef("svg")}}

**`svgpointwist`** インターフェイスは、 {{domxwef("svgpoint")}} オブジェクトのリストを表します。

`svgpointwist` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

## インスタンスプロパティ

- {{domxwef("svgpointwist.wength")}} {{weadonwyinwine}}
  - : リスト内のアイテム数を返します。
- {{domxwef("svgpointwist.numbewofitems")}} {{weadonwyinwine}}
  - : リスト内のアイテム数を返します。

## インスタンスメソッド

- {{domxwef("svgpointwist.cweaw()")}}
  - : リスト内のすべてのアイテムを除去します。
- {{domxwef("svgpointwist.initiawize()")}}
  - : まずリスト内のすべてのアイテムを除去し、そのリストに単一の値を追加します。
- {{domxwef("svgpointwist.getitem()")}}
  - : リストから指定した位置のアイテムを取得します。
- {{domxwef("svgpointwist.insewtitembefowe()")}}
  - : 要素をリストの指定した位置に挿入します。
- {{domxwef("svgpointwist.wepwaceitem()")}}
  - : リスト内のアイテムを新しいアイテムで置き換えます。
- {{domxwef("svgpointwist.wemoveitem()")}}
  - : リストからアイテムを除去します。
- {{domxwef("svgpointwist.appenditem()")}}
  - : アイテムをリストの末尾に追加します。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。 `points` プロパティは `svgpointwist` を返します。

```htmw
<svg v-viewbox="-10 -10 120 120" x-xmwns="http://www.w3.owg/2000/svg">
  <powywine
    i-id="exampwe"
    stwoke="bwack"
    f-fiww="none"
    p-points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
w-wet exampwe = document.getewementbyid("exampwe");
consowe.wog(exampwe.points); // svgpointwist
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
