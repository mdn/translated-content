---
title: aria-posinset
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-posinset
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-posinset` 属性は、DOM に全ての項目が存在しない場合に、現在のリスト項目またはツリー項目の、セット内の要素の数または位置を定義します。

## 解説

「position in set」（セット内の位置）の略である `aria-posinset` 属性は、項目のサブセットのみが DOM 内に存在する場合に、リスト項目またはツリー項目のセット全体内での要素の位置を定義します。

リスト内の全ての項目が DOM に存在する場合、ブラウザーは各項目の合計と位置を計算できるため、`aria-posinset` は不要です。セットの一部のみが DOM に存在する場合は `aria-posinset` を含めて、セット内の要素の位置に関する情報を提供するとともに、[`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) を使用して完全なセットに含まれる項目の数をユーザーに通知します。

次の例は、化学元素周期表の 118 個の元素のうち 4 つの元素オプションを含むリストボックスを示しています。

```html
<h2 id="periodic-table">Periodic table of chemical elements</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Hydrogen</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Sodium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Potassium</li>
</ul>
```

`aria-posinset` のそれぞれの値は、`1` 以上の整数であり、セットのサイズが分かっている場合はセットのサイズ以下の整数です。

> [!NOTE]
> `aria-posinset` を使用する場合は、セット全体のサイズである [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) の値も含める必要があります。セット全体のサイズが不明な場合は `aria-setsize="-1"` を設定します。

[`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)、または [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) の場合、区切り線を除いたメニュー内の項目の合計数に対して `aria-posinset` の値を設定します。

[`feed`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) では、各 {{HTMLElement('article')}} 要素の `aria-posinset` にはフィード内の位置を表す値が設定され、`aria-setsize` には、読み込まれた記事の数またはフィード内の合計数のいずれか、ユーザーにとって最も役立つ方が設定されます。

## 値

- `<integer>`
  - : 1 以上で `aria-setsize` の値以下の整数。

## 関連インターフェイス

- {{domxref("Element.ariaPosInSet")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaPosInSet`](/ja/docs/Web/API/Element/ariaPosInSet) プロパティは、`aria-posinset` 属性の値を反映します。
- {{domxref("ElementInternals.ariaPosInSet")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaPosInSet`](/ja/docs/Web/API/ElementInternals/ariaPosInSet) プロパティは、`aria-posinset` 属性の値を反映します。

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

- [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
