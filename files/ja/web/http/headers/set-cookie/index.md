---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

**`Set-Cookie`** は HTTP のレスポンスヘッダーで、サーバーからユーザーエージェントへクッキーを送信するために使用され、ユーザーエージェントはそれを後でサーバーに送り返すことができます。
複数のクッキーを送信するには、複数の **`Set-Cookie`** ヘッダーを同じレスポンスで送信してください。

> [!WARNING]
> ブラウザーは、フロントエンドの JavaScript コードが `Set-Cookie` ヘッダーにアクセスするのをブロックします。これは、 Fetch 仕様が `Set-Cookie` を[禁止レスポンスヘッダー名](https://fetch.spec.whatwg.org/#forbidden-response-header-name)として定義しているためで、フロントエンドコードに公開されるすべてのレスポンスから[フィルタリング](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0)しなければなりません。
>
> [フェッチ API](/ja/docs/Web/API/Fetch_API/Using_Fetch) または [XMLHttpRequest API](/ja/docs/Web/API/XMLHttpRequest_API) のリクエストが [CORS を使用する](/ja/docs/Web/HTTP/CORS#what_requests_use_cors) 場合、ブラウザーはリクエストに資格情報がない限り、サーバーのレスポンスにある `Set-Cookie` ヘッダーを無視します。資格情報の設定方法について知るには、 [フェッチ API の使用 - 資格情報を含める](/ja/docs/Web/API/Fetch_API/Using_Fetch#including_credentials)および [XMLHttpRequest の記事](/ja/docs/Web/API/XMLHttpRequest_API)を参照してください。

詳しくは、 [HTTP クッキーのガイド](/ja/docs/Web/HTTP/Cookies)を参照してください。

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
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// 以下の例のように、複数のディレクティブも利用することができます。
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## 属性

- `<cookie-name>=<cookie-value>`

  - : クッキーの名前とその値を定義します。
    クッキーの定義は、名前と値の組で始まります。

    `<cookie-name>` は任意の US-ASCII 文字の集合を含むことができますが、制御文字（{{Glossary("ASCII")}} 文字のうち 0 から 31 までと 127）や区切り文字（空白、タブ、 `( ) < > @ , ; : \ " / [ ] ? = { }` など）も含むことができません。

    `<cookie-value>` は任意で二重引用符で囲むことができ、制御文字（ASCII 文字のうち 0 から 31 までと 127）、{{glossary("Whitespace", "ホワイトスペース")}}、二重引用符、カンマ、セミコロン、バックスラッシュを除くすべての US-ASCII 文字が利用できます。

    **エンコーディング**: 多くの実装ではクッキーの値に{{Glossary("Percent-encoding", "パーセントエンコーディング")}}を施します。
    しかし、 RFC の仕様書で要求されているわけではありません。
    パーセントエンコーディングを使用すると、 `<cookie-value>` に許可される文字の要件を満たすのに役立ちます。

    > [!NOTE]
    > 一部の `<cookie-name>` は特殊な意味を持ちます。
    >
    > **`__Secure-` の接頭辞**: `__Secure-` (接頭辞にダッシュを含む) で始まるクッキー名は、 `secure` フラグを設定することが必要で、安全なページ (HTTPS) でなければなりません。
    >
    > **`__Host-` の接頭辞**: 名前が `__Host-` で始まるクッキーは、それらを設定したホストサブドメインまたはドメインにのみ送信され、他のホストには送信されません。
    > `secure` フラグを設定し、安全なページ (HTTPS) から読み込む必要があり、ドメインを指定することができず、パスが `/` である必要があります。

- `Domain=<domain-value>` {{optional_inline}}

  - : クッキーが送信されるホストを定義します。

    現在のドメインのみ、またはより上位のドメインを値として設定できます。ただし、パブリック接尾辞の場合はこの限りではありません。ドメインを設定すると、そのドメインだけでなく、そのドメインのすべてのサブドメインでもクッキーが利用できるようになります。

    省略された場合、この属性はサブドメインを記載せずに、既定で現在の文書 URL のホストに設定されます。

    以前の仕様とは異なり、ドメイン名の先頭のドット (`.example.com`) は無視されます。

    複数のホスト/ドメイン値は許可されていませんが、ドメインを指定した場合は、サブドメインが常に含まれます。

- `Expires=<date>` {{optional_inline}}

  - : クッキーの有効期限を示す、 HTTP の日時タイムスタンプです。
    詳細な書式は {{HTTPHeader("Date")}} を参照してください。

    指定されなかった場合は、クッキーは**セッションクッキー**の寿命になります。
    セッションはクライアントが終了したときに終了するので、セッションクッキーはその時点で削除されます。

    > [!WARNING]
    > 多くのウェブブラウザーはセッション復元と呼ばれる機能を持っており、これによってすべてのタブを保存し、次回ブラウザーを起動したときに復元することができます。ブラウザーを実際には閉じていないかのように、セッションクッキーも復元されます。

    有効期限が設定されていた場合、期限はサーバーではなく、クッキーが設定されているクライアントからの相対時刻で設定されます。

- `HttpOnly` {{optional_inline}}

  - : JavaScript がクッキーにアクセスできないようにします。例えば、 {{domxref("Document.cookie")}} プロパティを利用できなくします。
    なお、 `HttpOnly` で作成されたクッキーは、JavaScript、例えば {{domxref("XMLHttpRequest.send()")}} や {{domxref("Window/fetch", "fetch()")}} を呼び出すことで開始されたリクエストでも送信されます。
    これにより、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting", "XSS")}}) に対する攻撃が軽減されます。

- `Max-Age=<number>` {{optional_inline}}

  - : クッキーの期限までの秒数を示します。ゼロまたは負の数値の場合は、クッキーは直ちに期限切れになります。 `Expires` および `Max-Age` の両方が設定されていたら、 `Max-Age` が優先されます。

- `Partitioned` {{optional_inline}}

  - : 分割ストレージをを使用してクッキーが格納されるべきであることを示します。
    この設定を行う場合は、 [`Secure` ディレクティブ](#secure)も設定する必要があることに注意してください。
    詳細は、[分割された独立した状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)を参照してください。

- `Path=<path-value>` {{optional_inline}}

  - : リクエストの URL に含む必要があるパスを示します。含まれていないと、ブラウザーは `Cookie` ヘッダーを送信しません。

    スラッシュ (`/`) の文字はディレクトリー区切りとして解釈され、サブディレクトリーも同様に一致します。例えば、 `Path=/docs` である場合、

    - `/docs`, `/docs/`, `/docs/Web/`, `/docs/Web/HTTP` のリクエストパスはすべて一致します)。
    - `/`, `/docsets`, `/fr/docs` のリクエストパスは一致しません。

- `SameSite=<samesite-value>` {{optional_inline}}

  - : クロスサイトリクエストでクッキーを送信するかどうかを制御し、クロスサイトリクエストフォージェリ攻撃 ({{Glossary("CSRF")}}) に対するある程度の防御を提供します。

    使用可能な属性値は以下の通りです。

    - `Strict`

      - : ブラウザーが同一サイトのリクエストに対してのみクッキーを送信することを意味します。つまり、クッキーを設定したのと同じサイトから発信されるリクエストのことです。
        リクエストが異なるドメインやスキームから発信された場合（同じドメインであっても）、 `SameSite=Strict` 属性のクッキーは送信されません。

    - `Lax`

      - : 画像やフレームを読み込むリクエストのようなクロスサイトリクエストではクッキーを送信しませんが、ユーザーが外部サイトから元のサイトに移動するとき（例えば、リンクをたどるとき）には送信されることを意味します。
        これは `SameSite` 属性が指定されていない場合の既定の動作です。

    - `None`

      - : ブラウザーがクロスサイトと同一サイトの両方のリクエストでクッキーを送信することを意味します。
        この値を設定する際には、 `Secure` 属性も設定する必要があります。 `SameSite=None; Secure` のようにします。 `Secure` 属性がないと、次のエラーが記録されます。

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > **メモ:** [`Secure`](#secure) のクッキーは、 HTTPS プロトコルで暗号化されたリクエストでのみサーバーに送られます。なお、安全でないサイト (`http:`) では、 `Secure` ディレクティブでクッキーを設定することができないため、 `SameSite=None` を使用することができません。

        > **警告:** `SameSite=None; Secure` で、 [`Partitioned`](#partitioned) 属性のないクッキーは、将来のブラウザーバージョンではサイト間をまたがる場合にブロックされる可能性があります。この動作により、ユーザーデータはクロスサイトトラッキングから保護されます。[分割された独立した状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)と[サードパーティークッキー](/ja/docs/Web/Privacy/Third-party_cookies)を参照してください。

- `Secure` {{optional_inline}}

  - : クッキーが、リクエストが SSL と HTTPS プロトコルを使用して行われた場合にのみサーバーに送信されることを示します。ただし HTTP クッキーは、例えば情報が暗号化されないなど、安全ではない仕組みを継承しているので、機密な情報や敏感な情報を転送したり格納したりしないようにしてください。

    > [!NOTE]
    > Secure を設定すると、Cookie 内の機密情報 (セッションキー、ログイン情報など) へのアクセスがすべて防げると思わないでください。この属性を持つクッキーは、クライアントのハードディスクにアクセスしたり、 `HttpOnly` クッキー属性が設定されていない場合に JavaScript からアクセスしたりすることで、依然として読み取り/変更が可能です。
    >
    > 安全でないサイト (`http:`) では、 `Secure` 属性のクッキーを設定できません (Chrome 52、Firefox 52 以降)。Firefox では、`Secure` 属性が localhost で設定されている場合、https: の要件は無視されます (Firefox 75以降)。

## 例

### セッションクッキー

**セッションクッキー**は、クライアントが終了したときに削除されます。 `Expires` や `Max-Age` ディレクティブを指定しないと、クッキーはセッションクッキーになります。

```http
Set-Cookie: sessionId=38afes7a8
```

### 永続的クッキー

**永続的なクッキー**は、特定の日付 (`Expires`) または特定の期間 (`Max-Age`) 後に削除され、クライアントが閉じられたときには削除されません。

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### 不正なドメイン

オリジンのサーバーを含まないドメインに所属するクッキーは、[ユーザーエージェントが拒否します](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3)。

次のクッキーを `original-company.com` でホスティングされたサーバーから設定しようとすると拒否されます。

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

提供するドメインのサブドメインへのクッキーは拒否されます。

以下のクッキーを `example.com` でホスティングされたサーバーから設定しようとすると拒否されます。

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### クッキーの接頭辞

`__Secure-` または `__Host-` の接頭辞が付いたクッキー名は、安全な (HTTPS の) オリジンから `secure` ディレクティブを設定した場合のみ使用することができます。

加えて、 `__Host-` の接頭辞が付いたクッキーは、 `/` (ホストの任意のパスという意味) を持つ必要があり、 `Domain` ディレクティブを持つことができません。

> [!WARNING]
> クッキーの接頭辞を実装していないクライアントでは、これらの保証を受けることができず、クッキーは常に受け入れられます。

```http
// どちらも安全な (HTTPS の) オリジンから受け入れられます
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Secure ディレクティブが無いため、拒否されます
Set-Cookie: __Secure-id=1

// Path=/ ディレクティブが無いため、拒否されます
Set-Cookie: __Host-id=1; Secure

// Domain を設定したため、拒否されます
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

### 分離されたクッキー

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> 分離されたクッキーは、 `Secure` に設定する必要があります。さらに、分離されたクッキーを設定するには、ホスト名にバインドされ、登録可能なドメインにバインドされないように、 `__Host` 接頭辞を使用することをお勧めします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

- Chrome 52 および Firefox 52 以降、セキュリティで保護されていないサイト (`http:`) では、 `Secure` ディレクティブ付きでクッキーを設定することはできなくなりました。

## 関連情報

- [HTTP クッキー](/ja/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [Samesite cookies explained](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
