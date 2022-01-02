---
title: '::-webkit-progress-value'
slug: 'Web/CSS/::-webkit-progress-value'
tags:
  - CSS
  - Reference
  - Selector
  - 疑似要素
  - 非標準
translation_of: 'Web/CSS/::-webkit-progress-value'
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p><strong><code>::-webkit-progress-value</code></strong> <a href="/ja/docs/Web/CSS">CSS</a> <a href="/ja/docs/Web/CSS/Pseudo-elements">疑似要素</a> は、 {{HTMLElement("progress")}} 要素のバーの塗りつぶされた部分を表します。これは、 {{cssxref("::-webkit-progress-bar")}} 疑似要素の子要素です。</p>

<div class="note">
<p><strong>Note:</strong> <code>::-webkit-progress-value</code> を有効にするには {{cssxref("-webkit-appearance")}} を <code>&lt;progress&gt;</code> 要素で <code>none</code> に設定する必要があります。</p>
</div>

<h2 id="仕様">仕様</h2>

<p>仕様の一部ではありません。これは、 WebKit/Blink に固有の独自疑似要素です。</p>

<h2 id="例">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;progress value="10" max="50"&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", 200, 50)}}</p>

<p>上記のスタイルを使用したプログレスバーは次のようになります:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13490/progress-value.png" style="height: 60px; width: 249px;"></p>

<h2 id="ブラウザーの実装状況">ブラウザーの実装状況</h2>



<p>{{Compat("css.selectors.-webkit-progress-value")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>WebKit/Blink が {{HTMLElement("progress")}} 要素のその他の部分をスタイルするために使用する疑似要素:
  <ul>
   <li>{{ cssxref("::-webkit-progress-bar") }}</li>
   <li>{{ cssxref("::-webkit-progress-inner-element") }}</li>
  </ul>
 </li>
 <li>{{ cssxref("::-moz-progress-bar") }}</li>
 <li>{{ cssxref("::-ms-fill") }}</li>
</ul>
