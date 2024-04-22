---
title: "Element: ariaRoleDescription プロパティ"
short-title: ariaRoleDescription
slug: Web/API/Element/ariaRoleDescription
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaRoleDescription`** は {{domxref("Element")}} インターフェイスのプロパティで、要素のロールに関する人間が読み取り可能な、作者がローカライズした説明を定義する [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 属性の値を反映します。

## 値

文字列です。

## 例

この例では、ID が `myApplication` である要素の `aria-roledescription` 属性が設定されています。`ariaRoleDescription` を用いて値を更新することができます。

```html
<div
  id="myApplication"
  role="application"
  aria-roledescription="a description of this widget">
  …
</div>
```

```js
let el = document.getElementById("myApplication");
console.log(el.ariaRoleDescription); // "a description of this widget"
el.ariaRoleDescription = "an updated description of this widget";
console.log(el.ariaRoleDescription); // "an updated description of this widget"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

- [ARIA: application ロール](/ja/docs/Web/Accessibility/ARIA/Roles/application_role)
