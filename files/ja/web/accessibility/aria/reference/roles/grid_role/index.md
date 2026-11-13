---
title: "ARIA: grid ロール"
short-title: grid
slug: Web/Accessibility/ARIA/Reference/Roles/grid_role
l10n:
  sourceCommit: 96758f3d8ce1e5fbd9d58053bdef103eec1de108
---

`grid` ロールは、1 つ以上のセルの行を含むウィジェットのためのものです。 各セルの位置は重要であり、キーボード入力を使用してフォーカスすることができます。

## 解説

`grid` ロールは、1 つ以上の行と 1 つ以上のセルからなる集合を含む複合ウィジェットであり、グリッド内のセルの一部またはすべてが、方向キーなどの二次元ナビゲーションの手法を使用してフォーカスを当てることができます。

```html
<table role="grid" aria-labelledby="id-select-your-seat">
  <caption id="id-select-your-seat">
    座席を選んでください
  </caption>
  <tbody role="presentation">
    <tr role="presentation">
      <td></td>
      <th>列 A</th>
      <th>列 B</th>
    </tr>
    <tr>
      <th scope="row">通路 1</th>
      <td tabindex="0">
        <button id="1a" tabindex="-1">1A</button>
      </td>
      <td tabindex="-1">
        <button id="1b" tabindex="-1">1B</button>
      </td>
      <!-- その他の列 -->
    </tr>
    <tr>
      <th scope="row">通路 2</th>
      <td tabindex="-1">
        <button id="2a" tabindex="-1">2A</button>
      </td>
      <td tabindex="-1">
        <button id="2b" tabindex="-1">2B</button>
      </td>
      <!-- その他の列 -->
    </tr>
  </tbody>
</table>
```

グリッドウィジェットは、テーマに沿った対話的なコンテンツの 1 つ以上のセルを持つ 1 つ以上の行を含みます。 それは特定の視覚的表現を暗示するものではありませんが、要素間の関連性を暗示します。 用途は、表形式の情報の表示（データグリッド）と他のウィジェットのグループ化（レイアウトグリッド）の 2 つのカテゴリーに分類されます。 データグリッドとレイアウトグリッドの両方が同じ ARIA のロール、ステート、プロパティを採用している場合でも、そのコンテンツと目的の違いは、キーボード操作のデザインにおいて考慮すべき重要な要因を表面化させます。 詳細については、[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) を参照してください。

