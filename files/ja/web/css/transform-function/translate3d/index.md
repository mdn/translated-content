---
title: translate3d()
slug: Web/CSS/transform-function/translate3d
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
translation_of: Web/CSS/transform-function/translate3d()
original_slug: Web/CSS/transform-function/translate3d()
browser-compat: css.types.transform-function.translate3d
---
{{CSSRef}}

**`translate3d()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を三次元空間内で再配置します。返値は {{cssxref("&lt;transform-function&gt;")}} データ型です。

{{EmbedInteractiveExample("pages/css/function-translate3d.html")}}

この変換は三次元ベクトルであることが特徴です。座標は要素がそれぞれの方向にどれだけ移動するかを定義します。

## 構文

```css
translate3d(tx, ty, tz)
```

### 値

- `tx`
  - : 変換ベクトルの横座標を表す {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。
- `ty`
  - : 変換ベクトルの縦座標を表す {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。
- `tz`
  - : 変換ベクトルの z 成分を表す {{cssxref("&lt;length&gt;")}} です。 {{cssxref("&lt;percentage&gt;")}} 値は指定できません。この場合、これを含む座標変換は無効とされます。

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
        <p>
          ℝ^2 では線形変換ではないので、デカルト座標の行列で表すことはできない。
        </p>
      </td>
      <td>
        ℝ^3 では線形変換ではないので、デカルト座標の行列で表すことはできない。
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mi>tz</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

<h3 id="Using_a_single_axis_translation">単一軸の座標変換の使用</h3>

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Equivalent to perspective(500px) translateX(10px) */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Using_a_single_axis_translation", 250, 250)}}

<h3 id="Combining_z-axis_and_x-axis_translation">z 軸と x 軸を組み合わせた座標変換</h3>

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Combining_z-axis_and_x-axis_translation", 250, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
