---
title: "ARIA: aria-checked 属性"
short-title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-checked` 属性は、チェックボックスやラジオボタン、その他のウィジェットの現在の「チェックされている」状態を示します。

> [!NOTE]
> 可能な場合は、HTML の `type="checkbox"` または `type="radio"` の {{htmlelement("input")}} 要素を使用してください。これらには意味的な情報が組み込まれているため、ARIA 属性は必要ありません。

## 解説

`aria-checked` 属性は、要素がチェックされている (`true`)、チェックされていない (`false`)、またはチェック状態が未決定 (`mixed`)（チェックされている状態でもチェックされていない状態でもない）のいずれであるかを示します。`mixed` の値は、3 状態入力ロールである [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) と [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) で対応しています。

`mixed` の値は、[`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)、[`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)、[`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) などのロールや、これらを継承する要素では対応していません。対応していない場合に `mixed` が設定されると、値は `false` になります。

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

フォーカスを有効にするには、`tabindex` 属性が必要です。`aria-checked` 状態を切り替えるには、JavaScript が必要です。また、このチェックボックスが送信可能なフォームの一部である場合は、名前と値を設定するために、さらに JavaScript が必要です。

上記は次のように記述することもできます:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

ARIA の代わりに `type="checkbox"` の {{htmlelement("input")}} 要素を使用すると、JavaScript は必要ありません。

## 値

- false
  - : 要素はチェックをサポートしていますが、現在はチェックされていません。
- true
  - : 要素はチェックされています。
- mixed
  - : [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) および [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) の場合のみ、`indeterminate` と同等であり、チェックもチェック解除もされていない混合モードの値を示します。
- undefined (デフォルト)
  - : 要素はチェックに対応していません。

## 関連インターフェイス

- {{domxref("Element.ariaChecked")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaChecked`](/ja/docs/Web/API/Element/ariaChecked) プロパティは、`aria-checked` 属性の値を反映します。
- {{domxref("ElementInternals.ariaChecked")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaChecked`](/ja/docs/Web/API/Element/ariaChecked) プロパティは、`aria-checked` 属性の値を反映します。

```js
myHTMLElement.ariaChecked = true;
```

## 関連ロール

以下のロールで使用されます:

- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)
- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [2 状態チェックボックスの例](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [混合状態チェックボックスの例](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
