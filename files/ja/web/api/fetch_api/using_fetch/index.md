---
title: フェッチ API の使用
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: fe1d7fb9b67ce826c4a748ce00e7b35ac4a54c7f
---

{{DefaultAPISidebar("Fetch API")}}

[フェッチ API](/ja/docs/Web/API/Fetch_API) は、HTTP リクエストを行い、レスポンスを処理するための JavaScript インターフェイスを提供します。

フェッチは {{domxref("XMLHttpRequest")}} の現代の置き換えです。コールバックを使用する `XMLHttpRequest` とは異なり、フェッチはプロミスベースで、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)や[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) のような現代のウェブの機能と統合されています。

フェッチ API では、{{domxref("Window/fetch", "fetch()")}} を呼び出してリクエストを行います。これは {{domxref("Window", "ウィンドウ", "", "nocode")}}と{{domxref("WorkerGlobalScope", "ワーカー", "", "nocode")}}の両方のコンテキストでグローバル関数として利用できます。このコンテキストには {{domxref("Request")}} オブジェクトか、フェッチする URL を格納した文字列、およびリクエストを構成するためのオプション引数を渡します。

`fetch()` 関数は {{jsxref("Promise")}} を返します。このプロミスはサーバーのレスポンスを表す {{domxref("Response")}} オブジェクトで履行されます。レスポンスに対して適切なメソッドを呼び出すと、リクエストのステータスを調べたり、レスポンス本体をテキストや JSON など様々な形式で取り出すことができます。

以下は `fetch()` を使用してサーバーから JSON データを取得する最小限の関数です。

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
```

URL を格納した文字列を宣言し、`fetch()` を呼び出して、余計なオプションを付けずに URL を渡します。

`fetch()` 関数は何かエラーがあるとプロミスを拒否しますが、サーバーが {{httpstatus("404")}} のようなエラーステータスで応答した場合は拒否しません。したがって、レスポンスのステータスも調べて、OK でない場合はエラーを throw します。

そうでない場合は、`Response` の {{domxref("Response.json()", "json()")}} メソッドを呼び出して、レスポンス本体のコンテンツを {{glossary("JSON")}} として取得し、その値の一つをログ出力します。`fetch()` 自体と同様に、 `json()` はレスポンス本体のコンテンツにアクセスする他のすべてのメソッドと同様に非同期であることに注意してください。

このページの残りの部分では、このプロセスのさまざまな段階を詳しく見ていきます。

## リクエストを行う

リクエストを行うには、 `fetch()` を呼び出して、次のものを渡します。

1. フェッチするリソースの定義。これは以下のいずれかです。
   - URL を格納した文字列。
   - {{domxref("URL")}} のインスタンスなどのオブジェクト、すなわち URL を格納した文字列を生成する{{glossary("stringifier", "文字列化子")}}のあるもの。
   - {{domxref("Request")}} のインスタンス。
2. オプションとして、リクエストを構成するためのオプションを含むオブジェクト。

この節では、よく使用するオプションを見ていきます。指定されるすべてのオプションについては、[`fetch()`](/ja/docs/Web/API/Window/fetch) リファレンスページを参照してください。

### メソッドの設定

既定では、`fetch()` は {{httpmethod("GET")}} リクエストを行いますが、`method` オプションを使用すれば、別の[リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)を使用することができます。

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

`mode` オプションが `no-cors` に設定されている場合、 `method` は `GET`、`POST`、`HEAD` のいずれかでなければなりません。

### 本体の設定

リクエスト本体はリクエストの内容です。クライアントがサーバーに送るものです。`GET` リクエストでは本体を含めることはできませんが、{{httpmethod("POST")}} や {{httpmethod("PUT")}} リクエストのようにサーバーにコンテンツを送信するリクエストでは有益です。例えば、サーバーにファイルをアップロードしたい場合、`POST` リクエストを行い、リクエスト本体にファイルを含めることができます。

リクエスト本体を設定するには、`body` オプションとして渡します。

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

本体は、以下いずれかの型のインスタンスとして指定できます。

- 文字列
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}
- {{domxref("ReadableStream")}}

それ以外のオブジェクトは、`toString()` メソッドを使用して文字列に変換されます。例えば、{{domxref("URLSearchParams")}} オブジェクトを使用してフォームデータをエンコードすることができます（詳細については[ヘッダーの設定](#ヘッダーの設定)を参照してください）。

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // 自動的に "username=example&password=password" に変換される
  body: new URLSearchParams({ username: "example", password: "password" }),
  // …
});
```

