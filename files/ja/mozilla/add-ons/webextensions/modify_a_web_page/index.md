---
title: ウェブページを変更する
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
---

{{AddonSidebar}}

拡張機能の一般的な事例の１つはウェブページを変更することです。例えば、ページのスタイルを変更、特定の DOM ノードを隠す、別の DOM ノードをページに挿入する、といいでしょう。

WebExtensions API での実現方法は２つあります：

- **手動で定義する:** URL に一致するパターンを定義し、その URL が一致するページにスクリプトを読み込まれるようにします。
- **自動で行う:** JavaScript API を使い、特定のタブでホストされているページにスクリプトを読み込まれるようにします。

どちらの方法のスクリプトも*コンテンツスクリプト*と呼ばれ、拡張機能を構成する他のスクリプトとは異なります:

- WebExtension API の一部のサブセットのみにアクセスできます。
- 読み込まれたウェブページに直接アクセスできます。
- messaging API を使い、拡張機能の残りの部分と対話できます。

この記事ではスクリプトを読み込むそれぞれの方法について説明します。

## URL パターンにマッチしたページを変更する

まず始めに、"modify-page" という新しいディレクトリーを作成します。このディレクトリーで "manifest.json" というファイルを作成し、以下のように記述します。

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]
}
```

[`content_scripts`](/ja/Add-ons/WebExtensions/manifest.json/content_scripts) キーは URL パターンと一致するページにスクリプトを読み込む方法です。この場合、`content_scripts` は <https://developer.mozilla.org/> 以下のすべてのページで "page-eater.js" というスクリプトをロードするようにブラウザーに指示します。

> **メモ:** `content_scripts` の `"js"` プロパティ は配列なので、マッチしているページに複数のスクリプトを挿入できます。これを行うと、ページによってロードされるいくつかのスクリプトと同じように、ページは同じスコープを共有し、配列にリストされている順序でロードされます。

> **メモ:** `content_scripts` キーでは `"css"` プロパティで CSS スタイルシートを挿入することもできます。

次に、"page-eater.js" というファイルを "modify-page" ディレクトリー内に作り、以下のように記述します。

```js
document.body.textContent = "";

var header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

[拡張機能をインストール](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) して [https://developer.mozilla.org/](/) を訪れてみましょう。

{{EmbedYouTube("lxf2Tkg6U1M")}}

> **メモ:** このビデオでは [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) で動作するコンテンツスクリプトを示していますが、現在このサイトではコンテンツスクリプトはブロックされています。

## 自動でページを変更する

ユーザーがあなたに質問してきたとき、まだページを処理している場合どうしたらいいですか？ この例を更新して、ユーザーがコンテキストメニュー項目をクリックしたときにコンテンツスクリプトを挿入しましょう。

始めに、"manifest.json" を以下のように更新してください。

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": ["activeTab", "contextMenus"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

これは `content_scripts` キーを削除し、新たに 2 つのキーを追加しました。

- [`permissions`](/ja/Add-ons/WebExtensions/manifest.json/permissions): スクリプトをページに挿入するには、変更するページへの権限が必要です。[`activeTab` パーミッション](/ja/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission)は現在アクティブなタブへの一時的な権限を取得する方法です。コンテキストメニューに項目を追加するには `contextMenus` パーミッションも必要となります。
- [`background`](/ja/Add-ons/WebExtensions/manifest.json/background): ["バックグラウンドスクリプト"](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) という "background.js" を永続的に読み込み、ここでコンテキストメニューを設定し、コンテンツスクリプトを挿入します。

このファイルを作りましょう。"background.js" というファイルを "modify-page" ディレクトリー内に作り以下のように記述します。

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });
  }
});
```

このスクリプトでは [context menu item](/ja/Add-ons/WebExtensions/API/ContextMenus/create) を作成し、特定の id とタイトルを指定します。(コンテキストメニューに表示するテキスト) 次に、イベントリスナーを設定して、ユーザーがコンテキストメニュー項目をクリックしたときに、それが `eat-page` 項目であるかどうかをチェックします。それが正しければ、[`tabs.executeScript()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API を利用して、"page-eater.js" を挿入します。この API はオプションでタブ ID を引数として取ります、よってタブ ID は省略されています。つまり、スクリプトは現在アクティブなタブに挿入されています。

