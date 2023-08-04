---
title: "Element: ariaDisabled プロパティ"
short-title: ariaDisabled
slug: Web/API/Element/ariaDisabled
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaDisabled`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) 属性の値を反映し、要素が知覚可能だが無効であり、編集や他の処理をすることはできないことを示します。

> **メモ:** 可能であれば、{{htmlelement("input")}} 要素に `type="button"` を使用するか、{{htmlelement("button")}} 要素を使用してください。これらの要素は意味づけが組み込まれており、ARIA 属性を必要としないからです。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : 要素とフォーカス可能なすべての子孫は無効ですが、知覚可能であり、それらの値はユーザーによって変更できません。
- `"false"`
  - : 要素が有効になっています。

## 例

この例では、ID が `saveChanges` である要素の `aria-disabled` 属性が "true" に設定されており、この入力が現在無効であることを示しています。`ariaDisabled` を使用して、値を "false" に更新します。

```html
<div id="saveChanges" tabindex="0" role="button" aria-disabled="true">Save</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaDisabled); // "true"
el.ariaDisabled = "false";
console.log(el.ariaDisabled); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