レスポンス本体と同様に、リクエスト本体はストリームであり、リクエストを作成するとストリームを読み込むので、リクエストが本体を含む場合、2 回作成することはできないことに注意してください。

```js example-bad
const request = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const response1 = await fetch(request);
console.log(response1.status);

// 例外が発生: "Body has already been consumed."
const response2 = await fetch(request);
console.log(response2.status);
```

その代わりに、リクエストを送信する前に{{domxref("Request.clone()", "複製を作成する", "", "nocode")}}する必要があります。

```js
const request1 = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const request2 = request1.clone();

const response1 = await fetch(request1);
console.log(response1.status);

const response2 = await fetch(request2);
console.log(response2.status);
```

詳しくは、[ロックされ妨害されたストリーム](#ロックされ妨害されたストリーム)を参照してください。

### ヘッダーの設定

リクエストヘッダーは、リクエストに関する情報をサーバーに与えます。例えば `POST` リクエストの中で、 {{httpheader("Content-Type")}} ヘッダーは、リクエスト本体の形式をサーバーに指示します。

リクエストヘッダーを設定するには、`headers` オプションに割り当ててください。

ここには `ヘッダー名: ヘッダー値` の形でプロパティを格納したオブジェクトリテラルを渡すことができます。

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" }),
  // …
});
```

あるいは、{{domxref("Headers")}} オブジェクトを構築し、{{domxref("Headers.append()")}} を使用してそのオブジェクトにヘッダーを追加し、`Headers` オブジェクトを `headers` オプションに割り当てることもできます。

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "example" }),
  // …
});
```

プレーンオブジェクトを使用する場合と比較して、`Headers`オブジェクトはさらにいくつかの入力サニタイズ機能を提供します。例えば、ヘッダー名を小文字に正規化し、ヘッダー値の先頭と末尾の空白を削除し、特定のヘッダーが設定されるのを防ぎます。多くのヘッダーはブラウザーで自動的に設定され、スクリプトによって設定することはできません。これらは{{glossary("Forbidden request header", "禁止リクエストヘッダー")}}と呼ばれます。 {{domxref("Request.mode", "mode")}} オプションが `no-cors` に設定されている場合、許可されるヘッダーのセットはさらに制限されます。

### GET リクエストでのデータの送信

