---
title: aria-haspopup
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup
l10n:
  sourceCommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

`aria-haspopup` 属性は、属性が設定されている要素によってトリガーできる対話可能なポップアップ要素の可用性とタイプを示します。

## 解説

ARIA では、表示されることがトリガーされたときに他のコンテンツの上に表示される対話可能なメニュー、リストボックス、ツリー、グリッド、ダイアログは、「ポップアップ」と見なされます。これらのポップアップは、ページ上の 1 つ以上の対話可能要素によってトリガーされます。対話可能要素によってトリガーされるポップアップの可用性とタイプは、`aria-haspopup` 状態で識別される必要があります。

`menu`、`listbox`、`tree`、`grid`、`dialog`、または `true` の 6 つの列挙値のいずれかを持つ `aria-haspopup` の存在は、要素がポップアップをトリガーできることと、どの種類のポップアップが表示されるかを示します。次に、ポップアップする要素は、指定されたロールを持つ必要があります。`true` は `menu` と同じです。空の文字列や他の [ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) を含むその他の値は、`false` が設定されているものとして扱われます。

[`tooltip`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role) は対話可能ではないため、この文脈ではポップアップとは見なされません。

> [!NOTE]
> ポップアップコンテンツのコンテナーとして機能する要素のロールが [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)、[`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)、[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) または [`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) であり、`aria-haspopup` の値がポップアップコンテナーのロールと一致していることを確認してください。

`aria-haspopup` 状態は、ポップアップがあることとポップアップの種類を支援技術ユーザーに通知しますが、対話性は提供しません。ポップアップをキーボードでアクセス可能にするには、`aria-haspopup` を持つ要素がフォーカス可能でポップアップをトリガーできること、ポップアップを開くためのキーボードメカニズムがあること、およびポップアップ要素がその子孫すべてのフォーカスを管理していることを確認してください。

> [!NOTE]
> ARIA はアクセシブルな機能を有効にするものではありません。ARIA は機能の意図された動作を伝えるだけです。

[`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) を作成する場合、親の [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) には `aria-haspopup="menu"`（または `true` ）を設定する必要があります。メニューを開くボタンには [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) ロールを設定するか、できれば {{HTMLElement('button')}} 要素である必要があり、さらに `aria-haspopup="menu"`（または `true` ）を設定する必要があります。ポップアップメニューを持つ [`Tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) 要素にも `aria-haspopup="menu"` を設定する必要があります。Webサイトのナビゲーションを作成するために `menubar` を使用しないでください。

> [!NOTE]
> [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ロールを持つ要素には暗黙的な `listbox` が `aria-haspopup` の値として設定されます。

## 値

- `false` (既定値)
  - : 要素にはポップアップがありません。
- `true`
  - : ポップアップはメニューです。
- `menu`
  - : ポップアップはメニューです。
- `listbox`
  - : ポップアップはリストボックスです。
- `tree`
  - : ポップアップはツリーです。
- `grid`
  - : ポップアップはグリッドです。
- `dialog`
  - : ポップアップはダイアログです。

## 関連インターフェイス

- {{domxref("Element.ariaHasPopup")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaHasPopup`](/ja/docs/Web/API/Element/ariaHasPopup) プロパティは、要素によってトリガーできるメニューやダイアログなどの対話可能なポップアップ要素の可用性とタイプを示す `aria-haspop` 属性の値を反映します。
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : {{domxref("ElementInternals")}} インターフェイスのプロパティは [`ariaHasPopup`](/ja/docs/Web/API/ElementInternals/ariaHasPopup) 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/) - W3C WAI ARIA practices
