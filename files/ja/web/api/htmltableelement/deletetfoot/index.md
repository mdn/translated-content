---
title: "HTMLTableElement: deleteTFoot() メソッド"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteTFoot()`** は、 {{HTMLElement("tfoot")}} 要素をこの {{HtmlElement("table")}} から取り除きます。

## 構文

```js-nolint
deleteTFoot()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、 JavaScript を使用して表のフッターを削除します。

### HTML

```html
<table>
  <thead>
    <th>名前</th>
    <th>スコア</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>541</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>225</td>
  </tr>
  <tfoot>
    <th>平均</th>
    <td>383</td>
  </tfoot>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTFoot();
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