`GET` リクエストには本体がありませんが、クエリー文字列として URL にデータを追加することで、サーバーにデータを送信できます。これはフォームデータをサーバーに送信する一般的な方法です。 {{domxref("URLSearchParams")}} を使用してデータをエンコードし、 URL に追加することで実現できます。

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET リクエストは https://example.org/login?username=example に送られる
const response = await fetch(`https://example.org/login?${params}`);
```

### オリジン間リクエストを行う

オリジン間のリクエストができるかどうかは {{domxref("RequestInit", "", "mode")}} オプションの値で決まります。これは `cors`、`same-origin`、`no-cors` の 3 つの値のいずれかを取ります。

- フェッチリクエストでは、`mode`の既定値は`cors`です。これは、リクエストがオリジンをまたぐ場合、[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) の仕組みを使用するという意味です。具体的には以下の通りです。
  - リクエストが[単純リクエスト](/ja/docs/Web/HTTP/Guides/CORS#単純リクエスト)の場合、リクエストは常に送信されますが、サーバーは正しい {{httpheader("Access-Control-Allow-Origin")}} ヘッダーで応答しなければなりません。
  - リクエストが単純なリクエストでない場合、ブラウザーは[プリフライトリクエスト](/ja/docs/Web/HTTP/Guides/CORS#プリフライトリクエスト)を送信して、サーバーが CORS を理解し、リクエストを許可しているか調べ、サーバーが適切な CORS ヘッダーでプリフライトリクエストに応答しない限り、実際のリクエストは送信されません。

- `mode` を `same-origin` に設定すると、オリジン間のリクエストを完全に禁止します。

- `mode` を `no-cors` に設定すると、オリジンを越えるリクエストに対する CORS が無効化されます。これにより、設定可能なヘッダーが制限され、メソッドは GET、HEAD、POST に限定されます。レスポンスは不透明となり、そのヘッダーと本体は JavaScript で利用できません。ほとんどの場合、ウェブサイトは `no-cors` を使用すべきではありません。主な用途は特定のサービスワーカーの用途に限られます。

詳細については、{{domxref("RequestInit", "", "mode")}} のリファレンスドキュメントを参照してください。

### 資格情報を含める

フェッチ API のコンテキストにおいて、資格情報とはリクエストと共に送信される追加データであり、サーバーがユーザーの認証に使用することができるものです。次のアイテムはすべて資格情報と見なされます。

- HTTP クッキー
- {{glossary("TLS")}} クライアント証明書
- {{httpheader("Authorization")}} および {{httpheader("Proxy-Authorization")}} ヘッダー

既定では、資格情報は同一オリジンリクエストにのみ含まれます。この動作をカスタマイズしたり、ブラウザーが **`Set-Cookie`** レスポンスヘッダーを尊重するかどうかを制御したりするには、[`credentials`](/ja/docs/Web/API/RequestInit#credentials) オプションを設定 してください。このオプションには以下の 3 つの値のいずれかを指定できます。

- `omit`: リクエストに資格情報を送信したり、レスポンスに資格情報を含めたりしません。
- `same-origin` （既定値）: 同一オリジンのリクエストに対してのみ資格情報を送信し、含めます。
- `include`: オリジンをまたいだ場合であっても常に資格情報を含めます。

クッキーの [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 属性が `Strict` または `Lax` に設定されている場合、`credentials` が `include` に設定されていても、クッキーはサイトをまたいで送信されないことに注意してください。

そのため、たとえ `credentials` が `include` に設定されていても、サーバーはレスポンスに {{httpheader("Access-Control-Allow-Credentials")}} ヘッダーを記載することで、資格情報を含めることに同意しなければなりません。さらに、この状況ではサーバーは {{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーでクライアントの元のサーバーを明示的に指定しなければなりません（つまり、`*` は許可されません）。

つまり、`credentials` が `include` に設定されていて、リクエストがオリジンをまたぐ場合、次のようになります。

- リクエストが [単純リクエスト](/ja/docs/Web/HTTP/Guides/CORS#単純リクエスト)の場合、リクエストは資格情報と共に送信されますが、サーバーは {{httpheader("Access-Control-Allow-Credentials")}} と {{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーを設定しなければなりません。サーバーが正しいヘッダーを設定した場合、資格情報を含むレスポンスが呼び出し元に配送されます。

- リクエストが単純なリクエストでない場合、ブラウザーは資格情報なしの[プリフライトリクエスト](/ja/docs/Web/HTTP/Guides/CORS#プリフライトリクエスト)を送信し、サーバーは {{httpheader("Access-Control-Allow-Credentials")}} と {{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーを設定しなければ、ブラウザーは呼び出し元にネットワークエラーを返します。サーバーが正しいヘッダーを設定した場合、ブラウザーは資格情報を含む本当のリクエストに続き、資格情報を含む本当のレスポンスを呼び出し元に送ります。

### `Request` オブジェクトの作成

{{domxref("Request.Request()", "Request()")}} コンストラクターは `fetch()` 自体と同じ引数を取ります。これは、オプションを `fetch()` に渡す代わりに、同じオプションを `Request()` コンストラクターに渡して、そのオブジェクトを `fetch()` に渡すことができるということです。

例えば、次のようなコードを用いて `fetch()` にオプションを渡すことで POST リクエストを行うことができます。

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

しかし、同じ引数を `Request()` コンストラクターに渡すように書き換えることもできます。

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myRequest = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});

const response = await fetch(myRequest);
```

これは、2 つ目の引数を使用してプロパティの一部を変更しながら、 別のリクエストからリクエストを作成することができるということでもあります。

```js
async function post(request) {
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("成功:", result);
  } catch (error) {
    console.error("エラー:", error);
  }
}

const request1 = new Request("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example1" }),
});

const request2 = new Request(request1, {
  body: JSON.stringify({ username: "example2" }),
});

post(request1);
post(request2);
```

## リクエストの中止

リクエストを中止できるようにするには、{{domxref("AbortController")}} を作成し、{{domxref("AbortSignal")}} をリクエストの `signal` プロパティに割り当てます。

