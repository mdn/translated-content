---
title: CSS.supports()
slug: Web/API/CSS/supports
tags:
  - API
  - CSS
  - CSSOM
  - メソッド
  - リファレンス
  - supports
browser-compat: api.CSS.supports
translation_of: Web/API/CSS/supports
---
{{APIRef("CSSOM")}}

**`CSS.supports()`** メソッドは、ブラウザーが指定された CSS 機能に対応しているかどうかを論理値で返します。

## 構文

```js
CSS.supports(propertyName, value);
CSS.supports(supportCondition);
```

### 引数

引数の組み合わせが二種類あります。一つ目は、対応しているかどうかをテストする*プロパティと値*を指定することができます。

- `propertyName`
  - : {{domxref("DOMString")}} で、チェックする CSS プロパティの名前が入ります。
- `value`
  - : {{domxref("DOMString")}} で、チェックする CSS プロパティの値が入ります。

2 つ目の構文は 1 つの引数を取り、 {{cssxref("@supports")}} の条件に一致させます。

- `supportCondition`
  - : {{domxref("DOMString")}} で、チェックする条件が入ります。

### 返値

ブラウザーがそのルールに対応しているのであれば `true`、そうでなければ `false` です。。

## 例

## Examples

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display: flex");
result = CSS.supports("(--foo: red)");

result = CSS.supports(`(transform-style: preserve) or (-moz-transform-style: preserve) or
                       (-o-transform-style: preserve) or (-webkit-transform-style: preserve)`);

// 結果は true または false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@supports")}} アットルールは、同様の機能を宣言的な方法で行うことができます。
- {{domxref("CSSSupportsRule")}} は CSSOM のクラスで、 {{cssxref("@supports")}} アットルールを操作することができます。
