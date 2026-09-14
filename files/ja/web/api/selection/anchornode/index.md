---
title: "Selection: anchorNode プロパティ"
short-title: anchorNode
slug: Web/API/Selection/anchorNode
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ ApiRef("DOM") }}

**`Selection.anchorNode`** は読み取り専用プロパティであり、選択範囲の開始点となる {{domxref("Node")}} を返します。文書内に選択範囲が存在しない場合（たとえば、クリックされたことのない iframe や、そのノードが別の文書ツリーに属している場合など）、`null` を返すことがあります。

ユーザーは、左から右（文書順）または右から左（文書順の逆）に選択を行うことができます。アンカーは、ユーザーが選択を開始した位置です。これは、<kbd>Shift</kbd> キーを押したまま、キーボードの矢印キーを押すことで確認できます。選択範囲のアンカーは移動しませんが、選択範囲の焦点（選択範囲のもう一方の端）は移動します。

## 値

{{domxref("Node")}} オブジェクトまたは `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection")}}
- {{domxref("Selection.focusNode")}}
