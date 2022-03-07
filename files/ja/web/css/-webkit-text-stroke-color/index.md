---
title: '-webkit-text-stroke-color'
slug: Web/CSS/-webkit-text-stroke-color
tags:
  - CSS
  - CSS プロパティ
  - Non-standard
  - Reference
  - WebKit 拡張
  - 標準外
translation_of: Web/CSS/-webkit-text-stroke-color
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p><strong><code>-webkit-text-stroke-color</code></strong> は {{Glossary("CSS")}} のプロパティで、テキストの文字の角の<a href="/ja/docs/Web/CSS/color_value">色</a>を示します。このプロパティが設定されない場合、 {{cssxref("color")}} プロパティの値が使用されます。</p>

<pre class="brush:css no-line-numbers notranslate">/* &lt;color&gt; 値 */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200, 100, 0);

/* グローバル値 */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>角の色。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML_Content" name="HTML_Content">HTML コンテンツ</h3>

<pre class="brush: html notranslate">&lt;p&gt;Text with stroke&lt;/p&gt;
&lt;input type="color" value="#ff0000"&gt;</pre>

<h3 id="CSS_Content" name="CSS_Content">CSS コンテンツ</h3>

<pre class="brush: css notranslate">p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff0000; /* ライブサンプルで変更可能 */
}
</pre>

<div class="hidden">
<h3 id="JavaScript_Content" name="JavaScript_Content">JavaScript コンテンツ</h3>

<pre class="brush: js notranslate">var colorPicker = document.querySelector("input");
colorPicker.addEventListener("change", function(evt) {
  document.querySelector("p").style.webkitTextStrokeColor = evt.target.value;
});</pre>
</div>

<p>{{EmbedLiveSample("Example", "500px", "100px")}}</p>

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
   <td>{{SpecName('Compat', '#the-webkit-text-stroke-color', '-webkit-text-stroke-color')}}</td>
   <td>{{Spec2('Compat')}}</td>
   <td>初回標準化</td>
  </tr>
  <tr>
   <td><a class="external external-icon" href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266--webkit-text-stroke-color" hreflang="en" lang="en">Safari CSS Reference<br>
    <small>文書内の '-webkit-text-stroke-color'</small></a></td>
   <td>標準外で非公式の文書化</td>
   <td>初回文書化</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.-webkit-text-stroke-color")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.webkit.org/blog/85/introducing-text-stroke/">Surfin' Safari blog post announcing this feature</a></li>
 <li><a href="https://css-tricks.com/adding-stroke-to-web-text/">CSS-Tricks article explaining this feature</a></li>
 <li>{{cssxref("-webkit-text-fill-color")}}</li>
 <li>{{cssxref("-webkit-text-stroke-width")}}</li>
 <li>{{cssxref("-webkit-text-stroke")}}</li>
</ul>
