---
title: ツールバーにボタンを追加する
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
---

{{AddonSidebar}}

ツールバーボタンは拡張機能で利用できる主な UI コンポーネントです。ツールバーボタンはブラウザーツールバーに存在してアイコンを含んでいます。ユーザーがアイコンをクリックした時、下記の 2 つのいずれかが起こります:

- アイコンのポップアップを指定した場合、ポップアップが表示されます。ポップアップは HTML, CSS, JavaScript を使った一時的なダイアログです。
- ポップアップを指定していない場合、クリックイベントが生成され、コード内でそれをリッスンして、応答すべき他のアクションを実行できます。

WebExtension API では、こうしたボタンの種類は "ブラウザーアクション" と呼ばれ、次のようにセットアップされます:

- ボタンを定義するために使われる manifest.json の [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) キー
- JavaScript API [`browserAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) はコードに応じてクリックとボタンの変更をリッスンしたりアクションを実行します。

## シンプルなボタン

このセクションでは、ツールバーにボタンを追加する拡張機能を作ります。ユーザーがボタンをクリックしたときに <https://developer.mozilla.org> を新しいタブで開きます。

まず、新しいディレクトリー"button"を作り、そして"manifest.json"と呼ばれる、以下の内容のファイルを作ります:

```json
{
  "description": "Demonstrating toolbar buttons",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

これは "background.js"という名前の[バックグラウンドスクリプト](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)と、"icons"ディレクトリーにあるブラウザーアクション(ボタン)を指定します。

These icons are from the [bitsies!](https://www.iconfinder.com/iconsets/bitsies) iconset created by Recep Kütük.

次に、"buttons"ディレクトリー内に "icons" ディレクトリーを作成し、下記に表示されている 2 つのアイコンを保存します:

- "page-16.png" (![](page-16.png))
- "page-32.png" (![](page-32.png)).

高解像度ディスプレイで大きいのを使うように 2 つのアイコンがあります。ブラウザーは現在のディスプレイに最適なアイコンを選ぶよう配慮します。

次に、拡張機能のルートディレクトリー内の "background.js" を作り、次の中身を入れます:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

これはブラウザーアクションのクリックイベントをリッスンして、イベントが発火したとき、`openPage()` 関数が実行されて、[`tabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API を使って特定のページを開きます。

ここで完全な拡張機能は次のようです:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

ここで[拡張機能をインストールして](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)ボタンをクリックします:

{{EmbedYouTube("kwwTowgT-Ys")}}

## ポップアップを追加する

ボタンにポップアップを追加してみましょう。manifest.json を次のように置き換えます:

```json
{
  "description": "Demonstrating toolbar buttons",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "browser_action": {
    "browser_style": true,
    "default_popup": "popup/choose_page.html",
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

オリジナルから 3 つの変更点があります:

- もう "background.js"は参照しません、なぜならポップアップスクリプト内で拡張機能のロジックを扱うためです (ポップアップと同様に background.js が許可されますが、この場合は不要です)。
- `"browser_style": true` を追加しており、これはポップアップがブラウザーの一部であるようなスタイリングに役立ちます。
- 最後に `"default_popup": "popup/choose_page.html"` を追加します。これはブラウザーアクションがクリック時にポップアップを表示し、"popup/choose_page.html" に document があることをブラウザーに伝えます。

さてポップアップを作らねばなりません。"popup" というディレクトリーを作成してその中に "choose_page.html" というファイルを作ります。中身は次の通り:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_page.css" />
  </head>

  <body>
    <div class="page-choice">developer.mozilla.org</div>
    <div class="page-choice">support.mozilla.org</div>
    <div class="page-choice">addons.mozilla.org</div>
    <script src="choose_page.js"></script>
  </body>
</html>
```

これはふつうの HTML ページに 3 つの{{htmlelement("div")}} 要素があり、その中に Mozilla サイトがあるのが分かるでしょう。また次で追加する CSS ファイルと JavaScript ファイルも入っています。

"popup" ディレクトリーに"choose_page.css" というファイルを作って、次の中身を入れます:

```css
html,
body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}

.page-choice:hover {
  background-color: #cff2f2;
}
```

これは単にポップアップのスタイリングです。

次に、"popup" ディレクトリーに"choose_page.js" ファイルを作成し、次の中身を入れます:

```js
document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = "https://" + e.target.textContent;
  browser.tabs.create({
    url: chosenPage,
  });
});
```

この JavaScript で、ポップアップ選択のクリックをリッスンします。まずは page-choices にクリックがあったかをチェックし、そうでない場合は何もしません。クリックが page-choice にあった場合は、それから URL を作成し、対応するページを含む新規タブを開きます。注意として、バックグラウンドスクリプト内と同じように、ポップアップスクリプトでも WebExtension APIs を使用できます。

拡張機能の最終構造は次の通りです:

```
button/
    icons/
        page-16.png
        page-32.png
    popup/
        choose_page.css
        choose_page.html
        choose_page.js
    manifest.json
```

拡張機能を再読み込みし、もう一度ボタンをクリックし、ポップアップの選択をクリックしてみてください:

{{EmbedYouTube("QPEh1L1xq0Y")}}

## ページアクション

[ページアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/Page_actions) はブラウザーアクションと同様ですが、ブラウザー全体でなく特定ページだけに関連するアクションという点だけが異なります。

ブラウザーアクションはいつも見えていて、ページアクションは関連するタブだけに見えています。ページアクションボタンはブラウザーツールバーでなく、URL バーに表示されます。

## 関連項目

- [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) マニフェストキー
- [`browserAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- ブラウザーアクションの例:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/master/open-my-page-button)

- [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) マニフェストキー
- [`pageAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- ページアクションの例:

  - [chill-out](https://github.com/mdn/webextensions-examples/tree/master/chill-out)
