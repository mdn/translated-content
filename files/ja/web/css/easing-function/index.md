---
title: <easing-function>
slug: Web/CSS/easing-function
---

{{CSSRef}}

**`<easing-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、アニメーションの間に一次元の値がどれだけの速さで変化するかを記述する数学的な関数を表します。これにより、アニメーションの速度を期間中に変化させることができます。

イージング関数のうち 3 次ベジェ曲線のサブセットに含まれるものは、アニメーションの開始と終了を滑らかにすることができるため、よく「スムーズ」イージング関数と呼ばれています。これらの関数は、時間比と出力比を相関させており、どちらも {{cssxref("&lt;number&gt;")}} で表されます。これらの値は `0.0` が初期状態、`1.0` が最終状態を表します。

![](/files/3434/TF_with_output_gt_than_1.png)![](/files/3435/TF_with_output_gt_than_1_clipped.png)

特定の関数が使用された場合によっては、計算された出力値がアニメーションの経路の間で、時には `1.0` を超えたり、 `0.0` を下回ったりすることがあります。これによってアニメーションが最終状態の後に行ったり、戻ったりすることになります。 {{cssxref("left")}} や {{cssxref("right")}} のような一部のプロパティは、これによって一種の「バウンド」効果を生成します。

しかし、色の成分の値が `255` を超えたり `0` を下回ったりするように、出力値が取り得る範囲を超えてしまう場合は、その値は取り得る値の中で最も近い値に切り詰められます (色の成分の値であれば、それぞれ `255` および `0` になります)。一部の `cubic-bezier()` 曲線にはこのような特性があります。

## 構文

[イージング関数](/ja/docs/Web/CSS/easing-function#Easing_functions)には、線形関数、[3 次ベジェ曲線](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)、階段関数の 3 種類があります。 `<easing-function>` 型の値は、これら 3 つの型のうちの 1 つを使ってイージング関数を記述します。

### イージング関数

CSS は 3 種類のタイミング関数に対応しています。線形関数と、3 次ベジェ曲線のサブセットの関数と、階段関数です。これらの関数でもっとも有用なものは、簡単に指定できるようにキーワードが与えられています。

#### 線形クラスのイージング関数

##### linear

![](/files/3425/cubic-bezier,linear.png)

The animation moves from beginning to end at a constant rate. This keyword represents the easing function `cubic-bezier(0.0, 0.0, 1.0, 1.0)`.

#### cubic-bezier() クラスのイージング関数

![](/files/3433/cubic-bezier,%20example.png)

`cubic-bezier()` 関数記法は、[3 次ベジェ曲線](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A) を定義します。この曲線は連続的であり、アニメーションの始まりや終わりを緩やかにするためによく使用されます。このため、*イージング関数*と呼ばれることもあります。

3 次ベジェ曲線は 4 個の点 P0, P1, P2, P3 によって定義されます。P0 と P3 は曲線の始点と終点であり、 CSS では座標が割合 (横座標は時間の割合、縦座標は出力範囲の割合) であることから、これらの点は固定されています。P0 は `(0, 0)` で開始時間および初期状態を示し、P3 は `(1, 1)` で終了時間および最終状態を示します。

すべての 3 次ベジェ曲線が[数学的な関数](https://ja.wikipedia.org/wiki/%E9%96%A2%E6%95%B0_%28%E6%95%B0%E5%AD%A6%29) とは限らないため、どの 3 次ベジェ曲線もイージング関数として適しているわけではありません。すなわち、曲線は横座標で 0 から 1 の値をとります。 P0 および P3 は CSS の定義で固定されているので、P1 および P2 の横座標の値が `[0, 1]` の範囲にある場合のみ、3 次ベジェ曲線は関数であり、それゆえ有効になります。

P1 または P2 の縦座標の値が `[0, 1]` の範囲から外れている 3 次ベジェ曲線では、*はずむ*効果が得られます。

不正な `cubic-bezier` 曲線を指定すると、 CSS はその属性全体を無視します。

##### 構文

```
cubic-bezier(x1, y1, x2, y2)
```

ここで、

- **_x1_, _y1_, _x2_, _y2_**
  - : 3 次ベジェ曲線を定義する P1 および P2 点の横座標および縦座標の値を示す {{cssxref("&lt;number&gt;")}} です。x1 および x2 は \[0, 1] の範囲にある必要があり、さもないと不正な値になります。

#### 一般的なタイミング関数のキーワード

##### ease

![](/files/3429/cubic-bezier,ease.png)

アニメーション開始時はより急速に加速して、終了に向けて少しずつ緩やかになっていきます。このキーワードは、イージング関数 `cubic-bezier(0.25, 0.1, 0.25, 1.0)` を表します。この関数は [`ease-in-out`](#ease-in-out) に似ていますが、開始がより急速です。

##### ease-in

![](/files/3426/cubic-bezier,ease-in.png)

アニメーションの始めは緩やかで、その後次第に加速していき、最終状態に達するとアニメーションは突然停止します。このキーワードはイージング関数 `cubic-bezier(0.42, 0.0, 1.0, 1.0)` を表します。

##### `ease-in-out`

![](/files/3428/cubic-bezier,ease-in-out.png)

アニメーションは緩やかに始まり、加速し、終了に向けて加速が緩やかになります。このキーワードはイージング関数 `cubic-bezier(0.42, 0.0, 0.58, 1.0)` を表します。開始時は [`ease-in`](#ease-in) 関数に、完了時は [`ease-out`](#ease-out) 関数に似ています。

##### ease-out

![](/files/3427/cubic-bezer,ease-out.png)

アニメーションは急速に始まり、最終状態にかけて次第に緩やかになっていきます。このキーワードはタイミング関数 `cubic-bezier(0.0, 0.0, 0.58, 1.0)` を表します。

#### steps() クラスのタイミング関数

`steps()` 関数記法は、出力値の範囲を等間隔に区切る[ステップ関数](http://ja.wikipedia.org/wiki/%E9%9A%8E%E6%AE%B5%E9%96%A2%E6%95%B0)を定義します。このステップ関数のサブクラスは、階段関数と呼ばれることもあります。

##### 構文

```
steps(number_of_steps, direction)
```

ここで、

- _number_of_steps_
  - : 厳密に正の {{cssxref("&lt;integer&gt;")}} で、ステップ関数を構成する等間隔の段数を示すものです。
- _direction_

  - : 関数が [左連続か右連続](http://en.wikipedia.org/wiki/Left-continuous#Directional_and_semi-continuity) かを表すキーワードです。

    - `jump-start` は左連続関数を表し、したがってアニメーションの開始時に最初のステップが発生します。
    - `jump-end` は右連続関数を表し、したがってアニメーションの完了時に最後のステップが発生します。
    - `jump-both` は右および左の連続関数を表し、0%と 100%の位置の両方で停止し、アニメーションの繰り返しの間に効果的にステップを入れます。
    - `jump-none` どちらの端にもジャンプしません。代わりに、それぞれ区間の 1/n ごとに 0%の位置と 100%の位置の両方を保持します。
    - `start` は `jump-start` と同等です。
    - `end` は `jump-end` と同等です。

    `end` が既定値です。

##### steps( n, \<direction> )

- `steps(2, jump-start)`
  `steps(2, start)`

  ![](</files/3436/steps(2,start).png>)

- `steps(4, jump-end) steps(4, end)`

  ![four steps, with a jump from the fourth step to the final value at the 100% mark](</files/3437/steps(4,end).png>)

- `steps(5, jump-none)`

  ![five steps, with no jumps, so 20% of the time is at the beginning state or 0% mark and the last 20% is at the final state, or 100% mark](/files/16419/step5none.png)

- `steps(3, jump-both)`

  ![](https://mdn.mozillademos.org/files/16420/step3both.png)

##### step-start

![](</files/3423/steps(1,start).png>) アニメーションはすぐに最終状態に遷移し、最後までその状態を維持します。このキーワードは、イージング関数 `steps(1, jump-start)` または `steps(1, start)` を表します。

##### step-end

![](</files/3424/steps(1,end).png>) アニメーションは、終了するまで初期状態のままで、終了時点で直接最終状態にジャンプします。このキーワードは、イージング関数 `steps(1, jump-end)` または `steps(1, end)` を表します。

## 例

### イージング関数の比較

この例では、提供されているボタンを使ってアニメーションを開始したり停止したりすることができ、メニューを選択してイージング関数を、利用可能なキーワードに加えていくつかの `cubic-bezier()` および `steps()` のオプションの中から選択することができるようになっています。これは、様々なイージング関数を簡単に比較できるようにするためのアイデアです。

#### HTML

```html
<div>
  <div></div>
