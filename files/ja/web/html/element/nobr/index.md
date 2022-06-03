---
title: '<nobr>: 無改行文字列要素（廃止）'
slug: Web/HTML/Element/nobr
tags:
  - Element
  - HTML
  - Non-standard
  - Obsolete
  - Reference
  - Web
  - nobr
translation_of: Web/HTML/Element/nobr
---
<div>{{HTMLRef}}{{Non-standard_Header}}{{Obsolete_Header}}</div>

<p>標準外かつ廃止された HTML の <code>&lt;nobr&gt;</code> 要素は、その内包する文字列の自動改行を無効化します。行内におさまらない文字列は、領域からはみ出てレンダリングされるか、スクロールバーを伴って表示されます。</p>

<div class="blockIndicator warning">
<p>この要素は標準の要素であったことは<em>なく</em>、広く実装されていませんので、使用するべきではありません。代わりに、 CSS プロパティの {{Cssxref("white-space")}} を次のように使用してください。</p>
</div>

<pre class="brush: html notranslate">&lt;span style="white-space: nowrap;"&gt;改行を伴わない長い行&lt;/span&gt;</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("html.elements.nobr")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("white-space")}}</li>
 <li>{{CSSxRef("overflow")}}</li>
</ul>
