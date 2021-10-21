---
title: Fetch の使用
slug: Web/API/Fetch_API/Using_Fetch
tags:
  - API
  - BODY
  - Experimental
  - Fetch
  - Guide
  - HTTP
  - Promise
  - Response
  - request
translation_of: Web/API/Fetch_API/Using_Fetch
---
<p>{{DefaultAPISidebar("Fetch API")}}</p>

<div class="summary">
<p><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> を利用すると、リクエストやレスポンスといった HTTP のパイプラインを構成する要素を操作できるようになります。また {{domxref("GlobalFetch.fetch","fetch()")}} メソッドを利用することで、非同期のネットワーク通信を簡単にわかりやすく記述できるようになります。</p>
</div>

<p>従来、このような機能は {{domxref("XMLHttpRequest")}} を使用して実現されてきました。 Fetch はそれのより良い代替となるもので、{{domxref("ServiceWorker_API", "サービスワーカー")}}のような他の技術から簡単に利用することができます。 Fetch は CORS や HTTP 拡張のような HTTP に関連する概念をまとめて定義する場所でもあります。</p>

<p><code>fetch</code> の仕様は <code>jQuery.ajax()</code> とは主に二つの点で異なっています。</p>

<ul>
 <li><code>fetch()</code> から返される Promise は レスポンスが HTTP 404 や 500 を返して <strong>HTTP エラーステータスの場合でも拒否されません</strong>。代わりに (<code>ok</code> ステータスが false にセットされて) 正常に解決し、拒否されるのはネットワークのエラーや、何かがリクエストの完了を妨げた場合のみです。</li>
 <li><code>fetch()</code> <strong>はサイトをまたぐクッキーを<s>受け付けません</s>受信することができます</strong>。フェッチを使用してサイトをまたぐセッションを確立することが<s>できません</s>できます。<s>他のサイトからの {{HTTPHeader("Set-Cookie")}} ヘッダーは暗黙に無視されます。</s></li>
 <li><code>fetch</code> はサーバーとの間で <strong>cookies を送受信しない</strong>ため、サイトがユーザーセッションの維持に頼っている場合は未認証のリクエストになります。クッキーを送るには、認証情報の <a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters">init オプション</a>を設定しておく必要があります。 (<a href="https://github.com/whatwg/fetch/pull/585">2017年8月25日</a>に、既定の認証情報のポリシーが <code>same-origin</code> に変更になり、 Firefox は 61.0b13 から変更しました。)</li>
</ul>

<p>基本的な fetch リクエストは、本当に簡単に設定できます。以下のコードを見てください。</p>

<pre class="brush: js notranslate">fetch('http://example.com/movies.json')
  .then(response =&gt; response.json())
  .then(data =&gt; console.log(data));
</pre>

<p>これはネットワーク越しに JSON ファイルを取得してコンソールに出力するスクリプトです。 <code>fetch()</code> の最も簡単な使い方は 1 つの引数 — fetch で取得したいリソースへのパス — のみをとり、レスポンス ({{domxref("Response")}} オブジェクト) を含む promise を返します。</p>

<p>これはただの HTTP レスポンスであり、実際の JSON ではありません。 response オブジェクトから JSON を抽出するには、 {{domxref("Body.json","json()")}} メソッドを使用する必要があります。({{domxref("Body")}} のミックスインとして定義されていて、これは {{domxref("Request")}} と {{domxref("Response")}} の両オブジェクトに実装されています。)</p>

<div class="note">
<p><strong>メモ</strong>: Body ミックスインは本文の内容を他の mime タイプとして展開する似たようなメソッドを提供しています。詳細は {{anch("Body")}} の節をご覧ください。</p>
</div>

<p>Fetch リクエストは、検索したリソースからの指示よりも <a href="/ja/docs/Security/CSP/CSP_policy_directives">Content Security Policy</a> の <code>connect-src</code> ディレクティブによって制御されます。</p>

<h3 id="Supplying_request_options" name="Supplying_request_options">リクエストにオプションを適用する</h3>

<p><code>fetch()</code> メソッドには 2 つ目の引数を適用することもできます。多数の設定をコントロールすることのできる <code>init</code> オブジェクトです。</p>

<p>すべての設定可能なオプションや詳細な説明を見るには {{domxref("GlobalFetch.fetch","fetch()")}} を参照してください。</p>

<pre class="brush: js notranslate">// POST メソッドの実装の例
async function postData(url = '', data = {}) {
  // 既定のオプションには * が付いています
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
  return response.json(); // レスポンスの JSON を解析
}

postData('https://example.com/answer', { answer: 42 })
  .then(data =&gt; {
    console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
  });
</pre>

