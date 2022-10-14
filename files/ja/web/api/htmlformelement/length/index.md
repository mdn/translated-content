---
title: HTMLFormElement.length
slug: Web/API/HTMLFormElement/length
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**HTMLFormElement.length`** は読み取り専用のプロパティで、 {{HTMLElement("form")}} 要素に含まれるコントロールの数を返します。

フォームのコントロールの一覧には {{domxref("HTMLFormElement.elements", "elements")}} プロパティを使用してアクセスすることができます。

これは `<form>` 要素の子孫である要素、および `form` プロパティを使用してフォームのメンバーになった要素の両方が含まれます。

このプロパティで扱われる要素は、 {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} （ただし、 "image" 型のものは、歴史的な理由によって除外されます）、{{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} です。

## 値

数値です。

## 例

```js
if (document.getElementById('form1').length > 1) {
  // 複数のフォームコントロールがある場合
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
