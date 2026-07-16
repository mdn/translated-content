---
title: aria-required
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-required
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`aria-required` 属性は、フォームを送信する前に要素にユーザー入力が必要であることを示します。

## 解説

セマンティック HTML {{htmlelement("input")}}、{{htmlelement("select")}}、または {{htmlelement("textarea")}} に値が必要な場合は、[`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性を適用する必要があります。 HTML の `required` 属性は、必要なフォームコントロールに有効な値がない限りフォームの送信を無効にしますが、支援技術を使用してナビゲートするユーザーが、どのセマンティックフォームコントロールに有効なコンテンツが必要であるかを理解できるようにもします。

[ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) が [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) の {{HTMLElement('div')}} など、非セマンティック要素を使用してフォームコントロールを作成する場合、フォームを送信するには要素にユーザー入力が必要であることを支援技術に示すために、`aria-required` 属性を `true` の値で含める必要があります。`aria-required` 属性は HTML フォーム要素で使用できます。これは ARIA ロールが割り当てられている要素に限定されません。

セマンティック HTML フォームコントロールに設定された HTML `required` 属性と同様に、`aria-required` 属性は、フォームを送信する前に要素が必須であることを支援技術に明示的に伝えます。セマンティック HTML フォームコントロールの `required` 属性は、値が存在しない場合にフォームコントロールが送信されないようにします。ユーザーがフォームを送信しようとしたときに必要な値が無効である場合、一部のブラウザーではネイティブエラーメッセージが表示されます。しかし、全ての ARIA 状態およびプロパティと同様に、`aria-required` 属性は要素の機能に影響を与えません。機能と動作は JavaScript で追加する必要があります。

> [!NOTE]
> ARIA はアクセシビリティツリーのみを変更し、支援技術がコンテンツをユーザーに提示する方法を変更します。ARIA は要素の機能や動作については何も変更しません。セマンティック HTML 要素を本来の目的やデフォルトの機能に使用しない場合は、JavaScript を使用して動作、フォーカス、ARIA の状態を管理する必要があります。

CSS の {{CSSXRef(':required')}} および {{CSSXRef(':optional')}} 疑似クラスは、それぞれ必須か任意かに基づいて、{{htmlelement("input")}}、{{htmlelement("select")}}、および {{htmlelement("textarea")}} 要素をマッチさせます。非セマンティック要素をフォームコントロールとして使用する場合、この CSS 疑似クラスセレクターの利点は得られません。ただし、属性が存在する場合は、`[aria-required="true"]` もしくは `[aria-required="false"]` の属性セレクターを使用できます。

フォームに必須のフォーム要素と任意のフォーム要素の両方が含まれている場合、必須の要素は、意味を伝えるために色だけに頼らない処理を使用して視覚的に示す必要があります。通常は、説明的なテキストやアイコンが使用されます。

> [!NOTE]
> どの要素が必須であるかは、全てのユーザーにとって明らかである必要があります。フォームコントロールが必須であることを視覚的な提示で一貫して目に見える形で示していることを確認してください。色だけでは情報を伝達するのに十分ではないことに注意してください。

## 例

属性は、フォームコントロールロールに追加する必要があります。ユーザーが電子メールアドレスを [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) に入力する必要がある場合は textbox に `aria-required="true"` を含めます。

```html
<div id="tbLabel">Email Address *</div>
<div
  role="textbox"
  contenteditable
  aria-labelledby="tblabel"
  aria-required="true"
  id="email1"></div>
```

> [!NOTE]
> フィールドのラベルに既に「必須」という単語が含まれている場合は、`aria-required` 属性を省略することをお勧めします。これにより、スクリーンリーダーが「必須」という用語を 2 回読み上げるのを回避できます。

この例では、テキストボックスにコンテンツがない場合、フォームが送信されないように JavaScript を使用する必要があります。

これは、JavaScript を必要とせずにセマンティックに記述できます:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## 値

- `true`
  - : フォームを送信できるようにするには、要素に値が必要であるか、チェックされている必要があります。
- `false`
  - : この要素は必須ではありません。

## 関連インターフェイス

- {{domxref("Element.ariaRequired")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaRequired`](/ja/docs/Web/API/Element/ariaRequired) プロパティは、`aria-required` 属性の値を反映します。
- {{domxref("ElementInternals.ariaRequired")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaRequired`](/ja/docs/Web/API/ElementInternals/ariaRequired) プロパティは、`aria-required` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- HTML [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性
- [`:optional` 擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/:optional)
- [`:required` 擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/:required)
- [`aria-invalid` 属性](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [MDN Understanding WCAG, Guideline 3.3 explanations](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
