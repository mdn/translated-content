---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
---

{{CSSRef}}

**`transition-timing-function`** は CSS のプロパティで、[トランジション効果](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)の影響を受ける CSS プロパティにおいて、中間状態の値を算出する方法を設定するために使用されます。

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

このプロパティは、簡単に言えば加速曲線を定義するもので、それによりトランジション実行中の値の変更速度を操作することができます。

この加速曲線は、トランジションが行われるプロパティごとに 1 つの {{cssxref("&lt;easing-function&gt;")}} を用いて定義されます。

複数のタイミング関数を指定することができます。それぞれのタイミング関数は、 {{ cssxref("transition-property") }} で指定されたように対応するプロパティに適用され、 `transition-property` のリストとして振るまいます。指定されたタイミング関数が `transition-property` のリストより少ない場合は、ユーザーエージェントはリスト内の値をそれぞれのトランジションプロパティのうちの値になるまで繰り返してどの値が使用されるかを計算します。関数の数が多い場合は、リストを適切な長さに切り詰めます。どちらの場合も、 CSS の宣言として妥当です。

## 構文

```css
/* キーワード値 */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* 関数値 */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

/* 段階式の関数のキーワード */
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/* 複数のタイミング関数 */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* グローバル値 */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: revert;
transition-timing-function: unset;
```

<h3 id="Values" name="Values">値</h3>

- `<easing-function>`

  - : 各々の {{cssxref("&lt;easing-function&gt;")}} は {{ cssxref("transition-property") }} で指定された、トランジションを行うプロパティに対応するイージング関数を表します。

    段階のないキーワード値 (ease、linear、ease-in-out、など) はそれぞれ 4 つの固定点による三次ベジェ曲線を表しており、 cubic-bezier() 関数の値は定義済みの値以外を使用することができます。段階のあるタイミング関数は、入力の時間を時間的に等しい間隔で指定された数に分割します。これは、ステップ数とステップ位置によって定義されます。

    - `ease`
      - : `cubic-bezier(0.25, 0.1, 0.25, 1.0)` と同等であり、既定値です。トランジションの半ばまで変化量が増加し、最後にはまた遅くなります。
    - `linear`
      - : `cubic-bezier(0.0, 0.0, 1.0, 1.0)` と同等であり、トランジションは均等の速度になります。
    - `ease-in`
      - : `cubic-bezier(0.42, 0, 1.0, 1.0)` と同等であり、最初は遅く、トランジションの速度は完了まで増加し続けます。
    - `ease-out`
      - : `cubic-bezier(0, 0, 0.58, 1.0)` と同等であり、トランジションは速い速度で始まり、速度を次第に遅くしていきます。
    - `ease-in-out`
      - : `cubic-bezier(0.42, 0, 0.58, 1.0)` と同等であり、トランジションをゆっくり開始し、速度を上げた後、再び速度を遅くします。
    - `cubic-bezier(p1, p2, p3, p4)`
      - : 作者が定義する三次ベジェ曲線です。p1 と p3 の値は 0 から 1 の範囲でなければなりません。
    - `steps( n, <jumpterm>)`

      - : トランジションは _n_ 個の停止点を辿って表示され、それぞれの停止点の表示時間は均等な長さになります。例えば、_n_ が 5 の場合、5 つのステップがあることになります。一時的に停止する点が 0%, 20%, 40%, 60%, 80% であるのか、20%, 40%, 60%, 80%, 100% であるのか、トランジションに沿って 0% と 100% の中間で 5 回停止するのか、それとも 0% と 100% の位置を含めて 5 回 (0%, 25%, 50%, 75%, 100%) 停止するのかについては、以下のジャンプ用語のどれを使うかで決まります。

        - `jump-start`
          - : 左連続関数を表します。すなわち、トランジションの開始時に最初のジャンプが発生します。
        - `jump-end`
          - : 右連続関数を表します。すなわち、アニメーションの終了時に最後のジャンプが発生します。
        - `jump-none`
          - : どちら側にもジャンプが発生しません。0% の位置と 100% の位置の両方が長さの 1/n だけ表示されます。
        - `jump-both`
          - : 0% と 100% の両方で停止が含まれます。その結果、トランジションの時間内にステップが 1 つ追加されます。
        - `start`
          - : `jump-start` と同じです。
        - `end`
          - : `jump-end` と同じです。

    - `step-start`
      - : `steps(1, jump-start)` と同じです。
    - `step-end`
      - : `steps(1, jump-end)` と同じです。