<p>なお、 <code>mode: "no-cors"</code> はリクエスト中の限られた数のヘッダーにしか許可されていません。</p>

<ul>
 <li><code>Accept</code></li>
 <li><code>Accept-Language</code></li>
 <li><code>Content-Language</code></li>
 <li><code>Content-Type</code> のうち、値が <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>, <code>text/plain</code> のいずれかのもの</li>
</ul>

<h3 id="Sending_a_request_with_credentials_included" name="Sending_a_request_with_credentials_included">認証情報つきのリクエストの送信</h3>

<p>ブラウザーに認証情報の入ったリクエストを送るようにするには、オリジン間の呼び出しであっても、 <code>credentials: 'include'</code> を <code>init</code> オブジェクトに追加して <code>fetch()</code> メソッドに渡します。</p>

<pre class="brush: js notranslate">fetch('https://example.com', {
  credentials: 'include'
});
</pre>

<p>リクエスト URL が呼び出しスクリプトと同一オリジンの場合だけクレデンシャルを送りたい場合、<code>credentials: 'same-origin'</code>を追加します。</p>

<pre class="brush: js notranslate">// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});
</pre>

<p>この代わりにブラウザーがリクエストにクレデンシャルを含んでないことを保証するには、<code>credentials: 'omit'</code>を使います。</p>

<pre class="brush: js notranslate">fetch('https://example.com', {
  credentials: 'omit'
})</pre>

<h3 id="Uploading_JSON_data" name="Uploading_JSON_data">JSON データのアップロード</h3>

<p>{{domxref("GlobalFetch.fetch","fetch()")}} を使って JSON-エンコードしたデータを POST します。</p>

<pre class="brush: js notranslate">const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response =&gt; response.json())
.then(data =&gt; {
  console.log('Success:', data);
})
.catch((error) =&gt; {
  console.error('Error:', error);
});
</pre>

<h3 id="Uploading_a_file" name="Uploading_a_file">ファイルのアップロード</h3>

<p>ファイルは HTML <code>&lt;input type="file" /&gt;</code> input 要素や、 {{domxref("FormData.FormData","FormData()")}} や {{domxref("WindowOrWorkerGlobalScope/fetch","fetch()")}} を使ってアップロードできます。</p>

<pre class="brush: js notranslate">const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response =&gt; response.json())
.then(result =&gt; {
  console.log('Success:', result);
})
.catch(error =&gt; {
  console.error('Error:', error);
});
</pre>

<h3 id="Uploading_multiple_files" name="Uploading_multiple_files">複数のファイルのアップロード</h3>

<p>HTML の <code>&lt;input type="file" multiple /&gt;</code> 入力欄と {{domxref("FormData.FormData","FormData()")}} と {{domxref("GlobalFetch.fetch","fetch()")}} を使用してファイルをアップロードすることができます。</p>

<pre class="brush: js notranslate">const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i &lt; photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response =&gt; response.json())
.then(result =&gt; {
  console.log('Success:', result);
})
.catch(error =&gt; {
  console.error('Error:', error);
});
</pre>

<h3 id="Processing_a_text_file_line_by_line" name="Processing_a_text_file_line_by_line">テキストファイルの1行ずつの処理</h3>

<p>レスポンスから読み込まれるチャンクは、行の境界できれいに分割されておらず、文字列ではなく Uint8Arrays になっています。テキストファイルをフェッチして一行ずつ処理したい場合、これらの複雑な処理を行うのはあなた次第です。次の例は、行イテレータを作成することでこれを行う方法の一つを示しています (簡単にするため、テキストは UTF-8 であると仮定しており、フェッチエラーは処理していません)。</p>

<pre class="brush: js notranslate">async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8');
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '';

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex &lt; chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

run();
</pre>

<h3 id="Checking_that_the_fetch_was_successful" name="Checking_that_the_fetch_was_successful">fetch が成功したかチェックする</h3>

<p>ネットワークエラーに遭遇すると {{domxref("GlobalFetch.fetch","fetch()")}} promise は {{jsxref("TypeError")}} を返して reject 状態になります。サーバー側の CORS が適切に設定されていない場合も同様です(アクセス権の問題ですけどね) — 一方で例えば 404 はネットワークエラーを構成しません。fetch() が成功したかどうかの明確な判定をするには、プロミスが解決されて、{{domxref("Response.ok")}} プロパティが true になっているかなどを確認します。次のようなコードになるでしょう。</p>

