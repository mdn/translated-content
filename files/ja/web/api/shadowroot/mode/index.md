---
title: "ShadowRoot: mode プロパティ"
short-title: mode
slug: Web/API/ShadowRoot/mode
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

**`mode`** は {{domxref("ShadowRoot")}} の読み取り専用プロパティで、モードを `open` と `closed` のどちらかで示します。
これはシャドウルートの内部機能を JavaScript からアクセスできるかどうかを定義します。

シャドウルートの `mode` が "`closed`" であった場合、シャドウルートの内部的な実装は JavaScript からアクセスできず、変更できなくなります。例えば、 {{HTMLElement("video")}} の内部の実装は JavaScript からアクセスも変更もできないのと同様になります。

このプロパティ値を設定するには、{{domxref("Element.attachShadow()")}} に渡すオブジェクトの `options.mode` プロパティを使用するか、シャドウルートを宣言的に作成する場合は、[`<template>`](/ja/docs/Web/HTML/Element/template) 要素の [`shadowrootmode`](/ja/docs/Web/HTML/Element/template#shadowrootmode) 属性を使用します。

### 値

次のどちらかの値を取りうる文字列です。

- `open`
  - : このシャドウルートの要素は、ルート外の JavaScript からアクセスすることができます。
- `closed`
  - : 閉じられたシャドウツリー内のノードは、ルート外の JavaScript でアクセスすることはできません。

## 例

```js
// アクセスできない closed のシャドウルートを作成します
let element = document.createElement("div");
element.attachShadow({ mode: "closed" });
element.shadowRoot; // シャドウルートが closed なので null

// アクセスできる open のシャドウルートを作成します
let element2 = document.createElement("div");
element2.attachShadow({ mode: "open" });
console.log(`The shadow is ${element2.shadowRoot.mode}`); // "The shadow is open" と出力
element2.shadowRoot.textContent("Opened shadow"); // シャドウは open なので、外部からアクセスできる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
