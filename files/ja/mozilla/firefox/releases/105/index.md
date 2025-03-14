---
title: Firefox 105 for developers
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: f5437ee235fabc5188f6ac45b27e54ce1e22615c
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 105 の変更点をまとめています。Firefox 105 は、米国時間 2022 年 9 月 20 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- SVG の定義や [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) 内部のコンテンツなどの埋め込みコンテンツが、OS やブラウザーのテーマ設定ではなくコンテンツを埋め込んでいる要素のテーマ設定を重視するようになりました (両者の設定が異なっている場合があります)。
  特に、埋め込みコンテンツは埋め込み元要素の [`color-scheme`](/ja/docs/Web/CSS/color-scheme) を継承するようになりました。また、埋め込みコンテンツの [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) メディアクエリーは OS やブラウザーレベルの color-scheme 設定ではなく埋め込み元要素の color-scheme の値を重視します ([Firefox バグ 1779457](https://bugzil.la/1779457))。

### JavaScript

- [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)、[`Intl.NumberFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)、[`Intl.PluralRules`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) オブジェクトの `formatRange` および `selectRange` 関数で、範囲の制限を緩和しました。この変更により、負の値を受け入れるようになりました ([Firefox バグ 1780545](https://bugzil.la/1780545))。

### API

#### DOM

- [Encoding API](/ja/docs/Web/API/Encoding_API) の一部である [TextDecoderStream](/ja/docs/Web/API/TextDecoderStream) および [TextEncoderStream](/ja/docs/Web/API/TextEncoderStream) インターフェイスをサポートしました ([Firefox バグ 1486949](https://bugzil.la/1486949))。

- [OffscreenCanvas](/ja/docs/Web/API/OffscreenCanvas) API が、window および [web worker](/ja/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) のどちらのコンテキストでもオフスクリーンで描画できる canvas を提供するようになりました。
  これは、`<canvas>` 要素を DOM から分離することを可能にします。このために [OffscreenCanvasRenderingContext2D](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D) インターフェイスをサポートして、デフォルトで有効にしました ([Firefox バグ 1746110](https://bugzil.la/1746110))。

- [CSS Font Loading API](/ja/docs/Web/API/CSS_Font_Loading_API) を worker スレッドで使用できるようになりました ([Firefox バグ 1072107](https://bugzil.la/1072107))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- IPv6 を優先する DNS 名前解決クライアントを持つシステムで、WebSocket サーバーのホストとして `localhost` を使用したときに接続が失敗しないようになりました ([Firefox バグ 1769994](https://bugzil.la/1769994))。

- `RemoteValue` を、単純な JSON のシリアライズ可能なフィールドを持つプレーンな JS オブジェクトをシリアライズできるように改良しました ([Firefox バグ 1779226](https://bugzil.la/1779226))。

#### Marionette

- `WebDriver:GetElementProperty` が、ウェブコンテンツによって設定されたノードプロパティを返せるようになりました ([Firefox バグ 1398792](https://bugzil.la/1398792))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("scripting")}} を使用して、永続的なスクリプトを定義する機能を追加しました。{{WebExtAPIRef("scripting.RegisteredContentScript")}} の `persistAcrossSessions` プロパティを使用して、永続的なスクリプトを識別します ([Firefox バグ 1751436](https://bugzil.la/1751436))。
- デフォルトで、拡張機能のリソースがほかの拡張機能から読み込まれないようになりました。ほかの拡張機能がリソースを読み込むことを可能にするには、拡張機能の [`web_accessible_resources`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) マニフェストキーに列挙しなければなりません ([Firefox バグ 1711168](https://bugzil.la/1711168))。

## 過去のバージョン

{{Firefox_for_developers(104)}}
