---
title: "SVGElement: error イベント"
short-title: error
slug: Web/API/SVGElement/error_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

`error` イベントは SVG 要素が正しく読み込まれなかったり、スクリプト実行中にエラーが発生した場合に発生します。

これは基本的に、DOM の標準の `error` イベントを実装しています。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
svgElem.addEventListener("error", () => {
  console.log("SVG が正しく読み込まれませんでした。");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
