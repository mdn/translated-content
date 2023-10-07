---
title: "CSS: supports() 静的メソッド"
slug: Web/API/CSS/supports_static
l10n:
  sourceCommit: f29d8a648ef7ada05a00c358bfb9e9f67f3bc90d
---

{{APIRef("CSSOM")}}

**`CSS.supports()`** メソッドは、ブラウザーが指定された CSS 機能に対応しているかどうかを論理値で返します。

## 構文

```js-nolint
CSS.supports(propertyName, value)
CSS.supports(supportCondition)
```

### 引数

引数の組み合わせが 2 種類あります。1 つ目は、対応しているかどうかをテストする*プロパティと値*を指定することができます。

- `propertyName`
  - : 文字列で、チェックする CSS プロパティの名前が入ります。
- `value`
  - : 文字列で、チェックする CSS プロパティの値が入ります。

2 つ目の構文は 1 つの引数を取り、{{cssxref("@supports")}} の条件と照合します。

- `supportCondition`
  - : 文字列で、チェックする条件が入ります。

### 返値

ブラウザーがそのルールに対応しているのであれば `true`、そうでなければ `false` です。

## 例

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display: flex");
result = CSS.supports("(--foo: red)");

result = CSS.supports(
  "(transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve)",
);

// 結果は true または false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@supports")}} アットルールは、同様の機能を宣言的な方法で行うことができます。
- {{domxref("CSSSupportsRule")}} は CSSOM のクラスで、 {{cssxref("@supports")}} アットルールを操作することができます。
