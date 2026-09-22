---
title: "HTMLTableCellElement: scope プロパティ"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{ APIRef("HTML DOM") }}

**`scope`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、{{HTMLElement("th")}} のセルのスコープを示します。

見出しセルは、`scope` 属性を使用して、指定された行または列に適用するように、あるいは現在の行グループ内（つまり、同じ祖先要素である {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}} 要素）でまだスコープが指定されていないセルに適用するように設定できます。`scope` に値が指定されていない場合、ヘッダーはこの方法でセルに直接関連付けられません。`scope` で許可される値は以下の通りです。

> [!NOTE]
> このプロパティは、ブラウザー上では視覚的な効果をもたらしません。これは、スクリーンリーダーなどの支援技術が、表をより一貫性のある形で表示できるよう、意味情報として追加されるものです。

## 値

以下のいずれかの値です。

- `col`
  - : 見出しセルは、同じ列（`colspan` も使用されている場合は複数の列）の中の後続のセルに適用されます。列の末尾に達するか、その列内の別の `<th>` によって新しいスコープが確立されるまで、この適用は続きます。
- `colgroup`
  - : 見出しセルは、現在の列グループ内で、まだスコープが適用されていないすべてのセルに適用されます。この値は、セルが列グループ内にある場合にのみ指定することができます。
- `row`
  - : 見出しセルは、同じ行（`rowspan` も使用されている場合は複数の行）の中の後続のセルに適用されます。行の末尾に達するか、同じ行内の別の `<th>` によって新しいスコープが確立されるまで続きます。
- `rowgroup`
  - : 見出しセルは、現在の行グループ内で、まだスコープが適用されていないすべてのセルに適用されます。この値は、セルが行グループ内にある場合にのみ指定することができます。
- 空文字列 (`""`)
  - : この見出しセルにはあらかじめ定義されたスコープはありません。ユーザーエージェントは、文脈の手がかりに基づいてスコープを決定します。

## 例

この例では、`thead` 内のすべての `th` 番号にスコープラベルを追加します。

### HTML

```html
<table>
  <caption>
    最も高いダム
  </caption>
  <thead>
    <tr>
      <td></td>
      <th>ダム</th>
      <th>国</th>
      <th>高さ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <th scope="row">Jinping-I Dam</th>
      <td>中国</td>
      <td>305 m</td>
    </tr>
    <tr>
      <td>2.</td>
      <th scope="row">Nurek Dam</th>
      <td>タジキスタン</td>
      <td>300 m</td>
    </tr>
    <tr>
      <td>3.</td>
      <th scope="row">Lianghekou Dam</th>
      <td>中国</td>
      <td>295 m</td>
    </tr>
    <tr>
      <td>4.</td>
      <th scope="row">Xiowan Dam</th>
      <td>中国</td>
      <td>292 m</td>
    </tr>
    <tr>
      <td>5.</td>
      <th scope="row">Balhetan Dam</th>
      <td>中国</td>
      <td>289 m</td>
    </tr>
    <tr>
      <td>6.</td>
      <th scope="row">Xiluodu Dam</th>
      <td>中国</td>
      <td>285.5 m</td>
    </tr>
    <tr>
      <td>7.</td>
      <th scope="row">Grande-Dixence Dam</th>
      <td>スイス</td>
      <td>285 m</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const thElements = document.querySelectorAll("thead th");
thElements.forEach((th) => {
  th.scope = "col";
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
