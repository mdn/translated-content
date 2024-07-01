---
title: "SVGElement: load イベント"
short-title: load
slug: Web/API/SVGElement/load_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

`load` イベントは `SVGElement` がブラウザーに読み込まれたときに発生するイベントです。これは基本的に標準の `load` DOM イベントと同じです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
svgElem.addEventListener("load", () => {
  console.log("SVG が読み込まれました。");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
