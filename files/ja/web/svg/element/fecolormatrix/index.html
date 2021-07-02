---
title: <feColorMatrix>
slug: Web/SVG/Element/feColorMatrix
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feColorMatrix
---
<div>{{SVGRef}}</div>

<p><strong><code>&lt;feColorMatrix&gt;</code></strong> は SVG のフィルター要素で、変換行列に基づいて色を変化させます。すべてのピクセルのカラー値 <code>[R,G,B,A]</code> は 5 x 5 の行列で<a class="external" href="https://en.wikipedia.org/wiki/Matrix_multiplication">行列乗算</a>され、新しい色 <code>[R<em>'</em>,G<em>'</em>,B<em>'</em>,A<em>'</em>]</code> を生成します。</p>

<div class="blockIndicator note">
<p>基本的な記号 <em><code><strong>'</strong></code></em> は、数学で変換された結果を表すために使用されます。</p>
</div>

<pre class="notranslate">| R<em>'</em> |     | r<sub>1</sub> r<sub>2</sub> r<sub>3</sub> r<sub>4</sub> r<sub>5</sub> |   | R |
| G<em>'</em> |     | g<sub>1</sub> g<sub>2</sub> g<sub>3</sub> g<sub>4</sub> g<sub>5</sub> |   | G |
| B<em>'</em> |  =  | b<sub>1</sub> b<sub>2</sub> b<sub>3</sub> b<sub>4</sub> b<sub>5</sub> | * | B |
| A<em>'</em> |     | a<sub>1</sub> a<sub>2</sub> a<sub>3</sub> a<sub>4</sub> a<sub>5</sub> |   | A |
| 1  |     | 0  0  0  0  1 |   | 1 |</pre>

<p>簡略化すると、新しいピクセルの各色のチャンネルがどのように計算されるかを以下に示します。最後の行は値が一定なので無視されます。</p>

<pre class="notranslate">R<em>'</em> = r<sub>1</sub>*R + r<sub>2</sub>*G + r<sub>3</sub>*B + r<sub>4</sub>*A + r<sub>5</sub>
G<em>'</em> = g<sub>1</sub>*R + g<sub>2</sub>*G + g<sub>3</sub>*B + g<sub>4</sub>*A + g<sub>5</sub>
B<em>'</em> = b<sub>1</sub>*R + b<sub>2</sub>*G + b<sub>3</sub>*B + b<sub>4</sub>*A + b<sub>5</sub>
A<em>'</em> = a<sub>1</sub>*R + a<sub>2</sub>*G + a<sub>3</sub>*B + a<sub>4</sub>*A + a<sub>5</sub>
</pre>

<p>新しいピクセルの赤の量、すなわち <code>R<em>'</em></code> に注目すると下記のようになります。</p>

<p>これは以下の値の合計です。</p>

<ul>
 <li>旧ピクセルの赤成分 <code>R</code> の <code>r<sub>1</sub></code> 倍</li>
 <li>旧ピクセルの緑成分 <code>G</code> の <code>r<sub>2</sub></code> 倍</li>
 <li>旧ピクセルの青成分 <code>B</code> の <code>r<sub>3</sub></code> 倍</li>
 <li>旧ピクセルのアルファ成分 <code>A</code> の <code>r<sub>4</sub></code> 倍</li>
 <li>加えて加算値の <code>r<sub>5</sub></code></li>
</ul>

<p>これらの指定された数量は任意の実数を取ることができますが、最終的な <strong>R'</strong> は 0 ～ 1 の間に丸められます。 <strong>G'</strong>, <strong>B'</strong>, <strong>A'</strong> についても同様です。</p>

<pre class="notranslate">R'      =      r1 * R      +        r2 * G      +       r3 * B      +       r4 * A       +       r5
New red = [ r1 * old red ] + [ r2 * old green ] + [ r3 * old Blue ] + [ r4 * old Alpha ] + [ shift of r5 ]</pre>

<p>例えば、真っ黒な画像をより赤くしたい場合は、 <code>r<sub>5</sub></code> を正の実数 <em>x</em> とすれば、新しい画像の各画素の赤さを <em>x</em> だけ増加させます。</p>

<p><strong>単位行列</strong> は次のようになります。</p>

<pre class="notranslate">     R G B A W
R' | 1 0 0 0 0 |
G' | 0 1 0 0 0 |
B' | 0 0 1 0 0 |
A' | 0 0 0 1 0 |
</pre>

<p>この中では、新しい値はすべて古い値のちょうど 1 倍の値であり、それ以外は何も加えられていません。ここから行列の操作を始めることをお勧めします。</p>

<h2 id="Usage_context" name="Usage_context">使用場面</h2>

<p>{{svginfo}}</p>

