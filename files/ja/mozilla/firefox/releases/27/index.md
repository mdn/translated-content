---
title: Firefox 27 for developers
slug: Mozilla/Firefox/Releases/27
---

{{FirefoxSidebar}}

Gecko 27 を搭載した Firefox 27 は米国時間 2014 年 2 月 4 日にリリースされました。このページでは、開発者に影響する Firefox 27 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- デバッガが、DOM イベントでブレーク可能になりました。
- デバッガパネル内で、{ } ボタンを使用して JavaScript を整形できます。
- インスペクターに、アドオンを必要とせずに要素の HTML を編集する機能を搭載しました。
- インスペクターで、色や背景画像の URL をプレビュー表示します。canvas 要素にマウスポインターを載せた場合も、画像のプレビューを表示します。
- リフローのログを取得します。
- SVG 要素のスタイルが調査可能になりました。([Firefox バグ 921191](https://bugzil.la/921191))
- CSS インスペクターで、url リンクをクリックしたときに画像を見つけられない現象を修正しました ([Firefox バグ 921686](https://bugzil.la/921686))。

詳しくは[こちらの記事](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/)をご覧ください。

### CSS

- CSS {{cssxref("cursor")}} プロパティのキーワード `-moz-grab` および `-moz-grabbing` の接頭辞を外して `grab` および `grabbing` にしました ([Firefox バグ 880672](https://bugzil.la/880672))。
- `-moz-hsla()` および `-moz-rgba()` 表記のサポートを取りやめました。現在は接頭辞のない `hsla()` および `rgba()` のみサポートします ([Firefox バグ 893319](https://bugzil.la/893319))。
- {{cssxref("text-align")}} で、値 "`true`" を実装しました ([Firefox バグ 929991](https://bugzil.la/929991))。
- release 以外のビルドで、`position:sticky` の実験的な実装をデフォルトで有効にしました ([Firefox バグ 902992](https://bugzil.la/902992))。releases ビルドでは、設定項目 `layout.css.sticky.enabled` で `true` への変更が必要です。
- ショートハンドプロパティ {{cssxref("all")}} をサポートしました ([Firefox バグ 920633](https://bugzil.la/920633))。
- グローバル値 {{cssxref("unset")}} をサポートしました。どの CSS プロパティでもリセットできます ([Firefox バグ 921731](https://bugzil.la/921731))。
- HTML の `style` 属性で、今後は中括弧が認められません。`<div style="{ display: none }">` とした場合は Quirks モードで動作していましたが、今後は動作しません [Firefox バグ 915053](https://bugzil.la/915053)。
- {{HTMLElement("fieldset")}} で {{cssxref("overflow")}} プロパティが動作するようになりました ([Firefox バグ 261037](https://bugzil.la/261037))。

### HTML

- デスクトッププラットフォームにおいて、{{HTMLElement("input")}} の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性で値 "color" を実装しました。これは、モバイルプラットフォームですでに利用できていました。
- {{HTMLElement("iframe")}} 要素の [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox) 属性で、`allow-popups` ディレクティブをサポートしました ([Firefox バグ 766282](https://bugzil.la/766282))。
- {{cssxref("mix-blend-mode")}} プロパティを使用した HTML 要素のブレンドを実装しました。設定項目 `layout.css.mix-blend-mode.enabled` を `true` に設定しなければなりません ([Firefox バグ 902525](https://bugzil.la/902525))。

### JavaScript

[EcmaScript 6](/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) の実装が続いています!

- Harmony の [spread operator](http://wiki.ecmascript.org/doku.php?id=harmony:spread) を、関数呼び出しでサポートしました ([Firefox バグ 762363](https://bugzil.la/762363))。
- 数学関数 {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} を実装しました ([Firefox バグ 896264](https://bugzil.la/896264))。
- `yield*` 演算子を実装しました ([Firefox バグ 666396](https://bugzil.la/666396))。
- `MapIterator`、`SetIterator`、`ArrayIterator` の各オブジェクトが、仕様書に一致するようになりました ([Firefox バグ 881226](https://bugzil.la/881226))。
- [for..of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループが `StopIteration` を使用する SpiderMonkey の古い iterator protocol をやめて、ES6 の標準 [iterator protocol](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) に準拠するようになりました。
- {{jsxref("String.match")}} および {{jsxref("String.replace")}} は、{{jsxref("RegExp.lastIndex")}} をリセットするようになりました ([Firefox バグ 501739](https://bugzil.la/501739))。

### インターフェイス/API/DOM

- {{domxref("HTMLInputElement")}} インターフェイスで、2 つの `setRange()` メソッドをサポートしました ([Firefox バグ 850364](https://bugzil.la/850364))。
- {{domxref("HTMLTextAreaElement")}} インターフェイスで、2 つの `setRange()` メソッドをサポートしました ([Firefox バグ 918940](https://bugzil.la/918940))。
- {{domxref("IDBObjectStore")}} に `getAllKeys()` メソッドと `openKeyCursor()` メソッドを追加しました ([Firefox バグ 920633](https://bugzil.la/920633) および [Firefox バグ 920800](https://bugzil.la/920800))。
- {{domxref("HTMLFormControlsCollection")}} インターフェイスを実装しました ([Firefox バグ 913920](https://bugzil.la/913920))。
- {{domxref("CanvasRenderingContext2D")}} インターフェイスで、`getLineDash()` メソッドおよび `setLineDash()` メソッドをサポートしました ([Firefox バグ 768067](https://bugzil.la/768067))。
- {{domxref("HTMLObjectElement")}} インターフェイスに `typeMustMatch` 属性を実装しました ([Firefox バグ 827160](https://bugzil.la/827160))。
- {{domxref("AudioBuffer")}} に `copyFromChannel()` メソッドおよび `copyToChannel()` メソッドを追加しました ([Firefox バグ 915524](https://bugzil.la/915524))。
- `Event.isTrusted()` の偽造が不可能になりました ([Firefox バグ 637248](https://bugzil.la/637248))。
- {{domxref("Navigator.vibrate()")}} メソッドが最終仕様に適合しました。リストが長すぎる、または項目が大きすぎる場合は例外発生ではなく `false` を返すようになりました ([Firefox バグ 884935](https://bugzil.la/884935))。
- グローバルオブジェクトを標準化する取り組みの一環として `StyleRuleChangeEvent`、`StyleSheetApplicableStateChangeEvent`、`StyleSheetChangeEvent` といった非標準のスタイルシート変更イベントのインターフェイスを、Web content で使用不可にしました。また、{{domxref("CSSRuleList")}} の詳細実装である `CSSGroupRuleRuleList` インターフェイスを削除しました ([Firefox バグ 872934](https://bugzil.la/872934) および [Firefox バグ 916871](https://bugzil.la/916871))。
- `atob` はホワイトスペースを無視するようになりました ([Firefox バグ 711180](https://bugzil.la/711180))。
- [WebGL](/ja/docs/Web/API/WebGL_API): `MOZ_` 接頭辞付きの拡張機能は非推奨になりました。これらは将来削除する予定です。接頭辞のない拡張機能のみを使用してください。草案段階の拡張機能を使用するには、`webgl.enable-draft-extensions` を設定してください ([Firefox バグ 924176](https://bugzil.la/924176))。

### MathML

_変更なし。_

### SVG

- {{cssxref("mix-blend-mode")}} プロパティを使用した SVG 要素のブレンドを実装しました。設定項目 `layout.css.mix-blend-mode.enabled` を `true` に設定しなければなりません ([Firefox バグ 902525](https://bugzil.la/902525))。

### Canvas

canvasRenderingContext2D.get/setLineDash を実装しました。([Firefox バグ 768067](https://bugzil.la/768067))

## アドオン開発者と Mozilla 開発者向けの変更点

- `downloads-indicator` ボタンを削除しました。今後は `downloads-button` 要素を使用してください。オーバーレイにそれが読み込まれていることの確認が必要である場合は、ボタンの `indicator` 属性を確認してください。
- `chrome://browser/skin/downloads/indicator.css` スタイルシートは Firefox から参照されません。

## セキュリティ

- セキュリティ向上のため、TLS 1.2 を実装しました。([Firefox バグ 861266](https://bugzil.la/861266))

## 関連情報

- [Firefox 27 リリースノート](http://www.mozilla.jp/firefox/27.0/releasenotes/)
- [Firefox 27 アドオン互換性情報](https://dev.mozilla.jp/2014/01/firefox-27-addon-compatibility/)
- Firefox 27 での [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/marionette/index.html) の[変更点一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27)

### 過去のバージョン

{{Firefox_for_developers('26')}}
