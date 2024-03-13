---
title: HTTP Cookie の使用
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 98f4d0818bc8fbe863130b41703df069b0d816bd
---

{{HTTPSidebar}}

**HTTP Cookie** (ウェブ Cookie、ブラウザー Cookie) は、サーバーがユーザーのウェブブラウザーに送信する小さなデータであり、ブラウザーに保存され、その後のリクエストと共に同じサーバーへ返送されます。一般的には、 2 つのリクエストが同じブラウザーから送信されたものであるかを知るために使用されます。例えば、ユーザーのログイン状態を維持することができます。 Cookie は、[ステートレス](/ja/docs/Web/HTTP/Overview#http_はステートレスであるがセッションレスではない)な HTTP プロトコルのためにステートフルな情報を記憶します。

Cookie は主に、以下の 3 つの用途で使用されます。

- セッション管理
  - : ログイン、ショッピングカート、ゲームのスコア、またはその他のサーバーが覚えておくべきもの
- パーソナライズ
  - : ユーザー設定、テーマ、その他の設定
- トラッキング
  - : ユーザーの行動の記録および分析

Cookie は、クライアント側の汎用的な記憶領域として使用されたことがあります。これは他にクライアントへデータを保存する手段がなかった頃は合理的でしたが、現在では新しいストレージ API を使用することが推奨されています。 Cookie はすべてのリクエストで送信されるので、（特にモバイルデータ通信で）性能を悪化させる可能性があります。クライアントストレージ向けの新しい API として、[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) (`localStorage` および `sessionStorage`) と [IndexedDB](/ja/docs/Web/API/IndexedDB_API) があります。

> **メモ:** 保存された Cookie (およびウェブページが使用できる他のストレージ) を確認するには、開発ツールの[ストレージインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)を有効化して、ストレージのツリーで Cookie を選択してください。

## Cookie の作成

HTTP リクエストを受け取った後、サーバーはレスポンスで {{HTTPHeader("Set-Cookie")}} ヘッダーを送信することができます。通常 Cookie はブラウザーに保存され、また Cookie は同じサーバーに対して行われるリクエストと共に HTTP の {{HTTPHeader("Cookie")}} ヘッダーの中で送信されます。有効期限や期間を設定することができ、その後は Cookie が送信されなくなります。特定のドメインやパスへの追加の制約を設定することができ、Cookie をどこに送信するかを制限することができます。以下で言及されているヘッダー属性の詳細については、 {{HTTPHeader("Set-Cookie")}} のリファレンス記事を参照してください。

### `Set-Cookie` ヘッダーと `Cookie` ヘッダー

HTTP の {{HTTPHeader("Set-Cookie")}} レスポンスヘッダーは、サーバーがユーザーエージェントへ Cookie を送信するために使用します。単純な Cookie は次のように設定されます。

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

これは、サーバーからクライアントへ Cookie の組み合わせを保存するよう指示することを表します。

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[ページの内容]
```

また、そのサーバーへのその後のすべてのリクエストにおいて、ブラウザーは以前格納されたすべての Cookie を、 {{HTTPHeader("Cookie")}} ヘッダーを使用してサーバーへ送信します。

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

> **メモ:** 様々なサーバー側アプリケーションにおける `Set-Cookie` ヘッダーの使い方を紹介します。
>
> - [PHP](https://www.php.net/manual/ja/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

### Cookie の持続時間の定義

Cookie の持続時間は 2 通りの方法で定義することができます。

- _セッション_ Cookie は現在のセッションが終了すると削除されます。ブラウザーはいつ「現在のセッション」が終わったと見なすかを定義し、ブラウザーによっては再起動時に*セッションの復元*を使用することができます。そのため、結果的にセッション Cookie が無期限に持続することがあります。
- _持続的_ Cookie は、 `Expires` 属性で指定された時刻、または `Max-Age` で指定された期間が経過した後に削除されます。

例を示します。

```http
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
```

> **メモ:** `Expires` の日付を設定した場合、設定された日時はサーバーではなく、Cookie が設定されるクライアントの日時に関連します。

サイトがユーザーを認証する場合、ユーザーが認証するたびに、すでに存在するセッション Cookie も含めて、セッション Cookie を再生成して再送する必要があります。この手法は、第三者がユーザーのセッションを再利用する[セッション固定攻撃](/ja/docs/Web/Security/Types_of_attacks#セッションの固定)を防ぐのに役立ちます。

### Cookie へのアクセス制限

Cookie が安全に送信され、意図しない第三者やスクリプトからアクセスされないようにするには、 `Secure` 属性と `HttpOnly` 属性の 2 つの方法があります。

`Secure` 属性がついた Cookie は HTTPS プロトコル上の暗号化されたリクエストでのみサーバーに送信され、安全でない HTTP では決して送信されないため、{{Glossary("MitM", "中間者")}}攻撃者が簡単にアクセスすることはできません。(URL に `http:` を含む) 安全でないサイトは、 `Secure` 属性を使用して Cookie を設定することができません。ただし、`Secure` によって Cookie 内の機密情報へのアクセスをすべて防げると思ってはいけません。例えば、クライアントのハードディスクへアクセスすることで読み取られる可能性があります。

`HttpOnly` 属性を持つ Cookie は、 JavaScript の {{domxref("Document.cookie")}} API にはアクセスできません。サーバーに送信されるだけです。例えば、サーバー側のセッションを持続させる Cookie は JavaScript が利用する必要はないので、 `HttpOnly` 属性をつけるべきです。この予防策は、クロスサイトスクリプティング ([XSS](/ja/docs/Web/Security/Types_of_attacks#クロスサイトスクリプティング_xss)) 攻撃を緩和するのに役立ちます。

例を示します。

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

### Cookie の送信先の定義

`Domain` および `Path` 属性は、Cookie の*スコープ*、つまり Cookie を送信する対象の URL を定義します。

#### Domain 属性

`Domain` 属性は、Cookie を受信することができるホストを指定します。サーバーが `Domain` を指定しなかった場合、ブラウザーは既定でドメインを Cookie を設定したのと同じ{{Glossary("host", "ホスト")}}とし、_サブドメインは除外します_。 `Domain` が指定された場合、サブドメインは常に含まれます。したがって、 `Domain` を指定すると省略時よりも制限が緩和されます。ただし、サブドメイン間でユーザーに関する情報を共有する場合は有用になるでしょう。

例えば、`Domain=mozilla.org` を設定すると、`developer.mozilla.org` のようなサブドメインも含まれます。

#### Path 属性

`Path` 属性は、 `Cookie` ヘッダーを送信するためにリクエストされた URL の中に含む必要がある URL のパスを示します。 `%x2F` ("/") の文字はディレクトリー区切り文字として解釈され、サブディレクトリーにも同様に一致します。

例えば、`Path=/docs` を設定すると、以下のリクエストパスに一致します。

- `/docs`
- `/docs/`
- `/docs/Web/`
- `/docs/Web/HTTP`

ただし、これらのリクエストパスには一致しません。

- `/`
- `/docsets`
- `/fr/docs`

#### SameSite 属性

`SameSite` 属性により、サーバーがサイト間リクエスト (ここで{{Glossary("Site", "サイト")}}は登録可能なドメインによって定義されます) と一緒に Cookie を送るべきではないことを要求することができます。これは、クロスサイトリクエストフォージェリー攻撃 ({{Glossary("CSRF")}}) に対していくらかの防御となります。取ることができる値は `Strict`, `Lax`, `None` の 3 つです。

`Strict` では、ブラウザーは Cookie の元サイトからのリクエストに対してのみ Cookie を送ります。
`Lax` も同様ですが、ユーザーが Cookie の元サイトに移動したときに（たとえユーザーが異なる形のサイトから来たとしても）ブラウザーは Cookie を送信します。
例えば、外部サイトからリンクをたどった場合です。 `None` は Cookie を発生元サイトへリクエストとサイト間のリクエストの両方で送信されますが、*安全なコンテキスト*でのみ送信されます（つまり、 `SameSite=None`なら `Secure` 属性も設定する必要があります）。
もし `SameSite` 属性が設定されていない場合、 Cookie は `Lax` として扱われます。

次に例を示します。

```http
Set-Cookie: mykey=myvalue; SameSite=Strict
```

> **メモ:** `SameSite` に関する標準規格が最近変更されました（MDN で文書化している上記の動作は新しい動作です）。
> ブラウザーの特定の版がこの属性をどのように扱うかの情報については、 Cookie の[ブラウザー互換性](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite#ブラウザーの互換性)一覧表を参照してください。
>
> - `SameSite=Lax` は `SameSite` が指定されなかった場合の新しい既定値です。
>   以前は、 Cookie は既定ですべてのリクエストに送信されていました。
> - Cookie に `SameSite=None` が付いた場合は、 `Secure` 属性も指定することになりました（安全なコンテキストが必要になりました）。
> - 同じドメインの Cookie であっても、異なるスキーム (`http:` か `https:` か) を使用して送信された場合は同じサイトと見なされなくなりました。

#### Cookie の接頭辞

Cookie の仕組みの設計では、 Cookie が安全なオリジンに設定されているかどうか、 Cookie が当初は*どこに*設定されたのかをサーバーが確認することができないようになっています。

サブドメイン上にある脆弱性のあるアプリケーションが `Domain` 属性を使用して Cookie を設定すると、ほかのすべてのサブドメインで Cookie にアクセスできるようにすることができます。この仕組みは*セッション固定*攻撃で悪用される可能性があります。主な対策方法は[セッション固定化](/ja/docs/Web/Security/Types_of_attacks#セッションの固定)を参照してください。

しかし、[多層防御](<https://ja.wikipedia.org/wiki/%E5%A4%9A%E5%B1%A4%E9%98%B2%E5%BE%A1_(%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3)>)として、 Cookie に関する特定の事実を主張するために *Cookie の接頭辞*を使うことが可能です。以下の 2 つの接頭辞が利用可能です。

- `__Host-`
  - : Cookie 名にこの接頭辞がついている場合、 {{HTTPHeader("Set-Cookie")}} ヘッダーが受け入れられるのは `Secure` 属性で指定されており、安全なオリジンから送信されており、 `Domain` 属性を含んで*おらず*、 `Path` 属性が `/` に設定されている場合のみです。この場合、これらの Cookie は「ドメインにロックされている」と見なすことができます。
- `__Secure-`
  - : Cookie 名にこの接頭辞がある場合、 {{HTTPHeader("Set-Cookie")}} ディレクティブが受け入れられるのは、 `Secure` であり、安全なオリジンから送信されている場合のみです。これは `__Host-` 接頭辞よりも弱いものです。

これらの接頭辞が付いていて、制約に適合していない Cookie は、送られてもブラウザーが拒否します。これにより、仮にサブドメインで接頭辞の付いた Cookie を作成した場合、サブドメインに限定されるか、完全に無視されるかします。アプリケーションサーバーは、ユーザーが認証されているか、あるいは CSRF トークンが正しいかどうかを判断するときに、特定の Cookie 名をチェックするだけなので、これはセッションの固定化に対する防御手段として効果的に機能します。

> **メモ:** アプリケーションサーバ上では、ウェブアプリケーションは接頭辞を含む完全な Cookie 名をチェック*しなければなりません*。—ユーザーエージェントは、リクエストの {{HTTPHeader("Cookie")}} ヘッダーを送信する前に Cookie から接頭辞を削除*しません*。

Cookie の接頭辞とブラウザー対応の現在の状態については、 [Set-Cookie リファレンス記事の接頭辞の節](/ja/docs/Web/HTTP/Headers/Set-Cookie#クッキーの接頭辞)を参照してください。

#### JavaScript での Document.cookies を使用したアクセス

{{domxref("Document.cookie")}} プロパティを使用して新しい Cookie を作成することができますし、 `HttpOnly` フラグが設定されていない限り、既存の Cookie に JavaScript からアクセスすることもできます。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// "yummy_cookie=choco; tasty_cookie=strawberry" とログ出力
```

JavaScript で生成された Cookie は `HttpOnly` フラグを含むことができません。

後述する[セキュリティ](#セキュリティ)の節に記載したとおり、セキュリティの影響に注意してください。JavaScript で使用できる Cookie は、XSS によって盗まれる可能性があります。

## セキュリティ

> **メモ:** 情報を Cookie に保存するときは、すべての Cookie の値がエンドユーザーから見え、変更できることを理解しておいてください。アプリケーションによっては、サーバー側で検索される不透明な識別子を使用するか、 JSON ウェブトークンのような代替の認証/機密性メカニズムを調べたほうが良いかもしれません。

Cookie への攻撃を緩和する方法には次のようなものがあります。

- `HttpOnly` 属性を使用して、 JavaScript から Cookie の値にアクセスすることを防ぎます。
- 機密情報 (認証を示す場合など) のために使用された Cookie は、持続時間を短く、 `SameSite` 属性を `Strict` または `Lax` に設定してください。 (上記の [SameSite Cookie](#samesite_属性) を参照。) [SameSite に対応しているブラウザー](/ja/docs/Web/HTTP/Headers/Set-Cookie#ブラウザーの互換性)では、これは、認証 Cookie がオリジン間リクエストと一緒に送信されないようにする効果があるので、そのようなリクエストはそのアプリケーションサーバーに対して事実上認証されていないことになります。

## トラッキングとプライバシー

### サードパーティの Cookie

Cookie はドメインとスキーム（`http` や `https` など）に関連付けられ、 {{HTTPHeader("Set-Cookie")}} の `Domain` 属性が設定された場合はサブドメインにも関連付けられます。
Cookie のドメインとスキームが現在のページと一致している場合、その Cookie はこのページと同じサイトからのものと見なされ、_ファーストパーティ Cookie_ と呼ばれます。

ドメインとスキームが異なる場合、その Cookie は同じサイトのものとはみなされず、_サードパーティ Cookie_ と呼ばれます。
ウェブページをホスティングしているサーバーがファーストパーティ Cookie を設定する一方で、ページには他のドメインのサーバーに保存されている画像やその他のコンポーネント (例えば、広告バナー) が含まれている場合があり、サードパーティ Cookie を設定することがあります。
これらは主にウェブ上での広告やトラッキングに使用されます。
例えば [Google が使用している Cookie の種類](https://policies.google.com/technologies/types)を参照してください。

サードパーティのサーバーは、複数のサイトにアクセスした際に同じブラウザーから送信された Cookie に基づいて、ユーザーの閲覧履歴や習慣のプロファイルを構築することができます。 Firefox は既定で、トラッカーを含むことが知られているサードパーティの Cookie をブロックします。サードパーティの Cookie (またはトラッキング Cookie ) は、他のブラウザーの設定や拡張機能によってもブロックされる場合があります。 Cookie をブロックすると、一部のサードパーティ製コンポーネント (ソーシャルメディアウィジェットなど) が意図した通りに機能しなくなることがあります。

ユーザーのプライバシーを尊重し、サードパーティの追跡を最小限に抑えたい開発者にとって、有益な機能がいくつか使用されています。

- サーバーは Cookie の [SameSite 属性](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite)を設定することで、サードパーティーの Cookie を送るかどうか指定することができます（そしてそうすべきです）。
- [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Partitioned_cookies) は、開発者が、最上位のサイトごとに別個の Cookie ジャーを持つ、分割されたストレージへの Cookie のオプトインができるようにします。これは、サードパーティのトラッキングに Cookie を使用することを許可しないブラウザーで、サードパーティの Cookie の有効な非トラッキング用途が引き続き動作するようにするものです。

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

## ブラウザーに情報を格納する他の方法

ブラウザーにデータを保存する別のアプローチとして、 [Web Storage API](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) があります。 [window.sessionStorage](/ja/docs/Web/API/Window/sessionStorage) と [window.localStorage](/ja/docs/Web/API/Window/localStorage) プロパティはセッション Cookie と持続的 Cookie に対応していますが、ストレージの容量制限が Cookie より大きく、サーバーに送信されることはありません。より構造化された大量のデータは、 [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) またはその上に構築されたライブラリを使用して保存することができます。

「ゾンビ」 Cookie と呼ばれる、 Cookie が削除された後に再作成されるようにするための他の技術が作成されています。これらの技術は、ユーザーのプライバシーとユーザー制御の原則に違反し、データプライバシー規制に違反する可能性があり、これらの技術を使用しているウェブサイトが法的責任にさらされる可能性があります。

## 関連情報

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [SameSite Cookie](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [ストレージインスペクターを使った Cookie の調査](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Cookie specification: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [HTTP cookie on Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)
- [Cookies, the GDPR, and the ePrivacy Directive](https://gdpr.eu/cookies/)
