---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

**`PointerEvent`** インターフェイスは、接触点の形状、イベントを生成した機器の種類、接触面に加えられた圧力の量など、ポインターによって生成された DOM イベントの状態を表します。

*ポインター*は、入力機器（マウス、ペン、またはタッチパネルの上の接触点など）のハードウェアにとらわれない表現です。 ポインターは、画面などの接触面上の特定の座標（または座標の集合）をターゲットにすることができます。

ポインターの*ヒットテスト*は、ブラウザーがポインターイベントのターゲット要素を決定するために使用する手続です。通常、これはポインターの位置と、画面媒体上の文書内の要素の視覚的なレイアウトを考慮して決定します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : 信頼できない合成 `PointerEvent` を作成します。

## プロパティ

_このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と機器の画面の X-Y 平面のなす角度を表します。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と Y 軸の両方を格納する平面との間の角度を表します。
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `PointerEvent` を生成するポインティングデバイス用の固有の識別子。
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 0 から 1 の範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）軸と Y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）軸と X 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

## メソッド

- {{DOMxRef('PointerEvent.getCoalescedEvents()')}} {{SecureContext_Inline}}
  - : 配信された {{domxref("Element/pointermove_event", "pointermove")}} イベントに結合されたすべての `PointerEvent` インスタンスの列を返します。
- {{DOMxRef('PointerEvent.getPredictedEvents()')}}
  - : 配信された {{domxref("Element/pointermove_event", "pointermove")}} イベントの結合イベントの後に続くとブラウザーが予測した `PointerEvent` インスタンスの列を返します。

## ポインターイベントの種類

`PointerEvent` インターフェイスには、複数の種類のイベントがあります。 どのイベントが発生したかを判断するには、イベントの {{domxref("Event.type", "type")}} プロパティを調べてください。

> [!NOTE]
> 多くの場合、ポインターとマウスの両方のイベントが送信されることに注意することが重要です（ポインター固有でないコードでもユーザーと対話できるようにするため）。ポインターイベントを使用する場合は、{{domxref("Event.preventDefault()")}} を呼び出してマウスイベントが共に送信されないようにする必要があります。

- {{domxref('Element/pointerover_event', 'pointerover')}}
  - : このイベントは、ポインティングデバイスが要素のヒットテスト境界内に移動したときに発生します。
- {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - : このイベントは、ポインティングデバイスが要素またはその子孫の 1 つのヒットテスト境界内に移動したときに発生します。 これには、ホバーに対応していない機器からの `pointerdown` イベントの結果も含まれます（`pointerdown` を参照）。 この種類のイベントは `pointerover` に似ていますが、バブリングしないという点が異なります。
- {{domxref('Element/pointerdown_event', 'pointerdown')}}

  - : このイベントは、ポインターが*アクティブ*になると発生します。 マウスの場合、ボタンが押されていない状態から少なくとも 1 つのボタンが押された状態に移行したときに発生します。タッチの場合、物理的な接触がデジタイザーとなされたときに発生します。 ペンの場合、スタイラスがデジタイザーと物理的に接触したときに発生します。

    > **メモ:** [直接操作](https://w3c.github.io/pointerevents/#dfn-direct-manipulation)を受け付けるタッチ画面のブラウザーでは、 `pointerdown` イベントにより[暗黙的なポインターキャプチャ](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture)が行われ、以降のすべてのポインターイベントが、キャプチャターゲット上で発生したかのようにターゲットに捕捉されます。そのため `pointerover`、`pointerenter`、`pointerleave`、`pointerout` はキャプチャが設定されている間は**発生しません**。キャプチャはターゲット要素上で {{domxref('element.releasePointerCapture') }} を呼び出すことで手動で解除することができ、また `pointerup` または `pointercancel` イベントの後で暗黙的に解放されます。

- {{domxref('Element/pointermove_event', 'pointermove')}}
  - : このイベントは、ポインターが座標を変更したときに発生します。
- {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} {{experimental_inline}}
  - : このイベントは、ポインターのいずれかのプロパティが変更されたときに発生します。
- {{domxref('Element/pointerup_event', 'pointerup')}}
  - : このイベントは、ポインターが*アクティブ*でなくなったときに発生します。
- {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - : ブラウザーは、ポインターがイベントを生成できなくなったと判断した場合（例えば、関連するデバイスが無効になった場合）、このイベントを発生させます。
- {{domxref('Element/pointerout_event', 'pointerout')}}
  - : このイベントは、次のようないくつかの理由で発生します。 ポインティングデバイスが要素のヒットテスト境界外に移動した。 ホバーをサポートしていないデバイスの `pointerup` イベントが発生した（`pointerup` を参照）。 `pointercancel` イベントの発生後（`pointercancel` を参照）。 ペン/スタイラスがデジタイザーで検出可能なホバー範囲を離脱したとき。
- {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - : このイベントは、ポインティングデバイスが要素のヒットテスト境界外に移動したときに発生します。 ペンデバイスの場合、このイベントは、スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときに発生します。
- {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - : このイベントは、要素がポインターキャプチャを受け取ったときに発生します。
- {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - : このイベントは、ポインターに対するポインターキャプチャが解放された後に発生します。

## 例

各プロパティ、種類のイベント、およびグローバルイベントハンドラーの例は、それぞれのリファレンスページに含まれています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
- {{cssxref("touch-action")}}
