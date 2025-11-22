---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR) オブジェクトは、サーバーと対話するために使用されます。ページ全体を更新する必要なしに、データを受け取ることができます。これでユーザーの作業を中断させることなく、ウェブページの一部を更新することができます。

{{InheritanceDiagram}}

`XMLHttpRequest` という名前ではあるものの、 XML だけでなく、あらゆる種類のデータを受け取るために使用することができます。

通信においてサーバーからのイベントデータやメッセージデータの受信を含む必要があるのであれば、[サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)の {{domxref("EventSource")}} インターフェイスを使用することも検討してください。全二重の通信では、 [WebSocket](/ja/docs/Web/API/WebSockets_API) の方が良いかもしれません。

## コンストラクター

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : XMLHttpRequest を初期化するコンストラクターです。これは、他のメソッドを呼び出す前に呼び出さなければなりません。

## インスタンスプロパティ

_このインターフェイスは、 {{domxref("XMLHttpRequestEventTarget")}} および {{domxref("EventTarget")}} のプロパティを継承しています。_

- {{domxref("XMLHttpRequest.readyState")}} {{ReadOnlyInline}}
  - : リクエストの状態を表す数値を返します。
- {{domxref("XMLHttpRequest.response")}} {{ReadOnlyInline}}
  - : {{jsxref("ArrayBuffer")}}、{{domxref("Blob")}}、{{domxref("Document")}}、JavaScript オブジェクト、文字列の何れか（{{domxref("XMLHttpRequest.responseType")}} の値による）で、リクエストのエンティティ本体を返します。
- {{domxref("XMLHttpRequest.responseText")}} {{ReadOnlyInline}}
  - : 文字列で、リクエストに対するレスポンスをテキスト形式で返すか、リクエストが失敗した場合や、まだ送信されていない場合は `null` を返します。
- {{domxref("XMLHttpRequest.responseType")}}
  - : レスポンスの種類を示します。
- {{domxref("XMLHttpRequest.responseURL")}} {{ReadOnlyInline}}
  - : レスポンスのシリアライズされた URL、または URL が null であれば空文字列を返します。
- {{domxref("XMLHttpRequest.responseXML")}} {{ReadOnlyInline}}
  - : {{domxref("Document")}} でリクエストに対するレスポンスが入ったを返すか、またはリクエストが成功しなかった場合、まだ送信されていない場合、 XML または HTML として解釈できなかった場合は `null` を返します。[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。
- {{domxref("XMLHttpRequest.status")}} {{ReadOnlyInline}}
  - : リクエストの [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)を返します。
- {{domxref("XMLHttpRequest.statusText")}} {{ReadOnlyInline}}
  - : 文字列で、HTTP サーバーから返ってきたレスポンス文字列を返します。 {{domxref("XMLHttpRequest.status")}} とは異なり、（`"OK"` のような）レスポンスメッセージの完全な文が含まれています。

    > [!NOTE]
    > HTTP/2 仕様書 {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} によれば、 HTTP/2 では、 HTTP/1.1 のステータス行に含まれていたバージョンや原因の文を伝える方法が定義されていません。

- {{domxref("XMLHttpRequest.timeout")}}
  - : リクエストを自動的に終了するまでの時間をミリ秒単位で表します。
- {{domxref("XMLHttpRequest.upload")}} {{ReadOnlyInline}}
  - : {{domxref("XMLHttpRequestUpload")}} で、アップロードプロセスを表します。
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : サイト間の `Access-Control` リクエストでクッキーや認証ヘッダーなどの資格情報を使用する場合は `true` を返します。そうでなければ `false` を返します。

### 標準外のプロパティ

- `XMLHttpRequest.mozAnon` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 論理値です。 true の場合、リクエストを Cookie や認証ヘッダーを伴わずに送信します。
- `XMLHttpRequest.mozSystem` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 論理値です。 true の場合、リクエストで同一オリジンポリシーは適用されません。

## インスタンスメソッド

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
- {{domxref("XMLHttpRequest.setAttributionReporting()")}} {{securecontext_inline}} {{experimental_inline}}
  - : リクエストのレスポンスで、帰属ソースや発生するイベントを登録できるようにすることを示します。
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : HTTP リクエストヘッダーの値を設定します。 `setRequestHeader()` は {{domxref("XMLHttpRequest.open", "open()")}} の後、および {{domxref("XMLHttpRequest.send", "send()")}} の前に呼び出さなくてはいけません。

## イベント

_このインターフェイスには、 {{domxref("XMLHttpRequestEventTarget")}} から継承したイベントもあります。_

- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : {{domxref("XMLHttpRequest.readyState", "readyState")}} プロパティが変化するたびに発生します。
    `onreadystatechange` イベントハンドラープロパティを通して利用することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLSerializer")}}: DOM ツリーの XML へのシリアライズ
- [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
