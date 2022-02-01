---
title: Response.body
slug: Web/API/Response/body
tags:
  - API
  - Fetch
  - Property
  - Reference
  - Streams
  - Response
browser-compat: api.Response.body
translation_of: Web/API/Response/body
original_slug: Web/API/Body/body
---
<div>{{APIRef("Fetch")}}</div>

<p><strong><code>body</code></strong> は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本文コンテンツの {{domxref("ReadableStream")}} です。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">response.body;</pre>

<h3 id="Value">値</h3>

<p>{{domxref("ReadableStream")}} です。</p>

<h2 id="Example">例</h2>

<p><a href="https://mdn.github.io/dom-examples/streams/simple-pump/">単純なストリームポンプ</a>の例では、画像を読み取り、<code>response.body</code> を使用してレスポンスのストリームを公開し、{{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}} を使用してリーダーを作成し、そのストリームのチャンクを2番目のカスタム読み取り可能なストリームのキューに入れます — 画像の同一コピーを効果的に作成します。</p>

<pre class="brush: js">const image = document.getElementById('target');

// 元の画像をフェッチ
fetch('./tortoise.png')
// その body を ReadableStream として取得
.then(response =&gt; response.body)
.then(body =&gt; {
  const reader = body.getReader();

  return new ReadableStream({
    start(controller) {
      return pump();

      function pump() {
        return reader.read().then(({ done, value }) =&gt; {
          // データを消費する必要がなくなったら、ストリームを閉じます
          if (done) {
            controller.close();
            return;
          }

          // 次のデータチャンクを対象のストリームのキューに入れます
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream =&gt; new Response(stream))
.then(response =&gt; response.blob())
.then(blob =&gt; URL.createObjectURL(blob))
.then(url =&gt; console.log(image.src = url))
.catch(err =&gt; console.error(err));</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a></li>
 <li><a href="/ja/docs/Web/API/Streams_API">Streams API</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
</ul>
