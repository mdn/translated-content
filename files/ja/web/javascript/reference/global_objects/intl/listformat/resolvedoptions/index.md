---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
tags:
  - 国際化
  - Intl
  - JavaScript
  - ListFormat
  - メソッド
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.ListFormat.resolvedOptions
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
---
{{JSRef}}

**`Intl.ListFormat.prototype.resolvedOptions()`** メソッドは、現在の {{jsxref("Intl.ListFormat")}} オブジェクトの構築時に計算されたロケールとスタイル整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-resolvedoptions.html")}}

## 構文

```js
listFormat.resolvedOptions()
```

### 返値

指定された {{jsxref("Intl.ListFormat")}} オブジェクトの構築時に計算されたロケールと整形オプションを反映したプロパティを持つオブジェクトです。

## 解説

`resolvedOptions()` から返されるオブジェクトには、以下のプロパティがあります。

- `locale`
  - : 実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `locale` に含まれます。
- `style`
  - : コンストラクターの `options` 引数の中でこのプロパティに指定された値、または既定値 ("`long`") がです。この値は、"`long`"、"`short`"、"`narrow`" のいずれかです。
- `type`
  - : コンストラクターの `options` 引数の中でこのプロパティに指定された値、または既定値 ("`conjunction`") がです。この値は、"`conjunction`"、"`disjunction`"、"`unit`" のいずれかです。

## 例

## resolvedOptions の使用

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style);  // "short"
console.log(usedOptions.type);   // "conjunction" (the default value)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
