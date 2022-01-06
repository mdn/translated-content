---
title: CSS 関数表記法
slug: Web/CSS/CSS_Functions
tags:
  - CSS
  - CSS Data Type
  - CSS Function
  - Functional Notation
  - Functions
  - Reference
  - Types
  - data types
translation_of: Web/CSS/CSS_Functions
---
<div>{{CSSRef}}</div>

<p><strong>CSS 関数表記法</strong>は <a href="/ja/docs/Web/CSS/CSS_Values_and_Units">CSS 値</a>の一種で、より複雑なデータ型を表現したり、特別なデータ処理や計算を呼び出したりすることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">selector {
  property: functional-notation( [argument]? [, argument]! );
}</pre>

<p>構文は、<strong>関数表記の名前</strong>から始まり、左括弧 <code>(</code> で始まります。次に記法の引数が続き、関数は閉じ括弧 <code>)</code> で終わります。</p>

<p>関数は CSS のプロパティ値と同様の形式で複数の引数を取ることができます。ホワイトスペースは許可されていますが、括弧内では省略可能です。関数表記によって、複数の引数がカンマで区切られていたり、空白を使用していたりします。</p>

<h2 id="Index" name="Index">索引</h2>

<p>一連の CSS 仕様書で定義されている関数表記は以下のとおりです。</p>

<div class="index"><span>A</span>

<ul>
 <li>{{CSSxRef("abs", "abs()")}} (math)</li>
 <li>{{CSSxRef("acos", "acos()")}} (math)</li>
 <li>{{CSSxRef("font-variant-alternates/annotation()", "annotation()")}} (font)</li>
 <li>{{CSSxRef("asin", "asin()")}} (math)</li>
 <li>{{CSSxRef("atan", "atan()")}} (math)</li>
 <li>{{CSSxRef("atan2", "atan2()")}} (math)</li>
 <li>{{CSSxRef("attr")}}</li>
</ul>
<span>B</span>

<ul>
 <li>{{CSSxRef("filter-function/blur", "blur()")}} (filter)</li>
 <li>{{CSSxRef("filter-function/brightness", "brightness()")}} (filter)</li>
</ul>
<span>C</span>

<ul>
 <li>{{CSSxRef("calc")}} (math)</li>
 <li>{{CSSxRef("font-variant-alternates/character-variant()", "character-variant()")}} (font)</li>
 <li>{{CSSxRef("circle", "circle()")}} (shape)</li>
 <li>{{CSSxRef("clamp")}} (math)</li>
 <li>{{CSSxRef("color()")}} (colors)</li>
 <li>{{CSSxRef("conic-gradient")}}</li>
 <li>{{CSSxRef("cos", "cos()")}} (math)</li>
 <li>{{CSSxRef("counter")}}</li>
 <li>{{CSSxRef("counters")}}</li>
 <li>{{CSSxRef("filter-function/contrast", "contrast()")}} (filter)</li>
 <li>{{CSSxRef("cross-fade")}}</li>
 <li>{{CSSxRef("cubic-bezier", "cubic-bezier()")}}</li>
</ul>
<span>D</span>

<ul>
 <li>{{CSSxRef("device-cmyk", "device-cmyk()")}} (colors)</li>
 <li>{{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}} (filter)</li>
</ul>
<span>E</span>

<ul>
 <li>{{CSSxRef("element")}}</li>
 <li>{{CSSxRef("env")}}</li>
 <li>{{CSSxRef("ellipse", "ellipse()")}} (shape)</li>
 <li>{{CSSxRef("exp", "exp()")}} (math)</li>
</ul>
<span>F</span>

<ul>
 <li>{{CSSxRef("fit-content")}}</li>
 <li>{{CSSxRef("format", "format()")}}</li>
</ul>
<span>G</span>

<ul>
 <li>{{CSSxRef("filter-function/grayscale", "grayscale()")}} (filter)</li>
</ul>
<span>H</span>

<ul>
 <li>{{CSSxRef("hsl", "hsl()")}} (colors)</li>
 <li>{{CSSxRef("hsla", "hsla()")}} (colors)</li>
 <li>{{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}} (filter)</li>
 <li>{{CSSxRef("hwb", "hwb()")}} (colors)</li>
 <li>{{CSSxRef("hypot", "hypot()")}} (math)</li>
</ul>
<span>I</span>

<ul>
 <li>{{CSSxRef("imagefunction", "image()")}}</li>
 <li>{{CSSxRef("image-set")}}</li>
 <li>{{CSSxRef("inset()")}} (shape)</li>
 <li>{{CSSxRef("filter-function/invert", "invert()")}} (filter)</li>
</ul>
<span>L</span>

<ul>
 <li>{{CSSxRef("lab", "lab()")}} (colors)</li>
 <li>{{CSSxRef("lch", "lch()")}} (colors)</li>
 <li>{{CSSxRef("leader", "leader()")}}</li>
 <li>{{CSSxRef("linear-gradient")}}</li>
 <li>{{CSSxRef("local", "local()")}}</li>
 <li>{{CSSxRef("log", "log()")}} (math)</li>
</ul>
<span>M</span>

<ul>
 <li>{{CSSxRef("transform-function/matrix", "matrix()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/matrix3d", "matrix3d()")}} (transform)</li>
 <li>{{CSSxRef("max")}} (math)</li>
 <li>{{CSSxRef("min")}} (math)</li>
 <li>{{CSSxRef("minmax")}} (math)</li>
 <li>{{CSSxRef("mod", "mod()")}} (math)</li>
</ul>
<span>O</span>

