---
title: "Response: json() 静的メソッド"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Fetch API")}}

**`json()`** は {{domxref("Response")}} インターフェイスの静的メソッドで、指定された JSON データを本体とし、{{HTTPHeader("Content-Type")}} ヘッダーを `application/json` に設定したレスポンスを返します。
レスポンスステータス、ステータスメッセージ、追加のヘッダーも設定することができます。

このメソッドを使うと、JSON エンコードされたデータを返すための `Response` オブジェクトを簡単に作成できます。
例えば、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)はブラウザーが行うフェッチリクエストへ介入し、`json()` を使用して、メインスレッドに返すために `Response` をキャッシュされた JSON データから構築するかもしれません。
`json()` メソッドは、[単一ページアプリケーション](/ja/docs/Glossary/SPA)や JSON レスポンスが期待される他のアプリケーションで JSON データを返すためにサーバーコードで使用することもできます。

## 構文

```js-nolint
Response.json(data)
Response.json(data, options)
```

### 引数

- `data`
  - : レスポンス本体として使用する JSON データ。
- `options` {{optional_inline}}

  - : レスポンスの設定（ステータスコード、ステータステキスト、ヘッダーなど）の入ったオプションオブジェクト。
    これは、{{domxref("Response.Response", "Response()")}} コンストラクターのオプション引数と同じです。

    - `status`
      - : レスポンスのステータスコード、例えば `200` です。
    - `statusText`
      - : ステータスコードに関連付けられたステータスメッセージ。
        ステータスが `200` の場合、これは `OK` になるでしょう。
    - `headers`
      - : レスポンスに追加したいヘッダーを、{{domxref("Headers")}} オブジェクト、または文字列のキーと値の組からなるオブジェクトリテラル（リファレンスは [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)を参照ください）に入れたものです。

### 返値

{{domxref("Response")}} オブジェクトです。

### 例外

- `TypeError`
  - : `data` が JSON 文字列に変換できない場合に発生します。
    これは、渡されたデータがメソッドを持つ JavaScript オブジェクトであったり、参照するオブジェクトが循環参照であったり、渡されたオブジェクトが `undefined` である場合に発生するかもしれません。

## 例

### JSON データによる Response

このライブサンプルでは、JSONレスポンスオブジェクトを作成する方法を示し、検査のために新しく作成されたオブジェクトをログ出力します（ログ出力コードは関係ないので示していません）。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await jsonResponse.text();
  log(`body: ${responseText}`);
  jsonResponse.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${jsonResponse.status}`);
  log(`statusText: ${jsonResponse.statusText}`);
  log(`type: ${jsonResponse.type}`);
  log(`url: ${jsonResponse.url}`);
  log(`ok: ${jsonResponse.ok}`);
  log(`redirected: ${jsonResponse.redirected}`);
  log(`bodyUsed: ${jsonResponse.bodyUsed}`);
}
```

下記のコードは `Response` オブジェクトを作成し、JSON 本体を `{ my: "data" }` で、ヘッダーは `application/json` に設定します。

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

このオブジェクトには以下のプロパティがあります。
本体とヘッダーは期待通りに設定されており、既定のステータスは `200` に設定されていることに注意してください。

{{EmbedLiveSample('json_データによる_response','100%', '170')}}

### JSON データとオプションのついた Response

この例では、`status` と `statusText` オプションを指定して JSON レスポンスオブジェクトを作成する方法を示します。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await jsonResponse.text();
  log(`body: ${responseText}`);
  jsonResponse.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${jsonResponse.status}`);
  log(`statusText: ${jsonResponse.statusText}`);
  log(`type: ${jsonResponse.type}`);
  log(`url: ${jsonResponse.url}`);
  log(`ok: ${jsonResponse.ok}`);
  log(`redirected: ${jsonResponse.redirected}`);
  log(`bodyUsed: ${jsonResponse.bodyUsed}`);
}
```

下記のコードは `Response` オブジェクトを作成し、JSON 本体に `{ some: "data", more: "information" }` を、ヘッダーには `application/json` を設定します。
また、ステータスを `307` に設定し、適切なステータステキスト ("Temporary Redirect") を設定します。

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

オブジェクトは以下のプロパティを保有しており、これらは期待どおりに設定されています。
ステータスの値が 200 から 299 の範囲にないため、レスポンスの `ok` プロパティが `false` に変更されたことに注意してください。

{{EmbedLiveSample('json_データとオプションのついた_response','100%', '170')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
