---
title: CSS 座標変換の使用
short-title: 座標変換の使用
slug: Web/CSS/Guides/Transforms/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 座標変換** (CSS transforms) は、座標空間を変更することで、通常の文書フローを混乱させずに影響下にあるコンテンツの形状や位置を変えることができます。このガイドは座標変換の使用についての解説を行ないます。

CSS 座標変換は、アフィン線形変換を HTML 要素に対して適用する一連の CSS プロパティによって実現されます。座標変換には、回転 (rotation)、歪め (skewing)、変倍 (scaling)、平行移動 (translation) などがあり、平面と 3D 空間の両方で行われます。

> [!WARNING]
> 座標変換可能な要素だけが `transform` することができます。つまり、レイアウトが CSS [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)によって管理されるすべての要素です。ただし、[置換ではないインラインボックス](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model#inline-level_elements_and_inline_boxes)、[表の列ボックス](/ja/docs/Web/HTML/Reference/Elements/col)、[表の列グループボックス](/ja/docs/Web/HTML/Reference/Elements/colgroup)は除きます。

## CSS 座標変換のプロパティ

CSS 座標変換の定義に使われる主なプロパティが 2 つあります。 {{cssxref("transform")}} （または独立した {{cssxref('translate')}}, {{cssxref('rotate')}}, {{cssxref('scale')}} の各プロパティ）と {{cssxref("transform-origin")}} です。

- {{cssxref("transform-origin")}}
  - : 原点位置を指定します。デフォルトでは、これは要素の中央ですが、移動することができます。特定の点を引数として必要とする回転、変倍、歪めなどの座標変換で使用されます。
- {{cssxref("transform")}}
  - : 要素に適用する座標変換を指定します。座標変換の空白区切りのリストで、合成操作の要求された順番で適用されます。座標変換の合成は右から左の順に適用されます。

## 例

これが座標変換前の MDN ロゴの画像です。

![MDN ロゴ](logo.png)

### 回転

ここでは MDN ロゴを、左下の角から 90 度回転させます。

```html
<img src="logo.png" alt="MDN Logo" />
```

```css
img {
  rotate: 90deg;
  transform-origin: bottom left;
}
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### 歪めと平行移動

この例は div 要素を 10 度歪め、 X 軸に沿って 150 ピクセル平行移動します。

```html
<img src="logo.png" alt="MDN logo" />
```

```css
img {
  transform: skewX(10deg) translateX(150px);
  transform-origin: bottom left;
}
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D 特有の CSS プロパティ

立体空間で CSS 座標変換 を行うには、もう少し複雑になります。視点を与えて 3D 空間の環境設定を行うことから始める必要があり、それから 2D の要素がその空間でとる挙動を設定しなければなりません。

### 視点

設定する最初の要素は視点 (perspective) です。視点は 3D の印象を与えるものです。見る人から遠ざかるほど、ものが小さくなります。

#### 視点の設定

この例は様々な位置に視点が設定された立方体を表示します。どのように立方体が早く縮まるかは、 {{ cssxref("perspective") }} プロパティで定義されます。小さい値ほど、視点は近くなります。

##### HTML

以下の HTML は、４つの同じボックスのコピーを、様々な値の視点を設定して作成します。

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code></th>
      <th><code>perspective: 350px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube perspective-250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube perspective-350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code></th>
      <th><code>perspective: 650px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube perspective-500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube perspective-650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

##### CSS

様々な距離の遠近法を設定するために使用することができる CSS のクラスです。コンテナーボックスや立方体自身、それぞれの面のためのクラスも含みます。

```css
/* さまざまな perspective の値のための略記用クラス */
.perspective-250 {
  perspective: 250px;
}

.perspective-350 {
  perspective: 350px;
}

.perspective-500 {
  perspective: 500px;
}

.perspective-650 {
  perspective: 650px;
}

/* コンテナーの div、立方体の div、面の一般的な設定 */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
  backface-visibility: visible;
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}

.back {
  background: lime;
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* 表の見栄えをよくする */
th,
p,
td {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

##### 結果

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

2 つ目の設定要素は見る人の位置で、 {{cssxref("perspective-origin")}} プロパティを使います。デフォルトでは視点は見る人の中央に合わせられますが、いつも妥当であるとは限りません。

#### 視点の変更

この例は主要な `perspective-origin` 値で立方体を表示します。

##### HTML

```html
<section>
  <figure>
    <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
      <div class="cube po-tl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top;</code></figcaption>
    <div class="container">
      <div class="cube po-tm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top right;</code></figcaption>
    <div class="container">
      <div class="cube po-tr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: left;</code></figcaption>
    <div class="container">
      <div class="cube po-ml">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 50% 50%;</code></figcaption>
    <div class="container">
      <div class="cube po-mm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: right;</code></figcaption>
    <div class="container">
      <div class="cube po-mr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom left;</code></figcaption>
    <div class="container">
      <div class="cube po-bl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom;</code></figcaption>
    <div class="container">
      <div class="cube po-bm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom right;</code></figcaption>
    <div class="container">
      <div class="cube po-br">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: -200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po-200200neg">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% 200%;</code></figcaption>
    <div class="container">
      <div class="cube po-200200pos">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po-200200">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>
</section>
```

##### CSS

```css
/* perspective-origin の値（例ごとに異なる） */
.po-tl {
  perspective-origin: top left;
}
.po-tm {
  perspective-origin: top;
}
.po-tr {
  perspective-origin: top right;
}
.po-ml {
  perspective-origin: left;
}
.po-mm {
  perspective-origin: 50% 50%;
}
.po-mr {
  perspective-origin: right;
}
.po-bl {
  perspective-origin: bottom left;
}
.po-bm {
  perspective-origin: bottom;
}
.po-br {
  perspective-origin: bottom right;
}
.po-200200neg {
  perspective-origin: -200% -200%;
}
.po-200200pos {
  perspective-origin: 200% 200%;
}
.po-200200 {
  perspective-origin: 200% -200%;
}

/* コンテナーの div、立方体の div、面の一般的な設定 */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
  backface-visibility: visible;
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}
.back {
  background: lime;
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* レイアウトの見栄えをよくする */
section {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

##### 結果

{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}

ここまで行えば、 3D 空間に要素を配置することができます。

## 関連情報

- [CSS の `transform` プロパティ](/ja/docs/Web/CSS/Reference/Properties/transform)および [CSS `<transform-function>` データ型](/ja/docs/Web/CSS/Reference/Values/transform-function)
- 独立した座標変換プロパティ: {{cssxref('translate')}}, {{cssxref('rotate')}}, {{cssxref('scale')}} （`skew` プロパティはありません）
- [端末の向きと 3D 座標変換の併用](/ja/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Intro to CSS 3D transforms](https://3dtransforms.desandro.com/) (David DeSandro によるブログ記事)
- [CSS Transform Playground](https://css-transform.moro.es/) (CSS 座標変換機能を視覚化するオンラインツール)
