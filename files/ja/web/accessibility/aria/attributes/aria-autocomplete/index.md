---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Attributes/aria-autocomplete
l10n:
  sourceCommit: f6310f5cf34dfe4b5c0a45494a83b0a5ef9a6571
---

`aria-autocomplete` 属性は、 [`combobox`](/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Roles/searchbox_role), [`textbox`](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role) において、テキスト入力がユーザーの意図する値の一つ以上の予測を発生させるかどうかを示し、発生した場合にどのように予測を表示するかを指定します。

## 解説

自動補完は、ユーザーが入力を入力する際にインラインで提案するユーザーインターフェイス機能です。フィールドの値を完全に補完するための提案テキストが、入力カーソルの後にフィールドに動的に現れ、ユーザーがタブなどの操作を行い、フィールドからフォーカスが離れると、提案された値が値となります。

`aria-autocomplete` プロパティは、テキストボックス、検索ボックス、またはコンボボックスが、ユーザーがテキスト入力を完了するのを動的に支援するときに使用する自動補完入力対話モデルのタイプを記述します。これは 2 つのモデルを区別します。**インライン**モデル (`aria-autocomplete="inline"`) は 1 つの予測値を表示し、**リスト**モデル (`aria-autocomplete="list"`) は {{HTMLElement('datalist')}} のように、テキスト入力の横または下にポップアップする別個の要素で使用可能な値の集合を表示します。 3 つ目の値 `aria-autocomplete="both"` は、インターフェイスが予測値も含めてリストを表示します。既定値は `none` で、テキストボックス、検索ボックス、コンボボックスは自動補完の値を提供しません。

`aria-autocomplete` プロパティは、支援技術のための入力要素の予測動作の種類を記述するだけで、機能を提供するものではありません。実際の自動補完は HTML 属性か JavaScript を使用して提供します。

自動補完の提案値が、ユーザーによって指定された入力に依存しない値を提供する場合、すべてのユーザーに対して自動補完を除外することを検討してください。例えば、フィルタリングされていない最近の検索語を表示する検索ボックスの入力は、 e コマースサイトのマーケティングチームには役立つかもしれませんが、スクリーンリーダーのユーザーには役に立たない可能性が高いです。 `aria-autocomplete` の値を指定しないか、 `none` の既定値に設定することが最善である場合は、支援技術以外のユーザーもその機能を必要としていない可能性があります。

自動補完機能を実装する際には、確実に値の提案部分を選択テキストとして表示し、ユーザーの入力と提案を判別できるようにしてください。提案された値が希望する値でない場合、ユーザーは入力し続けることで、提案された値を簡単に削除したり、置き換えたりできるようにしてください。

値のリストを実装する際、提案リストが表示されている間、 DOM のフォーカスはテキスト入力のままにしておく必要があります。

- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-controls) に、値の提案リストの id の値を設定してください。
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) には、提案値のリストの集合を含む要素のロールに合うものを入れてください。
- 必要であれば、集合のコンテナーが対応している場合は [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) を使用してフォーカスを管理してください。
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) の状態を使用して、 [`combobox`](/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role) の付いた要素のリストが表示されているかどうかを同期してください。

フィールドのフォーカスが失われたときに自動補完リストの値が自動的に受け入れられる場合、リストは `aria-activedescendant` に対応するロールに格納されていなければなりません。

## 値

- `none` (default)
  - : ユーザーが入力しているときは、自動提案は表示されません。
- `inline`
  - : `aria-autocomplete="inline"` は、指定された入力を補完する一つの方法を提案するテキストが、キャレットの後に動的に挿入されるかもしれません。
- `list`
  - : `aria-autocomplete="list"` は、ユーザーが入力しているとき、指定された入力を補完する値の集合を含む要素が表示されることがあります。
- `both`
  - : `aria-autocomplete="both"` は、両方のモデルを同時に提供する入力です。ユーザーが入力を提供しているとき、指定された入力を補完する値の集合を格納する要素が表示されることがあります。表示された場合、集合の中の 1 つの値が自動的に選択され、自動的に選択された値を補完するために必要なテキストが入力のキャレットの後に現れます。

## 関連するロール

以下のロールで使用されます。

- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role) ロール
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role) ロール
- inherits from [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Roles/searchbox_role) ロール

## 仕様書

{{Specifications}}

## 関連情報

- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role) ロール
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role) ロール
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Roles/searchbox_role) ロール
- {{HTMLElement('datalist')}} 要素と [`<input> list` 属性](/ja/docs/Web/HTML/Element/input#list)
- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-controls) 属性
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性
- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) 属性
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) 属性
- [Editable Combobox With Both List and Inline Autocomplete Example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/ja/docs/Web/API/Element/ariaAutoComplete)

<section id="Quick_links">

1. [**WAI-ARIA 状態とプロパティ**](/ja/docs/Web/Accessibility/ARIA/Attributes)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
