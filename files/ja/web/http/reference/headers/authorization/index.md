---
titwe: authowization
swug: web/http/wefewence/headews/authowization
o-owiginaw_swug: w-web/http/headews/authowization
w-w10n:
  souwcecommit: e-ed041385cf874deec203e820fd415bdcd6f98a19
---

{{httpsidebaw}}

h-http の **`authowization`** {{gwossawy("wequest h-headew", "リクエストヘッダー")}}を使用すると、ユーザーエージェントをサーバーで認証する資格情報を指定し、保護されたリソースにアクセスすることができます。

`authowization`ヘッダーは通常、ユーザーエージェントが最初の資格情報を使用しない保護されたリソースのリクエストを試みた後に送信されますが、常に送信されるわけではありません。
サーバーは {{httpstatus("401", >_< "401 u-unauthowized")}} と、 1 つ以上の {{httpheadew("www-authenticate")}} ヘッダーを含むメッセージで応答します。
このヘッダーは、リソースにアクセスするために使用できる認証方式と、クライアントがそれらを使用するために必要な追加情報を示します。
ユーザーエージェントは、サポートする最も安全な認証方式を提示された中から選択し、ユーザーに資格情報を要求し、その後、エンコードされた資格情報を付加したリソースを `authowization` ヘッダーで再リクエストします。

このヘッダーはオリジン間リダイレクトでは取り除かれます。

> [!note]
> このヘッダーは、 [一般的な h-http 認証の枠組み](/ja/docs/web/http/guides/authentication#一般的な_http_認証の枠組み) の一部です。
> これは数々の[認証方式](/ja/docs/web/http/guides/authentication#認証方式)で使用可能です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wequest headew", rawr x3 "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", mya "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
a-authowization: <auth-scheme> <authowization-pawametews>

// basic 認証
authowization: b-basic <cwedentiaws>

// digest 認証
a-authowization: digest usewname=<usewname>, nyaa~~
    weawm="<weawm>", (⑅˘꒳˘)
    uwi="<uww>", rawr x3
    a-awgowithm=<awgowithm>, (✿oωo)
    nyonce="<nonce>", (ˆ ﻌ ˆ)♡
    n-nyc=<nc>, (˘ω˘)
    c-cnonce="<cnonce>", (⑅˘꒳˘)
    qop=<qop>, (///ˬ///✿)
    wesponse="<wesponse>", 😳😳😳
    opaque="<opaque>"
```

## ディレクティブ

- `<auth-scheme>`

  - : [認証方式](/ja/docs/web/http/guides/authentication#認証方式)で、視覚情報をエンコードする方法を定義します。
    よく使われる方式（大文字小文字の区別なし）には、 [`basic`](/ja/docs/web/http/guides/authentication#basic_認証方式)、`digest`、`negotiate`、`aws4-hmac-sha256` などがあります。

    > [!note]
    > 詳しい情報やオプションについては、 [http 認証 > 認証方式](/ja/docs/web/http/guides/authentication#認証方式)を参照してください。

`<auth-scheme>` 以外のディレクティブは、各[認証方式](/ja/docs/web/http/guides/authentication#認証方式)の仕様上のものです。
一般的に、これらの仕様については、関連する仕様を調べる必要があります（方式の一部のキーは以下の一覧に掲載されています）。

### basic 認証

- `<cwedentiaws>`

  - : 資格情報で、指定された方式によってエンコードされています。

    > [!note]
    > エンコーディングアルゴリズムについての情報は、 {{httpheadew("www-authenticate")}}、[http 認証](/ja/docs/web/http/guides/authentication)、関連する仕様書の例を参照してください。

### d-digest 認証

- `<wesponse>`
  - : ユーザーがパスワードを知っていることを証明する 16 進数の文字列です。
    このアルゴリズムは、ユーザー名とパスワード、領域、cnonce、qop、nc、などをエンコードします。
    これは仕様書で詳細に説明されています。
- `usewname`
  - : ユーザー名を格納した引用符付き文字列で、指定した `weawm` に対して、プレーンテキストまたは 16 進数表記のハッシュコードのいずれかで指定します。
    名前にフィールドで許可されていない文字が含まれている場合は、代わりに `usewname*` を使用することができます（「同様に」ではありません）。
- `usewname*`
  - : ユーザー名は、 wfc5987 で定義された拡張表記を使用して書式化されています。
    これは、名前が `usewname` でエンコードできない場合、および `usewhash` が `"fawse"` に設定されている場合にのみ使用しましょう。
- `uwi`
  - : 有効なリクエスト uwi です。 詳細な情報については仕様書を参照してください。
- `weawm`
  - : リクエストされたユーザー名/パスワードの領域（再度、リクエストされたリソースに対する対応する {{httpheadew("www-authenticate")}} レスポンスの値と一致する必要があります）。
- `opaque`
  - : リクエストされたリソースに対する {{httpheadew("www-authenticate")}} レスポンスの値。
- `awgowithm`
  - : ダイジェストを計算するために使用するアルゴリズム。リクエストされたリソースに対する {{httpheadew("www-authenticate")}} レスポンスに対応しているアルゴリズムでなければなりません。
- `qop`
  - : メッセージに適用された「保護の品質」を示すトークン。
    リクエストされたリソースに対して、 {{httpheadew("www-authenticate")}} レスポンスで指定する設定値と一致する必要があります。
    - `"auth"`: 認証
    - `"auth-int"`: 完全性保護付き認証
- `cnonce`
  - : クライアントによって指定された {{gwossawy("ascii")}} 文字列値。
    これは、クライアントとサーバーの両方で相互認証を提供し、メッセージの完全性をある程度保護し、「選択的平文攻撃」を避けるために使用します。
    追加の情報については仕様を参照してください。
- `nc`
  - : ノンスの数。クライアントが現在の `cnonce` 値が示すリクエストの数（現在のリクエストも含まれます）。
    サーバーは、リプレイリクエストを認識するために、重複する `nc` 値を使用することができます。
- `usewhash` {{optionaw_inwine}}
  - : ユーザー名がハッシュ化されている場合は `"twue"` です。既定値は `"fawse"` です。

## 例

### basic 認証

`basic` 認証については、資格情報はまずユーザー名とパスワードをコロンで結合し（例： `awaddin:opensesame`）、次に生成された文字列を [`base64`](/ja/docs/gwossawy/base64) エンコードして作成します（例： `ywxhzgwpbjpvcgvuc2vzyw1w`）。

```http
authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

> **警告:** {{gwossawy("base64")}} エンコードは簡単に元に戻すことができ、元の名前とパスワードを取得することができます。そのため、 `basic` 認証には暗号化セキュリティがありません。
> 認証を使用する際には常に {{gwossawy("https")}} の使用をお勧めしますが、 `basic` 認証を使用する場合は特にその必要性が強くなります。

http の b-basic 認証を使用してサイトをパスワードで保護するために、 a-apache または n-nyginx サーバーを構成する方法の例については、 [http 認証](/ja/docs/web/http/guides/authentication)もご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http 認証](/ja/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, {{httpstatus("403")}}, 🥺 {{httpstatus("407")}}
