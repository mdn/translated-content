---
title: aria-colindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext
original_slug: Web/Accessibility/ARIA/Attributes/aria-colindextext
l10n:
  sourceCommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{AccessibilitySidebar}}

`aria-colindextext` 属性は、[`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) の数値を人間が判読可能な代替テキストとして定義するものです。

## 解説

非常に大きい表の場合、または意図的に表の一部だけを表示したい場合、全ての列が DOM に存在しない場合があります。
このような場合は、整数値の [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性を使用して、全ての列が存在する場合に表（またはグリッド）に含まれる列の数を定義し、各列に [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 属性を追加して、全ての列が表示されている場合の表内の列インデックスに関する情報を提供します。

次の HTML スニペットでは、表に 8 つの列がありますが、表示されているのは 4 つだけです。 "City" 列は、`aria-colindex="5"` で定義されているように、大きな表の 5 番目の列です。

```html
<table aria-colcount="8">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">First name</th>
      <th aria-colindex="2" scope="col">Last name</th>
      <th aria-colindex="5" scope="col">City</th>
      <th aria-colindex="7" scope="col">Zip</th>
    </tr>
  </thead>
  …
</table>
```

この表はそれほど複雑ではありません。100 列以上のスプレッドシートや、チェス盤のような列見出しのないグリッドの場合、提供または計算された `aria-colindex` の値は意味をなさないか、表示されたインデックスを反映していない可能性があります。このような場合は、`aria-colindextext` を含めることができます。値は、数値である `aria-colindex` の代わりとなる、人間が判読できる代替テキストの文字列です。

```html
<table aria-colcount="128">
  <thead>
    <tr>
      <th aria-colindex="1" aria-colindextext="NYSE stock symbol" scope="col">
        NYSE
      </th>
      <th
        aria-colindex="110"
        aria-colindextext="Value at start of 2021"
        scope="col">
        01/21
      </th>
      <th
        aria-colindex="122"
        aria-colindextext="Value at start of 2022"
        scope="col">
        01/22
      </th>
      <th aria-colindex="124" scope="col">Recommendation</th>
    </tr>
  </thead>
  …
</table>
```

上記の例では、表には 128 列ありますが、そのうち 4 列のみが表示されています。`aria-colindextext` は 3 つの列で使用され、人間が読める代替テキストを提供しています。`aria-colindextext="Value at start of 2021"` を含めることで、支援技術は "Column 110" ではなく "Value at start of 2021" と読み上げることができます。

`aria-colindex` の提供または計算された値が意味をなさないか、表示されたインデックスを反映しない場合にのみ `aria-colindextext` を使用します。`aria-colindextext` を含める場合は常に `aria-colindex` も使用するようにしてください。これは、一部の支援技術ではユーザーの位置を追跡し、代替表ナビゲーションを提供するために数値列インデックスに依存しているためです。

> [!NOTE]
> 存在するすべての列が連続している場合、連続した値を推測できるため、`aria-colindex` を行に追加できますが、`aria-colindextext` は [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) でサポートされているプロパティではありません。

関連する [`aria-rowindextext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) を参照してください。

## 値

- `<string>`
  - : 数値 [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) の人間が判読可能な代替テキスト

## 関連インターフェイス

- {{domxref("Element.ariaColIndexText")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaColIndexText`](/ja/docs/Web/API/Element/ariaColIndexText) プロパティは、`aria-colindextext` 属性の値を反映します。
- {{domxref("ElementInternals.ariaColIndexText")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaColIndexText`](/ja/docs/Web/API/ElementInternals/ariaColIndexText) プロパティは、`aria-colindextext` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`Element.ariaColIndexText`](/ja/docs/Web/API/Element/ariaColIndexText)
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-rowindextext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`cell` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
