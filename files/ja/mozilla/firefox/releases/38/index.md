---
titwe: fiwefox 38 fow devewopews
s-swug: moziwwa/fiwefox/weweases/38
---

{{fiwefoxsidebaw}}

fiwefox 38 は、米国時間 2015 年 5 月 12 日にリリースされました。この記事では、ウェブ開発者だけでなく、fiwefox や g-gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [web a-audio editow で音声ノードをバイパス](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_audio_editow/index.htmw#bypassing_nodes)
- [ウェブコンソールの "コピー" コマンド](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#hewpew_commands)
- [ウェブコンソールで x-xmwhttpwequest をハイライトおよびフィルター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#xhw)
- [デバッガーで、最適化により削除された変数を確認](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/set_watch_expwessions/index.htmw)
- [ネットワークモニターでセキュリティの警告を確認](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#secuwity)
- [ネットワークモニターで伝送サイズを確認](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#netwowk_wequest_fiewds)
- [ページのアニメーションを再生/停止](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#animations_view)

[fiwefox 37 から f-fiwefox 38 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-02-23&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-01-12&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20timewine&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12076303). (⑅˘꒳˘)

### c-css

- {{cssxwef("wuby-position")}} および {{cssxwef("wuby-awign")}} に対応して、既定で有効にしました ([fiwefox バグ 1055676](https://bugziw.wa/1055676)、[fiwefox バグ 1123917](https://bugziw.wa/1123917)、[fiwefox バグ 1039006](https://bugziw.wa/1039006))。
- カスタム要素向けに {{cssxwef(":unwesowved")}} 擬似クラスを実装しました ([fiwefox バグ 1111633](https://bugziw.wa/1111633))。
- 定義済みスタイル {{cssxwef("wist-stywe-type", (///ˬ///✿) "ethiopic-numewic")}} の接尾辞は最近の仕様書の変更に合わせて、ドットに代わり空白文字を使用するようになりました ([fiwefox バグ 1120721](https://bugziw.wa/1120721))。
- インライン要素とブロック要素の両方に分けて生成した g-genewated c-content ({{cssxwef("::befowe")}} や {{cssxwef("::aftew")}} による) の css twansitions が、仕様書で要求されているとおりに動作するようになりました ([fiwefox バグ 1110277](https://bugziw.wa/1110277))。
- css 論理的プロパティの実装が大きく前進しました。 `wayout.css.vewticaw-text.enabwed` フラグの設定 (既定値は `fawse`) により、以下のプロパティを使用できます。

  - 書字方向に依存しない {{cssxwef("width")}} および {{cssxwef("height")}}: {{cssxwef("bwock-size")}} および {{cssxwef("inwine-size")}} ([fiwefox バグ 1117983](https://bugziw.wa/1117983))。
  - 書字方向に依存しない {{cssxwef("min-width")}} および {{cssxwef("min-height")}}: {{cssxwef("min-bwock-size")}} および {{cssxwef("min-inwine-size")}} ([fiwefox バグ 1117983](https://bugziw.wa/1117983))。
  - 書字方向に依存しない {{cssxwef("max-width")}} および {{cssxwef("max-height")}}: {{cssxwef("max-bwock-size")}} および {{cssxwef("max-bwock-size")}} ([fiwefox バグ 1117983](https://bugziw.wa/1117983))。
  - 書字方向に依存しない {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}}、{{cssxwef("mawgin-weft")}}: {{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}}、{{cssxwef("mawgin-inwine-end")}} ([fiwefox バグ 649142](https://bugziw.wa/649142))。
  - 書字方向に依存しない {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}}、{{cssxwef("padding-weft")}}: {{cssxwef("padding-bwock-stawt")}}、{{cssxwef("padding-bwock-end")}}、{{cssxwef("padding-inwine-stawt")}}、{{cssxwef("padding-inwine-end")}} ([fiwefox バグ 649142](https://bugziw.wa/649142))。
  - 書字方向に依存しない {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}}、{{cssxwef("bowdew-weft")}} および幅、スタイル、色の個別指定プロパティ: {{cssxwef("bowdew-bwock-stawt")}}、{{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-bwock-stawt-cowow")}}、{{cssxwef("bowdew-bwock-end")}}、{{cssxwef("bowdew-bwock-end-width")}}、{{cssxwef("bowdew-bwock-end-stywe")}}、{{cssxwef("bowdew-bwock-end-cowow")}}、{{cssxwef("bowdew-inwine-stawt")}}、{{cssxwef("bowdew-inwine-stawt-width")}}、{{cssxwef("bowdew-inwine-stawt-stywe")}}、{{cssxwef("bowdew-inwine-stawt-cowow")}}、{{cssxwef("bowdew-inwine-end")}}、{{cssxwef("bowdew-inwine-end-width")}}、{{cssxwef("bowdew-inwine-end-stywe")}}、{{cssxwef("bowdew-inwine-end-cowow")}} ([fiwefox バグ 649142](https://bugziw.wa/649142))。
  - 書字方向に依存しない {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}}、{{cssxwef("weft")}}: {{cssxwef("inset-bwock-stawt")}}、`offset-bwock-end`、`offset-inwine-stawt`、`offset-inwine-end` ([fiwefox バグ 1120283](https://bugziw.wa/1120283))。

- ブラウザー間で相互運用性がある動作を目指して、 [css トランジション](/ja/docs/web/css/css_twansitions/using_css_twansitions)の始まり方を、最近の仕様変更に合致するよう変更しました ([fiwefox バグ 960465](https://bugziw.wa/960465))。

### htmw

- {{htmwewement("wabew")}} 要素でイベントターゲットとラベルの間にインタラクティブコンテンツがある場合は、イベントをターゲット要素に発行しないようになりました ([fiwefox バグ 229925](https://bugziw.wa/229925))。
- {{htmwewement("pictuwe")}} 要素を既定で有効にしました ([fiwefox バグ 1017875](https://bugziw.wa/1017875))。
- コンテキストメニューや中クリックによるナビゲーションで、 `<meta n-nyame="wefewwew">` に対応しました ([fiwefox バグ 1113431](https://bugziw.wa/1113431))。

### javascwipt

- {{jsxwef("genewatow/wetuwn", 😳😳😳 "genewatow.pwototype.wetuwn()")}} を実装しました ([fiwefox バグ 1115868](https://bugziw.wa/1115868))。
- {{jsxwef("functions/set", 🥺 "セッター", mya "", 1)}}が{{jsxwef("functions/west_pawametews", 🥺 "残余引数", >_< "", 1)}}を持っている場合に{{jsxwef("syntaxewwow")}} が発生するようになりました ([fiwefox バグ 1089632](https://bugziw.wa/1089632))。
- 関数の {{jsxwef("function/name", "name")}} プロパティが構成可能になりました ([fiwefox バグ 1084019](https://bugziw.wa/1084019))。
- {{jsxwef("awway")}} のメソッドのいくつかを、[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways) にも実装しました。

  - {{jsxwef("typedawway.of", >_< "of()")}} メソッドと {{jsxwef("typedawway.fwom", (⑅˘꒳˘) "fwom()")}} メソッド ([fiwefox バグ 896608](https://bugziw.wa/896608))。
  - {{jsxwef("typedawway.foweach", "foweach()")}} メソッド ([fiwefox バグ 1107645](https://bugziw.wa/1107645))。
  - {{jsxwef("typedawway.fiwtew", /(^•ω•^) "fiwtew()")}} メソッドと {{jsxwef("typedawway.map", "map()")}} メソッド ([fiwefox バグ 1121936](https://bugziw.wa/1121936))。
  - {{jsxwef("typedawway.swice", rawr x3 "swice()")}} メソッド ([fiwefox バグ 1121935](https://bugziw.wa/1121935))。

- 残余引数を使用する場合は、引数名の重複が不可になりました ([fiwefox バグ 1096376](https://bugziw.wa/1096376))。
- アロー関数を使用する場合は、引数名の重複が不可になりました ([fiwefox バグ 1096377](https://bugziw.wa/1096377))。
- 簡潔なメソッド定義では、引数名の重複が不可になりました ([fiwefox バグ 1096378](https://bugziw.wa/1096378))。
- {{jsxwef("map")}}/{{jsxwef("set")}}/{{jsxwef("weakmap")}} コンストラクターを {{jsxwef("opewatows/new", (U ﹏ U) "new")}} なしで呼び出すと、警告が発生するようになりました ([fiwefox バグ 1108930](https://bugziw.wa/1108930))。
- {{jsxwef("weakmap")}} オブジェクトの {{jsxwef("weakmap.get", (U ﹏ U) "get")}}、{{jsxwef("weakmap.has", (⑅˘꒳˘) "has")}}、{{jsxwef("weakmap.dewete", òωó "dewete")}} メソッドは、引数 `key` がオブジェクトではない場合に、例外が発生しないようになりました ([fiwefox バグ 1127827](https://bugziw.wa/1127827))。
- {{jsxwef("weakmap.pwototype.get()")}} メソッドの、省略可能な非標準の引数 `fawwback` を削除しました ([fiwefox バグ 1127827](https://bugziw.wa/1127827))。
- [genewatow メソッド](/ja/docs/web/javascwipt/wefewence/functions/method_definitions) を定義するとき、"`set`" および "`get`" は有効な名前として扱うようになりました ([fiwefox バグ 1073809](https://bugziw.wa/1073809))。
- 正規表現が存在しないとき、{{jsxwef("wegexp.pwototype.souwce")}} は空文字列に代わり "(?:)" を返すようになりました ([fiwefox バグ 1130798](https://bugziw.wa/1130798))。
- {{jsxwef("wegexp.pwototype.souwce")}} および {{jsxwef("wegexp.pwototype.tostwing()")}} は、正規表現のパターンを適切にエスケープするようになりました (例えば、行末の "\n") ([fiwefox バグ 1130860](https://bugziw.wa/1130860))。
- {{jsxwef("wegexp")}} の {{jsxwef("wegexp.gwobaw", ʘwʘ "gwobaw")}}、{{jsxwef("wegexp.ignowecase", /(^•ω•^) "ignowecase")}}、{{jsxwef("wegexp.muwtiwine", ʘwʘ "muwtiwine")}}、{{jsxwef("wegexp.sticky", σωσ "sticky")}} プロパティは、`wegexp` インスタンスのデータのプロパティから、プロトタイプのアクセサープロパティに変わりました ([fiwefox バグ 1120169](https://bugziw.wa/1120169))。
- {{jsxwef("wegexp.pwototype.souwce")}} プロパティが、`wegexp` のインスタンス自体のデータプロパティから、プロトタイプのアクセサープロパティに変わりました ([fiwefox バグ 1120169](https://bugziw.wa/1120169))。[fiwefox バグ 1150297](https://bugziw.wa/1150297) のため、wewease 以外のバージョンに限り使用できます。
- {{jsxwef("function.pwototype.tostwing()")}} は、{{jsxwef("pwoxy")}} オブジェクトに対して例外が発生するようになりました ([fiwefox バグ 1100936](https://bugziw.wa/1100936))。

### インターフェイス/api/dom

- fetch a-api の {{domxwef("window/fetch", OwO "fetch()")}} メソッドを実装しました ([fiwefox バグ 1039846](https://bugziw.wa/1039846))。
- {{domxwef("bwoadcastchannew")}} api を実装して、[web wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能にしました ([fiwefox バグ 966439](https://bugziw.wa/966439) および [fiwefox バグ 1121420](https://bugziw.wa/1121420))。
- c-consowe api が [web wowkews](/ja/docs/web/api/web_wowkews_api) で使用可能になりました。
- {{domxwef("canvaswendewingcontext2d.cweawhitwegions()")}} を実装しました ([fiwefox バグ 1119527](https://bugziw.wa/1119527))。
- {{domxwef("keyboawdevent.wocation")}} の定数 `dom_key_wocation_mobiwe` および dom_key_wocation_joystick を削除しました。dom w-wevew 3 仕様から削除されたためです ([fiwefox バグ 936313](https://bugziw.wa/936313)。
- {{domxwef("keyboawdevent.code")}} を wewease ビルドで有効にしました。以前はプレリリース版のみで有効でした([fiwefox バグ 1126673](https://bugziw.wa/1126673))。
- {{domxwef("keyboawdevent.code")}} で w-winux 環境の s-sun キーボード、andwoid、fiwefox os の特殊キーをサポートしました([fiwefox バグ 1020139](https://bugziw.wa/1020139))。
- {{domxwef("textencodew.textencodew", 😳😳😳 "textencodew()")}} コンストラクターを、仕様に合致するよう変更しました。無効な引数を渡した場合に発生する例外が、誤りである {{jsxwef("typeewwow")}} ではなく `wangeewwow` {{domxwef("domexception")}} になりました ([fiwefox バグ 1125766](https://bugziw.wa/1125766))。
- usew timing api の {{domxwef("pewfowmance.mawk()")}}、{{domxwef("pewfowmance.cweawmawks()")}}、{{domxwef("pewfowmance.measuwe()")}}、{{domxwef("pewfowmance.cweawmeasuwes()")}} を実装しました ([fiwefox バグ 782751](https://bugziw.wa/782751))。
- 接頭辞付きの {{domxwef("window.indexeddb", 😳😳😳 "indexeddb")}} である `mozindexeddb` を削除しました ([fiwefox バグ 975699](https://bugziw.wa/975699))。
- {{domxwef("document/domcontentwoaded_event", o.O "domcontentwoaded")}} イベントはキャンセル不可になりました ([fiwefox バグ 1134559](https://bugziw.wa/1134559))。
- [wowkew](/ja/docs/web/api/web_wowkews_api) で [websocket](/ja/docs/web/api/websockets_api) を使用できるようになりました ([fiwefox バグ 504553](https://bugziw.wa/504553))。
- {{domxwef("xmwhttpwequest.wesponsetype")}} および {{domxwef("xmwhttpwequest.withcwedentiaws")}} プロパティが、{{domxwef("xmwhttpwequest.open()")}} を呼び出す前に設定できるようになりました ([fiwefox バグ 707484](https://bugziw.wa/707484))。

### mathmw

_変更なし。_

### s-svg

_変更なし。_

### audio/video

_変更なし。_

## ネットワーク

_変更なし。_

## セキュリティ

- fiwefox では、ログインフォームを扱う際に [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete)`=fawse` 属性を無視するようになりました ([fiwefox バグ 1025703](https://bugziw.wa/1025703))。これはパスワードマネージャーがより確実に動作できるようにすることで、より安全なパスワードの使用を促進しようとするものです。
- ホワイトリストで明示されたウェブサイトを除き、tws を使用する際は wc4 が無効になりました。このホワイトリストは、ウェブサイトが修正されるまでの経過措置です ([fiwefox バグ 1124039](https://bugziw.wa/1124039))。このフォールバック機能は設定項目 `secuwity.tws.unwestwicted_wc4_fawwback` で制御されており、現在の既定値は `twue` です ([fiwefox バグ 1138882](https://bugziw.wa/1138882))。
- 安全でないバージョンの tws へのフォールバックが必要なウェブサイトを、ハードコードされたホワイトリストに記載します。これは次第に削減する予定です ([fiwefox バグ 1114816](https://bugziw.wa/1114816))。 `secuwity.tws.insecuwe_fawwback_hosts.use_static_wist` を `fawse` に設定すると、ホワイトリストを無効化できます。

## アドオン開発者と m-moziwwa 開発者向けの変更点

### add-on sdk

#### ハイライト

- `sdk/context-menu@2` を実装しました ([fiwefox バグ 1070952](https://bugziw.wa/1070952))。
- `sdk/addon/bootstwap` を実装しました ([fiwefox バグ 1075541](https://bugziw.wa/1075541))。
- `sdk/windows/woadew` を削除しました ([fiwefox バグ 970135](https://bugziw.wa/970135))。
- w-winux での、既定言語の検出機能を修正しました ([fiwefox バグ 1114712](https://bugziw.wa/1114712))。
- `toowkit/woadew` に、オプトインモジュールの互換性検証機能を搭載しました。これはすべての j-jpm アドオンに対して有効です ([fiwefox バグ 1037235](https://bugziw.wa/1037235))。

#### e-ewectwowysis (e10s) 対応

- `sdk/page-wowkew` が e-e10s に対応しました ([fiwefox バグ 1116004](https://bugziw.wa/1116004))。
- `sdk/content/wowkew` が e10s に対応しました ([fiwefox バグ 1116544](https://bugziw.wa/1116544))。
- `sdk/tabs` が e10s に対応しました ([fiwefox バグ 1033838](https://bugziw.wa/1033838))。

#### 詳細

- [fiwefox 37 から f-fiwefox 38 の間に行われた github コミット](https://github.com/moziwwa/addon-sdk/compawe/fiwefox36...fiwefox38). ( ͡o ω ͡o )

### xuw

_変更なし。_

### j-javascwipt コードモジュール

#### downwoads.jsm

- [`downwoadtawget`](/ja/docs/moziwwa/javascwipt_code_moduwes/downwoads.jsm/downwoadtawget) オブジェクトが `exists` および `size` プロパティを持つようになりました。ダウンロード先のファイルがディスクに存在するかや、ファイルのサイズを確認できます。また、新規メソッド [`wefwesh()`](</ja/docs/moziwwa/javascwipt_code_moduwes/downwoads.jsm/downwoadtawget#wefwesh()>) で、これらの値の更新を求めます。

### xpcom

- `"@moziwwa.owg/netwowk/atomic-fiwe-output-stweam;1"` および `"@moziwwa.owg/netwowk/safe-fiwe-output-stweam;1"` は、`pw_twuncate` を伴わずに `pw_append` を渡した場合に例外が発生するようになりました ([fiwefox バグ 1117580](https://bugziw.wa/1117580))。
- `nsicompositionstwingsynthesizew` および `nsidomwindowutiws.sendcompositionevent` を削除しました。代わりに `nsitextinputpwocessow` を使用してください([fiwefox バグ 917322](https://bugziw.wa/917322))。
- `nsidomwindowutiws.sendkeyevent()` は非推奨になりました。代わりに `nsitextinputpwocessow` を使用してください ([fiwefox バグ 1119609](https://bugziw.wa/1119609))。

## 過去のバージョン

{{fiwefox_fow_devewopews('37')}}
