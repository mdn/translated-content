---
title: JavaScript API 群
slug: Mozilla/Add-ons/WebExtensions/API
---

{{AddonSidebar}}

WebExtension 用の JavaScript API は拡張機能の[バックグラウンドスクリプト](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)と、その他の拡張機能にバンドルした文書 ([ブラウザーアクション](/ja/Add-ons/WebExtensions/Browser_action)や[ページアクション](/ja/Add-ons/WebExtensions/Page_actions)ポップアップや[サイドバー](/ja/Add-ons/WebExtensions/Sidebars)や[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)や[新規タブページ](/ja/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)を含む) で使用できます。いくつかの API は拡張機能の[コンテンツスクリプト](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts)からもアクセスできます ([コンテンツスクリプトガイドの表](/ja/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)を見てください)。

もっと強力な API を使うには、拡張機能の `manifest.json` で[パーミッションをリクエストする](/ja/Add-ons/WebExtensions/manifest.json/permissions)必要があります。

`browser` 名前空間内で API にアクセスできます:

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

API の多くは非同期で、 {{JSxRef("Promise")}} を返します:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

let setCookie = browser.cookies.set({ url: "/" });
setCookie.then(logCookie, logError);
```

これは Google Chrome の拡張機能システムでは違っていて、`browser` の代わりに `chrome` 名前空間を使い、promise や非同期関数の代わりにコールバックを使っているのに注意してください。移植の助けとして、WebExtensions API の Firefox 実装は `browser` と promise と同様に `chrome` とコールバックもサポートします。Mozilla は `browser` と promise を使うコードが Chrome で変更なく動作する polyfill も書いています: <https://github.com/mozilla/webextension-polyfill>.

Firefox は `chrome` 名前空間の下でコールバックを使う API も実装しています。これにより Chrome 向けのコードをここに文書化された API を使って、Firefox で大部分変更なしに実行させることができます。

Microsoft Edge は `browser` 名前空間を使いますが、promise ベースの非同期 API はサポートされていません。Edge では当面、非同期 API はコールバックを使うのが必須です。

すべてのブラウザーがすべての API をサポートしているわけではありません: 詳しくは [JavaScript API のブラウザーサポート](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)をご覧ください。

## JavaScript API 一覧

下記の JavaScript API の完全な一覧をご覧ください:

{{LandingPageListSubpages}}