<pre class="brush: js notranslate">fetch('flowers.jpg')
  .then(response =&gt; {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(myBlob =&gt; {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error =&gt; {
    console.error('There has been a problem with your fetch operation:', error);
  });
</pre>

<h3 id="Supplying_your_own_request_object" name="Supplying_your_own_request_object">独自の request オブジェクトを fetch に渡す</h3>

<p><code>fetch()</code> を呼ぶときにリクエストしたいリソースへのパスを渡す代わりに、{{domxref("Request.Request","Request()")}} コンストラクターを使用して Request オブジェクトを作成して <code>fetch()</code> メソッドの引数として渡すこともできます。</p>

<pre class="brush: js notranslate">const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response =&gt; response.blob())
  .then(myBlob =&gt; {
    myImage.src = URL.createObjectURL(myBlob);
  });
</pre>

<p><code>fetch()</code> メソッドの引数と全く同じ引数を <code>Request()</code> に適用させることができます。また、 request オブジェクトのコピーを作成するためにすでに存在する request オブジェクトを渡すこともできます。</p>

<pre class="brush: js notranslate">const anotherRequest = new Request(myRequest, myInit);
</pre>

<p>これは、リクエストとレスポンスの本文を一つだけ使用するのでとても有用です。必要であれば、<code>init</code> オプションを変化させながらリクエスト / レスポンスを再利用できるようにコピーします。コピーは body が読まれる前でなければならず、コピーの中の body を読むとオリジナルのリクエストも既読にマークされます。</p>

<div class="note">
<p><strong>メモ</strong>: {{domxref("Request.clone","clone()")}} メソッドを利用してコピーを生成することもできます。これには、ほかのコピーメソッドと若干異なる意味があります — 古いリクエストの body がすでに読み込まれていた場合、前者は失敗しますが、<code>clone()</code> は失敗しません (レスポンスでも同じです)。</p>
</div>

<h2 id="Headers">Headers</h2>

<p>{{domxref("Headers")}} インターフェースでは、 {{domxref("Headers.Headers","Headers()")}} コンストラクターを使用して、ヘッダーオブジェクトを作成することができます。ヘッダーオブジェクトはシンプルな複数の名前と値の Map です。</p>

<pre class="brush: js notranslate">const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
</pre>

<p>同じことはコンストラクターに配列の配列かオブジェクトリテラルを渡すことで達成できます。</p>

<pre class="brush: js notranslate">const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});
</pre>

<p>ヘッダーの中身を見たり、検索することができます。</p>

<pre class="brush: js notranslate">console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // [ ]
</pre>

<p>いくつかの操作は {{domxref("ServiceWorker_API","ServiceWorkers")}} でしか役立ちませんが、ヘッダーを操作するためのより良い API を提供しています。</p>

<p>Headers のメソッドはすべて、有効な HTTP ヘッダーではない名前が渡されたとき TypeError を投げます。 immutable ガード (下記参照) がかかっている場合も、 TypeError を投げます。もしくはエラーを投げずに失敗します。例を見てください。</p>

<pre class="brush: js notranslate">const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log("銀行のふりをしないで下さい！");
}
</pre>

<p>ヘッダーの良い使用方法としては、以下のように、処理を行う前に、コンテンツタイプが正しいかどうか判定する等の使い方があります。</p>

<pre class="brush: js notranslate">fetch(myRequest)
  .then(response =&gt; {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data =&gt; {
      /* process your data further */
  })
  .catch(error =&gt; console.error(error));
</pre>

<h3 id="Guard" name="Guard">Guard</h3>

<p>ヘッダーは、リクエストで送信でき、レスポンスで受信できます。また、どの情報が変更できる（または、すべき）かといったさまざまな制限があります。そのため、ヘッダーは guard プロパティを持っています。これはリクエストやレスポンスに含まれませんが、ヘッダーオブジェクトでできる変更操作に影響を与えます。</p>

<p>設定できるガード値には以下のものがあります。</p>

<ul>
 <li><code>none</code>: 既定値です。</li>
 <li><code>request</code>: リクエスト ({{domxref("Request.headers")}}) で使用できる値のみにヘッダーを保護する。</li>
 <li><code>request-no-cors</code>: {{domxref("Request.mode")}} <code>no-cors</code> で生成されたリクエスト ({{domxref("Request.headers")}}) で使用できる値のみにヘッダーを保護する。</li>
 <li><code>response</code>: レスポンス ({{domxref("Response.headers")}}) で使用できる値のみにヘッダーを保護する。</li>
 <li><code>immutable</code>: 主に ServiceWorker で使用されます。ヘッダーを読み取り専用にします。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: <code>request</code> のガードされたヘッダーの <code>Content-Length</code> ヘッダーは追加や変更できない可能性があります。同様に、レスポンスヘッダに <code>Set-Cookie</code> を挿入することはできません。ServiceWorker は、同期レスポンスを経由してクッキーを設定できません。</p>
</div>

<h2 id="Response_objects" name="Response_objects">Response オブジェクト</h2>

<p>すでに見てきたように, {{domxref("Response")}} インスタンスは、 <code>fetch()</code> プロミスが解決(resolve)されたときに返り値として渡されます。</p>

<p>下記はどんな response オブジェクトでも共通で使用できる response プロパティです。</p>

<ul>
 <li>{{domxref("Response.status")}} — HTTP ステータスコードの整数値 (デフォルト値は 200)</li>
 <li>{{domxref("Response.statusText")}} — HTTP ステータスコードのメッセージと一致する文字列 (デフォルト値は "OK")</li>
 <li>{{domxref("Response.ok")}} — 上述の例で使用したように、これは HTTP ステータスコードが 200 から 299 のうちに収まってるかどうかのショートハンドです。これは {{domxref("Boolean")}} を返します。</li>
</ul>

<p>Response オブジェクトは JavaScript で動的に作ることもできます。これは {{domxref("ServiceWorker_API", "ServiceWorkers")}} 内において非常に役立ちます。例えばリクエストを受け取ったときに {{domxref("FetchEvent.respondWith","respondWith()")}} メソッドによってカスタマイズされたレスポンスを返すようなときに役立ちます。</p>

<pre class="brush: js notranslate">const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});
</pre>

