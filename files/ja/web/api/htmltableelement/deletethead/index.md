---
title: "HTMLTableElement: deleteTHead() メソッド"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteTHead()`** は、 {{HTMLElement("thead")}} 要素をこの {{HtmlElement("table")}} から取り除きます。

## 構文

```js-nolint
deleteTHead()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、 JavaScript を使用して表のヘッダーを削除します。

### HTML

```html
<table>
  <thead>
    <th>名前</th>
    <th>職業</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>配管工</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>屋根職人</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTHead();
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
