---
title: テキスト処理
slug: Web/JavaScript/Guide/Text_formatting
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}

本章では JavaScript で文字列やテキストを操作する方法を紹介します。

## 文字列

JavaScript の{{Glossary("String","文字列")}}型はテキストデータを表すために使われます。テキストデータ型は 16 ビット符号なし整数値 (UTF-16) からなる「要素」の集合体です。文字列の各要素は、その文字列内で所定の位置を占めています。最初の要素のインデックスは 0 で、次の要素のインデックスは 1 、といった具合に。文字列の長さはその要素数となります。文字列リテラルか文字列オブジェクトを使用して文字列を生成できます。

### 文字列リテラル

単一引用符または二重引用符のいずれかを使用して、単純な文字列を作成できます :

```js-nolint
'foo';
"bar";
```

また、エスケープシーケンスを使用してより高度な文字列を作成できます :

#### 16 進数エスケープシーケンス

`\x` の後の数値は [16 進法による](https://ja.wikipedia.org/wiki/十六進法)数として解釈されます。

```js
"\xA9"; // "©"
```

#### Unicode エスケープシーケンス

Unicode エスケープシーケンスは `\u` の後に少なくとも文字が 4 個必要です。

```js
"\u00A9"; // "©"
```

#### Unicode コードポイントエスケープ

ECMAScript 2015 の新機能です。Unicode コードポイントエスケープを使えば、どんな文字でも 16 進数を使用してエスケープすることができます。これにより、`0x10FFFF` まで Unicode コードポイントを利用できます。単純な Unicode エスケープを使用して同じ結果を得るには、多くの場合要素を半分に分け、サロゲートペアにする必要があります。

{{jsxref("String.fromCodePoint()")}} や {{jsxref("String.prototype.codePointAt()")}} も参考にしてください。

```js
"\u{2F804}";

// 単純な Unicode エスケープでも同じです。
"\uD87E\uDC04";
```

### String オブジェクト

{{jsxref("String")}} オブジェクトは文字列プリミティブデータ型のためのラッパです。

```js
const foo = new String("foo"); // 文字列オブジェクトを作る
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'
```

文字列リテラル値に対しても `String` オブジェクトのメソッドを呼び出すことができます ― JavaScript は自動的に文字列リテラルを一時的な `String` オブジェクトに変換し、メソッドを呼び出し、そして一時的に作られた `String` オブジェクトを破棄します。文字列リテラルでは `String.length` プロパティも利用できます。

`String` オブジェクトを使用する明確な必要性がなければ、文字列リテラルを使用してください。というのも、`String` オブジェクトは直感的でない振る舞いをします。例えば :

```js
const firstString = "2 + 2"; // 文字列リテラル値を作成
const secondString = new String("2 + 2"); // 文字列オブジェクトを作成
eval(firstString); // 数値の 4 を返す
eval(secondString); // 文字列 "2 + 2" を返す
```

`String` オブジェクトのプロパティの 1 つには、文字列内の UTF-16 コード単位の数を示す `length` があります。例えば、次のコードでは、`helloLength` には値 13 が代入されます。"Hello, World!" は 13 文字で、それぞれが 1 つの UTF-16 コード単位で表されるからです。配列の角括弧書式を使用して、各コード単位にアクセスできます。文字列は不変の配列のようなオブジェクトなので、個々の文字を変更することはできません：

```js
const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // 文字列は不変なので、これは効果がありません
hello[0]; // これは "H" を返します
```

Unicode のスカラー値が U+FFFF より大きい文字 (中国語/日本語/韓国語/ベトナム語の特殊な文字や絵文字など) は、それぞれ 2 つのサロゲートコード単位で UTF-16 に格納されます。たとえば、単一の文字 U+1F600 (笑顔の絵文字) から成る文字列の長さは 2 になります。このような文字列の括弧で囲まれた個々のコード単位にアクセスすると、一致しないサロゲートコード単位の文字列が生成されるなど、Unicode 標準違反という好ましくない結果になります。(その例は、MDN のバグ 857438 が修正された後にこのページに追加する必要があります。) {{jsxref("String.fromCodePoint()")}} または{{jsxref("String.prototype.codePointAt()")}} も参照してください。

`String` オブジェクトはさまざまなメソッドを持っています。例えば、`substring` や `toUpperCase` のような文字列自体のバリエーションを返すメソッドがあります。

次の表は {{jsxref("String")}} オブジェクトのメソッドをまとめたものです。

| メソッド                                                                                                                                                                                                      | 説明                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("String.charAt", "charAt")}}、{{jsxref("String.charCodeAt", "charCodeAt")}}、{{jsxref("String.codePointAt", "codePointAt")}}                                                                         | 文字列内の指定された位置の文字または文字コードを返します。                                                                                   |
| {{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}                                                                                                                      | それぞれ、文字列内にある指定された部分文字列の先頭位置、および末尾の位置を返します。                                                         |
| {{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}                                                                           | 文字列が指定した文字列で始まるか、終わるか、それを含むかどうかを返します。                                                                   |
| {{jsxref("String.concat", "concat")}}                                                                                                                                                                         | 2 つの文字列をテキストとしてつなげた新しい文字列を返します。                                                                                 |
| {{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}                                                                                                        | 指定の Unicode 値シーケンスから文字列を構築します。これは、`String` インスタンスではなく、`String` クラスにあるメソッドです。                |
| {{jsxref("String.split", "split")}}                                                                                                                                                                           | 文字列を部分文字列へと分けることで、`String` オブジェクトを文字列の配列に分割します。                                                        |
| {{jsxref("String.slice", "slice")}}                                                                                                                                                                           | 文字列の一部分を取り出し、新しい文字列を返します。                                                                                           |
| {{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}                                                                                                                            | 開始インデックスから終了インデックスまで、または開始インデックスと長さ、このいずれかを指定することで文字列における特定の部分集合を返します。 |
| {{jsxref("String.match", "match")}}, {{jsxref("String.matchAll", "matchAll")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.replaceAll", "replaceAll")}}, {{jsxref("String.search", "search")}} | 正規表現と共に機能します。                                                                                                                   |
| {{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}                                                                                                              | それぞれ、すべて小文字またはすべて大文字にした文字列を返します。                                                                             |
| {{jsxref("String.normalize", "normalize")}}                                                                                                                                                                   | 呼び出し元となる文字列値の Unicode 正規化形式を返します。                                                                                    |
| {{jsxref("String.repeat", "repeat")}}                                                                                                                                                                         | 所定回数繰り返したオブジェクト要素からなる文字列を返します。                                                                                 |
| {{jsxref("String.trim", "trim")}}                                                                                                                                                                             | 文字列の先頭と末尾から空白文字を取り除きます。                                                                                               |

### マルチラインテンプレート文字列

[テンプレート文字列](/ja/docs/Web/JavaScript/Reference/template_strings)は式を埋め込むことができる文字列リテラルです。複数行の文字列や文字列の補間機能で使用することができます。

テンプレート文字列は二重引用符または一重引用符のかわりにバッククォート (`` ` ``) （[抑音アクセント](https://en.wikipedia.org/wiki/Grave_accent)）文字で囲まれています。テンプレート文字列にはプレースホルダーを含めることができます。プレースホルダーはドル記号と波括弧 (`${expression}`) によって示されます。

#### マルチライン

ソースに挿入されたいかなる改行文字も、テンプレート文字列の一部となります。通常の文字列を使って複数行の文字列を取得するには、次のような構文を使用しなければなりません :

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

複数行の文字列と同じ結果を得たければ、テンプレート文字列を使って下記のように書くことができます :

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### 組み込み式

通常の文字列内に式を埋め込むには、次のような構文を用います :

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

テンプレート文字列を使えば、糖衣構文を利用してこれをより読みやすくすることができます。:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

詳細については、[JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)内の[テンプレート文字列](/ja/docs/Web/JavaScript/Reference/template_strings)をご覧ください。

## 国際化

{{jsxref("Intl")}} オブジェクトは ECMAScript 国際化 API のための名前空間です。ECMAScript 国際化 API は、各言語に応じた文字列比較、数値フォーマット、日時フォーマットを提供します。{{jsxref("Collator")}}、{{jsxref("NumberFormat")}}、{{jsxref("DateTimeFormat")}} オブジェクトのコンストラクタは `Intl` オブジェクトのプロパティとなっています。

### 日時フォーマット

{{jsxref("DateTimeFormat")}} オブジェクトは日時をフォーマットするのに便利です。次の例では、日付をアメリカ英語のフォーマットにします（結果は別のタイムゾーンで異なります）。

```js
const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```

### 数値フォーマット

{{jsxref("NumberFormat")}} オブジェクトは数値、例えば通貨をフォーマットするのに有用です。

```js
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### 照合

{{jsxref("Collator")}} オブジェクトは文字列を比較しソートするのに便利です。

例えば、ドイツ語には二つの異なるソート順、_phonebook_（電話帳順）と _dictionary_（辞書順）が存在します。電話帳順ソートは音を強調し、ソート前に "ä"、"ö" といった文字があたかも "ae"、"oe" などであるかのように解釈されます。

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// ["Hochberg", "Hoenigswald", "Holzman"] としてソートされる:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman" がログ出力される
```

ドイツ語の単語の中にはウムラウト記号によって変化するものがあるため、辞書順では（_schön_ の前は _schon_ といったような、ウムラウトのみ異なるような単語をソートする場合を除けば）ウムラウトを無視してソートするのが賢明です。

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// ["Hochberg", "Honigswald", "Holzman"] としてソートされる:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald" とログ出力される
```

{{jsxref("Intl")}} API の詳細については、[Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/) もご覧ください。

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}
