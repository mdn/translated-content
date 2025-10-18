---
title: "ARIA: sectionhead ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/sectionhead_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

**`sectionhead` ロール**は抽象ロールで、関連するセクションのトピックのラベルまたは要約のための親クラスロールです。

> [!WARNING]
> `sectionhead` ロールは [抽象ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) です。ここではドキュメントの完全性のために含まれています。ウェブ作成者は使用すべきではありません。

## 説明

構造的な `sectionhead` ロールは、ラベル付けするセクションのラベルまたは要約を識別するサブクラスロールのための抽象ロールです。このロールは使用してはいけません。4つのサブクラス — [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)、[`heading`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)、[`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)、[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) があります。HTML 要素の同等物があります。例えば、`columnheader` には {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}}、rowheader には {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}}、`heading` には HTML 見出しの {{HTMLElement("Heading_Elements", "h1")}} から {{HTMLElement("Heading_Elements", "h6")}} までのいずれかがあります。`tab` ロールには現在 HTML の同等物はありません。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `structure` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA: `columnheader` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA: `heading` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [ARIA: `rowheader` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: `tab` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
