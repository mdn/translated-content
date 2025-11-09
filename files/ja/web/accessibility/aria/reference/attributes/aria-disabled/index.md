---
title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
original_slug: Web/Accessibility/ARIA/Attributes/aria-disabled
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

`aria-disabled` 状態は、要素は知覚可能であるが無効であり、編集やその他の操作をすることができないことを示します。

## 解説

`aria-disabled` 属性は、 `true` に設定されると、その属性が設定されている要素や、フォーカス可能なすべての子孫要素が無効状態であることを意味していることを示します。この宣言は、スクリーンリーダーのような支援技術を使用する人々に、そのような要素は編集やその他の操作ができないことを意味していることを知らせます。

HTML の [`disabled`](/ja/docs/Web/HTML/Reference/Elements/input#disabled) 論理属性が、フォームコントロールが意味的に無効であることを伝え、その状態を反映するようにスタイルを変更し、要素の値がフォーム送信に参加することを禁止すると同時にすべての機能を抑制するのとは異なり、 `aria-disabled="true"` は、意味的にこれらの要素が無効であることを公開する<strong>だけ</strong>です。ウェブ開発者は、このような要素が無効状態に公開されたとき、確実にその機能を保持しなければなりません。

ネイティブな HTML フォームコントロールを無効にする必要がある場合、開発者は `disabled` 属性を指定する必要がありますが、これは既定ではコントロールを無効にするために一般的に期待される機能をすべて提供するからです。しかし、要素を無効として公開する必要があるにもかかわらず、 <kbd>Tab</kbd> キーでナビゲートするときにユーザーが見つけられるようにする場合があります。そうすることで、 `aria-disabled` はそのような要素のフォーカス順を変更しないため、ウェブページのフォーカス順から除去されることがなく、また既定ではブラウザースタイル設定によって要素が薄暗くなることもないため、発見しやすくなります。この方法が有益な例をいくつか挙げます：

- 折りたたみ不可能なアコーディオンパネルに関連するヘッダーボタン要素
- ページのフォーカス順を維持することが重要だが、フォームを送信するなどのアクションが現在利用できないボタン
- 標準のキーボードナビゲーションではスキップされてしまうメニューウィジェットの、一時的に非アクティブになっているアイテム

これらの場合、そのコントロールの機能は制限されているか「無効」になっていますが、標準のキーボードナビゲーションを使ってユーザーにこれらの要素を探してもらいたいと思うかもしれません。開発者は JavaScript を使用して、要素の機能を完全に無効にし、同時に要素の現れ方も変えて、目の見えるユーザーには無効であることがわかるようにする必要があります。

> [!NOTE]
> 無効の状態は、 `aria-disabled="true"` を持つ要素と、そのフォーカス可能なすべての子孫要素に適用されます。コンテナー要素にこの属性を使用する場合は注意が必要です。特に、あるコンテナーがフォームコントロールとリンクの両方を持つことができるような場合、フォームコントロールは無効状態であることを公開しますが、リンクは「無効」であることを<strong>伝えない</strong>という意図があるかもしれません。

HTML の `disabled` 属性ではなく `aria-disabled` 属性を使用するもう一つの理由は、無効としてマークする必要があるカスタムコントロールを作成したが、`disabled` 属性を使用できる要素を使用していない場合です。例えば、以下のスニペットでは `<div>` を使用して、無効とマークする必要があるカスタムボタンを作成しています。しかし、 `<div>` 要素は `disabled` 属性を期待しませんし、尊重しません。たとえ `role="button"` が指定されたとしても、公開される ARIA ロールを変更することはできません。このようなカスタムコントロールを無効にするには `aria-disabled` 属性が必要とされます。

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

`aria-disabled="true"` を持つ要素が確実に機能しないように JavaScript を使用する必要があるのと同様に、スタイル設定も必要になります。 HTML の `disabled` 属性を指定するとユーザーエージェントの `:disabled` スタイルが提供されますが、 `aria-disabled="true"` を追加してもスタイル設定はされません。要素は[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)の `[aria-disabled="true"]` でスタイル設定できます。

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

あるフォームコントロールがページのキーボードフォーカス順に残れるようにするために、意図的に `aria-disabled` 属性を使う場合、特にその要素がすべてのユーザーが知覚できるようにすべき重要なコンテンツを表す場合、色のコントラストの要件を満たすスタイルを使用する必要があるかもしれません。例えば、折りたたみ不可能なアコーディオンパネルを導入する無効ボタン／見出しは、判読可能でなければならないコンテンツです。

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

[`forced-colors` メディアクエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/forced-colors)は、[ユーザーエージェント](/ja/docs/Glossary/User_agent)が強制色モードを有効にしているかどうかを検出します。もしそうなら、テキストと境界の色はどちらも[システム色 `greyText`](/ja/docs/Web/CSS/Reference/Values/system-color#syntax) に設定されます。

ネイティブの HTML 属性ではなく `aria-disabled` を使用する場合、もう一つ留意すべきことは、 ARIA 属性は Windows 高コントラストモードにおいて、要素が無効であることを視覚的に伝えるためには、必要な手動スタイル設定が要求されるということです。

> [!NOTE]
> CSS の [`pointer-events: none;`](/ja/docs/Web/CSS/Reference/Properties/pointer-events) を使用して要素をクリックできないようにしている場合は、 JavaScript による対話も無効にしてください。 `pointer-events: none;` はマウスクリックを防ぎますが、キーボードから要素をアクティブにすることを防ぐことはできません。

```js
function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  if (status) {
    //element.input.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "The element is now enabled.";
    element.addEventListener("click", onClick);
  } else {
    //element.input.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "The element is now disabled.";
    element.removeEventListener("click", onClick);
  }
}
```

`aria-disabled="true"` から `"false"` に切り替える場合は、 JavaScript を使用してください：

1. 値を `false` に切り替えます（または属性を完全に除去します）
2. 要素を有効にします
3. これでコントロールが有効になったことをユーザーに知らせます

CSS だけで属性セレクターを使用して無効状態をスタイル設定していた場合、セレクターは一致しなくなり、無効のスタイル設定は効力を失います。

## 値

- `true`
  - : 要素は無効です。

- `false`
  - : 要素は無効ではありません。

## ARIAMixin API

- {{domxref("Element.ariaDisabled")}}
  - : [`ariaDisabled`](/ja/docs/Web/API/Element/ariaDisabled) プロパティは {{domxref("Element")}} インターフェイスの一部であり、 `aria-disabled` 属性の値を反映します。これは、要素は知覚可能であるが無効であり、編集やその他の処理を行うことができないことを示します。
- {{domxref("ElementInternals.ariaDisabled")}}
  - : [`ariaDisabled`](/ja/docs/Web/API/ElementInternals/ariaDisabled) は {{domxref("ElementInternals")}} インターフェイスのプロパティで、 `aria-disabled` 属性の値を反映します。

## 関連するロール

使用しているロール:

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`input`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [`link`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

継承先のロール:

- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`select`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## 仕様書

{{Specifications}}

## 関連情報

- [Making disabled buttons more inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/) by Sandrina Pereira
- [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/ja/docs/Web/HTML/Reference/Attributes/disabled)
- {{domxref("Element.ariaDisabled")}}
- {{domxref("ElementInternals.ariaDisabled")}}
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

<section id="Quick_links">
<strong><a href="/ja/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA 状態とプロパティ</a></strong>
{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/aria/Attributes")}}
</section>
