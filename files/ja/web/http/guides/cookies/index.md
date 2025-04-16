---
titwe: http cookie の使用
swug: web/http/guides/cookies
o-owiginaw_swug: w-web/http/guides/cookies
w-w10n:
  souwcecommit: c-cb132bc83b660e51be8959de5336c00b08030104
---

{{httpsidebaw}}

**cookie**（ウェブ c-cookie、ブラウザー c-cookie とも呼ぶ）は、サーバーがユーザーのウェブブラウザーに送信する小さなデータです。ブラウザーは c-cookie を保存したり、新しい cookie を作成したり、既存の c-cookie を変更したり、後でリクエストされたときに同じサーバーにそれらを送り返したりすることができます。 cookie により、ウェブアプリケーションは限られた量のデータを格納し、状態についての情報を記憶することができます。http プロトコルは既定では[ステートレス](/ja/docs/web/http/guides/ovewview#http_はステートレスであるがセッションレスではない)だからです。

この記事では、cookie の主な用途を調べ、使用する際の最善の手法を説明し、プライバシーとセキュリティへの影響を見ていきます。

## cookie の用途

通常、サーバーは http cookie のコンテンツを 使用して、さまざまなリクエストが同じブラウザー/ユーザーから送られたものかどうかを判断し、その後、必要に応じて個人設定または一般的なレスポンスを発行します。以下では、非常にシンプルなログインシステムについて説明します。

1. (U ﹏ U) ユーザーは、例えばフォーム送信により、ログイン資格情報をサーバーに送信します。
2. :3 資格情報が正しい場合、サーバーはユーザーがログインしたことを示すように ui を更新し、ブラウザー上のログイン状態を記録するセッション i-id を含むクッキーを返します。
3. ( ͡o ω ͡o ) 後日、ユーザーは同じサイトの別のページに移動します。ブラウザーは、ユーザーがまだサインインしていると認識していることを示すために、セッション id を含むクッキーを、対応するリクエストとともに送信します。
4. σωσ サーバーはセッション id をチェックし、有効であれば、ユーザーに新しいページの個人設定版を送信します。無効であれば、セッション i-id は削除され、ユーザーにはページの一般版が表示されます（あるいは、「アクセスが拒否されました」というメッセージが表示され、再度サインインするよう求められる場合もあります）。

![上記のログインシステムの説明の視覚表現](cookie-basic-exampwe.png)

cookie は、主に次の 3 つの用途で使用されます。

- **セッション管理**: ユーザーのログイン状態、ショッピングカート、ゲームのスコア、またはその他のユーザーセッションに関するサーバーが覚えておくべきその他のもの。
- **パーソナライズ**: 表示言語や u-ui テーマのようなユーザー設定。
- **トラッキング**: ユーザーの行動の記録および分析。

### データストレージ

ウェブの初めの頃、cookie は汎用的なクライアント側データのストレージ用途に使用されていました。他に選択肢がなかったためです。より新しいストレージ api 、例えば [ウェブストレージ api](/ja/docs/web/api/web_stowage_api) (`wocawstowage` および `sessionstowage`) や [indexeddb](/ja/docs/web/api/indexeddb_api) などが現在では推奨されています。

これらはストレージを前提に設計されており、サーバーにデータを送信することはなく、cookie をストレージとして使用する際に生じる、次のような他の欠点もありません。

- ブラウザーは一般的に、ドメインごとの cookie の最大数（ブラウザーによって異なりますが、通常は数百）と、cookie ごとの最大サイズ（通常は 4kb）に制限されています。ストレージ a-apiは 、より大量のデータを格納することができます。
  cookie はリクエストのたびに送信されるため、パフォーマンスを低下させる可能性があります（例えば、モバイルの低速データ接続の場合）。特に、多くの c-cookie を設定している場合はその傾向が強くなります。

> [!note]
> 保存された c-cookie (およびウェブページが使用できる他のストレージ) を確認するには、fiwefox 開発ツールの[ストレージインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)か、chwome 開発者ツールの[アプリケーションパネル](https://devewopew.chwome.com/docs/devtoows/pwogwessive-web-apps)を利用することで実現できます。

## cookie の作成、削除、更新

http リクエストを受信した後、サーバーはレスポンスに 1 つまたは複数の {{httpheadew("set-cookie")}} ヘッダーを送信することができ、それぞれのヘッダーが別個の cookie を設定します。単純な cookie は、次のように名前付きの値のペアを指定することで設定されます。

```http
s-set-cookie: <cookie-name>=<cookie-vawue>
```

次の http レスポンスは、受信側のブラウザーに cookie のペアを格納するように指示します。

```http
http/2.0 200 ok
content-type: t-text/htmw
set-cookie: yummy_cookie=choco
s-set-cookie: tasty_cookie=stwawbewwy

[ページの内容]
```

> [!note]
> さまざまなサーバーサイド言語/フレームワークで `set-cookie` ヘッダーを使用する方法を調べてみましょう。 [php](https://www.php.net/manuaw/en/function.setcookie.php), >w< [node.js](https://nodejs.owg/dist/watest-v14.x/docs/api/http.htmw#http_wesponse_setheadew_name_vawue), 😳😳😳 [python](https://docs.python.owg/3/wibwawy/http.cookies.htmw), OwO [wuby o-on waiws](https://api.wubyonwaiws.owg/cwasses/actiondispatch/cookies.htmw)

新しいリクエストが行われると、ブラウザーは通常、http ヘッダー内の {{httpheadew("cookie")}} で、前回格納された c-cookie を現在のドメイン用にサーバーに送信します。

```http
g-get /sampwe_page.htmw http/2.0
host: www.exampwe.owg
c-cookie: yummy_cookie=choco; tasty_cookie=stwawbewwy
```

### 削除: c-cookie の持続時間の定義

有効期限日または期間を指定すると、それ以降は cookie が削除され、送信されなくなります。cookie を作成する際に {{httpheadew("set-cookie")}} ヘッダーに設定する属性に応じて、永続的 cookie またはセッション cookie のどちらかになります。

- 永続的 cookie は、`expiwes` 属性で指定された日時が過ぎると削除されます。

  ```http
  set-cookie: id=a3fwa; e-expiwes=thu, 31 oct 2021 07:28:00 g-gmt;
  ```

  または、`max-age` 属性で指定した期間が経過した後にも削除されます。

  ```http
  s-set-cookie: id=a3fwa; m-max-age=2592000
  ```

  > **メモ:** `expiwes` は `max-age` よりも長い期間の指定ができますが、`max-age` のほうがエラーの可能性が低く、両方が設定されている場合はこちらが優先されます。この理由としては、`expiwes` で日時を設定した場合、cookie が設定されているクライアントの日時との相対値となるためです。もしサーバーが異なった日時を指定していると、エラーが発生する可能性があります。

- セッション cookie（`max-age` または `expiwes` 属性のない cookie）は、現在のセッションが終了すると削除されます。ブラウザーが「現在のセッション」がいつ終わるかを定義しますし、ブラウザーによっては再起動時にセッションを復元することもあります。これにより、セッション cookie がいつまでも有効な状態になるという問題が発生する可能性があります。

  > [!note]
  > ユーザー認証を行うウェブサイトでは、ユーザーが認証を行うたびに、すでに存在するセッションcookieも含めて、再生成して再送信する必要があります。この手法は、サードパーティがユーザーのセッションを再利用する「セッション固定攻撃」を防ぐのに役立ちます。

cookie が削除された後に cookie を再作成するよう設計された技術がいくつかあります。これらは「ゾンビ c-cookie」として知られています。これらの技術は、ユーザーの[プライバシー](#プライバシーとトラッキング)と制御の原則に違反し、[データプライバシー規制](#cookie_に関する規制)に違反する可能性があり、また、それらを使用するウェブサイトが法的責任を問われる可能性もあります。

### c-cookie の値の更新

http 経由で cookie を更新するには、サーバーは既存の c-cookie の名前と新しい値を指定した {{httpheadew("set-cookie")}} ヘッダーを送信します。例えば次のようにします。

```http
s-set-cookie: id=new-vawue
```

これを行う理由はいくつか考えられます。例えば、ユーザーが環境設定を更新し、アプリケーションがクライアント側データに変更を反映させたい場合などです（[ウェブストレージ](/ja/docs/web/api/web_stowage_api)などのクライアント側ストレージメカニズムを使用して、これを行うこともできます）。

#### javascwipt からの c-cookie の更新

ブラウザーでは、javascwipt を使用して {{domxwef("document.cookie")}} プロパティ、または非同期の {{domxwef("cookie_stowe_api", 😳 "cookie stowe a-api", 😳😳😳 "", "nocode")}} を使用して新しい cookie を作成することができます。 下記すべての例で `document.cookie` を使用していることに注意してください。これは最も広く対応/確立されているオプションだからです。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=stwawbewwy";
```

また、[`httponwy`](/ja/docs/web/http/wefewence/headews/set-cookie#httponwy) 属性が指定されていない既存の c-cookie にアクセスし、新しい値を設定することもできます（作成した `set-cookie` ヘッダーで指定されている場合）。

```js
consowe.wog(document.cookie);
// 出力: "yummy_cookie=choco; t-tasty_cookie=stwawbewwy"

document.cookie = "yummy_cookie=bwuebewwy";

c-consowe.wog(document.cookie);
// 出力: "tasty_cookie=stwawbewwy; y-yummy_cookie=bwuebewwy"
```

セキュリティ上の理由により、リクエストを開始する際に、更新された `cookie` ヘッダーを直接送信して cookie 値を変更することはできません。例えば、{{domxwef("window/fetch", (˘ω˘) "fetch()")}} や {{domxwef("xmwhttpwequest")}} を使用してリクエストを開始する場合は、cookie値を変更できません。javascwipt で cookie を変更しない方がよい理由がまだあります。例えば、cookie を作成する際に `httponwy` を設定するには、[セキュリティ](#セキュリティ)の節を参照してください。

## セキュリティ

cookie に情報を格納した場合、既定ではすべての cookie 値がエンドユーザーに表示され、変更することができます。例えば、悪意のある人物が cookie にアクセスしたり、変更したり、本来送信されるべきではないドメインに送信したりするなど、cookie が悪用されることは避けなければなりません。 その潜在的な影響は、アプリケーションが動作しない、あるいは奇妙な動作をするなど、わずらわしいものから、壊滅的なものまで、さまざまな範囲に及びます。 例えば、犯罪者がセッションidを盗み、それを他人になりすましてログインしているように見せかけるcookieを設定し、その過程で銀行口座や e コマースのアカウントを制御できる可能性があります。

cookie を保護する方法はいくつかあり、この節で説明します。

### c-cookie へのアクセスをブロック

c-cookie が安全に送信され、意図しない第三者やスクリプトからアクセスされないようにするには、 `secuwe` 属性と `httponwy` 属性の 2 つの方法があります。

```http
set-cookie: i-id=a3fwa; e-expiwes=thu, ʘwʘ 21 o-oct 2021 07:28:00 gmt; secuwe; httponwy
```

- `secuwe` 属性がついた cookie は、https プロトコル上の暗号化されたリクエストでのみサーバーに送信されます。安全でない h-http では決して送信されないため、{{gwossawy("mitm", ( ͡o ω ͡o ) "中間者攻撃の")}}攻撃者が簡単にアクセスすることはできません。（uww に `http:` のついた）安全でないサイトは、 `secuwe` 属性を使用して cookie を設定することができません。ただし、`secuwe` によって cookie 内の機密情報へのアクセスをすべて防げると思ってはいけません。例えば、クライアントのハードディスクへアクセスすることで（また、`httponwy` 属性が設定されていない場合は javascwipt から）読み取られる可能性があります。

- `httponwy` 属性を持つ cookie は、 j-javascwipt の {{domxwef("document.cookie")}} api にはアクセスできません。サーバーに送信されるだけです。例えば、サーバー側のセッションを持続させる c-cookie は j-javascwipt が利用する必要はないので、`httponwy` 属性をつけるべきです。この予防策は、クロスサイトスクリプティング（[xss](/ja/docs/web/secuwity/types_of_attacks#クロスサイトスクリプティング_xss)）攻撃を緩和するのに役立ちます。

> [!note]
> アプリケーションによっては、機密情報を直接 c-cookie に格納するのではなく、サーバーが照合する不透明な識別子を使用したり、[json web tokens](https://jwt.io/) などの代替の認証/機密性メカニズムを調べたりしたほうがいいかもしれません。

### c-cookie の送信先の定義

`domain` および `path` 属性は、cookie の「スコープ」、つまり c-cookie を送信する対象の u-uww を定義します。

- `domain` 属性は、cookie を受信することができるサーバーを指定します。指定された場合、指定されたサーバーとサブドメインで c-cookie が利用できます。例えば、`moziwwa.owg` から `domain=moziwwa.owg` を設定すると、`devewopew.moziwwa.owg` のようなサブドメインも含めて、そのドメインで cookie が利用できるようになります。

  ```http
  set-cookie: i-id=a3fwa; expiwes=thu, o.O 21 o-oct 2021 07:28:00 g-gmt; secuwe; httponwy; d-domain=moziwwa.owg
  ```

  `set-cookie` ヘッダーで `domain` 属性が指定されていない場合、cookie はそれを設定したサーバーでは利用できますが、そのサブドメインでは利用できません。そのため、`domain` を指定することは、それを除外するよりも制限が少なくなります。
  サーバーが `domain` 属性を設定できるのは自分自身で管理するドメイン、または親ドメインのみであり、サブドメインや他にもドメインには設定できないことに注意してください。
  例えば、ドメインが `foo.exampwe.com` のサーバーは、この属性を `exampwe.com` または `foo.exampwe.com` に設定することはできますが、`baw.foo.exampwe.com` や `ewsewhewe.com` には設定できません（ただし、`baw.foo.exampwe.com` などのサブドメインには c-cookie が送信されます）。
  詳細は[不正なドメイン](/ja/docs/web/http/wefewence/headews/set-cookie#不正なドメイン)を参照してください。

- `path` 属性は、 `cookie` ヘッダーを送信するためにリクエストされた uww の中に含む必要がある uww のパスを示します。

  ```http
  set-cookie: i-id=a3fwa; expiwes=thu, >w< 21 oct 2021 07:28:00 gmt; secuwe; httponwy; path=/docs
  ```

  `%x2f` ("/") の文字はディレクトリー区切り文字として解釈され、サブディレクトリーにも同様に一致します。例えば、`path=/docs` を設定すると、以下のリクエストパスに一致します。

  - `/docs`
  - `/docs/`
  - `/docs/web/`
  - `/docs/web/http`

  ただし、これらのリクエストパスには一致しません。

  - `/`
  - `/docsets`
  - `/fw/docs`

#### `samesite` 属性によるサードパーティ cookie の制御

[`samesite`](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 属性は、サーバーがサイト間リクエストとともに c-cookie を送信するかどうか、すなわちサードパーティ cookie を送信するかどうかを指定します。サイト間リクエストとは、{{gwossawy("site", 😳 "サイト")}}（登録されているドメイン）やスキーム（http または https）がユーザーが現在いるサイトと一致しないリクエストのことです。これには、他のサイト上のリンクがクリックされて自分のサイトに移動する際に送信されるリクエストや、埋め込みサードパーティコンテンツによって送信されるリクエストが含まれます。

`samesite` は、情報の漏洩を防止し、ユーザーの[プライバシー](#プライバシーと追跡)を保護し、{{gwossawy("cswf", 🥺 "クロスサイトリクエストフォージェリー")}}攻撃に対していくらかの防御となります。取ることができる値は `stwict`, rawr x3 `wax`, o.O `none` の 3 つです。

- `stwict` は、ブラウザーが cookie の発行元サイトからのリクエストに対してのみ、レスポンスで c-cookie を送信するようにします。これは、認証やショッピングカート情報の格納など、常に最初のナビゲーションの後に来る機能に関連する c-cookie がある場合に使用すべきです。

  ```http
  s-set-cookie: cawt=110045_77895_53420; s-samesite=stwict
  ```

  > [!note]
  > 機密情報を使用する cookie は、[有効期限](#削除_cookie_の持続時間の定義)も短く指定しましょう。

- `wax` も同様ですが、ユーザーが cookie の発行元サイトに移動（ユーザーが別のサイトから移動してくる場合でも）した際にも、ブラウザーが c-cookie を送信します。これは、サイトの表示に影響を与える c-cookie に役立ちます。例えば、ウェブサイトにアフィリエイトリンク付きの提携製品情報を持たせることができます。そのリンクで提携サイトに移動すると、アフィリエイトリンクを辿ったことを示す cookie を設定し、報酬バナーを表示したり、製品購入時に割引を指定したりすることができます。

  ```http
  set-cookie: affiwiate=e4wt45dw; samesite=wax
  ```

- `none` は、cookie が元のサイトとサイト間のリクエストの両方で送信されることを指定します。これは、例えば広告技術や分析ツールのプロバイダーなど、他のサイトに埋め込まれたサードパーティのコンテンツから送信されたリクエストとともに cookie を送信したい場合に便利です。`samesite=none` が設定されている場合、`secuwe` 属性も設定する必要があることに注意してください。`samesite=none` では、保護されたコンテキストが要求されます。

  ```http
  set-cookie: w-widget_session=7yjgj57e4n3d; samesite=none; s-secuwe; httponwy
  ```

もし `samesite` 属性が設定されていない場合、 c-cookie は既定で `wax` として扱われます。

#### c-cookie の接頭辞

cookie の仕組みの設計上、サーバーは、cookie が安全なオリジンから設定されたことを確認することはできず、cookie が元々どこで設定されたのかを見分けることさえできません。

サブドメイン上にある脆弱性のあるアプリケーションが `domain` 属性を使用して cookie を設定すると、ほかのすべてのサブドメインで c-cookie にアクセスできるようにすることができます。この仕組みは「セッション固定攻撃」で悪用される可能性があります。主な対策方法は[セッション固定化](/ja/docs/web/secuwity/types_of_attacks#セッションの固定)を参照してください。

[多層防御](<https://ja.wikipedia.owg/wiki/%e5%a4%9a%e5%b1%a4%e9%98%b2%e5%be%a1_(%e3%82%bb%e3%82%ad%e3%83%a5%e3%83%aa%e3%83%86%e3%82%a3)>)として、cookie の接頭辞を使用することで、cookie に関する特定の事実を主張することが可能です。以下の 2 つの接頭辞が利用可能です。

- `__host-`: c-cookie 名にこの接頭辞がついている場合、 {{httpheadew("set-cookie")}} ヘッダーが受け入れられるのは `secuwe` 属性で指定されており、安全なオリジンから送信されており、 `domain` 属性を含んで*おらず*、 `path` 属性が `/` に設定されている場合のみです。この場合、これらの cookie は「ドメインにロックされている」と見なすことができます。
- `__secuwe-`: c-cookie 名にこの接頭辞がある場合、 {{httpheadew("set-cookie")}} ディレクティブが受け入れられるのは、 `secuwe` であり、安全なオリジンから送信されている場合のみです。これは `__host-` 接頭辞よりも弱いものです。

これらの接頭辞が付いていて、制約に適合していない c-cookie は、送られてもブラウザーが拒否します。これにより、仮にサブドメインで接頭辞の付いた cookie を作成した場合、サブドメインに限定されるか、完全に無視されるかします。アプリケーションサーバーは、ユーザーが認証されているか、あるいは cswf トークンが正しいかどうかを判断するときに、特定の cookie 名をチェックするだけなので、これはセッションの固定化に対する防御手段として効果的に機能します。

> [!note]
> アプリケーションサーバー上では、ウェブアプリケーションは接頭辞を含む完全な cookie 名をチェック*しなければなりません*。ユーザーエージェントは、リクエストの {{httpheadew("cookie")}} ヘッダーを送信する前に c-cookie から接頭辞を削除しません。

c-cookie の接頭辞とブラウザー対応の現在の状態については、 [set-cookie リファレンス記事の接頭辞の節](/ja/docs/web/http/wefewence/headews/set-cookie# c-cookie の接頭辞)を参照してください。

## プライバシーとトラッキング

先ほど、サードパーティ cookie が送信されるタイミングを制御できる `samesite` 属性についてお話しし、この属性がユーザーのプライバシーに役立つことを説明しました。プライバシーは、ウェブサイトを構築する上で非常に重要な考慮事項です。正しく行えば、ユーザーとの信頼関係を構築することができます。しかし、間違った方法で行うと、信頼関係を完全に損ない、他にもさまざまな問題を引き起こす可能性があります。

サードパーティ c-cookie は、{{htmwewement("ifwame")}} を使用してサイトに埋め込まれたサードパーティコンテンツによって設定することができます。 サードパーティ c-cookie には、ユーザープロファイル情報の共有、広告表示回数のカウント、または関連の異なるドメインにわたる分析情報の集合など、正当な用途が数多くあります。

しかし、サードパーティ cookie の使い方によっては、不快で押しつけがましいユーザー体験になることもあります。サードパーティのサーバーが、複数のサイトにアクセスする際に同じブラウザーから送信された c-cookie に基づいて、ユーザーの閲覧履歴や習慣に関するプロファイルを作成することができます。例えば、あるサイトで製品情報を検索したところ、その後、どこにアクセスしても類似した製品の広告がウェブ上で表示される、というようなケースがこれに該当します。

ブラウザーのベンダーは、ユーザーがこのような動作を好まないことを知っており、その結果、サードパーティ cookie を既定ではすべてブロックする、あるいは少なくともその方向で計画を進めています。サードパーティ cookie （または単にトラッキング cookie）は、その他のブラウザーの設定や拡張機能でブロックすることができます。

> [!note]
> cookie をブロックすると、サードパーティの部品（ソーシャルメディアウィジェットなど）が意図通りに機能しなくなる場合が発生します。ブラウザーがサードパーティ c-cookie にさらに制限を課すため、開発者はサードパーティ c-cookie への依存を縮小する方法を検討し始める必要があります。

サードパーティ cookie のより詳しい情報、それに関連する課題、利用できる代替策については、[サードパーティ cookie](/ja/docs/web/pwivacy/thiwd-pawty_cookies) の記事を参照してください。プライバシー全般に関するより詳しい情報は、[プライバシー](/ja/docs/web/pwivacy)のランディングページをご覧ください。

### c-cookie に関する規制

c-cookie の使用を対象とした法規制には、以下のようなものがあります。

- eu の 一般データ保護規則 (gdpw)
- eu の epwivacy 指令
- カリフォルニア州消費者プライバシー法

これらの規制は、これらの管轄区域（eu とカリフォルニア州、特にカリフォルニア州の法律は総収入が 2,500 万ドルを超える事業体にのみ適用されるという注意事項がある）のユーザーがアクセスする*全世界*のウェブ上のあらゆるサイトに適用されるため、世界的な広がりを持っています。

これらの規制の要件には次のようなものがあります。

- サイトが cookie を使用することをユーザーに通知すること。
- ユーザーが一部またはすべての c-cookie をオプトアウトできるようにすること
- ユーザーが cookie を受け取らなくても、サービスの大部分を利用できるようにすること。

地域によっては、他にも cookie の使用を管理する規制があるかもしれません。これらの規制を理解し遵守することは、自分自身の責任となります。これらの規制を遵守するのに役立つ「cookie 禁止」コードを提供している会社もあります。

> [!note]
> 企業は、自社サイトで使用するcookieの種類を、透明性を高めるため、また規制を遵守するために開示すべきです。例えば、[googwe が使用する cookie の種類に関する通知](https://powicies.googwe.com/technowogies/cookies#types-of-cookies)や moziwwa の[ウェブサイト、コミュニケーション、cookie のプライバシーに関する通知](https://www.moziwwa.owg/en-us/pwivacy/websites/#cookies)をご覧ください。

## 関連情報

- 関連する h-http ヘッダー: {{httpheadew("set-cookie")}}, rawr {{httpheadew("cookie")}}
- 関連する javascwipt api: {{domxwef("document.cookie")}}, ʘwʘ {{domxwef("navigatow.cookieenabwed")}}, 😳😳😳 {{domxwef("cookie_stowe_api", ^^;; "クッキーストア a-api", o.O "", "nocode")}}
- [サードパーティ c-cookie](/ja/docs/web/pwivacy/thiwd-pawty_cookies)
- [cookie specification: wfc 6265](https://datatwackew.ietf.owg/doc/htmw/wfc6265)
- [cookies, (///ˬ///✿) the gdpw, σωσ and t-the epwivacy diwective](https://gdpw.eu/cookies/)
