---
title: 開発者ツールパネル
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
tags:
  - 初心者
  - ガイド
  - ユーザーインターフェイス
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
---
{{AddonSidebar}}

> **Note:** この機能は Firefox 54 以降で利用できます。

拡張機能が開発者にとって有用なツールを提供する場合、その UI をブラウザーの開発者ツールに新しいパネルとして追加することが可能です。

![Simple example showing the addition of "My panel" to the Developer Tools tabs.](developer_panel_tab.png)

## 開発ツールパネルの設定

開発ツールパネルは [`devtools.panels`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API を使って追加され、特別な開発ツールページから順番に実行されます。

開発ツールのページを追加するには、拡張機能の [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) に [`devtools_page`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) キーを設定して、 拡張機能内のそのページの HTML ファイルの場所を与えます。

```json
"devtools_page": "devtools-page.html"
```

開発ツールのページから、開発ツールパネルに追加するスクリプトを呼び出します。

```html
<body>
  <script src="devtools.js"></script>
</body>
```

スクリプトでは devtools パネルを、パネルのタイトル、アイコン、パネルのコンテンツを提供する HTML ファイルを指定して、作成します。

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels.create(
  "My Panel",           // title
  "icons/star.png",           // icon
  "devtools/panel/panel.html"          // content
).then((newPanel) => {
  newPanel.onShown.addListener(handleShown);
  newPanel.onHidden.addListener(handleHidden);
});
```

拡張機能はインスペクターウィンドウの中で [`devtools.inspectedWindow.eval()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) を使うか、バックグラウンドスクリプトからメッセージを渡してコンテンツスクリプトに挿入することで、コードを実行することができます。この方法のより詳しくは[開発ツールの拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)を参照してください。

## 開発パネルのデザイン

開発パネルのウェブページを Firefox のスタイルに適合させる方法の詳細は [Photon Design System](https://design.firefox.com/photon/index.html) の文書を参照してください。

## アイコン

開発ツールパネルに使うアイコン作成方法の詳細は [Iconography](https://design.firefox.com/photon/visuals/iconography.html) を [Photon Design System](https://design.firefox.com/photon/index.html) のドキュメントで参照してください。

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーには、開発ツールパネルを実装した [devtools-panels](https://github.com/mdn/webextensions-examples/tree/master/devtools-panels/) の例があります。
