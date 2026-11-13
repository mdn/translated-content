---
title: "ARIA: widget ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/widget_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

**`widget`** ロールは、[抽象ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#抽象ロール) で、グラフィカルユーザーインターフェイス (GUI) のインタラクティブコンポーネントです。

> [!WARNING]
> `widget` ロールは、オントロジーに使用される抽象ロールです。文書化の完全性のためにここに含まれています。ウェブ制作者が使用すべきではありません。

## 説明

抽象 `widget` ロールは、一部のインタラクティブ GUI 要素およびグループ化ロールの親クラスロールです。`role="widget"` は、`option`、`menuitem`、`searchbox` などのウィジェットロールと混同すべきではありません。

`widget` ロールは、いくつかの抽象インタラクティブ GUI ロール、すなわち [`command`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/command_role)、[`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)、[`input`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)、[`range`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)、[`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)（フォーカス可能な場合）の親クラスロールで、これらはウェブ制作者が使用すべきではありません。

抽象 `widget` ロールは、ウェブ制作者が使用できるいくつかのグループ化ロール、すなわち [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)、[`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)（フォーカス不可能な場合）、[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の親クラスロールでもあり、これらは適切な場合に使用することができ、使用すべきです。ユーザーがこれらの widget の非抽象ロールのいずれかに移動すると、キーボードイベントはアプリケーションブラウジングモードに切り替わり、キーボードイベントをブラウザーに渡すことができます。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `roletype` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)

- [ARIA: `command` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/command_role)
- [ARIA: `composite` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA: `gridcell` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA: `input` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [ARIA: `range` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA: `row` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: `separator` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [ARIA: `tab` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
