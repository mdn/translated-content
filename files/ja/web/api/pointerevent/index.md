---
title: PointerEvent
slug: Web/API/PointerEvent
---

{{ APIRef("Pointer Events") }}

**`PointerEvent`** インターフェイスは、接触点のジオメトリ、イベントを生成したデバイスタイプ、接触面に加えられた圧力の量など、ポインタによって生成された DOM イベントの状態を表します。

*ポインタ*は、入力デバイス（マウス、ペン、またはタッチ対応面上の接触点など）のハードウェアにとらわれない表現です。 ポインタは、画面などの接触面上の特定の座標（または座標のセット）をターゲットにすることができます。

ポインタの*ヒットテスト*は、ブラウザーがポインタイベントのターゲット要素を決定するために使用するプロセスです。 通常、これはポインタの位置と、画面媒体上のドキュメント内の要素の視覚的なレイアウトを考慮して決定します。

## コンストラクタ

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : 信頼できない合成 `PointerEvent` を作成します。

## プロパティ

_このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承します。_

- {{ domxref('PointerEvent.pointerId')}} {{readonlyInline}}
  - : イベントの原因となっているポインタの一意の識別子。
- {{ domxref('PointerEvent.width')}} {{readonlyInline}}
  - : ポインタの接触ジオメトリの幅（X 軸の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.height')}} {{readonlyInline}}
  - : ポインタの接触ジオメトリの高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.pressure')}} {{readonlyInline}}
  - : 0 から 1 の範囲のポインタ入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{ domxref('PointerEvent.tangentialPressure')}} {{readonlyInline}}
  - : ポインタ入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）は -1 から 1 の範囲で、0 はコントロールの中立位置です。
- {{ domxref('PointerEvent.tiltX')}} {{readonlyInline}}
  - : Y-Z 平面と、ポインタ（ペン/スタイラスなど）軸と Y 軸の両方を含む平面との間の平面角度（度単位、-90 から 90 の範囲）。
- {{ domxref('PointerEvent.tiltY')}} {{readonlyInline}}
  - : X-Z 平面と、ポインタ（ペン/スタイラスなど）軸と X 軸の両方を含む平面との間の平面角度（度単位、-90 から 90 の範囲）。
- {{ domxref('PointerEvent.twist')}} {{readonlyInline}}
  - : ポインタ（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（0 から 359 の範囲の値）。
- {{ domxref('PointerEvent.pointerType')}} {{readonlyInline}}
  - : イベントの原因となったデバイスタイプ（マウス、ペン、タッチなど）を示します。
- {{ domxref('PointerEvent.isPrimary')}} {{readonlyInline}}
  - : ポインタがこのポインタタイプのプライマリポインタを表すかどうかを示します。

## メソッド

- {{ domxref('PointerEvent.getCoalescedEvents()')}} {{deprecated_inline}}
  - : 送出された {{event("pointermove")}} イベントに合体したすべての `PointerEvent` インスタンスのシーケンスを返します。

## ポインタイベントタイプ

`PointerEvent` インターフェイスにはいくつかのイベントタイプがあります。 どのイベントが発生したかを判断するには、イベントの {{ domxref("Event.type", "type") }} プロパティを調べます。

> **メモ:** 多くの場合、ポインタとマウスの両方のイベントが送信されることに注意することが重要です（ポインタ固有でないコードでもユーザーと対話できるようにするため）。 ポインタイベントを使用する場合は、{{ domxref("event.preventDefault()") }} を呼び出してマウスイベントも送信されないようにする必要があります。

- {{event('pointerover')}}
  - : このイベントは、ポインティングデバイスが要素のヒットテスト境界内に移動したときに発生します。
- {{event('pointerenter')}}
  - : このイベントは、ポインティングデバイスが要素またはその子孫の 1 つのヒットテスト境界内に移動したときに発生します。 これには、ホバーをサポートしないデバイスからの `pointerdown` イベントの結果も含まれます（`pointerdown` を参照）。 このイベントタイプは `pointerover` に似ていますが、バブリングしないという点で異なります。
