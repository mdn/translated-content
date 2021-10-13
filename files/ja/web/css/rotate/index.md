---
title: rotate
slug: Web/CSS/rotate
tags:
  - CSS
  - CSS Property
  - Reference
  - Transforms
translation_of: Web/CSS/rotate
---
{{CSSRef}}{{SeeCompatTable}}

[CSS](/ja/docs/Web/CSS) の **`rotate`** プロパティは、 {{CSSxRef("transform")}} とは個別に独立して回転変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `transform` の値で変形関数を指定する実際の順序を覚えておく手間を軽減します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* キーワード値 */
rotate: none;

/* 角度値 */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, z 軸名と角度 */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* ベクトルと角度の値 */
rotate: 1 1 1 90deg;</pre>

<h3 id="Values" name="Values">値</h3>

- 角度値
  - : {{CSSxRef("&lt;angle&gt;")}} で、 z 軸の周囲を該当する要素を貫いて回転させる角度を指定します。`rotate()` (2次元回転) 関数と等価です。
- x, y, z 軸と角度値
  - : 該当する要素を回転する軸の名前 (`"x"`, "`y`", "`z"`) と、要素を貫いて回転する角度を指定する {{CSSxRef("&lt;angle&gt;")}} です。 `rotateX()`/`rotateY()`/`rotateZ()` (3次元回転) 関数と等価です。
- ベクトルと角度値
  - : 要素を回転させたい直線を表す原点を中心としたベクトルを表す三つの数値 {{CSSxRef("&lt;number&gt;")}} と、要素を貫いて回転する角度を指定する {{CSSxRef("&lt;angle&gt;")}} です。 `rotate3d()` (3次元回転) 関数と等価です。
 <dt id="none">`none`</dt>
  - : 回転を適用しないことを表します。

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="rotate"&gt;Rotation&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<div class="hidden">
<pre class="brush: css">* {
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
</pre>
</div>

<pre class="brush: css">.rotate {
  transition: rotate 1s;
}

div:hover .rotate {
  rotate: 1 -0.5 1 180deg;
}</pre>

<h3 id="Result" name="Result">結果</h3>

{{EmbedLiveSample("Examples")}}

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
   <td>{{SpecName('CSS Transforms 2', '#individual-transforms', 'individual transforms')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

{{CSSInfo}}

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

{{Compat("css.properties.rotate")}}
