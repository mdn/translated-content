---
title: aria-valuetext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`aria-valuetext` 属性は、範囲ウィジェットの `aria-valuenow` の人間が読める代替テキストを定義します。

## 解説

数字は、パーセンテージであっても、必ずしもユーザーフレンドリーではありません。支援技術は [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) を数値として提示します。進行状況バーが 8% の場合、それは何を意味するのでしょうか？ `aria-valuetext` は、現在の値をよりユーザーフレンドリーで人間が理解しやすい方法で提示する方法を提供します。たとえば、バッテリーメーターの値は `aria-valuetext="8% (34 minutes) remaining"` として伝えられる場合があります。

その値が不明な場合を除き、`aria-valuetext` 属性は `aria-valuenow` 属性の代わりにではなく、`aria-valuenow` 属性とともに使用されます。

`aria-valuetext` は、`aria-valuenow` の数値が意味を持たない場合にのみ必要です。例えば、範囲の値は数値ですが、大学のクラスレベルなどの数値以外の値に使用される場合があります。4 年制大学の `aria-valuenow` の値は 1 から 4 の範囲になり、値空間内の各値の位置を示します。この場合、`aria-valuetext` は文字列「first year」、「sophomore」、「junior」、「senior」のいずれかになります。

ピザのスライスを何枚注文するかを示すスピナーが `aria-valuenow="3"` である場合など、数値に意味がある場合は `aria-valuetext` は必要ありません。

`aria-valuetext` と `aria-valuenow` の両方が含まれている場合は、`aria-valuetext` がアナウンスされます。`aria-valuetext` 属性がない場合、支援技術は現在の値の `aria-valuenow` 属性をアナウンスします。

## 値

- `<string>`
  - : `aria-valuenow` 値の人間が判読可能な代替テキスト。

## 関連インターフェイス

- {{domxref("Element.ariaValueText")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaValueText`](/ja/docs/Web/API/Element/ariaValueText) プロパティは、`aria-valuetext` 属性の値を反映します。
- {{domxref("ElementInternals.ariaValueText")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaValueText`](/ja/docs/Web/API/ElementInternals/ariaValueText) プロパティは、`aria-valuetext` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`range`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
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

- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
