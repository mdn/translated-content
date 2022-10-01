---
title: CompositionEvent
slug: Web/API/CompositionEvent
---

{{APIRef("DOM Events")}}

DOM **`CompositionEvent`** は間接的なテキストの入力によって発生するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CompositionEvent.CompositionEvent()", "CompositionEvent()")}}
  - : 新しい `CompositionEvent` オブジェクトのインスタンスを作成します。

## プロパティ

_このインターフェイスは、親である {{domxref("UIEvent")}} および祖先である {{domxref("Event")}} からもプロパティを継承します。_

- {{domxref("CompositionEvent.data")}} {{readonlyinline}}
  - : イベントを発生させた入力システムによって生成された文字を返します。これは、`CompositionEvent` オブジェクトを生成したイベントの型に応じて変わります。
- {{domxref("CompositionEvent.locale")}} {{readonlyinline}} {{deprecated_inline}}
  - : 現在の入力システムのロケールです (例えば、入力システムが IME であればそれに関連したキーボードレイアウトのロケールになります)。

## メソッド

_このインターフェイスは、親である {{domxref("UIEvent")}} および祖先である {{domxref("Event")}} からもメソッドを継承します。_

- {{domxref("CompositionEvent.initCompositionEvent()")}} {{deprecated_inline}}
  - : `CompositionEvent` オブジェクトの属性を初期化します。

## 仕様

| 仕様書                                                                                               | 策定状況                         | コメント |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('UI Events', '#interface-compositionevent', 'CompositionEvent')}} | {{Spec2('UI Events')}}     |          |
| {{SpecName('DOM3 Events', '#idl-compositionevent', 'CompositionEvent')}}     | {{Spec2('DOM3 Events')}} |          |

## ブラウザー実装状況

{{Compat("api.CompositionEvent")}}

## 関連情報

- [compositionstart](/ja/docs/Web/API/Element/compositionstart_event)
- [compositionend](/ja/docs/Web/Reference/Events/compositionend)
- [compositionupdate](/ja/docs/Web/API/Element/compositionupdate_event)
- [UIEvent](/ja/docs/DOM/Event/UIEvent)
- [Event](/ja/docs/DOM/event)
