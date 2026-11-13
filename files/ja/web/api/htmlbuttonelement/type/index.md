---
title: "HTMLButtonElement: type プロパティ"
short-title: type
slug: Web/API/HTMLButtonElement/type
l10n:
  sourceCommit: 34d914d848c6d749bb264e6d5c4dda3e94fda4ba
---

{{ApiRef("HTML DOM")}}

**`type`** は {{domxref("HTMLButtonElement")}} インターフェイスのメソッドで、この {{HTMLElement("button")}} 要素の動作の種類を示す文字列です。

これは {{HTMLElement("button")}} 要素の [`type`](/ja/docs/Web/HTML/Reference/Elements/button#type) 属性を反映しています。

## 値

種類を表す文字列です。

取りうる値は[ボタンの種類](/ja/docs/Web/API/HTMLButtonElement#htmlbuttonelement.type)の節に一覧があります。

## 例

### HTML

```html
<button id="button" type="reset">type</button>
```

### JavaScript

```js
const buttonElement = document.querySelector("#buttton");
console.log(buttonElement.type); // "reset"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.type")}} プロパティ
- {{domxref("HTMLInputElement.type")}} プロパティ
