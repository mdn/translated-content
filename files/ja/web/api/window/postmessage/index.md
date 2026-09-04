---
title: "Window: postMessage() メソッド"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{ApiRef("HTML DOM")}}

**`window.postMessage()`** は、 {{domxref("Window")}} オブジェクト間で安全にオリジン間通信を可能にするためのメソッドです。例えば、ポップアップとそれを表示したページの間や、iframe とそれが埋め込まれたページの間での通信に使うことができます。

通常、異なった複数のページでのスクリプトはそれらが実行されたページが同じ[オリジン](/ja/docs/Web/API/Location/origin)である場合に限りお互いにアクセスすることが可能です（「[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)」とも呼ばれます）。正しく使用した `window.postMessage` はこの制限を安全に回避するための制御された仕組みを提供します。

さらに、アクセスするスクリプトは、アクセスする文書のウィンドウオブジェクトを事前に取得しておく必要があります。これは、ポップアップの場合は [`window.open()`](/ja/docs/Web/API/Window/open)、iframe の場合は [`iframe.contentWindow`](/ja/docs/Web/API/HTMLIFrameElement/contentWindow) などのメソッドを使用して行うことができます。

大まかには、ウィンドウが他のウィンドウへの参照を取得できる場合（`targetWindow = window.opener` など）、 `targetWindow.postMessage()` を使って {{domxref("MessageEvent")}} をそのウィンドウ上で配信することができます。受け取ったウィンドウでは必要に応じて自由に[イベントを処理](/ja/docs/Web/API/Document_Object_Model/Events)することができます。 `window.postMessage()` に渡された引数 ("message") は[イベントオブジェクトを通して対象のウィンドウに公開されます](#配信されるイベント)。

## 構文

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### 引数

- `message`
  - : 他のウィンドウに送られるデータ。データは{{domxref("Web_Workers_API/Structured_clone_algorithm", "構造化複製アルゴリズム", "", 1)}}に従ってシリアル化されます。つまり、手動でシリアル化することなく様々なデータオブジェクトを宛先に安全に渡すことができます。
- `targetOrigin` {{optional_Inline}}
  - : イベントを配信するこのウィンドウの[オリジン](/ja/docs/Glossary/Origin)を指定します。イベントが配信されるためには、オリジンが完全に一致する必要があります （スキーム、ホスト名、およびポートを含む）。省略した場合は、メソッドを呼び出しているオリジンが既定値となります。この仕組みにより、メッセージの送信先を制御することができます。例えば、 `postMessage()` を使用してパスワードを送信する場合、悪意のある第三者によるパスワードの傍受を防ぐため、この引数は、パスワードを含むメッセージの意図した受信者と同じオリジンを持つ URI であることが絶対に必要です。 `*` を指定することもできますが、これは、メッセージを、あらゆるオリジンを持つリスナーに配信できることを意味します。
    > [!NOTE]
    > 他のウィンドウの文書がどこにあるものか知っている場合は、 `*` ではなく、常に特定の `targetOrigin` を指定してください。特定のターゲットを指定しないと、悪意のあるサイトに送信したデータが開示されてしまいます。
- `transfer` {{optional_inline}}
  - : オプションで、所有権を移譲する[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)。これらのオブジェクトの所有権は出力先に渡され、送信側では使用できなくなります。これらの移譲可能オブジェクトはメッセージに添付する必要があります。そうしないと、移動はされますが、受信側では実際にはアクセスできなくなります。
- `options` {{optional_inline}}
  - : 次のプロパティを含むオプションのオブジェクトです。
    - `transfer` {{optional_inline}}
      - : `transfer` 引数と同じ意味です。
    - `targetOrigin` {{optional_inline}}
      - : `targetOrigin` 引数と同じ意味です。

### 返値

なし ({{jsxref("undefined")}})。

## 配信されるイベント

`window` は以下の JavaScript を実行することで、配信されたメッセージを受け取ることができます。

```js
window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== "http://example.org:8080") return;

    // …
  },
  false,
);
```

配信されたメッセージには、以下のプロパティがあります。

- `data`
  - : 他のウィンドウから渡されたメッセージを保持しているオブジェクト。
- `origin`
  - : `postMessage` が呼び出されたときにメッセージを送るウィンドウの{{Glossary("origin", "オリジン")}}。この文字列は、プロトコルと "://"、ホスト名（存在する場合）、そして、 ":" の後に続くポート番号（既定のポートと指定したポートが異なる場合）が連結されたものです。典型的なオリジンの例は `https://example.org` (この場合のポートは `443`)、`http://example.net` (この場合のポートは `80`)、そして `http://example.com:8080`。このオリジン生成元はそのウィンドウの現在もしくは将来のオリジンであることを保証*していない*ことに注意してください。 `postMessage` が呼び出された時とは異なる場所に移動しているかもしれません。
- `source`
  - : メッセージを送った {{domxref("window")}} オブジェクトへの参照。これを使うことでオリジンの異なる二つのウィンドウ間で双方向の通信を確立することができます。

## セキュリティの考慮事項

**他のサイトからメッセージを受け取りたくない場合、 `message` イベントに対して一切イベントリスナーを追加しないでください**。これはセキュリティ的な問題を避けるための完全にフールプルーフな方法です。

他のサイトからメッセージを受け取りたい場合、`origin` あるいは `source` プロパティを用いて**常に送信者の識別情報を確かめてください**。あらゆるウィンドウ（例えば `http://evil.example.com` を含む）が、現在の文書内の最上位から下位のすべての iframe に対して、iframe 階層内の他のウィンドウにメッセージを送信することができます。識別情報を確かめたとしても、**常に受け取ったメッセージの構文を確かめる**べきです。そうしないと、信頼されたメッセージだけを送るとして信頼されたサイトにセキュリティホールが存在した場合に、クロスサイトスクリプティングのセキュリティホールをサイトに開けることになり得ます。

**他のウィンドウに `postMessage` でデータを配信する場合、 `*` ではなく、常に具体的なターゲットオリジンを指定してください**。悪意を持ったサイトはあなたの知らないうちに送信先ウィンドウの場所を変更することができ、そのまま `postMessage` で送信されたデータを傍受することができてしまいます。

### 安全な共有メモリーによるメッセージ

`postMessage()` が {{jsxref("SharedArrayBuffer")}} オブジェクトを扱った際にエラーが発生した場合は、サイトのサイト間分離を適切に行う必要があります。共有メモリーは、 2 つの HTTP ヘッダーの後ろにゲートされています。

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} で `same-origin` を値に指定する（オリジンを攻撃者から保護する）
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} で `require-corp` または `credentialless` を値に指定する（このオリジンから被害者を守る）

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

