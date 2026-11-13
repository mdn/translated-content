---
title: XMLHttpRequest の使い方
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

このガイドでは、ウェブサイトとサーバーの間でデータ交換をするために、 {{domxref("XMLHttpRequest")}} を使用して [HTTP](/ja/docs/Web/HTTP) リクエストを発行する方法を紹介します。

`XMLHttpRequest` のよくある使用例やもっと分かりにくい使用例も含まれています。

HTTP リクエストを送るには、

1. `XMLHttpRequest` オブジェクトを作成し、
2. URL を開き、
3. リクエストを送信します。

トランザクションが完了すると、 `XMLHttpRequest` オブジェクトには結果の [HTTP ステータスコード](/ja/docs/Web/HTTP/Reference/Status)やレスポンスの本文などの有益な情報が格納されます。

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## リクエストの種類

`XMLHttpRequest` によって作成されたリクエストは、非同期または同期のいずれかの方法でデータを取得することが可能です。リクエストをどちらの方法で行うかは、 {{domxref("XMLHttpRequest.open()")}} メソッドのオプションの `async` 引数（第 3 引数）で指示することができます。この引数を `true` にするか、指定しなければ `XMLHttpRequest` は非同期で処理され、それ以外だと同期的に扱われます。これら二つの種類のリクエストに関する詳細および使用例は、[同期および非同期リクエスト](/ja/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests)のページを参照してください。ウェブワーカー以外では同期リクエストを使用しないでください。

> [!NOTE]
> コンストラクター関数 `XMLHttpRequest` は XML 文書に限定されていません。 **"XML"** で始まっているのは、これが作成されたときに非同期データ交換に使用されていた主要な形式が XML であったからです。

## レスポンスの取り扱い

{{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} コンストラクターに定義されている [response 属性](https://xhr.spec.whatwg.org/)は何種類かがあります。これらはクライアントに `XMLHttpRequest` にレスポンスのステータスに関する重要な情報を作るように指示します。テキスト以外のレスポンス型を扱う場合は、後の節で概説する操作や解析が入ることがあるかもしれません。

### responseXML プロパティの解析と操作

リモートの XML 文書のコンテンツを得るために `XMLHttpRequest` を使う場合、 {{domxref("XMLHttpRequest.responseXML", "responseXML")}} プロパティが解釈済みの XML 文書を含む DOM オブジェクトとなります。これによって、操作や解析が難しくなる可能性があります。この XML 文書を解析するには主な 4 つの方法があります。

1. 一部を指すために [XPath](/ja/docs/Web/XML/XPath) を使う。
2. 手動で [XML を構文解析およびシリアライズして](/ja/docs/Web/XML/Guides/Parsing_and_serializing_XML)文字列やオブジェクトにする。
3. {{domxref("XMLSerializer")}} を使って **DOM ツリーを文字列やファイルに**シリアライズする。
4. 事前に XML 文書の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を `RegExp` でスキャンする場合に、改行を除去した方がよく見えることもありますが、 XML コードが少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

> [!NOTE]
> `XMLHttpRequest` は {{domxref("XMLHttpRequest.responseXML", "responseXML")}} プロパティを使用することによって、 HTML を解釈できるようになりました。この方法について学ぶには、 [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)についての記事をお読みください。

### HTML 文書を含む responseText プロパティの処理

`XMLHttpRequest` を使ってリモート HTML ウェブページのコンテンツを取得する場合、 {{domxref("XMLHttpRequest.responseText", "responseText")}} プロパティは生の HTML が入った文字列です。これは操作や解析が難しいことを示しています。この生の HTML 文字列を分析し解析するには、主に 3 つの方法があります。

1. [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)の記事で紹介されている `XMLHttpRequest.responseXML` プロパティを使用する。
2. [文書フラグメント](/ja/docs/Web/API/DocumentFragment)の本体を `fragment.body.innerHTML` を通してコンテンツに挿入し、そのフラグメントの DOM を走査する。
3. 事前に HTML の `responseText` の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を RegExp でスキャンする場合に、改行を除去した方がよく見えることもありますが、 HTML 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

## バイナリーデータの扱い

{{domxref("XMLHttpRequest")}} はテキストデータの送受信に最もよく使われますが、バイナリーコンテンツの送受信にも使えます。 `XMLHttpRequest` のレスポンスをバイナリーデータ送信に強制するためのテストされたメソッドがいくつかあります。この中には `XMLHttpRequest` オブジェクトの {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} メソッドを活用して使える解決法としているものも入っています。

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// バイナリー文字列として未処理のデータを取得する
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

しかし、もっと新しいテクニックも使用できます。 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性がいくつもの追加のコンテンツ型に対応するようになったので、バイナリーデータの送信や受信がずっと簡単になりました。

例えばこのスニペットでは、 `responseType` に `"arraybuffer"` を使用して、生のバイナリーデータを格納できる {{jsxref("ArrayBuffer")}} オブジェクトにリモートコンテンツを取得しています。

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // responseText ではない
  /* … */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

その他の例は、[バイナリーデータの送受信](/ja/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) ページを確認してください。

## 進捗の監視

`XMLHttpRequest` は、リクエストが処理されている間に発生する様々なイベントを待受けする機能を提供しています。これには定期的な進捗の通知、エラーの通知、などが含まれます。

`XMLHttpRequest` の転送を監視する DOM {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}} イベントの対応は、 [progress events 仕様（英語）](https://xhr.spec.whatwg.org/#interface-progressevent)に従います。このイベントは {{domxref("ProgressEvent")}} インターフェイスを実装しています。進行中の転送の状態を特定するために監視することができる実際のイベントは、以下の通りです。

- {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}
  - : 受取済みのデータ量が変化したとき。
- {{domxref("XMLHttpRequestEventTarget/load_event", "load")}}
  - : 転送が完了したとき。すべてのデータが `response` に入っています。

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// …

// サーバーからクライアントへの転送の進捗 (ダウンロード)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // 全体の長さが不明なため、進捗情報を計算できない
  }
}

