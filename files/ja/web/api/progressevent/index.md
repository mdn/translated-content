---
title: ProgressEvent
slug: Web/API/ProgressEvent
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`ProgressEvent`** インターフェイスは、プロセスの進捗、例えば HTTP リクエスト（`XMLHttpRequest`、または {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}}, {{HTMLElement("link")}} のような基本的なリソースの読み込み）などを計測するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : 指定した引数で `ProgressEvent` イベントを作成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、既に行われた作業の量が計算可能かどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、基礎となるプロセスで既に実行された作業の量を示す。行われた作業の比率は、 `total` でこのプロパティの値を割ることで計算できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表す。 HTTP でリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## インスタンスメソッド

_親である {{domxref("Event")}} からメソッドを継承しています。_

## 例

以下の例は `ProgressEvent` を新しい {{domxref("XMLHTTPRequest")}} に追加し、リクエストの状態を表示するために使用します。

```js
const progressBar = document.getElementById("p"),
  client = new XMLHttpRequest();
client.open("GET", "magical-unicorns");
client.onprogress = (pe) => {
  if (pe.lengthComputable) {
    progressBar.max = pe.total;
    progressBar.value = pe.loaded;
  }
};
client.onloadend = (pe) => {
  progressBar.value = pe.loaded;
};
client.send();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 基本インターフェイスの {{domxref("Event")}}
