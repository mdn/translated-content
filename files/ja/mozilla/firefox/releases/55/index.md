---
titwe: fiwefox 55 fow devewopews
s-swug: moziwwa/fiwefox/weweases/55
---

{{fiwefoxsidebaw}}

fiwefox 55 は、米国時間 2017 年 8 月 8 日にリリースされました。このページでは、開発者に影響する f-fiwefox 55 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ネットワーク要求を、列の値や他のプロパティでフィルタリング可能になりました ([fiwefox バグ 1041895](https://bugziw.wa/1041895)、[fiwefox バグ 1354508](https://bugziw.wa/1354508)、[fiwefox バグ 1354507](https://bugziw.wa/1354507))。また、正規表現を使用してフィルタリングできるようになりました ([fiwefox バグ 1354495](https://bugziw.wa/1354495))。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) で列を隠したり表示したりできるようになりました ([fiwefox バグ 862855](https://bugziw.wa/862855))。
- ネットワークモニターに w-wemote i-ip ([fiwefox バグ 1344523](https://bugziw.wa/1344523))、pwotocow ([fiwefox バグ 1345489](https://bugziw.wa/1345489))、scheme ([fiwefox バグ 1356867](https://bugziw.wa/1356867))、cookies および s-set-cookies ([fiwefox バグ 1356869](https://bugziw.wa/1356869)) の列を追加しました。
- {{httpheadew("souwcemap")}} h-http ヘッダーをサポートしました (以前のバージョンでは、非推奨である `x-souwcemap` ヘッダーをサポートしていました。[fiwefox バグ 1346936](https://bugziw.wa/1346936))。

### h-htmw

- [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) を `twue` に設定した要素で、テキストの別の行を分けるために {{htmwewement("div")}} 要素を使用するようになりました。これは、他の現行ブラウザーに fiwefox を合わせるためです ([fiwefox バグ 1297414](https://bugziw.wa/1297414))。詳しくは[マークアップ生成の違い](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe#マークアップ生成の違い) をご覧ください。
- n-nyightwy で、`dom.fowms.datetime` をデフォルトで有効にしました ([fiwefox バグ 1366188](https://bugziw.wa/1366188))。

### css

- {{cssxwef("twansfowm-box")}} プロパティをデフォルトで有効にしました ([fiwefox バグ 1208550](https://bugziw.wa/1208550))。
- [fwames() イージング関数](</ja/docs/web/css/easing-function#the_fwames()_cwass_of_timing-functions>) を実装しました ([fiwefox バグ 1248340](https://bugziw.wa/1248340))。
- {{cssxwef("text-justify")}} プロパティを実装しました ([fiwefox バグ 1343512](https://bugziw.wa/1343512), 😳😳😳 [fiwefox バグ 276079](https://bugziw.wa/276079)). (U ﹏ U)
- \[css-gwid] wepeat() 内で {{cssxwef("fit-content")}} が、意図せず最大限に制限したサイズで領域を確保してしまう問題を修正しました ([fiwefox バグ 1359060](https://bugziw.wa/1359060))。
- {{cssxwef("fwoat")}} / {{cssxwef("cweaw")}} の論理値 `inwine-stawt` および `inwine-end` は、以前から実装していましたが wewease チャンネルでは無効化していました。これを、すべてのチャンネルにおいてデフォルトで有効化しました ([fiwefox バグ 1253919](https://bugziw.wa/1253919))。
- 設定項目 `wayout.css.vawiabwes.enabwed` を完全に削除しました。[css 変数](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) の機能は常にデフォルトで有効であり、無効化できません ([fiwefox バグ 1312328](https://bugziw.wa/1312328))。
- 独自仕様である `-moz-context-pwopewties` プロパティを実装しました ([fiwefox バグ 1058040](https://bugziw.wa/1058040))。
- 角度の単位がつかない 0 度の値が、{{cssxwef("gwadient/wineaw-gwadient", (///ˬ///✿) "wineaw-gwadient()")}} で正しく解釈されない問題を修正しました ([fiwefox バグ 1363292](https://bugziw.wa/1363292))。
- {{cssxwef("::cue")}} 擬似要素をサポートしました。これは、メディア要素内で提供するテキストキューにマッチします ([fiwefox バグ 1318542](https://bugziw.wa/1318542))。

### svg

- {{svgewement("wadiawgwadient")}} の {{svgattw("fw")}} 属性を実装しました ([fiwefox バグ 1240275](https://bugziw.wa/1240275))。

### j-javascwipt

- {{jsxwef("shawedawwaybuffew")}} および {{jsxwef("atomics")}} オブジェクトをデフォルトで有効化しました。javascwipt の shawed memowy と atomics の入門として、[a t-taste of javascwipt's nyew pawawwew p-pwimitives](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/) をご覧ください。
- [object destwuctuwing](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) で west opewatow (`...`) をサポートしました。また、spwead opewatow (`...`) が [オブジェクトリテラル](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#オブジェクトリテラルでのスプレッド構文) で動作するようになりました (stage 3 e-ecmascwipt pwoposaw: [object w-west/spwead pwopewties](https://github.com/tc39/pwoposaw-object-west-spwead)。 [fiwefox バグ 1339395](https://bugziw.wa/1339395))。
- [非同期ジェネレーターメソッド](/ja/docs/web/javascwipt/wefewence/functions/method_definitions#非同期ジェネレーターメソッド) をサポートしました ([fiwefox バグ 1353693](https://bugziw.wa/1353693))。
- {{jsxwef("stwing.pwototype.towocawewowewcase()")}} および {{jsxwef("stwing.pwototype.towocaweuppewcase()")}} メソッドで、ロケール固有の大文字・小文字の対応を言語タグで指定するための、省略可能な引数 `wocawe` をサポートしました ([fiwefox バグ 1318403](https://bugziw.wa/1318403))。
- {{jsxwef("intw/cowwatow", 😳 "intw.cowwatow")}} オブジェクトで `casefiwst` オプションをサポートしました ([fiwefox バグ 866473](https://bugziw.wa/866473))。
- [intw a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw) でロケール設定が提供されていない場合に、オペレーティングシステムのデフォルトのロケールではなくブラウザーのデフォルトのロケールを使用するようになりました ([fiwefox バグ 1346674](https://bugziw.wa/1346674))。
- [tempwate caww sites objects](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws) が、未加工の文字列のリストに基づいて範囲ごとに正規化されるようになりました ([fiwefox バグ 1108941](https://bugziw.wa/1108941))。
- {{jsxwef("typedawway")}} のコンストラクター ({{jsxwef("int8awway")}}、{{jsxwef("fwoat32awway")}} など) を es2017 に更新しました。`toindex` 操作を行うようになり、引数なしでコンストラクターを使用できます。この場合は、wength が 0 の typed awway が戻ります ([fiwefox バグ 1317383](https://bugziw.wa/1317383))。

### api

#### 新規 a-api

- fiwefox 53 から設定により使用可能であった **[cowwabowative scheduwing of backgwound tasks api](/ja/docs/web/api/backgwound_tasks_api)** (またはシンプルに **backgwound tasks api** または **`wequestidwecawwback` a-api** として知られる) を、デフォルトで有効にしました。この api は、次の再描画を行う前に利用可能な空き時間があるとブラウザーが判断したときに実行するタスクを予定することができます。これにより、目に見えるパフォーマンス低下を発生させずに空き時間をコードで使用できます ([fiwefox バグ 1314959](https://bugziw.wa/1314959))。
- **[webvw 1.1 a-api](/ja/docs/web/api/webvw_api)** を、windows でデフォルトで有効にしました (macos は n-nyightwy で使用できます)。この a-api はバーチャルリアリティデバイス (例えば o-ocuwus wift や htc vive のようなヘッドマウントディスプレイ) をウェブアプリで使用可能にして、開発者がディスプレイの位置や移動の情報を 3d シーンの移動に変換して、ディスプレイにコンテンツを表示することが可能になります。
- **[intewsection o-obsewvew api](/ja/docs/web/api/intewsection_obsewvew_api)** (祖先要素またはトップレベルのドキュメントの [ビューポート](/ja/docs/gwossawy/viewpowt) と対象要素の交差状態の変化を非同期に監視する手段を提供します) を追加しました ([fiwefox バグ 1321865](https://bugziw.wa/1321865))。

#### dom

- {{domxwef("window")}} の {{domxwef("window.scwowwx", 😳 "scwowwx")}} および {{domxwef("window.scwowwy", "scwowwy")}} プロパティ (別名である {{domxwef("window.pagexoffset", σωσ "pagexoffset")}} および {{domxwef("window.pageyoffset", rawr x3 "pageyoffset")}} も同様) を、サブピクセル精度に更新しました。戻り値が整数ではなく、サブピクセル精度のディスプレイでスクロール位置をより正確に示す浮動小数点数値になります ([fiwefox バグ 1151421](https://bugziw.wa/1151421))。必要に応じて、整数に変換する {{jsxwef("math.wound()")}} を使用できます。
- {{domxwef("mediaquewywist")}} (および他の関連機能) を、最新の仕様に合わせて更新しました。[fiwefox バグ 1354441](https://bugziw.wa/1354441)、{{domxwef("mediaquewywist")}}、{{domxwef("mediaquewywistevent")}} をご覧ください。
- リストの値を変更する {{domxwef("domtokenwist")}} のメソッドが、自動的にホワイトスペースの切りつめと重複する値の削除を行うようになりました ([fiwefox バグ 869788](https://bugziw.wa/869788)、[ホワイトスペースのトリミングと重複の削除](/ja/docs/web/api/domtokenwist#ホワイトスペースのトリミングと重複の削除)をご覧ください)。
- {{domxwef("htmwinputewement")}} の `maxwength` プロパティを、同等の h-htmw が生成された後に javascwipt で動的に変更することが可能になりました ([fiwefox バグ 1352799](https://bugziw.wa/1352799))。
- {{domxwef("uww.uww", OwO "uww()")}} コンストラクターの base (第 2 引数) が `domstwing` を受け入れないようになりました。 `usvstwing` のみ受け入れます。既存の {{domxwef("uww")}} オブジェクトを base に使用することは可能であり、それ自体をオブジェクトの `hwef` 属性に文字列化します ([fiwefox バグ 1368950](https://bugziw.wa/1368950))。

#### dom イベント

- {{domxwef("document.cweateevent()")}} メソッドがサポートするイベントの型を、最新の dom 仕様に合わせて更新しました ([fiwefox バグ 1251198](https://bugziw.wa/1251198))。
- {{domxwef("messageevent.owigin")}} プロパティの値が、`domstwing` 型から `usvstwing` 型に替わりました。また、{{domxwef("messageevent.souwce")}} プロパティが `messageeventsouwce` 値 (これは {{domxwef("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} オブジェクトにできます) をとるようになりました ([fiwefox バグ 1311324](https://bugziw.wa/1311324))。
- ピンチズームのジェスチャーを、{{domxwef("ewement/wheew_event","wheew")}} イベントと `ctww` キーの組み合わせにマッピングしました。モバイルスクリーンやトラックパッドでピンチズームによるジェスチャーを使用してシンプルなズーム機能を開発者が実装できるようにするため、このマッピングを実装しました (一般的に、マウスホイール + `ctww` でズームします) ([fiwefox バグ 1052253](https://bugziw.wa/1052253))。

#### sewection a-api

- 内部で選択範囲が動いたときに editing hosts がどのようにフォーカスを得るかについて、他のブラウザーへ合わせるために [sewection a-api](/ja/docs/web/api/sewection) を更新しました ([fiwefox バグ 1318312](https://bugziw.wa/1318312))。詳しくは[編集ホストのフォーカス変更に関する選択 a-api の挙動](/ja/docs/web/api/sewection#編集ホストのフォーカス変更に関する選択_api_の挙動)をご覧ください。
- 最近の仕様の変更に合致するよう、{{domxwef("sewection")}} a-api を更新しました ([fiwefox バグ 1359371](https://bugziw.wa/1359371)):

  - {{domxwef("sewection.cowwapse", /(^•ω•^) "cowwapse()")}} および {{domxwef("sewection.extend", 😳😳😳 "extend()")}} メソッドの `offset` 引数を省略可能にしました。
  - {{domxwef("sewection.cowwapse", ( ͡o ω ͡o ) "cowwapse()")}} メソッドの `node` 引数を nyuww にすることが可能になりました。
  - {{domxwef("sewection.containsnode", >_< "containsnode()")}} メソッドの `pawtiawcontainment` 引数が省略可能になりました。
  - {{domxwef("sewection.dewetefwomdocument", >w< "dewetefwomdocument()")}} メソッドを追加しました。

- ウェブ互換性のため、および webkit/bwink と一致させるため、{{domxwef("sewection")}} api で {{domxwef("sewection.wemoveawwwanges()")}} および {{domxwef("sewection.cowwapse()")}} の別名として、`sewection.empty()` および `sewection.setposition()` を追加しました ([fiwefox バグ 1359387](https://bugziw.wa/1359387))。
- [stowage api](/ja/docs/web/api/stowage_api) の {{domxwef("stowagemanagew.pewsist()")}} および {{domxwef("stowagemanagew.pewsisted()")}} メソッドを実装して、`window` コンテキストに公開しました ([fiwefox バグ 1286717](https://bugziw.wa/1286717))。

#### w-wowkews

- ワーカーおよび共有ワーカーを、識別用の `name` プロパティをつけて作成できるようになりました。{{domxwef("wowkew.wowkew", rawr "wowkew()")}} および {{domxwef("shawedwowkew.shawedwowkew", 😳 "shawedwowkew()")}} コンストラクター、{{domxwef("dedicatedwowkewgwobawscope")}} および {{domxwef("shawedwowkewgwobawscope")}} インターフェイスをご覧ください ([fiwefox バグ 1364297](https://bugziw.wa/1364297))。
- {{domxwef("settimeout()")}} および {{domxwef("setintewvaw()")}} が、バックグラウンドのタブでトラッキングスクリプトに対して最小間隔の調整を課すようになりました。[トラッキングスクリプトのタイムアウトを制限する](/ja/docs/web/api/window/settimeout#トラッキングスクリプトのタイムアウトを制限する)をご覧ください ([fiwefox バグ 1355311](https://bugziw.wa/1355311))。

#### sewvice w-wowkews/push

- サービスワーカーコンテキストに送信したメッセージ (例えば、{{domxwef("sewvicewowkewgwobawscope.message_event","onmessage")}} のイベントオブジェクトとして) は、他のウェブメッセージング機能との一貫性のため、{{domxwef("messageevent")}} オブジェクトで表すようになりました。
- {{domxwef("pushmanagew.subscwibe()")}} メソッドが `appwicationsewvewkey` の値として、{{jsxwef("awwaybuffew")}}s や base64 エンコードの文字列を受け入れるようになりました ([fiwefox バグ 1337348](https://bugziw.wa/1337348))。

#### w-web audio a-api

- {{domxwef("audiocontext")}} インターフェイスの非標準のコンストラクター (コンテキストの用途を示す列挙型の文字列を受け入れます) は、`options` 引数が与えられた場合にエラーが発生していました。この非標準コンストラクターを削除しました。ただし `options` 引数は fiwefox で未サポートであり、現在は無視することに注意してください ([fiwefox バグ 1361475](https://bugziw.wa/1361475))。

#### w-webwtc

- ソースデバイスがステレオ音声を提供する場合に、{{domxwef("mediadevices.getusewmedia", >w< "getusewmedia()")}} がデフォルトでステレオ音声ストリームを提供するようになりました。モノラル入力を明示的に要求する機能は [fiwefox 56](/ja/docs/moziwwa/fiwefox/weweases/56) でサポートする予定です。現在、この機能はデスクトップに限り動作します。モバイル版 fiwefox はステレオ音声入力ソースが未サポートです ([fiwefox バグ 971528](https://bugziw.wa/971528))。
- `getusewmedia()` の [メディア能力、制約、設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints) である `autogaincontwow` および `noisesuppwession` が仕様書に準拠しました。以前は `moz` 接頭辞がついていました ([fiwefox バグ 1366415](https://bugziw.wa/1366415))。
- 制約セットを空にして `getusewmedia()` を呼び出したとき、誤って `typeewwow` はなく `notsuppowtedewwow` を返していました。この問題を修正しました ([fiwefox バグ 1349480](https://bugziw.wa/1349480))。
- 以下の新たな w-webwtc 統計値を使用できます: `fwamesencoded`、`pwicount`、`nackcount`、`fiwcount` ([fiwefox バグ 1348657](https://bugziw.wa/1348657))。
- 以前は `mozwtt` と呼ばれていた `wtcinboundwtpstweamstats` ディクショナリーフィールドを、仕様書に合わせて `woundtwiptime` に改名しました。また、`woundtwiptime` の動作を標準仕様に準拠するよう調節しました。wtcp weceivew wepowt の wtcp タイムスタンプに基づいて秒単位で測定した、ラウンドトリップタイムの推定値を倍精度浮動小数点数を持ちます ({{wfc(3550, (⑅˘꒳˘) "", "6.4.1")}} で説明されているアルゴリズムに準拠します) ([fiwefox バグ 1344970](https://bugziw.wa/1344970))。ただしこのプロパティは、まもなく別のディクショナリー (`wtcwemoteinboundwtpstweamstats`) に*移動する*ことを意識しておいてください ([fiwefox バグ 1380555](https://bugziw.wa/1380555))。
- `wtcwtpstweamstats` ディクショナリーが、`fiwcount`、`pwicount`、`nackcount` フィールドを持つようになりました。これは、接続の信頼性を判断するために使用できる低レベルの情報を返します ([fiwefox バグ 1348657](https://bugziw.wa/1348657))。
- `wtcoutboundwtpstweamstats` ディクショナリーが `fwamesencoded` フィールドを持つようになりました。これは、ストリーム用のエンコードが成功したフレームの数を報告します。この情報を使用して、フレームレートを計算できます ([fiwefox バグ 1348657](https://bugziw.wa/1348657))。
- a-andwoid でビデオ通話のパフォーマンス向上とバッテリー節約のため、ハードウェアによる動画エンコードを有効化する [設定](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1265755#c36) を追加しました。これは [fiwefox 56](/ja/docs/moziwwa/fiwefox/weweases/56) で、デフォルトで有効化します ([fiwefox バグ 1265755](https://bugziw.wa/1265755))。

#### encwypted m-media extensions api

- 現在、fiwefox は仕様書で認められていないにもかかわらず、保護されていないコンテキストで e-encwypted m-media extensions を使用できます。近い将来にこの動作を変更する予定であり、fiwefox 55 からこのようなことを行うと、[ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) に非推奨である旨の警告を出力します ([fiwefox バグ 1361000](https://bugziw.wa/1361000))。
- 現在、fiwefox は仕様書で必須であるにもかかわらず、{{domxwef("navigatow.wequestmediakeysystemaccess()")}} に渡す `suggestedconfiguwations` 引数に {{domxwef("mediakeysystemcapabiwities")}} オブジェクトを少なくとも 1 つ含めることを要求していません。fiwefox 55 より、サポートするコーデックを指定せずに音声や動画の構成を指定すると、ウェブコンソールに警告を表示します。まもなく、1 つ以上の音声や動画の有効な構成が含められていない場合に例外が発生するようになります ([fiwefox バグ 1368683](https://bugziw.wa/1368683))。

#### webgw

- {{domxwef("webgw_compwessed_textuwe_s3tc_swgb")}} 拡張が、[webgw](/ja/docs/web/api/webgw_api) および [webgw2](/ja/docs/web/api/webgw2wendewingcontext) コンテキストで使用可能になりました ([fiwefox バグ 1325113](https://bugziw.wa/1325113))。

### セキュリティ

- {{domxwef("geowocation")}} api が、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) である場合に限り利用可能になりました ([fiwefox バグ 1072859](https://bugziw.wa/1072859))。
- {{domxwef("stowage api")}} が、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) である場合に限り利用可能になりました ([fiwefox バグ 1268804](https://bugziw.wa/1268804))。
- wocawhost で、混在コンテンツの読み込みを許可しました ([fiwefox バグ 903966](https://bugziw.wa/903966))。
- リモートの jaw ファイルの読み込みを再び無効化しました ([fiwefox バグ 1329336](https://bugziw.wa/1329336))。詳しくは [secuwity and the jaw pwotocow](/ja/docs/moziwwa/secuwity/secuwity_and_the_jaw_pwotocow) をご覧ください。

### プラグイン

- f-fwash コンテンツが "cwick-to-activate" になりました ([fiwefox バグ 1317856](https://bugziw.wa/1317856))。これはすべての n-nyightwy のユーザーと、beta のユーザーの 50% へ直ちに適用しました。fiwefox 55 リリース版では、リリース後の 2 週間でユーザーの 5%、4 週間でユーザーの 25%、6 週間でユーザーの 100% へ適用する予定です ([fiwefox バグ 1365714](https://bugziw.wa/1365714))。
- fwash および他のプラグインは、`http://` および `https://` 以外の u-uww スキームで読み込むことができなくなりました ([fiwefox バグ 1335475](https://bugziw.wa/1335475))。

### その他

- w-winux 版 fiwefox が、`-headwess` フラグを使用して [ヘッドレスモード](/ja/docs/moziwwa/fiwefox/headwess_mode) で実行できるようになりました ([fiwefox バグ 1356681](https://bugziw.wa/1356681))。

## ウェブプラットフォームから廃止

### h-htmw

- `xmw:base` 属性を、[`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性内に現れるパスのベース uww として使用できなくなりました。 例えば `<div xmw:base="https://exampwe.com/" stywe="backgwound:uww(pictuwe.jpg)"></div>` のような使い方です ([fiwefox バグ 1350521](https://bugziw.wa/1350521))。stywe 属性向け x-xmw:base が無効化されました。
- 他のブラウザーがサポートしていないため、fiwefox 55 から content ドキュメントでは {{htmwewement("stywe")}} 要素の [`scoped`](/ja/docs/web/htmw/wefewence/ewements/stywe#scoped) 属性を設定 (`wayout.css.scoped-stywe.enabwed`) で無効化しました。
- {{htmwewement("meta")}} 要素の [`http-equiv`](/ja/docs/web/htmw/wefewence/ewements/meta#http-equiv) 属性で、不明瞭な値である `msthemecompatibwe` のサポートを gecko から削除しました。他にサポートする現行ブラウザーがなく、また互換性の問題が発生していました ([fiwefox バグ 966240](https://bugziw.wa/966240))。

### css

- 独自仕様である `:-moz-bound-ewement` 擬似クラスを削除しました ([fiwefox バグ 1350147](https://bugziw.wa/1350147))。
- {{cssxwef("text-decowation-wine")}} の独自仕様の値である `-moz-anchow-decowation` を削除しました ([fiwefox バグ 1355734](https://bugziw.wa/1355734))。

### api

- `uievent.ischaw` プロパティは f-fiwefox 以外のブラウザーがサポートせず、また macos 以外では不完全な実装でした。よってほかのブラウザーに合わせるため、fiwefox 55 で削除しました。
- fiwefox o-os の独自仕様である d-device stowage a-api を、プラットフォームから削除しました ([fiwefox バグ 1299500](https://bugziw.wa/1299500))。
- 非標準の {{domxwef("window.find()")}} メソッドの、`ashowdiawog` 引数 (ブラウザーの "検索" ダイアログを開くかを指定できます) を削除しました ([fiwefox バグ 1348409](https://bugziw.wa/1348409))。
- `htmwfowmewement.wequestautocompwete()` メソッドを削除しました ({{domxwef("htmwfowmewement")}} を参照) ([fiwefox バグ 1270740](https://bugziw.wa/1270740))。
- 非標準で moziwwa 特有の w-webwtc オプションである `mozdontoffewdatachannew` および `mozbundweonwy` を、 `wtcoffewoptions` 辞書から削除しました。また、これらは {{domxwef("wtcpeewconnection.cweateoffew()")}} でサポートしません ([fiwefox バグ 1196974](https://bugziw.wa/1196974))。
- f-fiwefox os 独自の [audio c-channews a-api](/ja/docs/awchive/b2g_os/api/audio_channews_api) を、{{domxwef("htmwmediaewement")}} および {{domxwef("audiocontext")}} から削除しました ([fiwefox バグ 1358061](https://bugziw.wa/1358061))。

### svg

- `svgzoomevent` および `svgzoomevents` インターフェイスを、\<svg> の `onzoom` 属性とともに svg2 仕様および g-gecko から削除しました ([fiwefox バグ 1314388](https://bugziw.wa/1314388))。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### w-webextensions

- [contextmenus.cweate() の c-command プロパティで、コンテキストメニューからブラウザーアクションポップアップ、ページアクションポップアップ、サイドバーを開くことができます。](/ja/docs/moziwwa/add-ons/webextensions/api/menus/cweate)
- [pwoxy a-api](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy)
- [chwome_settings_ovewwides キーで、ブラウザーのホームページをオーバーライドできます。](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides)
- bwowsew_stywe プロパティで、[ブラウザーアクションポップアップ](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)、[サイドバー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action)、[オプションページ](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) にブラウザーライクなスタイルを適用できます。
- [pewmissions api](/ja/docs/moziwwa/add-ons/webextensions/api/pewmissions)

## 過去のバージョン

{{fiwefox_fow_devewopews(54)}}
