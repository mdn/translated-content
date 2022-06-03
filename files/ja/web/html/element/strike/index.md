---
title: <strike>
slug: Web/HTML/Element/strike
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/strike
---
<p>{{HTMLRef}}{{Obsolete_header("HTML5")}}</p>

<p><strong>HTML の <code>&lt;strike&gt;</code> 要素</strong> (または <em>HTML 取り消し線要素</em>) は、テキストの上に取り消し線 (水平線) を配置します。</p>

<div class="blockIndicator note">
<p><strong>使用上のメモ:</strong> この要素は HTML 4 および XHTML 1 で非推奨になり、 HTML5 で廃止されました。意味的に適切であれば、すなわち、<em>削除された</em>コンテンツを表すのであれば、代わりに {{HTMLElement("del")}} を使用してください。それ以外の場合は {{HTMLElement("s")}} を使用してください。</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{DOMxRef("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:html notranslate">&amp;lt;strike&amp;gt;:	&lt;strike&gt;今日のおすすめ: サーモン&lt;/strike&gt; 売り切れ&lt;br /&gt;
&amp;lt;s&amp;gt;:	&lt;s&gt;今日のおすすめ: サーモン&lt;/s&gt; 売り切れ
</pre>

<p id="Result">このコードの表示結果は次の通りです。</p>

<p>{{EmbedLiveSample("Example")}}</p>

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
   <td>{{SpecName("HTML5 W3C", "obsolete.html#strike", "&lt;strike&gt;")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>{{HTMLElement("del")}} および {{HTMLElement("s")}} に置き換えて廃止。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML4.01", "/present/graphics.html#edef-STRIKE", "&lt;strike&gt;")}}</td>
   <td>{{Spec2("HTML4.01")}}</td>
   <td>{{HTMLElement("del")}} および {{HTMLElement("s")}} に置き換えて非推奨化。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.strike")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("s")}} 要素</li>
 <li>{{HTMLElement("del")}} 要素 (データが<em>削除された</em>場合に使用)</li>
 <li>CSS の {{cssxref("text-decoration")}} プロパティ (打消し線のスタイルを実現するために用いることができる)</li>
</ul>
