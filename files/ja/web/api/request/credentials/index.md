---
title: "Request: credentials プロパティ"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: d6528c3d7881662e6aaa77cd2a1a49e3af349088
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`credentials`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、[`credentials`](/ja/docs/Web/API/RequestInit#credentials) オプションで指定された {{domxref("Request.Request()", "Request()")}} コンストラクターの値を反映します。このプロパティは、ブラウザーがリクエストに資格情報を送信するかどうか、また、**`Set-Cookie`** レスポンスヘッダーが尊重されるかどうかを決定します。

資格情報とは、クッキー、TLS クライアント証明書、ユーザー名とパスワードを格納する認証ヘッダーなどです。

詳しくは[資格情報を含める](/ja/docs/Web/API/Fetch_API/Using_Fetch#資格情報を含める)を参照してください。

### 値

文字列で、以下の値のうちのいずれかです。

- `omit`
  - : リクエストに資格情報を記載したり、レスポンスに資格情報を含めたりしません。
- `same-origin`
  - : 同一オリジンリクエストにのみ、資格情報を送信したり含めたりします。
- `include`
  - : オリジン間のリクエストであっても、常に資格情報を含めます。

## 例

次のスニペットは、{{domxref("Request.Request", "Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストの資格情報を変数に保存しています。

```js
const request = new Request("flowers.jpg");
const credentials = request.credentials; // 既定で "same-origin" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
