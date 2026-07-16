---
title: Firefox 109 開発者向けリリースノート
short-title: Firefox 109
slug: Mozilla/Firefox/Releases/109
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

このページでは、開発者に影響する Firefox 109 の変更点をまとめています。Firefox 109 は、米国時間 2023 年 1 月 17 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("input/range", "range")}} 要素で、[`list`](/ja/docs/Web/HTML/Reference/Elements/input/range#list) 属性に対応しました。これは、Firefox が範囲の途中に目盛りをつけられるようにするため、id によって {{HTMLElement("datalist")}} に関連づけるものです。

### CSS

- [`<system-color>`](/ja/docs/Web/CSS/Reference/Values/system-color) CSS データ型で、値 `Mark`、`MarkText`、`ButtonBorder` に対応しました ([Firefox バグ 1638052](https://bugzil.la/1638052))。

### JavaScript

変更なし。

### SVG

#### 廃止

- `SVGGraphicsElement.getTransformToElement()` を削除しました。
  これは、2015 年に SVG2 の仕様書および他の主要なブラウザーから削除されたことに従ったものです ([Firefox バグ 1803790](https://bugzil.la/1803790))。

- `SVGGraphicsElement.nearestViewportElement` および `SVGGraphicsElement.farthestViewportElement` 属性を、nightly および初期の beta ビルドにおいてデフォルトで無効にしました (設定項目 `svg.nearestAndFarthestViewportElement.enabled` で制御します)。
  [`SVGElement.viewportElement`](/ja/docs/Web/API/SVGElement#svgelement.viewportelement) を `SVGGraphicsElement.nearestViewportElement` の代替として使用できます。
  これらは SVG2 仕様書から削除されており、将来の Firefox リリースで完全に削除する予定です ([Firefox バグ 1133174](https://bugzil.la/1133174))。

### HTTP

- {{HTTPHeader("Content-Security-Policy")}} のソースディレクティブ用の値 `'unsafe-hashes'` をサポートしました。
  詳しくは [CSP unsafe-hashes](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_hashes) ([Firefox バグ 1343950](https://bugzil.la/1343950)) をご覧ください。

### API

#### DOM

- `scrollend` イベントに対応しました。これは、ユーザーが {{domxref("Element")}} および {{domxref("Document")}} オブジェクトでスクロールを完了したことを示します。
  詳しくは、[Element: `scrollend` イベント](/ja/docs/Web/API/Element/scrollend_event) および [Document: `scrollend` イベント](/ja/docs/Web/API/Document/scrollend_event) をご覧ください ([Firefox バグ 1797013](https://bugzil.la/1797013)、[Firefox バグ 1803435](https://bugzil.la/1803435))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- WebDriver BiDi の接続の詳細情報を、`WebDriverBiDiActivePort` ではなく`WebDriverBiDiServer.json` に書き込むようになりました。これはポート (`ws_port`) やホスト (`ws_host`) を含みます。このファイルは、Firefox のプロファイルフォルダーに置かれます ([Firefox バグ 1792875](https://bugzil.la/1792875))。
- `session.subscribe` および `session.unsubscribe`を使用して、個々の `contexts` をサブスクライブおよびアンサブスクライブできるようになりました ([Firefox バグ 1723102](https://bugzil.la/1723102))。
- `Node` オブジェクトのシリアライズをサポートしました ([Firefox バグ 1770731](https://bugzil.la/1770731))。
- `exceptions` および `stackTraces` の `columnNumber` を、0 から数え始めるように修正しました ([Firefox バグ 1796073](https://bugzil.la/1796073))。

#### Marionette

- `WebDriver:NewWindow` および `WebDriver:SwitchToWindow` が、新しいウィンドウに正しくフォーカスを当てない不具合を修正しました ([Firefox バグ 1798655](https://bugzil.la/1798655))。
- Windows で Firefox のウィンドウが他のアプリケーションに隠されている場合に、`WebDriver:FindElement` (および類似するコマンド) が失敗する不具合を修正しました ([Firefox バグ 1802473](https://bugzil.la/1802473))。

## アドオン開発者向けの変更点一覧

- Manifest V3 の署名と、AMO で Manifest V3 拡張機能を公開する機能をサポートしました。詳しくは [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/) のブログ記事をご覧ください。以下のプレビュー機能が、すべて利用可能になりました。
  - {{WebExtAPIRef("scripting")}} APIは、Firefox 102 以降、Manifest V2 拡張機能でも利用可能となっています。
  - {{WebExtAPIRef("action")}} API、マニフェストの [`"action"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) キーおよびマニフェストの `commands` キー内の [`_execute_action` 特殊ショートカット](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#特殊なショートカット)。
  - [`"host_permissions"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) マニフェストキー。

- Manifest V3 拡張機能のデフォルトの [Content Security Policy (CSP)](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) を、[`upgrade-insecure-requests` を含む](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3) ように更新しました。これはデフォルトで、すべてのネットワーク要求が `https:` を使用するように更新されることを意味します。`http:` を使用することが必要な拡張機能は、[`content_security_policy`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json キーでデフォルトの CSP を上書きすることで `http:` を使用できます ([Firefox バグ 1797086](https://bugzil.la/1797086))。
- {{WebExtAPIRef("webRequest.SecurityInfo")}} に `secretKeyLength` プロパティを追加しました。これは、ウェブ要求のセキュリティプロパティにある暗号鍵の長さをビット数で表します ([Firefox バグ 1778473](https://bugzil.la/1778473))。
- [拡張機能ボタン](https://support.mozilla.org/en-US/kb/extensions-button) の導入に合わせて、[`action`](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) および [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) マニフェストキーの `default_area` のデフォルト値を `"navbar"` から `"menupanel"` に変更しました ([Firefox バグ 1799947](https://bugzil.la/1799947))。
- {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} および {{WebExtAPIRef("omnibox.SuggestResult")}} の `deletable` プロパティへの対応により、ユーザーがアドレスバーの検索結果を削除した際に拡張機能が反応できるようになりました ([Firefox バグ 1799947](https://bugzil.la/1799947))。
- {{WebExtAPIRef("windows.create()")}} を使用して `panel` または `popup` ウィンドウの位置を決定するための、<code>top</code> および <code>left</code> 引数に対応しました ([Firefox バグ 1271047](https://bugzil.la/1271047))。
