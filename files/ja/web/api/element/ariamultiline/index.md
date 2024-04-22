---
title: "Element: ariaMultiLine プロパティ"
short-title: ariaMultiLine
slug: Web/API/Element/ariaMultiLine
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaMultiLine`** は {{domxref("Element")}} インターフェイスのプロパティで、テキストボックスが複数行の入力を受け入れるか単一の行だけを受け入れるかを示す [`aria-multiline`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) 属性の値を反映します。

> **メモ:** 可能であれば、HTMLの {{htmlelement("input")}} 要素で `type="text"` を使用するか、{{htmlelement("textarea")}} を使用してください。これらは意味づけが組み込まれており、ARIA 属性を必要としないからです。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : これは複数行テキストボックスです。
- `"false"`
  - : これは単一行テキストボックスです。

## 例

この例では、`txtBoxInput` という ID を持つ要素の `aria-multiline` 属性は "true" に設定されており、このボックスが複数行の入力を許可していることを示しています。`ariaMultiLine` を使用して、値を "false" に更新します。

```html
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaMultiLine); // "true"
el.ariaMultiLine = "false";
console.log(el.ariaMultiLine); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: textbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role)
