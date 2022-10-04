---
title: コンテンツスクリプト
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
---

{{AddonSidebar}}

コンテンツスクリプトは、特定のウェブページのコンテキストで実行される拡張機能の一部です（拡張機能の一部であるバックグラウンドスクリプトや、ウェブサイト自体の一部であるスクリプト、例えば {{HTMLElement("script")}} 要素みたいなものと対をなすような)。

[バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)はすべての [WebExtension JavaScript API](/ja/Add-ons/WebExtensions/API) にアクセスできますが、ウェブページのコンテンツに直接アクセスすることはできません。だからあなたの拡張機能がそれを行う必要がある場合は、コンテンツスクリプトが必要です。

通常のウェブページで読み込まれたスクリプトと同様に、コンテンツスクリプトは、標準の DOM API を使用してページのコンテンツを読み取り、変更することができます。

コンテンツスクリプトは、[WebExtension API](/ja/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs) の小さなサブセット にしかアクセスできませんが、メッセージングシステムを使用して [バックグラウンドスクリプトと通信](/ja/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts)し、WebExtension API に間接的にアクセスすることができます。

> **メモ:** コンテンツスクリプトは次のドメインでブロックされるのに注意してください:
>
> - accounts-static.cdn.mozilla.net
> - accounts.firefox.com
> - addons.cdn.mozilla.net
> - addons.mozilla.org
> - api.accounts.firefox.com
> - content.cdn.mozilla.net
> - content.cdn.mozilla.net
> - discovery.addons.mozilla.org
> - input.mozilla.org
> - install.mozilla.org
> - oauth.accounts.firefox.com
> - profile.accounts.firefox.com
> - support.mozilla.org
> - sync.services.mozilla.com
> - testpilot.firefox.com
>
> このドメインのページにコンテンツスクリプトを挿入しようとすると、そのスクリプトは失敗し、ページは [CSP](/ja/docs/Web/Security/CSP) エラーをログに記録します。
>
> addons.mozilla.org を含む制限のために、ユーザーはインストール後すぐに拡張機能を試して、動かないのに気付くだけでしょう! 適切な警告を追加するか、`addons.mozilla.org` から動かす [onboarding page](/ja/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices) を追加したくなるでしょう。

