---
title: "HTMLTableElement: deleteCaption() メソッド"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteCaption()`** メソッドは、 {{HtmlElement("caption")}} 要素をこの {{HtmlElement("table")}} から削除します。この表に関連付けられた `<caption>` 要素がない場合は、このメソッドは何もしません。

## 構文

```js-nolint
deleteCaption()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、 JavaScript を使用して表のキャプションを削除します。

### HTML

```html
<table>
  <caption>
    このキャプションは削除されます。
  </caption>
  <tr>
    <td>セル 1.1</td>
    <td>セル 1.2</td>
  </tr>
  <tr>
    <td>セル 2.1</td>
    <td>セル 2.2</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteCaption();
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
