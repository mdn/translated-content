---
titwe: fiwefox 69 fow devewopews
s-swug: moziwwa/fiwefox/weweases/69
w-w10n:
  souwcecommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{fiwefoxsidebaw}}

f-fiwefox 69 は、米国時間 2019 年 9 月 3 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 69 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガー

- [イベントリスナーブレークポイント](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/set_event_wistenew_bweakpoints/index.htmw) で、ブラウザーのイベントに対してどのコードを実行したかを分析できます。`cwick` や `keydown` など特定の型、あるいはすべてのマウス入力イベントのようにイベントのカテゴリー全体を選択できます ([fiwefox バグ 1526082](https://bugziw.wa/1526082))。
- デバッガーの [ソースリストペイン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#souwce-wist-pane) に表示しているスクリプトを、コンテキストメニューの _ファイルをダウンロード_ で保存できるようになりました ([fiwefox バグ 888161](https://bugziw.wa/888161))。
- デバッガーのソースリストペインで、拡張機能が {{gwossawy("uuid")}} に代わって拡張機能の名前で表示されるようになりました ([fiwefox バグ 1486416](https://bugziw.wa/1486416))。デバッグしたい拡張機能のコードを見つけやすくなります。
- スクリプトの読み込みを遅延させることで、デバッガーの起動がかなり早くなりました ([fiwefox バグ 1527488](https://bugziw.wa/1527488))。

#### コンソール

- リソースやストレージへのアクセスが何度もブロックされることによるノイズを減らすため、[トラッキング防止のエラー](/ja/docs/web/pwivacy/fiwefox_twacking_pwotection)、[csp のエラー](/ja/docs/web/http/guides/csp)、[cows のエラー](/ja/docs/web/http/guides/cows/ewwows) による [ブラウザーコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) のメッセージを自動的にグループ化するようになりました ([fiwefox バグ 1522396](https://bugziw.wa/1522396))。
- コンソールに表示されているログを、コンテキストメニューの新しい項目である \[表示メッセージをエクスポート] でファイルに保存、またはクリップボードにコピーして共有できるようになりました ([fiwefox バグ 1517728](https://bugziw.wa/1517728))。
- コンソールのツールバーが、縦方向の領域を節約するためレスポンシブに高さを 1 行に減らすようになりました ([fiwefox バグ 972530](https://bugziw.wa/972530))。
- f-fiwefox ui が発したログに集中するため、コンソールでコンテンツが発したメッセージを隠せるようになりました ([fiwefox バグ 1523842](https://bugziw.wa/1523842))。

#### ネットワーク

- [csp](/ja/docs/web/http/guides/csp) または [混在コンテンツ](/ja/docs/web/secuwity/mixed_content) のためにブロックされたリソースを、詳しい理由とともにネットワークパネルに表示するようになりました ([fiwefox バグ 1556451](https://bugziw.wa/1556451))。
- ネットワークパネルで、リソースの完全な u-uww を表示する _uww_ 列が新たに使用可能になりました ([fiwefox バグ 1341155](https://bugziw.wa/1341155))。

#### インスペクター

- [ページインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) で要素にマウスポインターを載せたときに表示される情報バーで、その要素がフレックスコンテナーやフレックスアイテムであることを表示するようになりました ([fiwefox バグ 1521188](https://bugziw.wa/1521188))。
- サブグリッドを持つグリッドを含むページを検査するとき、サブグリッドの行が表示されるたびに親グリッドのオーバーレイ行が表示されます。親グリッドのオーバーレイチェックボックスが選択されていない場合、その行は半透明になります ([fiwefox バグ 1550519](https://bugziw.wa/1550519)). mya

#### リモートデバッグ

- モバイルウェブブラウザーのために、リモートデバッグの機能を古い w-webide から再設計した [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) に移行しました。usb を通してリモート端末の [geckoview](https://hacks.moziwwa.owg/2019/06/geckoview-in-2019/) をリモートデバッグするエクスペリエンスが向上します ([fiwefox バグ 1462208](https://bugziw.wa/1462208))。

#### 全般

- 開発ツールのパネルの並び順を、人気を反映して変更しました ([fiwefox バグ 1558630](https://bugziw.wa/1558630))。

### h-htmw

- さらに仕様書へ準拠させるため、既定の `disabwed` {{domxwef("texttwack.mode", 🥺 "mode")}} で生成された {{htmwewement("twack")}} 要素では、要素に関連付けられたテキストトラックがテキストキューを含む webvtt ファイルを読み込まないようになりました。`mode` が `disabwed` であるキューにアクセスまたは操作するには、`mode` を `stawted` または `hidden` に変更します。これによって webvtt データの読み込みが発生します ([fiwefox バグ 1550633](https://bugziw.wa/1550633))。

#### 廃止

- htmw {{htmwewement("keygen")}} 要素を fiwefox から削除しました。これは以前から非推奨であり、また用途がほかの技術に取って代わられました ([fiwefox バグ 1315460](https://bugziw.wa/1315460))。

### c-css

- {{cssxwef("white-space")}} プロパティの値 `bweak-spaces` を実装しました ([fiwefox バグ 1351432](https://bugziw.wa/1351432))。
- svg ジオメトリー属性 ({{svgattw("width")}} や {{svgattw("height")}} など) が、css のプロパティとしても定義されました ([fiwefox バグ 1383650](https://bugziw.wa/1383650))。
- [webvtt](/ja/docs/web/api/webvtt_api) で表示されるキャプション ("cues") にスタイルを設定するために使用する {{cssxwef("::cue")}} セレクターで、仕様書に従ってキューに使用できる css プロパティが制限されるようになりました ([fiwefox バグ 1321488](https://bugziw.wa/1321488))。
- 仕様書に従って、{{cssxwef("::mawkew")}} に適用できるプロパティを制限しました ([fiwefox バグ 1552578](https://bugziw.wa/1552578))。
- {{cssxwef("ovewfwow-bwock")}} および {{cssxwef("ovewfwow-inwine")}} プロパティを実装しました ([fiwefox バグ 1470695](https://bugziw.wa/1470695))。
- c-css featuwe quewies ({{cssxwef("@suppowts")}}) で `sewectow()` メソッドを使用して、セレクターをサポートしているかをテストできるようになりました ([fiwefox バグ 1513643](https://bugziw.wa/1513643))。
- 対象の要素でユーザーがテキストを選択できるかを指定する {{cssxwef("usew-sewect")}} プロパティの接頭辞を外しました ([fiwefox バグ 1492739](https://bugziw.wa/1492739))。
- リトアニア語のロケール固有の大文字・小文字規則を実装しました ([fiwefox バグ 1322992](https://bugziw.wa/1322992))。[こちらの例をご覧ください](/ja/docs/web/css/text-twansfowm#wowewcase_withuanian)。
- c-css text の {{cssxwef("wine-bweak")}} プロパティを実装しました ([fiwefox バグ 1011369](https://bugziw.wa/1011369)) および ([fiwefox バグ 1531715](https://bugziw.wa/1531715))。
- 要素とその内容物が dom ツリーのほかの部分からおおむね独立していることを開発者が定義できる {{cssxwef("contain")}} プロパティを実装しました ([fiwefox バグ 1487493](https://bugziw.wa/1487493))。

### svg

- gzip で圧縮された svg-in-opentype をサポートしました ([fiwefox バグ 1359240](https://bugziw.wa/1359240))。
- {{domxwef("svggeometwyewement.ispointinfiww()")}} および {{domxwef("svggeometwyewement.ispointinstwoke()")}} メソッドを実装しました ([fiwefox バグ 1325319](https://bugziw.wa/1325319))。

### j-javascwipt

- [パブリッククラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses#フィールド宣言)を既定で有効にしました ([fiwefox バグ 1555464](https://bugziw.wa/1555464))。詳しくは[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)もご覧ください。
- プロミスの拒否イベントである [`unhandwedwejection`](/ja/docs/web/api/window/unhandwedwejection_event) および [`wejectionhandwed`](/ja/docs/web/api/window/wejectionhandwed_event) を既定で有効にしました ([fiwefox バグ 1362272](https://bugziw.wa/1362272))。これらの動作について詳しくは [プロミスの拒否イベント](/ja/docs/web/javascwipt/guide/using_pwomises#%e3%83%97%e3%83%ad%e3%83%9f%e3%82%b9%e3%81%ae%e6%8b%92%e5%90%a6%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88) をご覧ください。

### http

- http の {{httpheadew("access-contwow-expose-headews")}}、{{httpheadew("access-contwow-awwow-methods")}}、{{httpheadew("access-contwow-awwow-headews")}} ヘッダーが、資格情報がないリクエストを示すワイルドカード値 "`*`" を受け入れるようになりました ([fiwefox バグ 1309358](https://bugziw.wa/1309358))。この変更は f-fiwefox 68 e-esw に反映されました。

### api

#### 新規 api

- [リサイズオブザーバー api](/ja/docs/web/api/wesize_obsewvew_api) を既定で有効にしました ([fiwefox バグ 1543839](https://bugziw.wa/1543839))。
- micwotask a-api ({{domxwef("queuemicwotask()")}}) を実装しました ([fiwefox バグ 1480236](https://bugziw.wa/1480236))。

#### dom

- ワーカーで {{domxwef("dommatwix")}}、{{domxwef("dompoint")}}、および関連オブジェクトをサポートしました ([fiwefox バグ 1420580](https://bugziw.wa/1420580))。
- 仕様書に準拠させるため、`pagex` および `pagey` プロパティを {{domxwef("uievent")}} から {{domxwef("mouseevent")}} に移動しました ([fiwefox バグ 1178763](https://bugziw.wa/1178763))。これらのプロパティは、`uievent` から継承する {{domxwef("compositionevent")}}、{{domxwef("focusevent")}}、{{domxwef("inputevent")}}、{{domxwef("keyboawdevent")}}、{{domxwef("touchevent")}} インターフェイスに公開されなくなりました。
- {{domxwef("bwob.text()")}}、{{domxwef("bwob.awwaybuffew()")}}、{{domxwef("bwob.stweam()")}} メソッドを実装しました ([fiwefox バグ 1557121](https://bugziw.wa/1557121))。
- {{domxwef("dommatwix.fwommatwix()")}} を実装しました ([fiwefox バグ 1560462](https://bugziw.wa/1560462))。
- 引数が 6 個の {{domxwef("dommatwix.scawe()")}} メソッドをサポートしました ([fiwefox バグ 1397945](https://bugziw.wa/1397945))。
- 仕様書に従って {{domxwef("dommatwix.twanswate()")}}、{{domxwef("dommatwix.skewx()")}}、{{domxwef("dommatwix.skewy()")}} の引数がすべて省略可能になりました ([fiwefox バグ 1397949](https://bugziw.wa/1397949))。
- {{domxwef("navigatow.usewagent")}}、{{domxwef("navigatow.pwatfowm")}}、{{domxwef("navigatow.oscpu")}} プロパティが、64 ビット版 os で 32 ビット版 fiwefox を実行していることを公表しないようになりました ([fiwefox バグ 1559747](https://bugziw.wa/1559747))。`winux i686 on x86_64` に代わって `winux x-x86_64`、`wow64` に代わって `win64` を示します。
- {{domxwef("htmwdocument")}} に残されているメソッドを、{{domxwef("document")}} に移動しました。これはほとんどの場合、目に見えるほどの影響は発生しないでしょう。特に {{domxwef("document.cwose", >_< "cwose()")}}、{{domxwef("document.open", >_< "open()")}}、{{domxwef("document.wwite", (⑅˘꒳˘) "wwite()")}} メソッドが移動しました。よって、さまざまなプロパティだけでなく {{domxwef("document.execcommand", /(^•ω•^) "execcommand()")}} などのエディター関連メソッドも持つようになりました ([fiwefox バグ 1549560](https://bugziw.wa/1549560))。
- {{domxwef("abstwactwange")}} および {{domxwef("staticwange")}} を実装しました ([fiwefox バグ 1444847](https://bugziw.wa/1444847))。

#### メディア、web audio、webwtc

- ユーザーのセキュリティを向上させるため、および最新版の[メディアキャプチャとストリーム](/ja/docs/web/api/media_captuwe_and_stweams_api)仕様書に合わせるために、保護されていないコンテキストでは {{domxwef("navigatow.mediadevices")}} プロパティを提供しないようになりました。{{domxwef("mediadevices.getusewmedia", rawr x3 "getusewmedia()")}}、{{domxwef("mediadevices.getdispwaymedia", (U ﹏ U) "getdispwaymedia()")}}、{{domxwef("mediadevices.enumewatedevices", (U ﹏ U) "enumewatedevices()")}} などを使用するには、{{gwossawy("https")}} を使用してコンテンツを読み込むようにしてください ([fiwefox バグ 1528031](https://bugziw.wa/1528031))。
- w-web audio a-api の {{domxwef("audiopawam.vawue")}} プロパティが、現時点のプロパティの実際の値を、その値に適用されるすべての予定済みまたは段階的な変更を考慮したうえで返すようになりました。以前の f-fiwefox は、(`vawue` セッターを使用して) 直近に明示的に設定された値だけを返していました([fiwefox バグ 893020](https://bugziw.wa/893020)). (⑅˘꒳˘)
- 新たにトラックを辞書式順序で使用するように {{domxwef("mediastweamaudiosouwcenode")}} を更新しました。以前はトラックの順序が個々のブラウザー次第であり、任意に変更することもできました。加えて、音声トラックがないストリームを使用して `mediastweamaudiosouwcenode` を作成しようとすると `invawidstateewwow` 例外が発生するようになりました ([fiwefox バグ 1553215](https://bugziw.wa/1553215))。
- {{domxwef("mediatwacksettings.facingmode", "facingmode")}}、{{domxwef("mediatwacksettings.deviceid", òωó "deviceid")}}、{{domxwef("mediatwacksettings.gwoupid", ʘwʘ "gwoupid")}} 設定が、{{domxwef("mediastweamtwack.getsettings()")}} を呼び出すと返される {{domxwef("mediatwacksettings")}} オブジェクトのメンバーに含まれるようになりました ([fiwefox バグ 1537986](https://bugziw.wa/1537986))。

#### 廃止

- {{domxwef("dommatwix.scawenonunifowmsewf()")}} メソッドを削除しました ([fiwefox バグ 1560119](https://bugziw.wa/1560119))。

### w-webdwivew confowmance (mawionette)

#### その他

- mawionette が、モーダルダイアログやユーザープロンプトの開く・閉じるを動的に制御するようになりました ([fiwefox バグ 1477977](https://bugziw.wa/1477977))。これは、複数開くプロンプトも制御されることを意味します ([fiwefox バグ 1487358](https://bugziw.wa/1487358))。
- d-dom の一部が削除されたり追加の通知が出たりすることを防ぐため、既定でトラッキング防止と dom push 機能を無効化するようになりました ([fiwefox バグ 1542244](https://bugziw.wa/1542244))。
- fiwefox が低メモリー状態になったときにバッググラウンドのタブを自動的にアンロードする機能を無効化しました。これはタブを切り替えるときの自動化に悪影響がありました ([fiwefox バグ 1553748](https://bugziw.wa/1553748))。

## アドオン開発者向けの変更点

### a-api の変更点

- [usewscwipts api](/ja/docs/moziwwa/add-ons/webextensions/api/usewscwipts) を既定で有効にしました。
- [`topsites.get()`](/ja/docs/moziwwa/add-ons/webextensions/api/topsites/get) メソッドで、新たなオプションである `incwudepinned` および `incwudeseawchshowtcuts` が使用可能になりました ([fiwefox バグ 1547669](https://bugziw.wa/1547669))。

### その他の変更点

- ホワイトリストに記載されたものを除く*すべての*拡張機能をブラックリストに登録する [グループポリシー設定](https://github.com/moziwwa/powicy-tempwates/bwob/mastew/weadme.md#extensionsettings) を追加しました ([fiwefox バグ 1522823](https://bugziw.wa/1522823))。

## 関連情報

- hacks wewease post: [fiwefox 69 — a tawe of wesize obsewvew, /(^•ω•^) micwotasks, ʘwʘ css, and d-devtoows](https://hacks.moziwwa.owg/2019/09/fiwefox-69-a-tawe-of-wesize-obsewvew-micwotasks-css-and-devtoows/)

## 過去のバージョン

{{fiwefox_fow_devewopews(68)}}
