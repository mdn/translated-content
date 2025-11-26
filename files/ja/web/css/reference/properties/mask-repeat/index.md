---
title: mask-repeat
slug: Web/CSS/Reference/Properties/mask-repeat
original_slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`mask-repeat`** は [CSS](/ja/docs/Web/CSS) プロパティで、マスク画像をどのように繰り返すかを設定します。マスク画像は水平軸、垂直軸、両方の軸で繰り返すか、まったく繰り返さないようにすることができます。

## 構文

```css
/* 1 つの値の構文 */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* 2 つの値の構文: 水平 | 垂直 */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* 複数の値 */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* グローバル値 */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

### 値

`mask-repeat` プロパティは、 2 つの `<repeat-style>` 値をカンマで区切ったリストです。最初の `<repeat-style>` 値は水平方向の繰り返し値、 2 つ目の値は垂直方向の繰り返し値、または 2 つの `<repeat-style>` 値を一括指定する 1 つのキーワード値です。

#### `<repeat-style>` 値

`<repeat-style>` 値には、次のようなものがあります。

- `repeat`
  - : 画像は、マスクの描画領域全体に応じた回数だけ繰り返されます。マスクの[基準ボックス](/ja/docs/Web/CSS/Reference/Properties/mask-origin)のサイズが、マスク画像のサイズの正確な倍数でない場合、端の部分の画像は切り取られます。

- `space`
  - : マスク画像は、切り取られることなく、できるだけ多くの回数だけ繰り返されます。要素の原点サイズが、関連付けられた寸法のマスク画像のサイズの 2 倍以上である場合、 {{cssxref("mask-position")}} プロパティは無視され、最初と最後の画像はマスクの原点コンテナーの端に配置されます。マスクの基準ボックスがマスク画像のサイズの正確な倍数でない場合、余白は繰り返されるマスク画像の間に均等に分配されます。

    基準ボックスのサイズが、マスク画像の指定された寸法の 2 倍未満の場合、1 つのマスク画像しか表示できません。この場合、画像は `mask-position` プロパティで定義された位置に配置されます。このプロパティの既定値は `0% 0%` です。マスク画像は、マスク画像がマスク基準ボックスよりも大きい場合にのみ切り取られます。

- `round`
  - : マスク画像は、元の寸法で可能な限り何度も繰り返されます。マスクの基準ボックスのサイズがマスク画像のサイズの正確な倍数でない場合、すべてのマスク画像が拡大縮小され、[縮小または引き伸ばし](#丸め反復)されて、繰り返したものが切り取られないされないようにします。

- `no-repeat`
  - : マスク画像は繰り返されません（したがって、マスクの描画領域は必ずしも完全に覆われるとは限りません）。繰り返されないマスク画像の位置は、 CSS の {{cssxref("mask-position")}} プロパティで定義されます。

#### 一括指定値

1 値構文は、完全な 2 値構文の一括指定です。

<table class="standard-table">
  <thead>
    <tr>
      <th>単一の値</th>
      <th>同等の 2 つの値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>repeat-x</code></td>
      <td><code>repeat no-repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat-y</code></td>
      <td><code>no-repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat</code></td>
      <td><code>repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>space</code></td>
      <td><code>space space</code></td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td><code>round round</code></td>
    </tr>
    <tr>
      <td><code>no-repeat</code></td>
      <td><code>no-repeat no-repeat</code></td>
    </tr>
  </tbody>
</table>

- `repeat-x`
  - : `repeat no-repeat` と同等です。画像は、マスクの描画領域の幅に応じた回数だけ、水平方向に繰り返し描画されます。マスクの基準ボックスの幅がマスク画像の幅の倍数ちょうどでない場合、 {{cssxref("mask-position")}} の値に応じて、右端または左端、あるいはその両方の端にあるマスク画像は切り取られます。

- `repeat-y`
  - : `no-repeat repeat` と同等です。画像は、マスクの描画領域の高さに応じて必要な回数だけ垂直方向に繰り返されます。マスクの基準ボックスの高さがマスク画像の高さの正確な倍数でない場合、 {{cssxref("mask-position")}} の値に応じて、上端または下端、あるいはその両方のマスク画像が切り取られます。

## 解説

`mask-repeat` プロパティは、2 つの値、または 1 つの[一括指定値](#一括指定値)をカンマで区切ったものを受け入れます。2 つの値の構文では、最初の値は水平方向の繰り返し動作を表し、2 つ目の値は垂直方向の動作を表します。

### 複数の値

カンマで区切られたこのリスト内のそれぞれの `mask-repeat` 値は、別個のマスクレイヤーに適用されます。 1 つの要素には、複数のマスクレイヤーを適用することができます。レイヤーの数は、 {{cssxref("mask-image")}} プロパティの値にカンマで区切られた値の数によって決まります（値が `none` の場合でも）。それぞれの `mask-repeat` 値は、`mask-image` 値と順番に対応付けられます。 2 つのプロパティの値の数が異なる場合、`mask-repeat` 値の余分な値は無視されます。また、 `mask-repeat` の値が `mask-image` の値よりも少ない場合、 `mask-repeat` 値は繰り返されます。

### サイズ変更と位置指定

`mask-repeat` プロパティの値は、マスク画像が[サイズ指定](/ja/docs/Web/CSS/Reference/Properties/mask-size)および[位置指定](/ja/docs/Web/CSS/Reference/Properties/mask-position)された後に、どのようにタイル化されるかを定義します。最初の（そしておそらく唯一の）マスク画像の繰り返しは、{{cssxref("mask-position")}} プロパティによって位置指定されます。このプロパティの既定値は、基準ボックスの左上隅である `0% 0%` です。サイズは、{{cssxref("mask-size")}} プロパティによって定義されます。このプロパティの既定値は `auto` です。繰り返されるマスクの位置は、この最初のマスクインスタンスに基づいて決定されます。

### クリップ

マスク画像は、`round` の場合を 除き、マスク画像のサイズが基準ボックスよりも大きい場合、繰り返されることはなく、切り取られます。`round` の場合、単一のマスクは基準ボックスに収まるように縮小されます。

`repeat` 値に対応するマスク画像は、ボックスの寸法（幅または高さ）がマスクの寸法の正確な倍数でない場合、基準ボックスの端で切り取られることがあります。

### アスペクト比

既定では、マスク画像は、{{cssxref("mask-size")}} プロパティで設定されたアスペクト比、または `mask-size` が既定値であるか、明示的に `auto` に設定されている場合はその既定のアスペクト比を維持します。両方向に `round` 値が設定されている場合のみ、マスクのアスペクト比が崩れることがあります。

両方向に `round` が設定されている場合、繰り返されるマスク画像は、結果として基準ボックスのアスペクト比と一致します。マスク画像は、サイズに合わせて変倍されるため、歪む場合がありますが、マスク画像が切り取られることは確実にありません。`round` が一方の次元のみに設定されている場合、マスクサイズのアスペクト比が保持されます。

### 丸め反復

`round` の場合、マスク画像は、マスク画像が配置領域に整数倍で収まるように拡大または縮小されます。マスクサイズは、最小 1 マスクで、最も近い自然数またはマスクに合わせて拡大または縮小されます。

マスクのレンダリングサイズは、基準ボックスのサイズをその次元のマスクの反復処理回数で割った値です。ここで、反復処理回数は 0 より大きい整数です。反復処理回数は、`X' = D / round(D / X)` で求められます。ここで、 `D` は幅または高さ、`round()` は 0 より大きい最も近い整数を返す関数です。

