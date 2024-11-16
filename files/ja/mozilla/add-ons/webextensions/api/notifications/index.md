---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
---

{{AddonSidebar}}

OS の通知メカニズムを使って、ユーザーへの通知を表示します。この API は OS の通知メカニズムを使うため、OS とユーザー設定によって通知の現れ方やふるまいは変わってきます。

この API を使うには "notifications" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。

すべてのデスクトップ OS で通知は同じ見た目です。次のようなものです:

![](notification.png)

## 型

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : 通知の中身を定義します。
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : 通知の種類。例えば、通知に画像を含められるかなどを定義します。

## 関数

- {{WebExtAPIRef("notifications.clear()")}}
  - : ID に基づいた特定の通知をクリアします。
- {{WebExtAPIRef("notifications.create()")}}
  - : 新規の通知を作成、表示します。
- {{WebExtAPIRef("notifications.getAll()")}}
  - : すべての通知を取得します。
- {{WebExtAPIRef("notifications.update()")}}
  - : 通知を更新します。

## イベント

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : ユーザーが通知内のボタンをクリックしたときに発火します。
- {{WebExtAPIRef("notifications.onClicked")}}
  - : ユーザーが通知内のボタン以外をクリックしたときに発火します。
- {{WebExtAPIRef("notifications.onClosed")}}
  - : 通知が閉じたとき、システムかユーザーいずれかがやめた場合にも、発火します。
- {{WebExtAPIRef("notifications.onShown")}}
  - : 通知が表示されるとすぐに発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
