---
title: Firefox 118 for developers
slug: Mozilla/Firefox/Releases/118
l10n:
  sourceCommit: 7ac593ab3dc07119665f7988539f869d810a499e
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 118 の変更点をまとめています。Firefox 118 は、米国時間 2023 年 9 月 26 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement('search')}} 要素をサポートしました。`<search>` 要素は、検索やフィルタリング操作に使用するすべての要素を包含する役割を持つグループ要素です ([Firefox bug 1824121](https://bugzil.la/1824121))。

### CSS

- {{cssxref("font-synthesis-position")}} プロパティと、{{cssxref("font-synthesis")}} ショートハンドプロパティの値 `position` をサポートしました。これらは {{cssxref("font-variant-position")}} を使用しているときに、上付き文字や下付き文字のグリフを持たないフォントでそれらを無効にすることができます ([Firefox bug 1849010](https://bugzil.la/1849010))。
- 以下の CSS [数学関数](/ja/docs/Web/CSS/CSS_Functions#math_functions) をサポートしました: [`abs()`](/ja/docs/Web/CSS/abs)、[`sign()`](/ja/docs/Web/CSS/sign)、[`round()`](/ja/docs/Web/CSS/round)、[`mod()`](/ja/docs/Web/CSS/mod)、[`rem()`](/ja/docs/Web/CSS/rem)、[`pow()`](/ja/docs/Web/CSS/pow)、[`sqrt()`](/ja/docs/Web/CSS/sqrt)、[`hypot()`](/ja/docs/Web/CSS/hypot)、[`log()`](/ja/docs/Web/CSS/log)、[`exp()`](/ja/docs/Web/CSS/exp) (Firefox bug [1814589](https://bugzil.la/1814589))。
- CSS [`font-size-adjust`](/ja/docs/Web/CSS/font-size-adjust) プロパティの新しいキーワード `from-font` で、最初に使用可能なフォントから望まれた `<font-metric>` を取得できるようになりました (Firefox bug [1708240](https://bugzil.la/1708240))。
- CSS の [`transform-box`](/ja/docs/Web/CSS/transform-box) プロパティで、値 `content-box` および `stroke-box` をサポートしました。値 `content-box` は [コンテンツボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成) を参照ボックスとして使用します。また、値 `stroke-box` は SVG の図形を包含するストロークのバウンディングボックスを参照ボックスとして使用します (Firefox bug [1819464](https://bugzil.la/1819464))。
- CSS [`font-size-adjust`](/ja/docs/Web/CSS/font-size-adjust) プロパティで、最初に使用可能なフォントから望まれた `<font-metric>` を取得できるキーワード `from-font` をサポートしました (Firefox bug [1708240](https://bugzil.la/1708240))。

### JavaScript

変更なし。

### HTTP

- HTTP [`Permissions-Policy`](/ja/docs/Web/HTTP/Headers/Permissions-Policy) ヘッダーの [`publickey-credentials-get`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) ディレクティブをサポートしました。これはクロスオリジンのインラインフレームで、公開鍵証明書を取得するために [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) インターフェイスを使用可能にします ([Firefox bug 1460986](https://bugzil.la/1460986))。

### MathML

- [`<semantics>`](/ja/docs/Web/MathML/Element/semantics) および [`<maction>`](/ja/docs/Web/MathML/Element/maction) 要素が、デフォルトで最初の子要素のみ表示するようになりました。設定項目 `mathml.legacy_maction_and_semantics_implementations.disabled` を削除しました (Firefox bug [1788223](https://bugzil.la/1788223))。
- [`mathvariant`](/ja/docs/Web/MathML/Element/mi#mathvariant) で、`normal` を除くすべての値が非推奨になりました。また、この属性を使う要素が `<mi>` に限定されました (Firefox bug [1845461](https://bugzil.la/1845461))。

### SVG

変更なし。

### セキュリティ

変更なし。

### API

- Windows の <kbd>⊞ Windows ロゴ</kbd> キーおよび macOS の <kbd>Command</kbd> キーについて、[`KeyboardEvent.key`](/ja/docs/Web/API/KeyboardEvent/key) が値 `"OS"` ではなく `"Meta"` を、[`KeyboardEvent.code`](/ja/docs/Web/API/KeyboardEvent/code) が値 `OSLeft`/`OSRight` ではなく `MetaLeft`/`MetaRight` を返すようになりました (Firefox bug [1232918](https://bugzil.la/1232918))。
- {{domxref("RTCRtpTransceiver.currentDirection")}} および {{domxref("RTCRtpTransceiver.direction")}} プロパティで、トランシーバーが停止したかを示す値 `"stopped"` をサポートしました。これは、非推奨の {{domxref("RTCRtpTransceiver.stopped")}} プロパティに代わって使用するべきです ([Firefox bug 1568296](https://bugzil.la/1568296))。
- {{domxref("RTCPeerConnection.getTransceivers()")}} が返す配列で、停止したトランシーバーを除外するようになりました。同様に {{domxref("RTCPeerConnection.getReceivers()")}} および {{domxref("RTCPeerConnection.getSenders()")}} が、停止したトランシーバーに関連づけられたレシーバーおよびセンダーを除外します ([Firefox bug 1568296](https://bugzil.la/1568296))。
- [`TextMetrics.emHeightDescent`](/ja/docs/Web/API/TextMetrics/emHeightDescent) および [`TextMetrics.emHeightAscent`](/ja/docs/Web/API/TextMetrics/emHeightAscent) プロパティをサポートしました (Firefox bug [1841692](https://bugzil.la/1841692))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 一般

- WebDriver BiDi および Marionette で、返されたユーザープロンプトの文字列が空になる現象を引き起こす Android の内部競合を修正しました ([Firefox bug 1848167](https://bugzil.la/1848167))。
- Marionette の `WebDriver:PerformActions` コマンドおよび WebDriver BiDi の `browsingContext.performActions` コマンドで、高解像度ディスプレイが接続された環境で `wheel` 入力ソースによるスクロールが失敗する問題を修正しました ([Firefox bug 1849229](https://bugzil.la/1849229))。

#### WebDriver BiDi

- ユーザーが指定したバックグラウンドのタブをフォアグラウンドに移動できるコマンド [`browsingContext.activate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate) を追加しました ([Firefox bug 1841004](https://bugzil.la/1841004))。
- 表示された `alert`、`confirm` または `prompt` 型のユーザープロンプトを受け入れるか拒否できるコマンド [`browsingContext.handleUserPrompt`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt) を追加しました ([Firefox bug 1824197](https://bugzil.la/1824197))。
- `alert`、`confirm` または `prompt` 型のユーザープロンプトが開いたときに発生するイベント [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) を追加しました ([Firefox bug 1824224](https://bugzil.la/1824224))。
- `event` メッセージまたはコマンドの成功状態を識別するためにクライアントへ返される JSON ペイロードに、`type` フィールドを追加しました。これは `success` または `error` のいずれかになります ([Firefox bug 1844009](https://bugzil.la/1844009))。

#### Marionette

- すべての [Web Authentication 拡張機能コマンド](https://www.w3.org/TR/webauthn-2/#sctn-automation) をサポートしました。これは、ユーザーが公開鍵暗号の資格情報で自身を認証できるようにします ([Firefox bug 1846574](https://bugzil.la/1846574))。

## アドオン開発者向けの変更点一覧

### 廃止

- Manifest V3 拡張機能向けの、[`action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)、[`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)、[`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)、[`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) マニフェストキーにおける [`browser_style`](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) のサポートを廃止しました ([Firefox bug 1830711](https://bugzil.la/1830711))。Manifest V3 拡張機能で `browser_style` から移行するための情報について、詳しくは [Browser Styles' Manifest v3 migration](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(117)}}
