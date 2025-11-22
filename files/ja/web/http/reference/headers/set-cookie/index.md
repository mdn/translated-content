---
title: Set-Cookie ヘッダー
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: ac513ee8e865b8de037adee906d10fd888004cce
---

HTTP の **`Set-Cookie`** は{{Glossary("response header", "レスポンスヘッダー")}}で、サーバーからユーザーエージェントへクッキーを送信するために使用され、ユーザーエージェントはそれを後でサーバーに送り返すことができます。
複数のクッキーを送信するには、複数の **`Set-Cookie`** ヘッダーを同じレスポンスで送信してください。

> [!WARNING]
> ブラウザーは、フロントエンドの JavaScript コードが `Set-Cookie` ヘッダーにアクセスするのをブロックします。これは、 Fetch 仕様が `Set-Cookie` を[禁止レスポンスヘッダー名](https://fetch.spec.whatwg.org/#forbidden-response-header-name)として定義しているためで、フロントエンドコードに公開されるすべてのレスポンスから[フィルタリング](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0)しなければなりません。
>
> [フェッチ API](/ja/docs/Web/API/Fetch_API/Using_Fetch) または [XMLHttpRequest API](/ja/docs/Web/API/XMLHttpRequest_API) のリクエストが [CORS を使用する](/ja/docs/Web/HTTP/Guides/CORS#what_requests_use_cors) 場合、ブラウザーはリクエストに資格情報がない限り、サーバーのレスポンスにある `Set-Cookie` ヘッダーを無視します。資格情報の設定方法について知るには、 [フェッチ API の使用 - 資格情報を含める](/ja/docs/Web/API/Fetch_API/Using_Fetch#including_credentials)および [XMLHttpRequest の記事](/ja/docs/Web/API/XMLHttpRequest_API)を参照してください。

詳しくは、 [HTTP クッキーのガイド](/ja/docs/Web/HTTP/Guides/Cookies)を参照してください。

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

    `<cookie-name>` は任意の US-ASCII 文字集合を含むことができますが、制御文字（{{Glossary("ASCII")}} 文字のうち 0 から 31 までと 127）や区切り文字（空白、タブ、 `( ) < > @ , ; : \ " / [ ] ? = { }` など）も含むことができません。

    `<cookie-value>` は任意で二重引用符で囲むことができ、制御文字（ASCII 文字のうち 0 から 31 までと 127）、{{glossary("Whitespace", "ホワイトスペース")}}、二重引用符、カンマ、セミコロン、バックスラッシュを除くすべての US-ASCII 文字が利用できます。

    **エンコーディング**: 多くの実装ではクッキーの値に{{Glossary("Percent-encoding", "パーセントエンコーディング")}}を施します。しかし、 RFC の仕様書で要求されているわけではありません。パーセントエンコーディングを使用すると、 `<cookie-value>` に許可される文字の要件を満たすのに役立ちます。

    > [!NOTE]
    > 一部のクッキー名には接頭辞が含まれており、対応しているユーザーエージェントにおいて、クッキーの属性に特定の制限を課します。詳細については[クッキーの接頭辞](#クッキーの接頭辞)を参照してください。

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
    > 多くのウェブブラウザーはセッション復元 (_session restore_) と呼ばれる機能を持っており、これによってすべてのタブを保存し、次回ブラウザーを起動したときに復元することができます。ブラウザーを実際には閉じていないかのように、セッションクッキーも復元されます。

    `Expires` 属性はサーバーによって、サーバー自身の内蔵時計からの相対値で設定されますが、クライアントブラウザーの時計とは異なる場合があります。
    Firefox と Chromium ベースのブラウザーは、内部的に有効期限 (max-age) 値を使用し、時計の差異を補正するために調整されます。これにより、サーバーが意図する時点に基づいてクッキーが保存されたり、期限切れになったります。
    時計のずれに対する調整は、{{httpheader("DATE")}} ヘッダーの値から計算されます。
    仕様では属性の構文解析方法が説明されていますが、受信側による値の修正の必要性や、その方法については示されていません。

- `HttpOnly` {{optional_inline}}
  - : JavaScript がクッキーにアクセスできないようにします。例えば、 {{domxref("Document.cookie")}} プロパティを利用できなくします。
    なお、 `HttpOnly` で作成されたクッキーは、JavaScript、例えば {{domxref("XMLHttpRequest.send()")}} や {{domxref("Window/fetch", "fetch()")}} を呼び出すことで開始されたリクエストでも送信されます。
    これにより、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting", "XSS")}}) に対する攻撃が軽減されます。

- `Max-Age=<number>` {{optional_inline}}
  - : クッキーの期限までの秒数を示します。ゼロまたは負の数値の場合は、クッキーは直ちに期限切れになります。 `Expires` および `Max-Age` の両方が設定されていたら、 `Max-Age` が優先されます。

- `Partitioned` {{optional_inline}}
  - : 分割ストレージをを使用してクッキーが格納されるべきであることを示します。
    この設定を行う場合は、 [`Secure` ディレクティブ](#secure)も設定する必要があることに注意してください。
    詳細は、[分割された独立した状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)を参照してください。

- `Path=<path-value>` {{optional_inline}}
  - : リクエストの URL に含む必要があるパスを示します。含まれていないと、ブラウザーは `Cookie` ヘッダーを送信しません。

    この属性が省略された場合、既定ではリクエストURLのパス部分が使用されます。例えば、`https://example.com/docs/Web/HTTP/index.html` へのリクエストによってクッキーが設定された場合、既定のパスは `/docs/Web/HTTP/` となります。

    スラッシュ (`/`) の文字はディレクトリー区切りとして解釈され、サブディレクトリーも同様に一致します。例えば、 `Path=/docs` である場合、
    - `/docs`, `/docs/`, `/docs/Web/`, `/docs/Web/HTTP` のリクエストパスはすべて一致します)。
    - `/`, `/docsets`, `/fr/docs` のリクエストパスは一致しません。

    > [!NOTE]
    > `path` 属性を使用すると、サイトの異なる部分に基づいてブラウザーが送信するクッキーを制御できます。
    > これはセキュリティ対策のためのものではなく、異なるパスからのクッキーの不正な読み取りを[保護しません](/ja/docs/Web/API/Document/cookie#security)。

- `SameSite=<samesite-value>` {{optional_inline}}
  - : サイト間リクエスト、すなわちクッキーを設定するサイトとは異なる{{glossary("site", "サイト")}}（スキームを含む）から発信されたリクエストで、クッキーを送信するかどうかを制御します。このリクエストは、特定のクロスサイト攻撃（例えば{{Glossary("CSRF", "クロスサイトリクエストフォージェリー (CSRF)")}}）に対するある程度の保護を提供します。

    使用可能な属性値は以下の通りです。
    - `Strict`
      - : クッキーは、そのクッキーを設定したのと同じ{{glossary("site", "サイト")}}から発したリクエストのみで送信します。

    - `Lax`
      - : クッキーは、そのクッキーを設定したのと同じ{{glossary("site", "サイト")}}から発したリクエストと、以下の条件の両方に当てはまるサイト間リクエストのみで送信します。
        - リクエストが最上位のナビゲーションであること。これは基本的に、そのリクエストによってブラウザーのアドレスバーに表示される URL が変更されるものを指します。
          - これによって除外されるのは、例えば、{{domxref("Window.fetch()", "fetch()")}} API を使用して行われるリクエスト、{{htmlelement("img")}} や {{htmlelement("script")}} 要素などによるサブリソースのリクエスト、{{htmlelement("iframe")}} 要素内のナビゲーションなどです。

          - これに含まれるのは、最上位の閲覧コンテキストでユーザーがリンクをクリックしたり、{{domxref("Document.location", "document.location")}} へ代入が行われたり、{{htmlelement("form")}} 送信が行われたりして、あるサイトから別なサイトへ行われたリクエストです。

        - このリクエストが{{glossary("Safe/HTTP", "安全な")}}メソッドを使用していること。特に、{{httpmethod("POST")}}、{{httpmethod("PUT")}}、{{httpmethod("DELETE")}} は使用していないこと。

        ブラウザーによっては、 `Lax` を `SameSite` が指定されなかった場合の既定値として使用します。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

        > [!NOTE]
        > `Lax` が既定で適用されている場合、より寛容なバージョンが使用されます。このより寛容なバージョンでは、リクエストが送信される2分前までに設定されたクッキーは、{{httpmethod("POST")}} リクエストにも含められます。

    - `None`
      - : サイト間リクエストと同一サイトリクエストの両方でクッキーを送信します。
        この値を使用する際には、`Secure` 属性も同時に設定する必要があります。

- `Secure` {{optional_inline}}
  - : クッキーが、リクエストが SSL と HTTPS プロトコルを使用して行われた場合にのみサーバーに送信されることを示します。ただし HTTP クッキーは、例えば情報が暗号化されないなど、保護されていない仕組みを継承しているので、機密な情報や敏感な情報を転送したり格納したりしないようにしてください。

    > [!NOTE]
    > `Secure` を設定すると、クッキー内の機密情報（セッションキー、ログイン情報など）へのアクセスがすべて防げると思わないでください。
    > この属性を持つクッキーは、クライアントのハードディスクにアクセスしたり、 `HttpOnly` クッキー属性が設定されていない場合に JavaScript からアクセスしたりすることで、依然として読み取り/変更が可能です。
    >
    > 保護されていないサイト (`http:`) では、 `Secure` 属性のクッキーを設定できません。`https:` の要件は、`Secure` 属性が localhost で設定されている場合は無視されます。

## クッキーの接頭辞

一部のクッキー名には接頭辞が含まれており、対応しているユーザーエージェントにおいてクッキーの属性に特定の制限を課します。すべてのクッキー接頭辞は二重アンダースコア (`__`) で始まり、ダッシュ (`-`) で終わります。次の接頭辞が定義されています。

- **`__Secure-`**: `__Secure-` で始まるクッキー名は、 `Secure` 属性を設定することが必要で、保護されたページ (HTTPS) でなければなりません。
- **`__Host-`**: 名前が `__Host-` で始まるクッキーは、それらを設定したホストサブドメインまたはドメインにのみ送信され、他のホストには送信されません。さらに、`Domain` 属性が指定されていないこと、かつ `Path` 属性が `/` に設定されている必要があります。これにより、このようなクッキーは設定元のホストにのみ送信され、ドメイン内のそれ以外のホストには送信されないことが保証されます。同時に、ホスト全体に設定され、そのホスト上のいかなるパスでも上書きできないことも保証されます。この組み合わせにより、オリジンをセキュリティ境界として扱うことに限りなく近いクッキーが生成されます。
- **`__Http-`**: `__Http-` で始まる名前のクッキーは、セキュアなページ (HTTPS) によって `Secure` フラグが設定され、さらに `HttpOnly` 属性が設定されている必要があります。これは、`Set-Cookie` ヘッダーを介して設定されたことを証明するためです（`Document.cookie` や [Cookie Store API](/ja/docs/Web/API/Cookie_Store_API) などの JavaScript 機能では設定または変更できません）。
- **`__Host-Http-`**: `__Host-Http-` という名前で始まるクッキーは、保護された接続 (HTTPS) によって `Secure` フラグが設定され、 `HttpOnly` 属性が設定されることで `Set-Cookie` ヘッダーから設定される必要があります。加えて、 `__Host-` の接頭辞のついたクッキーと同様の制約があります。 この組み合わせにより、クッキーは可能な限りセキュリティ境界として扱うことに近い状態を実現すると同時に、開発者やサーバー運用者がその作用範囲が HTTP リクエストに限定されていることを確実に認識できるようにします。

> [!WARNING]
> クッキー接頭辞に対応していないブラウザーでは、これらの追加保証は期待できません。そのような場合、接頭辞付きクッキーは常に受け入れられます。

## 例

### セッションクッキー

セッションクッキーは、クライアントが終了したときに削除されます。 `Expires` や `Max-Age` ディレクティブを指定しないと、クッキーはセッションクッキーになります。

```http
Set-Cookie: sessionId=38afes7a8
```

### 永続的クッキー

永続的なクッキーは、特定の日付 (`Expires`) または特定の期間 (`Max-Age`) 後に削除され、クライアントが閉じられたときには削除されません。

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

`__Secure-` または `__Host-` の接頭辞が付いたクッキー名は、安全な (HTTPS の) オリジンから `Secure` ディレクティブを設定した場合のみ使用することができます。

`__Http-` または `__Host-Http-` で始まるクッキー名は、保護された (HTTPS) オリジンから `Secure` 属性付きで設定された場合にのみ使用可能であり、さらに `HttpOnly` 属性が設定されている必要があります。これは、`Set-Cookie` ヘッダー経由で設定されたものであり、クライアント側の JavaScript 経由ではないことを証明するためです。

加えて、 `__Host-` または `__Host-Http-` の接頭辞が付いたクッキーは、 `/` （ホストの任意のパスという意味）を持つ必要があり、 `Domain` ディレクティブを持つことができません。

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

// Set-Cookie を通してのみ設定可能です
Set-Cookie: __Http-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-Http-ID=123; Secure; Path=/
```

### 分離されたクッキー

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> 分離されたクッキーは、 `Secure` に設定する必要があります。さらに、分離されたクッキーを設定するには、ホスト名にバインドされ、登録可能なドメインにバインドされないように、 `__Host` または `__Host-Http-` 接頭辞を使用することをお勧めします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP クッキー](/ja/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [Samesite cookies explained](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
