---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 3c33463072905e81ac620dd9780313369029b498
---

{{JSRef}}

**`unicodeSets`** は {{jsxref("RegExp")}} インスタンスのアクセサープロパティで、この正規表現に `v` フラグが使用されているかどうかを返します。

## 解説

`RegExp.prototype.unicodeSets` は `v` フラグが使用されている場合は `true` を、そうでない場合は `false` を返します。`v` フラグは [`u`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) フラグを「アップグレード」したもので、Unicode 関連の機能をより有効にするものです（`u` と `v` は同じ正規表現を互換性のない方法で解釈するので、両方のフラグを使用すると {{jsxref("SyntaxError")}} になります。）`v` フラグを使用すると、`u` フラグの説明で述べたすべての機能に加えて、以下の機能が得られます。

- [`\p`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) エスケープシーケンスは、文字だけでなく、文字列のプロパティにも一致します。
- [文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)構文がアップグレードされ、複数の Unicode 文字の照合だけでなく、交差、和集合、差集合の構文ができるようになります。
- 文字クラスの補集合の構文 `[^...]` は、一致結果を否定する代わりに補集合クラスを構築し、大文字小文字を区別しない照合との混乱を避けることができます。詳しくは [補集合クラスと大文字小文字を区別しない照合](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#補集合クラスと大文字小文字を区別しない照合)を参照してください。

一部の `u` モードの正規表現は `v` モードで無効になることがあります。具体的には、文字クラスの構文が異なり、文字通りに表示できない文字があります。詳しくは [`v` モード文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス)を参照してください。

> **メモ:** `v`モードは書記素クラスターを 1 文字として解釈しません。例えば、`/[🇺🇳]/v` は `"🇺"` に一致します。

`unicodeSets` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### unicodeSets プロパティの使用

```js
const regex = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;

console.log(regex.unicodeSets); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) on v8.dev (2022)