リクエストを中止するには、コントローラーの {{domxref("AbortController.abort()", "abort()")}} メソッドを呼び出します。`fetch()` を呼び出すと、例外 `AbortError` が発生してプロミスが拒否されます。

```js
const controller = new AbortController();

const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async () => {
  try {
    console.log("フェッチを開始");
    const response = await fetch("https://example.org/get", {
      signal: controller.signal,
    });
    console.log(`レスポンス: ${response.status}`);
  } catch (e) {
    console.error(`エラー: ${e}`);
  }
});

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {
  controller.abort();
  console.log("フェッチを中止");
});
```

`fetch()` が履行された後で、レスポンス本体を読み込む前にリクエストが中止された場合、レスポンス本体を読み込もうとすると `AbortError` 例外が発生して拒否されます。

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // 次の行では `AbortError` が発生
  const text = await response.text();
  console.log(text);
}
```

## レスポンスの処理

ブラウザーがサーバーからレスポンスステータスとヘッダーを受け取るとすぐに（潜在的にはレスポンス本体を受け取る前に）、`fetch()` が返すプロミスは {{domxref("Response")}} オブジェクトで履行されます。

### レスポンスステータスのチェック

`fetch()` が返すプロミスは、ネットワークエラーや不正なスキームなどのエラーでは拒否されます。しかし、サーバーが {{httpstatus("404")}} のようなエラーで応答した場合、 `fetch()` は `Response` で履行されるので、レスポンス本体を読み込む前にステータスを調べる必要があります。

{{domxref("Response.status")}} プロパティはステータスコードを数値で指示し、{{domxref("Response.ok")}} プロパティはステータスが [200 番台](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)の場合は `true` を返します。

よくあるパターンは、`ok` の値を調べて `false` なら例外を発生させることです。

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }
    // …
  } catch (error) {
    console.error(error.message);
  }
}
```

### レスポンス型のチェック

レスポンスには {{domxref("Response.type", "type")}} プロパティがあり、以下のいずれかになります。

- `basic`: リクエストが同一オリジンリクエストだった。
- `cors`: リクエストがオリジン間の CORS リクエストだった。
- `opaque`: リクエストは `no-cors` モードで行われた単純なオリジン間リクエストだった。
- `opaqueredirect`: リクエストで `redirect` オプションが `manual` に設定されており、サーバーが[リダイレクトステータス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)を返した。

型はレスポンスに入りうる内容を、以下のように決定します。

