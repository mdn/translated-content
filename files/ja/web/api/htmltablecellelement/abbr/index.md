---
title: "HTMLTableCellElement: abbr プロパティ"
short-title: abbr
slug: Web/API/HTMLTableCellElement/abbr
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

**`abbr`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、セルに関連付けられた略語を示します。そのセルが見出しセル {{HTMLElement("th")}} ではない場合、このプロパティは無視されます。

これは、{{HTMLElement("th")}} 要素の `abbr` 属性を反映します。

> [!NOTE]
> このプロパティは、ブラウザー上では視覚的な効果をもたらしません。これは、スクリーンリーダーなどの支援技術がこの略語を使用することができるようにするための情報を追加するものです。

## 値

文字列です。

## 例

この例では、それぞれの行で最初のセルにある見出しに関連付けられた略語を接頭辞として追加します。

### HTML

```html
<table>
  <thead>
    <tr>
      <th abbr="メーカー">製造者</th>
      <th abbr="モデル">車の型番</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tesla</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BYD</td>
      <td>Dolphin</td>
    </tr>
    <tr>
      <td>VW</td>
      <td>ID.3</td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
const rows = document.querySelectorAll("thead tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (${cell.abbr})`;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
