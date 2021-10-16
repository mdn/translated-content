---
title: url()
slug: Web/CSS/url()
tags:
  - CSS
  - CSS Function
  - Function
  - Layout
  - Reference
  - Web
  - url()
browser-compat: css.types.url
translation_of: Web/CSS/url()
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><code><strong>url()</strong></code> は <a href="/ja/docs/Web/CSS">CSS</a> 関数で、ファイルを含めるために使用します。引数は絶対 URL、相対 URL、 データ URI の何れかです <code><strong>url()</strong></code> 関数は {{cssxref('attr()')}} 関数のように、他の CSS 関数に引数として渡すことができます。値を使用するプロパティに応じて、求められるリソースは画像、フォント、スタイルシートの何れかになります。 url() 関数表記は the &lt;url&gt; データ型の値になります。</span></p>

<div class="notecard note">
<p><strong>URI か URL か？</strong> {{Glossary("URI")}} と {{Glossary("URL")}} との間には違いがあります。 URI は単純にリソースを識別します。 URL は URI の一種で、リソースの<em>場所</em>を記述します。 URI はリソースの URL または名前 ({{Glossary("URN")}}) であることがあります。</p>

<p>CSS Level 1 では、 <code>url()</code> 関数記法は真に URL のみを記述していました。 CSS Level 2 では、 <code>url()</code> の定義はあらゆる URI、 URL または URN のどちらかを記述するように拡張されました。ややこしいことに、これは <code>url()</code> を CSS の <code>&lt;uri&gt;</code> データ型の生成のために使用することができることを意味していました。この変更は紛らわしいばかりでなく、議論になりやすく、 URN が実際の CSS で使用されることはほぼあり得ないため不必要でした。混乱を軽減するために、 CSS Level 3 ではより狭い初めの定義まで戻りました。現在では、 <code>url()</code> は真に <code>&lt;url&gt;</code> のみを記述します。</p>
</div>

