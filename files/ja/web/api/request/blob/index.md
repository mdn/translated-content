---
title: "Request: blob() メソッド"
short-title: blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`blob()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、それを {{domxref("Blob")}} で解決するプロミスとして返します。

## 構文

```js-nolint
blob()
```

### 引数

なし。

### 返値

{{domxref("Blob")}} で解決するプロミス。この Blob は本体のバイトデータをデータとして持ち、メディア種別がリクエストの `Content-Type` ヘッダーの値です。

### 例外

- {{jsxref("TypeError")}}
  - : 以下のどちらかの理由で発生します。
    - リクエストの本文が[変更中またはロック済み](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)である。
    - 本文のコンテンツをデコードする際にエラーが発生した（例えば、{{httpheader("Content-Encoding")}} ヘッダーが正しくないなど）。

## 例

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then((myBlob) => {
  // リクエストで送信された blob を処理する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.blob()")}}
