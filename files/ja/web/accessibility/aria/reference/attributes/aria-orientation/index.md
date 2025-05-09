---
title: aria-orientation
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-orientation
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-orientation` 属性は、要素の方向が水平、垂直、または不明/曖昧であることを示します。

## 解説

方向は上下左右の矢印キーを押した際に予想される動作に影響を与えるため、ユーザーが特定のウィジェットをナビゲートする方法を知るには、方向を知ることが重要になる場合があります。`aria-orientation` 属性は、要素の方向が `horizontal`、`vertical`、`undefined` のいずれであるかを支援技術ユーザーに示すために使用されます。

いくつかのウィジェットにはデフォルトの方向があります:

デフォルトで水平です:

- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)

デフォルトで垂直です:

- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)

それぞれの [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) の `aria-orientation` はセパレーターの方向と一致している必要があります。

ツリー内のノードがデフォルトの垂直方向ではなく水平に配置されている場合、またはタブリストがデフォルトの水平方向ではなく垂直である場合、下矢印キーは通常の右矢印キーとして機能し、上矢印キーは通常の左矢印キーとして機能します。これらの場合、支援技術のユーザーは正しく移動するためにウィジェットの方向を知る必要があります。

フォーカスがツリーまたはタブリスト内にある場合でも、上矢印キーと下矢印キーは通常のブラウザースクロールで使用できます。ウィジェットがデフォルトの想定された方向と関連するナビゲーションを持たない場合にユーザーに警告できるようにするために、`aria-orientation` を含めます。

ARIA は支援技術がユーザーにコンテンツを提示する方法のみを変更することを常に覚えておいてください。矢印キーの動作を変更するには JavaScript が必要です。

## 値

- `horizontal`
  - : 要素は水平方向に配置されます。
- `undefined` (既定値)
  - : 要素の方向が不明/曖昧です。
- `vertical`
  - : 要素は垂直方向に配置されます。

## 関連インターフェイス

- {{domxref("Element.ariaOrientation")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaOrientation`](/ja/docs/Web/API/Element/ariaOrientation) プロパティは、`aria-orientation` 属性の値を反映します。
- {{domxref("ElementInternals.ariaOrientation")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaOrientation`](/ja/docs/Web/API/ElementInternals/ariaOrientation) プロパティは、`aria-orientation` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`select`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)

継承先のロール:

- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- [Understanding WCAG: Keyboard](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard)
