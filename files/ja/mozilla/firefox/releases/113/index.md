---
title: Firefox 113 for developers
slug: Mozilla/Firefox/Releases/113
l10n:
  sourceCommit: 14c50bd73f6fee50b35b95b9fbb52387ff443321
---

このページでは、開発者に影響する Firefox 113 の変更点をまとめています。Firefox 113 は、米国時間 2023 年 5 月 9 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color)、[`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab)、[`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch)、[`oklab()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklab)、[`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch)、[`color-mix()`](/ja/docs/Web/CSS/Reference/Values/color_value/color-mix) 関数記法を、[`forced-color-adjust`](/ja/docs/Web/CSS/Reference/Properties/forced-color-adjust) プロパティと合わせてサポートしました。
  関数記法について、詳しくは [CSS color 値](/ja/docs/Web/CSS/Reference/Values/color_value) の文書をご覧ください。
  ([Firefox bug 1352753](https://bugzil.la/1352753)、[Firefox bug 1813497](https://bugzil.la/1813497)、[Firefox bug 1818819](https://bugzil.la/1818819)、[Firefox bug 1824526](https://bugzil.la/1824526))
- [`:nth-child of <selector>` 構文](/ja/docs/Web/CSS/Reference/Selectors/:nth-child#the_of_selector_syntax) で、定義したセレクターにも一致する、`An+B` 規則に基づく子要素のグループを対象にできるようになりました。
  詳しくは ([Firefox bug 1808229](https://bugzil.la/1808229)) をご覧ください。
- [`scripting`](/ja/docs/Web/CSS/Reference/At-rules/@media/scripting) メディア特性をサポートしました。詳しくは ([Firefox bug 1166581](https://bugzil.la/1166581)) をご覧ください。
- [`content`](/ja/docs/Web/CSS/Reference/Properties/content) プロパティで、`<gradient>`、`image-set()`、`url()` を含むすべての画像型をサポートしました。詳しくは ([Firefox bug 1684958](https://bugzil.la/1684958)) をご覧ください。現在は、`::before` および `::after` 擬似セレクターを伴うと `<gradient>` が描画されない不具合があります。詳しくは ([Firefox bug 1832901](https://bugzil.la/1832901)) をご覧ください。

### JavaScript

変更なし。

### API

- [`CanvasRenderingContext2D.reset()`](/ja/docs/Web/API/CanvasRenderingContext2D/reset) および [`OffscreenCanvasRenderingContext2D.reset()`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.reset) をサポートしました。関連づけられたレンダリングコンテキストをデフォルト状態に戻すために使用できます。
  ([Firefox bug 1709347](https://bugzil.la/1709347))
- [Compression Streams API](/ja/docs/Web/API/Compression_Streams_API) をサポートしました。
  この API が提供するインターフェイスは、`gzip` および `deflate` 型式を使用したデータの圧縮や展開に使用できます ([Firefox bug 1823619](https://bugzil.la/1823619))。
- 非推奨かつ非標準の `mozImageSmoothingEnabled` プロパティを無効にしました。
  スケーリングされた画像の平滑化については、[`imageSmoothingEnabled`](/ja/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) プロパティをご覧ください ([Firefox bug 1822955](https://bugzil.la/1822955))。

#### Media、WebRTC、Web Audio

- [AV1 動画コーデック](/ja/docs/Web/Media/Guides/Formats/Video_codecs#av1) を Android で有効化しました。デバイスがサポートしていれば、デコードでハードウェアアクセラレーションを使用します ([Firefox bug 1672276](https://bugzil.la/1672276))。
- 以下の WebRTC メソッド、プロパティおよびディクショナリーをサポートしました: [`RTCRtpSender.getCapabilities()`](/ja/docs/Web/API/RTCRtpSender/getCapabilities_static)、[`RTCRtpReceiver.getCapabilities()`](/ja/docs/Web/API/RTCRtpReceiver/getCapabilities_static)、[`RTCRtpSender.setStreams()`](/ja/docs/Web/API/RTCRtpSender/setStreams)、[`RTCSctpTransport`](/ja/docs/Web/API/RTCSctpTransport)、[`RTCPeerConnection.sctp`](/ja/docs/Web/API/RTCPeerConnection/sctp)、[`RTCMediaSourceStats`](/ja/docs/Web/API/RTCMediaSourceStats)、[`RTCPeerConnection.connectionState`](/ja/docs/Web/API/RTCPeerConnection/connectionState)、[`RTCPeerConnectionStats`](/ja/docs/Web/API/RTCPeerConnectionStats)。
  それぞれに対応するバグ報告は、[Firefox bug 1531460](https://bugzil.la/1531460)、[Firefox bug 1510802](https://bugzil.la/1510802)、[Firefox bug 1278299](https://bugzil.la/1278299)、[Firefox bug 1804678](https://bugzil.la/1804678)、[Firefox bug 1265827](https://bugzil.la/1265827)、[Firefox bug 1531087](https://bugzil.la/1531087) です。

#### 廃止

- 非推奨かつ非標準の `CanvasRenderingContext2D.mozTextStyle` 属性を完全に削除しました。この属性は、これまで設定で無効化していました。([Firefox bug 1294362](https://bugzil.la/1294362))
- 非推奨かつ非標準の `mozRTCPeerConnection`、`mozRTCIceCandidate`、`mozRTCSessionDescription` 属性を完全に削除しました ([Firefox bug 1531812](https://bugzil.la/1531812))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Shadow DOM の内部にある `Node` オブジェクトおよび `Node` オブジェクトの `shadowRoot` プロパティのシリアライズをサポートしました ([Firefox bug 1802137](https://bugzil.la/1802137))。
- `network.responseStarted` および `network.responseCompleted` イベントで、キャッシュされた応答をサポートしました ([Firefox bug 1806802](https://bugzil.la/1806802) および [Firefox bug 1806794](https://bugzil.la/1806794))。
- `browsingContext.domContentLoaded` および `browsingContext.load` イベントが、`document.open()` および `document.close()` を使用するナビゲーションを見落としていた不具合を修正しました ([Firefox bug 1822772](https://bugzil.la/1822772))。
- `script.callFunction` コマンドで引数として未知のオブジェクトが渡されたときに、想定された `no such handle` エラーではなく `invalid argument` エラーが発生していた不具合を修正しました ([Firefox bug 1821039](https://bugzil.la/1821039))。

#### Marionette

- `moz:useNonSpecCompliantPointerOrigin` 能力が非推奨になりました。Firefox 116 で完全に削除する予定です ([Firefox bug 1824911](https://bugzil.la/1824911))。
- `WebDriver:FindElementFromShadowRoot` および `WebDriver:FindElementsFromShadowRoot` コマンドを実装しました ([Firefox bug 1700095](https://bugzil.la/1700095))。
- `WebDriver:GetComputedLabel` および `WebDriver:GetComputedRole` コマンドを実装しました ([Firefox bug 1585622](https://bugzil.la/1585622))。
- `WebDriver:Print` コマンドの `background` 引数をサポートしました ([Firefox bug 1783086](https://bugzil.la/1783086))。
- `WebDriver:Print` コマンドの `orientation` 引数をサポートしました ([Firefox bug 1791819](https://bugzil.la/1791819))。
- `DOMTokenList` インスタンスの不具合を修正して、任意のオブジェクトではなくコレクションとして戻るようになりました ([Firefox bug 1823464](https://bugzil.la/1823464))。

## アドオン開発者向けの変更点一覧

- 拡張機能が同じイベントに対して複数のリスナーを登録した場合に、イベントページが起動すると最初のイベントリスナーだけでなく、すべてのリスナーが呼び出されるようになりました ([Firefox bug 1798655](https://bugzil.la/1798655))。
- {{WebExtAPIRef("declarativeNetRequest")}} API をサポートしました ([Firefox bug 1782685](https://bugzil.la/1782685))。
- [`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーに `gecko_android` サブキーを追加しました。このサブキーで、拡張機能と互換性がある Android 版 Firefox のバージョンの範囲を指定できます ([Firefox bug 1824237](https://bugzil.la/1824237))。

## 過去のバージョン

{{Firefox_for_developers(112)}}
