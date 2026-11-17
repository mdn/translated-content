---
title: "HTMLElement: tabIndex プロパティ"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`tabIndex`** は {{DOMxRef("HTMLElement")}} インターフェイスのプロパティで、現在の要素のタブ移動順序を表します。

タブ移動順序は次のとおりです。

1. 正の `tabIndex` を持つ要素。
   同じ `tabIndex` 値を持つ要素は、表示順にナビゲートされます。
   ナビゲーションは、最も小さい `tabIndex` から最も大きい `tabIndex` へと進みます。
2. `tabIndex` 属性に対応していない要素、または対応していて `tabIndex` に `0` を代入した要素は、表示順にナビゲートされます。

無効になっている要素は、タブ移動順序に含まれません。

値は連続している必要も、特定の値から始まる必要もありません。
負の値を指定することもできますが、各ブラウザーは非常に大きな値を切り詰めます。

## 値

整数です。

## 例

```js
const b1 = document.getElementById("button1");

b1.tabIndex = 1;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [キーボードでナビゲート可能な JavaScript ウィジェットのアクセシビリティ](/ja/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- HTML の [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) グローバル属性
