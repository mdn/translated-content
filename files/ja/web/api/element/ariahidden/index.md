---
title: "Element: ariaHidden プロパティ"
short-title: ariaHidden
slug: Web/API/Element/ariaHidden
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaHidden`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性の値を反映し、要素がアクセシビリティ API に公開されているかどうかを示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : この要素はアクセシビリティ API から隠されています。
- `"false"`
  - : 要素は、あたかもレンダリングされたかのようにアクセシビリティ API に公開されます。
- `undefined`
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 例

この例では、ID が `hidden` の要素の [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性は "true" に設定されています。`ariaHidden` を使用して値を "false" に更新します。

```html
<div id="hidden" aria-hidden="true">Some things are better left unsaid.</div>
```

```js
let el = document.getElementById("hidden");
console.log(el.ariaHidden); // true
el.ariaHidden = "false";
console.log(el.ariaHidden); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
