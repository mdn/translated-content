---
title: transition-duration
slug: Web/CSS/transition-duration
---

{{CSSRef}}

**`transition-duration`** は [CSS](/ja/docs/Web/CSS) のプロパティで、トランジションによるアニメーションが完了するまでの所要時間を秒数またはミリ秒数で指定します。既定値は `0s` であり、これはアニメーションを実行しないことを示します。

{{EmbedInteractiveExample("pages/css/transition-duration.html")}}

このプロパティには複数の所要時間を指定することができます。それぞれの時間は、マスターリストを務める {{ cssxref("transition-property") }} プロパティの指定値で対応するプロパティに適用されます。指定した所要時間の数がマスターリストで指定したプロパティの数より少ない場合は、ユーザーエージェントは所要時間のリストを反復して使用します。また所要時間の数が多い場合は、リストを適切な長さに切り詰めます。どちらの場合も、CSS の宣言として妥当です。

## 構文

```css
/* <time> 値 */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* グローバル値 */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: unset;
```

### 値

- `<time>`
  - : プロパティの古い値から新しい値へ遷移するのにかかる時間を表す {{cssxref("&lt;time&gt;")}} 形式の値です。時間を `0s` にすると、遷移が起こらないこと、すなわち、2 つの状態間の切り替えが瞬間的であることを示します。負の値を指定すると、宣言は無効になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な所要時間を表す例

#### HTML

```html
<div class="box duration-1">0.5 seconds</div>

<div class="box duration-2">2 seconds</div>

<div class="box duration-3">4 seconds</div>

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
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
}

.duration-1 {
  transition-duration: 0.5s;
}

.duration-2 {
  transition-duration: 2s;
}

.duration-3 {
  transition-duration: 4s;
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

{{EmbedLiveSample("Example_showing_different_durations",275,200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの利用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
