---
title: HTMLFormElement.submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.submit()`** メソッドは、このフォーム ({{HtmlElement("form")}}) を送信します。

このメソッドは、フォームの送信 {{HtmlElement("button") }} をアクティブにするのと似ていますが、同じではありません。ただ、このメソッドを直接呼び出す場合は、

- {{domxref("HTMLFormElement/submit_event", "submit")}} イベントは発生しません。特に、フォームの `onsubmit` イベントハンドラーは実行されません。
- [制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)は行われません。

{{domxref("HTMLFormElement.requestSubmit()")}} メソッドはフォームの送信ボタン ({{HtmlElement("button")}}) を使用にするのと同じで、これらの相違点はありません。

フォームコントロール（送信ボタンなど）に `name` または `id` が `submit` のものがある場合、このメソッドはフォームの送信メソッドをマスクします。

{{HtmlElement("input")}} で type="submit" の属性を持つものは **`HTMLFormElement.submit()`** ではフォームと一緒に送信されませんが、本来の HTML フォームの送信で行う場合は送信されます。

## 構文

```js-nolint
submit()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
document.forms["myform"].submit();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
