---
title: HTML virtualkeyboardpolicy グローバル属性
short-title: virtualkeyboardpolicy
slug: Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}

**`virtualkeyboardpolicy`** は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)で、列挙型の属性です。要素のコンテンツが編集可能である要素（例えば、{{htmlelement("input")}} または {{htmlelement("textarea")}} 要素、あるいは [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が設定されている要素）に指定された場合、タブレット、携帯電話、その他のハードウェアキーボードを利用できない端末などで、画面に表示される仮想キーボードの動作を制御します。

この属性は、以下の値のいずれかを取る必要があります。

- `auto` または空文字列の場合は、この要素がフォーカスまたはタップされた際に、自動的に仮想キーボードを表示します。
- `manual` の場合は、要素へのフォーカスやタップを仮想キーボードの状態から切り離します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} および {{domxref("HTMLElement.isContentEditable")}}
- {{domxref("VirtualKeyboard_API", "仮想キーボード API", "", "nocode")}}
