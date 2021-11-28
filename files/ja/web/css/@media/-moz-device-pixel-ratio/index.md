---
title: '-moz-device-pixel-ratio'
slug: Web/CSS/@media/-moz-device-pixel-ratio
tags:
  - '@media'
  - CSS
  - Deprecated
  - Non-standard
  - media feature
translation_of: Web/CSS/@media/-moz-device-pixel-ratio
---
<div>{{cssref}} {{Non-standard_header}} {{Deprecated_header}}</div>

<p><strong><code>-moz-device-pixel-ratio</code></strong> は Gecko 独自の <a href="/ja/docs/Web/CSS">CSS</a> の Gecko のみの<a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>で、 CSS ピクセルあたりのデバイスピクセル数に基づいてスタイルを適用することができます。</p>

<div class="warning">
<p><strong>この特性を使用しないでください。</strong> <code><a href="/ja/docs/Web/CSS/@media/resolution">resolution</a></code> 特性と <code>dppx</code> の単位を代わりに使用してください。unit instead.</p>
</div>

<div class="note"><strong>注</strong>: このメディア特性は Webkit 及び <a href="https://msdn.microsoft.com/ja/library/ie/dn760733(v=vs.85).aspx">IE 11 for Windows Phone 8.1</a> でも <code>-webkit-device-pixel-ratio</code> として実装されています。 min 及び max 接頭辞は、 Gecko では <code>min--moz-device-pixel-ratio</code> 及び <code>max--moz-device-pixel-ratio</code> です。しかし、同じ接頭辞が Webkit では <code>-webkit-min-device-pixel-ratio</code> 及び <code>-webkit-max-device-pixel-ratio</code> として実装されています。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<dl>
 <dt>{{cssxref("&lt;number&gt;")}}</dt>
 <dd>CSS ピクセルあたりのデバイスピクセル数。</dd>
</dl>

<p><br>
 <strong>メディア:</strong> {{cssxref("Media/Visual")}}<br>
 <strong>min/max 接頭辞の受付:</strong> はい</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_compatibility_example" name="Basic_compatibility_example">基本的な互換コード</h3>

<p><code>-moz-device-pixel-ratio</code> は Firefox のバージョン 16 以前や、 <code>dppx</code> に未対応の WebKit ベースのブラウザーの <code>-webkit-device-pixel-ratio</code> との互換性のために使用されることがあります。</p>

<p>例:</p>

<pre class="brush: css notranslate">@media (-webkit-min-device-pixel-ratio: 2), /* Webkit ベースのブラウザー */
       (min--moz-device-pixel-ratio: 2),    /* 古い Firefox ブラウザー (Firefox 16 以前) */
       (min-resolution: 2dppx),             /* 標準の方法 */
       (min-resolution: 192dpi)             /* dppx のフォールバック */ </pre>

<div class="blockIndicator note">
<p><strong>Note</strong>: <code>resolution</code> 及び <code>dppx</code> に関わる互換性の良い習慣については、 <a href="http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/">CSSWG の記事</a>を参照してください。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>どの仕様書にも含まれていません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.media.-moz-device-pixel-ratio")}}</p>
