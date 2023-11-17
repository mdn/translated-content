---
title: "Element: ariaHasPopup プロパティ"
short-title: ariaHasPopup
slug: Web/API/Element/ariaHasPopup
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaHasPopup`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性の値を反映し、要素によって発生させることができるメニューやダイアログなどの対話型ポップアップ要素の型と利用できるかどうかを示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"false"`
  - : この要素にはポップアップがありません。
- `"true"`
  - : この要素にはメニューであるポップアップがあります。
- `"menu"`
  - : この要素にはメニューであるポップアップがあります。
- `"listbox"`
  - : この要素にはリストボックスであるポップアップがあります。
- `"tree"`
  - : この要素にはツリーであるポップアップがあります。
- `"grid"`
  - : この要素にはグリッドであるポップアップがあります。
- `"dialog"`
  - : この要素にはダイアログであるポップアップがあります。

> **警告:** 様々な `aria-haspopup` 値への対応は、属性を指定する要素によって異なる可能性があることに注意してください。`aria-haspopup` を使用する際には、ARIA 仕様に準拠し、必要なブラウザーや支援技術でテストした際に期待通りの動作をするようにしてください。

## 例

この例では、ID が `animal` の要素の `aria-haspopup` 属性は "`true`" に設定されています。`ariaHasPopup` を使用して、値を "`listbox`" に更新します。これは `listbox` ポップアップを呼び出すコンボボックスとして有益な値です。

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-controls="animals-listbox"
    aria-activedescendant=""
    aria-expanded="false"
    aria-haspopup="true" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaHasPopup); // true
el.ariaHasPopup = "listbox";
console.log(el.ariaHasPopup); // listbox
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
