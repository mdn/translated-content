---
title: "Element: ariaPlaceholder プロパティ"
short-title: ariaPlaceholder
slug: Web/API/Element/ariaPlaceholder
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaPlaceholder`** は {{domxref("Element")}} インターフェイスのプロパティで、`aria-placeholder` 属性の値を反映します。この属性は、コントロールに値がない場合表示する、ユーザーのデータ入力を助けることを意図した短いヒントを定義します。

> **メモ:** 可能であれば、HTML の {{htmlelement("input")}} 要素の `type="text"` と {{htmlelement("textarea")}} を使用してください。これらは意味づけがあり、ARIA 属性を必要としません。

## 値

文字列です。

## 例

この例では、IDが `txtBoxInput` の要素の `aria-placeholder` 属性には文字列が設定されています。`ariaPlaceholder`を使用して、文字列を別の値に更新します。

```html
<div id="txtboxLabel">Enter your five-digit zipcode</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
  aria-labelledby="txtboxLabel"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaPlaceholder); // "5-digit zipcode"
el.ariaPlaceholder = "12345";
console.log(el.ariaPlaceholder); // "12345"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: textbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role)
