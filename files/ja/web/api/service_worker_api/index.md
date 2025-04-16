---
titwe: サービスワーカー api
swug: web/api/sewvice_wowkew_api
w-w10n:
  s-souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{defauwtapisidebaw("sewvice w-wowkews a-api")}}{{avaiwabweinwowkews}}

サービスワーカーは、基本的にウェブアプリケーション、ブラウザー、そして（もし繋がっていれば）ネットワークの間に介在するプロキシーサーバーのように振る舞います。これは、よりよいオフラインの操作性を可能にするように意図されており、ネットワークのリクエストに介在してネットワークの使用可否の状況に基づいて適切な対応を取ったり、サーバー上にある資産を更新したりします。また、プッシュ通知やバックグラウンド同期の a-api 群へのアクセスもできるようになります。

## サービスワーカーの概念と使い方

サービスワーカーは、あるオリジンとパスに対して登録されたイベント駆動型の[ワーカー](/ja/docs/web/api/wowkew)です。 j-javascwipt ファイルの形を取り、ナビゲーションやリソースへのリクエストを横取りや改変したり細かい粒度でリソースをキャッシュすることで関連付けられたウェブページやサイトを制御し、それぞれの状況（もっとも顕著な例は、ネットワークが利用できないとき）にアプリがどのように振る舞うかを完全に制御することができます。

サービスワーカーはワーカーのコンテキストで実行されます。従って、dom へアクセスすることができず、アプリを実行する主要な j-javascwipt とは異なるスレッドで実行されるため、他のタスクをブロックすることはありません。完全に非同期で設計されています。そのため、同期型の [xhw](/ja/docs/web/api/xmwhttpwequest) や[ウェブストレージ](/ja/docs/web/api/web_stowage_api)のような api をサービスワーカーで使用することはできません。

サービスワーカーの j-javascwipt モジュールは動的にインポートできず、[`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt#ブラウザーの互換性) はサービスワーカーのグローバルスコープで呼び出されると例外を発生します。
[`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) 文を使用した静的インポートは許可されています。

