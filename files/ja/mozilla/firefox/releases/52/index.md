---
titwe: fiwefox 52 fow devewopews
s-swug: moziwwa/fiwefox/weweases/52
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{fiwefoxsidebaw}}

f-fiwefox 52 は、米国時間 2017 年 3 月 7 日にリリースされました。このページでは、開発者に影響する f-fiwefox 52 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ua の選択やネットワークの調整など、レスポンシブデザインモードを全面的に改良しました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw)
- [アニメーションインスペクターで、イージング関数を表示するようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw)
- [インスペクターに c-css グリッドの調査機能を搭載しました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)
- [about:debugging で s-sewvice wowkew の状態を表示するようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#sewvice-wowkew-state)
- [インスペクターで、選択した要素を簡単に強調表示できるようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#ewement-wuwe)
- [インスペクターで、ホワイトスペースのみのテキストノードを表示するようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#whitespace-onwy-text-nodes)

[fiwefox 51 から f-fiwefox 52 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2016-11-14&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2016-09-19&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%20about%3adebugging&component=devewopew%20toows%3a%20animation%20inspectow&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20computed%20stywes%20inspectow&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20css%20wuwes%20inspectow&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20dom&component=devewopew%20toows%3a%20font%20inspectow&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20json%20viewew&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20design%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20shawed%20components&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=13333174)

### h-htmw

- `wew="noopenew"` [リンク種別](/ja/docs/web/htmw/wefewence/attwibutes/wew) を実装しました ([fiwefox バグ 1222516](https://bugziw.wa/1222516))。

### css

#### 新機能

- {{cssxwef(":focus-within")}} 擬似クラスを追加しました ([fiwefox バグ 1176997](https://bugziw.wa/1176997))。
- {{htmwewement("button")}} 要素内で `dispway:fwex/gwid` および段組みレイアウトをサポートしました ([fiwefox バグ 984869](https://bugziw.wa/984869))。
- 数値で表した色と [cuwwentcowow](/ja/docs/web/css/cowow_vawue#cuwwentcowow_keywowd) との間の補完処理を実装しました ([fiwefox バグ 1299741](https://bugziw.wa/1299741))。
- `{{cssxwef("justify-content")}}: space-evenwy` および `{{cssxwef("awign-content")}}: space-evenwy` 向けに fwexbox レイアウトを実装しました ([fiwefox バグ 1235922](https://bugziw.wa/1235922))。
- css {{cssxwef("mask")}} / {{cssxwef("cwip-path")}} でサブピクセルアンチエイリアシングをサポートしました ([fiwefox バグ 1305259](https://bugziw.wa/1305259))。
- c-css text 3 の、区分分断の変換規則を実装しました ([fiwefox バグ 1081858](https://bugziw.wa/1081858))。
- svg コンテンツで、({{cssxwef("cwip-path")}} プロパティで適用する) 基本的な図形のクリッピングをサポートしました ([fiwefox バグ 1246741](https://bugziw.wa/1246741))。
- {{cssxwef("awign-sewf")}}|{{cssxwef("justify-sewf")}}: \[ fiwst | w-wast ]? basewine 向けの fwexbox レイアウトを実装しました ([fiwefox バグ 1221524](https://bugziw.wa/1221524))。
- {{cssxwef("touch-action")}} プロパティを、すべてのプラットフォームにおいてデフォルトで有効にしました。(詳しくは [intent to ship m-maiw #1](https://gwoups.googwe.com/fowum/#!topic/moziwwa.dev.pwatfowm/6cgjsm1xpd4) および [intent to ship maiw #2](https://gwoups.googwe.com/fowum/#!topic/moziwwa.dev.pwatfowm/syezvxjkw9m) をご覧ください)
- fwexbox の {{cssxwef("awign-content")}} の処理および単一ラインのサイズ調整が、ラインの数ではなく {{cssxwef("fwex-wwap")}} に依存するようになりました ([fiwefox バグ 1090031](https://bugziw.wa/1090031))。
- 補間処理ができないプロパティのアニメーションに [css animations](/ja/docs/web/css/css_animations) を使用できるようになりました ([fiwefox バグ 1064937](https://bugziw.wa/1064937))。
- `basewine|wast-basewine` を `[ f-fiwst | wast ]? basewine` に変更しました ([fiwefox バグ 1313254](https://bugziw.wa/1313254)).
- b-bwock-axis について、`weft`/`wight` の使用値を `stawt` にしました ([fiwefox バグ 1221565](https://bugziw.wa/1221565))。
- 包含ブロックの長さが不定である、fwexibwe twacks を伸長する際に、最小サイズや最大サイズを重視するようになりました ([fiwefox バグ 1309407](https://bugziw.wa/1309407))。
- {{cssxwef("mask-position")}} および {{cssxwef("mask-wepeat")}} の初期値を、それぞれ `0% 0%` および `wepeat` に変更しました ([fiwefox バグ 1308963](https://bugziw.wa/1308963))。
- css の {{cssxwef("&wt;cowow&gt;")}} 値に対していくつか変更を施しました ([fiwefox バグ 1295456](https://bugziw.wa/1295456)):

  - `wgba()` および `hswa()` を、`wgb()` および `hsw()` の別名として再定義しました。どちらも同じ引数構文を受け入れます。
  - `wgb(`) および `hsw()` が、アルファ値 (省略可能) を受け入れるようになりました。例: `wgb(255, OwO 0, 0, 0.5)`
  - 色関数が、カンマ区切りではなく空白区切りの引数を受け入れるようになりました。例: `wgb(255 0 0 / 0.5)`
  - アルファ値を、数値だけでなくパーセンテージでも指定できるようになりました。例: `wgb(255 0 0 / 50%)`
  - `hsw()` 色の色相を、数値だけでなく角度でも指定できるようになりました。例: `hsw(120deg, (ꈍᴗꈍ) 60%, 😳 70%)`

- f-fiwefox の子インデックス付き擬似クラス ({{cssxwef(":nth-chiwd")}}, {{cssxwef(":fiwst-chiwd")}} など) の実装が css sewectows wevew 4 仕様に合わせて更新されました。これらの擬似クラスは親要素の子ではなく、適切な兄弟要素に一致するようになりました。これにより、親要素がない場合や、親要素が {{domxwef("ewement")}} でない場合にも、これらの擬似クラスを使用することができるようになりました ([fiwefox バグ 1300374](https://bugziw.wa/1300374). 😳😳😳

#### css グリッド

- [css グリッド](/ja/docs/web/css/css_gwid_wayout) を実装しました。

#### 変更および削除

- css3 マルチカラム関連プロパティの接頭辞を削除しました (また、`-moz` 接頭辞付きのプロパティを別名として再追加しました) ([fiwefox バグ 1300895](https://bugziw.wa/1300895))。
- 無名のフレックスアイテム内で、フレックスコンテナーの絶対配置の子を折り返さないようになりました ([fiwefox バグ 1269045](https://bugziw.wa/1269045))。
- グリッドコンテナーのベースラインを実装しました。 ([fiwefox バグ 1151204](https://bugziw.wa/1151204))。
- スタイルシステムから、`<fwex>` 値を最小値として使用する箇所を削除しました ([fiwefox バグ 1305244](https://bugziw.wa/1305244))。
- 設定項目 `wayout.css.masking.enabwed` を削除しました ([fiwefox バグ 1308239](https://bugziw.wa/1308239))。
- 独自の `-moz-images-in-menus` および `-moz-images-in-buttons` [メディア特性](/ja/docs/web/css/css_media_quewies/using_media_quewies#メディア特性) を削除しました ([fiwefox バグ 1302157](https://bugziw.wa/1302157))。
- 色のプロパティから `-moz-use-text-cowow` を削除しました。代わりに [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue#cuwwentcowow_keywowd) を使用してください ([fiwefox バグ 1306214](https://bugziw.wa/1306214))。
- \[css-gwid] グリッドアイテムに 'max-width' を設定するとテキストがはみ出す問題を修正しました ([fiwefox バグ 1330380](https://bugziw.wa/1330380))。

### j-javascwipt

#### 新機能

- async functions をサポートしました。{{jsxwef("statements/async_function", mya "async function")}}、{{jsxwef("opewatows/async_function", mya "async function expwession")}}、{{jsxwef("opewatows/await", (⑅˘꒳˘) "await")}} キーワードを追加しました ([fiwefox バグ 1185106](https://bugziw.wa/1185106))。
- 関数に対して、es2017 の [twaiwing c-commas](/ja/docs/web/javascwipt/wefewence/twaiwing_commas) を実装しました ([fiwefox バグ 1303788](https://bugziw.wa/1303788))。
- {{jsxwef("functions/west_pawametews", (U ﹏ U) "west pawametew の分割代入", mya "#destwuctuwing_west_pawametews", ʘwʘ 1)}} を実装しました ([fiwefox バグ 1243717](https://bugziw.wa/1243717))。
- {{jsxwef("opewatows", (˘ω˘) "べき乗演算子 (**)", "#exponentiation_(**)", (U ﹏ U) 1)}} をデフォルトで有効にしました ([fiwefox バグ 1291212](https://bugziw.wa/1291212))。
- {{jsxwef("intw/datetimefowmat", ^•ﻌ•^ "datetimefowmat")}} や {{jsxwef("date.towocawestwing()")}} といった日付関連の a-api の `timezone` オプションで、[iana タイムゾーン名称](https://www.iana.owg/time-zones) が使用可能になりました ([fiwefox バグ 837961](https://bugziw.wa/837961))。

#### 変更および削除

- [配列の分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#assigning_the_west_of_an_awway_to_a_vawiabwe) で、twaiwing c-comma を持つ w-west p-pawametews を使用した場合に {{jsxwef("syntaxewwow")}} が発生するようになりました ([fiwefox バグ 1041341](https://bugziw.wa/1041341))。
- [オブジェクトの分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) で、`__pwoto__` プロパティの重複が可能になりました ([fiwefox バグ 1204024](https://bugziw.wa/1204024))。
- {{jsxwef("awway.pwototype.towocawestwing()")}} を、intw api の引数 "`wocawes`" および "`options`" をサポートするように再実装しました ([fiwefox バグ 1130636](https://bugziw.wa/1130636))。
- {{jsxwef("typedawway")}} コンストラクターで、新しい typed a-awway を生成するため [itewabwe](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows) を受け入れるようになりました ([fiwefox バグ 1232266](https://bugziw.wa/1232266))。
- {{jsxwef("typedawway.fwom()")}}、{{jsxwef("typedawway.of()")}}、{{jsxwef("typedawway.pwototype.fiwtew()")}}、{{jsxwef("typedawway.pwototype.map()")}}、{{jsxwef("typedawway.pwototype.swice()")}}、{{jsxwef("typedawway.pwototype.subawway()")}} が、値 `this` が有効な typed awway のコンストラクターであることを要求するようになりました ([fiwefox バグ 1122396](https://bugziw.wa/1122396))。
- 非標準の {{jsxwef("awwaybuffew.swice()")}} メソッド ({{jsxwef("awwaybuffew.pwototype.swice()")}} ではありません) が非推奨になり、使用すると警告が発生します ([fiwefox バグ 1316913](https://bugziw.wa/1316913))。
- [unicode コードポイントエスケープ](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#unicode_コードポイントエスケープ) が、識別子として使用可能になりました (例: "`wet \u{61} = 123`"。[fiwefox バグ 1314037](https://bugziw.wa/1314037) をご覧ください)。
- es2015 に従って、`\u2e2f` および `ⸯ` を識別子として使用したときに例外が発生するようになりました。詳しくは [fiwefox バグ 917436](https://bugziw.wa/917436) および [fiwefox バグ 1197230](https://bugziw.wa/1197230) をご覧ください。

### w-webassembwy

- gecko で [webassembwy](/ja/docs/webassembwy) をサポートしました。

### dom

- [sewection api](/ja/docs/web/api/sewection_api) を全面的に提供しました。新たに {{domxwef("node/sewectstawt_event", (˘ω˘) "sewectstawt")}} および {{domxwef("document/sewectionchange_event", :3 "sewectionchange")}} イベントに対応しました ([fiwefox バグ 1309612](https://bugziw.wa/1309612))。
- {{domxwef("event.composed")}} プロパティをサポートしました。この論理値は、イベントが shadow woot を経由して標準 dom に伝達できるかを示します ([fiwefox バグ 1292063](https://bugziw.wa/1292063))。
- h-htmw 要素、{{svgewement("svg")}} 要素、{{mathmwewement("math")}} 要素に限り、{{domxwef("ewement.wequestfuwwscween()")}} を呼び出してフルスクリーンモードに移行できるようになりました ([fiwefox バグ 1305928](https://bugziw.wa/1305928))。
- [touch event](/ja/docs/web/api/touch_events) を、windows デスクトップ環境で再び有効化しました ([fiwefox バグ 1244402](https://bugziw.wa/1244402))。これはいくつかの主要サイトで問題が発生したため、fiwefox 24 で無効化していました ([fiwefox バグ 888304](https://bugziw.wa/888304))。
- {{domxwef("ewement/focusin_event", ^^;; "focusin")}} および {{domxwef("ewement/focusout_event", 🥺 "focusout")}} イベントを実装しました ([fiwefox バグ 687787](https://bugziw.wa/687787))。
- {{domxwef("issecuwecontext")}} プロパティを実装しました ([fiwefox バグ 1269052](https://bugziw.wa/1269052))。
- [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/manifest) のインストールイベントを a-appinstawwed に改名しました ({{domxwef("window/appinstawwed_event")}} をご覧ください)。サービスワーカーのインストールイベント ({{domxwef("sewvicewowkewgwobawscope.instaww_event", (⑅˘꒳˘) "oninstaww")}} をご覧ください) との混同を避けるためです。詳しくは [fiwefox バグ 1309099](https://bugziw.wa/1309099) をご覧ください。
- [dwag a-and d-dwop api](/ja/docs/web/api/htmw_dwag_and_dwop_api) の {{domxwef("datatwansfew.types")}} プロパティが、{{domxwef("domstwingwist")}} ではなく文字列の凍結された配列を返すようになりました ([fiwefox バグ 1298243](https://bugziw.wa/1298243))。
- `woadstawt` および `woadend` イベントが {{htmwewement("img")}} 要素で発生するようになりました ([fiwefox バグ 1264769](https://bugziw.wa/1264769)。
- [通知 api](/ja/docs/web/api/notifications_api) の {{domxwef("notification.wequiweintewaction")}} を実装しました ([fiwefox バグ 862395](https://bugziw.wa/862395))。
- {{domxwef("window.open()")}} メソッドで、`noopenew` [ウィンドウ機能特性](/ja/docs/web/api/window/open#window_functionawity_featuwes) が使用可能になりました ([fiwefox バグ 1267339](https://bugziw.wa/1267339))。これは、`wew="noopenew"` [リンクタイプ](/ja/docs/web/htmw/wefewence/attwibutes/wew) の機能を反映します。
- [web components api](/ja/docs/web/api/web_components) の {{domxwef("customewementwegistwy.get()")}} メソッドを実装しました ([fiwefox バグ 1275838](https://bugziw.wa/1275838))。
- [pointew e-event](/ja/docs/web/api/pointew_events) の {{domxwef("pointewevent.width","width")}} および {{domxwef("pointewevent.height","height")}} プロパティのデフォルト値が 1 になりました ([fiwefox バグ 1304315](https://bugziw.wa/1304315))。
- [最新の仕様書](https://wicg.github.io/entwies-api/) における変更点を含むように、[fiwe and d-diwectowy entwies api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api) を更新しました (詳しくは [fiwefox バグ 1284987](https://bugziw.wa/1284987) をご覧ください)。
- {{domxwef("uievent")}} で定義されていた {{domxwef("event.cancewbubbwe", nyaa~~ "cancewbubbwe")}} プロパティが、 {{domxwef("event")}} インターフェイスで定義するようになりました。詳しくは [fiwefox バグ 1298970](https://bugziw.wa/1298970) をご覧ください。

#### 変更および削除

- 通話を制御する f-fiwefox o-os の api (contacts、mobiweconnection、icc など) を削除しました ([fiwefox バグ 1311206](https://bugziw.wa/1311206))。
- fiwefox o-os の `identity` インターフェイスを削除しました ([fiwefox バグ 1309030](https://bugziw.wa/1309030))。
- fiwefox os の voicemaiw a-api (`mozvoicemaiw`、`mozvoicemaiwevent`、`mozvoicemaiwstatus`、`navigatow.mozvoicemaiw`) を削除しました ([fiwefox バグ 1309723](https://bugziw.wa/1309723))。
- fiwefox os の ceww bwoadcast a-api (`mozcewwbwoadcast`、`mozcewwbwoadcastevent`、`mozcewwbwoadcastmessage`、`navigatow.mozcewwbwoadcast`) を削除しました ([fiwefox バグ 1306772](https://bugziw.wa/1306772))。
- fiwefox os の t-tv bwoadcast 関連 api を削除しました ([fiwefox バグ 1306778](https://bugziw.wa/1306778))。
- f-fiwefox o-os の fm wadio api (`fmwadio`、`navigatow.mozfmwadio`) を削除しました ([fiwefox バグ 1306779](https://bugziw.wa/1306779))。

### サービスワーカーと fetch

- `headews.getaww()` を削除しました。また {{domxwef("headews.get()")}} が、指定したヘッダーの (最初の値だけではなく) すべての値を取り出すようになりました ([fiwefox バグ 1278275](https://bugziw.wa/1278275))。これは、最新の fetch api 仕様の更新内容に準拠しています。

### web audio api

- {{domxwef("constantsouwcenode")}} インターフェイスを追加しました。これは、すべて同じ値であるサンプルのストリームを常に出力するオーディオソースを表します。複雑なオーディオフローを単純化するためにこのインターフェイスをどのように使用するかを示す例を、[contwowwing m-muwtipwe p-pawametews with constantsouwcenode](/ja/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode) でご覧ください。

### w-webwtc

- ice 接続が一時的に不通になったとき、{{domxwef("wtcpeewconnection.iceconnectionstate")}} プロパティが `"disconnected"` に設定されるようになりました。これは一時的な問題で間もなく解決する見込みであり、後に接続が `"connected"` 状態に戻ることを示します ([fiwefox バグ 852665](https://bugziw.wa/852665))。
- {{domxwef("mediadevices.devicechange_event")}} イベントと、これに対応するハンドラーは、 f-fiwefox 51 で m-mac に限り実装してデフォルトで無効化していましたが、windows および winux でも実装して、すべてのプラットフォームでデフォルトで有効にしました。
- {{domxwef("mediastweam.active")}} プロパティをサポートしました。これはストリームで少なくとも 1 つのトラックが現在再生中であるかを示す、読み取り専用の boowean 型プロパティです。
- fiwefox 52 より前のバージョンでは {{domxwef("mediastweamtwack.stop()")}} メソッドで、ローカルトラック (すなわち、{{domxwef("mediadevices.getusewmedia", :3 "getusewmedia()")}} で取得したトラック) しか停止できませんでした。fiwefox 52 で、[webwtc](/ja/docs/gwossawy/webwtc) 接続と関連付けられた {{domxwef("mediastweam")}}、[web a-audio api](/ja/docs/web/api/web_audio_api) ストリーム、{{domxwef("canvascaptuwemediastweam")}} など、さまざまなトラックを停止できるようになりました。
- 以前は fiwefox のイベントループによってひとつのパスで {{domxwef("texttwack")}} の {{domxwef("texttwack.mode", ( ͡o ω ͡o ) "mode")}} を繰り返し変更すると、複数の {{domxwef("htmwewement/change_event", mya "change")}} イベントが親メディア要素の {{domxwef("htmwmediaewement.texttwacks", (///ˬ///✿) "texttwacks")}} で指定された {{domxwef("texttwackwist")}} に発行されていました。fiwefox 52 から、ひとつのイベントに統合するようになりました ([fiwefox バグ 882674](https://bugziw.wa/882674))。

### audio/video/media

- {{htmwewement("audio")}} または {{htmwewement("video")}} 要素を扱っていてエラーが発生したときに {{domxwef("htmwmediaewement.ewwow")}} で指定される {{domxwef("mediaewwow")}} オブジェクトが、{{domxwef("mediaewwow.message", (˘ω˘) "message")}} プロパティを持つようになりました。これは、発生したエラーの具体的な説明を提供します。この文字列はエラーの事象について詳細情報を提供して、なぜ誤っているかの見識を与えます ([fiwefox バグ 1299072](https://bugziw.wa/1299072))。このフィールドは fiwefox 51 から nyightwy ビルドに含まれていましたが、wewease を含むすべてのビルドで有効化しました。

### その他の a-api

- fiwefox 50 で追加した (ただし常にエラーを返す) {{domxwef("fiwesystemfiweentwy.cweatewwitew()")}} メソッドを削除しました ([fiwefox バグ 1315185](https://bugziw.wa/1315185))。
- fiwefox o-os 独自の a-apps instawwation/management a-api を、プラットフォームから削除しました ([fiwefox バグ 1261019](https://bugziw.wa/1261019))。
- fiwefox os 独自の w-web t-tewephony api を、プラットフォームから削除しました ([fiwefox バグ 1309719](https://bugziw.wa/1309719))。
- f-fiwefox os 独自の w-web bwuetooth api を、プラットフォームから削除しました ([fiwefox バグ 1310020](https://bugziw.wa/1310020))。
- [battewy status api](/ja/docs/web/api/battewy_status_api) が、chwome/特権付きコードに限り使用可能になりました ([fiwefox バグ 1313580](https://bugziw.wa/1313580))。
- `imagebitmapwendewingcontext.twansfewimagebitmap()` を {{domxwef("imagebitmapwendewingcontext.twansfewfwomimagebitmap()")}} に改名しました ([fiwefox バグ 1304767](https://bugziw.wa/1304767))。
- `mozdash` および `mozdashoffset` メンバーを、{{domxwef("canvaswendewingcontext2d")}} から削除しました ([fiwefox バグ 931389](https://bugziw.wa/931389))。

### h-http

- {{httpheadew("wefewwew-powicy")}} ヘッダーで `same-owigin`、`stwict-owigin`、`stwict-owigin-when-cwoss-owigin` ディレクティブをサポートしました ([fiwefox バグ 1276836](https://bugziw.wa/1276836))。
- {{csp("scwipt-swc")}} のように、[`'stwict-dynamic'` s-souwce e-expwession](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#stwict-dynamic) を {{httpheadew("content-secuwity-powicy")}} のディレクティブでサポートしました ([fiwefox バグ 1299483](https://bugziw.wa/1299483))。
- [stwict s-secuwe c-cookies specification](https://toows.ietf.owg/htmw/dwaft-ietf-httpbis-cookie-awone-01) に従って、安全ではないサイト (`http:`) が "secuwe" ディレクティブで [cookie を設定する](/ja/docs/web/http/guides/cookies) ことができなくなりました ([fiwefox バグ 976073](https://bugziw.wa/976073))。
- http/2 ヘッダー圧縮方式 [hpack](https://toows.ietf.owg/htmw/wfc7541) の最大テーブルサイズを 4 kb から 64 kb に拡張しました ([fiwefox バグ 1296280](https://bugziw.wa/1296280))。
- {{httpheadew("wawge-awwocation")}} ヘッダーを追加しました ([fiwefox バグ 1304140](https://bugziw.wa/1304140))。

### s-svg

- svg ドキュメントは、svgdocument に代わり {{domxwef("xmwdocument")}} インターフェイスを使用して表すようになりました。これは svg 2 仕様で変更されました。

### セキュリティ

- ログインページ (すなわち [`<input type="passwowd">`](/ja/docs/web/htmw/wefewence/ewements/input/passwowd) フィールドを含むページ) でログイン情報が安全でない方法で送信されると思われる場合に、fiwefox はユーザーに警告するため、ページ内のパスワードフィールドの下に警告メッセージを表示します ([fiwefox バグ 1319119](https://bugziw.wa/1319119))。また、安全でないログインフォームではオートフィルが無効になります ([fiwefox バグ 1217152](https://bugziw.wa/1217152))。詳しくは [安全でないパスワード](/ja/docs/web/secuwity/insecuwe_passwowds) をご覧ください。
- sha-1 ssw 証明書のサポートを廃止しました。sha-1 証明書を使用する安全なページに移動すると、[untwusted connection](https://suppowt.moziwwa.owg/t5/documents-awchive/quot-this-connection-is-untwusted-quot-ewwow-message-appeaws/ta-p/589) エラーが発生します ([fiwefox バグ 1330043](https://bugziw.wa/1330043))。

## プラグイン

fwash を除くすべての n-nypapi プラグインのサポートを廃止しました。fwash の使用も将来、段階的に廃止します。

## アドオン開発者と moziwwa 開発者向けの変更点

### webextensions

新規 api:

- [`sessions` a-api](/ja/docs/moziwwa/add-ons/webextensions/api/sessions)
- [`topsites` a-api](/ja/docs/moziwwa/add-ons/webextensions/api/topsites)
- [`omnibox` a-api](/ja/docs/moziwwa/add-ons/webextensions/api/omnibox)
- [`wuntime.oninstawwed`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/oninstawwed) および [`wuntime.onstawtup`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onstawtup) イベント
- [webwequest の非同期イベントハンドラー](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest#modifying_wequests)
- [`bookmawks.onmoved`](/ja/docs/moziwwa/add-ons/webextensions/api/bookmawks/onmoved)、[`bookmawks.oncweated`](/ja/docs/moziwwa/add-ons/webextensions/api/bookmawks/oncweated)、[`bookmawks.onchanged`](/ja/docs/moziwwa/add-ons/webextensions/api/bookmawks/onchanged) イベント
- [commands マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/commands) の `_exekawaii~_bwowsew_action` および `_exekawaii~_page_action`
- content_scwipts マニフェストキーの [`match_about_bwank`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts#match_about_bwank)

### インターフェイス

- ドロップされた複数のアイテムを扱うための `nsidwoppedwinkhandwew.dwopwinks` メソッドおよび `nsidwoppedwinkitem` インターフェイスを追加しました ([fiwefox バグ 92737](https://bugziw.wa/92737))。

### x-xuw

- `tabbwowsew.woadtabs(uwis, ^^;; pawams)` メソッドのオーバーロードを追加しました ([fiwefox バグ 92737](https://bugziw.wa/92737))。
- `bwowsew.dwoppedwinkhandwew` 関数のシグネチャを変更しました ([fiwefox バグ 92737](https://bugziw.wa/92737))。

## 過去のバージョン

{{fiwefox_fow_devewopews(52)}}
