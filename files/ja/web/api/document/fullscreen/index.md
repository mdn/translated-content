---
title: Document.fullscreen
slug: Web/API/Document/fullscreen
tags:
  - API
  - Document
  - Fullscreen API
  - Read-only
  - Reference
  - プロパティ
translation_of: Web/API/Document/fullscreen
---
<div>{{APIRef("Fullscreen API")}}{{Deprecated_Header}}</div>

<p><span class="seoSummary">廃止された {{domxref("Document")}} インターフェイスの <strong><code>fullscreen</code></strong> プロパティは読み取り専用で、文書が現在全画面モードで表示されているかどうかを報告します。</span></p>

<p>このプロパティは読み取り専用ですが、変更されても (strict モードでも) 例外を投げません。セッターは何もしないので、無視されます。</p>

<div class="note">
<p><strong>メモ:</strong> このプロパティは非推奨であり、文書が全画面モードになっているかどうかは、 {{DOMxRef("Document.fullscreenElement")}} が <code>null</code> ではないことで確認することができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="eval">var <var>isFullScreen</var> = <var>document</var>.fullscreen;
</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>真偽値であり、文書が全画面モードで表示されているときに <code>true</code>、それ以外の場合に <code>false</code> になります。</p>

<h2 id="Example" name="Example">例</h2>

<p>このシンプルな関数は、現在全画面モードがアクティブになっているかどうかを、廃止された <code>fullscreen</code> プロパティを使用して報告しています。</p>

<pre class="brush: js">function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
</pre>

<p>一方、次の例では、現在の <code>fullscreenElement</code> プロパティを使用して同じことを確認しています。</p>

<pre class="brush: js">function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}</pre>

<p><code>fullscreenElement</code> が <code>null</code> でなければ、これは <code>true</code> を返し、全画面モードで表示されていることを示します。</p>

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
   <td>{{SpecName("Fullscreen", "#dom-document-fullscreen", "Document.fullscreen")}}</td>
   <td>{{Spec2("Fullscreen")}}</td>
   <td>初回定義 (廃止プロパティとして)</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.fullscreen")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API/Guide">Fullscreen API ガイド</a></li>
 <li>{{DOMxRef("Document.fullscreenEnabled")}}</li>
</ul>
