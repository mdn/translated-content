---
title: transform-style
slug: Web/CSS/transform-style
tags:
  - CSS
  - CSS Property
  - CSS Transforms
  - Experimental
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/transform-style
---
{{CSSRef}}

<span class="seoSummary">**`transform-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の子要素を 3D 空間に配置するのか、平面化して要素の平面に配置するのかを設定します。</span>

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</p>

平面化した場合、子要素は自身の 3D 空間に存在しなくなります。

このプロパティは継承されないため、葉要素以外のすべての子孫要素で設定する必要があります。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
transform-style: flat;
transform-style: preserve-3d;

/* グローバル値 */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

- `flat`
  - : 要素の子要素を要素自身の平面上に配置することを示します。
- `preserve-3d`
  - : 要素の子要素を 3D 空間に配置することを示します。

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

{{CSSInfo}}

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Transform_style_demonstration" name="Transform_style_demonstration">変換スタイルのデモ</h3>

この例では、変換を使用して 3D の立方体を作成しています。立方体の面の親コンテナーには、既定で `transform-style: preserve-3d` が設定されているため、3D 空間で変換され、意図したとおりに表示されます。

また、これと `transform-style: flat` の間で切り替えられるチェックボックスも用意されています。この別な状態では、立方体の面はすべて親の平面上に平坦化され、使用しているブラウザーによっては全く表示されない場合があります。

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;section id="example-element"&gt;
  &lt;div class="face front"&gt;1&lt;/div&gt;
  &lt;div class="face back"&gt;2&lt;/div&gt;
  &lt;div class="face right"&gt;3&lt;/div&gt;
  &lt;div class="face left"&gt;4&lt;/div&gt;
  &lt;div class="face top"&gt;5&lt;/div&gt;
  &lt;div class="face bottom"&gt;6&lt;/div&gt;
&lt;/section&gt;

&lt;div class="checkbox"&gt;
  &lt;label for="preserve"&gt;&lt;code&gt;preserve-3d&lt;/code&gt;&lt;/label&gt;
  &lt;input type="checkbox" id="preserve" checked&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
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
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">const cube = document.getElementById('example-element');
const checkbox = document.getElementById('preserve');

checkbox.addEventListener('change', () =&gt; {
  if(checkbox.checked) {
    cube.style.transformStyle = 'preserve-3d';
  } else {
    cube.style.transformStyle = 'flat';
  }
})</pre>

<h4 id="Result" name="Result">結果</h4>

{{EmbedLiveSample('Transform_style_demonstration', '100%', 260)}}

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
   <td>{{SpecName('CSS Transforms 2', '#transform-style-property', 'transform-style')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.properties.transform-style")}}

## 関連情報

<ul>
 <li>[CSS 変形の使用](/ja/docs/CSS/Using_CSS_transforms)</li>
</ul>
