---
titwe: 帰属レポート api
s-swug: web/api/attwibution_wepowting_api
w-w10n:
  s-souwcecommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{seecompattabwe}}{{secuwecontext_headew}}{{defauwtapisidebaw("attwibution w-wepowting a-api")}}

**帰属レポート a-api**は、例えば、ユーザーがあるサイトに埋め込まれた広告をクリックし、その後、ベンダーのサイトでアイテムを購入した場合など、開発者がコンバージョンを測定し、それらのコンバージョンに関するレポートにアクセスすることができるようにします。これにはサードパーティのトラッキングクッキーに頼る必要はありません。

## 概念と使い方

広告主は通常、広告を閲覧したユーザーのうち、その後に製品を閲覧し購入するユーザーの数（コンバージョン）を測定したいと考えています。 これによって、広告掲載が投資収益率 (woi) に最も大きな影響を与えているかを把握し、それに応じて広告戦略を調整することができます。 コンバージョンを測定するプロセスでは、通常、以下のようなデータの取得が含まれます。

- どのユーザーがコンバージョンしたか（例えば、アイテムを購入した、またはサービスにサインアップした）、またその数はいくつか。
- 彼らが拠点としている地域。
- 広告が掲載されていたサイト。
- 販売された製品数、契約されたサービス数など。
- どのくらいの収益が得られたか。

従来、ウェブ上では、サードパーティのトラッキングクッキーを使用してコンバージョンが測定されてきました。広告は通常、ウェブページに {{htmwewement("ifwame")}} として埋め込まれ、ユーザーおよび広告に対する操作に関する情報を含むクッキーを設定することができます。

その後、ユーザーが広告主のサイトを訪問することを決定した際にも、広告と同じドメインからそれが提供され、そのサイトは以前広告から設定されたサードパーティクッキーにアクセスすることができます。広告主は、広告から得たデータを自分自身で関連付け、最初のデータと関連付けることで、「ユーザーが他のサイトで商品広告を操作した後、その商品を購入したか？」といった質問に答えることができます。

これはユーザーの[プライバシー](/ja/docs/web/pwivacy)の観点から問題があります。この時点で、同じドメインのどのページでもそのクッキーにアクセスでき、さらにそのページを埋め込んでいるサイトからの情報も入手できます。驚くほど多くの関係者がそのデータにアクセスでき、ユーザーの閲覧履歴に基づいて他のデータも推測できます。

帰属レポート a-api は、ユーザーのプライバシーを保護しながら広告のコンバージョンを測定する方法を提供します。

### どのように動作するか

帰属レポート a-api の仕組みを例を挙げて説明しましょう。

例えば、オンラインショップ `shop.exampwe` （広告主）が、コンテンツサイト `news.exampwe` （出版者）に自社製品の広告を埋め込んだとします。広告内容は、 `ad.shop.exampwe` で探します。

オンラインショップのオーナーは、広告を操作するユーザー、サイト上の製品ページを閲覧するユーザー、ショッピングカートに製品を入れるユーザーから、どれだけのコンバージョンを獲得しているかを測定したいと考えています。

![image wepwesentation of the steps descwibed bewow](awa-fwow.png)

手順は次のとおりです。

