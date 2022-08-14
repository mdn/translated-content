---
title: Fetch の使用
slug: Web/API/Fetch_API/Using_Fetch
tags:
  - API
  - BODY
  - 実験的
  - Fetch
  - ガイド
  - HTTP
  - Promise
  - Response
  - fetch POST & string body
  - request
translation_of: Web/API/Fetch_API/Using_Fetch
---
{{DefaultAPISidebar("Fetch API")}}

[Fetch API](/ja/docs/Web/API/Fetch_API) は、リクエストやレスポンスといった HTTP のパイプラインを操作する要素にアクセスするための JavaScript インターフェイスです。グローバルの {{domxref("fetch()")}} メソッドも提供しており、簡単で論理的な方法で、非同期にネットワーク越しでリソースを取得することができます。

従来、このような機能は {{domxref("XMLHttpRequest")}} を使用して実現されてきました。フェッチはそれのより良い代替となるもので、{{domxref("Service_Worker_API", "サービスワーカー", "", 1)}}のような他の技術から簡単に利用することができます。フェッチは [CORS](/ja/docs/Web/HTTP/CORS) や HTTP への拡張のような HTTP に関連する概念をまとめて定義する場所でもあります。

`fetch` の仕様は、 `jQuery.ajax()` とは特に以下の点で異なっています。

