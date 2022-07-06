---
title: HTMLInputElement.checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsExample
  - リファレンス
  - checkValidity
  - checkValidity()
browser-compat: api.HTMLObjectElement.checkValidity
translation_of: Web/API/HTMLInputElement/checkValidity
---
{{APIRef("HTML DOM")}}

**`HTMLInputElement.checkValidity()`** メソッドは、その要素の値の妥当性を示す論理値を返します。値が無効である場合、このメソッドは要素に {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを発行します。

## 構文

```js
element.checkValidity();
```

### 返値

要素の値を検証して問題ない場合は `true` を、そうでなければ `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [制約検証 API](/ja/docs/Web/API/Constraint_validation)