- 基本レスポンスは{{glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}リストにあるレスポンスヘッダーを除外します。

- CORS レスポンスは {{glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}リストのレスポンスヘッダーのみを含みます。

- 不透明なレスポンスと不透明なリダイレクトレスポンスは `status` が `0`、ヘッダーリストが空、そして本体が `null` になります。

### ヘッダーのチェック

リクエストと同じように、レスポンスにも {{domxref("Response.headers", "headers")}} オブジェクトである {{domxref("Headers")}} プロパティがあり、 レスポンス型に基づく除外に従って、スクリプトに公開されるレスポンスヘッダーが格納されます。

この一般的な用途は、本体を読もうとする前にコンテンツ型を調べることです。

```js
async function fetchJSON(request) {
  try {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("残念、受信したのは JSON ではなかった！");
    }
    // それ以外の場合、本体を JSON として読み取れる
  } catch (error) {
    console.error("エラー:", error);
  }
}
```

### レスポンス本体の読み取り

`Response` インターフェイスには、本体のコンテンツ全体を様々な形式で取得するためのメソッドがあります。

- {{domxref("Response.arrayBuffer()")}}
- {{domxref("Response.blob()")}}
- {{domxref("Response.formData()")}}
- {{domxref("Response.json()")}}
- {{domxref("Response.text()")}}

これらはすべて非同期メソッドで、本体のコンテンツで履行される {{jsxref("Promise")}} を返します。

この例では、画像を読み取って {{domxref("Blob")}} として読み込み、それを使用してオブジェクト URL を作成することができます。

```js
const image = document.querySelector("img");

const url = "flowers.jpg";

async function setImage() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  } catch (e) {
    console.error(e);
  }
}
```

このメソッドでは、レスポンス本体が適切な形式でない場合に例外が発生します。例えば、JSONとして解釈できないレスポンスに対して `json()` を呼び出した場合などです。

### レスポンス本体のストリーミング

リクエスト本体とレスポンス本体は、実際には {{domxref("ReadableStream")}} オブジェクトであり、それらを読むときは常にコンテンツをストリーミングしています。これはメモリー効率が良くなります。呼び出し側が `json()` のようなメソッドを使用してレスポンスを取得する前に、 ブラウザーがレスポンス全体をメモリーにバッファリングする必要がないからです。

また、これは呼び出し側がコンテンツを受信したときに増加しながら処理できることを意味しています。

例えば、大きなテキストファイルを読み取って、それを何か方法で処理したり、ユーザーに表示したりする `GET` リクエストを考えてみましょう。

```js
const url = "https://www.example.org/a-large-file.txt";

async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.error(e);
  }
}
```

上記のように {{domxref("Response.text()")}} を使用することができますが、ファイル全体を受信するまで待たなければなりません。

代わりにレスポンスをストリーミングすると、本体をネットワークから受信した塊のままで処理することができます。

```js
const url = "https://www.example.org/a-large-file.txt";

async function fetchTextAsStream(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }

    const stream = response.body.pipeThrough(new TextDecoderStream());
    for await (const value of stream) {
      console.log(value);
    }
  } catch (e) {
    console.error(e);
  }
}
```

この例では、{{jsxref("Statements/for-await...of", "iterate asynchronously", "", "nocode")}} ストリームを処理し、到着したそれぞれの塊を処理しています。

このように本体に直接アクセスすると、レスポンスの生のバイト列を取得し、それを自分で変換しなければならないことに注意しましょう。この場合、{{domxref("ReadableStream.pipeThrough()")}} を呼び出して {{domxref("TextDecoderStream")}} にレスポンスを通し、UTF-8 エンコードされた本体データをテキストとしてデコードします。

### テキストファイルを 1 行ずつ処理する

下記の例では、テキストリソースを取得し、それを行ごとに処理し、正規表現を使って行末を探しています。分かりやすいように、テキストは UTF-8 を想定し、読み取りエラーは処理しません。

```js
async function* makeTextFileLineIterator(fileURL) {
  const response = await fetch(fileURL);
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  let { value: chunk = "", done: readerDone } = await reader.read();

  const newline = /\r?\n/g;
  let startIndex = 0;

  while (true) {
    const result = newline.exec(chunk);
    if (!result) {
      if (readerDone) break;
      const remainder = chunk.slice(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk || "");
      startIndex = newline.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = newline.lastIndex;
  }

  if (startIndex < chunk.length) {
    // 最後の行が改行文字で終わっていない
    yield chunk.substring(startIndex);
  }
}

async function run(urlOfFile) {
  for await (const line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

function processLine(line) {
  console.log(line);
}

run("https://www.example.org/a-large-file.txt");
```

### ロックされ妨害されたストリーム

リクエスト本体とレスポンス本体がストリームであることの結果は以下のとおりです：

- `ReadableStream.getReader()` を使用してストリームにリーダーが接続されている場合、そのストリームはロックされ、他の誰もストリームを読むことができません。
- もしストリームから何らかのコンテンツが読み取られた場合、ストリームは妨害され、ストリームから読み取ることはできません。

これは、同じレスポンス（またはリクエスト）本体を複数回読み取ることは不可能であるということです。

```js example-bad
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }

    const result1 = await response.json();
    const result2 = await response.json(); // 例外が発生
  } catch (error) {
    console.error(error.message);
  }
}
```

本体を複数回読み込む必要がある場合は、本体を読み込む前に {{domxref("Response.clone()")}} を呼び出す必要があります。

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response1 = await fetch(url);
    if (!response1.ok) {
      throw new Error(`レスポンスステータス: ${response1.status}`);
    }

    const response2 = response1.clone();

    const result1 = await response1.json();
    const result2 = await response2.json();
  } catch (error) {
    console.error(error.message);
  }
}
```

これは[サービスワーカーのオフラインキャッシュ実装](/ja/docs/Web/Progressive_web_apps/Guides/Caching)でよくあるパターンです。サービスワーカーはアプリにレスポンスを返しますが、同時にレスポンスをキャッシュすることも望んでいます。そのため、レスポンスを複製して元を返し、複製をキャッシュします。

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [ストリーム API](/ja/docs/Web/API/Streams_API)
- [CORS](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
- [Fetch の例 (GitHub)](https://github.com/mdn/dom-examples/tree/main/fetch)
