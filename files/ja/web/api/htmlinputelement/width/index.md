---
title: "HTMLInputElement: width プロパティ"
short-title: width
slug: Web/API/HTMLInputElement/width
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

**`width`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、コントロールの高さを指定します。これは、 {{htmlelement("input")}} 要素の [`width`](/ja/docs/Web/HTML/Element/input#width) 属性を反映します。

`width` プロパティは、 [`image`](/ja/docs/Web/HTML/Element/input/image) 型のみに有効です。これは、ピクセル単位で画像ボタンの水平方向の寸法を定義します。このプロパティの値は、レンダリングされたボタンの[コンテンツボックス](/ja/docs/Web/CSS/box-edge#content-box)の幅です。CSS ボックスモデルプロパティがこのコントロールのサイズに影響する場合、そちらが優先されます。

`width` が設定されておらず、CSS がコントロールのサイズに影響しない場合、`width` は画像の内在サイズとなります。画像が読み込まれなかった場合、値は `alt` テキストの高さになります。高さが不明な場合は `width` は `0` になります。 `width` が設定されていない場合、CSS は高さに影響を与えず、画像は読み込まれず、 {{DOMxRef("HTMLInputElement.alt", "alt")}} の値は空文字列、または `src` が設定されていません。

## 値

数値です。

## 例

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.width);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLInputElement.height")}}
- {{DOMxRef("HTMLInputElement.src")}}
- {{DOMxRef("HTMLInputElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS の {{CSSXRef("inline-size")}} プロパティ
- CSS の {{CSSXRef("width")}} プロパティ
- CSS の {{CSSXRef("aspect-ratio")}} プロパティ
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/CSS_box_sizing)モジュール
