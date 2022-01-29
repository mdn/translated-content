---
title: ProgressEvent
slug: Web/API/ProgressEvent
tags:
  - API
  - Interface
  - 進捗イベント
  - ProgressEvent
  - Reference
browser-compat: api.ProgressEvent
translation_of: Web/API/ProgressEvent
---
{{APIRef("DOM Events")}}

**`ProgressEvent`** インターフェイスは、プロセスの進捗、例えば HTTP リクエスト（`XMLHttpRequest`、または {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}}, {{HTMLElement("link")}} のような基本的なリソースの読み込み）などを計測するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : 指定した引数で `ProgressEvent` イベントを作成します。

## プロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ProgressEvent.lengthComputable")}} {{readonlyInline}}
  - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、既に行われた作業の量が計算可能かどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。
- {{domxref("ProgressEvent.loaded")}} {{readonlyInline}}
  - : 64 ビット符号なし整数値で、基礎となるプロセスで既に実行された作業の量を示す。行われた作業の比率は、 `total` でこのプロパティの値を割ることで計算できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total")}} {{readonlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表す。 HTTP でリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## メソッド

_親である {{domxref("Event")}} から継承したメソッドもあります。_

- {{domxref("ProgressEvent.initProgressEvent()")}} {{deprecated_inline}}{{non-Standard_inline}}
  - : 非推奨の {{domxref("Document.createEvent()", "Document.createEvent(\"ProgressEvent\")")}} メソッドを使用して生成された `ProgressEvent` を初期化します。

## 例

以下の例は `ProgressEvent` を新しい {{domxref("XMLHTTPRequest")}} に追加し、リクエストの状態を表示するために使用します。

```js
var progressBar = document.getElementById("p"),
    client = new XMLHttpRequest()
client.open("GET", "magical-unicorns")
client.onprogress = function(pe) {
  if(pe.lengthComputable) {
    progressBar.max = pe.total
    progressBar.value = pe.loaded
  }
}
client.onloadend = function(pe) {
  progressBar.value = pe.loaded
}
client.send()
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 基本インターフェイスの {{domxref("Event")}}
