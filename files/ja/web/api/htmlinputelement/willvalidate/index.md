---
title: "HTMLInputElement: willValidate プロパティ"
short-title: willValidate
slug: Web/API/HTMLInputElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

**`willValidate`** は {{domxref("HTMLInputElement")}} インターフェイスの読み取り専用のプロパティで、この {{htmlelement("input")}} 要素が[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象であるかどうかを示します。制約の検証を禁止する条件のいずれかに該当する場合、`false` となります。条件には次のようなものがあります。

- {{domxref("HTMLInputElement.type", "type")}} が `hidden`、`reset`、`button` のいずれかである
- 祖先に {{HTMLElement("datalist")}} がある
- {{domxref("HTMLInputElement.disabled", "disabled")}} プロパティが `true` である

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
