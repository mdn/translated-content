---
title: Firefox 114 for developers
slug: Mozilla/Firefox/Releases/114
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 114 の変更点をまとめています。Firefox 114 は、米国時間 2023 年 6 月 6 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [アクセシビリティ調査ツール](/ja/docs/Tools/Accessibility_inspector) が、要素の ARIA ロールを正しく表示しない不具合を修正しました。これは、[landmark ロール](/ja/docs/Web/Accessibility/ARIA/Roles/landmark_role) の表示に影響します。
  ARIA にマッピングできないロールは、Gecko の内部ロール名を使用します ([Firefox bug 1572512](https://bugzil.la/1572512))。

### HTML

変更なし。

### CSS

- [`:lang()`](/ja/docs/Web/CSS/:lang) 疑似クラスで、言語コードのマッチングに接頭辞マッチング方式に代わって、文字列マッチング方式 (`*` ワイルドカードを含む) を使用するようになりました。
  また、複数の言語にマッチする、カンマ区切りの言語リストをサポートしました ([Firefox bug 1121792](https://bugzil.la/1121792))。
- 文字を記号に置き換えることができる、[-webkit-text-security](/ja/Web/CSS/-webkit-text-security) プロパティをサポートしました。このプロパティを使用して、伏せ字の表現を制御できます ([Firefox bug 1826629](https://bugzil.la/1826629))。
- [`calc()`](/ja/docs/Web/CSS/calc) 関数内で、定数 `infinity` および `NaN` をサポートしました ([Firefox bug 1830759](https://bugzil.la/1830759))。

### JavaScript

- [ワーカー](/ja/docs/Web/API/Web_Workers_API) で [ECMAScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules) の読み込みをサポートしました。
  [`Worker`](/ja/docs/Web/API/Worker/Worker#type) および [`SharedWorker` コンストラクター](/ja/docs/Web/API/SharedWorker/SharedWorker#type) で `{type: "module"}` オプションを指定すると、ワーカーにモジュールを読み込めます。
  また、[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) および [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) を使用して、ワーカースクリプトへ静的および動的にモジュールをインポートできます ([Firefox bug 1812591](https://bugzil.la/1812591))。
- [ワークレット](/ja/docs/Web/API/Worklet) で、[ECMAscript/JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules) を静的にインポートする [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) が使用可能になりました ([Firefox bug 1812591](https://bugzil.la/1812591))。

### SVG

- [`image`](/ja/docs/Web/SVG/Element/image) および [`feImage`](/ja/docs/Web/SVG/Element/feImage) 要素で [`crossorigin`](/ja/docs/Web/SVG/Attribute/crossorigin) 属性をサポートしました ([Firefox bug 1240357](https://bugzil.la/1240357))。

### API

- [`Window.print()`](/ja/docs/Web/API/Window/print) が Android 版 Firefox で印刷ダイアログを開くようになり、現行の文書を印刷できるようになりました ([Firefox bug 1809922](https://bugzil.la/1809922))。
- [WebTransport API](/ja/docs/Web/API/WebTransport_API) をサポートしました。[`WebTransport`](/ja/docs/Web/API/WebTransport)、[`WebTransportBidirectionalStream`](/ja/docs/Web/API/WebTransportBidirectionalStream)、[`WebTransportDatagramDuplexStream`](/ja/docs/Web/API/WebTransportDatagramDuplexStream)、[`WebTransportReceiveStream`](/ja/docs/Web/API/WebTransportReceiveStream)、[`WebTransportDatagramDuplexStream`](/ja/docs/Web/API/WebTransportDatagramDuplexStream)、[`WebTransportError`](/ja/docs/Web/API/WebTransportError) インターフェイスをサポートしています。
  詳しくは [Firefox bug 1692754](https://bugzil.la/1692754)、[Firefox bug 1818754](https://bugzil.la/1818754)、[Firefox bug 1791835](https://bugzil.la/1791835) をご覧ください。

- {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule) を使用するときに指定した `supports()` 条件を取得する、[`CSSImportRule.supportsText`](/ja/docs/Web/API/CSSImportRule/supportsText) が使用可能になりました ([Firefox bug 1829590](https://bugzil.la/1829590))。

#### DOM

変更なし。

#### Media、WebRTC、Web Audio

変更なし。

#### 廃止

- 非推奨かつ非標準の `mozImageSmoothingEnabled` プロパティを完全に削除しました。
  スケーリングされた画像の平滑化については、[`imageSmoothingEnabled`](/ja/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) プロパティをご覧ください ([Firefox bug 1228850](https://bugzil.la/1228850))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `input.performActions` および `input.releaseActions` コマンドをサポートしました。これらは、ウェブページ上の要素と対話するユーザー入力のエミュレーションに使用できます。Marionette と同様に、WebDriver の仕様で利用できるすべての入力ソース `key`、`pointer`、`wheel` をサポートしています ([Firefox bug 1832380](https://bugzil.la/1832380))。
- ブラウザー対クライアントの独自のメッセージをサポートしました。過去に `script.addPreloadScript` でインストールしたスクリプトから `script.message` イベントを発信できます ([Firefox bug 1824187](https://bugzil.la/1824187))。
- `script.evaluate` および `script.callFunction` で、`RemoteValue` のシリアライズを設定するための引数 `serializationOptions` をサポートしました ([Firefox bug 1824953](https://bugzil.la/1824953))。
- `script.evaluate` および `script.callFunction` コマンドで、拒否されたプロミスのスタックトレースが含まれず、また例外の詳細情報を適切に構築しない不具合を修正しました ([Firefox bug 1829630](https://bugzil.la/1829630))。
- `browsingContext.domContentLoaded` および `browsingContext.load` イベントで、ページで `<base>` メタタグを定義した場合に `url` が正しく報告されない不具合を修正しました ([Firefox bug 1825634](https://bugzil.la/1825634))。

#### Marionette

- `WebDriver:GetComputedRole` コマンドが、正しい WAI-ARIA ロールを返さない不具合を修正しました ([Firefox bug 1822112](https://bugzil.la/1822112))。
- 同じ `WebDriver:ElementSendKeys` コマンドで修飾キーを再び使用したときに、修飾キーがリセットされない不具合を修正しました ([Firefox bug 1776190](https://bugzil.la/1776190))。

## アドオン開発者向けの変更点一覧

### 廃止

- Manifest V3 拡張機能で、[`action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)、[`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)、[`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)、[`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) マニフェストキーの [`browser_style`](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) を非推奨にしました ([Firefox bug 1827910](https://bugzil.la/1827910))。Manifest V3 拡張機能の `browser_style` からの移行に関する情報は、[Manifest v3 migration](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(113)}}
