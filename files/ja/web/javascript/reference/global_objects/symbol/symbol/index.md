---
title: Symbol() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: 6a557b06944a0a6eaa1e9e352fc58b973b2e03a1
---

{{JSRef}}

**`Symbol()`** 関数は、シンボル型のプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## 構文

```js-nolint
Symbol()
Symbol(description)
```

> **メモ:** `Symbol()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きで呼び出すことができません。`new` を付けて構築しようとすると、{{jsxref("TypeError")}} が発生します。

### 引数

- `description` {{optional_inline}}
  - : 文字列。デバッグには使用できるこのシンボルの説明ですが、シンボル自体にはアクセスできません。

## 例

### シンボルの作成

新しいプリミティブのシンボルを作成するには、解説にあるように `Symbol()` を任意の文字列とともに書きます。

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

上記のコードは 3 つの新しいシンボルを生成します。なお、`Symbol("foo")` は `"foo"` という文字列をシンボルに変換するわけではないことに注意してください。毎回新しいシンボルを生成します。

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

以下のように {{jsxref("Operators/new", "new")}} 演算子を伴う構文では、 {{jsxref("TypeError")}} が発生します。

```js example-bad
const sym = new Symbol(); // TypeError
```

一般的に他のプリミティブデータ型は明示的なラッパーオブジェクトを作成することは可能ですが（例えば、 `new Boolean`, `new String`, `new Number`）、新しいシンボル値の代わりに明示的に `Symbol` ラッパーオブジェクトを作成することはできません。

本当に `Symbol` のラッパーオブジェクトを生成したい場合は、 `Object()` 関数を使用することができます。

```js
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
