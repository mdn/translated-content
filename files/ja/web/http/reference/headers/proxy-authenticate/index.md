---
title: Proxy-Authenticate ヘッダー
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP **`Proxy-Authenticate`** {{Glossary("Response header", "レスポンスヘッダー")}}は、{{Glossary("proxy server", "プロキシーサーバー")}}の背後にあるリソースへのアクセスに使用される[認証メソッド](/ja/docs/Web/HTTP/Guides/Authentication)（または{{Glossary("Challenge", "チャレンジ")}}）を定義します。

これは、認証が要求されるプロキシーに対してクライアントが自身を識別できるようにするため、{{HTTPStatus("407", "407 Proxy Authentication Required")}} レスポンスとして送信されます。

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
Proxy-Authenticate: <challenge>, …
```

この値は、カンマ区切りのチャレンジのリストです。ここで、`<challenge>` は `<auth-scheme>` で構成され、その後にオプションの `<token68>` またはカンマ区切りの `<auth-params>` のリストが続きます。

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

例を示します。

```http
Proxy-Authenticate: <auth-scheme>
Proxy-Authenticate: <auth-scheme> token68
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

`token68` や認証パラメーターが含まれるかどうかは、選択された `<auth-scheme>` によって異なります。
例えば、[ベーシック認証](/ja/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme)では `<realm>` の指定が要求され、`charset` キーを使用することができますが、`token68` には対応していません。

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## ディレクティブ

- `<auth-scheme>`
  - : 大文字小文字を区別しないトークンで、使用されている[認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)を示します。
    [`Basic`](/ja/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` `AWS4-HMAC-SHA256` がよく使用されます。
    IANA は[認証方式の一覧](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)を管理していますが、ホストサービスによって提供されているそれ以外の方式も存在します。
- `<auth-param>` {{optional_inline}}
  - : `<auth-scheme>` に応じて書式化された認証パラメーターです。
    `<realm>` は、多くの認証方式で共通して使用される認証パラメーターであるため、以下で説明します。
    - `<realm>` {{optional_inline}}
      - : `realm` という文字列の後に `=` を付け、保護対象領域を説明する引用符で囲まれた文字列が続く形式です。例えば、`realm="staging environment"` のようになります。
        realm を使用すると、サーバーは、その保護対象となる領域を分割することができます（そのような分割をすることができる仕組みが対応している場合）。
        一部のクライアントは、どの資格情報が要求されるかをユーザーに知らせるためにこの値を表示しますが、フィッシング対策のため、ほとんどのブラウザーではこの表示を行わなくなりました。
        この値に対して確実に対応している文字セットは `us-ascii` のみです。
        realm が指定されていない場合、クライアントは多くの場合、代わりに書式化されたホスト名を表示させます。
- `<token68>` {{optional_inline}}
  - : 一部の方式で有益である可能性のあるトークンです。
    このトークンでは、66 個の非予約 URI 文字に加え、それ以外にもいくつかの文字を使用することができます。
    このトークンには、パディングの有無にかかわらず、{{glossary("base64")}}、base64url、base32、base16（16 進数）エンコード方式を格納可能ですが、ホワイトスペースは含められません。
    古い認証方式との互換性を保つため、`token68` は auth-param リストの代替として 対応しています。

通常、それぞれの `<auth-scheme>` に必要な認証パラメーターについては、関連する仕様を調べる必要があります。

> [!NOTE]
> 認証パラメーターの詳細については、{{HTTPHeader("WWW-Authenticate")}} を参照してください。

## 例

### Proxy-Authenticate のベーシック認証

次のレスポンスは、realm 付きのベーシック認証方式が要求されていることを示しています。

```http
Proxy-Authenticate: Basic realm="Staging server"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("WWW-Authenticate")}}
- [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Authorization")}}, {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
