---
title: "HTMLInputElement: type プロパティ"
short-title: type
slug: Web/API/HTMLInputElement/type
l10n:
  sourceCommit: b71671827671f063b288b2f4abb9c242fa1dfda7
---

{{ApiRef("HTML DOM")}}

**`type`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、 {{HTMLElement("input")}} 要素を入力する際に許可されるデータの型（数値、日付、メールアドレスなど）を示します。ブラウザーは適切なウィジェットを選択し、ユーザーが有効な値を入力できるように振る舞います。

これは {{HTMLElement("input")}} 要素の [`type`](/ja/docs/Web/HTML/Element/input#type) を反映します。

## 値

型を表す文字列です。

取りうる値の一覧はこの属性の[入力型](/ja/docs/Web/HTML/Element/input#input_types)の節にあります。

## 例

### HTML

```html
<input id="input1" type="date" />
```

### JavaScript

```js
const inputElement = document.querySelector("#input1");
console.log(inputElement.type); // Output: "date"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.type")}} プロパティ
- {{domxref("HTMLButtonElement.type")}} プロパティ
