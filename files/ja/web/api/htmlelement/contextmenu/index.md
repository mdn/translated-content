---
title: HTMLElement.contextMenu
slug: Web/API/HTMLElement/contextMenu
tags:
  - API
  - 非推奨
  - Element
  - HTML
  - HTML DOM
  - プロパティ
  - リファレンス
  - UX
browser-compat: api.HTMLElement.contextMenu
translation_of: Web/API/HTMLElement/contextMenu
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLElement.contextMenu`** プロパティは、{{htmlattrxref("contextmenu")}} 属性を使用して要素に割り当てられたコンテキストメニューを参照します。 メニュー自体は、{{HTMLElement("menu")}} 要素を使用して作成されます。

## 値

{{HTMLElement("menu")}} 要素です。

## 例

```js
var contextMenu = document.getElementById("element").contextMenu;

// 最初のメニューエントリのラベルを変更する
contextMenu.firstElementChild.label = "新しいラベル";
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlattrxref("contextmenu")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("menuitem")}}
