---
title: Request.headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`headers`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストに関連する {{domxref("Headers")}} オブジェクトを保持します。

## 値

{{domxref("Headers")}} オブジェクト。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストの headers を変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

{{domxref("Headers")}} オブジェクトにヘッダーを追加するためには、{{domxref("Headers.append")}} を使用します。次に、新しい `Request` を作成する際に初期化のための第二引数を渡し、初期化オプションとしてヘッダーを渡します。

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);

const myContentType = myRequest.headers.get("Content-Type"); // returns 'image/jpeg'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
