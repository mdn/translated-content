---
title: perspective
slug: Web/CSS/perspective
tags:
  - CSS
  - CSS プロパティ
  - CSS 変形
  - Reference
  - グラフィック
  - プロパティ
  - 距離
translation_of: Web/CSS/perspective
---
{{CSSRef}}

<span class="seoSummary">**`perspective`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 z=0 の平面とユーザーとの間の距離を定めて三次元に配置された要素に遠近感を与えます。</span> z&gt;0 である三次元要素はより大きく、 z&lt;0 である三次元要素はより小さくなります。効果の強度はこのプロパティの値から決められます。

{{EmbedInteractiveExample("pages/css/perspective.html")}}

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</p>

ユーザーの背後にある 3D 要素の部品、つまり z 軸座標が CSS の `perspective` プロパティの値より大きい要素は描画されません。

<em>消失点</em>は既定で要素の中心に置かれますが、この位置は {{cssxref("perspective-origin")}} プロパティで変更できます。

このプロパティを `0` と `none` 以外の値で使用すると、新たな[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を生成します。また、その場合、オブジェクトはそれを含む `position: fixed` の要素の包含ブロックとして動作します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* キーワード値 */
perspective: none;

/* &lt;length&gt; 値 */
perspective: 20px;
perspective: 3.5em;

/* グローバル値 */
perspective: inherit;
perspective: initial;
perspective: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

- `none`
  - : 立体的な変形を一切適用しないことを示すキーワードです。
- `&lt;length&gt;`
  - : ユーザーと z=0 平面間の距離を表す {{cssxref("&lt;length&gt;")}} です。立体的な変形を要素とその内容に適用するときに使います。 `0` や負の値ならば、立体的な変形は適用されません。

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_perspective" name="Setting_perspective">視点の設定</h3>

この例は様々な位置に視点が設定された立方体を表示します。どのように立方体が早く縮まるかは、 {{ cssxref("perspective") }} プロパティで定義されます。小さい値ほど、視点は近くなります。

<h4 id="Result" name="Result">結果</h4>

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

<h4 id="HTML">HTML</h4>

以下の HTML は、４つの同じボックスのコピーを、様々な値の視点を設定して作成します。

<pre class="brush: html">&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th&gt;&lt;code&gt;perspective: 250px;&lt;/code&gt;
      &lt;/th&gt;
      &lt;th&gt;&lt;code&gt;perspective: 350px;&lt;/code&gt;
      &lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div class="container"&gt;
          &lt;div class="cube pers250"&gt;
            &lt;div class="face front"&gt;1&lt;/div&gt;
            &lt;div class="face back"&gt;2&lt;/div&gt;
            &lt;div class="face right"&gt;3&lt;/div&gt;
            &lt;div class="face left"&gt;4&lt;/div&gt;
            &lt;div class="face top"&gt;5&lt;/div&gt;
            &lt;div class="face bottom"&gt;6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;
        &lt;div class="container"&gt;
          &lt;div class="cube pers350"&gt;
            &lt;div class="face front"&gt;1&lt;/div&gt;
            &lt;div class="face back"&gt;2&lt;/div&gt;
            &lt;div class="face right"&gt;3&lt;/div&gt;
            &lt;div class="face left"&gt;4&lt;/div&gt;
            &lt;div class="face top"&gt;5&lt;/div&gt;
            &lt;div class="face bottom"&gt;6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th&gt;&lt;code&gt;perspective: 500px;&lt;/code&gt;
      &lt;/th&gt;
      &lt;th&gt;&lt;code&gt;perspective: 650px;&lt;/code&gt;
      &lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div class="container"&gt;
          &lt;div class="cube pers500"&gt;
            &lt;div class="face front"&gt;1&lt;/div&gt;
            &lt;div class="face back"&gt;2&lt;/div&gt;
            &lt;div class="face right"&gt;3&lt;/div&gt;
            &lt;div class="face left"&gt;4&lt;/div&gt;
            &lt;div class="face top"&gt;5&lt;/div&gt;
            &lt;div class="face bottom"&gt;6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;
        &lt;div class="container"&gt;
          &lt;div class="cube pers650"&gt;
            &lt;div class="face front"&gt;1&lt;/div&gt;
            &lt;div class="face back"&gt;2&lt;/div&gt;
            &lt;div class="face right"&gt;3&lt;/div&gt;
            &lt;div class="face left"&gt;4&lt;/div&gt;
            &lt;div class="face top"&gt;5&lt;/div&gt;
            &lt;div class="face bottom"&gt;6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<h4 id="CSS">CSS</h4>

様々な距離の遠近法を設定するために使用することができる CSS のクラスです。コンテナーボックスや立方体自身、それぞれの面のためのクラスも含みます。

<pre class="brush: css">/* さまざまな perspective の値のためのショートハンドクラス */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
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
  backface-visibility: visible;
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
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* テーブルの見栄えをよくする */
th, p, td {
  background-color: #EEEEEE;
  padding: 10px;
  font-family: sans-serif;
   text-align: left;
}</pre>

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
   <td>{{Specname('CSS Transforms 2', '#propdef-perspective', 'perspective')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

{{cssinfo}}

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

{{Compat("css.properties.perspective")}}

## 関連情報

<ul>
 <li>[CSS 変形の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)</li>
</ul>
