---
title: Firefox 80 for developers
slug: Mozilla/Firefox/Releases/80
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

このページでは、開発者に影響する Firefox 80 の変更点をまとめています。Firefox 80 は、2020 年 8 月 25 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ウェブコンソールの [ヘルパーコマンド](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) `:block` および `:unblock` を使用して、ネットワーク要求をブロックおよびブロック解除できるようになりました ([Firefox バグ 1546394](https://bugzil.la/1546394))。
- ページインスペクターのルールペインで要素に [クラスを追加](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) するとき、既存のクラスをオートコンプリートで提案するようになりました ([Firefox バグ 1492797](https://bugzil.la/1492797))。
- デバッガーが [例外でブレークするとき](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html)、ソースペインのツールチップでスタックトレースを展開するための三角印を表示するようになりました ([Firefox バグ 1643633](https://bugzil.la/1643633))。
- [ネットワークモニターのリスト](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) で、待ち時間のしきい値 (設定可能) を超える "遅い" リクエストに亀のアイコンを表示するようになりました ([Firefox バグ 1648373](https://bugzil.la/1648373))。

### HTML

_変更なし。_

### CSS

- 標準化されて接頭辞がない {{CSSxRef("appearance", "appearance")}} プロパティをサポートしました。既存の `-moz-appearance` および `-webkit-appearance` は、接頭辞がないプロパティの別名になります ([Firefox バグ 1620467](https://bugzil.la/1620467))。

### JavaScript

- ECMAScript 2021 の、[`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文の `export * as namespace` 構文をサポートしました ([Firefox バグ 1496852](https://bugzil.la/1496852))。

### HTTP

- 以前は [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) に (`allow` 属性で) [fullscreen](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen) ディレクティブが適用されていたとき、`allowfullscreen` 属性も与えていなければ動作しませんでした。この問題を修正しました ([Firefox バグ 1608358](https://bugzil.la/1608358))。

### API

#### DOM

- ウェブアニメーション API の合成操作をサポートしました。[`KeyframeEffect.composite`](/ja/docs/Web/API/KeyframeEffect/composite) および [`KeyframeEffect.iterationComposite`](/ja/docs/Web/API/KeyframeEffect/iterationComposite) をご覧ください ([Firefox バグ 1652676](https://bugzil.la/1652676))。

#### 廃止

- [`Window.open()`](/ja/docs/Web/API/Window/open) の`outerHeight` および `outerWidth` 機能を、ウェブコンテンツに公開しないようになりました ([Firefox バグ 1623826](https://bugzil.la/1623826))。

### WebAssembly

- アトミック操作を、非共有メモリーで許可しました ([Firefox バグ 1619196](https://bugzil.la/1619196))。

### WebDriver conformance (Marionette)

- ヘッドレスモードでテストを実行するとき、新しいタブを開くために `WebDriver:NewWindow` を使用すると戻るのが早すぎる問題を修正しました ([Firefox バグ 1653281](https://bugzil.la/1653281))。
- `WebDriver:SwitchToWindow` から引数 `name` を削除しました。これは W3C 準拠モードでサポートされておらず、使用するべきではありません ([Firefox バグ 1588424](https://bugzil.la/1588424))。
- 以下のコマンドで Fission のサポートを始めました: `WebDriver:FindElement`、`WebDriver:FindElements`、`WebDriver:GetElementAttribute`、`WebDriver:GetElementProperty`。
- **既知の問題**: `WebDriver:NewWindow` を使用するか、`window.open()` を呼び出す任意のスクリプトで新しいをタブを開くと、自動的に新しいウィンドウに切り替わります ([Firefox バグ 1661495](https://bugzil.la/1661495))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers}}
