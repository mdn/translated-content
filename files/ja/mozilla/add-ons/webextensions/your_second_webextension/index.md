---
title: 2 つめの拡張機能
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

「[初めての拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)」の記事では、拡張機能を作成する基本的な手順を紹介しました。この記事では、追加の API を紹介するため、少し複雑な拡張機能を作成します。

作成する拡張機能では、WebExtensions API の次のような基本概念を学びます。

- ツールバーにボタンを追加する
- HTML、CSS、JavaScript を使ってポップアップパネルを定義する
- ウェブページにコンテンツスクリプトを差し込む
- コンテンツスクリプトと拡張機能のほかの部分との間で通信する
- ウェブページから利用できるリソースを拡張機能にパッケージ化する

この拡張機能は Firefox のツールバーにボタンを追加します。ユーザーがボタンをクリックすると、動物を選択できるポップアップが表示されます。動物を選択すると、アクティブなページのコンテンツがその動物の画像に置き換わります。

実装する機能は次のとおりです。

- **Firefox のツールバーに表示される[ボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)を `action` として定義**
  ボタンには次のものを指定します。
  - デフォルトアイコンと、Firefox が明るい色または暗い色のテキストを表示するときに使うアイコン
  - ツールチップ
  - ボタンを押したときに開くポップアップ (HTML、CSS、JavaScript で記述)

- **拡張機能のアイコンを定義**（ファイル名: "beasts-48.png"）。アドオンマネージャーでは、拡張機能の詳細とともにこのアイコンが表示されます。
- **ウェブページに差し込むコンテンツスクリプト "beastify.js" を作成**
  このコードでページに動物を追加したり、ページから動物を削除したりします。
- **動物の画像をウェブアクセス可能なリソースとしてパッケージ化**
  コンテンツスクリプトで更新したページは、これらの画像を参照して動物を表示します。

拡張機能の全体的な構造は、このようにイメージしていただければと思います。

![manifest.json ファイルには、アイコン、ポップアップを含むアクション、ウェブアクセス可能なリソースが記載されています。動物選択用の JavaScript ポップアップリソースは beastify スクリプトから呼び出されます。](untitled-1.png)

