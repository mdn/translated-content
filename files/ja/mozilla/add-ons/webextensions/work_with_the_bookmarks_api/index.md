---
title: Bookmarks API を使う
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
---

{{AddonSidebar}}

ブックマークにより、ユーザーはウェブページのリストを集めたり編集したりできて、お気に入りに簡単に戻ることができます。Bookmarks API を使って、拡張機能はユーザーができるのとほぼ同じ方法でブックマークを操作できます。

## 権限

Bookmarks API を利用するには、拡張機能の manifest.json ファイルで `"bookmarks"` 権限を要求する必要があります:

```json
"permissions": [
  "bookmarks"
],
```

## 機能

Bookmarks API は、拡張機能にとって、ユーザーがブックマークとその機能でできることを可能にします:

- 基本的なブックマーク項目の操作:

  - 追加 ({{WebExtAPIRef("bookmarks.create")}}).
  - 取得 ({{WebExtAPIRef("bookmarks.get")}}).
  - 更新 ({{WebExtAPIRef("bookmarks.update")}}).
  - 移動 ({{WebExtAPIRef("bookmarks.move")}}).
  - 削除 ({{WebExtAPIRef("bookmarks.remove")}}).
  - 検索 ({{WebExtAPIRef("bookmarks.search")}}).

- 最近追加したブックマークの取得 ({{WebExtAPIRef("bookmarks.getRecent")}}).
- ブックマークのフォルダーツリー操作:

  - ツリー情報取得 ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - ブランチの追加 ({{WebExtAPIRef("bookmarks.create")}}).
  - ノードの削除 ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - ノードの移動 ({{WebExtAPIRef("bookmarks.move")}}).

- ブックマーク (やブックマークツリーフォルダー) のイベント監視:

  - 追加 ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - 変更 ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - 移動 ({{WebExtAPIRef("bookmarks.onMoved")}}.
  - 並び替え ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - 削除 ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- ブックマークインポートの監視、これは他のブックマーク処理をブックマークのインポートが進行する間サスペンドするのに使われます:

  - インポート開始 ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - インポート終了 ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## 実例を一通り見る

Bookmarks API の使い方を理解するため、[bookmark-it](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it) の例を見てみましょう。この例ではツールバーアイコン ({{WebExtAPIRef("browserAction")}}) を追加し、これがクリックされたときに、ブックマークから現在のページを追加や削除します。ページが他の方法でブックマークされている(または削除されている)場合、ページのブックマーク状態を表示するようにアイコンが更新されます。

この動画で拡張機能を表示します:

{{EmbedYouTube("hCDN0FotiFw")}}

### manifest.json

拡張機能を記述する [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/manifest.json):

```json
{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/bookmark-it",
```

アドオンマネージャーの代わりに、拡張機能を表すアイコンを定義します。

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

権限のリクエスト。`"bookmarks"` は Bookmarks API を利用するのに要求されます。アクティブなタブの URL とタイトルを読み込んだり、ページのブックマークを作成/検索するのに、`"tabs"` が要求されます。こうした詳細にアクセスするのに Tabs API が必要なのは、Bookmark API を Tabs API なしに使うのが考えにくいということです。

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

基本的なツールバーボタンの詳細をセットします。ボタン機能の大半は、ページのブックマーク状態が分かった後に、コード内でセットされます。

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

ページのブックマークを追加/削除してツールバーボタンの特色をセットするバックグラウンドスクリプトを定義します。

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

他のバックグラウンドスクリプトと同様に、[background.js](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js) は拡張機能が開始してすぐに実行されます。最初にスクリプトは `updateActiveTab()` を呼び出し、ここでは {{WebExtAPIRef("tabs.query")}} を使って現在のタブの `Tabs` オブジェクトを取得して開始し、そのオブジェクトを `updatetab()` に渡します、コードは次の通り:

```js
var gettingActiveTab = browser.tabs.query({
  active: true,
  currentWindow: true,
});
gettingActiveTab.then(updateTab);
```

`updatetab()` は 最初にアクティブなタブの URL を `isSupportedProtocol()` に渡します:

```js
  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
```

`isSupportedProtocol()` はアクティブタブに表示される URL がブックマークできるかを決めます。タブの URL からプロトコルを抽出するために、拡張機能は [HTMLHyperlinkElementUtils](/ja/docs/Web/API/HTMLHyperlinkElementUtils) を利用して `<a>` 要素にタブの URL を追加してから、`protocol` プロパティを使ってプロトコルを取得します。

```js
function isSupportedProtocol(urlString) {
  var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
  var url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.indexOf(url.protocol) != -1;
}
```

ブックマークがプロトコルをサポートしている場合、拡張機能はタブの URL がブックマーク済みかどうかを決めて、その場合に `updateIcon()` を呼び出します:

```js
      var searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` は、URL がブックマーク済みかどうかにより、ツールバーボタンのアイコンとタイトルをセットします。

```js
function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark
      ? {
          19: "icons/star-filled-19.png",
          38: "icons/star-filled-38.png",
        }
      : {
          19: "icons/star-empty-19.png",
          38: "icons/star-empty-38.png",
        },
    tabId: currentTab.id,
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? "Unbookmark it!" : "Bookmark it!",
    tabId: currentTab.id,
  });
}
```

ツールバーボタンが初期化されると、拡張機能はツールバーボタンのクリックを、`toggleBookmark()` を呼び出して、監視し始めます

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` は、URL がブックマークにあるかどうか探す `updateTabs()` の検索結果を使い、現在の URL のブックマークを削除するか、追加するのかを決定します。

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

ツールバーアイコンを更新するため、拡張機能はブックマークの作成/削除を監視します。この方法の利点は、拡張機能によるブックマーク更新と、拡張機能の外のユーザーの更新の両方を捕捉できることです。

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

最後に、拡張機能はアクティブなタブの URL 変更や、ユーザーが他のタブやウィンドウに移動するのを監視します。これらの動作は閲覧 URL と、拡張機能のツールバーアイコンを変えることがあります。

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## 関連項目

より詳しく学習するには、[Bookmarks API リファレンス](/ja/Add-ons/WebExtensions/API/bookmarks)を見てみてください。
