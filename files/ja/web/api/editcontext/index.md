---
title: EditContext
slug: Web/API/EditContext
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`EditContext`** インターフェイスは、{{domxref("EditContext API", "", "", "nocode")}} を用いて、編集可能になった要素のテキスト編集コンテキストを表します。

{{domxref("EditContext API", "", "", "nocode")}} は、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) による変換、絵文字ピッカー、その他のプラットフォーム固有の編集関係の UI などの高度なテキスト入力体験に対応したリッチなテキストエディターをウェブ上で構築するのに利用できます。

## コンストラクター

- {{domxref("EditContext.EditContext", "EditContext()")}} {{experimental_inline}}
  - : 新しい `EditContext` のインスタンスを返します。

## インスタンスプロパティ

- {{domxref("EditContext.text")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 要素の編集可能なコンテンツです。
- {{domxref("EditContext.selectionStart")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 編集可能なテキストコンテンツ内での、現在選択されている範囲の始点のオフセットです。
- {{domxref("EditContext.selectionEnd")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 編集可能なテキストコンテンツ内での、現在選択されている範囲の終点のオフセットです。
- {{domxref("EditContext.characterBoundsRangeStart")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 編集可能なテキストコンテンツ内での、IME による変換が最後に開始された場所のオフセットです。

## インスタンスメソッド

_`EditContext` は {{domxref("EventTarget")}} インターフェイスがもととなっており、そのメソッドを含みます。_

- {{domxref("EditContext.attachedElements()")}} {{experimental_inline}}
  - : この `EditContext` オブジェクトに関係する要素である {{domxref("HTMLElement")}} オブジェクト 1 個が格納された {{jsxref("Array")}} です。
- {{domxref("EditContext.characterBounds()")}} {{experimental_inline}}
  - : `EditContext` オブジェクト内の各文字を囲む長方形のリストです。
- {{domxref("EditContext.updateText()")}} {{experimental_inline}}
  - : `EditContext` オブジェクト内部のテキストコンテンツを更新します。
- {{domxref("EditContext.updateSelection()")}} {{experimental_inline}}
  - : 編集可能なテキストコンテンツ内の選択の内部状態を更新します。
- {{domxref("EditContext.updateControlBounds()")}} {{experimental_inline}}
  - : オペレーティングシステムに、編集可能なテキスト領域の位置と大きさを知らせます。
- {{domxref("EditContext.updateSelectionBounds()")}} {{experimental_inline}}
  - : オペレーティングシステムに、編集可能なテキスト領域内で選択されている部分の位置と大きさを知らせます。
- {{domxref("EditContext.updateCharacterBounds()")}} {{experimental_inline}}
  - : オペレーティングシステムに、`EditContext` オブジェクト内の各文字の位置と大きさを知らせます。

## イベント

- {{domxref("EditContext.textupdate_event", "textupdate")}} {{experimental_inline}}
  - : ユーザーがテキストまたは選択範囲を変更した時発火します。
- {{domxref("EditContext.textformatupdate_event", "textformatupdate")}} {{experimental_inline}}
  - : {{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウを用いた変換を実行中であり、IME が変換の状態を表すためテキストの変換中の部分を別の書式で表示するべきだと判断した時発火します。
- {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} {{experimental_inline}}
  - : オペレーティングシステムが、IME ウィンドウを表示するため、`EditContext` オブジェクトの編集可能なテキスト領域内にある特定の各文字の大きさと位置を知る必要がある時発火します。
- {{domxref("EditContext.compositionstart_event", "compositionstart")}} {{experimental_inline}}
  - : IME ウィンドウを用いた変換が開始する時発火します。
- {{domxref("EditContext.compositionend_event", "compositionend")}} {{experimental_inline}}
  - : IME ウィンドウを用いた変換が終了する時発火します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