この時点で拡張機能は以下のようになっています。

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

[拡張機能を再読み込み](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on)して、ページを開きます (任意のページ) コンテキストメニューを有効化し、"Eat this page" を選択します。

{{EmbedYouTube("zX4Bcv8VctA")}}

> **メモ:** このビデオでは [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) で動作するコンテンツスクリプトを示していますが、現在このサイトではコンテンツスクリプトはブロックされています。

## メッセージ

コンテンツスクリプトとバックグラウンドスクリプトはお互いの状態に直接アクセスすることはできません。しかし、メッセージを送ることによる対話をすることができます。一方のエンドはメッセージリスナーを設定し、もう一方のエンドはメッセージを送信します。 次の表は、各側面に関連する API をまとめたものです。

|                | コンテンツスクリプト内                                                                   | バックグラウンドスクリプト内                                                   |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| メッセージ送信 | [`browser.runtime.sendMessage()`](</ja/Add-ons/WebExtensions/API/runtime#sendMessage()>) | [`browser.tabs.sendMessage()`](/ja/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| メッセージ受信 | [`browser.runtime.onMessage`](/ja/Add-ons/WebExtensions/API/runtime/onMessage)           | [`browser.runtime.onMessage`](/ja/Add-ons/WebExtensions/API/runtime#onMessage) |

> **メモ:** このワンオフメッセージを送る通信メソッドに加えて、[メッセージ交換するコネクションベースの方法](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Connection-based_messaging)も使えます。これらのオプションを選択するアドバイスは、[ワンオフメッセージとコネクションベースのメッセージのいずれかを選択する](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Choosing_between_one-off_messages_and_connection-based_messaging)を見てください。

例を更新して、バックグラウンドスクリプトからメッセージを送信する方法を示します。

始めに "background.js" を編集して、次のようにします。

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the extension!",
  });
}

function onExecuted(result) {
  var querying = browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    let executing = browser.tabs.executeScript({
      file: "page-eater.js",
    });
    executing.then(onExecuted);
  }
});
```

次に、"page-eater.js" を挿入し、[`tabs.query()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) を使用し、現在アクティブなタブを取得し、[`tabs.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) を使用し、そのタブにロードされたコンテンツスクリプトにメッセージを送信します。 メッセージにはペイロード `{replacement: "Message from the extension!"}` があります。

次に "page-eater.js" を次のように更新します。

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  var header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

今すぐページを処理する代わりに、コンテンツスクリプトは [`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)を使ってメッセージを取得します。 メッセージが到着すると、コンテンツスクリプトは前と同じコードを実行しますが、置換テキストは `request.replacement` から取得されます。

[`tabs.executeScript()`](/ja/Add-ons/WebExtensions/API/tabs/executeScript) は非同期関数であり、リスナーが "page-eater.js" に追加された後にのみメッセージを送信するために、"page-eater.js" を実行した後に呼び出される `onExecuted` を使用します。

> **メモ:** Ctrl+Shift+J (Mac では Cmd+Shift+J) を押します。もしくは `web-ext run --bc` で [Browser Console](/ja/docs/Tools/Browser_Console) を開きバックグラウンドスクリプトの `console.log` を見ます。または、 [Add-on Debugger](/ja/Add-ons/Add-on_Debugger) を使用して、ブレークポイントを設定することもできます。 現在、[web-ext から 直接 Add-on Debugger を起動する](https://github.com/mozilla/web-ext/issues/759) 方法はありません。

コンテンツスクリプトからバックグラウンドページにメッセージを戻したい場合は、 [`runtime.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) の代わりに [`tabs.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) を使用します。

例：

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> **メモ:** これらの例はすべて JavaScript を注入します。 [`tabs.insertCSS()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) 関数を使用してプログラムで CSS を挿入することもできます。

## 関連項目

- [Content scripts](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) ガイド
- [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest キー
- [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest キー
- [`tabs.executeScript()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- `content_scripts` を使用した例:

  - [borderify](https://github.com/mdn/webextensions-examples/tree/master/borderify)
  - [emoji-substitution](https://github.com/mdn/webextensions-examples/tree/master/emoji-substitution)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/master/page-to-extension-messaging)

- `tabs.executeScript()` を使用した例:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify)
  - [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types)
