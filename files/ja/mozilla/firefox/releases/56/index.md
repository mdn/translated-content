---
title: Firefox 56 for developers
slug: Mozilla/Firefox/Releases/56
---

Firefox 56 は、米国時間 2017 年 9 月 28 日にリリースされました。このページでは、開発者に影響する Firefox 56 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- CSS Grid インスペクターで負の行数を表示するようになりました ({{bug(1369942)}})。
- 新しい CSS Grid レイアウトパネルが使用可能になり、CSS Grid のデバッグの容易さが向上しました ({{bug(1181227)}})。詳しくは [Powerful New Additions to the CSS Grid Inspector in Firefox Nightly](https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/) をご覧ください。

### HTML

- ラベル付け可能なフォームコントロールに `labels` プロパティを実装しました。例えば {{domxref("HTMLInputElement.labels")}} です ({{bug(556743)}})。
- `<link rel="preload">` を実装しました。詳しくは [Preloading content with rel="preload"](/ja/docs/Web/HTML/Preloading_content) をご覧ください ({{bug(1222633)}})。現在は Firefox だけがキャッシュ可能なリソースのプリロードをサポートすることに注意してください。

### CSS

- Mozilla の独自仕様である {{cssxref("&lt;color&gt;")}} 値 `-moz-win-accentcolor` と `-moz-win-accentcolortext` ({{bug(1344910)}})、および独自仕様のメディアクエリーである [`-moz-windows-accent-color-in-titlebar`](/ja/docs/Web/CSS/Media_Queries/Using_media_queries#-moz-windows-accent-color-in-titlebar) を実装しました ({{bug(1379938)}})。

### SVG

_変更なし。_

### JavaScript

- [Intl API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) を、Android 版 Firefox で有効化しました ({{bug(1344625)}})。

### API

#### 新規 API

_変更なし。_

#### DOM

- Mac で別の半透明ではないアプリケーションの背後にウィンドウがあるとき、{{domxref("Document.hidden")}} が true を返すようになりました ({{bug(1236512)}})。
- {{domxref("Gamepad.displayId")}} プロパティを実装しました ({{bug(1375816)}})。
- {{domxref("PerformanceTiming.secureConnectionStart")}} プロパティを実装しました ({{bug(772589)}})。
- Firefox は `iso-2022-jp` の {{domxref("TextDecoder.TextDecoder","TextDecoder()")}} がインスタンス化されたときに黙って `iso-2022-jp-2` シーケンスを受け入れていました。しかし他のブラウザーはこれをサポートしておらず、またこれを使用するページもないようですので、API を単純化するためにこの動作を削除しました ({{bug(715833)}})。
- {{domxref("WindowOrWorkerGlobalScope.setTimeout","setTimeout()")}} および {{domxref("WindowOrWorkerGlobalScope.setInterval","setInterval()")}} の 4ms 制限の動作を、[Timeouts throttled to >=4ms](/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Timeouts_throttled_to_%3E4ms) で説明しているとおり、他のブラウザーに合わせるよう更新しました ({{bug(1378586)}})。
- [Page Visibility API](/ja/docs/Web/API/Page_Visibility_API) の {{domxref("Document.onvisibilitychange")}} ハンドラーを追加しました ({{bug("1333912")}})。
- {{domxref("Window.showModalDialog()")}} メソッドを削除しました ({{bug(981796)}})。
- {{domxref("HTMLFormElement.action")}}、{{domxref("HTMLInputElement.formAction")}}、{{domxref("HTMLButtonElement.formAction")}} プロパティの実装を、仕様書に従って正しい形式のサブミッション URL を返すように変更しました ({{bug(1366361)}})。

#### DOM イベント

- {{domxref("GlobalEventHandlers.onwheel")}} が {{domxref("HTMLElement")}} で使用可能になりました。以前は使用不可でした ({{bug(1370550)}})。

#### メディアと WebRTC

- 設定変更の管理を支援するため、接続のローカル側およびリモート側の現行および未実行の構成を調査することが可能な {{domxref("RTCPeerConnection")}} のプロパティを Firefox でサポートしました: {{domxref("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}}、{{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}}、{{domxref("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}}、{{domxref("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}}。
- Android で、メディアのハードウェアエンコーディングをデフォルトで有効化しました。Firefox 55 でも使用可能でしたが、デフォルトで無効でした ({{bug(1386974)}})。VP8 メディアのエンコードをサポートするデバイスでは、高効率なエンコーディングが可能になります。これはユーザーのデバイスのバッテリーやプロセッサーの消費を節約して、一般的にパフォーマンスが向上します。

#### Canvas と WebGL

- {{domxref("CanvasRenderingContext2D.drawImage()")}} メソッドを、`imageSmoothingEnabled` が `false` であってもダウンスケーリングする際にスムージングを行うよう更新しました。これは仕様書では必須にされていませんが、Chrome の動作に合わせています。{{bug(1360415)}} をご覧ください。
- {{domxref("SVGImageElement")}} を {{domxref("CanvasImageSource")}} として使用可能になりました。例えば {{domxref("CanvasRenderingContext2D.drawImage","drawImage()")}} を呼び出すときに画像リソースとして使用できます ({{bug(1382027)}})。

### セキュリティ

_変更なし。_

### プラグイン

- Android 版 Firefox で、すべてのプラグインのサポートを廃止しました ({{bug(1381916)}})。

### その他

- URL エンコーディングの問題を避けるため、Gecko は URL を内部で [punycode](https://ja.wikipedia.org/wiki/Punycode) としてエンコードするようになりました ({{bug("945240")}} および {{bug("942074")}} の議論を参照)。
- Windows および Mac OS X 版の Firefox で、`-headless` フラグを使用して [ヘッドレスモード](/ja/docs/Mozilla/Firefox/Headless_mode) で実行することが可能になりました ({{bug(1355150)}} および {{bug(1355147)}})。

## ウェブプラットフォームから廃止

### HTML

- {{htmlelement("isindex")}} 要素を HTML パーサーおよびフォーム送信から削除しました({{bug(1266495)}})。
- {{htmlelement("applet")}} 要素を削除しました ({{bug(1279218)}})。

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
- [chrome_settings_overrides.search_provider.is_default](/ja/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) をサポートしました。
- contextMenus を [menus](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) に改名しました。
- [cookies.set()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set) および [cookies.remove()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove) がプライベートブラウジングモードで動作するようになりました。
- [devtools.panels.elements.onSelectionChanged](/ja/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel/onSelectionChanged) をサポートしました。
- [downloads.open()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/open) が、ユーザーアクションから呼び出すことのみ可能になりました。
- [FindProxyForURL の戻り値 "DIRECT" が、引数をとらないようになりました](/ja/Add-ons/WebExtensions/API/proxy#PAC_file_environment)。
- [history.onVisited](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) が、既知の場合に限ってページのタイトルを持つようになりました。
- [management.get()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/management/get) および [management.getAll()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/management/getAll) をサポートしました。
- [menus](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) で "tools_menu" コンテキストをサポートしました。
- [menus.OnClickData](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/OnClickData) が "linkText" を持つようになりました。
- [menus.create()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) が ["icons"](/ja/Add-ons/WebExtensions/API/menus#Icons) オプションを持つようになりました。
- [notifications.onShown](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) をサポートしました。
- [pageAction.show()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) および [pageAction.hide()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) を、Android 版 Firefox でサポートしました。
- [permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) で "unlimitedStorage" をサポートしました。
- [privacy.services](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services) が passwordSavingEnabled プロパティを持つようになりました。
- [privacy.websites.referrersEnabled](/ja/Add-ons/WebExtensions/API/privacy/websites) をサポートしました。
- [protocol_handlers](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) で "gopher" をサポートしました。
- proxy.registerProxyScript() を [proxy.register()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register) に改名しました。
- [proxy.unregister()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/unregister) をサポートしました。
- [runtime.onInstalled](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) で `temporary` フラグをサポートしました。
- [tabs.print()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/print)、[tabs.PageSettings](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings)、[tabs.printPreview()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/printPreview)、[tabs.saveAsPDF()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) をサポートしました。
- [tabs.Tab.lastAccessed](/ja/Add-ons/WebExtensions/API/tabs/Tab) をサポートしました。
- [theme.reset()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset) をサポートしました。
- [windows.create()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) および [windows.update()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/update) で、ウィンドウの初期タイトルをサポートしました。

## 関連情報

- [Firefox 56.0 リリースノート](https://www.mozilla.jp/firefox/56.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(55)}}
