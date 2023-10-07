---
title: <transform-function>
slug: Web/CSS/transform-function
---

{{CSSRef}}

**`<transform-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、要素の外見に影響する座標変換を表します。座標変換[関数](/ja/docs/Web/CSS/CSS_Functions)は、二次元または三次元空間で要素を回転、拡大縮小、歪曲、移動させることができます。これは {{cssxref("transform")}} プロパティの中で使用されます。

## 構文

`<transform-function>` データ型は、以下に示した変換関数のうちの一つを使用して指定します。各関数は二次元または三次元の座標操作を適用します。

### 行列変換

- [`matrix()`](</ja/docs/Web/CSS/transform-function/matrix()>)
  - : 二次元の同次変換行列を記述します。
- [`matrix3d()`](</ja/docs/Web/CSS/transform-function/matrix3d()>)
  - : 三次元の変換を4×4の同次行列で記述します。

<h3 id="Perspective" name="Perspective">視点距離</h3>

- [`perspective()`](</ja/docs/Web/CSS/transform-function/perspective()>)
  - : ユーザーと z=0 平面との間の距離を設定します。

<h3 id="Rotation" name="Rotation">回転</h3>

- [`rotate()`](</ja/docs/Web/CSS/transform-function/rotate()>)
  - : 要素を二次元平面上で特定の点を中心に回転します。
- [`rotate3d()`](</ja/docs/Web/CSS/transform-function/rotate3d()>)
  - : 要素を三次元空間で特定の軸を中心に回転します。
- [`rotateX()`](</ja/docs/Web/CSS/transform-function/rotateX()>)
  - : 要素を水平軸を中心に回転します。
- [`rotateY()`](</ja/docs/Web/CSS/transform-function/rotateY()>)
  - : 要素を垂直軸を中心に回転します。
- [`rotateZ()`](</ja/docs/Web/CSS/transform-function/rotateZ()>)
  - : 要素を Z 軸を中心に回転します。

### 拡大縮小

- [`scale()`](</ja/docs/Web/CSS/transform-function/scale()>)
  - : 要素を二次元平面上で拡大または縮小します。
- [`scale3d()`](</ja/docs/Web/CSS/transform-function/scale3d()>)
  - : 要素を三次元空間で拡大または縮小します。
- [`scaleX()`](</ja/docs/Web/CSS/transform-function/scaleX()>)
  - : 要素を水平に拡大または縮小します。
- [`scaleY()`](</ja/docs/Web/CSS/transform-function/scaleY()>)
  - : 要素を垂直に拡大または縮小します。
- [`scaleZ()`](</ja/docs/Web/CSS/transform-function/scaleZ()>)
  - : 要素を Z 軸方向に拡大または縮小します。

### 歪め

- [`skew()`](</ja/docs/Web/CSS/transform-function/skew()>)
  - : 要素を二次元平面上で歪ませます。
- [`skewX()`](</ja/docs/Web/CSS/transform-function/skewX()>)
  - : 要素を水平方向に歪ませます。
- [`skewY()`](</ja/docs/Web/CSS/transform-function/skewY()>)
  - : 要素を垂直方向に歪ませます。

### 平行移動

- [`translate()`](</ja/docs/Web/CSS/transform-function/translate()>)
  - : 要素を二次元平面上で平行移動させます。
- [`translate3d()`](</ja/docs/Web/CSS/transform-function/translate3d()>)
  - : 要素を三次元空間で平行移動させます。
- [`translateX()`](</ja/docs/Web/CSS/transform-function/translateX()>)
  - : 要素を水平方向に平行移動させます。
- [`translateY()`](</ja/docs/Web/CSS/transform-function/translateY()>)
  - : 要素を垂直方向に平行移動させます。
- [`translateZ()`](</ja/docs/Web/CSS/transform-function/translateZ()>)
  - : 要素を Z 軸方向に平行移動させます。

## 解説

HTML 要素の寸法や形状を記述するために様々な座標モデルが用いられることがあり、同様に変換にも適用されます。最も一般的なものは、[直交座標系](https://ja.wikipedia.org/wiki/%E7%9B%B4%E4%BA%A4%E5%BA%A7%E6%A8%99%E7%B3%BB)ですが、[同次座標系](https://en.wikipedia.org/wiki/Homogeneous_coordinates)が用いられることもあります。

### 直交座標系

直交座標系では、二次元の点は、 X 座標 (横座標) と Y 座標 (縦座標) の二つの値を使用して記述します。これは `(x, y)` のベクトル表記で表現されます。

![](coord_in_r2.png)

CSS (および多くのコンピューターグラフィック) では、原点 `(0, 0)` が各要素の*左上*を表します。正の座標は原点から下および右に向かい、負の座標は上および左に向かいます。従って、右に 2 単位、下に 5 単位では `(2, 5)` となり、左に 3 単位、上に 12 単位では `(-3, -12)` となります。

### 座標変換関数

座標変換関数は、座標の値を操作することによって要素の外見を変更します。線形座標変換関数は、次のように 2×2 の行列で記述されます。

<math><mfenced><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr> <mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable></mfenced></math>

関数は行列の乗算によって要素に適用されます。つまり、それぞれの座標は行列の値に基づいて変化します。

<math><mfenced><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr> <mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr> </mtable></mfenced><mfenced><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr> </mtable></mfenced><mo>=</mo> <mfenced><mtable><mtr><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd> </mtr><mtr><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtr></mtable></mfenced></math>

一行の中で複数の座標変換を適用することもできます。

<math><mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>1</mn></msub></mtd> </mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>1</mn></msub></mtd> </mtr></mtable></mfenced><mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>2</mn></msub></mtd> </mtr><mtr><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>2</mn></msub></mtd> </mtr></mtable></mfenced><mo>=</mo> <mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub> </mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable></mfenced></math>

この記法で、最もよく使われる回転、拡大縮小、傾斜の座標変換を記述し、合成することができます。 (実際、すべての座標変換が記述できる線形関数です。) 座標変換の合成は右から左の順に効果的に適用されます。

しかし、主要な座標変換のうち平行移動は線形ではなく、従ってこの記法を使用する場合は特例とする必要があります。平行移動のベクトル `(tx, ty)` は、二つの追加の引数で別に表現しなければなりません。

> **メモ:** 直交座標よりも難解ですが、[射影幾何学](https://ja.wikipedia.org/wiki/%E5%B0%84%E5%BD%B1%E5%B9%BE%E4%BD%95%E5%AD%A6)の[同次座標](https://en.wikipedia.org/wiki/Homogeneous_coordinates)は 3 × 3 の変換行列を使用するので、線形関数として平行移動をより簡単に表現できます。

## 例

<h3 id="Transform_function_comparison">座標変換関数の比較</h3>

次の例では、DOM 要素と座標変換で作成された 3D 立方体と、立方体を座標変換するための様々な座標変換関数を選択するための選択メニューが用意されており、様々な種類の効果を比較することができます。

選択すると、変換が立方体に適用され、2 秒後に立方体は開始時の状態に戻ります。すべての変換の効果を見ることができるように、`transform3d()` を使って立方体の開始状態をわずかに回転させています。

#### HTML

```html
<main>
  <section id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </section>

  <div class="select-form">
    <label>座標変換関数を選択してください</label>
    <select>
      <option selected>座標変換関数を選択</option>
      <option>rotate(360deg)</option>
      <option>rotateX(360deg)</option>
      <option>rotateY(360deg)</option>
      <option>rotateZ(360deg)</option>
      <option>rotate3d(1, 1, 1, 90deg)</option>
      <option>scale(1.5)</option>
      <option>scaleX(1.5)</option>
      <option>scaleY(1.5)</option>
      <option>scaleZ(1.5)</option>
      <option>scale3d(1, 1.5, 1.5)</option>
      <option>skew(17deg, 13deg)</option>
      <option>skewX(17deg)</option>
      <option>skewY(17deg)</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
      <option>perspective(200px)</option>
      <option>matrix(1, 2, -1, 1, 80, 80)</option>
      <option>matrix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </select>
  </div>
</main>
```

#### CSS

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  background-image: linear-gradient(135deg, white, cyan, white);
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
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
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

.select-form {
  margin-top: 50px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const example = document.querySelector("#example-element");

selectElem.addEventListener("change", () => {
  if (selectElem.value === "Choose a function") {
    return;
  } else {
    example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;
    setTimeout(function () {
      example.style.transform = "rotate3d(1, 1, 1, 30deg)";
    }, 2000);
  }
});
```

#### 結果

{{EmbedLiveSample('Transform_function_comparison', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("transform")}} プロパティ
