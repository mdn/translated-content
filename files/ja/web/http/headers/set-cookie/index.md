---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
---

{{HTTPSidebar}}

**`Set-Cookie`** は HTTP のレスポンスヘッダーで、サーバーからユーザーエージェントへクッキーを送信するために使用され、ユーザーエージェントはそれを後でサーバーに送り返すことができます。
複数のクッキーを送信するには、複数の **`Set-Cookie`** ヘッダーを同じレスポンスで送信してください。

> **警告:** ブラウザーは、フロントエンドの JavaScript コードが `Set-Cookie` ヘッダーにアクセスするのをブロックします。これは、 Fetch 仕様が `Set-Cookie` を[禁止レスポンスヘッダー名](https://fetch.spec.whatwg.org/#forbidden-response-header-name)として定義しているためで、フロントエンドコードに公開されるすべてのレスポンスから[フィルタリング](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0)しなければなりません。

詳細については、<a href="/ja/docs/Web/HTTP/Cookies">HTTP クッキーのガイド</a>を参照してください。

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

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

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

    `<cookie-name>` は任意の US-ASCII 文字の集合を含むことができますが、制御文字、空白、タブは例外です。
    `( ) < > @ , ; : \ " / [ ] ? = { }` のような区切り文字も含むことができません。

    `<cookie-value>` は任意で二重引用符で囲むことができ、制御文字、{{glossary("Whitespace", "ホワイトスペース")}}、二重引用符、カンマ、セミコロン、バックスラッシュを除くすべての US-ASCII 文字が利用できます。

    **エンコーディング**: 多くの実装ではクッキーの値に URL エンコーディングを施します。
    しかし、 RFC の仕様書で要求されているわけではありません。
    URL エンコーディングを使用すると、 `<cookie-value>` に許可される文字の要件を満たすのに役立ちます。

    > **メモ:** 一部の `<cookie-name>` は特殊な意味を持ちます。
    >
    > **`__Secure-` の接頭辞**: `__Secure-` (接頭辞にダッシュを含む) で始まるクッキー名は、 `secure` フラグを設定することが必要で、安全なページ (HTTPS) でなければなりません。
    >
    > **`__Host-` の接頭辞**: `__Host-` で始まるクッキー名は、 `secure` フラグを設定し、安全なページ (HTTPS) から読み込む必要があり、ドメインを指定することができず (従って、サブドメインにも送られません)、パスが `/` である必要があります。

- `Expires=<date>` {{optional_inline}}

  - : クッキーの有効期限を示す、 HTTP の日時タイムスタンプです。
    詳細な書式は {{HTTPHeader("Date")}} を参照してください。

    指定されなかった場合は、クッキーは**セッションクッキー**の寿命になります。
    セッションはクライアントが終了したときに終了するので、セッションクッキーはその時点で削除されます。

    > **警告:** 多くのウェブブラウザーはセッション復元と呼ばれる機能を持っており、これによってすべてのタブを保存し、次回ブラウザーを起動したときに復元することができます。ブラウザーを実際には閉じていないかのように、セッションクッキーも復元されます。

    有効期限が設定されていた場合、期限はサーバーではなく、クッキーが設定されているクライアントからの相対時刻で設定されます。

- `Max-Age=<number>` {{optional_inline}}
  - : クッキーの期限までの秒数を示します。ゼロまたは負の数値の場合は、クッキーは直ちに期限切れになります。 `Expires` および `Max-Age` の両方が設定されていたら、 `Max-Age` が優先されます。
- `Domain=<domain-value>` {{optional_inline}}

  - : クッキーを送信する先のホストを定義します。

    指定されなかった場合は、この属性は既定で現在の文書の URL におけるホスト名の部分になり、サブドメインを含みません。

    初期の仕様書とは逆に、ドメイン名の前のドット (`.example.com`) は無視されます。

    複数のホストやドメインの値を指定することは*できません*が、ドメイン*が*指定された場合、すべてのサブドメインが常に含まれます。

- `Path=<path-value>` {{optional_inline}}

  - : リクエストの URL に含む必要があるパスを示します。含まれていないと、ブラウザーは `Cookie` ヘッダーを送信しません。

    スラッシュ (`/`) の文字はディレクトリー区切りとして解釈され、サブディレクトリーも同様に一致します。例えば、 `Path=/docs` である場合、

    - `/docs`, `/docs/`, `/docs/Web/`, `/docs/Web/HTTP` のリクエストパスはすべて一致します)。
    - `/`, `/docsets`, `/fr/docs` のリクエストパスは一致しません。

