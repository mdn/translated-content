---
title: Firefox 145 release notes for developers (Stable)
short-title: Firefox 145 (Stable)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 3d368d5bb769e92539d3e185ab5bfb5f66b4ffc4
---

このページでは、開発者に影響する Firefox 145 の変更点をまとめています。
Firefox 145 は、米国時間 [2025 年 11 月 11 日](https://whattrainisitnow.com/release/?version=145) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{cssxref("text-autospace")}} プロパティをサポートしました。これは、異なる文字体系の文字の間の空白を自動調整できます ([Firefox bug 1981086](https://bugzil.la/1981086)、[Firefox bug 1869577](https://bugzil.la/1869577))。

- [`math`](/ja/docs/Web/CSS/Reference/Properties/font-family#math) 総称フォントファミリーを、`font-family` プロパティの値としてサポートしました。これにより、数式で適切なフォントを使用できます ([Firefox bug 1788937](https://bugzil.la/1788937))。

- {{htmlelement("select")}} の内部の {{htmlelement("hr")}} で、`<select>` メニューに区切り線を表示できる機能を実装していました。
  これを Android 版 Firefox でもサポートしました ([Firefox bug 1867045](https://bugzil.la/1867045)、[Firefox bug 1830909](https://bugzil.la/1830909))。

### JavaScript

- Firefox で {{jsxref("Atomics.waitAsync()")}} 静的メソッドをサポートしました。これは、共有メモリの位置の値に基づいてスレッドを同期することができます。
  このメソッドは値を非同期的に待機して、操作の結果を表すオブジェクトを返します。このメソッドはブロッキングせず、メインスレッドで使用できます ([Firefox bug 1884148](https://bugzil.la/1884148))。

### HTTP

- {{httpheader("Integrity-Policy")}} および {{httpheader("Integrity-Policy-Report-Only")}} HTTP ヘッダーを、スクリプトリソースでサポートしました。これにより、ウェブサイトが _スクリプト_ の [サブリソース完全性の保証](/ja/docs/Web/Security/Defenses/Subresource_Integrity) を強制できます。
  ただし、[`endpoints`](/ja/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) キーは未サポートです (違反はコンソールに記録されます)。
  ([Firefox bug 1984973](https://bugzil.la/1984973))

### セキュリティ

- Bounce Tracking Protection (BTP) が有効なとき、デフォルトで "stateless" モードで動作するようになりました。
  "stateless" モードでは、ブラウザーは "bounce" の一部であるサイトでステート情報 (Cookie など) を設定するサイトだけにフラグをつけるのではなく、"bounce" の一部である _すべて_ のサイトにフラグをつけます。BTP がどのように動作するかについて、詳しくは [Bounce tracking mitigations](/ja/docs/Web/Privacy/Guides/Bounce_tracking_mitigations) をご覧ください ([Firefox bug 1990831](https://bugzil.la/1990831))。

### API

- {{domxref("ToggleEvent")}} インターフェイスの {{domxref("ToggleEvent/source", "source")}} プロパティをサポートしました。
  {{htmlelement("button")}} などの HTML 要素によって [ポップオーバー](/ja/docs/Web/API/Popover_API) を表示したり閉じたりする動作が発生すると、ポップオーバーを動作させた要素がイベントの `source` プロパティに入ります ([Firefox bug 1968987](https://bugzil.la/1968987))。
- {{domxref("HTMLElement.style", "HTMLElement")}}、{{domxref("MathMLElement.style", "MathMLElement")}}、{{domxref("SVGElement.style", "SVGElement")}}、{{domxref("CSSStyleRule.style", "CSSStyleRule")}} の `style` プロパティの値、および {{domxref("Window.getComputedStyle()")}} メソッドの戻り値が {{domxref("CSSStyleProperties")}} のインスタンスになりました。以前は {{domxref("CSSStyleDeclaration")}} のインスタンスが返りました ([Firefox bug 1989925](https://bugzil.la/1989925))。

#### Media、WebRTC、Web Audio

- {{domxref("RTCEncodedVideoFrame")}} および {{domxref("RTCEncodedAudioFrame")}} が {{glossary("Serializable object", "シリアライズ可能オブジェクト")}} になりました。また、{{domxref("RTCEncodedAudioFrame/RTCEncodedAudioFrame", "RTCEncodedAudioFrame()")}} および {{domxref("RTCEncodedVideoFrame/RTCEncodedVideoFrame", "RTCEncodedVideoFrame()")}} コンストラクターによる複製をサポートしました。これらの変更によりフレームを複製して、ワーカーとメインスレッドの間で共有することが可能になります ([Firefox bug 1868223](https://bugzil.la/1868223)、[Firefox bug 1975032](https://bugzil.la/1975032))。

- [Matroska コンテナー](/ja/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) で、もっとも一般的に使用されるコーデックをサポートしました: AVC、HEVC、VP8、VP9、AV1、AAC、Opus、Vorbis ([Firefox bug 1991752](https://bugzil.la/1991752))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `emulation.setUserAgentOverride` コマンドを実装しました。これはブラウザーが使用するユーザーエージェント文字列をコンテキストのセット、ユーザーコンテキスト、あるいはグローバルに対してオーバーライドできます ([Firefox bug 1987935](https://bugzil.la/1987935))。
- `browsingContext.downloadEnd` イベントを実装しました。これはダウンロードが終了したときに (成功・失敗のどちらでも) 発生します ([Firefox bug 1970293](https://bugzil.la/1970293))。
- `network.beforeRequestSent` の `destination` プロパティを、トップレベルナビゲーションでは `document` に更新しました ([Firefox bug 1985552](https://bugzil.la/1985552))。
- `browsingContext` のダウンロードイベントで、以前の `browsingContext.navigationStarted` イベントと同じナビゲーション ID を再使用するように更新しました ([Firefox bug 1986938](https://bugzil.la/1986938))。
- ネットワークデータ収集で、レスポンスのボディに含まれている ASCII 以外の文字が適切にエンコードされない不具合を修正しました ([Firefox bug 1986022](https://bugzil.la/1986022))。
- `network.getData` コマンドで、レスポンスボディが空になるリクエストが失敗する不具合を修正しました ([Firefox bug 1986025](https://bugzil.la/1986025))。
- 一部の `network` イベントで、ブロックされていない場合でもブロックされたとするフラグが設定される不具合を修正しました ([Firefox bug 1989919](https://bugzil.la/1989919))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("cookies.set()")}} で作成した Cookie が検証されるようになり、無効な Cookie は拒否されます。この変更は Firefox 142 から Nightly ビルドに限って実装していました ([Firefox bug 1976509](https://bugzil.la/1976509))。

## 実験的なウェブ機能

以下の機能は Firefox 145 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **CSS アンカー位置指定** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly ビルドで [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning) をデフォルトでサポートしました。これは要素を互いに結びつけることができます。
  アンカー位置指定された要素は自身のサイズや位置を、結びつけられたアンカー要素のサイズや位置に対して相対的に設定できます (総合: [Firefox bug 1988224](https://bugzil.la/1988224)、{{cssxref("position-area")}}: [Firefox bug 1924086](https://bugzil.la/1924086)、{{cssxref("@position-try")}} カスタムフォールバック: [Firefox bug 1962598](https://bugzil.la/1962598))。

- **CSS モジュールスクリプト:** (Nightly) および `layout.css.module-scripts.enabled`

  CSS モジュールスクリプトをサポートしました。これは [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) キーワードや `type="css"` を設定した [`type` import 属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with) を使用して、{{domxref("CSSStyleSheet")}} のインスタンスとしてスタイルシートをスクリプトに読み込むことができます ([Firefox bug 1720570](https://bugzil.la/1720570))。

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  CSS の `text-decoration-trim` プロパティをサポートしましたが、現在はデフォルトで無効です。
  これはテキストを重視してテキスト装飾の位置を短縮、延長または移動するために、{{cssxref("text-decoration")}} の始端や終端のオフセットを指定できます ([Firefox bug 1979915](https://bugzil.la/1979915))。

- スクリプトの **Trusted Types API** (Nightly/早期 Beta): `dom.security.trusted_types.enabled`

  早期ベータリリースで [Trusted Types API](/ja/docs/Web/API/Trusted_Types_API) を有効化しました ([Firefox bug 1976656](https://bugzil.la/1976656))。

  以下の変更が含まれます:

- {{domxref("TrustedTypePolicyFactory")}}、{{domxref("TrustedTypePolicy")}}、{{domxref("TrustedHTML")}}、{{domxref("TrustedScript")}}、{{domxref("TrustedScriptURL")}} インターフェイスを追加しました。また、{{domxref("Window/trustedTypes", "Window")}} および {{domxref("WorkerGlobalScope/trustedTypes", "WorkerGlobalScope")}} に `trustedTypes` プロパティを追加しました。
  - {{domxref("Element.innerHTML")}} や {{domxref("Document.write()", "document.write()")}} などの [Injection sink interface](/ja/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) を、文字列と同様に `TrustedHTML`、`TrustedScript`、`TrustedScriptURL` も渡せるように更新しました。
  - {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーの [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)、[`trusted-types`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) ディレクティブおよび [`'trusted-types-eval'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) キーワードをサポートしました。
    これらは、文字列に代わって Trusted types を強制すること、許可する特定のポリシーに名前をつけること、[Trusted Types](/ja/docs/Web/API/Trusted_Types_API) がサポートおよび強制されているときに [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) や同様の関数を使用可能にすることができます。

- **Storage Access のヘッダー** (Nightly): `dom.storage_access.headers.enabled`.
  {{httpheader("Sec-Fetch-Storage-Access")}} および {{httpheader("Activate-Storage-Access")}} HTTP ヘッダーをサポートしました。これは[Storage Access API](/ja/docs/Web/API/Storage_Access_API) を使用する作業を効率化できます ([Firefox bug 1991688](https://bugzil.la/1991688))。
