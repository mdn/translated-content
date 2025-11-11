---
title: <font>
slug: Web/HTML/Reference/Elements/font
original_slug: Web/HTML/Element/font
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{HTMLSidebar}}{{Deprecated_Header}}

**`<font>`** は [HTML](/ja/docs/Web/HTML) の要素で、その内容のフォントサイズ、文字色、使用フォントを定義します。

> [!WARNING]
> この要素を使用しないでください。 CSS の[フォント](/ja/docs/Web/CSS/Guides/Fonts)のプロパティを使用してテキストにスタイル設定してください。

## 属性

他のすべての HTML 要素と同様に、この要素は [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)に対応しています。

- `color` {{Deprecated_Inline}}
  - : 色名または #RRGGBB 形式のカラーコードでテキストの色を指定します。
- `face` {{Deprecated_Inline}}
  - : フォント名を 1 つ、またはカンマで区切って複数指定します。複数記述した場合は、表示可能なフォントの内で最初のものが優先されます。指定したフォントが全てローカルのシステム内にインストールされていない場合は、システムで設定されている等幅フォントかプロポーショナルフォントが適用されます。
- `size` {{Deprecated_Inline}}
  - : フォントサイズとして、数値または相対値キーワードを指定します。数値の場合の範囲は `1` から `7` で、`1` が最小、`3` が初期値となります。 `+2`、`-3` の様に、初期値である `3` を基準とする相対値で記述することも可能です。

## DOM インターフェイス

この要素は {{domxref("HTMLFontElement")}} インターフェイスを実装しています。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
