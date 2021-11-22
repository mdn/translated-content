---
title: matrix3d()
slug: Web/CSS/transform-function/matrix3d()
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
browser-compat: css.types.transform-function.matrix3d
translation_of: Web/CSS/transform-function/matrix3d()
---
{{CSSRef}}

**`matrix3d()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 4x4 の三次元同次変換行列を定義します。
結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

## 構文

`matrix3d()` 関数は 16 個の値で指定します。列優先の順で記述します。

```css
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

### 値

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_
  _a3_ _b3_ _c3_ _d3_
  - : {{cssxref("&lt;number&gt;")}} で、線形変換を記述します。
- _a4_ _b4_ _c4 d4_
  - : {{cssxref("&lt;number&gt;")}} で、適用する変換を記述します。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">ℝ^2 のデカルト座標</th>
      <th scope="col">ℝℙ^2 の同次座標</th>
      <th scope="col">ℝ^3 のデカルト座標</th>
      <th scope="col">ℝℙ^3 の同次座標</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        この変換は三次元空間に適用され、平面で表現することはできません。
      </td>
      <td>
        一般的な三次元[アファイン変換](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%95%E3%82%A3%E3%83%B3%E5%86%99%E5%83%8F)は、変換が線形変換ではないので、デカルト座標行列を使用して表現することはできません。
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mi>a1</mi> </mtd><mtd><mi>a2</mi> </mtd
                ><mtd><mi>a3</mi> </mtd><mtd><mi>a4</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>b1</mi> </mtd><mtd><mi>b2</mi> </mtd
                ><mtd><mi>b3</mi> </mtd><mtd><mi>b4</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>c1</mi> </mtd><mtd><mi>c2</mi> </mtd
                ><mtd><mi>c3</mi> </mtd><mtd><mi>c4</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>d1</mi> </mtd><mtd><mi>d2</mi> </mtd
                ><mtd><mi>d3</mi> </mtd><mtd><mi>d4</mi></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

### つぶれる立方体の例

次の例は、DOM 要素と変換から作成された立方体を示しており、ポインターを置いたりフォーカスしたりすることで `matrix3d()` 変換を適用することができます。

#### HTML

```html
<section id="example-element" tabindex="0">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>
```

#### CSS

```css
#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
  margin: 50px auto;
}

#example-element:hover, #example-element:focus {
  transform: rotate3d(1, 1, 1, 30deg) matrix3d(1,0,0,0,0,1,6,0,0,0,1,0,50,100,0,1.1);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: #fff;
}

.front {
    background: rgba(90,90,90,.7);
    transform: translateZ(50px);
}

.back {
    background: rgba(0,210,0,.7);
    transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210,0,0,.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0,0,210,.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210,210,0,.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210,0,210,.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### 結果

{{EmbedLiveSample('Cube_squashing_example', '100%', '300px')}}

### 行列変換と拡大縮小の例

もう一つの `transform3d()` の例は、変換と拡大縮小をアニメーションと組み合わせて実装したものです。

#### HTML

```html
<div class="foo">
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Quos quaerat sit soluta, quisquam exercitationem delectus qui unde in facere
necessitatibus aut quia porro dolorem nesciunt enim, at consequuntur aliquam esse?
</div>
```

#### CSS

```css
html {
  width: 100%;
}
body {
  height: 100vh;
  /* Centering content */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

}
.foo {
  width: 50%;
  padding: 1em;
  color: white;
  background: #ff8c66;
  border: 2px dashed black;
  text-align: center;
  font-family: system-ui, sans-serif;
  font-size: 14px;
   /* Setting up animation for better demonstration */
  animation: MotionScale 2s alternate linear infinite;
}

@keyframes MotionScale {
  from {
    /*
      Identity matrix is used as basis here.
      The matrix below describes the
      following transformations:
        Translates every X point by -50px
        Translates every Y point by -100px
        Translates every Z point by 0
        Scales down by 10%
    */
    transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      -50,-100,0,1.1
    );

  }
  50% {
    transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,0.9
    );
  }
  to {
     transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      50,100,0,1.1
    )
  }
}
```

#### 結果

{{EmbedLiveSample('Matrix_translation_and_scale_example', '100%', '400px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
