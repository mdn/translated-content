---
title: developer tools の拡張
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
---

{{AddonSidebar}}

> **メモ:** このページでは、Firefox 55 に存在する devtools API について説明しています。この API は[Chrome devtools APIs](https://developer.chrome.com/extensions/devtools)に基づいていますが、まだ Firefox では実装されていないため、ここでは説明していません。現在欠けている機能を確認するには、[devtools API の制限](/ja/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs)を参照してください。

WebExtensions API を使用して、ブラウザの組み込み開発者ツールを拡張できます。 devtools 拡張機能を作成するには、[manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) に "[devtools_page](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" キーを含めます:

```json
"devtools_page": "devtools/devtools-page.html"
```

このキーの値は、拡張機能にバンドルされている HTML ファイルを指す URL です。URL は manifest.json ファイル自体に関連する必要があります。

HTML ファイルは、devtools ページと呼ばれる特別なページを拡張機能で定義します。

## devtools ページ

devtools ページはブラウザの devtools を開くとロードされ、閉じるとアンロードされます。devtools ウィンドウは単一のタブに関連付けられているため、複数の devtools ウィンドウ、つまり複数の devtools ページが同時に存在する可能性が非常に高いことに注意してください。

devtools ページには目に見える DOM はありませんが、[`<script>`](/ja/docs/Web/HTML/Element/Script) タグを使用して JavaScript ソースを含めることができます。ソースは拡張機能自体にバンドルする必要があります。ソースは以下にアクセスできます:

- グローバル [`window`](/ja/docs/Web/API/Window) オブジェクトを介してアクセス可能な通常の DOM API
- コンテンツスクリプトと[同じ WebExtension API](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)
- devtools API:

  - [`devtools.inspectedWindow`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow)
  - [`devtools.network`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.network)
  - [`devtools.panels`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels)

devtools ページは他の WebExtension API にアクセスできず、バックグラウンドページは devtools API にアクセスできないことに注意してください。代わりに、devtools ページとバックグラウンドページは `runtime` メッセージング API を使用して通信する必要があります。ここに例があります:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script src="devtools.js"></script>
  </body>
</html>
```

devtools.js ファイルには、開発ツール拡張機能を作成する実際のコードが保持されます。

## パネルの作成

devtools ウィンドウは、JavaScript デバッガ、ネットワークモニターなどの多数の個別ツールをホストします。上部にあるタブの行により、ユーザーはさまざまなツールを切り替えることができます。各ツールのユーザーインターフェイスをホストするウィンドウは「パネル」と呼ばれます。

`devtools.panels.create()` API を使用して、devtools ウィンドウに独自のパネルを作成できます:

```js
browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(initialisePanel);
    newPanel.onHidden.addListener(unInitialisePanel);
  });
```

これにはパネルのタイトル、アイコン、コンテンツの 3 つの引数が必要です。新しいパネルを表す `devtools.panels.ExtensionPanel` オブジェクトに解決される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

## ターゲットウィンドウとのインタラクション

開発者ツールは常に特定のブラウザタブに添付されます。これは開発者ツールの「ターゲット」または「検出済みウィンドウ」と呼ばれます。[`devtools.inspectedWindow`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow) を使用して、検出されたウィンドウとインタラクションできます。

### ターゲットウィンドウでコードを実行する

[`devtools.inspectedWindow.eval()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval) は、検出されたウィンドウでコードを実行する 1 つの方法を提供します。

これは {{WebExtAPIRef("tabs.executeScript()")}} を使用してコンテンツスクリプトを挿入することに似ていますが、1 つの重要な違いがあります:

- コンテンツスクリプトとは異なり、**`devtools.inspectedWindow.eval()`** を使用してロードされたスクリプトは「[DOM のクリーンビュー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#DOM_access)」を取得**しません**。つまり、ページスクリプトによって行われたページの変更を確認できます。

> **メモ:** DOM のクリーンビューはセキュリティ機能であり、ネイティブ DOM 関数の動作を再定義することにより、悪意のあるページが拡張機能をだますことを防ぐのに役立つことに注意してください。これは eval() を使用する際に非常に注意する必要があることを意味し、可能であれば通常のコンテンツスクリプトを使用する必要があります。

`devtools.inspectedWindow.eval()` を使用してロードされたスクリプトも、コンテンツスクリプトで定義された JavaScript 変数を認識しません。

### コンテンツスクリプトの使用

devtools ドキュメントは {{WebExtAPIRef("tabs.executeScript()")}} に直接アクセスできません。したがって、コンテンツスクリプトを挿入する必要がある場合、devtools ドキュメントはバックグラウンドスクリプトにメッセージを送信してスクリプトの挿入を要求する必要があります。[`devtools.inspectedWindow.tabId`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId) はターゲットタブの ID を提供します。devtools ドキュメントはこれをバックグラウンドスクリプトに渡すことができ、バックグラウンドスクリプトはそれを {{WebExtAPIRef("tabs.executeScript()")}} に渡すことができます:

```js
// devtools-panel.js

const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

window.addEventListener("click", () => {
  browser.runtime.sendMessage({
    tabId: browser.devtools.inspectedWindow.tabId,
    script: scriptToAttach,
  });
});
```

```js
// background.js

function handleMessage(request, sender, sendResponse) {
  browser.tabs.executeScript(request.tabId, {
    code: request.script,
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

ターゲットウィンドウで実行されているコンテンツスクリプトと devtools ドキュメントの間でメッセージを交換する必要がある場合は、{{WebExtAPIRef("runtime.connect()")}} および {{WebExtAPIRef("runtime.onConnect")}} を使用してバックグラウンドページと devtools ドキュメント間の接続を設定することをお勧めします。バックグラウンドページはタブ ID と {{WebExtAPIRef("runtime.Port")}} オブジェクト間のマッピングを維持し、これを使用して 2 つのスコープ間でメッセージをルーティングできます。

![](devtools-content-scripts.png)

## devtools APIs の制限

これらの API は Chrome devtools API に基づいていますが、Chrome と比較して多くの機能がまだありません。このセクションでは、Firefox 54 の時点でまだ実装されていない機能をリストします。devtools API は活発に開発中であり、将来のリリースでそれらのほとんどのサポートを追加する予定です。

### devtools.inspectedWindow

以下はサポートされていません:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

`inspectedWindow.eval()` のオプションはいずれもサポートされていません。

`inspectedWindow.eval()` を使用して挿入されたスクリプトは、コンソールのすべてのコマンドラインヘルパー関数を使用できませんが、 `$0` と `inspect(...)` の両方がサポートされています (Firefox 55 以降)。

### devtools.panels

以下はサポートされていません:

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリには、devtools パネルを使用する拡張機能のいくつかの例が含まれています。

- [devtools-panels](https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/) は devtools パネルを使用します:
