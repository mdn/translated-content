---
title: CSS 境界とボックス装飾
short-title: 境界とボックス装飾
slug: Web/CSS/Guides/Borders_and_box_decorations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 境界とボックス装飾** (CSS borders and box decorations) モジュールは、要素に境界線、角の形状、ボックスシャドウを追加するためのプロパティを提供します。このモジュールは、[CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュールで導入された境界とボックス装飾を拡張し、{{cssxref("corner-shape")}} および `border-shape` プロパティ、論理的な {{cssxref("border-radius")}} プロパティ、{{cssxref("box-shadow")}} プロパティの個別指定プロパティ、部分的な境界線を作成するためのプロパティを追加します。

## 境界とボックス装飾の実演

ドロップダウンメニューから `superellipse()` 値を選択して枠線の形状を変更してください。スライダーで枠線の半径サイズを変更してください。チェックボックスを切り替えて、ボックスシャドウの表示/非表示を切り替えてください。

```html hidden
<p>
  <label for="corner-shape-choice"
    ><code>superellipse()</code> の値を選択:</label
  >
  <select id="corner-shape-choice">
    <option>superellipse(infinity)</option>
    <option>superellipse(5)</option>
    <option>superellipse(3)</option>
    <option>superellipse(2)</option>
    <option>superellipse(1.5)</option>
    <option>superellipse(1)</option>
    <option>superellipse(0.5)</option>
    <option>superellipse(0)</option>
    <option>superellipse(-0.5)</option>
    <option selected>superellipse(-1)</option>
    <option>superellipse(-1.5)</option>
    <option>superellipse(-2)</option>
    <option>superellipse(-3)</option>
    <option>superellipse(-5)</option>
    <option>superellipse(-infinity)</option>
  </select>
</p>
<p>
  <label for="radius"><code>border-radius</code> の値を選択:</label>
  <input
    type="range"
    step="5"
    min="0"
    max="100"
    value="30"
    id="radius"
    list="tens" />
  <datalist id="tens">
    <option value="0" label="0"></option>
    <option value="20" label="20px"></option>
    <option value="40" label="40px"></option>
    <option value="60" label="60px"></option>
    <option value="80" label="80px"></option>
    <option value="100" label="100px"></option>
  </datalist>
</p>

<p>
  <input type="checkbox" id="check" />
  <label for="check">box-shadow を切り替え</label>
</p>
<div></div>
```

```css hidden
div {
  width: 100%;
  height: 200px;
  background-color: plum;
  background-image:
    repeating-linear-gradient(transparent 0 19px, #00000022 19px 20px),
    repeating-linear-gradient(to left, transparent 0 19px, #00000022 19px 20px);
}

div {
  box-shadow: 3px 3px 5px rgb(0 0 0 / 0.5);
  border-radius: 30px;
}
body:has(input:checked) div {
  box-shadow: none;
}

@layer page-setup {
  html {
    font-family: "Helvetica", "Arial", sans-serif;
  }
  body {
    max-width: 600px;
    min-width: fit-content;
    margin: 20px auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  select {
    padding: 3px 5px;
  }
  code {
    font-weight: bolder;
  }
}
```

```js hidden
const rectangle = document.querySelector("div");
const select = document.querySelector("select");
const range = document.getElementById("radius");

function setCornerShape() {
  rectangle.style.cornerShape = select.value;
  rectangle.style.borderRadius = `${range.value}px`;
  rectangle.innerHTML = `<pre>div {
  corner-shape: ${select.value};
  border-radius: ${range.value}px;
}</pre>`;
}

select.addEventListener("change", setCornerShape);
range.addEventListener("input", setCornerShape);
setCornerShape();
```

{{EmbedLiveSample("backgrounds", "", "350px")}}

## リファレンス

### プロパティ

- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-color")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-left")}}
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-radius")}}
- {{cssxref("border-right")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("border-top")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("box-shadow")}}
- {{cssxref("corner-block-end-shape")}}
- {{cssxref("corner-block-start-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-bottom-shape")}}
- {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-left-shape")}}
- {{cssxref("corner-right-shape")}}
- {{cssxref("corner-shape")}}
- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-top-shape")}}

CSS 境界とボックス装飾モジュールレベル 4 は、 `border-shape`, `border-limit`, `border-clip` の各プロパティと、一緒に `border-clip-bottom`, `border-clip-left`, `border-clip-right`, `border-clip-top` の個別指定プロパティを導入しています。今のところ、これらの機能に対応しているブラウザーはありません。このモジュールは対応が進んでいる {{cssxref("border-radius")}} および {{cssxref("box-shadow")}} の成分プロパティとして、 `border-block-end-radius`, `border-block-start-radius`, `border-bottom-radius`, `border-inline-end-radius`, `border-inline-start-radius`, `border-right-radius`, `border-top-radius`, `box-shadow-blur`, `box-shadow-color`, `box-shadow-offset`, `box-shadow-position`, `box-shadow-spread` を導入しています。これらの成分プロパティもまだ対応されていません。

### データ型

- {{cssxref("corner-shape-value")}}

### 関数

- {{cssxref("superellipse()")}}

## ガイド

- [CSS の学習: ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : 境界線やその他のボックスモデルプロパティが CSS ボックスモデルに与える影響について学びましょう。

## 関連概念

- {{cssxref("box-sizing")}} プロパティ
- {{cssxref("box-decoration-break")}} プロパティ
- {{cssxref("text-shadow")}} プロパティ
- {{cssxref("url_value", "&lt;url&gt;")}} CSS 型
- [`<color>`](/ja/docs/Web/CSS/Reference/Properties/color) データ型
- [`<image>`](/ja/docs/Web/CSS/Reference/Values/image) データ型
- [`<position>`](/ja/docs/Web/CSS/Reference/Properties/position) データ型
- [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) キーワード

[CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} 一括指定
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} 一括指定

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/ja/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) フィルター関数
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
- Tools:
  - [Border-image ジェネレーター](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-radius ジェネレーター](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
