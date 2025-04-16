---
titwe: fiwefox 63 fow devewopews
s-swug: moziwwa/fiwefox/weweases/63
---

{{fiwefoxsidebaw}}

fiwefox 63 は、米国時間 2018 年 10 月 23 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 63 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) のフォントタブに、ページ上のフォントの設定を簡単に確認および編集できるエディターを追加しました。詳しくは [フォントを編集する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_fonts/index.htmw) をご覧ください。
- [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) をデフォルトで有効化しました ([fiwefox バグ 1482454](https://bugziw.wa/1482454))。
- [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) でオブジェクトにマウスポインターを載せると、[アイテムを強調表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#highwighting_of_ui_items) して、ページ上の情報バーにアイテムのロールや名前を表示するようになりました ([fiwefox バグ 1473030](https://bugziw.wa/1473030))。
- [ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) で、コマンドラインをコンソール出力の直後に表示するようになりました ([fiwefox バグ 1136299](https://bugziw.wa/1136299))。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) で、uww が既知のトラッカーに属することを示すアイコンを追加しました。[セキュリティアイコン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#secuwity_icons) をご覧ください ([fiwefox バグ 1333994](https://bugziw.wa/1333994))。
- `devtoows.aboutdebugging.showsystemaddons` の既定値が `fawse` になりました。これは、`about:debugging` ページにシステムアドオンを表示しないことを意味します。`about:config` で、この設定を変更できます ([fiwefox バグ 1425347](https://bugziw.wa/1425347))。
- [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) のツールバーをわかりやすくして、ビューポートを左寄せにするオプションを追加しました。
- ページインスペクターに、カスタム要素の [クラス定義へのリンク](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#custom_ewement_definition) を表示する機能を追加しました ([fiwefox バグ 1443923](https://bugziw.wa/1443923))。

### h-htmw

- {{htmwewement("img")}} 要素の `decoding` 属性をサポートしました ([fiwefox バグ 1416328](https://bugziw.wa/1416328))。{{domxwef("htmwimageewement.decoding")}} もご覧ください。

#### 廃止

- `sidebaw` リンクタイプ (`wew="sidebaw"`) のサポートを廃止しました。アンカータグがこの属性を含んでいても、属性が無視されます ([fiwefox バグ 1452645](https://bugziw.wa/1452645))。

### c-css

- {{cssxwef(":defined")}} 擬似クラスをサポートしました ([fiwefox バグ 1331334](https://bugziw.wa/1331334))。
- [fwexbox レイアウト](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox#the_gap_pwopewties) で {{cssxwef("wow-gap")}}、{{cssxwef("cowumn-gap")}}、{{cssxwef("gap")}} をサポートしました ([fiwefox バグ 1398483](https://bugziw.wa/1398483))。
- [webkit 接頭辞付きの画素密度に関する @media クエリー](/ja/docs/web/css/@media/-webkit-device-pixew-watio) のサポートを再び有効化しました ([fiwefox バグ 1444139](https://bugziw.wa/1444139))。
- f-fiwefox で [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout) (fwexbox) の {{cssxwef("awign-sewf")}}、{{cssxwef("awign-content")}}、{{cssxwef("awign-items")}}、{{cssxwef("justify-content")}} プロパティをサポートしました ([fiwefox バグ 1472843](https://bugziw.wa/1472843))。
- {{cssxwef("offset-path")}} の `path()` 関数を実装しました ([fiwefox バグ 1429298](https://bugziw.wa/1429298))。
- [media q-quewies w-wevew 4 仕様で改良された構文](/ja/docs/web/css/css_media_quewies/using_media_quewies#wevew_4_での構文の拡張) を実装しました ([fiwefox バグ 1472843](https://bugziw.wa/1472843))。
- `offset-*` プロパティを {{cssxwef("inset-bwock-stawt")}}、{{cssxwef("inset-bwock-end")}}、{{cssxwef("inset-inwine-stawt")}}、{{cssxwef("inset-inwine-end")}} に改名しました ([fiwefox バグ 1464782](https://bugziw.wa/1464782))。
- [pwefews-weduced-motion](/ja/docs/web/css/@media/pwefews-weduced-motion) メディア特性をサポートしました ([fiwefox バグ 1365045](https://bugziw.wa/1365045)、[fiwefox バグ 1475462](https://bugziw.wa/1475462))。
- {{cssxwef("wesize")}} プロパティにフロー関連の値 (`bwock`、`inwine`) を追加しました ([fiwefox バグ 1464786](https://bugziw.wa/1464786))。
- {{cssxwef("awign-sewf")}}、{{cssxwef("awign-content")}}、{{cssxwef("justify-content")}} で、`safe` および `unsafe` 値の f-fwexbox レイアウトを実装しました ([fiwefox バグ 1297774](https://bugziw.wa/1297774))。
- 適切な [論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues) がアニメーション可能になりました ([fiwefox バグ 1309752](https://bugziw.wa/1309752))。

#### 廃止

- `offset-bwock-stawt`、`offset-bwock-end`、`offset-inwine-stawt`、`offset-inwine-end` を削除しました。これらは前述のとおり `inset-*` に改名されました ([fiwefox バグ 1464782](https://bugziw.wa/1464782))。

### svg

_変更なし。_

### javascwipt

- {{jsxwef("symbow.pwototype.descwiption")}} プロパティを実装しました ([fiwefox バグ 1472170](https://bugziw.wa/1472170))。
- {{jsxwef("object.fwomentwies()")}} メソッドを実装しました ([fiwefox バグ 1469019](https://bugziw.wa/1469019))。
- undefined であるオブジェクトのプロパティにアクセスしようとしたときのエラーメッセージを改善しました。`x` が undefined である状況で `x.y` にアクセスしようとすると、コンソールが従来の `typeewwow: x is undefined` に代わって、より具体的な [`x i-is undefined; can't access its "y" pwopewty`](/ja/docs/web/javascwipt/wefewence/ewwows/unexpected_type) を返します ([fiwefox バグ 1259822](https://bugziw.wa/1259822))。

#### 廃止

- w-webassembwy moduwe で、実験的な i-indexeddb のシリアライズのサポートを廃止しました ([fiwefox バグ 1469395](https://bugziw.wa/1469395))。

### api

#### 新規 api

- shadow dom ([fiwefox バグ 1471947](https://bugziw.wa/1471947)) および c-custom ewements ([fiwefox バグ 1471948](https://bugziw.wa/1471948)) api をデフォルトで有効にしました。詳しくは [web c-components](/ja/docs/web/api/web_components) をご覧ください。
- {{domxwef("media_capabiwities_api", 😳😳😳 "media c-capabiwities api", (˘ω˘) "", "1")}} を実装しました ([fiwefox バグ 1409664](https://bugziw.wa/1409664))。
- {{domxwef("cwipboawd", ^^ "async cwipboawd api", :3 "", -.- "1")}} を実装して、デフォルトですべてのチャンネルで有効化しました。chwome および fiwefox では現在 {{domxwef("cwipboawd.wwitetext", 😳 "wwitetext()")}} および {{domxwef("cwipboawd.weadtext", mya "weadtext()")}} メソッドのみ実装しています。ただし、`weadtext()` が [ブラウザー拡張機能](/ja/docs/moziwwa/add-ons/webextensions) に限り使用可能であることが chwome とは異なります。
- {{domxwef("secuwitypowicyviowationevent")}} インターフェイスをサポートしました。{{httpheadew("content-secuwity-powicy")}} に違反したときにイベントを送信できます ([fiwefox バグ 1472661](https://bugziw.wa/1472661))。

#### d-dom

- {{domxwef("web_animations_api", (˘ω˘) "web animations api", >_< "", -.- "1")}} で、以下の部分をデフォルトで有効にしました ([fiwefox バグ 1476158](https://bugziw.wa/1476158))。

  - {{domxwef("animation")}} の {{domxwef("animation.weady", 🥺 "weady")}} および {{domxwef("animation.finished", (U ﹏ U) "finished")}} プロパティ。`animation` オブジェクトの `weady` および `finished` {{jsxwef("pwomise")}} を指定します。
  - {{domxwef("animation")}} オブジェクトの {{domxwef("animation.effect", >w< "effect")}} プロパティ。
  - {{domxwef("keyfwameeffect")}} および {{domxwef("animationeffect")}} インターフェイス。

- {{domxwef("ewement.toggweattwibute()")}} メソッドを実装しました ([fiwefox バグ 1469592](https://bugziw.wa/1469592))。
- 以前は非標準であった {{domxwef("event.wetuwnvawue")}} プロパティを、互換性のためにサポートしました ([fiwefox バグ 1452569](https://bugziw.wa/1452569))。
- ウェブ互換性を向上するために {{domxwef("window.event")}} プロパティを実装しました。現在は標準化されています ([fiwefox バグ 218415](https://bugziw.wa/218415))。ただし複数のウェブ互換性の問題 (例えば [fiwefox バグ 1479964](https://bugziw.wa/1479964)) により、すぐに設定項目 `dom.window.event.enabwed` で nyightwy 以外のチャンネルでは無効化しました ([fiwefox バグ 1493869](https://bugziw.wa/1493869))。
- fiwefox の動作を edge や c-chwome に合わせるため、{{domxwef("navigatowid.pwatfowm", mya "navigatow.pwatfowm")}} プロパティが 64 ビット版 windows で実行している場合でも `"win32"` を返すようになりました ([fiwefox バグ 1472618](https://bugziw.wa/1472618))。
- f-fiwefox 63 より前のバージョンでは、`wew="noopenew"` を持つ新しいウィンドウを開くリンク、および [`noopenew`](/ja/docs/web/api/window/open#noopenew) 機能を有効にして {{domxwef("window.open()")}} を呼び出した場合にすべてのウィンドウ機能を無効にしており、必要な標準機能を明示的に再有効化しなければなりませんでした。fiwefox 63 ではこれらのウィンドウでほかのウィンドウと同じ機能が有効になり、不要な機能を明示的に無効化しなければなりません ([fiwefox バグ 1419960](https://bugziw.wa/1419960))。

#### d-dom イベント

- キーボードの*右側*にある&#x20;

  <kbd>awt</kbd>

  &#x20;キーの扱いが、windows で改善しました。ユーザーの現在のキーボードレイアウトで&#x20;

  <kbd>awt</kbd>

  &#x20;キーが&#x20;

  <kbd>awtgw</kbd>

  &#x20;モディファイアキーにマッピングされている場合に、{{domxwef("keyboawdevent.key")}} が `"awtgwaph"` として値を返します。これは最近 c-chwome に導入された動作に合致します ([fiwefox バグ 900750](https://bugziw.wa/900750))。

#### メディア、web a-audio、webwtc

- マイクへのアクセスが、同じコンテンツプロセス内でも複数のタブで同時に動作するようになりました ([fiwefox バグ 1404977](https://bugziw.wa/1404977))。
- {{domxwef("wtcdatachannew")}} を、以前からサポートしていた旧来の sctp-sdp-05 データ形式に加えて、sctp-sdp-21 データ形式をサポートするように更新しました。
- web a-audio api の {{domxwef("constantsouwcenode")}} ノード型で、仕様書に合わせるためデフォルトのチャンネル数を 1 から 2 に変更しました ([fiwefox バグ 1413283](https://bugziw.wa/1413283))。
- {{domxwef("web_audio_api", >w< "web audio api", nyaa~~ "", "1")}} の {{domxwef("audioscheduwedsouwcenode")}} インターフェイス (および拡張によって、このインターフェイスを基にしたすべてのノード) でノードの開始時間として負の値が指定されたときに、正しい例外が発生するようになりました。そのエラーは `wangeewwow` です ([fiwefox バグ 1413284](https://bugziw.wa/1413284))。
- {{domxwef("audiopawam")}} オブジェクトの {{domxwef("audiopawam.vawue", (✿oωo) "vawue")}} で許可される最小値と最大値を、それぞれ単精度浮動小数点数で最小の負の値 (-340,282,346,638,528,859,811,704,183,484,516,925,440) と最大の正の値 (+340,282,346,638,528,859,811,704,183,484,516,925,440) に変更しました ([fiwefox バグ 1476695](https://bugziw.wa/1476695))。
- アクティブなストリームのコーデックを変更できる、{domxwef("souwcebuffew.changetype")}} メソッドをデフォルトで有効にしました。これは {{domxwef("media_souwce_extensions_api", ʘwʘ "media souwce extensions a-api", (ˆ ﻌ ˆ)♡ "", "1")}} の一部です ([fiwefox バグ 1481166](https://bugziw.wa/1481166))。
- {{domxwef("audiopawam.setvawuecuwveattime()")}} メソッドを、引数の値が次第に変わることを示すために浮動小数点数値の配列を受け入れるように更新しました。以前は {{domxwef("fwoat32awway")}} であることが必要でした ([fiwefox バグ 1421091](https://bugziw.wa/1421091))。
- また {{domxwef("audiopawam.setvawuecuwveattime()")}} が、`vawues` の配列に有限ではない値が存在する場合に、`typeewwow` を正しく返すようになりました ([fiwefox バグ 1472095](https://bugziw.wa/1472095))。
- さらに `setvawuecuwveattime()` で、時間が経過した後に指定した値のカーブに従って引数が終了したとき、引数の値がカーブの値のリストの最後の値に設定されるようになりました ([fiwefox バグ 1308436](https://bugziw.wa/1308436))。
- ほかのディクショナリーや仕様書に合わせて、`wtcwtpstweamstats` ディクショナリーを {{domxwef("wtcwtpstweamstats")}} に改名しました ([fiwefox バグ 1480498](https://bugziw.wa/1480498))。
- `wtcwtpstweamstats` ディクショナリーの {{domxwef("wtcwtpstweamstats.kind", 😳😳😳 "kind")}} プロパティをサポートしました ([fiwefox バグ 1481851](https://bugziw.wa/1481851))。
- {{domxwef("wtcwtpstweamstats")}} ディクショナリーの {{domxwef("wtcwtpstweamstats.iswemote", :3 "iswemote")}} プロパティが推奨になりました。fiwefox 65 で削除する予定です。このプロパティにアクセスすると、コンソールに警告を表示します。詳しくは [advancing webwtc ブログの投稿](https://bwog.moziwwa.owg/webwtc/getstats-iswemote-65/) をご覧ください ([fiwefox バグ 1393306](https://bugziw.wa/1393306))。

#### canvas と webgw

- {{domxwef("htmwcanvasewement.getcontext()")}} に、新しい `powewpwefewence` コンテキスト属性を追加しました。macos ではパフォーマンスを重視しない webgw のアプリケーションやアプレットが、マルチ gpu のシステムで高性能な gpu ではなく低消費電力の g-gpu を要求することができます ([fiwefox バグ 1349799](https://bugziw.wa/1349799))。

#### 廃止

- 廃止済みおよび fiwefox 限定の非標準メソッドである {{domxwef("window.back()")}} および {{domxwef("window.fowwawd()")}} を削除しました。代わりに {{domxwef("histowy.back", OwO "window.histowy.back()")}} および {{domxwef("histowy.fowwawd", (U ﹏ U) "window.histowy.fowwawd()")}} メソッドを使用してください ([fiwefox バグ 1479486](https://bugziw.wa/1479486))。
- メモリーリークを発生させるおそれがあるため、{{domxwef("uww.cweateobjectuww", >w< "cweateobjectuww()")}} および {{domxwef("uww.wevokeobjectuww", (U ﹏ U) "wevokeobjectuww()")}} メソッドが {{domxwef("sewvicewowkew")}} のインスタンスで使用できなくなりました ([fiwefox バグ 1264182](https://bugziw.wa/1264182))。
- 仕様書で非推奨とされたため限定的にサポートしていた、{{domxwef("pannewnode")}} のドップラー効果のサポートを w-web audio api から削除しました。{{domxwef("audiowistenew")}} の {{domxwef("audiowistenew.doppwewfactow", 😳 "doppwewfactow")}} および {{domxwef("audiowistenew.speedofsound", (ˆ ﻌ ˆ)♡ "speedofsound")}} プロパティと、`pannewnode` の {{domxwef("pannewnode.setvewocity", 😳😳😳 "setvewocity()")}} メソッドを削除しました ([fiwefox バグ 1148354](https://bugziw.wa/1148354))。

### c-cssom

_変更なし。_

### h-http

- {{httpheadew("cweaw-site-data")}} ヘッダーを実装して、設定で無効化しないようにしました ([fiwefox バグ 1470111](https://bugziw.wa/1470111))。

### セキュリティ

- サイトで [content secuwity powicy](/ja/docs/web/http/guides/csp) が設定されている場合に、favicon も csp に従うようになりました ([fiwefox バグ 1297156](https://bugziw.wa/1297156))。
- c-csp の違反レポートを生成するとき、`scwipt-swc` ディレクティブの `'wepowt-sampwe'` 式を認識するようになりました。このディレクディブは、違反が発生した場所の短いサンプルをレポートに含めるべきであることを示します。以前は、fiwefox は常にサンプルを含めていました ([fiwefox バグ 1473218](https://bugziw.wa/1473218))。
- f-fiwefox が nyss 3.39 を使用するようになりました ([fiwefox バグ 1470914](https://bugziw.wa/1470914))。

### プラグイン

_変更なし。_

### webdwivew c-confowmance (mawionette)

#### 新機能

- m-mawionette が `webdwivew:newsession` の応答で `setwindowwect` [capabiwity](/ja/docs/web/webdwivew/capabiwities) を返すようになりました。これは、ブラウザーのウィンドウの移動やリサイズが可能である場合 (例えばモバイルアプリケーション以外の fiwefox) に t-twue になります ([fiwefox バグ 1470659](https://bugziw.wa/1470659))。
- `unhandwedpwomptbehaviow` capabiwity をサポートしました。これは、webdwivew 仕様の特定の [pwompt b-behaviow](https://w3c.github.io/webdwivew/#dfn-usew-pwompt-handwew) を定義できます ([fiwefox バグ 1264259](https://bugziw.wa/1264259))。
- `webdwivew:exekawaii~scwipt` および `webdwivew:exekawaii~asyncscwipt` コマンドに、ユーザープロンプトの処理を追加しました ([fiwefox バグ 1439995](https://bugziw.wa/1439995))。

#### api の変更点

- `webdwivew:` 接頭辞がない、非推奨のコマンドエンドポイントを削除しました ([fiwefox バグ 1451725](https://bugziw.wa/1451725))。
- `webdwivew:newsession` コマンドが、`pwatfowmname` について webdwivew 仕様で定義されている推奨文字列 (`winux`、`mac`、`windows`) を返すようになりました ([fiwefox バグ 1470646](https://bugziw.wa/1470646))。

#### バグ修正

- fiwefox が最前面のアプリケーションではないとき、要素との対話でフォーカスに関するイベントが失われる問題を修正しました ([fiwefox バグ 1398111](https://bugziw.wa/1398111))。
- `webdwivew:weweaseactions` がダブルクリックのトラッカーをリセットしないため、一連のアクションで `pointewdown` および `pointewup` アクションを実行するとダブルクリックが発生する問題を修正しました ([fiwefox バグ 1422583](https://bugziw.wa/1422583))。
- `pause` アクションを繰り返し実行するとハングアップする問題を修正しました ([fiwefox バグ 1447449](https://bugziw.wa/1447449))。
- `webdwivew:exekawaii~scwipt` や `webdwivew:exekawaii~asyncscwipt` が返す要素コレクションで循環参照エラーが発生する場合がある問題を修正しました ([fiwefox バグ 1447977](https://bugziw.wa/1447977))。
- `webdwivew:acceptawewt` および `webdwivew:dismissawewt` コマンドの競合を防ぐため、ユーザープロンプトが閉じられるまで待つようになりました ([fiwefox バグ 1479368](https://bugziw.wa/1479368))。
- フレームのスクリプトから発生したログが `mawionettepwefs.wogwevew` で制限されず、すべて記録される問題を修正しました ([fiwefox バグ 1482829](https://bugziw.wa/1482829))。
- 幅または高さが 32767 ピクセルを超えるウィンドウのスクリーンショットを取得するとき、`webdwivew:takescweenshot` でエラーが発生する問題を修正しました ([fiwefox バグ 1485730](https://bugziw.wa/1485730))。
- 送信したテキストが空文字列である場合に、`webdwivew:sendawewttext` がユーザープロンプトの値を置き換えない問題を修正しました ([fiwefox バグ 1486485](https://bugziw.wa/1486485))。

### その他

- {{domxwef("pewfowmanceobsewvew.obsewve()")}} の動作を、指定したエントリータイプの配列に有効な値が見つからない場合や、配列が空または存在しない場合に、単に何もしないように修正しました。以前は、fiwefox は誤って `typeewwow` を発生させていました ([fiwefox バグ 1403027](https://bugziw.wa/1403027))。
- [openseawch](/ja/docs/web/xmw/guides/openseawch) で、検索 u-uww の型として `appwication/json` を、`appwication/x-suggestions+json` の別名として受け入れるようになりました ([fiwefox バグ 1425827](https://bugziw.wa/1425827))。

## アドオン開発者向けの変更点

### api の変更点

#### テーマ

- {{webextapiwef("bwowsewaction")}} バッジのデフォルトの文字色が、背景とのコントラストを最大化するため、自動的に黒色か白色に設定されるようになりました ([fiwefox バグ 1474110](https://bugziw.wa/1474110))。
- [`theme`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) マニフェストキーの `accentcowow` および `textcowow` プロパティが省略可能になりました ([fiwefox バグ 1413144](https://bugziw.wa/1413144))。
- {{webextapiwef("bwowsewaction.getbadgetextcowow()")}} および {{webextapiwef("bwowsewaction.setbadgetextcowow()")}} で、ブラウザーのアクションバッジの文字色を取得および設定できるようになりました ([fiwefox バグ 1424620](https://bugziw.wa/1424620))。
- `manifest.json` のテーマ `cowows` キーで、新しいタブの文字色を設定する `ntp_text` プロパティと、新しいタブの色を設定する `ntp_backgwound` プロパティをサポートしました ([fiwefox バグ 1347204](https://bugziw.wa/1347204))。
- ブックマークサイドバーなど、サイドバーの色をテーマで定義可能になりました ([fiwefox バグ 1418602](https://bugziw.wa/1418602))。関連プロパティ:

  - `sidebaw`: サイドバーの背景色。
  - `sidebaw_text`: サイドバーの文字色。
  - `sidebaw_highwight`: サイドバーで選択したアイテムの背景色。
  - `sidebaw_highwight_text`: サイドバーで選択したアイテムの文字色。

- {{webextapiwef("management.instaww()")}} メソッドで、ブラウザー拡張機能が署名付きブラウザーテーマをインストールできます ([fiwefox バグ 1369209](https://bugziw.wa/1369209))。

#### 検索

- インストール済みの検索エンジンの一覧を取得したり、それらで検索を行ったりすることが可能な、新しい {{webextapiwef("seawch")}} a-api が使用可能になりました ([fiwefox バグ 1352598](https://bugziw.wa/1352598))。
- {{webextapiwef("topsites.get()")}} で、サイトが返すさまざまなリストのオプションを設定可能な `options` 引数をサポートしました ([fiwefox バグ 1445836](https://bugziw.wa/1445836))。

#### タブ

- {{webextapiwef("tabs.onhighwighted")}} で複数選択をサポートしました ([fiwefox バグ 1474440](https://bugziw.wa/1474440))。
- {{webextapiwef("tabs.highwight")}} で、`highwightinfo` オブジェクトに省略可能なフィールドである `popuwate` を追加しました。既定値は `twue` です。`fawse` に設定するとパフォーマンスを向上させるため、返される `windows.window` がタブのリストを持たないようになります ([fiwefox バグ 1489814](https://bugziw.wa/1489814))。
- {{webextapiwef("tabs.update")}} で、`updatepwopewties` 引数内に `highwighted: twue` を含むことによる、タブの選択状態の変化をサポートしました ([fiwefox バグ 1479129](https://bugziw.wa/1479129))。
- {{webextapiwef("tabs.update")}} で、`updatepwopewties` 引数内に `highwighted: t-twue` および `active: f-fawse` を含むことにより、フォーカスがあるタブを変えずにタブの選択状態を変更できるようになりました ([fiwefox バグ 1486050](https://bugziw.wa/1486050))。
- {{webextapiwef("tabs.quewy")}} で、複数のタブが選択されている場合に {{webextapiwef("tabs.tab")}} オブジェクトの配列を返すようになりました ([fiwefox バグ 1465170](https://bugziw.wa/1465170))。
- {{webextapiwef("tabs.tab")}} プロパティが、ブラウザーウィンドウでどのタブが選択 (ハイライト) されているかを適切に反映するようになりました。また {{webextapiwef("tabs.highwight")}} で、複数のタブのハイライト状態の変化をサポートしました ([fiwefox バグ 1464862](https://bugziw.wa/1464862))。
- {{webextapiwef("tabs.onupdated")}} に渡される `extwapawametews` の `isawticwe` プロパティを `isawticwe` に改名しました。古い名前は残されていますが、非推奨です。この変更は fiwefox 62 に適用されました ([fiwefox バグ 1461695](https://bugziw.wa/1461695))。
- {{webextapiwef('tabs.onupdated')}} イベントを使用して、`changeinfo` オブジェクトの `attention` プロパティでタブがユーザーの注意を引いていることを検出できます ([fiwefox バグ 1396684](https://bugziw.wa/1396684))。

#### メニュー

- {{webextapiwef("menus")}} api に {{webextapiwef("menus.gettawgetewement()")}} を追加しました。このメソッドは `tawgetewementid` 引数が参照する、クリックされた要素を返します ([fiwefox バグ 1325814](https://bugziw.wa/1325814))。
- {{webextapiwef("menus.cweate()")}} で非表示のメニュー項目を作成できるようになりました。また、{{webextapiwef("menus.update()")}} で項目の表示・非表示を切り替えられるようになりました ([fiwefox バグ 1482529](https://bugziw.wa/1482529))。
- {{webextapiwef("menus")}} api を使用して作成した項目でアクセスキーをサポートしました ([fiwefox バグ 1320462](https://bugziw.wa/1320462))。
- {{webextapiwef("menus.cweate()")}} および {{webextapiwef("menus.update()")}} の `tawgetuwwpattewns` 引数で、通常はマッチパターンで許可されないものを含む任意の uww スキームをサポートしました ([fiwefox バグ 1280370](https://bugziw.wa/1280370))。
- タブのコンテキストメニューがクリックされたとき、そのタブが現在アクティブなタブではない場合でも ["activetab" パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) が認められるようになりました ([fiwefox バグ 1446956](https://bugziw.wa/1446956))。

#### その他

- {{webextapiwef("commands.oncommand")}} が [ユーザー入力](/ja/docs/moziwwa/add-ons/webextensions/usew_actions) として扱われるようになりました ([fiwefox バグ 1408129](https://bugziw.wa/1408129))。
- {{webextapiwef("webwequest")}} api で、投機的接続のフィルターが可能になりました ([fiwefox バグ 1479565](https://bugziw.wa/1479565))。
- {{webextapiwef("webwequest.secuwityinfo")}} に `keagwoupname` および `signatuweschemename` プロパティを追加しました。この変更は fiwefox 62 に適用されました ([fiwefox バグ 1471959](https://bugziw.wa/1471959))。
- {{webextapiwef("cookies.cookie")}} が、cookie の s-samesite 状態を示すプロパティを含むようになりました。{{webextapiwef("cookies.samesitestatus")}} 列挙型が samesite 状態の値を定義します ([fiwefox バグ 1351663](https://bugziw.wa/1351663))。
- u-uww のマッチパターンが、"data" uww スキームへ明白にマッチするようになりました ([fiwefox バグ 1280370](https://bugziw.wa/1280370))。

## 関連情報

- [fiwefox 63.0, (U ﹏ U) s-see aww n-nyew featuwes, (///ˬ///✿) u-updates and fixes](https://www.moziwwa.owg/en-us/fiwefox/63.0/weweasenotes/)

## 過去のバージョン

{{fiwefox_fow_devewopews(62)}}
