---
title: HTMLSelectElement.checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
tags:
  - API
  - Constraint Validation API
  - HTML DOM
  - HTMLSelectElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLSelectElement.checkValidity
translation_of: Web/API/HTMLSelectElement/checkValidity
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.checkValidity()`** メソッドは、その要素に制約が設定されているかどうか、それを満足しているかどうかをチェックします。その要素が制約を満たしていない場合、ブラウザーはキャンセル可能な {{domxref("HTMLSelectElement/invalid_event", "invalid")}} イベントをその要素に送り、`false` を返します。

## 構文

```js
var result = selectElt.checkValidity();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フォームの検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
