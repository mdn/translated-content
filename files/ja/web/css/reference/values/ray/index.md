---
title: ray()
slug: Web/CSS/Reference/Values/ray
original_slug: Web/CSS/ray
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

**`ray()`** は [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、アニメーションする要素がたどることができる [`offset-path`](/ja/docs/Web/CSS/Reference/Properties/offset-path) の線分を定義します。この線分は「光線」と呼ばれます。光線は {{cssxref("offset-position")}} から始まり、指定された角度の方向に伸びます。光線の長さは、サイズを指定し、 `contain` キーワードを使用することで制約することができます。

## 構文

```css
/* すべての引数を指定 */
offset-path: ray(50deg closest-corner contain at 100px 20px);

/* 2 つの引数を指定、順序は影響しない */
offset-path: ray(contain 200deg);

/* 1 つだけ引数を指定 */
offset-path: ray(45deg);
```

### 引数

引数は任意の順序で指定できます。

- [`<angle>`](/ja/docs/Web/CSS/Reference/Values/angle)
  - : オフセット開始位置から線分が伸びる方向を指定します。角度 `0deg` は、上向きの Y 軸上にあり、正の値は時計回りに増加します。

- `<size>`
  - : 線分の長さを指定します。これは、 {{cssxref("offset-distance")}} が `0%` と `100%` の間の、コンテナボックスからの距離です。これはオプションの引数です（`<size>` が指定されていない場合は `closest-side` が使用されます）。以下のキーワード値のいずれかを指定できます。

    `closest-side`: 光線の開始点と要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の最も近い辺との距離。光線の開始点が包含ブロックの辺上にある場合、線分の長さは 0 になります。光線の開始点が包含ブロックの外側にある場合、包含ブロックの辺は無限に伸びているものとみなされます。これは既定値です。

    `closest-corner`: 光線の開始点と要素の包含ブロックの最も近い角との距離。光線の開始点が包含ブロックの角にある場合、線分の長さは 0 です。

    `farthest-side`: レイの開始点と要素の包含ブロックの最も遠い辺との距離。レイの開始点が包含ブロックの外側にある場合、包含ブロックの辺は無限に伸びているものとみなされます。

    `farthest-corner`: 光線の開始点と、要素の包含ブロックの最も遠い角との距離。

    `sides`: 光線の開始点と、線分が包含ブロックの境界と交差する点との距離。開始点が包含ブロックの境界上または境界外にある場合、線分の長さは 0 です。

- `contain`
  - : 要素が `offset-distance: 100%` の場合でも、要素が包含ブロック内に留まるように、線分の長さを短縮します。仕様上、線分の長さは、要素の境界ボックスの幅または高さのどちらか大きい方の半分に短縮されますが、0 より短くなることはありません。これはオプションの引数です。

- `at <position>`
  - : 光線が開始する点、および要素が包含ブロック内に配置される点を指定します。これはオプションの引数です。記載する場合、`<position>` 値の前に `at` キーワードを付ける必要があります。省略した場合、要素の `offset-position` 値が使用されます。省略し、要素に `offset-position` 値がない場合、光線の開始位置に使用される値は `offset-position: normal` となり、要素は包含ブロックの中心 （または `50% 50%`） に配置されます。

## 解説

`ray()` 関数は、基準点からの角度と距離（極座標）によって 2 次元空間内の位置を指定し、その位置に沿って要素を配置します。この機能により、 `ray()` 関数は 2 次元空間のトランジションを作成するのに役立ちます。比較のために、この手法は、 {{cssxref("translate","translate()")}} 関数で使用される、修正された原点からの水平距離と垂直距離（直角座標）によって点を指定する方法、およびアニメーションによって定義されたパスに沿って要素を移動する方法とは異なります。

`ray()` は 2D 空間で作用するため、要素の初期位置と方向の両方を考慮することが重要です。 `ray()` 関数を要素の `offset-path` 値として適用する場合、これらの要素を次のように制御できます。

- 要素は最初に、要素の [`offset-anchor`](/ja/docs/Web/CSS/Reference/Properties/offset-anchor) の点を要素のオフセット開始位置に移動することで位置指定されます。既定では、光線の開始位置は {{cssxref("offset-position")}} 値によって決定されます。 `offset-position` が明示的に `normal` として指定されている場合（または省略され、 `normal` が既定値として使用されている場合）、要素は、その包含ブロックの `center` （または `50% 50%`）に位置します。 `offset-position: auto` を指定すると、開始位置は要素の位置の 左上隅（または `0 0`）に設定されます。
- 要素は、その[インライン軸](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout)（テキストの流れる方向）が `ray()` で指定された角度と一致するように、最初に回転します。例えば、 `ray()` の角度を `0deg` （Y 軸の上向き）に設定すると、要素のインライン軸は、光線の角度と一致するように垂直に回転します。要素は、パス全体を通してこの回転を維持します。この動作をカスタマイズするには、 {{cssxref("offset-rotate")}} プロパティを使用します。このプロパティを使用すると、要素の回転角度や方向を個別に指定でき、パスに沿った外観をより正確に制御できます。例えば、 `offset-rotate: 0deg` を設定すると、 `ray()` によって適用された回転がすべて解除され、要素のインライン軸がテキストの流れる方向に再び整列されます。

## 形式文法

{{csssyntax}}

## 例

### 線の角度と開始位置の定義

この例では、要素の開始位置の操作方法、および指定した光線角度が要素の方向に与える影響について説明します。

#### CSS

```css hidden
body {
  width: fit-content;
  height: fit-content;
}

.container {
  width: 80vw;
  height: 100px;
  border: 1px dashed black;
  margin: 0 0.5em 2em 2em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: palegreen;
  border-top: 4px solid black;
  opacity: 20%;
}

.box:first-of-type {
  position: absolute;
}

.box1 {
  offset-path: ray(0deg);
}

.box2 {
  offset-path: ray(150deg);
}

.box3 {
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
}

.box4 {
  offset-position: 0 0;
  offset-path: ray(0deg);
}

.box5 {
  offset-path: ray(60deg closest-side at bottom right);
}
```

```html hidden
<pre>/* オリジナル */</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box0">0</div>
</div>

<pre>
  offset-path: ray(0deg);
  /* 既定のオフセット開始位置は 50% 50% */
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box1">1</div>
</div>

<pre>
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box2">2</div>
</div>

<pre>
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box3">3</div>
</div>

<pre>
  offset-position: 0 0;
  offset-path: ray(0deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box4">4</div>
</div>

<pre>
  offset-path: ray(60deg closest-side at bottom right);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box5">5</div>
</div>
```

{{cssxref("transform-origin")}} と同様に、既定のアンカー点は要素の中心にあります。このアンカー点は、 [`offset-anchor`](/ja/docs/Web/CSS/Reference/Properties/offset-anchor) プロパティを使用して変更することができます。

この例では、さまざまな `offset-path: ray()` 値が、 `1` から `5` までの番号が付けられたボックスに適用されています。各ボックスの「包含ブロック」は破線の境界線で示されています。左上隅の淡いボックスは、 `offset-position` および `offset-path` が適用されていない各ボックスの既定の位置を示しており、並べて比較することができます。各ボックスの上部は、光線の開始点と向きの違いを示すために、実線の境界線で強調表示されています。光線の開始点に配置されたボックスは、指定された光線の角度の方向に整列します。 {{cssxref("offset-position")}} が指定されていない場合、光線の既定のオフセット開始位置は、ボックスの包含ブロックの中心 （または `50% 50%`） になります。

#### 結果

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` は、そのアンカーポイント （中心） が既定のオフセット開始位置 （包含ブロックの `50% 50%`） になるように、最初に位置指定されます。また、`box1` は、レイの角度 `0deg` に向けて回転します。これで、これがパスの開始点になります。左側のフェードした `box0` と比較することで、ボックスの位置と回転の変化を監視できます。ボックスは、y 軸に沿って `0deg` の角度と一致するように回転し、上を向くようになっています。ボックスの回転は、ボックス内の数値の方向から明らかにわかります。

- `box2` では、光線の角度がどのように作用するかを表示させるために、より大きな正の値である `150deg` を光線に適用しています。左上隅から、指定した角度 `150deg` に達するまで、ボックスは時計回りに回転します。

- `box2` と `box3` の `offset-path` 値は同じです。 `box3` では、 [`offset-rotate`](/ja/docs/Web/CSS/Reference/Properties/offset-rotate) の `0deg` も要素に適用されています。その結果、要素は光線の経路全体に沿ってこの特定の角度で回転したままになり、要素は経路の方向に回転することはありません。 `box3` で、光線の経路は `150deg` ですが、 `offset-rotate` により、ボックスの方向は経路に沿って変化しないことに注意してください。また、 `box3` の `offset-path` プロパティは開始位置の `<position>` を指定していないため、光線の開始位置は要素の `offset-position` から導出されます。この場合、 `top 20% left 40%` となります。

- `box4` の `offset-position` は、包含ブロックの左上隅 (`0 0`) に設定されているため、要素のアンカーポイントとオフセットの開始位置が一致します。この開始位置にある要素には、光線角度 `0deg` が適用されます。

- `box5` では、`offset-path` プロパティは `at <position>` 値を指定し、要素の包含ブロックの下端と右端にボックスを配置し、光線の角度に `60deg` が適用されます。

### 線に沿って要素をアニメーション

この例において、最初の図形は、その位置と方向を参照するために表示させています。それ以外の図形には、光線の移動パスが適用されています。

#### CSS

```css
body {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 40px;
  margin-left: 40px;
}

.container {
  transform-style: preserve-3d;
  width: 150px;
  height: 100px;
  border: 2px dotted green;
}

.shape {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 5px;
  text-align: center;
  line-height: 40px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;
}

.shape2 {
  offset-path: ray(120deg sides contain);
}

.shape3 {
  offset-rotate: 0deg;
  offset-path: ray(120deg sides contain);
}

.shape4 {
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
}

.shape5 {
  offset-position: auto;
  offset-path: ray(120deg farthest-corner);
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

```html hidden
<div>
  <div class="container">
    <div class=" shape shape1">&mdash;</div>
  </div>
</div>

<pre>/* offset-path の適用なし */</pre>

<div>
  <div class="container">
    <div class="shape shape2">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg sides contain);</pre>

<div>
  <div class="container">
    <div class="shape shape3">&mdash;</div>
  </div>
</div>

<pre>
offset-path: ray(120deg sides contain);
offset-rotate: 0deg;
</pre>

<div>
  <div class="container">
    <div class="shape shape4">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
</pre>

<div>
  <div class="container">
    <div class="shape shape5">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg farthest-corner);
</pre>
```

#### 結果

{{EmbedLiveSample('Animating an element along the ray', '100%', 750)}}

`offset-path` が適用されている最初の 2 つのサンプルでは、 {{cssxref("offset-rotate")}} を使用しない場合と `offset-rotate` を使用する場合の図形の方向に注目してください。これらのサンプルはどちらも、 {{cssxref("offset-position")}} の既定値 `normal` を使用しているため、パスの動きは `50% 50%` から始まります。最後の 2 つの `offset-path` サンプルは、角の `<size>` 値（`closest-corner` および `farthest-corner`）の影響を表示させています。 `closest-corner` 値は、図形がすでに角にあるため (`offset-position: auto`)、非常に短いオフセットパスを作成します。`farthest-corner` 値は、包含ブロックの左上角から右下角まで、最も長いオフセットパスを作成します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`offset-distance`](/ja/docs/Web/CSS/Reference/Properties/offset-distance)
- [`offset-path`](/ja/docs/Web/CSS/Reference/Properties/offset-path)
- [`offset-rotate`](/ja/docs/Web/CSS/Reference/Properties/offset-rotate)
