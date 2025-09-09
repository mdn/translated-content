---
title: aria-pressed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-pressed
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-pressed` 属性は、トグルボタンの現在の「押されている」状態を示します。

## 解説

[`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) ロールを持つ要素に `aria-pressed` を追加すると、ボタンがトグルボタンになります。`aria-pressed` 属性はトグルボタンにのみ関連します。これは、ボタンの現在の「押されている」状態を表します。

値は「三状態」です。つまり、値は `true`、`false`、`mixed`、または `undefined` の値に設定できます。`aria-pressed` の場合、ほとんどの三状態値タイプと同様に、既定値は `undefined` です。

トグルボタンの値を変更するには、ボタンを完全に押して離すサイクルが必要です。ボタンを 1 回押して離すと、値が `true` に変更されます。もう一度押して離すと、値は `false` に戻ります。

`mixed` の値は、ボタンによって制御される複数の項目の値がすべて同じ値を共有しないことを意味します。

状態が変わっても、トグルのラベルの内容を変更しないでください。ボタンのラベルに「一時停止」と表示されている場合は、押されたときに「再生」に変更しないでください。この例では、押された状態が true の場合、ラベルは「一時停止」のままなので、スクリーンリーダーは「Pause toggle button pressed」のように読み上げます。

```html
<button aria-pressed="false">Pause</button>
```

ラベルを「一時停止」と「再生」の間で切り替えたい場合は、`aria-pressed` を使用しないでください。

ARIA の使用に関する第一のルールは、「要素を再利用して ARIA のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。{{HTMLElement('button')}} でネイティブ HTML セマンティクスを採用すると、押された状態を切り替える代わりにラベルを切り替えることができるため、`aria-pressed` 属性は不要になります。

## 値

- `false`
  - : ボタンは押されることをサポートしていますが、現在は押されていません。
- `mixed`
  - : 3 状態トグルボタンの混合モード値を示します。
- `true`
  - : ボタンが押されています。
- `undefined` (既定値)
  - : 要素は押されることをサポートしていません。

## 関連インターフェイス

- {{domxref("Element.ariaPressed")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaPressed`](/ja/docs/Web/API/Element/ariaPressed) プロパティは、`aria-pressed` の値を反映します。
- {{domxref("ElementInternals.ariaPressed")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaPressed`](/ja/docs/Web/API/ElementInternals/ariaPressed) プロパティは、`aria-pressed` の値を反映します。

## 関連付けられたロール

使用するロール:

- [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="button">`](/ja/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)
- {{HTMLElement('button')}}
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
