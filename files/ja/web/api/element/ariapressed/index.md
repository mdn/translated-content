---
title: "Element: ariaPressed プロパティ"
short-title: ariaPressed
slug: Web/API/Element/ariaPressed
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaPressed`** は {{domxref("Element")}} インターフェイスのプロパティで、トグルボタンの現在の押下状態を示す [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性の値を反映します。

> **メモ:** 可能であれば、HTML の {{htmlelement("input")}} 要素に `type="button"` を使用するか、{{htmlelement("button")}} 要素を使用すると、意味づけが組み込まれており、ARIA 属性を持つ必要がありません。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : この要素は押下状態にあります。
- `"false"`
  - : この要素は押されることに対応していますが、現在は押下状態にありません。
- `"mixed"`
  - : 3 状態トグルボタンの混合モード値を示します。
- `"undefined"`
  - : この要素は押下状態に対応していません。

## 例

この例では、`saveChanges` という ID を持つ要素の `aria-pressed` 属性は "false" に設定されており、この入力は現在押されていないことを示しています。`ariaPressed` を使用して、値を "true" に更新します。

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaPressed); // "false"
el.ariaPressed = "true";
console.log(el.ariaPressed); // "true"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: button ロール](/ja/docs/Web/Accessibility/ARIA/Roles/button_role)
