---
title: 2 つめの拡張機能
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 593600a6822de931ce9fb369849146ad25f22c6f
---

{{AddonSidebar}}

[初めての拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)を一通り読んでいる場合、既に拡張機能の書き方を知っていることと思います。この記事では、API の使い方をより詳しく説明するため、前回よりも少し複雑なアドオンを書いてみます。

この拡張機能では Firefox のツールバーにボタンを新しく追加します。ユーザーがこのボタンをクリックすると、動物を選択できるポップアップが表示されます。ユーザーが動物を選択すると、ウェブページのコンテンツが選択した動物の画像に置き換わります。

これらの機能を以下のように実装していきます。

- **[ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)**（Firefox のツールバーに表示させるボタン）を定義
  このボタン用に次のものを用意します。

  - "beasts-32.png" というアイコン
  - ボタン押下時に開くポップアップ（HTML / CSS / JavaScript で記述）

- **拡張機能のアイコンを定義**（ファイル名: "beasts-48.png"）。これはアドオンマネージャーに表示されます。
- **ウェブページに読み込ませるコンテンツスクリプト "beastify.js" を作成**
  このスクリプトによってウェブページが実際に変更されます。
- **ウェブページを置き換える動物の画像をパッケージ化**
  画像を "web-accessible なリソース" とし、ウェブページから参照できるようにします。

拡張機能の全体的な構造は、このようにイメージしていただければと思います。

![manifest.json ファイルには、アイコン、ポップアップを含むブラウザーアクション、ウェブアクセシビリティリソースが記載されています。選択された beast javascript のポップアップリソースは、beastify スクリプトで呼び出されます。](untitled-1.png)

この拡張機能はシンプルですが、WebExtensions API の基本的なコンセプトを多く含んでいます。

- ツールバーにボタンを追加する
- HTML / CSS / JavaScript を用いてポップアップのパネルを定義する
- ウェブページにコンテンツスクリプトを差し込む
- 拡張機能の中においてコンテンツスクリプトと他のスクリプトとを通信させる
- ウェブページで用いるリソースを拡張機能にパッケージ化する

