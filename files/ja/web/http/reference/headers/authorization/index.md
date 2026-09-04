---
title: Authorization ヘッダー
short-title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Authorization`** {{Glossary("request header", "リクエストヘッダー")}}を使用すると、ユーザーエージェントをサーバーで認証する資格情報を指定し、保護されたリソースにアクセスすることができます。

`Authorization` ヘッダーは通常、ユーザーエージェントが最初の資格情報を使用しない保護されたリソースのリクエストを試みた後に送信されますが、常に送信されるわけではありません。
サーバーは {{HTTPStatus("401", "401 Unauthorized")}} と、 1 つ以上の {{HTTPHeader("WWW-Authenticate")}} ヘッダーを含むメッセージで応答します。
このヘッダーは、リソースにアクセスするために使用できる認証方式と、クライアントがそれらを使用するために必要な追加情報を示します。
ユーザーエージェントは、サポートする最も安全な認証方式を提示された中から選択し、ユーザーに資格情報を要求し、その後、エンコードされた資格情報を付加したリソースを `Authorization` ヘッダーで再リクエストします。

このヘッダーはオリジン間リダイレクトでは取り除かれます。

> [!NOTE]
> このヘッダーは、 [一般的な HTTP 認証の枠組み](/ja/docs/Web/HTTP/Guides/Authentication#一般的な_http_認証の枠組み) の一部です。
> これは数々の[認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)で使用可能です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Authorization: <auth-scheme> <authorization-parameters>

// Basic 認証
Authorization: Basic <credentials>

// Digest 認証
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## ディレクティブ

- `<auth-scheme>`
  - : [認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)で、資格情報をエンコードする方法を定義します。
    よく使われる方式（大文字小文字の区別なし）には、 [`Basic`](/ja/docs/Web/HTTP/Guides/Authentication#basic_認証方式)、`Digest`、`Negotiate`、`AWS4-HMAC-SHA256` などがあります。

    > [!NOTE]
    > 詳しい情報やオプションについては、 [HTTP 認証 > 認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)を参照してください。

`<auth-scheme>` 以外のディレクティブは、各[認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)の仕様上のものです。
一般的に、これらの仕様については、関連する仕様を調べる必要があります（方式の一部のキーは以下の一覧に掲載されています）。

### Basic 認証

- `<credentials>`
  - : 資格情報で、指定された方式によってエンコードされています。

    > [!NOTE]
    > エンコーディングアルゴリズムについての情報は、 {{HTTPHeader("WWW-Authenticate")}}、[HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)、関連する仕様書の例を参照してください。

### Digest 認証

- `<response>`
  - : ユーザーがパスワードを知っていることを証明する 16 進数の文字列です。
    このアルゴリズムは、ユーザー名とパスワード、領域、cnonce、qop、nc、などをエンコードします。
    これは仕様書で詳細に説明されています。
- `username`
  - : ユーザー名を格納した引用符付き文字列で、指定した `realm` に対して、プレーンテキストまたは 16 進数表記のハッシュコードのいずれかで指定します。
    名前にフィールドで許可されていない文字が含まれている場合は、代わりに `username*` を使用することができます（「同様に」ではありません）。
- `username*`
  - : ユーザー名は、 RFC5987 で定義された拡張表記を使用して書式化されています。
    これは、名前が `username` でエンコードできない場合、および `userhash` が `"false"` に設定されている場合にのみ使用しましょう。
- `uri`
  - : 有効なリクエスト URI です。 詳細な情報については仕様書を参照してください。
- `realm`
  - : リクエストされたユーザー名/パスワードの領域（再度、リクエストされたリソースに対する対応する {{HTTPHeader("WWW-Authenticate")}} レスポンスの値と一致する必要があります）。
- `opaque`
  - : リクエストされたリソースに対する {{HTTPHeader("WWW-Authenticate")}} レスポンスの値。
- `algorithm`
  - : ダイジェストを計算するために使用するアルゴリズム。リクエストされたリソースに対する {{HTTPHeader("WWW-Authenticate")}} レスポンスに対応しているアルゴリズムでなければなりません。
- `qop`
  - : メッセージに適用された「保護の品質」を示すトークン。
    リクエストされたリソースに対して、 {{HTTPHeader("WWW-Authenticate")}} レスポンスで指定する設定値と一致する必要があります。
    - `"auth"`: 認証
    - `"auth-int"`: 完全性保護付き認証
- `cnonce`
  - : クライアントによって指定された {{Glossary("ASCII")}} 文字列値。
    これは、クライアントとサーバーの両方で相互認証を提供し、メッセージの完全性をある程度保護し、「選択的平文攻撃」を避けるために使用します。
    追加の情報については仕様を参照してください。
- `nc`
  - : ノンスの数。クライアントが現在の `cnonce` 値が示すリクエストの数（現在のリクエストも含まれます）。
    サーバーは、リプレイリクエストを認識するために、重複する `nc` 値を使用することができます。
- `userhash` {{optional_inline}}
  - : ユーザー名がハッシュ化されている場合は `"true"` です。既定値は `"false"` です。

## 例

### Basic 認証

`Basic` 認証については、資格情報はまずユーザー名とパスワードをコロンで結合し（例： `aladdin:opensesame`）、次に生成された文字列を [`base64`](/ja/docs/Glossary/Base64) エンコードして作成します（例： `YWxhZGRpbjpvcGVuc2VzYW1l`）。

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> {{Glossary("Base64")}} エンコードは簡単に元に戻すことができ、元の名前とパスワードを取得することができます。そのため、 `Basic` 認証には暗号化セキュリティがありません。
> 認証を使用する際には常に {{Glossary("HTTPS")}} の使用をお勧めしますが、 `Basic` 認証を使用する場合は特にその必要性が強くなります。

HTTP の Basic 認証を使用してサイトをパスワードで保護するために、 Apache または Nginx サーバーを構成する方法の例については、 [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)もご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
