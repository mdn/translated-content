---
title: "HTMLTextAreaElement: willValidate プロパティ"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

**`willValidate`** は {{domxref("HTMLTextAreaElement")}} インターフェイスの読み取り専用のプロパティで、この {{htmlelement("textarea")}} 要素が[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象であるかどうかを示します。制約検証を禁止する条件がある場合、 `false` となります。例えば、 {{domxref("HTMLTextAreaElement.disabled", "disabled")}} または {{domxref("HTMLTextAreaElement.readOnly", "readOnly")}} プロパティが `true` の場合などです。

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
