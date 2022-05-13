---
title: ツールバーボタン
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
tags:
  - WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
---
{{AddonSidebar}}

このユーザーインターフェイスオプションは、よく[ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)と呼ばれており、 ブラウザーのツールバーに追加されるボタンです。 ユーザーはボタンをクリックして拡張機能とやりとりします。
![](browser-action.png)

ツールバーボタン（ブラウザーアクション）はアドレスバーボタン（ページアクション）とよく似ています。違いと使用する場面ついてのガイダンスは、[ページアクションとブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions#page_actions_and_browser_actions)を参照してください。

## ブラウザーアクションの指定

ブラウザーアクションのプロパティは manifest.json の [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) キーで定義します。

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

唯一不可欠なキーは `default_icon` です。

ブラウザーアクションの指定には 2 つの方法があります。[ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)つきのものと、なしのものです。ポップアップを指定しないと、ユーザーがボタンをクリックした時に、拡張機能にイベントが配信されます。これを拡張機能が [`browserAction.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) を使って待ち受けします。

```js
browser.browserAction.onClicked.addListener(handleClick);
```

ポップアップを指定すると、クリックイベントは配信されません。その代わりに、ユーザーがボタンをクリックした時にポップアップが表示されます。ユーザーはポップアップを操作することができ、ユーザーが範囲外をクリックした時に自動的にポップアップが閉じます。ポップアップを作成、管理することの詳細は[ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)の記事を見てください。

なお、拡張機能が持つことができるブラウザーアクションは 1 つだけです。

ブラウザーアクションのプロパティの多くは、 [`browserAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API 使用してプログラムからも変更できます。

## アイコン

ブラウザーアクションのアイコンの作成方法の詳細は、 [Iconography](https://design.firefox.com/photon/visuals/iconography.html) を [Photon Design System](https://design.firefox.com/photon/index.html) のドキュメントで参照してください。

## 例

Github の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーには、ブラウザーアクションを使う拡張機能の例がいくつかあります。

- [bookmark-it](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it) はポップアップなしのブラウザーアクションを使用します。
- [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) はポップアップ付きのブラウザーアクションを使用します。
