---
title: WWW-Authenticate ヘッダー
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP の **`WWW-Authenticate`** レスポンスヘッダーは、リソースへのアクセス権を得るために使われる [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)メソッド (または{{Glossary("challenge", "チャレンジ")}}) を定義します。

このヘッダーは、[一般的な HTTP 認証の枠組み](/ja/docs/Web/HTTP/Guides/Authentication#一般的な_http_認証の枠組み)の一部であり、多くの[認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)で使用することができます。
それぞれのチャレンジには、サーバーが対応している方式と、その方式型に定義されている追加引数が記載されています。

[HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)を使用するサーバーは、保護されたリソースへのリクエストに対して {{HTTPStatus("401", "401 Unauthorized")}} レスポンスを返します。
このレスポンスには、1 つ以上の `WWW-Authenticate` ヘッダーと 1 つ以上のチャレンジが含まれていなければならず、リソースへのアクセスにどのような認証方式が使用できるか（およびそれぞれの方式が必要とする追加データ）を示します。

1 つの `WWW-Authenticate` ヘッダーには複数のチャレンジが許され、1 つのレスポンスには複数の `WWW-Authenticate` ヘッダーが許されます。
サーバーは、他のレスポンスメッセージに `WWW-Authenticate` ヘッダーを含めることで、資格情報を提供することがレスポンスに影響を与える可能性があることを示すこともできます。

`WWW-Authenticate` ヘッダーを受け取った後、クライアントは通常、ユーザーに資格情報を求めるプロンプトを表示し、リソースを再リクエストします。
この新しいリクエストは {{HTTPHeader("Authorization")}} ヘッダーを使用して、選択された「チャレンジ」の認証方法に応じて適切にエンコードされた資格情報をサーバーに提供します。
クライアントは、対応しているチャレンジのうち、最も安全なものを選択することが期待されます（なお、「最も安全な」方法については議論の余地がある場合もあります）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
WWW-Authenticate: <challenge>
```

`<challenge>` が `<auth-scheme>` で構成され、その後にオプションの `<token68>` またはカンマで区切られた `<auth-params>` のリストが続く場合、

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

例えば、

```http
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=param-token1
WWW-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

`token68` または認証引数の有無は、選択した `<auth-scheme>` によって異なります。
例えば、 [Basic 認証](/ja/docs/Web/HTTP/Guides/Authentication#basic_認証方式)では `<realm>` が要求され、オプションで `charset` キーを使用できますが、 `token68` は対応していません。

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

複数のチャレンジを、カンマで区切ったリストで送信することができます。

```http
WWW-Authenticate: <challenge>, …, <challengeN>
```

複数のヘッダーを単一のレスポンスで送信することもできます。

```http
WWW-Authenticate: <challenge>
WWW-Authenticate: <challengeN>
```

## ディレクティブ

- `<auth-scheme>`
  - : 使用される[認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)を示す、大文字小文字の区別のないトークンです。
    有名なものとしては、 [`Basic`](/ja/docs/Web/HTTP/Guides/Authentication#basic_認証方式)、`Digest`、`Negotiate`、`AWS4-HMAC-SHA256` などがあります。
    IANA は[認証方式のリスト](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)を管理していますが、ホストサービスによって提供されている方式はそれ以外にもあります。
- `<auth-param>` {{optional_inline}}
  - : `<auth-scheme>` によって決まる形の認証引数です。
    `<realm>` は、多くの認証方式で共通の認証引数であるため、下記で説明します。
    - `<realm>` {{optional_inline}}
      - : 文字列 `realm` に `=` と、保護領域を記述する引用符で囲まれた文字列が続きます。例えば、 `realm="staging environment"` のように記述します。
        realm を指定すると、サーバーは保護する領域を区分することができます （そのような区分を許可する方式に対応している場合）。
        一部のクライアントは、この値をユーザーに表示して、具体的な資格情報が要求されていることを知らせます。ただし、ほとんどのブラウザーは、フィッシング対策のためにこの表示を廃止しています。
        この値が確実に対応している文字セットは、`us-ascii` だけです。
        realm が指定されていない場合、クライアントは多くの場合、書式化されたホスト名を表示します。
- `<token68>` {{optional_inline}}
  - : 一部の方式で役立つ可能性のあるトークンです。
    このトークンでは、 66 種類の予約されていない URI 文字に加えて、いくつかの文字を使用できます。
    {{glossary("base64")}}、base64url、base32、base16 （16 進数）の各エンコード方式のいずれかを、パディングの有無にかかわらず、ホワイトスペースを除いて保持することができます。
    古い認証方式との整合性を保つため、 auth-param リストの代替として token68 が対応しています。

通常、それぞれの `<auth-scheme>` に必要な認証引数については、関連する仕様を確認する必要があります。
次の節では、いくつかの一般的な認証方式のトークンおよび認証引数について説明します。

### Basic 認証のディレクティブ

- `<realm>`
  - : `<realm>` で[前述の通り](#realm)です。
    なお、 realm は `Basic` 認証では必須です。
- `charset="UTF-8"` {{optional_inline}}
  - : ユーザー名とパスワードを送信するときのサーバーが優先するエンコード方式をクライアントに伝えます。
    文字列 `UTF-8` だけが許可されており、大文字小文字の区別はありません。
    これは realm 文字列のエンコード方式とは関係がありません。

### Digest 認証のディレクティブ

- `<realm>` {{optional_inline}}
  - : `<realm>` で[前述の通り](#realm)であり、どのユーザー名/パスワードを使用するかを示します。
    少なくともホスト名を含める必要がありますが、アクセス権を持つユーザーやグループを示す場合もあります。
- `domain` {{optional_inline}}
  - : 引用符を付け、空白で区切った URL 接頭辞のリストで、この資格情報を使用するすべての場所を定義します。
    このキーが指定されていない場合、この資格情報はウェブルート以下のどこでも使用できます。
- `nonce`
  - : サーバーが指定する引用符の付いた文字列で、特定の資格情報が有効とみなされる期間を制御するためにサーバーが使用できます。
    これは、401 レスポンスが行われるたびに一意に生成されなければならず、さらに頻繁に再生成される可能性があります (たとえば、ダイジェストを 1 回だけ使用できるようにするなど)。
    仕様書には、この値を生成するために利用可能なアルゴリズムに関する助言が含まれています。
    nonce の値は、クライアントには不透明です。
- `opaque`
  - : サーバーが指定する引用符の付いた文字列で、 {{HTTPHeader("Authorization")}} で変更されずに返されるべきものです。
    これはクライアントには不透明です。サーバーは Base64 または 16 進数のデータを含めることを推奨します。
- `stale` {{optional_inline}}
  - : 大文字小文字を区別しないフラグで、クライアントからの前回のリクエストが、使用された `nonce` が古すぎる (stale) ために拒否されたことを示します。
    これが `true` であれば、新しい `nonce` で暗号化された同じユーザー名/パスワードを使ってリクエストを再試行できます。
    それ以外の値の場合は、ユーザー名/パスワードが無効なので、ユーザーに再度リクエストする必要があります。
- `algorithm` {{optional_inline}}
  - : ダイジェストの生成に使用するアルゴリズムです。
    セッション以外での有効な値は `MD5` (指定されていない場合の既定値)、`SHA-256`、`SHA-512` です。
    セッションで有効な値は `MD5-sess`、`SHA-256-sess`、`SHA-512-sess` です。
- `qop`
  - : 引用符の付いた文字列で、サーバーが対応している保護の品質を示します。これは必ず指定しなければならず、認識できないオプションは無視されます。
    - `"auth"`: 認証
    - `"auth-int"`: 完全性保護付きの認証
- `charset="UTF-8"` {{optional_inline}}
  - : ユーザー名とパスワードを送信する際に、サーバーが優先するエンコード方式をクライアントに伝えます。
    大文字小文字を区別しない文字列 "UTF-8" のみが許可されます。
- `userhash` {{optional_inline}}
  - : サーバーが `"true"` を指定することで、ユーザー名のハッシュ化に対応していることを示すことができます（既定値は `"false"` です）。

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : `<len>:<value>` の形式のペアのセットを連結したもので、クライアントに渡されます。
    チャレンジは、ノンス、アルゴリズム、発信元、realm、キー識別子、およびチャレンジで構成されます。
- `<max-age>`
  - : このチャレンジに対するレスポンスを受け入れることができる、 HTTP レスポンスが送信された時点からの秒数です。
- `<realm>` {{optional_inline}}
  - : 前述の[ディレクティブ](#ディレクティブ)の節にある通りです。

## 例

### 複数の認証チャレンジの発行

単一のレスポンスヘッダーで複数のチャレンジを指定することができます。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

複数のチャレンジを、同じレスポンス内の別個の `WWW-Authenticate` ヘッダーで送信することができます。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Basic 認証

通常、`WWW-Authenticate` ヘッダーを含むサーバーのレスポンスは以下のようなものです。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

このヘッダーを受け取ったユーザーエージェントは、まずユーザーにユーザー名とパスワードの入力を求め、それからリソースを再リクエストします。このとき、 `Authorization` ヘッダーにエンコードされた資格情報を含めます。
`Authorization` ヘッダーは次のようになります。

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

`Basic` 認証では、資格情報はまず、ユーザー名とパスワードをコロンで結合し (`aladdin:opensesame`)、その結果の文字列を [`base64`](/ja/docs/Glossary/Base64) でエンコードすることで構築します（`YWxhZGRpbjpvcGVuc2VzYW1l`）。

> [!NOTE]
> Apache や nginx サーバーで HTTP の Basic 認証を使用してサイトを保護する方法の例については、 [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)を参照してください。

### SHA-256 と MD5 を使用した Digest 認証

> [!NOTE]
> この例は、{{RFC("7616")}} "HTTP Digest Access Authentication" から引用しています (この仕様書の他の例では、`SHA-512`、`charset`、`userhash` の使用方法を示しています)。

クライアントは、Digest 認証で保護された URI `http://www.example.org/dir/index.html` の文書にアクセスしようとしています。
この文書のユーザー名は "Mufasa" で、パスワードは "Circle of Life" です (各単語の間にスペースがあることに注意してください)。

クライアントが初めて文書をリクエストしたとき、{{HTTPHeader("Authorization")}} ヘッダーフィールドは送信されません。
ここでサーバーは、対応している各ダイジェストアルゴリズムのチャレンジを含む HTTP 401 メッセージでレスポンスします（`SHA256`、`MD5` の順）。

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

### HOBA 認証

HOBA 認証に対応しているサーバーは、次のような `WWW-Authenticate` レスポンスヘッダーを入れることができます。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

署名されているこの blob チャレンジの構成要素は、 `www.example.com` はポート 8080 を使用し、ノンスは `1123123123`、署名用のアルゴリズムは `RSA-SHA256`、キー識別子は `123`、そして最後にチャレンジは `68147c97-461b-4310-be9b-4c707237ab53` です。

クライアントは、このヘッダーを受信し、チャレンジを抽出し、RSA-SHA256 を使用して、この例ではキー識別子 123 に対応する秘密鍵で署名し、その結果をドットで区切ったキー ID、チャレンジ、ノンス、および署名として `Authorization` ヘッダーで送信します。

```http
Authorization: 123.16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz.1123123123.<signature-of-challenge>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
