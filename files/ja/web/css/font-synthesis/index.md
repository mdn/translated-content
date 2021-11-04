---
title: font-synthesis
slug: Web/CSS/font-synthesis
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/font-synthesis
---
<div>{{CSSRef}}</div>

<p><strong><code>font-synthesis</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、太字やイタリックの字体がない場合に、ブラウザーが合成してよいかどうかを制御します。</p>

<div>{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>このプロパティは以下の形のうちの一つを取ることができます。</p>

<ul>
 <li>キーワード値の <code>none</code></li>
 <li>キーワード値の <code>weight</code> と <code>style</code> のどちらか</li>
 <li>キーワード値の <code>weight</code> と <code>style</code> の両方</li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>太字およびイタリックの字体を合成しないことを示すキーワードです。</dd>
 <dt><code>weight</code></dt>
 <dd>必要であれば、太字の字体を合成してよいことを示すキーワードです。</dd>
 <dt><code>style</code></dt>
 <dd>必要であれば、イタリックの字体を合成してよいことを示すキーワードです。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>ほとんどの標準的な欧文フォントにはイタリック体や太字の変化形が含まれていますが、多くのノベルティフォントには含まれていません。中国語、日本語、韓国語、その他の表語文字に使用されているフォントは、これらの変化形を含まない傾向があり、それらを合成するとテキストの可読性が損なわれる可能性があります。このような場合には、ブラウザーの既定のフォント合成機能をオフにしたほうがよいかもしれません。</p>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Disabling_font_synthesis" name="Disabling_font_synthesis">フォント合成の無効化</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;em class="syn"&gt;Synthesize me! 站直。&lt;/em&gt;
&lt;br/&gt;
&lt;em class="no-syn"&gt;Don't synthesize me! 站直。&lt;/em&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">em {
  font-weight: bold;
}
.syn {
  font-synthesis: style weight;
}
.no-syn {
  font-synthesis: none;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Disabling_font_synthesis', '', '50') }}</p>

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
   <td>{{SpecName('CSS3 Fonts', '#propdef-font-synthesis', 'font-synthesis')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.font-synthesis")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("font-style")}}</li>
 <li>{{cssxref("font-weight")}}</li>
</ul>
