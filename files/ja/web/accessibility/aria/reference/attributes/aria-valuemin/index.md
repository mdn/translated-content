---
title: aria-valuemin
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`aria-valuemin` 属性は、範囲ウィジェットで許可される最小値を定義します。

## 解説

`aria-valuemin` 属性は、範囲ウィジェットで許可される最小値を定義します。これは、{{HTMLElement('progress')}}、{{HTMLElement('meter')}}、および [`range`](/ja/docs/Web/HTML/Reference/Elements/input/range)、[`number`](/ja/docs/Web/HTML/Reference/Elements/input/number) と全ての日付型の {{HTMLElement('input')}} の `min` 属性に似ています。

非セマンティック要素で [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)、[`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)、[`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)、および [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) を含む範囲型ロールを作成する場合、`aria-valuemin` を使用して最大値より小さい最小値を定義できます。これは `slider`、`scrollbar` および `spinbutton` の必須属性です。

最小値と最大値を宣言すると、支援技術が範囲のサイズをユーザーに伝えることができます。

最大値は [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) で定義されます。

> [!WARNING]
> [`range`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) ロール自体は [「抽象ロール」](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#6._抽象ロール) であるため、**使用しないで**ください。`aria-valuemin` 属性は、`range` ロールの全てのサブタイプで使用されます。

## 値

- `<number>`
  - : 最大値より小さい整数。

## 関連インターフェイス

- {{domxref("Element.ariaValueMin")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaValueMin`](/ja/docs/Web/API/Element/ariaValueMin) プロパティは、`aria-valuemin` 属性の値を反映します。
- {{domxref("ElementInternals.ariaValueMin")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaValueMin`](/ja/docs/Web/API/ElementInternals/ariaValueMin) プロパティは、`aria-valuemin` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

継承先のロール:

- [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`range` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range">` 要素の `min` 属性](/ja/docs/Web/HTML/Reference/Elements/input/range#min)
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
