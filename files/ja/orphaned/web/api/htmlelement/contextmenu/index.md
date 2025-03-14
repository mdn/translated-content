---
title: HTMLElement.contextMenu
slug: orphaned/Web/API/HTMLElement/contextMenu
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLElement.contextMenu`** プロパティは、[`contextmenu`](/ja/docs/Web/HTML/Global_attributes#contextmenu) 属性を使用して要素に割り当てられたコンテキストメニューを参照します。 メニュー自体は、{{HTMLElement("menu")}} 要素を使用して作成されます。

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

- [`contextmenu`](/ja/docs/Web/HTML/Global_attributes#contextmenu)
- {{HTMLElement("menu")}}
- {{HTMLElement("menuitem")}}
