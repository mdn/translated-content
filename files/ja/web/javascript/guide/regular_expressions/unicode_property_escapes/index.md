---
title: Unicode プロパティエスケープ
slug: Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
l10n:
  sourceCommit: 1d0a8a8c0782b30e0afe81cab0f55846730c7f5f
---

{{jsSidebar("JavaScript Guide")}}

**Unicode プロパティエスケープ**によって、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)において、その Unicode プロパティに基づいて文字を照合することができます。文字を、バイナリー（「論理値」）またはバイナリーではないいくつかのプロパティによって記述します。例えば、 Unicode プロパティエスケープは、絵文字、句読点、文字（特定の言語や文字体系からの文字も含む）などに一致するように使用することができます。

{{EmbedInteractiveExample("pages/js/regexp-unicode-property-escapes.html", "taller")}}

> **メモ:** Unicode プロパティエスケープを動作させるためには、正規表現は文字列を一連の Unicode コードポイントと見なすべきであることを示す [`u` フラグ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) を使用する必要があります。 [`RegExp.prototype.unicode`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) も参照してください。

> **メモ:** Unicode プロパティには、一部の[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)よりも多くの文字を包含するものがありますが（`\w` がラテン文字 の `a` から `z` までしか一致しないなど）、後者のほうがブラウザー間での対応が進んでいます（2020 年 1 月現在）。

## 構文

```js-nolint
// バイナリー値でないもの
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// バイナリー値と非バイナリー値
\p{UnicodeBinaryPropertyName}

// 否定: \P は \p の否定
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

- 一般カテゴリー [General_Category](https://unicode.org/reports/tr18/#General_Category_Property) )(`gc`)
- 文字体系 [Script](https://unicode.org/reports/tr24/#Script) (`sc`)
- 文字体系拡張 [Script_Extensions](https://unicode.org/reports/tr24/#Script_Extensions) (`scx`)

[PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) も参照してください。

- `UnicodeBinaryPropertyName`
  - : [バイナリープロパティ](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties)の名前。例えば、 [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property), [`Alpha`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacritic`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Hex_Digit`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`White_space`](https://unicode.org/reports/tr44/#White_Space), など。詳しくは [Unicode Data PropList.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) を参照してください。
- `UnicodePropertyName`
  - : [非バイナリー](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties)プロパティの名前です。
- `UnicodePropertyValue`
  - : 下記の「値」の節に掲載されているトークンの 1 つです。多くの値には、別名や短縮形があります（例えば `General_Category` プロパティの値 `Decimal_Number` は `Nd`, `digit`, `Decimal_Number` と書くことができます）。ほとんどの値では、 `UnicodePropertyName` の部分と等号を省略することができます。 `UnicodePropertyName` を指定した場合、その値は指定されたプロパティの種類に対応するものでなければなりません。

> **メモ:** 利用できるプロパティと値は膨大であるため、ここでは網羅的に記述することはせず、様々な例を提供することにします。

## 例

### 一般カテゴリー

一般カテゴリーは、Unicode 文字を分類するために使用され、より詳細なカテゴリーを定義するためにサブカテゴリーを利用することができます。Unicode プロパティエスケープでは、短い形式と長い形式の両方を使用することができます。

これらは、文字、数字、記号、句読点、空白などを照合するために使用することができます。一般的なカテゴリーのより詳細なリストについては、[Unicode 仕様書](https://unicode.org/reports/tr18/#General_Category_Property)を参照してください。

```js
// この中のすべての文字を検索
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// 最も明示的な形式
story.match(/\p{General_Category=Letter}/gu);

// 一般カテゴリーでは、プロパティ名を使用することが必須ではありません。
story.match(/\p{Letter}/gu);

// 同等です（短い別名）。
story.match(/\p{L}/gu);

// これも同等です（短い別名を使用したすべてのサブカテゴリーの結合）。
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### 文字体系と文字体系拡張

言語によっては、その書法に別の文字体系を使用しているものもあります。例えば、英語とスペイン語はラテン文字を使用して書かれていますが、アラビア語とロシア語は他の文字（それぞれアラビア文字とキリル文字）を使用して書かれています。 Unicode の `Script` と `Script_Extensions` プロパティは、正規表現が、主に使用される文字体系 (`Script`) または文字体系の集合 (`Script_Extensions`) に従って文字に一致するようにするものです。

例えば、 `A` は `Latin` に、 `ε` は `Greek` に属します。

```js
const mixedCharacters = "aεЛ";

// この文字体系の正規の「長い」名前を使用
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Greek}/u); // ε

// Script プロパティの短い名前 sc を使用
mixedCharacters.match(/\p{Sc=Cyrillic}/u); // Л
```

より詳細には、 [Unicode 仕様書](https://unicode.org/reports/tr24/#Script)および[ECMAScript 仕様書の文字体系 (Script) 一覧表](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values).

ある文字が限られた文字体系で使用されている場合、 `Script` プロパティは「主要な」使用されている文字体系に対してのみ一致します。もし、「主要ではない」文字体系に基づいて文字を照合したい場合には、 `Script_Extensions` プロパティ（`Scx` と略します）を使用することができます。

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

JavaScript の正規表現では、[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)で、特に `\w` や `\d` を使用して文字や数字に一致させることも可能です。しかし、このような形式は _ラテン_ 文字体系の文字にしか一致しません（言い換えれば、 `a` から `z` と `A` から `Z` は `\w` に、`0` から `9` は `\d` に対応します）。[この例](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#looking_for_a_word_from_unicode_chars)に示すように、ラテン文字以外のテキストで作業するにはちょっと不便かもしれません。

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

## 関連情報

- [正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [数量詞](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)

- [`RegExp()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [`RegExp.prototype.unicode`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
- [Unicode character property — Wikipedia](https://en.wikipedia.org/wiki/Unicode_character_property)
- [A blog post from Axel Rauschmayer about Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html)
- [The Unicode document for Unicode properties](https://unicode.org/reports/tr18/#Categories)
- [tc39 Proposal on Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)
- [ECMAScript 仕様書の UnicodeMatchProperty](https://tc39.es/ecma262/multipage/text-processing.html#sec-runtime-semantics-unicodematchproperty-p)（英語）
