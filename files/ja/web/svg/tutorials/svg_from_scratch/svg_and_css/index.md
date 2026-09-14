---
title: SVG と CSS
slug: Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS
original_slug: Web/SVG/Tutorial/SVG_and_CSS
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

このページでは、グラフィックを作成するための特殊言語である [SVG](/ja/docs/Web/SVG) への CSS の適用について説明します。

以下では、ブラウザーで実行するデモを作成します。

> [!NOTE]
> {{SVGElement("use")}} 要素によって参照される要素は、その要素のスタイルを継承します。したがって、それらに異なるスタイルを適用するには、 [CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)を使用しましょう。

## 例

プレーンテキストファイルとして新しい SVG 文書 `doc8.svg` を作成してください。ここからコンテンツをコピーして貼り付けてください。スクロールしてすべてを取得するようにしてください。

```html live-sample___example
<svg
  width="600px"
  height="600px"
  viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <link
    xmlns="http://www.w3.org/1999/xhtml"
    rel="stylesheet"
    href="style8.css"
    type="text/css" />

  <title>SVG のデモ</title>
  <desc>Mozilla CSS Getting Started - SVG のデモ</desc>

  <defs>
    <radialGradient
      id="fade"
      cx="0"
      cy="0"
      r="200"
      gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG のデモ</text>
  <text id="caption" x="-280" y="-250">
    マウスポインターを花の上で移動させましょう。
  </text>

  <g id="flower">
    <circle
      id="overlay"
      cx="0"
      cy="0"
      r="200"
      stroke="none"
      fill="url(#fade)" />

    <g id="outer-petals">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g id="inner-petals" transform="rotate(9) scale(0.33)">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

`doc8.svg` と同じディレクトリーに新しい CSS ファイル `style8.css` を作成しましょう。ここにあるコンテンツをコピー＆ペーストし、スクロールしてすべて取得するようにしてください。

```css live-sample___example
/*** SVG デモ ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* flower */
#flower:hover {
  cursor: crosshair;
}

/* gradient */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* petals */
.segment-fill {
  fill: var(--segment-fill-fill);
  stroke: var(--segment-fill-stroke);
  stroke-width: var(--segment-fill-stroke-width);
}

.segment-fill:hover {
  fill: var(--segment-fill-fill-hover);
  stroke: var(--segment-fill-stroke-hover);
}

.segment-edge {
  fill: var(--segment-edge-fill);
  stroke: var(--segment-edge-stroke);
  stroke-width: var(--segment-edge-stroke-width);
}

.segment-edge:hover {
  stroke: var(--segment-edge-stroke-hover);
}

/* outer petals */
#outer-petals {
  opacity: 0.75;
  --segment-fill-fill: azure;
  --segment-fill-stroke: lightsteelblue;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: deepskyblue;
  --segment-edge-stroke-width: 3;
  --segment-fill-fill-hover: plum;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: slateblue;
}

/*
 一部の古いブラウザーで対応している、<use> 要素を介して要素のスタイル設定を
 参照する標準的でない方法。
*/
#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
  stroke: slateblue;
}

/* inner petals */
#inner-petals {
  --segment-fill-fill: yellow;
  --segment-fill-stroke: yellow;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: yellowgreen;
  --segment-edge-stroke-width: 9;
  --segment-fill-fill-hover: darkseagreen;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: green;
}

/*
 一部の古いブラウザーで対応している、<use> 要素を介して要素のスタイル設定を
 参照する標準的でない方法。
*/
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellow;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

SVG 対応のブラウザーで `doc8.svg` 文書を開いてください。マウスポインターをグラフィックの上で移動して何が起こるか見てください。

### 結果

{{EmbedLiveSample("example", "660", "660")}}

このデモについてのメモです。

- SVG 文書は以下の HTML `<link>` タグを用いてスタイルシートをリンクしています。

  ```html
  <link rel="stylesheet" href="style8.css" type="text/css" />
  ```

  また、 `<style>` タグ内の `@import` ルールでリンクすることもできます。

  ```html
  <style>
    @import "style8.css";
  </style>
  ```

- SVG は自分自身で CSS プロパティと値を持っています。それらのいくつかは HTML の CSS プロパティと似ています。

### 練習

外側の花びらが動作する方法は変えずに、内側の花びらのどれかにマウスポインターが重なったときに内側の花びらがすべてピンクになるようにスタイルシートを変更しましょう。

[この練習の解答を見る](/ja/docs/Learn_web_development/Core#svg_and_css)

## 構造の簡略化

上に示した SVG 構造は、 {{SVGElement("use")}} 要素を介して花の各部分を参照することで、より簡潔に書くことができます。この[動作は標準化されています](https://svgwg.org/svg2-draft/struct.html#UseStyleInheritance)が、今のところ `<use>` 要素で参照される要素に対して {{cssxref(":hover")}} 擬似クラスと他の複雑な CSS セレクターに対応しているブラウザーはいくつかしかありません。[このような参照する要素にどのようなルールが適用されるかについての課題](https://github.com/w3c/svgwg/issues/504)があります。

そのときの構造は下記をご覧ください。

```html
<svg
  width="600px"
  height="600px"
  viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <link
    xmlns="http://www.w3.org/1999/xhtml"
    rel="stylesheet"
    href="style8.css"
    type="text/css" />
  <title>SVG デモ</title>
  <desc>Mozilla CSS Getting Started - SVG デモ</desc>

  <defs>
    <g id="segment" class="segment">
      <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
      <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
    </g>
    <g id="quadrant">
      <use href="#segment" />
      <use href="#segment" transform="rotate(18)" />
      <use href="#segment" transform="rotate(36)" />
      <use href="#segment" transform="rotate(54)" />
      <use href="#segment" transform="rotate(72)" />
    </g>
    <g id="petals">
      <use href="#quadrant" />
      <use href="#quadrant" transform="rotate(90)" />
      <use href="#quadrant" transform="rotate(180)" />
      <use href="#quadrant" transform="rotate(270)" />
    </g>
    <radialGradient
      id="fade"
      cx="0"
      cy="0"
      r="200"
      gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG のデモ</text>
  <text id="caption" x="-280" y="-250">
    マウスポインターを花の上で移動させましょう。
  </text>

  <g id="flower">
    <circle
      id="overlay"
      cx="0"
      cy="0"
      r="200"
      stroke="none"
      fill="url(#fade)" />
    <use id="outer-petals" href="#petals" />
    <use id="inner-petals" href="#petals" transform="rotate(9) scale(0.33)" />
  </g>
</svg>
```

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

## 次は何か

このデモでは、 SVG 対応ブラウザーは既に SVG 要素の表示方法を知っています。このスタイルシートは特定の方法で表示を変更するだけです。これは HTML 文書にも当てはまります。しかし、要素の表示方法があらかじめ定義されていない汎用の XML 文書には CSS を使用することができます。次の [XML の紹介](/ja/docs/Web/XML/Guides/XML_introduction)のページでは、これをデモしています。
