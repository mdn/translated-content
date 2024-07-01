---
title: "Element: ariaAtomic プロパティ"
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: 0cadcbcd77aeb0da27a33de28ce233a558801dc4
---

{{DefaultAPISidebar("DOM")}}

**`ariaAtomic`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) 属性の値を反映します。これは、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性によって定義された変更通知に基づいて、支援技術が変更された領域をすべて表示するか、部分的に表示するかを示します。

## 値

文字列で、以下の値のいずれかです。

- `"false"`
  - : 支援技術は、変更されたノードだけを表示します。
- `"true"`
  - : 支援技術は、変更された領域全体を、作者が定義したラベルが存在する場合はそれを含め、全体として表示します。

## 例

この例では、ID が `"clock"` の要素の `aria-atomic` 属性は "true" に設定されています。`ariaAtomic` を使用して値を "false" に更新します。

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaAtomic); // true
el.ariaAtomic = "false";
console.log(el.ariaAtomic); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
