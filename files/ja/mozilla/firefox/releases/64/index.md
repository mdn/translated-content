---
title: Firefox 64 for developers
slug: Mozilla/Firefox/Releases/64
---

{{FirefoxSidebar}}

Firefox 64 は、米国時間 2018 年 12 月 11 日 にリリースされました。このページでは、開発者に影響する Firefox 64 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [アクセシビリティインスペクターの情報バー](/ja/docs/Tools/Accessibility_inspector#Highlighting_of_UI_items) が、ページ上のテキストや画像の色のコントラスト比に関する情報を表示するようになりました ({{bug(1473037)}})。
- [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode) で選択したデバイスが、セッションをまたいで保存されるようになりました ({{bug(1248619)}})。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) で、[トラッキング防止](/ja/docs/Mozilla/Firefox/Privacy/Tracking_Protection) の影響を受ける可能性があるリソースに印をつけるようになりました ({{bug(1333994)}})。
- [ウェブコンソール](/ja/docs/Tools/Web_Console) で、コードの入力や評価の機能が向上しました:

  - コンソールの式の [オートコンプリート](/ja/docs/Tools/Web_Console/The_command_line_interpreter#Autocomplete) が、大文字・小文字を区別しないようになりました ({{bug(672733)}})。
  - bash のような reverse search によって [コンソールの式の履歴](/ja/docs/Tools/Web_Console/The_command_line_interpreter#Command_history) をたどれるようになりました ({{bug(1024913)}})。
  - コンソールで [評価されたコード](/ja/docs/Tools/Web_Console/The_command_line_interpreter) が、入力・出力ともに構文強調を行うようになりました ({{bug(1463669)}})。

- [JavaScript デバッガー](/ja/docs/Tools/Debugger) のステップ実行の機能も向上しました:

  - ステップ実行中は [展開された変数](/ja/docs/Tools/Debugger/UI_Tour#Scopes) を維持するようになりました ({{bug(1491471)}})。
  - 関数の [ステップアウト](/ja/docs/Tools/Debugger/How_to/Step_through_code) で、戻り値をスキップするようになりました ({{bug(923975)}})。

#### 廃止

- 開発ツールバー/ GCLI を削除しました ({{bug(1429421)}})。

### HTML

_変更なし。_

### CSS

- [CSS Scrollbars](/ja/docs/Web/CSS/CSS_Scrollbars) 仕様の機能をデフォルトで有効化しました ({{bug(1492012)}})。
- [`pointer:coarse`](/ja/docs/Web/CSS/@media/pointer) を含む、Interaction Media Features を実装しました ({{bug(1035774)}})。[`any-pointer`](/ja/docs/Web/CSS/@media/any-pointer) および [`any-hover`](/ja/docs/Web/CSS/@media/any-hover) の実装については、{{bug(1483111)}} をご覧ください。
- [`prefers-reduced-motion`](/ja/docs/Web/CSS/@media/prefers-reduced-motion) メディア特性を Android 版 Firefox でサポートしました ({{bug(1478505)}})。
- CSS の {{cssxref("&lt;gradient&gt;")}} 値で複数の color stop を持つ構文をサポートしました。例えば `yellow 25%, yellow 50%` を `yellow 25% 50%` と書くことができます ({{bug(1352643)}})。
- {{cssxref("text-transform")}} プロパティで `full-size-kana` 値を受け入れるようになりました ({{bug(1498148)}})。
- ウェブ互換性の問題を緩和するため、{{cssxref("appearance", "-webkit-appearance")}} をサポートしました ({{bug(1368555)}})。
- 上記の更新に関連して、Firefox 固有の `-moz-appearance` の大半の値を削除しました ({{bug(1496720)}})。
- {{htmlelement("legend")}} 要素で {{cssxref("display")}}: `list-item` をサポートしました ({{bug(1486602)}})。
- {{cssxref("offset-path")}} で使用可能な SVG の `path()` がアニメーション可能になりました ({{bug(1486094)}})。
- セレクターの羅列やグループに `-webkit-` 接頭辞を持つ疑似要素が含まれるとき、疑似要素がセレクターを無効化しないようになりました (詳しくは {{bug(1424106)}}、またこの機能の有効化について {{bug(1486325)}} をご覧ください)。

#### 廃止

- {{CSSxRef("display")}} の非標準の値である [`-moz-box` および `-moz-inline-box`](/ja/docs/Mozilla/Gecko/Chrome/CSS/display-xul) が、ウェブコンテンツで使用できなくなりました ({{bug(1496961)}})。
- 非標準の {{CSSxRef("::-moz-tree")}} [疑似要素](/ja/docs/Web/CSS/Pseudo-elements) が、ウェブコンテンツで使用できなくなりました ({{bug(1496961)}})。
- 設定項目 `layout.css.filters.enabled` を削除しました。[CSS filters](/ja/docs/Web/CSS/Filter_Effects) は無効化できません ({{bug(1408841)}})。
- {{cssxref("overflow")}} の 2 値構文で block を 1 番目、inline を 2 番目に入れ替えた変更 ({{bug(1481866)}}) を元に戻しました ({{bug(1492567)}})。理由は [Bug 1481866 の comment 14](https://bugzilla.mozilla.org/show_bug.cgi?id=1481866#c14) をご覧ください。

### SVG

_変更なし。_

### JavaScript

- {{jsxref("JSON.stringify")}} が正しくない Unicode 文字列を返すのを避けるため、TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) 提案を実装しました ({{bug(1469021)}})。
- Proxy 化した関数を {{jsxref("Function.prototype.toString")}}`.call()` に渡すことが可能になりました ({{bug(1440468)}})。
- {{jsxref("WebAssembly.Global")}} コンストラクターで、何も値を指定しない場合に型付きの値 0 を使用するようになりました。これは [`DefaultValue` アルゴリズム](https://webassembly.github.io/spec/js-api/#defaultvalue) で示されています ({{bug(1490286)}})。

### API

#### DOM

- {{domxref("Fullscreen_API", "Fullscreen API", "", "1")}} に関して、いくつかの変更を施しました:

  - API の接頭辞を削除しました ({{bug(1269276)}})。
  - {{domxref("Element.requestFullscreen()")}} および {{domxref("Document.exitFullscreen()")}} メソッドが、モード変更が完了したときに解決する {{jsxref("Promise")}} を返すようになりました ({{bug(1188256)}}、{{bug(1491212)}})。
  - 以前は {{domxref("fullscreenchange")}} および {{domxref("fullscreenerror")}} イベントが始めに {{domxref("Document")}} へ、次に {{domxref("Element")}} へ発行されていました。これを逆にして、要素が始めにイベントを受けるようになりました。これは最新の仕様書や Google Chrome の動作に一致します ({{bug(1375319)}})。

- {{domxref("WebVR_API", "WebVR API", "", "1")}} (1.1) を macOS で再び有効化しました ({{bug(1476091)}})。
- {{domxref("Window.screenLeft")}} および {{domxref("Window.screenTop")}} を、それぞれ {{domxref("Window.screenX")}} および {{domxref("Window.screenY")}} の別名として実装しました ({{bug(1498860)}})。
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} メソッドが、仕様書に従ってヘッダー名をすべて小文字で返すようになりました ({{bug(1398718)}})。
- 古い `HTMLAllCollection` インターフェイスを、最近の [仕様書の更新](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) に従って更新しました ({{bug(1398354)}})。
- プライバシー保護のため、{{domxref("Navigator.buildID")}} で固定値のタイムスタンプが返るようになりました ({{bug(583181)}})。
- 以下の {{domxref("Document.execCommand()")}} UI 機能コマンドを、デフォルトで無効にしました ({{bug(1490641)}}):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service workers

- {{domxref("ServiceWorkerContainer.startMessages()")}} メソッドを実装しました ({{bug(1263734)}})。

#### メディア、Web Audio、WebRTC

- {{domxref("PannerNode.refDistance")}}、{{domxref("PannerNode.maxDistance")}}、{{domxref("PannerNode.rolloffFactor")}}、{{domxref("PannerNode.coneOuterGain")}} プロパティが、受け入れ可能な範囲を超える値が設定されたときに、正しく例外を発生させるようになりました ({{bug(1487963)}})。
- {{domxref("RTCRtpSender.setParameters()")}} で変更した {{domxref("RTCRtpEncodingParameters")}} の設定は、呼び出し中にに更新されませんでした。これらが再ネゴシエーションなしで即座に更新するようになりました ({{bug(1253499)}})。
- {{domxref("RTCIceCandidateStats.relayProtocol")}} を実装しました。これは {{domxref("RTCIceCandidateStats.mozLocalTransport")}} を標準化したものであり、こちらは非推奨になりました ({{bug(1435789)}})。
- 自動利得制御 (AGC) をデフォルトで有効にしました。これは設定項目 `media.getusermedia.agc_enabled` で変更できます ({{bug(1496714)}})。

#### 廃止

- ウェブ互換性の問題を緩和するために Firefox 63 で追加した {{domxref("Window.event")}} プロパティで別の問題が発覚したため、設定 (`dom.window.event.enabled`) で制御するようにして、Release 版はデフォルトで無効化しました ({{bug(1493869)}})。注記: これは実際には Firefox 63 のリリースサイクルの後期に実施しましたが、念のためここで言及します。
- {{domxref("LocalMediaStream")}} インターフェイスと、その `stop()` メソッドを削除しました ({{bug(1258143)}})。このメソッドは `LocalMediaStream` の非推奨化によって使用できなくなりました。全体のストリームを停止する方法については {{SectionOnPage("/ja/docs/Web/API/MediaStreamTrack/stop", "Stopping a video stream")}} をご覧ください。
- `AudioStreamTrack` および `VideoStreamTrack` インターフェイスを削除しました。これらはしばらく前から非推奨でした ({{bug(1377146)}})。この機能は {{domxref("MediaStreamTrack")}} に統合されました。トラックは {{domxref("MediaStreamTrack.kind", "kind")}} プロパティの値で、`audio` や `video` といった値で識別します。

### セキュリティ

- シマンテックの CA を失効させる計画を実装しました ({{bug(1409257)}} を参照。詳しくは [Mozilla’s Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) の議論もご覧ください)。
- {{httpheader("Referrer-Policy")}} を、スタイルシートで読み込むリソースの制御で使用可能になりました ({{bug(1330487)}})。詳しくは {{SectionOnPage("/ja/docs/Web/HTTP/Headers/Referrer-Policy", "Integration with CSS")}} をご覧ください。

### プラグイン

_変更なし_

### WebDriver conformance (Marionette)

#### API の変更点

- `Marionette:`、`L10n:`、`Addon:` の接頭辞を持たない、非推奨のコマンドエンドポイント (`singeTap` を含む) を削除しました ({{bug(1504478)}}、{{bug(1504940)}})。

#### バグ修正

- `WebDriver:PerformActions` で、`Shift` キーと合成したイベントが大文字にならない問題を修正しました ({{bug(1405370)}})。
- コンテンツプロセス内のタブがナビゲーション中に複数回変化したとき、`WebDriver:Navigate` がハングアップする場合がある問題を修正しました ({{bug(1504807)}})。
- パフォーマンスを向上させるため、および Firefox のメモリー使用量を削減するために、新しいタブやウィンドウがデフォルトで読み込むページを `about:newtab` から `about:blank` に変更しました ({{bug(1506643)}})。
- さまざまなページで表示されて要素との対話を失敗させていた、コンテンツブロックを紹介するパネルをデフォルトで無効にしました ({{bug(1488826)}})。

## アドオン開発者向けの変更点

### API の変更点

#### メニュー

- 拡張機能で独自のコンテキストメニューを設定するために `contextmenu` DOM イベントから呼び出すことが可能な、`browser.menus.overrideContext()` API を新設しました。この API は、拡張機能が Firefox のすべてのデフォルトのメニュー項目を隠して、独自のコンテキストメニューの UI を提供することを可能にします。このコンテキストメニューは、拡張機能が提供する複数のトップレベルのメニュー項目で構成され、任意で別の拡張機能のタブやブックマークのコンテキストメニューを含むこともできます。詳しくは [こちらのブログ記事](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) をご覧ください。

  - `browser.menus.overrideContext()` を実装しました ({{bug(1280347)}})。
  - デフォルトのコンテキストメニューを隠すために使用できる `showDefaults: false` オプションを実装しました ({{bug(1367160)}})。
  - `browser.menus.overrideContext()` が使用されていても、`moz-extension://` 文書 URL をマッチさせるために `documentURLPatterns` を使用できるようになりました。この方法は、独自のメニュー項目を特定の文書に限定させることを確実にできます ({{bug(1498896)}})。

- {{WebExtAPIRef("menus.create()")}} および {{WebExtAPIRef("menus.update()")}} の新しい `viewTypes` プロパティを使用して、アドオンでコンテキストメニューを表示可能にするかを制限できるようになりました ({{bug(1416839)}})。
- {{WebExtAPIRef("menus.update()")}} が、既存のメニュー項目のアイコンを更新できるようになりました ({{bug(1414566)}})。
- メニュー項目がクリックされたとき、どのマウスボタンを使用したかを拡張機能で検出可能になりました。これは {{WebExtAPIRef("menus.OnClickData")}} の新しい `button` プロパティを使用して判断できます ({{bug(1469148)}})。

#### ウィンドウ

- {{WebExtAPIRef("windows.create()")}} メソッドで新たに `cookieStoreId` オプションが使用可能になりました。これはウィンドウが開かれたときに作成されたすべてのタブで使用する `CookieStoreId` を指定します ({{bug(1393570)}})。

#### プライバシー

- {{WebExtAPIRef("privacy.websites")}} の `cookieConfig` プロパティは、`behavior` プロパティを受け入れ可能なオブジェクトです。このプロパティが、新たな値 `reject_trackers` をとれるようになりました。これは、拡張機能にトラッキング Cookie を拒否するよう指示します ({{bug(1493057)}}).

#### devtools.panels API

- [`devtools.panels.elements`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels/elements) の `Sidebar.setPage()` メソッドをサポートしました ({{bug(1398734)}})。

### マニフェストの変更点

- [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) マニフェストキーの新しいプロパティである `pinned` で、拡張機能をインストールする際にロケーションバーへページアクションをピン止めするかを制御できるようになりました ({{bug(1494135)}})。
- Windows のネイティブマニフェストで、レジストリキーを始めに 32 ビットのレジストリビュー ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) で確認して、そのあとに "ネイティブ" のレジストリビューを確認します。アプリケーションで適切なビューを使用してください ({{bug(1494709)}})。
- [`chrome_settings_overrides`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) フィールドの `search_provider` オブジェクトが、新たに `suggest_url`、`suggest_url_post_params` ({{bug(1486819)}})、 `search_url_post_params` プロパティを持てるようになりました。

## 関連情報

- [Firefox 64.0, See All New Features, Updates and Fixes](https://www.mozilla.org/en-US/firefox/64.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(64)}}
