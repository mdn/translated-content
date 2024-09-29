---
title: Firefox 130 for developers
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 2cca85442dcfa50e82bffb7e2c0dbae4c5158256
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 130 の変更点をまとめています。Firefox 130 は、米国時間 [2024 年 9 月 3 日](https://whattrainisitnow.com/release/?version=130) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- `<details>` 要素の [`name`](/ja/docs/Web/HTML/Element/details#name) 属性で、`<details>` 要素のグループ化が可能になりました。グループの中で同時にひとつの要素だけを開くことができます。これにより、JavaScript を使用せずに排他的なアコーディオンを作成できます ([Firefox bug 1856460](https://bugzil.la/1856460)、[Firefox bug 1909613](https://bugzil.la/1909613))。
- [シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM#属性の継承) における動作など、[`dir`](/ja/docs/Web/HTML/Global_attributes/dir) および [`lang`](/ja/docs/Web/HTML/Global_attributes/lang) [グローバル属性](/ja/docs/Web/HTML/Global_attributes) の継承を改良しました ([Firefox bug 1876163](https://bugzil.la/1876163))。

### CSS

- [`hyphens`](/ja/docs/Web/CSS/hyphens) CSS プロパティで、チェコ語とスロバキア語を適切にサポートしました。
  特に、単語が音節で分けられることがなくなりました ([Firefox bug 1908931](https://bugzil.la/1908931))。

### API

- [X25519](/ja/docs/Web/API/SubtleCrypto/deriveKey#x25519) デジタル署名アルゴリズムを [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) でサポートして、{{domxref("SubtleCrypto")}} の {{domxref("SubtleCrypto.deriveKey()", "deriveKey()")}}、{{domxref("SubtleCrypto.deriveBits()", "deriveBits()")}}、{{domxref("SubtleCrypto.generateKey()", "generateKey()")}}、{{domxref("SubtleCrypto.importKey()", "importKey()")}}、{{domxref("SubtleCrypto.exportKey()", "exportKey()")}} メソッドで使用可能になりました ([Firefox bug 1904836](https://bugzil.la/1904836))。
- [Web Codecs API](/ja/docs/Web/API/WebCodecs_API) をデスクトップ版でサポートしました。動画の個々のフレームや音声チャンクに対して、ウェブ開発者が低水準でアクセスできます。Android 版のサポートは Nightly リリースで有効です。新たに [`VideoEncoder`](/ja/docs/Web/API/VideoEncoder)、[`VideoDecoder`](/ja/docs/Web/API/VideoDecoder)、[`EncodedVideoChunk`](/ja/docs/Web/API/EncodedVideoChunk)、[`VideoFrame`](/ja/docs/Web/API/VideoFrame)、[`VideoColorSpace`](/ja/docs/Web/API/VideoColorSpace) インターフェイスをサポートしました ([Firefox bug 1908572](https://bugzil.la/1908572))。

#### 廃止

- {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} および [`WebGL2RenderingContext.drawingBufferColorSpace`](/ja/docs/Web/API/WebGL2RenderingContext) を [Firefox 127](/ja/docs/Mozilla/Firefox/Releases/127) で (実装がなく) 早期リリースしていましたが、削除しました ([Firefox bug 1909559](https://bugzil.la/1909559))。

### WebAssembly

#### 一般

- デフォルトでシステムアドオンが完全に無効化されるようになりました ([Firefox bug 1904310](https://bugzil.la/1904310))。
- Android で、内部プロンプトリスナーが適切なユーザープロンプトを正しく選択するように不具合を修正しました ([Firefox bug 1902264](https://bugzil.la/1902264))。

#### WebDriver BiDi

- ナビゲーションの試行が完了しないときに発生する、`browsingContext.navigationFailed` イベントをサポートしました ([Firefox bug 1846601](https://bugzil.la/1846601))。
- `network.setCacheBehavior` コマンドで、ネットワークキャッシュの動作をグローバルおよび個々のナビゲーブルの両方で同時に定義可能になりました ([Firefox bug 1905307](https://bugzil.la/1905307))。
- `network.responseCompleted` および `network.fetchError` イベントが実際のリクエストが停止したときに発生するようになり、`network.responseCompleted` イベントの前に `browsingContext.domContentLoaded` および `browsingContext.load` イベントが発生する競合状態が解消しました ([Firefox bug 1882803](https://bugzil.la/1882803))。
- Data URL (たとえば背景画像やフェッチ要求のため) を、すべてのネットワークイベントにわたって完全にサポートしました ([Firefox bug 1904343](https://bugzil.la/1904343))。
- `network.continueWithAuth` コマンドを呼び出すごとに、`network.authRequired` イベントが複数回送信される不具合を修正しました ([Firefox bug 1899711](https://bugzil.la/1899711))。

#### Marionette

- 要素がまた表示されていない場合に限りスクロールして表示するように、`WebDriver:ElementSendKeys` の不具合を修正しました ([Firefox bug 1906095](https://bugzil.la/1906095))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("webRequest.getSecurityInfo")}} の引数 `options` が省略可能になりました ([Firefox bug 1909474](https://bugzil.la/1909474))。
- {{WebExtAPIRef("runtime.getURL")}} (および非推奨の {{WebExtAPIRef("extension.getURL")}}) が、追加の正規化を行わずに拡張機能のオリジンを常にパスの先頭へ追加するようになりました。以前は絶対 URL が与えられたときに、相対的な URL ではなく絶対 URL を返していました ([Firefox bug 1795082](https://bugzil.la/1795082))。

## 実験的なウェブ機能

以下の機能は Firefox 130 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **動画フレームのコールバックを要求する:** `media.rvfc.enabled`。

  {{domxref('HTMLVideoElement')}} インターフェイスの {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} メソッドは、新しい動画フレームがコンポジターへ送信されたときに実行するコールバック関数を登録します。これは動画の分析、キャンバスへの描画、外部音声ソースとの同期など、開発者がそれぞれの動画フレームで効率的に処理を行うことを可能にします。このメソッドは、未処理のコールバック要求をキャンセルするために {{domxref('HTMLVideoElement.cancelVideoFrameCallback()')}} へ渡すことができるコールバックハンドラーを返します。
  どちらのメソッドも、Nightly ビルドではデフォルトで使用可能です ([Firefox bug 1800882](https://bugzil.la/1800882))。

- **Reporting API を使用した CSP 違反報告:** `dom.reporting.enabled`。

  [Content Security Policy (CSP)](/ja/docs/Web/HTTP/CSP) 違反の報告に [Reporting API](/ja/docs/Web/API/Reporting_API) が使用可能になりました。
  これは値が `"csp-violation"` である `type` プロパティと {{domxref('CSPViolationReportBody')}} のインスタンスである `body` プロパティを持つ {{domxref('Report')}} オブジェクト、{{httpheader('Content-Security-Policy')}} HTTP レスポンスヘッダーの {{CSP("report-to")}} ディレクティブ、{{httpheader('Reporting-Endpoints')}} HTTP レスポンスヘッダー、{{httpheader('Report-To')}} HTTP レスポンスヘッダーのサポートを含みます。
  この機能はデフォルトで無効です ([Firefox bug 1391243](https://bugzil.la/1391243))。

## 過去のバージョン

{{Firefox_for_developers}}
