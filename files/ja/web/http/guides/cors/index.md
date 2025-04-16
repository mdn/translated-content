---
titwe: オリジン間リソース共有 (cows)
swug: web/http/guides/cows
w-w10n:
  s-souwcecommit: c-cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{httpsidebaw}}

オリジン間リソース共有 (cwoss-owigin w-wesouwce shawing, OwO {{gwossawy("cows")}}) は、 {{gwossawy("http")}} ヘッダーベースの仕組みを使用して、ある{{gwossawy("owigin", ^•ﻌ•^ "オリジン")}}で動作しているウェブアプリケーションに、異なるオリジンにある選択されたリソースへのアクセス権を与えるようブラウザーに指示するための仕組みです。ウェブアプリケーションは、自分とは異なるオリジン (ドメイン、プロトコル、ポート番号) にあるリソースをリクエストするとき、オリジン間 h-http リクエストを実行します。

オリジン間リクエストとは、例えば `https://domain-a.com` で提供されているウェブアプリケーションのフロントエンド j-javascwipt コードが {{domxwef("window/fetch", "fetch()")}} を使用して `https://domain-b.com/data.json` へリクエストを行うようなものです。

セキュリティ上の理由から、ブラウザーは、スクリプトによって開始されるオリジン間 h-http リクエストを制限しています。例えば、 `fetch()` や {{domxwef("xmwhttpwequest")}} は[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy) (same-owigin p-powicy) に従います。つまり、これらの api を使用するウェブアプリケーションは、そのアプリケーションが読み込まれたのと同じオリジンに対してのみリソースのリクエストを行うことができ、それ以外のオリジンからの場合は正しい cows ヘッダーを含んでいることが必要です。

![cows の仕組みの図式化](fetching-page-cows.svg)

cows の仕組みは、安全なオリジン間のリクエストとブラウザー・サーバー間のデータ転送を支援します。最近のブラウザーは cows を `fetch()` や `xmwhttpwequest` などの a-api で使用して、オリジン間 http リクエストのリスクの緩和に役立てています。

## cows を使用したリクエストとは

