---
title: <angle>
slug: Web/CSS/angle
---

{{ CSSRef() }}

**`<angle>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、度、グラード、ラジアン、周の値で表される角度の値を表します。例えば、 {{cssxref("&lt;gradient&gt;")}} 関数や一部の {{cssxref("transform")}} 関数などで使われています。

{{EmbedInteractiveExample("pages/css/type-angle.html")}}

## 構文

`<angle>` データ型は、1 つの {{cssxref("&lt;number&gt;")}} とそれに続く以下に挙げる単位の 1 つから成ります。単位と数値の間に空白は置きません。 数値 `0` の後では、角度の単位は任意です。

任意で、先行して単一の符号 (`+` または `-`) を付けることができます。 正の数は時計回りの角度を表し、負の数は反時計回りの角度を表します。静的なプロパティにおいては、ある単位のある角度は、様々な等価の値で表すことができます。例えば、 `90deg` は `-270deg` と等価で、 `1turn` は `4turn` と等価です。しかし、 {{cssxref("animation")}} や {{cssxref("transition")}} に適用されるような動的なプロパティでは、効果が異なります。

### 単位

- `deg`
  - : 角度を[度数法 (度)](<https://ja.wikipedia.org/wiki/%E5%BA%A6_(%E8%A7%92%E5%BA%A6)>) で表します。円一周は `360deg` です。例: `0deg`, `90deg`, `14.23deg`
- `grad`
  - : 角度を[グラード](<https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%BC%E3%83%89_(%E5%8D%98%E4%BD%8D)>)で表します。円一周は `400grad` です。例: `0grad`, `100grad`, `38.8grad`
- `rad`
  - : 角度を[弧度法 (ラジアン)](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B8%E3%82%A2%E3%83%B3) で表します。円一周は 2π ラジアンで、およそ `6.2832rad` です。 `1rad` は 180/π 度です。例: `0rad`, `1.0708rad`, `6.2832rad`
- `turn`
  - : 角度を回転数で表します。円一周は `1turn` です。例: `0turn`, `0.25turn`, `1.2turn`

## 例

### 時計回りに直角を設定

<table class="standard-table">
  <tbody>
    <tr>
        - : <img class="default internal" src="angle90.png" />
        - : `90deg = 100grad = 0.25turn ≈ 1.5708rad`
    </tr>
  </tbody>
</table>

### 平角を設定

<table class="standard-table">
  <tbody>
    <tr>
        - : <img class="default internal" src="angle180.png" />
        - : `180deg = 200grad = 0.5turn ≈ 3.1416rad`
    </tr>
  </tbody>
</table>

### 反時計回りに直角を設定

<table class="standard-table">
  <tbody>
    <tr>
        - : <img class="default internal" src="angleminus90.png" />
        - : `-90deg = -100grad = -0.25turn ≈ -1.5708rad`
    </tr>
  </tbody>
</table>

### 0 度を設定

<table class="standard-table">
  <tbody>
    <tr>
        - : <img class="default internal" src="angle0.png" />
        - : `0 = 0deg = 0grad = 0turn = 0rad`
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS データ型](/ja/docs/Web/CSS/CSS_Types)
- [`<gradient>`](/ja/docs/Web/CSS/gradient) 型
- CSS 回転変換: [`rotate()`](</ja/docs/Web/CSS/transform-function/rotate()>), [`rotate3d()`](</ja/docs/Web/CSS/transform-function/rotate3d()>), [`rotateX()`](</ja/docs/Web/CSS/transform-function/rotateX()>), [`rotateY()`](</ja/docs/Web/CSS/transform-function/rotateY()>), [`rotateZ()`](</ja/docs/Web/CSS/transform-function/rotateZ()>)
- [CSS 変換](/ja/docs/Web/CSS/CSS_Transforms)
- [CSS 変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
