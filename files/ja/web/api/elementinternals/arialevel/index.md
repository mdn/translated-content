---
title: "ElementInternals: ariaLevel プロパティ"
short-title: ariaLevel
slug: Web/API/ElementInternals/ariaLevel
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`ariaLevel`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、 [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-level) 属性の値を反映し、構造内における要素の階層レベルを定義します。

> **メモ:** `ElementInternals` に aria 属性を設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

整数の入った文字列です。

## 例

この例では、`ariaLevel`の値を "1" に設定しています。

```js
this.internals_.ariaLevel = "1";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: heading ロール](/ja/docs/Web/Accessibility/ARIA/Roles/heading_role)
