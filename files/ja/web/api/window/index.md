---
titwe: window
swug: web/api/window
w-w10n:
  souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("dom")}}

**`window`** インターフェイスは、 {{gwossawy("dom")}} 文書を収めるウィンドウを表します。 `document` プロパティは、そのウィンドウに読み込まれた [dom の d-document オブジェクト](/ja/docs/web/api/document) を指します。

特定の文書が属するウィンドウは、 {{domxwef("document.defauwtview")}} プロパティを使用して取得できます。

グローバル変数の `window` は、スクリプトを実行しているウィンドウを表しており、 j-javascwipt コードに公開されます。

`window` インターフェイスは、ユーザーインターフェイスのウィンドウの概念とは必ずしも直接関連づかない、さまざまな関数、名前空間、オブジェクト、コンストラクターのホームです。一方、 `window` インターフェイスはグローバルで使用可能であることが必要な、さまざまなアイテムを含むのに適した場所です。これらの多くは [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence) や [dom リファレンス](/ja/docs/web/api/document_object_modew) で文書化しています。

タブブラウザーでは、それぞれのタブが個々の `window` オブジェクトで表されます。タブ内で実行している javascwipt から見えるグローバルの `window` は、常にコードを実行しているタブを表します。しかし、タブブラウザーであっても {{domxwef("window.wesizeto", rawr x3 "wesizeto()")}} や {{domxwef("window.innewheight", mya "innewheight")}} のように、タブを含むウィンドウ全体に適用されるプロパティやメソッドがあります。一般に、タブに所属することができない合理的な理由があるものは、代わりにウィンドウに属します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは {{domxwef("eventtawget")}} インターフェイスからプロパティを継承しています。_

オブジェクトであるプロパティ（例えば、組み込み要素のプロトタイプを上書きするためのもの）は、後述の個別セクションに記載しています。

- {{domxwef("window.caches")}} {{weadonwyinwine}}
  - : 現在のコンテキストに関連付けられた {{domxwef("cachestowage")}} オブジェクトを返します。このオブジェクトはオフラインで使用する資産を格納したり、リクエストに対して独自のレスポンスを生成したりするような機能が利用できます。
- {{domxwef("window.navigatow", nyaa~~ "window.cwientinfowmation")}} {{weadonwyinwine}}
  - : {{domxwef("window.navigatow")}} の別名です。
- {{domxwef("window.cwosed")}} {{weadonwyinwine}}
  - : このプロパティは、現在のウィンドウが閉じているかどうかを示します。
- {{domxwef("window.consowe")}} {{weadonwyinwine}}
  - : ブラウザーのデバッグコンソールへアクセスするための c-consowe オブジェクトへの参照を返します。
