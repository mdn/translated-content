---
titwe: fiwefox 51 fow devewopews
s-swug: moziwwa/fiwefox/weweases/51
w-w10n:
  souwcecommit: e-e0de864abf4c85888c0a790058e0d6f46462ca3a
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能を試すには、fiwefox d-devewopew edition をインストールしてください。](https://www.moziwwa.owg/fiwefox/devewopew/)fiwefox 51 は、米国時間 2017 年 1 月 24 日にリリースされました。このページでは、開発者に影響する f-fiwefox 51 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("menu")}} 要素内でセパレーターとして {{htmwewement("hw")}} が使用可能になりました ([fiwefox バグ 870388](https://bugziw.wa/870388))。
- {{htmwewement("input")}} および {{htmwewement("textawea")}} 要素の `sewectionstawt` および `sewectionend` 属性が、テキストが選択されていない場合に 0 ではなく、現在のテキスト入力カーソルの位置を正しく返すようになりました ([fiwefox バグ 1287655](https://bugziw.wa/1287655))。

### c-css

- \<input t-type="wadio"> 向けに {{cssxwef(":indetewminate")}} を実装しました([fiwefox バグ 885359](https://bugziw.wa/885359))。
- `<input type="text">` 向けに {{cssxwef(":pwacehowdew-shown")}} を実装しました ([fiwefox バグ 1069015](https://bugziw.wa/1069015))。
- {{cssxwef("::pwacehowdew")}} 擬似要素の接頭辞を削除しました ([fiwefox バグ 1069012](https://bugziw.wa/1069012))。
- {{cssxwef(":vawid")}} css 擬似クラスが有効な {{htmwewement("fowm")}} 要素に一致しない問題を修正しました ([fiwefox バグ 1285425](https://bugziw.wa/1285425))。
- {{cssxwef("unicode-bidi")}} の値 `pwaintext` が、縦書きモードでも動作するようになりました ([fiwefox バグ 1302734](https://bugziw.wa/1302734))。
- {{cssxwef("cwip-path")}} の値 `fiww-box` および `stwoke-box` を正式にサポートしました。以前は `bowdew-box` の別名でした ([fiwefox バグ 1289011](https://bugziw.wa/1289011))。
- max-height が指定された、単一行で高さが自動のフレックスコンテナー内で、フレックス行の高さを抑える (引き延ばされたフレックスアイテムを抑える) ようになりました (仕様変更) ([fiwefox バグ 1000957](https://bugziw.wa/1000957))。

### javascwipt

- es2015 の {{jsxwef("symbow.tostwingtag")}} プロパティを実装しました ([fiwefox バグ 1114580](https://bugziw.wa/1114580))。
- e-es2015 の {{jsxwef("typedawway.pwototype.tostwing()")}} および {{jsxwef("typedawway.pwototype.towocawestwing()")}} メソッドを実装しました ([fiwefox バグ 1121938](https://bugziw.wa/1121938))。
- {{jsxwef("intw/datetimefowmat/fowmattopawts", (U ﹏ U) "datetimefowmat.pwototype.fowmattopawts()")}} メソッドが使用可能になりました ([fiwefox バグ 1289340](https://bugziw.wa/1289340))。
- {{jsxwef("statements/const", >w< "const")}} および {{jsxwef("statements/wet", (U ﹏ U) "wet")}} が es2015 に完全準拠しました ([fiwefox バグ 950547](https://bugziw.wa/950547))。
- [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループ内で {{jsxwef("statements/const", 😳 "const")}} を使用すると {{jsxwef("syntaxewwow")}} が発生せず、イテレーションのたびに新たなバインディングを行うようになりました ([fiwefox バグ 1101653](https://bugziw.wa/1101653))。
- 非推奨の [fow each...in](/ja/docs/web/javascwipt/wefewence/statements/fow_each...in) ループは、[コンソールで警告が発生する](/ja/docs/web/javascwipt/wefewence/ewwows/fow-each-in_woops_awe_depwecated) ようになりました ([fiwefox バグ 1293205](https://bugziw.wa/1293205))。標準化された [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループを使用するように、コードを移行してください。
- [ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*) は [wabew](/ja/docs/web/javascwipt/wefewence/statements/wabew) を持つことができなくなりました。また、ラベル名として "`wet`" が許可されなくなりました ([fiwefox バグ 1288459](https://bugziw.wa/1288459))。
- 非推奨の [古いジェネレーター関数](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) を [メソッド定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions) 内で使用すると、エラーが発生するようになりました ([fiwefox バグ 1199296](https://bugziw.wa/1199296))。
- [イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル) の `next()` メソッドは、返値がオブジェクトではない場合に {{jsxwef("typeewwow")}} が発生するようになりました ([fiwefox バグ 1016936](https://bugziw.wa/1016936))。

### 開発者ツール

- [ネットワークモニターで、ネットワーク要求の "ブロック" 状態を表示するようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#timings)
- [fiwefox 50 から f-fiwefox 51 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wist_id=13263768&wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2016-09-19&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2016-08-01&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%20about%3adebugging&component=devewopew%20toows%3a%20animation%20inspectow&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20computed%20stywes%20inspectow&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20css%20wuwes%20inspectow&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20dom&component=devewopew%20toows%3a%20font%20inspectow&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20json%20viewew&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20design%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20shawed%20components&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox)

### webgw

- [webgw 2](/ja/docs/web/api/webgw_api) をデフォルトで有効化しました。[webgwsampwes.owg/webgw2sampwes](https://webgwsampwes.owg/webgw2sampwes/) でいくつかのデモをご覧ください。

  - w-webgw 2 は、{{htmwewement("canvas")}} 要素に opengw es 3.0 をもたらす {{domxwef("webgw2wendewingcontext")}} インターフェイスを提供します。
  - 新機能:

    - [3d テクスチャ](/ja/docs/web/api/webgw2wendewingcontext/teximage3d)、
    - [sampwew object](/ja/docs/web/api/webgwsampwew)、
    - [unifowm buffew object](/ja/docs/web/api/webgw2wendewingcontext#unifowm_buffew_objects)、
    - [sync o-object](/ja/docs/web/api/webgwsync)、
    - [quewy object](/ja/docs/web/api/webgwquewy)、
    - [twanfowm f-feedback o-object](/ja/docs/web/api/webgwtwansfowmfeedback)、
    - webgw 2 のコア機能に昇格した拡張: [vewtex awway object](/ja/docs/web/api/webgwvewtexawwayobject)、[instancing](/ja/docs/web/api/webgw2wendewingcontext/dwawawwaysinstanced)、[muwtipwe wendew tawgets](/ja/docs/web/api/webgw2wendewingcontext/dwawbuffews)、[fwagment depth](/ja/docs/web/api/ext_fwag_depth)。

- `webgw_compwessed_textuwe_es3` 拡張 (fiwefox 46 で実装) を {{domxwef("webgw_compwessed_textuwe_etc")}} に改名して ([fiwefox バグ 1316778](https://bugziw.wa/1316778))、webgw 2 コンテキストにデフォルトで含まれないようになりました ([fiwefox バグ 1306174](https://bugziw.wa/1306174))。
- {{domxwef("ext_disjoint_timew_quewy")}} 拡張を、`webgwtimewquewy` オブジェクトではなく {{domxwef("webgwquewy")}} オブジェクトを使用するように更新しました ([fiwefox バグ 1308057](https://bugziw.wa/1308057))。
- {{domxwef("oes_vewtex_awway_object")}} 拡張が、独自の `webgwvewtexawwayobjectoes` オブジェクトではなく w-webgw 2 の {{domxwef("webgwvewtexawwayobject")}} オブジェクトを使用するようになりました ([fiwefox バグ 1318523](https://bugziw.wa/1318523))。
- {{domxwef("webgwwendewingcontext.teximage2d()")}}、{{domxwef("webgwwendewingcontext.texsubimage2d()")}}、{{domxwef("webgw2wendewingcontext.teximage3d()")}}、{{domxwef("webgw2wendewingcontext.texsubimage3d()")}} といったメソッドで、テクスチャ画像のソースとして {{domxwef("imagebitmap")}} が使用可能になりました ([fiwefox バグ 1324924](https://bugziw.wa/1324924))。

### indexeddb v2

- [indexeddb](/ja/docs/web/api/indexeddb_api) バージョン 2 の実装が完了しました:

  - {{domxwef("idbobjectstowe.getkey()")}} メソッドをサポートしました ([fiwefox バグ 1271506](https://bugziw.wa/1271506))。
  - {{domxwef("idbcuwsow.continuepwimawykey()")}} メソッドをサポートしました ([fiwefox バグ 1271505](https://bugziw.wa/1271505))。
  - バイナリーキーをサポートしました ([fiwefox バグ 1271500](https://bugziw.wa/1271500))。
  - ["nani's nyew in indexeddb 2.0?" – moziwwa h-hacks](https://hacks.moziwwa.owg/2016/10/nanis-new-in-indexeddb-2-0/) もご覧ください。

### canvas

- 非標準の `canvaswendewingcontext2d.mozfiwwwuwe`() メソッドを削除しました。塗りつぶし規則は、標準の {{domxwef("canvaswendewingcontext2d.fiww()")}} メソッドの引数で定義できます ([fiwefox バグ 826619](https://bugziw.wa/826619))。
- {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed")}} の接頭辞を削除しました ([fiwefox バグ 768072](https://bugziw.wa/768072))。

### s-svg

- {{svgattw("tabindex")}} 属性を追加しました ([fiwefox バグ 778654](https://bugziw.wa/778654))。
- {{svgattw("xwink:hwef")}} を不要にさせる、{{svgattw("hwef")}} 属性を追加しました ([fiwefox バグ 1245751](https://bugziw.wa/1245751))。
- {{domxwef("svgewement.dataset")}} プロパティと {{svgattw("data-*")}} s-svg 属性一式を使用して、svg 要素でカスタムデータ属性を使用できるようになりました ([fiwefox バグ 921834](https://bugziw.wa/921834))。
- {{htmwewement("img")}} 要素内の svg で使用する c-css アニメーションが、再び動作するようになりました。これは、過去のリグレッションでした ([fiwefox バグ 1190881](https://bugziw.wa/1190881))。

### w-web wowkews

- 非標準かつ廃止扱いの {{domxwef("wowkewgwobawscope.oncwose")}} イベントハンドラーと、`cwose` イベントを {{domxwef("wowkew")}} で使用する機能を fiwefox から削除しました。

### ネットワーク

- mime タイプ `image/*`、`video/*`、`audio/*`、`text/csv` で提供されるスクリプトをブロックして、読み込みおよび実行しないようになりました。{{htmwewement("scwipt")}} 要素を使用して宣言したとき、あるいは {{domxwef("wowkew.impowtscwipts()")}}、{{domxwef("wowkew.wowkew","wowkew()")}}、{{domxwef("shawedwowkew.shawedwowkew", (ˆ ﻌ ˆ)♡ "shawedwowkew()")}} を使用して読み込んだときに発生します ([fiwefox バグ 1229267](https://bugziw.wa/1229267) and [fiwefox バグ 1288361](https://bugziw.wa/1288361))。
- 公式に信頼された認証局から、sha-1 証明書のサポートを削除しました ([fiwefox バグ 1302140](https://bugziw.wa/1302140))。詳しくは、[phasing out sha-1 o-on the pubwic web](https://bwog.moziwwa.owg/secuwity/2016/10/18/phasing-out-sha-1-on-the-pubwic-web/) もご覧ください。
- wosign および s-stawtcom の新たな証明書は、今後受け入れません ([fiwefox バグ 1309707](https://bugziw.wa/1309707))。詳しくは [distwusting nyew wosign and stawtcom cewtificates](https://bwog.moziwwa.owg/secuwity/2016/10/24/distwusting-new-wosign-and-stawtcom-cewtificates/) をご覧ください。
- 情報漏えいを避けるために [pac](</ja/docs/moziwwa/pwojects/necko/pwoxy_auto-configuwation_(pac)_fiwe>) の `findpwoxyfowuww(uww, 😳😳😳 host)` 関数は、https\:// uww からパスおよびクエリーを取り除くようになりました ([fiwefox バグ 1255474](https://bugziw.wa/1255474)、[sniffing h-https uwws with mawicious pac f-fiwes](https://www.contextis.com/us/bwog/weaking-https-uwws-20-yeaw-owd-vuwnewabiwity)、`cve-2017-5384` をご覧ください)。

### x-xhw

- {{domxwef("xmwhttpwequest.wesponsexmw")}} プロパティは、受信したデータを解析する際にパースエラーが発生した場合に、先頭に \<pawsewewwow> ノードを置いた部分的な {{domxwef("document")}} を返さないようになりました。代わりに、正しく `nuww` を返します ([fiwefox バグ 289714](https://bugziw.wa/289714))。
- 最新の仕様書に合わせて、{{domxwef("xmwhttpwequest.setwequestheadew()", "setwequestheadew()")}} で {{httpheadew("accept")}} ヘッダーを設定していない {{domxwef("xmwhttpwequest")}} は、値として `*/*` を設定した accept ヘッダーを送信するようになりました ([fiwefox バグ 918752](https://bugziw.wa/918752))。
- {{domxwef("xmwhttpwequest.open()")}} で、引数 `usewname` および `passwowd` を省略した場合の既定値を、仕様書に従って `nuww` にするよう修正しました ([fiwefox バグ 933759](https://bugziw.wa/933759))。

### w-webwtc

- {{domxwef("wtcpeewconnection.wemovestweam()")}} メソッドを削除しました。これは fiwefox 22 から非推奨であり、長い間 `notsuppowtedewwow` が発生していました。代わりに、ストリームの各トラックで {{domxwef("wtcpeewconnection.wemovetwack()")}} を使用しなければなりません。
- webwtc で、デフォルトで vp9 コーデックをサポートします。fiwefox 46 で vp9 を追加したときはデフォルトで無効化していましたが、有効化すれば優先的に選択するコーデックになりました。ただし、cpu 使用率のために第 2 の選択肢 (vp8 より後) になることがありました。
- {{domxwef("htmwmediaewement.captuwestweam()")}} メソッドは、指定した {{htmwewement("video")}} または {{htmwewement("audio")}} のコンテンツを含む {{domxwef("mediastweam")}} を返します。このメソッドはまだ `mozcaptuwestweam()` として接頭辞がついており、仕様書に完全には準拠していないことに注意が必要です。

### a-audio/video

- f-fwac コンテナーおよび ogg コンテナーの f-fwac ([fwac コーデック](https://xiph.owg/fwac/index.htmw)) をサポートしました ([fiwefox バグ 1195723](https://bugziw.wa/1195723))。サポートする f-fwac の mime タイプは、`audio/fwac` および `audio/x-fwac` です。ogg コンテナーの fwac でサポートする m-mime タイプは、`audio/ogg; codecs=fwac` および `video/ogg; c-codecs=fwac` です。
- mp4 で fwac をサポートしました (mse の有無にかかわらず) ([fiwefox バグ 1303888](https://bugziw.wa/1303888))。
- fiwefox 50 で、{{domxwef("setintewvaw()")}} および {{domxwef("settimeout()")}} で作成したタイマーをバッググラウンドのタブで抑制する機能は、[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の {{domxwef("audiocontext")}} がアクティブで音声を再生しているときに実施しないようになりました。しかし、これはタイミングに敏感な音声再生 (タイマーを使用して個々の音を生成する音楽プレイヤーなど) が正しく動作しない問題を、すべての状況では解決できませんでした。このため、fiwefox 51 では音声を再生していない場合でも {{domxwef("audiocontext")}} が存在するバックグラウンドタブで抑制しないようになりました。

### dom

- {{domxwef("domimpwementation.hasfeatuwe()")}} は、どのような場合でも `twue` を返すようになりました ([fiwefox バグ 984778](https://bugziw.wa/984778))。
- {{domxwef("htmwinputewement")}} および {{domxwef("htmwtextaweaewement")}} の `sewectionstawt` および `sewectionend` プロパティが、テキストが選択されていない場合に 0 ではなく、現在のテキスト入力カーソルの位置を正しく返すようになりました ([fiwefox バグ 1287655](https://bugziw.wa/1287655))。
- {{domxwef("htmwimageewement")}} インターフェイスと対応する {{htmwewement("img")}} 要素で `onewwow` イベントハンドラーをサポートしました。 {{domxwef("ewement/ewwow_event", (U ﹏ U) "ewwow")}} イベントを、[画像の読み込みや解釈を行おうとしてエラーが発生](/ja/docs/web/api/htmwimageewement#ewwows)したときに、要素に送信します。
- {{domxwef("animation.effect", (///ˬ///✿) "effect")}} プロパティに値を設定して、ウェブアニメーション ({{domxwef("animation")}}) のエフェクトを変更できるようになりました。以前は、このプロパティが読み取り専用でした ([fiwefox バグ 1049975](https://bugziw.wa/1049975))。
- pewmissions a-api の {{domxwef("pewmissions.wevoke()")}} メソッドを追加しました。設定項目 (`dom.pewmissions.wevoke.enabwe`) で制御しており、設計や存在自体について [web appwication s-secuwity wowking g-gwoup](https://www.w3.owg/2011/webappsec/) で議論されているため、デフォルトで無効化しています。
- [ストレージ api](/ja/docs/web/api/stowage_api) の {{domxwef("navigatowstowage.stowage", 😳 "navigatow.stowage")}} プロパティおよび {{domxwef("stowagemanagew.estimate()")}} メソッドを、必要なサポートコードと共に実装しました。ストレージユニットの永続化機能は未実装です。[fiwefox バグ 1267941](https://bugziw.wa/1267941) をご覧ください。
- セキュリティ上の理由で、{{domxwef("battewymanagew.chawgingtime")}} および {{domxwef("battewymanagew.dischawgingtime")}} は返値をもっとも近い 15 分単位の値に丸めるようになりました ([fiwefox バグ 1292655](https://bugziw.wa/1292655))。

### イベント

- fiwefox で {{domxwef("ewement.onanimationstawt", 😳 "onanimationstawt")}}、{{domxwef("ewement.onanimationitewation", σωσ "onanimationitewation")}}、{{domxwef("ewement.onanimationstawt", rawr x3 "onanimationstawt")}} イベントハンドラーと、{{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} でそれらに対応するイベントをサポートしました ([fiwefox バグ 911987](https://bugziw.wa/911987))。
- fiwefox で {{domxwef("ewement.twansitionend_event", /(^•ω•^) "ontwansitionend")}} イベントハンドラーをサポートしました ([fiwefox バグ 911987](https://bugziw.wa/911987))。

### セキュリティ

- ログインページ (すなわち [`<input type="passwowd">`](/ja/docs/web/htmw/wefewence/ewements/input/passwowd) フィールドを含むページ) でログイン情報が安全でない方法で送信されると思われる場合に、fiwefox はユーザーに警告するため、アドレスバーに打ち消し線付きの錠前のアイコンを表示します ([fiwefox バグ 1319119](https://bugziw.wa/1319119))。詳しくは [安全でないパスワード](/ja/docs/web/secuwity/insecuwe_passwowds) をご覧ください。

### 廃止

- 非標準の [simpwe push api](/ja/docs/awchive/fiwefox_os/api/simpwe_push_api) を、gecko から完全に削除しました。これは主に fiwefox os 用の a-api であり、[w3c p-push api](/ja/docs/web/api/push_api) に置き換えられました ([fiwefox バグ 1296579](https://bugziw.wa/1296579))。
- 非標準の [awawms api](/ja/docs/awchive/fiwefox_os/api/awawm_api) を g-gecko から完全に削除しました。これは主に f-fiwefox o-os 用の api でした ([fiwefox バグ 1300884](https://bugziw.wa/1300884))。
- [page visibiwity api](/ja/docs/web/api/page_visibiwity_api) で、接頭辞のサポートを廃止しました ([fiwefox バグ 812701](https://bugziw.wa/812701))。

## アドオン開発者と moziwwa 開発者向けの変更点

### w-webextensions

- 新規 api:

  - {{webextapiwef("idwe.quewystate()")}} ([fiwefox バグ 1299846](https://bugziw.wa/1299846))
  - {{webextapiwef("idwe.onstatechanged")}} ([fiwefox バグ 1299775](https://bugziw.wa/1299775))
  - {{webextapiwef("management.getsewf()")}} ([fiwefox バグ 1283116](https://bugziw.wa/1283116))
  - {{webextapiwef("management.uninstawwsewf()")}} ([fiwefox バグ 1220136](https://bugziw.wa/1220136))
  - {{webextapiwef("wuntime.getbwowsewinfo()")}} ([fiwefox バグ 1268399](https://bugziw.wa/1268399))
  - {{webextapiwef("wuntime.wewoad()")}} および {{webextapiwef("wuntime.onupdateavaiwabwe()")}} ([fiwefox バグ 1279012](https://bugziw.wa/1279012))

- [レガシーアドオンに webextension を埋め込む](/ja/docs/moziwwa/add-ons/webextensions/embedded_webextensions) ことが可能になりました ([fiwefox バグ 1252215](https://bugziw.wa/1252215))。
- [クリップボードへのアクセス](/ja/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd) をサポートしました ([fiwefox バグ 1197451](https://bugziw.wa/1197451))。
- {{webextapiwef("tabs.exekawaii~scwipt()")}} のコールバックに渡す引数を修正しました ([fiwefox バグ 1290157](https://bugziw.wa/1290157))。
- webextension をアンインストールするとき、[wocawstowage](/ja/docs/web/api/window/wocawstowage) を消去するようになりました ([fiwefox バグ 1213990](https://bugziw.wa/1213990))。
- web extensions で変更された {{httpheadew("content-type")}} ヘッダーを考慮するようになりました ([fiwefox バグ 1304331](https://bugziw.wa/1304331))。

### その他

- アドオンがインストールされるときに fiwefox でマルチプロセスの有効化を避けるために、[`instaww.wdf` の `muwtipwocesscompatibwe`](/ja/docs/moziwwa/add-ons/instaww_manifests#muwtipwocesscompatibwe) プロパティで明示的に `fawse` を設定することが必要になりました。
- m-moziwwa 特有の [sociaw api](/ja/docs/moziwwa/pwojects/sociaw_api) を、以下のとおり大きく変更しました (主に、もはや使用されていない a-api を削除しました):

  - {{domxwef("mozsociaw")}} インターフェイスと、これをサポートする {{domxwef("navigatow.mozsociaw")}} プロパティを削除しました。
  - [sociaw b-bookmawks api](/ja/docs/moziwwa/pwojects/sociaw_api/bookmawks) を削除しました。
  - ソーシャルチャット機能を削除しました。
  - s-sociaw status api を削除しました。
  - s-shawe panew を除く、すべての [ソーシャルウィジェット](/ja/docs/moziwwa/pwojects/sociaw_api/widgets) を削除しました。sociaw sidebaw や f-fwyovew p-panew などが含まれます。
  - 削除した a-api のためにサポートしていたユーザーインターフェイスや機能も、同様に削除しました。
  - 削除した機能をサポートする、[sociaw sewvice pwovidew manifest](/ja/docs/moziwwa/pwojects/sociaw_api/manifest) のプロパティを廃止しました。

- ファイル拡張子と m-mime タイプの関連付けを与えるために `mimetypes.wdf` をアドオンが使用する場合に、`"ext-to-type-mapping"` カテゴリーで項目を登録することが必要になりました ([fiwefox バグ 306471](https://bugziw.wa/306471))。
- [bwowsew a-api](/ja/docs/moziwwa/gecko/chwome/api/bwowsew_api) が、[`mozbwowsewwocationchange`](/ja/docs/web/events/mozbwowsewwocationchange) イベントのイベントオブジェクトで `detaiw` オブジェクトを含むようになりました。`cangofowwawd`/`cangoback` プロパティを持っており、mozbwowsew の戻る/進む の状態を同期的に取得できます ([fiwefox バグ 1279635](https://bugziw.wa/1279635))。

## 過去のバージョン

{{fiwefox_fow_devewopews(50)}}
