---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
---

{{AddonSidebar}}

拡張機能にグローバルなブラウザー設定の変更を可能にします。この API の各プロパティは {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} オブジェクトで、これはそれぞれの設定の変更能力を提供します。これはグローバルな設定のため、拡張機能で衝突が起きる可能性があります。衝突の処理方法の詳細は [`BrowserSetting.set()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) の文書を見てください。

この API を使うには "browserSettings" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。

## プロパティ

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : ユーザーのイベントに反応して、ウェブページで実行しているコードがポップアップを許可するかどうかを決める
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : ブラウザーキャッシュの有効・無効を決める
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : ブラウザーのホームページの値を読む
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : ブラウザーが画像アニメーションをどう扱うのかを決める
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : ブラウザーの新規タブページ値を読む
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : ウェブサイトが [`Notification`](/ja/docs/Web/API/Notification) Web API を使って通知を表示するのを妨げる

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}
