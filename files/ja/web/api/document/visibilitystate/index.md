---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
tags:
  - DOM
  - Document
  - Page Visibility API
  - Property
  - Read-only
  - Reference
  - Web
translation_of: Web/API/Document/visibilityState
---
<p>{{ ApiRef("DOM") }}</p>

<p><span class="seoSummary"><strong><code>Document.visibilityState</code></strong> 読み取り専用プロパティは、文書 ({{domxref('document')}}) の可視性、つまりこの要素が現在表示されているかのコンテキストを返します。 文書がバックグラウンドにあるのか、非表示のタブにあるのか、プリレンダリングのためにのみ読み込まれるのかを知ることは有用です。</span> 可能な値は次のとおりです。</p>

<dl>
 <dt><code>visible</code></dt>
 <dd>ページのコンテンツは、少なくとも部分的に表示される場合があります。実際には、これはページが最小化されていないウィンドウのフォアグラウンドタブであることを意味します。</dd>
 <dt><code>hidden</code></dt>
 <dd>ページのコンテンツはユーザーには表示されません。実際には、これは文書がバックグラウンドタブまたは最小化されたウィンドウの一部であるか、 OS の画面ロックがアクティブであることを意味します。</dd>
 <dt><code>prerender</code> {{deprecated_inline}}</dt>
 <dd>ページのコンテンツはプリレンダリングされており、ユーザーには表示されません (<code><a href="/ja/docs/Web/API/Document/hidden">document.hidden</a></code> の目的で非表示と見なされます)。 文書はこの状態で開始する場合がありますが、別の値から移行することはありません。 注: これは標準から削除されました。 詳細については、互換性の表を確認してください。</dd>
</dl>

<p>このプロパティの値が変更されると、 {{domxref("Document/visibilitychange_event", "visibilitychange")}} イベントが {{domxref("Document")}} に送信されます。</p>

<p>これの一般的な用途は、文書がプリレンダリングされている場合に一部のアセットのダウンロードを防止したり、文書がバックグラウンドにあるか最小化されている場合に一部のアクティビティを停止したりすることです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>string</var> = document.visibilityState</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush:js; line-numbers  language-js notranslate">document.addEventListener("visibilitychange", function() {
  console.log( document.visibilityState );
  // 振る舞いを変更します...
})</pre>

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
   <td>{{SpecName('Page Visibility API','#visibility-states-and-the-visibilitystate-enum', 'Document.visibilityState')}}</td>
   <td>{{Spec2('Page Visibility API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.visibilityState")}}</p>
