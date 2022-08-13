---
title: Response.json()
slug: Web/API/Response/json
tags:
  - API
  - Fetch
  - JSON
  - Method
  - Reference
  - メソッド
  - Response
translation_of: Web/API/Response/json
original_slug: Web/API/Body/json
browser-compat: api.Response.json
---
<div>{{APIRef("Fetch API")}}</div>

<p><strong><code>json()</code></strong> は {{DOMxRef("Response")}} インターフェイスのメソッドで、 {{DOMxRef("Response")}} のストリームを取得して完全に読み取ります。本文のテキストを {{JSxRef("JSON")}} として解釈した結果で解決するプロミスを返します。</p>

<p>なお、このメソッドは <code>json()</code> という名前であるにもかかわらず、結果は JSON ではありません。入力として JSON を取って解釈し、 JavaScript のオブジェクトを生成します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>response</em>.json().then(<em>data</em> =&gt; {
  // data を使用した処理を実行する
});</pre>

<h3 id="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value">返値</h3>

<p>JavaScript オブジェクトに解決される {{jsxref("Promise")}}。 このオブジェクトは、オブジェクト、配列、文字列、数値など、JSON で表現できるものであれば何でもなります。</p>

<h2 id="Example">例</h2>

<p><a href="https://github.com/mdn/fetch-examples/tree/master/fetch-json">fetch json の例</a>（<a href="https://mdn.github.io/fetch-examples/fetch-json/">fetch json をライブで</a>実行）では、 {{DOMxRef("Request.Request", "Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して <code>.json</code> ファイルを読み取ります。読み取りに成功したら、<code>json()</code> を使用してデータを読み取り、解析し、結果のオブジェクトから期待通りに値を読み出し、それらの値をリスト項目に追加して商品データとして表示します。</p>

<pre class="brush: js highlight[5]">const myList = document.querySelector('ul');
const myRequest = new Request('products.json');

fetch(myRequest)
  .then(response =&gt; response.json())
  .then(data =&gt; {
    for (const product of data.products) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.Name;
      listItem.append(
        ` can be found in ${
          product.Location
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有 (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
