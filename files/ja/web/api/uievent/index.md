---
title: UIEvent
slug: Web/API/UIEvent
tags:
  - API
  - DOM
  - Event
  - インターフェイス
  - リファレンス
  - UIEvent
  - イベント
browser-compat: api.UIEvent
translation_of: Web/API/UIEvent
---
{{APIRef("DOM Events")}}

**`UIEvent`** インターフェイスは、シンプルなユーザーインターフェイスのイベントを表します。

`UIEvent` は {{domxref("Event")}} から派生しています。後方互換性のために {{domxref("UIEvent.initUIEvent()")}} メソッドは維持されていますが、`UIEvent` オブジェクトは {{domxref("UIEvent.UIEvent", "UIEvent()")}} コンストラクターを使用して作成するべきです。

{{domxref("MouseEvent")}}、{{domxref("TouchEvent")}}、{{domxref("FocusEvent")}}、{{domxref("KeyboardEvent")}}、{{domxref("WheelEvent")}}、{{domxref("InputEvent")}}、{{domxref("CompositionEvent")}} といったインターフェイスが、このインターフェイスの直接または間接の子孫です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : `UIEvent` オブジェクトを作成します。

## プロパティ

_このインターフェイスは、親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("UIEvent.detail")}}{{readonlyinline}}
  - : `long` で、イベントの種類に応じて、イベントに関する詳細を返します。
- {{domxref("UIEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 現在のレイヤーにおける、イベントの水平座標を返します。
- {{domxref("UIEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 現在のレイヤーにおける、イベントの垂直座標を返します。
- {{domxref("UIEvent.sourceCapabilities")}} {{experimental_inline}} {{readonlyinline}}
  - : タッチイベントの生成元である物理デバイスに関する情報を提供する、 `InputDeviceCapabilities` インターフェイスのインスタンスを返します。
- {{domxref("UIEvent.view")}}{{readonlyinline}}
  - : イベントを生成したビューを含む {{domxref("WindowProxy")}} を返します。
- {{domxref("UIEvent.which")}} {{deprecated_inline}} {{Non-standard_inline}} {{readonlyinline}}
  - : 押下されたキーの `keyCode` の数値、または押下された英数字キーの文字コード (`charCode`) を返します。

## メソッド

_このインターフェイスは、親である {{domxref("Event")}} からメソッドを継承しています。_

- {{domxref("UIEvent.initUIEvent()")}} {{deprecated_inline}}
  - : `UIEvent` オブジェクトを初期化します。イベントがすでにディスパッチされている場合は、何も行いません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベント入門](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}}
