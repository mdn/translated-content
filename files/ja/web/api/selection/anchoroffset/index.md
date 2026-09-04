---
title: "Selection: anchorOffset プロパティ"
short-title: anchorOffset
slug: Web/API/Selection/anchorOffset
l10n:
  sourceCommit: e1663b9aa12ab98ad6d9b054f3e25835242ddfad
---

{{ ApiRef("DOM") }}

**`Selection.anchorOffset`** は読み取り専用プロパティで、選択範囲のアンカーが{{domxref("Selection.anchorNode")}} 内でオフセットされている文字数を返します。ただし、当該ノードの型が {{domxref("Text")}}、{{domxref("CDATASection")}}、{{domxref("Comment")}} のいずれかであるである場合に限ります。

{{domxref("Selection.anchorNode")}} がそれ以外の種類のノードである場合、**`Selection.anchorOffset`** は、選択範囲のアンカーが {{domxref("Selection.anchorNode")}} 内でオフセットされている {{domxref("Node.childNodes")}} の数を返します。

この数値は 0 起点です。選択範囲が {{domxref("Selection.anchorNode")}} の最初の文字から始まる場合、`0` が返されます。

## 値

数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
