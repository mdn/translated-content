---
title: aria-selected
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-selected
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`aria-selected` 属性は、さまざまなウィジェットの現在の「選択されている」状態を示します。

## 解説

`aria-selected` 属性は、[`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)、[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) および [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロールの現在の「選択されている」状態を示します。

この属性は、単一選択および複数選択の複合ウィジェット内のどの要素が選択されているかを示すために使用されます。一度に複数の要素が選択可能な場合は、`aria-multiselectable="true"` をグリッド、リストボックス、タブリスト、またはその他の所有ロールに含め、`aria-selected` は選択可能なセル、オプション、およびタブにのみ含めます。

その他のロールの場合、現在選択されている状態はロールに応じて [`aria-current`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)、[`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) もしくは [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) で設定されます。

`aria-selected` と `aria-current` の両方を同時にサポートするウィジェットは、それぞれに異なる意味を持ちます。例えば、`aria-current="page"` はナビゲーションツリーで現在表示されているページを示すために使用できますが、`aria-selected="true"` はユーザーが `treeitem` をアクティブにした場合に表示されるページを示します。

### グリッド

フォーカス可能なグリッドセルに `aria-selected="false"` を設定すると、セルが選択可能であることを示します。グリッドで一度に複数のグリッドセルを選択できる場合は、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ロールを持つ要素に `aria-multiselectable="true"` を設定します。列または行見出しのグリッドセルに `aria-selected` を設定しても、列または行内の他のセルに状態は伝播されません。

### オプション

`aria-selected` と `aria-checked` はどちらも [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) に有効です。一部のユーザーインターフェイスでは、単一選択リストボックスでは選択が `aria-selected` で示され、複数選択リストボックスでは `aria-checked` で示されます。

`aria-selected` の意味・目的がユーザーインターフェイスの aria-checked の意味・目的と異なる場合、各状態の意味と目的が明らかである場合、および UI が各状態を制御するための個別の方法を提供している場合を除き、同じ `listbox` に含まれる `option` 要素に `aria-selected` と `aria-checked` の両方を指定しないでください。

### 行

`aria-selected` 属性は `row` ではサポートされていますが、`column` ではサポートされていません。グリッドが選択をサポートしている場合、セルまたは行を選択すると、選択された要素に `aria-selected="true"` が設定されます。

グリッドが列選択をサポートしており、列が選択されている場合、その列内のすべてのセルに `aria-selected` に設定されます。

### タブ

タブリストでは、`aria-selected` はタブ上で現在表示されている [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) を示すために使用されます。

[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) で選択されている [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) には `aria-selected="true"` 属性が設定されている必要があります。タブリスト内の全ての非アクティブなタブには `aria-selected="false"` が設定されている必要があります。状態の設定はアクセシビリティツリーにのみ影響します。アクティブなタブのスタイルは、選択されている状態であることが視覚的に表示されるように設定してください。`tab` ロールの `aria-selected` の既定値は `false` です。

一度に複数のタブを選択できる場合は、`tablist` に `aria-multiselectable` を含めます。

## 例

この `tablist` の例では、最初の `tab` が選択されています:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Sample Tabs">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      First Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Third Tab
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```

> [!NOTE]
> ARIA は、要素のアクセシビリティツリーと、支援技術がコンテンツをユーザーに提示する方法のみを変更します。ARIA は、要素の機能や動作については何も変更しません。

## 値

- `true`
  - : 選択可能な要素が選択されています。
- `false`
  - : 選択可能な要素が選択されていません。[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の暗黙的な既定値です。
- `undefined` (既定値)
  - : 要素は選択できません。

## 関連インターフェイス

- {{domxref("Element.ariaSelected")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaSelected`](/ja/docs/Web/API/Element/ariaSelected) プロパティは、`aria-selected` 属性の値を反映します。
- {{domxref("ElementInternals.ariaSelected")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaSelected`](/ja/docs/Web/API/ElementInternals/ariaSelected) プロパティは、`aria-selected` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