オリジン間の分離が成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用できる {{domxref("Window.crossOriginIsolated")}} プロパティを確認することで実現することができます。

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## 例

```js
/*
 * http://example.com:8080 にある、window A のスクリプト:
 */

const popup = window.open(/* ポップアップの詳細 */);

// ポップアップブロッカーでブロックされず、ポップアップが完全にロードされたとき

// ウィンドウがその場所を変更していない場合、これは何もしません。
popup.postMessage(
  "ユーザー名は 'bob' 、パスワードは 'secret' です",
  "https://secure.example.net",
);

// ウィンドウがその場所を変更していない場合、
//これはポップアップに送るメッセージのキューに追加します。
popup.postMessage("hello there!", "http://example.com");

window.addEventListener(
  "message",
  (event) => {
    // このメッセージの送信者は信頼している者か？（例えば、最初開いたものと違
    // うかもしれません）。
    if (event.origin !== "http://example.com") return;

    // event.source は popup
    // event.data は "hi there yourself! the secret response is: rheeeeet!"
  },
  false,
);
```

```js
/*
 * http://example.com で実行される popup のスクリプト:
 */

// postMessage が呼び出された後に呼び出されます。
window.addEventListener("message", (event) => {
  // このメッセージの送信者は信頼している者か？
  if (event.origin !== "http://example.com:8080") return;

  // event.source は window.opener
  // event.data は "hello there!"

  // 受け取ったメッセージのオリジンを確かめたい場合（どんな場合でもそうするべ
  // きです）、メッセージに返答するための便利なイディオムは event.source 上
  // の postMessage を呼び出し、targetOrigin に event.origin を指定すること
  // です。
  event.source.postMessage(
    "hi there yourself! the secret response " + "is: rheeeeet!",
    event.origin,
  );
});
```

