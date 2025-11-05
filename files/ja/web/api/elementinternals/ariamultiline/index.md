---
title: "ElementInternals: ariaMultiLine プロパティ"
short-title: ariaMultiLine
slug: Web/API/ElementInternals/ariaMultiLine
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`ariaMultiLine`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、 [`aria-multiline`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) 属性の値を反映し、テキストボックスが複数行の入力を受け入れるか、単一の行のみを受け入れるかを示します。

> [!NOTE]
> `ElementInternals` に aria 属性を設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : これは複数行テキストボックスです。
- `"false"`
  - : これは単一行テキストボックスです。

## 例

この例では、`ariaMultiLine`の値を "true" に設定しています。

```js
this.internals_.ariaMultiLine = "true";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: textbox ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
