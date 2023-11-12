---
title: Response()
slug: Web/API/Response/Response
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Fetch")}}

**`Response()`** コンストラクターは、新しい {{domxref("Response")}} オブジェクトを生成します。

## 構文

```js-nolint
new Response()
new Response(body)
new Response(body, options)
```

### 引数

- `body` {{optional_inline}}

  - : レスポンスの本体を定義するオブジェクトです。これは `null` （既定値）か、以下のうちのいずれかです。

    - {{domxref("Blob")}}
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("TypedArray")}}
    - {{jsxref("DataView")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{jsxref("String")}}
    - 文字列リテラル

- `options` {{optional_inline}}

  - : レスポンスに適用したオプションで、カスタム設定したい場合の可能なオプションは、次のとおりです。:

    - `status`
      - : このレスポンスのステータスコードです。（例: `200`）
    - `statusText`
      - : ステータスコードに関連付けられたステータスメッセージです（例: `OK`など)
    - `headers`
      - : レスポンスに追加したいヘッダーです。{{domxref("Headers")}} オブジェクト、または {{jsxref("String")}} キー/値ペアのオブジェクトリテラルに含まれています（参考として [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)をご覧ください）。

## 例

[Fetch Response の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) （[Fetch Response のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-response/)を参照）では、コンストラクターを使用して新しい `Response` オブジェクトを作成します。その際、新しい {{domxref("Blob")}} を本体として、またカスタム `status` と `statusText` を含む init オブジェクトを渡します。

```js
const myBlob = new Blob();
const myOptions = { status: 200, statusText: "SuperSmashingGreat!" };
const myResponse = new Response(myBlob, myOptions);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
