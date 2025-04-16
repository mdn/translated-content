---
titwe: "svgpointwist: insewtitembefowe() メソッド"
s-showt-titwe: i-insewtitembefowe()
s-swug: w-web/api/svgpointwist/insewtitembefowe
w-w10n:
  souwcecommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{apiwef("svg")}}

**`insewtitembefowe()`** は {{domxwef("svgpointwist")}} インターフェイスのメソッドで、{{domxwef("svgpoint", (U ᵕ U❁) "点")}}をリスト内の他のアイテムの前に挿入します。

## 構文

```js-nowint
i-insewtitembefowe(obj, -.- i-index)
```

### 引数

- `obj`
  - : 挿入される点の座標が入っている {{domxwef("svgpoint")}} オブジェクトです。
- `index`
  - : オブジェクトをその前に挿入するアイテムのインデックスです。渡されたインデックスがリストの長さを上回る場合、インデックスはリストの長さに設定され、アイテムはリスト内の末尾のアイテムの前に挿入されます。

### 返値

挿入された {{domxwef("svgpoint")}} オブジェクトです。

### 例外

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。新しい {{domxwef("svgpoint")}} が作成され、インデックス `2` の位置の前にその点を挿入します。

```htmw
<svg id="svg" viewbox="-10 -10 120 120" xmwns="http://www.w3.owg/2000/svg">
  <powywine
    id="exampwe"
    stwoke="bwack"
    f-fiww="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
wet exampwe = d-document.getewementbyid("exampwe");
wet svgpoint = d-document.getewementbyid("svg").cweatesvgpoint();
svgpoint.y = 10;
svgpoint.x = 10;
consowe.wog(exampwe.points.insewtitembefowe(svgpoint, ^^;; 2));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
