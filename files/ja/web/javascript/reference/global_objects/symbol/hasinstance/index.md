---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`Symbol.hasInstance`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.hasInstance` を表します。{{jsxref("Operators/instanceof", "instanceof")}} 演算子は右辺オペランドに対して、コンストラクターオブジェクトがオブジェクトをそのインスタンスとして認識するかどうかを判断する際に使用されるメソッドを、このシンボルで探します。

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}

## 値

ウェルノウンシンボル `Symbol.hasInstance` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`instanceof` 演算子は、`object instanceof constructor` の返値を計算するために以下のアルゴリズムを使用します。

1. `constructor` に `[Symbol.hasInstance]()` メソッドがあった場合、`object` を最初のオブジェクトとして呼び出し、結果を[論理値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean##論理値への型強制)して返します。`constructor` がオブジェクトでない場合、または `constructor[Symbol.hasInstance]` が `null`、`undefined`、関数のいずれでもでない場合、{{jsxref("TypeError")}} が発生します。
2. それ以外の場合、`constructor` に `[Symbol.hasInstance]()` メソッドがない場合（`constructor[Symbol.hasInstance]` が `null` または `undefined`）、 [`Function.prototype[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) と同じアルゴリズムを使用して結果を決定します。`constructor` が関数でない場合、{{jsxref("TypeError")}} が発生します。

Because all functions inherit from `Function.prototype` by default, most of the time, the [`Function.prototype[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) method specifies the behavior of `instanceof` when the right-hand side is a function.

## 例

### 独自のインスタンスでの動作

たとえば、次のようにして `instanceof` の独自の動作を実装することができます。

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() {}
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value(instance) {
    return Array.isArray(instance);
  },
});
console.log([] instanceof MyArray); // true
```

### オブジェクトのインスタンスを確認する

`instanceof` キーワードを使ってオブジェクトがクラスのインスタンスであるかどうかを確認するのと同じ方法で、`Symbol.hasInstance` を使って確認することもできます。

```js
class Animal {
  constructor() {}
}

const cat = new Animal();

console.log(Animal[Symbol.hasInstance](cat)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`Function.prototype[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
