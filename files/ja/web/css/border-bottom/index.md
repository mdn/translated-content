---
title: border-bottom
slug: Web/CSS/border-bottom
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-shorthand-property'
translation_of: Web/CSS/border-bottom
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>border-bottom</code></strong> は<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定</a>の <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の下側の<a href="/ja/docs/Web/CSS/border">境界</a>のプロパティをすべて設定します。</span></p>

<div>{{EmbedInteractiveExample("pages/css/border-bottom.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>他の一括指定プロパティと同様に、 <code>border-bottom</code> は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。つまり・・・</p>

<pre class="brush: css notranslate">border-bottom-style: dotted;
border-bottom: thick green;
</pre>

<p>・・・は、実際には以下と同じです・・・</p>

<pre class="brush: css notranslate">border-bottom-style: dotted;
border-bottom: none thick green;
</pre>

<p>・・・そして、 <code>border-bottom</code> の前で設定された {{cssxref("border-bottom-style")}} の値は無視されます。 {{cssxref("border-bottom-style")}} の既定値は <code>none</code> なので、 <code>border-style</code> の部分の設定は境界線なしとなります。</p>

<h2 id="Constituent_properties" name="Constituent_properties">構成要素のプロパティ</h2>

<p>このプロパティは以下の CSS プロパティの一括指定です。</p>

<ul>
 <li>{{cssxref("border-bottom-color")}}</li>
 <li>{{cssxref("border-bottom-style")}}</li>
 <li>{{cssxref("border-bottom-width")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers notranslate">border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;
</pre>

<p>一括指定プロパティの3つの値は任意の順序で指定可能で、また、1つまたは2つの値を省略することができます。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;br-width&gt;</code></dt>
 <dd>{{cssxref("border-bottom-width")}} を参照してください。</dd>
 <dt><code>&lt;br-style&gt;</code></dt>
 <dd>{{cssxref("border-bottom-style")}} を参照してください。</dd>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd>{{cssxref("border-bottom-color")}} を参照してください。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Applying_a_bottom_border" name="Applying_a_bottom_border">下の境界の適用</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;
  このボックスには下側に境界線があります。
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
</pre>

<h4 id="Results" name="Results">結果</h4>

<p>{{EmbedLiveSample('Applying_a_bottom_border')}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#propdef-border-bottom', 'border-bottom')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>直接的な変更はないが、 {{cssxref("border-bottom-color")}} に適用される値が変更された。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#propdef-border-bottom', 'border-bottom')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>有意な変更点なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#border-bottom', 'border-bottom')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-bottom")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("border")}}</li>
 <li>{{cssxref("border-block")}}</li>
 <li>{{cssxref("outline")}}</li>
</ul>
