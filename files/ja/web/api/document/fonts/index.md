---
title: Document.fonts
slug: Web/API/Document/fonts
tags:
  - API
  - DOM
  - Font Loading API
  - FontFace
  - FontFaceSet
  - Fonts
  - フォント
translation_of: Web/API/Document/fonts
---
<p>{{APIRef("DOM")}}</p>

<p><span class="seoSummary"><strong><code>fonts</code></strong> は {{domxref("Document")}} インターフェイスのプロパティで、文書の {{domxref("FontFaceSet")}} インターフェイスを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>fontFaceSet</var> = <var>document</var>.fonts;</pre>

<h3 id="Value" name="Value">値</h3>

<p>返値は文書の {{domxref("FontFaceSet")}} インターフェイスです。 <code>FontFaceSet</code> インターフェイスは新しいフォントを読み込んだり、以前読み込まれたフォントの状態をチェックしたりするのに有用です。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Doing_operation_after_all_fonts_are_loaded" name="Doing_operation_after_all_fonts_are_loaded">すべてのフォントが読み込まれた後の操作の実行</h3>

<pre class="brush: js notranslate">document.fonts.ready.then(function() {
  // すべてのフォントが読み込まれた後にのみ実行する必要がある操作を
  // ここに記述します。
});
</pre>

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
   <td>{{SpecName('CSS3 Font Loading','#FontFaceSet-interface','FontFaceSet')}}</td>
   <td>{{Spec2('CSS3 Font Loading')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.Document.fonts")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("FontFaceSet")}} インターフェイス</li>
 <li>{{domxref("FontFace")}}</li>
</ul>
