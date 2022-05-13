---
title: HTMLElement.title
slug: Web/API/HTMLElement/title
tags:
  - API
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.title
translation_of: Web/API/HTMLElement/title
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.title`** プロパティは、要素のタイトルを表します。 通常、テキストは、マウスがノード上にあるときに「ツールチップ」ポップアップに表示されます。

## 値

文字列です。

## 例

```js
const link = document.createElement('a');
link.innerText = 'ブドウ';
link.href = 'https://ja.wikipedia.org/wiki/ブドウ';
link.title = 'ブドウに関するウィキペディアのページ';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [**title**](/ja/docs/Web/HTML/Global_attributes/title)` グローバル属性
