---
title: Notification.tag
slug: Web/API/Notification/tag
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`tag`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `tag` オプションで指定された通知の識別タグを示します。

通知タグの考え方は、複数の通知が同じタグを共有し、それらを一緒にリンクすることです。ユーザーの画面が膨大な数の類似した通知で埋め尽くされるのを避けるために、一つの通知をプログラム的に別のものと置き換えることができます。

## 値

文字列です。

## 例

[通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API#dealing_with_repeated_notifications)の記事に、タグの使い方の良い例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
