---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
original_slug: Web/Accessibility/ARIA/Attributes/aria-activedescendant
l10n:
  sourceCommit: f6310f5cf34dfe4b5c0a45494a83b0a5ef9a6571
---

`aria-activedescendant` 属性は、[`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) ウィジェット、[`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)、[`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)にフォーカスが当たっている時、現在アクティブな要素を特定します。

## 解説

`aria-activedescendant` プロパティは、メニュー、グリッド、ツールバーなど、フォーカス可能な複数の子孫要素を格納する場合に、対話要素上で支援技術のためにフォーカスを管理するメソッドを提供します。スクリーンリーダーが所有する要素間でフォーカスを移動させる代わりに、 `aria-activedescendant` は、現在アクティブな要素を参照するためにコンテナー要素上で使用することができ、フォーカスされたときに現在アクティブな要素を支援技術ユーザーに知らせます。

`aria-activedescendant` を使用すると、ブラウザーは、コンテナー要素またはコンテナー要素を制御する入力要素にDOMフォーカスを維持します。しかし、ユーザーエージェントは、 `aria-activedescendant` によって参照される要素にフォーカスがあるかのように、デスクトップのフォーカスイベントと状態を支援技術に伝えます。

この属性は、[`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) ウィジェット、[`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)、[`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)の役割を持ち、 `id` が属性値として参照される要素にのみ関連します。

属性は、どの要素がフォーカスを持つかという情報を支援技術に提供することを管理しますが、実際にフォーカスを作成することはありません。フォーカスの変更と属性値の管理は JavaScript で行います。その属性値を管理することに加えて、フォーカスが当たったときに、現在アクティブな子孫が表示され、視界に入る（または視界にスクロールする）ことを確認してください。

DOM のフォーカスのある要素に `aria-activedescendant` の値を設定するには、確実に自分自身で参照する要素、 DOM にフォーカスのある要素の子孫か、 [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性で示す論理的な子孫を参照します。

DOM フォーカスのある要素がコンボボックス、テキストボックス、検索ボックスの場合、 `aria-activedescendant` に対応している要素を参照するために [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) を含めてください。

`aria-activedescendant` の値は、制御される要素の自分自身で所有している要素を参照します。例えば、コンボボックスでは、コンボボックスにフォーカスが当たったまま、コンボボックス要素の `aria-activedescendant` の値は、コンボボックスによって制御されるポップアップリストボックスの子孫を参照します。

> [!NOTE]
> この属性はいくつかのロールにのみ対応しています。例えば、 `dialog` は `aria-activedescendant` に対応していません。コンボボックスがダイアログを開いた場合、DOMフォーカスはコンボボックスからダイアログに移ります。

> [!NOTE]
> `listbox`、`grid`、`tree` のポップアップの子孫にフォーカスが当たった場合、DOM フォーカスは combobox に残り、combobox には `aria-activedescendant` が設定され、ポップアップ内でフォーカスされた要素を参照する値が設定されます。

## 値

- ID reference
  - : 現在フォーカスがある要素の `id` の値を取ります。

## 関連するロール

以下の役割を持つ要素の属性としてのみ関連します。

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## 仕様書

{{Specifications}}

## 関連情報

<section id="Quick_links">

1. [**WAI-ARIA 状態とプロパティ**](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/aria/Attributes")}}

</section>
