---
title: "Element: afterscriptexecute イベント"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

> **警告:** このイベントは仕様の初期バージョンでの提案でした。頼りにしないでください。

**`afterscriptexecute`** イベントは、スクリプトの実行が完了した後に発行されます。

これは Gecko (Firefox) 固有のイベントです。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`beforescriptexecute`](/ja/docs/Web/API/Element/beforescriptexecute_event) イベント
