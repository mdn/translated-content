---
title: aria-placeholder
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-placeholder` 属性は、フォームコントロールに値がない場合に、ユーザーのデータ入力を支援するための短いヒント (単語または短いフレーズ) を定義します。ヒントは、サンプル値または期待する形式の簡単な説明にすることができます。

## 解説

プレースホルダーは、値が設定されていない場合にフォームコントロールに表示されるテキストです。 HTMLの [`placeholder`](/ja/docs/Web/HTML/Reference/Elements/input#placeholder) 属性を使用すると、いくつかの HTML の {{HTMLElement('input')}} タイプおよび {{HTMLElement('textarea')}} に対してサンプル値や期待する形式の簡単な説明を提供できます。

他の要素を使用して `textbox` を作成している場合、`placeholder` はサポートされません。ここで `aria-placeholder` が役立ちます。`aria-placeholder` 属性を使用すると、非セマンティックフォームコントロールに値がない場合に、どのようなタイプのデータが期待されるかをユーザーが理解できるように、短いヒントを定義できます。

```html
<span id="date-of-birth">Birthday</span>
<div
  contenteditable
  role="textbox"
  aria-labelledby="date-of-birth"
  aria-placeholder="MM-DD-YYYY">
  MM-DD-YYYY
</div>
```

値が削除された場合も含め、コントロールの値が空の場合は常に、プレースホルダーのヒントをユーザーに示す必要があります。

> [!NOTE]
> ARIA は要素のアクセシビリティツリーのみを変更し、支援技術がコンテンツをユーザーに提示する方法を変更します。ARIA は要素の機能や動作については何も変更しません。セマンティック HTML 要素を本来の目的やデフォルトの機能に使用しない場合は、JavaScript を使用して動作を管理する必要があります。

`aria-placeholder` はラベルの代わりにではなく、ラベルに加えて使用されます。これらは目的も機能も異なります。ラベルはどのような情報が期待されるかを説明します。プレースホルダーのテキストは期待される値についてのヒントを提供します。

> [!WARNING]
> 表示されるラベルの代わりにプレースホルダーを使用すると、高齢者や認知、運動、微細運動能力、視覚に障害のあるユーザーなど、多くのユーザーのアクセシビリティとユーザビリティが損なわれます。ラベルの方が優れています。ラベルは常に表示され、コントロールにフォーカスするためのヒット領域が大きくなります。プレースホルダーには、コントロールに値がある場合（空白のみの場合を含む）に表示されなくなる、値が事前に入力されているとユーザーが誤解する可能性がある、既定の色のコントラストが不十分であるなど、いくつかの欠点があります。

> [!NOTE]
> プレースホルダーは、フォームに入力するデータの種類の例を示すためにのみ使用してください。適切なラベルの代わりにはなりません。

## 値

- `<string>`
  - : コントロールに値がない場合にコントロールに表示される単語または短いフレーズ。

## 関連インターフェイス

- {{domxref("Element.ariaPlaceholder")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaPlaceholder`](/ja/docs/Web/API/Element/ariaPlaceholder) プロパティは、`aria-placeholder` 属性の値を反映します。
- {{domxref("ElementInternals.ariaPlaceholder")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaPlaceholder`](/ja/docs/Web/API/ElementInternals/ariaPlaceholder) プロパティは、`aria-placeholder` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

継承先のロール:

- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## 仕様書

{{Specifications}}

## 関連情報

- [HTML `placeholder` 属性](/ja/docs/Web/HTML/Reference/Elements/input#placeholder)
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
