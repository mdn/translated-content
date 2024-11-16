---
title: テスト自動化環境のセットアップ
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
l10n:
  sourceCommit: 047f9990cac7d82e399a024e509f1b8be270501a
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

この記事では、 Selenium/WebDriver や selenium-webdriver for Node のようなテストライブラリーを使って、自動化環境のインストールとテストを実行する方法を説明します。またローカルテスト環境と、以前の記事で見てきたような商用アプリとを統合する方法についても見て行きます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語の主要部に通じていること。
        <a
          href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        Selenium によるローカルテスト環境のセットアップ方法や Selenium を使用したテストの実行方法、Sauce Labs や BrowserStack などのツールとの統合する方法の案内。
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) は最も人気のあるブラウザー自動化ツールです。他の方法もありますが、 Selenium を使用する最良の方法は WebDriver を使用することで、強力な API で Selenium 上に構築し、ブラウザーを呼び出して自動化し、「このウェブページを開く」、「この要素をページ上に移動する」、「このリンクをクリックする」、「リンクがこの URL を開くかどうかを確認する」などといったアクションを実行します。これは、自動テストを実行するのに最適です。

WebDriver のインストール方法と使用方法は、テストの作成と実行に使用するプログラミング環境によって異なります。最も一般的な環境では、WebDriver とその言語、例えば Java、C＃、Ruby、Python、JavaScript (Node) などを使用して WebDriver と通信するのに必要なバインディングをインストールするパッケージまたはフレームワークが利用可能です。異なる言語の Selenium のセットアップの詳細については、 [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/) を参照してください。

異なるブラウザーでは、WebDriver と通信して制御するために異なるドライバーが必要です。ブラウザーのドライバーの入手先などについては、 [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) を参照してください。

Node.js を使用した Selenium テストの作成と実行については、始める前にすばやく簡単に行うことができ、フロントエンド開発者にはもっと使い慣れた環境を提供する予定です。

> [!NOTE]
> 他のサーバーサイド環境で WebDriver を使用する方法を知りたい場合は、 [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) もチェックしてください。

### Node で Selenium のセットアップ

1. まず、前章の [Node と npm の設定](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#node_と_npm_の設定) で説明しているように、新しい npm プロジェクトをセットアップします。`selenium-test`のように違うものを呼んでください。
2. 次に、 Node の内部から Selenium が機能するようにフレームワークをインストールする必要があります。 更新頻度が高く、よく改善されるため、 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) を選択します。もしも他の選択をするならば [webdriver.io](https://webdriver.io/) と [nightwatch.js](https://nightwatchjs.org/) もいい選択です。selenium-webdriver をインストールするため, プロジェクトフォルダーの下で以下のコマンドを走らせます。

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> 以前に selenium-webdriver をインストールしてブラウザードライバーをダウンロードした場合でも、これらの手順を実行することをお勧めします。すべてが最新であることを確認する必要があります。

次に、 WebDriver がテストしたいブラウザーを制御するために、関連するドライバーをダウンロードする必要があります。どこから取得するかは、 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) ページに詳細があります（最初の節の表を見てください）。もちろん、いくつかのブラウザーは OS 固有のものですが、主要な OS で利用できる Firefox と Chrome に絞って説明します。

