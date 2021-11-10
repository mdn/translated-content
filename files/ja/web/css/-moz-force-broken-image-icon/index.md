---
title: '-moz-force-broken-image-icon'
slug: Web/CSS/-moz-force-broken-image-icon
tags:
  - CSS
  - NeedsCompatTable
  - Non-standard
  - Reference
translation_of: Web/CSS/-moz-force-broken-image-icon
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>Mozillaの拡張CSSプロパティである <strong><code>-moz-force-broken-image-icon</code></strong> は、画像が壊れているときに表示されるイメージアイコンを、たとえ <code>alt</code> 属性を持っていたとしても、強制的に表示させるために使用されます。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;integer&gt;")}}</dt>
 <dd>プロパティの値に <code>1</code> を指定した場合、その画像が {{HTMLElement("img", "<code>alt</code>", "#attr-alt")}} 属性を持っていたとしても、壊れたイメージアイコンが表示されます。<code>0</code> を指定した場合、通常通り <code>alt</code> 属性のみが表示されます。</dd>
</dl>

<div class="note"><strong>注:</strong> プロパティの値に <code>1</code> を指定した場合もなお、 <code>alt</code> 属性は壊れたイメージアイコンの隣に同時に表示されます。</div>

<h3 id="Formal_syntax" name="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush:html;">&lt;img src='/broken/image/link.png' alt='Broken image link'&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush:css;">img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}</pre>

<h3 id="Result" name="Result">Result</h3>

<p>{{ EmbedLiveSample('Example','125','125','/files/4619/broken%20image%20link.png') }}</p>

<div class="note"><strong>注:</strong> <code>-moz-force-broken-image-icon</code> の値に <code>1</code> を指定した場合、その画像にwidthとheightを明示的に指定しない限り、壊れたイメージアイコンは表示されず、 <code>alt</code> 属性も非表示になります。</div>

<h2 id="Notes" name="Notes">注記</h2>

<ul>
 <li>このプロパティは Geckoベースのブラウザでのみ使用できます。</li>
 <li>このプロパティの使用は非推奨です。代わりに適切な <code>alt</code> 属性を使用してください。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<p>どの仕様にも記載されていません。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ Bug(58646) }}</li>
</ul>
