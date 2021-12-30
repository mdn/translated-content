---
title: transition-delay
slug: Web/CSS/transition-delay
tags:
  - CSS
  - CSS トランジション
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.transition-delay
translation_of: Web/CSS/transition-delay
---
{{CSSRef}}

CSS の `transition-delay` プロパティは、値が変更されたときにプロパティの[トランジション効果](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が始まるまでの待ち時間を指定します。

{{EmbedInteractiveExample("pages/css/transition-delay.html")}}

待ち時間はゼロ、正の数、負の数で指定します。

- `0s` (または `0ms`) の値は直ちにトランジション効果が始まります。
- 正の数の場合は、指定された時間の長さの分だけトランジション効果が始まるのが遅れます。
- 負の数の場合は、直ちにトランジション効果が、効果の途中から始まります。言い換えれば、効果は指定された時間の長さの分だけ既に実行されていたかのように動きます。

複数の待ち時間を指定することができ、複数のプロパティのトランジションを行うときに有用です。それぞれの待ち時間は、マスターリストである {{cssxref("transition-property")}} プロパティによって指定された対応するプロパティに適用されます。マスターリストよりも指定された待ち時間が少ない場合は、充足するまで待ち時間のリストが繰り返して使用されます。また待ち時間の数が多い場合は、リストが適切な長さに切り詰められます。どちらの場合も、 CSS の宣言として妥当です。

## 構文

```css
/* <time> 値 */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* グローバル値 */
transition-delay: inherit;
transition-delay: initial;
transition-delay: revert;
transition-delay: unset;
```

### 値

- {{cssxref("&lt;time&gt;")}}
  - : プロパティの値が変化してからトランジション効果が始まるまでの待ち時間を記述します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な待ち時間を示す例

#### HTML

```html
  <div class="box delay-1">0.5 seconds</div>

  <div class="box delay-2">2 seconds</div>

  <div class="box delay-3">4 seconds</div>

  <button id="change">Change</button>
```

#### CSS

```css
.box {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.delay-1 {
  transition-delay: 0.5s;
}

.delay-2 {
  transition-delay: 2s;
}

.delay-3 {
  transition-delay: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.box");
  for (let element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
```

#### 結果

{{EmbedLiveSample("Example_showing_different_delays",275,200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの利用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
