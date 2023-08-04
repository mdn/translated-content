---
title: "ARIA: gridcell ロール"
slug: Web/Accessibility/ARIA/Roles/gridcell_role
---

[グリッドセル (gridcell) ロール](https://www.w3.org/TR/wai-aria-1.1/#gridcell)は、グリッド ([grid](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)) やツリーグリッド ([treegrid](/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_role)) にセルを作成するために使用します。 これは、情報を表スタイルでグループ化する [HTML の `td` 要素](/ja/docs/Web/HTML/Element/td)の機能を模倣することを意図しています。

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

`role="gridcell"` が適用されている要素は、行 ([`row`](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)) ロールを持つ要素の子である必要があります。

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA を追加する代わりにネイティブな HTML を使用することです。 次のように、代わりに、ネイティブな [HTML の `td` 要素](/ja/docs/Web/HTML/Element/td)を [`contenteditable` 属性](/ja/docs/Web/HTML/Global_attributes/contenteditable)と組み合わせて使用します。

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## 説明

### 行と列が動的に追加、非表示、または削除されるグリッドセル

`role="gridcell"` が適用されている要素は、表、グリッド、またはツリーグリッドに行や列を動的に追加、非表示、または削除する機能がある場合、ARIA を使用して表スタイルのグループ化における順序を説明する必要があります。

`aria-colindex` を使用して、列の並びでのグリッドセル (`gridcell`) の順序を説明し、`aria-rowindex` を使用して、行の並びでのグリッドセルの順序を説明します。 [`role="grid"`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role) が適用された親要素で `aria-colcount` と `aria-rowcount` を使用して、列または行の総数を設定します。

次のサンプルコードは、3 番目と 4 番目の列が削除された情報の表スタイルでのグループ化を示しています。 `aria-colindex` は行の位置を説明するために使用されており、支援技術を使用している人が特定の行が削除されたことを推測できるようにします。

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">First name</div>
      <div role="columnheader" aria-colindex="2">Last name</div>
      <div role="columnheader" aria-colindex="5">City</div>
      <div role="columnheader" aria-colindex="6">Zip</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

### 全体的な構造が不明な場合のグリッドセルの位置の説明

コンテンツを表スタイルでグループ化することで列と行に関する情報が提供されない場合、グリッドセルの位置は、[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) を使用してプログラムで説明する必要があります。 `aria-describedby` に提供される [`id`](/ja/docs/Web/HTML/Global_attributes/id) は、行と列を意図する親要素に対応している必要があります。

`aria-describedby` を介して適用された行ヘッダー ([`rowheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Rowheader_role)) ロールまたは列ヘッダー ([`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_role)) ロールを持つ親要素を参照することにより、支援技術は、グリッドセル (`gridcell`) 要素とコンテンツを表スタイルでグループ化した残りとの位置と関係を理解できます。

### インタラクティブなグリッドとツリーグリッド

#### 編集可能なセル

`td` 要素とグリッドセル (`gridcell`) ロールが適用された要素の両方を編集可能にして、スプレッドシートの編集と同様の機能を模倣することができます。 これは、HTML の [`contenteditable` 属性](/ja/docs/Web/HTML/Global_attributes/contenteditable)を適用することによって行われます。

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` は、適用される要素を <kbd>Tab</kbd> キーでフォーカス可能にします。 グリッドセルが条件付きで編集が禁止されている状態に切り替わる場合は、グリッドセル要素で [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-readonly_attribute) を切り替えます。

#### 展開可能なセル

ツリーグリッド ([treegrid](/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_role)) では、`aria-expanded` 属性を切り替えることでグリッドセルを展開可能にできます。 この属性が指定されている場合、個々のグリッドセルにのみ適用されることに注意してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- grid
  - : 親要素が情報を表スタイルまたはツリースタイルでグループ化するものであることを伝えます。
- row
  - : グリッドセル (`gridcell`) が情報の表スタイルでのグループ化による行の一部であることを伝えるために必要です。
- columnheader
  - : どの要素が関連する列ヘッダーであるかを指定します。
- aria-colindex
  - : 情報を表スタイルでグループ化した列の残りの部分に対する要素の位置を識別します。
- rowheader
  - : どの要素が関連する行ヘッダーであるかを指定します。
- aria-rowindex
  - : 情報を表スタイルでグループ化した行の残りの部分に対する要素の位置を識別します。

### 例

次の例では、情報を表スタイルでグループ化したものを作成します。

```html
<h3 id="table-title">Jovian gas giant planets</h3>
<div role="grid" aria-describedby="table-title">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Name</div>
      <div role="columnheader">Diameter (km)</div>
      <div role="columnheader">Length of day (hours)</div>
      <div role="columnheader">Distance from Sun (10<sup>6</sup>km)</div>
      <div role="columnheader">Number of moons</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Jupiter</div>
      <div role="gridcell">142,984</div>
      <div role="gridcell">9.9</div>
      <div role="gridcell">778.6</div>
      <div role="gridcell">67</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Saturn</div>
      <div role="gridcell">120,536</div>
      <div role="gridcell">10.7</div>
      <div role="gridcell">1433.5</div>
      <div role="gridcell">62</div>
    </div>
  </div>
</div>
```

## アクセシビリティに関する懸念

グリッドセル (`gridcell`) および特定のグリッドセル (`gridcell`) 関連の ARIA のロールとプロパティのサポートは、支援技術ではサポートが不十分です。 可能であれば、代わりに[ネイティブな HTML の表のマークアップ](/ja/docs/Web/HTML/Element/table)を利用してください。

## ベストプラクティス

ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA のロール、ステート、プロパティを追加してアクセス可能にする代わりに、ネイティブな HTML を使用することです。 そのため、ARIA と JavaScript を使用して表の形態と機能を再作成するのではなく、[ネイティブな HTML の表のマークアップ](/ja/docs/Web/HTML/Element/table)を利用することをお勧めします。

## 関連情報

- [表要素](/ja/docs/Web/HTML/Element/table)
- [ARIA: grid ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)
- [Grid Role - Maxability](http://www.maxability.co.in/wai-aria-overview/grid-role/)
- [表の行要素](/ja/docs/Web/HTML/Element/tr)
- [ARIA: row ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)
- [Row Role - Maxability](http://www.maxability.co.in/wai-aria-overview/row-role/)
- [aria-rowcount - Maxability](http://www.maxability.co.in/2018/09/aria-rowcount-property/)
- [ARIA: rowgroup ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)
- [Rowgroup Role - Maxability](http://www.maxability.co.in/wai-aria-overview/rowgroup-role/)
- [表のヘッダー要素](/ja/docs/Web/HTML/Element/th)
- [Columnheader - Maxability](http://www.maxability.co.in/wai-aria-overview/columnheader-role/)
- [aria-colcount - Maxability](http://www.maxability.co.in/2017/07/aria-colcount-property/)
- [表のデータセル要素](/ja/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [Gridcell Role - Maxability](http://www.maxability.co.in/wai-aria-overview/gridcell-role/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
