---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
tags:
  - HTML
  - HTMLFormElement
  - Method
  - Reference
translation_of: Web/API/HTMLFormElement/reportValidity
browser-compat: api.HTMLFormElement.reportValidity
---
{{APIRef("HTML DOM")}}

**`HTMLFormElement.reportValidity()`** メソッドは、この要素の子コントロールが制約の検証を満たしていれば `true` を返します。
`false` が返された場合、キャンセル可能な
[`invalid`](/ja/docs/Web/API/HTMLInputElement/invalid_event) イベントが無効な子それぞれについて発行され、ユーザーに検証の問題を報告します。

## 構文

```js
HTMLFormElement.reportValidity()
```

### 返値

`true` または `false`

## 例

```js
document.forms['myform'].addEventListener('submit', function() {
  document.forms['myform'].reportValidity();
}, false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
