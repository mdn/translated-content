---
title: CompositionEvent
slug: Web/API/CompositionEvent
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("UI Events")}}

DOM の **`CompositionEvent`** は、ユーザーの間接的なテキストの入力（訳注: かな漢字変換の入力など）によって発生するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CompositionEvent.CompositionEvent()", "CompositionEvent()")}}
  - : 新しい `CompositionEvent` オブジェクトのインスタンスを作成します。

## プロパティ

_このインターフェイスは、親である {{domxref("UIEvent")}} および祖先である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : イベントを発生させた入力システムによって生成された文字を返します。これは、`CompositionEvent` オブジェクトを生成したイベントの型に応じて変わります。
- {{domxref("CompositionEvent.locale")}} {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : 現在の入力システムのロケールです (例えば、入力システムが IME であればそれに関連したキーボードレイアウトのロケールになります)。

## メソッド

_このインターフェイスは、親である {{domxref("UIEvent")}} および祖先である {{domxref("Event")}} から継承したメソッドもあります。_

- {{domxref("CompositionEvent.initCompositionEvent()")}} {{deprecated_inline}}
  - : `CompositionEvent` オブジェクトの属性を初期化します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [compositionstart](/ja/docs/Web/API/Element/compositionstart_event)
- [compositionend](/ja/docs/Web/API/Element/compositionend_event)
- [compositionupdate](/ja/docs/Web/API/Element/compositionupdate_event)
- [UIEvent](/ja/docs/Web/API/UIEvent)
- [Event](/ja/docs/Web/API/Event)
