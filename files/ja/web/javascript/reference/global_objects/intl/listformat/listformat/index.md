---
title: Intl.ListFormat() コンストラクター
short-title: Intl.ListFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.ListFormat()`** コンストラクターは {{jsxref("Intl.ListFormat")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// 予想される結果: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// 予想される結果: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// 予想される結果: "Motorcycle Bus Car"
```

## 構文

```js-nolint
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

> [!NOTE]
> `Intl.ListFormat()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) をつけた場合のみ構築できます。 `new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `locales` {{optional_inline}}
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}または {{jsxref("Intl.Locale")}} インスタンスを持つ文字列、あるいはそのようなロケール識別子の配列。`undefined` が渡された場合、または指定されたロケール識別子のいずれも対応していない場合は、ランタイムのデフォルトのロケールが使用されます。`locales` 引数の一般的な形と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 以下のプロパティ（取得順、すべてオプション）が含まれているオブジェクトです。
    - `localeMatcher`
      - : 使用するロケール照合アルゴリズムです。利用可能な値は、`"lookup"` と `"best fit"` です。デフォルト値は `"best fit"` です。このオプションについての情報は、[ロケール識別子とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。
    - `type`
      - : グループ化の種類を示します。取りうる値は以下の通りです。
        - `"conjunction"` （デフォルト）
          - : リスト項目の "and" ベースのグループ化: "A, B, and C"
        - `"disjunction"`
          - : リスト項目の "or" ベースのグループ化: "A, B, or C"
        - `"unit"`
          - : リスト項目の成分単位としてのグループ化（"and" ベースでも "or" ベースでもない）: "A, B, C"
    - `style`
      - : グループ化のスタイルを示します（例えば、リストの区切り文字や結合などが含まれます）。取りうる値は以下の通りです。
        - `"long"` （デフォルト）
          - : 通常のリスト形式。例えば "A, B, and C" です。
        - `"short"`
          - : 空白、接続詞の長さや有無、および区切り文字が変更されることがあります。通常、入力要素も省略形にするのが望ましいでしょう。例えば "A, B, & C" です。
        - `"narrow"`
          - : 可能な限り、リスト書式をさらに省略し、出力をできるだけ短くします。例えば "A, B, C" です。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に無効な値が含まれている場合に発生します。

## 例

### format の使用

次の例では、英語を使用するリストのフォーマッターを生成する方法を示します。

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { type: "disjunction" }).format(list));
// Motorcycle, Bus or Car
```

### オックスフォードカンマ

[オックスフォードカンマ](https://en.wikipedia.org/wiki/Serial_comma)とは、3 つ以上の項目からなる列挙において、等位接続詞（通常は "and" や "or"）の直前に置かれるカンマのことです。多少議論の余地はありますが、`en-US` ロケールではオックスフォードカンマが使用されるのに対し、`en-GB` ロケールでは使用されません。

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### 単位の書式化

リストアイテムを複合単位として表示するには、`style: "unit"` を使用してください。実際、{{jsxref("Intl.DurationFormat")}} は、内部で単位形式のリスト書式化を使用して、期間を表示しています。

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

console.log(
  new Intl.ListFormat("en-US", { type: "unit" }).format(
    marathon.map((component) =>
      component[0].toLocaleString("en-US", {
        style: "unit",
        unit: component[1],
        unitDisplay: "long",
      }),
    ),
  ),
);
// 42 kilometers, 195 meters
```

### short および narrow スタイル

`"short"` および `"narrow"` スタイルは、リストをコンパクトに表示するのに有益です。

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(new Intl.ListFormat("en-US", { style: "short" }).format(list));
// Motorcycle, Bus, & Car

console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car

console.log(new Intl.ListFormat("en-GB", { style: "short" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car
```

入力要素は変換されませんが、それらを省略形にしたい場合もよくあるでしょう。

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

function formatDistance(locale, distance, style) {
  return new Intl.ListFormat(locale, { type: "unit", style }).format(
    marathon.map((component) =>
      component[0].toLocaleString(locale, {
        style: "unit",
        unit: component[1],
        unitDisplay: style,
      }),
    ),
  );
}

console.log(formatDistance("en-US", marathon, "long"));
// 42 kilometers, 195 meters
console.log(formatDistance("en-US", marathon, "short"));
// 42 km, 195 m
console.log(formatDistance("en-US", marathon, "narrow"));
// 42km 195m
```

### 結合の選択

使用される接続詞は、リストアイテムの文字列の値に依存する場合があります。例えば、スペイン語では、ほとんどの単語では接続詞は `"y"` ですが、母音 `"i"` で始まる単語の場合は `"e"` になります。

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

この組み合わせを決定するために使用されているアルゴリズムは完璧ではありませんが（例えば、綴りから単語の発音を常に判別できるわけではありません）、一般的な場面では機能するはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
