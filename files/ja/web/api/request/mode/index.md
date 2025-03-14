---
title: "Request: mode プロパティ"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 0129176c2bb0e16af7577067191f0889326fad73
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`mode`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストのモード（`cors`、`no-cors`、`same-origin`、`navigate` など）を保持します。これは、オリジン間リクエストに対して有効なレスポンスができるか、またレスポンスのプロパティが読み取り可能かどうかを判定するために使用されます。

特定のモードでのリクエストを構築するには、必要な値を {{domxref("RequestInit", "", "mode")}} オプションにとして {{domxref("Request.Request()")}} コンストラクターに渡します。

特定のモード、特に `no-cors` を設定すると、使用できるリクエストメソッドやヘッダーに制限がかかり、 JavaScript がレスポンスヘッダーや本体にアクセスできなくなることに注意してください。詳細は {{domxref("RequestInit", "", "mode")}} のドキュメントを参照してください。

## 値

以下の値のいずれかです。

- `same-origin`

  - : このモードを設定してほかのオリジンにリクエストをした場合、結果はエラーになります。リクエストが常に同一オリジンに行われることを保証するために使用できます。

- `no-cors`

  - : オリジン間リクエストの CORS を無効にします。レスポンスは不透明となり、ヘッダーと本体は JavaScript では利用できません。

- `cors`

  - : このリクエストがオリジン間リクエストであれば、[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS) の仕組みを使用します。

- `navigate`

  - : ナビゲーションに対応しているモードです。 `navigate` 値は HTML ナビゲーションでのみ使用されることを意図しています。 navigate リクエストは文書内のナビゲーションをするときだけ作成されます。

#### 既定のモード

リクエストは様々な方法で開始されますが、リクエストのモードは、それが開始された具体的な手段によって異なります。

たとえば、 `Request` オブジェクトが {{domxref("Request.Request", "Request()")}} コンストラクターで生成された場合、 `mode` の値は `cors` に設定されます。

しかし、リクエストが {{domxref("Request.Request", "Request()")}} コンストラクター以外で生成された場合は、ふつう `no-cors` がモードとして設定されます。たとえば、マークアップから生成された埋め込みリソースのようなリクエストは、 [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性が設定されていない限り、 `no-cors`を利用します。そのようなものの例として、 {{HTMLElement("link")}} や {{HTMLElement("script")}} 要素（ただしモジュールを除く）、 {{HTMLElement("img")}}、{{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("object")}}、{{HTMLElement("embed")}}、{{HTMLElement("iframe")}} 要素などが存在します。

## 例

以下のスニペットは、 {{domxref("Request.Request", "Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストモードを変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myMode = myRequest.mode; // 既定では "cors" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
