---
title: caption-side
slug: Web/CSS/caption-side
tags:
  - CSS
  - CSS Property
  - CSS Tables
  - Reference
translation_of: Web/CSS/caption-side
---
<div>{{CSSRef}}</div>

<p><strong><code>caption-side</code></strong> は、表 ({{htmlelement("table")}}) の {{HTMLElement("caption")}} の配置位置を指定する <a href="/ja/docs/CSS" title="CSS">CSS</a> プロパティです。</p>

<div>{{EmbedInteractiveExample("pages/css/caption-side.html")}}</div>



<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* 方向を示す値 */
caption-side: top;
caption-side: bottom;

/* 警告: 非標準の値 */
caption-side: left;
caption-side: right;
caption-side: top-outside;
caption-side: bottom-outside;

/* グローバル値 */
caption-side: inherit;
caption-side: initial;
caption-side: unset;
</pre>

<p>このプロパティの値は、表の {{cssxref('writing-mode')}} に対して相対的です。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>top</code></dt>
 <dd>キャプションボックスを表の上に配置することを示すキーワードです。</dd>
 <dt><code>bottom</code></dt>
 <dd>キャプションボックスを表の下に配置することを示すキーワードです。</dd>
 <dt><code>left</code> {{non-standard_inline}}</dt>
 <dd>キャプションボックスを表の左に配置することを示すキーワードです。</dd>
 <dd>{{Note("この値は CSS 2 で提案されましたが、最終的な CSS 2.1 仕様から削除されており、非標準です。")}}</dd>
 <dt><code>right</code> {{non-standard_inline}}</dt>
 <dd>キャプションボックスを表の右に配置することを示すキーワードです。</dd>
 <dd>{{Note("この値は CSS 2 で提案されましたが、最終的な CSS 2.1 仕様から削除されており、非標準です。")}}</dd>
 <dt><code>top-outside</code> {{non-standard_inline}}</dt>
 <dd>キャプションボックスを表の上に配置することを示すキーワードです。ただし、キャプションの幅や水平方向の配置は、表の水平方向のレイアウトに束縛されません。<br>
 {{Note("CSS 2.1 仕様では、CSS 2 仕様で値 <code>top</code> について異なる動作を説明していたとの注記があります。この動作は将来の仕様書で、この値を使用して再導入する予定です。")}}</dd>
 <dt><code>bottom-outside</code> {{non-standard_inline}}</dt>
 <dd>キャプションボックスを表の下に配置することを示すキーワードです。ただし、キャプションの幅や水平方向の配置は、表の水平方向のレイアウトに束縛されません。<br>
 {{Note("CSS 2.1 仕様では、CSS 2 仕様で値 <code>bottom</code> について異なる動作を説明していたとの注記があります。この動作は将来の仕様書で、この値を使用して再導入する予定です。")}}</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式構文</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table class="top"&gt;
  &lt;caption&gt;Caption ABOVE the table&lt;/caption&gt;
  &lt;tr&gt;
    &lt;td&gt;Some data&lt;/td&gt;
    &lt;td&gt;Some more data&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

&lt;br&gt;

&lt;table class="bottom"&gt;
  &lt;caption&gt;Caption BELOW the table&lt;/caption&gt;
  &lt;tr&gt;
    &lt;td&gt;Some data&lt;/td&gt;
    &lt;td&gt;Some more data&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
</pre>

<h3 id="出力">出力</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS Logical Properties', '#caption-side', 'caption-side')}}</td>
   <td>{{Spec2('CSS Logical Properties')}}</td>
   <td>値 <code>top</code> および <code>bottom</code> は、<code>writing-mode</code> の値に対して相対的であることを定義</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'tables.html#caption-position', 'caption-side')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>最初の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>



<p>{{Compat("css.properties.caption-side")}}</p>
