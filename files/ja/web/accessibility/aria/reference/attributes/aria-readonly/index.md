---
title: aria-readonly
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-readonly` 属性は、要素が編集はできないが、それ以外の操作は可能であることを示します。

## 解説

対話可能な要素が、機能はするが編集できないことを示す場合に、`aria-readonly="true"` を設定します。これにより、通常はフォーカス可能でコピー可能な、対話可能な要素が読み取り専用（無効ではない）状態に設定されていることがユーザーに示されます。

`aria-readonly` が `true` に設定されている場合、ユーザーはウィジェットの値を読み取ることはできますが、設定することはできません。読み取り専用要素はユーザーにとって依然として関連性があるため、ユーザーが要素またはそのフォーカス可能な子孫に移動したり、値をコピーしたりすることを妨げてはなりません。

例:

- 変更してはならないフォーム要素。
- スプレッドシートの行ヘッダーと列ヘッダー。
- ショッピングカート内の合計金額。

変更不可能な値がフォーカスを受け取れないようにする場合は、代わりに [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) を使用します。

> [!NOTE]
> セマンティック HTML フォームコントロールを使用する場合、`readonly` 属性を設定すると、`aria-readonly="true"` を含める必要はありません。

> [!NOTE]
> `<input type="checkbox">` の値は編集できないため、`readonly` は関係ありません。ただし、`role="checkbox"` でチェックボックスを作成する場合は、`aria-readonly` 属性がサポートされます。

## 価

- `true`
  - : 要素は読み取り専用です。
- `false` (既定値)
  - : 要素は読み取り専用ではありません。

## 関連インターフェイス

- {{domxref("Element.ariaReadOnly")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaReadOnly`](/ja/docs/Web/API/Element/ariaReadOnly) プロパティは、`aria-readonly` 属性の値を反映します。
- {{domxref("ElementInternals.ariaReadOnly")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaReadOnly`](/ja/docs/Web/API/ElementInternals/ariaReadOnly) プロパティは、`aria-readonly` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- [HTML `readonly` 属性](/ja/docs/Web/HTML/Reference/Attributes/readonly)
- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
