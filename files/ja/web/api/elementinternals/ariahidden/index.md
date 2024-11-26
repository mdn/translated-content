---
title: "ElementInternals: ariaHidden プロパティ"
short-title: ariaHidden
slug: Web/API/ElementInternals/ariaHidden
l10n:
  sourceCommit: 4f7e16b5d7794049cd4d162928e96c68389e3e68
---

{{APIRef("Web Components")}}

**`ariaHidden`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、[`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性の値を反映し、要素がアクセシビリティ API に公開されているかどうかを示します。

> [!NOTE]
> aria 属性を `ElementInternals` に設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

文字列で、以下の値のいずれかです。

- `"true"`
  - : この要素はアクセシビリティ API から隠されています。
- `"false"`
  - : 要素は、あたかもレンダリングされたかのようにアクセシビリティ API に公開されます。
- `"undefined"`
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 例

この例では、 `ariaHidden` の値を "true" に設定します。

```js
this.internals_.ariaHidden = "true";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
