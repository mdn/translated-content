---
title: "ARIA: grid ロール"
slug: Web/Accessibility/ARIA/Roles/grid_role
---

グリッド (`grid`) ロールは、1 つ以上のセルの行を含むウィジェット用です。 各セルの位置は重要であり、キーボード入力を使用してフォーカスすることができます。

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

## 説明

グリッドウィジェットは、テーマに沿ったインタラクティブなコンテンツの 1 つ以上のセルを持つ 1 つ以上の行を含みます。 それは特定の視覚的表現を暗示するものではありませんが、要素間の関連性を暗示します。 用途は、表形式の情報の表示 (データグリッド) と他のウィジェットのグループ化 (レイアウトグリッド) の 2 つのカテゴリーに分類されます。 データグリッドとレイアウトグリッドの両方が同じ ARIA のロール、ステート、およびプロパティを採用している場合でも、そのコンテンツと目的の違いは、キーボードインタラクションのデザインにおいて考慮すべき重要な要因を表面化させます。 詳細については、[WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/#grid) を参照してください。

セル要素には、行ヘッダーや列ヘッダーでない限り、グリッドセル ([`gridcell`](/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)) ロールがあります。 ヘッダー要素には、それぞれ行ヘッダー ([`rowheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Rowheader_Role)) ロールと列ヘッダー ([`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_Role)) ロールがあります。 セル要素は、行 ([`row`](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)) ロールを持つ要素によって所有される必要があります。 行は行グループ ([`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)) を使用してグループ化できます。

グリッドをインタラクティブなウィジェットとして使用する場合は、[キーボードインタラクション](#keyboard_interactions)を実装する必要があります。

### 関連する ARIA のロール、ステート、プロパティ

#### ロール

- [treegrid](/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_Role) (サブクラス)
  - : グリッドに展開や折りたたみができる列がある場合は、ツリーグリッドを使用できます。
- [row](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)
  - : グリッド内の行。
- [rowgroup](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)
  - : 1 つ以上の行 ([row](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)) を含むグループ。

#### ステートとプロパティ

- [aria-level](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-level_attribute)
  - : 他の構造内でのグリッドの階層レベルを示します。 (訳注: この属性は、グリッドロールでは、ARIA 1.2 で、サポートされなくなる予定です。 行ロールでは、引き続きサポートされています。)
- [aria-multiselectable](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-multiselectable_attribute)
  - : `aria-multiselectable` が `true` に設定されている場合、グリッド内の複数の項目を選択できます。 デフォルト値は `false` です。
- [aria-readonly](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-readonly_attribute)
  - : ユーザーがグリッドをナビゲートできるが、グリッドの値を変更できない場合は、`aria-readonly` を `true` に設定するべきです。 デフォルト値は `false` です。

> **メモ:** 多くのユースケースでは、HTML の表 ([`table`](/ja/docs/Web/HTML/Element/table)) 要素で十分であり、その要素にはすでに多くの ARIA ロールが含まれています。

### キーボードインタラクション

キーボードユーザーはグリッドに出会うと、<kbd>左</kbd>、<kbd>右</kbd>、<kbd>上</kbd>、<kbd>下</kbd>のキーを使用して行と列をナビゲートします。 インタラクティブなコンポーネントをアクティブ化するには、<kbd>リターン</kbd>キーと<kbd>スペース</kbd>キーを使用します。

| キー                              | アクション                                                                                                                                                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | 1 セル右にフォーカスを移動します。 フォーカスが行の右端のセルにある場合、フォーカスは移動しません。                                                                                                                             |
| <kbd>←</kbd>                      | 1 セル左にフォーカスを移動します。 フォーカスが行の左端のセルにある場合、フォーカスは移動しません。                                                                                                                             |
| <kbd>↓</kbd>                      | 1 セル下にフォーカスを移動します。 フォーカスが列の最下部のセルにある場合、フォーカスは移動しません。                                                                                                                           |
| <kbd>↑</kbd>                      | 1 セル上にフォーカスを移動します。 フォーカスが列の最上部のセルにある場合、フォーカスは移動しません。                                                                                                                           |
| <kbd>Page Down</kbd>              | 作成者が決定した行数だけ下にフォーカスを移動します。 通常、現在表示されている行セットの一番下の行が最初に表示される行の 1 つになるようにスクロールします。 フォーカスがグリッドの最後の行にある場合、フォーカスは移動しません。 |
| <kbd>Page Up</kbd>                | 作成者が決定した行数だけ上にフォーカスを移動します。通常、現在表示されている行セットの一番上の行が最後に表示される行の 1 つになるようにスクロールします。 フォーカスがグリッドの最初の行にある場合、フォーカスは移動しません。  |
| <kbd>Home</kbd>                   | フォーカスを含む行の最初のセルにフォーカスを移動します。                                                                                                                                                                        |
| <kbd>End</kbd>                    | フォーカスを含む行の最後のセルにフォーカスを移動します。                                                                                                                                                                        |
| <kbd>ctrl</kbd> + <kbd>Home</kbd> | 最初の行の最初のセルにフォーカスを移動します。                                                                                                                                                                                  |
| <kbd>ctrl</kbd> + <kbd>End</kbd>  | 最後の行の最後のセルにフォーカスを移動します。                                                                                                                                                                                  |

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

```html hidden
<table role="grid" aria-labelledby="calendarheader" aria-readonly="true">
  <caption id="calendarheader">
    September 2018
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <td></td>
      <th role="columnheader" aria-label="Sunday">S</th>
      <th role="columnheader" aria-label="Monday">M</th>
      <th role="columnheader" aria-label="Tuesday">T</th>
      <th role="columnheader" aria-label="Wednesday">W</th>
      <th role="columnheader" aria-label="Thursday">T</th>
      <th role="columnheader" aria-label="Friday">F</th>
      <th role="columnheader" aria-label="Saturday">S</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th scope="row" role="rowheader">Week 35</th>
      <td>26</td>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td role="gridcell" tabindex="-1">1</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 36</th>
      <td role="gridcell" tabindex="-1">2</td>
      <td role="gridcell" tabindex="-1">3</td>
      <td role="gridcell" tabindex="-1">4</td>
      <td role="gridcell" tabindex="-1">5</td>
      <td role="gridcell" tabindex="-1">6</td>
      <td role="gridcell" tabindex="-1">7</td>
      <td role="gridcell" tabindex="-1">8</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 37</th>
      <td role="gridcell" tabindex="-1">9</td>
      <td role="gridcell" tabindex="-1">10</td>
      <td role="gridcell" tabindex="-1">11</td>
      <td role="gridcell" tabindex="-1">12</td>
      <td role="gridcell" tabindex="-1">13</td>
      <td role="gridcell" tabindex="-1">14</td>
      <td role="gridcell" tabindex="-1">15</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 38</th>
      <td role="gridcell" tabindex="-1">16</td>
      <td role="gridcell" tabindex="-1">17</td>
      <td role="gridcell" tabindex="-1">18</td>
      <td role="gridcell" tabindex="-1">19</td>
      <td role="gridcell" tabindex="-1">20</td>
      <td role="gridcell" tabindex="-1">21</td>
      <td role="gridcell" tabindex="-1">22</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 39</th>
      <td role="gridcell" tabindex="-1">23</td>
      <td role="gridcell" tabindex="-1">24</td>
      <td role="gridcell" tabindex="-1">25</td>
      <td role="gridcell" tabindex="-1">26</td>
      <td role="gridcell" tabindex="-1">27</td>
      <td role="gridcell" tabindex="-1">28</td>
      <td role="gridcell" tabindex="-1">29</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 40</th>
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

```css hidden
body {
  margin: 2rem;
  font-family: "Helvetica Neue", sans-serif;
}

table {
  margin: 0;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

tbody th, tbody td {
  padding: 5px;
}

tbody td {
  border: 1px solid #000;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: #000;
}

tbody td[role="gridcell"]:hover, tbody td[role="gridcell"]:focus {
    background-color: #f6f6f6;
    outline: 3px solid blue;
  }
}
```

```js hidden
var selectables = document.querySelectorAll('table td[role="gridcell"]');

selectables[0].setAttribute("tabindex", 0);

var trs = document.querySelectorAll("table tbody tr"),
  row = 0,
  col = 0,
  maxrow = trs.length - 1,
  maxcol = 0;

Array.prototype.forEach.call(trs, function (gridrow, i) {
  Array.prototype.forEach.call(
    gridrow.querySelectorAll("td"),
    function (el, i) {
      el.dataset.row = row;
      el.dataset.col = col;
      col = col + 1;
    },
  );
  if (col > maxcol) {
    maxcol = col - 1;
  }
  col = 0;
  row = row + 1;
});

function moveto(newrow, newcol) {
  var tgt = document.querySelector(
    '[data-row="' + newrow + '"][data-col="' + newcol + '"]',
  );
  if (tgt && tgt.getAttribute("role") === "gridcell") {
    Array.prototype.forEach.call(
      document.querySelectorAll("[role=gridcell]"),
      function (el, i) {
        el.setAttribute("tabindex", "-1");
      },
    );
    tgt.setAttribute("tabindex", "0");
    tgt.focus();
    return true;
  } else {
    return false;
  }
}

document.querySelector("table").addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      moveto(
        parseInt(event.target.dataset.row, 10),
        parseInt(event.target.dataset.col, 10) + 1,
      );
      break;
    case "ArrowLeft":
      moveto(
        parseInt(event.target.dataset.row, 10),
        parseInt(event.target.dataset.col, 10) - 1,
      );
      break;
    case "ArrowDown":
      moveto(
        parseInt(event.target.dataset.row, 10) + 1,
        parseInt(event.target.dataset.col, 10),
      );
      break;
    case "ArrowUp":
      moveto(
        parseInt(event.target.dataset.row, 10) - 1,
        parseInt(event.target.dataset.col, 10),
      );
      break;
    case "Home":
      if (event.ctrlKey) {
        var i = 0;
        var result;
        do {
          var j = 0;
          var result;
          do {
            result = moveto(i, j);
            j++;
          } while (result == false);
          i++;
        } while (result == false);
      } else {
        moveto(parseInt(event.target.dataset.row, 10), 0);
      }
      break;
    case "End":
      if (event.ctrlKey) {
        var i = maxrow;
        var result;
        do {
          var j = maxcol;
          do {
            result = moveto(i, j);
            j--;
          } while (result == false);
          i--;
        } while (result == false);
      } else {
        moveto(
          parseInt(event.target.dataset.row, 10),
          document.querySelector(
            '[data-row="' + event.target.dataset.row + '"]:last-of-type',
          ).dataset.col,
        );
      }
      break;
    case "PageUp":
      var i = 0;
      var result;
      do {
        result = moveto(i, event.target.dataset.col);
        i++;
      } while (result == false);
      break;
    case "PageDown":
      var i = maxrow;
      var result;
      do {
        result = moveto(i, event.target.dataset.col);
        i--;
      } while (result == false);
      break;
    case "Enter":
      alert(event.target.textContent);
      break;
  }
  event.preventDefault();
});
```

{{EmbedLiveSample("Calendar_example", "100%", "300")}}

#### HTML

```html
<table role="grid" aria-labelledby="calendarheader">
  <caption id="calendarheader">
    September 2018
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <td></td>
      <th role="columnheader" aria-label="Sunday">S</th>
      <th role="columnheader" aria-label="Monday">M</th>
      <th role="columnheader" aria-label="Tuesday">T</th>
      <th role="columnheader" aria-label="Wednesday">W</th>
      <th role="columnheader" aria-label="Thursday">T</th>
      <th role="columnheader" aria-label="Friday">F</th>
      <th role="columnheader" aria-label="Saturday">S</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th scope="row" role="rowheader">Week 35</th>
      <td>26</td>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td role="gridcell" tabindex="-1">1</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 36</th>
      <td role="gridcell" tabindex="-1">2</td>
      <td role="gridcell" tabindex="-1">3</td>
      <td role="gridcell" tabindex="-1">4</td>
      <td role="gridcell" tabindex="-1">5</td>
      <td role="gridcell" tabindex="-1">6</td>
      <td role="gridcell" tabindex="-1">7</td>
      <td role="gridcell" tabindex="-1">8</td>
    </tr>
    <!-- … Additional Rows … -->
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
  border: 1px solid #000;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: #000;
}

tbody td[role="gridcell"]:hover,
tbody td[role="gridcell"]:focus {
  background-color: #f6f6f6;
  outline: 3px solid blue;
}
```

#### JavaScript

```js
var selectables = document.querySelectorAll('table td[role="gridcell"]');

selectables[0].setAttribute("tabindex", 0);

var trs = document.querySelectorAll("table tbody tr"),
  row = 0,
  col = 0,
  maxrow = trs.length - 1,
  maxcol = 0;

Array.prototype.forEach.call(trs, function (gridrow, i) {
  Array.prototype.forEach.call(
    gridrow.querySelectorAll("td"),
    function (el, i) {
      el.dataset.row = row;
      el.dataset.col = col;
      col = col + 1;
    },
  );
  if (col > maxcol) {
    maxcol = col - 1;
  }
  col = 0;
  row = row + 1;
});

function moveto(newrow, newcol) {
  var tgt = document.querySelector(
    '[data-row="' + newrow + '"][data-col="' + newcol + '"]',
  );
  if (tgt && tgt.getAttribute("role") === "gridcell") {
    Array.prototype.forEach.call(
      document.querySelectorAll("[role=gridcell]"),
      function (el, i) {
        el.setAttribute("tabindex", "-1");
      },
    );
    tgt.setAttribute("tabindex", "0");
    tgt.focus();
    return true;
  } else {
    return false;
  }
}

document.querySelector("table").addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      moveto(
        parseInt(event.target.dataset.row, 10),
        parseInt(event.target.dataset.col, 10) + 1,
      );
      break;
    case "ArrowLeft":
      moveto(
        parseInt(event.target.dataset.row, 10),
        parseInt(event.target.dataset.col, 10) - 1,
      );
      break;
    case "ArrowDown":
      moveto(
        parseInt(event.target.dataset.row, 10) + 1,
        parseInt(event.target.dataset.col, 10),
      );
      break;
    case "ArrowUp":
      moveto(
        parseInt(event.target.dataset.row, 10) - 1,
        parseInt(event.target.dataset.col, 10),
      );
      break;
    case "Home":
      if (event.ctrlKey) {
        var i = 0;
        var result;
        do {
          var j = 0;
          var result;
          do {
            result = moveto(i, j);
            j++;
          } while (result == false);
          i++;
        } while (result == false);
      } else {
        moveto(parseInt(event.target.dataset.row, 10), 0);
      }
      break;
    case "End":
      if (event.ctrlKey) {
        var i = maxrow;
        var result;
        do {
          var j = maxcol;
          do {
            result = moveto(i, j);
            j--;
          } while (result == false);
          i--;
        } while (result == false);
      } else {
        moveto(
          parseInt(event.target.dataset.row, 10),
          document.querySelector(
            '[data-row="' + event.target.dataset.row + '"]:last-of-type',
          ).dataset.col,
        );
      }
      break;
    case "PageUp":
      var i = 0;
      var result;
      do {
        result = moveto(i, event.target.dataset.col);
        i++;
      } while (result == false);
      break;
    case "PageDown":
      var i = maxrow;
      var result;
      do {
        result = moveto(i, event.target.dataset.col);
        i--;
      } while (result == false);
      break;
    case "Enter":
      alert(event.target.textContent);
      break;
  }
  event.preventDefault();
});
```

### より多くの例

- [データグリッドの例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/grid/dataGrids.html) (英語)
- [レイアウトグリッドの例](https://www.w3.org/TR/wai-aria-practices/examples/grid/LayoutGrids.html) (英語)
- [W3C/WAI チュートリアル: 表](https://www.w3.org/WAI/tutorials/tables/) (英語)

## アクセシビリティに関する懸念

[キーボードインタラクション](#keyboard_interactions)が適切に実装されていても、矢印キーを使用しなければならないことに気づかないユーザーもいます。 グリッド (`grid`) ロールを使用して、必要な機能性とインタラクションが最もよく達成できることを確認してください。

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [ARIA composite ロール](/ja/docs/Web/Accessibility/ARIA/Roles/composite_Role)
- [ARIA table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role)
- [ARIA treegrid ロール](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_Role)
- [ARIA row ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)
- [ARIA rowgroup ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)
- [ARIA: gridcell ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)
- [ARIA: rowheader ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Rowheader_Role)
- [ARIA: columnheader ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_Role)
- [HTML の表要素](/ja/docs/Web/HTML/Element/table)
- aria-level
- aria-multiselectable
- aria-readonly

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
