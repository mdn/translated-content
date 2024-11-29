---
title: コンテンツスクリプト
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{AddonSidebar}}

コンテンツスクリプトは、ウェブページのコンテキストで実行される拡張機能の一部です（拡張機能の一部であるバックグラウンドスクリプトや、ウェブサイト自体の一部であるスクリプト、例えば {{HTMLElement("script")}} 要素みたいなものと対照的なものです）。

[バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)はすべての [WebExtension JavaScript API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) にアクセスできますが、ウェブページのコンテンツに直接アクセスすることはできません。だからあなたの拡張機能がそれを行う必要がある場合は、コンテンツスクリプトが必要です。

通常のウェブページで読み込まれたスクリプトと同様に、コンテンツスクリプトは、標準の [Web API](/ja/docs/Web/API) を使用してページのコンテンツを読み取り、変更することができます。しかし、このようなことができるのは、[ウェブページのオリジンに対するホスト権限が与えられている場合](#権限)だけです。

> [!NOTE] 一部の Web API は[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)に制限されており、これらのコンテキストで実行するコンテンツスクリプトにも適用されます。ただし、{{domxref("PointerEvent.getCoalescedEvents()")}} は、 Firefox の安全でないコンテキストでコンテンツスクリプトから呼び出すことができます。

コンテンツスクリプトは、[WebExtension API の小さなサブセット](#webextension_api)にしかアクセスできませんが、メッセージングシステムを使用して [バックグラウンドスクリプトと通信](#バックグラウンドスクリプトとの通信)し、WebExtension API に間接的にアクセスすることができます。

## コンテンツスクリプトの読み込み

次の 3 つの方法のいずれかを使用して、ウェブページにコンテンツスクリプトを読み込むことができます。

1. インストール時に、URL パターンに一致するページ内へ。
   - : `manifest.json` の [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) キーを使用して、URL が[指定されたパターンに一致する](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)ページをロードするたびにコンテンツスクリプトを読み込むようブラウザーに依頼できます。
2. 実行時に、URL パターンに一致するページ内へ。
   - : {{WebExtAPIRef("scripting.registerContentScripts()")}} または（Firefox であればマニフェスト V2 の） {{WebExtAPIRef("contentScripts")}} を使って、URL が[指定されたパターンに一致する](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)ページを読み込むたびにコンテンツスクリプトを読み込むようブラウザーに依頼できます。これは方法 1 と似ていますが、実行時にコンテンツスクリプトを追加/削除できる点が異なります。）
3. 実行時に、特定のタブへ。
   - : {{WebExtAPIRef("scripting.executeScript()")}} または（マニフェスト V2 のみ） {{WebExtAPIRef("tabs.executeScript()")}} を使用すると、必要なときにコンテンツスクリプトを特定のタブに読み込むことができます。（ユーザーが[ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)をクリックした場合など。）

*フレームごと、拡張機能ごとの*グローバルスコープしかありません。これは 1 つのコンテンツスクリプトの変数は、読み込み方にかかわらず、他のコンテンツスクリプトからアクセスできることになります。

方法 (1) と (2) では[一致パターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)を使って表現された URL のスクリプトだけを読み込みできます。

方法 (3) では、拡張機能と一緒にパッケージされたページのスクリプトも読み込みできますが、"`about:debugging`" や "`about:addons`"のような権限つきページにはスクリプトを読み込めません。

> **メモ:** [ダイナミック JS モジュールインポート](/ja/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading)がコンテンツスクリプトで動作するようになりました。詳しくは[Firefox バグ 1536094](https://bugzil.la/1536094)を参照してください。
> _moz-extension_ スキームを持つ URL のみが許可され、データ URL は除外されます ([Firefox バグ 1587336](https://bugzil.la/1587336))。

## 権限、制約、制限

### 権限

登録されたコンテンツスクリプトは、その拡張機能にドメインの[ホスト権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#ホスト権限)が付与されている場合にのみ実行されます。

プログラムでスクリプトを挿入するには、拡張機能には [`activeTab` 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_権限)または[ホスト権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_権限)のどちらかが必要です。 `scripting` 権限は {{WebExtAPIRef("scripting")}} API のメソッドを使用するために必要となります。

マニフェスト V3 以降、ホスト権限はインストール時点では自動的に付与されません。ユーザーは、拡張機能をインストールした後、ホスト権限のオプトインまたはオプトアウトを行うことができます。

### ドメインの制限

[ホスト権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_権限)と [`activeTab` 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_権限)はどちらも、いくつかのドメインが例外になっています。例えば、拡張機能が特別なページを通して権限をエスカレートさせることからユーザーを保護するために、コンテンツスクリプトはこの例ではドメイン上での実行がブロックされます。

Firefox では、これには次のドメインが含まれます。

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

他のブラウザーでも、拡張機能をインストールできるウェブサイトには同様の制限があります。例えば、 Chrome では chrome.google.com へのアクセスが制限されています。

> [!NOTE]
> これらの制限は addons.mozilla.org を含んでいるので、ユーザーはインストール直後に拡張機能を使用しようとし、それが動作しないことに気付くかもしれません。 適切な警告を追加したり、[オンボーディングページ](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/)を追加して、ユーザーを `addons.mozilla.org` から遠ざけたりするとよいでしょう。

一連のドメインは、エンタープライズポリシーでさらに制限することができます。 Firefox は [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) で文書化されている `restricted_domains` ポリシーを認識します。Chrome の `runtime_blocked_hosts` ポリシーは [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) で文書化されています。

### 制限

タブやフレーム全体を読み込むには、 [`data:` URI](/ja/docs/Web/URI/Schemes/data) や {{DOMxRef("URL.createObjectURL_static", "Blob")}} オブジェクト、その他同様のテクニックを使用して、タブやフレーム全体を読み込むことができます。このような特殊文書へのコンテンツスクリプトの挿入に対応しているかどうかはブラウザーによって異なります。詳細は [Firefox バグ #1411641 のコメント 41](https://bugzil.la/1411641#c41) を参照してください。

## コンテンツスクリプト環境

### DOM アクセス

コンテンツスクリプトは、普通のページスクリプトと同様に、ページの DOM にアクセスして修正できます。ページスクリプトにてなされた DOM の変更を見ることもできます。

しかし、コンテンツスクリプトは DOM の「きれいな」見た目を取得します。すなわち、

- コンテンツスクリプトはページスクリプトにて定義された JavaScript 変数を見ることができない
- ページスクリプトが組み込み DOM プロパティを再定義した場合、コンテンツスクリプトはそのプロパティの（再定義後でなく）オリジナル値を見ている

[Chrome の非互換性における「コンテンツスクリプト環境」](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#コンテンツスクリプト環境)で触れている通り、動作はブラウザー間で異なります。

- Firefox では、この挙動は [Xray vision](/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) と呼ばれます。
  コンテンツスクリプトは、自分自身のグローバルスコープから、またはウェブページから Xray でラップされたバージョンの JavaScript オブジェクトに遭遇するかもしれません。

- Chromeでは、この動作は[隔離された世界 (isolated world)](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) によって強制され、根本的に異なる手法を使用しています。

次のようなウェブページを考えてみてください。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

`page-script.js` スクリプトは次を実行します。

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
window.confirm = () => {
  alert("The page script has also redefined 'confirm'");
};
```

今度は拡張機能がページにコンテンツスクリプトを挿入します。

```js
// content-script.js

// can access and modify the DOM
let pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see properties added by page-script.js
console.log(window.foo); // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

逆も同様で、ページスクリプトはコンテンツスクリプトが追加した JavaScript のプロパティを見ることができません。

これは、コンテンツスクリプトが、ページスクリプトからの変数と衝突することを心配することなく、予測可能な動作をする DOM プロパティに頼っていることを意味しています。

この動作の実用的な結果の一つは、コンテンツスクリプトが、ページによって読み込まれたいかなる JavaScript ライブラリーにもアクセスできないことです。そのため、例えばページに jQuery が記載されていても、コンテンツスクリプトはそれを見ることができません。

コンテンツスクリプトが JavaScript ライブラリーを使用する必要がある場合、そのライブラリー自体は、それを使用したいコンテンツスクリプトと _並べて_ 挿入すべきです。

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox では [cloneInto()](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) および [exportFunction()](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) により、コンテンツスクリプトがページスクリプトによって作成された JavaScript オブジェクトにアクセスし、その JavaScript オブジェクトをページスクリプトに公開することができるようにしたりしています。
>
> 詳しくは[ページスクリプトとオブジェクトを共有する](/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)のページを見てください。

### WebExtension API

標準 DOM API に加え、コンテンツスクリプトは次の WebExtension API を使用できます。

**[`extension`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/extension) から:**

- [`getURL()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext)

**[`runtime`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime) から:**

- [`connect()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect>)
- [`getManifest()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)
- [`getURL()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL)
- [`onConnect`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- [`onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- [`sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)

**[`i18n`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n) から:**

- [`getMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

**[`menus`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) から:**

- [`getTargetElement`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

**すべてから:**

- [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage)

### XHR と Fetch

コンテンツスクリプトは通常の [`window.XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) と [`window.fetch()`](/ja/docs/Web/API/Fetch_API) API を使ってリクエストを作成できます。

> [!NOTE]
> Firefox では、コンテンツスクリプトの（例えば、[`fetch()`](/ja/docs/Web/API/Fetch_API/Using_Fetch) を使った）リクエストは、拡張機能のコンテキストで起こるので、ページコンテンツを参照する URL を絶対 URL で提供せねばなりません。
>
> Chrome では、リクエストはページのコンテキストで起こるので、相対 URL で行われます。例えば、`/api` は `https://[現在のページの URL]/api` に送られます。

コンテンツスクリプトは拡張機能の他の部分と同一のクロスドメイン権限を取得します。よって拡張機能が `manifest.json` の [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) キーを使ってあるドメインのクロスドメインアクセスを要求している場合、コンテンツスクリプトも同様にそのドメインのアクセスを取得します。

> [!NOTE]
> Manifest V3 を使用する場合、出力先サーバーが [CORS](/ja/docs/Web/HTTP/CORS) を使用してオプトインするとき、コンテンツスクリプトはオリジン間リクエストを実行できます。ただし、コンテンツスクリプトではホスト権限は動作しませんが、通常の拡張ページではまだ動作しています。

これは、コンテンツスクリプトでより特権的な XHR とフェッチインスタンスを公開することによって達成されます。これは、ページ自身からのリクエストのように、[`Origin`](/ja/docs/Web/HTTP/Headers/Origin) および [`Referer`](/ja/docs/Web/HTTP/Header/Referer) ヘッダーを設定しない副作用があります。これは、クロスオリジンの性質を明らかにしないリクエストを行うにはよく望ましいとされることです。

> [!NOTE]
> マニフェスト V2 の Firefox では、コンテンツ自身によって送信されたかのように振る舞うリクエストを実行する必要がある拡張機能は、代わりに `content.XMLHttpRequest` と `content.fetch()` を使用することができます。
>
> クロスブラウザー拡張機能にとってこれらの存在は機能検出となります。
>
> Manifest V3 では `content.XMLHttpRequest` と `content.fetch()` が利用できないため、このようなことは起こりえません。

> [!NOTE]
> Chrome ではバージョン 73 から、Firefox ではバージョン 101 からマニフェスト V3 を使用する場合、コンテンツスクリプトは、その中で実行されるページと同じ [CORS](/ja/docs/Web/HTTP/CORS) ポリシーが適用されるようになりました。バックエンドスクリプトのみ、昇格したクロスドメイン特権があります。[Chrome Extension コンテンツスクリプトにおける Cross-Origin Requests の変更点](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches)を参照してください。

## バックグラウンドスクリプトとの通信

コンテンツスクリプトは WebExtension の API のほとんどを直接使用することはできませんが、メッセージング API を使用して拡張機能のバックグラウンドスクリプトと通信できるため、バックグラウンドスクリプトが使用できるのと同じ API にすべて間接的にアクセスすることができます。

バックグラウンドスクリプトとコンテンツスクリプトの間の通信には、基本的な 2 つのパターンがあります。

- **単発のメッセージ**（オプションのレスポンス付き）を送信することができます。
- **両者の間に長寿命のコネクション**を設定し、そのコネクションを使用してメッセージを交換することができます。

### 単発のメッセージ

レスポンスが必須でない単発のを送るには、次の API を使います。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">コンテンツスクリプト内</th>
      <th scope="col">バックグラウンドスクリプト内</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">メッセージの送信</th>
      <td>
        <code
          ><a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">メッセージの受信</th>
      <td>
        <code
          ><a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

例えば、ウェブページでのクリックイベントを待ち受けするコンテンツスクリプトがここにあります。

クリックがリンク上である場合、ターゲット URL をバックグラウンドページにメッセージします。

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName !== "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

バックグラウンドスクリプトはこのメッセージを待ち受けして、[`notifications`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API を使って通知を表示します。

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

この例のコードは GitHub の [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) のサンプルから簡単に適用できます。

### コネクションベースのメッセージ

バックグラウンドスクリプトとコンテンツスクリプトの間で多くのメッセージを交換する場合、単発のメッセージの送信は面倒になることがあります。そこで、 2 つのコンテキスト間でより詳しい接続を確立し、この接続を使用してメッセージを交換するという方法があります。

いずれの側にも [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) オブジェクトがあり、メッセージ交換に使うことができます。

コネクションを作成するには次のようにします。

- 片方で [`runtime.onConnect`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) にてコネクションを待ち受けする。
- もう片方で次を呼び出す。

  - [`tabs.connect()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (コンテンツスクリプトに接続する場合)
  - [`runtime.connect()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (バックグラウンドスクリプトに接続する場合)

これは [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) オブジェクトを返します。

- [`runtime.onConnect`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) リスナーには自身の [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) オブジェクトが渡される。

それぞれがポートを持ったら、両方が、

- `runtime.Port.postMessage()` でメッセージを送って
- `runtime.Port.onMessage` でメッセージを受信できるようになる。

例えば、ロードしたらすぐに、このコンテンツスクリプトは、

- バックグラウンドに接続し
- `myPort` 変数に `Port` を格納する
- `myPort` のメッセージを待ち受けする (ログに出す)
- ユーザーがドキュメントをクリックしたとき、バックグラウンドスクリプトに `myPort` を使ってメッセージを送る

```js
// content-script.js

let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

対応するバックグラウンドスクリプトは、

- コンテンツスクリプトからの通信試行を待ち受けする
- 通信試行を受け取ったとき、

  - `portFromCS` という名前の変数にポートを格納する
  - そのポートを使ってコンテンツスクリプトにメッセージを送る
  - ポートに届いたメッセージを待ち受けしてログに出す

- ユーザーが拡張機能のブラウザーアクションをクリックしたとき、`portFromCS` を使ってコンテンツスクリプトにメッセージを送る

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener((m) => {
    portFromCS.postMessage({
      greeting: `In background script, received message from content script: ${m.greeting}`,
    });
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

#### 複数のコンテンツスクリプト

同時に複数のコンテンツスクリプトが通信する場合、各接続を配列に格納するのが良いかもしれません。

```js
// background-script.js

let ports = [];

function connected(p) {
  ports[p.sender.tab.id] = p;
  // …
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  ports.forEach((p) => {
    p.postMessage({ greeting: "they clicked the button!" });
  });
});
```

### 単発メッセージとコネクションベースのメッセージとの選択

単発とコネクションベースのメッセージの選択は、拡張機能がどうメッセージを利用すると期待されるかに依存します。

推奨されるベストプラクティスは、次の通りです。

- **単発メッセージを使用する場合**
  - メッセージに 1 つだけの応答がある場合
  - メッセージの受信を少しのスクリプトが待ち受けする場合({{WebExtAPIRef("runtime.onMessage")}} 呼び出し)
- **コネクションベースのメッセージを使用する場合**
  - スクリプトが、複数のメッセージを交換するセッションに関わる場合
  - 拡張機能がタスクの進捗や、タスクが中断されたのを知る必要がある場合、または初期化されたタスクをメッセージング経由で中断したい場合

## ウェブページとの通信

既定では、コンテンツスクリプトはページスクリプトが作成したオブジェクトにアクセスできませんが、DOM [`window.postMessage`](/ja/docs/Web/API/Window/postMessage) と [`window.addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) API を使ってページスクリプトと通信できます。

例えば:

```js
// page-script.js

let messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage(
    {
      direction: "from-page-script",
      message: "Message from the page",
    },
    "*",
  );
}
```

```js
// content-script.js

window.addEventListener("message", (event) => {
  if (
    event.source === window &&
    event?.data?.direction === "from-page-script"
  ) {
    alert(`Content script received message: "${event.data.message}"`);
  }
});
```

これの完全な動作サンプルは、[GitHub のデモページに行って](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html)指示に従ってください。

> **警告:** **この方法で信頼できないウェブコンテンツと相互作用するには細心の注意が必要です**！
> 拡張機能は強力な力を持つコードの権限があり、敵意のあるウェブページは簡単にこの力にアクセスします。
>
> 細かい例を作るには、メッセージを受け取ったコンテンツスクリプトがこのようなことを行うと仮定してください:
>
> ```js example-bad
> // content-script.js
>
> window.addEventListener("message", (event) => {
>   if (
>     event.source === window &&
>     event?.data?.direction === "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> 今やページスクリプトはコンテンツスクリプトのすべての権限でコードを実行できます。

## コンテンツスクリプト内で eval() を使う

> **メモ:** `eval()` はマニフェスト V3 では利用できません。

- Chrome では
  - : {{jsxref("Global_Objects/eval", "eval")}} は常にページコンテキストではなくて**コンテンツスクリプト**のコンテキストで動作します。
- Firefox では

  - : `eval()` を呼ぶ場合、**コンテンツスクリプト**のコンテキストで動作します。

    `window.eval()` を呼ぶ場合、**ページ**のコンテキストで動作します。

例えば、こんなコンテンツスクリプトを考えてみます。

```js
// content-script.js

window.eval("window.x = 1;");
eval("window.y = 2");

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage(
  {
    message: "check",
  },
  "*",
);
```

このコードは単に変数 x と y を、`window.eval()` と `eval()` を用いて作成し、値をログに出し、ページにメッセージします。

メッセージの受信に際し、ページスクリプトは同じ変数をログに出します。

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

Chrome では、こんな出力が生成されます:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

Firefox では、こんな出力が生成されます:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

同じことは {{domxref("Window.setTimeout", "setTimeout()")}}、{{domxref("Window.setInterval", "setInterval()")}}、[`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) にも言えます。

> [!WARNING]
> ページのコンテキストでコードを実行するときは特に注意してください！
>
> ページの環境が悪意をはらんだウェブページにコントロールされ、期待しない方法であなたが操作するオブジェクトを再定義するかもしれません。
>
> ```js example-bad
> // page.js redefines console.log
>
> let original = console.log;
>
> console.log = () => {
>   original(true);
> };
> ```
>
> ```js example-bad
> // content-script.js calls the redefined version
>
> window.eval("console.log(false)");
> ```
