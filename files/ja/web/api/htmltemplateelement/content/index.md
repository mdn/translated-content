---
title: "HTMLTemplateElement: content プロパティ"
short-title: content
slug: Web/API/HTMLTemplateElement/content
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("Web Components")}}

**`HTMLTemplateElement.content`** プロパティは、`<template>` 要素のテンプレートの内容 ({{domxref("DocumentFragment")}}) を返します。

## 値

{{domxref("DocumentFragment")}} です。

## 例

```js
const templateElement = document.querySelector("#foo");
const documentFragment = templateElement.content.cloneNode(true);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTemplateElement")}}