### メモ

ウィンドウ内の文書にあるスクリプトは、そのウィンドウオブジェクトを取得して、そのウィンドウオブジェクトで `.postMessage()` を呼び出すことで、別のウィンドウ内の文書にメッセージを配信するようにリクエストすることができます。従って、任意のイベントリスナーはメッセージを受け取る際に、`origin` あるいは `source` プロパティを用いて、まず最初にメッセージの送信者の識別情報をチェック**しなければなりません**。これを軽視することはできません。なぜなら、**`origin` あるいは `source` プロパティのチェックの失敗はクロスサイトスクリプティング攻撃を可能にする**からです。

非同期に配信されるスクリプト（タイムアウト、ユーザーが生成したイベント）のために `postMessage` の呼び出し元の判別が不可能であるとき、`postMessage` によって送られるイベントを待ち受けているイベントハンドラは例外を投げます。

`postMessage()` は {{domxref("MessageEvent")}} を、*すべての待ち状態の実行コンテキストが終了した後のみ*配信するためにスケジューリングします。例えば、 `postMessage()` がイベントハンドラーから呼び出された場合、 {{domxref("MessageEvent")}} が配信される前に、そのイベントハンドラーが最後まで実行され、同じイベントの残りのハンドラーが実行されます。

配信されるイベントの `origin` プロパティは呼び出すウィンドウの `document.domain` の現在の値に影響されません。

IDN ホスト名に限った話ですが、`origin` プロパティの値が Unicode と Punycode のどちらなのかは一貫していません。ですから、IDN サイトからのメッセージを期待する場合にこのプロパティを用いるときは、互換性を高めるために、IDN と Punycode の両方でチェックしてください。この値は最終的には 一貫して IDN になるはずですが、現在は IDN と Punycode 両方の形式を扱うべきです。

送信元ウィンドウが [`javascript:`](/ja/docs/Web/URI/Reference/Schemes/javascript) や [`data:`](/ja/docs/Web/URI/Reference/Schemes/data) の URL を持つ場合、 `origin` プロパティの値はその URL を読み込んだスクリプトのオリジンになります。

### window\.postMessage を拡張機能で使う {{Non-standard_inline}}

`window.postMessage` はクロームコード（拡張機能内および特権コード内）で実行される JavaScript で利用できます。しかし、配信されるイベントの `source` プロパティはセキュリティ上の制限から常に `null` です（他のプロパティは期待された値です）。

コンテンツスクリプトやウェブコンテキストスクリプトは `targetOrigin` を拡張機能 (バックグラウンドスクリプトやコンテンツスクリプト) と直接通信するために指定することはできません。ウェブやコンテンツのスクリプトは、 `window.postMessage` を `targetOrigin` を `"*"` にして使用することで、すべてのリスナーにブロードキャストすることができますが、これは拡張機能がそのようなメッセージのオリジンを特定することができないこと、他のリスナー (制御するべきでないものも含む) が待ち受けしている可能性があるため推奨されません。

コンテンツスクリプトでバックグラウンドスクリプトと通信したい場合は {{WebExtAPIRef("runtime.sendMessage")}} を使うべきです。ウェブコンテキストスクリプトでバックグラウンドスクリプトと通信したい場合はカスタムイベント（ゲストページから覗かれなくない場合など、必要であればランダム生成したイベント名で）を使うことができます。

最後に、 `file:` URL のページへのメッセージを配信するには `targetOrigin` 引数を `"*"` にする必要があります。 `file://` はセキュリティ上の制限のために用いることはできません、この制限は将来修正されるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.domain")}}
- {{domxref("CustomEvent")}}
- {{domxref("BroadcastChannel")}} - 同一オリジンの通信用
