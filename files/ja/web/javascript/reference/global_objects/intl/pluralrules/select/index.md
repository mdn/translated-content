---
title: Intl.PluralRules.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
tags:
  - 国際化
  - Intl
  - JavaScript
  - ローカライズ
  - メソッド
  - PluralRules
  - Prototype
  - リファレンス
browser-compat: javascript.builtins.Intl.PluralRules.select
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
---
{{JSRef}}

**`Intl.PluralRules.prototype.select()`** メソッドは、ロケールを考慮した書式設定に使用する複数形ルールを示す文字列を返します。

## 構文

```js
select(number)
```

### 引数

- `number`
  - : 複数のルールを取得するための数値です。

### 返値

数字の複数形のカテゴリーを表す文字列で、 `zero`, `one`, `two`, `few`, `many`, `other` のいずれかになります。

## 解説

この関数は、 {{jsxref("Intl.PluralRules")}} オブジェクトのロケールや書式オプションに応じて、複数形のカテゴリーを選択します。

## 例

### select() の使用

```js
 new Intl.PluralRules('ar-EG').select(0);
// → 'zero'

new Intl.PluralRules('ar-EG').select(1);
// → 'one'

new Intl.PluralRules('ar-EG').select(2);
// → 'two'

new Intl.PluralRules('ar-EG').select(6);
// → 'few'

new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.PluralRules")}}
