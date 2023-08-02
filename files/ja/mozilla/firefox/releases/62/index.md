---
title: Firefox 62 for developers
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{FirefoxSidebar}}

Firefox 62 は、米国時間 2018 年 9 月 5 日 にリリースされました。このページでは、開発者に影響する Firefox 62 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- シェイプパスエディターがデフォルトで有効になりました。詳しくは [CSS でシェイプのパスを編集する](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) をご覧ください。
- ルールビューを CSS ペインのほかのタブから切り離して、個別のペインに分けることが可能になりました。詳しくは [ページインスペクターの 3 ペインモード](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) をご覧ください。
- グリッドインスペクターの機能を更新して、ドキュメントも新たに作成しました。[CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) をご覧ください。
- 開発ツールの位置を 4 か所から選択できるようになりました。既定の位置であるウィンドウの下部に加えて、ウィンドウの左側および右側や、個別のウィンドウに配置できます ([Firefox バグ 1192642](https://bugzil.la/1192642))。
- [コンソールペイン](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html)のツールバーに、閉じるボタンを追加しました。
- 設定の "現在の対象ドキュメントとして読み込む iframe を選択します" にチェックが入っているとき、設定タブを開いている間は現在のページに iframe が含まれていない場合でもツールバーにアイコンを表示します ([Firefox バグ 1456069](https://bugzil.la/1456069))。
- [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) の [Cookie タブ](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#Cookies) で、Cookie の `samesite` 属性を表示するようになりました ([Firefox バグ 1452715](https://bugzil.la/1452715))。
- [レスポンシブデザインモード](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) が、コンテナータブ内で動作するようになりました ([Firefox バグ 1306975](https://bugzil.la/1306975))。
- {{Glossary("CORS")}} のエラーが発生してコンソールに報告されているとき、Firefox がエラーに対応する [CORS エラーのドキュメント](/ja/docs/Web/HTTP/CORS/Errors) へのリンクを提供するようになりました ([Firefox バグ 1475391](https://bugzil.la/1475391))。
- 以下のコマンドを使用して、コンソールタブで現在のページのスクリーンショットを作成できるようになりました (ファイル名も指定可能です) ([Firefox バグ 1464461](https://bugzil.la/1464461)):

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  `<filename.png>` は、希望するファイル名です。このファイルは、ダウンロードフォルダーに保存されます。`--fullpage` は省略可能なパラメーターであり、指定するとウェブページ全体を保存します。また、ファイル名に `-fullpage` を付加します。このコマンドで使用可能なすべてのオプションは、 `:screenshot --help` で表示できます。

#### 廃止

- [開発ツールバー/GCLI](/ja/docs/Tools/GCLI) (`Shift` + `F2` で使用可能) を Firefox から**削除しました** ([Firefox バグ 1461970](https://bugzil.la/1461970))。開発ツールバーの UI と GCLI の上流ライブラリーの両方がメンテナンスされなくなり、一部の機能が (いくつかは e10s のため) が動作していません。また、`unsafeSetInnerHTML` の動作を妨げています。使用する機会もとても少なく、ほとんどのコマンドに代替策があります。

### HTML

_変更なし。_

### CSS

- `:-moz-selection` の接頭辞を削除して {{cssxref("::selection")}} になりました ([Firefox バグ 509958](https://bugzil.la/509958)).
- {{cssxref("&lt;resolution&gt;")}} 型で、`x` を単位としてサポートしました ([Firefox バグ 1460655](https://bugzil.la/1460655))。
- {{cssxref("shape-margin")}}、{{cssxref("shape-outside")}}、{{cssxref("shape-image-threshold")}} をデフォルトで有効化しました ([Firefox バグ 1457297](https://bugzil.la/1457297))。

#### 廃止

- `-moz-box` および `-moz-inline-box` を除く、[XUL の `display` の値](/ja/docs/Web/CSS/display#xul_values) を、XUL 以外のドキュメントでは廃止しました ([Firefox バグ 1288572](https://bugzil.la/1288572))。

### SVG

_変更なし。_

### JavaScript

- [`WebAssembly.Global()`](/ja/docs/WebAssembly/JavaScript_interface/Global) コンストラクターを、WebAssembly のグローバル変数とともにサポートしました ([Firefox バグ 1464656](https://bugzil.la/1464656))。
- {{jsxref("Array.prototype.flat()")}} および {{jsxref("Array.prototype.flatMap()")}} メソッドをデフォルトで有効化しました ([Firefox バグ 1435813](https://bugzil.la/1435813))。
- コンテキスト固有のメタデータを JavaScript モジュールに公開するための、[`import.meta`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta) プロパティを実装しました ([Firefox バグ 1427610](https://bugzil.la/1427610))。
- JavaScript の [文字列リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) で、 U+2028 LINE SEPARATOR や U+2029 PARAGRAPH SEPARATOR の文字を直接含めることが可能になりました。この結果、{{jsxref("JSON")}} 構文が JavaScript リテラル構文のサブセットになりました ([Firefox バグ 1435828](https://bugzil.la/1435828) および TC39 提案 [json-superset](https://github.com/tc39/proposal-json-superset))。
- [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays) の境界を超える添字に対して、{{jsxref("Reflect.defineProperty()")}} および {{jsxref("Reflect.set()")}} が `true` ではなく `false` を返すようになりました ([Firefox バグ 1308735](https://bugzil.la/1308735))。

#### 廃止

- `DOMPoint` および `DOMPointReadOnly` コンストラクターで `DOMPointInit` 型の入力引数をサポートしなくなりました。値は `x`、`y`、`z`、`w` の引数で指定しなければなりません ([Firefox バグ 1186265](https://bugzil.la/1186265))。
- {{domxref("URL.createObjectURL()")}} メソッドで、{{domxref("MediaStream")}} を表す URL のオブジェクトを作成できなくなりました。単純に {{domxref("HTMLMediaElement.srcObject")}} を `MediaStream` に直接設定できるようになったため、この機能はかなりの間すたれていました ([Firefox バグ 1454889](https://bugzil.la/1454889))。

### API

#### 新規 API

- {{domxref("Web_Speech_API", "音声合成 API (Text-to-Speech)", "", "1")}} を、Android 版 Firefox でデフォルトで有効化しました ([Firefox バグ 1463496](https://bugzil.la/1463496))。

#### DOM

- {{domxref("DOMPointReadOnly")}} インターフェイスで {{domxref("DOMPointReadOnly.fromPoint()")}} 静的関数をサポートしました。これは {{domxref("DOMPointInit")}} と互換性があるディクショナリーから新しい座標オブジェクトを作成するものであり、{{domxref("DOMPoint")}} オブジェクトを含みます。この関数は {{domxref("DOMPoint")}} でも使用できます ([Firefox バグ 1186265](https://bugzil.la/1186265))。
- 互換性の理由で、{{domxref("Event.srcElement")}} プロパティをサポートしました。これは {{domxref("Event.target")}} の別名です ([Firefox バグ 453968](https://bugzil.la/453968))。
- {{domxref("Navigator.registerProtocolHandler()")}} が、安全なコンテキストに限り呼び出し可能になりました ([Firefox バグ 1460506](https://bugzil.la/1460506))。
- しばらく前から廃止扱いであった {{domxref("Navigator.registerContentHandler()")}} メソッドが、完全に削除するための準備としてデフォルトで無効になりました ([Firefox バグ 1460481](https://bugzil.la/1460481))。
- {{domxref("DataTransfer.DataTransfer", "DataTransfer()")}} コンストラクターを実装しました ([Firefox バグ 1351193](https://bugzil.la/1351193))。
- {{domxref("Document.domain")}} が `null` を返さないようになりました ([Firefox バグ 819475](https://bugzil.la/819475))。ドメインを識別できないとき、`domain` は `null` ではなく空文字列を返します。
- 時間を追跡し続けている間に、コンソールのタイマーの現在の値を表示するための {{domxref("Console.timeLog()")}} メソッドを追加しました ([Firefox バグ 1458466](https://bugzil.la/1458466))。
- コンソールのカウンターの値をリセットする {{domxref("Console.countReset()")}} を追加しました ([Firefox バグ 1459279](https://bugzil.la/1459279))。

#### DOM イベント

_変更なし。_

#### サービスワーカー

_変更なし。_

#### メディア、Web Audio、WebRTC

- 設定項目 `"media.autoplay.enabled"` で、動画メディアだけでなく音声メディアの自動再生も制御するようになりました ([Firefox バグ 1413098](https://bugzil.la/1413098))。
- {{domxref("ChannelSplitterNode")}} で、仕様書に従ってデフォルトで 6 つのチャンネルを持ち、`channelInterpretation` に `"discrete"` を設定、さらに `channelCountMode` に `"explicit"` を正しく設定するように修正しました ([Firefox バグ 1456265](https://bugzil.la/1456265))。

#### 廃止

- `userproximity` および `deviceproximity` イベント (UserProximityEvent`および`DeviceProximityEvent`もご覧ください) を設定項目`device.sensors.proximity.enabled` で、デフォルトで無効化しました ([Firefox バグ 1462308](https://bugzil.la/1462308))。
- `devicelight` イベント (`DeviceLightEvent` もご覧ください) を設定項目 `device.sensors.ambientLight.enabled` で、デフォルトで無効化しました ([Firefox バグ 1462308](https://bugzil.la/1462308))。
- `DOMSubtreeModified` および `DOMAttrModified` [ミューテーションイベント](/ja/docs/Web/API/MutationEvent) は、CSSOM によって [`style`](/ja/docs/Web/HTML/Global_attributes#style) 属性が変更されたときに発生しないようになりました ([Firefox バグ 1460295](https://bugzil.la/1460295)).
- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} のサポートを廃止しました ([Firefox バグ 1408301](https://bugzil.la/1408301))。
- {{domxref("CSSValue")}}、{{domxref("CSSPrimitiveValue")}}、{{domxref("CSSValueList")}} のサポートを廃止しました ([Firefox バグ 1459871](https://bugzil.la/1459871))。
- {{domxref("window.getComputedStyle()")}} が表示するものがない `Window` で呼び出されたときに、`null` を返さないようになりました ([Firefox バグ 1467722](https://bugzil.la/1467722))。

### HTTP

#### 廃止

- CSP の非推奨ディレクティブである {{CSP("referrer")}} を削除しました。代わりに {{HTTPHeader("Referrer-Policy")}} ヘッダーを使用してください ([Firefox バグ 1302449](https://bugzil.la/1302449))。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

#### 新機能

- `WebDriver:ElementSendKeys` が、ファイルのアップロードについて WebDriver に適合しました ([Firefox バグ 1448792](https://bugzil.la/1448792))。
- `WebDriver:Get`、`WebDriver:Back`、`WebDriver:Forward`、`WebDriver:Refresh`、`WebDriver:Close` コマンドで、`beforeunload` イベントによって発生するユーザープロンプトが自動的に閉じられるようになりました ([Firefox バグ 1434872](https://bugzil.la/1434872))。
- `Ctrl` + `Click` の `WebDriver:PerformActions` が、 {{domxref("Element/contextmenu_event", "contextmenu")}} イベントを合成します ([Firefox バグ 1421323](https://bugzil.la/1421323))。

#### API の変更点

- `getWindowPosition`、`setWindowPosition`、`getWindowSize`、`setWindowSize` を含む、廃止されたエンドポイントを削除しました ([Firefox バグ 1348145](https://bugzil.la/1348145))。
- `null` データとともに成功を返す WebDriver コマンドが、空のディレクトリーを返すようになりました ([Firefox バグ 1461463](https://bugzil.la/1461463))。

#### バグ修正

- [WebElement](/ja/docs/Web/WebDriver/WebElement) コレクションに対して、`WebDriver:ExecuteScript` が周期的に参照エラーを起こす問題を修正しました ([Firefox バグ 1447977](https://bugzil.la/1447977))。
- `pointerMove` または `pause` のアクションを実行するとハングアップが発生して、コマンドの応答がなくなる問題を修正しました ([Firefox バグ 1467743](https://bugzil.la/1467743)、[Firefox バグ 1447449](https://bugzil.la/1447449))。

### その他

_変更なし。_

## アドオン開発者向けの変更点

### API の変更点

- TLS 接続を詳しく調査するための {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API を追加しました ([Firefox バグ 1322748](https://bugzil.la/1322748))。
- 新しいタブを開く場所を設定する {{WebExtAPIRef("browserSettings.newTabPosition")}} を追加しました ([Firefox バグ 1344749](https://bugzil.la/1344749))。
- {{WebExtAPIRef("windows.get()")}}、{{WebExtAPIRef("windows.getCurrent()")}}、{{WebExtAPIRef("windows.getLastFocused()")}} で `windowTypes` が非推奨になりました ([Firefox バグ 1419132](https://bugzil.la/1419132))。
- ウィンドウごとにブラウザーのアクションを変更可能になりました ([Firefox バグ 1419893](https://bugzil.la/1419893))。

### マニフェストの変更点

- [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) マニフェストキーで、インストール時に自動的にサイドバーを開くか否かを拡張機能で制御するための `open_at_install` プロパティを追加しました ([Firefox バグ 1460910](https://bugzil.la/1460910))。
- さまざまなマニフェストキーで `browser_style` プロパティを変更しました:

  - [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) および [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) で、既定値が `false` になりました。
  - [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) および [`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) で、既定値が `true` になりました。

### テーマの変更点

- [`theme`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) マニフェストキーで、タブのセパレーターの色を拡張機能から変更可能にする `tab_background_separator` プロパティを追加しました ([Firefox バグ 1459455](https://bugzil.la/1459455))。

### 廃止

- パッケージ化されていないサイドロード拡張機能のサポートを廃止しました ([Firefox バグ 1385057](https://bugzil.la/1385057)).
- テストのため拡張機能を一時的に読み込んでいるときに、`browser_style` に関する警告を表示しないようになりました ([Firefox バグ 1404724](https://bugzil.la/1404724))。

## 過去のバージョン

{{Firefox_for_developers(61)}}
