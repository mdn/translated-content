---
title: Document.hidden
slug: Web/API/Document/hidden
tags:
  - DOM
  - Document
  - Page Visibility API
  - Property
  - Read-only
  - Reference
  - Web
translation_of: Web/API/Document/hidden
---
<p>{{ ApiRef("DOM") }}</p>

<p><code><strong>Document.hidden</strong></code> は読み取り専用のプロパティで、ページが非表示になっているとみられるかどうかを示す論理値を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>boolean</var> = document.hidden</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush:js; notranslate">document.addEventListener("visibilitychange", function() {
  console.log( document.hidden );
  // 振る舞いを修正...
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
   <td>{{SpecName('Page Visibility API','#dom-document-hidden', 'Document.hidden')}}</td>
   <td>{{Spec2('Page Visibility API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.hidden")}}</p>
