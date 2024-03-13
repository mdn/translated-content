---
title: Request.destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`destination`** は **{{domxref("Request")}}** インターフェイスの読み取り専用プロパティで、リクエストされたコンテンツの種類を記述した文字列を返します。

この文字列は、 `audio`, `audioworklet`,
`document`, `embed`, `font`, `frame`,
`iframe`, `image`, `manifest`, `object`,
`paintworklet`, `report`, `script`, `sharedworker`,
`style`, `track`, `video`, `worker`,
`xslt`、または空文字列（既定値）の何れかでなければなりません。

この `destination` は{{Glossary("user agent", "ユーザーエージェント")}}によって使用され、例えば、 CORS のためにどのルールに従うべきか、あるいは特定の型の入力がどのように処理されるかに影響する複雑なコードパスをどのようにナビゲートするかを決定するのに役に立ちます。

これらの出力先によって、その処理方法は大きく異なります。あるものはデータを受け取るもので、受け取ったデータは後で処理するために格納さ れます。他にもスクリプトベースのものがあり、その場合は受け取ったデータはスクリプトを呼び出してデータを渡すことで配信されます。スクリプトベースの出力先には {{HTMLElement("script")}} 要素、 {{domxref("Worklet")}} ベースの出力先（{{domxref("AudioWorklet")}} や {{domxref("PaintWorklet")}} など）、 {{domxref("Worker")}} ベースの出力先（{{domxref("ServiceWorker")}} や {{domxref("SharedWorker")}} など）が含まれます。

## 値

リクエストが要求したコンテンツの型を示す文字列。この型は通常の文書型の値（`"document"` や `"manifest"`）よりもはるかに広く、`"image"` や `"worker"` や `"audioworklet"` などのコンテキストに応じた手がかりを含んだものである可能性があります。

使用可能な値は以下の通りです。

- `""`
  - : 自分自身で値を持たない出力先には、既定で `destination` が使用されます。 [navigator.sendBeacon()](/ja/docs/Web/API/Navigator/sendBeacon), [EventSource](/ja/docs/Web/API/EventSource), [\<a ping>](/ja/docs/Web/HTML/Element/a#attr-ping), [\<area ping>](/ja/docs/Web/HTML/Element/area#attr-ping), [fetch()](/ja/docs/Web/API/fetch), [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest), [WebSocket](/ja/docs/Web/API/WebSocket), [Cache](/ja/docs/Web/API/Cache) などです。
- `"audio"`
  - : 対象は音声データです。
- `"audioworklet"`
  - : 対象は、音声ワークレットを使用するために取得されるデータです。
- `"document"`
  - : 対象は文書（HTML または XML）です。
- `"embed"`
  - : 対象は埋め込みコンテンツです。
- `"font"`
  - : 対象はフォントです。
- `"image"`
  - : 対象は画像です。
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