1. 最新の [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) （Firefox 用）と [ChromeDriver](https://chromedriver.chromium.org/downloads) ドライバーをダウンロードします。
2. ホームユーザーディレクトリーのルートなど、移動しやすい場所に展開します。
3. `chromedriver` と `geckodriver` ドライバーの場所をシステムの `PATH` 変数に追加してください。これは、ハードディスクのルートから、ドライバーを格納するディレクトリーへの絶対パスでなければなりません。例えば、macOS マシンを使用していて、ユーザー名が bob で、ドライバーをホームフォルダーのルートに置くとしたら、パスは `/Users/bob` となります。

> [!NOTE]
> もう一度言っておきますが、 `PATH` に追加するパスは、ドライバーそのものへのパス ではなく、ドライバーを格納するディレクトリーへのパスである必要があります。これはよく間違えられます。

macOS システムとほとんどの Linux システムで `PATH` 変数を設定するには、次のようにします。

1. まだ `bash` シェルを使用していない場合（例えば、 macOS システムの既定では `bash` ではなく `zsh` シェルです）、`bash` シェルに切り替えます。

   ```bash
   exec bash
   ```

2. `.bash_profile`（または `.bashrc`）ファイルを開きます（隠しファイルが表示されていない場合は表示させる必要があります。 [Show/Hide hidden files in macOS](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) または [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu) を参照してください）。
3. ファイルの一番下に以下を貼り付けます（パスはあなたのマシンで実際に使用されているものに更新してください）。

   ```bash
   #Add WebDriver browser drivers to PATH

   export PATH=$PATH:/Users/bob
   ```

4. このファイルを保存して閉じてから、端末/コマンドプロンプトを再起動して Bash 設定を再適用します。
5. 新しいパスが `PATH` 変数に入っているか、端末に以下のように入力して調べます。

   ```bash
   echo $PATH
   ```

6. 端末に表示されるはずです。

Windows で `PATH` 変数を設定するには、[How can I add a new folder to my system path?](https://www.itprotoday.com/) の指示に従ってください。

では、すべてが動作していることを確認するために、簡単なテストをしてみましょう。

1. 自分のプロジェクトディレクトリーに `google_test.js` と呼ばれる新しいファイルを作成します。
2. そのファイルに以下のコンテンツを追加し、保存します。

   ```js
   const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

   (async function example() {
     const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
     try {
       await driver.get("https://www.google.com/ncr");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
     } finally {
       await driver.sleep(2000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

   > [!NOTE]
   > この関数は {{glossary("IIFE")}} （即時実行関数式）です。

3. 端末で、自分のプロジェクトフォルダー内にいることを確認し、以下のコマンドを入力します。

   ```bash
   node google_test
   ```

Firefox のインスタンスが自動的に開くのが確認できるはずです。 Google が自動的にタブに読み込まれ、検索ボックスに "webdriver" と入力され、検索ボタンがクリックされます。その後、 WebDriver は 1 秒待ちます。文書タイトルがアクセスされ、 "webdriver - Google Search" であれば、テストが合格したとメッセージを返します。
その後 4 秒待ち、 WebDriver は Firefox インスタンスを閉じて、停止します。

## 一度に複数ブラウザーでテストする

複数のブラウザーで同時にテストを実行することを妨げるものは何もありません。試してみましょう！

1. 自分のプロジェクトのディレクトリーに、 `google_test_multiple.js` と呼ばれる新しいファイルを作成します。どのブラウザーが利用できるか応じて、追加した他のブラウザーへの参照を自由に変更したり、削除したりしてください。正しいブラウザードライバーを設定する必要があります。他のブラウザーのために `.forBrowser()` メソッド内で使用する文字列に関しては、 [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Browser.html) のリファレンスページを参照してください。
2. 以下の内容を記述し、保存してください。

   ```js
   const { Builder, Browser, By, Key } = require("selenium-webdriver");

   const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();

   const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

   async function searchTest(driver) {
     try {
       await driver.get("http://www.google.com");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000).then(async () => {
         await driver.getTitle().then(async (title) => {
           if (title === "webdriver - Google Search") {
             console.log("Test passed");
           } else {
             console.log("Test failed");
           }
         });
       });
     } finally {
       driver.quit();
     }
   }

   searchTest(driver_fx);
   searchTest(driver_chr);
   ```

3. 端末で、自分のプロジェクトフォルダー内にいることを確認し、以下のコマンドを入力してください。

   ```bash
   node google_test_multiple
   ```

4. もしMacを使用していてSafariをテストしようとすると、エラーメッセージ "Could not create a session. "が表示され るかもしれません： WebDriverを使用してSafariを制御するには、SafariのDevelopメニューで'Allow Remote Automation'オプションを有効にする必要があります。これが表示された場合は、指定された指示に従ってもう一度試してください。

ここで、今回は `searchTest()` という関数の中にラップしたことを除いて、前と同じようにテストを行いました。複数のブラウザー用に新しいブラウザーインスタンスを作成し、それぞれを関数に渡すことで、 3 つのブラウザーすべてでテストが実行されるようにしています。

楽しいですか？それでは次に、 WebDriver の構文の基本をもう少し詳しく見ていきましょう。

## WebDriver 構文速習コース

webdriver 構文のいくつかの主要な機能を見ていきましょう。完全に詳細を知りたい場合は、[selenium-webdriver JavaScript API reference](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/) を参照してください。また、 Selenium main documentation の [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) には、様々な言語で書かれた複数の例が格納されています。

### 新しいテストを始める

新しいテストを始めるには、 `selenium-webdriver` モジュールを記載し、`Builder` コンストラクターと `Browser` インターフェイスをインポートする必要があります。

```js
const { Builder, Browser } = require("selenium-webdriver");
```

`Builder()` コンストラクターを使用して新しいドライバーのインスタンスを作成し、 `forBrowser()` メソッドを連結して、このビルダーでテストしたいブラウザーを指定します。
最後に `build()` メソッドを連結して、実際にドライバのインスタンスを構築します （これらの機能の詳細情報は [Builder クラスリファレンス](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Builder.html) を参照してください）。

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

なお、テストするブラウザーに固有の構成オプションを設定することは可能です。例えば、 `forBrowser()`　メソッドで、テストする特定のバージョンとOSを設定することができます。

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "46", "MAC").build();
```

例えば、環境変数を使ってこれらのオプションを設定することもできます。

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

新しいテストを作成して、このコードを調べながら話を進めましょう。自分の selenium test プロジェクトディレクトリー内に、 `quick_test.js` と呼ばれる新しいファイルを作成し、以下のコードを追加してください。

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

### テストする文書の取得

実際にテストしたいページを読み込むには、例えば先ほど作成したドライバーのインスタンスの `get()` メソッドを使用します。

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> この章とその下記の機能の詳細については、[WebDriver クラスリファレンス](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html)を参照してください。

リソースを指す URL であればなんでも使用することができます。ローカル文書をテストするためには `file://` URL を含めることもできます。

```js
driver.get(
  "file:///Users/chrismills/git/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html",
);
```

または

```js
driver.get("http://localhost:8888/fake-div-buttons.html");
```

しかし、リモートサーバーの場所を使用したほうがコードの柔軟性が高まります。リモートサーバーを使用してテストを実行し始める際には （後述します）、ローカルパスを使用しようとするとコードが壊れてしまいます。

`example()` 関数を以下のように更新してください。

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
})();
```

### 文書とのやりとり

これでテストする文書を取得したので、何か文書内で操作する必要があります。通常、最初にテストする固有の要素を選択する必要があります。 WebDriver では、ID、クラス、要素名などで[多くの方法で UI 要素を選択する](https://www.selenium.dev/documentation/webdriver/elements/)ことができます。実際の選択は `findElement()` メソッドによって行われ、このメソッドは引数として選択メソッドを受け入れます。例えば、ID によって要素を選択するには、次のようにします。

```js
const element = driver.findElement(By.id("myElementId"));
```

CSSで要素を探す最も有益な方法の 1 つである `By.css()` メソッドを使用すると、 CSS セレクターを使用して要素を選択することができます。

これで `example()` 関数を以下のように更新します。

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
  const button = driver.findElement(By.css("button:nth-of-type(1)"));
})();
```

