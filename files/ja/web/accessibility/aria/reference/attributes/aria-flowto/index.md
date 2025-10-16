---
title: aria-flowto
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
l10n:
  sourceCommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

グローバルな `aria-flowto` 属性は、コンテンツの代替読み取り順序における次の要素を識別します。これにより支援技術は、ユーザーの判断で、ドキュメントソースの読み取り順序の一般的な既定値を上書きできます。

## 解説

ウェブページは、順番にナビゲートできる必要があります。このため開発者は、タブ順序を変更できるグローバルな [tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性や、DOM 順序から視覚的な順序を変更できる CSS の {{CSSXRef('order')}} プロパティを使用しないように勧められています。ただし、まれにソースの順序とは異なる読み取り順が必要になることがあります。このような場合、`aria-flowto` 属性により、支援技術のユーザーがコンテンツによりアクセスしやすくなります。

グローバルな `aria-flowto` 属性を使用すると、作成者は支援技術のユーザーに対して、次にどの要素にフォーカスしてほしいかを示し、ソースの順序とは異なる読み取り順序を提供できます。これにより支援技術は、ドキュメントソースのデフォルトの読み取り順序以外の順序でドキュメントを読み取ることができます。

`aria-flowto` に単一の [id](/ja/docs/Web/HTML/Reference/Global_attributes/id) 参照がある場合、支援技術は、ユーザーの要求に応じて、DOM の順序でドキュメントを読み取る代わりに、その `id` 参照を介してターゲットとなる要素に移動できます。`aria-flowto` の値が複数の `id` 参照のスペース区切りリストである場合、支援技術は、`id` 参照される各参照が選択肢となるパスの選択肢のリストをユーザーに提供できます。パスの選択肢の名前は、`aria-flowto` 属性の各ターゲット要素のアクセシブル名によって決まります。

> [!NOTE]
> `aria-flowto` を設定することはコンテンツのタブ順序には影響しません。この属性をサポートする技術を使用しているときに、DOM 順序と一致しないコンテンツ順に従うオプションをユーザーに提供するだけです。

## 値

- `id`
  - : 読み上げ順序における次の要素の提案。
- `id` list
  - : コンテンツの代替読み取り順序でユーザーが次に移動したいと思われる提案要素を参照する ID 値のスペース区切りリスト。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- HTML [id](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性
- HTML [tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性
- CSS {{CSSXRef('order')}} プロパティ
- [WCAG: source order](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.4_—_ナビゲート可能_ユーザーがナビゲートし、コンテンツを見つけ、どこにいるのかを判断するのに役立つ方法を提供する)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
