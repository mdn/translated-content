---
title: InputEvent
slug: Web/API/InputEvent
---

{{APIRef("DOM Events")}}

**`InputEvent`** インターフェイスは、編集可能なコンテンツが変更されたことを通知するイベントを表します。

## コンストラクタ

- {{domxref("InputEvent.InputEvent", "InputEvent()")}}
  - : `InputEvent` オブジェクトを作成します。

## プロパティ

_このインターフェイスは、親インターフェイスである {{domxref("UIEvent")}}、{{domxref("Event")}} のプロパティを継承します。_

- {{domxref("InputEvent.data")}} {{readOnlyInline}}
  - : 挿入された文字を {{domxref("DOMString")}} で返します。変更により挿入されたテキストがない (例えば文字を削除する) 場合は、空文字列になるでしょう。
- {{domxref("InputEvent.isComposing")}}{{readOnlyInline}}
  - : イベントが {{event("compositionstart")}} の後かつ {{event("compositionend")}} の前に発生したかを示す {{jsxref("Boolean")}} 値を返します。

## メソッド

_このインターフェイスではメソッドが定義されていませんが、親インターフェイスである {{domxref("UIEvent")}}、{{domxref("Event")}} のメソッドを継承します。_

## 仕様

| 仕様書                                                                               | 策定状況                         | コメント     |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('DOM3 Events','#interface-InputEvent','InputEvent')}} | {{Spec2('DOM3 Events')}} | 最初期の定義 |

## ブラウザ実装状況

{{Compat("api.InputEvent")}}

## 関連情報

- {{event("beforeinput")}}
- {{event("input")}}
