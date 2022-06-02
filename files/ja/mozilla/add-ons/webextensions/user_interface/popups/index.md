---
title: ポップアップ
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
tags:
  - UI
  - ユーザーインターフェイス
  - WebExtensions
  - ポップアップ
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Popups
---
{{AddonSidebar}}

ポップアップは[ツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)や[アドレスバーボタン](/ja/Add-ons/WebExtensions/user_interface/Page_actions)に関連したダイアログです。このページでは、ポップアップの一般的な説明、指定方法、デバッグ、サイズ変更、デザインについて、使用例も含めて解説しています。

![](page_action_popup.png)

ユーザーがボタンをクリックした時、ポップアップが表示されます。ポップアップの外をクリックすると、ポップアップは閉じます。ポップアップは、そこで実行しているスクリプトから [`window.close()`](/ja/docs/Web/API/Window/close) を呼ぶとプログラム的に閉じられます。しかし、拡張機能の JavaScript からプログラム的に開くことはできません。つまりユーザー操作への反応としてだけ開きます。

`"_execute_browser_action"` と `"_execute_page_action"` のショートカットを使って、ポップアップを開くキーボードショートカットを定義できます。 manifest.json の [`commands`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) キーの文書を見てください。

## ポップアップの設定

通常のウェブページと同じく、ポップアップは HTML ファイルで定義され、 CSS や JavaScript も含めることが可能です。ただし、通常のページとは異なり、 JavaScript は [WebExtension API](/ja/Add-ons/WebExtensions/API) のうち、この拡張機能が[権限](/ja/Add-ons/WebExtensions/manifest.json/permissions)を持っているものすべてを使用することができます。

ポップアップの文書はポップアップが表示されるたびに読み込まれて、ポップアップが閉じるたびに解放されます。

HTML ファイルを拡張機能に入れるには、 [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) または [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) キーを manifest.json 内の `"default_popup"` にて指定します。

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

ブラウザーの UI と統一感を持たせるスタイルシートをポップアップに組み込めるようになりました。これを利用するためには、 `"browser_style": true` を [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) または [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) キーで指定してください。

ポップアップにはコンテンツセキュリティポリシーがあり、リソースを読み込むことができるソースを制限したり、 [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) を使用するような安全でない行為を禁止したりすることができます。詳細は[コンテンツセキュリティポリシー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)を参照してください。

## ポップアップのデバッグ

ポップアップのマークアップと JavaScript は、アドオンデバッガーを使ってデバッグできます。しかしポップアップの自動非表示を不可として、ポップアップの外をクリックした時に隠れてしまうのを防ぐ必要があります。[ポップアップのデバッグを読んでください](/ja/Add-ons/WebExtensions/Debugging#debugging_popups)。

## ポップアップのリサイズ

ポップアップはその中身に合わせて自動的にリサイズされます。ブラウザーごとにこのアルゴリズムは違う場合があります。

Firefox では、サイズはポップアップが表示される直前に計算されて、最大で毎秒 10 回の DOM の変更があります。厳格モードの文書では、サイズは [`<body>`](/ja/docs/Web/HTML/Element/body) 要素のレイアウトサイズに基いて計算されます。後方互換モードでは、これは [`<html>`](/ja/docs/Web/HTML/Element/html) 要素です。 Firefox はその要素の好ましい幅を計算して、その幅にリフローして、縦のスクロールがないようにリサイズします。最大で **800x600 ピクセル**の範囲でユーザーの画面に合わせられます。（Firefox 60 以前では [680px まででした](https://bugzilla.mozilla.org/show_bug.cgi?id=1434177)。）ユーザーが[拡張機能のボタンをメニューに動かした](https://support.mozilla.org/ja/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar)り、ツールバーからオーバーフローした場合、ポップアップはメニューのパネル内に出てきて、固定の幅となります。

ポップアップの `width` を CSS で設定する際、 [`<body>`](/ja/docs/Web/HTML/Element/body) に設定し `:root` には設定しないでください。

Firefox Android 57 では、ポップアップは新規タブの通常ページとして表示されます。

## ポップアップのデザイン

Firefox のスタイルに適合するポップアップのウェブページをデザインする方法は、 [Photon Design System](https://design.firefox.com/photon/index.html) のドキュメントを見てください。

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーには、ポップアップ付きブラウザーアクションを使う拡張機能の [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) の例があります。
