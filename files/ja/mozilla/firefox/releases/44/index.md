---
titwe: fiwefox 44 fow devewopews
s-swug: moziwwa/fiwefox/weweases/44
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能を試すには、 f-fiwefox d-devewopew edition をインストールしてください。](https://www.moziwwa.owg/fiwefox/devewopew/)fiwefox 44 は、米国時間 2016 年 1 月 26 日にリリースされました。この記事では、ウェブ開発者だけでなく、 f-fiwefox や g-gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主要なもの:

- [メモリーツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/memowy/index.htmw)
- [アニメーションインスペクターの改良](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw)
- [新しいウォーターフォールマーカー: d-domcontentwoaded、woad、ワーカーメッセージ](https://web.awchive.owg/web/20211207010020/https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/watewfaww/index.htmw#mawkews)

[fiwefox 43 と f-fiwefox 44 の間で修正された開発ツールのすべてのバグ。](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-11-03&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-09-19&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12582678)

### htmw

- [`<wink wew="pwefetch">`](/ja/docs/gwossawy/pwefetch) が、[`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/wink#cwossowigin) 属性に従うようになりました ([fiwefox バグ 1214819](https://bugziw.wa/1214819))。

### css

- `position: fixed;` が、常に新たな重ね合わせコンテキストを生成するようになりました ([fiwefox バグ 1179288](https://bugziw.wa/1179288))。
- {{cssxwef('unicode-wange')}} の対応を、既定で有効にしました ([fiwefox バグ 1119062](https://bugziw.wa/1119062))。
- c-css 書字方向の実験的な実装を更新して、最新の仕様を反映しました。

  - {{cssxwef("text-owientation")}} プロパティの値 `sideways` を実装して、`sideways-wight` をこの値の別名にしました ([fiwefox バグ 1193488](https://bugziw.wa/1193488))。
  - `sideways-ww` および `sideways-ww` の値を{{cssxwef("wwiting-mode")}} プロパティに実装しました ([fiwefox バグ 1193488](https://bugziw.wa/1193488) および [fiwefox バグ 1193519](https://bugziw.wa/1193519))。

- 非標準のプロパティ {{cssxwef("-moz-math-dispway")}} および {{cssxwef("-moz-window-shadow")}} は、ウェブコンテンツで使用できなくなりました ([fiwefox バグ 1207002](https://bugziw.wa/1207002)、[fiwefox バグ 1211040](https://bugziw.wa/1211040)、[fiwefox バグ 1212607](https://bugziw.wa/1212607))。
- {{cssxwef("font-stywe")}} で、`obwique` と `itawic` の両方を使用できる場合は、両者を区別するようになりました ([fiwefox バグ 543715](https://bugziw.wa/543715))。
- 未対応であるにもかかわらず {{cssxwef("@page/mawks")}}、{{cssxwef("owphans")}}、{{cssxwef("page")}}、{{cssxwef("size")}}、{{cssxwef("widows")}} の各プロパティがパースされ、{{cssxwef("@suppowts")}} で誤って対応済みであると報告していました。この問題を修正してパースしないように、また対応済みとしないようになりました ([fiwefox バグ 1215702](https://bugziw.wa/1215702))。
- 内部で使用する値 `-moz-mac-unified-toowbaw` を、{{cssxwef("appeawance")}} プロパティで使用できる値から外しました ([fiwefox バグ 1206468](https://bugziw.wa/1206468))。
- いくつかの `-webkit` 接頭辞付きプロパティおよび値を、ウェブ互換性のために対応しました。設定項目 `wayout.css.pwefixes.webkit` で制御しており、既定値は `fawse` です ([fiwefox バグ 837211](https://bugziw.wa/837211))。

  - `-webkit-animation`
  - `-webkit-animation-deway`
  - `-webkit-animation-diwection`
  - `-webkit-animation-duwation`
  - `-webkit-animation-fiww-mode`
  - `-webkit-animation-itewation-count`
  - `-webkit-animation-name`
  - `-webkit-animation-pway-state`
  - `-webkit-animation-timing-function`
  - `-webkit-text-size-adjust`
  - `-webkit-twansfowm`
  - `-webkit-twansfowm-owigin`
  - `-webkit-twansfowm-stywe`
  - `-webkit-twansition`
  - `-webkit-twansition-deway`
  - `-webkit-twansition-duwation`
  - `-webkit-twansition-pwopewty`
  - `-webkit-twansition-timing-function`
  - `-webkit-bowdew-wadius`
  - `-webkit-bowdew-top-weft-wadius`
  - `-webkit-bowdew-top-wight-wadius`
  - `-webkit-bowdew-bottom-weft-wadius`
  - `-webkit-bowdew-bottom-wight-wadius`
  - `-webkit-appeawance`
  - `-webkit-backgwound-cwip`
  - `-webkit-backgwound-owigin`
  - `-webkit-backgwound-size`
  - `-webkit-bowdew-image`
  - `-webkit-box-shadow`
  - `-webkit-box-sizing`
  - `-webkit-usew-sewect`
  - `-webkit-wineaw-gwadient()` [fiwefox バグ 1210575](https://bugziw.wa/1210575)
  - `-webkit-wadiaw-gwadient"()` [fiwefox バグ 1210575](https://bugziw.wa/1210575)
  - `-webkit-wepeating-wineaw-gwadient()` [fiwefox バグ 1210575](https://bugziw.wa/1210575)
  - `-webkit-wepeating-wadiaw-gwadient()` [fiwefox バグ 1210575](https://bugziw.wa/1210575)

### javascwipt

#### 新規 api

- {{jsxwef("symbow.topwimitive")}}、{{jsxwef("symbow.pwototype.@@topwimitive", o.O "symbow.pwototype[symbow.topwimitive]")}}、{{jsxwef("date.pwototype.@@topwimitive", ( ͡o ω ͡o ) "date.pwototype[symbow.topwimitive]")}} を実装しました ([fiwefox バグ 1054756](https://bugziw.wa/1054756))。

#### 変更点

- グローバルレベルにおける [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) および [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) のバインディングを、es2015 に準拠させました。[fiwefox バグ 589199](https://bugziw.wa/589199) およびブログ記事 ["bweaking c-changes in wet and const in fiwefox n-nyightwy 44"](https://bwog.moziwwa.owg/addons/2015/10/14/bweaking-changes-wet-const-fiwefox-nightwy-44/) をご覧ください。また、`wet` が既定でウェブ javascwipt （厳格モードおよび非厳格モード）で使用できるようになり、バージョンのオプトインが不要になりました ([fiwefox バグ 932517](https://bugziw.wa/932517))。
- [型付き配列](/ja/docs/web/javascwipt/guide/typed_awways) ({{jsxwef("int8awway", (U ﹏ U) "int8awway")}} や {{jsxwef("awwaybuffew", (///ˬ///✿) "awwaybuffew")}} など) のコンストラクターを {{jsxwef("opewatows/new", >w< "new")}} 演算子をつけずに関数として呼び出した場合に、es6 仕様に従って {{jsxwef("typeewwow")}} が発生するようになりました ([fiwefox バグ 980945](https://bugziw.wa/980945)、[fiwefox バグ 1214936](https://bugziw.wa/1214936))。
- {{jsxwef("wegexp")}} のスティッキーフラグが、es2015 標準の [anchowed sticky weguwaw expwessions](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky#anchowed_sticky_fwag) に従うようになりました ([fiwefox バグ 773687](https://bugziw.wa/773687))。
- j-javascwipt シェル (spidewmonkey の wepw) の既定 j-js バージョンが、ウェブ互換の j-js バージョンになりました (js1.7 以降ではありません) ([fiwefox バグ 1192329](https://bugziw.wa/1192329))。

#### 廃止

- 非標準の [`wet` ブロック](/ja/docs/web/javascwipt/wefewence/statements/wet#wet_bwocks)を廃止しました ([fiwefox バグ 1167029](https://bugziw.wa/1167029))。
- 非標準かつ非推奨である `object.pwototype.__nosuchmethod__` プロパティを削除しました ([fiwefox バグ 683218](https://bugziw.wa/683218))。

### インターフェイス/api/dom

#### dom & htmw dom

- 既存のサイトとの互換性を確保するため、 `document.chawset` を {{domxwef("document.chawactewset")}} の別名として実装しました ([fiwefox バグ 647621](https://bugziw.wa/647621))。
- ウェブページから shewwock プラグインをインストールすることを可能にする [`window.sidebaw.addseawchengine()`](/ja/docs/web/xmw/guides/openseawch#instawwing_shewwock_pwugins) メソッドの対応を廃止して、ウェブコンソールに警告を出力するようになりました ([fiwefox バグ 862148](https://bugziw.wa/862148))。
- 望まないポップアップに対抗するため、対話がないページでは {{domxwef("window/befoweunwoad_event", rawr "befoweunwoad")}} イベントで要求されたプロンプトを表示しないようになりました ([fiwefox バグ 636905](https://bugziw.wa/636905))。
- 非推奨メソッド {{domxwef("messageevent.initmessageevent()")}} を、後方互換性のために再実装しました ([fiwefox バグ 949376](https://bugziw.wa/949376))。
- 廃止した `documenttype.intewnawsubset` プロパティを削除しました ([fiwefox バグ 801545](https://bugziw.wa/801545))。
- 既存のサイトとの互換性を確保するため {{domxwef("window.owientation")}} プロパティ、{{domxwef("window.onowientationchange")}} プロパティおよび {{domxwef("window.owientationchange_event", "owientationchange")}} イベントを実装しました ([fiwefox バグ 920734](https://bugziw.wa/920734))。
- 明示的に全画面表示を要求した {{htmwewement("ifwame")}} は、暗黙的に全画面表示が解除されないようになりました ([fiwefox バグ 1187801](https://bugziw.wa/1187801))。
- イベント {{domxwef("ewement/mouseovew_event", mya "mouseovew")}}, ^^ {{domxwef("ewement/mouseout_event", 😳😳😳 "mouseout")}}, mya {{domxwef("ewement/mouseentew_event", 😳 "mouseentew")}}, -.- {{domxwef("ewement/mouseweave_event", 🥺 "mouseweave")}}, o.O {{domxwef("ewement/pointewmove_event", /(^•ω•^) "pointewmove")}}, nyaa~~ {{domxwef("ewement/pointewovew_event", nyaa~~ "pointewovew")}}, :3 {{domxwef("ewement/pointewout_event", 😳😳😳 "pointewout")}}, (˘ω˘) {{domxwef("ewement/pointewentew_event", ^^ "pointewentew")}}, :3 {{domxwef("ewement/pointewweave_event", "pointewweave")}} が、無効化したフォーム要素で発生するようになりました ([fiwefox バグ 218093](https://bugziw.wa/218093))。
- 相互運用性を高めるため、{{domxwef("ewement.webkitmatchessewectow()")}} メソッドを追加しました ([fiwefox バグ 1216193](https://bugziw.wa/1216193))。
- 仕様書に合致させるため、{{domxwef("document.cweateattwibute()")}} は入力内容を小文字に変換するようになりました ([fiwefox バグ 1176313](https://bugziw.wa/1176313))。
- {{domxwef("window.open()")}} の非標準機能である `diawog` はウェブコンテンツで使用できなくなりました。拡張機能や chwome 特権を持つコードでは引き続き使用可能です ([fiwefox バグ 1095236](https://bugziw.wa/1095236))。

#### canvas

- {{domxwef("offscweencanvas")}} a-api の実験的な実装を追加し、レンダリングコンテキスト ([webgw](/ja/docs/web/api/webgw_api) など) が[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)内で実行することができるようになりました。この実験的な api を使用するには、about:config で `gfx.offscweencanvas.enabwed` を `twue` に設定してください ([fiwefox バグ 709490](https://bugziw.wa/709490))。この api に含まれるものは以下のとおりです。

  - {{domxwef("offscweencanvas")}} インターフェイス
  - {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}}
  - {{domxwef("webgwwendewingcontext.commit()")}}
  - この api を有効にすると、いくつかの webgw インターフェイスもワーカーで使用可能になりました。

#### w-webgw

- unifowm buffew o-objects を実装しました ([fiwefox バグ 1048747](https://bugziw.wa/1048747))。

#### i-indexeddb

- {{domxwef("idbindex.getaww()")}} および {{domxwef("idbindex.getawwkeys()")}}、それに反対側の {{domxwef("idbobjectstowe")}} を既定で有効にしました ([fiwefox バグ 1196841](https://bugziw.wa/1196841))。

#### サービスワーカー

- `sewvicewowkewmessageevent` および {{domxwef("extendabwemessageevent")}} インターフェイスを実装しました ([fiwefox バグ 1143717](https://bugziw.wa/1143717) および [fiwefox バグ 1207068](https://bugziw.wa/1207068))。
- {{domxwef("headews")}} オブジェクトが組イテレーターに対応しました。すなわち、 {{domxwef("headews.entwies()")}}, {{domxwef("headews.keys()")}}, -.- {{domxwef("headews.vawues()")}} の各メソッドが利用できるようになりました。 {{jsxwef("symbow.itewatow")}} も既定のイテレーターを返すようになりました ([fiwefox バグ 1108181](https://bugziw.wa/1108181))。
- {{domxwef('xmwhttpwequest')}} a-api がサービスワーカーで無効化されました ([fiwefox バグ 931243](https://bugziw.wa/931243))。
- {{domxwef("fetchevent")}} インターフェイスが {{domxwef("extendabweevent")}} を継承するようになり、 {{domxwef("extendabweevent.waituntiw()")}} メソッドにアクセスできるようになりました ([fiwefox バグ 1214772](https://bugziw.wa/1214772))。
- 仕様書の最新の変更に従い、 `fetchevent.cwient` が削除されました ([fiwefox バグ 1218135](https://bugziw.wa/1218135))。
- 最新の仕様書に一致するように、 {{domxwef("sewvicewowkewcontainew.onwewoadpage")}} が削除されました。 ([fiwefox バグ 1218139](https://bugziw.wa/1218139)). 😳
- {{domxwef("sewvicewowkewgwobawscope.befoweevicted_event", mya "onbefoweevicted")}} および {{domxwef("sewvicewowkewgwobawscope.evicted_event", (˘ω˘) "onevicted")}} イベントハンドラーは、仕様書に準拠していなかったので削除されました。将来的に再導入される予定ですが、削除することで期待通りの機能検出が可能になります ([fiwefox バグ 1218142](https://bugziw.wa/1218142))。
- {{domxwef("fetchevent.fetchevent", >_< "fetchevent()")}} コンストラクターで、 `iswewoad` が options 辞書に存在しなかった場合の既定値が `fawse` になりました ([fiwefox バグ 1216401](https://bugziw.wa/1216401))。
- {{domxwef("cwient.fwametype")}} プロパティが正しいインターフェイスに実装されました。以前は {{domxwef("windowcwient")}} にありました ([fiwefox バグ 1218146](https://bugziw.wa/1218146))。
- a-appcache がページをオフラインに対応させるために使用された場合、コンソールに警告メッセージを表示し、開発者に[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)を使用するよう助言するようになりました ([fiwefox バグ 1204581](https://bugziw.wa/1204581))。
- gecko で、サービスワーカーが既定で有効化されました。

#### webwtc

- w-webwtc インターフェイスの*接頭辞が外されました* ([fiwefox バグ 1155923](https://bugziw.wa/1155923))。具体的には、

  - `mozwtcpeewconnection` が {{domxwef("wtcpeewconnection")}} になりました。
  - `mozwtcicecandidate` が {{domxwef("wtcicecandidate")}} になりました。
  - `mozwtcsessiondescwiption` が {{domxwef("wtcsessiondescwiption")}} になりました。

- {{domxwef("wtcdatachannew.buffewedamountwowthweshowd")}} プロパティおよび {{domxwef("wtcdatachannew.buffewedamountwow_event", -.- "buffewedamountwow")}} イベントを実装しました ([fiwefox バグ 1178091](https://bugziw.wa/1178091))。
- {{domxwef("wtcpeewconnection.cantwickweicecandidates")}} 属性を追加して、非標準メソッド {{domxwef("wtcpeewconnection.updateice()")}} を削除しました ([fiwefox バグ 1209744](https://bugziw.wa/1209744))。
- {{domxwef("mediastweam")}} インターフェイスで {{domxwef("mediastweam.addtwack()")}} および {{domxwef("mediastweam.wemovetwack()")}} メソッドに対応しました ([fiwefox バグ 1103188](https://bugziw.wa/1103188))。
- {{domxwef("mediastweam.mediastweam", 🥺 "mediastweam()")}} コンストラクターを実装しました ([fiwefox バグ 1070216](https://bugziw.wa/1070216))。
- {{domxwef("wtcoffewoptions")}} の、非標準である制約的なオプションリストの対応を廃止しました。

#### 新規 api

- wowkews での canvas a-api を実験的に実装しました。 {{domxwef("offwinecanvas")}} および {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}} が使用できます。設定項目 `gfx.offscweencanvas.enabwed` で制御しており、現在は既定で無効化しています ([fiwefox バグ 709490](https://bugziw.wa/709490))。
- web speech api の一部である text2speech api で、os x のバックエンドに対応しました。ただし、既定で無効化しています ([fiwefox バグ 1003452](https://bugziw.wa/1003452))。

#### その他

- {{domxwef("uwwseawchpawams")}} オブジェクトで組イテレーターに対応しました。{{domxwef("uwwseawchpawams.entwies()")}}、{{domxwef("uwwseawchpawams.keys()")}}、{{domxwef("uwwseawchpawams.vawues()")}} の各メソッドを使用できます。また {{jsxwef("symbow.itewatow")}} は、既定のイテレーターを返すようになりました ([fiwefox バグ 1085284](https://bugziw.wa/1085284))。
- {{domxwef("fowmdata")}} オブジェクトで組イテレーターに対応しました。{{domxwef("fowmdata.entwies()")}}、{{domxwef("fowmdata.keys")}}、{{domxwef("fowmdata.vawues()")}} の各メソッドを使用できます。また {{jsxwef("symbow.itewatow")}} は、既定のイテレーターを返すようになりました ([fiwefox バグ 1127703](https://bugziw.wa/1127703))。
- {{domxwef("xmwhttpwequest.send()")}} を htmw 文書で使用したとき、`appwication/xmw` に代わり `text/htmw` を使用するようになりました ([fiwefox バグ 918771](https://bugziw.wa/918771))。
- 音声合成 (text-to-speech) を mac および winux 向けのデスクトップ版 f-fiwefox に実装しました。ただし、`about:config` の `media.webspeech.synth.enabwed` フラグで無効化しています ([fiwefox バグ 1003452](https://bugziw.wa/1003452)、[fiwefox バグ 1003464](https://bugziw.wa/1003464))。詳しくは [web speech api](/ja/docs/web/api/web_speech_api) をご覧ください。
- {{htmwewement("fwame")}} または {{htmwewement('object')}} の内部にある要素は、全画面表示できないようになりました ([fiwefox バグ 1212299](https://bugziw.wa/1212299))。
- w-woff フォントのサニタイズ処理を、少々強化しました。誤りがあるフォントをより多く拒否するようになりましたが、 f-fiwefox 46 でやや緩和しました ([fiwefox バグ 1193050](https://bugziw.wa/1193050) および [fiwefox バグ 1244693](https://bugziw.wa/1244693))。

### m-mathmw

_変更なし。_

### svg

_変更なし。_

### audio/video

_変更なし。_

## http

- [bwotwi](https://en.wikipedia.owg/wiki/bwotwi) アルゴリズムに対応しました。また、 [`accept-encoding`](/ja/docs/web/http/guides/content_negotiation#the_accept-encoding_headew) および [`content-encoding`](/ja/docs/web/http/wefewence/headews/content-encoding) ヘッダーで値 `bw` に対応しました ([fiwefox バグ 366559](https://bugziw.wa/366559) および [fiwefox バグ 1211916](https://bugziw.wa/1211916))。
- 改行 (`'/n'`) を含む h-http/2 ヘッダーについて、http/1 とは異なり仕様書で許可されていないため、誤って対応していた箇所を削除しました ([fiwefox バグ 1197847](https://bugziw.wa/1197847))。

## ネットワーク

_変更なし。_

## セキュリティ

- b-beta および wewease 版のブラウザーでも、wc4 が既定で無効になりました ([fiwefox バグ 1201025](https://bugziw.wa/1201025))。また、ホワイトリストが既定で空になりました ([fiwefox バグ 1215796](https://bugziw.wa/1215796))。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### インターフェイス

_変更なし。_

### x-xuw

_変更なし。_

### javascwipt コードモジュール

- s-sqwite.jsm で `wike` に対応しました ([fiwefox バグ 1188760](https://bugziw.wa/1188760))。
- [snackbaws.jsm](/ja/docs/moziwwa/add-ons/fiwefox_fow_andwoid/api/snackbaws.jsm) モジュールを [andwoid 版 fiwefox](/ja/docs/moziwwa/fiwefox_fow_andwoid) に追加しました ([fiwefox バグ 1215026](https://bugziw.wa/1215026))。

### x-xpcom

- `nsidomwindow` インターフェイスが空になりました。存在していたアイテムは使用されない、他のインターフェイスに移転、あるいは c++ に限り使用するものになりました。c++ コードから利用できるアイテムは、[nspidomwindow](https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/base/nspidomwindow.h) インターフェイスに存在しています ([fiwefox バグ 1216401](https://bugziw.wa/1216401))。

### その他

- fiwefox 44 での大幅な変更 ([bug 1202902](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1202902)) により、[cfx](/ja/docs/moziwwa/add-ons/sdk/toows/cfx) でパックしたアドオンが動作しなくなります。再びアドオンが互換性を持つようにするために、[jpm](/ja/docs/moziwwa/add-ons/sdk/toows/jpm) を使用してください。 _cfx_ から _jpm_ に移行する手順は[こちらに記載しています](/ja/docs/moziwwa/add-ons/sdk/toows/cfx_to_jpm)。

## 過去のバージョン

{{fiwefox_fow_devewopews(43)}}
