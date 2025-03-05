---
title: "Request: destination プロパティ"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`destination`** は **{{domxref("Request")}}** インターフェイスの読み取り専用プロパティで、リクエストされたコンテンツの種類を記述した文字列を返します。

この文字列は、 `audio`, `audioworklet`,
`document`, `embed`, `fencedframe`, `font`, `frame`,
`iframe`, `image`, `json`, `manifest`, `object`,
`paintworklet`, `report`, `script`, `sharedworker`,
`style`, `track`, `video`, `worker`,
`xslt`、または空文字列（既定値）の何れかでなければなりません。

この `destination` は{{Glossary("user agent", "ユーザーエージェント")}}によって使用され、例えば、 CORS のためにどのルールに従うべきか、あるいは特定の型の入力がどのように処理されるかに影響する複雑なコードパスをどのようにナビゲートするかを決定するのに役に立ちます。

これらの出力先によって、その処理方法は大きく異なります。あるものはデータを受け取るもので、受け取ったデータは後で処理するために格納さ れます。他にもスクリプトベースのものがあり、その場合は受け取ったデータはスクリプトを呼び出してデータを渡すことで配信されます。スクリプトベースの出力先には {{HTMLElement("script")}} 要素、 {{domxref("Worklet")}} ベースの出力先（{{domxref("AudioWorklet")}} などのサブクラスも含む）、 {{domxref("Worker")}} ベースの出力先（{{domxref("ServiceWorker")}} や {{domxref("SharedWorker")}} など）が含まれます。

## 値

リクエストが要求したコンテンツの型を示す文字列。この型は通常の文書型の値（`"document"` や `"manifest"`）よりもはるかに広く、`"image"` や `"worker"` や `"audioworklet"` などのコンテキストに応じた手がかりを含んだものである可能性があります。

使用可能な値は以下の通りです。

- `""`

  - : 空文字列は既定値であり、独自の値を持たない出力先に対して使用されます。これは、以下の API（その他多数）を使用してリクエストが行われた場合の値です。
    - [`<a ping>`](/ja/docs/Web/HTML/Element/a#ping)
    - [`<area ping>`](/ja/docs/Web/HTML/Element/area#ping)
    - {{domxref("Cache")}}
    - {{domxref("EventSource")}}
    - {{domxref("Window/fetch", "fetch()")}}
    - {{domxref("navigator.sendBeacon()")}}
    - {{domxref("WebSocket")}}
    - {{domxref("XMLHttpRequest")}}

- `"audio"`
  - : 対象は音声データです。
- `"audioworklet"`
  - : 対象は、音声ワークレットを使用するために取得されるデータです。
- `"document"`
  - : 対象は文書（HTML または XML）です。
- `"embed"`
  - : 対象は埋め込みコンテンツです。
- `"fencedframe"`
  - : 対象は[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)です。
- `"font"`
  - : 対象はフォントです。
- `"image"`
  - : 対象は画像です。
- `"json"`
  - : 対象は JSON ファイルです。
- `"manifest"`
  - : 対象はマニフェストです。
- `"object"`
  - : 対象はオブジェクトです。
- `"paintworklet"`
  - : 対象は描画ワークレットです。
- `"report"`
  - : 対象はレポートです。
- `"script"`
  - : 対象はスクリプトです。
- `"serviceworker"`
  - : 対象はサービスワーカーです。
- `"sharedworker"`
  - : 対象は共有ワーカーです。
- `"style"`
  - : 対象はスタイルです。
- `"track"`
  - : 対象は HTML の {{HTMLElement("track")}} です。
- `"video"`
  - : 対象は動画データです。
- `"worker"`
  - : 対象はワーカーです。
- `"xslt"`
  - : 対象は XSLT 変換です。

## 例

以下のスニペットでは、{{domxref("Request.Request", "Request()")}}コンストラクターを使用して新しいリクエストを作成し（スクリプトと同じディレクトリーの画像ファイルに対して）、リクエスト出力先を保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myDestination = myRequest.destination; // returns the empty string by default
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
