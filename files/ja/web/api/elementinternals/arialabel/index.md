---
title: "ElementInternals: ariaLabel プロパティ"
short-title: ariaLabel
slug: Web/API/ElementInternals/ariaLabel
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`ariaLabel`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性の値を反映し、現在の要素にラベル付けする文字列値を定義します。

> [!NOTE]
> `ElementInternals` に aria 属性を設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

文字列です。

## 例

この例では、`ariaLabel`の値を "close" に設定しています。

```js
this.internals_.ariaLabel = "close";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