<pre class="brush: css no-line-numbers">/* 単純な使い方 */
url(https://example.com/images/myImg.jpg);
url(data:image/png;base64,iRxVB0…);
url(myFont.woff);
url(#IDofSVGpath);

/* 関連するプロパティ */
background-image: url("https://mdn.mozillademos.org/files/16761/star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("pdficon.jpg");
cursor: url(mycursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantasticfont.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* 代替付きのプロパティ */
cursor: url(pointer.cur), pointer;

/* 関連する一括指定プロパティ */
background: url('https://mdn.mozillademos.org/files/16761/star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* 他の CSS 関数の引数として */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* 一括指定ではない複数の値の一部として */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* @-規則 */
@document url("https://www.example.com/") { ... } {{Experimental_Inline}}
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
</pre>

<p>相対 URL が使用された場合は、 (ウェブページの URL からではなく) スタイルシートの URL からの相対となります。</p>

<p class="task-list-item"><code><strong>url()</strong></code> 関数は {{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, <a href="/ja/docs/Web/CSS/@font-face">@font-face</a> ブロック内での <a href="/ja/docs/Web/CSS/@font-face/src">src</a>, <a href="/ja/docs/Web/CSS/@counter-style/symbols">@counter-style/symbol</a> 値として使用することができます。</p>

<h2 id="Syntax">構文</h2>

<h3 id="Values">値</h3>

<dl>
	<dt><code>&lt;string&gt;</code></dt>
	<dd>
	<dl>
		<dt>&lt;url&gt;</dt>
		<dd>含まれるウェブリソースへの相対アドレス、絶対アドレス、ポインターのURL、またはデータ URI であり、任意で単一引用符または二重引用符を使用することができます。 URL に括弧、空白、引用符が含まれている場合で、これらの文字がエスケープされていないか、アドレスに 0x7e 以上の制御文字が含まれている場合、引用符は必須です。二重引用符は二重引用符の中に入れることはできず、単一引用符はエスケープされない限り単一引用符の中に入れることはできません。以下のものはすべて有効であり、同等です。
		<pre class="syntaxbox notranslate">&lt;css_property&gt;: url("https://example.com/image.png")
&lt;css_property&gt;: url('https://example.com/image.png')
&lt;css_property&gt;: url(https://example.com/image.png)</pre>

		<p>URL を引用符なしで書く場合は、 URL に含まれる括弧、ホワイトスペース文字、単一引用符 (<code>'</code>)、二重引用符 (<code>"</code>) の前にバックスラッシュを (<code>\</code>) を使用してください。</p>
		</dd>
		<dt>パス</dt>
		<dd><a href="/ja/docs/Web/SVG/Tutorial/Basic_Shapes">SVG 図形</a>の ID への参照 -- <code>circle</code>, <code>ellipse</code>, <code>line</code>, <code>path</code>, <code>polygon</code>, <code>polyline</code>, <code>rect</code> -- パスとして図形の形状を使用します。</dd>
	</dl>
	</dd>
	<dt><code>&lt;url-modifier&gt;</code> {{Experimental_Inline}}</dt>
	<dd>将来的に <code>url()</code> 関数は、 URL 文字列の意味を変更する修飾子、識別子、関数記法を指定することに対応するかもしれません。これはまだ対応されておらず、仕様書では完全には定義されていません。</dd>
</dl>

<h3 id="Formal_syntax">形式文法</h3>

<pre class="brush: css">url( <a href="/ja/docs/Web/CSS/string">&lt;string&gt;</a> &lt;url-modifier&gt;* )</pre>

<h2 id="Examples">例</h2>

<h3 id="A_url_used_in_the_background_property">background プロパティで使用される URL</h3>

<pre>.topbanner {
  background: url("topbanner.png") #00D no-repeat fixed;
}
</pre>

<h3 id="A_url_loading_an_image_as_a_list_bullet">リストの先頭記号として使用される画像を読み込む URL</h3>

<pre>ul {
  list-style: square url(http://www.example.com/redball.png);
}</pre>

<h3 id="Usage_in_the_content_property">content プロパティの使用</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css highlight[2]">li::after {
  content: ' - ' url(https://mdn.mozillademos.org/files/16761/star.gif);
}</pre>

<h4 id="Result">結果</h4>

<p>{{EmbedLiveSample("Usage_in_the_content_property", "100%", 110)}}</p>

<h3 id="Using_a_data-uri">data-uri の使用</h3>

<div id="color-value">
<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div class="background"&gt;&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<div class="hidden">
<pre class="brush: css">.background {
  height: 100vh;
}</pre>
</div>

<pre class="brush: css highlight[6]">.background {
  background: yellow;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}</pre>
</div>

<p>{{EmbedLiveSample("Using_a_data-uri", "100%", 50)}}</p>

<h3 id="Usage_in_filters">フィルターでの使用</h3>

<p>URL がフィルターへのパスとして使用される場合、 URL は以下のどちらかでなければなりません。</p>

<ol>
	<li>SVG ファイルへのパスに、追加されるフィルターの ID が付いたもの。</li>
	<li>SVG がページ内にある場合は、フィルターの ID。</li>
</ol>

<pre>.blur {
  filter: url(my-file.svg#svg-blur); /* the URL of an SVG file used as a filter */
}

.inline-blur {
  filter: url(#svg-blur); /* the ID of an SVG that is embedded in the HTML page */
}</pre>

<h2 id="Specifications">仕様書</h2>

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
			<td>{{SpecName('CSS4 Values', '#urls', 'url()')}}</td>
			<td>{{Spec2('CSS4 Values')}}</td>
			<td></td>
		</tr>
		<tr>
			<td>{{SpecName('CSS3 Values', '#urls', 'url()')}}</td>
			<td>{{Spec2('CSS3 Values')}}</td>
			<td>CSS 第2水準 (第1稿) から重要な変更なし</td>
		</tr>
		<tr>
			<td>{{Specname('CSS2.1', 'syndata.html#uri', 'uri()')}}</td>
			<td>{{Spec2('CSS2.1')}}</td>
			<td>CSS 第1水準から重要な変更なし</td>
		</tr>
		<tr>
			<td>{{SpecName('CSS1', '#url', 'url()')}}</td>
			<td>{{Spec2('CSS1')}}</td>
			<td>初回定義</td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat}}</div>

<h2 id="See_also">関連情報</h2>

<ul>
	<li>{{cssxref("&lt;gradient&gt;")}}</li>
	<li>{{cssxref("element()")}}</li>
	<li>{{cssxref("image()")}}</li>
	<li>{{cssxref("image-set()")}}</li>
	<li>{{cssxref("cross-fade()")}}</li>
</ul>
