---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**XMLHttpRequest API** を使用すことで、ウェブアプリケーションがウェブサーバーに HTTP リクエストを行い、JavaScript を使用してプログラムでレスポンスを受け取ることができます。これによりウェブサイトは、新しいページに移動することなく、サーバーからのデータでページの一部だけを更新することができます。この方法は、 {{glossary("AJAX")}} としても知られています。

[フェッチ API](/ja/docs/Web/API/Fetch_API) は XMLHttpRequest API をより柔軟で強力に置き換えたものです。フェッチ API は、非同期レスポンスを処理するためにイベントの代わりに{{jsxref("Promise", "プロミス", "", 1)}}を使用し、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)とうまく統合し、 [CORS](/ja/docs/Web/HTTP/Guides/CORS) のような HTTP の高度な側面に対応しています。これらの理由から、現代のウェブアプリケーションでは、{{domxref("XMLHttpRequest")}} の代わりにフェッチ API を使用するのが一般的です。

## 概念と使用方法

XMLHttpRequest API の中心となるインターフェイスは {{domxref("XMLHttpRequest")}} です。 HTTP リクエストを行うには、以下のようにします。

1. 新しい `XMLHttpRequest` のインスタンスを、{{domxref("XMLHttpRequest.XMLHttpRequest", "コンストラクター", "", "nocode")}}を呼び出すことで作成します。
2. {{domxref("XMLHttpRequest.open()")}} を呼び出して初期化します。この時点で、リクエストの URL、使用する [HTTP メソッド](/ja/docs/Web/HTTP/Reference/Methods)、オプションでユーザー名ーとパスワードを提供します。
3. リクエストの結果を取得するイベントハンドラーを取り付けます。例えば、 {{domxref("XMLHttpRequestEventTarget/load_event", "load")}} イベントはリクエストが完全に完了した時に発行され、 {{domxref("XMLHttpRequestEventTarget/error_event", "error")}} イベントは様々なエラー状態の時に発行されます。
4. {{domxref("XMLHttpRequest.send()")}} を呼び出してリクエストを送信します。

XMLHttpRequest API の詳細なガイドについては、 [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)を参照してください。

## インターフェイス

- {{domxref("FormData")}}
  - : {{htmlelement("form")}} のフィールドとその値を表すオブジェクトで、 {{domxref("XMLHttpRequest")}} または {{domxref("Window/fetch", "fetch()")}} を用いてサーバーに送信することができます。
- {{domxref("ProgressEvent")}}
  - : {{domxref("Event")}} のサブクラスで {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}} に渡され、リクエストがどれだけ進行したかの情報を格納します。
- {{domxref("XMLHttpRequest")}}
  - : 単一の HTTP リクエストを表します。
- {{domxref("XMLHttpRequestEventTarget")}}
  - : {{domxref("XMLHttpRequest")}} および {{domxref("XMLHttpRequestUpload")}} のスーパークラスで、どちらでも利用できるイベントを定義しています。
- {{domxref("XMLHttpRequestUpload")}}
  - : HTTP アップロードのアップロード処理を表します。コードがアップロードの進捗を追跡できるようにするイベントを提供します。

## 例

### サーバーから JSON データを読み取り

この例では、 `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json` から JSON ファイルを取得し、イベントの進捗状況を表示させるイベントリスナーを追加しています。

#### HTML

```html
<div class="controls">
  <button class="xhr" type="button">クリックすると XHR を開始</button>
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

button {
  width: 12rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButton = document.querySelector(".xhr");
const log = document.querySelector(".event-log");
const url =
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} バイト転送しました\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

xhrButton.addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  addListeners(xhr);
  xhr.send();
});
```

#### 結果

{{EmbedLiveSample("Fetching JSON data from the server")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
