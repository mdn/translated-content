---
title: "HTMLFormElement: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.reportValidity()`** メソッドは、この要素の子コントロールが制約検証を満たしていれば `true` を返します。
`false` が返された場合、キャンセル可能な
[`invalid`](/ja/docs/Web/API/HTMLInputElement/invalid_event) イベントが無効な子要素それぞれについて発行され、ユーザーに検証の問題を報告します。

## 構文

```js-nolint
reportValidity()
```

### 返値

`true` または `false`

## 例

```js
document.forms["myform"].addEventListener(
  "submit",
  () => {
    document.forms["myform"].reportValidity();
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
