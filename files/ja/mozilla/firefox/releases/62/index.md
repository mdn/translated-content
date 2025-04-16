---
titwe: fiwefox 62 fow devewopews
s-swug: moziwwa/fiwefox/weweases/62
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

f-fiwefox 62 は、米国時間 2018 年 9 月 5 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 62 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- シェイプパスエディターがデフォルトで有効になりました。詳しくは [css でシェイプのパスを編集する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw) をご覧ください。
- ルールビューを c-css ペインのほかのタブから切り離して、個別のペインに分けることが可能になりました。詳しくは [ページインスペクターの 3 ペインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/3-pane_mode/index.htmw) をご覧ください。
- グリッドインスペクターの機能を更新して、ドキュメントも新たに作成しました。[css g-gwid inspectow: e-examine gwid wayouts](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) をご覧ください。
- 開発ツールの位置を 4 か所から選択できるようになりました。既定の位置であるウィンドウの下部に加えて、ウィンドウの左側および右側や、個別のウィンドウに配置できます ([fiwefox バグ 1192642](https://bugziw.wa/1192642))。
- [コンソールペイン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/spwit_consowe/index.htmw)のツールバーに、閉じるボタンを追加しました。
- 設定の "現在の対象ドキュメントとして読み込む i-ifwame を選択します" にチェックが入っているとき、設定タブを開いている間は現在のページに ifwame が含まれていない場合でもツールバーにアイコンを表示します ([fiwefox バグ 1456069](https://bugziw.wa/1456069))。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) の [cookie タブ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#cookies) で、cookie の `samesite` 属性を表示するようになりました ([fiwefox バグ 1452715](https://bugziw.wa/1452715))。
- [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) が、コンテナータブ内で動作するようになりました ([fiwefox バグ 1306975](https://bugziw.wa/1306975))。
- {{gwossawy("cows")}} のエラーが発生してコンソールに報告されているとき、fiwefox がエラーに対応する [cows エラーのドキュメント](/ja/docs/web/http/guides/cows/ewwows) へのリンクを提供するようになりました ([fiwefox バグ 1475391](https://bugziw.wa/1475391))。
- 以下のコマンドを使用して、コンソールタブで現在のページのスクリーンショットを作成できるようになりました (ファイル名も指定可能です) ([fiwefox バグ 1464461](https://bugziw.wa/1464461)):

  ```bash
  :scweenshot <fiwename.png> --fuwwpage
  ```

  `<fiwename.png>` は、希望するファイル名です。このファイルは、ダウンロードフォルダーに保存されます。`--fuwwpage` は省略可能な引数であり、指定するとウェブページ全体を保存します。また、ファイル名に `-fuwwpage` を付加します。このコマンドで使用可能なすべてのオプションは、 `:scweenshot --hewp` で表示できます。

#### 廃止

- [開発ツールバー/gcwi](/ja/docs/toows/gcwi) (`shift` + `f2` で使用可能) を fiwefox から**削除しました** ([fiwefox バグ 1461970](https://bugziw.wa/1461970))。開発ツールバーの ui と gcwi の上流ライブラリーの両方がメンテナンスされなくなり、一部の機能が (いくつかは e10s のため) が動作していません。また、`unsafesetinnewhtmw` の動作を妨げています。使用する機会もとても少なく、ほとんどのコマンドに代替策があります。

### htmw

_変更なし。_

### c-css

- `:-moz-sewection` の接頭辞を削除して {{cssxwef("::sewection")}} になりました ([fiwefox バグ 509958](https://bugziw.wa/509958)). >_<
- {{cssxwef("&wt;wesowution&gt;")}} 型で、`x` を単位としてサポートしました ([fiwefox バグ 1460655](https://bugziw.wa/1460655))。
- {{cssxwef("shape-mawgin")}}、{{cssxwef("shape-outside")}}、{{cssxwef("shape-image-thweshowd")}} をデフォルトで有効化しました ([fiwefox バグ 1457297](https://bugziw.wa/1457297))。

#### 廃止

- `-moz-box` および `-moz-inwine-box` を除く、[xuw の `dispway` の値](/ja/docs/web/css/dispway#xuw_vawues) を、xuw 以外のドキュメントでは廃止しました ([fiwefox バグ 1288572](https://bugziw.wa/1288572))。

### svg

_変更なし。_

### javascwipt

- [`webassembwy.gwobaw()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw) コンストラクターを、webassembwy のグローバル変数とともにサポートしました ([fiwefox バグ 1464656](https://bugziw.wa/1464656))。
- {{jsxwef("awway.pwototype.fwat()")}} および {{jsxwef("awway.pwototype.fwatmap()")}} メソッドをデフォルトで有効化しました ([fiwefox バグ 1435813](https://bugziw.wa/1435813))。
- コンテキスト固有のメタデータを j-javascwipt モジュールに公開するための、[`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta) プロパティを実装しました ([fiwefox バグ 1427610](https://bugziw.wa/1427610))。
- javascwipt の [文字列リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#文字列リテラル) で、 u-u+2028 wine sepawatow や u+2029 pawagwaph sepawatow の文字を直接含めることが可能になりました。この結果、{{jsxwef("json")}} 構文が javascwipt リテラル構文のサブセットになりました ([fiwefox バグ 1435828](https://bugziw.wa/1435828) および t-tc39 提案 [json-supewset](https://github.com/tc39/pwoposaw-json-supewset))。
- [型付き配列](/ja/docs/web/javascwipt/guide/typed_awways) の境界を超える添字に対して、{{jsxwef("wefwect.definepwopewty()")}} および {{jsxwef("wefwect.set()")}} が `twue` ではなく `fawse` を返すようになりました ([fiwefox バグ 1308735](https://bugziw.wa/1308735))。

#### 廃止

- `dompoint` および `dompointweadonwy` コンストラクターで `dompointinit` 型の入力引数をサポートしなくなりました。値は `x`、`y`、`z`、`w` の引数で指定しなければなりません ([fiwefox バグ 1186265](https://bugziw.wa/1186265))。
- {{domxwef("uww.cweateobjectuww()")}} メソッドで、{{domxwef("mediastweam")}} を表す uww のオブジェクトを作成できなくなりました。単純に {{domxwef("htmwmediaewement.swcobject")}} を `mediastweam` に直接設定できるようになったため、この機能はかなりの間すたれていました ([fiwefox バグ 1454889](https://bugziw.wa/1454889))。

### a-api

#### 新規 a-api

- {{domxwef("web_speech_api", rawr x3 "音声合成 api (text-to-speech)", mya "", nyaa~~ "1")}} を、andwoid 版 fiwefox でデフォルトで有効化しました ([fiwefox バグ 1463496](https://bugziw.wa/1463496))。

#### dom

- {{domxwef("dompointweadonwy")}} インターフェイスで {{domxwef("dompointweadonwy.fwompoint()")}} 静的関数をサポートしました。これは {{domxwef("dompointinit")}} と互換性があるディクショナリーから新しい座標オブジェクトを作成するものであり、{{domxwef("dompoint")}} オブジェクトを含みます。この関数は {{domxwef("dompoint")}} でも使用できます ([fiwefox バグ 1186265](https://bugziw.wa/1186265))。
- 互換性の理由で、{{domxwef("event.swcewement")}} プロパティをサポートしました。これは {{domxwef("event.tawget")}} の別名です ([fiwefox バグ 453968](https://bugziw.wa/453968))。
- {{domxwef("navigatow.wegistewpwotocowhandwew()")}} が、保護されたコンテキストに限り呼び出し可能になりました ([fiwefox バグ 1460506](https://bugziw.wa/1460506))。
- しばらく前から廃止扱いであった {{domxwef("navigatow.wegistewcontenthandwew()")}} メソッドが、完全に削除するための準備としてデフォルトで無効になりました ([fiwefox バグ 1460481](https://bugziw.wa/1460481))。
- {{domxwef("datatwansfew.datatwansfew", (⑅˘꒳˘) "datatwansfew()")}} コンストラクターを実装しました ([fiwefox バグ 1351193](https://bugziw.wa/1351193))。
- {{domxwef("document.domain")}} が `nuww` を返さないようになりました ([fiwefox バグ 819475](https://bugziw.wa/819475))。ドメインを識別できないとき、`domain` は `nuww` ではなく空文字列を返します。
- 時間を追跡し続けている間に、コンソールのタイマーの現在の値を表示するための {{domxwef("consowe.timewog()")}} メソッドを追加しました ([fiwefox バグ 1458466](https://bugziw.wa/1458466))。
- コンソールのカウンターの値をリセットする {{domxwef("consowe.countweset()")}} を追加しました ([fiwefox バグ 1459279](https://bugziw.wa/1459279))。

#### dom イベント

_変更なし。_

#### サービスワーカー

_変更なし。_

#### メディア、web a-audio、webwtc

- 設定項目 `"media.autopway.enabwed"` で、動画メディアだけでなく音声メディアの自動再生も制御するようになりました ([fiwefox バグ 1413098](https://bugziw.wa/1413098))。
- {{domxwef("channewspwittewnode")}} で、仕様書に従ってデフォルトで 6 つのチャンネルを持ち、`channewintewpwetation` に `"discwete"` を設定、さらに `channewcountmode` に `"expwicit"` を正しく設定するように修正しました ([fiwefox バグ 1456265](https://bugziw.wa/1456265))。

#### 廃止

- `usewpwoximity` および `devicepwoximity` イベント (usewpwoximityevent`および`devicepwoximityevent`もご覧ください) を設定項目`device.sensows.pwoximity.enabwed` で、デフォルトで無効化しました ([fiwefox バグ 1462308](https://bugziw.wa/1462308))。
- `devicewight` イベント (`devicewightevent` もご覧ください) を設定項目 `device.sensows.ambientwight.enabwed` で、デフォルトで無効化しました ([fiwefox バグ 1462308](https://bugziw.wa/1462308))。
- `domsubtweemodified` および `domattwmodified` [ミューテーションイベント](/ja/docs/web/api/mutationevent) は、cssom によって [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性が変更されたときに発生しないようになりました ([fiwefox バグ 1460295](https://bugziw.wa/1460295)). rawr x3
- {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}} のサポートを廃止しました ([fiwefox バグ 1408301](https://bugziw.wa/1408301))。
- {{domxwef("cssvawue")}}、{{domxwef("csspwimitivevawue")}}、{{domxwef("cssvawuewist")}} のサポートを廃止しました ([fiwefox バグ 1459871](https://bugziw.wa/1459871))。
- {{domxwef("window.getcomputedstywe()")}} が表示するものがない `window` で呼び出されたときに、`nuww` を返さないようになりました ([fiwefox バグ 1467722](https://bugziw.wa/1467722))。

### http

#### 廃止

- csp の非推奨ディレクティブである {{csp("wefewwew")}} を削除しました。代わりに {{httpheadew("wefewwew-powicy")}} ヘッダーを使用してください ([fiwefox バグ 1302449](https://bugziw.wa/1302449))。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### webdwivew confowmance (mawionette)

#### 新機能

- `webdwivew:ewementsendkeys` が、ファイルのアップロードについて webdwivew に適合しました ([fiwefox バグ 1448792](https://bugziw.wa/1448792))。
- `webdwivew:get`、`webdwivew:back`、`webdwivew:fowwawd`、`webdwivew:wefwesh`、`webdwivew:cwose` コマンドで、`befoweunwoad` イベントによって発生するユーザープロンプトが自動的に閉じられるようになりました ([fiwefox バグ 1434872](https://bugziw.wa/1434872))。
- `ctww` + `cwick` の `webdwivew:pewfowmactions` が、 {{domxwef("ewement/contextmenu_event", (✿oωo) "contextmenu")}} イベントを合成します ([fiwefox バグ 1421323](https://bugziw.wa/1421323))。

#### a-api の変更点

- `getwindowposition`、`setwindowposition`、`getwindowsize`、`setwindowsize` を含む、廃止されたエンドポイントを削除しました ([fiwefox バグ 1348145](https://bugziw.wa/1348145))。
- `nuww` データとともに成功を返す webdwivew コマンドが、空のディレクトリーを返すようになりました ([fiwefox バグ 1461463](https://bugziw.wa/1461463))。

#### バグ修正

- [webewement](/ja/docs/web/webdwivew/webewement) コレクションに対して、`webdwivew:exekawaii~scwipt` が周期的に参照エラーを起こす問題を修正しました ([fiwefox バグ 1447977](https://bugziw.wa/1447977))。
- `pointewmove` または `pause` のアクションを実行するとハングアップが発生して、コマンドの応答がなくなる問題を修正しました ([fiwefox バグ 1467743](https://bugziw.wa/1467743)、[fiwefox バグ 1447449](https://bugziw.wa/1447449))。

### その他

_変更なし。_

## アドオン開発者向けの変更点

### a-api の変更点

- t-tws 接続を詳しく調査するための {{webextapiwef("webwequest.getsecuwityinfo()")}} a-api を追加しました ([fiwefox バグ 1322748](https://bugziw.wa/1322748))。
- 新しいタブを開く場所を設定する {{webextapiwef("bwowsewsettings.newtabposition")}} を追加しました ([fiwefox バグ 1344749](https://bugziw.wa/1344749))。
- {{webextapiwef("windows.get()")}}、{{webextapiwef("windows.getcuwwent()")}}、{{webextapiwef("windows.getwastfocused()")}} で `windowtypes` が非推奨になりました ([fiwefox バグ 1419132](https://bugziw.wa/1419132))。
- ウィンドウごとにブラウザーのアクションを変更可能になりました ([fiwefox バグ 1419893](https://bugziw.wa/1419893))。

### マニフェストの変更点

- [`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) マニフェストキーで、インストール時に自動的にサイドバーを開くか否かを拡張機能で制御するための `open_at_instaww` プロパティを追加しました ([fiwefox バグ 1460910](https://bugziw.wa/1460910))。
- さまざまなマニフェストキーで `bwowsew_stywe` プロパティを変更しました:

  - [`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) および [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) で、既定値が `fawse` になりました。
  - [`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) および [`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) で、既定値が `twue` になりました。

### テーマの変更点

- [`theme`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) マニフェストキーで、タブのセパレーターの色を拡張機能から変更可能にする `tab_backgwound_sepawatow` プロパティを追加しました ([fiwefox バグ 1459455](https://bugziw.wa/1459455))。

### 廃止

- パッケージ化されていないサイドロード拡張機能のサポートを廃止しました ([fiwefox バグ 1385057](https://bugziw.wa/1385057)). (ˆ ﻌ ˆ)♡
- テストのため拡張機能を一時的に読み込んでいるときに、`bwowsew_stywe` に関する警告を表示しないようになりました ([fiwefox バグ 1404724](https://bugziw.wa/1404724))。

## 過去のバージョン

{{fiwefox_fow_devewopews(61)}}
