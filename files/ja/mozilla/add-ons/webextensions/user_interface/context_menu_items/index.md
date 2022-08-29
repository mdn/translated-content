---
title: コンテキストメニュー項目
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---
{{AddonSidebar}}

このユーザーインターフェイスオプションは、ブラウザーのコンテキストメニューに 1 つ以上の項目を追加します。これはユーザーがウェブページを右クリックした時に利用できるコンテキストメニューです。タブも [browser.menus API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) を通じてコンテキストメニューを持つことができます。

![Example of content menu items added by a WebExtension, from the context-menu-demo example](context_menu_example.png)

このオプションは、特定のブラウザーやウェブページのコンテキストに関連する機能を公開するために使用します。例えば、ユーザーが画像をクリックしたときにグラフィックエディターを開く機能を表示したり、ページの一部が選択されたときに、ページの内容を保存する機能を提供したりすることができます。メニューには、ただのメニュー項目、チェックボックス項目、ラジオボタングループ、セパレーターを追加することができます。 {{WebExtAPIRef("contextMenus.create")}} を使ってコンテキストメニュー項目を追加すると、すべてのブラウザータブに表示されますが、 {{WebExtAPIRef("contextMenus.remove")}} で削除して非表示にすることが可能です。

対応しているコンテキストのすべての一覧は {{WebExtAPIRef("menus.ContextType")}} にあり、ブラウザー UI のブックマーク項目など、ウェブページ外のコンテキストも含まれます。例えば、"[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)" 拡張機能は、ユーザーがブックマーク URL を新しいコンテナータブで開くことを可能にするメニュー項目を追加します。

![](extension_context_menu.png)

## コンテキストメニュー項目の指定

コンテキストメニューを、 {{WebExtAPIRef("contextMenus")}} API を使ってブログラムから管理できます。しかし、この API の恩恵を受けるには、 manifest.json にて `contextMenus` 権限を要求する必要があります。

```json
"permissions": ["contextMenus"]
```

次に、拡張機能のバックグラウンドスクリプト内にコンテキストメニューを追加（および更新、削除）することもできます。メニュー項目を作成するには id、タイトル、表示するコンテキストメニューを指定します。

```js
browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);
```

そして、拡張機能はメニュー項目がクリックされるのを待ち受けします。クリックされた項目、クリックされたコンテキスト、クリックされたタブの詳細に関する渡された情報は、適切な拡張機能を呼び出すために使用されます。

```js
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})
```

## アイコン

コンテキストメニューで使用するアイコンの作り方の詳細は、 [Iconography](https://design.firefox.com/photon/visuals/iconography.html) を [Photon Design System](https://design.firefox.com/photon/index.html) のドキュメントで参照してください。

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーには、コンテキストメニュー項目を実装した拡張機能の例が 2 つあります。

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/master/menu-demo) ではブラウザーのコンテキストメニューにいくつかの項目を追加しています。
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types) では、リンクの URL を、プレーンテキストとリッチ HTML としてクリップボードにコピーするコンテキストメニュー項目を追加してます。
