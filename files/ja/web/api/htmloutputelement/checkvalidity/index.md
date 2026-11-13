---
title: "HTMLOutputElement: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/HTMLOutputElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`checkValidity()`** は {{domxref("HTMLOutputElement")}} インターフェイスのメソッドで、要素が有効かどうかを調べますが、{{HTMLElement("output")}} 要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象となることは決してないため、常に true を返します。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

論理値 `true` です。

## 例

次の例では、`checkValidity()` を呼び出すと `true` が返されます。

```js
const element = document.getElementById("myOutput");
console.log(element.checkValidity());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLOutputElement.reportValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [学習: クライアント側のフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
