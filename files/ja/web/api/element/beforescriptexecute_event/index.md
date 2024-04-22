---
title: "Element: beforescriptexecute イベント"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

> **警告:** このイベントは仕様の初期バージョンでの提案でした。頼りにしないでください。

**`beforescriptexecute`** イベントは、スクリプトが実行しようとされているときに発生します。このイベントをキャンセルすると、スクリプトの実行が阻止されます。

これは Gecko (Firefox) 固有のイベントです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`afterscriptexecute`](/ja/docs/Web/API/Element/afterscriptexecute_event) イベント