> **メモ:** `letfoo` や `window.foo = "bar"` にて、コンテンツスクリプトのグローバルスコープで追加された値は、[1408996](https://bugzilla.mozilla.org/show_bug.cgi?id=1408996) のバグによって消えることがあります。

## コンテンツスクリプトの読み込み

次の 3 つの方法のいずれかを使用して、ウェブページにコンテンツスクリプトを読み込むことができます。

1. **インストール時に、URL パターンにマッチするページ内へ**
      - : `manifest.json` の [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) キーを使用して、URL が[指定されたパターンにマッチする](/ja/Add-ons/WebExtensions/Match_patterns)ページをロードするたびにコンテンツスクリプトを読み込むようブラウザーに依頼できます。
2. **実行時に、URL パターンにマッチするページ内へ**
      - : {{WebExtAPIRef("contentScripts")}} API を使って、URL が[指定されたパターンにマッチする](/ja/Add-ons/WebExtensions/Match_patterns)ページをロードするたびにコンテンツスクリプトを読み込むようブラウザーに依頼できます。これは method (1) のようなもので、違いは実行時にコンテンツスクリプトを追加/削除できることです。
3. **実行時に、特定のタブへ**
      - : [`tabs.executeScript()`](/ja/Add-ons/WebExtensions/API/Tabs/executeScript) API を使用すると、ユーザーが[ブラウザーアクション](/ja/Add-ons/WebExtensions/user_interface/Browser_action)をクリックした場合など、必要なときにコンテンツスクリプトを特定のタブに読み込むことができます。

*フレームごと、拡張機能ごとの*グローバルスコープしかありません。これは 1 つのコンテンツスクリプトの変数は、読み込み方にかかわらず、他のコンテンツスクリプトからアクセスできることになります。

方法 (1) と (2) では[マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)を使って表現された URL のスクリプトだけを読み込みできます。

方法 (3) では、拡張機能と一緒にパッケージされたページのスクリプトも読み込みできますが、"about:debugging" や "about:addons"のような権限つきページにはスクリプトを読み込めません。

## コンテンツスクリプト環境

### DOM アクセス

コンテンツスクリプトは、普通のページスクリプトと同様に、ページの DOM にアクセスして修正できます。ページスクリプトにてなされた DOM の変更を見ることもできます。

しかし、コンテンツスクリプトは "DOM のきれいな見た目" を取得します。これはつまり:

- コンテンツスクリプトはページスクリプトにて定義された JavaScript 変数を見ることができない
- ページスクリプトが組み込み DOM プロパティを再定義した場合、コンテンツスクリプトはそのプロパティの(再定義後でなく)オリジナル値を見ている

Firefox では、この挙動は [Xray vision](/ja/docs/Xray_vision) と呼ばれます。

例えば、次のウェブページを考えます:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

"page-script.js" スクリプトは次を実行します:

```js
// page-script.js

// add a new element to the DOM
let p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// define a new property on the window
window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
window.confirm = function() {
  alert("The page script has also redefined 'confirm'");
}
```

今度は拡張機能がページにコンテンツスクリプトを挿入します:

```js
// content-script.js

// can access and modify the DOM
let pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see page-script-added properties
console.log(window.foo);  // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

その反対もまた真です; ページスクリプトはコンテンツスクリプトが追加した JavaScript プロパティを見られません。

このことからすると、コンテンツスクリプトは予言できる振る舞いをする DOM プロパティに依存していて、ページスクリプトにて定義された変数とコンテンツスクリプトで定義する変数の衝突は心配しなくていいです。

この振る舞いの実用的な結論として、コンテンツスクリプトはページに読み込まれたいかなる JavaScript ライブラリーにもアクセスしません。なので例えば、ページに jQuery が含まれても、コンテンツスクリプトは見ることができません。

コンテンツスクリプトから JavaScript ライブラリを使いたい場合、ライブラリ自身を、使う方のコンテンツスクリプトと*並べて*挿入するべきです:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> **メモ:** Firefox ではコンテンツスクリプトからページスクリプトによって生成された JavaScript オブジェクトにアクセスしたり、ページスクリプトにコンテンツスクリプトの JavaScript オブジェクトを公開できるようにする API が提供されます。
>
> 詳しくは[ページスクリプトとオブジェクトを共有する](/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)のページを見てください。

### WebExtension API

標準 DOM API に加え、コンテンツスクリプトは次の WebExtension API を使用できます:

[`extension`](/ja/Add-ons/WebExtensions/API/extension) から:

- [`getURL()`](</ja/Add-ons/WebExtensions/API/extension#getURL()>)
- [`inIncognitoContext`](/ja/Add-ons/WebExtensions/API/extension#inIncognitoContext)

[`runtime`](/ja/Add-ons/WebExtensions/API/runtime) から:

- [`connect()`](</ja/Add-ons/WebExtensions/API/runtime#connect()>)
- [`getManifest()`](</ja/Add-ons/WebExtensions/API/runtime#getManifest()>)
- [`getURL()`](</ja/Add-ons/WebExtensions/API/runtime#getURL()>)
- [`onConnect`](/ja/Add-ons/WebExtensions/API/runtime#onConnect)
- [`onMessage`](/ja/Add-ons/WebExtensions/API/runtime#onMessage)
- [`sendMessage()`](</ja/Add-ons/WebExtensions/API/runtime#sendMessage()>)

[`i18n`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n) から:

- [`getMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

すべてから:

- [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage)

### XHR と Fetch

コンテンツスクリプトは通常の [`window.XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) と [`window.fetch()`](/ja/docs/Web/API/Fetch_API) API を使ってリクエストを作成できます。

> **メモ:** Firefox では、コンテンツスクリプトの (例えば、[`fetch()`](/ja/docs/Web/API/Fetch_API/Using_Fetch) を使った) リクエストは、拡張機能のコンテキストで起こるので、ページコンテンツを参照する URL を絶対 URL で提供せねばなりません。
>
> Chrome では、リクエストはページのコンテキストで起こるので、相対 URL で行われます。例えば、`/api` は `https://[現在のページの URL]/api` に送られます。

コンテンツスクリプトは拡張機能の他の部分と同一のクロスドメイン権限を取得します: よって拡張機能が `manifest.json` の [`permissions`](/ja/Add-ons/WebExtensions/manifest.json/permissions) キーを使ってあるドメインのクロスドメインアクセスを要求している場合、コンテンツスクリプトも同様にそのドメインのアクセスを取得します。

これはより多く権限付けられた XHR に晒して、コンテンツスクリプトでインスタンスを取得することで達成し、その副作用としてページ自体からのリクエストがそうであるように [`Origin`](/ja/docs/Web/HTTP/Headers/Origin) と [`Referer`](/ja/docs/Web/HTTP/Headers/Referer) ヘッダーがセットされず、リクエストからクロスオリジンな性質を隠すことが好ましいことがよくあります。

> **メモ:** バージョン 58 以降、コンテンツ自体から送られたかのようなリクエストを必要とする拡張機能は `content.XMLHttpRequest` と `content.fetch()` を代わりに使うことができます。
>
> クロスブラウザー拡張機能にとってこれらの存在は機能検出となります。

## バックグラウンドスクリプトとの通信

コンテンツスクリプトは WebExtension API の大半を直接には使用できませんが、メッセージ API を用いて拡張機能のバックグラウンドスクリプトと通信できて、それゆえにバックグラウンドスクリプトがアクセスできるすべての API に間接的にアクセスできます。

バックグラウンドスクリプトとコンテンツスクリプトが通信する 2 つのパターンがあります: (オプションなレスポンスつきの)**ワンオフメッセージ**を送るのと、**お互いに息の長いコネクションを確立して**、そこでメッセージを交換するのとです。

### ワンオフメッセージ

レスポンスが必須でないワンオフメッセージを送るには、次の API を使います:

|                | コンテンツスクリプト内                                                               | バックグラウンドスクリプト内                                                   |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| 送信メッセージ | [`browser.runtime.sendMessage()`](/ja/Add-ons/WebExtensions/API/runtime/sendMessage) | [`browser.tabs.sendMessage()`](/ja/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| 受信メッセージ | [`browser.runtime.onMessage`](/ja/Add-ons/WebExtensions/API/runtime/onMessage)       | [`browser.runtime.onMessage`](/ja/Add-ons/WebExtensions/API/runtime/onMessage) |

例えば、ウェブページでのクリックイベントをリッスンするコンテンツスクリプトがここにあります。クリックがリンク上である場合、ターゲット URL をバックグラウンドページにメッセージします。

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

バックグラウンドスクリプトはこのメッセージをリッスンして、[`notifications`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API を使って通知を表示します:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "You clicked a link!",
    "message": message.url
  });
}
```

この例のコードは Github の [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) のサンプルから簡単に適用できます。

### コネクションベースのメッセージ

ワンオフメッセージの送信は、バックグラウンドスクリプトとコンテンツスクリプトとで多くのメッセージを交換する場合はめんどくさいです。なので代替パターンは、この 2 つのコンテキスト間で寿命の長いコネクションを確立して、メッセージ交換にこのコネクションを使うことです。

いずれの側にも [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) オブジェクトがあり、メッセージ交換に使えます。

コネクションを作成するには:

- 片方で [`runtime.onConnect`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) にてコネクションをリッスンする。
- もう片方で次を呼び出す:

  - [`tabs.connect()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (コンテンツスクリプトに接続する場合)
  - [`runtime.connect()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (バックグラウンドスクリプトに接続する場合)

これは [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) オブジェクトを返します。

- [`runtime.onConnect`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) リスナーには自身の [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) オブジェクトが渡される。

それぞれがポートを持ったら、両方が:

- `runtime.Port.postMessage()` でメッセージを送って
- `runtime.Port.onMessage` でメッセージを受信できるようになる。

例えば、ロードしたらすぐに、このコンテンツスクリプトは:

- バックグラウンドに接続し
- `myPort` 変数に `Port` を格納する
- `myPort` のメッセージをリッスンする(ログに出す)
- ユーザーがドキュメントをクリックしたとき、バックグラウンドスクリプトに `myPort` を使ってメッセージを送る

```js
// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener(function(m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "they clicked the page!"});
});
```

対応するバックグラウンドスクリプトは:

- コンテンツスクリプトからの通信試行をリッスンする
- 通信試行を受け取ったとき:

  - `portFromCS` という名前の変数にポートを格納する
  - そのポートを使ってコンテンツスクリプトにメッセージを送る
  - ポートに届いたメッセージをリッスンしてログに出す

- ユーザーが拡張機能のブラウザーアクションをクリックしたとき、`portFromCS` を使ってコンテンツスクリプトにメッセージを送る

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "hi there content script!"});
  portFromCS.onMessage.addListener(function(m) {
    console.log("In background script, received message from content script")
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function() {
  portFromCS.postMessage({greeting: "they clicked the button!"});
});
```