例えば、 `mask-repeat` が `round` に設定され、`mask-size` がマスクの幅を `40px` に設定している場合、基準ボックスが存在し（幅が `0px` より大きい）、その幅が `60px` 未満の場合、そのボックスの幅の 100% である単一の反復処理が行われます。ボックスの幅が `60px` 以上 `100px` 未満の場合、ボックスの幅の `50%` ずつ 2 回の反復処理が行われます。 100px から 140px までは、3 つのマスクが横軸に沿って収まります。これらの「幅 `40px`」のマスクは、基準ボックスが `40px` の倍数である場合にのみ、幅 `40px` になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、単一のマスクに対して `mask-repeat` プロパティを設定する方法を示します。

#### HTML

この HTML には基本的な {{htmlelement("div")}} を置きます。

```html
<div></div>
```

#### CSS

`250px` の正方形を、赤から青へのグラデーションで、 `100px` × `100px` の星をマスク画像として定義します。 `mask-repeat` プロパティを使用し、水平方向に `round`、垂直方向に `space` を設定します。

```css
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100px 100px;

  mask-repeat: round space;
}
```

#### 結果

{{EmbedLiveSample("basic usage", "", "300px")}}

基準ボックスよりも小さいマスク画像に対して `space` と `round` を指定すると、マスクはクリップされません。その代わりに、 `round` の値によって星が歪められ、クリップや空白が生じないようにします。一方、 `space` は星のアスペクト比を維持しますが、必要に応じてマスク間に空間を追加します。

