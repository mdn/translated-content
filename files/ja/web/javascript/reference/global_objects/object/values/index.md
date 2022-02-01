---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
tags:
  - JavaScript
  - メソッド
  - Object
  - リファレンス
  - Polyfill
browser-compat: javascript.builtins.Object.values
translation_of: Web/JavaScript/Reference/Global_Objects/Object/values
---
{{JSRef}}

**`Object.values()`** メソッドは、指定されたオブジェクトが持つ列挙可能なプロパティの値を、 {{jsxref("Statements/for...in", "for...in")}} ループで提供される場合と同じ順序で配列にして返します。 (違いは、 `for...in` ループではプロパティチェーン上のプロパティも同様に列挙するという点だけです。)

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## 構文

```js
Object.values(obj)
```

### 引数

- `obj`
  - : 返値となる列挙可能な自身のプロパティの値を持つオブジェクト。

### 返値

与えられたオブジェクトが所有する列挙可能なプロパティの値が入った配列。

## 解説

`Object.values()` は、`object` に直接存在する列挙可能な値が配列要素の文字列に対応した配列を返します。プロパティの順序はマニュアル操作でオブジェクト内のプロパティに対してループさせた時の順序と同じになります。

## ポリフィル

`Object.values` をネイティブで対応していない古い環境に対応するために、 [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) や [es-shims/Object.values](https://github.com/es-shims/Object.values) などのリポジトリーにポリフィルがあります。

## 例

### Object.values の使用

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 配列風オブジェクト
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// ランダムなキー順序を持つ配列風オブジェクト
// 数値のキーを使用すると、値はキーの番号順に返される
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

// 列挙可能でないプロパティ getFoo がある
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// オブジェクトでない引数はオブジェクトへと型強制される
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Object.values` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) にあります
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
