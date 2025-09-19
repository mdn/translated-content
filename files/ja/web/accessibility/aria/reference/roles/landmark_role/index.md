---
title: "ARIA: landmark ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/landmark_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

ランドマークは、ページの重要なサブセクションです。`landmark` ロールは、ユーザーが直接ナビゲートできることを望む可能性が高い、重要なコンテンツセクションの aria ロール値の抽象親クラスです。

> [!NOTE]
> `landmark` ロールは [抽象ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#抽象ロール) です。ドキュメントの完全性のためにここに含まれています。ウェブ開発者は使用すべきではありません。

## 説明

`landmark` は、ユーザーが簡単にセクションにナビゲートでき、ページの動的に生成されたサマリーに含めることを望む可能性が高い、重要なコンテンツセクションの抽象ロールです。ランドマークにより、支援技術はナビゲートしてコンテンツを素早く見つけることができます。

ランドマークロールを作成するには、`<section>`、`<nav>`、`<main>` などのセマンティック要素を使用してコンテンツの目的を定義するか、[`role="banner"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)、[`role="complementary"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)、[`role="region"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) など `landmark` ロールのサブクラスである ARIA ロールを追加します。 `role="landmark"` は使用しないでください。

可視ラベルを提供し、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) で参照する必要があります。必要に応じて、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) で簡潔で説明的なラベルを提供できます。

スクリーンリーダーユーザーにとって、ランドマークロールを追加することで効果的にスクリーンリーダーユーザーの「スキップリンク」を作成しますが、ランドマークロールは他の方法では表面化されないため、ページ内ナビゲーションを置き換えることはありません。

## ベストプラクティス

`role="landmark"` は使用しないでください。HTML とサブクラスランドマークロールを使用してください。

ランドマークは、コンテンツがナビゲート可能な領域にあることを保証します。[`role="main"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) には {{HTMLElement('main')}} を、 [`role="banner"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) には {{HTMLElement('header')}} を、[`role="navigation"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) には {{HTMLElement('nav')}} を、[`role="contentinfo"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role) には {{HTMLElement('footer')}} を使用してください。関連するセマンティック要素と冗長にロールを含めることも良いプラクティスです。 {{HTMLElement('div')}} などの非セマンティック要素を使用して、ランドマークロールでセマンティクスを追加することは、それほど良いプラクティスではありません。しかし、どちらか一方または両方を含めてください。そうでなければ、スクリーンリーダーユーザーにとってコンテンツはもはやナビゲートしやすくありません。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `section` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `banner` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `complementary` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `contentinfo` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `form` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: `main` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `navigation` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [ARIA: `region` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [ARIA: `search` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [Using HTML landmark roles to improve accessibility](/ja/blog/aria-accessibility-html-landmark-roles/) MDN ブログ（2023年）
