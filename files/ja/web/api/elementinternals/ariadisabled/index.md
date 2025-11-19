---
title: "ElementInternals: ariaDisabled プロパティ"
short-title: ariaDisabled
slug: Web/API/ElementInternals/ariaDisabled
l10n:
  sourceCommit: 86215eff9beccf2e069be9109347ad830cc5e9c4
---

{{APIRef("DOM")}}

**`ariaDisabled`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、[`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) 属性の値を反映し、要素が知覚可能だが無効であり、編集や他の処理をすることはできないことを示します。

> [!NOTE]
> `ElementInternals` に aria 属性を設定することで、カスタム要素に既定値を定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、追加しなかった場合でも確実に既定値を定義することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : 要素とフォーカス可能なすべての子孫は無効ですが、知覚可能であり、それらの値はユーザーによって変更できません。
- `"false"`
  - : 要素が有効になっています。

## 例

この例では、 `ariaDisabled` の値を "true" に設定しています。

```js
this.internals_.ariaDisabled = "true";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
