---
title: "ARIA: structure ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/structure_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`structure` ロールは、文書構造要素のためのものです。

> [!WARNING]
> `structure` ロールは [抽象ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) です。ここではドキュメントの完全性のために含まれています。ウェブ作成者は使用すべきではありません。HTML とサブクラス構造ロールを使用してください。

## 説明

`structure` は、動的ウェブコンテンツのアクセシビリティをサポートするために、動的なコンテンツと静的な文書コンテンツを支援技術が判断するのを助ける、 [`document`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) 、 [`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 、 [`sectionhead`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role) などの文書構造のための親クラス [抽象ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) です。 [`section` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/section_role) のような一部のサブクラスロールは、さらに他のロールの親クラスでもあります。

`structure` ロールは、コンテンツのセクションに対する構造的な説明を提供するために使用される、すべての文書構造ロールの親クラスです。ほとんどの構造ロールは、ブラウザーが同じ意味を持つセマンティック HTML 要素をサポートするようになったため、もはや使用する必要はありません。 HTML の同等物を持たない構造ロール、例えばコンテンツがプレゼンテーションのみであることを意味する [`presentation` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) などは、同等のネイティブ HTML タグが利用できないため、スクリーンリーダーなどの支援技術に文書構造に関する情報を提供します。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `roletype` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA: `generic` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [ARIA: `presentation` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [ARIA: `range` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA: `section` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `sectionhead` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role)
