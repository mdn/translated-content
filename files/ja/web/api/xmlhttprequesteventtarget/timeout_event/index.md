---
title: "XMLHttpRequestEventTarget: timeout イベント"
short-title: timeout
slug: Web/API/XMLHttpRequestEventTarget/timeout_event
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`timeout`** イベントは、設定された時間が経過したことで進行が終了すると発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("timeout", (event) => { })

ontimeout = (event) => { }
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントのプロパティ

_以下に挙げたプロパティに加えて、親インターフェイスである {{domxref("Event")}} から継承したプロパティが利用できます。_

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値のフラグで、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示します。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### XMLHttpRequest での使い方

```js
const client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.ontimeout = () => {
  console.error("Timeout!!");
};

client.send();
```

イベントハンドラーは {{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用して設定することもできます。

```js
client.addEventListener("timeout", () => {
  console.error("Timeout!!");
});
```

### XMLHttpRequestUpload での使い方

`timeout` イベントを使用すると、アップロードが遅すぎるために停止したことを検出することができます。ファイルをアップロードして進捗バーを表示する完全なコード例については、メインの {{domxref("XMLHttpRequestUpload")}} ページを参照してください。

The timeout is set on the {{domxref("XMLHttpRequest")}} object using the {{domxref("XMLHttpRequest.timeout")}} property.

```js
// タイムアウトが発生した場合、進捗バーを非表示にする
// なお、このイベントは xhr オブジェクトでも待ち受けすることができる
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `アップロードに失敗しました: ${event.type}`;
}
xhr.upload.addEventListener("timeout", errorAction);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestEventTarget/load_event", "load")}}, {{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}, {{domxref("XMLHttpRequestEventTarget/error_event", "error")}}, {{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}
- [進捗の監視](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#進捗の監視)
