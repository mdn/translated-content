---
title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
original_slug: Web/Accessibility/ARIA/Attributes/aria-multiline
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`aria-multiline` 属性は `textbox` が複数行の入力を受け入れるか、単一の行のみを受け入れるかを示します。

## 解説

<kbd>Enter</kbd> または <kbd>Return</kbd> キーの既定での動作は、単一行のテキストフィールドと複数行のテキストフィールドで異なります。ユーザーのフォーカスが単一の行の `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` にあるとき、通常 <kbd>Enter</kbd> または <kbd>Return</kbd> キーを押すとフォームを送信します。

ユーザーのフォーカスが複数行 {{HTMLElement('textarea')}} にあるとき、キー入力は改行を挿入します。 [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) ロールが設定された要素にのみ受け入れられ、 `aria-multiline` 属性は、テキストボックスが複数行の入力を受け入れるか、単一の行のみを受け入れるかを支援技術に示し、入力するデータの型やキーストロークが何をするかを設定します。

> [!NOTE]
> 可能な場合は、 HTML の {{HTMLElement('input')}} または {{HTMLElement('textarea')}} を使用してください。これらは意味づけと動作が組み込まれており、 ARIA 属性やスクリプトを必要とせず、キーボード対応が組み込まれているからです。

`aria-multiline="true"` が設定されている場合、テキストボックスウィジェットは HTML の {{HTMLElement('textarea')}} のように入力内の改行を受け入れることを意味しています。この属性を持たない、または値が `false` に設定されている `textbox` のロールを持つ要素は単純なテキストボックスです。

テキストボックスを設計する際には、フォーカスとキーストロークを意識してください。 ARIA は、アクセシビリティツリーを変更するだけであり、したがって、支援技術がユーザーにテキストボックスをどのように表示しているかを変更するだけです。 ARIA は要素の既定の機能や動作について何らかの変更をするわけではありません。意味づけされた HTML 要素をその意図する通りに既定の機能で使用しない場合、 JavaScript を使用して、キーストロークイベントへの応答を含め、動作や機能を管理しなければなりません。

## 値

- `true`
  - : テキストボックスは複数行の入力を受け入れます。

- `false`
  - : テキストボックスは単一の行しか受け入れません。

## 関連インターフェイス

- {{domxref("Element.ariaMultiLine")}}
  - : [`ariaMultiLine`](/ja/docs/Web/API/Element/ariaMultiLine) プロパティは {{domxref("Element")}} インターフェイスの一部で、 `aria-multiline` 属性の値を反映します。
- {{domxref("ElementInternals.ariaMultiLine")}}
  - : [`ariaMultiLine`](/ja/docs/Web/API/Element/ariaMultiLine) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、 `aria-multiline` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

継承先のロール:

- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## 仕様書

{{Specifications}}

## 関連情報

- ARIA [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) ロール
- ARIA [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) ロール

<section id="Quick_links">
<strong><a href="/ja/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA 状態とプロパティ</a></strong>
{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/aria/Attributes")}}
</section>
