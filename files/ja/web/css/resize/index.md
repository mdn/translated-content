---
title: resize
slug: Web/CSS/resize
tags:
  - CSS
  - CSS プロパティ
  - CSS 基本ユーザーインターフェイス
  - Reference
translation_of: Web/CSS/resize
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>resize</code></strong> プロパティは、要素の寸法を変更できるかどうか、もしそうなら、どの方向に変更できるかを設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/resize.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* キーワード値 */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* グローバル値 */
resize: inherit;
resize: initial;
resize: unset;</pre>

<p><code>resize</code> プロパティは以下の挙げた単一のキーワード値で指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>ユーザーが要素の寸法を制御する方法を提供しません。</dd>
 <dt><code>both</code></dt>
 <dd>要素はユーザーが寸法を変更できる仕組みを、垂直方向と水平方向の両方について表示します。</dd>
 <dt><code>horizontal</code></dt>
 <dd>要素はユーザーが寸法を変更できる仕組みを、<em>水平方向</em>について表示します。</dd>
 <dt><code>vertical</code></dt>
 <dd>要素はユーザーが寸法を変更できる仕組みを、<em>垂直方向</em>について表示します。</dd>
 <dt><code>block</code> {{experimental_inline}}</dt>
 <dd>要素はユーザーが寸法を変更できる仕組みを、<em>ブロック方向</em>について表示します ({{cssxref("writing-mode")}} と {{cssxref("direction")}} の値によって、水平方向または垂直方向のどちらかになります)。</dd>
 <dt><code>inline</code> {{experimental_inline}}</dt>
 <dd>要素はユーザーが寸法を変更できる仕組みを、<em>インライン方向</em>について表示します ({{cssxref("writing-mode")}} と {{cssxref("direction")}} の値によって、水平方向または垂直方向のどちらかになります)。</dd>
</dl>

<div class="note">
<p><strong>メモ:</strong> <code>resize</code> は以下の場合は適用されません。</p>

<ul>
 <li>インライン要素</li>
 <li>{{cssxref("overflow")}} プロパティが <code>visible</code> に設定されたブロック要素</li>
</ul>
</div>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Disabling_resizability_of_textareas" name="Disabling_resizability_of_textareas">テキストエリアの寸法の変更を無効化</h3>

<p>多くのブラウザーでは、 {{HTMLElement("textarea")}} 要素は既定で寸法が変更できます。 <code>resize</code> プロパティでこの動作を上書きすることができます。</p>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">textarea {
  resize: none; /* Disables resizability */
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;textarea&gt;Type some text here.&lt;/textarea&gt;</pre>

<h4 id="結果">結果</h4>

<p>{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}</p>

<h3 id="任意の要素に対する_resize_の使用">任意の要素に対する resize の使用</h3>

<p><code>resize</code> プロパティを使用して、任意の要素の寸法を変更可能にすることができます。以下の例では、寸法が変更可能な {{HTMLElement("div")}} の中に、寸法が変更可能な段落 ({{HTMLElement("p")}} 要素) を配置しています。</p>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}  </pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div class="resizable"&gt;
  &lt;p class="resizable"&gt;
    This paragraph is resizable in all directions, because
    the CSS `resize` property is set to `both` on this element.
  &lt;/p&gt;
&lt;/div&gt;  </pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}</p>

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
   <td>{{SpecName('CSS Logical Properties', '#resize', 'resize')}}</td>
   <td>{{Spec2('CSS Logical Properties')}}</td>
   <td><code>block</code> と <code>inline</code> の値を追加</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Basic UI', '#resize', 'resize')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.resize")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("textarea")}}</li>
</ul>
