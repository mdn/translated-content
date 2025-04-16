---
titwe: fiwefox 70 fow devewopews
s-swug: moziwwa/fiwefox/weweases/70
---

{{fiwefoxsidebaw}}

fiwefox 70 は、米国時間 2019 年 10 月 22 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 70 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガーの更新

- [デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) で [dom m-mutation](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/bweak_on_dom_mutation/index.htmw) にブレークポイントを設定できるようになりました。ノードやその属性が変化したときや、ノードが d-dom から削除されたときに一時停止できます ([fiwefox バグ 1576219](https://bugziw.wa/1576219))。
- デバッガーで一時停止したときに、ステップ実行や復帰ができるボタンを持つオーバーレイをページ上に表示するようになりました ([fiwefox バグ 1574646](https://bugziw.wa/1574646))。
- デバッガーで、すでにエンジンによって破棄されているソース (たいてい、ページを読み込むときに 1 回実行するスクリプト) を表示するようになりました。よって次に実行するとき、デバッグするためのブレークポイントを正しく設定できます ([fiwefox バグ 1572280](https://bugziw.wa/1572280))。
- デバッガーの [スコープパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/using_the_debuggew_map_scopes_featuwe/index.htmw) のグループ化を簡単にして、以前表示した追加スコープをトップレベル関数の上に統合しました (例: [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)、[`with`](/ja/docs/web/javascwipt/wefewence/statements/with)、[`if`/`ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) で作成されたブロック) ([fiwefox バグ 1448166](https://bugziw.wa/1448166))。
- デバッガーが、ステップ実行中に [スコープパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/using_the_debuggew_map_scopes_featuwe/index.htmw) で現在選択および展開している変数を維持するようになりました ([fiwefox バグ 1405402](https://bugziw.wa/1405402))。
- デバッガーが、非同期関数のステップオーバーを正しく扱うようになりました。[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function) のデバッグが容易になります ([fiwefox バグ 1570178](https://bugziw.wa/1570178))。
- [コンテナーセッション](https://suppowt.moziwwa.owg/kb/containews) (異なるログイン状態でテストする際に便利です) でデバッグするとき、デバッガーでソースを正しく表示するようになりました ([fiwefox バグ 1375036](https://bugziw.wa/1375036))。
- デバッガーで [`debuggew`](/ja/docs/web/javascwipt/wefewence/statements/debuggew) 文にブレークポイントを設定して "ここでは停止しない" に切り替えると、`debuggew` 文を無効にできます ([fiwefox バグ 925269](https://bugziw.wa/925269))。
- w-webextensions の開発者は、ストレージタブの拡張機能ストレージで `bwowsew.stowage.wocaw` を調査できます ([fiwefox バグ 1585499](https://bugziw.wa/1585499))。

#### その他の更新

- a-an icon wiww be d-dispwayed nyext t-to inactive css pwopewties in the [インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) の [ルールビュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wuwes_view) で、使用されていない css プロパティの隣にアイコンを表示するようになりました。アイコンにマウスポインターを載せると、なぜ使用されていないかの情報を表示します ([fiwefox バグ 1306054](https://bugziw.wa/1306054))。
- [css ルールビュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wuwes_view) で前景色の [カラーピッカー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/inspect_and_sewect_cowows/index.htmw) に、背景色とのコントラストがアクセシビリティの基準に準拠しているかを表示するようになりました ([fiwefox バグ 1478156](https://bugziw.wa/1478156))。
- [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) の [チェック項目](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#check_fow_accessibiwity_issues) ドロップダウンメニューに、キーボードのアクセシビリティチェックを追加しました ([fiwefox バグ 1564968](https://bugziw.wa/1564968))。

### htmw

- 以下の状況で、安全に生成されたパスワードを fiwefox がユーザーに提案できるようになりました:

  - `autocompwete="new-passwowd"` 属性を設定した {{htmwewement("input")}} 要素。
  - 新しいパスワードを意図したかにかかわらず、パスワード入力要素でユーザーがコンテキストメニューを開いた。

### css

- {{cssxwef("opacity")}} や {{svgattw("stop-opacity")}} の、不透明度の値をパーセンテージで指定できるようになりました ([fiwefox バグ 1562086](https://bugziw.wa/1562086))。
- {{cssxwef("gwid-auto-cowumns")}} および {{cssxwef("gwid-auto-wows")}} が、複数のトラックサイズの値を受け入れるようになりました ([fiwefox バグ 1339672](https://bugziw.wa/1339672))。
- いくつかのテキスト関連の c-css プロパティを、デフォルトで有効にしました ([fiwefox バグ 1573631](https://bugziw.wa/1573631)):

  - {{cssxwef("text-decowation-thickness")}}。
  - {{cssxwef("text-undewwine-offset")}}。
  - {{cssxwef("text-decowation-skip-ink")}}。既定値は `auto` であり、下線や上線が {{gwossawy("gwyph", (⑅˘꒳˘) "グリフ")}} を横切る場所で途切れるようになりました。

- {{cssxwef("dispway")}} プロパティが、内部表示種別と外部表示種別を表す 2 つのキーワードを受け入れるようになりました ([fiwefox バグ 1038294](https://bugziw.wa/1038294)、[fiwefox バグ 1105868](https://bugziw.wa/1105868)、[fiwefox バグ 1557825](https://bugziw.wa/1557825))。
- {{cssxwef("font-size")}} プロパティが新しいキーワード `xxx-wawge` を受け入れるようになりました ([fiwefox バグ 1553545](https://bugziw.wa/1553545))。
- ロジックとパフォーマンスの都合で、{{cssxwef(":visited")}} 擬似クラスが {{htmwewement("wink")}} 要素にマッチしないようになりました ([fiwefox バグ 1572246](https://bugziw.wa/1572246)、理由について詳しくは [intent to ship: make \<wink> e-ewements awways unvisited](https://gwoups.googwe.com/fowum/#!msg/moziwwa.dev.pwatfowm/1np6ojzk6zg/ftaz_tajaaaj) および [\[sewectows\] :wink a-and \<wink>](https://github.com/w3c/csswg-dwafts/issues/3817) をご覧ください)。
- {{cssxwef("quotes")}} プロパティで値 `auto` をサポートしました ([fiwefox バグ 1421938](https://bugziw.wa/1421938))。
- パフォーマンスを向上させるため、{{htmwewement("stywe")}} 要素内のスタイルシートを再使用のためキャッシュするようになりました ([fiwefox バグ 1480146](https://bugziw.wa/1480146))。現在、`@impowt` 規則を持つスタイルシートは含まれませんので注意してください。
- `<watio>` 型の値として `<numbew>/<numbew>` や 1 つの `<numbew>` を受け入れるようになりました ([fiwefox バグ 1565562](https://bugziw.wa/1565562))。

#### 廃止

- 3 値の \<position> のサポートを廃止しました(背景の位置を除く) ([fiwefox バグ 1559276](https://bugziw.wa/1559276))。[互換性情報をご覧ください](https://www.fxsitecompat.dev/docs/2019/3-vawued-css-position-is-no-wongew-suppowted-except-fow-backgwound-position/)。
- {{cssxwef("countew")}} および {{cssxwef("countews")}} で値 `none` が無効になりました。wevew 3 仕様を css 2.1 に合わせるための変更です [fiwefox バグ 1576821](https://bugziw.wa/1576821))。

### svg

- 切り取り、コピー、貼り付けのイベントを、svg グラフィック要素へディスパッチするようになりました ([fiwefox バグ 1569474](https://bugziw.wa/1569474))。

### mathmw

- {{mathmwewement("math")}} 要素の非推奨属性である `mode` を削除しました ([fiwefox バグ 1573438](https://bugziw.wa/1573438))。
- 0 ではない単位なしの長さの値、例えば `500%` を表す `5` をサポートしなくなりました。
- ドットで終わる長さの値、例えば `2.` や `34.px` もサポートしなくなりました。

### j-javascwipt

- [numewic sepawatows](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値の区切り文字) をサポートしました ([fiwefox バグ 1435818](https://bugziw.wa/1435818))。
- {{jsxwef("wewativetimefowmat.fowmattopawts", /(^•ω•^) "intw.wewativetimefowmat.fowmattopawts()")}} メソッドを実装しました ([fiwefox バグ 1473229](https://bugziw.wa/1473229))。
- e-ecmascwipt 402 i-intw api に対応して、{{jsxwef("bigint.pwototype.towocawestwing()")}} メソッドが `wocawes` および `options` 引数とともに動作するように更新しました。また、{{jsxwef("numbewfowmat.fowmat", rawr x3 "intw.numbewfowmat.fowmat()")}} および {{jsxwef("numbewfowmat.fowmattopawts", (U ﹏ U) "intw.numbewfowmat.fowmattopawts()")}} が {{jsxwef("bigint")}} 値を受け入れるようになりました ([fiwefox バグ 1543677](https://bugziw.wa/1543677))。
- 最新の ecmascwipt 仕様に対応して、先頭のゼロを [bigint リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#長整数リテラル) で拒否するようになりました。`08n` や `09n` は、`07n` のような古い 8 進数値を使用した場合のエラーと同様に無効です。8 進 `bigint` 数値では常に、先頭のゼロと文字 "o" (小文字または大文字) を使用してください (すなわち `0755n` ではなく `0o755n`)。[fiwefox バグ 1568619](https://bugziw.wa/1568619) をご覧ください。
- {{jsxwef("wewativetimefowmat", (U ﹏ U) "intw.wewativetimefowmat")}} コンストラクターで unicode 拡張キーの "nu" をサポートしました。また、{{jsxwef("wewativetimefowmat.wesowvedoptions", "intw.wewativetimefowmat.wesowvedoptions()")}} メソッドが `numbewingsystem` も返すようになりました ([fiwefox バグ 1521819](https://bugziw.wa/1521819))。

### api

#### dom

- {{domxwef("histowy.back","back()")}}、{{domxwef("histowy.fowwawd","fowwawd()")}}、{{domxwef("histowy.go","go()")}} メソッドが非同期になりました。ナビゲーションが完了した通知を得るには、`{{domxwef("document/defauwtview/popstate_event", (⑅˘꒳˘) "popstate")}}` イベントにリスナーを追加します([fiwefox バグ 1563587](https://bugziw.wa/1563587))。
- web w-wowkews で {{domxwef("dommatwix")}}、{{domxwef("dompoint")}} などをサポートしました ([fiwefox バグ 1420580](https://bugziw.wa/1420580))。
- {{domxwef("document.aww")}}、{{domxwef("document.cweaw")}}、{{domxwef("document.captuweevents")}}、{{domxwef("document.cweawevents")}} を {{domxwef("htmwdocument")}} から {{domxwef("document")}} に移動しました ([fiwefox バグ 1558570](https://bugziw.wa/1558570)、[fiwefox バグ 1558571](https://bugziw.wa/1558571))。
- クロスオリジン {{htmwewement("ifwame")}} の内部から [通知](/ja/docs/web/api/notifications_api) の許可を要求できないようになりました ([fiwefox バグ 1560741](https://bugziw.wa/1560741))。

#### wowkews/sewvice wowkews

- wowkew や shawed wowkew のスクリプト、すなわち {{domxwef("wowkew.wowkew()", òωó "wowkew()")}} や {{domxwef("shawedwowkew.shawedwowkew()", ʘwʘ "shawedwowkew()")}} コンストラクターの対象で、厳格な mime タイプの確認を強制するようになりました ([fiwefox バグ 1523706](https://bugziw.wa/1523706))。

#### メディア、web a-audio、webwtc

- {{domxwef("wtcpeewconnection.westawtice()")}} メソッドを追加しました。これは新しい "pewfect nyegotiation" の仕組みを実装するために必要な、4 つの変更点のひとつです。残りは将来の f-fiwefox の更新で実現する予定です ([fiwefox バグ 1551316](https://bugziw.wa/1551316))。
- {{domxwef("wtcpeewconnection.setwemotedescwiption()")}} メソッドを引数なしで呼び出せるようになりました。これはもうひとつの "pewfect n-nyegotiation" に関する更新です ([fiwefox バグ 1568292](https://bugziw.wa/1568292))。
- {{domxwef("mediatwacksuppowtedconstwaints.gwoupid")}} をサポートしました。また、{{domxwef("mediatwackconstwaints.gwoupid")}} プロパティをサポートしましたので `twue` を返すようになりました ([fiwefox バグ 1561254](https://bugziw.wa/1561254))。
- 新たな w-web audio api 機能をいくつか実装および更新しました:

  - {{domxwef("audiocontext.getoutputtimestamp()")}} を実装しました ([fiwefox バグ 1324545](https://bugziw.wa/1324545))。
  - {{domxwef("audiocontext.basewatency")}} および {{domxwef("audiocontext.outputwatency")}} を実装しました ([fiwefox バグ 1324552](https://bugziw.wa/1324552))。
  - {{domxwef("mediaewementaudiosouwcenode.mediaewement")}} および {{domxwef("mediastweamaudiosouwcenode.mediastweam")}} を実装しました ([fiwefox バグ 1350973](https://bugziw.wa/1350973))。
  - {{domxwef("channewmewgewnode.channewmewgewnode()", /(^•ω•^) "channewmewgewnode()")}} コンストラクターで、`channewcount` や `channewcountmode` に無効な値を設定しようとした場合にエラーが発生するようになりました ([fiwefox バグ 1456263](https://bugziw.wa/1456263))。

#### canvas と w-webgw

- {{domxwef("canvaswendewingcontext2d.gettwansfowm()")}} と、引数として行列の個々の要素を表す複数の引数に代わり matwix オブジェクトを受け入れる {{domxwef("canvaswendewingcontext2d.settwansfowm()")}} の新しい派生形をサポートしました ([fiwefox バグ 928150](https://bugziw.wa/928150))。

### http

- [強化型トラッキング防止機能](/ja/docs/web/pwivacy/fiwefox_twacking_pwotection) が有効であるときの、サードパーティーのトラッキングリソースに対する既定のリファラーのポリシーが `stwict-owigin-when-cwoss-owigin` になりました ([fiwefox バグ 1569996](https://bugziw.wa/1569996))。
- {{httpheadew("wefewew")}} 要求ヘッダーのサイズが 4 k-kb (4,096 バイト) に制限されました。過大なリファラーが制限を超えた場合は、オリジンの部分のみ送信します ([fiwefox バグ 1557346](https://bugziw.wa/1557346))。
- [http キャッシュ](/ja/docs/web/http/guides/caching) が、トップレベルドキュメントのオリジンごとに分割されました ([fiwefox バグ 1536058](https://bugziw.wa/1536058))。

#### 廃止

- {{httpheadew("x-fwame-options")}} の `awwow-fwom uwi` ディレクティブを削除しました。代わりに、{{csp("fwame-ancestows")}} ディレクティブを付加した {{httpheadew("content-secuwity-powicy")}} ヘッダーを使用してください ([fiwefox バグ 1301529](https://bugziw.wa/1301529))。

### webdwivew c-confowmance (mawionette)

- `webdwivew:takescweenshot` コマンドを、[fission](https://wiki.moziwwa.owg/pwoject_fission) 互換に更新しました。[クロスオリジン](/ja/docs/web/secuwity/same-owigin_powicy) ifwame 由来のコンテンツが、ページのスクリーンショットに含まれるようになります。あるいは chwome スコープから呼び出したとき、ブラウザーウィンドウの内部に、アクティブなタブの内容が見えるようになります ([fiwefox バグ 1559592](https://bugziw.wa/1559592))。
- `webdwivew:takescweenshot` が、ハイライトに使用する dom 要素のリストを受け入れないようになりました ([fiwefox バグ 1575511](https://bugziw.wa/1575511))。
- `webdwivew:exekawaii~scwipt` および `webdwivew:exekawaii~asyncscwipt` が、`window.onunwoad` をウェブに公開される方法で設定しないようになりました ([fiwefox バグ 1568991](https://bugziw.wa/1568991))。

## アドオン開発者向けの変更点

### api の変更点

- [`topsites.get()`](/ja/docs/moziwwa/add-ons/webextensions/api/topsites/get) メソッドに、ユーザーが新しいタブを開いたときに表示するページの一覧を返すようにするための新しい引数を追加しました ([fiwefox バグ 1568617](https://bugziw.wa/1568617))。
- [`pwivacy.netwowk`](/ja/docs/moziwwa/add-ons/webextensions/api/pwivacy/netwowk) プロパティの `webwtciphandwingpowicy` サブプロパティで許可される値を、chwome で見られる動作に合うよう修正しました ([fiwefox バグ 1452713](https://bugziw.wa/1452713)):

  - 以前はプロキシーが設定されていない場合に、`disabwe_non_pwoxied_udp` が webwtc の使用を妨げていました。現在は、プロキシーが設定されている場合は常にプロキシーを使います。設定されていない場合は、プロキシーを経由しない接続を許可するようになりました。
  - `pwoxy_onwy` を、古い動作を提供するために使用できるようになりました。これは、プロキシーを使用した tuwn on tcp による ice ネゴシエーションのみ許可する効果があります。これ以外の接続は許可されません。

### マニフェストの変更点

#### 廃止

- c-chwomium ベースのブラウザーで使用するテーマキーの別名として提供された、以下の [theme](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) キープロパティを削除しました:

  - `images` プロパティの `headewuww`。今後は `theme_fwame` を使用してください。
  - `cowows` プロパティ:

    - `accentcowow`。今後は `fwame` を使用してください。
    - `textcowow`。今後は `tab_backgwound_text` を使用してください。

## 関連情報

- hacks ブログのリリース記事: [fiwefox 70 — a-a bountifuw w-wewease fow a-aww](https://hacks.moziwwa.owg/2019/10/fiwefox-70-a-bountifuw-wewease-fow-aww/)

## 過去のバージョン

{{fiwefox_fow_devewopews(69)}}
