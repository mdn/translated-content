---
title: SVG フォント
slug: Web/SVG/Tutorials/SVG_from_scratch/Using_fonts
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}

SVG は、 {{SVGElement("text")}} 要素のフォントを指定する複数の方法に対応しています。
現行の推奨される手法は、HTML でフォントのスタイルを設定する場合とほぼ同じ方法で、CSS を使用することです。

## CSS を使用してフォントを適用し、スタイル設定を行う

以下のコードは、CSS を使用して、指定された `<text>` 要素に特定のフォント（この場合はシステムフォント "Courier New"）を適用する方法を示しています。
ここで使用されている CSS は SVG の {{SVGElement("style")}} 要素内に入れ子になっていますが、含める HTML にも適用することができます。

```html
<svg>
  <style>
    text {
      /* 使用するシステムフォントまたは独自のフォントを指定 */
      font-family: "Courier New", sans-serif;

      /* その他のスタイル設定を追加 */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">Text テキスト</text>
</svg>
```

これは、下記のように表示されます。

{{EmbedLiveSample("How to apply a font", "100", "30px")}}

## `@font-face` によるウェブフォントの使用

前の節では、 CSS を使用してシステムフォントを適用しましたが、{{cssxref("@font-face")}} アットルールを使用して指定したウェブフォントも、まったく同じ方法で適用することができます。

この例では、最初に "FiraSans" という名前付きフォントファミリーを定義し、それを使用する方法を示しています。

```html
<svg
  viewBox="0 0 400 50"
  width="350"
  height="50"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    /* ウェブフォントを使用するフォントファミリーを定義 */
    @font-face {
      font-family: "FiraSans";
      src:
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Italic.woff2")
          format("woff2"),
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2")
          format("woff2");
    }

    /* テキストのスタイル設定 */
    text {
      /* 使用するシステムフォントまたは独自のフォントを指定 */
      font-family: "FiraSans", sans-serif;

      /* その他のスタイル設定を追加 */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">Text styled with custom font</text>
</svg>
```

{{EmbedLiveSample("Using web fonts with @font-face", "100", "70px")}}

## text 要素でのスタイルの参照

{{SVGAttr("font-family")}} 属性を使用して、{{SVGElement("text")}} 要素内のスタイルを直接参照することもできます。
このコードは、独自の "My Font" を `<text>` 要素に適用する方法を示しています。

```svg
<svg>
  <text font-family="My Font" x="10" y="20">"My Font" フォントを使用したテキスト</text>
</svg>
```

これは、 HTML 要素にスタイルを適用する場合と似ていることに注意してください。
便利な場合もありますが、一般的には CSS と CSS セレクターを使用することをお勧めします。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}
