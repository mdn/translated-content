---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
---

{{jsxref("Intl.Locale")}} インスタンスの **`getCollations()`** メソッドは、このロケールの 1 つ以上の[照合種別](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation)のリストを返します。

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドが `collations` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しい配列を返すため、`locale.collations === locale.collations` が `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getCollations()
```

### 引数

なし。

### 返値

`Locale` で一般的に使用されるすべての照合種別を、アルファベット順にソートして並べた文字列の配列。`standard` と `search` の値は常に除外されます。`Locale` にすでに [`collation`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) が設定されている場合、返される配列はその単一の値のみを含みます。

対応している照合種別の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している照合型) を参照してください。

## 例

### 対応している照合種別を取得

`Locale` オブジェクトに `collation` が設定されていない場合、`getCollations()` は指定された `Locale` で一般的に使用されるすべての照合種別をリストアップします。`collation` を明示的に設定する例については、[`collation` の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#例) を参照してください。

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.collation`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
