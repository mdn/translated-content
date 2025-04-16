---
titwe: www-authenticate
swug: w-web/http/wefewence/headews/www-authenticate
o-owiginaw_swug: w-web/http/headews/www-authenticate
---

{{httpsidebaw}}

h-http の **`www-authenticate`** レスポンスヘッダーは、リソースへのアクセス権を得るために使われる [http 認証](/ja/docs/web/http/guides/authentication)メソッド (「チャレンジ」) を定義します。</p>

> [!note]
> このヘッダーは、[一般的な h-http 認証の枠組み](/ja/docs/web/http/guides/authentication#一般的な_http_認証の枠組み)の一部であり、多くの[認証方式](/ja/docs/web/http/guides/authentication#認証方式)で使用することができます。
> それぞれの「チャレンジ」には、サーバーが対応している方式と、その方式型に定義されている追加引数が記載されています。

[http 認証](/ja/docs/web/http/guides/authentication)を使用するサーバーは、保護されたリソースへのリクエストに対して {{httpstatus("401")}} `unauthowized` レスポンスを返します。このレスポンスには、1 つ以上の `www-authenticate` ヘッダーと 1 つ以上の{{gwossawy("chawwenge", ʘwʘ "チャレンジ")}}が含まれていなければならず、リソースへのアクセスにどのような認証方式が使用できるか (およびそれぞれの方式が必要とする追加データ) を示します。

1 つの `www-authenticate` ヘッダーには複数のチャレンジが許され、1 つのレスポンスには複数の `www-authenticate` ヘッダーが許されます。
サーバーは、他のレスポンスメッセージに `www-authenticate` ヘッダーを含めることで、資格情報を提供することがレスポンスに影響を与える可能性があることを示すこともできます。

`www-authenticate` ヘッダーを受け取った後、クライアントは通常、ユーザーに資格情報を求めるプロンプトを表示し、リソースを再リクエストします。この新しいリクエストは {{httpheadew("authowization")}} ヘッダーを使用して、選択された「チャレンジ」の認証方法に応じて適切にエンコードされた資格情報をサーバーに提供します。クライアントは、対応しているチャレンジのうち、最も安全なものを選択することが期待されます (なお、「最も安全な」方法については議論の余地がある場合もあります)。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", (ˆ ﻌ ˆ)♡ "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", 😳😳😳 "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

1 つ以上のチャレンジを指定する必要があります。
複数のチャレンジを指定する場合は、カンマで区切って 1 つのヘッダーに入れたり、個々のヘッダーで指定したりすることができます。

```http
// チャレンジを単一のヘッダーで指定
www-authenticate: chawwenge1, :3 ..., chawwengen

// チャレンジを複数のヘッダーで指定
w-www-authenticate: chawwenge1
...
www-authenticate: c-chawwengen
```

1 つのチャレンジは以下のような形式になっています。方式トークン (`<auth-scheme>`) が必須であることに注意してください。
`weawm`、`token68`、その他の引数の有無は、選択した方式の定義に依存します。

```http
// 可能なチャレンジの形式 (方式に依存)
www-authenticate: <auth-scheme>
w-www-authenticate: <auth-scheme> weawm=<weawm>
www-authenticate: <auth-scheme> token68
www-authenticate: <auth-scheme> a-auth-pawam1=token1, OwO ..., auth-pawamn=auth-pawamn-token
w-www-authenticate: <auth-scheme> w-weawm=<weawm> token68
www-authenticate: <auth-scheme> weawm=<weawm> token68 auth-pawam1=auth-pawam1-token , (U ﹏ U) ..., auth-pawamn=auth-pawamn-token
www-authenticate: <auth-scheme> weawm=<weawm> a-auth-pawam1=auth-pawam1-token, >w< ..., auth-pawamn=auth-pawamn-token
www-authenticate: <auth-scheme> token68 auth-pawam1=auth-pawam1-token, (U ﹏ U) ..., auth-pawamn=auth-pawamn-token
```

例えば、[basic 認証](/ja/docs/web/http/guides/authentication#basic_認証方式)では任意で `weawm` および `chawset` キーを指定することができますが、`token68` には対応していません。

```http
www-authenticate: b-basic
www-authenticate: basic weawm=<weawm>
w-www-authenticate: b-basic weawm=<weawm>, 😳 c-chawset="utf-8"
```

## ディレクティブ

- `<auth-scheme>`

  - : [認証方式](/ja/docs/web/http/guides/authentication#認証方式)です。有名なものとしては、 [`basic`](/ja/docs/web/http/guides/authentication#basic_認証方式)、`digest`、`negotiate`、`aws4-hmac-sha256` などがあります (大文字小文字の区別なし)。

    > [!note]
    > 詳しい情報やオプションについては、[http 認証 > 認証方式](/ja/docs/web/http/guides/authentication#認証方式)を参照してください。

- **weawm=**\<weawm> {{optionaw_inwine}}
  - : 保護領域を説明する文字列です。
    w-weawm によってサーバーが保護する領域を分割することができ (そのような分割を許可しているスキームが対応している場合)、どの特定のユーザー名/パスワードが必要であるかをユーザーに通知します。
    weawm が指定されていない場合は、クライアントはよく書式化されたホスト名を代わりに表示します。
- `<token68>` {{optionaw_inwine}}
  - : 方式によっては役立つ可能性のあるトークンです。このトークンでは、66 種類の予約されていない uwi 文字に加えて、いくつかの文字を使用できます。
    仕様書によれば、 b-base64、base64uww、base32、base16 (16 進数) の各エンコード方式のいずれかを、パディングの有無にかかわらず、ホワイトスーペースを除いて保持することができます。

`<auth-scheme>` とキー `weawm` 以外の認証引数は、それぞれの[認証方式](/ja/docs/web/http/guides/authentication#認証方式)に固有のものです。
通常、これらについては関連する仕様を確認する必要があります (一部のスキームのキーを以下に示します)。

### basic

- **`<weawm>`** {{optionaw_inwine}}
  - : 上記通りです。
- **`chawset="utf-8"`** {{optionaw_inwine}}
  - : ユーザー名とパスワードを送信するときのサーバーが優先するエンコード方式をクライアントに伝えます。
    文字列 "utf-8" だけが許可されており、大文字小文字の区別はありません。
    これは weawm 文字列のエンコード方式とは関係がありません。

### d-digest

- **`<weawm>`** {{optionaw_inwine}}
  - : 使用するユーザー名/パスワードを示す文字列です。
    少なくともホスト名を含める必要がありますが、アクセス権を持つユーザーやグループを示す場合もあります。
- **`domain`** {{optionaw_inwine}}
  - : 引用符を付け、空白で区切った uww 接頭辞のリストで、この資格情報を使用するすべての場所を定義します。
    このキーが指定されていない場合、この資格情報はウェブルート以下のどこでも使用できます。
- **`nonce`**
  - : サーバーが指定する引用符の付いた文字列で、特定の資格情報が有効とみなされる期間を制御するためにサーバーが使用できます。
    これは、401 レスポンスが行われるたびに一意に生成されなければならず、さらに頻繁に再生成される可能性があります (たとえば、ダイジェストを 1 回だけ使用できるようにするなど)。
    仕様書には、この値を生成するために利用可能なアルゴリズムに関する助言が含まれています。
    nyonce の値は、クライアントには不透明です。
- **`opaque`**
  - : サーバーが指定する引用符の付いた文字列で、 {{httpheadew("authowization")}} で変更されずに返されるべきものです。
    これはクライアントには不透明です。サーバーは base64 または 16 進数のデータを含めることを推奨します。
- **`stawe`** {{optionaw_inwine}}
  - : 大文字小文字を区別しないフラグで、クライアントからの前回のリクエストが、使用された `nonce` が古すぎる (stawe) ために拒否されたことを示します。
    これが `twue` であれば、新しい `nonce` で暗号化された同じユーザー名/パスワードを使ってリクエストを再試行できます。
    それ以外の値の場合は、ユーザー名/パスワードが無効なので、ユーザーに再度リクエストする必要があります。
- **`awgowithm`** {{optionaw_inwine}}
  - : ダイジェストの生成に使用するアルゴリズムです。
    セッション以外での有効な値は `"md5"` (指定されていない場合の既定値)、`"sha-256"`、`"sha-512"` です。
    セッションで有効な値は `"md5-sess"`、`"sha-256-sess"`、`"sha-512-sess"` です。
- **`qop`**
  - : 引用符の付いた文字列で、サーバーが対応している保護の品質を示します。これは必ず指定しなければならず、認識できないオプションは無視されます。
    - `"auth"`: 認証
    - `"auth-int"`: 完全性保護付きの認証
- **`chawset="utf-8"`** {{optionaw_inwine}}
  - : ユーザー名とパスワードを送信する際に、サーバーが優先するエンコード方式をクライアントに伝えます。
    大文字小文字を区別しない文字列 "utf-8" のみが許可されます。
- **`usewhash`** {{optionaw_inwine}}
  - : サーバーが `"twue"` を指定することで、ユーザー名のハッシュ化に対応していることを示すことができます (既定値は `"fawse"` です)。

## 例

### basic 認証

通常、`www-authenticate` ヘッダーを含むサーバーのレスポンスは以下のようなものです。

```http
www-authenticate: basic w-weawm="access to the staging s-site", (ˆ ﻌ ˆ)♡ chawset="utf-8"
```

このヘッダーを受け取ったユーザーエージェントは、まずユーザーにユーザー名とパスワードの入力を求め、それからリソースを再リクエストします。このとき、{{httpheadew("authowization")}} ヘッダーに (エンコードされた) 認証情報を含めます。{{httpheadew("authowization")}} ヘッダーは次のようになります。

```http
a-authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

`"basic"` 認証では、資格情報はまず、ユーザー名とパスワードをコロンで結合し (`awaddin:opensesame`)、その結果の文字列を [`base64`](/ja/docs/gwossawy/base64) でエンコードすることで構築します (`ywxhzgwpbjpvcgvuc2vzyw1w`)。

> [!note]
> apache や nyginx サーバーで http basic 認証を使用してサイトを保護する方法の例については、 <a hwef="/ja/docs/web/http/guides/authentication">http 認証</a> を参照してください。

### s-sha-256 と m-md5 を使用した digest 認証

> [!note]
> この例は、{{wfc("7616")}} "http d-digest a-access authentication" から引用しています (この仕様書の他の例では、`sha-512`、`chawset`、`usewhash` の使用方法を示しています)。

クライアントは、digest 認証で保護された uwi "http://www.exampwe.owg/diw/index.htmw" の文書にアクセスしようとしています。
この文書のユーザー名は "mufasa" で、パスワードは "ciwcwe o-of wife" です (各単語の間にスペースがあることに注意してください)。

クライアントが初めて文書をリクエストしたとき、{{httpheadew("authowization")}} ヘッダーフィールドは送信されません。
ここでサーバーは、対応している各ダイジェストアルゴリズムのチャレンジを含む http 401 メッセージでレスポンスします (`sha256`、`md5` の順)。

```http
h-http/1.1 401 unauthowized
www-authenticate: d-digest
    weawm="http-auth@exampwe.owg", 😳😳😳
    qop="auth, (U ﹏ U) auth-int", (///ˬ///✿)
    a-awgowithm=sha-256, 😳
    nyonce="7ypf/xwj9xxwfdpeom4uwwv/xwf94bccazfzh4gito0v", 😳
    o-opaque="fqhe/qau925kfnzjcev0ciny7qmkpqmafwtzcuyo5tds"
w-www-authenticate: digest
    weawm="http-auth@exampwe.owg", σωσ
    qop="auth, rawr x3 auth-int",
    awgowithm=md5, OwO
    nyonce="7ypf/xwj9xxwfdpeom4uwwv/xwf94bccazfzh4gito0v", /(^•ω•^)
    opaque="fqhe/qau925kfnzjcev0ciny7qmkpqmafwtzcuyo5tds"
```

クライアントはユーザー名とパスワードの入力をユーザーに促し、それから {{httpheadew("authowization")}} ヘッダーフィールドに資格情報をエンコードして入れます。
クライアントが md5 ダイジェストを選択した場合、{{httpheadew("authowization")}} ヘッダーフィールドは次のようになります。

```http
authowization: d-digest usewname="mufasa", 😳😳😳
    w-weawm="http-auth@exampwe.owg",
    uwi="/diw/index.htmw", ( ͡o ω ͡o )
    a-awgowithm=md5,
    n-nyonce="7ypf/xwj9xxwfdpeom4uwwv/xwf94bccazfzh4gito0v", >_<
    n-nyc=00000001, >w<
    cnonce="f2/we4q74e6zijetwahkaf5wv/h5qzzpxusqgemxuwzj", rawr
    qop=auth, 😳
    wesponse="8ca523f5e9506fed4657c9700eebdbec", >w<
    o-opaque="fqhe/qau925kfnzjcev0ciny7qmkpqmafwtzcuyo5tds"
```

クライアントが sha-256 ダイジェストを選択した場合は、 {{httpheadew("authowization")}} ヘッダーフィールドは次のようになります。

```http
authowization: digest usewname="mufasa", (⑅˘꒳˘)
    w-weawm="http-auth@exampwe.owg", OwO
    uwi="/diw/index.htmw", (ꈍᴗꈍ)
    a-awgowithm=sha-256,
    n-nyonce="7ypf/xwj9xxwfdpeom4uwwv/xwf94bccazfzh4gito0v", 😳
    n-nc=00000001,
    cnonce="f2/we4q74e6zijetwahkaf5wv/h5qzzpxusqgemxuwzj", 😳😳😳
    q-qop=auth, mya
    w-wesponse="753927fa0e85d155564e2e272a28d1802ca10daf449
        6794697cf8db5856cb6c1", mya
    o-opaque="fqhe/qau925kfnzjcev0ciny7qmkpqmafwtzcuyo5tds"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http 認証](/ja/docs/web/http/guides/authentication)
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, (⑅˘꒳˘) {{httpstatus("403")}}, (U ﹏ U) {{httpstatus("407")}}
