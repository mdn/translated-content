---
title: "HTMLElement: draggable プロパティ"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: 71790d0ff0ecd94a2d734f81d98a3317b61aa468
---

{{APIRef("HTML Drag and Drop API")}}

**`draggable`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素がドラッグ可能かどうかを示す論理値プリミティブを取得または設定します。

これは、dragableHTML グローバル属性の値を反映します。
It reflects the value of the [`draggable`](/ja/docs/Web/HTML/Reference/Global_attributes/draggable) HTML global attribute.

## 値

論理値プリミティブで、要素がドラッグ可能であれば `true`、そうでなければ `false` です。

## 例

次の例は、スクリプトによる要素のドラッグ機能を有効または無効にする方法を示しています。

```js
const draggableElement = document.querySelector(".draggable-element");
const notDraggableElement = document.querySelector(".not-draggable-element");

// 対象とする要素のドラッグ機能を有効にする
if (!draggableElement.draggable) {
  draggableElement.draggable = true;
}

// 対象とする要素のドラッグ機能を無効にする
if (notDraggableElement.draggable) {
  notDraggableElement.draggable = false;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`draggable`](/ja/docs/Web/HTML/Reference/Global_attributes/draggable) グローバル属性
- [HTML のドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) の概要