<ul>
 <li>{{CSSxRef("filter-function/opacity", "opacity()")}} (filter)</li>
 <li>{{CSSxRef("font-variant-alternates/ornaments()", "ornaments()")}} (font)</li>
</ul>
<span>P</span>

<ul>
 <li>{{CSSxRef("paint")}}</li>
 <li>{{CSSxRef("path", "path()")}} (shape)</li>
 <li>{{CSSxRef("transform-function/perspective", "perspective()")}} (transform)</li>
 <li>{{CSSxRef("polygon", "polygon()")}} (shape)</li>
 <li>{{CSSxRef("pow", "pow()")}} (math)</li>
</ul>
<span>R</span>

<ul>
 <li>{{CSSxRef("radial-gradient")}}</li>
 <li>{{CSSxRef("rem", "rem()")}} (math)</li>
 <li>{{CSSxRef("repeat")}}</li>
 <li>{{CSSxRef("repeating-linear-gradient")}}</li>
 <li>{{CSSxRef("repeating-radial-gradient")}}</li>
 <li>{{CSSxRef("repeating-conic-gradient")}}</li>
 <li>rgb() (colors)</li>
 <li>rgba() (colors)</li>
 <li>{{CSSxRef("transform-function/rotate", "rotate()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/rotate3d", "rotate3d()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/rotateX", "rotateX()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/rotateY", "rotateY()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/rotateZ", "rotateZ()")}} (transform)</li>
 <li>{{CSSxRef("round", "round()")}} (math)</li>
</ul>
<span>S</span>

<ul>
 <li>{{CSSxRef("filter-function/saturate", "saturate()")}} (filter)</li>
 <li>{{CSSxRef("transform-function/scale", "scale()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/scale3d", "scale3d()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/scaleX", "scaleX()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/scaleY", "scaleY()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/scaleZ", "scaleZ()")}} (transform)</li>
 <li>{{CSSxRef("filter-function/sepia", "sepia()")}} (filter)</li>
 <li>{{CSSxRef("sign", "sign()")}} (math)</li>
 <li>{{CSSxRef("sin", "sin()")}} (math)</li>
 <li>{{CSSxRef("transform-function/skew", "skew()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/skewX", "skewX()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/skewY", "skewY()")}} (transform)</li>
 <li>{{CSSxRef("sqrt", "sqrt()")}} (math)</li>
 <li>{{CSSxRef("steps", "steps()")}}</li>
 <li>{{CSSxRef("font-variant-alternates/styleset()", "styleset()")}} (font)</li>
 <li>{{CSSxRef("font-variant-alternates/stylistic()", "stylistic()")}} (font)</li>
 <li>{{CSSxRef("font-variant-alternates/swash()", "swash()")}} (font)</li>
 <li>{{CSSxRef("symbols", "symbols()")}}</li>
</ul>
<span>T</span>

<ul>
 <li>{{CSSxRef("tan", "tan()")}} (math)</li>
 <li>{{CSSxRef("target-counter", "target-counter()")}}</li>
 <li>{{CSSxRef("target-counters", "target-counters()")}}</li>
 <li>{{CSSxRef("target-text", "target-text()")}}</li>
 <li>{{CSSxRef("toggle", "toggle()")}}</li>
 <li>{{CSSxRef("transform-function/translate", "translate()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/translate3d", "translate3d()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/translateX", "translateX()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/translateY", "translateY()")}} (transform)</li>
 <li>{{CSSxRef("transform-function/translateZ", "translateZ()")}} (transform)</li>
</ul>
<span>U</span>

<ul>
 <li>{{CSSxRef("url()", "url()")}}</li>
</ul>
<span>V</span>

<ul>
 <li>{{CSSxRef("var")}}</li>
</ul>
</div>

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
   <td>{{SpecName("CSS4 Values")}}</td>
   <td>{{Spec2("CSS4 Values")}}</td>
   <td><code>toggle()</code>, <code>attr()</code>, <code>calc()</code>, <code>min()</code>, <code>max()</code>, <code>clamp()</code>, <code>round()</code>, <code>mod()</code>, <code>rem()</code>, <code>mod()</code>, <code>sin()</code>, <code>cos()</code>, <code>tan()</code>, <code>asin()</code>, <code>acos()</code>, <code>atan()</code>, <code>atan2()</code>, <code>pow()</code>, <code>sqrt()</code>, <code>hypot()</code>, <code>log()</code>, <code>exp()</code>, <code>abs()</code>, <code>sign()</code> の関数表記を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Values")}}</td>
   <td>{{Spec2("CSS3 Values")}}</td>
   <td><code>calc()</code> の関数表記を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS4 Colors")}}</td>
   <td>{{Spec2("CSS4 Colors")}}</td>
   <td><code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code> の関数表記にカンマなしの構文を追加。<br>
    <code>rgb()</code> と <code>hsl()</code> にアルファ値を許可し、 <code>rgba()</code> と <code>hsla()</code> をそれらの (非推奨の) 別名とした。<br>
    <code>hwb()</code>, <code>device-cmyk()</code>, <code>color()</code> 関数を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Colors")}}</td>
   <td>{{Spec2("CSS3 Colors")}}</td>
   <td><code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code> の関数表記を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS4 Images")}}</td>
   <td>{{Spec2("CSS4 Images")}}</td>
   <td><code>element()</code>, <code>image()</code>, <code>image-set()</code>, <code>conic-gradient()</code> の関数表記を追加。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Values_and_Units">CSS 値と単位</a></li>
 <li><a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Values_and_units">CSS 入門: 値と単位</a></li>
</ul>
