---
title: aria-valuemax
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`aria-valuemax` 属性は、範囲ウィジェットで許可される最大値を定義します。

## 解説

`aria-valuemax` 属性は、範囲ウィジェットで許可される最大値を定義します。これは、{{HTMLElement('progress')}}、{{HTMLElement('meter')}}、および [`range`](/ja/docs/Web/HTML/Reference/Elements/input/range)、[`number`](/ja/docs/Web/HTML/Reference/Elements/input/number) と全ての日付型の {{HTMLElement('input')}} の `max` 属性に似ています。

非セマンティック要素で [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)、[`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)、[`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)、および [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) を含む範囲型ロールを作成する場合、`aria-valuemax` を使用して最小値より大きい最大値を定義できます。これは `slider`、`scrollbar` および `spinbutton` の必須属性です。

最小値と最大値を宣言すると、支援技術が範囲のサイズをユーザーに伝えることができます。最小値は [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) で定義されます。

> [!WARNING]
> [`range`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) ロール自体は [「抽象ロール」](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#6._抽象ロール) であるため、**使用しないで**ください。`aria-valuemax` 属性は、`range` ロールの全てのサブタイプで使用されます。

## 例

以下のコードは、最大値が 9 のスライダーを示しています。

```html
<div id="dimesLabel">Dimes</div>
<div
  role="slider"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="9"
  aria-labelledby="dimesLabel"
  id="dimes"></div>
```

## 値

- `<number>`
  - : 最小値より大きい整数または小数。

## 関連インターフェイス

- {{domxref("Element.ariaValueMax")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaValueMax`](/ja/docs/Web/API/Element/ariaValueMax) プロパティは、`aria-valuemax` 属性の値を反映します。
- {{domxref("ElementInternals.ariaValueMax")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaValueMax`](/ja/docs/Web/API/ElementInternals/ariaValueMax) プロパティは、`aria-valuemax` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) (必須)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) (必須)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) (必須)

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
- [`<input type="range">` 要素の `max` 属性](/ja/docs/Web/HTML/Reference/Elements/input/range#max)
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
