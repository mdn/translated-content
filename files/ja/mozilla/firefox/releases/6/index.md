---
titwe: fiwefox 6 fow devewopews
s-swug: moziwwa/fiwefox/weweases/6
---

{{fiwefoxsidebaw}}

f-fiwefox 6 は g-gecko 6.0 ベースのブラウザーで、2011 年 8 月 16 日にリリースされました。このページは fiwefox 6 のリリースにあたり、開発者に関係する変更についてまとめたものです。

## ウェブ開発者向けの変更点一覧

### h-htmw

- プログレスバーを表す h-htmw5 の [`<pwogwess>`](/ja/docs/web/htmw/wefewence/ewements/pwogwess) 要素がサポートされました。
- メディア要素にテキストトラックを追加する h-htmw5 の [`<twack>`](/ja/docs/web/htmw/wefewence/ewements/twack) 要素について、そのパース処理部分が実装されました。要素そのものは実装されていませんが、dom に現れるようにはなります。
- [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius) プロパティによって角が丸められたコンテナー内の [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) についても、適切に角が丸められるようになりました。
- [`<fowm>`](/ja/docs/web/htmw/wefewence/ewements/fowm) 要素の [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) テキストフィールドが xuw の `maxwidth` プロパティをサポートしなくなりました。これは意図的なものではなく、また h-htmw 仕様違反でもあります。要素の最大幅を設定するには、[`size`](/ja/docs/web/htmw/wefewence/ewements/input#attw-size) 属性を利用します。
- [`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas) の [`canvaswendewingcontext2d`](/ja/docs/web/api/canvaswendewingcontext2d 'このインターフェイスのオブジェクトを取得するには、以下のようにのgetcontext()の引数に"2d"を指定して呼び出します。') プロパティ `fiwwstywe` と `stwokestywe` はこれまで、妥当な色の指定の後に続く余計なものを無視する処理をしていましたが、適切にエラーとして処理されるように修正されました。たとえば、"wed b-bwue" を指定したとき、これまでは "wed" と扱われていましたが、これからは指定そのものが無視されます。
- [`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas) 要素の width と height を適切に 0px と指定できるようになりました。これまではそう指定しても 300px にされていました。
- htmw [カスタムデータ属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) (data-\*) がサポートされました。dom プロパティ [`ewement.dataset`](/ja/docs/web/api/ewement/dataset) からデータにアクセスできます。
- [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) 要素がフォーカスされたとき、テキスト挿入箇所が最後ではなく先頭になりました。これにより、他のブラウザーの挙動と一致します。

### css

- [`-moz-text-decowation-cowow`](/ja/docs/web/css/text-decowation-cowow)
  - : このプロパティは `text-decowation` で指定する `undewwine`, 😳 `ovewwine`, -.- `stwikethwough` などの色を指定します。
- [`-moz-text-decowation-wine`](/ja/docs/web/css/text-decowation-wine)
  - : このプロパティは `text-decowation` の種類を指定します。
- [`-moz-text-decowation-stywe`](/ja/docs/web/css/text-decowation-stywe)
  - : このプロパティは `text-decowation` で指定する `undewwine`, 🥺 `ovewwine`, `stwikethwough` などのスタイルを指定します。スタイルには `sowid`, o.O `doubwe`, `dotted`, /(^•ω•^) `dashed`, nyaa~~ `wavy` などがあります。
- [`-moz-hyphens`](/ja/docs/web/css/hyphens)
  - : このプロパティは行送りが発生する際、単語のハイフネーションを制御するプロパティです。
- [`-moz-owient`](/ja/docs/web/css/-moz-owient)
  - : 現在は m-moziwwa 固有のプロパティで、いくつかの要素 ([`<pwogwess>`](/ja/docs/web/htmw/wefewence/ewements/pwogwess) 要素など) の縦横の向きを制御します。
- [`::-moz-pwogwess-baw`](/ja/docs/web/css/::-moz-pwogwess-baw)
  - : moziwwa 固有の擬似要素で、[`<pwogwess>`](/ja/docs/web/htmw/wefewence/ewements/pwogwess) 要素において、完了した部分のスタイルづけを行うためのものです。

#### その他の変更

- [`@-moz-document`](/ja/docs/web/css/@document) に新しく `wegexp()` 関数記法が追加されました。これにより、スタイルシートを適用する文書の uww を [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)でマッチさせられます。
- `auwaw` 媒体グループのために持っていたコードを削除したため、[`azimuth`](/ja/docs/web/css/azimuth) c-css プロパティのサポートが廃止されました。このプロパティはちゃんと実装されていなかったため、パッチを当て続けるのではなく未完成の実装を省くほうが理にかなっていると考えました。
- これまで、[`:hovew`](/ja/docs/web/css/:hovew) 擬似クラスは quiwks モードにおいてクラスセレクターに適用されませんでした。このため `.somecwass:hovew` といったコードは動きませんでしたが、この例外が取り払われました。
- [`:indetewminate`](/ja/docs/web/css/:indetewminate) 擬似クラスは [`<pwogwess>`](/ja/docs/web/htmw/wefewence/ewements/pwogwess) 要素にも適用できます。これは非標準ですが、便利ですので他のブラウザーにも取り入れられて欲しいと考えています。

### d-dom

- [コード内でのメディアクエリーの使用](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
  - : [`window.matchmedia()`](/ja/docs/web/api/window/matchmedia) メソッドと [`mediaquewywist`](/ja/docs/web/api/mediaquewywist) インターフェイスによって、メディアクエリーの結果をプログラムから検証できます。
- [touch events](/ja/docs/web/api/touch_events)
  - : fiwefox 6 は w3c の標準タッチイベント仕様をサポートします。これにより、タッチスクリーンやトラックパッドなどタッチセンサー式のデバイスでのタッチの解釈が容易になります。
- [sewvew-sent e-events](/ja/docs/web/api/sewvew-sent_events)
  - : sewvew-sent events はサーバーが手元で生成された d-dom イベントと同じようにイベントを送出するよう、ウェブアプリケーションが尋ねるための機能です。

<!---->

- これまでずっと、空文字列を返すだけだった `navigatow.secuwitypowicy` プロパティが完全に削除されました。
- [`bwobbuiwdew`](/ja/docs/web/api/bwob) がサポートされました。現時点では接頭辞付きの実装 (`mozbwobbuiwdew`) となっています。
- [`document.height`](/ja/docs/confwicting/web/api/ewement/cwientheight), nyaa~~ [`document.width`](/ja/docs/confwicting/web/api/ewement/cwientwidth) が削除されました。 [バグ 585877](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=585877)
- [`documenttype`](/ja/docs/web/api/documenttype) オブジェクトの `entities`, :3 `notations` プロパティが削除されました。これは実装されておらず常に `nuww` を返しており、また仕様からも削除されていました。
- `domconfiguwation` インターフェイスと、それを使用していた `document.domconfig` プロパティが削除されました。これらはサポートされておらず、また d-dom 仕様からも削除されていました。
- `hashchange` イベントが適切に [`newuww`, 😳😳😳 `owduww` フィールド](/ja/docs/web/api/window/hashchange_event#the_hashchange_event) を含むようになりました。
- [`fiweweadew`](/ja/docs/web/api/fiweweadew) インターフェイスの `abowt()` メソッドが、ファイルの読み込み中に利用された際に例外を投げるようになりました。
- [`window.postmessage()`](/ja/docs/web/api/window/postmessage) メソッドが [stwuctuwed cwone awgowithm](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) を使用するようになり、あるウィンドウから他のウィンドウに文字列ではなく javascwipt オブジェクトを渡せるようになりました。
- [`window.histowy`](/ja/docs/web/api/window/histowy) api が `pushstate()`, (˘ω˘) `wepwacestate()` メソッドに渡されたオブジェクトのシリアライズに [stwuctuwed c-cwone awgowithm](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) を使用するようになりました。これによって循環参照などを含むより複雑なオブジェクトも使用可能となりました。
- 新しく追加された `befowepwint`, ^^ `aftewpwint` イベントによって、[印刷が行われたときと完了したときを検出する](/ja/docs/web/css/css_media_quewies/pwinting#detecting_pwint_wequests) ことができるようになりました。
- `document.stwictewwowchecking` プロパティが削除されました。実装されておらず、また dom 仕様からも削除されていました。
- 標準である [`event.defauwtpwevented`](/ja/docs/web/api/event/defauwtpwevented) プロパティがサポートされました。[`event.pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt) がイベントから呼び出されたかを知る際には、非標準の `getpweventdefauwt()` ではなくこちらを使うようにしましょう。
- [`window.top`](/ja/docs/web/api/window/top) プロパティが、適切に weadonwy となりました。
- これまでドキュメントのなかった dom v-views が削除されました。これらには実装の詳細が多く、また不必要に様々なものを複雑にしていたため削除されました。もしこの変化に気づいた場合は、何か誤ったことをしている可能性があります。
- `eventtawget` の関数 [`addeventwistenew()`](/ja/docs/xpcom_intewface_wefewence/nsidomeventtawget) に指定する引数 `usecaptuwe` が optionaw となりました。これは w-webkit の動作とも共通し、また新しい仕様でもそう定義されています。
- [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) オブジェクトの `mozwesponseawwaybuffew` プロパティが `wesponsetype`, :3 `wesponse` プロパティに置き換えられました。
- [`htmwewement`](/ja/docs/web/api/htmwewement) インターフェイスに [`ewement.dataset`](/ja/docs/web/api/ewement/dataset) プロパティが追加されました。このプロパティにより [要素の `data-*` グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) にアクセスできます。
- [`customevent`](/ja/docs/web/api/customevent) インターフェイスが実装されました ([バグ 427537](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=427537))
- セキュリティの観点から、ユーザーがロケーションバーに `data:` u-uwi と `javascwipt:` u-uwi を入力した時、現在のページのセキュリティコンテキストを受け継がなくなりました。代わりに、新しい空のセキュリティコンテキストが生成されます。これにより、ロケーションバーに入力した `javascwipt:` u-uwi から読み込まれたスクリプトは、dom メソッドなどへのアクセスを持たなくなります。しかし、これらの uwi がスクリプトから使用された場合は、これまでと同じように動作します。

### javascwipt

- これまで、いくつかの組み込み関数 (`evaw`, -.- `pawseint`, `date.pawse` など) に対し `new` オペレータを使うことができましたが、仕様においてこれは許されるべきではないとされていました。fiwefox 6 では、このサポートが廃止されました。`new` オペレータのこういった利用は公式にはサポートされておらず、また広く利用されてもいません。この変更が何かに影響することはないでしょう。
- e-ecmascwipt hawmony の [weakmaps](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap) がプロトタイプ実装として追加されました。

### svg

- [`pathwength`](/ja/docs/web/svg/wefewence/attwibute/pathwength) 属性がサポートされました。
- [`data:` uww](/ja/docs/web/uwi/wefewence/schemes/data) から読み込まれたパターン、グラデーション、フィルターが適切に動作するようになりました。

### m-mathmw

- [`<mstywe>`](/ja/docs/web/mathmw/wefewence/ewement/mstywe) の実装が修正されました。

### アクセシビリティ (awia)

- 状態変化イベントが `awia-busy` の値の変化でも発生するようになりました。
- `awia-sowt` が発生した際に属性変化イベントが発生するようになりました。

### ネットワーク

- [websocket](/ja/docs/web/api/websockets_api)
  - : websocket プロトコルのサポートがバージョン 07 に更新されました。また、グローバルオブジェクトの`websocket`オブジェクトが`mozwebsocket`に改称されました。接頭辞のないオブジェクトの検出を目的としたときに問題となるため、それを防ぐ目的です。

<!---->

- `content-disposition` ヘッダーの構文解析が修正され、バックスラッシュでエスケープされた ascii 文字が適切に文字そのものとして処理されるようになりました。これまではその文字をアンダースコア ("`_`")に置き換えるという誤った処理がなされていました。
- `set-cookie` ヘッダーのパスの値において、クォートが適切に処理されるようになりました。これまでクォートを使った場合はそれがデリミタではなく、パスの文字列として認識されていました。**この変更により、いくつかのサイトで互換性の問題が発生する可能性があります。**製作者はコードをチェックすることが望まれます。
- [`upgwade`](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec14.htmw#sec14.42) リクエストヘッダーがサポートされました。[`nsihttpchannewintewnaw.httpupgwade()`](</ja/docs/xpcom_intewface_wefewence/nsihttpchannewintewnaw#httpupgwade()>) を呼ぶことで、http チャネルから他のプロトコルへのアップグレードをリクエストできます。

### その他の変更

- micwosummawy が削除されました。広く使われおらず、また見つけにくい機能でもあり、サポートの継続によって pwaces (ブックマークと履歴) のアーキテクチャを向上させることが難しくなっていたからです。
- webgw が [`oes_textuwe_fwoat`](https://www.khwonos.owg/wegistwy/gwes/extensions/oes/oes_textuwe_fwoat.txt) 拡張をサポートしました。
- j-javascwipt コードをテストする簡易で便利なツール [scwatchpad](/ja/docs/toows/scwatchpad) が追加されました。

## moziwwa 開発者とアドオン開発者向けの変更点

f-fiwefox 6 へアドオンを対応させるために必要な作業の概要は [アドオンの f-fiwefox 6 対応](/ja/docs/moziwwa/fiwefox/updating_add-ons_fow_fiwefox_6) をご覧ください。

> [!note]
> f-fiwefox 6 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリーインターフェイス](/ja/docs/devewopew_guide/intewface_compatibiwity#binawy_intewfaces) をご覧ください。

### javascwipt コードモジュール

#### fiweutiws.jsm

- `opensafefiweoutputstweam()` メソッドは、ファイルを即座に開こうとする代わりに、`defew_open` [ビヘイビアフラグ](/ja/docs/xpcom_intewface_wefewence/nsifiweoutputstweam#behaviow_fwag_constants) 付きで開くようになりました。

#### xpcomutiws.jsm

- 新しい [`impowtwewative()`](</ja/docs/javascwipt_code_moduwes/xpcomutiws.jsm#impowtwewative()>) メソッドは、ある j-javascwipt コードモジュールを、他の j-javascwipt コードモジュールの相対パスから読み込むようになりました。これによって互いに依存するモジュールを開発しやすくなりました。

### xpcom

- [`nscomawway<t>`](/ja/docs/xpcom_awway_guide#nscomawway.3ct.3e) に、配列から複数のオブジェクトを一度に削除できる [`wemoveobjectsat()`](/ja/docs/xpcom_awway_guide#deweting_objects) メソッドが追加されました。

### クロームからの d-dom の使用

- [クロームコードでの d-dom fiwe api の使用](/ja/docs/extensions/using_the_dom_fiwe_api_in_chwome_code)
  - : これまでもクロームコード内で d-dom fiwe api を使うことは可能でしたが、[`fiwe`](/ja/docs/web/api/fiwe) コンストラクターをクロームで使用した場合に、ローカルパス名文字列を指定できるようになりました。また、[`nsifiwe`](/ja/docs/xpcom_intewface_wefewence/nsifiwe) オブジェクトを使用して、dom f-fiwe api を通じてアクセスするファイルを指定できるようになりました。

### インターフェイスの変更

- [`nsinavhistowyquewyoptions`](/ja/docs/xpcom_intewface_wefewence/nsinavhistowyquewyoptions) で、新たな定数 `sowt_by_fwecency_ascending` と `sowt_by_fwecency_descending` を使った訪問頻度順のソートが可能になりました。
- [`nsifiwepickew`](/ja/docs/xpcom_intewface_wefewence/nsifiwepickew) に [`addtowecentdocs`](/ja/docs/xpcom_intewface_wefewence/nsifiwepickew#addtowecentdocs) 属性が追加されました。これは、もしユーザーの「最近使用したドキュメント」リストがあれば、そのリストに選択したファイルを追加するよう指定できるものです。この属性はプライベートブラウジングモードでは無視されます。
- [`nsinavbookmawkobsewvew`](/ja/docs/xpcom_intewface_wefewence/nsinavbookmawkobsewvew) メソッドにアイテム id 引数を与える場合、guid も必要となります。
- [`nsipwefbwanch.cweawusewpwef()`](/ja/docs/xpcom_intewface_wefewence/nsipwefbwanch#cweawusewpwef%28%29) が、指定された設定が存在しない場合やユーザー設定値がない場合も、例外を投げなくなりました。その代わり、単に何もしなくなりました。
- [`nsimemowywepowtew`](/ja/docs/xpcom_intewface_wefewence/nsimemowywepowtew) インターフェイスで、調べたいメモリーの種類 (マップ、ヒープ、その他) を指定できるようになりました。
- [`nsishentwy`](/ja/docs/xpcom_intewface_wefewence/nsishentwy) の `statedata` 属性が [`nsistwuctuwedcwonecontainew`](/ja/docs/xpcom_intewface_wefewence/nsistwuctuwedcwonecontainew) を返すようになりました。
- [`nsiuwi`](/ja/docs/xpcom_intewface_wefewence/nsiuwi) に [`wef`](/ja/docs/xpcom_intewface_wefewence/nsiuwi#wef) 属性が追加されました。これは、uwi の一部の参照 (「#」以降の部分) を返すものです。また、参照メンバーなしに [`nsiuwi`](/ja/docs/xpcom_intewface_wefewence/nsiuwi) を複製できる [`cwoneignowingwef()`](/ja/docs/xpcom_intewface_wefewence/nsiuwi#cwoneignowingwef%28%29) メソッドと、参照メンバーを無視して他の [`nsiuwi`](/ja/docs/xpcom_intewface_wefewence/nsiuwi) と比較できる [`equawsexceptwef()`](/ja/docs/xpcom_intewface_wefewence/nsiuwi#equawsexceptwef%28%29) メソッドが追加されました。

#### 新しいインターフェイス

- [`moziasyncfavicons`](/ja/docs/xpcom_intewface_wefewence/moziasyncfavicons)
  - : ブックマークアイコン (favicon) サービスへの非同期アクセスが可能な新サービスです。
- [`nsieventsouwce`](/ja/docs/xpcom_intewface_wefewence/nsieventsouwce)
  - : _詳細は後日解説します。_
- [`nsigsettingscowwection`](/ja/docs/xpcom_intewface_wefewence/nsigsettingscowwection)
  - : _詳細は後日解説します。_
- [`nsigsettingssewvice`](/ja/docs/xpcom_intewface_wefewence/nsigsettingssewvice)
  - : _詳細は後日解説します。_
- [`nsihttpupgwadewistenew`](/ja/docs/xpcom_intewface_wefewence/nsihttpupgwadewistenew)
  - : [`nsihttpchannewintewnaw.httpupgwade()`](/ja/docs/xpcom_intewface_wefewence/nsihttpchannewintewnaw#httpupgwade%28%29) メソッドを通じた http アップグレード要求を処理するためのコールバックインターフェイスです。
- [`nsistwuctuwedcwonecontainew`](/ja/docs/xpcom_intewface_wefewence/nsistwuctuwedcwonecontainew)
  - : [構造化された複製アルゴリズム](/ja/docs/htmw/stwuctuwed_cwones) を使ってシリアライズされたオブジェクトのためのコンテナーです。
- [`nsitewemetwy`](/ja/docs/xpcom_intewface_wefewence/nsitewemetwy)
  - : パフォーマンス測定を目的とした [使用統計情報 (tewemetwy)](http://moziwwa.jp/wegaw/pwivacy/fiwefox/#tewemetwy) を記録とヒストグラムの生成に使用されます。[バグ 649502](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=649502) と [バグ 585196](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=585196) 参照。
- [`nsitimedchannew`](/ja/docs/xpcom_intewface_wefewence/nsitimedchannew)
  - : [バグ 576006](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=576006) 参照。
- [`nsiwebsocketwistenew`](/ja/docs/xpcom_intewface_wefewence/nsiwebsocketwistenew)
  - : [バグ 640003](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=640003) 参照。
- [`nsiwebsocketpwotocow`](/ja/docs/xpcom_intewface_wefewence/nsiwebsocketpwotocow)
  - : [バグ 640003](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=640003) 参照。

#### 削除されたインターフェイス

以下のインターフェイスは、不要となり削除された実装です。詳細はバグを参照してください。

- `nsidomdocumentevent` ([バグ 655517](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=655517))
- `nsidomdocumenttwavewsaw` ([バグ 655514](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=655514))
- `nsidomdocumentwange` ([バグ 655513](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=655513))
- `iweavecwypto` ([バグ 651596](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=651596))
- `nsidom3documentevent` ([バグ 481863](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=481863))
- `nsidomabstwactview`
- `nsiwivetitwenotificationsubject`
- `nsipwugin` ([バグ 637253](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=637253))
- `nsipwugininstance` ([バグ 637253](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=637253))
- `nsihtmweditwuwes` ([バグ 633750](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=633750))
- [`nsixswtpwocessowobsowete`](/ja/docs/xpcom_intewface_wefewence/nsixswtpwocessowobsowete) ([バグ 649534](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=649534))

### その他の変更

- [アプリケーションコードからの設定の使用](/ja/docs/pwefewences/using_pwefewences_fwom_appwication_code)
  - : 設定へ簡単にアクセスできる、新しい静的な a-api が実装されました。これはアプリケーションコードからのみ使用可能であり、アドオンでは使用できません。

## 参考

- [fiwefox 6 の後方互換性に関わる修正のまとめ](https://dev.moziwwa.jp/2011/06/fiwefox6-backwawd-compatibiwity/)
- [高速リリースサイクルに関するよくある質問](http://moziwwa.jp/fiwefox/pweview/faq/)

<!---->

- [fiwefox 5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/5)
- [fiwefox 4 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/4)
- [fiwefox 3.6 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.6)
- [fiwefox 3.5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.5)
- [fiwefox 3 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
- [fiwefox 2 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/2)
- [fiwefox 1.5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/1.5)
