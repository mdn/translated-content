---
title: offset-anchor
slug: Web/CSS/offset-anchor
---

{{CSSRef}}

**`offset-anchor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("offset-path")}} に沿って実際に移動している要素のボックス内の点を指定します。

{{InteractiveExample("CSS Demo: offset-anchor")}}

```css interactive-example-choice
offset-anchor: auto;
```

```css interactive-example-choice
offset-anchor: right top;
```

```css interactive-example-choice
offset-anchor: left bottom;
```

```css interactive-example-choice
offset-anchor: 20% 80%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="wrapper">
    <div id="example-element"></div>
  </div>
  <button id="playback" type="button">Play</button>
</section>
```

```css interactive-example
#example-element {
  offset-path: path("M 0,20 L 200,20");
  animation: distance 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
  animation-play-state: paused;
}

#example-element.running {
  animation-play-state: running;
}

.wrapper {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    #000 50%,
    #000 51%,
    transparent 52%
  );
  border: 1px solid #ccc;
  width: 90%;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}
```

```js interactive-example
window.addEventListener("load", () => {
  const example = document.getElementById("example-element");
  const button = document.getElementById("playback");

  button.addEventListener("click", () => {
    if (example.classList.contains("running")) {
      example.classList.remove("running");
      button.textContent = "Play";
    } else {
      example.classList.add("running");
      button.textContent = "Pause";
    }
  });
});
```

## 構文

```css
/* キーワード値 */
offset-anchor: top;
offset-anchor: bottom;
offset-anchor: left;
offset-anchor: right;
offset-anchor: center;
offset-anchor: auto;

/* <percentage> 値 */
offset-anchor: 25% 75%;

/* <length> 値 */
offset-anchor: 0 0;
offset-anchor: 1cm 2cm;
offset-anchor: 10ch 8em;

/* 辺からのオフセット値 */
offset-anchor: bottom 10px right 20px;
offset-anchor: right 3em bottom 10px;

/* グローバル値 */
offset-anchor: inherit;
offset-anchor: initial;
offset-anchor: revert;
offset-anchor: unset;
```

### 値

- `auto`
  - : `offset-anchor` には要素の {{cssxref("transform-origin")}} と同じ値が与えられます。ただし、 {{cssxref("offset-path")}} が `none` の場合は {{cssxref("offset-position")}} から値が取得されます。
- `<position>`
  - : {{cssxref("&lt;position&gt;")}} は x/y 座標を定義し、要素のボックスの端から相対的に項目を配置するために使用されます。これは、 1 つから 4 つの値を用いて定義することができます。詳細については、{{cssxref("&lt;position&gt;")}} と {{cssxref("background-position")}} のリファレンスページを参照してください。 3 つの値を持つ position構 文は、`background(-position)`を除いて、`<position>`のどのような使い方でも機能しないことに注意してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な offset-anchor 値を設定

以下の例では、 {{htmlelement("div")}} 要素が {{htmlelement("section")}} 要素の中に入っている形は 3 つあります。それぞれの `<div>` には同じ {{cssxref("offset-path")}} （200 ピクセル長の水平線）が与えられ、それに沿って移動するアニメーションです。そして、 3 つには異なる {{cssxref("background-color")}} と `offset-anchor` 値が与えられています。

それぞれの `<section>` は、その中心を通る水平線を線形グラデーションでスタイル付けされており、 `<div>` のオフセットパスがどこに走っているかを視覚的に表示することができるようになっています。

これにより、異なる `offset-anchor` 値がどのような効果をもたらすかを確認することができます。 — 最初のものは `auto` なので、 `<div>` の中心点をパスに沿って動かします。他の 2 つは、それぞれ `<div>` の右上と左下の点をパスに沿って移動させます。

#### HTML

```html
<section>
  <div class="offset-anchor1"></div>
</section>
<section>
  <div class="offset-anchor2"></div>
</section>
<section>
  <div class="offset-anchor3"></div>
</section>
```

#### CSS

```css
div {
  offset-path: path("M 0,20 L 200,20");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
}

section {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    #000 50%,
    #000 51%,
    transparent 52%
  );
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.offset-anchor1 {
  offset-anchor: auto;
  background: cyan;
}

.offset-anchor2 {
  offset-anchor: right top;
  background: purple;
}

.offset-anchor3 {
  offset-anchor: left bottom;
  background: magenta;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{EmbedLiveSample('Setting_various_offset-anchor_values', '100%', '300')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG `<path>`](/ja/docs/Web/SVG/Tutorial/Paths)
