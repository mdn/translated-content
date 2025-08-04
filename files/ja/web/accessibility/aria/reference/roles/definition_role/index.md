---
title: "ARIA: definition ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`definition` ARIA ロールは、要素が用語や概念の定義であることを示します。

## 説明

`definition` ARIA ロールは、ネイティブな {{HTMLElement('dfn')}} 要素と同様に、用語や概念の定義である要素に含めることができます。definition と、定義されている `term` を関連付け、アクセシブル名を提供するには、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用して `role="term"` で定義されている用語を参照します。

```html-nolint
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition">
    a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it
  </span>.
</p>
```

> [!NOTE]
> [`term`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) や `definition` ロールを持つ `<span>` の代わりに、{{HTMLElement('dfn')}} 要素を使用してください。**利用可能であれば、常にネイティブ要素を使用してください。**

```html
<p>
  <dfn>Mansplaining</dfn>, a portmanteau of "man" and "explain", is the
  patronizing act of explaining without being asked to do so, to someone already
  learned on the topic, often after someone has already explained it.
</p>
```

## 仕様書

{{Specifications}}

## 関連情報

- [`term` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- {{HTMLElement('dfn')}} 要素
- {{HTMLElement('dd')}} 要素
- {{HTMLElement('dl')}} 要素
- {{HTMLElement('dt')}} 要素
