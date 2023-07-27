---
title: サイドバー
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
---

{{AddonSidebar}}

サイドバーはブラウザーウィンドウの横、ウェブページの隣に表示されるペイン（枠）です。サイドバーについて、その指定方法、デザイン、使用例などを説明します。

ブラウザーには、表示するサイドバーを選択するための UI が用意されています。例えば、 Firefox には「表示」→「サイドバー」のメニューがあります。それぞれのブラウザーウィンドウには独自のサイドバーを表示することができ、ウィンドウ内のすべてのタブに表示されます。

ブラウザは、いくつかの組み込みサイドバーを含むことができます。たとえば Firefox には、ブックマークを操作するためのサイドバーが含まれています。

![](bookmarks-sidebar.png)

[`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) というmanifest.json のキーを使って、拡張機能はブラウザーに独自のサイドバーを追加できます。それは組み込みのサイドバーと一緒に一覧表示され、ユーザーが組み込みサイドバーと同じメカニズムで開くことができます。

ブラウザーアクションのポップアップと同様に、サイドバーのコンテンツを HTML 文書で指定することができます。ユーザーがサイドバーを開く時、サイドバーの文書がブラウザーである各ウィンドウへと読み込まれます。各ウィンドウは独立した環境のインスタンスを保持します。新しいウィンドウが開いた時も同様に独自にサイドバー文書を保持します。

{{WebExtAPIRef("sidebarAction.setPanel()")}} 関数を使って特定のタブに文書をセットできます。サイドバーはどこのウィンドウに所属しているのかを、 {{WebExtAPIRef("windows.getCurrent()")}} API を使って実現できます。

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

これは、サイドバーが異なるウィンドウのために異なるコンテンツを表示したい場合に便利です。この例については、 ["annotate-page" の例](https://github.com/mdn/webextensions-examples/tree/master/annotate-page)を参照してください。

サイドバーの文書は、拡張機能のバックグラウンドとポップアップスクリプトが取得するのと同じ特権的な JavaScript API のセットにアクセスすることができます。また、{{WebExtAPIRef("runtime.getBackgroundPage()")}} や {{WebExtAPIRef("runtime.sendNativeMessage()")}} などのメッセージング API を使ってコンテンツのスクリプトやネイティブアプリケーションと連携することが可能です。

サイドバーの文書は、そのブラウザーウィンドウが閉じられたとき、またはユーザーがサイドバーを閉じたときに、アンロードされます。つまり、バックグラウンドページとは異なり、サイドバー文書は常に読み込まれたままであるというわけではありませんが、ブラウザーアクションのポップアップとは異なり、ユーザーがウェブページを走査している間は読み込まれたままであるということです。

サイドバーを定義する拡張機能が最初にインストールされたとき、そのサイドバーは自動的に開かれます。これは、拡張機能がサイドバーを含んでいることをユーザーが理解しやすくするためです。拡張機能がプログラムからサイドバーを開くことはできないことに注意してください。サイドバーはユーザーのみが開くことができます。

## サイドバーの設定

サイドバーを設定するには、 [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) キーを manifest.json に設定して、既定のドキュメントを、既定ののタイトルおよびアイコンとともに設定してください。

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

これら 3 つは同時に、 {{WebExtAPIRef("sidebarAction")}} API を使ってプログラム的に変更可能です。

タイトルとアイコンは、 UI としてブラウザーがサイドバーのリストアップをするときユーザーに示す内容です。例えば Firefox の「表示 → サイドバー」メニューで見ることができます。

## サイドバーのデザイン

サイドバーウェブページを Firefox のスタイルに合わせてデザインする方法については、 [Photon Design System](https://design.firefox.com/photon/index.html) のドキュメントを参照してください。

## 例

GitHub 上の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーに、サイドバーを実装した例として [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page) があります。
