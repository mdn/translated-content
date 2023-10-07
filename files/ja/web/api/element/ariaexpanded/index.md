---
title: "Element: ariaExpanded プロパティ"
short-title: ariaExpanded
slug: Web/API/Element/ariaExpanded
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaExpanded`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) 属性の値を反映し、この要素が所有または制御するグループ化要素が展開されているか折りたたまれているかを示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : この要素が所有または制御しているグループ化要素が展開されています。
- `"false"`
  - : この要素が所有または制御しているグループ化要素が折り畳まれています。
- `"undefined"`
  - : この要素は展開されているグループ化要素を所有または制御していません。

## 例

この例では、ID が `animal` の要素の `aria-expanded` 属性は "false" に設定されています。`ariaExpanded` を使用して、値を "true" に更新します。

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-expanded="false"
    aria-haspopup="true" />
  <button id="animals-button" tabindex="-1" aria-label="Open">▽</button>
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaExpanded); // false
el.ariaExpanded = "true";
console.log(el.ariaExpanded); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
