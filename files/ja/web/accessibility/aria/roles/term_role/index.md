---
title: "ARIA: term ロール"
slug: Web/Accessibility/ARIA/Roles/term_role
l10n:
  sourceCommit: f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

`term` ロールは、オプションで対応する [`definition`](/ja/docs/Web/Accessibility/ARIA/Roles/definition_role) を持つ単語やフレーズに使用することができます。

## 解説

`term` ロールは、オプションで対応する [`definition`](/ja/docs/Web/Accessibility/ARIA/Roles/definition_role) を持つ単語やフレーズに使用することができます。 HTML の {{HTMLElement('dfn')}} 要素や定義リスト（{{HTMLElement('dl')}}）内の定義項（{{HTMLElement('dt')}}）要素と意味づけは同じです。

`term` ロールは、作成者によって定義が提供された、またはユーザーによって提供されることが期待されている単語または語句を明示的に識別するために使用します。既存の定義、または定義を入力するフォームやフォームコントロールがある場合、作者は [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-details) を設定し、関連の要素を指すようにすべきです (SHOULD)。

`role="term"` をリンクのような対話的要素に使用しないでください。支援技術ユーザーが要素と対話するのを妨害する可能性があるからです。また、用語そのものがアクセシビリティ名なので、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) や [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) は使用しないでください。

> [!WARNING]
> アクセシブル名は用語そのものでなければなりませんので、`aria-label` や `aria-labelledby` は使用しないでください。

### 関連付けられる WAI-ARIA ロール、ステート、プロパティ

なし。

### キーボード操作

なし。

### 必要な JavaScript 機能

なし。

## 例

```html
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition"
    >a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it</span
  >.
</p>
```

より良い意味づけをするために、上記は次のように書くこともできます。

```html
<p>
  <dfn role="term">Mansplaining</dfn>,
  <span role="definition"
    >a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it</span
  >.
</p>
```

または ARIA なしで書くとこうなります（ただし、表示したいように表示されない可能性があります）。

```html
<dl>
  <dt>Mansplaining</dt>
  <dd>
    A portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it.
  </dd>
</dl>
```

## アクセシビリティの考慮

`role="term"` は、支援技術ユーザーが要素と対話するのを妨げる可能性があるので、リンクのような対話要素には使用しないでください。

## ベストプラクティス

用語自体がアクセシブル名を定義できるようにしてください。 `aria-label` や `aria-labelledby` は使用しないでください。

### 推奨される HTML

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `definition` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/definition_role).
- HTML の {{HTMLElement('dfn')}} 要素

<section id="Quick_links">

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}

</section>
