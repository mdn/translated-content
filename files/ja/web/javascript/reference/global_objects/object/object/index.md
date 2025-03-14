---
title: Object() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: 688f606b78fb7e375e5680cc1ae49c5b9d0bc0ea
---

{{JSRef}}

**`Object()`** コンストラクターは、入力されたものをオブジェクトに変換します。その動作は入力したものの型によって異なります。

## 構文

```js-nolint
new Object()
new Object(value)

Object()
Object(value)
```

> **メモ:** `Object()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてもつけなくても呼び出すことができますが、一部の効果が異なることがあります。[返値](#返値)を参照してください。

### 引数

- `value` {{optional_inline}}
  - : 任意の値。

### 返値

`Object()` コンストラクター自体がが呼び出された場合や構築された場合、返値はオブジェクトになります。

- 値が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または {{jsxref("undefined")}} の場合は、空のオブジェクトを作成して返します。
- 値がすでにオブジェクトである場合は、その値を返します。
- そうでない場合は、指定された値に対応する型のオブジェクトを返します。例えば、長整数型プリミティブを渡すと、 {{jsxref("BigInt")}} ラッパーオブジェクトを返します。

`Object()` が構築され、 [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) が `Object` コンストラクター自体でない場合、動作は少し異なります。引数の値は無視されます。これは例えば、 [`Object` を継承](/ja/docs/Web/JavaScript/Reference/Classes/extends#object_の拡張)したクラスのコンストラクターで、 `Object()` が [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を介して暗黙的に呼び出された場合に発生することがあります。この場合、たとえ `super()` に数値を渡しても、コンストラクター内の `this` 値は {{jsxref("Number")}} インスタンスにはなりません。

## 例

### 新しい Object の生成

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### `undefined` や `null` 型を指定して `Object` を使用

以下の例は、空の `Object` オブジェクトを `o` に格納します。

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

### BigInt や Symbol のラッパーオブジェクトの取得

{{jsxref("BigInt/BigInt", "BigInt()")}} および {{jsxref("Symbol/Symbol", "Symbol()")}} コンストラクターは、 `new` で呼び出されるとエラーを発生します。これは、プリミティブ値ではなくラッパーオブジェクトを作成してしまうというよくある間違いを防ぐためです。これらの型のラッパーオブジェクトを作成する唯一の方法は、これらの型で `Object()` を呼び出すことです。

```js
const numberObj = new Number(1);
console.log(typeof numberObj); // "object"

const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"

const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