### 要素のテスト

ウェブ文書や文書内の要素を対話する方法はたくさんあります。 WebDriver ドキュメントの[テキスト値を取得する](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content)から始まる一般的な例を見ることができます。

ボタンの中のテキストを取得したい場合、次のようにします。

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

下記の通り、これで `example()` 関数の末尾にこの例を追加します。

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.getText().then((text) => {
    console.log(`Button text is '${text}'`);
  });
})();
```

自分のプロジェクトディレクトリー内にいることを確認して、テストを実行してみてください。

```bash
node quick_test.js
```

ボタンのテキストラベルがコンソールに表示されるはずです。

もう少し有益なことをしてみましょう。前回のコード項目を下記のように `button.click();` という行に置き換えてください。

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
})();
```

ボタンがクリックされ、 `alert()` ポップアップが現れるはずです。少なくともボタンが動作していることがわかります。

ポップアップを操作することもできます。 `example()` 関数を以下のように更新して、もう一度テストしてみてください。

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();

  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`Alert text is '${text}'`);
  });

  alert.accept();
})();
```

次に、フォーム要素のひとつにテキストを入力してみましょう。 `example()` 関数を以下のように更新して、もう一度テストを実行してみましょう。

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Filling in my form");

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`Alert text is '${text}'`);
  });

  alert.accept();
})();
```

`Key` オブジェクトのプロパティを使用して、通常の文字で表せないキーを送信することができます。例えば、上ではフォーム入力を送信する前にタブで抜けるためにこの構文を使用しました。

```js
driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(Key.TAB);
});
```

### 何かが完了するのを待つ

