---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`contenteditable`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、ユーザーによる要素の編集が可能かを示す列挙型属性です。可能である場合、ブラウザーは要素のウィジェットを編集可能なものに変更します。

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

この属性は、以下の値のうち一つを取る必要があります。

- `true` または _空文字列_: 要素が編集可能であることを示す
- `false`: 要素が編集不可であることを示す
- `plaintext-only`: 要素の生のテキストは編集可能だが、リッチテキスト形式が無効であることを示す

この属性が値なしで指定された場合、たとえば `<label contenteditable>Example Label</label>` のような場合、値は空文字列として扱われます。

この属性が存在しないか、値が無効であった場合、値は親要素から継承されます。したがって、親が編集可能であればこの要素は編集可能になります。

なお、許可されている値は `true` と `false` ですが、この属性は[列挙型](/ja/docs/Glossary/Enumerated)であり、論理属性ではありません。

{{Glossary("caret", "キャレット")}}の挿入文字列を描画するのに使用される色は、 {{cssxref("caret-color")}} プロパティで設定できます。

`contentitable` 属性を使用して編集可能になった要素、つまりインタラクティブになった要素は、フォーカスを当てることができます。また、キーボードの連続したナビゲーションに参加することができます。しかし、`contenteditable` 属性を持つ要素が他の `contenteditable` 要素の中に入れ子になっている場合、既定値ではタブ操作の順番に追加されません。`tabindex` 値 ([`tabindex="0"`](/ja/docs/Web/HTML/Global_attributes/tabindex)) を指定することにより、ネストした `contenteditable` 要素をキーボードナビゲーションシーケンスに追加することができるようになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} および {{domxref("HTMLElement.isContentEditable")}}
- CSS の {{cssxref("caret-color")}} プロパティ
- [HTMLElement の `input` イベント](/ja/docs/Web/API/Element/input_event)