function transferComplete(evt) {
  console.log("転送が完了しました。");
}

function transferFailed(evt) {
  console.log("ファイルの転送中にエラーが発生しました。");
}

function transferCanceled(evt) {
  console.log("ユーザーが転送をキャンセルしました。");
}
```

`XMLHttpRequest` を使ってデータ転送を行うときに送られる色々なイベントへのためのイベントリスナーを追加しています。

> [!NOTE]
> イベントリスナーはリクエストの `open()` を呼び出す前に追加する必要があります。そうしないと `progress` イベントは発生しません。

この例では `updateProgress()` 関数で指定される進捗イベントハンドラーは、イベントの `total` および `loaded` フィールドで、転送すべき総バイト数とこれまでに転送したバイト数を受け取ります。ただし、`lengthComputable` フィールドが false の場合、合計の長さは分からないので 0 になります。

進捗イベントはダウンロード、アップロードの両方に存在します。ダウンロードのイベントは、上記サンプルのように、`XMLHttpRequest` オブジェクトそのもので発生します。アップロードのイベントは下記のように、 `XMLHttpRequest.upload` オブジェクトで発生します。

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> 進捗イベントは `file:` プロトコルでは利用できません。

progress イベントは、受信したデータの塊ごとに発生します。 progress イベントが発行される前に最後のパケットを受信して接続が閉じられた場合には、最後の塊でも発生します。この場合、 progress イベントは、そのパケットに対して load イベントが発生したときに自動的に発行されます。これで、 "progress" イベントを見るだけで、確実に進捗を監視できるようになりました。

ロードを終える 3 つの条件（`abort`, `load`, `error`のいずれか）を `loadend` イベントで検出することもできます。

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

注意点として、 `loadend` イベントで受け取った情報から、どの条件で動作が終了したのかを確かめる方法はありません。しかし、これを使ってすべての転送終了シナリオにて行う必要のあるタスクを処理できます。

## 最終更新日の取得

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // 有効な GMTString の日付または null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // ヘッダーのみが必要であれば HEAD を使用する
  "your-page.html",
);
req.onload = getHeaderTime;
req.send();
```

### 最終更新日付が変わった時に何かする

２つの関数を作ってみましょう。

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open("HEAD" /* use HEAD - we only need the headers! */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

そしてテストします。

```js
// ファイル "yourpage.html" をテストする
ifHasChanged("your-page.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      modified,
    ).toLocaleString()}!`,
  );
});
```

現在のページが変更されたかどうかを知りたい場合は、 {{domxref("document.lastModified")}} についての記事をお読みください。

## サイトをまたがる XMLHttpRequest

現在のブラウザーは、[オリジン間リソース共有](/ja/docs/Web/HTTP/Guides/CORS) (Cross-Origin Resource Sharing, CORS) を実装することでサイト間リクエストに対応しています。サーバーがウェブアプリケーションのオリジンからのリクエストを許可するように構成されている場合のみ、 `XMLHttpRequest` は動作します。それ以外の場合は、 `INVALID_ACCESS_ERR` 例外が投げられます。

## キャッシュをバイパスする

ブラウザー間で互換性のある、キャッシュをバイパスするアプローチは、 URL にタイムスタンプを追加することで、適切に "?" 又は "&" を付け加えます。例えば以下のようにします。

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

ローカルのキャッシュは URL によって索引づけられるため、これですべてのリクエストが固有のものとなり、それによってキャッシュをバイパスします。

以下のコードを使用すると、自動的に URL を調整することができます。

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## セキュリティ

サイト間スクリプトを有効にするための推奨される方法は、 XMLHttpRequest へのレスポンスの中で HTTP の `Access-Control-Allow-Origin` ヘッダーを使用することです。

### XMLHttpRequests の停止

XMLHttpRequest が `status=0` および `statusText=null` を受信して終了すると、リクエストを実行することが許可されていないことを意味します。これは未送信 ([`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent)) 状態です。この原因の多くは、 XMLHttpRequest が `open()` の時に `XMLHttpRequest` のオリジン（XMLHttpRequest が作成された場所）が変更されたことによるものです。これは例えば、 XMLHttpRequest を持ったページで onunload イベントが発生し、ウィンドウが閉じようとしている時に XMLHttpRequest が作成され、ウィンドウがフォーカスを失って他のウィンドウがフォーカスを得たときにリクエストの送信（言い換えれば `open()`）が行なわれた場合に発生することがあります。この問題を防ぐ最も効果的な方法は、新しいウィンドウの {{domxref("Element/DOMActivate_event", "DOMActivate")}} イベントのリスナーを、 {{domxref("Window/unload_event", "unload")}} イベントが発生したときに設定することです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API の使い方](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP アクセス制御](/ja/docs/Web/HTTP/Guides/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [The `XMLHttpRequest` object: WHATWG specification](https://xhr.spec.whatwg.org/)
