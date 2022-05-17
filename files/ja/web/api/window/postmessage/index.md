---
title: Window.postMessage()
slug: Web/API/Window/postMessage
tags:
  - API
  - オリジン間通信
  - HTML DOM
  - メソッド
  - メソッド
  - Window
  - postMessage
browser-compat: api.Window.postMessage
translation_of: Web/API/Window/postMessage
---
{{ApiRef("HTML DOM")}}

**`window.postMessage()`** は、 {{domxref("Window")}} オブジェクト間で安全にオリジン間通信を可能にするためのメソッドです。例えば、ポップアップとそれを表示したページの間や、iframe とそれが埋め込まれたページの間での通信に使うことができます。

通常、異なった複数のページでのスクリプトはそれらが実行されたページが同じプロトコル、ポート番号、ホストである場合に限りお互いにアクセスすることが可能です ("[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)" とも呼ばれます)。正しく使用した `window.postMessage` はこの制限を安全に回避するための制御された仕組みを提供します。

大まかには、ウィンドウが他のウィンドウへの参照を取得できる場合 ( `targetWindow = window.opener` など)、`targetWindow.postMessage()` を使って {{domxref("MessageEvent")}} をそのウィンドウ上で配信することができます。受け取ったウィンドウでは必要に応じて自由に[イベントを処理](/ja/docs/Web/Guide/Events)することができます。`window.postMessage()` に渡された引数 ("message") は[イベントオブジェクトを通して対象のウィンドウに公開されます](#配信されるイベント)。

## 構文

```js
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)
```

### 引数

- `message`
  - : 他のウィンドウに送られるデータ。データは{{domxref("Web_Workers_API/Structured_clone_algorithm", "構造化クローンアルゴリズム", "", 1)}}に従ってシリアル化されます。つまり、手動でシリアル化することなく様々なデータオブジェクトを宛先に安全に渡すことができます。
- `targetOrigin`
  - : イベントを配信するこのウィンドウのオリジンを指定します。リテラル文字列 `"*"` (優先順位なし) か URI のどちらかで指定します。イベントが配信される予定時刻に、このウィンドウの文書のスキーム、ホスト名、ポートが `targetOrigin` で指定されたものと一致しない場合、イベントは配信されません。この仕組みにより、メッセージが送信される場所を制御できます。例えば、 `postMessage()` をパスワードを送信するために使用する場合、悪意のある第三者によるパスワードの傍受を防ぐために、この引数がパスワードを含むメッセージの受信予定者と同じオリジンの URI であることが絶対に重要でしょう。 **他のウィンドウの文書がどこにあるものか知っている場合は、 `*` ではなく、常に特定の `targetOrigin` を指定してください。特定のターゲットを指定しないと、悪意のあるサイトに送信したデータが開示されてしまいます。**
- `transfer` {{optional_Inline}}
  - : メッセージと一緒に転送される{{Glossary("transferable objects", "転送可能オブジェクト")}}のシーケンスです。これらのオブジェクトの所有権は送信先に移動され、送信元では使えなくなります。

### 返値

なし ({{jsxref("undefined")}})。

## 配信されるイベント

`window` は以下の JavaScript を実行することで、配信されたメッセージを受け取ることができます。

```js
window.addEventListener("message", (event) => {
  if (event.origin !== "http://example.org:8080")
    return;

  // ...
}, false);
```

配信されたメッセージには、以下のプロパティがあります。

- `data`
  - : 他のウィンドウから渡されたメッセージを保持しているオブジェクト。
- `origin`
  - : `postMessage` が呼び出されたときにメッセージを送るウィンドウの{{Glossary("origin", "オリジン")}}。この文字列は、プロトコルと "://"、ホスト名（存在する場合）、そして、":" の後に続くポート番号（既定のポートと指定したポートが異なる場合）が連結されたものです。典型的なオリジンの例は `https://example.org` (この場合のポートは `443`)、`http://example.net` (この場合のポートは `80`)、そして `http://example.com:8080`。このオリジン生成元はそのウィンドウの現在もしくは将来のオリジンであることを保証*していない*ことに注意してください。 `postMessage` が呼び出された時とは異なる場所に移動しているかもしれません。
- `source`
  - : メッセージを送った {{domxref("window")}} オブジェクトへの参照。これを使うことでオリジンの異なる二つのウィンドウ間で双方向の通信を確立することができます。

## セキュリティの考慮事項

**他のサイトからメッセージを受け取りたくない場合、`message` イベントに対して一切イベントリスナーを追加しないでください。**これはセキュリティ的な問題を避けるための完全にフールプルーフな方法です。

他のサイトからメッセージを受け取りたい場合、`origin` あるいは `source` プロパティを用いて**常に送信者の識別情報を確かめてください**。任意のウィンドウ（例えば、`http://evil.example.com` も含む）は任意の他のウィンドウにメッセージを送ることができ、見知らぬ送信者が悪意あるメッセージを送らない保証はありません。識別情報を確かめたとしても、**常に受け取ったメッセージの構文を確かめる**べきです。そうしないと、信頼されたメッセージだけを送るとして信頼されたサイトにセキュリティホールが存在した場合に、クロスサイトスクリプティングのセキュリティホールをサイトに開けることになり得ます。

**他のウィンドウに `postMessage` でデータを送信する場合、 `*` ではなく、常に具体的なターゲットオリジンを指定してください。**悪意を持ったサイトはあなたの知らないうちに送信先ウィンドウの場所を変更することができ、そのまま `postMessage` で送信されたデータを傍受することができてしまいます。

### 安全な共有メモリーによるメッセージ

`postMessage()` が {{jsxref("SharedArrayBuffer")}} オブジェクトを扱った際ににエラーが発生した場合は、サイトのサイト間分離を適切に行う必要があります。共有メモリーは、 2 つの HTTP ヘッダーの後ろにゲートされています。

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} で `same-origin` を値に指定する（オリジンを攻撃者から保護する）
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} で `require-corp` を値に指定する（このオリジンから被害者を守る）

