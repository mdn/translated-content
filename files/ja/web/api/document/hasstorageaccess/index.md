---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
tags:
  - API
  - DOM
  - Document
  - Reference
  - Storage Access API
  - hasStorageAccess
  - メソッド
translation_of: Web/API/Document/hasStorageAccess
---
<div>{{APIRef}}{{seecompattable}}</div>

<p>{{domxref("Document")}} インターフェイスの <strong><code>hasStorageAccess()</code></strong> メソッドは、文書がファーストパーティのストレージへのアクセス権を持っているかどうかを真偽値で解決する {{jsxref("Promise")}} を返します。</p>

<p>詳しくは <a href="/ja/docs/Web/API/Storage_Access_API">Storage Access API</a> を参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = document.hasStorageAccess();</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>文書がファーストパーティのストレージへのアクセス権を持っているかどうかを真偽値で解決する {{jsxref("Promise")}} です。</p>

<p>Promise が解決され、関数が最初に呼び出されたときにユーザージェスチャーイベントを処理していた場合、解決ハンドラーはユーザージェスチャーが処理されているかのように実行されるため、ユーザーによるアクティベーションを必要とする API を呼び出すことができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">document.hasStorageAccess().then(hasAccess =&gt; {
  if (hasAccess) {
    // ストレージへのアクセスはすでに許可されています。
  } else {
    // ストレージへのアクセスはまだ許可されていません。
    // requestStorageAccess() を呼び出す必要があります。
  }
});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>この API はまだ提案段階にあります。 — 標準化プロセスはまだ始まっていません。現在のところ、この API の詳細の仕様書は、アップルのブログ投稿の <a href="https://webkit.org/blog/8124/introducing-storage-access-api/">Introducing Storage Access API</a>、および <a href="https://github.com/whatwg/html/issues/3338">WHATWG HTML issue 3338 — Proposal: Storage Access API</a> で見ることができます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.hasStorageAccess")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<p><a href="/ja/docs/Web/API/Storage_Access_API">Storage Access API</a></p>
