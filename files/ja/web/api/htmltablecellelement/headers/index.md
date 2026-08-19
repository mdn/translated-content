---
title: "HTMLTableCellElement: headers プロパティ"
short-title: headers
slug: Web/API/HTMLTableCellElement/headers
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{ APIRef("HTML DOM") }}

**`headers`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、この特定のセルにおける見出しである {{HTMLElement("th")}} 要素の ID のリストが入ります。

## 値

空白で区切られた ID の入った文字列。

## 例

この例では、表内で最後にクリックされたセルの ID を表示します。

### HTML

```html
<table>
  <thead>
    <tr>
      <th rowspan="2" id="h">宿題 (ID = h)</th>
      <th colspan="3" id="e">試験 (ID = e)</th>
      <th colspan="3" id="p">プロジェクト (ID = p)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="e1" headers="e">1 (ID = e1)</th>
      <th id="e2" headers="e">2 (ID = e2)</th>
      <th id="ef" headers="e">最終 (ID = ef)</th>
      <th id="p1" headers="p">1 (ID = p1)</th>
      <th id="p2" headers="p">2 (ID = p2)</th>
      <th id="pf" headers="p">最終 (ID = pf)</th>
    </tr>
    <tr>
      <td headers="h">15%</td>
      <td headers="e e1">15%</td>
      <td headers="e e2">15%</td>
      <td headers="e ef">20%</td>
      <td headers="p p1">10%</td>
      <td headers="p p2">10%</td>
      <td headers="p pf">15%</td>
    </tr>
  </tbody>
</table>
最後にクリックされたセルの見出しの ID: <output>なし</output>
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
const table = document.querySelector("table");
const output = document.querySelector("output");

table.addEventListener("click", (ev) => {
  output.textContent = ev.target.headers ? ev.target.headers : "なし";
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
