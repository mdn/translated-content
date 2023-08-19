---
title: Request.mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`mode`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストのモード（たとえば、`cors`、`no-cors`、`same-origin`、`navigate`、`websocket`）を保持します。これは、オリジン間リクエストに対して有効なレスポンスができるか、またレスポンスのプロパティが読み取り可能かどうかを判定するために使用されます。

## 値

- `RequestMode` の値です。

  - : _mode_ に関連する値には、次のものが使用できます。

    - `same-origin`
      - : このモードを設定してほかのオリジンにリクエストをした場合、結果はエラーになります。リクエストが常に同一オリジンに行われることを保証するために使用できます。
    - `no-cors`
      - : メソッドが `HEAD`、`GET`、`POST` 以外にならないようにし、ヘッダーが[単純ヘッダー](https://fetch.spec.whatwg.org/#simple-header)以外のものにならないようにします。サービスワーカーがこれらのリクエストに介入した場合、[単純ヘッダー](https://fetch.spec.whatwg.org/#simple-header)以外のヘッダーを追加したり上書きしたりすることはできません。さらに、 JavaScript で結果の {{domxref("Response")}} のプロパティにアクセスすることはできません。これは、サービスワーカーがウェブの意味づけに影響を与えないようにし、ドメイン間でデータが漏れることによって生じるセキュリティとプライバシーの問題を防ぐためです。
    - `cors`
      - : オリジン間リクエストを許可します。たとえば、サードパーティベンダーが提供する様々な API にアクセスできます。これらは、[CORS プロトコル](/ja/docs/Web/HTTP/CORS)に則ることが期待されています。[制限された](https://fetch.spec.whatwg.org/#concept-filtered-response-cors)ヘッダーしか {{domxref("Response")}} からは見えないようになりますが、本体は読み取り可能です。
    - `navigate`
      - : ナビゲーションに対応しているモードです。 `navigate` 値は HTML ナビゲーションでのみ使用されることを意図しています。 navigate リクエストは文書内のナビゲーションをするときだけ作成されます。
    - `websocket`
      - : [WebSocket](/ja/docs/Web/API/WebSockets_API) 接続を確立するときだけ使用される特殊なモードです。

#### 既定のモード

リクエストは様々な方法で開始されますが、リクエストのモードは、それが開始された具体的な手段によって異なります。

たとえば、 `Request` オブジェクトが {{domxref("Request.Request", "Request()")}} コンストラクターで生成された場合、 `mode` の値は `cors` に設定されます。

しかし、リクエストが {{domxref("Request.Request", "Request()")}} コンストラクター以外で生成された場合は、ふつう `no-cors` がモードとして設定されます。たとえば、マークアップから生成された埋め込みリソースのようなリクエストは、 [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性が設定されていない限り、 `no-cors`を利用します。そのようなものの例として、 {{HTMLElement("link")}} や {{HTMLElement("script")}} 要素（ただしモジュールを除く）、 {{HTMLElement("img")}}、{{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("object")}}、{{HTMLElement("embed")}}、{{HTMLElement("iframe")}} 要素などが存在します。

## 例

以下のスニペットは、 {{domxref("Request.Request", "Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストモードを変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myMode = myRequest.mode; // returns "cors" by default
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Request.mode")}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
