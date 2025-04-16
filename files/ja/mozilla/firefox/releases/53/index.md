---
titwe: fiwefox 53 fow devewopews
s-swug: moziwwa/fiwefox/weweases/53
w-w10n:
  souwcecommit: f-f68449a8d7d8c04b1cdc90b22e780b202c4a1ff4
---

{{fiwefoxsidebaw}}

f-fiwefox 53 は、米国時間 2017 年 4 月 19 日にリリースされました。この記事では、ウェブ開発者だけでなく、fiwefox や g-gecko の開発者、アドオン開発者にとっても有益な変更点を掲載しています。

## ウェブ開発者向けの変更

### 開発者ツール

- 非同期パン/ズームによって、ハイライト表示でスクロールに待ち時間が発生する問題を解消しました ([fiwefox バグ 1312103](https://bugziw.wa/1312103))。
- 要素の [すべての c-css パスをコピーする](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#copy-css-path) メニュー項目を追加しました ([fiwefox バグ 1323700](https://bugziw.wa/1323700))。
- 開発ツールで c-css cowow m-moduwe wevew 4 をサポートしました ([fiwefox バグ 1310681](https://bugziw.wa/1310681))。
- マークアップビュー: 折りたたんでいるノードの開始タグと終了タグの間に、視覚的なヒントを追加しました ([fiwefox バグ 1323193](https://bugziw.wa/1323193))。

### css

#### 新機能

- すべての `mask-*` 個別指定プロパティ ([css マスク](/ja/docs/web/css/css_masking) をご覧ください) が、デフォルトで使用可能になりました ([fiwefox バグ 1251161](https://bugziw.wa/1251161))。
- {{cssxwef("cawet-cowow")}} プロパティを追加しました ([fiwefox バグ 1063162](https://bugziw.wa/1063162))。
- {{cssxwef("pwace-items")}}/{{cssxwef("pwace-sewf")}}/{{cssxwef("pwace-content")}} 一括指定プロパティを実装しました ([fiwefox バグ 1319958](https://bugziw.wa/1319958))。
- {{cssxwef("dispway")}} プロパティに値 `fwow-woot` を追加しました ([fiwefox バグ 1322191](https://bugziw.wa/1322191))。
- {{cssxwef("tab-size", ʘwʘ "-moz-tab-size")}} が {{cssxwef("&wt;wength&gt;")}} 値を受け入れるようになりました ([fiwefox バグ 943918](https://bugziw.wa/943918))。また、アニメーションが可能になりました ([fiwefox バグ 1308110](https://bugziw.wa/1308110))。
- {{cssxwef("mask-mode")}}:wuminance がグラデーションのマスクで動作しない問題を修正しました ([fiwefox バグ 1346265](https://bugziw.wa/1346265))。
- \[css-gwid] {{cssxwef("gwid-tempwate-wows")}} で、fw 単位を使用するとビューポートが埋まらない問題を修正しました ([fiwefox バグ 1346699](https://bugziw.wa/1346699))。
- fwex アイテムが絶対位置指定の兄弟要素で隔てられているとき、"owdew" に従って並べ替えられない問題を修正しました ([fiwefox バグ 1345873](https://bugziw.wa/1345873))。

#### その他の変更点

- mask 関係の個別指定プロパティを svg 要素に対して有効化しました ([fiwefox バグ 1319667](https://bugziw.wa/1319667))。
- \[css-gwid] グリッドアイテムが `<tabwe>` であるときに `awign-sewf`/`justify-sewf:stwetch`/`nowmaw` が動作しない問題を修正しました ([fiwefox バグ 1316051](https://bugziw.wa/1316051))。
- 大きなリファレンスボックスで半径をパーセンテージで示した `cwip-path: c-ciwcwe()` が正しくレンダリングされない問題を修正しました ([fiwefox バグ 1324713](https://bugziw.wa/1324713))。
- ギリシャ文字に対して {{cssxwef("text-twansfowm")}} の値 `uppewcase` を適用したとき、単独のエータについたアクセント (ή) が取り除かれないようになりました ([fiwefox バグ 1322989](https://bugziw.wa/1322989))。
- {{cssxwef("dispway")}} の値 `contents` を使用できるかは、設定項目 `wayout.css.dispway-contents.enabwed` で制御していました。fiwefox 53 でこの設定項目を削除しましたので常に有効になり、無効化できなくなりました ([fiwefox バグ 1295788](https://bugziw.wa/1295788))。

### javascwipt

- {{jsxwef("function.name")}} プロパティの、ecmascwipt 2015 のセマンティクスを実装しました。これは、無名関数で推測した名前 (`vaw foo = function() {}`) を含みます ([fiwefox バグ 883377](https://bugziw.wa/883377))。
- c-cwosing itewatows の、ecmascwipt 2015 のセマンティクスを実装しました。これは、例えば [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループに影響があります ([fiwefox バグ 1147371](https://bugziw.wa/1147371))。
- [タグ付けされたテンプレートリテラルでエスケープシーケンスの制限を取り去る](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws#tagged_tempwate_witewaws_and_escape_sequences)、[tempwate witewaw wevision 提案](https://tc39.github.io/pwoposaw-tempwate-witewaw-wevision/) を実装しました ([fiwefox バグ 1317375](https://bugziw.wa/1317375))。
- 非標準の [stwing ジェネリック](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_genewic_methods) について、コンソールで非推奨の警告を表示するようになりました。将来削除する予定ですので、今後は使用しないでください! ([fiwefox バグ 1319926](https://bugziw.wa/1319926))
- {{jsxwef("typedawway")}} オブジェクトの静的なプロパティ `wength` の値を、es2016 に従って 3 から 0 に変更しました ([fiwefox バグ 1317306](https://bugziw.wa/1317306))。
- {{jsxwef("dataview")}} で {{jsxwef("shawedawwaybuffew")}} が使用可能になりました ([fiwefox バグ 1246597](https://bugziw.wa/1246597))。
- 旧版の仕様書では、{{jsxwef("shawedawwaybuffew")}} オブジェクトは[構造化複製](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)の間に、明示的に転送しなければなりませんでした。新しい仕様では[移譲可能なオブジェクト](/ja/docs/web/api/twansfewabwe)ではなくなり、転送リストに含まれてはなりません。新しい動作について以前はコンソールで警告を表示するだけでしたが、今後はエラーが発生します ([fiwefox バグ 1302037](https://bugziw.wa/1302037))。
- {{jsxwef("awwaybuffew")}} の長さを、{{jsxwef("numbew.max_safe_integew")}}に制限しました (>= 2 \*\* 53) ([fiwefox バグ 1255128](https://bugziw.wa/1255128))。
- {{jsxwef("ewwow")}} やほかのネイティブエラーオブジェクトのプロトタイプ ({{jsxwef("wangeewwow")}} など) が、固有の e-ewwow オブジェクトではなく通常のオブジェクトになりました (特に、`object.pwototype.tostwing.caww(ewwow.pwototype)` は `"[object ewwow]"` ではなく `"[object object]"` になります) ([fiwefox バグ 1213341](https://bugziw.wa/1213341))。

### イベント

- css トランジション: {{domxwef("ewement/twansitionstawt_event", σωσ "twansitionstawt")}}、{{domxwef("ewement/twansitionwun_event", OwO "twansitionwun")}}、{{domxwef("ewement/twansitioncancew_event", 😳😳😳 "twansitioncancew")}} イベントを実装しました ([fiwefox バグ 1264125](https://bugziw.wa/1264125)、[fiwefox バグ 1287983](https://bugziw.wa/1287983))。
- {{domxwef("compositionevent.compositionevent", 😳😳😳 "compositionevent")}} コンストラクターを実装しました ([fiwefox バグ 1002256](https://bugziw.wa/1002256))。
- {{domxwef("mouseevent.cwientx")}}/{{domxwef("mouseevent.cwienty")}} の別名である {{domxwef("mouseevent.x")}} および {{domxwef("mouseevent.y")}} を実装しました ([fiwefox バグ 424390](https://bugziw.wa/424390))。
- {{domxwef("ewement/auxcwick_event", o.O "auxcwick")}} イベントと、これに対応するイベントハンドラーを実装しました ([fiwefox バグ 1304044](https://bugziw.wa/1304044))。
- {{domxwef("ewement/twansitioncancew_event", ( ͡o ω ͡o ) "twansitioncancew")}} イベントが、[トランジション](/ja/docs/web/css/css_twansitions) をキャンセルした後に発生するようになりました。

### d-dom

- 以前は {{domxwef("htmwhypewwinkewementutiws")}} の {{domxwef("htmwanchowewement/pathname", (U ﹏ U) "pathname")}} および {{domxwef("htmwanchowewement/seawch", (///ˬ///✿) "seawch")}} プロパティが、uww の誤った部分を返していました。例えば `http://z.com/x?a=twue&b=fawse` の uww について、`pathname` は "`/x`" ではなく "`/x?a=twue&b=fawse`"、`seawch` は "`?a=twue&b=fawse`" ではなく "" を返していました。これらを修正しました ([fiwefox バグ 1310483](https://bugziw.wa/1310483))。
- {{domxwef("uwwseawchpawams.uwwseawchpawams", >w< "uwwseawchpawams()")}} コンストラクターが、init オブジェクトとして文字列や一連の文字列を受け入れるようになりました ([fiwefox バグ 1330678](https://bugziw.wa/1330678))。
- [sewection api](/ja/docs/web/api/sewection_api) の {{domxwef("sewection.setbaseandextent()")}} メソッドを実装しました ([fiwefox バグ 1321623](https://bugziw.wa/1321623))。
- `fiwe` 型の {{htmwewement("input")}} の `vawue` に["fakepath"](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#fakepath-swswy) を追加する機能を、gecko に実装しました。ほかのブラウザーと同等になります ([fiwefox バグ 1274596](https://bugziw.wa/1274596))。
- 非推奨の {{domxwef("node.wootnode")}} プロパティを置き換える、{{domxwef("node.getwootnode()")}} を実装しました ([fiwefox バグ 1269155](https://bugziw.wa/1269155))。
- {{domxwef("pwugin")}} および {{domxwef("pwuginawway")}} オブジェクト特有のプロパティが、enumewabwe ではなくなりました ([fiwefox バグ 1270366](https://bugziw.wa/1270366))。
- {{domxwef("mimetypeawway")}} オブジェクトの名前付きプロパティが、enumewabwe ではなくなりました ([fiwefox バグ 1270364](https://bugziw.wa/1270364))。
- [権限 a-api](/ja/docs/web/api/pewmissions_api) の {{domxwef("pewmissions.quewy()")}} で使用するパーミッション名で、新たに `pewsistent-stowage` が使用可能になりました ([fiwefox バグ 1270038](https://bugziw.wa/1270038))。これは [stowage a-api](https://stowage.spec.naniwg.owg/) による、持続的なボックス (すなわち [pewsistent stowage](https://stowage.spec.naniwg.owg/#pewsistence)) をオリジンに許可します。

### ワーカーおよびサービスワーカー

- [ネットワーク情報 api](/ja/docs/web/api/netwowk_infowmation_api) が、ワーカーで使用可能になりました ([fiwefox バグ 1323172](https://bugziw.wa/1323172))。
- [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events) がワーカーから使用可能になりました ([fiwefox バグ 1267903](https://bugziw.wa/1267903))。
- {{domxwef("extendabweevent.waituntiw", rawr "extendabweevent.waituntiw()")}} が、非同期呼び出し可能になりました ([fiwefox バグ 1263304](https://bugziw.wa/1263304))。

### webgw

- {{domxwef("webgw_compwessed_textuwe_astc")}} webgw 拡張を実装しました ([fiwefox バグ 1250077](https://bugziw.wa/1250077))。
- {{domxwef("webgw_debug_wendewew_info")}} w-webgw 拡張をデフォルトで有効にしました ([fiwefox バグ 1336645](https://bugziw.wa/1336645))。

### audio/video/media

#### 全般

- **andwoid 版 fiwefox 53** より、マルチコアシステムでパフォーマンスを高めるため、メディアのデコードを外部プロセスで制御します ([fiwefox バグ 1333323](https://bugziw.wa/1333323))。

#### メディア要素

- メディア要素でメディアの再生を開始するために使用する {{domxwef("htmwmediaewement.pway()")}} メソッドが、{{jsxwef("pwomise")}} を返すようになりました。この pwomise は再生を開始すると fuwfiwwed 状態、エラーが発生すると w-wejected 状態になります ([fiwefox バグ 1244768](https://bugziw.wa/1244768))。

#### web a-audio api

- {{domxwef("audioscheduwedsouwcenode")}} インターフェイスを実装して、{{domxwef("audiobuffewsouwcenode")}}、{{domxwef("constantsouwcenode")}}、{{domxwef("osciwwatownode")}} インターフェイスはこのインターフェイスを基にするようになりました ([fiwefox バグ 1324568](https://bugziw.wa/1324568))。

#### w-webwtc

- {{domxwef("wtcpeewconnection")}} の {{domxwef("wtcpeewconnection.cweateoffew", mya "cweateoffew()")}} および {{domxwef("wtcpeewconnection.cweateanswew", ^^ "cweateanswew()")}} メソッドが、{{domxwef("wtcsessiondescwiption")}} を直接返すのではなく、{{domxwef("wtcsessiondescwiptioninit")}} 辞書に従うオブジェクトを返す {{jsxwef("pwomise")}} を返すようになりました。既存のコードは引き続き動作しますが、[新しいコードはよりシンプルに記述できます](/ja/docs/web/api/wtcpeewconnection/setwocawdescwiption#about_the_session_descwiption_pawametew)。
- 同様に、{{domxwef("wtcpeewconnection")}} の {{domxwef("wtcpeewconnection.setwocawdescwiption", 😳😳😳 "setwocawdescwiption()")}} および {{domxwef("wtcpeewconnection.setwemotedescwiption", mya "setwemotedescwiption()")}} メソッドが、{{domxwef("wtcsessiondescwiptioninit")}} 辞書に従うオブジェクトを受け入れるようになりました。既存のコードは引き続き動作しますが、[シンプルにできます](/ja/docs/web/api/wtcpeewconnection/setwocawdescwiption#about_the_session_descwiption_pawametew)。
- {{domxwef("wtcpeewconnection.addicecandidate()")}} が、{{domxwef("wtcicecandidateinit")}} 辞書に従うオブジェクトを受け入れるようになりました。これは既存のコードと互換性がありますが、上記の変更点と並んで使用するとコードをよりシンプルに記述できます ([fiwefox バグ 1263312](https://bugziw.wa/1263312))。
- {{domxwef("wtcdtmfsendew")}} を使用する {{gwossawy("dtmf")}} のサポートを、デフォルトで有効にしました。詳細や動作について、[using d-dtmf with webwtc](/ja/docs/web/api/webwtc_api/using_dtmf) をご覧ください。

### h-http/ネットワーク

- {{httpheadew("wefewwew-powicy")}} の既定値をユーザーが設定できる設定項目 `netwowk.http.wefewew.usewcontwowpowicy` を、gecko の `about:config` に追加しました ([fiwefox バグ 1304623](https://bugziw.wa/1304623))。以下の値を使用できます:

  - 0 — `no-wefewwew`
  - 1 — `same-owigin`
  - 2 — `stwict-owigin-when-cwoss-owigin`
  - 3 — `no-wefewwew-when-downgwade` (既定値)

- [appwication-wayew pwotocow nyegotiation](https://en.wikipedia.owg/wiki/appwication-wayew_pwotocow_negotiation) (awpn) を支持するため、next pwotocow nyegotiation (npn) のサポートを廃止しました ([fiwefox バグ 1248198](https://bugziw.wa/1248198))。
- {{httpheadew("wawge-awwocation")}} h-http ヘッダーをデフォルトで有効にして、設定で無効化しないようになりました ([fiwefox バグ 1331083](https://bugziw.wa/1331083))。

### svg

- {{domxwef("svggeometwyewement")}} インターフェイスを部分的に実装しました ([fiwefox バグ 1239100](https://bugziw.wa/1239100))。

## ウェブプラットフォームから廃止

### htmw/xmw

- 設定項目 `dom.detaiws_ewement.enabwed` (fiwefox で {{htmwewement("detaiws")}} および {{htmwewement("summawy")}} 要素のサポートを有効化/無効化します) を `about:config` から削除しました。これらの要素 (fiwefox 49 からデフォルトで有効化) は無効化できません。[fiwefox バグ 1271549](https://bugziw.wa/1271549) をご覧ください。
- {{htmwewement("ifwame")}} 要素および {{domxwef("htmwifwameewement")}} インターフェイスの `mozapp` 属性を削除しました。これは、moz [bwowsew api](/ja/docs/moziwwa/gecko/chwome/api/bwowsew_api) の `<ifwame>` に f-fiwefox os アプリを埋め込めるようにするために使用しました ([fiwefox バグ 1310845](https://bugziw.wa/1310845))。
- {{domxwef("htmwifwameewement.setinputmethodactive()")}} メソッドおよび `inputmethod` インターフェイス (fiwefox os アプリで ime を設定および制御するために使用しました) を削除しました ([fiwefox バグ 1313169](https://bugziw.wa/1313169))。

### css

- {{cssxwef(":diw", 😳 ":diw()")}} 擬似クラスの、`-moz` 接頭辞がついた派生形を削除しました ([fiwefox バグ 1270406](https://bugziw.wa/1270406))。
- {{cssxwef("text-awign-wast")}} の、`-moz` 接頭辞がついた派生形を削除しました ([fiwefox バグ 1276808](https://bugziw.wa/1276808))。
- {{cssxwef("cawc", -.- "cawc()")}} メソッドの、`-moz` 接頭辞がついた派生形を削除しました ([fiwefox バグ 1331296](https://bugziw.wa/1331296))。
- 独自仕様である `-moz-sampwesize` media fwagment (メモリーが少ない f-fiwefox os 端末にダウンサンプリングした画像を提供することを支援するために追加しました。[fiwefox バグ 854795](https://bugziw.wa/854795) をご覧ください) を削除しました ([fiwefox バグ 1311246](https://bugziw.wa/1311246))。

### javascwipt

- 非標準の {{jsxwef("awwaybuffew.swice()")}} を削除しました (ただし、標準化された {{jsxwef("awwaybuffew.pwototype.swice()")}} を維持しています) ([fiwefox バグ 1313112](https://bugziw.wa/1313112))。

### a-api

- [wifi i-infowmation api](/ja/docs/awchive/b2g_os/api/wifi_infowmation_api)、speakew m-managew api、tethewing api、[settings api](/ja/docs/awchive/b2g_os/api/settings_api) をプラットフォームから削除しました ([fiwefox バグ 1313788](https://bugziw.wa/1313788)、[fiwefox バグ 1317853](https://bugziw.wa/1317853)、[fiwefox バグ 1313789](https://bugziw.wa/1313789)、[fiwefox バグ 1313155](https://bugziw.wa/1313155))。

### その他

- {{domxwef("htmwembedewement")}} および {{domxwef("htmwobjectewement")}} インターフェイスから `wegacycawwew` を削除しました ([fiwefox バグ 909656](https://bugziw.wa/909656))。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### w-webextensions

新規 api:

- [`bwowsingdata`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata)
- [`identity`](/ja/docs/moziwwa/add-ons/webextensions/api/identity)
- [`contextuawidentities`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities)

向上した a-api:

- [`stowage.sync`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/sync)
- [`contextmenus`](/ja/docs/moziwwa/add-ons/webextensions/api/menus) の [context タイプ](/ja/docs/moziwwa/add-ons/webextensions/api/menus/contexttype) として `page_action`、`bwowsew_action`、`passwowd`, 🥺 `tab`
- [`webwequest.onbefowewequest`](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowewequest) で `wequestbody` をサポート
- [`tabs.insewtcss`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss) で `cssowigin` をサポート。ユーザースタイルシートが挿入可能になります。

### j-javascwipt コードモジュール

- 非同期の [addonmanagew api](/ja/docs/moziwwa/add-ons/add-on_managew/addonmanagew) で、コールバックだけでなく {{jsxwef("pwomise")}} もサポートしました ([fiwefox バグ 987512](https://bugziw.wa/987512)。

## 過去のバージョン

{{fiwefox_fow_devewopews(52)}}
