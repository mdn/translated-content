---
title: Intl.Locale.prototype.getNumberingSystems()
short-title: getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

**`getNumberingSystems()`** は {{jsxref("Intl.Locale")}} インスタンスのメソッドで、このロケールの[記数法](https://en.wikipedia.org/wiki/Numeral_system)識別子を 1 つ含む配列を返します。

> [!NOTE]
> 一部のブラウザーの一部のバージョンでは、このメソッドが `numberingSystems` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しい配列を返すため、`locale.numberingSystems === locale.numberingSystems` が常に `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getNumberingSystems()
```

### 引数

なし。

### 返値

`Locale` のデフォルトの記数法を表す文字列を 1 つ含む配列。`Locale` にすでに [`numberingSystem`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) が設定されている場合、返される配列はその値のみになります。

対応している記数法の種別の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法) を参照してください。

## 例

### 対応している記数法を取得

`Locale` オブジェクトに `numberingSystem` が設定されていない場合、`getNumberingSystems()` は指定された `Locale` のデフォルトの記数法を返します。`numberingSystem` を明示的に設定する例については、[`numberingSystem` の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#例) を参照してください。

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.numberingSystem`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Unicode 標準における記数法の詳細](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
