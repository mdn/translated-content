---
title: "Unicode 文字クラスエスケープ: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: e0d92259b485a219840367cf4e23a7069f192eec
---

{{JsSidebar}}

**Unicode 文字クラスエスケープ**は[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)の一種で、Unicode プロパティで指定された一連の文字に一致します。これは [Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)でのみ対応しています。[`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグが有効である場合、有限長の文字列と照合するために使用することもできます。

{{InteractiveExample("taller")}}

```js interactive-example
const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// Expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// Expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// Expected output: Array ["¥", "."]

```

## 構文

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### 引数

- `loneProperty`

  - : 単独の Unicode プロパティ名または値で、`value` と同じ構文に従います。`General_Category` プロパティの値、または[バイナリープロパティ名](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties)を指定します。[`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) モードでは、[文字列のバイナリー Unicode プロパティ](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings)にもなります。

    > **メモ:** [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) 構文では `Script` プロパティ名も同様に省略することができますが、JavaScript では `Script` よりも `Script_Extensions` の方が有益な場合が多いため、対応していません。

- `property`
  - : Unicode プロパティ名。ASCII 文字 (`A-Z`, `a-z`) とアンダースコア (`_`) で構成され、[バイナリー以外のプロパティ名](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties)のいずれかでなければなりません。
- `value`
  - : Unicode プロパティ値。ASCII 文字 (`A-Z`, `a-z`) とアンダースコア (`_`) と数字 (`0 - 9`) で構成され、[`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) に挙げられている対応値のいずれかでなければなりません。

## 解説

`\p` および `\P` は [Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)でのみ対応しています。Unicode 非対応モードでは、これらは `p` または `P` の文字の [ID エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)です。

すべての Unicode 文字には、それを記述する一連のプロパティがあります。例えば、[`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) という文字では、`General_Category` プロパティが `Lowercase_Letter` の値であり、`Script` プロパティが `Latn` の値です。エスケープシーケンス `\p` および `\P` を使用すると、そのプロパティに基づいて文字を照合することができます。例えば、`a` は `\p{`Lowercase_Letter`}`（`General_Category` プロパティ名はオプション）と、`\p{Script=Latn}` によって一致させることができます。`\P` は、指定したプロパティを持たないコード ポイントからなる補集合クラスを生成します。

複数のプロパティを合成するには、`v` フラグで有効になる[文字セット交差集合](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)構文を使用してください。[パターン差集合と交差集合](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection)を参照してください。

`v` モードでは、`\p` は Unicode で「文字列プロパティ」として定義されている一連のコードポイントと照合することができます。これは、複数のコードポイントで構成されることが多い絵文字に最も便利です。ただし、`\P` は文字プロパティの補集合しか作成できません。

> [!NOTE]
> 文字列プロパティ機能を `u` モードにも移植する計画があります。

## 例

### 一般カテゴリー

一般カテゴリーは、Unicode 文字を分類するために使用され、より詳細なカテゴリーを定義するためにサブカテゴリーを利用することができます。Unicode プロパティエスケープでは、短い形式と長い形式の両方を使用することができます。

これらは、文字、数字、記号、句読点、空白などを照合するために使用することができます。一般的なカテゴリーのより詳細なリストについては、[Unicode 仕様書](https://unicode.org/reports/tr18/#General_Category_Property)を参照してください。

```js
// この中のすべての文字を検索
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// 最も明示的な形式
story.match(/\p{General_Category=Letter}/gu);

// 一般カテゴリーでは、プロパティ名を使用することが必須ではない
story.match(/\p{Letter}/gu);

// これも同等（短い別名）
story.match(/\p{L}/gu);

// これも同等（短い別名を使用したすべてのサブカテゴリーの結合）
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### 文字体系と文字体系拡張

言語によっては、その書法に別の文字体系を使用しているものもあります。例えば、英語とスペイン語はラテン文字を使用して書かれていますが、アラビア語とロシア語は他の文字（それぞれアラビア文字とキリル文字）を使用して書かれています。 Unicode の `Script` と `Script_Extensions` プロパティは、正規表現が、主に使用される文字体系 (`Script`) または文字体系の集合 (`Script_Extensions`) に従って文字と照合するようにするものです。

例えば、 `A` は `Latin` に、 `ε` は `Greek` に属します。

```js
const mixedCharacters = "aεЛ";

// この文字体系の正規の「長い」名前を使用
mixedCharacters.match(/\p{Script=Latin}/u); // a

// 文字体系に短い別名（ISO 15924 コード）を使用
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Script プロパティの短い名前 sc を使用
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

より詳細には、[Unicode 仕様書](https://unicode.org/reports/tr24/#Script)、[ECMAScript 仕様書の文字体系一覧表](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values)、[ISO 15924 文字体系コードのリスト](https://unicode.org/iso15924/iso15924-codes.html)を参照してください。

ある文字が限られた文字体系で使用されている場合、`Script` プロパティは「主要な」使用されている文字体系に対してのみ一致します。もし、「主要ではない」文字体系に基づいて文字を照合したい場合には、 `Script_Extensions` プロパティ（`Scx` と略します）を使用することができます。

```js
// ٢ は、アラビア・インド語表記の数字の 2 であり、
// 主にアラビア文字体系で書かれるが、ターナ文字体系でも
// 使用することができます。

"٢".match(/\p{Script=Thaana}/u);
// ターナ文字体系は主要な文字体系ではないので null

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode プロパティエスケープと文字クラス

JavaScript の正規表現では、[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)で、特に `\w` や `\d` を使用して文字や数字に一致させることも可能です。しかし、このような形式は _ラテン_ 文字体系の文字にしか一致しません（言い換えれば、 `a` から `z` と `A` から `Z` は `\w` に、`0` から `9` は `\d` に対応します）。[この例](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#（unicode_文字の）単語を探す)に示すように、ラテン文字以外のテキストで作業するにはちょっと不便かもしれません。

Unicode プロパティエスケープのカテゴリーはより多くの文字を包含しており、 `\p{Letter}` や `\p{Number}` はどのような文字体系に対しても扱うことができます。

```js
// 範囲を使用して \w の制限を避けようとする

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP は U+0000 から U+FFFF だが、空白は U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Unicode プロパティエスケープを代わりに使用する
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

### 価格の照合

以下の例は、文字列中の価格に一致します。

```js
function getPrices(str) {
  // Sc は "currency symbol"（通貨記号）を表す。
  return [...str.matchAll(/\p{Sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const str = `California rolls $6.99
Crunchy rolls $8.49
Shrimp tempura $10.99`;
console.log(getPrices(str)); // ["$6.99", "$8.49", "$10.99"]

const str2 = `US store $19.99
Europe store €18.99
Japan store ¥2000`;
console.log(getPrices(str2)); // ["$19.99", "€18.99", "¥2000"]
```

### 文字列の照合

`v` フラグを付けると、`\p{…}` は文字列のプロパティを使用して、1 文字より長い可能性のある文字列と照合することができます。

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

ただし、`\P` を「プロパティを持たない文字列」と照合するために使うことはできません。何文字を消費するかが不明だからです。

```js
/\P{RGI_Emoji_Flag_Sequence}/v; // Invalid regular expression: /\P{RGI_Emoji_Flag_Sequence}/v: Invalid property name
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode character property](https://en.wikipedia.org/wiki/Unicode_character_property) (Wikipedia)
- [ES2018: RegExp Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) (Dr. Axel Rauschmayer, 2017)
- [Unicode regular expressions § Properties](https://unicode.org/reports/tr18/#Categories) (unicode.org)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) (v8.dev, 2022)