[ソースコード一式は GitHub で参照できます](https://github.com/mdn/webextensions-examples/tree/master/beastify)。

## 拡張機能を書く

新しいディレクトリーを作成し、そのディレクトリーに移動します。

```bash
mkdir beastify
cd beastify
```

### manifest.json

それでは、"beastify" ディレクトリー配下に新しいファイル "manifest.json" を作成します。以下の内容を書き込んで保存してください。

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]
}
```

- 最初の 3 つのキー [`manifest_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)、[`version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) は必須であり、拡張機能の基本的なメタデータを指定します
- [`description`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) と [`homepage_url`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) は省略可能ですが、設定しておくことをお勧めします。これは拡張機能についての役立つ情報となります
- [`icons`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) は省略可能ですが、設定しておくことをお勧めします。この値は拡張機能のアイコンを指定するものであり、アイコンはアドオンマネージャーに表示されます
- [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) は拡張機能に必要なパーミッションのリストです。ここでは [`activeTab` パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) を要請しています
- [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) はツールバーのボタンを指定するものです。ここでは 3 つの情報を指定しています

  - `default_icon` ではボタンのアイコンを指定します（必須項目）
  - `default_title` ではツールチップの文字列を指定します（省略可）
  - `default_popup` ではユーザーがボタンをクリックした際に表示されるポップアップを指定します。今回はポップアップを表示させたいので、拡張機能に含める HTML ファイルを `defualt_popup` キーで指定しています

- [`web_accessible_resources`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) はウェブページからアクセスしたいファイルのリストです。この拡張機能では、拡張機能に同梱した画像でウェブページを置き換えるため、画像をウェブページからアクセス可能にする必要があります

パスはすべて manifest.json 自身からの相対パスで指定することに注意します。

### アイコン

拡張機能にはアイコンを用意すると良いでしょう。このアイコンは、アドオンマネージャーで拡張機能のリスト横に表示されます（アドオンマネージャーは "about:addons" の URL から確認できます）。今回の manifest.json では "icons/beasts-48.png" を用意していると宣言しています。

"icons" ディレクトリーを作成して、そこにアイコンを "beasts-48.png" という名前で 保存します。必要であれば [サンプルで使用しているアイコン](https://raw.githubusercontent.com/mdn/webextensions-examples/master/beastify/icons/beasts-48.png)を利用しても構いません（このアイコンは [Aha-Soft's Free Retina iconset](http://www.aha-soft.com/free-icons/free-retina-icon-set/) から引用したものであり、該当するライセンスの下で使用しています）。

アイコンを自分で用意する場合 48x48 ピクセルのサイズにする必要があります。高解像度のディスプレイに 96x96 ピクセルのアイコンを表示させたい場合は、manifest.json の `icons` オブジェクトに `96` というプロパティで設定してください。

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### ツールバーのボタン

ツールバーのボタンにもアイコンが必要です。今回の manifest.json では "icons/beasts-32.png" を用意していると宣言しています。

アイコンを "beasts-32.png" という名前で "icons" ディレクトリー内に保存します。必要であれば [サンプルで使用しているアイコン](https://raw.githubusercontent.com/mdn/webextensions-examples/master/beastify/icons/beasts-32.png) を利用しても構いません（このアイコンは [IconBeast Lite のアイコン集](http://www.iconbeast.com/free/) から引用したものであり、該当する [ライセンス](http://www.iconbeast.com/faq/) の下で使用しています）。

ポップアップを使わない場合、ユーザーがボタンをクリックした際にはクリックイベントが拡張機能に向けて送出されます。ポップアップを使う場合にはクリックイベントは送出されず、代わりにポップアップが開きます。今回はポップアップが必要なので、次の項で作成しましょう。

### ポップアップ

今回のポップアップでは、ユーザーが 3 つの動物から 1 つ選択できる機能を持つこととします。

拡張機能のルートディレクトリー配下に "popup" というディレクトリーを新しく作成します。ここにはポップアップ用のコードを保管します。ポップアップは次の 3 ファイルから構成されます。

- **`choose_beast.html`** パネルのコンテンツを定義する
- **`choose_beast.css`** コンテンツのスタイルを指定する
- **`choose_beast.js`** アクティブなタブでコンテンツスクリプトを実行し、ユーザーの選択を処理する

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

HTML ファイルは次のようになります。

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <button>Frog</button>
      <button>Turtle</button>
      <button>Snake</button>
      <button type="reset">Reset</button>
    </div>
    <div id="error-content" class="hidden">
      <p>Can't beastify this web page.</p>
      <p>Try a different page.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

`"popup-content"` という ID の [`<div>`](/ja/docs/Web/HTML/Element/div) 要素があって、動物の選択をするボタンとリセットボタン入っています。`"error-content"` という ID の `<div>` 要素と `"hidden"` クラスもあります。それはポップアップの初期化に問題がある場合に使います。

通常のウェブページと同じように CSS と JS ファイルを読み込んでいることに注意してください。

#### choose_beast.css

この CSS ではポップアップのサイズを固定し、3 つの選択肢がポップアップを埋めるようにし、基本的なスタイリングを施しています。また要素を `class="hidden"` で隠してもいます: つまり `<div id="error-content"...` は既定では隠れています。

```css
html,
body {
  width: 100px;
}

.hidden {
  display: none;
}

button {
  border: none;
  width: 100%;
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
  background-color: #e5f2f2;
}

button:hover {
  background-color: #cff2f2;
}

button[type="reset"] {
  background-color: #fbfbc9;
}

button[type="reset"]:hover {
  background-color: #eaea9d;
}
```

#### choose_beast.js

これがポップアップ用の JavaScript です。

```js
/**
 * ページのすべてを隠す CSS、ただし
 * "beastify-image" クラスを持つ要素は除く
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * ボタンクリックを待ち受けし、ページ内のコンテンツスクリプトに
 * 適切なメッセージを送る
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * 動物の名前を受け取って、対応する画像の URL を取得する
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Frog":
          return browser.runtime.getURL("beasts/frog.jpg");
        case "Snake":
          return browser.runtime.getURL("beasts/snake.jpg");
        case "Turtle":
          return browser.runtime.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * アクティブなタブにページを隠す CSS を挿入して
     * 動物の URL を取得し、
     * アクティブなタブのコンテンツスクリプトに "beastify" メッセージを送る
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({ code: hidePage }).then(() => {
        let url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url,
        });
      });
    }

    /**
     * アクティブなタブからページを隠す CSS を削除し、
     * アクティブなタブのコンテンツスクリプトに "reset" メッセージを送る
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * ただコンソールにエラーをログ出力する
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    /**
     * アクティブなタブを取得し、
     * "beastify()" か "reset()" を適切に呼び出す
     */
    if (e.target.type === "reset") {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(reset)
        .catch(reportError);
    } else {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
        .catch(reportError);
    }
  });
}

/**
 * スクリプトにエラーがあった。
 * ポップアップのエラーメッセージを表示し、通常の UI を隠す。
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * ポップアップを読み込んだ時、コンテンツスクリプトをアクティブなタブに挿入し、
 * クリックハンドラーを追加する。
 * スクリプトの挿入ができない場合、エラー処理をする。
 */
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

