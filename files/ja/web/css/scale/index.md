---
title: scale
slug: Web/CSS/scale
tags:
  - CSS
  - CSS Property
  - Reference
  - Transforms
  - 'recipe:css-property'
translation_of: Web/CSS/scale
---
{{CSSRef}}

**`scale`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{CSSxRef("transform")}} とは個別に独立して倍率変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `transform` の値で変換関数を指定する実際の順序を思い出す手間を軽減します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css notranslate">/* キーワード値 */
scale: none;

/* １つの値 */
/* 1より大きい値で要素を拡大 */
scale: 2;
/* 1より小さい値で要素を縮小 */
scale: 0.5;

/* ２つの値 */
scale: 2 0.5;

/* ３つの値 */
scale: 2 0.5 2;</pre>

<h3 id="Values" name="Values">値</h3>

- １つの数値
  - : 該当する要素の拡大率を指定する {{CSSxRef("&lt;number&gt;")}} であり、 X 及び Y 軸で同じ倍率になります。 `scale()` (2D 倍率) 関数に１つの値を指定した場合と等価です。
- ２つの長さ/パーセント値
  - : ２つの {{CSSxRef("&lt;number&gt;")}} 値で、 2D 倍率における X 軸と Y 軸の拡大率を (それぞれ) 指定します。 `scale()` (2D 倍率) 関数に２つの値を指定した場合と等価です。
- ３つの長さ/パーセント値
  - : ３つの {{CSSxRef("&lt;number&gt;")}} 値で、 3D 倍率における X 軸と Y 軸と Z 軸の拡大率を (それぞれ) 指定します。 `translate3d()` (3D 倍率) 関数と等価です。
 <dt id="none">`none`</dt>
  - : 拡大率が適用されないことを示します。

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

{{cssinfo}}

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Scaling_an_element_on_hover" name="Scaling_an_element_on_hover">上に乗った際の要素の拡大Scaling an element on hover</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;
  &lt;p class="scale"&gt;Scaling&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.scale {
  transition: scale 1s;
}

div:hover .scale {
  scale: 2 0.7;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

{{EmbedLiveSample("Scaling_an_element_on_hover")}}

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS Transforms 2", "#individual-transforms", "individual transforms")}}</td>
   <td>{{Spec2("CSS Transforms 2")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.properties.scale")}}

## 関連情報

<ul>
 <li>{{cssxref('translate')}}</li>
 <li>{{cssxref('rotate')}}</li>
 <li>{{cssxref('transform')}}</li>
</ul>

注: skew は独立した変形値ではありません
