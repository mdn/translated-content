---
title: "HTMLInputElement: alt プロパティ"
short-title: alt
slug: Web/API/HTMLInputElement/alt
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

**`alt`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、画像を使用できないユーザーやユーザーエージェント向けに、ボタンのテキストラベルを定義します。これは、{{htmlelement("input")}} 要素の [`alt`](/ja/docs/Web/HTML/Reference/Elements/input#alt) 属性を反映します。

この `alt` 属性は [`image`](/ja/docs/Web/HTML/Reference/Elements/input/image) 型でのみ有効です。画像が利用できない場合の同等のボタンに適切なラベルを示す、空ではない文字列でなければなりません。

## 値

文字列です。

## 例

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.alt);
inputElement.alt = "はるかに良い説明";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("HTMLImageElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- [よい alt テキストを書く](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/)（英語）
