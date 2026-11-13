---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("UI Events")}}

**`UIEvent`** インターフェイスは、シンプルなユーザーインターフェイスのイベントを表します。

`UIEvent` は {{domxref("Event")}} から派生しています。後方互換性のために {{domxref("UIEvent.initUIEvent()")}} メソッドは維持されていますが、`UIEvent` オブジェクトは {{domxref("UIEvent.UIEvent", "UIEvent()")}} コンストラクターを使用して作成すべきです。

{{domxref("MouseEvent")}}、{{domxref("TouchEvent")}}、{{domxref("FocusEvent")}}、{{domxref("KeyboardEvent")}}、{{domxref("WheelEvent")}}、{{domxref("InputEvent")}}、{{domxref("CompositionEvent")}} といったインターフェイスが、このインターフェイスの直接または間接の子孫です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : `UIEvent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : `long` で、イベントの種類に応じて、イベントに関する詳細を返します。
- {{domxref("UIEvent.sourceCapabilities")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : タッチイベントの生成元である物理的な機器に関する情報を提供する、 `InputDeviceCapabilities` インターフェイスのインスタンスを返します。
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : イベントを生成したビューを含む {{glossary("WindowProxy")}} を返します。
- {{domxref("UIEvent.which")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 押下されたキーの `keyCode` の数値、または押下された英数字キーの文字コード (`charCode`) を返します。

## インスタンスメソッド

_このインターフェイスは、親である {{domxref("Event")}} からメソッドを継承しています。_

- {{domxref("UIEvent.initUIEvent()")}} {{Deprecated_Inline}}
  - : `UIEvent` オブジェクトを初期化します。イベントがすでに送出されている場合は、何も行いません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Event")}}
