---
title: "HTMLTableElement: createCaption() メソッド"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.createCaption()`** メソッドは、この {{HtmlElement("table")}} に関連付けられた {{HtmlElement("caption")}} 要素を返します。
この表に `<caption>` 要素がない場合が、このメソッドは生成して返します。

> **メモ:** キャプションが存在しない場合、 `createCaption()` は新しいキャプションを表に直接挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<caption>` 要素を生成する場合とは異なり、キャプションを個別に追加する必要はありません。

## 構文

```js-nolint
createCaption()
```

### 引数

なし。

### 返値

{{domxref("HTMLTableCaptionElement")}}

## 例

この例は JavaScript を使用して、表に最初は存在しないキャプションを追加します。

### HTML

```html
<table>
  <tr>
    <td>セル 1.1</td>
    <td>セル 1.2</td>
    <td>セル 1.3</td>
  </tr>
  <tr>
    <td>セル 2.1</td>
    <td>セル 2.2</td>
    <td>セル 2.3</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
let caption = table.createCaption();
caption.textContent = "このキャプションは JavaScript で生成されました。";
```

### 例

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
