---
title: "HTMLOutputElement: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref("HTMLOutputElement")}} インターフェイスのメソッドで、{{domxref("HTMLOutputElement.checkValidity", "checkValidity()")}} メソッドと同じ妥当性チェックの段階を実行します。{{HTMLElement("output")}} 要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象となることは決してないため、このメソッドは常に true を返します。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

論理値 `true` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [学習: クライアント側のフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
