---
title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
original_slug: Web/Accessibility/ARIA/Attributes/aria-checked
l10n:
  sourceCommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{AccessibilitySidebar}}

`aria-checked` 属性は、チェックボックスやラジオボタン、その他のウィジェットの現在の「チェックされている」状態を示します。

> [!NOTE]
> 可能な場合は、HTML の `type="checkbox"` もしくは `type="radio"` の {{htmlelement("input")}} 要素を使用してください。これらにはセマンティクスが組み込まれており、ARIA 属性が必要ありません。

## 解説

`aria-checked` 属性は、要素がチェックされているか (`true`)、チェックされていないか (`false`)、またはチェック状態が未決定 (`mixed`)（チェックされている状態でもチェックされていない状態でもない）であるかどうかを示します。`mixed` の値は 3 状態入力ロールである [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) と [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) によってサポートされています。

`mixed` の値は、[`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) や [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)、 [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) などのロール、およびこれらを継承する要素ではサポートされていません。サポートされていないときに `mixed` が設定されている場合、値は `false` になります。

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

`type="checkbox"` の {{htmlelement("input")}} 要素を ARIA の代わりに使用すると、JavaScript は必要ありません。

## 値

- false
  - : 要素はチェックをサポートしていますが、現在はチェックされていません。
- true
  - : 要素はチェックされています。
- mixed
  - : [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) および [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) の場合のみ、`indeterminate` と同等であり、チェックもチェック解除もされていない混合モードの値を示します。
- undefined (デフォルト)
  - : 要素はチェックに対応していません。

## 関連ロール

以下のロールで使用されます:

- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## 関連インターフェイス

- {{domxref("Element.ariaChecked")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaChecked`](/ja/docs/Web/API/Element/ariaChecked) プロパティは、`aria-checked` 属性の値を反映します。
- {{domxref("ElementInternals.ariaChecked")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaChecked`](/ja/docs/Web/API/Element/ariaChecked) プロパティは、`aria-checked` 属性の値を反映します。

```js
myHTMLElement.ariaChecked = true;
```

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)
- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [Two state checkbox example](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Mix-state checkbox example](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
