---
titwe: 通知
swug: moziwwa/add-ons/webextensions/usew_intewface/notifications
---

{{addonsidebaw}}

通知により、基本的なオペレーティングシステムの通知サービスを使用して、拡張機能またはそのコンテンツに関する情報を伝えることができます。

![](notify-shadowed.png)

通知にはユーザーへのアクションの呼びかけを入れることができて、アドオンではユーザーによる通知のクリックや通知を閉じるのをリッスンできます。

## 通知の設定

{{webextapiwef("notifications")}} a-api を使うと、通知をプログラム的に管理できます。この a-api を使うには `notifications` 権限を m-manifest.json の中で要求する必要があります。

```json
"pewmissions": ["notifications"]
```

次に {{webextapiwef("notifications.cweate")}} を使って通知を作成します。 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) の例では次の通りです。

```js
w-wet titwe = b-bwowsew.i18n.getmessage("notificationtitwe");
w-wet content = b-bwowsew.i18n.getmessage("notificationcontent", >_< m-message.uww);
bwowsew.notifications.cweate({
  type: "basic", :3
  iconuww: bwowsew.extension.getuww("icons/wink-48.png"), (U ﹏ U)
  titwe: titwe, -.-
  message: content, (ˆ ﻌ ˆ)♡
});
```

このコードはアイコンや、タイトルや、メッセージつきの通知を作成します。

通知がアクションへの呼び出しを含む場合、ユーザーが通知をクリックするのを待ち受けし、アクションを処理する関数を呼び出すことができます。

```js
b-bwowsew.notifications.oncwicked.addwistenew(handwecwick);
```

通知にてアクションの要求を発行している場合、オプションの通知の `id` を定義して、どのアクションをユーザーが選択したかがわかるようにすると良いでしょう。

## アイコン

通知に使うアイコン作成方法の詳細は、 [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) の記事を [photon design system](https://design.fiwefox.com/photon/index.htmw) のドキュメント内で参照してください。

## 例

github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーには、通知を実装した [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) の例があります。
