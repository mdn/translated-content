---
title: 拡張機能ページ
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
tags:
  - 初心者
  - ユーザーインターフェイス
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
---
{{AddonSidebar()}}

拡張機能には、フォーム、ヘルプ、その他拡張機能が必要とするコンテンツを提供するために、 HTML ページを設置することができます。

![Example of a simple bundled page displayed as a detached panel.](bundled_page_as_panel_small.png)

拡張機能に含められた HTML ページは拡張機能がバックグラウンドで動作するのと同じ特権を持った JavaScript の API を利用できますが、これらのページにはそれぞれのタブ、 JavaScript イベントキュー、グローバル変数があります。

バックグラウンドのページは「隠れた拡張ページ」と考えてください。

## 拡張ページの設置

HTML ファイルと関連づけられた CSS や JavaScript ファイルを拡張機能に含めることができます。これらのファイルはルートに置くこともできますし、サブディレクトリーに分けることもできます。

```
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## 拡張ページの表示尾

拡張ページを表示する際に 2 つの選択肢があります。それは、 {{WebExtAPIRef("windows.create()")}} と {{WebExtAPIRef("tabs.create()")}} です。

`windows.create()` を使うと、例えば、HTML ファイルを分離パネル（アドレスバー、ブックマークバーなどといったブラウザ UI がないウィンドウ）開くことができ、ダイアログのような使い勝手を実現することができます。

```js
let createData = {
  type: "detached_panel",
  url: "panel.html",
  width: 250,
  height: 100
};
let creating = browser.windows.create(createData);
```

ウィンドウが必要なくなったときは、プログラムから閉じることができます。

例えば、以下の例では、ユーザーがボタンをクリックしたときに {{WebExtAPIRef("windows.remove()")}} にウィンドウ の ID を渡しています。

```js
document.getElementById("closeme").addEventListener("click", function(){
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## 拡張ページと履歴

既定では、この方法で開かれたページは普通のウェブページを開いたときと同じように履歴に保存されます。履歴に保存したくない場合は、 {{WebExtAPIRef("history.deleteUrl()")}} を使ってブラウザーから履歴のレコードを削除することができます。

```js
function onVisited(historyItem) {
  if (historyItem.url == browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({url: historyItem.url});
  }
}

browser.history.onVisited.addListener(onVisited);
```

履歴 API を使用するには、 "`history`" [権限](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) を [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルでリクエストする必要があります。

## ウェブページのデザイン

Firefox のスタイルに適合するようなデザインの方法の詳細は、 [Photon Design System](https://design.firefox.com/photon/index.html) および[ブラウザースタイル](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) のドキュメントを参照してください。

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーには、ウィンドウの作成を実装した例である [window-manipulator](https://github.com/mdn/webextensions-examples/tree/master/window-manipulator) が含まれています。
