---
title: "FileReader: error イベント"
slug: Web/API/FileReader/error_event
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef}}

`error` イベントは、エラーによって読み取りが失敗したとき (例えば、ファイルが見つからなかった場合や読み取り可能ではなかった場合) に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

```js
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

function handleSelected(e) {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    reader.addEventListener("error", () => {
      console.error(`Error occurred reading file: ${selectedFile.name}`);
    });

    reader.addEventListener("load", () => {
      console.error(`File: ${selectedFile.name} read successfully`);
    });

    reader.readAsDataURL(selectedFile);
  }
}

fileInput.addEventListener("change", handleSelected);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.abort_event", "abort")}}
