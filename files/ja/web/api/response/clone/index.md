---
title: Response.clone()
slug: Web/API/Response/clone
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("Fetch")}}

**`clone()`** は {{domxref("Response")}} インターフェイスのメソッドで、レスポンスオブジェクトの複製を作成します。この複製はあらゆる面で同一ですが、異なる変数に格納されます。

基礎となる {{domxref("ReadableStream.tee")}} api のように、複製された `Response` の {{domxref("Response.body", "body")}} は、 2 つの本体のうち _より速い_ コンシューマーの速度で背圧を通知し、未読データは制限や背圧なしにより遅く消費された `body` で内部でキューイングされます。
背圧とは、データのストリーミングコンシューマー（この場合は本体を読むコード）が、アプリケーションで使用されるのを待っているメモリーに大量のデータを読み込まないように、データのプロデューサー（TCP サーバーなど）の速度を低下させるメカニズムを参照することです。
もし複製された分岐が一つしか消費されない場合、本体全体がメモリーにバッファリングされます。
したがって、`clone()` はレスポンスを 2 回連続して読み込むための一つの方法ですが、非常に大きな本体を異なる速度で並列に読み込むために使用するべきではありません。

`clone()` は、レスポンス本体が既に使用されている場合は {{jsxref("TypeError")}} を発生させます。
実際、`clone()` が存在する主な理由は、本体オブジェクトを複数回使用できるようにするためです（一度しか使用できない場合）。

## 構文

```js-nolint
clone()
```

### 引数

なし。

### 返値

{{domxref("Response")}} オブジェクトです。

## 例

[Fetch Response clone の例](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html)（[Fetch Response clone のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/) を参照）では、 {{domxref("Request.Request","Request()")}} コンストラクターで新しい {{domxref("Request")}} オブジェクトを作成し、 JPG のパスを渡します。
そして {{domxref("fetch()")}} を使用してこのリクエストを読み込みます。
フェッチが正常に解決されると、それを複製し、2 つの {{domxref("Response.blob")}} 呼び出しを使用して両方のレスポンスから blob を抽出し、 {{domxref("URL.createObjectURL")}} を使用して blob からオブジェクト URL を作成し、それらを 2 つの別々の {{htmlelement("img")}} 要素で表示します。

```js
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  const response2 = response.clone();

  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image1.src = objectURL;
  });

  response2.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image2.src = objectURL;
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
