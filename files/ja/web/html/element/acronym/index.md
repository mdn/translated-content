---
title: <acronym>
slug: Web/HTML/Element/acronym
tags:
  - Element
  - HTML
  - 'HTML:Flow content'
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/acronym
---
<div>{{obsolete_header}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>HTML の頭字語要素 (<code>&lt;acronym&gt;</code>) は、頭字語または略語の単語を構成する文字の並びを明示することができます。</p>

<div class="note">
<p><strong>使用上の注意:</strong> この要素は HTML5 にて廃止されており、使用するべきではありません。代わりに {{HTMLElement("abbr")}} 要素を使用してください。</p>
</div>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素は、全ての要素に共通の<a class="new " href="/ja/docs/HTML/global_attributes" rel="internal" title="HTML/global attributes">グローバル属性</a>のみを持ちます。</p>

<h2 id="DOM_Interface" name="DOM_Interface">DOM インターフェイス</h2>

<p>この要素は {{domxref('HTMLElement')}} インターフェイスを提供します。</p>

<div class="note"><strong>実装上の注意: </strong> Gecko 1.9.2 まで、 Firefox はこの要素に {{domxref('HTMLSpanElement')}} インターフェイスを実装していました。</div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:html notranslate">&lt;p&gt;The &lt;acronym title="World Wide Web"&gt;WWW&lt;/acronym&gt; is only a component of the Internet.&lt;/p&gt;
</pre>

<h2 id="Default_styling" name="Default_styling">既定のスタイル</h2>

<p>このタグの目的は単に作者の利便性のためのものであり、ブラウザーによって既定のスタイルは様々です。</p>

<ul>
 <li>Internet Explorer などの一部のブラウザーでは、この要素に {{HTMLElement("span")}} 要素と異なるスタイル付けは行いません。</li>
 <li>Opera、Firefox、Chrome などでは、この要素の内容に点線の下線が付きます。</li>
 <li>ブラウザーによっては点線の下線を引くだけでなく、スモールキャップスにします。このスタイルを抑制するには、 CSS で {{cssxref('font-variant')}}<code>: none</code> などをつけます。</li>
</ul>

<p>よって、ウェブの作者は大体既定のスタイルに依存しないことが強く推奨されます。</p>

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
   <td>{{SpecName('HTML4.01', 'struct/text.html#edef-ACRONYM', '&lt;acronym&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.acronym")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTML の {{htmlelement("abbr")}} 要素</li>
</ul>

<div>{{HTMLRef}}</div>