- `fetch()` から返されるプロミス ({{jsxref("Promise")}}) は、レスポンスが HTTP 404 や 500 を返す **HTTP エラーステータスの場合でも拒否されません**。サーバーがヘッダーで応答すると、プロミスは直ちに正常に解決します（レスポンスが 200-299 の範囲にない場合は、レスポンスの {{domxref("Response/ok", "ok")}} プロパティが false に設定されます）。拒否されるのは、ネットワーク障害があった場合や、何かがリクエストの完了を妨げた場合のみです。
- `fetch()` は [init オプション](/ja/docs/Web/API/fetch#parameters)で資格情報を設定しない限り、**オリジンをまたぐクッキーを送信しません**。（[2018 年 4 月以降](https://github.com/whatwg/fetch/pull/585)。仕様では、既定の資格情報ポリシーを `same-origin` に変更しました。 Firefox は 61.0b13 から変更しました。）

基本的なフェッチリクエストは、本当に簡単に設定できます。以下のコードを見てください。

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

これはネットワーク越しに JSON ファイルを取得してコンソールに出力するスクリプトです。 `fetch()` の最も簡単な使い方は 1 つの引数 — fetch で取得したいリソースへのパス — のみをとり、 {{domxref("Response")}} オブジェクトで解決するプロミスを返します。

{{domxref("Response")}} は、実際の JSON レスポンス本体を直接持っているのではなく、 HTTP レスポンス全体を表現するものです。 {{domxref("Response")}} オブジェクトから JSON の本文の内容を抽出するには、 {{domxref("Response.json()", "json()")}} メソッドを使用します。これはレスポンス本文のテキストを JSON として解釈した結果で解決する第 2 のプロミスを返します。

> **Note:** 本文の内容が他の形式である場合に展開する同様の方法は、 [Body](#body) の節を参照してください。

Fetch リクエストは、受け取るリソースからの指示ではなく、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Headers/Content-Security-Policy)の `connect-src` ディレクティブによって制御されます。

### リクエストオプションの適用

`fetch()` メソッドには 2 つ目の引数を適用することができ、 `init` オブジェクトで様々な種類の設定を制御することができます。

すべての設定可能なオプションや詳しい説明については、 {{domxref("fetch()")}} を参照してください。

```js
// POST メソッドの実装の例
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
    body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
  })
  return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
  });
```

なお、 `mode: "no-cors"` はリクエスト中の限られたヘッダーにしか許可されていません。

- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type` のうち、値が `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` のいずれかのもの

### 認証情報つきのリクエストの送信

ブラウザーに認証情報のついたリクエストを送るようにするには、同一オリジンの場合もオリジン間の呼び出しの場合も、 `credentials: 'include'` を `init` オブジェクトに追加して `fetch()` メソッドに渡してください。

```js
fetch('https://example.com', {
  credentials: 'include'
});
```

> **Note:** `Access-Control-Allow-Origin` は `credentials: 'include'` を含むリクエストでは、ワイルドカードを使用することを禁止しています。このような場合、正確なオリジンを提供する必要があります。 CORS unblocker 拡張を使用している場合でも、リクエストは失敗します。

> **Note:** この設定に関係なく、ブラウザーはプリフライトリクエストで資格情報を送信しないようにしてください。詳細については、 [CORS > 資格情報を含むリクエスト](/ja/docs/Web/HTTP/CORS#資格情報を含むリクエスト)を参照してください。

リクエスト URL が呼び出しスクリプトと同一オリジンの場合だけ資格情報を送りたい場合、 `credentials: 'same-origin'` を追加します。

```js
// オリジン 'https://example.com' で呼び出すスクリプトです。

fetch('https://example.com', {
  credentials: 'same-origin'
});
```

ブラウザーがリクエストに資格情報を含めないことを保証するには、代わりに `credentials: 'omit'` を使用してください。

```js
fetch('https://example.com', {
  credentials: 'omit'
})
```

### JSON データのアップロード

{{domxref("fetch","fetch()")}} を使って JSON エンコードしたデータを POST します。

```js
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

### ファイルのアップロード

ファイルは HTML の `<input type="file" />` input 要素と、{{domxref("FormData.FormData","FormData()")}} と {{domxref("fetch()")}} を使ってアップロードできます。

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### 複数のファイルのアップロード

ファイルのアップロードは、 HTML の `<input type="file" multiple />` 入力要素と {{domxref("FormData.FormData","FormData()")}} と {{domxref("fetch()")}} を使用して行うことができます。

```js
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### テキストファイルの 1 行ずつの処理

レスポンスから読み込まれる塊は、行の境界できれいに分割されておらず、文字列ではなく Uint8Arrays になっています。テキストファイルを読み取って一行ずつ処理したい場合、これらの複雑な処理を行うのはあなた次第です。次の例は、行イテレーターを作成することでこれを行う方法の一つを示しています (簡単にするため、テキストは UTF-8 であると仮定しており、読み取りエラーは処理していません)。

```js
async function* makeTextFileLineIterator(fileURL) {
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
  if (startIndex < chunk.length) {
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
```

### フェッチが成功したかの確認

{{domxref("fetch()")}} のプロミスは、ネットワークエラーに遭遇したりサーバー側の CORS の設定（通常はアクセス権の問題など）が間違っていたりすると、 {{jsxref("TypeError")}} で拒否されます。例えば、 404 はネットワークエラーにはなりません。 `fetch()` が成功したかどうかを正確に判定するには、プロミスが解決された後で、 {{domxref("Response.ok")}} プロパティが true になっているかを確認してください。次のようなコードになるでしょう。

```js
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

### 独自のリクエストオブジェクトの提供

`fetch()` の呼び出しに、リクエストしたいリソースへのパスを渡す代わりに、{{domxref("Request.Request","Request()")}} コンストラクターを使用して Request オブジェクトを作成し、 `fetch()` メソッドの引数として渡すこともできます。

```js
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });
```

`Request()` は、 `fetch()` メソッドとまったく同じ引数を受け入れます。既存のリクエストオブジェクトを渡して、コピーを作成することもできます。

```js
const anotherRequest = new Request(myRequest, myInit);
```

これは、リクエストとレスポンスの本文を 1 つだけ使用するのでとても有用です。必要であれば、`init` オプションを変化させながらリクエスト/レスポンスを再利用できるようにコピーします。コピーは body が読まれる前でなければならず、コピーの中の body を読むと、オリジナルのリクエストも既読にマークされます。

> **Note:** {{domxref("Request.clone","clone()")}} メソッドを利用してコピーを生成することもできます。これには、ほかのコピーメソッドと若干異なる意味があります — 古いリクエストの body がすでに読み込まれていた場合、前者は失敗しますが、`clone()` は失敗しません (レスポンスでも同じです)。

## Headers

{{domxref("Headers")}} インターフェースでは、 {{domxref("Headers.Headers","Headers()")}} コンストラクターを使用して、ヘッダーオブジェクトを作成することができます。ヘッダーオブジェクトは、シンプルな複数の名前と値のマップです。

```js
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
```

コンストラクターに配列の配列またはオブジェクトリテラルを渡すことで、同じことが実現できます。

```js
const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});
```

ヘッダーの中身を見たり、検索することができます。

```js
console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // null
```

いくつかの操作は{{domxref("Service_Worker_API","サービスワーカー", "", 1)}}でしか役立ちませんが、ヘッダーを操作するためのより良い API を提供しています。

Headers のメソッドはすべて、有効な HTTP ヘッダーではない名前が渡されたときは `TypeError` が発生します。 immutable ガード ([下記参照](#ガード)) がかかっている場合に変更操作を行った場合も `TypeError` が発生します。それ以外の場合は、暗黙に失敗します。例を示します。

```js
const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log("銀行のふりをしないで下さい！");
}
```

ヘッダーの良い使用方法としては、以下のように、処理を行う前に、コンテンツタイプが正しいかどうか判定する等の使い方があります。

```js
fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));
```

### ガード

ヘッダーは、リクエストで送信でき、レスポンスで受信できます。また、どの情報が変更できる（または、すべき）かといったさまざまな制限があります。そのため、ヘッダーには _guard_ プロパティがあります。これはリクエストやレスポンスに含まれませんが、ヘッダーオブジェクトでできる変更操作に影響を与えます。

設定できるガード値には以下のものがあります。

- `none`: 既定値です。
- `request`: リクエストから得たヘッダーオブジェクト ({{domxref("Request.headers")}}) を保護します。
- `request-no-cors`: {{domxref("Request.mode")}} が `no-cors` で生成されたリクエストから得たヘッダーオブジェクトを保護します。
- `response`: レスポンスから得たヘッダーオブジェクト ({{domxref("Response.headers")}}) を保護します。
- `immutable`: ヘッダーを読み取り専用にします。主にサービスワーカーで使用されます。

> **Note:** `response` のガードされたヘッダーオブジェクトに `Content-Length` ヘッダーを追加したり設定したりすることはできません。同様に、レスポンスヘッダーに `Set-Cookie` を挿入することもできません。サービスワーカーは合成されたレスポンスでクッキーを設定することはできません。

## Response オブジェクト

すでに見てきたように、 {{domxref("Response")}} インスタンスは、 `fetch()` プロミスが解決 (resolve) されたときに返値として渡されます。

使用できる主なレスポンスプロパティには、以下のものがあります。

- {{domxref("Response.status")}} — 整数値 (既定値は 200) で、 HTTP ステータスコードが入ります。
- {{domxref("Response.statusText")}} — HTTP ステータスコードに対応するメッセージの文字列 (既定値は "")。なお、 HTTP/2 ではステータスメッセージに[対応していません](https://fetch.spec.whatwg.org/#concept-response-status-message)。
- {{domxref("Response.ok")}} — 上述の例で使用したように、これは HTTP ステータスコードが 200-299 の範囲にあるかどうかをチェックする略記法です。これは論理値を返します。

Response オブジェクトは JavaScript で動的に作ることもできます。これは{{domxref("Service_Worker_API", "サービスワーカー", "", 1)}}で非常に役立ちます。例えばリクエストを受け取ったときに {{domxref("FetchEvent.respondWith","respondWith()")}} メソッドによってカスタマイズされたレスポンスを返すようなときに役立ちます。

```js
const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});
```

{{domxref("Response.Response","Response()")}} コンストラクターは、オプションとして 2 つの引数をとることができます。レスポンス本文と初期化オブジェクトです。 ({{domxref("Request.Request","Request()")}} が受け取れるものと似ています。)

> **Note:** 静的メソッド {{domxref("Response.error","error()")}} は単純にエラーレスポンスを返します。同様に {{domxref("Response.redirect","redirect()")}} メソッドも 指定した URL にリダイレクトするレスポンスを返します。これらはサービスワーカーにのみ関連しています。

## Body

リクエストにもレスポンスにも本文データが含まれています。本文は以下のタイプのいずれかのインスタンスです。

- {{jsxref("ArrayBuffer")}}
- {{domxref("ArrayBufferView")}} (Uint8Array など)
- {{domxref("Blob")}}/File
- 文字列
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}

{{domxref("Request")}} および {{domxref("Response")}} インターフェイスは本文を展開するために以下のメソッドを持っています。これらはすべて最終的に実際の内容で解決されるプロミスを返します。

- {{domxref("Request.arrayBuffer()")}} / {{domxref("Response.arrayBuffer()")}}
- {{domxref("Request.blob()")}} / {{domxref("Response.blob()")}}
- {{domxref("Request.formData()")}} / {{domxref("Response.formData()")}}
- {{domxref("Request.json()")}} / {{domxref("Response.json()")}}
- {{domxref("Request.text()")}} / {{domxref("Response.text()")}}

これらはテキストでないデータを XHR よりはるかに楽に扱うことができます。

リクエスト本文は、body 引数を渡すことによって設定することができます。

```js
const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});
```

リクエストとレスポンス (および `fetch()` 関数の拡張) は、自動的にコンテンツタイプを決定しようとします。リクエストもまた、指定されていなければ自動で `Content-Type` ヘッダーを設定しようとします。

## 使用可能かどうかの判別

Fetch API が利用できるかどうかは、{{domxref("Headers")}}、{{domxref("Request")}}、{{domxref("Response")}}、{{domxref("fetch()")}} のいずれかが {{domxref("Window")}} もしくは {{domxref("Worker")}} のスコープで参照できるかどうかによって判断できます。例を挙げます。

```js
if (window.fetch) {
  // ここで fetch リクエストを実行
} else {
  // XMLHttpRequest で何か実行する？
}
```

## ポリフィル

対応していないブラウザーでフェッチを使用するには、非対応ブラウザー用の機能を再生成する [Fetch ポリフィル](https://github.com/github/fetch)が利用できます。

## 仕様書

| 仕様書                | 状態               | 備考     |
| --------------------- | ------------------ | -------- |
| {{SpecName('Fetch')}} | {{Spec2('Fetch')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.fetch")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch examples on Github](https://github.com/mdn/fetch-examples/)