[ソースコード一式は GitHub で参照できます](https://github.com/mdn/webextensions-examples/tree/main/beastify)。

## 拡張機能を書く

新しいディレクトリーを作成し、そのディレクトリーに移動します。

```bash
mkdir beastify
cd beastify
```

### manifest.json

それでは、"manifest.json" というファイルを作成し、次の内容を書き込んでください。

```json
{
  "description": "ツールバーにブラウザーアクションアイコンを追加します。ボタンをクリックして動物を選択します。アクティブなタブの本文は、選択した動物の画像に置き換わります。詳しくは https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Examples#beastify を参照してください。",
  "manifest_version": 3,
  "name": "Beastify",
  "version": "1.0",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },
  "permissions": ["activeTab", "scripting"],
  "browser_specific_settings": {
    "gecko": {
      "id": "beastify@mozilla.org",
      "data_collection_permissions": {
        "required": ["none"]
      }
    }
  },
  "action": {
    "default_icon": "icons/beasts-32.png",
    "theme_icons": [
      {
        "light": "icons/beasts-32-light.png",
        "dark": "icons/beasts-32.png",
        "size": 32
      }
    ],
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    {
      "resources": ["beasts/*.jpg"],
      "matches": ["*://*/*"]
    }
  ]
}
```

- 最初の 3 つのキー ([`manifest_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)、[`version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)) は必須で、拡張機能の基本的なメタデータを指定します。
- [`description`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) は Safari では必須で、それ以外では省略可能です。ただし、ブラウザーの拡張機能マネージャー (Firefox の `about:addons` など) に表示されるため、設定しておくとよいでしょう。
- [`homepage_url`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) は省略可能ですが、役立つ情報を提供するため設定しておくことをお勧めします。
- [`icons`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) は省略可能ですが、拡張機能のアイコンを指定できるため、設定しておくことをお勧めします。
- [`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) は必須です。
  - `gecko` プロパティは、addons.mozilla.org と Firefox に拡張機能の追加設定情報を提供します。
  - [`id`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) は拡張機能の一意な識別子を定義します。addons.mozilla.org (AMO) で拡張機能を公開する前に、この ID が必要です。
  - [`data_collection_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) は、拡張機能が個人を特定できる情報を収集して送信するかどうかを示します。この例では、データを収集も送信もしません。
- [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) は拡張機能に必要なパーミッションを列挙します。この例では、[`activeTab` パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) を要求します。
- [`action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) はツールバーボタン、そのアイコン、ツールチップ、ポップアップを指定します。この例で使うプロパティの詳細は「[ツールバーのボタン](#ツールバーのボタン)」を参照してください。
- [`web_accessible_resources`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) はウェブページからアクセスできるようにするファイルを列挙します。この拡張機能は、拡張機能にパッケージ化した画像でページのコンテンツを置き換えるため、ページから画像にアクセスできるようにする必要があります。

指定したパスはすべて manifest.json ファイルからの相対パスです。

### アイコン

拡張機能にはアイコンを用意するとよいでしょう。アイコンはアドオンマネージャー ("about:addons") で拡張機能の一覧の横に表示されます。manifest.json では、拡張機能のアイコンが "icons/beasts-48.png" にあると指定しています。

"icons" ディレクトリーを作成し、"beasts-48.png" という名前でアイコンを保存します。[サンプルのアイコン](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png)を使うこともできます。このアイコンは [Aha-Soft's Free Retina iconset](https://www.aha-soft.com/free-icons/free-retina-icon-set/) のもので、ライセンスに従って使用されています。

アイコンを用意する場合は 48x48 ピクセルにしてください。高解像度ディスプレイ向けに 96x96 ピクセルのアイコンも用意できます。その場合は manifest.json の `icons` オブジェクトに `96` プロパティとして指定します。

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### ツールバーのボタン

[`action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) キーを使ってツールバーボタンを追加、カスタマイズします。このキーとすべてのプロパティは省略可能です。ただし、ツールバーボタンを使う場合は、ボタンをカスタマイズするプロパティを指定し、必要に応じてボタンをクリックしたときに表示するポップアップを追加します。この例では次のプロパティを使います。

- `default_icon` はボタンのデフォルトアイコンを指定します。
- `theme_icons` はテーマに応じた代替アイコンを指定します。
  - `light` は明るい色のテキストを表示するとき（通常は暗いテーマが有効なとき）に使うアイコン (`icons/beasts-32-light.png`) を指定します。
  - `dark` は暗い色のテキストを表示するとき（通常は明るいテーマが有効なとき）に使うアイコン (`icons/beasts-32.png`) を指定します。
  - `size` はアイコンのサイズをピクセル単位で指定します。
- `default_title` は、ユーザーがボタンにポインターを合わせたときに Firefox が表示するツールチップのテキストを指定します。
- `default_popup` はポップアップの HTML ファイルを指定します。詳しくは「[ポップアップ](#ポップアップ)」を参照してください。

アイコンは "icons" ディレクトリーに保存するか、GitHub のサンプルソースコードにあるものを使います。

- [beasts-32.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png)
- [beasts-32-light.png](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32-light.png)

どちらのアイコンも [IconBeast Lite のアイコン集](https://www.iconbeast.com/free/)のアイコンに基づいており、その[ライセンス](https://www.iconbeast.com/faq/)に従って使用されています。

### ポップアップ

ツールバーボタンには、クリックしたときに開くポップアップを追加できます。

ポップアップを指定しない場合、ボタンをクリックすると {{WebExtAPIRef("action.onClicked")}} イベントが拡張機能に送出されます。拡張機能はこのイベントを使って、ボタンに関連付けられた機能を実行します。

ここではポップアップを使い、ユーザーが 3 種類の動物から 1 つを選べるようにします。

拡張機能のルートディレクトリーに "popup" ディレクトリーを作成します。このディレクトリーにポップアップのコードを作成します。ポップアップは次の 3 つのファイルで構成されます。

- `choose_beast.html` はパネルのコンテンツを定義します。
- `choose_beast.css` はコンテンツのスタイルを指定します。
- `choose_beast.js` はアクティブなタブでコンテンツスクリプトを実行し、ユーザーの選択を処理します。

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

HTML ファイルは次のようになります。

```html
<!doctype html>
<html lang="en-US">
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

HTML には `"popup-content"` という ID の [`<div>`](/ja/docs/Web/HTML/Reference/Elements/div) 要素があります。この要素には動物を選択するボタンとリセットボタンが含まれます。別の `<div>` 要素には `"error-content"` という ID と `"hidden"` クラスがあります。ポップアップを初期化できない場合は、この 2 つ目の `<div>` 要素を使います。

通常のウェブページと同様に、HTML からディレクトリー内の CSS ファイルと JavaScript ファイルを読み込んでいます。

#### choose_beast.css

この CSS ではポップアップのサイズを固定し、3 つの選択肢が領域全体を埋めるようにして、基本的なスタイルを設定しています。また、`class="hidden"` の要素を隠すため、`<div id="error-content"...` 要素はデフォルトで非表示になります。

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
 * ".beastify-image" クラスを持つ要素は除く
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none !important;
                  }`;

/**
 * ボタンクリックを待ち受けし、ページ内のコンテンツスクリプトに
 * 適切なメッセージを送る
 */
function listenForClicks() {
  document.addEventListener("click", async (e) => {
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
    async function beastify(tab) {
      await browser.scripting.insertCSS({
        target: { tabId: tab.id },
        css: hidePage,
      });
      const url = beastNameToURL(e.target.textContent);
      await browser.tabs.sendMessage(tab.id, {
        command: "beastify",
        beastURL: url,
      });
    }

    /**
     * アクティブなタブからページを隠す CSS を削除し、
     * アクティブなタブのコンテンツスクリプトに "reset" メッセージを送る
     */
    async function reset(tab) {
      await browser.scripting.removeCSS({
        target: { tabId: tab.id },
        css: hidePage,
      });
      await browser.tabs.sendMessage(tab.id, { command: "reset" });
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
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      // <div id="popup-content"> 内のボタンがクリックされていない場合は無視。
      return;
    }

    try {
      const [tab] = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });

      if (e.target.type === "reset") {
        await reset(tab);
      } else {
        await beastify(tab);
      }
    } catch (error) {
      reportError(error);
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
 * ポップアップの読み込み時にコンテンツスクリプトをアクティブなタブに挿入し、
 * クリックハンドラーを追加する。
 * 拡張機能がスクリプトを挿入できなかった場合はエラーを処理する。
 */
(async function runOnPopupOpened() {
  try {
    const [tab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    await browser.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["/content_scripts/beastify.js"],
    });
    listenForClicks();
  } catch (e) {
    reportExecuteScriptError(e);
  }
})();
```

ポップアップスクリプトは、ポップアップが読み込まれるとすぐにアクティブなタブで[コンテンツスクリプト](#コンテンツスクリプト)を実行します。そのために [`browser.scripting.executeScript()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript) API を使います。実行に成功すると、タブを閉じるか、ユーザーが別のページに移動するまでコンテンツスクリプトはページに読み込まれたままです。

`browser.scripting.executeScript()` の呼び出しは、アクティブなページでコンテンツスクリプトを実行できない場合に失敗します。例えば、`about:debugging` などの権限が必要なブラウザーページや、[addons.mozilla.org](https://addons.mozilla.org/) ドメイン内のページでは実行できません。呼び出しが失敗すると、`reportExecuteScriptError()` は `<div id="popup-content">` 要素を隠し、`<div id="error-content"...` 要素を表示して、エラーを [コンソール](https://extensionworkshop.com/documentation/develop/debugging/) に記録します。

コンテンツスクリプトが実行されると、コードは `listenForClicks()` を呼び出し、ポップアップのクリックを待ち受けます。

- クリック先がポップアップ内のボタンでなければ、無視して何もしません。
- `type="reset"` のボタンがクリックされたら、`reset()` を呼び出します。
- それ以外のボタン (動物ボタン) がクリックされたら、`beastify()` を呼び出します。

`beastify()` 関数は次の 3 つを行います。

- クリックされたボタンに対応する動物画像の URL を取得します。
- [`browser.scripting.insertCSS()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS) API を使って CSS を挿入し、ページのコンテンツを隠します。
- [`browser.tabs.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API を使ってコンテンツスクリプトに "beastify" メッセージを送り、動物画像の URL を渡してページを動物化するよう依頼します。

`reset()` 関数は動物化を取り消します。次の処理を行います。

- [`browser.scripting.removeCSS()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS) API を使って、追加した CSS を削除します。
- コンテンツスクリプトにページをリセットするよう "reset" メッセージを送ります。

### コンテンツスクリプト

拡張機能のルートディレクトリーに "content_scripts" ディレクトリーを作成し、その中に "beastify.js" というファイルを作成して、次の内容を書き込みます。

```js
(function () {
  /**
   * グローバルなガード変数をチェックして設定し、
   * コンテンツスクリプトがページに再度挿入されたときに
   * リターンして何もしないようにする
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * 動物の画像 URL を受け取り、既存の動物をすべて削除してから
   * 画像を指す IMG 要素を作成、スタイル設定し、
   * ドキュメントに挿入する
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.objectFit = "contain";
    beastImage.style.position = "fixed";
    beastImage.style.height = "100%";
    beastImage.style.width = "100%";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * ページからすべての動物を削除する
   */
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * バックグラウンドスクリプトからのメッセージを待ち受けし、
   * メッセージに応じて "beastify()" か "reset()" を呼び出す。
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

コンテンツスクリプトは最初にグローバル変数 `window.hasRun` を確認します。設定済みならスクリプトはすぐにリターンし、未設定なら `window.hasRun` を設定して処理を続けます。ユーザーがポップアップを開くたびに、アクティブなタブでコンテンツスクリプトが実行されます。そのため、1 つのタブで複数のスクリプトインスタンスが実行されることがあります。その場合、最初のインスタンスだけが処理するようにします。

次に、コンテンツスクリプトは [`browser.runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API を使ってポップアップからのメッセージを待ち受けます。前述のとおり、ポップアップスクリプトは "beastify" と "reset" の 2 つのメッセージを送信します。

- メッセージが "beastify" の場合、動物画像の URL が含まれていることを想定します。以前の "beastify" 呼び出しで追加された動物を削除してから、[`<img>`](/ja/docs/Web/HTML/Reference/Elements/img) 要素を作成して追加し、その `src` 属性に動物の URL を設定します。
- メッセージが "reset" の場合、追加された動物をすべて削除します。

### 動物

最後に、動物の画像を用意します。

拡張機能のルートディレクトリーに "beasts" ディレクトリーを作成し、適切な名前を付けた 3 つの画像をその中に保存します。画像は [GitHub リポジトリー](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts)または以下から取得できます。

![茶色いカエル](frog.jpg)

![白い縞模様のあるエメラルド色のツリーボア](snake.jpg)

![アカミミガメ](turtle.jpg)

## 動かしてみよう

必要なファイルが正しい場所にあることを確認します。

```plain
beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-32-light.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json
```

Firefox で `about:debugging` を開き、**この Firefox**、**一時的なアドオンを読み込む**の順にクリックして、作成した manifest.json ファイルを選択します。

Firefox は拡張機能のボタンを拡張機能パネルに追加するため、ツールバーに固定する必要があります。ツールバーの拡張機能ボタン (ジグソーパズルのアイコン) をクリックし、拡張機能を探します。拡張機能の 3 点メニューをクリックするか、拡張機能を右クリックして、**ツールバーに固定**を選択します。

![拡張機能パネルで Beastify のメニューが開き、「ツールバーに固定」が強調表示されています](beastify_icon.png)

これで拡張機能のアイコンが Firefox のツールバーに表示されます。

ウェブページを開いてアイコンをクリックし、動物を選んでページが変化することを確認します。

![Beastify ポップアップで Turtle が選択され、ページが亀の画像に置き換わっています](beastify_page.png)

## コマンドラインから開発する

仮インストールは [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) ツールを使って自動化できます。`web-ext` をインストールしてから、次を試してください。

```bash
cd beastify
web-ext run
```

## 次は何？

これで、より高度な Firefox 用拡張機能を作成できました。

- [拡張機能の中身](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [拡張機能の例](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [拡張機能を開発し、テストし、公開するために必要なものを探す](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [さらに学びを深める](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next#学習体験を続ける)
