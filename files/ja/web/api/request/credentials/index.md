---
title: Request.credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`credentials`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、オリジン間リクエストの場合に、ユーザーエージェントが他のドメインからクッキーを送信または受信するべきかどうかを示すものです。

### 値

`RequestCredentials` 辞書の値で、オリジン間リクエストの場合、ユーザーエージェントが他のドメインからクッキーを送信するか受信するかを示します。使用可能な値は以下の通りです。

- `omit`
  - : クッキーを送受信しません。
- `same-origin`
  - : URL が呼び出し元のスクリプトと同一オリジンだった場合のみ、ユーザーの資格情報 (HTTP Basic 認証、など) を送信します。 **これが既定値です。**
- `include`
  - : オリジン間の呼び出しであっても、常にユーザーの資格情報 (クッキー、HTTP Basic 認証、、など) を送信します。

これは XHR の [`withCredentials`](/ja/docs/Web/API/XMLHttpRequest/withCredentials) フラグと似ていますが、有効な値が 2 つではなく 3 つあります。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストの資格情報を変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.credentials; // 既定で "same-origin" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
