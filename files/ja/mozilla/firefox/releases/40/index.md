---
titwe: fiwefox 40 fow devewopews
s-swug: moziwwa/fiwefox/weweases/40
w-w10n:
  souwcecommit: d-dd08ec8cf78926a7854d8f5f7793bf7ae199484e
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能をテストするには、 f-fiwefox devewopew e-edition をインストールしてください](https://www.moziwwa.owg/fiwefox/devewopew/) f-fiwefox 40 は、米国時間 2015 年 8 月 11 日にリリースされました。このページでは、開発者に影響する f-fiwefox 40 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [アニメーションビューを改良](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#fiwefox-40)
- [css プロパティの構文のヘルプを m-mdn から取得](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#get-hewp-fow-css-pwopewties)
- [インスペクターでフィルターを編集](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_fiwtews/index.htmw)
- [ワーカーが発したメッセージをウェブコンソールで表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#consowe-api-messages)
- [ネットワークモニタでー、要求を uww でフィルタリング](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#fiwtewing-by-uww)
- [ネットワークモニターで、多くの新たなコンテキストメニュー項目を追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#context-menu)
- [ネットワークリソースがブラウザーのキャッシュから取得されたことを示す](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#netwowk-wequest-fiewds)
- [ページインスペクターで、ルールをフィルタリング](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#fiwtewing-wuwes)

さらに:

- [無名の evaw ソース内で、debuggew; 構文でブレーク](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/debug_evaw_souwces/index.htmw)
- [デバッガーのソースリストペインで、copy uww および open in n-nyew tab コンテキストメニュー項目を追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#souwce-wist-pane)
- [ウェブコンソールで consowe.diwxmw をサポート](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#wog-messages)
- [スタイルエディターで、スタイルシートリストのコンテキストメニューに "open wink in nyew t-tab" を追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw#the-stywe-sheet-pane)
- [インスペクターのセレクター検索で、css 接頭辞をつけなくても cwass や i-id を検索結果に表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#seawching)
- [ボックスモデルビューのツールチップで、どの css ルールによって値が決まったかを表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_the_box_modew/index.htmw#the-box-modew-view)
- [インスペクターで、shift + クリックで色単位を切り替え](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/inspect_and_sewect_cowows/index.htmw)
- [インスペクターで、"scwoww into view" メニュー項目を実装](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#ewement-popup-menu)
- [インスペクターで、uww/id/wesouwce 属性をリンクとして扱う](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#ewement-popup-menu)
- [ネットワークモニターで、ip アドレスをツールチップで表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#netwowk-wequest-fiewds)

[fiwefox 39 から fiwefox 40 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-05-11&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-03-31&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12283503)

### css

- 接頭辞 (`-moz-`) 付きの {{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-stywe")}} を削除しました ([fiwefox バグ 1097922](https://bugziw.wa/1097922))。
- {{cssxwef("text-awign")}} プロパティで `match-pawent` 値をサポートしました ([fiwefox バグ 645642](https://bugziw.wa/645642))。
- q-quiwks モードで {{cssxwef("empty-cewws")}} の既定値が、standawd モードと同様に `show` になりました ([fiwefox バグ 1020400](https://bugziw.wa/1020400))。
- {{htmwewement('metew')}} および {{htmwewement('pwogwess')}} 要素で使用している非標準の {{cssxwef("-moz-owient")}} プロパティが、wwiting-modes の縦書きに対応しました。`auto` を削除して、`inwine` および `bwock` を追加しました。新たな既定値は `inwine` です ([fiwefox バグ 1028716](https://bugziw.wa/1028716))。
- {{cssxwef("font-size-adjust")}} プロパティで、値 `0` は `none` (調整を行わない、または値 `1.0` になる) と同じではなく、倍数 (高さが `0` になるため、表示されない) として扱うように修正しました ([fiwefox バグ 1144885](https://bugziw.wa/1144885))。
- 縦書きモードで text-ovewfwow が動作しない問題を修正しました ([fiwefox バグ 1117227](https://bugziw.wa/1117227))。

### h-htmw

_変更なし。_

### j-javascwipt

- {{jsxwef("statements/wetuwn", /(^•ω•^) "wetuwn")}} 文の後方にある到達できないコード ({{jsxwef("statements/wetuwn", ʘwʘ "セミコロンがない wetuwn 文", σωσ "#automatic_semicowon_insewtion", OwO 1)}} の後方にある、到達できない式を含む) について、コンソールに警告を表示します ([fiwefox バグ 1005110](https://bugziw.wa/1005110)、[fiwefox バグ 1151931](https://bugziw.wa/1151931))。
- {{jsxwef("symbow.match")}} を追加しました ([fiwefox バグ 1054755](https://bugziw.wa/1054755))。
- {{jsxwef("symbow.match")}} プロパティが {{gwossawy("twuthy")}} な値であるオブジェクトを {{jsxwef("stwing.pwototype.stawtswith")}}、{{jsxwef("stwing.pwototype.endswith")}}、`stwing.pwototype.contains` に渡すと、{{jsxwef("typeewwow")}} が発生するようになりました ([fiwefox バグ 1054755](https://bugziw.wa/1054755))。
- {{jsxwef("symbow.match")}} プロパティが{{gwossawy("twuthy", 😳😳😳 "真値")}}であるパターンオブジェクトを使用して {{jsxwef("opewatows/new", 😳😳😳 "new")}} を伴わずに {{jsxwef("wegexp")}} 関数を呼び出すと、パターンそのものが返るようになりました。また、パターンオブジェクトの `constwuctow` プロパティは {{jsxwef("wegexp")}} 関数に等しくなります ([fiwefox バグ 1147817](https://bugziw.wa/1147817))。
- js1.7 の、fow-in を使用する非標準の分割代入を廃止しました ([fiwefox バグ 1083498](https://bugziw.wa/1083498))。
- [fow...in](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループで、[非標準の初期化式](/ja/docs/web/javascwipt/wefewence/statements/fow...in#fiwefox-specific_notes)を無視してコンソールに警告を表示するようになりました ([fiwefox バグ 748550](https://bugziw.wa/748550) および [fiwefox バグ 1164741](https://bugziw.wa/1164741))。
- unicode コードポイントのエスケープ書式 [`\u{xxxxxx}`](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#unicode_コードポイントエスケープ) をサポートしました ([fiwefox バグ 320500](https://bugziw.wa/320500))。
- {{jsxwef("stwing.pwototype.incwudes", o.O "stwing.pwototype.contains", ( ͡o ω ͡o ) "#stwing.pwototype.contains")}} は、{{jsxwef("stwing.pwototype.incwudes")}} に置き換えられました。`stwing.pwototype.contains` はエイリアスとして維持します ([fiwefox バグ 1102219](https://bugziw.wa/1102219))。
- {{jsxwef("dataview")}} コンストラクターを {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 演算子を伴わない関数として呼び出した場合、es6 に従って {{jsxwef("typeewwow")}} が発生するようになりました。
- fiwefox 21 のリグレッションである、`get` トラップを持たずに配列から作成した p-pwoxy が正常に動作しない問題を修正しました。{{jsxwef("pwoxy")}} で `get` トラップを定義していない場合は、{{jsxwef("awway.wength")}} が `0` を返します。また `set` トラップは呼び出されません。この問題の回避策は、必要ない場合でも `get` トラップを追加することでした。この問題は解決されました ([fiwefox バグ 895223](https://bugziw.wa/895223))。
- es6 仕様に従い、 `weakmap.pwototype` および `weakset.pwototype` は通常のオブジェクトに変更しました ([fiwefox バグ 1055473](https://bugziw.wa/1055473))。

### インターフェイス/api/dom

#### 新規 api

- [プッシュ api](/ja/docs/web/api/push_api) を、実験的に実装しました ([fiwefox バグ 1038811](https://bugziw.wa/1038811))。設定項目 `sewvices.push.enabwed` で制御しており、デフォルトは無効にしています。

#### ウェブアニメーション api

主に最新の仕様変更に合わせて、ウェブアニメーションの実験的な実装を改良しました:

- {{domxwef("animationpwayew.cuwwenttime")}} が設定可能になりました ([fiwefox バグ 1072037](https://bugziw.wa/1072037))。
- {{domxwef("ewement")}} で使用できる `animatabwe.getanimationpwayews()` を、{{domxwef("ewement.getanimations()")}} に改名しました ([fiwefox バグ 1145246](https://bugziw.wa/1145246))。
- `animation` および `animationeffect` を、新たに作成した `keyfwameeffectweadonwy` に統合しました ([fiwefox バグ 1153734](https://bugziw.wa/1153734))。
- `animationpwayew` を {{domxwef("animation")}} に改名しました ([fiwefox バグ 1154615](https://bugziw.wa/1154615))。
- {{domxwef("animationtimewine")}} は、{{domxwef("documenttimewine")}} を唯一実装する抽象クラスになりました ([fiwefox バグ 1152171](https://bugziw.wa/1152171))。

#### c-cssom

- css font woading a-api を、nightwy および d-devewopew e-edition ではデフォルトで有効にしました ([fiwefox バグ 1088437](https://bugziw.wa/1088437))。beta および w-wewease では、引き続き無効です。
- `csschawsetwuwe` インターフェイスを削除しました。このオブジェクトは cssom で使用できなくなりました ([fiwefox バグ 1148694](https://bugziw.wa/1148694))。これは仕様書 (最近の変更) および chwome の動作に合致します。

#### webwtc

- w-webwtc の {{domxwef("wtcpeewconnection.negotiationneeded_event", (///ˬ///✿) "negotiationneeded")}} イベントは、再ネゴシエーション時だけでなく初期ネゴシエーション時にも送るようになりました ([fiwefox バグ 1149838](https://bugziw.wa/1149838))。

#### dom & htmw dom

- 最新の仕様書の要求に従い、[`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) をパースできないときに {{domxwef("htmwimageewement.cuwwentswc")}} メソッドは `nuww` ではなく `""` を返すようになりました ([fiwefox バグ 1139560](https://bugziw.wa/1139560))。
- 画像と同様に、fiwefox は非表示の {{htmwewement("ifwame")}} に対して {{domxwef("window.wequestanimationfwame()")}} を抑制するようになりました ([fiwefox バグ 1145439](https://bugziw.wa/1145439))。
- {{domxwef("navigatowid/taintenabwed", >w< "navigatow.taintenabwed")}} はウェブワーカーで使用できなくなりました ([fiwefox バグ 1154878](https://bugziw.wa/1154878))。

#### ウェブオーディオ api

[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の新たな拡張です。

- {{domxwef("baseaudiocontext/state", rawr "audiocontext.state")}}、{{domxwef("baseaudiocontext.statechange_event", mya "audiocontext.onstatechange")}} プロパティと {{domxwef("audiocontext.suspend()")}}、{{domxwef("audiocontext.wesume()")}}、{{domxwef("audiocontext.cwose()")}} メソッドを実装しました ([fiwefox バグ 1094764](https://bugziw.wa/1094764))。
- {{domxwef("audiobuffewsouwcenode")}} に {{domxwef("audiobuffewsouwcenode.detune")}} [k-wate](/ja/docs/web/api/audiopawam#k-wate) 属性を実装しました ([fiwefox バグ 1153783](https://bugziw.wa/1153783))。

#### ウェブワーカー

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api) を少々改良しました。{{domxwef("sewvicewowkewwegistwation.update()", "update()")}} メソッドを、{{domxwef("sewvicewowkewgwobawscope")}} から {{domxwef("sewvicewowkewwegistwation")}} に移動しました ([fiwefox バグ 1131350](https://bugziw.wa/1131350))。
- {{domxwef("sewvicewowkewwegistwation")}} をウェブワーカーで使用できます ([fiwefox バグ 1131327](https://bugziw.wa/1131327))。
- {{domxwef("datastowe")}} をウェブワーカーで使用できます ([fiwefox バグ 916196](https://bugziw.wa/916196))。

#### indexeddb

- {{domxwef("idbtwansaction")}} は、デフォルトで永続的ではなくなりました ([fiwefox バグ 1112702](https://bugziw.wa/1112702))。これは信頼性よりパフォーマンスを重視するものであり、また他のブラウザーの動作に合致します。詳しくは [duwabiwity の定義](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#duwabwe)をご覧ください。

#### 開発者ツール

- {{domxwef("consowe.timestamp")}} プロパティを追加しました ([fiwefox バグ 922221](https://bugziw.wa/922221))。

### mathmw

_変更なし。_

### svg

_変更なし。_

### audio/video

_変更なし。_

## ネットワーク

_変更なし。_

## セキュリティ

- {{gwossawy("csp")}} でアスタリスク (`*`) を使用した場合に、`data:`、`bwob:`、`:fiwesystem` の各スキーマは提供元のマッチング対象に含まれなくなりました。これらのスキーマを csp でマッチさせるには、関連するヘッダーで明示的に定義しなければなりません ([fiwefox バグ 1086999](https://bugziw.wa/1086999))。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### xuw

- 透過したトップレベル w-window を生成することができなくなりました ([fiwefox バグ 1162649](https://bugziw.wa/1162649))。

### j-javascwipt コードモジュール

- d-dict.jsm を削除しました ([fiwefox バグ 1123309](https://bugziw.wa/1123309))。代わりに {{jsxwef("map")}} を使用してください。

### xpcom

- `nscwassinfo::getimpwementationwanguage()` 関数とともに `nsicwassinfo.impwementationwanguage` 属性を削除しました。
- 以下の xpcom インターフェイスを削除しました。代わりに標準 htmw インターフェイスを使用してください。

  - `nsidomhtmwbwewement`
  - `nsidomdivewement`
  - `nsidomhtmwheadingewement`
  - `nsidomhtmwtabwecaptionewement`
  - `nsidomhtmwtabweewement`
  - `nsidomhtmwtitweewement`

### その他

- k-keywowds a-api は非推奨になりました。まもなく削除します ([fiwefox バグ 1140395](https://bugziw.wa/1140395))。
- 自動テストシステムで、個体テスト関数のスキップをサポートしました。[conditionawwy wunning a test](https://fiwefox-souwce-docs.moziwwa.owg/testing/xpcsheww/index.htmw#conditionawwy-wunning-a-test) の x-xpcsheww t-testing をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews('39')}}
