---
title: "ElementInternals: ariaValueText プロパティ"
short-title: ariaValueText
slug: Web/API/ElementInternals/ariaValueText
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`ariaValueText`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、範囲ウィジェットの aria-valuenow の代替となる人間が読み取り可能なテキストを定義する [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) 属性の値を反映します。

> [!NOTE]
> `ElementInternals` に aria 属性を設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

文字列です。

## 例

この例は、 `ariaValueText` の値を "Sunday" に設定します。

```js
this.internals_.ariaValueText = "Sunday";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
