---
title: aria-expanded
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
l10n:
  sourceCommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

`aria-expanded` 属性は要素に設定され、コントロールが展開されているか折りたたまれているか、および制御される要素が表示されているかどうかを示します。

## 解説

メニュー、ダイアログ、アコーディオンパネルなど、展開したり折りたたんだりできるウィジェットがいくつかあります。これらの各オブジェクトには、開閉を制御するインタラクティブな要素があります。`aria-expanded` 属性は、オブジェクトの表示/非表示を切り替える、フォーカス可能で対話可能なコントロールに適用されます。

例えば、`aria-expanded`は DOM ツリー内の親アイテムに適用され、その子の枝が表示されるかどうかを示します。親は、関連付けられている子の枝の可視性を制御します。

別のオブジェクトの可視性を制御するオブジェクトに適用できる宣言は 2 つあります。[`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)、もしくは `aria-expanded`と組み合わせる [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) です。`aria-controls` と`aria-owns` は制御する要素と制御される要素の関係を示します。`aria-expanded` は制御される要素が展開されているか折りたたまれているかを支援技術に示します。

展開可能なグループ化コンテナーを所有する要素で `aria-owns` 属性を使用してください。展開可能および折りたたみ可能なグループ化コンテナーが `aria-expanded` 属性を持つ要素によって所有されていない場合は、代わりに `aria-controls` 属性を使用してグループ化コンテナーを参照します。

### ボタン

ウィジェットを切り替えるボタンは、切り替えられるウィジェットの [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) が `aria-controls` に設定され、`aria-expanded` がウィジェットの現在の状態に設定されている必要があります。

```html
<button aria-expanded="false" aria-controls="widget1">Toggle widget</button>
```

ウィジェットが表示されている場合、制御オブジェクトは `aria-expanded="true"` を設定することでその情報を伝えます。制御オブジェクトのアクセシブル名は、この変更を反映する必要があります。

```html
<button aria-expanded="true" aria-controls="widget1">Toggle widget</button>
```

### メニュー

[`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) が表示されている場合、そのメニューの表示/非表示を切り替えるボタンオブジェクトには `aria-expanded="true"` が設定されます。メニューが非表示の場合、aria-expanded は省略できます。メニューが非表示のときに指定する場合は、`aria-expanded="false"` に設定する必要があります。子メニューが表示されていない場合、その親の [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) は `aria-expanded` を持っています。子メニューが表示されている場合は `true` に設定する必要があります。

### コンボボックス

デフォルトで非表示または折りたたまれているロールもあれば、表示されているか展開されているロールもあります。[`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ロールを持つ要素の `aria-expanded` の既定値は `false` です。コンボボックスのポップアップが表示されていない場合、`combobox` ロールを持つ要素の `aria-expanded` は `false` に設定されています。これがデフォルトの状態です。ポップアップ要素が表示されている場合は、`aria-expanded` を `true` に設定する必要があります。

```html
<label for="username">Username</label>
<input id="username" name="username" aria-describedby="username-desc" />
<button
  aria-expanded="false"
  aria-controls="username-desc"
  aria-label="Help about username"
  type="button">
  <span aria-hidden="true">?</span>
</button>
<p id="username-desc" hidden>
  Your username is the name that you use to log in to this service.
</p>
```

> [!NOTE]
> `aria-expanded` 属性の存在は制御を示します。他の要素の展開状態を制御しない要素にこの属性を含めないようにしてください。

### Treeitems

親ノードとして機能する [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) ロールの各要素は、ノードが閉じた状態のときは `aria-expanded="false"` を持ち、ノードが開いた状態のときは `aria-expanded="true"` を持ちます。子孫ノードを持たないノードである葉ノードには、`aria-expanded` 属性を設定しないでください。この属性を設定すると、支援技術に対して誤って親ノードとして説明されてしまうためです。

### Rows

[`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) の親の行は、展開または折りたたんで、テーブルまたはグリッド内の一連の子の行を表示または非表示にできる行です。各親の行には、行要素または行に含まれるセルに `aria-expanded` 状態が設定されます。子の行が非表示の場合、`aria-expanded="false"` が設定されます。子の行が表示されている場合、`aria-expanded="true"` が設定されます。子の行の表示を制御しない行には、`aria-expanded` 属性を含めないでください。属性を含めると、行が親の行として定義されてしまうためです。

## 値

- `false`
  - : この要素が所有または制御するグループ化要素は折りたたまれています。

- `true`
  - : この要素が所有または制御するグループ化要素は展開されています。

- `undefined` (既定値)
  - : 要素は、展開可能なグループ化要素を所有または制御しません。

## 関連インターフェイス

- {{domxref("Element.ariaExpanded")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaExpanded`](/ja/docs/Web/API/Element/ariaExpanded) プロパティは、`aria-expanded` 属性の値を反映します。
- {{domxref("ElementInternals.ariaExpanded")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaExpanded`](/ja/docs/Web/API/ElementInternals/ariaExpanded) プロパティは、`aria-expanded` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- HTML [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性