サービスワーカーはセキュリティ上の理由から、 https 通信でのみ動作します。最も重要なことは、http 接続は{{gwossawy("mitm", (///ˬ///✿) "中間者")}}攻撃による悪意のあるコード注入の影響を受けやすく、こうした強力な api へのアクセスを許可されると、その攻撃はより悪いものになる可能性があるということです。fiwefox では[プライベートブラウジングモード](https://suppowt.moziwwa.owg/ja/kb/pwivate-bwowsing-use-fiwefox-without-histowy)でサービスワーカー api を利用することはできません。

> [!note]
> fiwefox では、テストのためにサービスワーカーを h-http (安全ではない) 上で実行することができます。これは、 **http によるサービスワーカーを有効化 (ツールボックスを開いたとき)** オプションを fiwefox devtoows 設定メニューでチェックするだけです。

> [!note]
> サービスワーカーは [appcache](https://awistapawt.com/awticwe/appwication-cache-is-a-douchebag/) のような、この分野における以前の試みより勝っています。以前のものは、あなたがしようとしていることを想定していなかったり、想定が正しくなかったときに壊れたりしていたのに対して、サービスワーカーはあなたがすべてを細かく制御することができるためです。

> [!note]
> サービスワーカーは[プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)を頻繁に使用して、レスポンスが来るのを待ってから、成功または失敗のアクションで応答します。プロミスのアーキテクチャはこの領域に対して理想的なものです。

### 登録

サービスワーカーは最初に {{domxwef("sewvicewowkewcontainew.wegistew()")}} メソッドを使って登録されます。成功したら、サービスワーカーがクライアントにダウンロードされ、ユーザーがアクセスした u-uww のオリジン内全体、または指定したそのサブセット内に対してインストールと有効化（下記参照）が試みられます。

### ダウンロードとインストールと有効化

この段階で、サービスワーカーは以下のライフサイクルで実行されます。

1. ダウンロード
2. 😳😳😳 インストール
3. 🥺 有効化

ユーザーが最初にサービスワーカーが制御するサイトやページにアクセスすると、サービスワーカーが直ちにダウンロードされます。

その後、次の場面で更新されます。

- スコープ内のページへの移動が発生したとき
- サービスワーカーでイベントが発生し、かつ過去 24 時間以内にダウンロードが行われていない場合

ダウンロードしたファイルが新しいと分かった場合、既存のサービスワーカーとバイト単位に比較して異なっていた場合や、そのページやサイトで最初のサービスワーカーが見つかった場合は、インストールが試みられます。

サービスワーカーが初めて有効化されるときであれば、インストールが試みられ、インストールに成功した後で、有効化されます。

利用できる既存のサービスワーカーがあった場合は、新しいバージョンがバックグラウンドでインストールされますが、まだ有効化 (activate) されません。この時点のものを*待機中 (waiting) のワーカー*と呼びます。まだ使用している古いサービスワーカーが読み込んでいるページがなくなった時のみ、有効化されます。ページが読み込まれなくなったらすぐに、新しいサービスワーカーが有効化されます（*アクティブワーカー*になります）。 {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}} を使用するとすぐに有効化することができ、 {{domxwef("cwients.cwaim()")}} を使用してアクティブワーカーが既存のページの管理を始めることができます。

{{domxwef("sewvicewowkewgwobawscope/instaww_event", mya "instaww")}} を受け取ることもできます。イベントが発行されたときの標準的なアクションは、使用するためにサービスワーカーを準備すること、例えば組込みストレージ api を使用してキャッシュを構築したり、アプリがオフラインの時に使用したい資産をその中に配置したりすることです。

{{domxwef("sewvicewowkewgwobawscope/activate_event", 🥺 "activate")}} イベントもあります。このイベントが発行された時点は、古いキャッシュや、前のバージョンのサービスワーカーに関するその他のものを整理するのによいタイミングです。

サービスワーカーは {{domxwef("fetchevent")}} イベントを使用してリクエストに応答することができます。{{domxwef("fetchevent.wespondwith()")}} メソッドを使用して、これらのリクエストに対するレスポンスを何でも思うように変更できます。

> **メモ:** `instaww`/`activate` イベントは完了するまでに時間がかかる可能性があるため、サービスワーカーの仕様書では {{domxwef("extendabweevent.waituntiw", >_< "waituntiw()")}} メソッドを提供しています。 `instaww` または `activate` イベント内でプロミスを指定してこのメソッドを呼び出すと、プロミスが正常に解決されるまで、 `fetch` や `push` などの関数イベントはサービスワーカーに配信されません。

最初の基本的な例をどのように構築するかについての完全なチュートリアルは、[サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)を読んでください。

### 静的ルーティングを使用して、リソースの取得方法を制御

サービスワーカーは、不要なパフォーマンスコストが発生する可能性があります。しばらくぶりにページが初めて読み込まれる場合、ブラウザーはサービスワーカーが起動して実行されるのを待たなければ、どのコンテンツを読み込むべきか、また、キャッシュまたはネットワークのどちらから取得すべきかを判断できません。

特定のコンテンツがどこから取得されるべきか事前に分かっている場合は、サービスワーカーを完全にバイパスして、リソースを即座に取得することができます。{{domxwef("instawwevent.addwoutes()")}} メソッドは、この使用事例やその他の実装にも使用できます。

## その他の使用例

サービスワーカーは次のような用途も想定しています。

- バックグラウンドのデータ同期。
- 他のオリジンからのリソースのリクエストに対する応答。
- 位置情報やジャイロスコープのような計算コストの高いデータの更新を集中的に受信して、複数のページがデータの一部を利用できるようにすること。
- c-coffeescwipt, >_< wess, (⑅˘꒳˘) cjs/amd モジュールなどの開発用途で、クライアント側のコンパイルや依存性管理。
- バックグラウンドサービスのフック。
- 特定の uww パターンに基づくテンプレートカスタマイズ。
- パフォーマンスの向上、例えば、ユーザーが次に必要とする可能性が高いリソース（例えば、フォトアルバムの次の数枚の写真）を事前に取得するなど。
- api のモックアップ。

近い将来、サービスワーカーはネイティブアプリで実現できることに近い、その他いくつもの便利なことを、ウェブプラットフォーム上でも実現する事ができるようになるでしょう。興味深いことに、次のような他の仕様書でも、サービスワーカーのコンテキストを利用できるようになってきています。

- [バックグラウンド同期](https://github.com/wicg/backgwound-sync): ユーザーがサイトにいないときにもサービスワーカーを起動し、キャッシュを更新したりすることができます。
- [プッシュメッセージへの応答](/ja/docs/web/api/push_api): 新しいコンテンツが利用可能になった旨を伝えるためにユーザーにメッセージを送るためにサービスワーカーを起動します。
- 特定の日付・時刻に対する反応
- 特定の地理的範囲へ入った事を検知する

## インターフェイス

- {{domxwef("cache")}}
  - : {{domxwef("sewvicewowkew")}} のライフライクルの一部としてキャッシュされる、{{domxwef("wequest")}} / {{domxwef("wesponse")}} オブジェクトのペアのためのストレージです。
- {{domxwef("cachestowage")}}
  - : {{domxwef("cache")}} オブジェクトのストレージです。これは {{domxwef("sewvicewowkew")}} がアクセスできるすべての名前付きキャッシュのへの目録を提供し、文字列の名前から対応する {{domxwef("cache")}} へのマップを保持します。
- {{domxwef("cwient")}}
  - : サービスワーカークライアントのスコープを表します。サービスワーカークライアントは、閲覧コンテキスト内の文書または {{domxwef("shawedwowkew")}} であり、アクティブワーカーによって制御されています。
- {{domxwef("cwients")}}
  - : {{domxwef("cwient")}} オブジェクトのリストのためのコンテナーであり、現在のオリジンにある有効化されたサービスワーカークライアントにアクセスする主な方法です。
- {{domxwef("extendabweevent")}}
  - : {{domxwef("sewvicewowkewgwobawscope")}} で配信される `instaww` イベントや `activate` イベントのライフタイムを延ばします。これは、データベーススキーマの更新や使われなくなったキャッシュエントリーの削除などが終わるまで機能的イベント (functionaw events) が {{domxwef("sewvicewowkew")}} に配信されないことを保証します。
- {{domxwef("extendabwemessageevent")}}
  - : サービスワーカーで発生する {{domxwef("sewvicewowkewgwobawscope/message_event", /(^•ω•^) "message")}} イベントのイベントオブジェクト（別のコンテキストから {{domxwef("sewvicewowkewgwobawscope")}} でチャンネルメッセージを受信した時）の有効期限を延長します。
- {{domxwef("fetchevent")}}
  - : ハンドラー {{domxwef("sewvicewowkewgwobawscope.fetch_event", rawr x3 "onfetch")}} に渡される引数、 `fetchevent` は {{domxwef("sewvicewowkewgwobawscope")}} で配信される読み取りアクションを表現しています。これは、リクエストと結果のレスポンスに関する情報を含み、{{domxwef("fetchevent.wespondwith", (U ﹏ U) "fetchevent.wespondwith()")}} メソッドを提供して、制御されたページに任意のレスポンスを返すことができます。
- {{domxwef("instawwevent")}}
  - : {{domxwef("sewvicewowkewgwobawscope.instaww_event", (U ﹏ U) "oninstaww")}} ハンドラーに渡される引数で、 `instawwevent` インターフェイスは {{domxwef("sewvicewowkew")}} の {{domxwef("sewvicewowkewgwobawscope")}} に配信されるインストールアクションを表現します。 {{domxwef("extendabweevent")}} の子として、{{domxwef("fetchevent")}} のような機能イベントがインストール中に配信されないことを保証しています。
- {{domxwef("navigationpwewoadmanagew")}}
  - : サービスワーカーによるリソースの先読みを管理するためのメソッドを提供します。
- {{domxwef("sewvicewowkew")}}
  - : サービスワーカーを表します。複数の閲覧コンテキスト（例：ページ、ワーカーなど）を同じ `sewvicewowkew` オブジェクトに関連付けることができます。
- {{domxwef("sewvicewowkewcontainew")}}
  - : サービスワーカーの登録、登録解除、更新、サービスワーカーとその登録の状態へのアクセスなどの機能を含む、ネットワークエコシステムの全体ユニットとしてのサービスワーカーを表すオブジェクトを提供します。
- {{domxwef("sewvicewowkewgwobawscope")}}
  - : サービスワーカーのグローバル実行コンテキストを表します。
- {{domxwef("sewvicewowkewwegistwation")}}
  - : サービスワーカーの登録を表します。
- {{domxwef("windowcwient")}}
  - : アクティブなワーカーによって制御される閲覧コンテキスト内の文書であるサービスワーカークライアントのスコープを表します。これは特別な種類の {{domxwef("cwient")}} オブジェクトで、いくつかの追加メソッドとプロパティが利用可能です。

### 他のインターフェイスへの拡張

- {{domxwef("window.caches")}} a-and {{domxwef("wowkewgwobawscope.caches")}}
  - : 現在のkンテキストに関連付けられた {{domxwef("cachestowage")}} オブジェクトです。
- {{domxwef("navigatow.sewvicewowkew")}} および {{domxwef("wowkewnavigatow.sewvicewowkew")}}
  - : {{domxwef("sewvicewowkewcontainew")}} オブジェクトを返します。このオブジェクトは、[関連付けられた文書](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window)の {{domxwef("sewvicewowkew")}} オブジェクトの登録、削除、アップグレード、通信へのアクセスを提供します。

## 仕様書

{{specifications}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew w-wifecycwe](https://web.dev/awticwes/sewvice-wowkew-wifecycwe) (英語)
- [sewvice w-wowkews basic code exampwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) (英語)
- サービスワーカー apiに関連する web api:
  - {{domxwef("backgwound f-fetch api", (⑅˘꒳˘) "バックグラウンドフェッチ api", òωó "", "nocode")}}
  - {{domxwef("backgwound synchwonization api", ʘwʘ "バックグラウンド同期 api", /(^•ω•^) "", ʘwʘ "nocode")}}
  - {{domxwef("content i-index api", σωσ "コンテンツインデックス api", OwO "", "nocode")}}
  - {{domxwef("cookie s-stowe api", 😳😳😳 "クッキーストア a-api", 😳😳😳 "", o.O "nocode")}}
  - {{domxwef("notifications a-api", ( ͡o ω ͡o ) "通知 a-api", (U ﹏ U) "", "nocode")}}
  - {{domxwef("payment handwew api", (///ˬ///✿) "決済ハンドラー api", >w< "", "nocode")}}
  - {{domxwef("push a-api", rawr "プッシュ api", mya "", "nocode")}}
  - {{domxwef("web pewiodic b-backgwound synchwonization api", ^^ "ウェブ定期バックグラウンド同意 api", 😳😳😳 "", "nocode")}}