</div>
<ul>
  <li>
    <button class="animation-button">Start animation</button>
  </li>
  <li>
    <label for="easing-select">Choose an easing function:</label>
    <select id="easing-select">
      <option selected>linear</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-bezier(0.1, -0.6, 0.2, 0)</option>
      <option>cubic-bezier(0, 1.1, 0.8, 4)</option>
      <option>steps(5, end)</option>
      <option>steps(3, start)</option>
      <option>steps(4)</option>
    </select>
  </li>
</ul>
```

#### CSS

```css
body > div {
  position: relative;
  height: 100px;
}

div > div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector('select');
const startBtn = document.querySelector('button');
const divElem = document.querySelector('div > div');

startBtn.addEventListener('click', () => {
  if(startBtn.textContent === 'Start animation') {
    divElem.style.animationName = 'move-right';
    startBtn.textContent = 'Stop animation';
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = 'unset';
    startBtn.textContent = 'Start animation';
  }
});

selectElem.addEventListener('change', () => {
  divElem.style.animationTimingFunction = selectElem.value;
});
```

#### 結果

{{EmbedLiveSample('Easing_function_comparison', '100%', 200)}}

### cubic-bezier() 関数の例

これらは CSS における正しい 3 次ベジェ曲線の使い方です。

```css
/* 4 つの値が [0, 1] の範囲に含まれる、標準的なベジェ曲線 */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* <整数値> は <数量> でもあるので、<整数値> を用いても有効です。 */
cubic-bezier(0, 0, 1, 1)

