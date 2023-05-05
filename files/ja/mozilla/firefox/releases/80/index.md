---
title: Firefox 80 for developers
slug: Mozilla/Firefox/Releases/80
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 80 の変更点をまとめています。Firefox 80 は、2020 年 8 月 25 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ウェブコンソールの [ヘルパーコマンド](/ja/docs/Tools/Web_Console/Helpers) `:block` および `:unblock` を使用して、ネットワーク要求をブロックおよびブロック解除できるようになりました ([Firefox バグ 1546394](https://bugzil.la/1546394))。
- ページインスペクターのルールペインで要素に [クラスを追加](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Viewing_and_changing_classes_on_an_element) するとき、既存のクラスをオートコンプリートで提案するようになりました ([Firefox バグ 1492797](https://bugzil.la/1492797))。
- デバッガーが [例外でブレークするとき](/ja/docs/Tools/Debugger/How_to/Breaking_on_exceptions)、ソースペインのツールチップでスタックトレースを展開するための三角印を表示するようになりました ([Firefox バグ 1643633](https://bugzil.la/1643633))。
- [ネットワークモニターの要求リスト](/ja/docs/Tools/Network_Monitor/request_list#Network_request_columns) で、待ち時間のしきい値 (設定可能) を超える "遅い" 要求に亀のアイコンを表示するようになりました ([Firefox バグ 1648373](https://bugzil.la/1648373))。

### HTML

_変更なし。_

#### 廃止

### CSS

- 標準化されて接頭辞がない {{CSSxRef("appearance", "appearance")}} プロパティをサポートしました。既存の `-moz-appearance` および `-webkit-appearance` は、接頭辞がないプロパティの別名になります ([Firefox バグ 1620467](https://bugzil.la/1620467))。

#### 廃止

### JavaScript

- ECMAScript 2021 の、[`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文の `export * as namespace` 構文をサポートしました ([Firefox バグ 1496852](https://bugzil.la/1496852))。

### HTTP

- 以前は [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) に (`allow` 属性で) [fullscreen](/ja/docs/Web/HTTP/Headers/Feature-Policy/fullscreen) ディレクティブが適用されていたとき、`allowfullscreen` 属性も与えていなければ動作しませんでした。この問題を修正しました ([Firefox バグ 1608358](https://bugzil.la/1608358))。

### API

#### DOM

- Web Animations API の合成操作をサポートしました。[`KeyframeEffect.composite`](/ja/docs/Web/API/KeyframeEffect/composite) および [`KeyframeEffect.iterationComposite`](/ja/docs/Web/API/KeyframeEffect/iterationComposite) をご覧ください ([Firefox バグ 1652676](https://bugzil.la/1652676))。

#### Media、WebRTC、Web Audio

- [Media Session API](/ja/docs/Web/API/Media_Session_API) で [`seekto` アクション](/ja/docs/Web/API/MediaSessionAction#seekto) をサポートしました。コードが再生中のメディアの指定した時間へシークすることを、メディアコントロールが要求できるようにします ([Firefox バグ 1621403](https://bugzil.la/1621403))。
- Media Session API で [`skipad` アクション](/ja/docs/Web/API/MediaSessionAction#skipad) もサポートしました。スキップ機能が存在して、ユーザーのサブスクリプションや権限のレベルで許可されていれば、広告コンテンツをスキップしてメインのメディアコンテンツの再生を継続します ([Firefox バグ 1582569](https://bugzil.la/1582569))。

#### WebGL

- [WebGL 拡張](/ja/docs/Web/API/WebGL_API/Using_Extensions) の {{domxref("KHR_parallel_shader_compile")}} をサポートしました ([Firefox バグ 1536674](https://bugzil.la/1536674))。

#### 廃止

- [`Window.open()`](/ja/docs/Web/API/Window/open) の`outerHeight` および `outerWidth` 機能を、ウェブコンテンツに公開しないようになりました ([Firefox バグ 1623826](https://bugzil.la/1623826))。

### WebAssembly

- Atomic 操作を、非共有メモリーで許可しました ([Firefox バグ 1619196](https://bugzil.la/1619196))。

### WebDriver conformance (Marionette)

- ヘッドレスモードでテストを実行するとき、新しいタブを開くために `WebDriver:NewWindow` を使用すると戻るのが早すぎる問題を修正しました ([Firefox バグ 1653281](https://bugzil.la/1653281))。
- `WebDriver:SwitchToWindow` から引数 `name` を削除しました。これは W3C 準拠モードでサポートされておらず、使用するべきではありません ([Firefox バグ 1588424](https://bugzil.la/1588424))。
- 以下のコマンドで Fission のサポートを始めました: `WebDriver:FindElement`、`WebDriver:FindElements`、`WebDriver:GetElementAttribute`、`WebDriver:GetElementProperty`。
- **既知の問題**: `WebDriver:NewWindow` を使用するか、`window.open()` を呼び出す任意のスクリプトで新しいをタブを開くと、自動的に新しいウィンドウに切り替わります ([Firefox バグ 1661495](https://bugzil.la/1661495))。

## アドオン開発者向けの変更点

_変更なし。_

#### 廃止

## 過去のバージョン

{{Firefox_for_developers(79)}}
