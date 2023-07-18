---
title: "Element: ariaLevel プロパティ"
short-title: ariaLevel
slug: Web/API/Element/ariaLevel
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaLevel`** は {{domxref("Element")}} インターフェイスのプロパティで、構造内の要素の階層レベルを定義する `aria-level` 属性の値を反映します。

> **メモ:** 使用可能な場合は、HTML の {{htmlelement("Heading_Elements", "h1")}} または他の正しい見出しレベルを使用してください。

## 値

整数の入った文字列です。

## 例

この例では、IDが `main-heading` の要素の `aria-level` 属性は "1" に設定されています。`ariaLevel` を使用して値を "2 "に更新します。

```html
<div role="heading" id="main-heading" aria-level="1">
  This is a main page heading
</div>
```

```js
let el = document.getElementById("main-heading");
console.log(el.ariaLevel); // "1"
el.ariaLevel = "2";
console.log(el.ariaLevel); // "2"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: heading ロール](/ja/docs/Web/Accessibility/ARIA/Roles/heading_role)
