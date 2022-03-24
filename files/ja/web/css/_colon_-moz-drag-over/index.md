---
title: ':-moz-drag-over'
slug: 'Web/CSS/:-moz-drag-over'
tags:
  - CSS
  - 'CSS:Mozilla Extensions'
  - Firefox
  - Mozilla
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
translation_of: 'Web/CSS/:-moz-drag-over'
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

[CSS](/ja/docs/Web/CSS) の <strong>`:-moz-drag-over`</strong> [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)で、 {{event("dragover")}} イベントが呼び出される時に要素に一致します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">:-moz-drag-over
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html notranslate">&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;td width="100px" height="100px"&gt;Drag Over&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css notranslate">td:-moz-drag-over {
  color: red;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

{{EmbedLiveSample("Example")}}

<h2 id="Specifications" name="Specifications">仕様書</h2>

いずれの標準にも含まれていません。

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.selectors:-moz-drag-over")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>[Mozilla の CSS 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)</li>
 <li>[HTML ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)</li>
</ul>