セル要素には、行ヘッダーや列ヘッダーでない限り、グリッドセル ([`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)) ロールを持ちます。 ヘッダー要素には、それぞれ行ヘッダー ([`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)) ロールと列ヘッダー ([`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)) ロールを持ちます。セル要素は、行 ([`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)) ロールを持つ要素によって所有される必要があります。 行は行グループ ([`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)) を使用してグループ化できます。

グリッドを対話的なウィジェットとして使用する場合は、[キーボード操作](#keyboard_interactions)を実装する必要があります。

ARIA では必須とされてはいませんが、`grid` ロールにはアクセシブル名を付けることを強く推奨します。表示されているラベルを参照するには [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用し、表示されているラベルがない場合は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

### 関連する ARIA のロール、ステート、プロパティ

#### ロール

- [treegrid](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) (サブクラス)
  - : グリッドに展開や折りたたみができる列がある場合は、ツリーグリッドを使用できます。
- [row](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : グリッド内の行。
- [rowgroup](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : 1 つ以上の行 ([row](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)) を含むグループ。

#### ステートとプロパティ

- [aria-level](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : 他の構造内でのグリッドの階層レベルを示します。
- [aria-multiselectable](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : `aria-multiselectable` が `true` に設定されている場合、グリッド内の複数の項目を選択できます。 デフォルト値は `false` です。
- [aria-readonly](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : ユーザーがグリッドをナビゲートできるが、グリッドの値を変更できない場合は、`aria-readonly` を `true` に設定するべきです。デフォルト値は `false` ですが、この属性を省略しても、グリッドに編集可能なコンテンツが含まれていることを意味するわけではありません。グリッドでセルのコンテンツ編集機能を提供しない場合は、この属性を省略してください。グリッドに設定された値は、そのグリッドセルに反映されますが、個々のグリッドセルで上書きすることができます。

> [!NOTE]
> 多くの用途では、HTML の {{HTMLElement('table')}} 要素で十分であり、その要素にはすでに多くの ARIA ロールが含まれています。

### キーボード操作

キーボードユーザーはグリッドに出会うと、<kbd>←</kbd>、<kbd>→</kbd>、<kbd>↑</kbd>、<kbd>↓</kbd>のキーを使用して行と列を操作します。対話的なコンポーネントをアクティブ化するには、<kbd>リターン</kbd>キーと<kbd>スペース</kbd>キーを使用します。

| キー                              | アクション                                                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | フォーカスを 1 セル右に移動します。場合によっては（レイアウトグリッドの場合）、フォーカスがその行の右端のセルにある場合、次行の最初のセルにフォーカスが移動することがあります。フォーカスがグリッドの最後のセルにある場合は、フォーカスは移動しません。 |
| <kbd>←</kbd>                      | フォーカスを 1 セル左に移動します。オプション（レイアウトグリッドの場合）、フォーカスがその行の最左端のセルにある場合、前行の最後のセルにフォーカスが移動することがあります。フォーカスがグリッドの最初のセルにある場合は、フォーカスは移動されません。 |
| <kbd>↓</kbd>                      | フォーカスを 1 セル下に移動します。場合によっては（レイアウトグリッドの場合）、フォーカスが列の一番上のセルにある場合、次列の一番上のセルにフォーカスが移動することがあります。フォーカスがグリッドの最初のセルにある場合は、フォーカスは移動しません。 |
| <kbd>↑</kbd>                      | フォーカスを 1 セル上に移動します。オプション（レイアウトグリッドの場合）、フォーカスが列の一番上のセルにある場合、前列の一番下のセルにフォーカスが移動することがあります。フォーカスがグリッドの最初のセルにある場合は、フォーカスは移動しません。     |
| <kbd>Page Down</kbd>              | フォーカスを、作成者が指定した行数分下へ移動させます。通常、スクロールが行われ、現在表示されている行の最下段が、最初に表示される行の 1 つになるようにします。フォーカスがグリッドの最終行にある場合、フォーカスは移動しません。                         |
| <kbd>Page Up</kbd>                | フォーカスを、作成者が指定した行数分上に移動されます。通常、スクロールが行われ、現在表示されている行の最上段が、最後に表示されていた行の 1 つになるようにします。グリッドの 1 行目にフォーカスがある場合、フォーカスは移動しません。                    |
| <kbd>Home</kbd>                   | フォーカスを含む行の最初のセルにフォーカスを移動します。                                                                                                                                                                                                |
| <kbd>End</kbd>                    | フォーカスを含む行の最後のセルにフォーカスを移動します。                                                                                                                                                                                                |
| <kbd>ctrl</kbd> + <kbd>Home</kbd> | 最初の行の最初のセルにフォーカスを移動します。                                                                                                                                                                                                          |
| <kbd>ctrl</kbd> + <kbd>End</kbd>  | 最後の行の最後のセルにフォーカスを移動します。                                                                                                                                                                                                          |

セル、行、列を複数選択できる場合は、次のキーの組み合わせが一般的に使用されます。

| キーの組み合わせ                    | アクション                                                                                                                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>Space</kbd>  | フォーカスを含む列を選択します。                                                                                                                                                                                    |
| <kbd>shift</kbd> + <kbd>Space</kbd> | フォーカスを含む行を選択します。 グリッドに行を選択するためのチェックボックス付きの列が含まれている場合、このキーの組み合わせを使用して、フォーカスがチェックボックスにない場合でもそのボックスをチェックできます。 |
| <kbd>ctrl</kbd> + <kbd>A</kbd>      | すべてのセルを選択します。                                                                                                                                                                                          |
| <kbd>shift</kbd> + <kbd>→</kbd>     | 選択範囲を 1 セル右側に拡張します。                                                                                                                                                                                 |
| <kbd>shift</kbd> + <kbd>←</kbd>     | 選択範囲を 1 セル左側に拡張します。                                                                                                                                                                                 |
| <kbd>shift</kbd> + <kbd>↓</kbd>     | 選択範囲を 1 セル下側に拡張します。                                                                                                                                                                                 |
| <kbd>shift</kbd> + <kbd>↑</kbd>     | 選択範囲を 1 セル上側に拡張します。                                                                                                                                                                                 |

## 例

### カレンダーの例

{{EmbedLiveSample("Calendar_example", "100%", "300")}}

#### HTML

```html
<table role="grid" aria-labelledby="calendarheader">
  <caption id="calendarheader">
    2018 年 9 月
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <td></td>
      <th role="columnheader" aria-label="Sunday">日</th>
      <th role="columnheader" aria-label="Monday">月</th>
      <th role="columnheader" aria-label="Tuesday">火</th>
      <th role="columnheader" aria-label="Wednesday">水</th>
      <th role="columnheader" aria-label="Thursday">木</th>
      <th role="columnheader" aria-label="Friday">金</th>
      <th role="columnheader" aria-label="Saturday">土</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th scope="row" role="rowheader">第 1 週</th>
      <td>26</td>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td role="gridcell" tabindex="-1">1</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">第 2 週</th>
      <td role="gridcell" tabindex="-1">2</td>
      <td role="gridcell" tabindex="-1">3</td>
      <td role="gridcell" tabindex="-1">4</td>
      <td role="gridcell" tabindex="-1">5</td>
      <td role="gridcell" tabindex="-1">6</td>
      <td role="gridcell" tabindex="-1">7</td>
      <td role="gridcell" tabindex="-1">8</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">第 3 週</th>
      <td role="gridcell" tabindex="-1">9</td>
      <td role="gridcell" tabindex="-1">10</td>
      <td role="gridcell" tabindex="-1">11</td>
      <td role="gridcell" tabindex="-1">12</td>
      <td role="gridcell" tabindex="-1">13</td>
      <td role="gridcell" tabindex="-1">14</td>
      <td role="gridcell" tabindex="-1">15</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">第 4 週</th>
      <td role="gridcell" tabindex="-1">16</td>
      <td role="gridcell" tabindex="-1">17</td>
      <td role="gridcell" tabindex="-1">18</td>
      <td role="gridcell" tabindex="-1">19</td>
      <td role="gridcell" tabindex="-1">20</td>
      <td role="gridcell" tabindex="-1">21</td>
      <td role="gridcell" tabindex="-1">22</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">第 5 週</th>
      <td role="gridcell" tabindex="-1">23</td>
      <td role="gridcell" tabindex="-1">24</td>
      <td role="gridcell" tabindex="-1">25</td>
      <td role="gridcell" tabindex="-1">26</td>
      <td role="gridcell" tabindex="-1">27</td>
      <td role="gridcell" tabindex="-1">28</td>
      <td role="gridcell" tabindex="-1">29</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">第 6 週</th>
      <td role="gridcell" tabindex="-1">30</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  margin: 0;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

tbody th,
tbody td {
  padding: 5px;
}

tbody td {
  border: 1px solid black;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: black;
}

tbody td[role="gridcell"]:hover,
tbody td[role="gridcell"]:focus {
  background-color: #f6f6f6;
  outline: 3px solid blue;
}
```

#### JavaScript

```js
const selectables = document.querySelectorAll('table td[role="gridcell"]');

selectables[0].setAttribute("tabindex", 0);

const trs = document.querySelectorAll("table tbody tr");
let rowIndex = 0;
let colIndex = 0;
let maxRow = trs.length - 1;
let maxCol = 0;

trs.forEach((row) => {
  row.querySelectorAll("td").forEach((el) => {
    el.dataset.row = rowIndex;
    el.dataset.col = colIndex;
    colIndex++;
  });
  if (colIndex > maxCol) {
    maxCol = colIndex - 1;
  }
  colIndex = 0;
  rowIndex++;
});

function moveTo(newRow, newCol) {
  const tgt = document.querySelector(
    `[data-row="${newRow}"][data-col="${newCol}"]`,
  );
  if (tgt?.getAttribute("role") !== "gridcell") {
    return false;
  }
  document.querySelectorAll("[role=gridcell]").forEach((el) => {
    el.setAttribute("tabindex", "-1");
  });
  tgt.setAttribute("tabindex", "0");
  tgt.focus();
  return true;
}

document.querySelector("table").addEventListener("keydown", (event) => {
  const col = parseInt(event.target.dataset.col, 10);
  const row = parseInt(event.target.dataset.row, 10);
  switch (event.key) {
    case "ArrowRight": {
      const newRow = col === 6 ? row + 1 : row;
      const newCol = col === 6 ? 0 : col + 1;
      moveTo(newRow, newCol);
      break;
    }
    case "ArrowLeft": {
      const newRow = col === 0 ? row - 1 : row;
      const newCol = col === 0 ? 6 : col - 1;
      moveTo(newRow, newCol);
      break;
    }
    case "ArrowDown":
      moveTo(row + 1, col);
      break;
    case "ArrowUp":
      moveTo(row - 1, col);
      break;
    case "Home": {
      if (event.ctrlKey) {
        let i = 0;
        let result;
        do {
          let j = 0;
          do {
            result = moveTo(i, j);
            j++;
          } while (!result);
          i++;
        } while (!result);
      } else {
        moveTo(row, 0);
      }
      break;
    }
    case "End": {
      if (event.ctrlKey) {
        let i = maxRow;
        let result;
        do {
          let j = maxCol;
          do {
            result = moveTo(i, j);
            j--;
          } while (!result);
          i--;
        } while (!result);
      } else {
        moveTo(
          row,
          document.querySelector(
            `[data-row="${event.target.dataset.row}"]:last-of-type`,
          ).dataset.col,
        );
      }
      break;
    }
    case "PageUp": {
      let i = 0;
      let result;
      do {
        result = moveTo(i, col);
        i++;
      } while (!result);
      break;
    }
    case "PageDown": {
      let i = maxRow;
      let result;
      do {
        result = moveTo(i, col);
        i--;
      } while (!result);
      break;
    }
    case "Enter": {
      console.log(event.target.textContent);
      break;
    }
  }
  event.preventDefault();
});
```

### より多くの例

- [データグリッドの例](https://www.w3.org/WAI/ARIA/apg/example-index/grid/dataGrids.html) <sup>(英語)</sup>
- [レイアウトグリッドの例](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html) <sup>(英語)</sup>
- [W3C/WAI チュートリアル: 表](https://www.w3.org/WAI/tutorials/tables/) <sup>(英語)</sup>

## アクセシビリティの注意事項

キーボードの使用が適切に実装されていても、矢印キーを使用しなければならないことに気づかないユーザーもいます。`grid` ロールを使用して、必要な機能性と操作が最もよく達成できることを確認してください。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA `composite` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA `table` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA `treegrid` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [ARIA `row` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA `rowgroup` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA: `gridcell` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA: `rowheader` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: `columnheader` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- {{HTMLElement('table','HTML <code>&lt;table&gt;</code> 要素')}}
- [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
