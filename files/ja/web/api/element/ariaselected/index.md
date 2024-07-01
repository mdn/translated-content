---
title: "Element: ariaSelected プロパティ"
short-title: ariaSelected
slug: Web/API/Element/ariaSelected
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaSelected`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-selected) 属性の値を反映し、選択状態を持つ要素の現在の "selected" 状態を示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : この項目は選択されています。
- `"false"`
  - : この項目は選択されていません。
- `"undefined"`
  - : この項目は選択できません。

## 例

この例では、ID が `tab-id` の要素の `aria-selected` 属性は "true" に設定されています。`ariaSelected`を使用して値を "false" に更新します。

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

```js
let el = document.getElementById("tab-id");
console.log(el.ariaSelected); // true
el.ariaSelected = "false";
console.log(el.ariaSelected); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: tab ロール](/ja/docs/Web/Accessibility/ARIA/Roles/tab_role)