/* 横軸で負数を用いるのは有効であり、はずむ効果をもたらします。 */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* 横軸において 1.0 を超える値も有効です。 */
cubic-bezier(0, 1.1, 0.8, 4)
```

これらの 3 次ベジェ曲線の定義は無効です。

```css example-bad
/* アニメーションさせるものは色ですが、
   ベジェ曲線に用いるのは割合の数値です。 */
cubic-bezier(0.1, red, 1.0, green)

/* 定義域は [0, 1] の範囲であったり、曲線が時間の
関数でなかったりする場合です。 */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* 2 つの点を定義する必要があり、それらに既定値はありません。 */
cubic-bezier(0.3, 2.1)

/* 縦座標は [0, 1] の範囲にある必要があり、
   さもないと曲線はタイミング関数になりません。 */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### steps() 関数の例

p>以下のタイミング関数は妥当です。

```css
/* 5段階あり、最後の段階は
   アニメーションの完了直前に発生します。 */
steps(5, end)

/* 2段階の階段で、最初の段階は
   アニメーションの開始時に発生します。 */
steps(2, start)

/* 第二の引数は省略可能です。 */
steps(2)
```

以下のタイミング関数は不正です。

```css example-bad
/* 最初の引数は <integer> でなければならず、
   整数と同じ値であっても実数であってはいけません。 */
steps(2.0, jump-end)

/* 段数は負の値であってはいけません。 */
steps(-3, start)

/* 段数は少なくとも 1 つ必要です。 */
steps(0, jump-none)
```

## 仕様書

| 仕様書                                                                                                               | 状態                                 | 備考                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Animations', '#animation-timing-function', '&lt;timing-function&gt;')}} | {{Spec2('CSS3 Animations')}} | `<single-timing-function>` を CSS トランジションモジュールの `<single-transition-timing-function>` の別名として定義 |
| {{SpecName('CSS Easing 1', '#typedef-easing-function', '&lt;easing-function&gt;')}}     | {{Spec2('CSS Easing 1')}}     | 初回定義                                                                                                            |

## ブラウザーの互換性

{{Compat("css.types.easing-function", 2)}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)
- [cubic-bezier](http://cubic-bezier.com/)
