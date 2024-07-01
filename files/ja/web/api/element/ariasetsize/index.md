---
title: "Element: ariaSetSize プロパティ"
short-title: ariaSetSize
slug: Web/API/Element/ariaSetSize
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaSetSize`** は {{domxref("Element")}} インターフェイスのプロパティで、リスト項目またはツリー項目の現在の設定にある項目の数を定義する [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、ID が `tab-id` である要素の `aria-setsize` 属性を "3" に設定し、機器にグループ内に現在 3 つのタブがあることを通知しています。`ariaSetSize` を使用して、値を "4" に更新します。

```html
<button
  role="tab"
  aria-selected="true"
  aria-setsize="3"
  aria-controls="tabpanel-id"
  id="tab-id">
  Tab label
</button>
```

```js
let el = document.getElementById("tab-id");
console.log(el.ariaSetSize); // 3
el.ariaSetSize = "4";
console.log(el.ariaSetSize); // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: tab ロール](/ja/docs/Web/Accessibility/ARIA/Roles/tab_role)
