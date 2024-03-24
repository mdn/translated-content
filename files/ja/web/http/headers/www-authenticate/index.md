---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
---

{{HTTPSidebar}}

HTTP の **`WWW-Authenticate`** レスポンスヘッダーは、リソースへのアクセス権を得るために使われる [HTTP 認証](/ja/docs/Web/HTTP/Authentication)メソッド (「チャレンジ」) を定義します。</p>

> **メモ:** このヘッダーは、[一般的な HTTP 認証の枠組み](/ja/docs/Web/HTTP/Authentication#一般的な_http_認証の枠組み)の一部であり、多くの[認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)で使用することができます。
> それぞれの「チャレンジ」には、サーバーが対応している方式と、その方式型に定義されている追加引数が記載されています。

[HTTP 認証](/ja/docs/Web/HTTP/Authentication)を使用するサーバーは、保護されたリソースへのリクエストに対して {{HTTPStatus("401")}} `Unauthorized` レスポンスを返します。このレスポンスには、1 つ以上の `WWW-Authenticate` ヘッダーと 1 つ以上の{{Glossary("challenge", "チャレンジ")}}が含まれていなければならず、リソースへのアクセスにどのような認証方式が使用できるか (およびそれぞれの方式が必要とする追加データ) を示します。

1 つの `WWW-Authenticate` ヘッダーには複数のチャレンジが許され、1 つのレスポンスには複数の `WWW-Authenticate` ヘッダーが許されます。
サーバーは、他のレスポンスメッセージに `WWW-Authenticate` ヘッダーを含めることで、資格情報を提供することがレスポンスに影響を与える可能性があることを示すこともできます。

`WWW-Authenticate` ヘッダーを受け取った後、クライアントは通常、ユーザーに資格情報を求めるプロンプトを表示し、リソースを再リクエストします。この新しいリクエストは {{HTTPHeader("Authorization")}} ヘッダーを使用して、選択された「チャレンジ」の認証方法に応じて適切にエンコードされた資格情報をサーバーに提供します。クライアントは、対応しているチャレンジのうち、最も安全なものを選択することが期待されます (なお、「最も安全な」方法については議論の余地がある場合もあります)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

1 つ以上のチャレンジを指定する必要があります。
複数のチャレンジを指定する場合は、カンマで区切って 1 つのヘッダーに入れたり、個々のヘッダーで指定したりすることができます。

```http
// チャレンジを単一のヘッダーで指定
WWW-Authenticate: challenge1, ..., challengeN

// チャレンジを複数のヘッダーで指定
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

1 つのチャレンジは以下のような形式になっています。方式トークン (`<auth-scheme>`) が必須であることに注意してください。
`realm`、`token68`、その他の引数の有無は、選択した方式の定義に依存します。

```http
// 可能なチャレンジの形式 (方式に依存)
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> realm=<realm>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=token1, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> token68
WWW-Authenticate: <auth-scheme> realm=<realm> token68 auth-param1=auth-param1-token , ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> token68 auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
```

例えば、[Basic 認証](/ja/docs/Web/HTTP/Authentication#basic_認証方式)では任意で `realm` および `charset` キーを指定することができますが、`token68` には対応していません。

```http
WWW-Authenticate: Basic
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## ディレクティブ

- `<auth-scheme>`

  - : [認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)です。有名なものとしては、 [`Basic`](/ja/docs/Web/HTTP/Authentication#basic_認証方式)、`Digest`、`Negotiate`、`AWS4-HMAC-SHA256` などがあります (大文字小文字の区別なし)。

    > **メモ:** 詳しい情報やオプションについては、[HTTP 認証 > 認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)を参照してください。

- **realm=**\<realm> {{optional_inline}}
  - : 保護領域を説明する文字列です。
    realm によってサーバーが保護する領域を分割することができ (そのような分割を許可しているスキームが対応している場合)、どの特定のユーザー名/パスワードが必要であるかをユーザーに通知します。
    realm が指定されていない場合は、クライアントはよく書式化されたホスト名を代わりに表示します。
- `<token68>` {{optional_inline}}
  - : 方式によっては役立つ可能性のあるトークンです。このトークンでは、66 種類の予約されていない URI 文字に加えて、いくつかの文字を使用できます。
    仕様書によれば、 base64、base64url、base32、base16 (16 進数) の各エンコード方式のいずれかを、パディングの有無にかかわらず、ホワイトスーペースを除いて保持することができます。

`<auth-scheme>` とキー `realm` 以外の認証引数は、それぞれの[認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)に固有のものです。
通常、これらについては関連する仕様を確認する必要があります (一部のスキームのキーを以下に示します)。

### Basic

- **`<realm>`** {{optional_inline}}
  - : 上記通りです。
- **`charset="UTF-8"`** {{optional_inline}}
  - : ユーザー名とパスワードを送信するときのサーバーが優先するエンコード方式をクライアントに伝えます。
    文字列 "UTF-8" だけが許可されており、大文字小文字の区別はありません。
    これは realm 文字列のエンコード方式とは関係がありません。

### Digest

- **`<realm>`** {{optional_inline}}
  - : 使用するユーザー名/パスワードを示す文字列です。
    少なくともホスト名を含める必要がありますが、アクセス権を持つユーザーやグループを示す場合もあります。
- **`domain`** {{optional_inline}}
  - : 引用符を付け、空白で区切った URL 接頭辞のリストで、この資格情報を使用するすべての場所を定義します。
    このキーが指定されていない場合、この資格情報はウェブルート以下のどこでも使用できます。
- **`nonce`**
  - : サーバーが指定する引用符の付いた文字列で、特定の資格情報が有効とみなされる期間を制御するためにサーバーが使用できます。
    これは、401 レスポンスが行われるたびに一意に生成されなければならず、さらに頻繁に再生成される可能性があります (たとえば、ダイジェストを 1 回だけ使用できるようにするなど)。
    仕様書には、この値を生成するために利用可能なアルゴリズムに関する助言が含まれています。
    nonce の値は、クライアントには不透明です。
- **`opaque`**
  - : サーバーが指定する引用符の付いた文字列で、 {{HTTPHeader("Authorization")}} で変更されずに返されるべきものです。
    これはクライアントには不透明です。サーバーは Base64 または 16 進数のデータを含めることを推奨します。
- **`stale`** {{optional_inline}}
  - : 大文字小文字を区別しないフラグで、クライアントからの前回のリクエストが、使用された `nonce` が古すぎる (stale) ために拒否されたことを示します。
    これが `true` であれば、新しい `nonce` で暗号化された同じユーザー名/パスワードを使ってリクエストを再試行できます。
    それ以外の値の場合は、ユーザー名/パスワードが無効なので、ユーザーに再度リクエストする必要があります。
- **`algorithm`** {{optional_inline}}
  - : ダイジェストの生成に使用するアルゴリズムです。
    セッション以外での有効な値は `"MD5"` (指定されていない場合の既定値)、`"SHA-256"`、`"SHA-512"` です。
    セッションで有効な値は `"MD5-sess"`、`"SHA-256-sess"`、`"SHA-512-sess"` です。
- **`qop`**
  - : 引用符の付いた文字列で、サーバーが対応している保護の品質を示します。これは必ず指定しなければならず、認識できないオプションは無視されます。
    - `"auth"`: 認証
    - `"auth-int"`: 完全性保護付きの認証
- **`charset="UTF-8"`** {{optional_inline}}
  - : ユーザー名とパスワードを送信する際に、サーバーが優先するエンコード方式をクライアントに伝えます。
    大文字小文字を区別しない文字列 "UTF-8" のみが許可されます。
- **`userhash`** {{optional_inline}}
  - : サーバーが `"true"` を指定することで、ユーザー名のハッシュ化に対応していることを示すことができます (既定値は `"false"` です)。

## 例

### Basic 認証

通常、`WWW-Authenticate` ヘッダーを含むサーバーのレスポンスは以下のようなものです。

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

このヘッダーを受け取ったユーザーエージェントは、まずユーザーにユーザー名とパスワードの入力を求め、それからリソースを再リクエストします。このとき、{{HTTPHeader("Authorization")}} ヘッダーに (エンコードされた) 認証情報を含めます。{{HTTPHeader("Authorization")}} ヘッダーは次のようになります。

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

`"Basic"` 認証では、資格情報はまず、ユーザー名とパスワードをコロンで結合し (`aladdin:opensesame`)、その結果の文字列を [`base64`](/ja/docs/Glossary/Base64) でエンコードすることで構築します (`YWxhZGRpbjpvcGVuc2VzYW1l`)。

> **メモ:** Apache や nginx サーバーで HTTP Basic 認証を使用してサイトを保護する方法の例については、 <a href="/ja/docs/Web/HTTP/Authentication">HTTP 認証</a> を参照してください。

### SHA-256 と MD5 を使用した Digest 認証

> **メモ:** この例は、{{RFC("7616")}} "HTTP Digest Access Authentication" から引用しています (この仕様書の他の例では、`SHA-512`、`charset`、`userhash` の使用方法を示しています)。

クライアントは、Digest 認証で保護された URI "http://www.example.org/dir/index.html" の文書にアクセスしようとしています。
この文書のユーザー名は "Mufasa" で、パスワードは "Circle of Life" です (各単語の間にスペースがあることに注意してください)。

クライアントが初めて文書をリクエストしたとき、{{HTTPHeader("Authorization")}} ヘッダーフィールドは送信されません。
ここでサーバーは、対応している各ダイジェストアルゴリズムのチャレンジを含む HTTP 401 メッセージでレスポンスします (`SHA256`、`MD5` の順)。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

クライアントはユーザー名とパスワードの入力をユーザーに促し、それから {{HTTPHeader("Authorization")}} ヘッダーフィールドに資格情報をエンコードして入れます。
クライアントが MD5 ダイジェストを選択した場合、{{HTTPHeader("Authorization")}} ヘッダーフィールドは次のようになります。

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="8ca523f5e9506fed4657c9700eebdbec",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

クライアントが SHA-256 ダイジェストを選択した場合は、 {{HTTPHeader("Authorization")}} ヘッダーフィールドは次のようになります。

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="753927fa0e85d155564e2e272a28d1802ca10daf449
        6794697cf8db5856cb6c1",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
