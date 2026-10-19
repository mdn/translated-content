---
title: "Request: bytes() メソッド"
short-title: bytes()
slug: Web/API/Request/bytes
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`bytes()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、{{jsxref("Uint8Array")}} で解決するプロミスとしてそれを返します。

## 構文

```js-nolint
bytes()
```

### 引数

なし。

### 返値

{{jsxref("Uint8Array")}} で解決するプロミスです。

### 例外

- {{jsxref("TypeError")}}
  - : 以下のどちらかの理由で発生します。
    - リクエストの本文が[変更中またはロック済み](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)である。
    - 本文のコンテンツをデコードする際にエラーが発生した（例えば、{{httpheader("Content-Encoding")}} ヘッダーが正しくないなど）。
- {{jsxref("RangeError")}}
  - : 関連付けられた `ArrayBuffer` を生成する際に問題が発生した場合（例えば、データサイズが大きすぎる場合など）、この例外が発生します。

## 例

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.bytes().then((buffer) => {
  // リクエストで送信されたバッファーを処理する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.arrayBuffer()")}}
