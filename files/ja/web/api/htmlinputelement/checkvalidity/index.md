---
title: "HTMLInputElement: checkValidity() メソッド"
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement.checkValidity()`** メソッドは、その要素の値の妥当性を示す論理値を返します。値が無効である場合、このメソッドは要素に {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを発行します。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

要素の値を検証して問題ない場合は `true` を、そうでなければ `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [reportValidity](/ja/docs/Web/API/HTMLInputElement/reportValidity)
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
