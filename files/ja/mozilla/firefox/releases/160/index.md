---
title: Firefox 160 release notes for developers (Stable)
short-title: Firefox 160 (Stable)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 7ba141d212766d3c840c4176f72d39dce1df122e
---

このページでは、開発者に影響する Firefox 160 の変更点をまとめています。
Firefox 160 は、米国時間 [2026 年 11 月 10 日](https://whattrainisitnow.com/release/?version=160) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- `::-webkit-input-placeholder` 擬似要素を {{htmlelement("input")}} および {{htmlelement("textarea")}} 要素のプレースホルダーテキストのスタイル設定に使用するサイトとの互換性を確保するため、この擬似要素を {{cssxref("::placeholder")}} の別名としてサポートしました ([Firefox bug 2083700](https://bugzil.la/2083700))。

### JavaScript

変更なし。

### API

- {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターが [`headers`](/ja/docs/Web/API/WebTransport/WebTransport#headers) オプションを受け入れるようになりました。これは、セッションを確立するための [拡張 `CONNECT`](/ja/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) リクエストにカスタム HTTP ヘッダーを追加します。
  セッションが確立すると、サーバーがレスポンスで送信したヘッダーを {{domxref("WebTransport.responseHeaders")}} プロパティで使用できます ([Firefox bug 2081470](https://bugzil.la/2081470)、[Firefox bug 2033220](https://bugzil.la/2033220))。
- {{domxref("WebTransport.exportKeyingMaterial()")}} メソッドを、現在の仕様に合わせて更新しました。
  これにより `context` 引数が必須になりました。また、新たに [`outputLength`](/ja/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) 引数で、得られるキーマテリアルのバイト数を指定できるようになりました。
  以前は、メソッドが常に 32 バイトを返していました。
  いずれかの引数を省略していたコードは、更新する必要があります ([Firefox bug 2079306](https://bugzil.la/2079306))。
- {{domxref("WebTransportDatagramDuplexStream")}} インターフェイスの {{domxref("WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams", "incomingMaxBufferedDatagrams")}} および {{domxref("WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams", "outgoingMaxBufferedDatagrams")}} プロパティをサポートしました。
  これらは非標準の {{domxref("WebTransportDatagramDuplexStream.incomingHighWaterMark", "incomingHighWaterMark")}} および {{domxref("WebTransportDatagramDuplexStream.outgoingHighWaterMark", "outgoingHighWaterMark")}} を置き換えるもので、非標準のプロパティは削除しました。
  これらのプロパティは読み取り待機中にキューへ保存できる受信データグラムの最大数、およびバックプレッシャーが適用される前に送信キューに保存できる送信データグラムの最大数を表します ([Firefox bug 2023587](https://bugzil.la/2023587))。
- {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターで [`datagramsReadableType`](/ja/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype) オプションをサポートしました。
  このオプションを `bytes` に設定すると、トランスポートの受信データグラムのストリームである {{domxref("WebTransportDatagramDuplexStream.readable", "transport.datagrams.readable")}} が [読み取り可能なバイトストリーム](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams) になります。
  これによりデータグラムごとに新たな {{jsxref("Uint8Array")}} を受け取る代わりに、提供したバッファーに {{domxref("ReadableStreamBYOBReader")}} を使用してそれぞれのデータグラムを読み込み、そのバッファーを再使用することができます ([Firefox bug 2007755](https://bugzil.la/2007755))。
- [Web Speech API](/ja/docs/Web/API/Web_Speech_API) を使用した [端末上の音声認識](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#端末上の音声認識) が、デスクトップ環境で使用可能になりました。40 種類の言語で、デバイス上でのリアルタイム音声文字変換が可能です。
  Android での音声認識、およびリモート (クラウド) での音声認識はサポートしていません ([Firefox bug 2080908](https://bugzil.la/2080908))。

#### 廃止

- 非標準の `MozScrolledAreaChanged` イベントがウェブページで発生しないようになりました。これはページのスクロール可能な領域が変更されたときに、ドキュメントで発生していました。現在は Firefox のユーザーインターフェイスに限り使用可能です。設定項目 `layout.scrolled-area-changed.content.enabled` を `true` に設定することで、ウェブページでこのイベントを再び有効にできます ([Firefox bug 2079865](https://bugzil.la/2079865))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Firefox のすべての WebDriver BiDi ベンダー拡張 (`moz:` コマンド、イベント、引数、機能など) に、機械可読 CDDL を追加しました ([Firefox bug 2057588](https://bugzil.la/2057588))。
- `window.open` によって起動されたプリロードスクリプトから `script.message` イベントを送信したときに、イベントの `context` フィールドが正しいブラウジングコンテキスト ID を返すように修正しました ([Firefox bug 2079905](https://bugzil.la/2079905))。
- `Set-Cookie` レスポンスヘッダーの処理を修正して、`\n` で区切られた値を 1 つに結合した値ではなく個別の項目として表示するようになりました。これは、ほかの "改行で結合された" ヘッダーである `proxy-authenticate` および `www-authenticate` にも適用されます ([Firefox bug 1940389](https://bugzil.la/1940389))。
- 未使用のセキュリティ詳細情報の処理を停止するように、ネットワークイベントの監視機能を更新しました。この処理はページ読み込み時などに、パフォーマンスに目に見える影響を及ぼす可能性がありました ([Firefox bug 2075175](https://bugzil.la/2075175))。
- `script.evaluate` および `script.callFunction` コマンドを、`userActivation: false` を指定して呼び出した場合に既存のユーザーアクティベーションフラグをクリアしないように更新しました ([Firefox bug 2084107](https://bugzil.la/2084107))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("runtime.PlatformInfo")}} が、ARM64 プラットフォームで `arch` の値として `arm64` を返すようになりました。以前は `aarch64` を返していました。これにより、ARM64 プラットフォームで Firefox が返す値が Chrome と一致します ([Firefox bug 2080310](https://bugzil.la/2080310))。

## 実験的なウェブ機能

以下の機能は Firefox 160 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **レンダリングのブロック**: `dom.element.blocking.enabled`

  {{HTMLElement("link",,"blocking")}}、{{HTMLElement("script",,"blocking")}}、{{HTMLElement("style",,"blocking")}} 要素で `blocking="render"` 属性および値をサポートしました。これにより JavaScript で追加されたスクリプトやスタイルシートのようにデフォルトではレンダリングをブロックしない要素を含めて、要素のスタイルが読み込まれるかスクリプトが実行されるまでレンダリングをブロックできます ([Firefox bug 1751383](https://bugzil.la/1751383))。

- **動画および音声の遅延読み込み**: `media.lazy_loading.enabled`

  {{HTMLElement("video", "", "#loading")}} および {{HTMLElement("audio", "", "#loading")}} 要素の `loading` 属性と、これを反映する {{domxref("HTMLMediaElement.loading")}} プロパティをサポートしました。`loading="lazy"` によって、ブラウザーは要素がビューポートに近づくまでメディアの読み込み、動画のポスター画像の読み込み、`autoplay` の自動再生を遅延させます ([Firefox bug 2005072](https://bugzil.la/2005072))。

- **投機ルール: `Speculation-Rules` ヘッダー**: `dom.speculation_rules.enabled`

  {{httpheader("Speculation-Rules")}} HTTP レスポンスヘッダーのサポートを、Nightly においてデフォルトで有効にしました。このヘッダーはインラインの [`<script type="speculationrules">`](/ja/docs/Web/HTML/Reference/Elements/script/type/speculationrules) 要素の代わりとして、[投機ルール](/ja/docs/Web/API/Speculation_Rules_API) を持つ外部ファイルの URL を一覧化します。ヘッダーはトップレベルのドキュメントにのみ適用され、それぞれのファイルは `application/speculationrules+json` MIME タイプで提供することが必要です ([Firefox bug 2020709](https://bugzil.la/2020709))。

- **`CSSNumericValue` 算術メソッド**: `layout.css.typed-om.enabled`

  [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) の {{domxref("CSSNumericValue")}} インターフェイスの {{domxref("CSSNumericValue.add()", "add()")}}、{{domxref("CSSNumericValue.sub()", "sub()")}}、{{domxref("CSSNumericValue.mul()", "mul()")}}、{{domxref("CSSNumericValue.div()", "div()")}} メソッドを Nightly でサポートしました。
  これらはそれぞれ、数値の加算、減算、乗算、除算を行います。たとえば `CSS.px(10).add(CSS.px(5))` は、2 つのピクセル値を加算します。
  結果は、ひとつの単位に簡略化できる場合は {{domxref("CSSUnitValue")}} (この例では `15px`) になり、簡略化できない場合 (たとえば `px` と `%` の加算) は {{domxref("CSSMathSum")}} になります ([Firefox bug 2081689](https://bugzil.la/2081689))。

- **Canvas 2D 色空間**: `gfx.canvas.colorspace.enabled`

  {{domxref("HTMLCanvasElement.getContext()")}} および {{domxref("OffscreenCanvas.getContext()")}} の [`colorSpace`](/ja/docs/Web/API/HTMLCanvasElement/getContext#colorspace) オプションを `2d` コンテキストでサポートしました。{{domxref("CanvasRenderingContext2D.getContextAttributes()")}} は、選択した色空間を返します。画像データにも色空間があり、{{domxref("ImageData.colorSpace")}} プロパティがそれを返します。{{domxref("ImageData.ImageData", "ImageData()")}} コンストラクター、{{domxref("CanvasRenderingContext2D.createImageData()", "createImageData()")}} メソッド、{{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}} メソッドの `colorSpace` で色空間を設定します。サポートされる値は `"srgb"` および `"display-p3"` です。まだピクセルデータは色空間の間で変換されないため、`getImageData()` はどの色空間が要求されても同じピクセルデータを返します ([Firefox bug 1841326](https://bugzil.la/1841326))。
