---
title: Document.lastModified
slug: Web/API/Document/lastModified
tags:
  - API
  - Document
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
translation_of: Web/API/Document/lastModified
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>lastModified</code></strong> は {{domxref("Document")}} インターフェイスのプロパティで、現在の文書が最後に更新された日付と時刻を含む文字列を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>string</var> = <var>document</var>.lastModified;
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Simple_usage" name="Simple_usage">単純な使用</h3>

<p>この例では <code>lastModified</code> の値をアラート表示します。</p>

<pre class="brush:js notranslate">alert(document.lastModified);
// 表示内容: Tuesday, December 16, 2017 11:09:42
</pre>

<h3 id="Transforming_lastModified_into_a_Date_object" name="Transforming_lastModified_into_a_Date_object">lastModified を Date オブジェクトへ変換</h3>

<p>この例では、 <code>lastModified</code> を {{jsxref("Date")}} オブジェクトに変換します。object.</p>

<pre class="brush:js notranslate">let oLastModif = new Date(document.lastModified);
</pre>

<h3 id="Transforming_lastModified_into_milliseconds" name="Transforming_lastModified_into_milliseconds">lastModified をミリ秒に変換</h3>

<p>この例では、 <code>lastModified</code> を地方時の1970年1月1日 00:00:00からの経過ミリ秒数の数値に変換します。</p>

<pre class="brush:js notranslate">let nLastModif = Date.parse(document.lastModified);
</pre>

<h2 id="Notes" name="Notes">注</h2>

<p><code>lastModified</code> は文字列なので、文書の更新日の比較には<em>簡単には</em>使用できないことに注意してください。こちらはいつページが変更されたかをアラートメッセージで表示する方法の例です (<a href="/ja/docs/DOM/document.cookie">JavaScript cookies API</a> も参照)。</p>

<pre class="brush: js notranslate">if (Date.parse(document.lastModified) &gt; parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0")) {
  document.cookie = "last_modif=" + Date.now() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + location.pathname;
  alert("ページが変更されました。");
}</pre>

<p>…同じ例ですが、最初の訪問をスキップします。</p>

<pre class="brush: js notranslate">var
  nLastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
  nLastModif = Date.parse(document.lastModified);

if (isNaN(nLastVisit) || nLastModif &gt; nLastVisit) {
  document.cookie = "last_modif=" + Date.now() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + location.pathname;

  if (isFinite(nLastVisit)) {
    alert("ページが変更されました。");
  }
}</pre>

<div class="note"><strong>注:</strong> WebKit は時刻の文字列を UTC で返します。 Gecko と Internet Explorer はローカルタイムゾーンで時刻を返します。 (参照: <a href="https://bugs.webkit.org/show_bug.cgi?id=4363">Bug 4363 – document.lastModified returns date in UTC time, but should return it in local time</a>)</div>

<p>もし<strong><em>外部のページ</em>が変更されたかどうか</strong>を知りたい場合は、 <a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Get_last_modified_date"><code>XMLHttpRequest()</code> API についてのこの段落</a>をお読みください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-document-lastmodified', 'document.lastModified')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.Document.lastModified")}}</div>
