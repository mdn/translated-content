---
title: Firefox 71 for Developers
slug: Mozilla/Firefox/Releases/71
---

{{FirefoxSidebar}}

Firefox 71 は、米国時間 2019 年 12 月 3 日 にリリースされました。このページでは、開発者に影響する Firefox 71 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

[コンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- コンソールの [マルチラインモード](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line_mode) をデフォルトで有効にしました。
- コンソールの設定項目が、新しい [ツールバーの設定メニュー](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) に統合されました ([Firefox バグ 1523868](https://bugzil.la/1523868))。

[JavaScript デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- [インラインの変数プレビュー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline_variable_preview) を有効にしました ([Firefox バグ 1576679](https://bugzil.la/1576679))。
- as is the ability to [イベントのタイプによるフィルタリング](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter_by_event_type) と同様に、[イベントのログ記録](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging_on_events) が可能になりました ([Firefox バグ 1110276](https://bugzil.la/1110276))。
- デバッガーの新しい [一時停止のオーバーレイ](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause_on_breakpoints_overlay) を、設定項目 `devtools.debugger.features.overlay` を使用して無効化できるようになりました ([Firefox バグ 1579768](https://bugzil.la/1579768))。
- デバッガーを開く新しい [キーボードショートカット](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) が使用可能になりました: Linux/Windows では&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Z</kbd>

  、macOS では&#x20;

  <kbd>Cmd</kbd>

  &#x20;\+&#x20;

  <kbd>Opt</kbd>

  &#x20;\+&#x20;

  <kbd>Z</kbd>

  &#x20;です ([Firefox バグ 1583042](https://bugzil.la/1583042))。

- [DOM Mutation のブレークポイント](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) で一時停止すると、ブレークポイントを持つ DOM ノードや (存在すれば) 追加/削除された子ノードを表示するようになりました ([Firefox バグ 1576145](https://bugzil.la/1576145))。
- [整形されたソース](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) 内の位置が、整形した後やインスペクターの [イベントリスナーのツールチップ](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html) からジャンプしたときも正確になりました ([Firefox バグ 1500222](https://bugzil.la/1500222))。

[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- [Web sockets インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) をデフォルトで有効化しました ([Firefox バグ 1573805](https://bugzil.la/1573805))。
- 要求/応答のボディ、ヘッダー、Cookie の [全文検索](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search_in_requests) が可能になりました。
- 読み込み時に [特定の URL をブロックする](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking_specific_urls) パターンを入力できるようになりました。
- [タイミングタブ](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) で、{{httpheader("Server-Timing")}} ヘッダーで送信したタイミングデータを表示するようになりました ([Firefox バグ 1403051](https://bugzil.la/1403051))。

[インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- 色の値を持つ CSS 変数の定義の隣に、色見本を表示するようになりました ([Firefox バグ 1456167](https://bugzil.la/1456167))。
- {{cssxref(":visited")}} のスタイルを CSS ルールビューで表示するようになりました ([Firefox バグ 713106](https://bugzil.la/713106))。

### CSS

- CSS Grid Level 2 から値 [subgrid](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid) を、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} に追加しました ([Firefox バグ 1580894](https://bugzil.la/1580894))。
- [段組みレイアウト](/ja/docs/Web/CSS/CSS_multicol_layout) で {{cssxref("column-span")}} をサポートしました ([Firefox バグ 1426010](https://bugzil.la/1426010))。
- {{cssxref("clip-path")}} で `path()` の値をサポートしました ([Firefox バグ 1488530](https://bugzil.la/1488530))。
- {{htmlelement("img")}} 要素の `height` および `width` HTML 属性を、内部の {{cssxref("aspect-ratio")}} プロパティにマッピングしました ([Firefox バグ 1585637](https://bugzil.la/1585637))。[この機能について、MDN のガイドをご覧ください](/ja/docs/Learn/Performance/Multimedia)。

#### 廃止

- CSS Radial Gradients が、負の値の半径を受け入れないようになりました ([Firefox バグ 1583736](https://bugzil.la/1583736))。[サイト互換性情報の記事](https://www.fxsitecompat.dev/docs/2019/css-radial-gradients-no-longer-accept-negative-radii/) をご覧ください。

### JavaScript

- {{jsxref("Promise.allSettled()")}} メソッドをサポートしました ([Firefox バグ 1549176](https://bugzil.la/1549176))。このメソッドは、先のコードを実行する前に promise のセットに含まれるすべての promise が解決または拒否されるまで待つことを容易にします。

#### 廃止

- Array の非標準のジェネリックメソッドを、Firefox 71 で削除しました ([Firefox バグ 1222547](https://bugzil.la/1222547))。これらは始めに Firefox 1.5 ([JavaScript 1.6](/ja/docs/Web/JavaScript/New_in_JavaScript/1.6)) で導入されて、Firefox 68 から非推奨になりました。配列状のオブジェクトで Array のジェネリックメソッドを使用している場合は、[`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) を使用してオブジェクトを適切な配列に変換して、標準のメソッドを使用するようにしてください。

### MathML

- [MathML 要素](/ja/docs/Web/MathML/Element) が MathML DOM を実装しました。クラスは {{domxref("MathMLElement")}} です。例えば適切な MathML DOM と、`mathmlEl.style`、グローバルイベントハンドラーを使用できます。従来は MathML 要素が {{domxref("Element")}} クラスのみ実装していました ([Firefox バグ 1571487](https://bugzil.la/1571487))。

### API

#### 新規 API

[Media Session API](/ja/docs/Web/API/Media_Session_API) を部分的に実装しました。この API は、メディアの再生状態に関するオペレーティングシステムの情報をコンテンツと共有するための標準的な仕組みを提供します。これはアーティスト、アルバム、トラック名、あるいはアルバムのアートワークといったメタデータを含みます ([Firefox バグ 1580602](https://bugzil.la/1580602))。

またこの API は、デバイスのメディア操作 (再生、停止、シークボタンなど) がユーザーによって行われたときに通知を受ける手段も提供します。このために {{domxref("MediaSession")}} インターフェイスを部分的に実装して、現在再生しているメディアのメタデータを設定および取得する機能や {{domxref("MediaSession.setActionHandler", "setActionHandler()")}} メソッドをサポートしました。`MediaSession` API へアクセスするには、{{domxref("navigator.mediaSession")}} プロパティを使用してください。

#### DOM

- {{domxref("StaticRange.StaticRange()", "StaticRange()")}} コンストラクターをサポートしました ([Firefox バグ 1575980](https://bugzil.la/1575980))。
- MathML の {{domxref("MathMLElement")}} インターフェイスを実装しました ([Firefox バグ 1571487](https://bugzil.la/1571487))。

#### メディア、Web Audio、WebRTC

- {{domxref("MediaRecorder")}} インターフェイスに {{domxref("MediaRecorder.audioBitsPerSecond", "audioBitsPerSecond")}} および {{domxref("MediaRecorder.videoBitsPerSecond", "videoBitsPerSecond")}} プロパティを実装しました ([Firefox バグ 1514158](https://bugzil.la/1514158))。

#### Canvas と WebGL

- {{domxref("OVR_multiview2")}} および {{domxref("OES_fbo_render_mipmap")}} WebGL 拡張をデフォルトで公開しました ([Firefox バグ 1584277](https://bugzil.la/1584277), [Firefox バグ 1583878](https://bugzil.la/1583878))。

#### 廃止

{{domxref("DataTransfer")}} の、非標準のメンバーを削除しました ([Firefox バグ 1345192](https://bugzil.la/1345192)):

- {{domxref("DataTransfer.mozItemCount")}}
- {{domxref("DataTransfer.mozClearDataAt()")}}
- {{domxref("DataTransfer.mozGetDataAt()")}}
- {{domxref("DataTransfer.mozSetDataAt()")}}
- {{domxref("DataTransfer.mozTypesAt()")}}

### WebDriver conformance (Marionette)

- `WebDriver:TakeScreenshot` および `WebDriver:TakeElementScreenshot` コマンドを、未処理のプロンプトの動作設定を尊重するように更新しました ([Firefox バグ 1584927](https://bugzil.la/1584927))。
- `Marionette:Quit` コマンドを、Firefox 以外の Gecko 駆動アプリケーションも終了または再起動できるように更新しました ([Firefox バグ 1298921](https://bugzil.la/1298921))。
- Android の GeckoView ベースブラウザーで、セッション機能で返される `browserName` が常に `firefox` になります ([Firefox バグ 1587364](https://bugzil.la/1587364))。

## アドオン開発者向けの変更点

### API の変更点

- {{WebExtAPIRef("downloads.download")}} が、以下の HTTP レスポンスコードをエラーとして識別および報告するようになりました:

  - 404 で `SERVER_BAD_CONTENT` を返します
  - 403 で `SERVER_FORBIDDEN` を返します
  - 402 および Proxy 407 で `SERVER_UNAUTHORIZED` を返します
  - 上記以外の 400 で `SERVER_FAILED` を返します ([Firefox バグ 1576333](https://bugzil.la/1576333))。

- {{WebExtAPIRef("downloads.download")}} の省略可能な `options` 引数に、`allowHttpErrors` プロパティを含むようになりました。この `boolean` フラグを `true` に設定すると、HTTP エラーが発生した後もダウンロードを続けることができます。`false` に設定すると HTTP エラーが発生した際にダウンロードをキャンセルします。既定値は `false` です ([Firefox バグ 1578955](https://bugzil.la/1578955))。

#### 廃止

- [`proxy.register()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy) および [`proxy.unregister()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy) 関数を削除しました ([Firefox バグ 1443259](https://bugzil.la/1443259))。要求のプロキシ使用を制御するには {{WebExtAPIRef("proxy.onRequest")}} を使用してください。

## 関連情報

- Hacks ブログのリリース記事: [Firefox 71: A year-end arrival](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)

## 過去のバージョン

{{Firefox_for_developers(70)}}
