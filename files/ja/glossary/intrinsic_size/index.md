---
title: Intrinsic size (内在サイズ)
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS における要素の**内在サイズ** (intrinsic size) とは、その要素が表示されるレイアウトコンテキストの影響を考慮せず、純粋にそのコンテンツに基づいて決定されるサイズのことです。これは、コンテナーのサイズなどの外部的な制約によって決定される要素の{{glossary("extrinsic size", "外因サイズ")}}とは対照的な概念です。要素の内在サイズは、{{cssxref("min-content")}} および {{cssxref("max-content")}} によって表されます。

インライン要素のサイズは内在的に決定されます。CSS [ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model) プロパティ、例えば {{cssxref("height")}}、{{cssxref("width")}}、{{cssxref("block-size")}}、{{cssxref("inline-size")}}、 {{cssxref("padding-block")}}、{{cssxref("margin-block")}} などは、これらの要素のレイアウトに影響を与えません（ただし、{{cssxref("margin-inline")}} および {{cssxref("padding-inline")}} は、行内の余白に影響を与えます）。

例えば、インラインの {{htmlelement("span")}} 要素の最小内在サイズは、`inline-size: 0` のコンテナー内で（それ以外にも CSS ボックスプロパティが適用されていない状態で）浮動ボックスになった場合、その要素が持つ最小のサイズになります。最大内在サイズはこれとは逆で、同じ `<span>` が、`inline-size` が無限大のコンテナー内に配置された場合に持つサイズです。

画像における内在サイズは、テキストの場合と同じ意味を持ちます。つまり、レンダリングを変更する CSS が適用されていない場合に、画像が表示されるサイズのことです。

ピクセル密度と解像度は、画像の内在サイズに影響を与えます。デフォルトで、画像のピクセル密度は "1x" （1 デバイスピクセル = 1 CSS ピクセル）と想定され、その場合は内在サイズは単にピクセル単位の高さと幅となります。画像の内在サイズと解像度は、その {{Glossary("EXIF")}} データで明示的に指定することができます。また、[`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性を使用して、画像のピクセル密度を設定することもできます。両方の仕組みが使用された場合、`srcset` の値が EXIF の値に「優先」して適用される点に注意してください。

内在サイズとその計算方法は、[CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュールで定義されています。

## 最小内在サイズ

要素をその最小内在サイズに合わせて設定するには、{{cssxref("inline-size")}}（英語やヘブライ語などの横書き書字方向では {{cssxref("width")}}）を {{cssxref("min-content")}} に設定します。これにより、テキストがオーバーフローを引き起こさずにインライン方向に可能な限り小さく折り返され、かつ可能な限りソフト折り返しが適用された場合に、要素が持つサイズに設定されます。テキスト文字列を含むボックスの場合、最小内在サイズは最も長い単語によって定義されます。

```html hidden
<p>Text wraps, making the element only as wide as its longest word.</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{EmbedLiveSample('minimum intrinsic size', '100%', '220')}}

## 最大内在サイズ

最大内在サイズはこれとは逆の概念です。これは、コンテナーのインラインサイズが無限大であった場合に要素が持つサイズを指します。テキストコンテンツは、たとえコンテナーからはみ出しても、ソフトラップを行わず、可能な限り広い幅で表示されます。キーワード値 {{cssxref("max-content")}} によって、この挙動が設定されます。

```html hidden
<p>Element grows as text doesn't wrap.</p>
<p>
  This paragraph may be wider than the width of the entire page and yet it won't
  wrap because <code>width: max-content</code> is set. It therefore may overflow
  its container.
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{EmbedLiveSample('maximum intrinsic size', '100%', '200')}}

## 関連情報

- 関連用語:
  - {{glossary("Extrinsic size", "外因サイズ")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, {{cssxref("fit-content")}} サイズ指定キーワード
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#intrinsic-sizes) 仕様書
