---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
tags:
  - Internationalization
  - JavaScript
  - Method
  - NumberFormat
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
---
{{JSRef}}

**`Intl.NumberFormat.prototype.resolvedOptions()`** メソッドは、この {{jsxref("NumberFormat")}} オブジェクトの初期化時に計算されたロケールと数値整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## 構文

```
numberFormat.resolvedOptions()
```

### 返値

この {{jsxref("NumberFormat")}} オブジェクトの初期化時に計算されたロケールと数値整形オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには以下のプロパティがあります。

<dl><dt><code>locale</code></dt><dd>実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが <code>locale</code> に含まれます。</dd><dt><code>numberingSystem</code></dt><dd>もし存在すれば、 <code>options</code> 引数でこのプロパティに指定された値、または Unicode 拡張キーの <code>"nu"</code> を使って要求された値、または既定として設定される値です。</dd><dt><code>notation</code></dt><dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される <code>standard</code> です。</dd><dt><code>compactDisplay</code></dt><dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される <code>short</code> です。</dd><dd>このプロパティは <code>notation</code> が "compact" に設定されている場合のみ存在します。</dd><dt><code>signDisplay</code></dt><dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される <code>auto</code> です。</dd><dt><code>useGrouping</code></dt><dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される値。</dd><dt><code>currency</code></dt><dt><code>currencyDisplay</code></dt><dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される値。<code>style</code>が<code>"currency"</code>の場合のみ、これらのプロパティは存在しています。</dd></dl>

次の２つのプロパティのグループのうちどちらかのみが含まれています。:

- `minimumIntegerDigits`

  `minimumFractionDigits`

  `maximumFractionDigits`

  - : `options` 引数でプロパティに対して提供されるか既定で設定される値。 `minimumSignificantDigits` または `maximumSignificantDigits` が `options` 引数で提供されなかった場合のみ、これらのプロパティは存在しています。

- `minimumSignificantDigits`

  `maximumSignificantDigits`

  - : `options`引数でプロパティに対して提供されるかデフォルトとして設定される値。 これらのプロパティのうち少なくとも１つが`options`引数で提供された場合のみ、これらのプロパティは存在しています。

## 例

### resolvedOptions メソッドの使用

```js
var de = new Intl.NumberFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.numberingSystem;       // "latn"
usedOptions.notation;              // "standard"
usedOptions.signDisplay;           // "auto"
usedOption.style;                  // "decimal"
usedOptions.minimumIntegerDigits;  // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping;           // true
```

## 仕様書

| 仕様書                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES Int Draft', '#sec-intl.numberformat.prototype.resolvedoptions', 'Intl.NumberFormat.prototype.resolvedOptions')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.NumberFormat.resolvedOptions")}}

## 関連情報

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