- {{event('pointerdown')}}
  - : このイベントは、ポインタが*アクティブ*になると発生します。 マウスの場合、ボタンが押されていない状態から少なくとも 1 つのボタンが押された状態に移行したときに発生します。 タッチの場合、物理的な接触がデジタイザとなされたときに発生します。 ペンの場合、スタイラスがデジタイザと物理的に接触したときに発生します。
- {{event('pointermove')}}
  - : このイベントは、ポインタが座標を変更したときに発生します。
- {{event('pointerup')}}
  - : このイベントは、ポインタが*アクティブ*でなくなったときに発生します。
- {{event('pointercancel')}}
  - : ブラウザーは、ポインタがイベントを生成できなくなったと判断した場合（例えば、関連するデバイスが無効になった場合）、このイベントを発生させます。
- {{event('pointerout')}}
  - : このイベントは、次のようないくつかの理由で発生します。 ポインティングデバイスが要素のヒットテスト境界外に移動した。 ホバーをサポートしていないデバイスの `pointerup` イベントが発生した（`pointerup` を参照）。 `pointercancel` イベントの発生後（`pointercancel` を参照）。 ペン/スタイラスがデジタイザで検出可能なホバー範囲を離脱したとき。
- {{event('pointerleave')}}
  - : このイベントは、ポインティングデバイスが要素のヒットテスト境界外に移動したときに発生します。 ペンデバイスの場合、このイベントは、スタイラスがデジタイザで検出可能なホバー範囲を離脱したときに発生します。
- {{event('gotpointercapture')}}
  - : このイベントは、要素がポインタキャプチャを受け取ったときに発生します。
- {{event('lostpointercapture')}}
  - : このイベントは、ポインタに対するポインタキャプチャが解放された後に発生します。

## GlobalEventHandlers

- {{ domxref('GlobalEventHandlers.onpointerover') }}
  - : {{event('pointerover')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointerenter') }}
  - : {{event('pointerenter')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointerdown') }}
  - : {{event('pointerdown')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointermove') }}
  - : {{event('pointermove')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointerup') }}
  - : {{event('pointerup')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointercancel') }}
  - : {{event('pointercancel')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointerout') }}
  - : {{event('pointerout')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。
- {{ domxref('GlobalEventHandlers.onpointerleave') }}
  - : {{event('pointerleave')}} イベントのための{{domxref('GlobalEventHandlers','グローバルイベントハンドラ')}}。

## 例

各プロパティ、イベントタイプ、およびグローバルイベントハンドラの例は、それぞれの参照ページに含まれています。

## 仕様

| 仕様                                                                                                                             | 状態                                         | コメント                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Pointer Events 2 Ext','#extensions-to-the-pointerevent-interface', 'PointerEvent')}} | {{Spec2('Pointer Events 2 Ext')}} | {{DOMxRef('PointerEvent.getCoalescedEvents()', 'getCoalescedEvents()')}} メソッドを追加しました。                                                                     |
| {{SpecName('Pointer Events 2','#pointerevent-interface', 'PointerEvent')}}                             | {{Spec2('Pointer Events 2')}}     | {{DOMxRef('PointerEvent.twist', 'twist')}} プロパティと {{DOMxRef('PointerEvent.tangentialPressure', 'tangentialPressure')}} プロパティを追加しました。 |
| {{SpecName('Pointer Events', '#pointerevent-interface', 'PointerEvent')}}                                 | {{Spec2('Pointer Events')}}         | 初期定義                                                                                                                                                                                      |

## ブラウザーの互換性

{{Compat("api.PointerEvent")}}

## 関連情報

- {{ domxref("Touch_events","Touch Events") }}
- {{ domxref("GestureEvent") }}
- {{ domxref("MSGestureEvent") }}
- {{cssxref("touch-action")}}