WebDriver が何かを完了するまで待ってからテストを行いたい時があります。例えば新しいページを読み込んだ場合、ページの DOM の読み込みが完了するまで待ってから要素を操作する必要があり、そうしないとテストが失敗する可能性が高くなります。

例えばこの例の `google_test.js` テストでは、次のようなブロックを含んでいます。

```js
driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    if (title === "webdriver - Google Search") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  });
});
```

`sleep()` メソッドにはミリ秒単位で待つ時間を指定する値を受け入れます。このメソッドはその時間の終わりに解決するプロミスを返し、この時点で `then()` 内のコードが実行されます。このケースでは `getTitle()` メソッドで現在のページのタイトルを取得し、その返値に応じて合格か不合格かを返しています。

`quick_test.js` のテストにも `sleep()` メソッドを追加することができます。 `example()` 関数をこの例のように更新してみてください。

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

(async function example() {
  try {
    driver.get(
      "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
    );

    driver.sleep(2000).then(() => {
      const input = driver.findElement(By.id("name"));

      input.sendKeys("Filling in my form");
      input.getAttribute("value").then((value) => {
        if (value !== "") {
          console.log("Form input editable");
        }
      });
    });

    const button = driver.findElement(By.css("button:nth-of-type(1)"));

    button.click();

    await driver.wait(until.alertIsPresent());

    const alert = driver.switchTo().alert();

    alert.getText().then((text) => {
      console.log(`Alert text is '${text}'`);
    });

    alert.accept();
  } finally {
    await driver.sleep(4000); // Delay long enough to see search page!
    driver.quit();
  }
})();
```

これで WebDriver はフォームフィールドを形成する前に 2 秒間待機します。そして、 `getAttribute()` を使用して `value` 属性値を取得して値が埋まっているかどうか（空でないかどうか）を検査し、空でなければコンソールにメッセージを出力します。

> [!NOTE]
> また、 [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait) と呼ばれるメソッドがあります。これは、ある条件を一定時間繰り返しテストし、コードの実行を継続します。これも [util ライブラリー](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html)を使用しています。 util ライブラリーは `wait()` とともに使用する一般的な条件を定義しています。

### 使用後のドライバーのシャットダウン

テストの実行が完了したら、あなたのマシンに不正なブラウザーインスタンスが読み込まれたままにならないように、開いたためのドライバーインスタンスをすべてシャットダウンする必要があります。これは `quit()` メソッドを使用して行います。ドライバーインスタンスを終了するときにこのメソッドを呼び出してください。これで `quick_test.js` テストの一番下にこの行を追加します。

```js
driver.quit();
```

これで実行すると、テストが実行され、テスト完了後にブラウザーインスタンスがシャットダウンされます。これはコンピューターにブラウザーインスタンスを読み込ませないようにするのに有益な機能です。特に、ブラウザーインスタンスの数が多すぎてコンピューターの動作が遅くなるような場合に有効です。

## テストのベストプラクティス

テストを書くための最善の手法については、これまで多くのことが書かれてきました。[テストプラクティス](https://www.selenium.dev/documentation/test_practices/)を参照ください。一般的には、あなたのテストが次のようなものであることを確認すべきです。

1. 良いロケーター戦略を用いること。[文書とのやりとり](#文書とのやりとり)のときには、ロケーターとページオブジェクトが変更されにくいものを使用するようにしましょう。テストを実行したいテスト可能な要素がある場合、次のサイトの反復処理で変更されることのない、安定した ID や CSS セレクターで選択できるページ上の位置を持つようにしましょう。テストは可能な限りもろくならないように、つまり、何かが変わっても壊れないようにしたいものです。
2. アトミックなテストを書きます。各テストはひとつのことだけをテストするようにし、 どのテストファイルがどの基準をテストしているのかを簡単に把握できるようにします。例えば、上で見た `google_test.js` のテストは、検索結果ページのタイトルが正しく設定されているかどうかという単一のことをテストするだけなので、とても良いものです。このテストにもっと良い名前をつけて、 google のテストを追加したときに、このテストが何をするのかがわかりやすいようにすることもできます。おそらく、 `results_page_title_set_correctly.js` が少し良いでしょうか？
3. 自律的なテストを書きましょう。各テストは自分自身で動作し、他のテストに依存して動作しないようにしましょう。

上記の例では単純な `console.log()` 文を使って結果を報告していますが、これはすべて JavaScript で行っているため、 [Mocha](https://mochajs.org/) や [Chai](https://www.chaijs.com/)、他にも好きなテスト実行・報告システムを使用することができます。

1. 例えば、 [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) のローカルコピーを自分のプロジェクトディレクトリー内に作ってみてください。それを `test` というサブフォルダーに入れてください。この例では長いプロミスの連鎖を使用して、テストに必要なすべての段階を実行しています - WebDriver が使用するプロミスベースのメソッドは正しく作業するために解決する必要があります。
2. 自分のプロジェクトディレクトリーで以下のコマンドを実行して、 mocha テストハーネスをインストールします。

   ```bash
   npm install --save-dev mocha
   ```

3. これで、以下のコマンドを用いてテストを実行（および `test` ディレクトリーに置いた他のテストも実行）することができます。

   ```bash
   npx mocha --no-timeouts
   ```

4. Mocha の任意のタイムアウト（3 秒）のためにテストが失敗してしまうことがないように、`--no-timeouts` フラグを記載する必要があります。

> **メモ:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) には、テスト/アサーションツールのさまざまな組み合わせを設定する方法を示す有益な例がいくつか含まれています。

## リモートテストの実行

リモートサーバー上でテストを実行するのは、ローカルで実行するよりもそれほど難しくないことがわかりました。ドライバーのインスタンスを作成するだけですが、テストしたいブラウザーに必要な機能、 サーバーのアドレス、アクセスするために必要なユーザー資格情報（もしあれば）をいくつか指定します。

### LambdaTest

Selenium テストを LambdaTest 上でリモート動作させるのはとても簡単です。必要なコードは下記パターンに従ってください。

例を書いてみましょう。

1. 自分のプロジェクトディレクトリーに、 `lambdatest_google_test.js` という新しいファイルを作成します。
2. ファイルの内容は以下のようにします。

   ```js
   const { By, Builder } = require("selenium-webdriver");

   // username: Username can be found at automation dashboard
   const USERNAME = "{username}";

   // AccessKey: AccessKey can be generated from automation dashboard or profile section
   const KEY = "{accessKey}";

   // gridUrl: gridUrl can be found at automation dashboard
   const GRID_HOST = "hub.lambdatest.com/wd/hub";

   function searchTextOnGoogle() {
     // Setup Input capabilities
     const capabilities = {
       platform: "windows 10",
       browserName: "chrome",
       version: "67.0",
       resolution: "1280x800",
       network: true,
       visual: true,
       console: true,
       video: true,
       name: "Test 1", // name of the test
       build: "NodeJS build", // name of the build
     };

     // URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
     const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

     // setup and build selenium driver object
     const driver = new Builder()
       .usingServer(gridUrl)
       .withCapabilities(capabilities)
       .build();

     // navigate to a URL, search for a text and get title of page
     driver.get("https://www.google.com/ncr").then(function () {
       driver
         .findElement(By.name("q"))
         .sendKeys("LambdaTest\n")
         .then(function () {
           driver.getTitle().then((title) => {
             setTimeout(() => {
               if (title === "LambdaTest - Google Search") {
                 driver.executeScript("lambda-status=passed");
               } else {
                 driver.executeScript("lambda-status=failed");
               }
               driver.quit();
             }, 5000);
           });
         });
     });
   }

   searchTextOnGoogle();
   ```

3. [LambdaTest automation dashboard](https://www.lambdatest.com/selenium-automation) にアクセスし、右上の **key** アイコンをクリックして LambdaTest のユーザー名とアクセスキーを取得します（_Username and Access Keys_ 参照）。コード内の `{username}` と `{accessKey}` のプレースホルダーを、実際のユーザー名とアクセスキーの値に置き換えてください (そして、それらを安全に管理してください)。
4. 端末で下記コマンドを実行し、テストを実行します。

   ```bash
   node lambdatest_google_test
   ```

   テストは LambdaTest に送信され、テストの出力は LambdaTest コンソールに反映されます。
   これらの結果を LambdaTest プラットフォームからレポート目的で抽出したい場合は、 [LambdaTest restful API](https://www.lambdatest.com/blog/lambdatest-launches-api-for-selenium-automation/) を使用することができます。

5. これで [LambdaTest Automation dashboard](https://accounts.lambdatest.com/dashboard) に行くと、テストが載っています。ここから動画やスクリーンショット、他にもそのようなデータを見ることができます。
   また、 `if` や `else` のコードブロックがあるため、ステータスが **completed** ではなく、 **passed** や **failed** と表示されます。

   [![LambdaTest Automation Dashboard](automation-logs-1.jpg)](https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Automation-logs-1.jpg)
   テストビルド内のすべてのテストについて、ネットワーク、コマンド、例外、Selenium ログを取得できます。また、Selenium スクリプトの実行を録画した動画も探すことができます。

> [!NOTE]
> LambdaTest Automation Dashboard の _HELP_ ボタンをクリックすると、LambdaTest オートメーションを始めるには十分な情報が提供されます。また、[Node JS で最初の Selenium スクリプトを実行する](https://www.lambdatest.com/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/)ことに関する私たちの文書化にも対応しています。

> [!NOTE]
> テストのためのケイパビリティオブジェクトを手で書きたくない場合は、 [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) を用いて生成することができます。

### BrowserStack

BrowserStack で Selenium テストをリモートで動作するように取得するのは簡単です。必要なコードは下記パターンに従うことです。

例を書いてみましょう。

1. 自分のプロジェクトディレクトリーに、 `bstack_google_test.js` という新しいファイルを作成します。
2. 内容を以下のようにします。

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const request = require("request");

   // Input capabilities
   const capabilities = {
     "bstack:options": {
       os: "OS X",
       osVersion: "Sonoma",
       browserVersion: "17.0",
       local: "false",
       seleniumVersion: "3.14.0",
       userName: "YOUR-USER-NAME",
       accessKey: "YOUR-ACCESS-KEY",
     },
     browserName: "Safari",
   };

   const driver = new Builder()
     .usingServer("http://hub-cloud.browserstack.com/wd/hub")
     .withCapabilities(capabilities)
     .build();

   (async function bStackGoogleTest() {
     try {
       await driver.get("https://www.google.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     } finally {
       await driver.sleep(4000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

3. [BrowserStack Account - Summary](https://www.browserstack.com/accounts/profile/details) から、ユーザー名とアクセシビリティキーを取得します（_Username and Access Keys_ 参照）。コード内の `YOUR-USER-NAME` と `YOUR-ACCESS-KEY` プレースホルダーを、実際のユーザー名とアクセスキーの値に置き換えてください（そして、それらを安全に保管してください）。
4. 以下のコマンドでテストを実行します。

   ```bash
   node bstack_google_test
   ```

   テストは BrowserStack に送信され、テスト結果がコンソールに返されます。これは、何らかの結果報告メカニズムを記載することの重要性を示しています。

5. これで、 [BrowserStack automation dashboard](https://www.browserstack.com/automate) のページに戻ると、テストが掲載されています。
   ![BrowserStack automated results](bstack_automated_results.png)

テストのリンクをクリックすると、新しい画面が取得され、テストの録画動画や、テストに関連する複数の詳細なログ情報を見ることができます。

> [!NOTE]
> Browserstack 自動化ダッシュボードの _Resources_ メニューオプションには、自動テストを実行するために使用するための有益な情報が豊富に格納されています。ノード固有の情報については、 [Node JS Documentation for writing automate test scripts in Node JS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) を参照してください。 BrowserStack で使用することができますすべての有益なことを見つけるために、ドキュメントを探索してください。

> [!NOTE]
> テストのためのケイパビリティオブジェクトを手で書きたくなければ、 ドキュメントにあるジェネレーターを使用して生成することができます。 [Run your first test](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs#run-your-first-test) を参照ください。

#### プログラムによる BrowserStack テストの詳細の入力

BrowserStack REST API や他にもいくつかの機能を使用して、自分のテストに、合格したかどうか、合格した理由、テストがどのプロジェクトの一部であるかなどの詳細をアノテーションすることができます。 BrowserStack は既定ではこれらの詳細を知りません！

それでは、 `bstack_google_test.js` デモを更新して、これらがどのように動作するのかを示してみましょう。

1. 自分のプロジェクトディレクトリー内で次のコマンドを実行することで、リクエストモジュールをインストールします。

   ```js
   npm install request
   ```

2. 次に、 node request モジュールをインポートして、 REST API にリクエストを送信するために使用することができます。コードの一番上に以下の行を追加します。

   ```js
   const request = require("request");
   ```

3. これで、 `capabilities` オブジェクトを更新して、プロジェクト名を含めることができます。 閉じ中括弧の前に以下の行を追加し、前の行の終わりにカンマを追加することを忘れないでください（BrowserStack オートメーションダッシュボードの異なるウィンドウでテストを整理するために、ビルド名とプロジェクト名を変えることができます）。

   ```js
   'project' : 'Google test 2'
   ```

4. 次に、現在のセッションの `sessionId` にアクセスして、リクエストをどこに送ればよいかを知る必要があります （後で説明するように、この ID はリクエスト URL に記載されます）。以下の行を `driver` オブジェクトを作成するブロック (`let driver …`) のすぐ下に記載してください。

   ```js
   let sessionId;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
   });
   ```

5. 最後に、コードの一番下にある `driver.sleep(2000)` ブロックを更新して、 REST API 呼び出しを追加します（この場合も、コード内の `YOUR-USER-NAME` と `YOUR-ACCESS-KEY` のプレースホルダーを、実際のユーザー名とアクセスキーの値に置き換えます）。

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "passed",
             reason: "Google results showed correct title",
           },
         });
       } else {
         console.log("Test failed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "failed",
             reason: "Google results showed wrong title",
           },
         });
       }
     });
   });
   ```

