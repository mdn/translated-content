---
title: Firefox 92 for developers
slug: Mozilla/Firefox/Releases/92
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 92 の変更点をまとめています。Firefox 92 は 2021 年 9 月 7 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [Time for a review of Firefox 92](https://hacks.mozilla.org/2021/09/time-for-a-review-of-firefox-92/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{cssxref("break-inside")}} プロパティの `avoid-page` および `avoid-column` キーワードをサポートしました ([Firefox バグ 1722945](https://bugzil.la/1722945))。
- {{cssxref("font-size-adjust")}} プロパティの二値構文をサポートしました ([Firefox バグ 1720131](https://bugzil.la/1720131))。
- {{cssxref("@font-face/size-adjust")}} ディスクリプターをサポートしました ([Firefox バグ 1720131](https://bugzil.la/1720131))。
- {{cssxref("accent-color")}} プロパティをサポートしました ([Firefox バグ 1722031](https://bugzil.la/1722031))。
- {{cssxref("font-family")}} プロパティの値 `system-ui` をサポートしました ([Firefox バグ 1226042](https://bugzil.la/1226042))。

### JavaScript

- {{jsxref("Object.hasOwn()")}} を、プロパティがオブジェクトで定義されたものか継承されたものかを確認するために使用できるようになりました ([Firefox バグ 1721149](https://bugzil.la/1721149))。

### HTTP

- {{Glossary("HTTPS RR")}} が使用可能であるときに、Firefox は自動的に HTTP リクエストを HTTPS にアップグレードします。また、HTTPS コネクションを確立するプロセスを最適化するために、_HTTPS RR_ で提供される情報を使用します。これは概念的に、{{HTTPHeader("Alt-Svc")}} ヘッダーを使用することに似ています ([Firefox バグ 1721132](https://bugzil.la/1721132))。

### API

- カスタム要素に `disabledFeatures` 静的プロパティを実装しました ([Firefox バグ 1723396](https://bugzil.la/1723396))。

#### DOM

- [Imperative Slotting API](/ja/docs/Web/API/HTMLSlotElement) ([Shadow Dom API](/ja/docs/Web/API/Web_components/Using_shadow_DOM) の一部) を実装しました ([Firefox バグ 1705141](https://bugzil.la/1705141))。
- {{HTMLElement("input")}} および {{HTMLElement("textarea")}} でテキストの選択が変更されたことを、それぞれ {{domxref("HTMLInputElement.selectionchange_event", "HTMLInputElement")}} および {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}} の `selectionchange` イベントをリッスンすることで監視できるようになりました ([Firefox バグ 1648944](https://bugzil.la/1648944))。

#### Media、WebRTC、Web Audio

- スピーカーやヘッドホンのようなサウンド出力デバイスへのアクセスが、[speaker-selection](speaker-selection) 機能ポリシーで保護されるようになりました ([Firefox バグ 1577199](https://bugzil.la/1577199))。

### WebDriver conformance (Marionette)

- `webSocketUrl` 特性のサポートが向上しました。`true` が渡されて、かつ BiDi がサポートされている場合に、WebDriver BiDi の websocket URL を返すようになりました ([Firefox バグ 1692984](https://bugzil.la/1692984))。

## アドオン開発者向けの変更点

- {{WebExtAPIRef('downloads.download')}}、{{WebExtAPIRef('downloads.DownloadQuery')}}
  {{WebExtAPIRef('downloads.DownloadItem')}} で `cookieStoreId` をサポートしました。{{WebExtAPIRef('downloads.DownloadQuery')}} および {{WebExtAPIRef('downloads.DownloadItem')}} 型に加えて、{{WebExtAPIRef('downloads.search')}} および {{WebExtAPIRef('downloads.erase')}} でのサポートも提供します。ブラウザー拡張機能が、Container タブ ([contextual identities](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)) のような特定の Cookie ストアとダウンロードを関連付けできるようになりました ([Firefox バグ 1669566](https://bugzil.la/1669566))。

## 過去のバージョン

{{Firefox_for_developers(91)}}
