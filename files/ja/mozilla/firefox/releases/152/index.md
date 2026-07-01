---
title: Firefox 152 release notes for developers (Stable)
short-title: Firefox 152 (Stable)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 3305c80f225be0e373313d96841f6bf9a52e314b
---

このページでは、開発者に影響する Firefox 152 の変更点をまとめています。
Firefox 152 は、米国時間 [2026 年 6 月 16 日](https://whattrainisitnow.com/release/?version=152) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ウェブ開発ツールのインスペクターに、HTML のコメントノードの表示を切り替える "コメントを表示する" オプションを追加しました。
  このオプションは [設定パネル](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector) にあります ([Firefox bug 1455294](https://bugzil.la/1455294))。

### HTML

変更なし。

### SVG

- 読み取り専用の {{domxref("SVGTextPathElement.side")}} プロパティをサポートしました。これは、テキストをテキストパスの左側から描画するか右側から描画するかを示します。
  この値は [`<textPath>`](/ja/docs/Web/SVG/Reference/Element/textPath) 要素で対応する [`side`](/ja/docs/Web/SVG/Reference/Attribute/side) 属性を反映します ([Firefox bug 2034371](https://bugzil.la/2034371))。

### CSS

- {{cssxref("field-sizing")}} CSS プロパティは、フォームコントロール要素のサイズ設定の動作を制御できます。このプロパティは値が 2 つあり、`content` は要素が内容物に合わせてサイズを調整できます。また `fixed` は、要素に固定のサイズを設定します ([Firefox bug 2036620](https://bugzil.la/2036620))。

### JavaScript

変更なし。

### API

- {{domxref("PerformanceResourceTiming")}} インターフェイスの {{domxref("PerformanceResourceTiming.firstInterimResponseStart","firstInterimResponseStart")}} および {{domxref("PerformanceResourceTiming.finalResponseHeadersStart","finalResponseHeadersStart")}} プロパティをサポートしました。
  これらはそれぞれ、ブラウザーが要求を送信してから暫定的な HTTP 応答および最終的な HTTP 応答を受け取るまでにかかる時間を測定できます ([Firefox bug 2006340](https://bugzil.la/2006340))。
- {{domxref("AnimationEvent.animation")}} および {{domxref("TransitionEvent.animation")}} プロパティをサポートしました。
  これらは関連づけられたアニメーションへアクセスするための、{{domxref("element.getAnimations()")}} を呼び出してイベントの `animationName` または `propertyName` をフィルタリングするよりも扱いやすい方法を提供します ([Firefox bug 1929118](https://bugzil.la/1929118))。

#### DOM

- 通知アクションをサポートしました。これは {{domxref("ServiceWorkerRegistration.showNotification()")}} の引数 {{domxref("ServiceWorkerRegistration.showNotification#actions", "actions")}} と、{{domxref("Notification")}} インターフェイスの {{domxref("Notification/actions","actions")}} 読み取り専用プロパティおよび [`maxActions`](/ja/docs/Web/API/Notification/maxActions_static) 静的読み取り専用プロパティが含まれます。
  これは端末の通知にアクションボタンを含めて、ボタンが押された場合に反応することができます ([Firefox bug 1959931](https://bugzil.la/1959931))。
- {{domxref("Element.getAnimations()")}} メソッドが、引数 [`options.pseudoElement`](/ja/docs/Web/API/Element/getAnimations#pseudoelement) を受け入れるようになりました。
  これにより `{ subtree: true }` の結果をフィルタリングする代わりに、特定の擬似要素を直接対象にすることができます ([Firefox bug 1935557](https://bugzil.la/1935557))。
- {{domxref("Element.requestPointerLock()")}} メソッドで引数 [`options.unadjustedMovement`](/ja/docs/Web/API/Element/requestPointerLock#unadjustedmovement) をサポートしました。
  これにより、コードから OS レベルのマウス加速を無効にして本来のマウス入力を使用することができます。これはマウスの動きを低速かつ正確に制御する必要がある場合に役立ちます ([Firefox bug 2037802](https://bugzil.la/2037802))。

#### Media、WebRTC、Web Audio

- [`RTCEncodedVideoFrame.getMetadata()`](/ja/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) および [`RTCEncodedAudioFrame.getMetadata()`](/ja/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) が返すメタデータに `receiveTime` プロパティが含まれるようになりました。これは [`RTCEncodedVideoFrame()`](/ja/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) および [`RTCEncodedAudioFrame()`](/ja/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) コンストラクターに、引数 `options` のプロパティとして渡すことができます ([Firefox bug 2033420](https://bugzil.la/2033420))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- Marionette および WebDriver BiDi のスクリーンショットコマンドを、許可された最大寸法を遵守するように改良しました ([Firefox bug 2020302](https://bugzil.la/2020302))。

#### WebDriver BiDi

- `webExtension.install` コマンドを、プライベートブラウジングモードが有効な Firefox でウェブ拡張機能のインストールをサポートするように拡張しました ([Firefox bug 1947679](https://bugzil.la/1947679))。
- `browser.setDownloadBehavior` コマンドを、一時ファイルを作成する前にダウンロードの保存先フォルダーを変更できるように改良しました ([Firefox bug 2017252](https://bugzil.la/2017252))。
- 一致するネットワークイベントコレクターがある場合に限ってメモリ内にキャッシュした JavaScript レスポンスを転送するようにネットワークイベントを修正して、不必要なデータ転送を避けるようになりました ([Firefox bug 2018237](https://bugzil.la/2018237))。

#### Marionette

- `WebDriver:Navigate` および `WebDriver:Refresh` コマンドを、ナビゲーションのトリガーに失敗したときにエラーを黙って無視するのではなく、適切に報告するように改良しました ([Firefox bug 2033769](https://bugzil.la/2033769))。

## アドオン開発者向けの変更点一覧

- 拡張機能が {{WebExtAPIRef("tabs.executeScript")}}、{{WebExtAPIRef("tabs.insertCSS")}}、{{WebExtAPIRef("tabs.removeCSS")}}、{{WebExtAPIRef("scripting.executeScript")}}、{{WebExtAPIRef("scripting.insertCSS")}}、{{WebExtAPIRef("scripting.removeCSS")}} によって、`moz-extension:` 文書で動的にコードを実行する機能を削除しました。この機能は Firefox 149 で非推奨にしていました ([Firefox bug 2015559](https://bugzil.la/2015559))。

  代替手段として文書のスクリプトで {{WebExtAPIRef("runtime.onMessage")}} リスナーを登録して、要求したコードを実行するためにメッセージを送信することで、拡張機能が文書内で動的にコードを実行できます。

## 実験的なウェブ機能

以下の機能は Firefox 152 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **WebAssembly JavaScript Promise Integration (JS-PI)**: `javascript.options.wasm_js_promise_integration`

  WebAssembly [JavaScript Promise Integration (JS-PI)](https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md) は、WebAssembly のモジュールと非同期の {{jsxref("Promise")}} ベース JavaScript API の相互運用を可能にします。これにより WebAssembly のコードが JavaScript プロミスを待つ間に一時停止する、およびプロミスが決定したときに再開することができます ([Firefox bug 2015877](https://bugzil.la/2015877))。

- **メディアのエンコード/デコード設定が WebRTC でサポートされているかを確認する**: `media.mediacapabilities.webrtc.enabled`

  エンコード/デコード設定が WebRTC で使用できるかを確認するため、[`MediaCapabilities.decodingInfo()`](/ja/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) および [`MediaCapabilities.encodingInfo()`](/ja/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) のオプションとして `webrtc` タイプを渡すことが可能になりました。
  これは以前 Firefox で別名として使用していた、非標準の [`transmission`](/ja/docs/Web/API/MediaCapabilities/encodingInfo#transmission) タイプを置き換えるものです ([Firefox bug 1825286](https://bugzil.la/1825286))。

- **TC39 Iterator includes 提案**: `javascript.options.experimental.iterator_includes`

  [`Iterator.prototype.includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) メソッドは、イテレーターが指定した値を作成するかを調べます ([Firefox bug 2025779](https://bugzil.la/2025779))。

- **TC39 Intl.Locale info 提案**: `javascript.options.experimental.intl_locale_info`

  [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) を、Nightly ビルドで設定を有効化した場合にサポートしました。
  これは、[`Intl.Locale` で "get" 接頭辞がついたインスタンスメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods) のすべてが含まれます ([Firefox bug 1693576](https://bugzil.la/1693576))。

- **Text モジュールのインポート**: `javascript.options.experimental.import_text`

  `with` 句の [`{ type: "text" }`](/ja/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) で、モジュールのソースを文字列の値としてインポートできます。
  応答のメディアタイプは無視されて、ソースにスクリプトやほかの実行可能なコードが含まれている場合でも、コンテンツはテキストとして解析されます ([Firefox bug 2024854](https://bugzil.la/2024854))。

- **`@keyframes` セレクターの `<timeline-range-name>` 値**: `layout.css.scroll-driven-animations.enabled`

  {{cssxref("@keyframes")}} アットルールで [`<timeline-range-name>`](/ja/docs/Web/CSS/Reference/Values/timeline-range-name) の値をサポートしました。これらの[値](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) は、スクロール連動アニメーションが発生するセグメントを指定できます ([Firefox bug 1824875](https://bugzil.la/1824875))。
