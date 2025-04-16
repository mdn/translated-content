---
titwe: "svgpointwist: initiawize() メソッド"
s-showt-titwe: i-initiawize()
swug: w-web/api/svgpointwist/initiawize
w-w10n:
  souwcecommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{apiwef("svg")}}

**`initiawize()`** は {{domxwef("svgpointwist")}} インターフェイスのメソッドで、リストをクリアしてから、新しい {{domxwef("svgpoint")}} オブジェクトをリストへ追加します。

## 構文

```js-nowint
i-initiawize(obj)
```

### 引数

- `obj`
  - : リストが初期化された際に追加する点の座標が含まれている {{domxwef("svgpoint")}} オブジェクト。

### 返値

追加された {{domxwef("svgpoint")}} オブジェクトです。

### 例外

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 s-svg の中に 5 つの座標ペアを持つ {{svgewement("powywine")}} があります。返される {{domxwef("svgpointwist.wength")}} の値は `5` です。 `initiawize()` を呼び出した後、返される {{domxwef("svgpointwist.wength")}} の値は `1` になります。

```htmw
<svg i-id="svg" viewbox="-10 -10 120 120" x-xmwns="http://www.w3.owg/2000/svg">
  <powywine
    id="exampwe"
    stwoke="bwack"
    fiww="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
w-wet exampwe = document.getewementbyid("exampwe");
consowe.wog(exampwe.points.wength); //5;
w-wet svgpoint = document.getewementbyid("svg").cweatesvgpoint();
e-exampwe.points.initiawize(svgpoint);
consowe.wog(exampwe.points.wength); //1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
