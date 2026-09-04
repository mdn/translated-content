---
title: JavaScript API 群
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

WebExtension 用の JavaScript API は拡張機能の[バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)と、その他の拡張機能にバンドルした文書 ([ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)や[ページアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)ポップアップや[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)や[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)や[新規タブページ](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)を含む) で使用できます。いくつかの API は拡張機能の[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)からもアクセスできます ([コンテンツスクリプトガイドの表](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)を見てください)。

もっと強力な API を使うには、拡張機能の `manifest.json` で[パーミッションをリクエストする](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)必要があります。

`browser` 名前空間内で API にアクセスできます。

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

API の多くは非同期で、 {{JSxRef("Promise")}} を返します。

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

let setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

## ブラウザー API の違い

これは Google Chrome の拡張機能システムでは違っていて、`browser` の代わりに `chrome` 名前空間を使い、promise や非同期関数の代わりにコールバックを使っているのに注意してください。移植の助けとして、WebExtensions API の Firefox 実装は `browser` と promise と同様に `chrome` とコールバックもサポートします。Mozilla は `browser` と promise を使うコードが Chrome で変更なく動作する polyfill も書いています: <https://github.com/mozilla/webextension-polyfill>.

Firefox は `chrome` 名前空間の下でコールバックを使う API も実装しています。これにより Chrome 向けのコードをここに文書化された API を使って、Firefox で大部分変更なしに実行させることができます。

すべてのブラウザーがすべての API をサポートしているわけではありません: 詳しくは [JavaScript API のブラウザーサポート](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)をご覧ください。

## 例

JavaScript API の一覧では、短いコード例を用いて API の使用方法を説明しています。これらの例のほとんどは、[Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) 内のコンソールを使って試すことができます。ただし、ToolboxをWeb拡張機能のコンテキストで実行する必要があります。これを行うには、`about:debugging` を開き、**This Firefox** を選択して、インストール済みまたは一時的な拡張機能のいずれかに対して**Inspect** をクリックし、**Console** を開きます。その後、コンソールにサンプルコードを貼り付けて実行できます。

たとえば、このページにある最初のコード例を、Firefox Developer Edition の Toolbox コンソールで実行すると、次のようになります。

![ツールボックスのコンソールから実行されたウェブ拡張機能のコードの一部を示す図](javascript_exercised_in_console.jpg)

## JavaScript API 一覧

下記の JavaScript API の完全な一覧をご覧ください。

{{SubpagesWithSummaries}}
