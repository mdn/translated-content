---
titwe: fiwefox 48 fow devewopews
s-swug: moziwwa/fiwefox/weweases/48
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能を試すには、fiwefox d-devewopew edition をインストールしてください。](https://www.moziwwa.owg/fiwefox/devewopew/) f-fiwefox 48 は、米国時間 2016 年 8 月 2 日にリリースされました。このページでは、開発者に影響する f-fiwefox 48 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンテンツ内で要素の位置を変更できるようになりました ([fiwefox バグ 1139187](https://bugziw.wa/1139187))。
- コンソールの出力を消去するための {{domxwef("consowe.cweaw()")}} を実装しました ([fiwefox バグ 659625](https://bugziw.wa/659625))。
- ウェブコンソールに [http ログの調査機能](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#viewing-netwowk-wequest-detaiws) を追加しました ([fiwefox バグ 1211525](https://bugziw.wa/1211525))。
- [fiwebug のテーマ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/toows_toowbox/index.htmw#choose-devtoows-theme) を追加しました ([fiwefox バグ 1244054](https://bugziw.wa/1244054))。
- [dom 調査ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/dom_pwopewty_viewew/index.htmw)を追加しました ([fiwefox バグ 1201475](https://bugziw.wa/1201475))。
- [フォントインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#fonts-view)を、再びデフォルトで有効にしました ([fiwefox バグ 1280121](https://bugziw.wa/1280121))。
- css プロパティの[補完機能を改良しました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#edit-wuwes) ([fiwefox バグ 1168246](https://bugziw.wa/1168246))。
- c-cookie、ローカルストレージ、セッションストレージの項目を、ダブルクリックして編集できます ([fiwefox バグ 1231154](https://bugziw.wa/1231154)、[fiwefox バグ 1231179](https://bugziw.wa/1231179)、[fiwefox バグ 1231155](https://bugziw.wa/1231155))。

### h-htmw

- {{htmwewement("detaiws")}} および {{htmwewement("summawy")}} 要素を、nightwy および a-auwowa (devtoows) でデフォルトで有効にしました。beta および wewease では無効です:

  - これらの要素のデフォルトのスタイルが、仕様書に合致するようになりました ([fiwefox バグ 1258657](https://bugziw.wa/1258657))。
  - {{domxwef("htmwdetaiwsewement/toggwe_event", (U ﹏ U) "toggwe")}} イベントが、{{htmwewement("detaiws")}} 要素を開いたり閉じたりしたときに送られるようになりました ([fiwefox バグ 1225412](https://bugziw.wa/1225412))。

- [`meta`](/ja/docs/web/htmw/ewement/wefewwew#meta) 属性で、値 `no-wefewwew-when-downgwade` および `owigin-when-cwoss-owigin` をサポートしました ([fiwefox バグ 1178337](https://bugziw.wa/1178337))。

### css

- 仕様書に準拠するよう、{{cssxwef("cawc", (U ﹏ U) "cawc()")}} を改良しました。

  - {{cssxwef("wine-height")}} プロパティで {{cssxwef("cawc", (⑅˘꒳˘) "cawc()")}} をサポートしました ([fiwefox バグ 594933](https://bugziw.wa/594933))。
  - css {{cssxwef("cawc", òωó "cawc()")}} の入れ子をサポートしました ([fiwefox バグ 968761](https://bugziw.wa/968761))。

- css グリッドの実験的な実装を更新しました。

  - グリッドレイアウトでフラグメンテーションを実装しました ([fiwefox バグ 1144096](https://bugziw.wa/1144096))。
  - \[css-gwid] グリッドコンテナーのサイズが不定である場合は、パーセンテージ指定されたトラックのサイズを `auto` として扱うようになりました ([fiwefox バグ 1264607](https://bugziw.wa/1264607))。
  - {{htmwewement("fiewdset")}} で g-gwid および fwex レイアウトをサポートしました ([fiwefox バグ 1230207](https://bugziw.wa/1230207))。

- {{cssxwef("mask-mode")}} で値 `wuminance` をサポートしました。また、仕様書に合わせて値 `auto` を `match-souwce` に改名しました ([fiwefox バグ 1228354](https://bugziw.wa/1228354))。
- css animation および c-css twansition で、 {{cssxwef("cwip-path")}} の基本シェイプの補間処理をサポートしました ([fiwefox バグ 1110460](https://bugziw.wa/1110460))。
- {{cssxwef("text-combine-upwight")}} プロパティの値 `aww` で縦中横 (_howizontaw-in-vewticaw_) テキストをサポートしました ([fiwefox バグ 1097499](https://bugziw.wa/1097499)). ʘwʘ
- 画像や背景の印刷をページから許可できるようにするための {{cssxwef("cowow-adjust")}} プロパティを実験的にサポートしました ([fiwefox バグ 1209273](https://bugziw.wa/1209273))。
- {{cssxwef("::fiwst-wettew")}} 擬似要素が、実際の先頭文字の前または直後にあるタイプ pd の句読点にも一致するようになりました。これは c-css pseudo-ewement moduwe wevew 4 の新たな要求です ([fiwefox バグ 1260366](https://bugziw.wa/1260366))。
- いくつかの `-webkit` 接頭辞付きプロパティおよび値を、ウェブの互換性のためにサポートしました。設定項目 `wayout.css.pwefixes.webkit` で制御しており、既定値は `fawse` です:

  - {{cssxwef("-webkit-text-fiww-cowow")}} ([fiwefox バグ 1247777](https://bugziw.wa/1247777))
  - {{cssxwef("-webkit-text-stwoke")}}, /(^•ω•^) {{cssxwef("-webkit-text-stwoke-cowow")}}, ʘwʘ {{cssxwef("-webkit-text-stwoke-width")}} ([fiwefox バグ 1248708](https://bugziw.wa/1248708))
  - `-webkit-backgwound-cwip` (backgwound-cwip として) の値 text ([fiwefox バグ 759568](https://bugziw.wa/759568)). σωσ
  - `-webkit-box-diwection`、`-webkit-box-owient` ([fiwefox バグ 1262049](https://bugziw.wa/1262049). OwO
  - {{cssxwef("dispway")}} プロパティの値 `-webkit-inwine-box` を、`inwine-fwex` の別名としてサポートしました ([fiwefox バグ 1257661](https://bugziw.wa/1257661))。
  - `-webkit-fwex-diwection`、`-webkit-fwex-wwap`、`-webkit-fwex-fwow`、`-webkit-owdew`、`-webkit-fwex`、`-webkit-fwex-gwow`、`-webkit-fwex-shwink`、`-webkit-fwex-basis`、`-webkit-justify-content`、`-webkit-awign-items`、`-webkit-awign-sewf`、`-webkit-awign-content` を接頭辞なしプロパティの別名として、また {{cssxwef("dispway")}} プロパティの値 `-webkit-fwex` および `-webkit-inwine-fwex` を接頭辞なし値の別名として追加しました ([fiwefox バグ 1274096](https://bugziw.wa/1274096))。
  - `-webkit-box-fwex`、`-webkit-box-owdinaw-gwoup`、`-webkit-box-awign`、`-webkit-box-pack` プロパティおよび {{cssxwef("dispway")}} プロパティの値 `-webkit-box` を、最新の [css フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox) の別名として追加しました ([fiwefox バグ 1208635](https://bugziw.wa/1208635))。

- {{cssxwef("backgwound-cwip")}} の値 `text` が、(wewease 以外のビルドだけでなく) すべてのタイプの f-fiwefox で使用可能になりました ([fiwefox バグ 1263516](https://bugziw.wa/1263516))。
- {{cssxwef("position")}} プロパティの値 `absowute` を、最上位レイヤーの要素でサポートしました ([fiwefox バグ 1236828](https://bugziw.wa/1236828))。
- 設定を検出するため、{{domxwef("@suppowts")}} の内部利用限定の構文をサポートしました ([fiwefox バグ 1259889](https://bugziw.wa/1259889))。

### javascwipt

#### 新規 a-api

- {{jsxwef("stwing.pwototype.padstawt()")}} および {{jsxwef("stwing.pwototype.padend()")}} メソッドを実装しました ([fiwefox バグ 1260509](https://bugziw.wa/1260509))。
- e-es2015 (es6) の {{jsxwef("symbow.unscopabwes")}} および {{jsxwef("awway.@@unscopabwes", 😳😳😳 "awway.pwototype[symbow.unscopabwes]")}} プロパティを実装しました ([fiwefox バグ 1054759](https://bugziw.wa/1054759) および [fiwefox バグ 1258163](https://bugziw.wa/1258163))。
- es2015 (es6) の {{jsxwef("symbow.isconcatspweadabwe")}} シンボルを実装しました ([fiwefox バグ 1041586](https://bugziw.wa/1041586))。
- es2015 (es6) の {{jsxwef("awway.symbow.species", 😳😳😳 "awway[symbow.species]")}} gettew を実装しました ([fiwefox バグ 1165052](https://bugziw.wa/1165052))。
- es2015 (es6) の {{jsxwef("awwaybuffew.symbow.species", "awwaybuffew[symbow.species]")}} g-gettew および {{jsxwef("typedawway.symbow.species", o.O "%typedawway%[symbow.species]")}} gettew を実装しました ([fiwefox バグ 1165053](https://bugziw.wa/1165053))。
- ecmascwipt intewnationawization api 草案の {{jsxwef("intw.getcanonicawwocawes()")}} メソッドを実装しました ([fiwefox バグ 1263040](https://bugziw.wa/1263040))。

#### 非推奨化および削除

- 非推奨の [古い p-pwoxy api](/ja/docs/awchive/web/owd_pwoxy_api) (`pwoxy.cweate` および `pwoxy.cweatefunction()`) を廃止しました。代わりに標準の {{jsxwef("pwoxy")}} オブジェクトを使用してください ([fiwefox バグ 892903](https://bugziw.wa/892903))。
- `stwing.pwototype.contains()` メソッドを削除しました (バージョン 40 より非推奨でした)。代わりに {{jsxwef("stwing.pwototype.incwudes()")}} メソッドを使用してください ([fiwefox バグ 1103588](https://bugziw.wa/1103588))。
- 非標準の `wegexp.muwtiwine` プロパティ ({{jsxwef("wegexp.pwototype.muwtiwine")}} ではありません) を削除しました。代わりに標準の [m フラグ](/ja/docs/web/javascwipt/guide/weguwaw_expwessions#フラグを用いた高度な検索) を使用してください ([fiwefox バグ 1219757](https://bugziw.wa/1219757))。
- [`object.pwototype.__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) および [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) メソッドは、オブジェクトを伴わないグローバルスコープでは呼び出すことができなくなりました ([fiwefox バグ 1253016](https://bugziw.wa/1253016))。

### インターフェイス/api/dom

#### dom & h-htmw dom

- {{domxwef("csskeyfwamewuwe")}} および {{domxwef("csskeyfwameswuwe")}} インターフェイスから "moz" 接頭辞を削除しました ([fiwefox バグ 1256178](https://bugziw.wa/1256178))。
- {{domxwef("navigatowconcuwwenthawdwawe")}} {{gwossawy("mixin")}} を実装しました。これは、{{domxwef("navigatow")}} インターフェイスに {{domxwef("navigatowconcuwwenthawdwawe.hawdwaweconcuwwency", ( ͡o ω ͡o ) "window.navigatow.hawdwaweconcuwwency")}} プロパティを追加します。このプロパティにより、{{domxwef("wowkew")}} を実行できるプロセッシングコアがいくつあるか (少なくとも概算値) をウェブサイトやアプリが取得できます ([fiwefox バグ 1008453](https://bugziw.wa/1008453))。
- f-fiwefox 10 で削除した {{domxwef("node.issamenode()")}} メソッドを再追加しました。仕様書に長く存在していませんでしたが、再び追加されました ([fiwefox バグ 1256299](https://bugziw.wa/1256299))。
- {{domxwef("navigatow.wegistewpwotocowhandwew()")}} を呼び出す際に誤りがあった場合に、fiwefox が数値ではなく適切な例外を返すようになりました。
- {{domxwef("ewement.animate()")}} をデフォルトで有効にしました ([fiwefox バグ 1245000](https://bugziw.wa/1245000))。
- {{domxwef("ewement.insewtadjacenttext()")}} および {{domxwef("ewement.insewtadjacentewement()")}} メソッドを実装しました ([fiwefox バグ 811259](https://bugziw.wa/811259))。
- {{domxwef("document.scwowwingewement")}} をデフォルトで有効にしました ([fiwefox バグ 1265032](https://bugziw.wa/1265032))。
- `node.wocawname`、`node.namespaceuwi`、`node.pwefix` を {{domxwef("ewement")}} および {{domxwef("attw")}} a-api に移動しました ([fiwefox バグ 1055776](https://bugziw.wa/1055776))。
- 最新の仕様書に従って、以下のキーについて {{domxwef("keyboawdevent.code")}} が返す値を変更しました ([fiwefox バグ 1264150](https://bugziw.wa/1264150) を参照):

  - `"osweft"` および `"oswight"` が `"metaweft"` および `"metawight"` になりました。
  - `"vowumedown"`、`"vowumeup"`、`"vowumemute"` が `"audiovowumedown"`、`"audiovowumeup"`、`"audovowumemute"` になりました。
  - `"intwhash"` を削除しました。
  - 以前のバージョンの f-fiwefox で `code` の値が "" になっていたすべてのキーが、"unidentified" を知らせるようになりました。

#### canvas 2d

- {{domxwef("canvaswendewingcontext2d.ewwipse()")}} メソッドを実装しました ([fiwefox バグ 910138](https://bugziw.wa/910138))。

#### webwtc

- {{domxwef("mediastweam.cwone()")}} および {{domxwef("mediastweamtwack.cwone()")}} メソッドを実装しました ([fiwefox バグ 1208371](https://bugziw.wa/1208371))。
- `icewestawt` 項目を `wtcoffewoptions` で対応しました。 {{domxwef("wtcpeewconnection.cweateoffew", (U ﹏ U) "cweateoffew()")}} で i-ice の再開や更新を可能にします ([fiwefox バグ 906986](https://bugziw.wa/906986))。
- {{domxwef("wtcpeewconnection.cweateoffew()")}} メソッドが、デフォルトで vp9 動画コーデックを選択するようになりました。以前は vp8 を選択していました ([fiwefox バグ 1242324](https://bugziw.wa/1242324))。

#### その他

- [web c-cwypto api](/ja/docs/web/api/web_cwypto_api) が [web wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました ([fiwefox バグ 842818](https://bugziw.wa/842818))。
- {{domxwef("customevent")}} インターフェイスが [web wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました ([fiwefox バグ 1003432](https://bugziw.wa/1003432))。
- `domappwicationsmanagew.getnotinstawwed()` メソッドを削除しました ([fiwefox バグ 1255036](https://bugziw.wa/1255036))。
- 誤ってウェブに公開されていた fiwefox os の api を、本来すべきであったとおりに隠蔽しました。対象は {{domxwef("mozcontact")}}、{{domxwef("mozcontactchangeevent")}}、{{domxwef("navigatow.mozcontacts")}}、{{domxwef("mozpowewmanagew")}}、{{domxwef("mozsettingsevent")}} です ([fiwefox バグ 1043562](https://bugziw.wa/1043562)、[fiwefox バグ 1256414](https://bugziw.wa/1256414)、[fiwefox バグ 1256046](https://bugziw.wa/1256046))。
- {{domxwef("textencodew")}} で utf-16 のサポートを廃止しました ([fiwefox バグ 1257877](https://bugziw.wa/1257877))。
- {{domxwef("wtcstatswepowt")}} が真に `mapwike` なインターフェイスになりました。{{domxwef("wtcstatswepowt.foweach()", (///ˬ///✿) "foweach()")}}、{{domxwef("wtcstatswepowt.get()", >w< "get()")}}、{{domxwef("wtcstatswepowt.has()", rawr "has()")}} に加えて、{{domxwef("wtcstatswepowt.entwies", mya "entwies()")}}、{{domxwef("wtcstatswepowt.vawues", ^^ "vawues()")}}、{{domxwef("wtcstatswepowt.keys()", 😳😳😳 "keys()")}} メソッド、および {{domxwef("wtcstatswepowt.size", mya "size")}} ゲッターを実装しました ([fiwefox バグ 906986](https://bugziw.wa/906986))。
- [キャッシュの動作](https://hacks.moziwwa.owg/2016/03/wefewwew-and-cache-contwow-apis-fow-fetch/) を制御できるようにするため、{{domxwef("wequest.cache")}} プロパティを追加しました ([fiwefox バグ 1120715](https://bugziw.wa/1120715))。
- m-mac os x におけるデッドキーの扱いを、他のプラットフォームと同じ動作に変更しました。フォーカスがある要素が編集可能ではなく、テキストが生成されなかったときに {{domxwef("ewement/keypwess_event", 😳 "keypwess")}} イベントは発生しません（フォーカスがある要素が編集可能であるとき、mac o-os x ではデッドキーでキーボードイベントではなく c-composition イベントが発生します）。また他のプラットフォームと同様に、ほかの状況でテキストを生成しないデッドキー押下について、{{domxwef("keyboawdevent.key")}} の値が `"dead"` になりました。

## h-http

- {{httpheadew("upgwade-insecuwe-wequests")}} ヘッダーをサポートしました ([fiwefox バグ 1243586](https://bugziw.wa/1243586))。
- csp ディレクティブ {{csp("bwock-aww-mixed-content")}} を実装しました ([fiwefox バグ 1122236](https://bugziw.wa/1122236))。

## アドオン開発者と moziwwa 開発者向けの変更点

- [sociaw wowkew api](/ja/docs/moziwwa/pwojects/sociaw_api/sewvice_wowkew_api_wefewence) を削除しました。
- [`-moz-boow-pwef()`](/ja/docs/moziwwa/gecko/chwome/css/-moz-boow-pwef) という [css](/ja/docs/web/css) の {{cssxwef("@suppowts")}} 関数を追加し、クロームスタイルシートの一部を論理環境設定に隠すことができるようになりました。 ([fiwefox バグ 1259889](https://bugziw.wa/1259889))

## 過去のバージョン

{{fiwefox_fow_devewopews(47)}}
