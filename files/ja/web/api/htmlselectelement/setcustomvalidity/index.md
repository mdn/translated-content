---
title: HTMLSelectElement.setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
tags:
  - API
  - Constrain Validation API
  - HTML DOM
  - HTMLSelectElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLSelectElement.setCustomValidity
translation_of: Web/API/HTMLSelectElement/setCustomValidity
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.setCustomValidity()`** メソッドは、選択要素のカスタム検証メッセージを指定されたメッセージに設定します。要素にカスタム検証エラーが*ない*ことを示す場合は、空の文字列を使用します。

## 構文

```js
selectElt.setCustomValidity(string);
```

### 引数

- `string` で、エラーメッセージを含む {{domxref("DOMString")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フォームの検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
