---
title: "Element: ariaRequired プロパティ"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaRequired`** は {{domxref("Element")}} インターフェイスのプロパティで、フォームを送信する前にユーザー入力が必要であることを示す `aria-required` 属性の値を反映します。

> **メモ:** 使用可能な場合は、HTML の {{htmlelement("input")}} 要素で `type="text"` と {{htmlelement("textarea")}} を使用してください。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : ユーザーはフォームを送信する前に要素に入力する必要があります。
- `"false"`
  - : フォームを送信するためにユーザー入力は必要ありません。

## 例

この例では、`txtBoxInput` という ID を持つ要素の `aria-required` 属性は "true" に設定されており、この入力が完了しなければならないことを示しています。`ariaRequired` を使用して値を "false" に更新します。

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
console.log(el.ariaRequired); // "true"
el.ariaRequired = "false";
console.log(el.ariaRequired); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: textbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role)