<p>{{domxref("Response.Response","Response()")}} コンストラクターはオプションとして 2 つの引数をとることができます — レスポンス本文と初期化オブジェクトです。 ({{domxref("Request.Request","Request()")}} が受け取れるものと似ています。)</p>

<ul>
</ul>

<div class="note">
<p><strong>メモ</strong>: 静的メソッド {{domxref("Response.error","error()")}} は単純にエラーレスポンスを返します。同様に {{domxref("Response.redirect","redirect()")}} メソッドも 指定した URL にリダイレクトするレスポンスを返します。これらはサービスワーカーにのみ関連しています。</p>
</div>

<h2 id="Body" name="Body">Body</h2>

<p>リクエストもレスポンスもボディを持っています。body は以下のタイプのいずれかのインスタンスです。</p>

<ul>
 <li>{{domxref("ArrayBuffer")}}</li>
 <li>{{domxref("ArrayBufferView")}} (Uint8Array などの TypedArray)</li>
 <li>{{domxref("Blob")}}/File</li>
 <li>文字列</li>
 <li>{{domxref("URLSearchParams")}}</li>
 <li>{{domxref("FormData")}}</li>
</ul>

<p>{{domxref("Body")}} ミックスインは {{domxref("Request")}} や{{domxref("Response")}} に実装されていて、コンテンツを抜き出すために以下のメソッドが定義されています。これらはすべて最終的に実際の中身で解決されるプロミスを返します。</p>

<ul>
 <li>{{domxref("Body.arrayBuffer","arrayBuffer()")}}</li>
 <li>{{domxref("Body.blob","blob()")}}</li>
 <li>{{domxref("Body.json","json()")}}</li>
 <li>{{domxref("Body.text","text()")}}</li>
 <li>{{domxref("Body.formData","formData()")}}</li>
</ul>

<p>これらは非テキストデータを XHR よりはるかに楽に扱うことができます。</p>

<p>Request 本文は、body パラメータを渡すことによって設定することができます。</p>

<pre class="brush: js notranslate">const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});
</pre>

<p>Request や Response (と <code>fetch()</code> 関数の拡張) は自動的にコンテンツタイプを決定しようとします。Request もまた、指定されていなければ自動で Content-Type ヘッダーを設定しようとします。</p>

<h2 id="Feature_detection" name="Feature_detection">使用可能かどうかの判別</h2>

<p>Fetch API が利用できるかどうかは、{{domxref("Headers")}}、{{domxref("Request")}}、{{domxref("Response")}}、{{domxref("GlobalFetch.fetch","fetch()")}} のいずれかが {{domxref("Window")}} もしくは {{domxref("Worker")}} のスコープで参照できるかどうかによって判断できます。判断を行っている例は次のようになります。</p>

<pre class="brush: js notranslate">if (window.fetch) {
  // ここで fetch リクエストを実行
} else {
  // XMLHttpRequest で何か実行する？
}
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>Fetch がサポートされていないブラウザーを使うため、非サポートブラウザー用の機能を再生成する <a href="https://github.com/github/fetch">Fetch Polyfill</a> が利用できます。</p>

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
   <td>{{SpecName('Fetch')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WindowOrWorkerGlobalScope.fetch")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS">HTTP アクセス制御 (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
 <li><a href="https://github.com/github/fetch">Fetch polyfill</a></li>
 <li><a href="https://github.com/mdn/fetch-examples/">Fetch examples on Github</a></li>
</ul>
