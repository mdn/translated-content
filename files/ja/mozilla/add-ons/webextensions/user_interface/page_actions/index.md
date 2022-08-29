---
title: アドレスバーボタン
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
tags:
  - AddressBarButton
  - ページアクション
  - ユーザーインターフェイス
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---
{{AddonSidebar}}

このユーザーインターフェイスオプションは、ブラウザーのアドレスバーに追加されるボタンで、よく[ページアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)と呼ばれます。ユーザーはボタンをクリックして拡張機能を操作します。

![](address_bar_button.png)

## ページアクションとブラウザーアクション

アドレスバーボタン（またはページアクション）は、ツールバーボタン（またはブラウザーアクション）と似ています。

違いは次の通りです。

- **ボタンの位置**

  - ページアクションは、ブラウザーのアドレスバーの中に表示されます。
  - ブラウザーアクションは、ブラウザーのツールバー内で、アドレスバーの外側に表示されます。

- **ボタンの表示の有無**

  - ページアクションは既定で非表示であり（この既定値は `show_matches` および `hide_matches` [マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)プロパティで変更できます）、 [`pageAction.show()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) および [`pageAction.hide()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) を呼び出すことで、特定のタブを表示と非表示を切り替えることができます。
  - ブラウザーアクションは常に表示されます。

ページアクションは、現在のページに関連するアクションのときに使用します。ブラウザーアクションは、ブラウザー全体または複数のページに関連するアクションを実行するときに使用します。たとえば、以下のようになります。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">種別</th>
      <th scope="col">ブックマークアクション</th>
      <th scope="col">コンテンツアクション</th>
      <th scope="col">タブ操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ページアクション</th>
      <td>このページをブックマーク</td>
      <td>再編集の拡張</td>
      <td>タブの送信</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーアクション</th>
      <td>すべてのブックマークの表示</td>
      <td>広告ブロックの有効化</td>
      <td>すべての開いているタブを同期</td>
    </tr>
  </tbody>
</table>

## ページアクションの設定

ページアクションのプロパティは manifest.json の [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) キーで定義します。

```json
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

唯一不可欠なキーは `default_icon` です。

ページアクションの設定には 2 つの方法があります。[ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)があるものと、ないものです。

- **ポップアップがない**場合、ユーザーがボタンをクリックした時に、拡張機能にイベントが配信され、これを拡張機能が [`pageAction.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked)を使って待ち受けします。

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **ポップアップがある**場合、クリックイベントは配信されません。その代わりに、ユーザーがボタンをクリックした時にポップアップが表示されます。ユーザーはポップアップを操作することができます。ユーザーがポップアップの外をクリックした場合は、自動的に閉じます。ポップアップを作成したり管理したりすることについての詳細は、[ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)の記事を参照してください。

なお、拡張機能が持つことができるページアクションは 1 つだけです。

ページアクションのプロパティはすべて、 [`pageAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)` API を使用してプログラムから変更することができます。

## アイコン

For details on how to create icons to use with your page action, see [Iconography](https://design.firefox.com/photon/visuals/iconography.html) in the [Photon Design System](https://design.firefox.com/photon/index.html) documentation.

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリには、ページアクションを使う拡張機能の例がいくつかあります。 [chill-out](https://github.com/mdn/webextensions-examples/tree/master/chill-out) はポップアップなしのページアクションを使います。