- `Secure` {{optional_inline}}

  - : クッキーが、リクエストが SSL と HTTPS プロトコルを使用して行われた場合にのみサーバーに送信されることを示します。ただし HTTP クッキーは、例えば情報が暗号化されないなど、安全ではない仕組みを継承しているので、機密な情報や敏感な情報を転送したり格納したりしないようにしてください。

    > **メモ:** Secure を設定すると、Cookie 内の機密情報 (セッションキー、ログイン情報など) へのアクセスがすべて防げると思わないでください。この属性を持つクッキーは、クライアントのハードディスクにアクセスしたり、 `HttpOnly` クッキー属性が設定されていない場合に JavaScript からアクセスしたりすることで、依然として読み取り/変更が可能です。
    >
    > 安全でないサイト (`http:`) では、 `Secure` 属性のクッキーを設定できません (Chrome 52、Firefox 52 以降)。Firefox では、`Secure` 属性が localhost で設定されている場合、https: の要件は無視されます (Firefox 75以降)。

- `HttpOnly` {{optional_inline}}
  - : JavaScript が {{domxref("Document.cookie")}} プロパティなどを介してこのクッキーにアクセスすることを禁止します。
    なお、 `HttpOnly` で作成されたクッキーは、JavaScript で開始されたリクエスト、例えば、 {{domxref("XMLHttpRequest.send()")}} や {{domxref("fetch()")}} と共に送信されます。
    これにより、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting", "XSS")}}) 攻撃を軽減します。
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
        この値を設定する際には、 `Secure` 属性も設定する必要があります。 `SameSite=None; Secure` のようにします。

    > **メモ:** [SameSite クッキー](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite)に関する標準は、最近次のように改訂されました。
    >
    > 1. `SameSite` が指定されなかった場合のクッキー送信の動作は `SameSite=Lax` になりました。以前は既定ではすべてのリクエストに対して送信されていました。
    > 2. `SameSite=None` が指定されたクッキーには `Secure` 属性も指定されるようになりました（すなわち、安全なコンテキストが必要になりました）。
    > 3. 同じドメインのクッキーが異なるスキーム（`http:` または `https:`）で送信された場合、同じサイトからのクッキーとは見なされなくなりました。
    >
    > 下記のオプションは新しい動作を含んでいます。特定のブラウザーの実装についての情報は、[ブラウザーの互換性](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite#ブラウザーの互換性)一覧表 （"`SameSite`: Defaults to `Lax`" と "`SameSite`: Secure context required" の行）を参照してください。

## 例

### セッションクッキー

**セッションクッキー**は、クライアントが終了したときに削除されます。 `Expires` や `Max-Age` ディレクティブを指定しないと、クッキーはセッションクッキーになります。

```
Set-Cookie: sessionId=38afes7a8
```

### 永続的クッキー

**永続的なクッキー**は、特定の日付 (`Expires`) または特定の期間 (`Max-Age`) 後に削除され、クライアントが閉じられたときには削除されません。

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### 不正なドメイン

オリジンのサーバーを含まないドメインに所属するクッキーは、[ユーザーエージェントが拒否します](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3)。

次のクッキーを `originalcompany.com` でホスティングされたサーバーから設定しようとすると拒否されます。

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

提供するドメインのサブドメインへのクッキーは拒否されます。

以下のクッキーを `example.com` でホスティングされたサーバーから設定しようとすると拒否されます。

```
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### クッキーの接頭辞

`__Secure-` または `__Host-` の接頭辞が付いたクッキー名は、安全な (HTTPS の) オリジンから `secure` ディレクティブを設定した場合のみ使用することができます。

加えて、 `__Host-` の接頭辞が付いたクッキーは、 `/` (ホストの任意のパスという意味) を持つ必要があり、 `Domain` ディレクティブを持つことができません。

> **警告:** クッキーの接頭辞を実装していないクライアントでは、これらの保証を受けることができず、クッキーは常に受け入れられます。

```
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
- [SameSite cookies](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
