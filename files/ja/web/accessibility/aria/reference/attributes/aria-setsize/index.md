---
title: aria-setsize
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
l10n:
  sourceCommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`aria-setsize` 属性は、セット内の全ての項目が DOM に存在しない場合に、現在のリスト項目またはツリー項目のセット内の項目の数を定義します。

## 解説

ブラウザーは、リスト内の {{HTMLelement('li')}} の数、同じ名前の [ラジオボタン](/ja/docs/Web/HTML/Reference/Elements/input/radio) グループ内のボタン、{{HTMLelement('select')}} 内の {{HTMLelement('option')}} の数など、項目のグループ内の各項目のセットサイズと位置を自動的に計算します。スクリーンリーダーなどの支援技術は、この状態管理を利用してセットサイズをユーザーに報告します。

DOM が完全でない場合、ブラウザーが計算するセット内のアイテム数が不正確になる可能性があります。リストアイテムなどのアイテムのサブセットのみが DOM に読み込まれると、ブラウザーは存在するアイテムのみに基づいてアイテム数を計算します。`aria-setsize` 属性は、ブラウザーの不正確なカウントを上書きするために使用する必要があります。これは、セット全体が読み込まれた場合の現在のリストアイテムまたはツリーアイテムセット内のアイテム数を定義します。

`aria-setsize` 属性は、コンテナー要素ではなく、各アイテムに設定されます。値は各アイテムで同じです。完全なセット内のアイテムの数を反映する整数、またはセットサイズが不明な場合は `-1` です。全てのアイテムが DOM 内に存在する場合、ブラウザーがセットサイズと各アイテムの位置を計算できるため、`aria-setsize` と `aria-posinset` はどちらも不要になります。

`aria-setsize` を持つ要素には通常、セット内でのその項目の位置を示す [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) 属性も含まれます。`aria-posinset` は `1` と `aria-setsize` の正の値の間の値をとります。

例えば、ページのコメント欄において、コメントがページネーションされている場合など、コメントが DOM 内に全て収まらない場合は、階層レベル、コメントの総数、各コメントの位置を ARIA で設定します。コメントの階層レベルは [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) で示せます。グループの位置情報は `aria-posinset` と `aria-setsize` で示します。

フィード内の記事数が固定されている場合、各記事要素に `aria-setsize` を追加できます。値は、読み込まれた記事の総数またはフィード内の記事の総数のいずれかになります。どちらの値が選ばれるかは、どの値がユーザーにとって最も役立つかによって異なります。記事数が非常に多い、不確定である、または頻繁に変更される場合は、セットのサイズが不明であることを通知するために `aria-setsize="-1"` を設定できます。

[`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) では、スクロール時の動的読み込みにより、使用可能なオプションの完全なセットが DOM に存在しない場合、各 [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) に `aria-setsize` と `aria-posinset` の両方を設定できます。

ツリービューでは、ユーザーがツリー内でフォーカスを移動したりツリーをスクロールしたりするときに動的に読み込まれるため、使用可能なノードの完全なセットが DOM に存在しない場合、各ノードには `aria-level`、`aria-setsize` および `aria-posinset` が設定されます。

メニューでは、`aria-setsize` は [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) または [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) の全てのロールに設定され、値は区切り線を除いたメニュー内の項目の合計数になります。

## 例

次の例では、16 個のセットのうち 5 番目から 8 番目の項目を示します。

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

ユーザーに指示を与えるために、支援技術では上記のバナナを「16 個中 6 番目」としてリストします。

## 値

- `<integer>`
  - : 全セット内のアイテム数または、`-1` はセットサイズが不明であることを示します。

## 関連インターフェイス

- {{domxref("Element.ariaSetSize")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaSetSize`](/ja/docs/Web/API/Element/ariaSetSize) プロパティは、`aria-setsize` 属性の値を反映します。
- {{domxref("ElementInternals.ariaSetSize")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaSetSize`](/ja/docs/Web/API/ElementInternals/ariaSetSize) プロパティは、`aria-setsize` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`article`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`associationlistitemkey`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemvalue`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`listitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

継承先のロール:

- [`comment`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- W3C WAI-ARIA practices:
  - [Treegrid Email Inbox example](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Navigation Treeview example](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [File Directory Treeview Example Using Declared Properties](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
