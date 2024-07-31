---
title: "Document: afterscriptexecute イベント"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef}}{{non-standard_header}}

`afterscriptexecute` イベントは、静的な {{HTMLElement("script")}} 要素のスクリプトの実行が終了したときに発生します。要素が {{domxref("Node.appendChild()", "appendChild()")}} などで動的に追加された場合には呼び出されません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished, true);
// または
document.onafterscriptexecute = finished;
```

[ライブ例を表示](https://mdn.dev/archives/media/samples/html/currentScript.html)

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.beforescriptexecute_event")}}
- {{domxref("Document.currentScript")}}