テストが完全に完了すると、 API を BrowserStack に呼び出して、テストの合格、不合格、結果の理由を更新します。

これで [BrowserStack automation dashboard](https://live.browserstack.com/dashboard) ページに戻ると、以前と同じように、更新されたデータが添付されたテストセッションが利用できるはずです。

![BrowserStack Custom Results](bstack_custom_results.png)

### Sauce Labs

Sauce Labs 上で Selenium テストをリモートで実行するための取得もとても単純で、いくつかの構文の違いはあるものの、 BrowserStack と非常によく似ています。必要なコードは下記パターンのようになります。

例を書いてみましょう。

1. 自分のプロジェクトディレクトリー内に、 `sauce_google_test.js` という新しいファイルを作成します。
2. 中身を次のようにします。

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const username = "YOUR-USER-NAME";
   const accessKey = "YOUR-ACCESS-KEY";

   const driver = new Builder()
     .withCapabilities({
       browserName: "chrome",
       platform: "Windows XP",
       version: "43.0",
       username,
       accessKey,
     })
     .usingServer(
       `https://${username}:${accessKey}@ondemand.saucelabs.com:443/wd/hub`,
     )
     .build();

   driver.get("http://www.google.com");

   driver.findElement(By.name("q")).sendKeys("webdriver");

   driver.sleep(1000).then(() => {
     driver.findElement(By.name("q")).sendKeys(Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     });
   });

   driver.quit();
   ```

3. [Sauce Labs user settings](https://app.saucelabs.com/user-settings) から、ユーザー名とアクセシブルキーを取得します。コード内の `YOUR-USER-NAME` と `YOUR-ACCESS-KEY` プレースホルダーを、実際のユーザー名とアクセスキーの値に置き換えます（そして、それらを安全に保つようにしてください）。
4. 以下のコマンドでテストを実行します。

   ```bash
   node sauce_google_test
   ```

   テストは Sauce Labs に送信され、テスト結果はコンソールに返されます。これは、何らかの結果報告メカニズムを記載することの重要性を示しています。

5. これで [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) のページに行くと、テストが掲載されています。ここから動画やスクリーンショット、他にもそのようなデータを見ることができます。
   ![Sauce Labs automated test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs の [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) は、テストしたいブラウザー/OS に基づいて、ドライバーインスタンスに供給するケイパビリティオブジェクトを生成する有益なツールです。

> [!NOTE]
> Sauce Labs と Selenium を使用したテストに関する有益な詳細については、 [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) と [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) を調べてください。

#### Sauce Labs テストの詳細をプログラムで書き込む

Sauce Labs API を使用することで、合格したかどうか、テストの名前など、テストの詳細をアノテーションすることができます。 Sauce Labs は既定ではこれらの詳細を知りません。

これを行うには、次のようにする必要があります。

1. 以下のコマンドを使用して Node Sauce Labs ラッパーをインストールします（まだ自分のプロジェクトで使用していない場合）。

   ```bash
   npm install saucelabs --save-dev
   ```

2. saucelabsが必要です。 `sauce_google_test.js` ファイルの一番上、前回宣言した変数のすぐ下記に記述してください。

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. SauceLabs の新しいインスタンスを作成し、そのすぐ下に従うことで以下を追加します。

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   再度、コード内の `YOUR-USER-NAME` と `YOUR-ACCESS-KEY` のプレースホルダーを実際のユーザー名とアクセスキーの値に置き換えてください（saucelabs npm パッケージでは `password` を使用しており、`accessKey` ではないことに注意してください）。これで 2 回使用することになるので、これらを格納するためにヘルパー変数をいくつか作成しておくとよいでしょう。

4. `driver` 変数を定義したブロックの下記（`build()` 行のすぐ下）に、以下のブロックを追加してください。これはジョブにデータを書き込むために必要な正しいドライバー `sessionID` を取得します（次のコードブロックでその動作を見ることができます）。

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. 最後に、コードの一番下にある `driver.sleep(2000)` ブロックを以下に置き換えます。

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       let testPassed = false;
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         testPassed = true;
       } else {
         console.error("Test failed");
       }

       saucelabs.updateJob(driver.sessionID, {
         name: "Google search results page title test",
         passed: testPassed,
       });
     });
   });
   ```

