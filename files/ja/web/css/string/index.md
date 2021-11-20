---
title: <string>
slug: Web/CSS/string
tags:
  - CSS
  - CSS データ型
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
  - ウェブ
  - レイアウト
translation_of: Web/CSS/string
---
<div>{{CSSRef}}</div>

<p><strong><code>&lt;string&gt;</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/CSS_Types">データ型</a>で、一連の文字列を表します。文字列は {{CSSxRef("content")}}, {{CSSxRef("font-family")}}, {{CSSxRef("quotes")}} など、数々の CSS プロパティで使用されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>&lt;string&gt;</code> データ型は任意の数の <a href="https://ja.wikipedia.org/wiki/Unicode">Unicode</a> 文字を、二重引用符 (<code>"</code>) または単一引用符 (<code>'</code>) で囲んで構成します。</p>

<p>多くの文字は文字通りに表現されます。またすべての文字は、それぞれの 16 進数の <a href="https://ja.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks">Unicode コードポイント</a>で表現することもできます。例えば、 <code>\22</code> は二重引用符を表し、 <code>\27</code> は単一引用符 (<code>'</code>)、 <code>\A9</code> は著作権記号 (<code>©</code>) を表します。</p>

<p>重要なことは、文字によっては他の方法として、バックスラッシュでエスケープすることもできます。これらには二重引用符で囲まれた文字列内で使われる二重引用符、単一引用符で囲まれた文字列内で使われる単一引用符、およびバックスラッシュ自身です。例えば、 <code>\\</code> は単一のバックスラッシュを生成します。</p>

<p>改行文字を出力するには、 <code>\A</code> 又は <code>\00000A</code> のように改行文字としてエスケープする必要があります。しかし、改行を行の末尾の文字として <code>\</code> でエスケープすると、コード内で文字列を複数行に渡らせることができます。</p>

<div class="note">
<p><strong>注:</strong> <a href="/ja/docs/Glossary/Entity">HTML エンティティ</a> (<code>&amp;nbsp;</code> や <code>&amp;#8212;</code> など) は、 CSS の <code>&lt;string&gt;</code> の中で使用することはできません。</p>
</div>

<h2 id="Examples">例</h2>

<h3 id="Examples_of_valid_strings">有効な文字列の例</h3>

<pre>/* 単純な文字列 */
"This string is demarcated by double quotes."
'This string is demarcated by single quotes.'

/* 文字のエスケープ */
"This is a string with \" an escaped double quote."
"This string also has \22 an escaped double quote."
'This is a string with \' an escaped single quote.'
'This string also has \27 an escaped single quote.'
"This is a string with \\ an escaped backslash."

/* 文字列内の改行 */
"This string has a \Aline break in it."

/* 2 行にわたる文字列 (これら 2 つの文字列は同じ出力になります) */
"A really long \
awesome string"
"A really long awesome string"
</pre>

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
			<td>{{SpecName('CSS3 Values', '#strings', '&lt;string&gt;')}}</td>
			<td>{{Spec2('CSS3 Values')}}</td>
			<td>CSS Level 2 (Revision 1) から重要な変更なし</td>
		</tr>
		<tr>
			<td>{{SpecName('CSS2.1', 'syndata.html#strings', '&lt;string&gt;')}}</td>
			<td>{{Spec2('CSS2.1')}}</td>
			<td>明示的定義; Unicode の 6 桁エスケープ文字を許容</td>
		</tr>
		<tr>
			<td>{{SpecName('CSS1', '', '&lt;string&gt;')}}</td>
			<td>{{Spec2('CSS1')}}</td>
			<td>暗黙的定義; Unicode の 4 桁エスケープ文字を許容</td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.types.string")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
	<li><a href="/ja/docs/Web/CSS/CSS_Values_and_Units">CSS の単位と値</a></li>
	<li><a href="/ja/docs/Web/CSS/CSS_Types">CSS の基本データ型</a></li>
	<li><a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Values_and_units">CSS 入門: 単位と値</a></li>
</ul>
