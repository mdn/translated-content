---
title: "HTMLSelectElement: willValidate プロパティ"
short-title: willValidate
slug: Web/API/HTMLSelectElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

**`willValidate`** は {{domxref("HTMLSelectElement")}} インターフェイスの読み取り専用のプロパティで、この {{htmlelement("select")}} 要素が[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象となる候補であるかどうかを示します。 例えば、{{domxref("HTMLSelectElement.disabled", "disabled")}} プロパティが `true` である場合など、何か制約検証を妨げる条件がある場合は、このプロパティは `false` となります。

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
