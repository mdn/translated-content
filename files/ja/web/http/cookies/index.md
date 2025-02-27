---
title: HTTP Cookie の使用
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**Cookie**（ウェブ Cookie、ブラウザー Cookie とも呼ぶ）は、サーバーがユーザーのウェブブラウザーに送信する小さなデータです。ブラウザーは Cookie を保存したり、新しい Cookie を作成したり、既存の Cookie を変更したり、後でリクエストされたときに同じサーバーにそれらを送り返したりすることができます。 Cookie により、ウェブアプリケーションは限られた量のデータを格納し、状態についての情報を記憶することができます。HTTP プロトコルは既定では[ステートレス](/ja/docs/Web/HTTP/Overview#http_はステートレスであるがセッションレスではない)だからです。

この記事では、Cookie の主な用途を調べ、使用する際の最善の手法を説明し、プライバシーとセキュリティへの影響を見ていきます。

## Cookie の用途

通常、サーバーは HTTP Cookie のコンテンツを 使用して、さまざまなリクエストが同じブラウザー/ユーザーから送られたものかどうかを判断し、その後、必要に応じて個人設定または一般的なレスポンスを発行します。以下では、非常にシンプルなログインシステムについて説明します。

1. ユーザーは、例えばフォーム送信により、ログイン資格情報をサーバーに送信します。
2. 資格情報が正しい場合、サーバーはユーザーがログインしたことを示すように UI を更新し、ブラウザー上のログイン状態を記録するセッション ID を含むクッキーを返します。
3. 後日、ユーザーは同じサイトの別のページに移動します。ブラウザーは、ユーザーがまだサインインしていると認識していることを示すために、セッション ID を含むクッキーを、対応するリクエストとともに送信します。
4. サーバーはセッション ID をチェックし、有効であれば、ユーザーに新しいページの個人設定版を送信します。無効であれば、セッション ID は削除され、ユーザーにはページの一般版が表示されます（あるいは、「アクセスが拒否されました」というメッセージが表示され、再度サインインするよう求められる場合もあります）。

![上記のログインシステムの説明の視覚表現](cookie-basic-example.png)

Cookie は、主に次の 3 つの用途で使用されます。

- **セッション管理**: ユーザーのログイン状態、ショッピングカート、ゲームのスコア、またはその他のユーザーセッションに関するサーバーが覚えておくべきその他のもの。
- **パーソナライズ**: 表示言語や UI テーマのようなユーザー設定。
- **トラッキング**: ユーザーの行動の記録および分析。

### データストレージ

ウェブの初めの頃、Cookie は汎用的なクライアント側データのストレージ用途に使用されていました。他に選択肢がなかったためです。より新しいストレージ API 、例えば [ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) (`localStorage` および `sessionStorage`) や [IndexedDB](/ja/docs/Web/API/IndexedDB_API) などが現在では推奨されています。

これらはストレージを前提に設計されており、サーバーにデータを送信することはなく、Cookie をストレージとして使用する際に生じる、次のような他の欠点もありません。

- ブラウザーは一般的に、ドメインごとの Cookie の最大数（ブラウザーによって異なりますが、通常は数百）と、Cookie ごとの最大サイズ（通常は 4KB）に制限されています。ストレージ APIは 、より大量のデータを格納することができます。
  Cookie はリクエストのたびに送信されるため、パフォーマンスを低下させる可能性があります（例えば、モバイルの低速データ接続の場合）。特に、多くの Cookie を設定している場合はその傾向が強くなります。

> [!NOTE]
> 保存された Cookie (およびウェブページが使用できる他のストレージ) を確認するには、Firefox 開発ツールの[ストレージインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)か、Chrome 開発者ツールの[アプリケーションパネル](https://developer.chrome.com/docs/devtools/progressive-web-apps)を利用することで実現できます。

## Cookie の作成、削除、更新

HTTP リクエストを受信した後、サーバーはレスポンスに 1 つまたは複数の {{HTTPHeader("Set-Cookie")}} ヘッダーを送信することができ、それぞれのヘッダーが別個の Cookie を設定します。単純な Cookie は、次のように名前付きの値のペアを指定することで設定されます。

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

次の HTTP レスポンスは、受信側のブラウザーに Cookie のペアを格納するように指示します。

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[ページの内容]
```

> [!NOTE]
> さまざまなサーバーサイド言語/フレームワークで `Set-Cookie` ヘッダーを使用する方法を調べてみましょう。 [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

新しいリクエストが行われると、ブラウザーは通常、HTTP ヘッダー内の {{HTTPHeader("Cookie")}} で、前回格納された Cookie を現在のドメイン用にサーバーに送信します。

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### 削除: Cookie の持続時間の定義

有効期限日または期間を指定すると、それ以降は Cookie が削除され、送信されなくなります。Cookie を作成する際に {{HTTPHeader("Set-Cookie")}} ヘッダーに設定する属性に応じて、永続的 Cookie またはセッション Cookie のどちらかになります。

- 永続的 Cookie は、`Expires` 属性で指定された日時が過ぎると削除されます。

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  または、`Max-Age` 属性で指定した期間が経過した後にも削除されます。

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **メモ:** `Expires` は `Max-Age` よりも長い期間の指定ができますが、`Max-Age` のほうがエラーの可能性が低く、両方が設定されている場合はこちらが優先されます。この理由としては、`Expires` で日時を設定した場合、Cookie が設定されているクライアントの日時との相対値となるためです。もしサーバーが異なった日時を指定していると、エラーが発生する可能性があります。

- セッション Cookie（`Max-Age` または `Expires` 属性のない Cookie）は、現在のセッションが終了すると削除されます。ブラウザーが「現在のセッション」がいつ終わるかを定義しますし、ブラウザーによっては再起動時にセッションを復元することもあります。これにより、セッション Cookie がいつまでも有効な状態になるという問題が発生する可能性があります。

  > [!NOTE]
  > ユーザー認証を行うウェブサイトでは、ユーザーが認証を行うたびに、すでに存在するセッションCookieも含めて、再生成して再送信する必要があります。この手法は、サードパーティがユーザーのセッションを再利用する「セッション固定攻撃」を防ぐのに役立ちます。

Cookie が削除された後に Cookie を再作成するよう設計された技術がいくつかあります。これらは「ゾンビ Cookie」として知られています。これらの技術は、ユーザーの[プライバシー](#トラッキングとプライバシー)と制御の原則に違反し、[データプライバシー規制](#cookie_に関する規制)に違反する可能性があり、また、それらを使用するウェブサイトが法的責任を問われる可能性もあります。

### Cookie の値の更新

HTTP 経由で Cookie を更新するには、サーバーは既存の Cookie の名前と新しい値を指定した {{HTTPHeader("Set-Cookie")}} ヘッダーを送信します。例えば次のようにします。

```http
Set-Cookie: id=new-value
```

これを行う理由はいくつか考えられます。例えば、ユーザーが環境設定を更新し、アプリケーションがクライアント側データに変更を反映させたい場合などです（[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)などのクライアント側ストレージメカニズムを使用して、これを行うこともできます）。

#### JavaScript からの Cookie の更新

ブラウザーでは、JavaScript を使用して {{domxref("Document.cookie")}} プロパティ、または非同期の {{domxref("Cookie_Store_API", "Cookie Store API", "", "nocode")}} を使用して新しい Cookie を作成することができます。 下記すべての例で `Document.cookie` を使用していることに注意してください。これは最も広く対応/確立されているオプションだからです。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
```

また、[`HttpOnly`](/ja/docs/Web/HTTP/Headers/Set-Cookie#httponly) 属性が指定されていない既存の Cookie にアクセスし、新しい値を設定することもできます（作成した `Set-Cookie` ヘッダーで指定されている場合）。

```js
console.log(document.cookie);
// 出力: "yummy_cookie=choco; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// 出力: "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

セキュリティ上の理由により、リクエストを開始する際に、更新された `Cookie` ヘッダーを直接送信して Cookie 値を変更することはできません。例えば、{{domxref("Window/fetch", "fetch()")}} や {{domxref("XMLHttpRequest")}} を使用してリクエストを開始する場合は、Cookie値を変更できません。JavaScript で Cookie を変更しない方がよい理由がまだあります。例えば、Cookie を作成する際に `HttpOnly` を設定するには、[セキュリティ](#セキュリティ)の節を参照してください。

## セキュリティ

Cookie に情報を格納した場合、既定ではすべての Cookie 値がエンドユーザーに表示され、変更することができます。例えば、悪意のある人物が Cookie にアクセスしたり、変更したり、本来送信されるべきではないドメインに送信したりするなど、Cookie が悪用されることは避けなければなりません。 その潜在的な影響は、アプリケーションが動作しない、あるいは奇妙な動作をするなど、わずらわしいものから、壊滅的なものまで、さまざまな範囲に及びます。 例えば、犯罪者がセッションIDを盗み、それを他人になりすましてログインしているように見せかけるCookieを設定し、その過程で銀行口座や e コマースのアカウントを制御できる可能性があります。

Cookie を保護する方法はいくつかあり、この節で説明します。

### Cookie へのアクセスをブロック

Cookie が安全に送信され、意図しない第三者やスクリプトからアクセスされないようにするには、 `Secure` 属性と `HttpOnly` 属性の 2 つの方法があります。

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- `Secure` 属性がついた Cookie は、HTTPS プロトコル上の暗号化されたリクエストでのみサーバーに送信されます。安全でない HTTP では決して送信されないため、{{Glossary("MitM", "中間者攻撃の")}}攻撃者が簡単にアクセスすることはできません。（URL に `http:` のついた）安全でないサイトは、 `Secure` 属性を使用して Cookie を設定することができません。ただし、`Secure` によって Cookie 内の機密情報へのアクセスをすべて防げると思ってはいけません。例えば、クライアントのハードディスクへアクセスすることで（また、`HttpOnly` 属性が設定されていない場合は JavaScript から）読み取られる可能性があります。

- `HttpOnly` 属性を持つ Cookie は、 JavaScript の {{domxref("Document.cookie")}} API にはアクセスできません。サーバーに送信されるだけです。例えば、サーバー側のセッションを持続させる Cookie は JavaScript が利用する必要はないので、`HttpOnly` 属性をつけるべきです。この予防策は、クロスサイトスクリプティング（[XSS](/ja/docs/Web/Security/Types_of_attacks#クロスサイトスクリプティング_xss)）攻撃を緩和するのに役立ちます。

> [!NOTE]
> アプリケーションによっては、機密情報を直接 Cookie に格納するのではなく、サーバーが照合する不透明な識別子を使用したり、[JSON Web Tokens](https://jwt.io/) などの代替の認証/機密性メカニズムを調べたりしたほうがいいかもしれません。

### Cookie の送信先の定義

`Domain` および `Path` 属性は、Cookie の「スコープ」、つまり Cookie を送信する対象の URL を定義します。

- `Domain` 属性は、Cookie を受信することができるサーバーを指定します。指定された場合、指定されたサーバーとサブドメインで Cookie が利用できます。例えば、`mozilla.org` から `Domain=mozilla.org` を設定すると、`developer.mozilla.org` のようなサブドメインも含めて、そのドメインで Cookie が利用できるようになります。

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  `Set-Cookie` ヘッダーで `Domain` 属性が指定されていない場合、Cookie はそれを設定したサーバーでは利用できますが、そのサブドメインでは利用できません。そのため、`Domain` を指定することは、それを除外するよりも制限が少なくなります。
  サーバーが `Domain` 属性を設定できるのは自分自身で管理するドメイン、または親ドメインのみであり、サブドメインや他にもドメインには設定できないことに注意してください。
  例えば、ドメインが `foo.example.com` のサーバーは、この属性を `example.com` または `foo.example.com` に設定することはできますが、`bar.foo.example.com` や `elsewhere.com` には設定できません（ただし、`bar.foo.example.com` などのサブドメインには Cookie が送信されます）。
  詳細は[不正なドメイン](/ja/docs/Web/HTTP/Headers/Set-Cookie#不正なドメイン)を参照してください。

- `Path` 属性は、 `Cookie` ヘッダーを送信するためにリクエストされた URL の中に含む必要がある URL のパスを示します。

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  `%x2F` ("/") の文字はディレクトリー区切り文字として解釈され、サブディレクトリーにも同様に一致します。例えば、`Path=/docs` を設定すると、以下のリクエストパスに一致します。

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  ただし、これらのリクエストパスには一致しません。

  - `/`
  - `/docsets`
  - `/fr/docs`

#### `SameSite` 属性によるサードパーティ Cookie の制御

[`SameSite`](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 属性は、サーバーがサイト間リクエストとともに Cookie を送信するかどうか、すなわちサードパーティ Cookie を送信するかどうかを指定します。サイト間リクエストとは、{{Glossary("Site", "サイト")}}（登録されているドメイン）やスキーム（http または https）がユーザーが現在いるサイトと一致しないリクエストのことです。これには、他のサイト上のリンクがクリックされて自分のサイトに移動する際に送信されるリクエストや、埋め込みサードパーティコンテンツによって送信されるリクエストが含まれます。

`SameSite` は、情報の漏洩を防止し、ユーザーの[プライバシー](#プライバシーと追跡)を保護し、{{Glossary("CSRF", "クロスサイトリクエストフォージェリー")}}攻撃に対していくらかの防御となります。取ることができる値は `Strict`, `Lax`, `None` の 3 つです。

- `Strict` は、ブラウザーが Cookie の発行元サイトからのリクエストに対してのみ、レスポンスで Cookie を送信するようにします。これは、認証やショッピングカート情報の格納など、常に最初のナビゲーションの後に来る機能に関連する Cookie がある場合に使用すべきです。

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > 機密情報を使用する Cookie は、[有効期限](#削除_cookie_の持続時間の定義)も短く指定しましょう。

- `Lax` も同様ですが、ユーザーが Cookie の発行元サイトに移動（ユーザーが別のサイトから移動してくる場合でも）した際にも、ブラウザーが Cookie を送信します。これは、サイトの表示に影響を与える Cookie に役立ちます。例えば、ウェブサイトにアフィリエイトリンク付きの提携製品情報を持たせることができます。そのリンクで提携サイトに移動すると、アフィリエイトリンクを辿ったことを示す Cookie を設定し、報酬バナーを表示したり、製品購入時に割引を指定したりすることができます。

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` は、Cookie が元のサイトとサイト間のリクエストの両方で送信されることを指定します。これは、例えば広告技術や分析ツールのプロバイダーなど、他のサイトに埋め込まれたサードパーティのコンテンツから送信されたリクエストとともに Cookie を送信したい場合に便利です。`SameSite=None` が設定されている場合、`Secure` 属性も設定する必要があることに注意してください。`SameSite=None` では、安全なコンテキストが要求されます。

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

もし `SameSite` 属性が設定されていない場合、 Cookie は既定で `Lax` として扱われます。

#### Cookie の接頭辞

Cookie の仕組みの設計上、サーバーは、Cookie が安全なオリジンから設定されたことを確認することはできず、Cookie が元々どこで設定されたのかを見分けることさえできません。

サブドメイン上にある脆弱性のあるアプリケーションが `Domain` 属性を使用して Cookie を設定すると、ほかのすべてのサブドメインで Cookie にアクセスできるようにすることができます。この仕組みは「セッション固定攻撃」で悪用される可能性があります。主な対策方法は[セッション固定化](/ja/docs/Web/Security/Types_of_attacks#セッションの固定)を参照してください。

[多層防御](<https://ja.wikipedia.org/wiki/%E5%A4%9A%E5%B1%A4%E9%98%B2%E5%BE%A1_(%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3)>)として、Cookie の接頭辞を使用することで、Cookie に関する特定の事実を主張することが可能です。以下の 2 つの接頭辞が利用可能です。

- `__Host-`: Cookie 名にこの接頭辞がついている場合、 {{HTTPHeader("Set-Cookie")}} ヘッダーが受け入れられるのは `Secure` 属性で指定されており、安全なオリジンから送信されており、 `Domain` 属性を含んで*おらず*、 `Path` 属性が `/` に設定されている場合のみです。この場合、これらの Cookie は「ドメインにロックされている」と見なすことができます。
- `__Secure-`: Cookie 名にこの接頭辞がある場合、 {{HTTPHeader("Set-Cookie")}} ディレクティブが受け入れられるのは、 `Secure` であり、安全なオリジンから送信されている場合のみです。これは `__Host-` 接頭辞よりも弱いものです。

これらの接頭辞が付いていて、制約に適合していない Cookie は、送られてもブラウザーが拒否します。これにより、仮にサブドメインで接頭辞の付いた Cookie を作成した場合、サブドメインに限定されるか、完全に無視されるかします。アプリケーションサーバーは、ユーザーが認証されているか、あるいは CSRF トークンが正しいかどうかを判断するときに、特定の Cookie 名をチェックするだけなので、これはセッションの固定化に対する防御手段として効果的に機能します。

> [!NOTE]
> アプリケーションサーバー上では、ウェブアプリケーションは接頭辞を含む完全な Cookie 名をチェック*しなければなりません*。ユーザーエージェントは、リクエストの {{HTTPHeader("Cookie")}} ヘッダーを送信する前に Cookie から接頭辞を削除しません。

Cookie の接頭辞とブラウザー対応の現在の状態については、 [Set-Cookie リファレンス記事の接頭辞の節](/ja/docs/Web/HTTP/Headers/Set-Cookie# Cookie の接頭辞)を参照してください。

## プライバシーとトラッキング

先ほど、サードパーティ Cookie が送信されるタイミングを制御できる `SameSite` 属性についてお話しし、この属性がユーザーのプライバシーに役立つことを説明しました。プライバシーは、ウェブサイトを構築する上で非常に重要な考慮事項です。正しく行えば、ユーザーとの信頼関係を構築することができます。しかし、間違った方法で行うと、信頼関係を完全に損ない、他にもさまざまな問題を引き起こす可能性があります。

サードパーティ Cookie は、{{htmlelement("iframe")}} を使用してサイトに埋め込まれたサードパーティコンテンツによって設定することができます。 サードパーティ Cookie には、ユーザープロファイル情報の共有、広告表示回数のカウント、または関連の異なるドメインにわたる分析情報の集合など、正当な用途が数多くあります。

しかし、サードパーティ Cookie の使い方によっては、不快で押しつけがましいユーザー体験になることもあります。サードパーティのサーバーが、複数のサイトにアクセスする際に同じブラウザーから送信された Cookie に基づいて、ユーザーの閲覧履歴や習慣に関するプロファイルを作成することができます。例えば、あるサイトで製品情報を検索したところ、その後、どこにアクセスしても類似した製品の広告がウェブ上で表示される、というようなケースがこれに該当します。

ブラウザーのベンダーは、ユーザーがこのような動作を好まないことを知っており、その結果、サードパーティ Cookie を既定ではすべてブロックする、あるいは少なくともその方向で計画を進めています。サードパーティ Cookie （または単にトラッキング Cookie）は、その他のブラウザーの設定や拡張機能でブロックすることができます。

> [!NOTE]
> Cookie をブロックすると、サードパーティの部品（ソーシャルメディアウィジェットなど）が意図通りに機能しなくなる場合が発生します。ブラウザーがサードパーティ Cookie にさらに制限を課すため、開発者はサードパーティ Cookie への依存を縮小する方法を検討し始める必要があります。

サードパーティ Cookie のより詳しい情報、それに関連する課題、利用できる代替策については、[サードパーティ Cookie](/ja/docs/Web/Privacy/Third-party_cookies) の記事を参照してください。プライバシー全般に関するより詳しい情報は、[プライバシー](/ja/docs/Web/Privacy)のランディングページをご覧ください。

### Cookie に関する規制

Cookie の使用を対象とした法規制には、以下のようなものがあります。

- EU の 一般データ保護規則 (GDPR)
- EU の ePrivacy 指令
- カリフォルニア州消費者プライバシー法

これらの規制は、これらの管轄区域（EU とカリフォルニア州、特にカリフォルニア州の法律は総収入が 2,500 万ドルを超える事業体にのみ適用されるという注意事項がある）のユーザーがアクセスする*全世界*のウェブ上のあらゆるサイトに適用されるため、世界的な広がりを持っています。

これらの規制の要件には次のようなものがあります。

- サイトが Cookie を使用することをユーザーに通知すること。
- ユーザーが一部またはすべての Cookie をオプトアウトできるようにすること
- ユーザーが Cookie を受け取らなくても、サービスの大部分を利用できるようにすること。

地域によっては、他にも Cookie の使用を管理する規制があるかもしれません。これらの規制を理解し遵守することは、自分自身の責任となります。これらの規制を遵守するのに役立つ「Cookie 禁止」コードを提供している会社もあります。

> [!NOTE]
> 企業は、自社サイトで使用するCookieの種類を、透明性を高めるため、また規制を遵守するために開示すべきです。例えば、[Google が使用する Cookie の種類に関する通知](https://policies.google.com/technologies/cookies#types-of-cookies)や Mozilla の[ウェブサイト、コミュニケーション、Cookie のプライバシーに関する通知](https://www.mozilla.org/en-US/privacy/websites/#cookies)をご覧ください。

## 関連情報

- 関連する HTTP ヘッダー: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- 関連する JavaScript API: {{domxref("Document.cookie")}}, {{domxref("Navigator.cookieEnabled")}}, {{domxref("Cookie_Store_API", "クッキーストア API", "", "nocode")}}
- [サードパーティ Cookie](/ja/docs/Web/Privacy/Third-party_cookies)
- [Cookie specification: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, the GDPR, and the ePrivacy Directive](https://gdpr.eu/cookies/)
