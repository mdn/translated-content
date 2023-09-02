---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: cda36825f2a7e12f0ebff9d9f257dae8a1171dbd
---

{{JSRef}}

**`localeCompare()`** メソッドは、参照文字列がソート順で指定された文字列の前か後か、または同じかを示す数値を返します。[`Intl.Collator` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) に対応している実装では、このメソッドは単に `Intl.Collator` を呼び出します。

大量の文字列を比較する場合、例えば巨大な配列を並べ替えしている時は、{{jsxref("Intl.Collator")}} オブジェクトを生成してそれが提供する {{jsxref("Intl/Collator/compare", "compare()")}} メソッドを使用したほうがいいでしょう。

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## 構文

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### 引数

`locales` と `options` 引数は、この関数の動作をカスタマイズし、アプリケーションが書式化の習慣で使用する言語を指定することができます。

[`Intl.Collator` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) に対応している実装では、これらの引数はちょうど [`Intl.Collator()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) コンストラクターの引数に対応します。`Intl.Collator` の対応のない実装では、両方の引数を無視し、比較を行うと完全に実装依存の値を返します。一貫性があることだけが必要です。

- `compareString`
  - : この文字列と比較される文字列です。すべての値は[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると、`localeCompare()` は `"undefined"` という文字列と比較を行います。これはおそらく望むところではないでしょう。
- `locales` {{optional_inline}}

  - : BCP 47 言語タグの文字列、またはそのような文字列の配列です。`Intl.Collator()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) 引数に対応します。

    `Intl.Collator` の対応がない実装では、この引数は無視され、普通はホストのロケールが使用されます。

- `options` {{optional_inline}}

  - : 出力形式を調整するオブジェクトです。`Intl.Collator()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) 引数に対応します。

    `Intl.Collator` の対応がない実装では、この引数は無視されます。

[`Intl.Collator()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) の記事に、`locales` および `options` 引数の詳細と使い方が書かれています。

### 返値

`referenceStr` が `compareString` より前に出現するものである場合は**負**の数です。 `referenceStr` が `compareString` より後に出現するものである場合は**正**の数です。等しい場合は `0` です。

`Intl.Collator` の実装では、これは `new Intl.Collator(locales, options).compare(referenceStr, compareString)` と等価です。

## 解説

`referenceStr` が `compareString` より前に来るか、後に来るか、あるいは等しいかを示す整数を返します。

- `referenceStr` が `compareString` より前に出現するものである場合は負の数
- `referenceStr` が `compareString` より後に出現するものである場合は正の数
- 等しい場合は `0`

> **警告:** 返値が正確な `-1` または `1` であると思わないでください。
>
> 結果の負の整数と正の整数は、ブラウザー間（およびブラウザーのバージョン間）で異なります。これは W3C の仕様が負の値か正の値かとだけ指定しているためです。ブラウザーによっては `-2` や `2` を、あるいは他の負の値、正の値を返却するかもしれません。

## 例

### localeCompare() の使用

```js
// 文字 "a" は "c" は負の数になります
"a".localeCompare("c"); // -2 や -1 （あるいはまた別の負の数）

// 単語 "check" はアルファベット順に "against" より後ろなので正の数になります
"check".localeCompare("against"); // 2 や 1 （あるいはまた別の正の数）

// "a" と"a" は等しいので自然数 0 になります
"a".localeCompare("a"); // 0
```

### 配列の並べ替え

`localeCompare()` で、大文字小文字の違いを無視した配列の並べ替えができます。

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### 拡張引数をブラウザーが対応しているか調べる

`locales` と `options` の引数は、まだすべてのブラウザーで対応しているわけではありません。

実装がこれらに対応しているか調べるには、引数 `"i"`（不正な言語タグが除外される要件）を使用して、例外 {{jsxref("RangeError")}} を調べてください。

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### locales の使用

`localeCompare()` によって得られる結果は言語間で異なります。アプリケーションのユーザーインターフェイスで使用される言語の整列順を得るには、 `locales` 引数を使用してその言語（そしてできればいくつかの代替言語）を指定していることを確かめて下さい。

```js
console.log("ä".localeCompare("z", "de")); // 負の数: ドイツ語で ä は a に分類される
console.log("ä".localeCompare("z", "sv")); // 正の数: スウェーデン語では ä は z の後になる
```

### options の使用

`localeCompare()` によって得られる結果は、`options` 引数を使用することによってカスタマイズできます。:

```js
// ドイツ語では ä の base letter は a
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// スウェーデン語では ä と a は base letter が異なる
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // 正の値
```

### 数値の並べ替え

```js
// 既定では "2" > "10"
console.log("2".localeCompare("10")); // 1

// options を使用した数値
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// ロケールタグを使用した数値
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.Collator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
