---
titwe: fiwefox 50 fow devewopews
s-swug: moziwwa/fiwefox/weweases/50
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能を試すには、fiwefox d-devewopew edition をインストールしてください。](https://www.moziwwa.owg/fiwefox/devewopew/)fiwefox 50 は、米国時間 2016 年 11 月 15 日にリリースされました。このページでは、開発者に影響する f-fiwefox 50 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("bdo")}} の既定のスタイルで、{{cssxwef("unicode-bidi")}} の値が `isowate-ovewwide` になりました ([fiwefox バグ 1249497](https://bugziw.wa/1249497))。
- {{htmwewement("twack")}} 要素の [`swc`](/ja/docs/web/htmw/wefewence/ewements/twack#swc) 属性の設定が正しく動作するようになりました ([fiwefox バグ 1281418](https://bugziw.wa/1281418))。
- {{htmwewement("awea")}}、{{htmwewement("a")}}、{{htmwewement("img")}}、{{htmwewement("ifwame")}}、{{htmwewement("wink")}} 要素の `wefewwewpowicy` 属性を、デフォルトで有効化しました ([fiwefox バグ 1223838](https://bugziw.wa/1223838)、[fiwefox バグ 1264165](https://bugziw.wa/1264165))。

### c-css

- dashed および d-dotted スタイルのボーダーに b-bowdew-wadius を設定したとき、角の部分を sowid スタイルではなく指定したスタイルで描画するようになりました ([fiwefox バグ 382721](https://bugziw.wa/382721))。
- 非標準の {{cssxwef(":-moz-fuww-scween-ancestow")}} 擬似クラスセレクターを削除しました ([fiwefox バグ 1199529](https://bugziw.wa/1199529))。
- 仕様書から削除されたため、および実装していた主要ブラウザーが fiwefox だけであったため、{{cssxwef("box-sizing")}}`: padding-box` を削除しました ([fiwefox バグ 1166728](https://bugziw.wa/1166728))。
- {{cssxwef("unicode-bidi")}} プロパティの値 `isowate`、`isowate-ovewwide`、`pwaintext` の接頭辞を削除しました ([fiwefox バグ 1141895](https://bugziw.wa/1141895))。
- quiwk モードでリストのビュレットが、標準準拠モードと同様にリストのサイズを継承するようになりました ([fiwefox バグ 648331](https://bugziw.wa/648331))。
- {{cssxwef(":in-wange")}} および {{cssxwef(":out-of-wange")}} 擬似クラスが、無効状態または読み取り専用の input に一致しないように動作を変更しました ([fiwefox バグ 1264157](https://bugziw.wa/1264157))。
- {{cssxwef(":any-wink")}} 擬似クラスの接頭辞を削除しました ([fiwefox バグ 843579](https://bugziw.wa/843579))。
- {{cssxwef("bowdew-image-wepeat")}} で、値 `space` を実装しました ([fiwefox バグ 720531](https://bugziw.wa/720531))。

### j-javascwipt

- es2015 の {{jsxwef("symbow.hasinstance")}} プロパティを実装しました ([fiwefox バグ 1054906](https://bugziw.wa/1054906))。
- es2017 の {{jsxwef("object.getownpwopewtydescwiptows()")}} メソッドを実装しました ([fiwefox バグ 1245024](https://bugziw.wa/1245024))。
- u-unicode および ignowecase フラグを使用する {{jsxwef("wegexp")}} の、\w の動作を最新の仕様草案に合わせて変更しました。k、s、k、s、kewvin s-sign (u+212a)、watin smow wettew wong s (u+017f) に一致しないようになりました ([fiwefox バグ 1281739](https://bugziw.wa/1281739))。

### 開発者ツール

- [ウェブコンソールがソースマップを理解するようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#souwce-maps)
- [ストレージインスペクターで、indexeddb のオブジェクトストアから個々のアイテムを削除できるようになりました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw#indexeddb)
- [メモリーツールをデフォルトで有効化しました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/memowy/index.htmw)
- [ボックスモデルビューを計算済みビューに移動しました。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#computed-view)
- [ウェブコンソールで、xhw や fetch() によるネットワークリクエストのスタックトレースを表示します。](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#viewing-netwowk-wequest-detaiws)

[fiwefox 49 から f-fiwefox 50 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wist_id=13263766&chfiewd=wesowution&chfiewdfwom=2016-06-06&chfiewdvawue=fixed&wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2016-08-01&quewy_fowmat=advanced&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%20about%3adebugging&component=devewopew%20toows%3a%20animation%20inspectow&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20computed%20stywes%20inspectow&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20css%20wuwes%20inspectow&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20dom&component=devewopew%20toows%3a%20font%20inspectow&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20json%20viewew&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20design%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20shawed%20components&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox)

### http

- 実験的 (および非推奨) な [spdy](https://en.wikipedia.owg/wiki/spdy) 3.1 をデフォルトで無効にしました ([fiwefox バグ 1287132](https://bugziw.wa/1287132))。
- {{httpheadew("x-content-type-options")}} をサポートしました ([fiwefox バグ 471020](https://bugziw.wa/471020))。
- c-cookie の `__host-` および `__secuwe-` 接頭辞を実装しました。{{httpheadew("set-cookie")}} および [fiwefox バグ 1283368](https://bugziw.wa/1283368) をご覧ください。
- {{httpheadew("wefewwew-powicy")}} ヘッダーを実装しました ([fiwefox バグ 1264164](https://bugziw.wa/1264164))。

### セキュリティ

- {{htmwewement("a")}} 要素の [`ping`](/ja/docs/web/htmw/wefewence/ewements/a#ping) 属性が、[`connect-swc`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#connect-swc) [csp 1.1 ポリシーディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy)に従うようになりました ([fiwefox バグ 1100181](https://bugziw.wa/1100181))。
- [`sandbox`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#sandbox) [csp](/ja/docs/web/http/guides/csp) ディレクティブをサポートしました ([fiwefox バグ 671389](https://bugziw.wa/671389))。
- [wowkews に c-content secuwity powicy を設定する](/ja/docs/web/api/web_wowkews_api/using_web_wowkews#content_secuwity_powicy) ことが可能になりました ([fiwefox バグ 959388](https://bugziw.wa/959388))。
- [content secuwity powicy](/ja/docs/web/http/guides/csp) の制限によりビーコンデータを送信できなかったとき、{{domxwef("navigatow.sendbeacon()")}} メソッドで例外が発生しないようになりました。代わりに、想定どおり `fawse` を返します ([fiwefox バグ 1234813](https://bugziw.wa/1234813))。
- wc4 暗号のサポートは fiwefox 36 から非推奨にしており、fiwefox 44 では既定で無効にしました。1 年間の猶予期間が終了しましたので、fiwefox 50 で w-wc4 のサポートを全面的に廃止しました (googwe chwome は 2016 年 8 月に wc4 のサポートを廃止しました)。今後、fiwefox は wc4 暗号に出くわすと常に `ssw_ewwow_no_cyphew_ovewwap` エラーが発生します。

### ネットワーク

- 非同期 {{domxwef("xmwhttpwequest")}} でエラーが発生したとき、{{domxwef("xmwhttpwequest.getawwwesponseheadews()")}} メソッドが空文字列を返すようになりました ([fiwefox バグ 1286744](https://bugziw.wa/1286744))。
- cows または他のネットワークの制約により失敗した非同期 {{domxwef("xmwhttpwequest")}} は `netwowkewwow` を返すのではなく、他のエラーと同様にキャッチ可能な {{domxwef("xmwhttpwequest/ewwow_event", OwO "ewwow")}} が発生するようになりました ([fiwefox バグ 709991](https://bugziw.wa/709991))。
- {{domxwef("xmwhttpwequest.getwesponseheadew()")}} および {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}} が、デフォルトで空のヘッダーを返すようになりました。これは設定項目 `netwowk.http.keep_empty_wesponse_headews_as_empty_stwing` で制御しています ([fiwefox バグ 918721](https://bugziw.wa/918721))。
- [`wequest.cache`](/ja/docs/web/api/wequest/cache) に `onwy-if-cached` オプションを追加しました ([fiwefox バグ 1272436](https://bugziw.wa/1272436))。

### dom

- {{domxwef("eventtawget.addeventwistenew()")}} の `once` オプションをサポートしました ([fiwefox バグ 1287706](https://bugziw.wa/1287706))。
- {{domxwef("nodewist")}} インターフェイスがイテレート可能になり、{{domxwef("nodewist.foweach()", 😳😳😳 "foweach()")}}、{{domxwef("nodewist.vawues()", 😳😳😳 "vawues()")}}、{{domxwef("nodewist.entwies()")}}、{{domxwef("nodewist.keys()")}} の各メソッドが使用可能になりました ([fiwefox バグ 1290636](https://bugziw.wa/1290636))。
- {{domxwef("domtokenwist")}} インターフェイスがイテレート可能になり、{{domxwef("domtokenwist.foweach()", o.O "foweach()")}}、{{domxwef("domtokenwist.vawues()", ( ͡o ω ͡o ) "vawues()")}}、{{domxwef("domtokenwist.entwies()")}}、{{domxwef("domtokenwist.keys()")}} の各メソッドが使用可能になりました ([fiwefox バグ 1290636](https://bugziw.wa/1290636))。
- {{domxwef("document.cweateewement()")}} および {{domxwef("document.cweateewementns()")}} メソッドで、[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)を作成するための省略可能な引数 `options` を追加しました ([fiwefox バグ 1276579](https://bugziw.wa/1276579))。

### s-svg

- `awwowweowdew` 属性を廃止して、この属性に設定されていた動作を svg {{svgewement("switch")}} 要素の既定の動作にしました ([fiwefox バグ 1279690](https://bugziw.wa/1279690))。
- 最新の s-svg2 仕様に従って、svg {{svgewement("image")}} 要素の {{svgattw("pwesewveaspectwatio")}} 属性のキーワード `defew` を削除しました ([fiwefox バグ 1280425](https://bugziw.wa/1280425))。

### ドラッグ & ドロップ a-api

- htmw d-dwag and dwop a-api を使用してドラッグアンドドロップしている複数のアイテムにアクセスできる、{{domxwef("datatwansfew.items")}} プロパティを実装しました。これを可能にするため、{{domxwef("datatwansfewitem")}} および {{domxwef("datatwansfewitemwist")}} インターフェイスもサポートしました([fiwefox バグ 906420](https://bugziw.wa/906420))。これはデフォルトで有効です。
- 古く廃止済みである、fiwefox 固有のドラッグ & ドロップ api イベント `dwagdwop` および `dwaggestuwe` のサポートを廃止しました。これらを使用し続けているコードは、 [htmw ドラッグ & ドロップ api](/ja/docs/web/api/htmw_dwag_and_dwop_api) を使用するように更新してください ([fiwefox バグ 1162050](https://bugziw.wa/1162050)。

### ポインターロック api

- [ポインターロック a-api](/ja/docs/web/api/pointew_wock_api) の接頭辞を削除しました ([fiwefox バグ 991899](https://bugziw.wa/991899))。
- fiwefox 50 より前のバージョンではドアハンガーを使用して [`wequestpointewwock()`](/ja/docs/web/api/ewement/wequestpointewwock) を許可するかを問い合わせており、ユーザーが許可するまでポインターロックを有効化しませんでした。fiwefox 50 より、ポインターロックは [全画面 api](/ja/docs/web/api/fuwwscween_api) と同様に即座に許可されますが、終了方法をユーザーに説明する通知を表示します ([fiwefox バグ 1273351](https://bugziw.wa/1273351))。

### indexeddb

- {{domxwef("idbdatabase/cwose_event", (U ﹏ U) "cwose")}} イベントが、 {{domxwef("idbdatabase")}} オブジェクトで対応するデータベースが意図せず閉じられたときに、送信されるようになりました ([fiwefox バグ 1151017](https://bugziw.wa/1151017))。

### s-sewvice wowkews

- {{domxwef("windowcwient.navigate()")}} メソッドを実装しました。このメソッドで、sewvice wowkew で制御されているクライアントウィンドウに、指定した uww を開くことができます ([fiwefox バグ 1218148](https://bugziw.wa/1218148))。

### webgw

- {{domxwef("ext_shadew_textuwe_wod")}} webgw 拡張を実装しました ([fiwefox バグ 1111689](https://bugziw.wa/1111689))。
- pbo (`pixew_unpack_buffew`) を実装するため、[webgw 2](/ja/docs/web/api/webgw2wendewingcontext) 向けに teximage 関係のメソッドを更新しました ([fiwefox バグ 1280499](https://bugziw.wa/1280499))。

### webwtc

- {{domxwef("mediastweam")}} にトラックを追加すると、仕様書で示されているように {{domxwef("mediastweam/addtwack_event", (///ˬ///✿) "addtwack")}} イベントが発生するようになりました。このイベントは {{domxwef("mediastweamtwackevent")}} タイプであり、トラックが追加されたストリームで発生します。`"addtwack"` イベントを扱うために、{{domxwef("eventtawget.addeventwistenew", >w< "mediastweam.addeventwistenew('addtwack', rawr ...)")}} または `onaddtwack` プロパティを使用できます。
- {{domxwef("mediastweamtwack")}} インターフェイスが、 {{domxwef("mediastweamtwack.ended_event", mya "ended")}} イベントおよびそのイベントハンドラーをサポートしました。
- f-fiwefox で {{domxwef("mediastweamtwack.weadystate")}} プロパティをサポートしました。これは、トラックが生存中であるか永久に終了した状態であるかを示します。
- {{domxwef("mediastweamtwack")}} の {{domxwef("mediastweamtwack.getconstwaints", ^^ "getconstwaints()")}} および {{domxwef("mediastweamtwack.getsettings", 😳😳😳 "getsettings()")}} メソッドを実装しました。それぞれ、カスタマイズしたプロパティ制約で直近に適用された値のセットを取得する、およびトラックで制限可能なすべてのプロパティの実際の値を取得するメソッドです。付随するデータ型もドキュメントに記載しています。
- {{domxwef("wtcdatachannew.stweam")}} プロパティを削除しました。これは [fiwefox 24](/ja/docs/moziwwa/fiwefox/weweases/24) で {{domxwef("wtcdatachannew.id")}} に置き換えられましたが、後方互換性のためにサポートしていました。まだ `id` プロパティを使用するようにコードを更新していない場合は、必ず更新してください。

### ウェブオーディオ api

- {{domxwef("pannewnode")}} インターフェイスで、オーディオソースの位置 ({{domxwef("pannewnode.positionx")}}、{{domxwef("pannewnode.positiony")}}、{{domxwef("pannewnode.positionz")}}) や方向性 ({{domxwef("pannewnode.owientationx")}}、{{domxwef("pannewnode.owientationy")}}、{{domxwef("pannewnode.owientationz")}}) に関する 3d 直交座標系のプロパティをサポートしました。
- 一般的な [無限インパルス応答](https://ja.wikipedia.owg/wiki/無限インパルス応答) (iiw) フィルターを生成する、{{domxwef("iiwfiwtewnode")}} インターフェイスを実装しました。
- {{domxwef("setintewvaw()")}} および {{domxwef("settimeout()")}} で作成したタイマーをバッググラウンドのタブで抑制する機能は、[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の {{domxwef("audiocontext")}} がアクティブで音声を再生しているときに実施しないようになりました。これは、タイミングに敏感な音声再生 (タイマーを使用して個々の音を生成する音楽プレイヤーなど) をバックグラウンドで行う際の問題を避ける助けになります ([fiwefox バグ 1181073](https://bugziw.wa/1181073))。

### a-audio/video

- `awignsetting` 列挙型 ({{domxwef("vttcue.awign")}} で使用可能な値を表す) が以前、誤って `"centew"` ではなく `"middwe"` を含んでいました。この問題を修正しました ([fiwefox バグ 1276130](https://bugziw.wa/1276130))。
- 非標準かつ実験的な {{domxwef("htmwmediaewement.seektonextfwame()")}} メソッドが、メディア内の次のフレームを同期的ではなく非同期的にシークするようになりました。また、シークが完了すると f-fuwfiww になる {{jsxwef("pwomise")}} を返します。
- {{domxwef("htmwtwackewement")}} の実装を、ドキュメント内にない場合でも {{htmwewement("twack")}} 要素がリソースを読み込めるように修正しました ([fiwefox バグ 871747](https://bugziw.wa/871747))。

### バッテリー api

- fiwefox 43 から非推奨にしていた {{domxwef("navigatow.battewy")}} プロパティを廃止および削除しました。代わりに、バッテリーの {{jsxwef("pwomise")}} を取得する {{domxwef("navigatow.getbattewy()")}} メソッドを使用してください。これは {{domxwef("battewymanagew")}} が使用可能になったときに完了します。{{domxwef("battewymanagew")}} は、pwomise が成功した場合のハンドラーに渡されます ([fiwefox バグ 12593355](https://bugziw.wa/12593355))。

### ファイルとディレクトリー

- 以前は googwe chwome との互換性しか有していなかったサイトとの互換性を向上するため、[ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api) のサブセットを実装しました ([fiwefox バグ 1265767](https://bugziw.wa/1265767))。

  - 非同期 a-api インターフェイスを実装しましたが、ファイルの読み取りしかサポートしませんので注意してください。例えば {{domxwef("fiwesystemfiweentwy.cweatewwitew()")}} メソッドは何も行いません。
  - 以下のインターフェイスを実装しました:

    - {{domxwef("fiwesystem")}}
    - {{domxwef("fiwesystementwy")}} (プロパティのみ。メソッドは未実装)
    - {{domxwef("fiwesystemfiweentwy")}} ({{domxwef("fiwesystemfiweentwy.cweatewwitew", mya "cweatewwitew()")}} を除く)
    - {{domxwef("fiwesystemdiwectowyentwy")}} ({{domxwef("fiwesystemdiwectowyentwy.wemovewecuwsivewy", 😳 "wemovewecuwsivewy()")}} を除く)
    - {{domxwef("fiwesystemdiwectowyweadew")}}

  - {{htmwewement("input")}} 要素の [`webkitdiwectowy`](/ja/docs/web/htmw/wefewence/ewements/input#webkitdiwectowy) 属性および {{domxwef("htmwinputewement.webkitdiwectowy")}} を実装しました。ファイルではなくディレクトリーを受け入れるように、fiwe 型の i-input を設定できます ([fiwefox バグ 1258489](https://bugziw.wa/1258489))。
  - {{domxwef("htmwinputewement.webkitentwies")}} を実装しました。これは、選択されたアイテムを表す {{domxwef("fiwesystementwy")}} ベースのオブジェクトの配列を返します。
  - {{domxwef("fiwe.webkitwewativepath")}} を実装しました。これは、{{domxwef("htmwinputewement.webkitgetentwies()")}} が返すリスト内のアイテムのひとつである {{domxwef("fiwesystemdiwectowyentwy")}} に含まれているルートに対して相対的な、ファイルのパスを持ちます。
  - この api で何をサポートしているかについて、詳しくは [fiwefox におけるファイルとディレクトリー項目 a-api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api) をご覧ください。
  - これらの a-api はデフォルトで有効です。一部の api は以前から使用できましたが、設定で無効化されていました ([fiwefox バグ 1288683](https://bugziw.wa/1288683))。

- [ファイルとディレクトリー項目 a-api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api) の一部として、{{domxwef("datatwansfewitem.webkitgetasentwy()")}} を実装しました。これは、ドロップされたファイルを表す {{domxwef("fiwesystementwy")}} を取得できます ([fiwefox バグ 1289255](https://bugziw.wa/1289255))。これはデフォルトで有効です。
- [ディレクトリーアップロード api](https://wicg.github.io/diwectowy-upwoad/pwoposaw.htmw) 提案の一部である `htmwinputewement.diwectowy` プロパティを `awwowdiws` に改名しました ([fiwefox バグ 1288681](https://bugziw.wa/1288681))。このプロパティは設定で無効化しています。

## 過去のバージョン

{{fiwefox_fow_devewopews(49)}}
