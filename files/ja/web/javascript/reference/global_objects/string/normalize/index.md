---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`normalize()`** メソッドは、文字列の Unicode 正規化形式を返します。

{{EmbedInteractiveExample("pages/js/string-normalize.html", "taller")}}

## 構文

```js-nolint
normalize()
normalize(form)
```

### 引数

- `form` {{optional_inline}}

  - : Unicode 正規化形式を示す `"NFC"`, `"NFD"`, `"NFKC"`, `"NFKD"` のうちの一つです。省略されたり {{jsxref("undefined")}} であったりした場合は `"NFC"` が使われます。

    これらの値には以下の意味があります。

    - `"NFC"`
      - : 正規化形式 C。正準等価性によって分解され、再度合成される。
    - `"NFD"`
      - : 正規化形式 D。正準等価性によって分解される。
    - `"NFKC"`
      - : 正規化形式 KC。互換等価性によって分解され、正準等価性によって再度合成される。
    - `"NFKD"`
      - : 正規化形式 KD。互換等価性によって分解される。

### 返値

与えられた文字列の Unicode 正規化形式を含む文字列です。

### 発生する例外

- {{jsxref("RangeError")}}
  - : `form` が上記で指定された値のいずれでもない場合は {{jsxref("RangeError")}} が発生します。

## 解説

Unicode は個々の文字に対して、「コードポイント」と呼ばれる固有の値を割り当てています。例えば、 `"A"` のコードポイントは U+0041 が割り当てられています。しかし、複数のコードポイントや、コードポイントの一連の並びが、同一の抽象文字を表すことがあります。 — 例えば、`"ñ"` の文字は以下のいずれかで表すことができます。

- 単一のコードポイント U+00F1
- `"n"` のコードポイント (U+006E) に続いて組み合わせチルダのコードポイント (U+0303)

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

しかし、コードポイントが異なるため、文字列の比較ではこれらが同じものとして扱われません。また、それぞれのコードポイントの数が異なるため、長さすら異なります。

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

`normalize()` メソッドは、同じ文字を表すコードポイントのすべての並びを共通の正規化された形式に文字列を変換することで、この問題を解決するのに役立ちます。正規化の方法は主に 2 つがあり、1 つは**正準等価性**に、もう 1 つは**互換等価性**に基づきます。

### 正準等価性による正規化

Unicode では、2 つのコードポイントの並びが同じ抽象文字を表していれば、正準等価性があるとされ、常に同じ外見表示と動作をするべきです（例えば、並べ替えで常に同じものとして扱うべきです）。

`normalize()` を `"NFD"` または `"NFC"` の引数で使用することで、すべてが正準等価な文字列となる文字列の形を生成することができます。以下の例では、文字 `"ñ"` の二つの表現を正規化しています。

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");

console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

#### 合成形と分解形

`"NFD"` で正規化された形の長さが `2` であることに注意してください。`"NFD"` は**分解**正規形を生成するからであり、これは単一のコードポイントを複数のコードポイントの組み合わせに分解します。 `"ñ"` の分解正規形は `"\u006E\u0303"` です。

`"NFC"` を指定すると**合成**正規形を取得することができ、これは複数のコードポイントを可能な限り単一のコードポイントで置き換えます。 `"ñ"` の合成正規形は `"\u00F1"` です。

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFC");
string2 = string2.normalize("NFC");

console.log(string1 === string2); // true
console.log(string1.length); // 1
console.log(string2.length); // 1
console.log(string2.codePointAt(0).toString(16)); // f1
```

### 互換正規形

Unicode では、2 つのコードポイントの並びが、同じ抽象文字を表す場合に互換性があり、場合によっては同じ文字として扱われるべきですが、すべてのアプリケーションでそうするべきとは限らないことがあります。

すべての正準等価な並びは互換といえますが、逆はそうとはいえません。

例を挙げます。

- コードポイント U+FB00 は[合字](/ja/docs/Glossary/Ligature) `"ﬀ"` を表します。これは 2 つの連続したコードポイント U+0066 (`"ff"`) と互換性があります。
- コードポイント U+24B9 は、記号 `"Ⓓ"` を表します。
  これは U+0044 のコードポイント (`"D"`) と互換性があります。

場面によっては（並べ替えなど）同じものとしてみなされるべきであり、その他の場合は（外見など）同じとするべきではないので、これらは厳密には等しくありません。

`normalize()` を `"NFKD"` または `"NFKC"` を引数にして使用することで、互換等価な文字列が同じになる形の文字列を生成することができます。

```js
let string1 = "\uFB00";
let string2 = "\u0066\u0066";

console.log(string1); // ﬀ
console.log(string2); // ff
console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2

string1 = string1.normalize("NFKD");
string2 = string2.normalize("NFKD");

console.log(string1); // ff <- 外見が変わった
console.log(string2); // ff
console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

互換等価な正規化を適用する際には、正規化された形式がすべてのアプリケーションに適しているとは限らないので、文字列で何をしようとしているのかを考慮することが重要です。上の例では、ユーザーが `"f"` を検索すれば文字列を見つけることができるので、正規化は検索に適しています。しかし、視覚的な表現が異なるため、表示には適切ではないかもしれません。

正準等価な正規化のように、分解形または合成形の互換等価形式は、それぞれ `"NFKD"` または `"NFKC"` を渡すことで問い合わせることができます。

## 例

### normalize() の使用

```js
// 最初の文字列

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
const str = "\u1E9B\u0323";

// 正準合成形 (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // same as above

// 正準分解形 (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // '\u017F\u0323\u0307'

// 互換合成形 (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // '\u1E69'

// 互換分解形 (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFKD"); // '\u0073\u0323\u0307'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Unicode Standard Annex #15, Unicode Normalization Forms](https://www.unicode.org/reports/tr15/)
- [Unicode の等価性](https://ja.wikipedia.org/wiki/Unicodeの等価性)
