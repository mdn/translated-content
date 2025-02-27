---
title: "Response: type プロパティ"
short-title: type
slug: Web/API/Response/type
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

**`type`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、このレスポンスの種類を保持します。
以下のうちの何れかになります。

- `basic`: 通常の、同一ドメインのレスポンスで、 "Set-Cookie" 以外のすべてのヘッダーが公開されます。
- `cors`: レスポンスは有効なオリジン間リクエストで受信しました。[特定のヘッダーと本体](https://fetch.spec.whatwg.org/#concept-filtered-response-cors)にアクセスできます。
- `error`: ネットワークエラーです。
  エラーを記述した有益な情報は使用できません。
  このレスポンスの status は 0 で、headers は空で不変です。
  これは `Response.error()` から得られる種類のレスポンスです。
- `opaque`: 別オリジンのリソースへの "no-cors" リクエストに対するレスポンス。
  [厳しく制限されています](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque)。
- `opaqueredirect`: フェッチリクエストが `redirect: "manual"` で行われました。
  このレスポンスの status は 0、headers は空、body は null、トレーラーは空です。

> [!NOTE]
> "error" レスポンスは実際にスクリプトに公開されることはありません。 {{domxref("Window/fetch", "fetch()")}} に対するそのようなレスポンスは、プロミスを拒否します。

## 値

レスポンスの種類を示す `ResponseType` 文字列。

## 例

[Fetch Response の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) （[Fetch Response のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-response/) を参照）では、新しい {{domxref("Request")}} オブジェクトを、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して作成し、 JPG のパスを渡します。次に {{domxref("Window/fetch", "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxref("Response.blob")}} を使用してリクエストから blob を抽出し、 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を使用してオブジェクト URL を作成し、これを {{htmlelement("img")}} に表示します。

なお、 `fetch()` ブロックの先頭で、レスポンスの `type` 値をコンソールにログ出力していることに注意してください。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.type =", response.type); // response.type = 'basic'
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
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
