---
title: Response.formData()
slug: Web/API/Response/formData
tags:
  - API
  - Fetch
  - Fetch API
  - FormData
  - Method
  - NeedsExample
  - Reference
  - Response
translation_of: Web/API/Response/formData
original_slug: Web/API/Body/formData
browser-compat: api.Response.formData
---
<div>{{APIRef("Fetch")}}</div>

<p><strong><code>formData()</code></strong> は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} のストリームを取得して完全に読み取ります。 {{domxref("FormData")}} オブジェクトで解決されるプロミスを返します。</p>

<div class="note">
	<p><strong>メモ</strong>: これは主に<a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a>に関連しています。 ユーザーがフォームを送信し、サービスワーカーがリクエストに介入した場合を考えてみましょう。 例えば、キーと値のマップを取得するために <code>formData()</code> を呼び出し、一部のフィールドを修正した後、フォームをサーバー側に送信 (またはローカルで使用) することができます。</p>
</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>response</em>.formData()
.then(function(<em>formdata</em>) {
  // formdata を使った何らかの処理
});</pre>

<h3 id="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value">返値</h3>

<p>{{domxref("FormData")}} オブジェクトで解決される {{jsxref("Promise")}}。</p>

<h2 id="Example">例</h2>

<p>TBD.</p>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
	<li><a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
	<li><a href="/ja/docs/Web/HTTP/CORS">HTTP アクセス制御 (CORS)</a></li>
	<li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
