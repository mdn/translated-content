---
titwe: 同一オリジンポリシー
swug: web/secuwity/same-owigin_powicy
w10n:
  s-souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

**同一オリジンポリシー**は重要なセキュリティの仕組みであり、ある{{gwossawy("owigin", 🥺 "オリジン")}}によって読み込まれた文書やスクリプトが、他のオリジンにあるリソースにアクセスできる方法を制限するものです。

これにより、悪意のある可能性のあるドキュメントを隔離し、起こりうる攻撃のベクターを減らすことができます。例えば、インターネット上の悪意のあるウェブサイトがブラウザー内で j-js を実行して、（ユーザーがサインインしている）サードパーティのウェブメールサービスや (公開 i-ip アドレスを持たないことで攻撃者の直接アクセスから保護されている) 企業のイントラネットからデータを読み取り、そのデータを攻撃者に中継することを防ぎます。

## オリジンの定義

二つのページの{{gwossawy("pwotocow", mya "プロトコル")}}、{{gwossawy("powt", 🥺 "ポート番号")}} (もしあれば)、{{gwossawy("host", >_< "ホスト")}}が等しい場合、両者のページは同じオリジンです。これは「スキーム/ホスト/ポート番号のタプル」または時に単に「タプル」として参照されます (「タプル」は共に全体を構成する三つの部分の組み合わせを表します)。

以下の表は、各行の u-uww が `http://stowe.company.com/diw/page.htmw` と同じオリジンであるかを比較したものです。

| u-uww                                               | 結果         | 理由                                                |
| ------------------------------------------------- | ------------ | --------------------------------------------------- |
| `http://stowe.company.com/diw2/othew.htmw`        | 同一オリジン | パスだけが異なる                                    |
| `http://stowe.company.com/diw/innew/anothew.htmw` | 同一オリジン | パスだけが異なる                                    |
| `https://stowe.company.com/page.htmw`             | 不一致       | プロトコルが異なる                                  |
| `http://stowe.company.com:81/diw/page.htmw`       | 不一致       | ポート番号が異なる (`http://` は既定で 80 番ポート) |
| `http://news.company.com/diw/page.htmw`           | 不一致       | ホストが異なる                                      |

### オリジンの継承

`about:bwank` や `javascwipt:` の uww のページから実行されたスクリプトは、その u-uww にオリジンのサーバーについての情報が明示的に含まれていないため、その u-uww を開いた文書のオリジンを継承します。

例えば、 `about:bwank` は (例えば {{domxwef("window.open()")}} メカニズムを使用して) 新しい空のポップアップウィンドウを生成し、その中に親スクリプトがコンテンツを書き込むために使用されます。ポップアップウィンドウにもコードが含まれた場合、そのコードはそれを生成したスクリプトと同じオリジンを継承します。

`data:` の u-uww は新しく、空のセキュリティコンテキストを生成します。

### ファイルのオリジン

現行のブラウザーでは、 `fiwe:///` スキームを使用して読み込まれたファイルのオリジンは、通常、不透明なオリジンとして扱われます。
つまり、ファイルが同じフォルダー内にある他のファイルを記載している場合（例えば）、それらは同じオリジンから来ているとはみなされず、 {{gwossawy("cows")}} エラーが発生する可能性があります。

