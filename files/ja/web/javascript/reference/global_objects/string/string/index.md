---
title: String() コンストラクター
short-title: String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`String`** コンストラクターは新しい {{jsxref("String")}} オブジェクトを生成します。関数として呼び出された場合は、文字列型のプリミティブ値を返します。

## 構文

```js-nolint
new String(thing)
String(thing)
```

> [!NOTE]
> `String()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

- `thing`
  - : 文字列に変換するもの。

### 返値

`String()` が関数として（[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) なしで）呼び出された場合、 `value` が[文字列プリミティブに変換されたもの](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列への変換)を返します。特に、[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)値は、例外を発生させるのではなく、 `"Symbol(description)"` に変換されます。ここで、`description` は、このシンボルのの[説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)です。

`String` がコンストラクターとして（`new` 付きで）呼び出された場合、 `value` を（シンボルの特別扱いなしで）文字列プリミティブに変換し、 {{jsxref("String")}} オブジェクトでラップして返します。これはプリミティブでは**ありません**。

> [!WARNING]
> `String` をコンストラクターとして使用する場面はほとんど見つからないでしょう。

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

ここでは、この関数は約束通り（{{Glossary("primitive", "プリミティブ")}}型の）文字列を生成します。
しかし、コンストラクターは String 型（オブジェクトのラッパー）のインスタンスを生成しますので、 String コンストラクターを使用するのは稀だといえます。

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

- [数値と文字列](/ja/docs/Web/JavaScript/Guide/Numbers_and_strings)ガイド
