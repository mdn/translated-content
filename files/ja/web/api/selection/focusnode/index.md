---
title: "Selection: focusNode プロパティ"
short-title: focusNode
slug: Web/API/Selection/focusNode
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ ApiRef("DOM") }}

**`Selection.focusNode`** は読み取り専用のプロパティで、選択範囲の終点となる {{domxref("Node")}} を返します。文書内を選択範囲として指定したことがない場合（たとえば、クリックされたことのない iframe や、別の文書ツリーに属するノードなど）、`null` を返すことがあります。

ユーザーは、左から右（文書順）または右から左（文書順の逆）に選択を行うことができます。フォーカスは、ユーザーが選択を終了した位置に設定されます。これは、<kbd>Shift</kbd> キーを押したまま、キーボードの矢印キーを押すことで確認できます。選択範囲のフォーカスは移動しますが、選択範囲のアンカー（選択範囲のもう一方の端）は移動しません。

## 値

{{domxref("Node")}} オブジェクトまたは `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection")}}
- {{domxref("Selection.anchorNode")}}
