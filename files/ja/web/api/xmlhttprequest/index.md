---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
tags:
  - AJAX
  - API
  - 通信
  - HTTP
  - インターフェイス
  - リファレンス
  - ウェブ
  - XHR
  - XMLHttpRequest
browser-compat: api.XMLHttpRequest
translation_of: Web/API/XMLHttpRequest
---
{{DefaultAPISidebar("XMLHttpRequest")}}

`XMLHttpRequest` (XHR) オブジェクトは、サーバーと対話するために使用されます。ページ全体を更新する必要なしに、データを受け取ることができます。これでユーザーの作業を中断させることなく、ウェブページの一部を更新することができます。

`XMLHttpRequest` は {{Glossary("AJAX")}} プログラミングで頻繁に使用されます。

{{InheritanceDiagram}}

`XMLHttpRequest` という名前ではあるものの、 XML だけでなく、あらゆる種類のデータを受け取るために使用することができます。

通信においてサーバーからのイベントデータやメッセージデータの受信を含む必要があるのであれば、 [Server-sent event](/ja/docs/Web/API/Server-sent_events) の {{domxref("EventSource")}} インターフェイスを使用することも検討してください。全二重の通信では、 [WebSocket](/ja/docs/Web/API/WebSockets_API) の方が良いかもしれません。

{{AvailableInWorkers("notservice")}}

## コンストラクター

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : XMLHttpRequest を初期化するコンストラクターです。これは、他のメソッドを呼び出す前に呼び出さなければなりません。

## プロパティ

_このインターフェイスは、 {{domxref("XMLHttpRequestEventTarget")}} および {{domxref("EventTarget")}} のプロパティを継承しています。_

- {{domxref("XMLHttpRequest.onreadystatechange")}}
  - : [イベントハンドラー](/ja/docs/Web/Events/Event_handlers) で、 `readyState` 属性が変化する度に呼び出されます。
