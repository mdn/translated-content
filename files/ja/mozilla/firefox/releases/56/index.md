---
title: Firefox 56 for developers
slug: Mozilla/Firefox/Releases/56
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

Firefox 56 は、米国時間 2017 年 9 月 28 日にリリースされました。このページでは、開発者に影響する Firefox 56 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- CSS グリッドインスペクターで負の行数を表示するようになりました ([Firefox バグ 1369942](https://bugzil.la/1369942))。
- 新しい CSS グリッドレイアウトパネルが使用可能になり、CSS グリッドのデバッグの容易さが向上しました ([Firefox バグ 1181227](https://bugzil.la/1181227))。詳しくは [Powerful New Additions to the CSS Grid Inspector in Firefox Nightly](https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/) をご覧ください。

### HTML

- ラベル付け可能なフォームコントロールに `labels` プロパティを実装しました。例えば {{domxref("HTMLInputElement.labels")}} です ([Firefox バグ 556743](https://bugzil.la/556743))。
- `<link rel="preload">` を実装しました。詳しくは [リンク種別: preload](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) をご覧ください ([Firefox バグ 1222633](https://bugzil.la/1222633))。現在は Firefox だけがキャッシュ可能なリソースの先読みに対応していることに注意してください。

### CSS

- Mozilla の独自仕様である {{cssxref("&lt;color&gt;")}} 値 `-moz-win-accentcolor` と `-moz-win-accentcolortext` ([Firefox バグ 1344910](https://bugzil.la/1344910))、および独自仕様のメディアクエリーである [`-moz-windows-accent-color-in-titlebar`](/ja/docs/Web/CSS/Guides/Media_queries/Using#-moz-windows-accent-color-in-titlebar) を実装しました ([Firefox バグ 1379938](https://bugzil.la/1379938))。

### SVG

_変更なし。_

### JavaScript

- [Intl API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) を、Android 版 Firefox で有効化しました ([Firefox バグ 1344625](https://bugzil.la/1344625))。

### API

#### 新規 API

_変更なし。_

#### DOM

- Mac で別の半透明ではないアプリケーションの背後にウィンドウがあるとき、{{domxref("Document.hidden")}} が true を返すようになりました ([Firefox バグ 1236512](https://bugzil.la/1236512))。
- {{domxref("Gamepad.displayId")}} プロパティを実装しました ([Firefox バグ 1375816](https://bugzil.la/1375816))。
- {{domxref("PerformanceTiming.secureConnectionStart")}} プロパティを実装しました ([Firefox バグ 772589](https://bugzil.la/772589))。
- Firefox は `iso-2022-jp` の {{domxref("TextDecoder.TextDecoder","TextDecoder()")}} がインスタンス化されたときに黙って `iso-2022-jp-2` シーケンスを受け入れていました。しかし他のブラウザーはこれに対応しておらず、またこれを使用するページもないようですので、API を単純化するためにこの動作を削除しました ([Firefox バグ 715833](https://bugzil.la/715833))。
- {{domxref("Window.setTimeout", "setTimeout()")}} および {{domxref("Window.setInterval", "setInterval()")}} の 4ms 制限の動作を、[Timeouts throttled to >=4ms](/ja/docs/Web/API/Window/setTimeout#timeouts_throttled_to_%3e4ms) で説明しているとおり、他のブラウザーに合わせるよう更新しました ([Firefox バグ 1378586](https://bugzil.la/1378586))。
- [ページ可視性 API](/ja/docs/Web/API/Page_Visibility_API) の {{domxref("Document.onvisibilitychange")}} ハンドラーを追加しました ([Firefox バグ 1333912](https://bugzil.la/1333912))。
- {{domxref("Window.showModalDialog()")}} メソッドを削除しました ([Firefox バグ 981796](https://bugzil.la/981796))。
- {{domxref("HTMLFormElement.action")}}、{{domxref("HTMLInputElement.formAction")}}、{{domxref("HTMLButtonElement.formAction")}} プロパティの実装を、仕様書に従って正しい形式のサブミッション URL を返すように変更しました ([Firefox バグ 1366361](https://bugzil.la/1366361))。

#### DOM イベント

- `onwheel` が {{domxref("HTMLElement.onwheel", "HTMLElement")}} で使用可能になりました。以前は使用不可でした ([Firefox バグ 1370550](https://bugzil.la/1370550))。

#### メディアと WebRTC

- 設定変更の管理を支援するため、接続のローカル側およびリモート側の現行および未実行の構成を調査することが可能な {{domxref("RTCPeerConnection")}} のプロパティを Firefox でサポートしました: {{domxref("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}}、{{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}}、{{domxref("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}}、{{domxref("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}}。
- Android で、メディアのハードウェアエンコーディングを既定で有効化しました。Firefox 55 でも使用可能でしたが、デフォルトで無効でした ([Firefox バグ 1386974](https://bugzil.la/1386974))。VP8 メディアのエンコードをサポートするデバイスでは、高効率なエンコーディングが可能になります。これはユーザーのデバイスのバッテリーやプロセッサーの消費を節約して、一般的にパフォーマンスが向上します。

#### Canvas と WebGL

- {{domxref("CanvasRenderingContext2D.drawImage()")}} メソッドを、`imageSmoothingEnabled` が `false` であってもダウンスケーリングする際にスムージングを行うよう更新しました。これは仕様書では必須にされていませんが、Chrome の動作に合わせています。[Firefox バグ 1360415](https://bugzil.la/1360415) をご覧ください。
- {{domxref("SVGImageElement")}} を {{domxref("CanvasImageSource")}} として使用可能になりました。例えば {{domxref("CanvasRenderingContext2D.drawImage","drawImage()")}} を呼び出すときに画像リソースとして使用できます ([Firefox バグ 1382027](https://bugzil.la/1382027))。

### セキュリティ

_変更なし。_

### プラグイン

- Android 版 Firefox で、すべてのプラグインのサポートを廃止しました ([bug 1381916](https://bugzilla.mozilla.org/show_bug.cgi?id=1381916))。

### その他

- URL エンコーディングの問題を避けるため、Gecko は URL を内部で [punycode](https://ja.wikipedia.org/wiki/Punycode) としてエンコードするようになりました ([Firefox バグ 945240](https://bugzil.la/945240) および [Firefox バグ 942074](https://bugzil.la/942074) の議論を参照)。
- Windows および macOS 版の Firefox で、`-headless` フラグを使用して [ヘッドレスモード](/ja/docs/Mozilla/Firefox/Headless_mode) で実行することが可能になりました ([Firefox バグ 1355150](https://bugzil.la/1355150) および [Firefox バグ 1355147](https://bugzil.la/1355147))。

## ウェブプラットフォームから廃止

### HTML

- {{htmlelement("isindex")}} 要素を HTML パーサーおよびフォーム送信から削除しました([Firefox バグ 1266495](https://bugzil.la/1266495))。
- {{htmlelement("applet")}} 要素を削除しました ([Firefox バグ 1279218](https://bugzil.la/1279218))。

### API

_変更なし。_

### SVG

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- [browsingData.RemovalOptions](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions) に、Cookie のための "hostnames" オプションを追加しました。
- [browsingData.settings()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/settings) および [browsingData.removeCookies()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies) を、Android 版 Firefox でサポートしました。
- [browserSettings.cacheEnabled](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled) をサポートしました。
- [browser_style](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) の使用方法を変更しました。
- [chrome_settings_overrides.search_provider.is_default](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) をサポートしました。
- contextMenus を [menus](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) に改名しました。
- [cookies.set()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set) および [cookies.remove()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove) がプライベートブラウジングモードで動作するようになりました。
- [devtools.panels.elements.onSelectionChanged](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged) をサポートしました。
- [downloads.open()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/open) が、ユーザーアクションから呼び出すことのみ可能になりました。
- [FindProxyForURL の戻り値 "DIRECT" が、引数をとらないようになりました](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy#pac_file_environment)。
- [history.onVisited](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) が、既知の場合に限ってページのタイトルを持つようになりました。
- [management.get()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/management/get) および [management.getAll()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/management/getAll) をサポートしました。
- [menus](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) で "tools_menu" コンテキストをサポートしました。
- [menus.OnClickData](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/OnClickData) が "linkText" を持つようになりました。
- [menus.create()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) が ["icons"](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus#icons) オプションを持つようになりました。
- [notifications.onShown](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) をサポートしました。
- [pageAction.show()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) および [pageAction.hide()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) を、Android 版 Firefox でサポートしました。
- [permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) で "unlimitedStorage" をサポートしました。
- [privacy.services](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services) が passwordSavingEnabled プロパティを持つようになりました。
- [privacy.websites.referrersEnabled](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) をサポートしました。
- [protocol_handlers](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) で "gopher" をサポートしました。
- proxy.registerProxyScript() を [proxy.register()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy) に改名しました。
- [proxy.unregister()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy) をサポートしました。
- [runtime.onInstalled](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) で `temporary` フラグをサポートしました。
- [tabs.print()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/print)、[tabs.PageSettings](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings)、[tabs.printPreview()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/printPreview)、[tabs.saveAsPDF()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) をサポートしました。
- [tabs.Tab.lastAccessed](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) をサポートしました。
- [theme.reset()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset) をサポートしました。
- [windows.create()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) および [windows.update()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/update) で、ウィンドウの初期タイトルをサポートしました。

## 過去のバージョン

{{Firefox_for_developers(55)}}
