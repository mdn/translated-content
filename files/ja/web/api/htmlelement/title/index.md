---
title: "HTMLElement: title プロパティ"
short-title: title
slug: Web/API/HTMLElement/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`title`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素のタイトルを表します。通常、マウスポインターがノード上にあるときに「ツールチップ」ポップアップに表示されるテキストです。

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
