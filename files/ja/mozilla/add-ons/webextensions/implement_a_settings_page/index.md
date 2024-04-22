---
title: 設定ページを実装する
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
---

{{AddonSidebar}}

設定ページは、ユーザーに拡張機能の設定を確認して変える方法を与えます(「プリファレンス」や「オプション」とも呼ばれます)。

WebExtension API では一般に、設定は [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage) API で保存されます。設定ページの実装は次の 3 ステップの手順です:

- 設定を表示して、ユーザーがそれを変更できる HTML を書く。
- HTML からインクルードされる、ストレージから設定ページに投入し、ユーザーが変更した時に保存された設定を更新するスクリプトを書く。
- HTML ファイルのパスを manifest.json の [`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) キーに設定する。これにより、HTML 文書が、拡張機能の名前や説明と共に、文書ブラウザーのアドオンマネージャーに表示される。

> **メモ:** [`runtime.openOptionsPage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) 関数を使ってプログラム的に開くこともできます。

## 簡単な拡張機能

まずは、ユーザーが訪問するページに青い枠をつける拡張機能を書きます。

"settings" というディレクトリーを作り、そこに "manifest.json" という名前のファイルを作って下記の中身を入れます:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ]
}
```

この拡張機能はブラウザーに対し、"borderify.js" というコンテンツスクリプトを、ユーザーが訪問するすべてのウェブページで読み込むよう指示します。

次に、"settings" ディレクトリー内に "borderify.js" というファイルを作り、次の中身を入れます:

```js
document.body.style.border = "10px solid blue";
```

これは単にページに青い枠をつけます。

[この拡張機能をインストール](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)してテストします — お好みのあらゆるウェブページを開きます:

{{EmbedYouTube("E-WUhihF8fw")}}

## 設定を追加する

今度は枠の色をユーザーが設定できるような設定ページを作りましょう。

まずは "manifest.json" を次の中身に更新します:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"],

  "applications": {
    "gecko": {
      "id": "addon@example.com"
    }
  }
}
```

新しく次の 3 つのキーを追加しました:

- [`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui): これは HTML 文書に、この拡張機能の設定ページ(オプションページともいう)であることを設定します
- [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage) API を使って設定を保存し、この API を使うパーミッションが必要です
- `applications`: 同期ストレージに設定を読み書きするには、拡張機能の ID を入れておく必要があります

次に "options.html" を提供する約束をしたので、作成します。"settings" ディレクトリー内にその名前でファイルを作成して、次の中身を与えます:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Border color<input type="text" id="color" /></label>
      <button type="submit">Save</button>
    </form>

    <script src="options.js"></script>
  </body>
</html>
```

これは {{htmlelement("form")}} と、そこにラベル付きのテキスト {{htmlelement("input")}} と送信 {{htmlelement("button")}} を定義します。また "options.js" というスクリプトも入っています。

もう一度 "options.js"を "settings" ディレクトリーに作り、次の中身を与えます:

```js
function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
```

これは 2 つのことをします:

- 文書が読み込まれた時、"color" の値を [`storage.sync.get()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) を使ってストレージから取り出します。値が未設定なら、既定の "blue" を用います。これで値を `sync` ストレージ領域から取得できます。
- ユーザーが "Save" を押して送信した時、テキストボックスの値を [`storage.sync.set()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) を用いて保存します。これで値を `sync` ストレージ領域に保存できます。

> **メモ:** 別々の .js ファイルの指定が必要です。インライン JavaScript は使用できません。

ローカルストレージがふさわしいと感じる場合、代わりにローカルストレージに設定値を保存できます。

> **メモ:** Firefox の `storage.sync` の実装はアドオン ID に依存しているのに注意します。`storage.sync` を使う場合、上記 manifest にあるように、manifest.json の [`applications`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) キーに拡張機能の ID をセットしておく必要があります。

最後に、ストレージから枠の色を読むのに "borderify.js" を更新します:

> **警告:** バージョン 52 より前の Firefox の [browser.storage.local.get()](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) のバグにより、下記のコードは機能しません。バージョン 52 より前の Firefox で動作させるには、`onGot()` の中で 2 回出てくる `item.color` を `item[0].color` に変えないといけません。

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = "10px solid " + color;
}

var getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
```

この時点で、拡張機能はこのようになります:

```
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

いま、次を行ってみます:

- [拡張機能を再読み込み](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on)
- ウェブページを読み込む
- 設定ページを開いて枠の色を変える
- ウェブページを再読み込みして違いを見る

Firefox で設定ページにアクセスするには about:addons に移動して拡張機能のエントリーの隣の "Preferences" ボタンをクリックします。

{{EmbedYouTube("ECt9cbWh1qs")}}

## 詳しく学ぶ

- [`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) マニフェストキーのリファレンス文書
- [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage) API のリファレンス文書
- 拡張機能から直接設定ページを開くには [`runtime.openOptionsPage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API を使う
- 設定ページの例:

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)
