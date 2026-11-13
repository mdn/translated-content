---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.PluralRules`** オブジェクトで、複数形が影響する書式や言語ルールが使用できます。

## 解説

様々な言語では、アイテムの個数（基数）を表す場合と、アイテムの順序（序数）を表す場合とで、異なる表現パターンが使用されています。
英語には基数を表す方法が 2 つあります。1 つは単数の "item" （1 時間、1 匹の犬、1 匹の魚）用で、もう 1 つはゼロまたはその他の数値の "items" （0 時間、2 匹のレミング、100000.5 匹の魚）用です。中国語には形が 1 つしかありませんが、アラビア語には 6 つもあります！
同様に、英語には序数を表す方法が "th"、"st"、"nd"、"rd" の 4 つあります。これによって、順序が 0th、1st、2nd、3rd、4th、5th、……、21st、22nd、23rd、24th、25th、……といった具合に表されます。一方、中国語とアラビア語では、序数詞を表す方法は 1 つしかありません。

ある特定の言語と一連の書式設定オプションが指定された場合、メソッド [`Intl.PluralRules.prototype.select()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select) および [`Intl.PluralRules.prototype.selectRange()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) は、単一の数値または範囲の基数・序数の複数形を表すタグを返します。
コードでは、返されたタグを使用して、指定された言語に適した形で数値を表すことができます。
返される可能性のあるタグの完全なセットは、`zero`、`one`、`two`、`few`、`many`、`other`（「一般的な」複数形。言語に単一の形式しかない場合にも使用されます）です。

英語には基数詞の形が 2 つしかないため、`select()` メソッドは 2 つのタグのみを返します。単数形の場合は `"one"`、それ以外のすべての基数詞の場合は `"other"` です。
これにより、それぞれの場合で英語として意味の通る文を作成することができます。例えば、"1 dog is happy; do you want to play with it?" と "10 dogs are happy; do you want to play with them?" といった具合です。

それぞれの形に適した文を作成するには言語によって異なりますし、英語であっても、単に名詞に "s" を付ければ複数形になるというほど単純ではない場合があります。
以上の実例を見ると、その形によって次のような影響が出る可能性があります。

- **名詞**: 1 dog, 2 dogs （ただし "fish" や "sheep" は単数形と複数形が同じ形です）。
- **動詞**: 1 dog _is_ happy, 2 dogs _are_ happy.
- **代名詞**（およびその他の参照対象）: Do you want to play with _it_ / _them_.

他の言語はさらに多くの方法を持ち、適切な文を選ぶことがさらに複雑になることもあります。

`select()` は、英語の序数詞に対して 4 つのタグのいずれかを返すことができ、それぞれが許容される形式を表します。"st" で終わる数値（1、21、31、…）には `one`、"nd" で終わる序数（2, 22, 32, ...）には `two`、"rd" で終わる序数（3, 33, 43, ...）には `few`、そして "th" で終わる序数（0, 4～20 など）には `other` が返されます。
繰り返しになりますが、返されるタグを使用することで、序数を説明する文字列を適切に書式化することができます。

ルールとそれらの使用方法に関する情報については、[複数形ルール](https://cldr.unicode.org/index/cldr-spec/plural-rules)をご覧ください。
各ルールの一覧および言語ごとの適用方法については、[LDML 言語複数形ルール](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html)をご覧ください。

## コンストラクター

- {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : 新しい `Intl.PluralRules` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : 指定したロケールのうち、ランタイムの既定のロケールに代替されることなく対応されているものが入った配列を返します。

## インスタンスプロパティ

これらのプロパティは `Intl.PluralRules.prototype` で定義されており、すべての `Intl.PluralRules` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.PluralRules.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Intl.PluralRules` インスタンスの場合、初期値は {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules")}} コンストラクターとなります。
- `Intl.PluralRules.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Intl.PluralRules"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化時に計算されたロケールや書式化のオプションを反映したプロパティを持つ、新しいオブジェクトを返します。
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : ロケールを考慮した書式化に使用する複数形を示す文字列を返します。
- {{jsxref("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : このメソッドは 2 つの値を受け取り、ロケールを考慮した書式化に使用する複数形を示す文字列を返します。

## 例

### locales の使用

この例では、基数詞の複数形に関する地域ごとの規則の違いをいくつか表示しています。
アプリケーションのインターフェイスで使用される言語の書式化を取得するには、[コンストラクター `locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#locales) 引数を使用して、その言語（および必要に応じて代替言語）を指定するようにしてください：

```js
// US English
const enCardinalRules = new Intl.PluralRules("en-US");
console.log(enCardinalRules.select(0)); // "other"
console.log(enCardinalRules.select(1)); // "one"
console.log(enCardinalRules.select(2)); // "other"
console.log(enCardinalRules.select(3)); // "other"

// Arabic
const arCardinalRules = new Intl.PluralRules("ar-EG");
console.log(arCardinalRules.select(0)); // "zero"
console.log(arCardinalRules.select(1)); // "one"
console.log(arCardinalRules.select(2)); // "two"
console.log(arCardinalRules.select(6)); // "few"
console.log(arCardinalRules.select(18)); // "many"
```

### options の使用

指定された数値の複数形は、[コンストラクターの `options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)によっても決まる場合があります。例えば、数値を丸める方法や、基数詞か序数詞かといった点などが挙げられます。

この例では、ルールのタイプを「序数」に設定する方法と、それが米国英語の数値の表記にどのような影響を与えるかについて説明します。

```js
// US English - ordinal
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
console.log(enOrdinalRules.select(0)); // "other" (0th)
console.log(enOrdinalRules.select(1)); // "one"   (1st)
console.log(enOrdinalRules.select(2)); // "two"   (2nd)
console.log(enOrdinalRules.select(3)); // "few"   (3rd)
console.log(enOrdinalRules.select(4)); // "other" (4th)
console.log(enOrdinalRules.select(21)); // "one"  (21st)
```

### 返されたタグを使用してテキストの書式を設定

下記コードは、前の例を拡張したもので、返された序数タグを使用して英語のテキストを書式化する方法を示しています。

```js
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = enOrdinalRules.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.PluralRules` のポリフィル (FormatJS)](https://formatjs.io/docs/polyfills/intl-pluralrules)
- {{jsxref("Intl")}}
