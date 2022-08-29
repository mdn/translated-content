---
title: HTMLTableElement.tBodies
slug: Web/API/HTMLTableElement/tBodies
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLTableElement.tBodies
translation_of: Web/API/HTMLTableElement/tBodies
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.tBodies`** は読み取り専用のプロパティで、生きた {{domxref("HTMLCollection")}} で {{htmlElement("table")}} の本体を返します。

このプロパティは読み取り専用ですが、返値のオブジェクトは生きており、内部を変更することができます。

返されるコレクションには、暗黙の {{HTMLElement("tbody")}} 要素を含みます。例えば、

```html
<table>
  <tr>
    <td>セル 1</td>
  </tr>
</table>
```

上記の HTML から生成される HTML DOM には、 HTML ソースにタグが含まれていなくても、 {{HTMLElement("tbody")}} 要素が存在しています。

## 構文

```js
HTMLCollectionObject = table.tBodies
```

## 例

このスニペットは、表の中の本体の数を数えます。

```js
mytable.tBodies.length;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCollection")}}
- {{HTMLElement("tbody")}}