<h2 id="Attributes" name="Attributes">属性</h2>

<h3 id="Global_attributes" name="Global_attributes">グローバル属性</h3>

<ul>
 <li><a href="/ja/docs/Web/SVG/Attribute#Core_attributes">コア属性</a></li>
 <li><a href="/ja/docs/Web/SVG/Attribute#Presentation_attributes">プレゼンテーション属性</a></li>
 <li><a href="/ja/docs/Web/SVG/Attribute#Filter_primitive_attributes">フィルタープリミティブ属性</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
</ul>

<h3 id="Specific_attributes" name="Specific_attributes">固有の属性</h3>

<ul>
 <li>{{SVGAttr("in")}}</li>
 <li>{{SVGAttr("type")}}</li>
 <li>{{SVGAttr("values")}}</li>
</ul>

<h2 id="DOM_Interface" name="DOM_Interface">DOM インターフェイス</h2>

<p>この要素は {{domxref("SVGFEColorMatrixElement")}} インターフェイスを実装しています。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[19-24,31-33,40-42,49-50] notranslate">&lt;svg width="100%" height="100%" viewBox="0 0 150 500"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

  &lt;!-- ref --&gt;
  &lt;defs&gt;
    &lt;g id="circles"&gt;
      &lt;circle cx="30" cy="30" r="20" fill="blue" fill-opacity="0.5" /&gt;
      &lt;circle cx="20" cy="50" r="20" fill="green" fill-opacity="0.5" /&gt;
      &lt;circle cx="40" cy="50" r="20" fill="red" fill-opacity="0.5" /&gt;
    &lt;/g&gt;
  &lt;/defs&gt;
  &lt;use href="#circles" /&gt;
  &lt;text x="70" y="50"&gt;Reference&lt;/text&gt;

  &lt;!-- identity matrix --&gt;
  &lt;filter id="colorMeTheSame"&gt;
    &lt;feColorMatrix in="SourceGraphic"
        type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0" /&gt;
   &lt;/filter&gt;
  &lt;use href="#circles" transform="translate(0 70)" filter="url(#colorMeTheSame)" /&gt;
  &lt;text x="70" y="120"&gt;Identity matrix&lt;/text&gt;

  &lt;!-- Combine RGB into green matrix --&gt;
  &lt;filter id="colorMeGreen"&gt;
    &lt;feColorMatrix in="SourceGraphic"
        type="matrix"
        values="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0" /&gt;
  &lt;/filter&gt;
  &lt;use href="#circles" transform="translate(0 140)" filter="url(#colorMeGreen)" /&gt;
  &lt;text x="70" y="190"&gt;rgbToGreen&lt;/text&gt;

  &lt;!-- saturate --&gt;
  &lt;filter id="colorMeSaturate"&gt;
    &lt;feColorMatrix in="SourceGraphic"
        type="saturate"
        values="0.2" /&gt;
  &lt;/filter&gt;
  &lt;use href="#circles" transform="translate(0 210)" filter="url(#colorMeSaturate)" /&gt;
  &lt;text x="70" y="260"&gt;saturate&lt;/text&gt;

  &lt;!-- hueRotate --&gt;
  &lt;filter id="colorMeHueRotate"&gt;
    &lt;feColorMatrix in="SourceGraphic"
        type="hueRotate"
        values="180" /&gt;
  &lt;/filter&gt;
  &lt;use href="#circles" transform="translate(0 280)" filter="url(#colorMeHueRotate)" /&gt;
  &lt;text x="70" y="330"&gt;hueRotate&lt;/text&gt;

  &lt;!-- luminanceToAlpha --&gt;
  &lt;filter id="colorMeLTA"&gt;
    &lt;feColorMatrix in="SourceGraphic"
        type="luminanceToAlpha" /&gt;
  &lt;/filter&gt;
  &lt;use href="#circles" transform="translate(0 350)" filter="url(#colorMeLTA)" /&gt;
  &lt;text x="70" y="400"&gt;luminanceToAlpha&lt;/text&gt;
&lt;/svg&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 700, "/files/4371/test.png")}}</p>

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
   <td>{{SpecName('Filters 1.0', '#feColorMatrixElement', '&lt;feColorMatrix&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'filters.html#feColorMatrixElement', '&lt;feColorMatrix&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("svg.elements.feColorMatrix")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("animate")}}</li>
 <li>{{SVGElement("set")}}</li>
 <li>{{SVGElement("feBlend")}}</li>
 <li>{{SVGElement("feComponentTransfer")}}</li>
 <li>{{SVGElement("feComposite")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/ja/docs/Web/SVG/Tutorial/Filter_effects">SVG チュートリアル: フィルター効果</a></li>
</ul>
