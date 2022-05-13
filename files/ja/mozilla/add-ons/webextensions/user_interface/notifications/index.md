---
title: 通知
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
---
{{AddonSidebar}}

通知により、基本的なオペレーティングシステムの通知サービスを使用して、拡張機能またはそのコンテンツに関する情報を伝えることができます。

![](notify-shadowed.png)

通知にはユーザーへのアクションの呼びかけを入れることができて、アドオンではユーザーによる通知のクリックや通知を閉じるのをリッスンできます。

## 通知の設定

{{WebExtAPIRef("notifications")}} API を使うと、通知をプログラム的に管理できます。この API を使うには `notifications` 権限を manifest.json の中で要求する必要があります。

```json
"permissions": ["notifications"]
```

次に {{WebExtAPIRef("notifications.create")}} を使って通知を作成します。 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) の例では次の通りです。

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
browser.notifications.create({
  "type": "basic",
  "iconUrl": browser.extension.getURL("icons/link-48.png"),
  "title": title,
  "message": content
});
```

このコードはアイコンや、タイトルや、メッセージつきの通知を作成します。

通知がアクションへの呼び出しを含む場合、ユーザーが通知をクリックするのを待ち受けし、アクションを処理する関数を呼び出すことができます。

```js
browser.notifications.onClicked.addListener(handleClick);
```

通知にてアクションの要求を発行している場合、オプションの通知の `id` を定義して、どのアクションをユーザーが選択したかがわかるようにすると良いでしょう。

## アイコン

通知に使うアイコン作成方法の詳細は、 [Iconography](https://design.firefox.com/photon/visuals/iconography.html) の記事を [Photon Design System](https://design.firefox.com/photon/index.html) のドキュメント内で参照してください。

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーには、通知を実装した [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) の例があります。
