---
title: "HTMLInputElement: src プロパティ"
short-title: src
slug: Web/API/HTMLInputElement/src
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

**`src`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、グラフィックの送信ボタンとして表示する画像のソースを指定します。これは、{{htmlelement("input")}} 要素の [`src`](/ja/docs/Web/HTML/Element/input#src) 属性を反映します。

`src` プロパティは [`image`](/ja/docs/Web/HTML/Element/input/image) 型のみに有効です。

## 値

文字列です。

## 例

```js
const inputElement = document.getElementById("imageButton");
console.log(input.src);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
