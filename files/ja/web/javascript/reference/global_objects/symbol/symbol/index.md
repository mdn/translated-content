---
title: Symbol() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
---

{{JSRef}}

`Symbol()` コンストラクターは **symbol** 型の値を返しますが、 "`new Symbol()`" という構文に対応しておらず、サブクラス化を意図していないため、コンストラクターとしては不完全です。 `class` 定義の [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) 句の値として使用することもできますが、 [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) の呼び出しを行うと例外が発生します。

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## 構文

```
Symbol([description])
```

### 引数

- `description` {{optional_inline}}
  - : 文字列。デバッグには使用できるこのシンボルの説明ですが、シンボル自体にはアクセスできません。

## 例

### シンボルの作成

新しいプリミティブであるシンボルを生成するには、解説にあるように `Symbol()` を任意の文字列とともに書きます。

```js
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
```

上記のコードは 3 つの新しいシンボルを生成します。なお、 `Symbol("foo")` は `"foo"` と言う文字列を強制的に記号にするわけではないことに注意してください。毎回新しいシンボルを生成します。

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol(...)

以下のように {{jsxref("Operators/new", "new")}} 演算子を伴う構文では、 {{jsxref("TypeError")}} が発生します。

```js
let sym = new Symbol(); // TypeError
```

このため、新しいシンボル値の代わりに明示的なシンボルラッパーオブジェクトを作成することができず、プリミティブなデータ型の周りに明示的なラッパーオブジェクトを作成することは一般的に可能です (例えば、 `new Boolean`, `new String`, `new Number` です)。

本当に `Symbol` のラッパーオブジェクトを生成したい場合は、 `Object()` 関数を使用することができます。

```js
let sym = Symbol("foo");
let symObj = Object(sym);
typeof sym; // => "symbol"
typeof symObj; // => "object"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.Symbol")}}

## 関連情報

- [用語集: Symbol データ型](/ja/docs/Glossary/Symbol)
