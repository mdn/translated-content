---
title: "Element: ariaMultiSelectable プロパティ"
short-title: ariaMultiSelectable
slug: Web/API/Element/ariaMultiSelectable
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaMultiSelectable`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) 属性の値を反映し、ユーザーが現在の選択可能な子孫から複数の項目を選択できることを示します。

> **メモ:** 可能であれば、HTML の {{htmlelement("select")}} 要素を使用してください。これは意味づけが組み込まれており、ARIA 属性を必要としないからです。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : 一度に複数の項目を選択することができます。
- `"false"`
  - : 選択できる項目は 1 つです。

## 例

この例では、ID が `listbox1` の要素の `aria-multiselectable` 属性が "true" に設定されており、この入力が複数の選択項目を受け入れることを示しています。`ariaMultiSelectable` を使用して、値を "false" に更新します。

```html
<div role="listbox" tabindex="0" id="listbox1"
  aria-multiselectable="true" aria-labelledby="listbox1label" aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">Green</div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div<
</div>
```

```js
let el = document.getElementById("listbox1");
console.log(el.ariaMultiSelectable); // "true"
el.ariaMultiSelectable = "false";
console.log(el.ariaMultiSelectable); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: listbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role)
