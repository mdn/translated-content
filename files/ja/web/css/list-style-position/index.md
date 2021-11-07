---
title: list-style-position
slug: Web/CSS/list-style-position
tags:
  - CSS
  - CSS プロパティ
  - CSS リスト
  - Reference
  - list-style
  - list-style-position
translation_of: Web/CSS/list-style-position
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>list-style-position</code></strong> プロパティは、リストアイテムに対する {{cssxref("::marker")}} の位置を指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/list-style-position.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>多くの場合、一括指定の {{cssxref("list-style")}} を使うほうが便利です。</p>

<p><strong>メモ:</strong> このプロパティはリストアイテムに対して適用されます。つまり、 <code>{{cssxref("display")}}: list-item;</code> が指定された要素です。<a href="https://www.w3.org/TR/html5/rendering.html#lists">既定では</a>、 {{HTMLElement("li")}} 要素を含みます。このプロパティは継承されるので、親要素 (通常は {{HTMLElement("ol")}} や {{HTMLElement("ul")}}) に設定することで、すべてのリストアイテムに適用することができます。</p>

<p><strong>メモ:</strong> <code>list-style-position: inside</code> を指定したリスト要素の中で最初にブロック要素が配置された場合、その動作はブラウザーによって異なります。 Chrome と Safari では、この要素はマーカーボックスと同じ行に配置されますが、 Firefox、 Internet Explorer、 Opera では次の行に配置されます。 詳細については {{bug(36854)}} をご覧ください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
list-style-position: inside;
list-style-position: outside;

/* グローバル値 */
list-style-position: inherit;
list-style-position: initial;
list-style-position: unset;
</pre>

<p><code>list-style-position</code> プロパティには、下記の値の中の一つが指定されます。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>inside</code></dt>
 <dd>{{cssxref("::marker")}} はリストアイテムの最初の要素として配置されます。</dd>
 <dt><code>outside</code></dt>
 <dd>{{cssxref("::marker")}} は主要ブロックボックスの外に配置されます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html">&lt;ul class="inside"&gt;List 1
  &lt;li&gt;List Item 1-1&lt;/li&gt;
  &lt;li&gt;List Item 1-2&lt;/li&gt;
  &lt;li&gt;List Item 1-3&lt;/li&gt;
  &lt;li&gt;List Item 1-4&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="outside"&gt;List 2
  &lt;li&gt;List Item 2-1&lt;/li&gt;
  &lt;li&gt;List Item 2-2&lt;/li&gt;
  &lt;li&gt;List Item 2-3&lt;/li&gt;
  &lt;li&gt;List Item 2-4&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="inside-img"&gt;List 3
  &lt;li&gt;List Item 3-1&lt;/li&gt;
  &lt;li&gt;List Item 3-2&lt;/li&gt;
  &lt;li&gt;List Item 3-3&lt;/li&gt;
  &lt;li&gt;List Item 3-4&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush:css;">.inside {
  list-style-position: inside;
  list-style-type: square;
}

.outside {
  list-style-position: outside;
  list-style-type: circle;
}

.inside-img {
  list-style-position: inside;
  list-style-image: url("https://mdn.mozillademos.org/files/11979/starsolid.gif");
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 200, 420)}}</p>

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
   <td>{{SpecName('CSS3 Lists', '#list-style-position-property', 'list-style-position')}}</td>
   <td>{{Spec2('CSS3 Lists')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'generate.html#propdef-list-style-position', 'list-style-position')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.list-style-position")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}</li>
</ul>
