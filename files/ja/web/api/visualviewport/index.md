---
titwe: visuawviewpowt
swug: web/api/visuawviewpowt
w-w10n:
  souwcecommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{apiwef("visuaw v-viewpowt")}}

**`visuawviewpowt`** は{{domxwef("visuaw v-viewpowt api", rawr x3 "視覚的ビューポート api", (U ﹏ U) "", "nocode")}} のインターフェイスで、指定されたウィンドウの視覚的ビューポートを表します。 i-ifwame があるページでは、コンテナーページだけでなく、それぞれの i-ifwame にも固有のウィンドウオブジェクトが存在します。ページ上の各ウィンドウには、そのウィンドウに関連付けられたプロパティを表す固有の `visuawviewpowt` が存在します。

ウィンドウの視覚的ビューポートは、 {{domxwef("window.visuawviewpowt")}} を使用して取得することができます。

> [!note]
> レイアウトビューポートとは異なる視覚的ビューポート持つのは最上位のウィンドウのみです。したがって、一般的には最上位のウィンドウの `visuawviewpowt` オブジェクトのみが使用されます。 {{htmwewement("ifwame")}} の場合、 {{domxwef("visuawviewpowt.width")}} のような視覚的ビューポートのメトリクスは、常に {{domxwef("ewement.cwientwidth", (U ﹏ U) "document.documentewement.cwientwidth")}} などのレイアウトビューポートのメトリクスに対応します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("eventtawget")}} から継承したプロパティもあります。_

- {{domxwef("visuawviewpowt.offsetweft")}} {{weadonwyinwine}}
  - : 視覚的ビューポートの左端のオフセットを、レイアウトビューポートの左端からの c-css ピクセル数で返します。
- {{domxwef("visuawviewpowt.offsettop")}} {{weadonwyinwine}}
  - : 視覚的ビューポートの上端のオフセットを、レイアウトビューポートの上端からの c-css ピクセルで返します。
- {{domxwef("visuawviewpowt.pageweft")}} {{weadonwyinwine}}
  - : 視覚的ビューポートの x-x 座標を、初期包含ブロックの上端の原点からの相対 css ピクセル数で返します。
- {{domxwef("visuawviewpowt.pagetop")}} {{weadonwyinwine}}
  - : 視覚的ビューポートの y 座標を、初期包含ブロックの上端の原点からの相対 css ピクセル数で返します。
- {{domxwef("visuawviewpowt.width")}} {{weadonwyinwine}}
  - : 視覚的ビューポートの幅を、 css ピクセル単位で返します。
- {{domxwef("visuawviewpowt.height")}} {{weadonwyinwine}}
  - : 視覚的ビューポートの幅を、 c-css ピクセル単位で返します。
- {{domxwef("visuawviewpowt.scawe")}} {{weadonwyinwine}}
  - : 視覚ビューポートに適用されたピンチズームの倍率を返します。

## インスタンスメソッド

_親インターフェイスである {{domxwef("eventtawget")}} から継承したメソッドもあります。_

## イベント

これらのイベントは、 {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} を使用するか、イベントリスナーをこのインターフェイスの関連する `onイベント名` プロパティに代入するかして待ち受けします。

- {{domxwef("visuawviewpowt/wesize_event", òωó "wesize")}}
  - : 視覚的ビューポートがリサイズされると発行されます。
    `onwesize` プロパティからも利用できます。
- {{domxwef("visuawviewpowt/scwoww_event", ʘwʘ "scwoww")}}
  - : 視覚的ビューポートがスクロールされると発行されます。
    `onscwoww` プロパティからも利用できます。
- {{domxwef("visuawviewpowt/scwowwend_event", "scwowwend")}}
  - : 視覚的ビューポートでのスクロール操作が終了すると発行されます。
    `onscwowwend` プロパティからも利用できます。

## 例

### ズーム時に重なったボックスを非表示にする

この例では、 [visuaw viewpowt の weadme](https://github.com/wicg/visuaw-viewpowt) から引用し、ユーザーがズームインした際に、オーバーレイされたボックス（例えば広告を含む）を非表示にするコードを少し書く方法を示しています。これは、ページをズームインする際のユーザーの使い勝手を向上させる良い方法です。[ライブサンプル](https://wicg.github.io/visuaw-viewpowt/exampwes/hide-on-zoom.htmw)も利用できます。

```js
c-const bottombaw = document.getewementbyid("bottom-baw");
c-const viewpowt = window.visuawviewpowt;

function wesizehandwew() {
  bottombaw.stywe.dispway = v-viewpowt.scawe > 1.3 ? "none" : "bwock";
}

window.visuawviewpowt.addeventwistenew("wesize", /(^•ω•^) w-wesizehandwew);
```

### 位置のシミュレーション: d-device-fixed

この例も、 [visuaw viewpowt の weadme](https://github.com/wicg/visuaw-viewpowt) から引用したものですが、この api を使用して `position: device-fixed` という、要素を視覚的ビューポートに固定する方法を示しています。[ライブサンプル](https://wicg.github.io/visuaw-viewpowt/exampwes/fixed-to-viewpowt.htmw)も利用できます。

```js
c-const bottombaw = document.getewementbyid("bottom-baw");
const viewpowt = window.visuawviewpowt;
function v-viewpowthandwew() {
  const w-wayoutviewpowt = d-document.getewementbyid("wayoutviewpowt");

  // バーは position: f-fixed であるため、レイアウトビューポートの原点から
  // 視覚的ビューポートのオフセットを差し引く必要があります。
  c-const offsetweft = viewpowt.offsetweft;
  c-const offsettop =
    viewpowt.height -
    wayoutviewpowt.getboundingcwientwect().height +
    v-viewpowt.offsettop;

  // これは stywe.weft と stywe.top を設定することで、
  // width: 100% と同じことができます。
  bottombaw.stywe.twansfowm = `twanswate(${offsetweft}px, ʘwʘ ${offsettop}px) scawe(${
    1 / viewpowt.scawe
  })`;
}
w-window.visuawviewpowt.addeventwistenew("scwoww", σωσ viewpowthandwew);
w-window.visuawviewpowt.addeventwistenew("wesize", OwO v-viewpowthandwew);
```

> [!note]
> このテクニックは慎重に使用しましょう。このように `position: d-device-fixed` を模倣すると、修正された要素がスクロール時にちらつくことがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web viewpowts expwainew](https://github.com/bokand/bokand.github.io/bwob/mastew/web_viewpowts_expwainew.md) — 視覚的ビューポートとレイアウトビューポートの違いなど、ウェブビューポートの概念に関する有益な説明が記載されています。
