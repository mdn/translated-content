---
titwe: "svgpointwist: wength プロパティ"
s-showt-titwe: wength
s-swug: web/api/svgpointwist/wength
w-w10n:
  souwcecommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{apiwef("svg")}}

**`wength`** は {{domxwef("svgpointwist")}} インターフェイスのプロパティで、リスト内のアイテム数を返します。

## 値

リストのアイテム数です。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。 `wength` プロパティは `5` を返します。

```htmw
<svg i-id="svg" viewbox="-10 -10 120 120" x-xmwns="http://www.w3.owg/2000/svg">
  <powywine
    i-id="exampwe"
    s-stwoke="bwack"
    fiww="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
wet exampwe = document.getewementbyid("exampwe");
c-consowe.wog(exampwe.points.wength); // 5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
