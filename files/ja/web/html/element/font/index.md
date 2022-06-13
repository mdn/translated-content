---
title: <font>
slug: Web/HTML/Element/font
tags:
  - 要素
  - HTML
  - 非推奨
  - リファレンス
  - ウェブ
browser-compat: html.elements.font
translation_of: Web/HTML/Element/font
---

{{deprecated_header}}

## 概要

**`<font>`** は [HTML](/ja/docs/Web/HTML) の要素で、その内容のフォントサイズ、文字色、使用フォントを定義します。

> **Warning:** この要素を使用しないでください。 CSS の[フォント](/ja/docs/Web/CSS/CSS_Fonts)プロパティを使用してテキストにスタイル付けしてください。

## 属性

他のすべての HTML 要素と同様に、この要素は [グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- {{htmlattrdef("color")}}
  - : 色名または #RRGGBB 形式のカラーコードでテキストの色を指定します。
- {{htmlattrdef("face")}}
  - : フォント名を 1 つ、またはカンマで区切って複数指定します。複数記述した場合は、表示可能なフォントの内で最初のものが優先されます。指定したフォントが全てローカルのシステム内にインストールされていない場合は、システムで設定されている等幅フォントかプロポーショナルフォントが適用されます。
- {{htmlattrdef("size")}}
  - : フォントサイズとして、数値または相対値キーワードを指定します。 数値の場合の範囲は `1` から `7` で、`1` が最小、`3` が初期値となります。 `+2`、`-3` の様に、{{HTMLElement("basefont")}} 要素の {{htmlattrxref("size", "basefont")}} 属性の値、もしくは初期値である `3` を基準とする相対値で記述する事も可能です。

## DOM インターフェース

この要素は {{domxref("HTMLFontElement")}} インターフェイスを実装しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{HTMLRef}}
