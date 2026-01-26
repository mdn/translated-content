---
title: "ARIA: columnheader ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

ARIA ロール属性の `columnheader` 値は、要素を列の見出し情報を含む行内のセルとして識別します。これは、列スコープを持つネイティブな {{HTMLElement('th')}} 要素と似ています。

## 説明

`role="columnheader"` を持つ要素が `role="row"` を持つ要素の子孫として入れ子になっている場合、それは表形式のコンテナー（表、グリッド、またはデータの関係を示す必要があるその他のチャート）内の列見出しセルの静的な表形式構造です。サポートされるには、columnheader は [`row` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) を持つ要素内に入れ子にされている必要があります。

### 関連する WAI-ARIA のロール、ステート、プロパティ

すべての列見出しは [row](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 内に入れ子にされている必要があります。同様にすべての行は、[grid](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[table](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)、または [treegrid](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 、または上記のいずれかに入れ子にされた [rowgroup](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 内に入れ子にされている必要があります。

- [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : 一度に 1 つの列見出しのみに適用され、もし適用されている場合、`aria-sort` 属性は、列が `ascending` または `descending` 順序でソートされているか、ソートされていない場合は `none` かを示します。

### キーボードインタラクション

このロールは、特定のキーボードインタラクションをサポートしていません。

### 必要な JavaScript 機能

JavaScript は、`aria-sort` 属性が使用される場合のみ必要です。

## 例

```html
<table>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">
        <button>First Name</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Last Name</button>
      </th>
      <th role="columnheader" scope="col" aria-sort="ascending">
        <button>Company Name</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Job Title</button>
      </th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

## ベストプラクティス

列見出しには、列のタイトルまたは見出し情報を含める必要があります。

ARIA の第一のルールは、必要なセマンティクスと動作を持つネイティブ HTML 要素または属性がある場合、要素を再利用して ARIA ロール、ステート、またはプロパティを追加してアクセシブルにするのではなく、そのネイティブ要素を使用することです。`<div>` または他の要素の代わりに、`scope` 属性を設定したネイティブ HTML の `<th>` 要素 `<th scope="col">` を使用することが推奨されます。セマンティック HTML の `<th scope="col">` を使用する場合、role 属性は必要ありませんが、CSS の display プロパティ値でデフォルトのセマンティクスが削除された場合に表がそのセマンティクスを保持することを確実にするためのバックアップとして含めることができます。

`aria-sort` 属性は、ARIA の role 属性が指定されていない場合でも `<th scope="col">` に追加できます。

### 好ましい HTML

columnheader は `<th scope="col">` と同じセマンティクスを持ちます。

## 仕様書

{{Specifications}}

## 関連情報

- [`table` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`grid` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`row` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`<th>` 要素](/ja/docs/Web/HTML/Reference/Elements/th)
- [`<table>` 要素](/ja/docs/Web/HTML/Reference/Elements/table)
- [`<tr>` 要素](/ja/docs/Web/HTML/Reference/Elements/tr)
- [`<td>` 要素](/ja/docs/Web/HTML/Reference/Elements/td)
