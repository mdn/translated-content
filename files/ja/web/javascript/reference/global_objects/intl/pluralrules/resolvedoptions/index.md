---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
tags:
  - 国際化
  - Intl
  - JavaScript
  - ローカライズ
  - メソッド
  - PluralRules
  - Prototype
  - リファレンス
browser-compat: javascript.builtins.Intl.PluralRules.resolvedOptions
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
---
{{JSRef}}

**`Intl.PluralRules.prototype.resolvedOptions()`** メソッドは、この {{jsxref("Intl.PluralRules")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 構文

```js
resolvedOptions()
```

### 返値

この {{jsxref("Intl.PluralRules")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには以下のプロパティがあります。

- `locale`
  - : 実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値の組のうち、このロケールで対応しているものが `locale` に含まれます。
- `pluralCategories`
  - : 指定されたロケールで使用される複数形カテゴリーの {{jsxref("Array")}} で、 "zero", "one", "two", "few", "many", "other" のリストの中から選択します。
- `type`
  - : 使用される種類です (`cardinal` または `ordinal`)。

以下の 2 つのプロパティのグループの中では、 1 つだけしか設定できません。

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : これらのプロパティには、 `options` 引数で指定された値が入るか、既定値で埋められます。これらのプロパティは `minimumSignificantDigits` と `maximumSignificantDigits` のどちらも `options` 引数で指定されなかった場合のみ存在します。
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : これらのプロパティには、 `options` 引数で指定された値が入るか、既定値で埋められます。これらのプロパティは、少なくとも 1 つのプロパティが `options` 引数で提供された場合にのみ表示されます。

## 例

### resolvedOptions() メソッドの使用

```js
var de = new Intl.PluralRules('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.maximumFractionDigits; // 3
usedOptions.minimumFractionDigits; // 0
usedOptions.minimumIntegerDigits;  // 1
usedOptions.pluralCategories;      // Array [ "one", "other" ]
usedOptions.type;                  // "cardinal"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/PluralRules", "Intl.PluralRules")}}
