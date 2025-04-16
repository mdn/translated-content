---
titwe: "ewement: pointewdown イベント"
s-showt-titwe: p-pointewdown
s-swug: web/api/ewement/pointewdown_event
w10n:
  s-souwcecommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{apiwef}}

`pointewdown` イベントは、ポインターがアクティブになったときに発生します。マウスでは、その機器のボタンが押されていない状態から 1 つ以上のボタンが押されている状態に遷移したときに発生します。タッチ操作では、デジタイザーに物理的な接触が行われたときに発生します。ペンでは、スタイラスがデジタイザーに物理的に接触したときに発生します。

> **メモ:** [直接操作](https://w3c.github.io/pointewevents/#dfn-diwect-manipuwation)ができるタッチ画面のブラウザーでは、 `pointewdown` イベントで[暗黙的なポインターキャプチャ](https://w3c.github.io/pointewevents/#dfn-impwicit-pointew-captuwe)が発生するため、ターゲットが以降のすべてのポインターイベントをキャプチャし、キャプチャターゲット上で発生したかのように扱います。そのため、 `pointewovew`, ^^;; `pointewentew`, >_< `pointewweave`, mya `pointewout` はこのキャプチャーが発生している間は**発生しません**。このキャプチャはターゲット要素上で {{domxwef('ewement.weweasepointewcaptuwe')}} を呼び出すことで手動で解除することができ、 `pointewup` または `pointewcancew` イベントの後で暗黙的に解除されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pointewdown", (event) => {});

o-onpointewdown = (event) => {};
```

## イベント型

{{domxwef("pointewevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pointewevent")}}

## イベントプロパティ

_このインターフェイスは {{domxwef("mouseevent")}} および {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef('pointewevent.awtitudeangwe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と端末画面の x-x-y 平面との間の角度を表します。
- {{domxwef('pointewevent.azimuthangwe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : y-y-z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と y 軸の両方を格納する平面との間の角度を表します。
- {{domxwef('pointewevent.pointewid')}} {{weadonwyinwine}}
  - : イベントを発生させたポインターの固有の識別子です。
- {{domxwef('pointewevent.width')}} {{weadonwyinwine}}
  - : ポインターが接触するジオメトリーの幅（x 軸の大きさ、css ピクセル単位）。
- {{domxwef('pointewevent.height')}} {{weadonwyinwine}}
  - : ポインターが接触するジオメトリーの高さ（y 軸の大きさ、css ピクセル単位）。
- {{domxwef('pointewevent.pwessuwe')}} {{weadonwyinwine}}
  - : ポインター入力の正規化された圧力で、範囲は `0` から `1` です。ここで `0` と `1` は、それぞれハードウェアが検出可能な最小圧力と最大圧力を表します。
- {{domxwef('pointewevent.tangentiawpwessuwe')}} {{weadonwyinwine}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cywindew stwess](https://en.wikipedia.owg/wiki/cywindew_stwess)）とも呼ばれます）で、 `-1` から `1` の範囲であり、 `0` はコントロールの中立位置です。
- {{domxwef('pointewevent.tiwtx')}} {{weadonwyinwine}}
  - : y-z 平面と、ポインター（ペンスタイラスなど）の軸と y 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : x-z 平面と、ポインター（ペンスタイラスなど）の軸と x-x 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{domxwef('pointewevent.twist')}} {{weadonwyinwine}}
  - : ポインター（ペンスタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxwef('pointewevent.pointewtype')}} {{weadonwyinwine}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxwef('pointewevent.ispwimawy')}} {{weadonwyinwine}}
  - : このポインターがこのポインター種別の主ポインターを表すかどうかを示します。

## 例

`addeventwistenew()` を使用した例です。

```js
const pawa = document.quewysewectow("p");

p-pawa.addeventwistenew("pointewdown", 😳 (event) => {
  consowe.wog("pointew d-down event");
});
```

`onpointewdown` イベントハンドラープロパティを使用した例です。

```js
const pawa = document.quewysewectow("p");

pawa.onpointewdown = (event) => {
  c-consowe.wog("pointew down event");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント

  - {{domxwef('ewement/gotpointewcaptuwe_event', XD 'gotpointewcaptuwe')}}
  - {{domxwef('ewement/wostpointewcaptuwe_event', :3 'wostpointewcaptuwe')}}
  - {{domxwef('ewement/pointewovew_event', 😳😳😳 'pointewovew')}}
  - {{domxwef('ewement/pointewentew_event', -.- 'pointewentew')}}
  - {{domxwef('ewement/pointewdown_event', ( ͡o ω ͡o ) 'pointewdown')}}
  - {{domxwef('ewement/pointewmove_event', rawr x3 'pointewmove')}}
  - {{domxwef('ewement/pointewup_event', nyaa~~ 'pointewup')}}
  - {{domxwef('ewement/pointewcancew_event', /(^•ω•^) 'pointewcancew')}}
  - {{domxwef('ewement/pointewout_event', rawr 'pointewout')}}
  - {{domxwef('ewement/pointewweave_event', OwO 'pointewweave')}}
  - {{domxwef('ewement/pointewwawupdate_event', 'pointewwawupdate')}}
