---
title: Firefox 117 for developers
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 062f3961a28054b72c7d406b46867c87208a68b0
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 117 の変更点をまとめています。Firefox 117 は、米国時間 2023 年 8 月 29 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [CSS Nesting](/ja/docs/Web/CSS/CSS_nesting) モジュールと [`&` ネスティングセレクター](/ja/docs/Web/CSS/Nesting_selector) を Firefox でサポートしました。これは入れ子になった CSS を開発者が書くことを可能にして、CSS スタイルシートの可読性、モジュール性、保守性の向上に役立ちます。また、CSS のファイルサイズの縮小に役立つ可能性もあり、ダウンロードサイズも削減します。([Firefox bug 1835066](https://bugzil.la/1835066)、[Firefox bug 1840781](https://bugzil.la/1840781))

- [`math-style`](/ja/docs/Web/CSS/math-style) および [`math-depth`](/ja/docs/Web/CSS/math-depth) プロパティをサポートしました。また、[`font-size`](/ja/docs/Web/CSS/font-size#値) プロパティの値 `math` もサポートしました ([Firefox bug 1845516](https://bugzil.la/1845516))。

- [`contain-intrinsic-size: auto none`](/ja/docs/Web/CSS/contain-intrinsic-size) の構文をサポートしました。これは、可能であれば最後に記憶した要素のサイズを使用しますが、それ以外の場合は `contain-intrinsic-size: none` にフォールバックすることができます。
  これはグリッドや段組みのレイアウトで、要素を高さ 0px の代わりに、内容物がないかのようにレイアウトすることに役立ちます ([Firefox bug 1835813](https://bugzil.la/1835813))。

### JavaScript

変更なし。

### SVG

- インライン SVG で、`type="module"`、`defer`、`async` 属性を持つ `<script>` 要素をサポートしました。
  SVG で ES モジュールやスクリプトの非同期読み込みを含む、最新の JavaScript 機能を使用することが可能になります ([Firefox bug 1839954](https://bugzil.la/1839954))。

### HTTP

- [Content-Security-Policy](/ja/docs/Web/HTTP/CSP) の `'strict-dynamic'` ソース式が `default-src` ディレクティブに強制されていなかった不具合を修正しました。
  `script-src` が提供されていないときに代替として `default-src` ディレクティブの値を使用することで、動作が仕様書に合致するようになりました ([Firefox bug 1313937](https://bugzil.la/1313937))。

- `Range` ヘッダーが、値が 1 バイトの範囲内である (例: `bytes=100-200`) 場合に [CORS セーフリストリクエストヘッダー](/ja/docs/Glossary/CORS-safelisted_request_header) になります。
  これはプリフライトリクエストが発生しないオリジン間リクエストで `Range` ヘッダーを使用することが可能になり、メディアの要求やダウンロードの再開で役に立ちます ([Firefox bug 1733981](https://bugzil.la/1733981))。

### API

- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} メソッドで、ブラウザーが使用する 2D コンテキストの属性を取得できるようになりました ([Firefox bug 1517786](https://bugzil.la/1517786))。
- {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} 静的メンバーをサポートしました。開発者は任意の反復可能オブジェクトや非同期反復可能オブジェクトから、読み取り可能なストリームを構築することができます ([Firefox bug 1772772](https://bugzil.la/1772772))。
- [WebRTC Encoded Transforms](/ja/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) をサポートしました。ウェブアプリケーションが worker で実行している {{DOMxRef("TransformStream")}} を使用して、受信および発信する WebRTC のエンコードされた動画および音声フレームを編集できます。
  {{domxref("RTCRtpScriptTransform")}}、{{domxref("RTCRtpScriptTransformer")}}、{{domxref("RTCRtpSender.transform")}}、{{domxref("RTCRtpReceiver.transform")}}、{{domxref("RTCEncodedVideoFrame")}}、{{domxref("RTCEncodedAudioFrame")}} インターフェイス、{{domxref("RTCTransformEvent")}} worker、{{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} イベントをサポートしました ([Firefox bug 1631263](https://bugzil.la/1631263))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- ユーザーがすべての WebDriver セッションを終了してブラウザーを閉じることを可能にする `browser.close` コマンドを追加しました ([Firefox bug 1829334](https://bugzil.la/1829334))。
- ユーザーがトップレベルの閲覧コンテキストの寸法を変更することを可能にする `browsingContext.setViewport` コマンドを追加しました ([Firefox bug 1838664](https://bugzil.la/1838664))。
- ドキュメント内のナビゲーションに対して発生する `browsingContext.fragmentNavigated` イベントを追加しました ([Firefox bug 1841039](https://bugzil.la/1841039))。
- `browsingContext.create` コマンドの引数 `background` をサポートしました。これは、新しいコンテキストをバックグラウンドで作成することを強制します。この引数は省略可能で既定値が `false` ですので、`browsingContext.create` はデフォルトで新しいコンテキストをフォアグラウンドで開きます ([Firefox bug 1843507](https://bugzil.la/1843507))。
- `browsingContext.captureScreenshot` コマンドの引数 `clip` をサポートしました。これは、スクリーンショットを指定した領域または要素に制限できます。要素を切り抜くとき、スクリーンショットを取得する前に要素がビューに入るようにスクロールすることができます ([Firefox bug 1840998](https://bugzil.la/1840998))。
- ナビゲーションに関連するすべてのコマンドとイベントが、`navigation` ID を提供するようになりました。これは、特定のナビゲーションを識別する `UUID` です。このプロパティは `browsingContext.navigate` の応答、`browsingContext.load`、`browsingContext.domContentLoaded`、`browsingContext.fragmentNavigated` のイベント、およびナビゲーション要求のために生成されるすべての `network` イベントで使用できます ([Firefox bug 1763122](https://bugzil.la/1763122)、[Firefox bug 1789484](https://bugzil.la/1789484)、[Firefox bug 1805405](https://bugzil.la/1805405))。
- `network` イベントの `headers` および `cookies` が、`network.BytesValue` としてシリアライズされるようになりました。UTF8 でない値のサポートが向上します ([Firefox bug 1842619](https://bugzil.la/1842619))。
- `browsingContext.create` コマンドが、生成したコンテキストが妥当なサイズになるまで待つようになりました ([Firefox bug 1847044](https://bugzil.la/1847044))。

### Developer tools

- ネットワークモニターでプロキシを経由した要求の情報を表示するようになりました。プロキシのアドレス、状態、HTTP バージョンを [ヘッダータブ](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) で表示します ([Firefox bug 1707192](https://bugzil.la/1707192))。

- [計測ツール](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) で選択した領域をキーボードショートカットでリサイズおよび移動できるようになりました。
  矢印キーを押すと選択した領域の移動、<kbd>Ctrl</kbd> + 矢印キー (Mac では <kbd>Cmd</kbd> + 矢印キー) を押すと選択した領域のリサイズになります。
  これらのキーコンビネーションを使用するときに <kbd>Shift</kbd> キーを押し続けると、移動やリサイズを加速します ([Firefox bug 1262782](https://bugzil.la/1262782))。

- ハイライト擬似要素 ([`::highlight()`](/ja/docs/Web/CSS/::highlight)、[`::target-text`](/ja/docs/Web/CSS/::target-text)、[`::spelling-error`](/ja/docs/Web/CSS/::spelling-error)、[`::grammar-error`](/ja/docs/Web/CSS/::grammar-error)、[`::selection`](/ja/docs/Web/CSS/::selection)) でサポートしていないプロパティを、[ページインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) の CSS ルールパネルで報告するようになりました ([Firefox bug 1842157](https://bugzil.la/1842157))。

## アドオン開発者向けの変更点一覧

変更なし。

## 過去のバージョン

{{Firefox_for_developers(116)}}
