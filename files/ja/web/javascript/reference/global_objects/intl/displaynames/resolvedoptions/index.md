---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
tags:
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DisplayNames.resolvedOptions
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
---
{{JSRef}}

**`Intl.DisplayNames.prototype.resolvedOptions()`** メソッドは、現在の {{jsxref("Intl.DisplayNames")}} オブジェクトの初期化時に計算されたロケールとスタイルの書式オプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 構文

```js
resolvedOptions()
```

### 返値

この {{jsxref("Intl.DisplayNames")}} オブジェクトの初期化時に計算されたロケールと書式オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

`resolvedOptions()` で返されるオブジェクトには、以下のプロパティがあります。

- `locale`
  - : このロケールで実際に使用する BCP 47 言語タグです。入力されこのロケールに導いた BCP 47 言語タグで Unicode 拡張値が要求されていた場合、要求されたキーと値の組のうち、このロケールで対応しているものが `locale` に含まれます。
- `style`
  - : コンストラクターの `options` 引数でこのプロパティに与えられた値、または既定値 ("`long`") です。値は "`long`"、"`short`"、"`narrow`" のいずれかです。
- `type`
  - : コンストラクターの `options` 引数でこのプロパティに与えられた値、または既定値 ("`language`") です。値は "`language`"、"`region`"、"`script`"、"`currency`" のいずれかです。
- `fallback`
  - : コンストラクターの `options` 引数でこのプロパティに与えられた値、または既定値 ("`code`") です。値は "`code`" または "`none`" のどちらかです。

## 例

### resolvedOptions の使用

```js
const displayNames = new Intl.DisplayNames(['de-DE'], {type: 'region'});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale);   // "de-DE"
console.log(usedOptions.style);    // "long"
console.log(usedOptions.type);     // "region"
console.log(usedOptions.fallback); // "code"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
