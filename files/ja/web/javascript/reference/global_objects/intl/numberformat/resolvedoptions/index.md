---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
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

- `locale`
  - : 実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `locale` に含まれます。
- `numberingSystem`
  - : もし存在すれば、 `options` 引数でこのプロパティに指定された値、または Unicode 拡張キーの `"nu"` を使って要求された値、または既定として設定される値です。
- `notation`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される `standard` です。
- `compactDisplay`

  - : `options` 引数でこのプロパティに指定された値、または既定として設定される `short` です。

    このプロパティは `notation` が "compact" に設定されている場合のみ存在します。

- `signDisplay`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される `auto` です。
- `useGrouping`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される値。
- `currency`, `currencyDisplay`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される値。`style`が`"currency"`の場合のみ、これらのプロパティは存在しています。

次の２つのプロパティのグループのうちどちらかのみが含まれています。:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`

  - : `options` 引数でプロパティに対して提供されるか既定で設定される値。 `minimumSignificantDigits` または `maximumSignificantDigits` が `options` 引数で提供されなかった場合のみ、これらのプロパティは存在しています。

- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : `options`引数でプロパティに対して提供されるかデフォルトとして設定される値。 これらのプロパティのうち少なくとも１つが`options`引数で提供された場合のみ、これらのプロパティは存在しています。

## 例

### resolvedOptions メソッドの使用

```js
var de = new Intl.NumberFormat("de-DE");
var usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.numberingSystem; // "latn"
usedOptions.notation; // "standard"
usedOptions.signDisplay; // "auto"
usedOption.style; // "decimal"
usedOptions.minimumIntegerDigits; // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.NumberFormat.resolvedOptions")}}

## 関連情報

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
