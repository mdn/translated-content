---
title: "Element: ariaModal プロパティ"
short-title: ariaModal
slug: Web/API/Element/ariaModal
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaModal`** は {{domxref("Element")}} インターフェイスのプロパティで、要素が表示される際にモーダルであるかどうかを示す `aria-modal` 属性の値を反映します。`aria-modal` プロパティを `role="dialog"` の要素に適用すると、ダイアログ外のコンテンツが不活性であることを支援技術に知らせるために、背景で aria-hidden を使用する技術に置き換わります。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : この要素はモーダルです。
- `"false"`
  - : この要素はモーダルではありません。

## 例

この例では、ID が `address-modal` の要素の `aria-modal` 属性は "true" に設定されており、モーダルダイアログであることを示しています。`ariaModal` を使用して、値を "false" に更新します。

```html
<div
  role="dialog"
  id="address-modal"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc"
  aria-modal="true"></div>
```

```js
let el = document.getElementById("address-modal");
console.log(el.ariaModal); // "true"
el.ariaModal = "false";
console.log(el.ariaModal); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: dialog ロール](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role)
