---
title: "Element: ariaReadOnly プロパティ"
short-title: ariaReadOnly
slug: Web/API/Element/ariaReadOnly
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaReadOnly`** は {{domxref("Element")}} インターフェイスのプロパティで、要素が編集不可であるが、それ以外は操作可能であることを示す [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) 属性の値を反映します。

> **メモ:** 可能であれば、HTML の {{htmlelement("input")}} 要素の `type="text"` と {{htmlelement("textarea")}} を使用してください。これらは意味づけがあり、ARIA 属性を必要としません。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : ユーザーは要素の値を変更できません。
- `"false"`
  - : ユーザーは要素の値を設定することができます。

## 例

この例では、ID が `txtBoxInput` の要素の `aria-readonly` 属性は "true" に設定されており、この入力は現在読み取り専用であることを示しています。`ariaReadOnly` を使用して、値を "false" に更新します。

```html
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-readonly="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaReadOnly); // "true"
el.ariaReadOnly = "false";
console.log(el.ariaReadOnly); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: textbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role)