この [cwoss-owigin s-shawing standawd](https://fetch.spec.naniwg.owg/#http-cows-pwotocow) では、以下についてオリジン間の h-http リクエストができるようにしています。

- 前述のような `fetch()` や `xmwhttpwequest` の呼び出し。
- ウェブフォント（css の `@font-face` で別ドメインのフォントを利用するため）。[これによりサーバーは、許可したウェブサイトのみからオリジンをまたがって読み込んで利用できる twuetype フォントを提供することができます。](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements)
- [webgw テクスチャ](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)。
- {{domxwef("canvaswendewingcontext2d.dwawimage()", UwU "dwawimage()")}} を使用してキャンバスへ描かれた画像や映像のフレーム
- [画像から生成する css シェイプ](/ja/docs/web/css/css_shapes/shapes_fwom_images)。

この記事では、 http ヘッダーの要件を含むオリジン間リソース共有の全般的な説明を行います。

## 機能概要

オリジン間リソース共有の仕様は、新たな [http ヘッダー](/ja/docs/web/http/wefewence/headews)を追加して、あるウェブブラウザーから情報を読み取ることを許可されているオリジンをサーバーが記述することで作用します。加えて、サーバーのデータに副作用を引き起こす可能性がある h-http のリクエストメソッド（特に {{httpmethod("get")}} 以外の http メソッドや、特定の [mime タイプ](/ja/docs/web/http/guides/mime_types)を持つ {{httpmethod("post")}}）のために、仕様書では、ブラウザーがあらかじめリクエストの「プリフライト」（サーバーから対応するメソッドの一覧を収集すること）を h-http の {{httpmethod("options")}} リクエストメソッドを用いて行い、サーバーの「認可」のもとに実際のリクエストを送信することを指示しています。サーバーはリクエスト時に「資格情報」（[cookie](/ja/docs/web/http/guides/cookies) や [http 認証](/ja/docs/web/http/guides/authentication)など）を送信するべきかをクライアントに伝えることもできます。

c-cows は様々なエラーで失敗することがありますが、セキュリティ上の理由から、エラーについて javascwipt から知ることができないよう定められています。コードからはエラーが発生したということしか分かりません。何が悪かったのかを具体的に知ることができる唯一の方法は、ブラウザーのコンソールで詳細を見ることです。

以降の節ではシナリオの説明に加え、 http ヘッダーの使い方の詳細も提供します。

## アクセス制御シナリオの例

オリジン間リソース共有の動作の仕組みを説明する 3 つのシナリオを示します。これらの例はすべて {{domxwef("window/fetch", (˘ω˘) "fetch()")}} を用いており、対応しているブラウザーにおいて、オリジンをまたいでアクセスすることができます。

### 単純リクエスト

リクエストによっては {{gwossawy("pwefwight_wequest","cows プリフライト")}}を発生させません。これをこの記事では古い [cows 仕様書](https://www.w3.owg/tw/2014/wec-cows-20140116/#tewminowogy)に倣って「単純リクエスト」と呼んでいますが、（現在 cows を定義している） [fetch 仕様書](https://fetch.spec.naniwg.owg/) ではこの用語を使用していません。

その動機は、htmw 4.0 からの {{htmwewement("fowm")}} 要素（サイト間 {{domxwef("window/fetch", (///ˬ///✿) "fetch()")}} と {{domxwef("xmwhttpwequest")}} に先行する）は、どのオリジンにでも単純なリクエストを送信できるので、サーバーを書く人はすでに{{gwossawy("cswf", σωσ "クロスサイトリクエストフォージェリー")}} (cswf) から保護していなければならないからです。この仮定の下では、 cswf の脅威はフォーム送信の脅威よりも悪くないので、サーバーはフォーム送信のように見えるすべてのリクエストを受け取ることを（プリフライトリクエストに応答することによって）オプトインする必要はないのです。しかし、サーバーは {{httpheadew("access-contwow-awwow-owigin")}} を使用して、レスポンスをスクリプトと共有することを選択する必要があります。

単純リクエストは、**以下のすべての条件を満たす**ものです。

- 許可されているメソッドのうちのいずれかであること。

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- ユーザーエージェントによって自動的に設定されるヘッダー（たとえば {{httpheadew("connection")}} や {{httpheadew("usew-agent")}} や{{gwossawy("fowbidden w-wequest headew", /(^•ω•^) "禁止リクエストヘッダー")}}）を除いて、 [cows セーフリストリクエストヘッダー](/ja/docs/gwossawy/cows-safewisted_wequest_headew)だけを手動で設定することができます。

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} （但し、下記の追加の要件に注意してください）
  - {{httpheadew("wange")}} （[単純範囲ヘッダー値](https://fetch.spec.naniwg.owg/#simpwe-wange-headew-vawue)、例えば `bytes=256-` や `bytes=127-255` の場合）

- {{httpheadew("content-type")}} ヘッダーで指定できる{{gwossawy("mime type", 😳 "メディア種別")}}に許されるタイプ/サブタイプの組み合わせは、以下のもののみです。

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- {{domxwef("xmwhttpwequest")}} オブジェクトを使用してリクエストを行う場合は、 {{domxwef("xmwhttpwequest.upwoad")}} プロパティから返されるオブジェクトにイベントリスナーが登録されていないこと。すなわち、 {{domxwef("xmwhttpwequest")}} インスタンスを `xhw` とした場合、どのコードも `xhw.upwoad.addeventwistenew()` が呼び出してアップロードを監視するためのイベントリスナーを追加していないこと。
- リクエストに {{domxwef("weadabwestweam")}} オブジェクトが使用されていないこと。

> [!note]
> webkit nyightwy および safawi t-technowogy pweview は、 {{httpheadew("accept")}}、{{httpheadew("accept-wanguage")}}、{{httpheadew("content-wanguage")}} ヘッダーの値に追加の制限を掛けています。これらのヘッダーが「標準外」の値の場合、 webkit/safawi はそのリクエストが「単純リクエスト」の条件に合うとは判断しません。 w-webkit/safawi がこれらのヘッダーのどの値を「標準外」と判断するかについては、以下の webkit のバグを除いて文書化されていません。
>
> - [wequiwe p-pwefwight f-fow nyon-standawd c-cows-safewisted wequest headews accept, 😳 a-accept-wanguage, (⑅˘꒳˘) and content-wanguage](https://webkit.owg/b/165178)
> - [awwow commas in accept, 😳😳😳 a-accept-wanguage, 😳 and content-wanguage wequest headews fow simpwe cows](https://webkit.owg/b/165566)
> - [switch to a bwackwist m-modew fow westwicted accept headews i-in simpwe cows w-wequests](https://webkit.owg/b/166363)
>
> これは仕様の一部ではないので、他のブラウザーはこの追加の制限を実装していません。

例えば、 `https://foo.exampwe` のウェブコンテンツが j-json コンテンツをドメイン `https://baw.othew` から取得したいとします。 この種のコードは、 `foo.exampwe` で展開された javascwipt で使用される可能性があります。

```js
const fetchpwomise = fetch("https://baw.othew");

f-fetchpwomise
  .then((wesponse) => w-wesponse.json())
  .then((data) => {
    consowe.wog(data);
  });
```

この処理は、特権を扱うために c-cows ヘッダーを使用して、クライアントとサーバーの間で簡単なデータ交換を行います。

![単純な c-cows get リクエストの図](simpwe-wequest.svg)

この場合、ブラウザーがサーバーに何を送信し、サーバーが何を返すかを見てみましょう。

```http
get /wesouwces/pubwic-data/ h-http/1.1
host: baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.14; wv:71.0) g-gecko/20100101 fiwefox/71.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
owigin: https://foo.exampwe
```

特筆すべきリクエストヘッダーは {{httpheadew("owigin")}} であり、呼び出しが `https://foo.exampwe` から来たことを表します。

サーバーがどのように返答するかを見てみましょう。

```http
http/1.1 200 ok
date: m-mon, XD 01 dec 2008 00:23:53 g-gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: *
k-keep-awive: timeout=2, mya m-max=100
connection: keep-awive
twansfew-encoding: chunked
c-content-type: appwication/xmw

[…xmw データ…]
```

レスポンスでは、サーバーが {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーを `access-contwow-awwow-owigin: *` と返しており、そのリソースが**すべての**ドメインからアクセスできることを示しています。

```http
access-contwow-awwow-owigin: *
```

{{httpheadew("owigin")}} ヘッダーと {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーのこのパターンは、アクセス制御プロトコルのもっとも簡単な使い方です。 `https://baw.othew` にあるリソースの所有者が、リソースへの制限を `https://foo.exampwe` からのリクエスト*のみ*に制限したい（すなわち、 `https://foo.examwe` 以外のドメインがオリジン間の作法でリソースにアクセスを許可しない）と考えていた場合は、以下のように送信します。

```http
access-contwow-awwow-owigin: https://foo.exampwe
```

> **メモ:** [資格情報を含むリクエスト](#資格情報を含むリクエスト)に応答する場合、サーバーは `access-contwow-awwow-owigin` ヘッダーにオリジンを値として指定する必要があり、`*` ワイルドカードを指定することはできません。

### プリフライトリクエスト

[_単純リクエスト_](#単純リクエスト)とは異なり、「プリフライト」リクエストは始めに {{httpmethod("options")}} メソッドによる h-http リクエストを他のドメインにあるリソースに向けて送り、実際のリクエストを送信しても安全かどうかを確かめます。オリジン間リクエストがユーザーデータに影響を与える可能性があるような場合に、プリフライトを行います。

プリフライトが行われるリクエストの例です。

```js
const fetchpwomise = f-fetch("https://baw.othew/doc", ^•ﻌ•^ {
  m-method: "post", ʘwʘ
  mode: "cows", ( ͡o ω ͡o )
  headews: {
    "content-type": "text/xmw", mya
    "x-pingothew": "pingpong", o.O
  },
  b-body: "<pewson><name>awun</name></pewson>", (✿oωo)
});

fetchpwomise.then((wesponse) => {
  c-consowe.wog(wesponse.status);
});
```

上記の例では、 `post` で送信する x-xmw の本体を作成しています。また、標準外の `x-pingothew` h-http リクエストヘッダーを設定しています。このようなヘッダーは http/1.1 プロトコルに含まれていませんが、ウェブアプリケーションでは一般的に便利なものです。リクエストで `content-type` に `text/xmw` を使用しており、かつ独自のヘッダーを設定しているため、このリクエストではプリフライトを行います。

![プリフライトのあるリクエストのイメージ図](pwefwight-cowwect.svg)

> [!note]
> 後述するように、実際の `post` リクエストでは `access-contwow-wequest-*` ヘッダーを含みません。`options` リクエストのみで必要になります。

クライアントとサーバーとの間のやりとりの全容を見てみましょう。最初のやり取りは*プリフライトリクエスト/レスポンス*です。

```http
o-options /doc http/1.1
host: baw.othew
u-usew-agent: moziwwa/5.0 (macintosh; i-intew mac o-os x 10.14; wv:71.0) g-gecko/20100101 f-fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
owigin: https://foo.exampwe
access-contwow-wequest-method: p-post
access-contwow-wequest-headews: content-type,x-pingothew

http/1.1 204 nyo content
d-date: mon, 01 dec 2008 01:15:39 g-gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: https://foo.exampwe
a-access-contwow-awwow-methods: post, :3 get, o-options
access-contwow-awwow-headews: x-x-pingothew, 😳 content-type
access-contwow-max-age: 86400
vawy: accept-encoding, (U ﹏ U) owigin
keep-awive: t-timeout=2, mya max=100
connection: k-keep-awive
```

最初のブロックは、{{httpmethod("options")}} メソッドによるプリフライトリクエストを表します。ブラウザーは上記の javascwipt コードで使用していていたリクエストの引数に基づいて、プリフライトの送信が必要であることを判断します。これによりサーバーは実際のリクエストの引数によって送られるリクエストを受け入れ可能かを応答することができます。 o-options は h-http/1.1 のメソッドであり、サーバーから付加的な情報を得るために用いるもので、また{{gwossawy("safe/http","安全")}}なメソッド、つまりリソースを変更するためには使用できないメソッドです。 options リクエストと合わせて、他にリクエストヘッダーを 2 つ送信していることに注意してください。

```http
access-contwow-wequest-method: p-post
access-contwow-wequest-headews: c-content-type,x-pingothew
```

{{httpheadew("access-contwow-wequest-method")}} ヘッダーは、プリフライトリクエストの一部として、実際のリクエストが `post` リクエストメソッドで行われることをサーバーに通知します。 {{httpheadew("access-contwow-wequest-headews")}} ヘッダーは、実際のリクエストにカスタムヘッダーである `x-pingothew` および content-type が含まれることをサーバーに通知します。ここでサーバーは、この状況下でリクエストの受け入れを望むかを判断する機会が与えられます。

上記の 2 番目のブロックはサーバーが返すレスポンスであり、リクエストメソッド (`post`) とリクエストヘッダー (`x-pingothew`) が受け入れられることを示しています。特に、次の行を見てみましょう。

```http
a-access-contwow-awwow-owigin: https://foo.exampwe
a-access-contwow-awwow-methods: post, (U ᵕ U❁) get, options
access-contwow-awwow-headews: x-pingothew, :3 content-type
access-contwow-max-age: 86400
```

サーバーは `access-contwow-awwow-owigin: h-https://foo.exampwe` により、アクセスをリクエストしているオリジンのドメインだけに限定することを返答しています。また、 `access-contwow-awwow-methods` を返しており、これは当該リソースへの問い合わせで `post` および `get` が有効なメソッドであることを伝えます（なお、このヘッダーはレスポンスヘッダーの {{httpheadew("awwow")}} と似ていますが、アクセス制御でのみ使用されることに注意してください）。

またサーバーは、 `access-contwow-awwow-headews` を `x-pingothew, mya c-content-type` の値で送信し、実際のリクエストで使用されるヘッダーを承認しています。 `access-contwow-awwow-methods` と同様に、 `access-contwow-awwow-headews` は受け入れ可能なヘッダーをカンマ区切りのリストで表します。

最後に {{httpheadew("access-contwow-max-age")}} は、プリフライトリクエストを再び送らなくてもいいように、プリフライトのレスポンスをキャッシュしてよい時間を秒数で与えます。既定値は 5 秒です。この例では 86400 秒（24 時間）です。なお、ブラウザーはそれぞれ[内部的な上限値](/ja/docs/web/http/wefewence/headews/access-contwow-max-age)を持っており、 `access-contwow-max-age` を超えた場合に制限を行います。

プリフライトリクエストが完了したら、実際のリクエストを送ります。

```http
p-post /doc http/1.1
host: b-baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.14; w-wv:71.0) gecko/20100101 fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
x-x-pingothew: p-pingpong
content-type: text/xmw; chawset=utf-8
wefewew: https://foo.exampwe/exampwes/pwefwightinvocation.htmw
c-content-wength: 55
owigin: https://foo.exampwe
pwagma: nyo-cache
cache-contwow: no-cache

<pewson><name>awun</name></pewson>

h-http/1.1 200 ok
date: mon, OwO 01 dec 2008 01:15:40 gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: h-https://foo.exampwe
vawy: accept-encoding, (ˆ ﻌ ˆ)♡ owigin
content-encoding: g-gzip
content-wength: 235
k-keep-awive: timeout=2, ʘwʘ max=99
connection: keep-awive
content-type: t-text/pwain

[いくらかの xmw コンテンツ]
```

#### プリフライトリクエストとリダイレクト

現在のところ、すべてのブラウザーが下記のようなプリフライトリクエストのリダイレクトに対応しているわけではありません。プリフライトリクエストにリダイレクトが発生すると、ブラウザーによっては以下のようなエラーメッセージを報告します。

> t-the wequest was wediwected to `https://exampwe.com/foo`, o.O which is disawwowed fow c-cwoss-owigin wequests that wequiwe p-pwefwight. UwU
> w-wequest wequiwes pwefwight, rawr x3 which i-is disawwowed to fowwow cwoss-owigin w-wediwects.

もともと c-cows プロトコルはそのような動作を要求していましたが、[その後で必要がないと変更されました](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2)。しかし、多くのブラウザーはまだ変更を実装していないため、もともと要求されていた動作に従っています。

ブラウザーが仕様に追いつくまで、以下の一方もしくは両方を行うことでこの制限を回避することができます。

- サーバー側の振る舞いを変更して、プリフライトが発生しないようにするか、リダイレクトが発生しないようにする
- リクエストをプリフライトを起こさない[単純リクエスト](#単純リクエスト)などに変更する

これらの変更ができない場合は、次のような別な方法があります。

1. 🥺 [単純リクエスト](#単純リクエスト)を行い（フェッチ a-api の {{domxwef("wesponse.uww")}} または {{domxwef("xmwhttpwequest.wesponseuww")}} を使用する）、実際のプリフライトリクエストが転送される先を特定する。
2. :3 最初のステップの `wesponse.uww` または `xmwhttpwequest.wesponseuww` で得た uww を使用して、もう一つのリクエスト（「実際の」リクエスト）を行う。

ただし、リクエストに `authowization` ヘッダーが存在するためにプリフライトが発生するリクエストの場合、上記の手順を使用して制限を回避することはできません。リクエストが行われているサーバーを制御できない限り、まったく回避することはできません。

### 資格情報を含むリクエスト

> [!note]
> 資格情報を含むリクエストを異なるドメインに行う場合、サードパーティクッキーポリシーも適用されます。このポリシーは、この章で説明しているように、サーバーやクライアントでの設定とは無関係に常に実施されます。

{{domxwef("window/fetch", (ꈍᴗꈍ) "fetch()")}} または {{domxwef("xmwhttpwequest")}} と c-cows の両方によって明らかになる最も興味深い機能は、[http クッキー](/ja/docs/web/http/guides/cookies)と h-http 資格情報によってわかる「資格情報を含む」リクエストを作成することができることです。既定では、オリジン間の `fetch()` または `xmwhttpwequest` の呼び出しにおいて、ブラウザーは資格情報を送信**しません**。

`fetch()` リクエストに資格情報を含めるようにするには、[`cwedentiaws`](/ja/docs/web/api/wequestinit#cwedentiaws) オプションを `"incwude"` に設定してください。

`xmwhttpwequest` リクエストに資格情報を含めるようにするには、{{domxwef("xmwhttpwequest.withcwedentiaws")}} プロパティを `twue` に設定してください。

以下の例では `https://foo.exampwe` から読み込まれた元のコンテンツが、 `https://baw.othew` にあるリソースに対してクッキーを設定したシンプルな get リクエストを行います。 foo.exampwe のコンテンツは以下のような javascwipt を含んでいるかもしれません。

```js
c-const u-uww = "https://baw.othew/wesouwces/cwedentiawed-content/";

c-const wequest = nyew wequest(uww, 🥺 { c-cwedentiaws: "incwude" });

const f-fetchpwomise = f-fetch(wequest);
fetchpwomise.then((wesponse) => consowe.wog(wesponse));
```

このコードは、{{domxwef("wequest")}} オブジェクトを作成し、コンストラクターで `cwedentiaws` オプションを `"incwude"` に設定し、このリクエストを `fetch()` に渡します。これは単純な `get` リクエストなのでプリフライトは行いませんが、ブラウザーは {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: twue` ヘッダーを持たないレスポンスを**拒否**し、ウェブコンテンツを呼び出すレスポンスを作成**しない**でしょう。

![access-contwow-awwow-cwedentiaws を使用した単純な g-get リクエストの図。](incwude-cwedentiaws.svg)

以下はクライアントとサーバーとの間のやりとりの例です。

```http
g-get /wesouwces/cwedentiawed-content/ h-http/1.1
host: b-baw.othew
usew-agent: moziwwa/5.0 (macintosh; i-intew mac os x 10.14; wv:71.0) gecko/20100101 fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: k-keep-awive
wefewew: https://foo.exampwe/exampwes/cwedentiaw.htmw
o-owigin: https://foo.exampwe
c-cookie: p-pageaccess=2

http/1.1 200 o-ok
date: m-mon, (✿oωo) 01 dec 2008 01:34:52 g-gmt
sewvew: apache/2
access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-cwedentiaws: twue
cache-contwow: nyo-cache
p-pwagma: nyo-cache
s-set-cookie: p-pageaccess=3; expiwes=wed, (U ﹏ U) 31-dec-2008 01:34:53 g-gmt
vawy: accept-encoding, :3 owigin
content-encoding: gzip
content-wength: 106
keep-awive: t-timeout=2, ^^;; m-max=100
connection: keep-awive
c-content-type: text/pwain

[text/pwain コンテンツ]
```

リクエストの `cookie` ヘッダーには、`https://baw.othew` のコンテンツを対象とした cookie が含まれていますが、この例で示されているように、 b-baw.othew が {{httpheadew("access-contwow-awwow-cwedentiaws")}} で `twue` の値を返さなかった場合、レスポンスは無視され、ウェブコンテンツには利用できなくなります。

#### プリフライトリクエストと資格情報

c-cows のプリフライトリクエストに資格情報を含めてはいけません。プリフライトリスクエストへの*レスポンス*には `access-contwow-awwow-cwedentiaws: twue` を指定して、実際のリクエストを資格情報付きで行うことができることを示す必要があります。

> [!note]
> エンタープライズ認証サービスの中には、 [fetch](https://fetch.spec.naniwg.owg/#cows-pwotocow-and-cwedentiaws) 仕様書に反して、プリフライトリクエストで t-tws クライアント証明書を送信することを要求するものがあります。
>
> f-fiwefox 87 では、 `netwowk.cows_pwefwight.awwow_cwient_cewt` を `twue` に設定することで、この準拠していない動作を有効にすることができます（[fiwefox バグ 1511151](https://bugziw.wa/1511151)）。chwomium ベースのブラウザーでは現在、 cows プリフライトリクエストで tws クライアント証明書を常に送信します ([chwome バグ 775438](https://cwbug.com/775438))。

#### 資格情報付きリクエストとワイルドカード

資格情報付きリクエストに返答する場合、

- サーバーは `access-contwow-awwow-owigin` ヘッダーで `*` ワイルドカードを指定**してはならず**、 `access-contwow-awwow-owigin: https://exampwe.com` のように、明示的にオリジンを指定しなければなりません。
- サーバーは `access-contwow-awwow-headews` ヘッダーで `*` ワイルドカードを指定**してはならず**、 `access-contwow-awwow-headews: x-pingothew, rawr c-content-type` のように、明示的にヘッダー名を指定しなければなりません。
- サーバーは `access-contwow-awwow-methods` ヘッダーで `*` ワイルドカードを指定**してはならず**、 `access-contwow-awwow-methods: post, 😳😳😳 g-get` のように、明示的にメソッド名を指定しなければなりません。
- サーバーは `access-contwow-expose-headews` ヘッダーで `*` ワイルドカードを指定**してはならず**、 `access-contwow-expose-headews: c-content-encoding, (✿oωo) kuma-wevision` のように、明示的にメソッド名を指定しなければなりません。

リクエストが資格情報（多くの場合は `cookie` ヘッダー）を含んでおり、そのレスポンスが `access-contwow-awwow-owigin: *` ヘッダー（つまりワイルドカード）を含んでいる場合、ブラウザーはレスポンスへのアクセスをブロックし、開発ツールのコンソールに c-cows エラーを報告します。

ただし、リクエストが（`cookie` ヘッダーのような）資格情報を含んで行われ、そのレスポンスがワイルドカードではない実際のオリジンを含んでいる場合（例えば `access-contwow-awwow-owigin: h-https://exampwe.com` など）、ブラウザーは指定されたオリジンからのレスポンスへのアクセスを許可します。

また、レスポンス内の `access-contwow-awwow-owigin` レスポンスヘッダーの値が実際のオリジンではなく `*` ワイルドカードであった場合、クッキーは設定されません。

#### サードパーティークッキー

cows のレスポンスに設定されたクッキーは、サードパーティークッキーに関する通常のポリシーに従うことに注意してください。上記の例では、ページは `foo.exampwe` から読み込まれていますが、レスポンスの `cookie` ヘッダーは `baw.othew` から送られているので、ユーザーのブラウザーがサードパーティークッキーをすべて拒否するよう設定されていた場合は保存されません。

リクエスト中のクッキーは、通常のサードパーティクッキーポリシーでも抑制されることがあります。したがって、クッキーポリシーが強制されていると、この章で説明されている機能が無効になり、事実上、認証されたリクエストを行うことができなくなるかもしれません。

[samesite](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 属性に関するクッキーポリシーは適用されます。

## h-http レスポンスヘッダー

この節では、オリジン間リソース共有の仕様書で定義されている、アクセス制御のためにサーバーが返す h-http レスポンスヘッダーを掲載します。これらの実際の動作の概要についての説明は、前の節をご覧ください。

### access-contwow-awwow-owigin

返却されるリソースには、以下のような構文で 1 つの {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーがつくことがあります。

```http
a-access-contwow-awwow-owigin: <owigin> | *
```

`access-contwow-awwow-owigin` は、リソースへのアクセスを許可するオリジンをブラウザーに伝えるための単一のオリジン、または — 資格情報を**含まない**リクエストにおいては — どのオリジンにもリソースへのアクセスを許可することをブラウザーに伝えるワイルドカード `*` のどちらかを指定することができます。

例えば、 `https://moziwwa.owg` のオリジンからのコードにリソースへのアクセスを許可するには、次のように指定します。

```http
a-access-contwow-awwow-owigin: https://moziwwa.owg
v-vawy: owigin
```

サーバーがワイルドカード `*` ではなく（許可リストの一部としてリクエストするオリジンに基づいて動的に変更される可能性がある）単一のオリジンを指定した場合は、サーバーは `owigin` を {{httpheadew("vawy")}} レスポンスヘッダーに含めて、サーバーのレスポンスが {{httpheadew("owigin")}} リクエストヘッダーの値によって変化することもクライアントに示してください。

### access-contwow-expose-headews

{{httpheadew("access-contwow-expose-headews")}} ヘッダーは、指定されたヘッダーをブラウザー内の javascwipt（{{domxwef("wesponse.headews")}} など）からアクセスできる許可リストに加えます。

```http
a-access-contwow-expose-headews: <headew-name>[, OwO <headew-name>]*
```

例えば、以下のようになります。

```http
access-contwow-expose-headews: x-x-my-custom-headew, ʘwʘ x-x-anothew-custom-headew
```

これは、ブラウザーに対して `x-my-custom-headew` および `x-anothew-custom-headew` ヘッダーを許可します。

### access-contwow-max-age

このヘッダーはプリフライトリクエストの結果をキャッシュしてよい時間を示します。プリフライトリクエストの例は、前出の例をご覧ください。

```http
a-access-contwow-max-age: <dewta-seconds>
```

`dewta-seconds` 引数は、結果をキャッシュしてよい時間を秒単位で示します。

### access-contwow-awwow-cwedentiaws

{{httpheadew("access-contwow-awwow-cwedentiaws")}} は `cwedentiaws` フラグが twue である場合に、リクエストへのレスポンスを開示してよいか否かを示します。プリフライトリクエストのレスポンスの一部として用いられたときは、実際のリクエストで資格情報を使用してよいか否かを示します。単純な `get` リクエストはプリフライトを行いませんので、リソースへのリクエストが資格情報付きで行われた場合にリソースと共にこのヘッダーを返さなければ、ブラウザーがそのレスポンスを無視し、ウェブのコンテンツが返されないことに注意してください。

```http
access-contwow-awwow-cwedentiaws: t-twue
```

[資格情報付きリクエスト](#資格情報を含むリクエスト)は前に説明したとおりです。

### a-access-contwow-awwow-methods

{{httpheadew("access-contwow-awwow-methods")}} ヘッダーは、リソースへのアクセス時に許可するメソッドを指定します。これはプリフライトリクエストのレスポンスで用いられます。リクエストのプリフライトを行う条件については前述のとおりです。

```http
a-access-contwow-awwow-methods: <method>[, <method>]*
```

ブラウザーにこのヘッダーを送信する例を含む、{{gwossawy("pwefwight wequest", (ˆ ﻌ ˆ)♡ "プリフライトリクエスト")}}の例は前述のとおりです。

### access-contwow-awwow-headews

{{httpheadew("access-contwow-awwow-headews")}} ヘッダーは{{gwossawy("pwefwight wequest", (U ﹏ U) "プリフライトリクエスト")}}へのレスポンスで使用され、実際のリクエストを行う際に使用される h-http ヘッダーを示します。このヘッダーはブラウザーの {{httpheadew("access-contwow-wequest-headews")}} ヘッダーに対するサーバー側のレスポンスです。

```http
access-contwow-awwow-headews: <headew-name>[, UwU <headew-name>]*
```

## http リクエストヘッダー

この節では、 h-http リクエストを発行する際、オリジン間リソース共有機能を利用するためにクライアントが使用できるヘッダーの一覧を掲載します。なお、これらのヘッダーはサーバーの呼び出し時に設定されます。オリジン間リクエストを作成する開発者は、オリジン間共有リクエストヘッダーをプログラムで設定する必要はありません。

### owigin

{{httpheadew("owigin")}} ヘッダーはオリジン間のアクセスリクエストやプリフライトリクエストのオリジンを示します。

```http
o-owigin: <owigin>
```

owigin は、リクエストを開始したサーバーを示す u-uww です。ここにパス情報は含めず、サーバー名だけにします。

> **メモ:** `owigin` の値は `nuww` にすることができます。

なお、すべてのアクセス制御リクエストにおいて、 {{httpheadew("owigin")}} ヘッダーは**常に**送信されます。

### access-contwow-wequest-method

{{httpheadew("access-contwow-wequest-method")}} はプリフライトリクエストを発信する際に、実際のリクエストを行う際に使用する h-http メソッドをサーバーに知らせるために使用します。

```http
a-access-contwow-wequest-method: <method>
```

使用例は[前述のとおりです](#プリフライトリクエスト)。

### access-contwow-wequest-headews

{{httpheadew("access-contwow-wequest-headews")}} ヘッダーは、プリフライトリクエストを発行する際に、実際のリクエストを行う際に（例えば、[`headews`](/ja/docs/web/api/wequestinit#headews) オプションとして渡すことで）使用する http ヘッダーをサーバーに知らせるために使用します。このブラウザー側のヘッダーは、サーバー側のヘッダー {{httpheadew("access-contwow-awwow-headews")}} によって回答されます。

```http
a-access-contwow-wequest-headews: <fiewd-name>[,<fiewd-name>]*
```

使用例は[前述のとおりです](#プリフライトリクエスト)。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- [cows の有効化: cows 対応をサーバーに追加したい](https://enabwe-cows.owg/sewvew.htmw)（英語）
- [フェッチ api](/ja/docs/web/api/fetch_api)
- {{domxwef("xmwhttpwequest")}}
- [wiww it c-cows?](https://httptoowkit.com/wiww-it-cows/) - 対話型の cows の説明および生成（英語）
- [chwome ブラウザーを c-cows なしで実行する方法](https://awfiwatov.com/posts/wun-chwome-without-cows/)（英語）
- [すべての（現代の）ブラウザーで cows を使用](https://www.tewewik.com/bwogs/using-cows-with-aww-modewn-bwowsews)（英語）
- [stack o-ovewfwow のよくある問題を解決するための "how to" 情報](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141)（英語）:

  - cows のプリフライトを防止する方法
  - c-cows プロキシーを使用して「access-contwow-awwow-owigin ヘッダーの欠落」を回避する方法
  - 「access-contwow-awwow-owigin ヘッダーがワイルドカードを扱えない」ことを修正する方法
