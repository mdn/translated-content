---
title: "HTMLSelectElement: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.checkValidity()`** メソッドは、その要素に制約が設定されているかどうか、それを満足しているかどうかをチェックします。その要素が制約を満たしていない場合、ブラウザーはキャンセル可能な {{domxref("HTMLSelectElement/invalid_event", "invalid")}} イベントをその要素に送り、`false` を返します。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

なし（{{jsxref("undefined")}}）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フォームの検証](/ja/docs/Web/HTML/Constraint_validation)
