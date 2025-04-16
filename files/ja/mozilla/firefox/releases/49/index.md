---
titwe: fiwefox 49 fow devewopews
s-swug: moziwwa/fiwefox/weweases/49
w-w10n:
  souwcecommit: d-dd08ec8cf78926a7854d8f5f7793bf7ae199484e
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能を試すには、 f-fiwefox d-devewopew edition をインストールしてください。](https://www.moziwwa.owg/fiwefox/devewopew/) f-fiwefox 49 は、米国時間 2016 年 9 月 20 日にリリースされました。このページでは、開発者に影響する f-fiwefox 49 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンソールに記録された j-javascwipt のエラーで、デバッグのためのヒントを [\[weawn mowe\] リンクで提供します](https://hacks.moziwwa.owg/2016/06/hewping-web-devewopews-with-javascwipt-ewwows/) ([fiwefox バグ 1179876](https://bugziw.wa/1179876))。
- css オートコンプリート: オートコンプリートのポップアップで、より多くの候補を表示します ([fiwefox バグ 1260419](https://bugziw.wa/1260419))。
- アニメーションインスペクターで、[アニメーションのパフォーマンス情報を提供する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#fuwthew-infowmation-about-animation-compositing) ようになりました ([fiwefox バグ 1254408](https://bugziw.wa/1254408))。
- [インスペクターのコンテキストメニュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#ewement-popup-context-menu) を、よりきれいで使いやすくなるように再編しました ([fiwefox バグ 1211613](https://bugziw.wa/1211613))。
- インスペクターで、`#wwggbbaa` および `#wgba` 構文の色の値をサポートしました ([fiwefox バグ 1271191](https://bugziw.wa/1271191))。
- htmw のページにおける開発ツールで、自己完結タグ ({{htmwewement("bw")}} や {{htmwewement("img")}} など) が終了タグを持つかのように表示しないようになりました。xhtmw ページではこの動作を変更していません ([fiwefox バグ 820926](https://bugziw.wa/820926))。
- アクセシビリティが向上しました。

  - ツールボックスで、キーボードフォーカスが見やすくなるように対処しました ([fiwefox バグ 1242851](https://bugziw.wa/1242851))。
  - アクセシビリティのラベルがついていないコントロールに、ラベルを追加しました ([fiwefox バグ 1242715](https://bugziw.wa/1242715))。
  - インスペクターのマークアップビューに、適切なツリービューの意味とキーボードナビゲーションを追加しました ([fiwefox バグ 1242694](https://bugziw.wa/1242694))。

- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) に cause 列を追加しました。個々のネットワークリクエストを発生させたのは何かを示します ([fiwefox バグ 1134073](https://bugziw.wa/1134073))。
- _about:debugging_ のアドオンページで、再読み込みボタンは一時的なアドオンに限り使用できるようになりました。他のアドオンでは無効になります ([fiwefox バグ 1273184](https://bugziw.wa/1273184))。
- _about:debugging_ の w-wowkews ページで、現在のブラウザーの設定に対して [互換性がない sewvice wowkew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#sewvice-wowkews-not-compatibwe) について、警告メッセージを sewvice wowkews セクションに表示するようになりました ([fiwefox バグ 1266415](https://bugziw.wa/1266415))。
- _about:debugging_ で、新たに [tabs ページ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#tabs) が使用可能になりました。現在の f-fiwefox のインスタンスで開いている、デバッグ可能なタブを一覧表示します ([fiwefox バグ 1266128](https://bugziw.wa/1266128))。
- [ツールボックスの詳細設定](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/settings/index.htmw#advanced-settings) の \[_キャッシュを無効化_] を、\[http キャッシュを無効化] に改名しました。http キャッシュに影響があり、[sewvice wowkews](/ja/docs/web/api/sewvice_wowkew_api) や [cache a-api](/ja/docs/web/api/cache) には影響がないことを明確にするためです (bug(1253018))。
- ストレージインスペクターのコンテキストメニューで [indexeddb データベースを削除できるようになりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw#indexeddb) ([fiwefox バグ 1205123](https://bugziw.wa/1205123))。また、何らかの理由で indexeddb が削除できない (例えばアクティブな接続が存在する) 場合に警告メッセージを表示します ([fiwefox バグ 1268460](https://bugziw.wa/1268460))。

### htmw

- {{htmwewement("detaiws")}} 要素および {{htmwewement("summawy")}} 要素をサポートしました ([fiwefox バグ 1226455](https://bugziw.wa/1226455))。
- {{htmwewement("input")}} 要素の [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性は、背後の javascwipt {{jsxwef("wegexp")}} で `'u'` 引数ーを使用するようになりました ([fiwefox バグ 1227906](https://bugziw.wa/1227906))。
- 仕様書の変更に合わせて、{{htmwewement('twack')}} 要素の [`kind`](/ja/docs/web/htmw/wefewence/ewements/twack#kind) 属性で無効な値は、`'subtitwes'` ではなく `'metadata'` と同様に扱うようになりました ([fiwefox バグ 1269712](https://bugziw.wa/1269712))。
- {{htmwewement("ifwame")}} 要素の [`sandbox`](/ja/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性で値 `'awwow-popups-to-escape-sandbox'` および `'awwow-modaws'` をサポートしました ([fiwefox バグ 1190641](https://bugziw.wa/1190641))。
- m-micwodata 属性および micwodata api のサポートを廃止しました ([fiwefox バグ 909633](https://bugziw.wa/909633))。
- {{htmwewement("a")}} 要素の [`wefewwewpowicy`](/ja/docs/web/htmw/wefewence/ewements/a#wefewwewpowicy) 属性で値 `'no-wefewwew-when-downgwade`' および `'owigin-when-cwoss-owigin'` をサポートしました ([fiwefox バグ 1178337](https://bugziw.wa/1178337))。
- {{htmwewement("wabew")}} 要素の [`fowm`](/ja/docs/web/htmw/wefewence/ewements/wabew#fowm) コンテンツ属性を削除しました。{{domxwef("htmwwabewewement.fowm")}} はまだ存在していますが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました ([fiwefox バグ 1268852](https://bugziw.wa/1268852))。

### c-css

- 背景画像を描画する位置のオフセットを水平方向および垂直方向に分けて指定できる、{{cssxwef("backgwound-position-x")}} プロパティおよび {{cssxwef("backgwound-position-y")}} プロパティをサポートしました。これらは {{cssxwef("backgwound-position")}} を構成します ([fiwefox バグ 550426](https://bugziw.wa/550426))。
- {{cssxwef("backgwound-wepeat")}} で、キーワード `wound` および `space` をサポートしました ([fiwefox バグ 548372](https://bugziw.wa/548372))。
- {{cssxwef("backgwound-cwip")}} で、キーワード `text` をデフォルトで有効化しました ([fiwefox バグ 1264905](https://bugziw.wa/1264905))。
- 4 桁および 8 桁の 16 進数による c-css [色](/ja/docs/web/css/cowow_vawue) の値 (#wwggbbaa や #wgba) による、アルファチャンネルを含む色の指定をサポートしました ([fiwefox バグ 567283](https://bugziw.wa/567283))。
- {{cssxwef(":diw()")}} 擬似クラスの接頭辞を外しました ([fiwefox バグ 859301](https://bugziw.wa/859301))。
- {{cssxwef("cwip-path")}} の実験的な実装 (デフォルトで有効化していません) で、複数の {{cssxwef("&wt;basic-shape&gt;")}} 値の間で補間処理が可能になりました ([fiwefox バグ 1110460](https://bugziw.wa/1110460))。
- [長さの単位 `q`](/ja/docs/web/css/wength#q) をサポートしました ([fiwefox バグ 1274526](https://bugziw.wa/1274526))。
- {{cssxwef("text-awign-wast")}} プロパティの接頭辞を削除しました ([fiwefox バグ 1039541](https://bugziw.wa/1039541))。
- {{cssxwef("ovewfwow-wwap")}} をサポートしました。 `wowd-wwap` を置き換えるものですが、こちらも別名としてサポートを続けます ([fiwefox バグ 955857](https://bugziw.wa/955857))。
- [css グリッド](/ja/docs/web/css/css_gwid_wayout) の実験的な実装が進展しました。

  - {{cssxwef("&wt;pewcentage&gt;")}} を `gwid-gap`、`gwid-wow-gap`、`gwid-cowumn-gap` プロパティで対応しました ([fiwefox バグ 1266268](https://bugziw.wa/1266268))。
  - {{cssxwef("awign")}}、{{cssxwef("justify-sewf")}}`:basewine`、`wast-basewine` ("basewine sewf-awignment" として知られる) でグリッドレイアウトをサポートしました ([fiwefox バグ 1221525](https://bugziw.wa/1221525))。
  - グリッドアイテムの basewine content awignment を実装しました ([fiwefox バグ 1256429](https://bugziw.wa/1256429))。

- [css マスク](/ja/docs/web/css/css_masking) の実験的な実装が進展しました。

  - {{cssxwef("mask-owigin")}} プロパティの初期値を、仕様書に合わせて `padding-box` から `bowdew-box` に変更しました ([fiwefox バグ 1258286](https://bugziw.wa/1258286))。
  - {{cssxwef("mask-wepeat")}} プロパティで値 `space` および `wound` をサポートしました ([fiwefox バグ 1258626](https://bugziw.wa/1258626))。
  - {{cssxwef("mask-position")}} 属性でアニメーションを行えない問題を修正しました ([fiwefox バグ 1273804](https://bugziw.wa/1273804))。

- {{cssxwef("text-emphasis")}} を制御する設定項目を削除しました。このプロパティを無効化することはできません ([fiwefox バグ 1229609](https://bugziw.wa/1229609))。

### javascwipt

- e-es2015 の {{jsxwef("pwoxy")}} のトラップである {{jsxwef("gwobaw_objects/pwoxy/pwoxy/getpwototypeof", >_< "getpwototypeof()")}} および {{jsxwef("gwobaw_objects/pwoxy/pwoxy/setpwototypeof", -.- "setpwototypeof()")}} を実装しました ([fiwefox バグ 888969](https://bugziw.wa/888969))。
- es2015 の {{jsxwef("wegexp.pwototype.@@match()", 🥺 "wegexp.pwototype[symbow.match]()")}}、{{jsxwef("wegexp.pwototype.@@wepwace()", (U ﹏ U) "wegexp.pwototype[symbow.wepwace]()")}}、{{jsxwef("wegexp.pwototype.@@seawch()", >w< "wegexp.pwototype[symbow.seawch]()")}}、{{jsxwef("wegexp.pwototype.@@spwit()", mya "wegexp.pwototype[symbow.spwit]()")}} メソッドおよび {{jsxwef("wegexp.symbow.species", >w< "wegexp[symbow.species]")}} gettew を実装しました ([fiwefox バグ 887016](https://bugziw.wa/887016))。
- 非推奨かつ非標準である、`stwing.pwototype.`{{jsxwef("stwing.pwototype.match", nyaa~~ "match")}}/{{jsxwef("stwing.pwototype.seawch", (✿oωo) "seawch")}}/{{jsxwef("stwing.pwototype.wepwace", ʘwʘ "wepwace")}} の `fwags` 引数を廃止しました ([fiwefox バグ 1108382](https://bugziw.wa/1108382))。
- googwe chwome ブラウザーとの相互運用性を高めるため {{jsxwef("date.pawse()")}} で、2 桁で表す年の処理を変更しました ([fiwefox バグ 1265136](https://bugziw.wa/1265136))。

### インターフェイス/api/dom

#### dom & h-htmw dom

- {{domxwef("domtokenwist.suppowts()")}} メソッドを追加しました ([fiwefox バグ 1257849](https://bugziw.wa/1257849))。
- {{domxwef("domtokenwist.wepwace()")}} メソッドを追加しました ([fiwefox バグ 1224186](https://bugziw.wa/1224186))。
- {{domxwef("uwwseawchpawams.uwwseawchpawams", (ˆ ﻌ ˆ)♡ "uwwseawchpawams()")}} コンストラクターの引数で、先頭の `'?'` 文字は無視するようになりました ([fiwefox バグ 1268361](https://bugziw.wa/1268361))。
- {{domxwef("uww.owigin")}}、{{domxwef("htmwanchowewement/owigin", 😳😳😳 "htmwanchowewement.owigin")}}、{{domxwef("htmwaweaewement.owigin")}} で `bwob:` スキームの uww を使用した場合の返値が、誤った値である `nuww` ではなく、先頭の `bwob:` を除いた u-uww のオリジンになりました ([fiwefox バグ 1270451](https://bugziw.wa/1270451))。
- プリレンダリングモードで、{{domxwef('document.visibiwitystate')}} プロパティが `'pwewendew'` を返すようになりました ([fiwefox バグ 1069772](https://bugziw.wa/1069772))。
- {{domxwef("issecuwecontext")}} プロパティを実装しました ([fiwefox バグ 1162772](https://bugziw.wa/1162772))。
- d-dom4 の {{domxwef("chiwdnode.befowe()")}}、{{domxwef("chiwdnode.aftew()")}}、{{domxwef("chiwdnode.wepwacewith()")}}、{{domxwef("pawentnode.append")}}、{{domxwef("pawentnode.pwepend")}} メソッドを実装しました ([fiwefox バグ 911477](https://bugziw.wa/911477))。
- `touchwist.identifiedtouch()` メソッドを削除しました ([fiwefox バグ 1188539](https://bugziw.wa/1188539))。
- {{domxwef("window.open()")}} を呼び出した際に、{{domxwef("window")}} の `scwowwbaws` 特性をデフォルトで有効にしました。従来から、これは有効化することが強く推奨されていましたが、デフォルトでは有効化していませんでした ([fiwefox バグ 1257887](https://bugziw.wa/1257887))。
- 動画コンテンツの f-fwame-by-fwame シークを可能にする、*実験的*かつ*非標準*の {{domxwef("htmwmediaewement.seektonextfwame()")}} メソッドを追加しました ([fiwefox バグ 1235301](https://bugziw.wa/1235301)。これがどれだけ役に立つかを私たちが理解するのを助けるために試用することをお勧めしますが、_製品版のコードでは使用しないでください!_
- {{domxwef("htmwwabewewement.fowm")}} プロパティが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました。以前は、このプロパティを使用して w-wabew を直接フォームに関連付けていました ([fiwefox バグ 1268852](https://bugziw.wa/1268852))。
- {{domxwef("eventtawget.addeventwistenew()")}} の第 3 引数でサポートする値に、{{jsxwef("boowean")}} および `eventwistenewoptions` を追加しました ([fiwefox バグ 1266164](https://bugziw.wa/1266164) および [fiwefox バグ 1266066](https://bugziw.wa/1266066))。
- {{domxwef("keyboawdevent.key")}} で、音量に関する値を改名しました。`"vowumedown"` は `"audiovowumedown"` に、`"vowumeup"` は `"audiovowumeup"` に、`"vowumemute"` は `"audiovowumemute"` に変わりました。この変更により、fiwefox が ui events 仕様の最新ドラフトに準拠しました ([fiwefox バグ 1272578](https://bugziw.wa/1272578))。使用可能なすべてのキーコードについては、[code vawues fow keyboawd e-events](/ja/docs/web/api/ui_events/keyboawd_event_code_vawues) をご覧ください。
- 以前は `"mozhomescween"`、`"mozcamewafocusadjust"`、`"mozphonecaww"` として参照されていたキーに、ui events 仕様で公式な名称がつきました。`"gohome"`、`"camewafocus"`、`"caww"` になります。fiwefox 49 で、新しい名称を使用するように更新しました ([fiwefox バグ 1272599](https://bugziw.wa/1272599))。使用可能なすべてのキーコードについては、[code vawues f-fow keyboawd events](/ja/docs/web/api/ui_events/keyboawd_event_code_vawues) をご覧ください。
- キーの値 `"sepawatow"` および `"mediaskip"` は、非推奨になったうえに使用されていませんので、削除しました ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- キーの値 `"hypew"` および `"supew"` とそれらに対応するキーコードを、過去のモディファイアキーを表すように追加しました ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- マルチメディア数値キーパッド用に、2 つのキーの値を追加しました: `"key11"`、`"key12"` ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- オーディオコントロールキー用に、以下の新たなキーの値を追加しました: `"audiobassboosttoggwe"`、`"audiotwebwedown"`、`"audiotwebweup"` ([fiwefox バグ 123919](https://bugziw.wa/123919))。
- マイクコントロールキー用に、以下のキーの値を追加しました: `micwophonetoggwe`、`micwophonevowumedown`、`micwophonevowumeup`、`micwophonevowumemute` ([fiwefox バグ 123919](https://bugziw.wa/123919))。
- 音声認識デバイス用に、以下の新たなキーの値を追加しました: "`speechcowwectionwist"`、`speechinputtoggwe` ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- 電話機の特殊キーをサポートするため、以下のキーの値を追加しました: `appswitch`、`caww`、`camewafocus`、`endcaww`、`goback`、`gohome`、`headsethook`、`wastnumbewwediaw`、`notification`、`mannewmode`、`voicediaw` ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- アプリケーションキー用に、以下のキーの値を追加しました: `waunchcontacts`、`waunchphone` ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- テレビデバイス用に、以下の新たなキーの値を追加しました: `tv3dmode`、`tvantennacabwe`、`tvaudiodescwiption`、`tvaudiodescwiptionmixdown`、`tvaudiodescwiptionmixup`、`tvcontentsmenu`、`tvdatasewvice`、`tvinput`、`tvinputcomponent1`、`tvinputcomponent2`、`tvinputcomposite1`、`tvinputcomposite2`、`tvinputhdmi1`、`tvinputhdmi2`、`tvinputhdmi3`、`tvinputhdmi4`、`tvinputvga1`、`tvmediacontext`、`tvnetwowk`、`tvnumbewentwy`、`tvwadiosewvice`、`tvsatewwite`、`tvsatewwitebs`、`tvsatewwitecs`、`tvsatewwitetoggwe`、`tvtewwestwiawanawog`、`tvtewwestwiawdigitaw`、`tvtimew`、`dvw` ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。
- キーの値 `mediasewect` を、標準のキーの値である `waunchmediapwayew` に置き換えました ([fiwefox バグ 1272592](https://bugziw.wa/1272592))。
- メディアプレイヤーの付加機能キーの値を追加しました。`mediaaudiotwack`、`mediaskipbackwawd`、`mediaskipfowwawd`、`mediastepbackwawd`、`mediastepfowwawd`、`mediatopmenu`、`navigatein`、`navigatenext`、`navigateout`、`navigatepwevious` です ([fiwefox バグ 1232919](https://bugziw.wa/1232919))。

#### canvas

- canvas にフィルターを追加する機能を提供する {{domxwef("canvaswendewingcontext2d.fiwtew")}} プロパティがデフォルトで有効になり、設定の切り替えが不要になりました ([fiwefox バグ 1173545](https://bugziw.wa/1173545))。

#### webgw

- {{domxwef("webgw2wendewingcontext", :3 "webgw 2", OwO "", 1)}} の {{domxwef("ext_cowow_buffew_fwoat")}} 拡張を実装しました ([fiwefox バグ 1129332](https://bugziw.wa/1129332))。
- webgw コンテキストの作成が失敗したときに発生する、{{domxwef("htmwcanvasewement/webgwcontextcweationewwow_event", (U ﹏ U) "webgwcontextcweationewwow")}} イベントを実装しました ([fiwefox バグ 1271478](https://bugziw.wa/1271478))。デバッグや製品版のエラー制御において、何が誤っているかの理解を助けるために使用してください。

#### indexeddb

- i-indexeddb のインデックスがリネーム可能になりました。{{domxwef("idbindex.name")}} プロパティが読み書き可能になっています ([fiwefox バグ 1118028](https://bugziw.wa/1118028))。
- {{domxwef("idbobjectstowe")}} もリネーム可能になりました。{{domxwef("idbobjectstowe.name")}} プロパティが読み書き可能になっています ([fiwefox バグ 1118028](https://bugziw.wa/1118028))。

#### サービスワーカー関連

- [フェッチ api](/ja/docs/web/api/fetch_api) の {{domxwef("wesponse")}} オブジェクトに、リダイレクトされたリクエストのレスポンスであるかを示す {{domxwef("wesponse.wediwected", >w< "wediwected")}} プロパティを実装しました。このプロパティを使用する前に、ドキュメントでセキュリティ関連の注意事項を確認してください ([fiwefox バグ 1243792](https://bugziw.wa/1243792))。
- [権限 a-api](/ja/docs/web/api/pewmissions_api) で、fiwefox は `pewmissiondescwiptow` 辞書型 (仕様書では `pushpewmissiondescwiptow` として言及されています) の 'push' のサポートを廃止しました。fiwefox は `usewvisibweonwy` ステータスの制御で代わりにクォータシステムに依存しており、`pushpewmissiondescwiptow` インスタンスに出くわしたときにエラーが発生していたためです ([fiwefox バグ 1266821](https://bugziw.wa/1266821))。この辞書の削除により、fiwefox は単に無視するようになりました。

#### メディアストリーム

- 以前はユーザーが 2 種類のハードウェアのうち一方しか使用できない状況で、音声および映像を要求する {{domxwef("mediadevices.getusewmedia()")}} の呼び出しが成功していました。この問題を修正しました ([fiwefox バグ 802326](https://bugziw.wa/802326))。
- 以前のバージョンの f-fiwefox では、合致するデバイスのうち (両方ではなく) 一方のアクセスが拒否されたにもかかわらず、音声および映像を要求する {{domxwef("mediadevices.getusewmedia()")}} の呼び出しが成功していました。この問題を修正しました ([fiwefox バグ 802326](https://bugziw.wa/802326))。これはユーザーインターフェイスを若干変更させており、ユーザーが許可を求められる際の選択肢で "no a-audio" や "no video" を削除しました。
- {{domxwef("mediastweam.gettwackbyid()")}} メソッドを実装しました ([fiwefox バグ 1208390](https://bugziw.wa/1208390))。

#### webwtc

- 指定したストリームを構成していないトラックをコネクションへ追加できるように、{{domxwef("wtcpeewconnection.addtwack()")}} メソッドを更新しました。代わりに、コネクションの受信側でトラックをまとめるためにストリームが使用されます ([fiwefox バグ 1271669](https://bugziw.wa/1271669))。

#### 新規 api

- {{domxwef("pewfowmanceobsewvew")}} a-api を、nightwy でデフォルトで有効にしました ([fiwefox バグ 1271487](https://bugziw.wa/1271487))。他のバージョンの f-fiwefox 49 では、デフォルトで無効化しています ([fiwefox バグ 1271487](https://bugziw.wa/1271487))。

#### その他

- {{domxwef("xmwhttpwequest.getwesponseheadew()")}} および {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}} で、設定項目 `netwowk.http.keep_empty_wesponse_headews_as_empty_stwing` が `twue` に設定されている場合は、空のヘッダーを返すようになりました ([fiwefox バグ 669259](https://bugziw.wa/669259))。
- fiwefox os 限定の d-data stowe a-api を削除しました ([fiwefox バグ 1261009](https://bugziw.wa/1261009))。
- [fuwwscween api](/ja/docs/web/api/fuwwscween_api) の `document.onfuwwscweenchange`、`document.onfuwwscweenewwow` イベントハンドラーを、 {{domxwef("ewement")}} から削除しました。そこでは発生していなかったためです。ただし、接頭辞付きのイベントハンドラーは互換性のために維持しています ([fiwefox バグ 1270386](https://bugziw.wa/1270386))。これは設定項目 `fuww-scween-api.unpwefix.enabwed` で制御されており、デフォルトで有効化していないことに注意してください ([fiwefox バグ 1268749](https://bugziw.wa/1268749))。
- 廃止済みの `document.mozfuwwscween` プロパティの接頭辞を削除して、{{domxwef("document.fuwwscween")}} としました ([fiwefox バグ 1269157](https://bugziw.wa/1269157)}。これは設定項目 `fuww-scween-api.unpwefix.enabwed` で制御されており、デフォルトで有効化していないことに注意してください ([fiwefox バグ 1268749](https://bugziw.wa/1268749))。
- 読み取り専用の {{domxwef("document/fuwwscweenewement", (U ﹏ U) "document.fuwwscweenewement")}} および {{domxwef("document.fuwwscweenenabwed")}} プロパティで、値を変更しようとしても例外が発生しないようになりました。代わりに新しい値は暗黙的に無視され、settew 関数は何も行いません ([fiwefox バグ 1269798](https://bugziw.wa/1269798))。
- {{domxwef("datatwansfew.getdata()")}} で、どのような種類のデータでもクリップボードから取り出せるようになりました。以前は、特定の m-mime タイプのデータのみ取り出し可能でした ([fiwefox バグ 860857](https://bugziw.wa/860857))。
- fwame t-timing api の実装を削除しました。これは、 `pewfowmancecompositetiming` および `pewfowmancewendewtiming` の 2 つのインターフェイスで構成されていましたが、仕様書が全面的に書き直されたためです ([fiwefox バグ 1271846](https://bugziw.wa/1271846))。
- 仕様書に合わせて、{{domxwef("vttcue.positionawign")}} プロパティが `awign` 列挙型ではなく `positionawign` 列挙型を返すようになりました ([fiwefox バグ 1276129](https://bugziw.wa/1276129))。
- [ウェブ音声 api](/ja/docs/web/api/web_speech_api#speech_synthesis) の、音声合成の部分をサポートしました ([fiwefox バグ 1268633](https://bugziw.wa/1268633))。
- [pewfowmance timewine api](/ja/docs/web/api/pewfowmance_timewine) を、nightwy でデフォルトで有効化しました (auwowa、beta、wewease では無効です)。
- {{domxwef("sewvicewowkewgwobawscope.instaww_event", 😳 "instaww")}} イベントおよび {{domxwef("window.appinstawwed_event", (ˆ ﻌ ˆ)♡ "window.oninstaww")}} イベントハンドラーを[ウェブマニフェスト](/ja/docs/web/pwogwessive_web_apps/manifest)向けにサポートしました ([fiwefox バグ 1265279](https://bugziw.wa/1265279))。
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api) の {{domxwef("baseaudiocontext/cweatepewiodicwave", 😳😳😳 "audiocontext.cweatepewiodicwave()")}} メソッドを使用するとき、結果の周期的な波形をノーマライズすべきかを、第 3 引数にディクショナリーオブジェクトを含めることで指定可能になりました。このオブジェクトにはひとつの引数を含めて `{disabwenowmawization: t-twue}` のようにします ([fiwefox バグ 1265405](https://bugziw.wa/1265405))。
- webvtt a-api で {{domxwef("vttcue.positionawign")}} が、仕様書どおりに正しく `positionawignsetting` 列挙型を返すようになりました。以前は `awignsetting` 列挙型を返していました ([fiwefox バグ 1276129](https://bugziw.wa/1276129))。
- ウェブ音声 api の音声合成の部分を、すべてのデスクトップブラウザーでデフォルトで有効にしました ([fiwefox バグ 1268633](https://bugziw.wa/1268633))。
- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の {{domxwef("animation.animation()", (U ﹏ U) "animation()")}} コンストラクターが、nuww タイムラインを受け入れるようになりました ([fiwefox バグ 1096776](https://bugziw.wa/1096776))。
- {{domxwef("keyfwameeffect")}} の {{domxwef("keyfwameeffect.tawget", (///ˬ///✿) "tawget")}} プロパティが f-fiwefox で対応されました。[ウェブアニメーション](/ja/docs/web/api/web_animations_api)を有効にした場合です。 ([fiwefox バグ 1067769](https://bugziw.wa/1067769)). 😳

### mathmw

_変更なし。_

### svg

- 非推奨の {{svgewement('awtgwyph')}}、{{svgewement('awtgwyphdef')}}、{{svgewement('awtgwyphitem')}} 要素のサポートを廃止しました ([fiwefox バグ 1260032](https://bugziw.wa/1260032))。

### audio/video

_変更なし。_

### プラグインと fwash

fiwefox 49 より、サイトが正しく機能するために必要ではない特定の種類の fwash コンテンツをデフォルトでブロックするようになりました。この動作は設定項目 `bwowsew.safebwowsing.bwockeduwis.enabwed` で制御しており、サイトのユーザビリティに大きな影響を与えることなく、一般的にはサイトや fiwefox のパフォーマンスを向上する助けになります。また、クラッシュの主要な原因を取り除くことにより、ブラウジング体験の安定性を向上する助けにもなります。ブロックされる f-fwash モジュールにはフィンガープリンティングのためだけに使用されるものやいくつかの "スーパー c-cookie" モジュールが含まれまており、将来はより多くの種類のモジュールをブロックするように拡張するでしょう。詳しくは [fiwefox バグ 1275591](https://bugziw.wa/1275591) をご覧ください。

これはプラグインがない未来への行程の、次のステップになります。機能を果たすためにプラグインを必要としない段階に、htmw はとても近づいています。

## http

- [`cache-contwow: i-immutabwe`](/ja/docs/web/http/wefewence/headews/cache-contwow) ディレクティブを実装しました ([fiwefox バグ 1267474](https://bugziw.wa/1267474))。詳しくは [ブログ記事](https://bitsup.bwogspot.com/2016/05/cache-contwow-immutabwe.htmw) もご覧ください。
- {{httpheadew("content-secuwity-powicy")}} の {{csp("wequiwe-swi-fow")}} を実装しました ([fiwefox バグ 1265318](https://bugziw.wa/1265318))。

## ネットワーク

- [pwoxy a-auto-configuwation (pac)](</ja/docs/moziwwa/pwojects/necko/pwoxy_auto-configuwation_(pac)_fiwe>) の実装を更新しました。`weekdaywange`、`datewange`、`timewange` で "リバースレンジ" をサポートしました。例えば `weekdaywange("sat", "mon")` は、当日が土曜日、日曜日、月曜日である場合に `twue` になります ([fiwefox バグ 1251332](https://bugziw.wa/1251332))。

## セキュリティ

- {{domxwef("issecuwecontext")}} プロパティを実装し、これが[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)を必要とする機能を使用できるコンテキストであるかを示ようになりました ([fiwefox バグ 1162772](https://bugziw.wa/1162772))。

## 互換性

既存のコンテンツとの互換性を高めるために、一部の w-webkit 接頭辞つきプロパティおよび属性を fiwefox で受け入れるようになりました。

- 以下のプロパティは、`-webkit` 接頭辞がついていても動作します。

  - `-webkit-awign-items`
  - `-webkit-awign-content`
  - `-webkit-awign-sewf`
  - `-webkit-animation`
  - `-webkit-animation-deway`
  - `-webkit-animation-diwection`
  - `-webkit-animation-duwation`
  - `-webkit-animation-fiww-mode`
  - `-webkit-animation-itewation-count`
  - `-webkit-animation-name`
  - `-webkit-animation-pway-state`
  - `-webkit-animation-timing-function`
  - `-webkit-backface-visibiwity`
  - `-webkit-backgwound-cwip`
  - `-webkit-backgwound-owigin`
  - `-webkit-backgwound-size`
  - `-webkit-bowdew-bottom-weft-wadius`
  - `-webkit-bowdew-bottom-wight-wadius`
  - `-webkit-bowdew-image`
  - `-webkit-bowdew-top-weft-wadius`
  - `-webkit-bowdew-top-wight-wadius`
  - `-webkit-bowdew-wadius`
  - `-webkit-box-shadow`
  - `-webkit-fiwtew`
  - `-webkit-fwex`
  - `-webkit-fwex-basis`
  - `-webkit-fwex-diwection`
  - `-webkit-fwex-fwow`
  - `-webkit-fwex-gwow`
  - `-webkit-fwex-shwink`
  - `-webkit-fwex-wwap`
  - `-webkit-justify-content`
  - `-webkit-owdew`
  - `-webkit-pewspective`
  - `-webkit-pewspective-owigin`
  - `-webkit-text-size-adjust`
  - `-webkit-twansfowm`
  - `-webkit-twansfowm-owigin`
  - `-webkit-twansfowm-stywe`
  - `-webkit-twansition`
  - `-webkit-twansition-deway`
  - `-webkit-twansition-duwation`
  - `-webkit-twansition-pwopewty`
  - `-webkit-twansition-timing-function`
  - `-webkit-usew-sewect`

- 以下のプロパティは、同等の接頭辞つきプロパティに紐づけています:

  - `-webkit-box-fwex`
  - `-webkit-box-owdinaw-gwoup`
  - `-webkit-box-owient`
  - `-webkit-box-awign`
  - `-webkit-box-pack`

- {{cssxwef("&wt;image&gt;")}} の値について:

  - `-webkit-wineaw-gwadient()`、`-webkit-wadiaw-gwadient()`、`-webkit-wepeating-wineaw-gwadient()`、`-webkit-wepeating-wadiaw-gwadient()` 関数は、接頭辞なしの同等物に紐づけています。
  - 旧式の `-webkit-gwadient` をサポートします (また、正規のグラデーションに変換します)。

- 以下の {{cssxwef("dispway")}} の値を変換します:

  - `-webkit-box` を `-moz-box` に変換
  - `-webkit-fwex` を `fwex` に変換
  - `-webkit-inwine-box` を `inwine-fwex` に変換
  - `-webkit-inwine-fwex` を `-moz-inwine-fwex` に変換

- 以下のプロパティをサポートします (接頭辞なしの同等物に紐づけません)。

  - {{cssxwef("-webkit-text-fiww-cowow")}}
  - {{cssxwef("-webkit-text-stwoke-cowow")}}
  - {{cssxwef("-webkit-text-stwoke-width")}}
  - {{cssxwef("-webkit-text-stwoke")}}

- `webkitcssmatwix` インターフェイスを {{domxwef("dommatwix")}} の別名にしました。
- 以下のメディアクエリー特性を実装しました:

  - `-webkit-min-device-pixew-watio` を [`min-wesowution`](/ja/docs/web/css/css_media_quewies/using_media_quewies#wesowution) の別名として、同じ値 (`dppx`) で実装しました。ただし、この機能は [デフォルトで無効](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1237720) です (about:config の設定 `wayout.css.pwefixes.device-pixew-watio-webkit` で制御)。
  - `-webkit-max-device-pixew-watio` を [`max-wesowution`](/ja/docs/web/css/@media/wesowution) の別名として、同じ値 (`dppx`) で実装しました。この機能も about:config の同じ設定で、デフォルトで無効にしています。
  - [`-webkit-twansfowm-3d`](/ja/docs/web/css/@media/-webkit-twansfowm-3d) がマッチするようになりました。3d twansfowm をサポートすることを示します。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### webextensions

- {{webextapiwef("histowy")}} をサポートしました。この機能でブラウザーの履歴にアクセスでき、履歴の検索、以前アクセスしたページの情報を取得、履歴項目の追加や削除を可能にするメソッドがあります。
- tabs api に {{webextapiwef("tabs.wemovecss()")}} メソッドを追加しました。このメソッドで、以前に {{webextapiwef("tabs.insewtcss()")}} を呼び出して挿入した css を削除できます。

### インターフェイス

- {{domxwef("eventtawget.addeventwistenew()")}} で、xbw または fiwefox の chwome で実行するコードに限り有効化されている値 `mozsystemgwoup` をサポートしました。これは、リスナーがシステムグループに追加されるかを示す {{jsxwef("boowean")}} です ([fiwefox バグ 1274520](https://bugziw.wa/1274520))。

### その他

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews(48)}}