#### 複数のコンテンツスクリプト

同時に複数のコンテンツスクリプトが通信する場合、各接続を配列に格納するのが良いかもしれません。

```js
// background-script.js

var ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p => {
        p.postMessage({greeting: "they clicked the button!"})
    })
});
```

### ワンオフメッセージとコネクションベースのメッセージとの選択

ワンオフとコネクションベースのメッセージの選択は、拡張機能がどうメッセージを利用すると期待されるかに依存します。

推奨のベストプラクティスは次の通りです:

**次のときにワンオフメッセージを使用…**

- メッセージに 1 つだけの応答がある場合
- メッセージの受信を少しのスクリプトがリッスンする場合({{WebExtAPIRef("runtime.onMessage")}} 呼び出し)

**次のときにコネクションベースメッセージを使用…**

- スクリプトが、複数のメッセージを交換するセッションに関わる場合
- 拡張機能がタスクの進捗や、タスクが中断されたのを知る必要がある場合、または初期化されたタスクをメッセージング経由で中断したい場合

## ウェブページとの通信

既定では、コンテンツスクリプトはページスクリプトが作成したオブジェクトにアクセスできませんが、DOM [`window.postMessage`](/ja/docs/Web/API/Window/postMessage) と [`window.addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) API を使ってページスクリプトと通信できます。

例えば:

```js
// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message from the page"
  }, "*");
