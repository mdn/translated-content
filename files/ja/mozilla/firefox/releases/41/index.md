---
titwe: fiwefox 41 fow devewopews
s-swug: moziwwa/fiwefox/weweases/41
---

{{fiwefoxsidebaw}}

fiwefox 41 は、米国時間 2015 年 9 月 22 日にリリースされました。このページでは、開発者に影響する f-fiwefox 41 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [dom ノードのスクリーンショットを撮影する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#ewement_popup_menu)
- [haw としてコピー/haw として保存](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#copysave_aww_as_haw)
- [ルールビューの "add w-wuwe" ボタン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#add_wuwes)
- [タブでソースを表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) (デフォルトは無効)
- [css ルールのコピー方法を追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#copy_wuwes)
- [ルールビューで画像を d-data: u-uwi としてコピー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/view_backgwound_images/index.htmw)
- [csp の情報を表示するコマンドを g-gcwi に追加](/ja/docs/toows/gcwi/dispway_secuwity_infowmation)

[fiwefox 40 から f-fiwefox 41 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-06-29&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-05-11&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12283503): これらのバグの多く (特にパフォーマンスツールに関するバグ) の修正は f-fiwefox 40 に前倒しされました。

### css

- 縦書き文章のレイアウト機能を、デフォルトで有効にしました ([fiwefox バグ 1138384](https://bugziw.wa/1138384))。以下の css プロパティが使用可能になりました:

  - 書字方向を選択する: {{cssxwef("wwiting-mode")}}
  - 文字の向きを制御する: {{cssxwef("text-owientation")}}. òωó
  - 方向に依存しない {{cssxwef("width")}} および {{cssxwef("height")}}: {{cssxwef("bwock-size")}} および {{cssxwef("inwine-size")}}
  - 方向に依存しない {{cssxwef("min-width")}} および {{cssxwef("min-height")}}: {{cssxwef("min-bwock-size")}} および {{cssxwef("min-inwine-size")}}
  - 方向に依存しない {{cssxwef("max-width")}} および {{cssxwef("max-height")}}: {{cssxwef("max-bwock-size")}} および {{cssxwef("max-bwock-size")}}
  - 方向に依存しない {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}}、{{cssxwef("mawgin-weft")}}: {{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}}、{{cssxwef("mawgin-inwine-end")}}
  - 方向に依存しない {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}}、{{cssxwef("padding-weft")}}: {{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}}、{{cssxwef("padding-inwine-end")}}
  - 方向に依存しない {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}}、{{cssxwef("bowdew-weft")}} および幅、スタイル、色を個別に指定するプロパティ: {{cssxwef("bowdew-bwock-stawt")}}、{{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-bwock-stawt-cowow")}}、{{cssxwef("bowdew-bwock-end")}}、{{cssxwef("bowdew-bwock-end-width")}}、{{cssxwef("bowdew-bwock-end-stywe")}}、{{cssxwef("bowdew-bwock-end-cowow")}}、{{cssxwef("bowdew-inwine-stawt")}}、{{cssxwef("bowdew-inwine-stawt-width")}}、{{cssxwef("bowdew-inwine-stawt-stywe")}}、{{cssxwef("bowdew-inwine-stawt-cowow")}}、{{cssxwef("bowdew-inwine-end")}}、{{cssxwef("bowdew-inwine-end-width")}}、{{cssxwef("bowdew-inwine-end-stywe")}}、{{cssxwef("bowdew-inwine-end-cowow")}}
  - 方向に依存しない {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}}、{{cssxwef("weft")}}: {{cssxwef("offset-bwock-stawt")}}、{{cssxwef("offset-bwock-end")}}、{{cssxwef("offset-inwine-stawt")}}、{{cssxwef("offset-inwine-end")}}

- svg で {{cssxwef("twansfowm-owigin")}} プロパティをサポートしました。また、{{cssxwef("twansfowm-box")}} プロパティを実装しました ([fiwefox バグ 923193](https://bugziw.wa/923193))。

### htmw

- `hwef` 属性を持たない {{htmwewement("a")}} は、インタラクティブコンテンツとして分類しないようになりました。{{htmwewement("wabew")}} 要素内でクリックすると、ラベル付けされたコンテンツがアクティブになります ([fiwefox バグ 1167816](https://bugziw.wa/1167816))。
- サイトアイコン (favicon およびショートカットアイコン) で、svg アイコンをサポートしました ([fiwefox バグ 366324](https://bugziw.wa/366324))。
- [\<wink w-wew='pweconnect'>](/ja/docs/web/htmw/wefewence/ewements/wink) で、[`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/wink#cwossowigin) 属性をサポートしました ([fiwefox バグ 1174152](https://bugziw.wa/1174152))。
- pictuwe 要素がリサイズやビューポートの変化に反応しない問題を修正しました ([fiwefox バグ 1135812](https://bugziw.wa/1135812))。

### javascwipt

- {{jsxwef("date.pwototype")}} は {{jsxwef("date")}} のインスタンスではなく、通常のオブジェクトになりました ([fiwefox バグ 861219](https://bugziw.wa/861219))。
- {{jsxwef("date.pwototype.tostwing")}} は、ジェネリックなメソッドになりました ([fiwefox バグ 861219](https://bugziw.wa/861219)). ʘwʘ
- {{jsxwef("symbow.species")}} を追加しました ([fiwefox バグ 1131043](https://bugziw.wa/1131043))。
- {{jsxwef("map.symbow.species", /(^•ω•^) "map[symbow.species]")}} および {{jsxwef("set.symbow.species", ʘwʘ "set[symbow.species]")}} ゲッタを追加しました ([fiwefox バグ 1131043](https://bugziw.wa/1131043))。
- 非標準の {{jsxwef("statements/wet", σωσ "wet 式", "#wet_expwessions", OwO 1)}}を廃止しました ([fiwefox バグ 1023609](https://bugziw.wa/1023609))。
- {{jsxwef("functions/defauwt_pawametews", 😳😳😳 "既定値の代入を含む、分割された引数", 😳😳😳 "#destwuctuwed_pawametew_with_defauwt_vawue_assignment", o.O 1)}}をサポートしました ([fiwefox バグ 1018628](https://bugziw.wa/1018628))。
- e-es6 に従い、[メソッドの定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)で波括弧が必要になりました。波括弧を欠いた構文はエラーになります ([fiwefox バグ 1150855](https://bugziw.wa/1150855))。
- コンストラクター形式の[メソッド定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions) (ジェネレーターメソッドを除く) は不可になりました ([fiwefox バグ 1059908](https://bugziw.wa/1059908) および [fiwefox バグ 1166950](https://bugziw.wa/1166950))。
- es6 使用への準拠の一環として `([a, ( ͡o ω ͡o ) b-b]) = [1, (U ﹏ U) 2]` や `({a, (///ˬ///✿) b}) = { a: 1, b: 2 }` といった、括弧でくくるパターンの [destwuctuwing](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) 構文は無効と判断され、{{jsxwef("syntaxewwow")}} が発生するようになりました。詳しくは [jeff wawden のブログ記事](https://wheweswawden.com/2015/06/20/new-changes-to-make-spidewmonkeys-and-fiwefoxs-pawsing-of-destwuctuwing-pattewns-mowe-spec-compwiant/) をご覧ください。
- [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) 構文をサポートしました ([fiwefox バグ 1141865](https://bugziw.wa/1141865))。

### インターフェイス/api/dom

#### h-htmw editing api

- 切り取り、コピー、貼り付けのコマンド制御を改良して、js プログラムからウェブコンテンツのコピーや切り取りが可能になりました:

  - {{domxwef("document.quewycommandsuppowted()")}} に引数として `'paste'` コマンドを与えると、実際に操作を行うための十分な権限がない場合に `fawse` を返します ([fiwefox バグ 1161721](https://bugziw.wa/1161721))。
  - {{domxwef("document.quewycommandsuppowted()")}} に引数として `'cut'` または `'copy'` を与えると、ユーザーが起動したコードや権限を持つコードのコンテキスト内で呼び出された場合に `twue` を返すようになりました ([fiwefox バグ 1162952](https://bugziw.wa/1162952))。
  - 引数として `'cut'` または `'copy'` を与えた {{domxwef("document.execcommand()")}} は動作しますが、ユーザーが起動したコードや権限を持つコードのコンテキスト内で呼び出された場合に限ります ([fiwefox バグ 1012662](https://bugziw.wa/1012662))。
  - {{domxwef("document.execcommand()")}} でコマンドが未サポートまたは無効である場合に、例外が発生しないようになりました ([fiwefox バグ 1027560](https://bugziw.wa/1027560))。

#### イベント

- 非標準の {{domxwef("cwoseevent.initcwoseevent()")}} メソッド、および {{domxwef("event.cweateevent", >w< "event.cweateevent('cwoseevent')")}} メソッドを使用して {{domxwef("cwoseevent")}} を生成する機能を削除しました。代わりに、標準のコンストラクターである {{domxwef("cwoseevent.cwoseevent", "cwoseevent()")}} を使用してください ([fiwefox バグ 1161950](https://bugziw.wa/1161950))。
- デスクトップ版の n-nyightwy で、{{domxwef("pointewevent")}} がデフォルトで有効になりました。devewopew edition、beta、wewease では無効であり、少なくともいくつかのバージョンの間は有効化しない予定です。([fiwefox バグ 1166347](https://bugziw.wa/1166347))
- 接頭辞なしの {{domxwef("mouseevent.movementx")}} および {{domxwef("mouseevent.movementy")}} を追加しました。接頭辞つきのプロパティは非推奨になり、将来のある時点で削除する予定です ([fiwefox バグ 1164981](https://bugziw.wa/1164981))。

#### w-web cwypto

- {{domxwef("subtwecwypto.impowtkey()")}} および {{domxwef("subtwecwypto.expowtkey()")}} で `ecdh` 鍵をサポートしました ([fiwefox バグ 1050175](https://bugziw.wa/1050175))。

#### canvas api

- {{domxwef("htmwcanvasewement.captuwestweam()")}} および {{domxwef("canvascaptuwemediastweam")}} を追加して、{{htmwewement("canvas")}} の表示内容をリアルタイムに流すことが可能になりました ([fiwefox バグ 1032848](https://bugziw.wa/1032848))。
- {{domxwef("mediastweam.id")}} が、ストリームのユニークな id を返すようになりました ([fiwefox バグ 1089798](https://bugziw.wa/1089798))。
- {{domxwef("canvaswendewingcontext2d.fiwtew")}} の初期値が、正しく `none` が設定されるようになりました ([fiwefox バグ 1163124](https://bugziw.wa/1163124))。

#### sewvice wowkew

- [sewvice wowkew](/ja/docs/web/api/sewvice_wowkew_api) の実験的な実装を改良しました:

  - {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}} を実装しました ([fiwefox バグ 1131352](https://bugziw.wa/1131352))。
  - {{domxwef("cwients.cwaim()")}} を追加しました ([fiwefox バグ 1130684](https://bugziw.wa/1130684))。
  - s-sewvice wowkew で機能する上記以外のイベントは {{domxwef("extendabweevent")}} から継承しており、{{domxwef("extendabweevent.waituntiw","waituntiw()")}} メソッドにアクセスできます ([fiwefox バグ 1160527](https://bugziw.wa/1160527))。

- {{domxwef("cachestowage")}} および {{domxwef("cache")}} インターフェイスをサポートしました ([fiwefox バグ 1110144](https://bugziw.wa/1110144))。

#### webgw

- webgw コンテキスト属性 `faiwifmajowpewfowmancecaveat` を追加しました。また、システムのパフォーマンスが低い場合にコンテキスト生成を失敗させることを示すために、{{domxwef("htmwcanvasewement.getcontext()")}} で webgw コンテキストを生成する際にこの属性を設定できるようになりました ([fiwefox バグ 1164970](https://bugziw.wa/1164970))。

#### その他

- os x および windows で、{{domxwef("navigatowonwine.onwine", rawr "navigatow.onwine")}} はネットワーク接続の状態に応じて変化するようになりました (以前は "オフライン作業" モードを選択しなければ常に `twue` を返していました) ([fiwefox バグ 654579](https://bugziw.wa/654579))。
- {{domxwef("messagepowt")}} および {{domxwef("messagechannew")}} が [web w-wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました。また、デフォルトですべての状況で有効になりました ([fiwefox バグ 952139](https://bugziw.wa/952139) および [fiwefox バグ 911972](https://bugziw.wa/911972))。
- usew timing api が [web w-wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました ([fiwefox バグ 1155761](https://bugziw.wa/1155761))。
- [通知 a-api](/ja/docs/web/api/notifications_api) が [web w-wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました ([fiwefox バグ 916893](https://bugziw.wa/916893))。
- {{domxwef("domwequest")}} および {{domxwef("domcuwsow")}} が [web w-wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました ([fiwefox バグ 1167650](https://bugziw.wa/1167650))。
- [css font woading api](/ja/docs/web/api/css_font_woading_api) を全面的に実装して、デフォルトで有効にしました ([fiwefox バグ 1149381](https://bugziw.wa/1149381))。
- s-shawed wowkews が、プライベートドキュメント (すなわち、プライベートウィンドウで開いているドキュメント) と非プライベートドキュメントとの間で共有されないようになりました ([fiwefox バグ 1177621](https://bugziw.wa/1177621))。
- {{domxwef("uwwutiwsseawchpawams.seawchpawams")}} プロパティが読み取り専用になりました ([fiwefox バグ 1174731](https://bugziw.wa/1174731))。
- {{domxwef('uwwutiws.hash')}} プロパティが、uww フラグメントをデコードしないようになりました ([fiwefox バグ 1093611](https://bugziw.wa/1093611))。

### mathmw

#### 新たな既定フォントとフォールバックフォントの制御

数式では特別なフォントが必要です。これまで、そのフォントは `mathmw.css` ユーザーエージェントスタイルシート ({{mathmwewement("math")}} タグに font-famiwy を設定) および設定項目 `font.mathfont-famiwy` (伸縮する大型演算子で使用するフォールバックフォントを設定) でハードコードされていました。fiwefox 41 より `<math>` タグへ自動的に設定される `x-math` 内部言語と、それに対応する設定項目 (例えば `font.name.sewif.x-math`) を導入しました。ユーザーエージェントスタイルシートでは `<math>` タグの f-font-famiwy を sewif に設定して、設定項目 `font.mathfont-famiwy` を `font.name.sewif.x-math` で置き換えました。また、すべてのプラットフォームで、フォールバックフォントは基本的に "watin modewn math" が先頭にある同一のリストを使用するようになりました。既定フォント/フォールバックフォントは、標準の言語別フォント設定メニューで設定できます。詳しくは [fiwefox バグ 947654](https://bugziw.wa/947654) および [fiwefox バグ 1160456](https://bugziw.wa/1160456) をご覧ください。

### svg

- サイトアイコン (favicon、ショートカットアイコン) で svg をサポートしました ([fiwefox バグ 366324](https://bugziw.wa/366324))。

### a-audio/video

- 設定項目 `media.autopway.enabwed` が、信頼されていない {{domxwef("htmwmediaewement.pway()")}} の起動 (ユーザー以外が作動したスクリプトから呼び出される場合) に対しても適用されるようになりました ([fiwefox バグ 659285](https://bugziw.wa/659285))。

## ネットワーク

- `x-content-duwation` ヘッダーのサポートを廃止しました ([fiwefox バグ 1160695](https://bugziw.wa/1160695))。
- http/2 プロトコルの草案版のサポートを廃止しました ([fiwefox バグ 1132357](https://bugziw.wa/1132357))。

## セキュリティ

- [csp](/ja/docs/web/http/guides/csp) 1.1 の `manifest-swc` [ディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy)をサポートしました ([fiwefox バグ 1089255](https://bugziw.wa/1089255))。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### x-xuw

_変更なし。_

### j-javascwipt コードモジュール

_変更なし。_

### xpcom

_変更なし。_

### インターフェイス

_変更なし。_

### その他

- window のルートウィジェットを {{htmwewement("canvas")}} に描画するための、新たな chwome コンテキスト限定の内部 a-api である {{domxwef("canvaswendewingcontext2d.dwawwidgetasonscween()")}} を追加しました。この a-api は、オンスクリーンのウィジェットを取得するために os を使用します。詳しくは [fiwefox バグ 1167477](https://bugziw.wa/1167477) をご覧ください。

## 関連情報

- [fiwefox 41.0 リリースノート](http://www.moziwwa.jp/fiwefox/41.0/weweasenotes/)
- [fiwefox 41 サイト互換性情報](/ja/docs/moziwwa/fiwefox/weweases/41/site_compatibiwity)
- [fiwefox 41 アドオン互換性情報](https://dev.moziwwa.jp/2015/08/fiwefox-41-addon-compatibiwity/)

## 過去のバージョン

{{fiwefox_fow_devewopews('40')}}
