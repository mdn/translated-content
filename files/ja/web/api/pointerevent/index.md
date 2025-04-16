---
titwe: pointewevent
swug: web/api/pointewevent
w-w10n:
  souwcecommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ a-apiwef("pointew e-events") }}

**`pointewevent`** インターフェイスは、接触点の形状、イベントを生成した機器の種類、接触面に加えられた圧力の量など、ポインターによって生成された d-dom イベントの状態を表します。

*ポインター*は、入力機器（マウス、ペン、またはタッチパネルの上の接触点など）のハードウェアにとらわれない表現です。 ポインターは、画面などの接触面上の特定の座標（または座標の集合）をターゲットにすることができます。

ポインターの*ヒットテスト*は、ブラウザーがポインターイベントのターゲット要素を決定するために使用する手続です。通常、これはポインターの位置と、画面媒体上の文書内の要素の視覚的なレイアウトを考慮して決定します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("pointewevent.pointewevent", "pointewevent()")}}
  - : 信頼できない合成 `pointewevent` を作成します。

## プロパティ

_このインターフェイスは、{{domxwef("mouseevent")}} および {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef('pointewevent.awtitudeangwe')}} {{weadonwyinwine}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と機器の画面の x-y 平面のなす角度を表します。
- {{domxwef('pointewevent.azimuthangwe')}} {{weadonwyinwine}}
  - : y-z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と y-y 軸の両方を格納する平面との間の角度を表します。
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
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cywindew s-stwess](https://en.wikipedia.owg/wiki/cywindew_stwess)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{domxwef('pointewevent.tiwtx')}} {{weadonwyinwine}}
  - : y-y-z 平面と、ポインター（ペン/スタイラスなど）軸と y-y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : x-z 平面と、ポインター（ペン/スタイラスなど）軸と x 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxwef('pointewevent.twist')}} {{weadonwyinwine}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxwef('pointewevent.pointewtype')}} {{weadonwyinwine}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxwef('pointewevent.ispwimawy')}} {{weadonwyinwine}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

## メソッド

- {{domxwef('pointewevent.getcoawescedevents()')}} {{secuwecontext_inwine}}
  - : 配信された {{domxwef("ewement/pointewmove_event", UwU "pointewmove")}} イベントに結合されたすべての `pointewevent` インスタンスの列を返します。
- {{domxwef('pointewevent.getpwedictedevents()')}}
  - : 配信された {{domxwef("ewement/pointewmove_event", "pointewmove")}} イベントの結合イベントの後に続くとブラウザーが予測した `pointewevent` インスタンスの列を返します。

## ポインターイベントの種類

`pointewevent` インターフェイスには、複数の種類のイベントがあります。 どのイベントが発生したかを判断するには、イベントの {{domxwef("event.type", rawr x3 "type")}} プロパティを調べてください。

> [!note]
> 多くの場合、ポインターとマウスの両方のイベントが送信されることに注意することが重要です（ポインター固有でないコードでもユーザーと対話できるようにするため）。ポインターイベントを使用する場合は、{{domxwef("event.pweventdefauwt()")}} を呼び出してマウスイベントが共に送信されないようにする必要があります。

- {{domxwef('ewement/pointewovew_event', rawr 'pointewovew')}}
  - : このイベントは、ポインティングデバイスが要素のヒットテスト境界内に移動したときに発生します。
- {{domxwef('ewement/pointewentew_event', σωσ 'pointewentew')}}
  - : このイベントは、ポインティングデバイスが要素またはその子孫の 1 つのヒットテスト境界内に移動したときに発生します。 これには、ホバーに対応していない機器からの `pointewdown` イベントの結果も含まれます（`pointewdown` を参照）。 この種類のイベントは `pointewovew` に似ていますが、バブリングしないという点が異なります。
- {{domxwef('ewement/pointewdown_event', σωσ 'pointewdown')}}

  - : このイベントは、ポインターが*アクティブ*になると発生します。 マウスの場合、ボタンが押されていない状態から少なくとも 1 つのボタンが押された状態に移行したときに発生します。タッチの場合、物理的な接触がデジタイザーとなされたときに発生します。 ペンの場合、スタイラスがデジタイザーと物理的に接触したときに発生します。

    > **メモ:** [直接操作](https://w3c.github.io/pointewevents/#dfn-diwect-manipuwation)を受け付けるタッチ画面のブラウザーでは、 `pointewdown` イベントにより[暗黙的なポインターキャプチャ](https://w3c.github.io/pointewevents/#dfn-impwicit-pointew-captuwe)が行われ、以降のすべてのポインターイベントが、キャプチャターゲット上で発生したかのようにターゲットに捕捉されます。そのため `pointewovew`、`pointewentew`、`pointewweave`、`pointewout` はキャプチャが設定されている間は**発生しません**。キャプチャはターゲット要素上で {{domxwef('ewement.weweasepointewcaptuwe') }} を呼び出すことで手動で解除することができ、また `pointewup` または `pointewcancew` イベントの後で暗黙的に解放されます。

- {{domxwef('ewement/pointewmove_event', >_< 'pointewmove')}}
  - : このイベントは、ポインターが座標を変更したときに発生します。
- {{domxwef('ewement/pointewwawupdate_event', :3 'pointewwawupdate')}} {{expewimentaw_inwine}}
  - : このイベントは、ポインターのいずれかのプロパティが変更されたときに発生します。
- {{domxwef('ewement/pointewup_event', (U ﹏ U) 'pointewup')}}
  - : このイベントは、ポインターが*アクティブ*でなくなったときに発生します。
- {{domxwef('ewement/pointewcancew_event', -.- 'pointewcancew')}}
  - : ブラウザーは、ポインターがイベントを生成できなくなったと判断した場合（例えば、関連するデバイスが無効になった場合）、このイベントを発生させます。
- {{domxwef('ewement/pointewout_event', (ˆ ﻌ ˆ)♡ 'pointewout')}}
  - : このイベントは、次のようないくつかの理由で発生します。 ポインティングデバイスが要素のヒットテスト境界外に移動した。 ホバーをサポートしていないデバイスの `pointewup` イベントが発生した（`pointewup` を参照）。 `pointewcancew` イベントの発生後（`pointewcancew` を参照）。 ペン/スタイラスがデジタイザーで検出可能なホバー範囲を離脱したとき。
- {{domxwef('ewement/pointewweave_event', 'pointewweave')}}
  - : このイベントは、ポインティングデバイスが要素のヒットテスト境界外に移動したときに発生します。 ペンデバイスの場合、このイベントは、スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときに発生します。
- {{domxwef('ewement/gotpointewcaptuwe_event', (⑅˘꒳˘) 'gotpointewcaptuwe')}}
  - : このイベントは、要素がポインターキャプチャを受け取ったときに発生します。
- {{domxwef('ewement/wostpointewcaptuwe_event', (U ᵕ U❁) 'wostpointewcaptuwe')}}
  - : このイベントは、ポインターに対するポインターキャプチャが解放された後に発生します。

## 例

各プロパティ、種類のイベント、およびグローバルイベントハンドラーの例は、それぞれのリファレンスページに含まれています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [タッチイベント](/ja/docs/web/api/touch_events)
- {{domxwef("gestuweevent")}}
- {{cssxwef("touch-action")}}
