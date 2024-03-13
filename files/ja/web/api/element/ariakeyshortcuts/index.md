---
title: "Element: ariaKeyShortcuts プロパティ"
short-title: ariaKeyShortcuts
slug: Web/API/Element/ariaKeyShortcuts
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaKeyShortcuts`** は {{domxref("Element")}} インターフェイスのプロパティで、`aria-keyshortcuts` 属性の値を反映し、要素をアクティブにしたりフォーカスを与えたりするために作者が実装したキーボードショートカットを示します。

## 値

文字列です。

## 例

この例では、IDが `skip-link` の要素の `aria-keyshortcuts` 属性には "Alt+Shift+A" が設定されています。`ariaKeyShortcuts` を使用して、値を "Alt+Shift+M" に変更します。

```html
<a id="skip-link" href="#content" aria-keyshortcuts="Alt+Shift+A">
  Skip to content
</a>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaKeyShortcuts); // "Alt+Shift+A"
el.ariaKeyShortcuts = "Alt+Shift+M";
console.log(el.ariaKeyShortcuts); // "Alt+Shift+M"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