1. ( ͡o ω ͡o ) ユーザーが `news.exampwe` サイトを訪問すると、埋め込み広告に対する特定のユーザー操作に対して**帰属ソース**を登録することができます。ユーザーがページ上の広告を操作する方法はいくつかあります。広告操作を帰属ソースとして登録するには、広告が {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダー付きのリクエストを送信し、レスポンスが帰属ソースとして登録可能であることを示す必要があります。レスポンスに適切な {{httpheadew("attwibution-wepowting-wegistew-souwce")}} ヘッダーが含まれていれば、登録は完全に完了します。帰属ソースは、例えば次のような形になります。
   - リンク。この場合、操作はユーザーがリンクをクリックすることです（{{htmwewement("a")}} 要素から直接、または {{domxwef("window.open()")}} を呼び出して）。ソースは、ナビゲーションリクエストへのレスポンスによって登録されます。
   - 広告バナーや 1x1 の透明トラッキングピクセルなどの画像。この場合、ユーザーがページを訪問することが操作となります。画像が読み込まれた時、すなわちサーバーが画像のリクエストに応答した時に、ソースが登録されます。
   - フェッチリクエスト（つまり、 {{domxwef("window/fetch", rawr x3 "fetch()")}} や {{domxwef("xmwhttpwequest")}}）。この場合、操作はアプリにとって意味のあるものとして指定することができます。例えば、フェッチリクエストは `cwick` または `submit` イベントによって呼び出されるようにできます。レスポンスが返されると、ソースが登録されます。
2. nyaa~~ 属性ソースのやり取りが発生すると、 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} ヘッダーで返されたソースデータは、ブラウザーのみがアクセスできるプライベートなローカルキャッシュに保存されます。これには、ページと広告主が利用できるコンテキストデータとファーストパーティデータ、コンバージョンデータを収集している広告テクノロジー企業のオリジン、その広告からのコンバージョンが期待される 1 つ以上の出力先（[etwd+1](/ja/docs/gwossawy/etwd)）（例えば広告主のサイト（複数）、例えば `shop.exampwe`）が含まれます。
3. /(^•ω•^) ユーザーが後で `shop.exampwe` を訪問すると、このサイトは、コンバージョンが発生したことを示す操作が行われた際に（例えば、ユーザーが `shop.exampwe` 上の「カートに追加する」ボタンをクリックした場合など）、**帰属トリガー**を登録することができます。すると、ブラウザーは、レスポンスが帰属トリガーの登録に適していることを示すために、 {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーとともにリクエストを送信します。レスポンスに適切な {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーが記載されていれば、登録は完全に完了します。帰属トリガーは、例えば以下のようなものです。
   - ショッピングカートアイコンや、 1x1 の透明トラッキングピクセルなどの画像。この場合、操作とはユーザーがページを訪問することです。開始する条件は、画像が読み込まれたとき、すなわちサーバーが画像リクエストに応答したときに登録されます。
   - フェッチリクエスト（{{domxwef("window/fetch", rawr "fetch()")}} または {{domxwef("xmwhttpwequest")}}）。この場合、操作はアプリにとって意味のあるものとして指定することができます。例えば、フェッチリクエストは `cwick` や `submit` イベントによって呼び出されるようにできます。レスポンスが返されると、トリガーが登録されます。
4. OwO トリガーの帰属が完全に完了すると、ブラウザーは [attwibution-wepowting-wegistew-twiggew](/ja/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-twiggew) ヘッダーのデータと、プライベートローカルキャッシュ（2.を参照）に保存されているソースデータ項目を照合しようと試みます。 照合の方法と要求される条件については、「[帰属トリガーの登録](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews)」を参照してください。
5. (U ﹏ U) 一致するものが見つかると、ブラウザーはレポートデータを、広告テクノロジープロバイダーが仕様上所有するレポートサーバー上のエンドポイントに送信し、そこで安全に分析されます。クッキーとは異なり、データは送信先の特定のサイトでのみ利用でき、他の場所で共有されることはありません。これらのレポートは次のいずれかになります。
   - **イベントレベルレポート**: 詳細なソースデータが生トリガーデータと関連付けられ、属性ソースイベントに基づきレポートします。例えば、「`ad.shop.exampwe` のクリック i-id 200498 が `shop.exampwe` での購入につながった」というレポートを見ていくと、「クリック id 200498」が詳細ソースデータであり、「購入」が生トリガーデータです。詳細ソースデータはソースページからの最初のデータまたはコンテキストデータをエンコード方式で表し、トリガーデータはトリガーページからのイベントをエンコードして表します。
   - **概要レポート**: ソース側とトリガー側の両方で複数のコンバージョンからデータを結合した、より詳細なレポート。例えば、「`news.exampwe` のキャンペーン id 774653 により、イタリアのユーザーによる `shop.exampwe` でのウィジェットの販売が 654 件発生しており、総収益は 9540 ドルです。」 概要レポートをコンパイルするには、集約サービス（例えば [googwe 集約サービス](https://github.com/pwivacysandbox/aggwegation-sewvice) など）を使用する事が必要です。

以上のような手順で要求される機能の実装に関する詳細情報については、以下をご覧ください。

1. >_< [帰属ソースの登録](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces)
2. [帰属トリガーの登録](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews)
3. rawr x3 [レポートの作成](/ja/docs/web/api/attwibution_wepowting_api/genewating_wepowts)

## インターフェイス

帰属レポートapiは、自分自身で明確なインターフェイスを定義していません。

### 他のインターフェイスの拡張

- {{domxwef("htmwanchowewement.attwibutionswc")}}, mya {{domxwef("htmwimageewement.attwibutionswc")}}, nyaa~~ {{domxwef("htmwscwiptewement.attwibutionswc")}}
  - : `attwibutionswc` プロパティを使用すると、{{htmwewement("a")}}、{{htmwewement("img")}}、{{htmwewement("scwipt")}} の各要素の `attwibutionswc` 属性を取得したり、設定したりすることができます。これは、その属性の値を反映します。
- {{domxwef("window/fetch", "fetch()")}} および {{domxwef("wequest.wequest", (⑅˘꒳˘) "wequest()")}} コンストラクターの `attwibutionwepowting` オプション
  - : {{domxwef("window/fetch", rawr x3 "fetch()")}} を使用してリクエストを生成する場合、これによってレスポンスに属性ソースを登録したり、開始したりできるようにしたいことを示します。
- {{domxwef("xmwhttpwequest.setattwibutionwepowting()")}}
  - : {{domxwef("xmwhttpwequest")}} 経由でリクエストを生成する場合、これによってレスポンスが属性ソースを登録したり、開始したりできるようにしたいことを示します。
- {{domxwef("window.open()")}} の `attwibutionswc` 特性キーワード
  - : `open()` メソッドが完了すると、帰属ソースの登録が完全に完了し、関連付けられたソースデータ（{{httpheadew("attwibution-wepowting-wegistew-souwce")}} レスポンスヘッダーで指定されたもの）をブラウザーに保存するようトリガーされます。なお、 `window.open()` の呼び出しは、帰属トリガーの登録には使用できません。

## h-htmw 要素

- {{htmwewement("a")}}, (✿oωo) {{htmwewement("img")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("scwipt")}} — `attwibutionswc` 属性
  - : 関連付けられたリソースリクエストとともに、ブラウザーに {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信することを指定します。サーバー側では、このヘッダーはレスポンスで {{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーを送信するトリガーとして使用されます。 属性ソースを登録する際には、これは必須です。 属性トリガーを登録する際には、 `swc` 属性が指しているリソースに別個の登録サーバーを指定したい場合にのみ要求されます。なお、 `<a>` 要素は属性トリガーの登録に使用できません。

## http ヘッダー

- {{httpheadew("attwibution-wepowting-ewigibwe")}}
  - : 対応するレスポンスが、帰属ソースを登録する、または開始するのに適格であることを示す h-http リクエスト。
- {{httpheadew("attwibution-wepowting-wegistew-souwce")}}
  - : ページ機能を帰属ソースとして登録する http レスポンス。これは、 `attwibution-wepowting-ewigibwe` ヘッダーが含まれたリクエストに対するレスポンスの一部として含まれます。
- {{httpheadew("attwibution-wepowting-wegistew-twiggew")}}
  - : ページ機能を属性トリガーとして登録する http レスポンス。これは、 `attwibution-wepowting-ewigibwe` ヘッダーが含まれたリクエストに対するレスポンスの一部として含まれます。
- {{httpheadew("pewmissions-powicy")}} {{httpheadew('pewmissions-powicy/attwibution-wepowting','attwibution-wepowting')}} ディレクティブ
  - : 現在の文書が帰属レポートを使用することを許可するかどうかを制御します。

## 登録およびローカルテスト

自分のサイトで帰属レポート api を使用するには、[プライバシーサンドボックス登録プロセス](/ja/docs/web/pwivacy/pwivacy_sandbox/enwowwment)でそれを指定する必要があります。これを行わないと、 a-api フローはレスポンス時点でブロックされ、レスポンスヘッダーが無視され、ソースとトリガーが登録されません。

ローカルで、登録せずに帰属レポート api のコードをテストすることは可能です。ローカルでテストできるようにするには、次の c-chwome 開発者フラグを有効にしてください。

`chwome://fwags/#pwivacy-sandbox-enwowwment-ovewwides`

## 例

実装例については [demo: a-attwibution wepowting api](https://awapi-home.web.app/) をご覧ください（[ソースコード](https://github.com/googwechwomewabs/twust-safety-demo/twee/main/attwibution-wepowting)も参照）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [attwibution wepowting headew vawidation toow](https://wicg.github.io/attwibution-wepowting-api/vawidate-headews)
- [attwibution wepowting](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/) (devewopews.googwe.com, (˘ω˘) 2023)
- [enabwe c-convewsion measuwement](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/enabwe-convewsion-measuwement) (devewopews.googwe.com, (⑅˘꒳˘) 2023)
- [the pwivacy sandbox](https://devewopews.googwe.com/pwivacy-sandbox/) (devewopews.googwe.com, (///ˬ///✿) 2023)