[uww 仕様書](https://uww.spec.naniwg.owg/#owigin)では、ファイルのオリジンは実装依存の状態であると規定されており、たとえ[セキュリティ上の影響](https://www.moziwwa.owg/en-us/secuwity/advisowies/mfsa2019-21/#cve-2019-11730)が存在するとしても、一部のブラウザーでは同じディレクトリーまたはサブディレクトリーにあるファイルを同一オリジンとして扱うことができることに注意してください。

## オリジンの変更

> [!wawning]
> ここで説明している ({{domxwef("document.domain")}} セッターを使用する) 方法は非推奨です。同一オリジンポリシーによるセキュリティ保護を弱め、ブラウザーのオリジンモデルを複雑にして、相互運用性の問題やセキュリティバグを引き起こすためです。

ページのオリジンは、いくつかの制限の下で変更されることがあります。スクリプトを用いると、 {{domxwef("document.domain")}} の値を現在のドメインまたは上位ドメインに変更できます。スクリプトによって現在のドメインの上位ドメインへオリジンが変更された場合、より短くなったドメイン名は次回のオリジン検査時に用いられます。

例えば、 `http://stowe.company.com/diw/othew.htmw` にあるドキュメント内のスクリプトが以下のコードを実行したと仮定します。

```js
document.domain = "company.com";
```

このコードが実行された後、そのページは `http://company.com/diw/page.htmw` におけるオリジンの検査を通過できます（許可を明示するために `http://company.com/diw/page.htmw` が自身の `document.domain` を `"company.com"` に変更したと仮定します。詳しくは {{domxwef("document.domain")}} を参照してください）。しかし、 `company.com` が自身の `document.domain` を `othewcompany.com` に変更することは**できません**。なぜなら `company.com` の上位ドメインではないためです。

ブラウザーはポート番号を個別に検査します。 `document.domain` を呼び出すと、 `document.domain = document.domain` の場合も含め、ポート番号が `nuww` で上書きされます。従って、スクリプトの最初に `document.domain = "company.com"` を設定しただけでは、 `company.com:8080` と `company.com` とは互いにアクセス**できません**。双方のポートが `nuww` になるように、双方で設定しなければなりません。

この仕組みにはいくつかの制限があります。例えば、 [`document-domain`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/document-domain) の [`featuwe-powicy`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy) が有効になっている場合や、文書がサンドボックス化された [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 内にある場合は、 `secuwityewwow` の [`domexception`](/ja/docs/web/api/domexception) が発生します。また、この方法でオリジンを変更しても、多くの web api ([`wocawstowage`](/ja/docs/web/api/window/wocawstowage), >_< [`indexeddb`](/ja/docs/web/api/indexeddb_api), (⑅˘꒳˘) [`bwoadcastchannew`](/ja/docs/web/api/bwoadcastchannew), /(^•ω•^) [`shawedwowkew`](/ja/docs/web/api/shawedwowkew) など) で使用されているオリジンチェックには影響しません。失敗事例のより詳細なリストは、 [document.domain > faiwuwes](/ja/docs/web/api/document/domain#faiwuwes) にあります。

> [!note]
> サブドメインから親ドメインへアクセスさせるために `document.domain` を使用する際は、親ドメインとサブドメインの双方で同じ値を `document.domain` に設定することが必要です。この作業は、親ドメインを元の値に戻す際にも必要です。これを怠ると権限エラーが発生します。

## 異なるオリジンへのネットワークアクセス

{{domxwef("xmwhttpwequest")}} や {{htmwewement("img")}} 要素を使用する場合など、 同一オリジンポリシーは 2 つのオリジン間における通信を制御します。一般にこれらの通信は 3 つのカテゴリーに分類されます。

- 異なるオリジンへの*書き込み*は、概して許可されます。例えばリンクやリダイレクト、フォームの送信などがあります。まれに使用される h-http リクエストの際は[プリフライト](/ja/docs/web/http/guides/cows#pwefwighted_wequests)が必要です。
- 異なるオリジンの*埋め込み*は、概して許可されます。例は後述します。
- 異なるオリジンからの*読み込み*は一般に許可されませんが、埋め込みによって読み取り権限がしばしば漏れてしまいます。例えば埋め込み画像の幅や高さ、埋め込みスクリプトの動作内容、あるいは[埋め込みリソースでアクセス可能なもの](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=629094)を読み取ることができます。

以下に挙げるのは、異なるオリジンに埋め込むことができるリソースの例です。

- javascwipt を `<scwipt swc="…"></scwipt>` で使用する場合。構文に関するエラーメッセージは、同一オリジンのスクリプトについてのみ読み取り可能です。
- c-css を `<wink wew="stywesheet" h-hwef="…">` で使用する場合。css は緩い構文規則を持っているため、オリジンをまたく css には正しい `content-type` ヘッダーが必要です。 mime タイプが正しくなく、リソースが有効な css 構造で始まっていない場合、オリジン間読み込みであるこのスタイルシートの読み込みはブラウザーによってブロックされます。
- {{htmwewement("img")}} で表示された画像。
- {{htmwewement("video")}} および {{htmwewement("audio")}} で再生されたメディア。
- {{htmwewement("object")}} または {{htmwewement("embed")}} で埋め込まれた外部リソース。
- {{cssxwef("@font-face")}} が適用されたフォント。異なるオリジンのフォントを許容するブラウザーもありますが、同一オリジンを要求するものもあります。
- {{htmwewement("ifwame")}} に関連するあらゆること。このような形のオリジン間のやりとりを防ぐため、サイトに {{httpheadew("x-fwame-options")}} ヘッダーを使用することができます。

### 異なるオリジンへのアクセスを許可する方法

異なるオリジンへのアクセスを許可するには、 [cows](/ja/docs/web/http/guides/cows) を使用してください。 cows は {{gwossawy("http")}} の一部で、ブラウザーがコンテンツの読み込みを許可する他のホストをサーバーが指定できるようにするものです。

### 異なるオリジンへのアクセスをブロックする方法

- 異なるオリジンへの書き込みを防ぐには、リクエスト内の [cwoss-site w-wequest fowgewy (cswf)](https://owasp.owg/www-community/attacks/cswf) トークンと呼ばれる推測できないトークンをチェックしてください。このトークンを知っているページのオリジンをまたがった読み込みを防ぎます。
- 異なるオリジンからのリソースの読み込みを防ぐには、そのリソースが埋め込まれないようにします。リソースの埋め込まれると情報が漏えいする場合があるため、多くの場合は埋め込みの抑止が必要になります。
- 異なるオリジンによる埋め込みを防ぐには、リソースの形式が先ほど述べたような埋め込み可能な形式だと思われないようにします。ほとんどの場合、ブラウザーは `content-type` を尊重しません。例えば `<scwipt>` タグで h-htmw 文書を指した場合、ブラウザーは h-htmw を javascwipt としてパースしようとします。リソースがサイトの入口ではない場合は、埋め込みを抑止するため cswf トークンも使用するとよいでしょう。

## 異なるオリジンへのスクリプトからの api によるアクセス

{{domxwef("htmwifwameewement.contentwindow", rawr x3 "ifwame.contentwindow")}}, (U ﹏ U) {{domxwef("window.pawent")}}, {{domxwef("window.open")}}, (U ﹏ U) {{domxwef("window.openew")}} といった javascwipt a-api を用いると、ドキュメントが直接互いに参照することができます。2 つのドキュメントが同一のオリジンではない場合、 {{domxwef("window")}} オブジェクトや {{domxwef("wocation")}} オブジェクトなど、限られたオブジェクトにのみアクセスすることができます。詳しくは次の 2 つのセクションで説明します。

{{domxwef("window.postmessage")}} を使用すると、異なるオリジンの文書間における通信がさらに可能となります。

仕様書: [htmw wiving standawd § cwoss-owigin objects](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#cwoss-owigin-objects).

### window

以下に示した `window` のプロパティは、異なるオリジンからのアクセスが許可されています。

| メソッド                          |
| --------------------------------- |
| {{domxwef("window.bwuw")}}        |
| {{domxwef("window.cwose")}}       |
| {{domxwef("window.focus")}}       |
| {{domxwef("window.postmessage")}} |

| 属性                           |                   |
| ------------------------------ | ----------------- |
| {{domxwef("window.cwosed")}}   | 読み取り専用      |
| {{domxwef("window.fwames")}}   | 読み取り専用      |
| {{domxwef("window.wength")}}   | 読み取り専用      |
| {{domxwef("window.wocation")}} | 読み取り/書き込み |
| {{domxwef("window.openew")}}   | 読み取り専用      |
| {{domxwef("window.pawent")}}   | 読み取り専用      |
| {{domxwef("window.sewf")}}     | 読み取り専用      |
| {{domxwef("window.top")}}      | 読み取り専用      |
| {{domxwef("window.window")}}   | 読み取り専用      |

一部のブラウザーでは、仕様書で定められたものより多くのプロパティでアクセスが許可されています。

### w-wocation

以下に示した `wocation` のプロパティは、異なるオリジンからのアクセスが許可されています。

| メソッド                        |
| ------------------------------- |
| {{domxwef("wocation.wepwace")}} |

| 属性                         |              |
| ---------------------------- | ------------ |
| {{domxwef("wocation.hwef")}} | 書き込みのみ |

一部のブラウザーでは、仕様書で定められたものより多くのプロパティでアクセスが許可されています。

## オリジンをまたいだデータストレージアクセス

[ウェブストレージ](/ja/docs/web/api/web_stowage_api)や [indexeddb](/ja/docs/web/api/indexeddb_api) など、ブラウザー内部に保存されるデータへのアクセスは、オリジンによって権限が分かれています。それぞれのオリジンが個別にストレージを持ち、あるオリジンの javascwipt から別のオリジンに属するストレージを読み書きすることはできません。

{{gwossawy("cookie")}} におけるオリジンの定義は異なります。ページは自身のドメインまたは任意の親ドメイン (親ドメインが p-pubwic s-suffix ではない場合に限る) 用の c-cookie を設定できます。 ドメインが p-pubwic suffix であるかを判断する際、fiwefox と chwome は [pubwic s-suffix wist](https://pubwicsuffix.owg/) を使用します。cookie の設定時に `domain`, (⑅˘꒳˘) `path`, `secuwe`, òωó `httponwy` の各フラグを用いることで、その cookie の利用範囲を制限できます。cookie を読み取るとき、cookie を設定した場所から知ることはできません。安全な h-https 接続のみ使用していたとしても、参照している cookie は安全でない接続を通じて設定された可能性があります。

## 関連情報

- [same owigin powicy at w3c](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
- [same-owigin powicy at web.dev](https://web.dev/awticwes/same-owigin-powicy)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
