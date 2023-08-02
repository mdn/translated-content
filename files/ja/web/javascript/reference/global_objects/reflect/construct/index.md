---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---

{{JSRef}}

静的な **`Reflect.construct()`** メソッドは {{jsxref("Operators/new", "new")}} 演算子のように、ただし関数として動作します。これは `new target(...args)` の呼び出しと同等です。このメソッドはオプションを追加することで、別なプロトタイプを指定することができます。

{{EmbedInteractiveExample("pages/js/reflect-construct.html", "taller")}}

## 構文

```js
Reflect.construct(target, argumentsList);
Reflect.construct(target, argumentsList, newTarget);
```

### 引数

- `target`
  - : 呼び出し対象の関数。
- `argumentsList`
  - : 配列風オブジェクトで、 `target` の呼び出しの引数を指定する。
- `newTarget` {{optional_inline}}
  - : プロトタイプを使用するコンストラクター。 [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) も参照してください。 `newTarget` が存在しない場合は、既定値は `target` になります。

### 返値

`target` (または、もしあれば `newTarget`) の新しいインスタンスで、 `target` に `argumentsList` を渡してコンストラクターとして呼び出すことで初期化します。

### 例外

{{jsxref("TypeError")}}: `target` または `newTarget` がコンストラクターではない場合。

## 解説

`Reflect.construct()` によって、可変長引数を指定してコンストラクターを呼び出すことができます。 (これは[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)と[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)を組み合わせて使用することでも可能です。)

```js
let obj = new Foo(...args);
let obj = Reflect.construct(Foo, args);
```

### `Reflect.construct()` と `Object.create()`

`Reflect` が導入される前は、オブジェクトを構築するのにコンストラクターとプロトタイプの任意の組み合わせで {{jsxref("Object.create()")}} を使用して構築することができました。

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

// Calling this:
let obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
let obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true

//Another example to demonstrate below:

function func1(a, b, c, d) {
  console.log(arguments[3]);
}

function func2(d, e, f, g) {
  console.log(arguments[3]);
}

let obj1 = Reflect.construct(func1, ["I", "Love", "my", "India"]);
obj1;
```

この 2 つの手法の最終結果は同じですが、その過程に重要な違いがあります。 `Object.create()` と {{jsxref("Function.prototype.apply()")}} を使用する場合、 `new.target` 演算子はコンストラクター内で `undefined` を返します。これは、 `new` 演算子を用いないためです。

一方、 `Reflect.construct()` を呼び出す場合は、 `new.target` 演算子は、提供されていれば `newTarget` を指し、そうでなければ `target` を指します。

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

let obj1 = Reflect.construct(OneClass, args);
// Output:
//     OneClass
//     function OneClass { ... }

let obj2 = Reflect.construct(OneClass, args, OtherClass);
// Output:
//     OneClass
//     function OtherClass { ... }

let obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## 例

### `Reflect.construct()` の使用

```js
let d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Reflect.construct` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-reflect) にあります
- {{jsxref("Reflect")}}
- {{jsxref("Operators/new", "new")}}
- [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target)
