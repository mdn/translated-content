---
title: Chrome との非互換性
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---

{{AddonSidebar}}

Webextension を用いた拡張機能は Chrome や Opera の拡張機能と互換性があるように設計されています。可能な限り、それぞれのブラウザー向けに書かれた拡張機能は最低限の変更で Firefox で実行できるように設計されています。

しかしながら、Firefox は現在、Chrome と Opera でサポートされている機能と API の限られたセットのみをサポートしています。もっと多く機能を追加しようと努めていますが、まだサポートされていない機能もたくさんあり、まったくサポートしないものもいくつかあります。

## JavaScript APIs

### コールバックと chrome.\* ネームスペース

Chrome では、拡張機能は `chrome` ネームスペースを使って特権 JavaScript API にアクセスします:

```js
chrome.browserAction.setIcon({ path: "path/to/icon.png" });
```

WebExtensions は同等の API に `browser` ネームスペースを使ってアクセスします:

```js
browser.browserAction.setIcon({ path: "path/to/icon.png" });
```

多くの API は非同期です。 Chrome では、非同期 API はコールバックを使用して値を返し、{{WebExtAPIRef("runtime.lastError")}}がエラーを通知します:

```js
function logCookie(c) {
  if (chrome.extension.lastError) {
    console.error(chrome.extension.lastError);
  } else {
    console.log(c);
  }
}

chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

同様の WebExtensions API では [promises](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を利用します:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

### Firefox は`chrome`と`browser`の両方のネームスペースをサポート

移植の助けとして、WebExtensions の Firefox 実装は、コールバックを使用した`chrome`を、promise を使用した`browser`と同様にサポートします。これは、多くの Chrome 拡張機能が Firefox でそのまま動作することを意味します。ただし、これは WebExtensions 標準の一部ではなく、準拠するすべてのブラウザーでサポートされているとは限りません。

`browser` と promise を使って拡張機能を書いている場合、Chrome でも動かせるようにする polyfill を開発しました: <https://github.com/mozilla/webextension-polyfill>.

### 部分的にサポートされている API

[ブラウザーの JavaScript API サポート](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)のページには、Firefox でサポートされているすべての API の互換性テーブルが含まれています。特定の API アイテムのサポートに関する警告がある場合は、これらのテーブルにアスタリスク "\*" が表示され、API アイテムのリファレンスページにその警告が説明されています。

このテーブルは、[GitHub で JSON ファイル](https://github.com/mdn/browser-compat-data)として保存された互換性データから生成されます。

このセクションの残りの部分では、テーブルにまだ取り込まれていない互換性の問題について説明します。

#### [notifications](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications)

- `notifications.create()`の `"basic"` [`type`](/ja/Add-ons/WebExtensions/API/notifications/TemplateType)を指定した場合の、 `iconUrl` は Firefox では任意です。Chrome では必須です。
- 通知はユーザーがクリックするとすぐに消去されます。 これは Chrome では当てはまりません。
- `notifications.create()` を複数回連続して呼び出すと、Firefox が通知を一切表示しなくなることがあります。 `chrome.notifications.create()` のコールバック 関数内に入るまでの時間は、後続のスクリプトが実行されるまで待つほど十分な時間ではありません。

#### [proxy](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy)

- この API は Chrome API の設計とはまったく異なります。 Chrome の API を使用すると、拡張機能で PAC ファイルを登録できますが、明示的なプロキシルールを定義することもできます。これは拡張 PAC ファイルを使用しても可能であるため、この API は PAC ファイルのアプローチのみをサポートしています。 この API は Chrome の `proxy` API と互換性がないため、この API は `browser` の名前空間でのみ使用できます。

#### [tabs](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs)

- Firefox では、`tabs.executeScript()` または `tabs.insertCSS()` に渡される相対 URL は、現在のページ URL を基準として解決されます。 Chrome では、これらの URL は拡張機能のベース URL を基準として解決されます。 クロスブラウザーで動作するようにするには、拡張機能のルートから絶対 URL として次のように指定します:

  ```html
  /path/to/script.js
  ```

<!---->

- Firefox では、`tabs.query()` を使用して URL でタブにクエリを行うには、`"tabs"`権限が必要です。 Chrome では、`"tabs"`権限がなくても可能ですが、URL がホスト権限と一致するタブに制限されます。
- Firefox では、`beforeunload` イベントの後に `tabs.remove()` の promise が実行されますが、Chrome では コールバック が `beforeunload` を待ちません。

#### [webRequest](/ja/Add-ons/WebExtensions/API/webRequest)

- Firefox では、元の URL が`http:`または`https:`を使用する場合にのみ、リクエストをリダイレクトできます。
- Firefox では、システム要求（拡張機能のアップグレードや検索バーの提案など）でイベントが発生しません。 Firefox 57 以降では、Firefox はプロキシ認証のために{{WebExtAPIRef("webRequest.onAuthRequired")}}を遮断する必要がある拡張機能の例外を生成します。{{WebExtAPIRef("webRequest.onAuthRequired")}}のドキュメントをご覧ください。
- Firefox では、拡張機能が外部 URL (例 HTTPS) から[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)にリダイレクトする場合、拡張機能の manifest.json ファイルは、その拡張機能ページの URL を一覧にした [web_accessible_resources](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) キーを含むことが必須です。 その URL にあらゆるウェブサイトからリンクやリダイレクトされる可能性があり、拡張機能は、入力データ(例えば POST データ) を、ただ通常のウェブページがそうするように、アントラステッドなソースからとして取り扱うべきであるのに注意します。

#### [windows](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows)

- Firefox では、`onFocusChanged` はフォーカス変更に対して複数回トリガされます。

### その他の非互換性

#### CSS 内の URL

Firefox は、挿入されたページからではなく、CSS ファイル自体からの相対パスで、挿入された CSS ファイルの URL を解決します。

#### 付加的な非互換性

Firefox は、バックグラウンドページからの[`alert()`](/ja/docs/Web/API/Window/alert), [`confirm()`](/ja/docs/Web/API/Window/confirm) または [`prompt()`](/ja/docs/Web/API/Window/prompt)の使用をサポートしていません。

#### web_accessible_resources

chrome では、リソースが web_accessible_resources にリストされている場合、`chrome-extension://<your-extension-id>/<path/to/resource>`としてアクセスできます。この場合 extension ID は、指定された拡張機能に対して固定されています。

