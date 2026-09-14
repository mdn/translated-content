---
title: "HTMLElement: title プロパティ"
short-title: title
slug: Web/API/HTMLElement/title
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.title`** プロパティは、要素のタイトルを表します。 通常、テキストは、マウスがノード上にあるときに「ツールチップ」ポップアップに表示されます。

## 値

文字列です。

## 例

```js
const link = document.createElement("a");
link.innerText = "ブドウ";
link.href = "https://ja.wikipedia.org/wiki/ブドウ";
link.title = "ブドウに関するウィキペディアのページ";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [**title**](/ja/docs/Web/HTML/Reference/Global_attributes/title) グローバル属性
