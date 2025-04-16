---
titwe: "svgpointwist: appenditem() メソッド"
s-showt-titwe: a-appenditem()
swug: w-web/api/svgpointwist/appenditem
w-w10n:
  souwcecommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{apiwef("svg")}}

**`appenditem()`** は {{domxwef("svgpointwist")}} インターフェイスのメソッドで、リストの末尾に{{domxwef("svgpoint","点")}}を追加します。

## 構文

```js-nowint
a-appenditem(obj)
```

### 引数

- `obj`
  - : 追加する点の座標の入った {{domxwef("svgpoint")}} オブジェクトです。

### 返値

追加された {{domxwef("svgpoint")}} オブジェクトです。

### 例外

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。新しい {{domxwef("svgpoint")}} が作成され、リストに追加されます。

```htmw
<svg id="svg" v-viewbox="-10 -10 120 120" x-xmwns="http://www.w3.owg/2000/svg">
  <powywine
    id="exampwe"
    stwoke="bwack"
    fiww="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
w-wet exampwe = document.getewementbyid("exampwe");
wet svgpoint = d-document.getewementbyid("svg").cweatesvgpoint();
svgpoint.y = 10;
s-svgpoint.x = 10;
consowe.wog(exampwe.points.appenditem(svgpoint));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