Firefox ではそうではなく、Firefox のすべてのインスタンスごとに異なるランダムな UUID を使用してアクセスできるように実装されています:`moz-extension://<random-UUID>/<path/to/resource>` このランダム性により、特定の拡張機能の URL を別のドメインの CSP ポリシーに追加するなど、いくつかのことをできなくなります。

#### マニフェストの"key"プロパティ

パッケージされていない拡張機能を使用する場合、Chrome はマニフェストに["key"プロパティ](https://developer.chrome.com/extensions/manifest/key)を追加して、異なるマシン間で extension ID を固定することができます。 これは主に web_accessible_resources で作業する場合に便利です。 Firefox は web_accessible_resources にランダムな UUID を使用するため、このプロパティはサポートされていません。

#### コンテンツスクリプトのリクエストは、コンテンツページではなく、拡張機能のコンテキストで発生する

chrome では、コンテンツスクリプトから`/api`のような相対 URL にリクエストが呼び出されたとき（たとえば、[`fetch()`](/ja/docs/Web/API/Fetch_API/Using_Fetch)を使用して）、`https://example.com/api`に送信されます。Firefox では、絶対 URL を指定する必要があります。

## manifest.json のキー

メインの[manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ページには、manifest.json のキーのブラウザーサポートを説明する表が含まれています。 特定のキーのサポートに関する警告がある場合、表にアスタリスク "\*"付きで示され、キーのリファレンスページには注意事項が説明されています。

これらの表は、 [GitHub で JSON ファイル](https://github.com/mdn/browser-compat-data)として保存された互換性データから生成されます。

## ネイティブメッセージング

### コマンドライン引数

Linux と Mac では、Chrome は `chrome-extension://[extensionID]` の形式で、起動した拡張機能のオリジンとなる 1 つの引数をネイティブアプリに渡します。 これにより、アプリは拡張機能を識別できます。

Windows では、Chrome は 2 つの引数を受け取ります。1 つ目は拡張機能のオリジンで、2 つ目はアプリを起動した Chrome ネイティブウィンドウへのハンドルです。

### allowed_extensions

Chrome では、アプリマニフェストの `allowed_extensions` キーは、代わりに`allowed_origins` と呼ばれています。

### アプリマニフェストの位置

Chrome は、別の場所でアプリのマニフェストを見つけることを期待しています。 Chrome ドキュメントの[「ネイティブメッセージングホストの場所」](https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location)をご覧ください。
