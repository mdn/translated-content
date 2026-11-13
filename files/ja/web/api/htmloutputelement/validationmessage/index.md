---
title: "HTMLOutputElement: validationMessage プロパティ"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`validationMessage`** は {{domxref("HTMLOutputElement")}} インターフェイスの読み取り専用プロパティで、この {{htmlelement("output")}} コントロールが満たしていない検証制約（ある場合）を説明する、ローカライズされたメッセージを表す文字列を返します。`<output>` 要素は制約の検証対象ではないため（{{domxref("HTMLOutputElement.willValidate")}} は `false` である）、このプロパティは空文字列となります。

## 値

空文字列 `""` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("output")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLOutputElement.willValidate")}}
- {{domxref("HTMLOutputElement.validity")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{domxref("HTMLOutputElement.reportValidity()")}}
- {{domxref("HTMLOutputElement.setCustomValidity()")}}
- [学習: クライアント側のフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
