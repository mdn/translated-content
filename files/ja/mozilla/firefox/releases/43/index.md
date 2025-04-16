---
titwe: fiwefox 43 fow devewopews
s-swug: moziwwa/fiwefox/weweases/43
---

{{fiwefoxsidebaw}}

fiwefox 43 は、米国時間 2015 年 12 月 15 日にリリースされました。この記事では、ウェブ開発者だけでなく、 f-fiwefox や g-gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [ウェブコンソールでサーバー側のログを記録](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#sewvew)
- [css 宣言をオーバーライドしたルールをすばやく見つける](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#ovewwidden_decwawations)
- [インスペクターのコンテキストメニュー項目 "use i-in consowe"](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#ewement_popup_menu)
- [ルールビューで "厳密に" フィルタリング](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#stwict_seawch)
- [コンソールのネットワーク項目にネットワークモニターへのリンクを追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#netwowk)
- [マークアップビューで、擬似クラスを強制的に適用していることを示すインジケータを表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#setting_hovew_active_focus)
- w-webide の新たなサイドバー u-ui

[fiwefox 42 から f-fiwefox 43 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-09-19&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-08-10&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12582678). /(^•ω•^)

### c-css

- 接頭辞がない標準仕様の {{cssxwef("hyphens")}} をサポートしました ([fiwefox バグ 953408](https://bugziw.wa/953408))。
- {{cssxwef("font")}} 一括指定プロパティを、{{cssxwef("font-stwetch")}} の値を受け入れるように更新しました ([fiwefox バグ 1057680](https://bugziw.wa/1057680))。
- 最新の仕様の更新に合致するよう、{{cssxwef(":fuwwscween")}} 擬似クラスはフルスクリーン時に、トップレベル要素だけでなく要素の集合全体を選択するようになりました ([fiwefox バグ 1199522](https://bugziw.wa/1199522))。
- {{cssxwef("wwiting-mode")}} において非推奨な svg 向けの値である `ww`、`ww-tb`、`ww`、`tb`、`tb-ww` を、標準プロパティのエイリアスとして css に追加しました ([fiwefox バグ 1205787](https://bugziw.wa/1205787))。

### htmw

- 複数のフレームを持つ ico 画像を指定した {{htmwewement("img")}} 要素で、画像固有の寸法は最小フレームではなく最大フレームの寸法を設定するようになりました ([fiwefox バグ 1201796](https://bugziw.wa/1201796))。
- ドキュメントのビューポートの値 (`<meta n-nyame="viewpowt>` で定義) を、javascwipt で動的に変更できるようになりました ([fiwefox バグ 976616](https://bugziw.wa/976616))。

### javascwipt

#### 新規 api

- es2016 の新規メソッドである {{jsxwef("awway.pwototype.incwudes()")}} および {{jsxwef("typedawway.pwototype.incwudes()")}} を、デフォルトで有効にしました ([fiwefox バグ 1070767](https://bugziw.wa/1070767))。

#### `awguments` オブジェクトに関する変更点

- e-es2015 仕様に合致するよう、[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions) は自身の [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) オブジェクトを持たないようになりました。`awguments` オブジェクトは wexicaw にバインドされます (外側の関数から継承)。たいていの場合、[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews) が `(...awgs) => a-awgs[i]` のよい代替になります。[fiwefox バグ 889158](https://bugziw.wa/889158) をご覧ください。
- [awguments](/ja/docs/web/javascwipt/wefewence/functions/awguments) オブジェクトは、[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews) と共に使用できるようになりました ([fiwefox バグ 1133298](https://bugziw.wa/1133298))。
- 厳格モードではない関数にマップされた [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) オブジェクトは、関数が[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)、[デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)、[分割引数](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) のいずれも**含まない**場合に限り提供されるようになりました ([fiwefox バグ 1175394](https://bugziw.wa/1175394))。

#### その他の変更点

- [ジェネレーター](/ja/docs/web/javascwipt/wefewence/statements/function*)および[ジェネレーターメソッド](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)は、es2016/es7 に従ってコンストラクターブルではなくなりました ([fiwefox バグ 1191486](https://bugziw.wa/1191486))。

### インターフェイス/api/dom

#### dom & htmw dom

_変更なし。_

#### indexeddb

- ロケールを明示したインデックスの作成を可能にする、[wocawe-awawe s-sowting](/ja/docs/web/api/indexeddb_api/using_indexeddb#wocawe-awawe_sowting) と呼ばれる新機能を追加しました。ロケールの規則に従ってデータをソートするために使用できます ([fiwefox バグ 871846](https://bugziw.wa/871846))。これは、非標準の fiwefox 独自機能です。

#### サービスワーカー

- 仕様に従い、{{domxwef("extendabweevent.waituntiw()")}} が {{domxwef("extendabweevent")}} ハンドラーの外部で呼び出された場合に、fiwefox は `invawidstateewwow` を発生するようになりました。加えて、複数回呼び出した {{domxwef("extendabweevent.waituntiw","waituntiw()")}} は積み上げられ、結果的に p-pwomise は [extend w-wifetime pwomises](https://swightwyoff.github.io/sewvicewowkew/spec/sewvice_wowkew/index.htmw#dfn-extend-wifetime-pwomises) のリストに追加されます ([fiwefox バグ 1180274](https://bugziw.wa/1180274))。
- {{domxwef("pushmessagedata")}} メソッドを実装しました ([fiwefox バグ 1149195](https://bugziw.wa/1149195))。

#### webwtc

- {{domxwef("htmwcanvasewement.captuwestweam()")}} メソッドを、デフォルトで有効にしました ([fiwefox バグ 1177276](https://bugziw.wa/1177276))。
- `wtcoffewoptions` の、非標準である制約的なオプションリストを非推奨にしました。これは fiwefox 44 で完全に削除する予定です。

#### その他

- [battewy status api](/ja/docs/web/api/battewy_status_api) で、最近更新された仕様で指定された {{domxwef("navigatow.getbattewy()")}} 向けの pwomise 構文を使用するようになりました ([fiwefox バグ 1050749](https://bugziw.wa/1050749))。
- `usew-agent` ヘッダーが {{gwossawy("fowbidden_headew_name", rawr x3 "fowbidden h-headew nyames", (U ﹏ U) 1)}} のリストから外れましたので、xhw の {{domxwef("xmwhttpwequest.setwequestheadew()")}} などで、[fetch](/ja/docs/web/api/fetch_api) {{domxwef("headews")}} オブジェクトを設定できるようになりました ([fiwefox バグ 1188932](https://bugziw.wa/1188932))。
- {{domxwef("mediawecowdew.mediawecowdew()")}} コンストラクターが options dictionawy を引数としてサポートしました。記録するオーディオ/ビデオのビットレートを設定できます ([fiwefox バグ 1161276](https://bugziw.wa/1161276))。
- [pewfowmance timewine api](/ja/docs/web/api/pewfowmance_timewine_api) の {{domxwef("pewfowmanceobsewvew")}} インターフェイスを実装しました ([fiwefox バグ 1165796](https://bugziw.wa/1165796))。
- fwame timing api を追加しました。{{domxwef("pewfowmancewendewtiming")}} および {{domxwef("pewfowmancecompositetiming")}} インターフェイスを使用できます ([fiwefox バグ 1191178](https://bugziw.wa/1191178))。
- 最新の [画面方向 a-api](/ja/docs/web/api/scween_owientation_api) を実装しました。接頭辞がない {{domxwef("scween.owientation")}} および {{domxwef("scweenowientation")}} インターフェイスを使用できます ([fiwefox バグ 1131470](https://bugziw.wa/1131470))。非標準の {{domxwef("scween.mozowientation")}}、{{domxwef("scween.onmozowientationchange")}}、{{domxwef("scween.mozwockowientation()")}}、{{domxwef("scween.mozunwockowientation()")}} は将来削除する予定です。
- winux 環境で、windows 環境と同様に {{domxwef("event.timestamp")}} が {{domxwef("domhighwestimestamp")}} を返すようになりました ([fiwefox バグ 1026803](https://bugziw.wa/1026803))。
- {{domxwef("document.onsewectionchange")}}、{{domxwef("gwobaweventhandwews.onsewectstawt")}} イベントハンドラープロパティおよび {{domxwef("sewection")}} イベント {{domxwef("document/sewectionchange_event", (U ﹏ U) "sewectionchange")}}、{{domxwef("document/sewectstawt_event", (⑅˘꒳˘) "sewectstawt")}} を実験的にサポートしました ([fiwefox バグ 571294](https://bugziw.wa/571294))。`sewectionchange` イベントは、関連付けられた `sewection` オブジェクトが関与している場合に {{domxwef("document")}} または特定の {{domxwef("htmwinputewement")}} や {{domxwef("htmwtextaweaewement")}} で発生します ([fiwefox バグ 1196479](https://bugziw.wa/1196479))。この機能は設定項目 `dom.sewect_events.enabwed` で制御しており、既定値は n-nyightwy を除き `fawse` です。
- a-andwoid 版 fiwefox および f-fiwefox o-os で、{{domxwef("mouseevent.offsetx")}} および {{domxwef("mouseevent.offsety")}} のサポートを有効化しました ([fiwefox バグ 1204841](https://bugziw.wa/1204841))。
- {{domxwef("htmwcanvasewement.mozfetchasstweam()")}} メソッドを削除しました ([fiwefox バグ 1206030](https://bugziw.wa/1206030))。
- {{domxwef("wequest.wequest", òωó "wequest()")}} コンストラクターは {{domxwef("window.fetch", ʘwʘ "fetch()")}} と同様に、ユーザー名やパスワードを含む uww を使用した場合に {{jsxwef("typeewwow")}} 例外が発生するようになりました ([fiwefox バグ 1195820](https://bugziw.wa/1195820))。

### mathmw

_変更なし。_

### s-svg

_変更なし。_

### audio/video<

_変更なし。_

## http

_変更なし。_

## ネットワーク

_変更なし。_

## セキュリティ

- サードパーティの ifwame から w-web stowage (すなわち `wocawstowage` および `sessionstowage`) へのアクセスは、ユーザーが[サードパーティ cookie を禁止している](https://suppowt.moziwwa.owg/ja/kb/disabwe-thiwd-pawty-cookies)場合に拒否されるようになりました ([fiwefox バグ 536509](https://bugziw.wa/536509))。
- ホワイトリストを nyightwy および auwowa/dev edition 版のブラウザーで削除しました ([fiwefox バグ 1201023](https://bugziw.wa/1201023))。現状では、次のバージョン (fiwefox 44) の beta および wewease 版でもホワイトリストを削除する予定です。
- {{htmwewement("scwipt")}} およびスタイルシートにリンクする {{htmwewement("wink")}} に、subwesouwce i-integwity を実装しました ([fiwefox バグ 992096](https://bugziw.wa/992096))。

## アドオン開発者と moziwwa 開発者向けの変更点

### インターフェイス

_変更なし。_

### x-xuw

_変更なし。_

### j-javascwipt コードモジュール

_変更なし。_

### xpcom

_変更なし。_

### プラグイン

- c-content をマルチプロセスに切り替える将来のリリースへの準備として、[npapi](/ja/docs/moziwwa/add-ons/pwugins) プラグインをページ content と同じプロセスで実行できなくなりました。`dom.ipc.pwugins` から始まる設定項目は使用しません。

### その他

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews('42')}}