## アクセシビリティの考慮

アニメーションは、ユーザーがどのようなアクションを期待されているのかを理解するためのガイド、ユーザーインターフェイス内の関係性の表示、どのようなアクションが発生したのかをユーザーに通知するなど、役に立つことがあります。アニメーションは、認知的な負荷を軽減し、変化に気づかないことを防ぎ、空間的な関係をよりよく思い出すことに役立ちます。しかし、アニメーションの中には、注意欠陥多動性障害 (ADHD) の人の認知に問題が発生するものや、前庭障害、てんかん、片頭痛、スコトープ過敏症の引き金となるような動きをするものもあります。

アニメーションを一時停止または無効にする機能を提供するとともに、[動きの縮減メディアクエリー](/ja/docs/Web/CSS/@media/prefers-reduced-motion)を使用して、アニメーションを使用しないことを希望するユーザーにも快適な利用環境を提供することを検討してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Cubic-Bezier_examples">三次ベジェの例</h3>

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
.parent {
}
.parent > div[class] {
  width: 12em;
  min-width: 12em;
  margin-bottom: 4px;
  background-color: black;
  border: 1px solid red;
  color: white;
  transition-property: all;
  transition-duration: 7s;
}
.parent > div.box1 {
  width: 90vw;
  min-width: 24em;
  background-color: magenta;
  color: yellow;
  border: 1px solid orange;
  transition-property: all;
  transition-duration: 2s;
}
```

```js hidden
function updateTransition() {
  var els = document.querySelectorAll(".parent > div[class]");
  for (var c = els.length, i = 0; i < c; i++) {
    els[i].classList.toggle("box1");
  }
}

var intervalID = window.setInterval(updateTransition, 10000);
```

```css
.ease {
  transition-timing-function: ease;
}
.easein {
  transition-timing-function: ease-in;
}
.easeout {
  transition-timing-function: ease-out;
}
.easeinout {
  transition-timing-function: ease-in-out;
}
.linear {
  transition-timing-function: linear;
}
.cb {
  transition-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
}
```

{{EmbedLiveSample("Cubic-Bezier_examples")}}

<h3 id="Step_examples">ステップの例</h3>

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent {
}
.parent > div[class] {
  width: 12em;
  min-width: 12em;
  margin-bottom: 4px;
  background-color: black;
  border: 1px solid red;
  color: white;
  transition-property: all;
  transition-duration: 7s;
}
.parent > div.box1 {
  width: 90vw;
  min-width: 24em;
  background-color: magenta;
  color: yellow;
  border: 1px solid orange;
  transition-property: all;
  transition-duration: 2s;
}
```

```js hidden
function updateTransition() {
  var els = document.querySelectorAll(".parent > div[class]");
  for (var c = els.length, i = 0; i < c; i++) {
    els[i].classList.toggle("box1");
  }
}

var intervalID = window.setInterval(updateTransition, 10000);
```

```css
.jump-start {
  transition-timing-function: steps(5, jump-start);
}
.jump-end {
  transition-timing-function: steps(5, jump-end);
}
.jump-none {
  transition-timing-function: steps(5, jump-none);
}
.jump-both {
  transition-timing-function: steps(5, jump-both);
}
.step-start {
  transition-timing-function: step-start;
}
.step-end {
  transition-timing-function: step-end;
}
```

{{EmbedLiveSample("Step_examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
