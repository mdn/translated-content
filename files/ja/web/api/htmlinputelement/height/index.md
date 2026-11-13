---
title: "HTMLInputElement: height プロパティ"
short-title: height
slug: Web/API/HTMLInputElement/height
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

**`height`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、コントロールの高さを指定します。これは、 {{htmlelement("input")}} 要素の [`height`](/ja/docs/Web/HTML/Reference/Elements/input#height) 属性を反映します。

`height` プロパティは、 [`image`](/ja/docs/Web/HTML/Reference/Elements/input/image) 型のみに有効です。これは、ピクセル単位で画像ボタンの垂直寸法を定義します。CSS のサイズ指定プロパティがコントロールに適用される場合、値はレンダリングされたコントロールのコンテンツボックスの高さとなり、`height` 属性の値ではありません。`height` が設定されておらず、CSS がコントロールのサイズに影響しない場合、`height` は画像の内在サイズとなります。画像が読み込まれなかった場合、値は `alt` テキストの高さになります。高さが不明な場合は `height` は `0` になります。 `height` が設定されていない場合、CSS は高さに影響を与えず、画像は読み込まれず、 {{DOMxRef("HTMLInputElement.alt", "alt")}} の値は空文字列、または `src` が設定されていません。

## 値

数値です。

## 例

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.height);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLInputElement.width")}}
- {{DOMxRef("HTMLInputElement.src")}}
- {{DOMxRef("HTMLInputElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS の {{CSSXRef("inline-size")}} プロパティ
- CSS の {{CSSXRef("height")}} プロパティ
- CSS の {{CSSXRef("aspect-ratio")}} プロパティ
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
