---
title: Response.text()
slug: Web/API/Response/text
tags:
  - API
  - Fetch
  - Method
  - Reference
  - Text
  - Response
translation_of: Web/API/Response/text
original_slug: Web/API/Body/text
browser-compat: api.Response.text
---
<div>{{APIRef("Fetch")}}</div>

<p><strong><code>text()</code></strong> は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} ストリームを取得して完全に読み込みます。 {{jsxref("String")}} で解決するプロミスを返します。 レスポンスは<em>常に</em> UTF-8 としてデコードされます。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>response</var>.text().then(function (<var>text</var>) {
  // text レスポンスを使用して何か実行する。
});</pre>

<h3 id="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value">返値</h3>

<p>{{jsxref("String")}} で解決するプロミスです。</p>

<h2 id="Example">例</h2>

<p><a href="https://github.com/mdn/fetch-examples/tree/master/fetch-text">fetch text の例</a>（<a href="https://mdn.github.io/fetch-examples/fetch-text/">fetch text をライブで</a>実行）には、{{htmlelement("article")}} 要素と 3 つのリンク（<code>myLinks</code> 配列に格納されています）があります。 最初に、リンクのすべてをループし、それぞれのリンクに、その 1 つをクリックしたとき、 <code>getData()</code> 関数がリンクの <code>data-page</code> 識別子を引数として実行されるように、<code>onclick</code> イベントハンドラーを設定します。</p>

<p><code>getData()</code> が実行されると、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して特定の <code>.txt</code> ファイルをフェッチします。 フェッチが成功したら、<code>text()</code> を使用してレスポンスから {{domxref("USVString")}} (テキスト) オブジェクトを読み取り、{{htmlelement("article")}} 要素の {{domxref("Element.innerHTML","innerHTML")}} にテキストオブジェクトの値を設定します。</p>

<pre class="brush: js">let myArticle = document.querySelector('article');
let myLinks = document.querySelectorAll('ul a');

for(let i = 0; i &lt;= myLinks.length-1; i++) {
  myLinks[i].onclick = function(e) {
    e.preventDefault();
    let linkData = e.target.getAttribute('data-page');
    getData(linkData);
  }
};

function getData(pageId) {
  console.log(pageId);
  var myRequest = new Request(pageId + '.txt');
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
      myArticle.innerHTML = text;
    });
  });
}</pre>

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
