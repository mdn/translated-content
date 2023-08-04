---
title: "Document: beforescriptexecute イベント"
slug: Web/API/Document/beforescriptexecute_event
---

{{APIRef}}{{non-standard_header}}

`beforescriptexecute` イベントは、静的な {{HTMLElement("script")}} が実行されようとするときに発行されます。このイベントは {{domxref("Node.appendChild()", "appendChild()")}} のように動的に要素が追加された場合には発行されません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("beforescriptexecute", (event) => {});

onbeforescriptexecute = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
function starting(e) {
  logMessage(`スクリプト実行開始 (ID:  ${e.target.id})`);
}

document.addEventListener("beforescriptexecute", starting, true);
// または
document.onbeforescriptexecute = starting;
```

[ライブ例を表示](https://mdn.dev/archives/media/samples/html/currentScript.html)

## 仕様書

{{Compat}}

## 関連情報

- {{domxref("Document.afterscriptexecute_event")}}
- {{domxref("Document.currentScript")}}