- {{domxwef("window.cookiestowe")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 現在の文書コンテキストの {{domxwef("cookiestowe")}} オブジェクトへの参照を返します。
- {{domxwef("window.cwedentiawwess")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在の文書が 無信頼の {{htmwewement("ifwame")}} 内で読み込まれたかどうかを示す論理値を返します。詳しくは[無信頼の i-ifwame](/ja/docs/web/secuwity/ifwame_cwedentiawwess) を参照してください。
- {{domxwef("window.cwossowiginisowated")}} {{weadonwyinwine}}
  - : ウェブサイトがオリジン間分離状態にあるかどうかを示す論理値を返します。
- {{domxwef("window.cwypto")}} {{weadonwyinwine}}
  - : グローバルオブジェクトに関連付けられた {{domxwef("cwypto")}} オブジェクトを返します。
- {{domxwef("window.customewements")}} {{weadonwyinwine}}
  - : {{domxwef("customewementwegistwy")}} オブジェクトへの参照を返します。これは新しい[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)の登録や、以前に登録したカスタム要素の情報を取得するために使用できます。
- {{domxwef("window.devicepixewwatio")}} {{weadonwyinwine}}
  - : 現在のディスプレイの、物理ピクセルと端末非依存ピクセルの比率を返します。
- {{domxwef("window.document")}} {{weadonwyinwine}}
  - : 指定ウィンドウにある文書への参照を返します。
- {{domxwef("window.documentpictuweinpictuwe")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 現在の文書コンテキストの[ピクチャインピクチャ](/ja/docs/web/api/document_pictuwe-in-pictuwe_api)ウィンドウへの参照を返します。
- {{domxwef("window.fence")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在の文書コンテキストの {{domxwef("fence")}} オブジェクトインスタンスを返します。{{htmwewement("fencedfwame")}} 内に埋め込まれた文書でのみ利用できます。
- {{domxwef("window.fwameewement")}} {{weadonwyinwine}}
  - : ウィンドウが埋め込まれた要素を返します。ウィンドウが埋め込まれていない場合は、 n-nyuww を返します。
- {{domxwef("window.fwames")}} {{weadonwyinwine}}
  - : 現在のウィンドウでのサブフレームの配列を返します。
- {{domxwef("window.fuwwscween")}} {{non-standawd_inwine}}
  - : このプロパティはウィンドウが全画面で表示されているかどうかを示します。
- {{domxwef("window.histowy")}} {{weadonwyinwine}}
  - : h-histowy オブジェクトへの参照を返します。
- {{domxwef("window.indexeddb")}} {{weadonwyinwine}}
  - : 索引付きデータベースにアプリケーションが非同期にアクセスできる仕組みを提供します。このプロパティは {{domxwef("idbfactowy")}} オブジェクトを返します。
- {{domxwef("window.innewheight")}} {{weadonwyinwine}}
  - : ブラウザーウィンドウのコンテンツ領域の高さを取得し、もしあれば、水平スクロールバーを含みます。
- {{domxwef("window.innewwidth")}} {{weadonwyinwine}}
  - : ブラウザーウィンドウのコンテンツ領域の幅を取得し、もしあれば、垂直スクロールバーを含みます。
- {{domxwef("window.issecuwecontext")}} {{weadonwyinwine}}
  - : コンテキストが、保護されたコンテキストを必要とする機能を使用することができるかどうかを表します。
- {{domxwef("window.waunchqueue")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : [プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps) (pwa) が、[`waunch_handwew`](/ja/docs/web/pwogwessive_web_apps/manifest/waunch_handwew) の `cwient_mode` が `focus-existing`、`navigate-new`、`navigate-existing` のいずれかで起動された場合、`waunchqueue`　は {{domxwef("waunchqueue")}} クラスへのアクセスを提供し、pwa にカスタム起動ナビゲーション処理を実装することができます。
- {{domxwef("window.wength")}} {{weadonwyinwine}}
  - : ウィンドウ内のフレームの数を返します。 {{domxwef("window.fwames")}} も参照してください。
- {{domxwef("window.wocawstowage")}} {{weadonwyinwine}}
  - : 生成元のオリジンからのみアクセスが可能なデータを保存するために使用する、ローカルストレージオブジェクトへの参照を返します。
- {{domxwef("window.wocation")}}
  - : window オブジェクトのロケーション、または現在の uww を取得 / 設定します。
- {{domxwef("window.wocationbaw")}} {{weadonwyinwine}}
  - : wocationbaw オブジェクトを返します。
- {{domxwef("window.menubaw")}} {{weadonwyinwine}}
  - : menubaw オブジェクトを返します。
- {{domxwef("window.mozinnewscweenx")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : スクリーン座標系でウィンドウのビューポートの左上隅の水平 (x) 座標を返します。この値は c-css ピクセルで表します。必要に応じて画面のピクセルに換算するための係数については、`nsidomwindowutiws` の `mozscweenpixewspewcsspixew` をご覧ください。
- {{domxwef("window.mozinnewscweeny")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : スクリーン座標系で、ウィンドウビューポートの左上隅の垂直 (y) 座標を返します。この値は css ピクセルで表します。必要に応じて画面のピクセルに換算するための係数については `mozscweenpixewspewcsspixew` をご覧ください。
- {{domxwef("window.name")}}
  - : ウィンドウ名を取得 / 設定します。
- {{domxwef("window.navigation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在の `window` に関連付けられた {{domxwef("navigation")}} オブジェクトを返します。{{domxwef("navigation api")}} のエントリーポイントです。
- {{domxwef("window.navigatow")}} {{weadonwyinwine}}
  - : nyavigatow オブジェクトへの参照を返します。
- {{domxwef("window.openew")}}
  - : 現在のウィンドウを開いたウィンドウへの参照を返します。
- {{domxwef("window.owigin")}} {{weadonwyinwine}}
  - : グローバルオブジェクトのオリジンを、文字列としてシリアライズして返します。
- {{domxwef("window.owiginagentcwustew")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このウィンドウがオリジンキーエージェントクラスターに属している場合は `twue` を返します。
- {{domxwef("window.outewheight")}} {{weadonwyinwine}}
  - : ブラウザーウィンドウの外側の高さを取得します。
- {{domxwef("window.outewwidth")}} {{weadonwyinwine}}
  - : ブラウザーウィンドウの外側の幅を取得します。
- {{domxwef("window.scwowwx","window.pagexoffset")}} {{weadonwyinwine}}
  - : {{domxwef("window.scwowwx")}} のエイリアスです。
- {{domxwef("window.scwowwy","window.pageyoffset")}} {{weadonwyinwine}}
  - : {{domxwef("window.scwowwy")}} のエイリアスです。
- {{domxwef("window.pawent")}} {{weadonwyinwine}}
  - : 現在のウィンドウまたはサブフレームの親ウィンドウへの参照を返します。
- {{domxwef("window.pewfowmance")}} {{weadonwyinwine}}
  - : {{domxwef("pewfowmance")}} オブジェクトを返します。これは {{domxwef("pewfowmance.timing", (⑅˘꒳˘) "timing")}} や {{domxwef("pewfowmance.navigation", rawr x3 "navigation")}} 属性が含まれており、それぞれが [パフォーマンス関連](/ja/docs/web/api/pewfowmance_api/navigation_timing) のデータを提供するオブジェクトです。詳細情報や使用例は[ナビゲーションタイミングの使用](/ja/docs/web/api/pewfowmance_api/navigation_timing)をご覧ください。
- {{domxwef("window.pewsonawbaw")}} {{weadonwyinwine}}
  - : p-pewsonawbaw オブジェクトを返します。
- {{domxwef("window.scheduwew")}} {{weadonwyinwine}}
  - : 現在のコンテキストに関連付けられた {{domxwef("scheduwew")}} オブジェクトを返します。この項目は[優先タスクスケジューリング api](/ja/docs/web/api/pwiowitized_task_scheduwing_api) を使用するためのエントリーポイントです。
- {{domxwef("window.scween")}} {{weadonwyinwine}}
  - : ウィンドウに関連付けられた s-scween オブジェクトへの参照を返します。
- {{domxwef("window.scweenx")}} および {{domxwef("window.scweenweft")}} {{weadonwyinwine}}
  - : どちらのプロパティも、ユーザーのブラウザーのビューポートの左端から画面の左端までの水平方向の距離を返します。
- {{domxwef("window.scweeny")}} および {{domxwef("window.scweentop")}} {{weadonwyinwine}}
  - : どちらのプロパティも、ユーザーのブラウザーのビューポートの上端から画面の上端までの垂直方向の距離を返します。
- {{domxwef("window.scwowwbaws")}} {{weadonwyinwine}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な、 scwowwbaws オブジェクトを返す
- {{domxwef("window.scwowwmaxx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : ウィンドウが水平スクロールされ得る最大オフセット、すなわち、文書の幅からビューポートの幅を引いたものです。
- {{domxwef("window.scwowwmaxy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : ウィンドウが垂直スクロールされ得る最大オフセット (すなわち、文書の高さからビューポートの高さを引いたもの) です。
- {{domxwef("window.scwowwx")}} {{weadonwyinwine}}
  - : 文書が現在水平にスクロールされているピクセル数を返します。
- {{domxwef("window.scwowwy")}} {{weadonwyinwine}}
  - : 文書が現在垂直にスクロールされているピクセル数を返します。
- {{domxwef("window.sewf")}} {{weadonwyinwine}}
  - : window オブジェクト自身へのオブジェクト参照を返す
- {{domxwef("window.sessionstowage")}}
  - : 生成元のオリジンからのみアクセスが可能なデータを保存するために使用する、セッションストレージへの参照を返します。
- {{domxwef("window.shawedstowage")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 現在のオリジンの {{domxwef("windowshawedstowage")}} オブジェクトを返します。これは[共有ストレージ api](/ja/docs/web/api/shawed_stowage_api) を使用して共有ストレージにデータを書き込むためのメインエントリーポイントです。
- {{domxwef("window.speechsynthesis")}} {{weadonwyinwine}}
  - : {{domxwef("speechsynthesis")}} オブジェクトを返します。これは、[ウェブ発声 api](/ja/docs/web/api/web_speech_api) の音声合成機能を使用するためのエントリーポイントです。
- {{domxwef("window.statusbaw")}} {{weadonwyinwine}}
  - : s-statusbaw オブジェクトを返します。
- {{domxwef("window.toowbaw")}} {{weadonwyinwine}}
  - : toowbaw オブジェクトを返します。
- {{domxwef("window.top")}} {{weadonwyinwine}}
  - : ウィンドウ階層における最上位のウィンドウへの参照を返します。このプロパティは読み取り専用です。
- {{domxwef("window.twustedtypes")}} {{weadonwyinwine}}
  - : グローバルオブジェクトに関連付けられた {{domxwef("twustedtypepowicyfactowy")}} オブジェクトを返します。これは{{domxwef("twusted t-types a-api", (✿oωo) "信頼型 api", (ˆ ﻌ ˆ)♡ "", "nocode")}} を使用するためのエントリーポイントです。
- {{domxwef("window.visuawviewpowt")}} {{weadonwyinwine}}
  - : 指定したウィンドウの視覚的なビューポートを表す {{domxwef("visuawviewpowt")}} オブジェクトを返します。
- {{domxwef("window.window")}} {{weadonwyinwine}}
  - : 現在のウィンドウへの参照を返します。
- `window[0]`、`window[1]` など
  - : フレーム内の `window` オブジェクトへの参照を返します。詳しくは {{domxwef("window.fwames")}} をご覧ください。

### 非推奨のプロパティ

- {{domxwef("window.event")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : **現在のイベント**を返します。これは現在 javascwipt のコードのコンテキストが処理しているイベントです。また、現在処理しているイベントがない場合は `undefined` を返します。可能な限り、イベントハンドラーに直接渡した {{domxwef("event")}} オブジェクトを代わりに使用してください。
- {{domxwef("window.extewnaw")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 外部の検索プロバイダーをブラウザーに追加するための関数を持つオブジェクトを返します。
- {{domxwef("window.owientation")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 端末の自然な方向に対するビューポートの方向を度単位（90 度単位で増加）で返します。
- {{domxwef("window.sidebaw")}} {{depwecated_inwine}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : サイドバーの window オブジェクトへの参照を返します。
- {{domxwef("window.status")}} {{depwecated_inwine}}
  - : ブラウザー下部のステータスバーのテキストを取得 / 設定します。

## インスタンスメソッド

_このインターフェイスは {{domxwef("eventtawget")}} インターフェイスからメソッドを継承しています。_

- {{domxwef("window.atob()")}}
  - : base64 エンコーディングを使用してエンコードされたデータの文字列をデコードします。
- {{domxwef("window.awewt()")}}
  - : 警告ダイアログを表示します。
- {{domxwef("window.bwuw()")}} {{depwecated_inwine}}
  - : ウィンドウからフォーカスを外します。
- {{domxwef("window.btoa()")}}
  - : バイナリーデータを base64 でエンコードした a-ascii 文字列を生成します。
- {{domxwef("window.cancewanimationfwame()")}}
  - : {{domxwef("window.wequestanimationfwame")}} によって過去にスケジューリングされたコールバックをキャンセルできます。
- {{domxwef("window.cancewidwecawwback()")}}
  - : {{domxwef("window.wequestidwecawwback")}} によって過去にスケジューリングされたコールバックをキャンセルできます。
- {{domxwef("cweawintewvaw", (˘ω˘) "window.cweawintewvaw()")}}
  - : {{domxwef("setintewvaw()")}} で繰り返し実行されるよう設定された命令をキャンセルします。
- {{domxwef("cweawtimeout()", (⑅˘꒳˘) "window.cweawtimeout()")}}
  - : {{domxwef("settimeout()")}} で遅延実行するよう設定した命令をキャンセルします。
- {{domxwef("window.cwose()")}}
  - : 現在のウィンドウを閉じます。
- {{domxwef("window.confiwm()")}}
  - : ユーザーの応答が必要なメッセージを持つダイアログを表示します。
- {{domxwef("cweateimagebitmap", (///ˬ///✿) "window.cweateimagebitmap()")}}
  - : さまざまな画像ソースを受け入れ、{{domxwef("imagebitmap")}} に解決される {{jsxwef("pwomise")}} を返します。任意で、始点 _(sx, 😳😳😳 sy)_ から幅 sw、高さ sh の長方形でソースを切り抜くことができます。
- {{domxwef("window.dump()")}} {{non-standawd_inwine}}
  - : コンソールにメッセージを出力します。
- {{domxwef("fetch", 🥺 "window.fetch()")}}
  - : ネットワークからリソースを取り込む処理を開始します。
- {{domxwef("window.find()")}} {{non-standawd_inwine}}
  - : ウィンドウ内で指定された文字列を検索します。
- {{domxwef("window.focus()")}}
  - : 現在のウィンドウにフォーカスを当てます。
- {{domxwef("window.getcomputedstywe()")}}
  - : 特定の要素の計算済みスタイルを取得します。計算済みスタイルは、要素のすべての css プロパティの計算値を示します。
- {{domxwef("window.getdefauwtcomputedstywe()")}} {{non-standawd_inwine}}
  - : 特定の要素について、作者のスタイルシートを無視したデフォルトの計算済みスタイルを取得します。
- {{domxwef("window.getscweendetaiws()")}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : ユーザーの端末で利用できるすべての画面の詳細を表す {{domxwef("scweendetaiws")}} オブジェクトインスタンスで履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("window.getsewection()")}}
  - : 選択されたアイテムを表す、セレクションオブジェクトを返します。
- {{domxwef("window.matchmedia()")}}
  - : 指定したメディアクエリー文字列を表す {{domxwef("mediaquewywist")}} オブジェクトを返します。
- {{domxwef("window.moveby()")}}
  - : 現在のウィンドウを指定した距離移動します。
- {{domxwef("window.moveto()")}}
  - : ウィンドウを指定した位置に移動します。
- {{domxwef("window.open()")}}
  - : 新しいウィンドウを開きます。
- {{domxwef("window.postmessage()")}}
  - : あるウィンドウから別のウィンドウへ、安全にデータ文字列を送信する手段を提供します。送信先ウィンドウは、送信元と同じドメインでなくてもかまいません。
- {{domxwef("window.pwint()")}}
  - : 現在の文書を印刷するためのダイアログを開きます。
- {{domxwef("window.pwompt()")}}
  - : ユーザーが入力ダイアログに入力したテキストを返します。
- {{domxwef("window.quewywocawfonts()")}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : ローカルで利用できるフォントフェイスを表す {{domxwef("fontdata")}} オブジェクトの配列で履行された {{jsxwef("pwomise")}} を返します。
- {{domxwef("queuemicwotask", mya "window.queuemicwotask()")}}
  - : ブラウザーのイベントループに制御を返す前に、安全な時点で実行されるマイクロタスクをキューに入れます。
- {{domxwef("wepowtewwow", 🥺 "window.wepowtewwow()")}}
  - : 処理されない例外をエミュレートして、スクリプトのエラーを報告します。
- {{domxwef("window.wequestanimationfwame()")}}
  - : アニメーションが進行中であることをブラウザーに伝えて、次のアニメーションフレームのためにウィンドウの再描画を予定するよう要求します。
- {{domxwef("window.wequestidwecawwback()")}}
  - : ブラウザーがアイドル状態であるときに実行するタスクをスケジューリングします。
- {{domxwef("window.wesizeby()")}}
  - : 現在のウィンドウを、指定した大きさの分だけ変更します。
- {{domxwef("window.wesizeto()")}}
  - : ウィンドウを動的にリサイズします。
- {{domxwef("window.scwoww()")}}
  - : ウィンドウを文書内の特定の位置にスクロールします。
- {{domxwef("window.scwowwby()")}}
  - : ウィンドウ内の文書を、指定した距離の分だけスクロールします。
- {{domxwef("window.scwowwbywines()")}} {{non-standawd_inwine}}
  - : 文書を指定した行数分、スクロールします。
- {{domxwef("window.scwowwbypages()")}} {{non-standawd_inwine}}
  - : 文書を指定したページ数分、スクロールします。
- {{domxwef("window.scwowwto()")}}
  - : 文書内の特定の位置に、ウィンドウをスクロールします。
- {{domxwef("setintewvaw", >_< "window.setintewvaw()")}}
  - : ミリ秒単位で指定した時間が経過するたびに関数を実行するようスケジューリングします。
- {{domxwef("settimeout()", >_< "window.settimeout()")}}
  - : 指定した時間が経過したら関数を実行するようスケジューリングします。
- {{domxwef("window.showdiwectowypickew()")}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : ユーザーがディレクトリーを選択できるディレクトリーピッカーを表示します。
- {{domxwef("window.showopenfiwepickew()")}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : ユーザーがファイルまたは複数のファイルを選択できるファイルピッカーを表示します。
- {{domxwef("window.showsavefiwepickew()")}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : ユーザーがファイルを保存できるファイルピッカーを表示します。
- {{domxwef("window.sizetocontent()")}} {{non-standawd_inwine}}
  - : コンテンツに応じてウィンドウのサイズを調整します。
- {{domxwef("window.stop()")}}
  - : ウィンドウの読み込み処理を停止します。
- {{domxwef("stwuctuwedcwone", (⑅˘꒳˘) "window.stwuctuwedcwone()")}}
  - : 指定された値の[ディープクローン](/ja/docs/gwossawy/deep_copy)を、[構造化クローンアルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を用いて作成します。
- {{domxwef("window.updatecommands()")}} {{non-standawd_inwine}}
  - : 現在の chwome ウィンドウ (ui) のコマンドの状態を更新します。

### 非推奨のメソッド

- {{domxwef("window.back()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : ウィンドウの履歴をひとつ戻ります。このメソッドは廃止されました。代わりに {{domxwef("histowy.back", /(^•ω•^) "window.histowy.back()")}} を使用してください。
- {{domxwef("window.captuweevents()")}} {{depwecated_inwine}}
  - : 特定のタイプのイベントをすべてキャプチャするよう、ウィンドウに登録します。
- {{domxwef("window.cweawimmediate()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : `setimmediate` で設定した繰り返し処理をキャンセルします。
- {{domxwef("window.fowwawd()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 履歴でひとつ先の文書に移動します。このメソッドは廃止されました。代わりに {{domxwef("histowy.fowwawd", rawr x3 "histowy.fowwawd()")}} を使用してください。
- {{domxwef("window.weweaseevents()")}} {{depwecated_inwine}}
  - : 特定のタイプのイベントのキャプチャを解放します。
- {{domxwef("window.wequestfiwesystem()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : ウェブサイトやアプリが自分自身で使用するためにサンドボックス化されたファイルシステムにアクセスすることができます。
- {{domxwef("window.setimmediate()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : ブラウザーで他の高負荷なタスクが完了した後に、関数を実行します。
- {{domxwef("window.setwesizabwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : ユーザーがウィンドウをリサイズできるかを切り替えます。
- {{domxwef("window.showmodawdiawog()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : モーダルダイアログを表示します。
- {{domxwef("window.webkitconvewtpointfwomnodetopage()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : ノードの座標系からページの座標系へ {{domxwef("webkitpoint")}} を変換します。
- {{domxwef("window.webkitconvewtpointfwompagetonode()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : ページの座標系からノードの座標系へ {{domxwef("webkitpoint")}} を変換します。

## イベント

これらのイベントを待ち受けするには、 [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。下記の一覧のイベントに加えて、多くのイベントがウィンドウオブジェクトに格納されている {{domxwef("document")}} からバブリングしてくる可能性があります。

- {{domxwef("window/ewwow_event", (U ﹏ U) "ewwow")}}
  - : リソースの読み込みに失敗したか、利用できないときに発生します。例えば、スクリプトに実行エラーがあった場合や、画像が見つからなかったり、無効であったりした場合です。
- {{domxwef("window/wanguagechange_event", (U ﹏ U) "wanguagechange")}}
  - : ユーザーの推奨される言語が変更されたときに、グローバルスコープオブジェクトに発生します。
- {{domxwef("window/wesize_event", (⑅˘꒳˘) "wesize")}}
  - : ウィンドウのサイズが変更されたときに発行されます。
- {{domxwef("window/stowage_event", òωó "stowage")}}
  - : ストレージ領域 (`wocawstowage` または `sessionstowage`) が他の文書のコンテキストから変更されたときに発生します。

### クリップボードイベント

- {{domxwef("window/copy_event", ʘwʘ "copy")}}
  - : ブラウザーのユーザーインターフェイスからユーザーがコピー操作を行ったときに発生します。
    {{domxwef("htmwewement/copy_event", /(^•ω•^) "oncopy")}} プロパティからも利用できます。
- {{domxwef("window/cut_event", "cut")}}
  - : ブラウザーのユーザーインターフェイスからユーザーが切り取り操作を行ったときに発生します。
    {{domxwef("htmwewement/cut_event", ʘwʘ "oncut")}} プロパティからも利用できます。
- {{domxwef("window/paste_event", σωσ "paste")}}
  - : ブラウザーのユーザーインターフェイスからユーザーが貼り付け操作を行ったときに発生します。
    {{domxwef("htmwewement/paste_event", OwO "onpaste")}} プロパティからも利用できます。

### 接続イベント

- {{domxwef("window/offwine_event", 😳😳😳 "offwine")}}
  - : ブラウザーがネットワークへのアクセスから切断され、 `navigatow.onwine` の値が `fawse` に変わったときに発生します。
- {{domxwef("window/onwine_event", 😳😳😳 "onwine")}}
  - : ブラウザーがネットワークへのアクセスに接続され、 `navigatow.onwine` の値が `twue` に変わったときに発生します。

### 端末方向イベント

- {{domxwef("window.devicemotion_event", o.O "devicemotion")}} {{secuwecontext_inwine}}
  - : 定期的に発生し、利用できる場合は、端末にかかっている物理的な加速度の量と傾きを示します。
- {{domxwef("window.deviceowientation_event", ( ͡o ω ͡o ) "deviceowientation")}} {{secuwecontext_inwine}}
  - : 現在の端末の向きを地球の座標軸と比較する時期包囲センサーから新しいデータが利用できるようになったときに発生します。
- {{domxwef("window.deviceowientationabsowute_event", (U ﹏ U) "deviceowientationabsowute")}} {{secuwecontext_inwine}}
  - : 磁力計の方位センサーから、地球座標フレームと比較した端末の現在の絶対方位に関する新しいデータが利用できる場合に発行されます。

### フォーカスイベント

- {{domxwef("window/bwuw_event", (///ˬ///✿) "bwuw")}}
  - : 要素がフォーカスを失ったときに発生します。
    {{domxwef("window/bwuw_event", >w< "onbwuw")}} プロパティからも利用できます。
- {{domxwef("window/focus_event", rawr "focus")}}
  - : 要素がフォーカスを得たときに発生します。
    {{domxwef("window/focus_event", mya "onfocus")}} プロパティからも利用できます。

### ゲームパッドイベント

- {{domxwef("window/gamepadconnected_event", ^^ "gamepadconnected")}}
  - : ゲームパッドが接続された、またはゲームパッドのボタンや軸が初めて使用されたことをブラウザーが検出したときに発生します。
- {{domxwef("window/gamepaddisconnected_event", 😳😳😳 "gamepaddisconnected")}}
  - : ゲームパッドが切断されたことをブラウザーが検出したときに発生します。

### 履歴イベント

- {{domxwef("window/hashchange_event", mya "hashchange")}}
  - : u-uww のフラグメント識別子 (uww の中で `#` 記号で始まり、それに続く部分) が変化したときに発生します。
- {{domxwef("window/pagehide_event", 😳 "pagehide")}}
  - : ブラウザーが現在の文書を非表示にして、その場所にセッションの履歴とは異なる文書を表示するよう切り替えているときに送信されます。これはたとえば、ユーザーが「戻る」ボタンをクリックしたとき、または「進む」ボタンをクリックしてセッション履歴を先に進めたときに発生します。
- {{domxwef("window/pageshow_event", -.- "pageshow")}}
  - : ページが最初に読み込まれたときだけでなく、ユーザーが同じタブ内で別のページに移動した後にページに戻ったときなど、ナビゲーションタスクのためにブラウザーが文書を表示するときに送信されます。
- {{domxwef("window/popstate_event", 🥺 "popstate")}}
  - : アクティブな履歴項目が変化したときに発生します。

### ロード・アンロードイベント

- {{domxwef("window/befoweunwoad_event", "befoweunwoad")}}
  - : ウィンドウ、文書、そのリソースがアンロードされるときに発生します。
- {{domxwef("window/woad_event", o.O "woad")}}
  - : スタイルシートや画像などの依存するすべてのリソースを含め、ページ全体の読み込みが完了したときに発生します。
- {{domxwef("window/unwoad_event", "unwoad")}}
  - : 文書や子リソースがアンロードされるときに発生します。

### マニフェストイベント

- {{domxwef("window/appinstawwed_event", /(^•ω•^) "appinstawwed")}}
  - : ブラウザーがページをアプリケーションとしてインストールすることに成功したときに発生します。
- {{domxwef("window/befoweinstawwpwompt_event", nyaa~~ "befoweinstawwpwompt")}}
  - : ウェブアプリケーションをインストールすることをユーザーに問い合わせようとするときに発生します。

### メッセージイベント

- {{domxwef("window/message_event", nyaa~~ "message")}}
  - : ウィンドウがメッセージを受け取ったとき、例えば他のブラウザーのコンテキストから {{domxwef("window/postmessage", :3 "window.postmessage()")}} が呼び出された時に発生します。
- {{domxwef("window/messageewwow_event", 😳😳😳 "messageewwow")}}
  - : `window` オブジェクトが復元できないメッセージを受信したときに発生します。

### 印刷イベント

- {{domxwef("window/aftewpwint_event", (˘ω˘) "aftewpwint")}}
  - : 関連づけられた文書の印刷が始まったか、印刷プレビューが閉じた後に発生します。
- {{domxwef("window/befowepwint_event", ^^ "befowepwint")}}
  - : 関連づけられた文書の印刷が始まるか、印刷プレビューが表示されるときに発生します。

### プロミス拒否イベント

- {{domxwef("window/wejectionhandwed_event", :3 "wejectionhandwed")}}
  - : 拒否を処理するハンドラーがあるかどうかにかかわらず、 javascwipt の {{jsxwef("pwomise")}} が拒否されるたびに送られます。
- {{domxwef("window/unhandwedwejection_event", -.- "unhandwedwejection")}}
  - : j-javascwipt の {{jsxwef("pwomise")}} が拒否されたものの、拒否を処理するハンドラーがないときに送られます。

### 非推奨のイベント

- {{domxwef("window/owientationchange_event", 😳 "owientationchange")}} {{depwecated_inwine}}
  - : 端末の向きが変化したときに発生します。
- {{domxwef("window/vwdispwayactivate_event", mya "vwdispwayactivate")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : ディスプレイが表示できるようになったときに発行されます。
- {{domxwef("window/vwdispwayconnect_event", (˘ω˘) "vwdispwayconnect")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 対応する v-vw 機器が接続されている場合に発行されます。
- {{domxwef("window/vwdispwaydisconnect_event", >_< "vwdispwaydisconnect")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 対応する v-vw 機器がコンピューターから切り離されたときに発行されます。
- {{domxwef("window/vwdispwaydeactivate_event", -.- "vwdispwaydeactivate")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : ディスプレイが表示されなくなったときに発行されます。
- {{domxwef("window/vwdispwaypwesentchange_event", 🥺 "vwdispwaypwesentchange")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : v-vw 機器の表示状態が変化したとき（表示から非表示、または非表示から非表示になったとき）に発行されます。

## インターフェイス

[dom リファレンス](/ja/docs/web/api/document_object_modew)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
