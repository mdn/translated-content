---
title: Symbol (シンボル)
slug: Glossary/Symbol
tags:
  - データ型
  - ECMAScript 2015
  - 用語集
  - JavaScript
  - Sharing
  - Symbol
translation_of: Glossary/Symbol
---
{{Glossary("JavaScript")}} では、シンボルは{{Glossary("Primitive", "プリミティブ値")}}です。

**Symbol** データ型を持つ値は「シンボル値」として見ることができます。 JavaScript の実行時環境では、シンボル値は {{jsxref("Symbol")}} 関数を呼び出すことで生成され、動的に無名の一意の値を生み出します。シンボルはオブジェクトプロパティとして使用されることがあります。

Symbol は任意で説明文を持つことができますが、これはデバッグ目的のみに利用されます。

**Symbol** 値は固有の識別子を表します。例えば以下のように使用します。

```js
// 2 つのシンボルを同じ説明文で使用
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log(Sym1 === Sym2) // "false" を返す
// シンボルは固有であることが保証されます。
// 同じ説明文でたくさんのシンボルが生成されても、
// 異なる値を持ちます。
```

> **Note:** Ruby (または他の言語) の _"symbols"_ と呼ばれる機能をよくご存知であれば、間違えないでください。 JavaScript のシンボルは異なります。

_Symbol_ 型は ECMAScript 2015 の新機能であり、 ECMAScript 5 にはシンボルに相当するものはありません。

プログラミング言語によっては、シンボルデータ型は「アトム」と呼ばれています。

### シンボルは文字列に「自動変換」されない

JavaScript の大部分の値は文字列への暗黙的な返還に対応しています。例えば `alert` はほぼすべての値で表示することができ、動作します。シンボルは特殊です。自動変換は行われません。

例を示します。

```js
let Sym = Symbol("Sym")
alert(Sym)  // TypeError: Cannot convert a Symbol value to a string
```

これは混合しないための「言語ガード」で、これは文字列とシンボルが根本的に異なるため、そして他の型に変換するべきものではないためです。

本当にシンボルを表示したいのであれば、 `.toString()` を呼び出す必要があります。

```js
let Sym = Symbol("Sym")
alert(Sym.toString())  // Symbol(Sym), now it works
```

または、 `symbol.description` プロパティを使用して、説明文を取得することができます。

```js
let _Sym = Symbol("Sym");

alert(_Sym.description); // Sym
```

### Well-known symbol

{{jsxref("Symbol")}} クラスには、 _well-known symbols_ と呼ばれる定数があります。これらのシンボルによって、 JavaScript がオブジェクトをどのように扱うかを、プロパティキーとして使用することで構成することができます。

well-known symbol の例としては、配列風オブジェクトのための {{jsxref("Symbol.iterator")}}、文字列オブジェクトのための {{jsxref("Symbol.search")}} などがあります。

仕様書の [Well-known symbol](https://tc39.github.io/ecma262/#sec-well-known-symbols) の表に挙げられているものは次の通りです。

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- …など。

### グローバルシンボルレジストリー

グローバルシンボルレジストリーを扱うメソッドは {{jsxref("Symbol.for()")}} および {{jsxref("Symbol.keyFor()")}} があります。これらは、グローバルシンボルテーブル（または「レジストリー」）と実行時環境の間を仲介します。シンボルレジストリーは、主に JavaScript コンパイラーインフラストラクチャが構築しており、その中のシンボルの内容は、 JavaScript 実行時インフラストラクチャでは上記のメソッド以外で扱えません。

`Symbol.for(tokenString)` メソッドはレジストリー内のシンボル値を返し、 `Symbol.keyFor(symbolValue)` メソッドはレジストリーからトークンの文字列を返します。この二つは対照的で、下記の結果は `true` です。

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString" // true
```

## 関連情報

- Wikipedia の [Symbol (programming)](https://en.wikipedia.org/wiki/Symbol_(programming)) (英語)
- [JavaScript データ型とデータ構造](/ja/docs/Web/JavaScript/Data_structures)
- [Symbols in ECMAScript 6](https://2ality.com/2014/12/es6-symbols.html)
- {{jsxref("Symbol")}} （MDN JS リファレンス）
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [MDN Web Docs 用語集](/ja/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("Primitive")}}
