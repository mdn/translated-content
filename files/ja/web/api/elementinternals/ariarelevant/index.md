---
title: "ElementInternals: ariaRelevant プロパティ"
short-title: ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}{{Non-standard_header}}

**`ariaRelevant`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) 属性の値を反映します。この属性は、ライブ領域内のアクセシビリティツリーが変更されたときにユーザーエージェントがどのような通知を発生させるかを示します。これは `aria-live` 領域内のどのような変更が関連性があり、告知されるべきかを記述するために使用します。

> [!NOTE]
> `ElementInternals` に aria 属性を設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object) を参照してください。

## 値

以下の値を 1 つ以上格納した文字列で、スペース区切りです。

- "additions"
  - : ライブ領域内の要素ノードの追加は、関連性があると考えるべきです。
- "removals"
  - : ライブ領域からのノードの削除は、関連性があると考えるべきです。
- "text"
  - : 既存のノードのテキストコンテンツの変更は、関連性があるとみなされるべきです。
- "all"
  - : `"additions removals text"` に相当します。

## 例

この例では、 `ariaRelevant` の値を "all" に設定します。

```js
this.internals_.ariaRelevant = "all";
```

## ブラウザーの互換性

{{Compat}}