- {{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}
  - : `unsigned short` でリクエストの状態を返します。
- {{domxref("XMLHttpRequest.response")}} {{readonlyinline}}
  - : {{jsxref("ArrayBuffer")}}, {{domxref("Blob")}}, {{domxref("Document")}}, JavaScript オブジェクト, {{domxref("DOMString")}} の何れか（{{domxref("XMLHttpRequest.responseType")}} の値による）で、リクエストのエンティティ本文を返します。
- {{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}
  - : {{domxref("DOMString")}} でリクエストに対するレスポンスをテキスト形式で返すか、リクエストが失敗した場合や、まだ送信されていない場合は `null` を返します。
- {{domxref("XMLHttpRequest.responseType")}}
  - : 列挙型の値で、レスポンス型を定義します。
- {{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}
  - : レスポンスのシリアライズされた URL、または URL が null であれば空文字列を返します。
- {{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}
  - : {{domxref("Document")}} でリクエストに対するレスポンスが入ったを返すか、またはリクエストが成功しなかった場合、まだ送信されていない場合、 XML または HTML として解釈できなかった場合は `null` を返します。
- {{domxref("XMLHttpRequest.status")}} {{readonlyinline}}
  - :  `unsigned short` でリクエストに対するレスポンスのステータスを返します。
- {{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}

  - : {{domxref("DOMString")}} で HTTP サーバーから返ってきたレスポンス文字列を返します。 {{domxref("XMLHttpRequest.status")}} とは異なり、("`200 OK`" のような) レスポンスメッセージの完全な文が含まれています。

    > **Note:** HTTP/2 仕様書 ([8.1.2.4](https://http2.github.io/http2-spec/#rfc.section.8.1.2.4) [レスポンス擬似ヘッダーフィールド](https://http2.github.io/http2-spec/#HttpResponse)) によれば、 HTTP/2 では、 HTTP/1.1 のステータス行に含まれていたバージョンや原因の文を伝える方法が定義されていません。

- {{domxref("XMLHttpRequest.timeout")}}
  - : `unsigned long` 型で、リクエストを自動的に終了できるようになるまでの時間をミリ秒単位で表します。
- {{domxref("XMLHttpRequestEventTarget.ontimeout")}}
  - : [イベントハンドラー](/ja/docs/Web/Events/Event_handlers)で、リクエストがタイムアウトするたびに呼び出されます。
- {{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}
  - : {{domxref("XMLHttpRequestUpload")}} で、アップロードプロセスを表します。
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : 論理値で、サイト間の `Access-Control` リクエストでクッキーや認証ヘッダーなどの資格情報を使用するかどうかを示します。

### 標準外のプロパティ

- {{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}
  - : リクエストの実行の際にオブジェクトによって使われるチャンネルです。
- {{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}
  - : 論理値です。 true の場合、リクエストを Cookie や認証ヘッダーを伴わずに送信します。
- {{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}
  - : 論理値です。 true の場合、リクエストで同一オリジンポリシーは適用されません。
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : 論理値です。このオブジェクトがバックグラウンドサービスのリクエストを表しているかどうかを示します。

### イベントハンドラー

`onreadystatechange` は `XMLHttpRequest` のインスタンスのプロパティとして、すべてのブラウザーが対応しています。

それ以来、数多くの追加のイベントハンドラーが様々なブラウザーに実装されてきています (`onload`, `onerror`, `onprogress`, など)。 [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)を参照してください。

Firefox を含め、より新しいブラウザーでは、 `XMLHttpRequest` のイベントを `on*` プロパティをハンドラー関数に設定する方法に加えて、標準の {{domxref("EventTarget.addEventListener", "addEventListener()")}} API で待ち受けすることにも対応しています。

## メソッド

- {{domxref("XMLHttpRequest.abort()")}}
  - : リクエストがすでに送信されている場合、リクエストを中止します。
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : すべてのレスポンスヘッダーを、 {{Glossary("CRLF")}} で区切り、文字列として返します。レスポンスを何も受け取らなかった場合は `null` を返します。
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : 指定したヘッダーを含む文字列を返します。レスポンスを受信していない、またはレスポンス内に指定したヘッダーが存在しない場合は `null` を返します。
- {{domxref("XMLHttpRequest.open()")}}
  - : リクエストを初期化します。
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : サーバーから返ってくる MIME タイプを上書きします。
- {{domxref("XMLHttpRequest.send()")}}
  - : リクエストを送信します。このリクエストが非同期（既定）の場合、このメソッドはリクエストが送るとすぐに返ります。
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : HTTP リクエストヘッダーの値を設定します。 `setRequestHeader()` は [`open()`](#open) の後、および `send()` の前に呼び出さなくてはいけません。

## イベント

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : 例えばプログラムが {{domxref("XMLHttpRequest.abort()")}} を呼び出した時など、リクエストが中断されたときに発生します。
    {{domxref("XMLHttpRequestEventTarget/onabort", "onabort")}} プロパティを通して利用することもできます。
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : リクエストでエラーが発生したときに発生します。
    {{domxref("XMLHttpRequestEventTarget/onerror", "onerror")}} プロパティを通して利用することもできます。
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : {{domxref("XMLHttpRequest")}} のトランザクションが成功裏に完了したときに発生します。
    {{domxref("XMLHttpRequestEventTarget/onload", "onload")}} プロパティを通して利用することもできます。
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : リクエストが完了したときに、成功した場合 ({{domxref("XMLHttpRequest/load_event", "load")}} の後)、成功しなかった場合 ({{domxref("XMLHttpRequest/abort_event", "abort")}} または {{domxref("XMLHttpRequest/error_event", "error")}} の後) のどちらでも発生します。
    {{domxref("XMLHttpRequestEventTarget/onloadend", "onloadend")}} プロパティを通して利用することもできます。
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : リクエストがデータを読み込み始めたときに発生します。
    {{domxref("XMLHttpRequestEventTarget/onloadstart", "onloadstart")}} プロパティを通して利用することもできます。
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : リクエストがもっとデータを受信した際に定期的に発生します。
    {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}} プロパティを通して利用することもできます。
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : プリセット時間が過ぎたために進行が終了したときに発生します。
    {{domxref("XMLHttpRequestEventTarget/ontimeout", "ontimeout")}} プロパティを通して利用することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLSerializer")}}: DOM ツリーの XML へのシリアライズ
- `XMLHttpRequest` に関連する MDN の記事

  - [Ajax — 始めましょう](/ja/docs/Web/Guide/AJAX/Getting_Started)
  - [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [Fetch API](/ja/docs/Web/API/Fetch_API)

- [HTML5 Rocks — New Tricks in XMLHttpRequest2](https://www.html5rocks.com/en/tutorials/file/xhr2/)
- Feature-Policy のディレクティブ {{httpheader("Feature-Policy/sync-xhr", "sync-xhr")}}
