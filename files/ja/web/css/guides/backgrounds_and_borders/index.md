---
title: CSS 背景と境界
short-title: 背景と境界
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: d8022a15df88029e3ff0cd7b7474bd3c43a2e25e
---

**CSS 背景と境界**モジュールでは、背景、境界、角の丸め、ボックスシャドウを要素に追加します。

さまざまな種類の境界スタイルを追加することができます。ラスター画像から CSS グラデーションまで、どのような種類の画像でも境界を記載することができます。境界は角形または丸めることができ、それぞれの角には異なる半径を設定することができます。要素は、境界があってもなくても丸めることができます。

ボックスシャドウには、内側の影も外側の影も、単一の影も複数の影も、明瞭なものもあれば透明へフェードするものもあります。外側のボックスシャドウは、要素の境界ボックスが不透明であるかのように影を落とします。内側のボックスシャドウは、パディング境界の外側がすべて不透明であるかのように影を落とします。影は明瞭にするか、影の色が透明へ遷移する拡散距離を含めることができます。

このモジュールのプロパティは、 {{HTMLElement("table")}} 内のセルが共有境界を持つべきか別個の境界を持つべきかを定義することもできます。

## リファレンス

### プロパティ

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat-x")}}
- {{cssxref("background-repeat-y")}}
- {{cssxref("background-repeat")}} 一括指定
- {{cssxref("background-size")}}
- {{cssxref("background")}} 一括指定
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} 一括指定
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} 一括指定
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} 一括指定
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} 一括指定
- {{cssxref("border-color")}} 一括指定
- {{cssxref("border-style")}} 一括指定
- {{cssxref("border-width")}} 一括指定
- {{cssxref("border")}} 一括指定
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} 一括指定
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} 一括指定
- {{cssxref("box-shadow")}}

CSS backgrounds モジュールレベル 4 では、 `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-tbd` の各プロパティを導入しています。これらはまだ実装されていません。

### データ型

- {{cssxref("line-style")}} 列挙型

## ガイド

- [複数の背景の使用](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : 要素に 1 つ以上の背景を設定します。
- [背景画像の拡大縮小](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : 背景画像のサイズや繰り返しの動作を変更する方法を説明します。
- [SVG の背景の拡大縮小](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : SVG のアスペクト比、SVG の寸法値、 CSS の `background-size` プロパティが、 SVG 背景画像の拡大縮小に与える影響について説明します。
- [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
  - : CSS でグラデーションの背景画像を作成する方法を説明します。
- [CSS の学習: 背景と境界](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : CSS の背景画像を使用して装飾的な画像を実装する方法を学びます。
- [CSS の学習: ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : 境界線やその他のボックスモデルプロパティが CSS ボックスモデルに与える影響について学びます。

## 関連概念

- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("box-sizing")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("text-shadow")}}
- {{cssxref("url_value", "&lt;url&gt;")}} データ型
- {{cssxref("url")}} データ型
- {{cssxref("image")}} データ型
- {{cssxref("position")}} データ型
- [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) キーワード

## 例

### 背景、境界、ボックスシャドウの動き

この境界、背景、ボックスシャドウの例は、線形および放射グラデーションで作られた中央の背景画像で構成されています。一連のボックスシャドウが、境界を「ポップ」に見せています。左の要素には境界画像が設定されています。右の要素には丸い点線の境界があります。

```html hidden live-sample___backgrounds
<article>
  <div></div>
  <div></div>
</article>
```

```css hidden live-sample___backgrounds
article {
  display: flex;
  gap: 10px;
}
div {
  color: #58ade3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* 既定値の `currentColor` */
  border-radius: 100px 0;
  background-image:
    radial-gradient(
      circle,
      transparent 60%,
      currentColor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentColor, white),
    linear-gradient(transparent, transparent);
  /* 3 枚目の透明な背景画像が追加され、背景色が透けて見えるスペースが確保された */
  background-color: currentColor;
  background-position: center;
  background-size:
    60px 60px,
    120px 120px;
  background-clip: content-box, content-box, padding-box;
  box-shadow:
    inset 5px 5px 5px rgb(0 0 0 / 0.4),
    inset -5px -5px 5px rgb(0 0 0 / 0.4),
    5px 5px 5px rgb(0 0 0 / 0.4),
    -5px -5px 5px rgb(0 0 0 / 0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(
    from 3deg at 25% 25%,
    currentColor 0 3deg,
    transparent 3deg 6deg
  );
  border-image-slice: 30;
}
```

{{EmbedLiveSample("backgrounds", "", "450px")}}

背景画像は {{cssxref("background-image")}} で定義されています。画像は {{cssxref("background-position")}} で中央に配置されています。複数の背景画像に対して別々の {{cssxref("background-clip")}} プロパティの値を使用して、背景画像がコンテンツボックス内に収まるようにしています。背景色は、 {{cssxref("border-image")}} および{{cssxref("border-style", "点線")}}の {{cssxref("border")}} の透明部分から背景が現れるのを防ぐために、パディングボックスでクリップしています。右の要素の角丸は {{cssxref("border-radius")}} プロパティを使用して作成しています。単一の {{cssxref("box-shadow")}} 宣言を使用して、内側と外側のすべての影を設定しています。

上記の例の "Play" をクリックすると、 MDN Playground でコードを見たり編集したりすることができます。

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/ja/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) フィルター関数
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
- ツール:
- [境界画像作成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
- [境界角丸作成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - [ボックスシャドウ生成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
