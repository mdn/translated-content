---
title: ARIA の状態とプロパティ
slug: Web/Accessibility/ARIA/Reference/Attributes
original_slug: Web/Accessibility/ARIA/Attributes
l10n:
  sourceCommit: a12fb8f2612fbdc6635b68c1dcd3c2fce212c10c
---

このページは、MDN で取り上げられているすべての <abbr>WAI-ARIA</abbr> 属性を網羅したリファレンスページを掲載しています。

<abbr>ARIA</abbr> 属性は、アクセシビリティツリーで定義された要素の状態やプロパティを変更することが可能です。

> [!NOTE]
> ARIA はアクセシビリティツリーを変更するだけで、支援技術がコンテンツをユーザーにどのように表示するかを変更します。ARIA は要素の機能や動作を何らかの形で変更するものではありません。意味づけられた HTML 要素を本来の目的や既定値で使用しない場合は、JavaScript を使って動作やフォーカス、ARIA の状態を管理する必要があります。

## ARIA 属性の種類

ARIA の状態とプロパティには、4 つのカテゴリーがあります。

### ウィジェット属性

- [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### ライブリージョン属性

- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

### ドラッグ＆ドロップ属性

- [`aria-dropeffect`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-grabbed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)

### リレーションシップ属性

- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

## グローバル ARIA 属性

いくつかの状態やプロパティは、ARIA ロールが適用されているかどうかに関係なく、すべての HTML 要素に適用されます。これらは『グローバル』属性として定義されます。グローバル状態やプロパティは、すべてのロールや基本マークアップ要素で対応しています。

上記の属性の多くはグローバルで、特に禁止されていない限り、どの要素にも含めることができます。

- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-current`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-dropeffect`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-grabbed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)

「特に禁止」とは、上記の属性がすべてグローバルであることを意味します。ただし、`aria-label` および `aria-labelledby` プロパティは、ロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) またはその同義語 [`none`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) ロールでは禁止されています。

## MDN で定義する状態とプロパティ

以下は、<abbr>MDN</abbr> で取り上げた <abbr>WAI-ARIA</abbr> の状態やプロパティに応じたリファレンスページです。

{{SubpagesWithSummaries}}

## 関連情報

- [ARIA の使用: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/Guides/Techniques)
