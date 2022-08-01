---
title: <basefont>
slug: conflicting/Web/CSS/CSS_Fonts
tags:
  - 要素
  - フォント
  - HTML
  - レイアウト
  - 非推奨
  - リファレンス
  - スタイル
  - ウェブ
  - basefont
translation_of: Web/HTML/Element/basefont
original_slug: Web/HTML/Element/basefont
browser-compat: html.elements.basefont
---
{{deprecated_header}}

**`<basefont>`** は [HTML](/ja/docs/Web/HTML) の要素で、子孫要素の既定のフォントの種類、大きさ、色を設定します。設定すると、 {{HTMLElement("font")}} を使用したフォントの大きさは基本の大きさから相対的なものになります。

この要素は使用しないでください。要素やそのコンテンツのフォントの設定を変更するには、代わりに、 {{cssxref("font")}}, {{cssxref("font-family")}}, {{cssxref("font-size")}}, {{cssxref("color")}} を使用してください。

## 属性

他の全ての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- {{htmlattrdef("color")}}
  - : この属性は、テキストの文字色を色名または 16 進の #RRGGBB 表記で設定します。
- {{htmlattrdef("face")}}
  - : この属性は、 1 つ以上のフォント名のリストです。文書の文字列は既定のスタイルで、クライアントのブラウザーがサポートする最初のフォント書体を使用して表示します。リスト内のフォントがローカルシステムにインストールされていない場合、一般的にブラウザーはシステムのプロポーショナルフォントまたは等幅フォントを既定値にします。
- {{htmlattrdef("size")}}
  - : この属性は、フォントのサイズを数値または相対値で指定します。数値の範囲は 1 から 7 で、 1 が最小、 3 が既定値です。

## 使用上のメモ

**この要素を使用しないでください！**この要素は主要ブラウザー間での一貫した実装がないまま、一度 HTML 3.2 の仕様として策定されました。さらに、その後のブラウザーのバージョンアップでも一貫した実装は行なわれませんでした。これを使用しても、常に*不確実な*結果しかもたらされませんでした。

`<basefont>` 要素は、スタイル付けのみを目的とした他の要素と同時に、既に非推奨になっています。 HTML 4 より、 HTML はスタイル情報を伝えなくなりました（{{HTMLElement("style")}} 要素や各要素の **style** 属性を除く）。 HTML5 では、この要素は完全に削除されました。新たなウェブ開発では、スタイルを [CSS](/ja/docs/Web/CSS) のみで記述してください。

以前の {{HTMLElement("font")}} 要素の動作は [CSS フォント](/ja/docs/Web/CSS/CSS_Fonts)のプロパティで実現でき、またより細かく制御できます。

## DOM インターフェイス

この要素は {{domxref("HTMLBaseFontElement")}} インターフェイスを提供します。

## 例

```html
<basefont color="#FF0000" face="Helvetica" size="+2" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## メモ

- HTML 3.2 は basefont 要素に対応していますが、 size 属性のみです。
- HTML および XHTML の strict 仕様では、この要素に対応していません。
- Mozilla や Opera などの一部の標準志向ブラウザーは、これが transitional の標準仕様の一部であるにもかかわらず、この要素に対応していません。
- この要素は、 {{HTMLElement("body")}} 要素の CSS ルールで模倣できます。
- XHTML 1.0 では `<basefont />` のように末尾のスラッシュが必要です。

{{HTMLRef}}
