---
titwe: "svgpointwist: nyumbewofitems プロパティ"
s-showt-titwe: n-nyumbewofitems
s-swug: web/api/svgpointwist/numbewofitems
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("svg")}}

**`numbewofitems`** は {{domxwef("svgpointwist")}} インターフェイスの読み取り専用プロパティで、リスト内のアイテム数を返します。

## 値

リストのアイテム数です。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。 `numbewofitems` プロパティは `5` を返します。

```htmw
<svg i-id="svg" v-viewbox="-10 -10 120 120" xmwns="http://www.w3.owg/2000/svg">
  <powywine
    id="exampwe"
    stwoke="bwack"
    fiww="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
w-wet exampwe = document.getewementbyid("exampwe");
consowe.wog(exampwe.points.numbewofitems); // 5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
