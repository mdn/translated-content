---
title: Access-Control-Allow-Credentials ヘッダー
short-title: Access-Control-Allow-Credentials
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Access-Control-Allow-Credentials`** は{{Glossary("response header", "レスポンスヘッダー")}}で、サーバーがオリジンをまたいだ HTTP リクエストに資格情報を添付することを許可するかどうかをブラウザーに指示します。

資格情報にはクッキー、{{glossary("TLS")}} クライアント証明書、ユーザー名とパスワードを含む認証ヘッダーなどがあります。
デフォルトでは、これらの資格情報はオリジンをまたぐリクエストでは送信されません。そうすると、サイトが {{Glossary("CSRF", "クロスサイトリクエストフォージェリー (CSRF)")}} 攻撃に対して脆弱になる可能性があります。

クライアントは、サイト間リクエストで資格情報を添付することを、いくつかの方法で要求することをできます。

- {{domxref("Window/fetch", "fetch()")}} を使用する際に [`credentials`](/ja/docs/Web/API/RequestInit#credentials) オプションを `"include"` に設定する。
- {{domxref("XMLHttpRequest")}} を使用する際に、 {{domxref("XMLHttpRequest.withCredentials")}} プロパティを `true` に設定する。
- {{domxref("EventSource()")}} を使用する際に、 {{domxref("EventSource.withCredentials")}} プロパティを `true` に設定する。

資格情報が添付されるのは次の場合です。

- {{glossary("Preflight_request", "プリフライト")}}のあるリクエストの場合、プリフラウとリクエストには資格情報を添付しません。
  プリフライトリクエストに対するサーバーのレスポンスで `Access-Control-Allow-Credentials` ヘッダーが `true` に設定されている場合、実際のリクエストには資格情報を添付します。そうでない場合、ブラウザーはネットワークエラーを報告します。
- プリフライトのないリクエストの場合、リクエストには資格情報が添付されます。サーバーのレスポンスで `Access-Control-Allow-Credentials` ヘッダーが `true` に設定されていない場合、ブラウザーはネットワークエラーを報告します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Access-Control-Allow-Credentials: true
```

## ディレクティブ

- `true`
  - : サーバーはオリジン間 HTTP リクエストに資格情報を添付することを許可します。
    このヘッダーの有効な値はこれのみであり、大文字小文字を区別します。
    資格情報が必要ない場合は、値を `false` に設定するのではなく、このヘッダー自体を完全に省略してください。

## 例

資格情報の許可:

```http
Access-Control-Allow-Credentials: true
```

{{domxref("Window/fetch", "fetch()")}} を資格情報付きで使用:

```js
fetch(url, {
  credentials: "include",
});
```

{{domxref("XMLHttpRequest")}} を資格情報付きで使用:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
