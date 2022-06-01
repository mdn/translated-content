---
title: Intl.PluralRules.selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
tags:
  - 国際化
  - Intl
  - JavaScript
  - ローカライズ
  - メソッド
  - PluralRules
  - Prototype
  - リファレンス
  - selectRange
browser-compat: javascript.builtins.Intl.PluralRules.selectRange
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
---
{{JSRef}}

**`Intl.PluralRules.prototype.selectRange()`** メソッドは 2 つの値を受け取り、ロケールを考慮した書式設定に使用する複数形ルールを示す文字列を返します。

## 構文

```js
formatRange(startRange, endRange)
```

### 返値

数字の複数形のカテゴリーを表す文字列で、 `zero`, `one`, `two`, `few`, `many`, `other` のいずれかで、 [LDML 言語複数ルール](https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html#rules)で指定されたローカライズのロケールに関連するものです。

## 解説

この関数は、 {{jsxref("Intl.PluralRules")}} オブジェクトのロケールおよび書式化オプションに従って、複数形カテゴリーを選択するものです。

## 例

### selectRange() の使用

```js
 new Intl.PluralRules('sl').selectRange(102, 201);
// → 'few'

 new Intl.PluralRules('pt').selectRange(102, 102);
// → 'other'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.PluralRules")}}