```

```js
// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &&
      event.data &&
      event.data.direction == "from-page-script") {
    alert("Content script received message: \"" + event.data.message + "\"");
  }
});
```

これの完全な動作サンプルは、[GitHub のデモページを訪れて](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html)指示に従ってください。

> **警告:** **この方法で信頼できないウェブコンテンツと相互作用するには細心の注意が必要です**！
> 拡張機能は強力な力を持つコードの権限があり、敵意のあるウェブページは簡単にこの力にアクセスします。
>
> 細かい例を作るには、メッセージを受け取ったコンテンツスクリプトがこのようなことを行うと仮定してください:
>
> ```js
> // content-script.js
>
> window.addEventListener("message", function(event) {
>   if (event.source == window &&
>       event.data.direction &&
>       event.data.direction == "from-page-script") {
>     eval(event.data.message);
>   }
> });
> ```
>
> 今やページスクリプトはコンテンツスクリプトのすべての権限でコードを実行できます。

## コンテンツスクリプト内で eval() を使う

- Chrome では
  - : {{jsxref("eval")}} は常にページコンテキストではなくてコンテンツスクリプトのコンテキストで動作します。
- Firefox では
  - : `eval()` を呼ぶ場合、**コンテンツスクリプト**のコンテキストで動作します。 `window.eval()` を呼ぶ場合、**ページ**のコンテキストで動作します。, it runs code in the context of the **content script**.

例えば、こんなコンテンツスクリプトを考えてみます:

```js
// content-script.js

window.eval('window.x = 1;');
eval('window.y = 2');

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage({
  message: "check"
}, "*");
```

このコードは単に変数 x と y を、`window.eval()` と `eval()` を用いて作成し、値をログに出し、ページにメッセージします。

メッセージの受信に際し、ページスクリプトは同じ変数をログに出します:

```js
window.addEventListener("message", function(event) {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

**Chrome では、こんな出力が生成されます:**

```
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

**Firefox では、こんな出力が生成されます:**

```
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

同じことは [`setTimeout()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)、[`setInterval()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)、[`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) にも言えます。

> **警告:** **ページのコンテキストでコードを実行するときは特に注意してください！**
>
> ページの環境が悪意をはらんだウェブページにコントロールされ、期待しない方法であなたが操作するオブジェクトを再定義するかもしれません。
>
> ```js
> // page.js redefines console.log
>
> var original = console.log;
>
> console.log = function() {
>   original(true);
> }
> ```
>
> ```js
> // content-script.js calls the redefined version
>
> window.eval('console.log(false)');
> ```
