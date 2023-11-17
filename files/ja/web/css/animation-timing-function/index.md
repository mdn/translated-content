---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
---

{{CSSRef}}

**`animation-timing-function`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションがそれぞれの周期の中でどのように進行するかを設定します。

{{EmbedInteractiveExample("pages/css/animation-timing-function.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* キーワード値 */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* 関数値 */
animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
animation-timing-function: steps(4, end);

/* 段階関数のキーワード */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* 複数のアニメーション */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* グローバル値 */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: unset;
```

タイミング関数は [@keyframes](/ja/docs/Web/CSS/@keyframes) ルール内にあるそれぞれのキーフレームに指定されることがあります。キーフレームに **`animation-timing-function`** が指定されていない場合、そのキーフレームにはアニメーションが適用された要素から **`animation-timing-function`** の適切な値が使用されます。

キーフレームのタイミング関数は、指定されたキーフレームからそのプロパティを指定する次のキーフレームまで、またはそのプロパティを指定する後続のキーフレームがない場合はアニメーションの終わりまで、プロパティごとに適用されます。結果的に、 **`animation-timing-function`** のうち **`100%`** または **`to`** に指定したものは使用されません。

### 値

- {{cssxref("&lt;easing-function&gt;")}}

  - : {{cssxref("animation-name")}} で定められた、アニメーションに対応するタイミング関数です。

    ステップではないキーワード値 (ease, linear, ease-in-out など) は、それぞれ固定の 4 点値を持つ三次ベジェ曲線を表し、 cubic-bezier() 関数の値で非定義値を指定することができます。ステップタイミング関数は、入力時間を長さが等しい指定された数の間隔に分割します。これは、ステップ数とステップ位置によって定義されます。

- `ease`
  - : `cubic-bezier(0.25, 0.1, 0.25, 1.0)` と同じで、既定値であり、アニメーションの中央に向けて変化量が増加し、最後に向けて減少します。
- `linear`
  - : `cubic-bezier(0.0, 0.0, 1.0, 1.0)` と同じで、等しい速度でアニメーションします。
- `ease-in`
  - : `cubic-bezier(0.42, 0, 1.0, 1.0)` と同じで、プロパティのアニメーションの変化の速度はゆっくり始まり、終了まで加速します。
- `ease-out`
  - : `cubic-bezier(0, 0, 0.58, 1.0)` と同じで、アニメーションは速く始まり、速度を落としながら続きます。
- `ease-in-out`
  - : `cubic-bezier(0.42, 0, 0.58, 1.0)` と同じで、プロパティのアニメーションはゆっくり変化し、速度を上げ、また速度を落とします。
- `cubic-bezier(p1, p2, p3, p4)`
  - : ユーザー定義の二次元ベジェ曲線で、 p1 と p3 の値は 0 から 1 の間である必要があります。
- `steps(n, <jumpterm>)`

  - : 遷移に沿った _n_ 個の停止点に沿ってアニメーションを表示し、それぞれの停止点を同じ時間の長さで表示します。例えば、 _n_ が 5 の場合、5つの段階があります。アニメーションが停止する点は、以下の jumpterm によって、アメーションに沿って 0%, 20%, 40%, 60%, 80% となるか、 20%, 40%, 60%, 80%, 100% となるか、アニメーションの 0% と 100% の間で5つの停止点を設定するか、 0% と 100% を含む5つの停止点を設定するか (すなわち 0%, 25%, 50%, 75%, 100%)、の何れかを使用します。

    - `jump-start`
      - : アニメーションの開始時に最初のジャンプが発生するように、左連続関数を表します。
    - `jump-end`
      - : アニメーションの終了時に最後のジャンプが発生するように、右連続関数を表します。
    - `jump-none`
      - : どちらにもジャンプはありません。代わりに、 0% 位置と 100% 位置の両方で、それぞれ 1/n の間隔を保持します。
    - `jump-both`
      - : 0% 位置と 100% 位置の両方で一時停止を含み、アニメーションの反復中に効果的にステップを追加します。
    - `start`
      - : `jump-start` と同じです。
    - `end`
      - : `jump-end` と同じです。

- `step-start`
  - : `steps(1, jump-start)` と同じです。
- `step-end`
  - : `steps(1, jump-end)` と同じです。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 二次元ベジェの例

```html hidden
<div class="parent">
  <div class="ease">ease</div>
  <div class="easein">ease-in</div>
  <div class="easeout">ease-out</div>
  <div class="easeinout">ease-in-out</div>
  <div class="linear">linear</div>
  <div class="cb">cubic-bezier(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.parent > div[class] {
  animation-name: changeme;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin-bottom: 4px;
}
@keyframes changeme {
  0% {
    min-width: 12em;
    width: 12em;
    background-color: black;
    border: 1px solid red;
    color: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    background-color: magenta;
    color: yellow;
    border: 1px solid orange;
  }
}
```

```css
.ease {
  animation-timing-function: ease;
}
.easein {
  animation-timing-function: ease-in;
}
.easeout {
  animation-timing-function: ease-out;
}
.easeinout {
  animation-timing-function: ease-in-out;
}
.linear {
  animation-timing-function: linear;
}
.cb {
  animation-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
}
```

{{EmbedLiveSample("Cubic-Bezier_examples", 600, 200)}}

### 段階の例

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="start">start</div>
  <div class="end">end</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent > div[class] {
  animation-name: changeme;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin-bottom: 4px;
}
@keyframes changeme {
  0% {
    min-width: 12em;
    width: 12em;
    background-color: black;
    border: 1px solid red;
    color: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    background-color: magenta;
    color: yellow;
    border: 1px solid orange;
  }
}
```

```css
.jump-start {
  animation-timing-function: steps(5, jump-start);
}
.jump-end {
  animation-timing-function: steps(5, jump-end);
}
.jump-none {
  animation-timing-function: steps(5, jump-none);
}
.jump-both {
  animation-timing-function: steps(5, jump-both);
}
.start {
  animation-timing-function: steps(5, start);
}
.end {
  animation-timing-function: steps(5, end);
}
.step-start {
  animation-timing-function: step-start;
}
.step-end {
  animation-timing-function: step-end;
}
```

{{EmbedLiveSample("Step_examples", 600, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript の {{domxref("AnimationEvent")}} API
- [cubic-bezier.com](https://cubic-bezier.com)
