---
title: CSS 生成コンテンツ
slug: Web/CSS/Guides/Generated_content
original_slug: Web/CSS/CSS_generated_content
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

**CSS 生成コンテンツ** (CSS generated content) モジュールは、 CSS により要素のコンテンツを置き換えたり、コンテンツを文書に追加したりする方法を定義します。

生成コンテンツは、コンテンツの置換に使用することができます。この場合、 DOM ノードのコンテンツは CSS `<image>` に置き換えられます。 CSS 生成コンテンツを使用すると、言語固有の引用符の生成、カスタムリストアイテム番号や箇条書きの生成、選択した擬似要素に無名置換要素としてコンテンツを生成して視覚的にコンテンツを追加することもできます。

### 生成コンテンツの実際

```html hidden live-sample___generated_content
<div></div>
```

```css hidden live-sample___generated_content
body,
div {
  background-repeat: no-repeat;
}
body {
  background-image: linear-gradient(#3a67ab, #e8f6ff 100%);
}
div {
  position: relative;
  width: 400px;
  height: 400px;
  background-image:
    linear-gradient(
      115deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    linear-gradient(
      60deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%);
  background-size:
    100px 100px,
    100px 100px,
    15px 15px,
    15px 15px,
    200px 200px,
    300px 300px,
    400px 400px;
  background-position:
    95% 120px,
    5% 120px,
    46% 80px,
    54% 80px,
    50% 0,
    50% 90px,
    50% 220px;
}
div::after {
  content: "";
  border: transparent solid 4px;
  border-left: orange 30px solid;
  height: 1px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 100px;
}

div::before {
  content: "Only one <div>";
  font-size: min(6vh, 2rem);
  justify-content: center;
  display: flex;
  font-family: comic-sans, papyrus, sans-serif;
}
```

{{EmbedLiveSample("generated_content", "", "400px")}}

このサンプルの HTML は、空の {{HTMLElement("body")}} 内に 1 つの空の {{HTMLElement("div")}} があるだけです。雪だるまは、[CSS 画像](/ja/docs/Web/CSS/Guides/Images)、[CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)を使用して作成されています。ニンジンの鼻は、生成コンテンツを使用して追加されています。これは、 {{cssxref("::before")}} 擬似要素に、幅の広いオレンジ色の[左境界線](/ja/docs/Web/CSS/Reference/Properties/border-left)が付いた空のボックスを追加したものです。テキストも生成コンテンツです。 {{cssxref("::after")}} 擬似要素に {{cssxref("content")}} プロパティを適用して、"only one &lt;div>" が生成されています。

上記の例で "Play" をクリックすると、 MDN Playground でコードを表示または編集できます。

## リファレンス

### プロパティ

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> [!NOTE]
> CSS 生成コンテンツモジュールでは、実装されていない 4 つのリスクのあるプロパティが導入されています。`string-set`、`bookmark-label`、`bookmark-level`、および `bookmark-state` です。

### 関数

CSS 生成コンテンツモジュールでは、まだ実装されていない 6 つの CSS 関数が導入されています。 `content()`, `string()`, `leader()`, および 3 つの [`<target>`](/ja/docs/Web/CSS/Reference/Properties/content#target) 関数である `target-counter()`, `target-counters()`, `target-text()` です。

### データ型

- [`<content-list>`](/ja/docs/Web/CSS/Reference/Properties/content)
- `<content-replacement>` （{{cssxref("image")}} を参照）
- {{cssxref("image")}}
- [`<counter>`](/ja/docs/Web/CSS/Reference/Properties/content#counter)
- [`<quote>`](/ja/docs/Web/CSS/Reference/Properties/content#quote)
- [`<target>`](/ja/docs/Web/CSS/Reference/Properties/content#target)

## ガイド

- [生成コンテンツの「手引」ガイド](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)
  - : {{cssxref("content")}} プロパティを使用して、文書にテキストや画像コンテンツを追加する方法を学びます。

- [生成コンテンツによる装飾的なボックスの作成](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : 視覚効果のための生成コンテンツのスタイル設定の例です。

## 関連概念

- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
  - {{cssxref("::before")}} 擬似要素
  - {{cssxref("::after")}} 擬似要素
  - {{cssxref("::marker")}} 擬似要素

- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
  - {{cssxref("counter", "counter()")}} 関数
  - {{cssxref("counters", "counters()")}} 関数
  - {{cssxref("counter-increment")}} プロパティ
  - {{cssxref("counter-reset")}} プロパティ

- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
  - {{cssxref("::scroll-button()")}} 擬似要素
  - {{cssxref("::scroll-marker")}} 擬似要素
  - {{cssxref(":target-current")}} 擬似クラス

- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
  - {{cssxref("attr", "attr()")}} 関数
  - {{cssxref("string")}} データ型
  - {{cssxref("image")}} データ型

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- {{glossary("Replaced elements", "置換要素")}}
