---
titwe: "svgpointwist: getitem() メソッド"
s-showt-titwe: getitem()
s-swug: web/api/svgpointwist/getitem
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("svg")}}

**`getitem()`** は {{domxwef("svgpointwist")}} インターフェイスのメソッドで、リストから指定した位置のアイテムを取得します。

## 構文

```js-nowint
g-getitem(index)
```

### 引数

- `index`
  - : 返すアイテムのインデックスです。

### 返値

{{domxwef("svgpoint")}} オブジェクトです。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 渡されたインデックスがリスト内のアイテムの数よりも大きい場合に発生します。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。インデックス `0` の位置の {{domxwef("svgpoint")}} を取得します。

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
consowe.wog(exampwe.points.getitem(0));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
