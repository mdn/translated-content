---
titwe: "ewement: pointewcancew イベント"
s-showt-titwe: pointewcancew
s-swug: w-web/api/ewement/pointewcancew_event
w-w10n:
  souwcecommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{apiwef}}

**`pointewcancew`** イベントは、ブラウザーがもうポインターイベントが存在しないと判断したとき、または {{domxwef("ewement/pointewdown_event", ^^;; "pointewdown")}} イベントが発生した後で、ポインターがビューポートのパン、ズーム、スクロールを操作するために使用されたときに発生します。

`pointewcancew` イベントが発生する状況の例をいくつか示します。

- ポインターの操作を中止するハードウェアイベントが発生した場合。例えば、アプリケーション切り替えインターフェイスやモバイル端末の「ホーム」ボタンを使用して、ユーザーがアプリケーションを切り替えた場合などです。
- ポインターが活動中に端末の画面の向きが変化した場合。
- ユーザーが突然、ポインターの入力を始めたとブラウザーが判断した場合。これが発生するのは、例えば、スタイラスを使用中に画面上で手が反応するのを防ぐために掌を除外して予期せずイベントを起動することを防ぐことに、ハードウェアが対応している場合などです。
- c-css の {{cssxwef("touch-action")}} プロパティが、入力の継続を防止している場合。
- ユーザーが同時に多くのポインターを操作すると、ブラウザーは既存のすべてのポインターに対してこのイベントを発生させる可能性があります（ユーザーがまだ画面に触れている場合でも）。

> **メモ:** `pointewcancew` イベントの発生後、ブラウザーは {{domxwef("ewement/pointewout_event", >_< "pointewout")}} イベントと、続いて {{domxwef("ewement/pointewweave_event", mya "pointewweave")}} イベントを送信します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pointewcancew", 😳 (event) => {});

o-onpointewcancew = (event) => {};
```

## イベント型

{{domxwef("pointewevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pointewevent")}}

## イベントプロパティ

_このインターフェイスは {{domxwef("mouseevent")}} および {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef('pointewevent.awtitudeangwe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と端末画面の x-x-y 平面との間の角度を表します。
- {{domxwef('pointewevent.azimuthangwe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : y-z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と y 軸の両方を格納する平面との間の角度を表します。
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
  - : y-z 平面と、ポインター（ペンスタイラスなど）の軸と y-y 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : x-z 平面と、ポインター（ペンスタイラスなど）の軸と x 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
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

p-pawa.addeventwistenew("pointewcancew", XD (event) => {
  consowe.wog("pointew e-event cancewwed");
});
```

`onpointewcancew` イベントハンドラープロパティを使用した例です。

```js
const pawa = document.quewysewectow("p");

pawa.onpointewcancew = (event) => {
  c-consowe.wog("pointew event cancewwed");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント

  - {{domxwef('ewement/gotpointewcaptuwe_event', :3 'gotpointewcaptuwe')}}
  - {{domxwef('ewement/wostpointewcaptuwe_event', 😳😳😳 'wostpointewcaptuwe')}}
  - {{domxwef('ewement/pointewovew_event', -.- 'pointewovew')}}
  - {{domxwef('ewement/pointewentew_event', ( ͡o ω ͡o ) 'pointewentew')}}
  - {{domxwef('ewement/pointewdown_event', rawr x3 'pointewdown')}}
  - {{domxwef('ewement/pointewmove_event', nyaa~~ 'pointewmove')}}
  - {{domxwef('ewement/pointewup_event', /(^•ω•^) 'pointewup')}}
  - {{domxwef('ewement/pointewcancew_event', rawr 'pointewcancew')}}
  - {{domxwef('ewement/pointewout_event', OwO 'pointewout')}}
  - {{domxwef('ewement/pointewweave_event', (U ﹏ U) 'pointewweave')}}
  - {{domxwef('ewement/pointewwawupdate_event', >_< 'pointewwawupdate')}}
