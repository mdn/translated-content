---
title: String() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{JSRef}}

**`String`** コンストラクターは新しい {{jsxref("String")}} オブジェクトを生成します。関数として呼び出された場合は、文字列型のプリミティブ値を返します。

## 構文

```js-nolint
new String(thing)
String(thing)
```

> **メモ:** `String()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

- `thing`
  - : 文字列に変換するもの。

### 返値

`String` がコンストラクターとして（`new` 付きで）呼び出された場合、{{jsxref("String")}} オブジェクトを生成します。これはプリミティブでは**ありません**。

`String` が関数として呼び出された場合、引数を文字列プリミティブに変換します。[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)値は例外を発生させず、`"Symbol(description)"` の形に変換され、この `description` はそのシンボルの [description](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) となります。

> **警告:** `String` をコンストラクターとして使用する場面はほとんど見つからないでしょう。

## 例

### String コンストラクターと String 関数

String 関数と String コンストラクターは異なる結果を生み出します。

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

ここでは、この関数は約束通り ({{Glossary("primitive", "プリミティブ")}}型の) 文字列を生成します。しかし、コンストラクターは String 型 (オブジェクトのラッパー) のインスタンスを生成しますので、 String コンストラクターを使用するのは稀だといえます。

### String() を用いてシンボルを文字列化

`String()` はシンボルを文字列に例外を発生させることなく変換することができる唯一の方法です。とても明示的だからです。

```js example-bad
const sym = Symbol("example");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("example");
String(sym); // "Symbol(example)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドのテキスト処理](/ja/docs/Web/JavaScript/Guide/Text_formatting)