### 丸めの繰り返し

このデモでは、同じ HTML と CSS を使用して、コンテナーの幅を変更するスライダーを設置しています。これにより、`round` を使用すると、マスクは、もう一つのマスクが収まるまで、空間が許す限り伸長し、反復の数が収まらなくなると縮小することがわかります。

```html hidden
<div></div>
<label
  >width: <output></output><br />
  <input type="range" min="0" max="400" value="250" id="width" />
</label>
```

```css hidden
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100px 100px;

  mask-repeat: round space;
}
input {
  clear: both;
  width: 90%;
}
```

```js hidden
const div = document.querySelector("div");
const range = document.getElementById("width");
const output = document.querySelector("output");

range.addEventListener("change", () => {
  const value = `${range.value}px`;
  output.innerText = value;
  div.style.width = value;
});
```

{{EmbedLiveSample("round iterations", "", "300px")}}

マスクの幅は `100px` と定義されています。基準ボックスの幅が `1px` から `149px` までは単一の星、 `150px` から `249px` までは 2 つの星、 `250px` から `349px` までは 3 つの星、といった具合に星の数が増えます。

### 一括指定値

この例では、すべての `mask-repeat` の一括指定値（単一のキーワード）を示しています。

#### HTML

それぞれ異なるクラス名を持つ複数の {{htmlelement("section")}} 要素を設置し、その中に `<div>` を設置しています。

```html
<section class="repeat">
  <div></div>
</section>
<section class="space">
  <div></div>
</section>
<section class="round">
  <div></div>
</section>
<section class="no-repeat">
  <div></div>
</section>
<section class="repeat-x">
  <div></div>
</section>
<section class="repeat-y">
  <div></div>
</section>
```

#### CSS

すべての `<div>` に同じ CSS を指定しますが、親クラスのクラス名と一致する `mask-repeat` 値だけは例外です。マスクのサイズを定義し、最初の `mask-image` を右下に設定します。これは、クリップは最上部と最左部のマスクの上部と左側で発生することを意味しています。

```css
div {
  width: 180px;
  height: 180px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);

  mask-size: 50px 50px;
  mask-position: bottom right;
}

.repeat div {
  mask-repeat: repeat;
}
.space div {
  mask-repeat: space;
}
.round div {
  mask-repeat: round;
}
.no-repeat div {
  mask-repeat: no-repeat;
}
.repeat-x div {
  mask-repeat: repeat-x;
}
.repeat-y div {
  mask-repeat: repeat-y;
}
```

生成コンテンツを使用してクラス名を表示します。

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### 結果

{{EmbedLiveSample("The shorthand values", "", "450px")}}

最初の（および、`no-repeat` の場合、唯一の）星形のマスクは、 50px × 50px のサイズに[サイズ指定](/ja/docs/Web/CSS/Reference/Properties/mask-size)され、描画領域の右下に[位置指定](/ja/docs/Web/CSS/Reference/Properties/mask-position)され、その上および左に、最上部および最左部の星の上部と左部が切り取られるように、星が繰り返し配置されます。すべての星は、 `round` を除き、同じサイズおよび形状であることに注意してください。`round` では、4 つの完全なマスクが各方向に収まるように、すべてのマスクが 45px x 45px に縮小されています。コンテナーが 174px であった場合、4 つではなく 3 つの星が各方向に存在し、各星は引き伸ばされていたでしょう。

### 複数のマスク画像と繰り返し

マスク画像ごとに、カンマで区切って別の `<repeat-style>` を指定することができます。

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

それぞれの画像は、対応する繰り返しスタイルと対応付けられます。 `mask-repeat` の値は `mask-image` の値よりも多いため、余分な `mask-repeat` の値は無視されます。

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

各画像は、対応する繰り返しスタイルと対応づけられます。 `mask-image` の値は `mask-repeat` の値よりも多いため、すべての `mask-image` に `mask-repeat` の値が関連付けられるまで、 `mask-repeat` が繰り返されます。ここでは、奇数番号のマスクは x 軸に沿って繰り返し、偶数番号のマスクは y 軸に沿って繰り返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
