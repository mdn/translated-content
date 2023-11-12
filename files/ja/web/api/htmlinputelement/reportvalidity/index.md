---
title: "HTMLInputElement: reportValidity() メソッド"
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref('HTMLInputElement')}} インターフェイスのメソッドで、 {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}} メソッドと同じ検証のチェック手順を実行します。値が無効であった場合、このメソッドはその要素に {{domxref("HTMLInputElement.invalid_event", "invalid")}} イベントを発行し、（そのイベントがキャンセルされなければ）ユーザーに問題を報告します。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

要素を検証して問題がなければ `true` を返し、それ以外の場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [checkValidity](/ja/docs/Web/API/HTMLInputElement/checkValidity)
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