```plain
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

オリジン間の分離が成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用できる {{domxref("crossOriginIsolated")}} プロパティを確認することで実現することができます。

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

ブラウザー（例えば Firefox 79）に展開され始めている{{jsxref("Global_Objects/SharedArrayBuffer/Planned_changes", "共有メモリーに関する変更予定", "", 1)}}もご覧ください。

## 例

```js
/*
 * http://example.com:8080 にある、window A のスクリプト:
 */

var popup = window.open(/* ポップアップの詳細 */);

// ポップアップブロッカーでブロックされず、ポップアップが完全にロードされたとき

// ウィンドウがその場所を変更していない場合、これは何もしません。
popup.postMessage("ユーザー名は 'bob' 、パスワードは 'secret' です",
                  "https://secure.example.net");

// ウィンドウがその場所を変更していない場合、
//これはポップアップに送るメッセージのキューに追加します。
popup.postMessage("hello there!", "http://example.com");

window.addEventListener("message", (event) => {
  // このメッセージの送信者は信頼している者か？（例えば、最初開いたものと違
  // うかもしれません）。
  if (event.origin !== "http://example.com")
    return;

  // event.source は popup
  // event.data は "hi there yourself!  the secret response is: rheeeeet!"
}, false);
```

```js
/*
 * http://example.com で実行される popup のスクリプト:
 */

// postMessage が呼び出された後に呼び出されます。
window.addEventListener("message", (event) => {
  // このメッセージの送信者は信頼している者か？
  if (event.origin !== "http://example.com:8080")
    return;

  // event.source は window.opener
  // event.data は "hello there!"

  // 受け取ったメッセージのオリジンを確かめたい場合（どんな場合でもそうするべ
  // きです）、メッセージに返答するための便利なイディオムは event.source 上
  // の postMessage を呼び出し、targetOrigin に event.origin を指定すること
  // です。
  event.source.postMessage("hi there yourself!  the secret response " +
                           "is: rheeeeet!",
                           event.origin);
}, false);
```

## メモ

任意のウィンドウが、いつでも、ウィンドウの文書の場所にかかわらず、メッセージを送るために、任意の他のウィンドウ上でこのメソッドにアクセスするかもしれません。従って、任意のイベントリスナーはメッセージを受け取る際に、`origin` あるいは `source` プロパティを用いて、まず最初にメッセージの送信者の識別情報をチェック**しなければなりません**。これを軽視することはできません。なぜなら、**`origin` あるいは `source` プロパティのチェックの失敗はクロスサイトスクリプティング攻撃を可能にする**からです。

非同期に配信されるスクリプト（タイムアウト、ユーザーが生成したイベント）のために `postMessage` の呼び出し元の判別が不可能であるとき、`postMessage` によって送られるイベントを待ち受けているイベントハンドラは例外を投げます。

`postMessage()` は {{domxref("MessageEvent")}} を、*すべての待ち状態の実行コンテキストが終了した後のみ*配信するためにスケジューリングします。例えば、 `postMessage()` がイベントハンドラーから呼び出された場合、 {{domxref("MessageEvent")}} が配信される前に、そのイベントハンドラーが最後まで実行され、同じイベントの残りのハンドラーが実行されます。

配信されるイベントの `origin` プロパティは呼び出すウィンドウの `document.domain` の現在の値に影響されません。

IDN ホスト名に限った話ですが、`origin` プロパティの値が Unicode と Punycode のどちらなのかは一貫していません。ですから、IDN サイトからのメッセージを期待する場合にこのプロパティを用いるときは、互換性を高めるために、IDN と Punycode の両方でチェックしてください。この値は最終的には 一貫して IDN になるはずですが、現在は IDN と Punycode 両方の形式を扱うべきです。

送信元ウィンドウが `javascript:` や `data:` のURLを持つ場合、`origin` プロパティの値はその URL を読み込んだスクリプトのオリジンになります。

### window\.postMessage を拡張機能で使う {{Non-standard_inline}}

`window.postMessage` はクロームコード（拡張機能内および特権コード内）で実行される JavaScript で利用できます。しかし、配信されるイベントの `source` プロパティはセキュリティ上の制限から常に `null` です（他のプロパティは期待された値です）。

コンテンツスクリプトやウェブコンテキストスクリプトは `targetOrigin` を拡張機能 (バックグラウンドスクリプトやコンテンツスクリプト) と直接通信するために指定することはできません。ウェブやコンテンツのスクリプトは、 `window.postMessage` を `targetOrigin` を `"*"` にして使用することで、すべてのリスナーにブロードキャストすることができますが、これは拡張機能がそのようなメッセージのオリジンを特定することができないこと、他のリスナー (制御するべきでないものも含む) が待ち受けしている可能性があるため推奨されません。

コンテンツスクリプトでバックグラウンドスクリプトと通信したい場合は {{WebExtAPIRef("runtime.sendMessage")}} を使うべきです。ウェブコンテキストスクリプトでバックグラウンドスクリプトと通信したい場合はカスタムイベント（ゲストページから覗かれなくない場合など、必要であればランダム生成したイベント名で）を使うことができます。

最後に、 `file:` URL のページへのメッセージを送るには `targetOrigin` 引数を `"*"` にする必要があります。 `file://` はセキュリティ上の制限のために用いることはできません、この制限は将来修正されるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.domain")}}
- {{domxref("CustomEvent")}}
- {{domxref("BroadcastChannel")}} - 同一オリジンの通信用
