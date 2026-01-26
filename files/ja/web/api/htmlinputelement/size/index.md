---
title: "HTMLInputElement: size プロパティ"
short-title: size
slug: Web/API/HTMLInputElement/size
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

**`size`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティは、表示される可視文字数を定義します。これは、{{htmlelement("input")}} 要素の [`size`](/ja/docs/Web/HTML/Reference/Elements/input#size) 属性を反映します。

`size` プロパティは [`text`](/ja/docs/Web/HTML/Reference/Elements/input/text)、[`search`](/ja/docs/Web/HTML/Reference/Elements/input/search)、[`tel`](/ja/docs/Web/HTML/Reference/Elements/input/tel)、[`email`](/ja/docs/Web/HTML/Reference/Elements/input/email)、[`url`](/ja/docs/Web/HTML/Reference/Elements/input/url)、[`password`](/ja/docs/Web/HTML/Reference/Elements/input/password) 入力が頼みに関連します。値は 0 より大きな非負の整数です。省略されたり向こうであったりした場合、値は `20` になります。

## 値

整数です。

## 例

```js
const inputElement = document.getElementById("password");
console.log(inputElement.size);
inputElement.size = 12;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("HTMLInputElement.minLength")}}
- {{DOMXref("HTMLInputElement.maxLength")}}
- {{DOMXref("HTMLSelectElement.size")}}