ここでは、テストの合格と不合格に応じて `testPassed` 変数を `true` または `false` に設定し、`saucelabs.updateJob()` メソッドを使用して詳細を更新しています。

これで [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) ページに戻ると、新しいジョブに更新されたデータが添付されていることが確認できるはずです。

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### 自身のリモートサーバー

Sauce Labs や BrowserStack のようなサービスを使用したくない場合は、常に自分自身でリモートテストサーバーを設定することができます。その方法を見ていきましょう。

1. Selenium リモートサーバーを実行するには Java が必要です。 [Java SE downloads page](https://www.oracle.com/java/technologies/downloads/) から、自分のプラットフォームに合った最新の JDK をダウンロードしてください。ダウンロードしたらインストールしてください。
2. 次に、最新の [Selenium スタンドアロンサーバー](https://selenium-release.storage.googleapis.com/index.html)をダウンロードしてください。これはスクリプトとブラウザードライバーの間のプロキシーとして機能します。最新の安定版（ベータ版ではない）を選び、リストから "selenium-server-standalone" で始まるファイルを選んでください。ダウンロードしたら、ホームディレクトリーのような適切な場所に配置してください。まだ `PATH` に追加していない場合は、これで追加してください（[Node で Selenium を設定する](#node_で_selenium_のセットアップ)の節を参照）。
3. サーバーコンピューターの端末に従うことで、スタンドアロンサーバーを実行します。

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (`.jar` ファイル名を更新して) 取得したファイルと正確に照合してください。

4. サーバーは `http://localhost:4444/wd/hub` で動作します。これで、何が取得されるか試してみてください。

これでサーバーを実行したので、リモートの selenium サーバーで動作するデモテストを作成してみましょう。

1. `google_test.js` ファイルのコピーを作成し、 `google_test_remote.js` と名付け、自分のプロジェクトディレクトリーに置きます。
2. コードの行（`const driver = …` で始まる行）を次のように更新します。

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. テストを実行すると、期待通りに実行されるはずです。ただし、今回はスタンドアロンサーバー上で動作させます。

   ```bash
   node google_test_remote.js
   ```

これはかなりクールです。私たちはこれをローカルでテストしましたが、関連するブラウザードライバと一緒にあらゆるサーバーに設定し、公開する URL を使用してスクリプトを接続することができます。

## Selenium と CI ツールのインテグレーション

別の点として、 Selenium と LambdaTest や Sauce Labs のような関連ツールを継続的インテグレーション（CI）ツールと統合することも可能です。これは、 CI ツールを介してテストを実行し、テストが合格した場合にのみ新しい変更をコードリポジトリーにコミットできることを意味しているので便利です。

この記事でこの分野を詳しく見ていくのは範囲外ですが、 Travis CI で始めることを提案します - これはおそらく最も簡単に取得できるCIツールであり、 GitHub や Node のようなウェブツールとの統合もあります。

始めるには、例えば次のものを見てください。

- [Travis CI for complete beginners](https://docs.travis-ci.com/user/for-beginners)
- [Building a Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (with Travis)
- [Using LambdaTest with Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Using LambdaTest with CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Using LambdaTest with Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> **メモ:** **コードレス自動化**で継続的なテストを行いたい場合は、 [Endtest](https://endtest.io) または [TestingBot](https://testingbot.com) を使用することができます。

## まとめ

このモジュールは楽しいもので、自分自身で自動テストを書いて取得するのに十分な、自動テストの書き方や実行方法に関する知識が得られたことでしょう。

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
