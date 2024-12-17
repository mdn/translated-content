---
title: InputEvent
slug: Web/API/InputEvent
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("UI Events")}}

**`InputEvent`** インターフェイスは、編集可能なコンテンツが変更されたことを通知するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("InputEvent.InputEvent", "InputEvent()")}}
  - : `InputEvent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{DOMxRef("UIEvent")}}、{{DOMxRef("Event")}} のプロパティを継承しています。_

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : 文字列で、挿入された文字を返します。変更により挿入されたテキストがない（例えば文字を削除した）場合は、空文字列になることがあります。
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : 編集可能なコンテンツに追加されたリッチテキストまたはプレーンテキストデータ、あるいは削除されたプレーンテキストデータに関する情報を保持する {{DOMxRef("DataTransfer")}} オブジェクトを返します。
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : テキストの挿入、削除、書式設定など、編集可能なコンテンツに対する変更の種類を返します。
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : 論理値で、イベントが {{domxref("Element/compositionstart_event", "compositionstart")}} の後かつ {{domxref("Element/compositionend_event", "compositionend")}} の前に発生したかを示す値を返します。

## インスタンスメソッド

_このインターフェイスは、親である {{DOMxRef("UIEvent")}}、{{DOMxRef("Event")}} のメソッドを継承しています。_

- {{DOMxRef('InputEvent.getTargetRanges()')}}
  - : 入力イベントが取り消されない場合、DOM の変更に影響される静的範囲を配列で返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`beforeinput` イベント](/ja/docs/Web/API/Element/beforeinput_event)
- [`input` イベント](/ja/docs/Web/API/Element/input_event)
