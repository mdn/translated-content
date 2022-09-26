---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: 775662998e66813a612e3ff27e02f2ada867bc17
---

{{HTMLSidebar("Global_attributes")}}

**`contenteditable`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、ユーザーによる要素の編集が可能かを示す列挙型属性です。可能である場合、ブラウザーは要素のウィジェットを編集可能なものに変更します。

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

この属性は、以下の値のうち一つを取る必要があります。

- `true` または _空文字列_: 要素が編集可能であることを示す
- `false`: 要素が編集不可であることを示す

この属性が値なしで指定された場合、たとえば `<label contenteditable>Example Label</label>` のような場合、値は空文字列として扱われます。

この属性が存在しないか、値が無効であった場合、値は親要素から*継承*されます。したがって、親が編集可能であればこの要素は編集可能になります。

なお、許可されている値は `true` と `false` ですが、この属性は*列挙型*であり、*論理型*ではありません。

{{Glossary("caret", "キャレット")}}の挿入文字列を描画するのに使用される色は、 {{cssxref("caret-color")}} プロパティで設定できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテンツを編集可能にする](/ja/docs/Web/Guide/HTML/Editable_content)
- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} および {{domxref("HTMLElement.isContentEditable")}}
- CSS の {{cssxref("caret-color")}} プロパティ
- [`HTMLElement` `input` イベント](/ja/docs/Web/API/HTMLElement/input_event)
