---
title: Request.credentials
slug: Web/API/Request/credentials
tags:
  - API
  - Cookies
  - Fetch
  - Networking
  - Property
  - Reference
  - Security
  - credentials
  - request
translation_of: Web/API/Request/credentials
---
{{APIRef("Fetch")}}

{{domxref("Request")}} インターフェイスの **`credentials`** 読み取り専用プロパティは、クロスオリジンの場合に、ユーザーエージェントが他のドメインからクッキーを送信すべきかどうかを示します。

<h2 id="Syntax">構文</h2>

```js
var myCred = request.credentials;
```

<h3 id="Value">値</h3>

`RequestCredentials` 辞書値は、クロスオリジンの場合に、ユーザーエージェントが他のドメインからクッキーを送信すべきかどうかを示します。有効な値は次の通りです:

- `omit`: 決してクッキーを送受信しません。
- `same-origin`: URL が呼び出し元のスクリプトと同一オリジンだった場合のみ、ユーザーの資格情報 (HTTP Basic 認証、など) を送信します。 **これが既定値です。**
- `include`: クロスオリジン呼び出しであっても、常にユーザーの資格情報 (クッキー、HTTP Basic 認証、、など) を送信します。

これは XHR の [`withCredentials`](/ja/docs/Web/API/XMLHttpRequest/withCredentials) フラグと似ていますが、有効な値が 2 つではなく 3 つあります。

<h2 id="Example">例</h2>

次のスニペットは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストの credentials を変数に保存しています：

```js
var myRequest = new Request('flowers.jpg');
var myCred = myRequest.credentials; // 既定では "same-origin" を返す
```

<h2 id="Specifications">仕様</h2>

{{Specifications}}

<h2 id="Browser compatibility">ブラウザー実装状況</h2>

{{Compat}}

<h2 id="See also">関連情報</h2>

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
