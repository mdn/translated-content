---
title: Request.clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Fetch")}}

**`clone()`** は {{domxref("Request")}} インターフェイスのメソッドで、現在の `Request` オブジェクトのコピーを生成します。

基礎となる {{domxref("ReadableStream.tee")}} API と同様に、複製された `Response` の {{domxref("Request.body", "body")}} は 2 つの本体のうち速い方のコンシューマーの速度で背圧を通知し、未読データは制限や背圧なしに遅い方のコンシューマーによる `body` に内部でキューイングされます。
ストリームから `Request` を作成し、それを `clone` するときには注意が必要です。

`clone()` は、リクエスト本体が既に使用されている場合、 {{jsxref("TypeError")}} を発生させます。実際、`clone()` が存在する主な理由は、（一度しか使用しない場合に）本体オブジェクトを複数回使用することを可能にするためです。

もしリクエストを変更するつもりなら、 {{domxref("Request")}} コンストラクターの方がいいかもしれません。

## 構文

```js-nolint
clone()
```

### 引数

なし。

### 返値

`clone()` が呼び出された `Request` の正確なコピーである {{domxref("Request")}} オブジェクト。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクタをー使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストをコピーしています。

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
