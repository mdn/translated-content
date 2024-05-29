---
title: "ElementInternals: ariaOrientation プロパティ"
short-title: ariaOrientation
slug: Web/API/ElementInternals/ariaOrientation
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`ariaOrientation`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素の方向が横方向、縦方向、または不明/あいまいであることを示す [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 属性を反映します。

> **メモ:** `ElementInternals` に aria 属性を設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

以下のいずれかの値を持つ文字列です。

- `"horizontal"`
  - : この要素は横方向です。
- `"vertical"`
  - : この要素は縦方向です。
- `"undefined"`
  - : この要素の方向は不明です。

## 例

この例では、 `ariaOrientation` の値を "vertical" に設定します。

```js
this.internals_.ariaOrientation = "vertical";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
