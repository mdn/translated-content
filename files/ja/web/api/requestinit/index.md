---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 0ffc63a13598470ddb4a4d3281800eeb2bf6ae2b
---

{{APIRef("Fetch API")}}

**`RequestInit`** は[フェッチ API](/ja/docs/Web/API/Fetch_API) の辞書で、[フェッチリクエスト](/ja/docs/Web/API/Window/fetch)を構成するのに使用する一連のオプションを表します。

`RequestInit` オブジェクトは {{domxref("Request.Request()", "Request()")}} コンストラクターに渡したり、直接 [`fetch()`](/ja/docs/Web/API/Window/fetch) 関数呼び出しに渡したりすることができます。

また、`Request` を `RequestInit` で作成し、その `Request` を `fetch()` に別の `RequestInit` と一緒に渡すこともできます。この場合、両方の場所で同じオプションが設定されていれば、直接 `fetch()` に渡された値が使用されます。

## インスタンスプロパティ

- `attributionReporting` {{optional_inline}} {{experimental_inline}}
  - : このリクエストのレスポンスに JavaScript ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers)を登録できるようにしたいことを示します。`attributionReporting` は以下のプロパティを格納するオブジェクトです。
    - `eventSourceEligible`
      - : 論理値。`true` に設定すると、このリクエストのレスポンスは帰属ソースの登録の対象となります。`false` に設定すると、対象になりません。
    - `triggerEligible`
      - : 論理値。`true` に設定すると、このリクエストのレスポンスは帰属トリガーの登録の対象となります。`false` に設定すると、対象になりません。

    詳しくは [Attribution Reporting API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

- `body` {{optional_inline}}
  - : サーバーに送信する内容を含むリクエスト本体です。例えば {{httpmethod("POST")}} または {{httpmethod("PUT")}} リクエストで使用されます。 以下のいずれかの型のインスタンスとして指定します。
    - 文字列
    - {{jsxref("ArrayBuffer")}}
    - {{domxref("Blob")}}
    - {{jsxref("DataView")}}
    - {{domxref("File")}}
    - {{domxref("FormData")}}
    - {{jsxref("TypedArray")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("ReadableStream")}}

    詳しくは[本体の設定](/ja/docs/Web/API/Fetch_API/Using_Fetch#本体の設定)を参照してください。

- `browsingTopics` {{optional_inline}} {{experimental_inline}}
  - : 論理値で、現在のユーザーのために選択されたトピックを、 リクエストに関連付けられた {{httpheader("Sec-Browsing-Topics")}} ヘッダーで送ることを指定します。

    詳しくは [Using the Topics API](/ja/docs/Web/API/Topics_API/Using) を参照してください。

- `cache` {{optional_inline}}
  - : リクエストに使用したい[キャッシュモード](/ja/docs/Web/API/Request/cache)を指定します。以下の値のいずれかを指定します。
    - `default`
      - : ブラウザーはリクエストに一致するレスポンスを HTTP キャッシュから探します。
        - 一致したものがあり[新しい](/ja/docs/Web/HTTP/Guides/Caching#age_に基づく新鮮さと古さ)場合、それをキャッシュから返します。
        - もし一致するものがあっても[古い](/ja/docs/Web/HTTP/Guides/Caching#age_に基づく新鮮さと古さ)場合は、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)を行います。サーバーがリソースが変更されていないことを示した場合、そのリソースはキャッシュから返されます。そうでなければ、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
        - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードされたリソースでキャッシュを更新します。

    - `no-store`
      - : ブラウザーは最初にキャッシュを見ずにリモートサーバーからリソースを取得し、ダウンロードしたリソースでキャッシュを更新しません。
    - `reload`
      - : ブラウザーは最初のキャッシュを見ずにリモートサーバーからリソースを取得しますが、ダウンロードしたリソースでキャッシュを更新します。
    - `no-cache`
      - : ブラウザーは、リクエストに一致するレスポンスがないか、HTTP キャッシュを探します。
        - 一致するものがあれば、新しいか古いかを問わず、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)を行います。サーバーがリソースが変更されていないことを示した場合、そのリソースはキャッシュから返されます。そうでなければ、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
        - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードされたリソースでキャッシュを更新します。

    - `force-cache`
      - : ブラウザーは、リクエストに一致するレスポンスを HTTP キャッシュから探します。
        - 一致するものがあれば、新しいか古いかを問わず、それをキャッシュから返します。
        - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードされたリソースでキャッシュを更新します。

    - `only-if-cached`
      - : ブラウザーは、リクエストに一致するレスポンスを HTTP キャッシュから探します。 {{experimental_inline}}
        - 一致するものがあれば、新しいか古いかを問わず、それをキャッシュから返します。
        - 一致するものがない場合は、ネットワークエラーを返します。

    `"only-if-cached"` モードはリクエストの [`mode`](/ja/docs/Web/API/Request/mode) が `"same-origin"` である場合にのみ使用することができます。リクエストの `redirect` プロパティが `"follow"` で、かつ `"same-origin"` モードに違反していなければ、キャッシュされたリダイレクトに従います。

- `credentials` {{optional_inline}}
  - : ブラウザーがリクエストと共に資格情報を送るかどうか、また **`Set-Cookie`** レスポンスヘッダーを尊重するかどうかを制御します。資格情報とはクッキー、{{glossary("TLS")}} クライアント証明書、またはユーザー名とパスワードを格納した認証ヘッダーです。このオプションには以下の任意の値が指定できます。
    - `omit`
      - : リクエストで資格情報を送信したり、レスポンスに資格情報を含めたりしません。
    - `same-origin`
      - : 同一オリジンのリクエストに対してのみ資格情報を送信し、含めます。
    - `include`
      - : オリジン間リクエストであっても、常に資格情報を含めます。

    オリジン間のリクエストに資格情報を含めると、{{glossary("CSRF")}} 攻撃を受けやすくなる可能性があります。そのため、`credentials` が `include` に設定されていても、{{httpheader("Access-Control-Allow-Credentials")}} をレスポンスに含めることで、サーバーも資格情報を含めることに同意する必要があります。さらに、この状況ではサーバーは{{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーでクライアントのオリジンのサーバーを明示的に指定しなければなりません（つまり、`*` は許可されません）。

    詳しくは[資格情報を含める](/ja/docs/Web/API/Fetch_API/Using_Fetch#資格情報を含める)を参照してください。

    既定値は `same-origin` です。

- `headers` {{optional_inline}}
  - : リクエストに追加したいヘッダーで、 {{domxref("Headers")}} オブジェクト、またはキーがヘッダー名で値がヘッダー値であるオブジェクトリテラルが入ります。

    多くのヘッダーはブラウザーによって自動的に設定され、スクリプトによって設定することはできません。これらは{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}と呼ばれています。

    `mode` オプションが `no-cors` に設定されている場合、{{glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}のみを設定することができます。

    詳しくは[ヘッダーの設定](/ja/docs/Web/API/Fetch_API/Using_Fetch#ヘッダーの設定)を参照してください。

- `integrity` {{optional_inline}}
  - : このリクエストの[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)の値を保持します。

    これは {{htmlelement("script")}} 要素に [`integrity`](/ja/docs/Web/HTML/Reference/Elements/script#integrity) 属性を設定したときと同じように、リソースをフェッチしたときに調べられます。ブラウザーはフェッチされたリソースの {{glossary("Cryptographic_hash_function", "hash")}} を指定されたアルゴリズムで計算し、その結果が指定された値と一致しない場合、ネットワークエラーでフェッチリクエストを拒否します。

    このオプションは `<hash-algo>-<hash-source>` という書式です。
    - `<hash-algo>` は `sha256`、`sha384`、`sha512` のいずれかです。
    - `<hash-source>` は指定したハッシュアルゴリズムでリソースをハッシュした結果の {{glossary("base64", "Base64 エンコーディング")}}です。

    既定値は空文字列です。

- `keepalive` {{optional_inline}}
  - : 論理値。
    `true` に設定すると、リクエストが完全に完了する前にリクエストを開始したページが読み込まれなくなった場合でも、関連付けられたリクエストが中止されなくなります。
    これにより、ユーザーがページから離れたり閉じたりした場合でも、 {{domxref('Window.fetch','fetch()')}} リクエストによりセッションの終わりに分析データを送信することができます。

    これは、同じ目的で {{domxref("Navigator.sendBeacon()")}} を使用するよりもいくつかの利点があります。
    例えば、 [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) 以外の HTTP メソッドを使用することができます。また、リクエストプロパティをカスタマイズしたり、フェッチのプロミス ({{jsxref("Promise")}}) の履行を通じて、サーバーレスポンスにアクセスしたりすることができます。
    [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)でも利用可能です。

    `keepalive` リクエストの本体サイズは 64 キロバイトに制限されています。

    既定値は `false` です。

- `method` {{optional_inline}}
  - : [リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)です。

    既定値は {{httpmethod("GET")}} です。

- `mode` {{optional_inline}}
  - : オリジン間リクエストの動作を設定します。以下の値のいずれかです。
    - `same-origin`
      - : オリジン間リクエストを許可しません。 `same-origin` リクエストが異なるオリジンに送信された場合、ネットワークエラーが発生します。

    - `cors`
      - : このリクエストがオリジン間リクエストであった場合、[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) の仕組みを使用します。 {{glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}のみがレスポンスに公開されます。

    - `no-cors`
      - : オリジン間リクエストで CORS を無効にします。このオプションには、次の制限があります。
        - メソッドは `HEAD`、`GET`、`POST` のいずれかである必要があります。
        - ヘッダーは {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}} のみですが、さらなる制約として {{httpheader("Range")}} ヘッダーも許可されません。これはサービスワーカーが追加したヘッダーにも適用されます。
        - レスポンスは不透明となり、ヘッダーと本体は JavaScript から利用できず、{{domxref("Response.status", "ステータスコード", "", "nocode")}}は常に `0` になります。

        `no-cors` の主な適用例はサービスワーカーです。 `no-cors` リクエストに対するレスポンスは JavaScript で読み取ることができませんが、サービスワーカーでキャッシュし、横取りしたフェッチリクエストに対するレスポンスとして使用することができます。この状況ではリクエストが成功したかどうかがわからないため、キャッシュされたレスポンスをネットワークから更新できるキャッシュ戦略を採用すべきです（例えば、[キャッシュ更新付きのキャッシュ優先](/ja/docs/Web/Progressive_web_apps/Guides/Caching#キャッシュ更新付きのキャッシュ優先)など）。

    - `navigate`
      - : HTML ナビゲーションでのみ使用します。`navigate` リクエストは文書間を移動するときにのみ作成されます。

    詳しくは、[オリジン間リクエストを行う](/ja/docs/Web/API/Fetch_API/Using_Fetch#オリジン間リクエストを行う)を参照してください。

    既定値は `cors` です。

- `priority` {{optional_inline}}
  - : 同じ種類の他のリクエストに対する、この読み込みリクエストの優先度を指定します。以下の文字列のいずれかでなければなりません。
    - `high`
      - : 同じ種類の他のリクエストに対する優先度の高いフェッチリクエスト。
    - `low`
      - : 同じ種類の他のリクエストと相対した、優先度の低いフェッチリクエスト。
    - `auto`
      - : フェッチの優先度をユーザーが設定しません。
        これは値を設定しない場合や無効な値が設定された場合に使用されます。

    既定値は `auto` です。

- `redirect` {{optional_inline}}
  - : サーバーが[リダイレクトステータス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)でレスポンスした場合のブラウザー動作を決定します。以下の値のいずれかです。
    - `follow`
      - : 自動的にリダイレクトを行います。
    - `error`
      - : リダイレクトステータスを返ると、ネットワークエラーでプロミスを拒否します。
    - `manual`
      - : ほとんどすべてのフィールドがフィルターされたレスポンスを返し、サービスワーカーがそのレスポンスを格納して、後で再生できるようにします。

    既定値は `follow` です。

- `referrer` {{optional_inline}}
  - : リクエストの {{httpheader("Referer")}} ヘッダーに使用する値を指定する文字列。以下のいずれかを指定します。
    - 同じオリジンの相対 URL または絶対 URL
      - : 参照するヘッダー `Referer` を指定された値に設定します。相対 URL はリクエストを行ったページの URL に対して相対的に解決されます。
    - 空文字列
      - : `Referer` ヘッダーを除外します。
    - `about:client`
      - : ヘッダー `Referer` にはリクエストのコンテキスト（例えばリクエストを行ったページの URL）の既定値を設定します。

    既定値は `about:client` です。

- `referrerPolicy` {{optional_inline}}
  - : 文字列で、{{httpheader("Referer")}} ヘッダーのポリシーを設定します。このオプションの構文と意味づけは {{httpheader("Referrer-Policy")}} ヘッダーの場合とまったく同じです。
- `signal` {{optional_inline}}
  - : {{domxref("AbortSignal")}} です。このオプションを設定すると、対応する `AbortController` で {{domxref("AbortController.abort()", "abort()")}} を呼び出すことでリクエストを中止することができます。

## 例

### `fetch()` にオプションを渡す

この例では、`method`、`body`、`headers` オプションを [`fetch()`](/ja/docs/Web/API/Window/fetch) メソッド呼び出しに直接渡しています。

```js
async function post() {
  const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.status);
}
```

### `Request()` コンストラクターにオプションを渡す

この例では {{domxref("Request")}} を作成し、そのコンストラクターに同じオプション設定をして `fetch()` にリクエストを渡します。

```js
async function post() {
  const request = new Request("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await fetch(request);

  console.log(response.status);
}
```

### `Request()` と `fetch()` の両方にオプションを渡す

この例では {{domxref("Request")}} を作成し、 `method`、`headers`、`body` オプションをコンストラクターに渡します。そして、`body` と `referrer` オプションとともに `fetch()` にリクエストを渡します。

```js
async function post() {
  const request = new Request("https://example.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "example1" }),
  });

  const response = await fetch(request, {
    body: JSON.stringify({ username: "example2" }),
    referrer: "",
  });

  console.log(response.status);
}
```

この場合、リクエストは以下のオプションと共に送信されます。

- `method: "POST"`
- `headers: {"Content-Type": "application/json"}`
- `body: '{"username":"example2"}'`
- `referrer: ""`

## 仕様書

{{Specifications}}

## 関連情報

- [フェッチの使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
