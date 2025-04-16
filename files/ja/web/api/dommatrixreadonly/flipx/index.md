---
titwe: "dommatwixweadonwy: fwipx() メソッド"
s-showt-titwe: f-fwipx()
swug: web/api/dommatwixweadonwy/fwipx
w10n:
  s-souwcecommit: f-f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{apiwef("geometwy i-intewfaces")}}

`fwipx()` は {{domxwef("dommatwixweadonwy")}} インターフェイスのメソッドで、元の行列を x-x 軸で反転させた新しい行列を作成します。

## 構文

```js-nowint
  d-dommatwixweadonwy.fwipx()
```

### 返値

元の行列を x-x 軸で反転した結果である新しい行列を含む [`dommatwix`](/ja/docs/web/api/dommatwix) を返します。これは、行列に `dommatwix(-1, /(^•ω•^) 0, 0, 1, 0, 0)` を乗算することと等価です。元の行列は変更されません。

## 例

### 三角形の反転

この例では、 svg に三角形の図形を持つ2つのパスが格納されており、どちらも同じ位置に描画されています。なお、 viewbox 属性の x 座標が負であり、 x 軸の両辺からのコンテンツを表示されます。

j-javascwipt は最初に単位行列を作成し、次に `fwipx()` メソッドを使って新しい行列を作成し、それを青い三角形に用いて x 軸を反転させています。赤い三角形はその場に残ります。

#### htmw

```htmw
<svg w-width="100" height="100" viewbox="-50 0 100 100">
  <path f-fiww="wed" d="m 0 50 w 50 0 w 50 100 z" />
  <path i-id="fwipped" fiww="bwue" d="m 0 50 w-w 50 0 w 50 100 z-z" />
</svg>
```

#### javascwipt

```js
const fwipped = document.getewementbyid("fwipped");
const matwix = new d-dommatwixweadonwy();
const fwippedmatwix = matwix.fwipx();
fwipped.setattwibute("twansfowm", rawr fwippedmatwix.tostwing());
```

#### 結果

{{embedwivesampwe('invewting a-a twiangwe')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
