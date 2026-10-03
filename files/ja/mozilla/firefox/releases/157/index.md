---
title: Firefox 157 release notes for developers (Stable)
short-title: Firefox 157 (Stable)
slug: Mozilla/Firefox/Releases/157
l10n:
  sourceCommit: ac295ae8d3435f587b5233a9fe46bb55d92c1a5d
---

このページでは、開発者に影響する Firefox 157 の変更点をまとめています。
Firefox 157 は、米国時間 [2026 年 9 月 29 日](https://whattrainisitnow.com/release/?version=157) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{cssxref("@supports")}} アットルールの内の [`at-rule()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#at-rule) 関数により、指定した CSS アットルールをブラウザーがサポートしているかを確認できます (例: `@supports at-rule(@scope)`)。これは {{cssxref("@import")}} CSS アットルールの [`supports()`](/ja/docs/Web/CSS/Reference/At-rules/@import#supports-condition) 関数でも動作します ([Firefox bug 2060755](https://bugzil.la/2060755))。
- {{cssxref("overscroll-behavior")}} ショートハンドプロパティおよび {{cssxref("overscroll-behavior-block")}}、{{cssxref("overscroll-behavior-inline")}}、{{cssxref("overscroll-behavior-x")}}、{{cssxref("overscroll-behavior-y")}} ロングハンドプロパティで [`chain`](/ja/docs/Web/CSS/Reference/Properties/overscroll-behavior#chain) 値をサポートしました。`chain` 値はスクロールを別のスクロール領域に連鎖させることができますが、境界に達したときにブラウザーのデフォルトのオーバースクロール動作 ("バウンス" など) は許可しません ([Firefox bug 2036966](https://bugzil.la/2036966))。

### JavaScript

変更なし。

### API

- [WebGPU](/ja/docs/Web/API/WebGPU_API) の `TRANSIENT_ATTACHMENT` [テクスチャ使用タイプ](/ja/docs/Web/API/GPUTexture/usage#value) をサポートしました。これは現在のレンダーパスに限って使用する、メモリー効率が高いアタッチメントを作成できます。関係のあるレンダーパスの操作はタイルメモリーに保持されるため、VRAM 転送が不要になりテクスチャ用の VRAM 割り当てを回避できます ([Firefox bug 2005061](https://bugzil.la/2005061))。

#### DOM

- {{domxref("Animation.reverse()")}} メソッドおよび {{domxref("Animation.playbackRate")}} プロパティが、2 つのケースで[Web Animations](/ja/docs/Web/API/Web_Animations_API) 仕様に準拠するようになりました。第一に、`playbackRate` が `0` であるアニメーションで `reverse()` を呼び出すと、アニメーションを再生するようになりました。これは `playbackRate` を `0` にしたままで、{{domxref("Animation.startTime", "startTime")}} および {{domxref("Animation.currentTime", "currentTime")}} を更新します。以前は、この呼び出しに効果がありませんでした。第二に、[スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations) で `playbackRate` を正の値と負の値の間で切り替えると、アニメーションの `startTime` をタイムラインの反対側の端に反映するようになりました。その結果、逆再生されたアニメーションもスクロール範囲に収まるようになります。以前は `startTime` が変更されないままであり、{{domxref("DocumentTimeline")}} のような時間ベースのタイムラインに限って正しい動作でした。この調整は、アニメーションに `startTime` と有限の継続時間がある場合に適用されます ([Firefox bug 2046973](https://bugzil.la/2046973))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 今後、推奨される設定はシャットダウン中の別の段階で復元されるようになります ([Firefox bug 2066531](https://bugzil.la/2066531))。

#### WebDriver BiDi

- `browser.setDownloadBehavior` コマンドを、`type="allowed"` を指定して呼び出す場合は `destinationFolder` 引数が必須になるように更新しました。
  これにより仕様に準拠します。フォルダーの指定が必須でないデフォルトの動作に戻すためには、クライアントが null を指定して `browser.setDownloadBehavior` を呼び出すことが必要です ([Firefox bug 2069952](https://bugzil.la/2069952))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("alarms.clearAll()")}} が、プロミスをブール値ではなく `undefined` で履行するようになりました ([Firefox bug 2067229](https://bugzil.la/2067229))。

## 実験的なウェブ機能

以下の機能は Firefox 157 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`export * from "mod"` にデフォルトエクスポートを含める**: `javascript.options.experimental.export_star_default`

  [TC39 の export `*` default 提案](https://tc39.es/proposal-export-star-default/) により、現在は除外されているモジュールのデフォルトエクスポートが [`export * from "mod"`](/ja/docs/Web/JavaScript/Reference/Statements/export#re-exporting__aggregating) でも提供されます。
  この設定は Nightly ビルドに限り設定できることに注意してください ([Firefox bug 2065611](https://bugzil.la/2065611))。

- **通知の `navigate` オプション**: `dom.webnotifications.navigate.enabled`

  {{domxref("Notification.Notification", "Notification()")}} コンストラクターおよび {{domxref("ServiceWorkerRegistration.showNotification()")}} の `navigate` オプションは、ユーザーが通知をクリックしたときに開く URL を指定します。これにより、ページを開くためだけのクリックハンドラーが不要になります。新たな読み取り専用の {{domxref("Notification.navigate")}} プロパティが URL を返します。オプションを設定すると、{{domxref("Notification.click_event", "click")}} および {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} イベントが通知に対して発生しなくなります。{{domxref("Notification.actions", "actions")}} オプションの各項目に個別の `navigate` URL を設定することが可能で、未設定のアクションボタンは通知の URL を使用せずに `notificationclick` が発生します ([Firefox bug 2066184](https://bugzil.la/2066184))。

- **解析中の HTML サニタイズ**: `dom.security.sanitizer.while-parsing`

  {{domxref("Element.setHTML()")}} などの [HTML Sanitizer API](/ja/docs/Web/API/HTML_Sanitizer_API) で HTML をサニタイズするメソッドが、はじめにすべてのマークアップを解析して後から結果の DOM ツリーをクリーンアップするのではなく、マークアップを解析しながら不要な要素や属性を削除するようになりました。結果は同じですが、隣接するテキストが複数のテキストノードに分割されるのではなく、1 つのテキストノードになることが異なります ([Firefox bug 2062652](https://bugzil.la/2062652)).

- **Web Crypto の鍵カプセル化**: `dom.webcrypto.encapsulation.enabled`

  [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) で、2 つの当事者が共有の秘密鍵に合意できるアルゴリズムである ML-KEM をサポートしました。これは量子コンピューターによる攻撃に対して安全性を維持するように設計されています。{{domxref("SubtleCrypto")}} へ新たに、{{domxref("CryptoKey.usages", "鍵の用途")}} に一致する `encapsulateKey()`、`encapsulateBits()`、`decapsulateKey()`、`decapsulateBits()` メソッドを追加しており、サポートするアルゴリズム名は `ML-KEM-512`、`ML-KEM-768`、`ML-KEM-1024` です。{{domxref("SubtleCrypto.importKey()")}} および {{domxref("SubtleCrypto.exportKey()")}} も、新たに `raw-public` および `raw-seed` 鍵形式を受け入れます。この機能は、Nightly ビルドではデフォルトで有効です ([Firefox bug 1943614](https://bugzil.la/1943614))。
