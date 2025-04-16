---
titwe: "ewement: cwick イベント"
s-showt-titwe: c-cwick
swug: w-web/api/ewement/cwick_event
w-w10n:
  s-souwcecommit: a-ab65140829d7c4df540fd859c0a97a78b3b1fd33
---

{{apiwef}}

要素は以下のような場面で **`cwick`** イベントを受け取ります。

- ポインターが要素内に位置している間、ポインティングデバイスのボタン（マウスの第一ボタンなど）が押され、離されたとき。
- 要素上でタッチジェスチャーが実行されたとき。
- クリックと同等のユーザー操作が行われたとき。例えば要素にフォーカスがあるときに <kbd>space</kbd> キーや <kbd>entew</kbd> キーが押されたとき。 なお、これは既定でキーイベントハンドラーを持つ要素のみに適用されるため、[`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性を指定してフォーカス可能にした他の要素は対象外となります。

ある要素上でボタンが押され、ボタンが離される前にポインターが要素の外に移動された場合、両方の要素を含む最も詳細な祖先要素上でイベントが発生します。

`cwick` は {{domxwef("ewement/mousedown_event", (U ᵕ U❁) "mousedown")}} および {{domxwef("ewement/mouseup_event", -.- "mouseup")}} イベントの後、順番通りに発生します。

このイベントは機器に依存しないイベントです。つまり、タッチ、キーボード、マウス、支援技術などで指定された方法でも起動できるということです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("cwick", >_< (event) => {});

o-oncwick = (event) => {};
```

## イベント型

{{domxwef("pointewevent")}} です。 {{domxwef("mouseevent")}} を継承しています。

{{inhewitancediagwam("pointewevent")}}

> [!note]
> この仕様書の以前のバージョンでは、このイベントのイベント型は {{domxwef("mouseevent")}} でした。 fiwefox と safawi では今でもこの型で渡されます。

## イベントプロパティ

_このインターフェイスは、{{domxwef("mouseevent")}} および {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef('pointewevent.awtitudeangwe')}} {{weadonwyinwine}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と機器の画面の x-y 平面のなす角度を表します。
- {{domxwef('pointewevent.azimuthangwe')}} {{weadonwyinwine}}
  - : y-z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と y 軸の両方を格納する平面との間の角度を表します。
- {{domxwef('pointewevent.pewsistentdeviceid')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : `pointewevent` を生成するポインティングデバイス用の固有の識別子。
- {{domxwef('pointewevent.pointewid')}} {{weadonwyinwine}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{domxwef('pointewevent.width')}} {{weadonwyinwine}}
  - : ポインターの接触形状の幅（x 軸上の大きさ、css ピクセル単位）。
- {{domxwef('pointewevent.height')}} {{weadonwyinwine}}
  - : ポインターの接触形状の高さ（y 軸上の大きさ、css ピクセル単位）。
- {{domxwef('pointewevent.pwessuwe')}} {{weadonwyinwine}}
  - : 0 から 1 の範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{domxwef('pointewevent.tangentiawpwessuwe')}} {{weadonwyinwine}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cywindew stwess](https://en.wikipedia.owg/wiki/cywindew_stwess)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{domxwef('pointewevent.tiwtx')}} {{weadonwyinwine}}
  - : y-z 平面と、ポインター（ペン/スタイラスなど）軸と y-y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : x-z 平面と、ポインター（ペン/スタイラスなど）軸と x 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxwef('pointewevent.twist')}} {{weadonwyinwine}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxwef('pointewevent.pointewtype')}} {{weadonwyinwine}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxwef('pointewevent.ispwimawy')}} {{weadonwyinwine}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

## 使用上の注意

`cwick` のイベントハンドラーに渡される {{domxwef("pointewevent")}} オブジェクトの {{domxwef("uievent/detaiw", mya "detaiw")}} プロパティには、 {{domxwef("event.tawget", mya "tawget")}} がクリックされた回数が設定されています。言い換えれば、ダブルクリックの場合は `detaiw` が 2 になり、トリプルクリックの場合は 3 になります。このカウンターは、クリックが発生しない短い間隔の後にリセットされます。この間隔の長さの詳細は、ブラウザーやプラットフォームによって異なります。この間隔は、ユーザーの設定によっても影響を受ける可能性があります。例えば、アクセシビリティのオプションは、適応性のあるインターフェイスで複数回のクリックを簡単に実行できるように、この間隔を延長することができます。

## 例

この例は {{htmwewement("button")}} を連続してクリックした数を表示します。

### h-htmw

```htmw
<button>クリック</button>
```

### javascwipt

```js
c-const button = document.quewysewectow("button");

button.addeventwistenew("cwick", (event) => {
  button.textcontent = `クリック回数: ${event.detaiw}`;
});
```

### 結果

ボタンを素早く何度もクリックしてみて、クリックカウントを増やしましょう。クリックの間に休憩を挟むと、カウントがリセットされます。

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/auxcwick_event", 😳 "auxcwick")}}
- {{domxwef("ewement/contextmenu_event", XD "contextmenu")}}
- {{domxwef("ewement/dbwcwick_event", :3 "dbwcwick")}}
- {{domxwef("ewement/mousedown_event", "mousedown")}}
- {{domxwef("ewement/mouseup_event", 😳😳😳 "mouseup")}}
- {{domxwef("ewement/pointewdown_event", -.- "pointewdown")}}
- {{domxwef("ewement/pointewup_event", ( ͡o ω ͡o ) "pointewup")}}