開始するのは 96 行です。ポップアップスクリプトはポップアップが読み込まれ次第、アクティブなタブのコンテンツスクリプトを実行し、その手段は [`browser.tabs.executeScript()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API です。コンテンツスクリプトの実行が成功したら、タブが閉じられるかユーザーが別のページに移動するまで、コンテンツスクリプトがページにロードされたままになります。

`browser.tabs.executeScript()` の呼び出しがよく失敗する理由は、コンテンツスクリプトをすべてのページでは実行できないことです。例えば、about:debugging のような権限のあるブラウザーページでは実行できませんし、[addons.mozilla.org](https://addons.mozilla.org/) ドメイン内のページでも実行できません。失敗した場合、`reportExecuteScriptError()` は `<div id="popup-content">` を隠して、`<div id="error-content"...` を表示し、エラーを [console](https://extensionworkshop.com/documentation/develop/debugging/) にログ出力します。

コンテンツスクリプトの実行が成功したら、`listenForClicks()` を呼び出します。これはポップアップのクリックを待ち受けします。

- `class="reset"` の付いたボタンがクリックされたら、`reset()` を呼び出す
- その他のボタン（つまり beast ボタン）がクリックされたら `beastify()` を呼び出す

`beastify()` 関数は次の 3 つを行います。

- 特定の動物画像を指す URL をボタンクリックに割り当てる
- CSS を挿入してページの全コンテンツを隠し、その手段は [`browser.tabs.insertCSS()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API
- コンテンツスクリプトに "beastify" 送り、その手段は [`browser.tabs.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API。ページを動物化するか尋ねて、動物画像への URL を渡す

`reset()` 関数は動物化を取り消します。

- 追加した CSS を削除し、その手段は [`browser.tabs.removeCSS()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API
- コンテンツスクリプトにページをリセットする "reset" メッセージを送る

### コンテンツスクリプト

拡張機能のルートディレクトリー配下に "content_scripts" というディレクトリーを新しく作成します。続いてそこに "beastify.js" という名前のファイルを作成し、下記のスクリプトを記述します。

```js
(() => {
  /**
   * グローバルなガード変数をチェック、設定する。
   * コンテンツスクリプトが再び同じページに挿入された場合、
   * 次は何もしない。
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * 動物の画像の URL を受け取り、既存の動物をすべて削除し、次に
   * 画像を指す IMG 要素の作成・スタイル適用を行い、
   * 作成したノードをドキュメント内に挿入する
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    const beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * ページからすべての動物を削除する
   */
  function removeExistingBeasts() {
    const existingBeasts = document.querySelectorAll(".beastify-image");
    for (const beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * バックグラウンドスクリプトからのメッセージを待ち受けし、
   * "beastify()" か "reset()" を呼び出す。
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
```

このコンテンツスクリプトが最初にすることは、グローバル変数の `window.hasRun` のチェックです: セットされていればスクリプトは早くリターンし、そうでなければ `window.hasRun` をセットして処理し続けます。こうする理由は、ユーザーがポップアップを開くたびに、ポップアップはアクティブなタブのコンテンツスクリプトを実行して、そのために 1 つのタブに複数の実行スクリプトのインスタンスができてしまいます。これが起きると、最初のインスタンスだけが処理するのを確かめる必要があります。

その次に、始まる場所は 40 行で、ここでコンテンツスクリプトはポップアップからのメッセージを待ち受けし、その手段は [`browser.runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API です。上で見たように、ポップアップスクリプトは 2 種類の異なるメッセージを送ります: "beastify" と "reset"

- メッセージが "beastify" なら、動物画像を指す URL が含まれるはずです。以前の "beastify" 呼び出しで追加された動物をすべて削除して、[`<img>`](/ja/docs/Web/HTML/Element/img) 要素を作成、追加して、その `src` 属性に動物の URL をセットします。
- メッセージが "reset" なら、ただ追加された動物をすべて削除します。

### 動物

最後に、動物の画像を用意しておく必要があります。

拡張機能のルートディレクトリー配下に "beasts" という名前のディレクトリーを新しく作成し、その中に 3 つの画像を適切な名前で保存します。画像は [GitHub リポジトリ](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts) から、またはここからでも取得できます。

![茶色いカエル](frog.jpg)

![白い縞模様のあるエメラルド色のツリーボア](snake.jpg)

![アカミミガメ](turtle.jpg)

## 動かしてみよう

正しいファイルが正しい場所にあるかどうか、もう一度確認してください。

```
beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json
```

Firefox で "about:debugging" を開き、"一時的なアドオンを読み込む" をクリックし、自分で作成した manifest.json ファイルを選択してください。拡張機能のアイコンが Firefox のツールバーに表示されているはずです。

![Firefox ツールバーの beastify アイコン](beastify_icon.png)

適当なウェブページを開き、拡張機能のアイコンをクリックし、動物を選択してください。するとウェブページが動物の画像に置き換わるはずです。

![亀の画像に置き換えたページ](beastify_page.png)

## コマンドラインから開発する

仮インストールを [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) ツールを用いて自動化できます。次を試してください。

```bash
cd beastify
web-ext run
```

## 次は何？

これで、より高度な Firefox 用 WebExtension を作成することができました。

- [拡張機能の中身](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [拡張機能の例](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [拡張機能を開発し、テストし、公開するために必要なものを探す](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next_)
- [さらに学びを深める](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next_#学習体験を続ける)
