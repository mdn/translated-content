---
title: "Selection: focusOffset プロパティ"
short-title: focusOffset
slug: Web/API/Selection/focusOffset
l10n:
  sourceCommit: eea0f3e4950c73b3f648e86a96ab245f4bc958e7
---

{{ ApiRef("DOM") }}

**`Selection.focusOffset`** は読み取り専用プロパティで、選択範囲のフォーカスが {{domxref("Selection.focusNode")}} 内でオフセットされている文字数を返します。ただし、当該ノードの型が {{domxref("Text")}}、{{domxref("CDATASection")}}、{{domxref("Comment")}} のいずれかである場合に限ります。

{{domxref("Selection.focusNode")}} がそれ以外の種類のノードである場合、**`Selection.focusOffset`** は、選択範囲のフォーカスが {{domxref("Selection.focusNode")}} 内でオフセットされている {{domxref("Node.childNodes")}} の数を返します。

この数値は 0 起点です。選択範囲が {{domxref("Selection.focusNode")}} の最初の文字で終わる場合、`0` が返されます。

## 値

数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
