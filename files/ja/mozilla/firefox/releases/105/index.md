---
title: Firefox 105 for developers
slug: Mozilla/Firefox/Releases/105
tags:
  - "105"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 105 の変更点をまとめています。Firefox 105 は、米国時間 2022 年 9 月 20 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- SVG の定義や [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) 内部のコンテンツなどの埋め込みコンテンツが、OS やブラウザーのテーマ設定ではなくコンテンツを埋め込んでいる要素のテーマ設定を重視するようになりました (両者の設定が異なっている場合があります)。
  特に、埋め込みコンテンツは埋め込み元要素の [`color-scheme`](/ja/docs/Web/CSS/color-scheme) を継承するようになりました。また、埋め込みコンテンツの [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) メディアクエリーは OS やブラウザーレベルの color-scheme 設定ではなく埋め込み元要素の color-scheme の値を重視します ({{bug(1779457)}})。

### JavaScript

変更なし。

### API

#### DOM

- [Encoding API](/ja/docs/Web/API/Encoding_API) の一部である [TextDecoderStream](/ja/docs/Web/API/TextDecoderStream) および [TextEncoderStream](/ja/docs/Web/API/TextEncoderStream) インターフェイスをサポートしました ({{bug(1486949)}})。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- IPv6 を優先する DNS 名前解決クライアントを持つシステムで、WebSocket サーバーのホストとして `localhost` を使用したときに接続が失敗しないようになりました ({{bug("1769994")}})。

- `RemoteValue` を、単純な JSON のシリアライズ可能なフィールドを持つプレーンな JS オブジェクトをシリアライズできるように改良しました ({{bug("1779226")}})。

#### Marionette

- `WebDriver:GetElementProperty` が、ウェブコンテンツによって設定されたノードプロパティを返せるようになりました ({{bug("1398792")}})。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("scripting")}} を使用して、永続的なスクリプトを定義する機能を追加しました。{{WebExtAPIRef("scripting.RegisteredContentScript")}} の `persistAcrossSessions` プロパティを使用して、永続的なスクリプトを識別します ({{bug("1751436")}})。

## 過去のバージョン

{{Firefox_for_developers(104)}}
