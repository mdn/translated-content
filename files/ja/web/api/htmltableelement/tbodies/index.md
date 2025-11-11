---
title: "HTMLTableElement: tBodies プロパティ"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
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

## 値

生きた {{domxref("HTMLCollection")}} です。

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
