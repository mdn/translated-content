---
title: HTMLInputElement.reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - NeedsExample
  - リファレンス
  - reportValidity
  - reportValidity()
browser-compat: api.HTMLInputElement.reportValidity
translation_of: Web/API/HTMLInputElement/reportValidity
---
{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref('HTMLInputElement')}} インターフェイスのメソッドで、 {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}} メソッドと同じ検証のチェック手順を実行します。値が無効であった場合、このメソッドはその要素に {{domxref("HTMLInputElement.invalid_event", "invalid")}} イベントを発行し、（そのイベントがキャンセルされなければ）ユーザーに問題を報告します。

## 構文

```js
element.reportValidity();
```

### 返値

要素を検証して問題がなければ `true` を返し、それ以外の場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [制約検証 API](/ja/docs/Web/API/Constraint_validation)
