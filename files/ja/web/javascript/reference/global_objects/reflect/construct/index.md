---
title: Reflect.construct()
short-title: construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Reflect.construct()`** は静的メソッドで、{{jsxref("Operators/new", "new")}} 演算子のように、ただし関数として動作します。これは `new target(...args)` の呼び出しと同等です。さらに、別の　[`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target)　値を指定することもすることができます。

{{InteractiveExample("JavaScript デモ: Reflect.construct()", "taller")}}

```js interactive-example
function func1(a, b, c) {
  this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);
const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// 予想される結果: 6

console.log(object1.sum);
// 予想される結果: 6
```

## 構文

```js-nolint
Reflect.construct(target, argumentsList)
Reflect.construct(target, argumentsList, newTarget)
```

### 引数

- `target`
  - : 呼び出し対象の関数。
- `argumentsList`
  - : `target` を呼び出す際の引数を指定する[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)。
- `newTarget` {{optional_inline}}
  - : `target` 内の [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) 式の値。デフォルトは `target` です。一般的に（[例を参照](#new.target_の変更)）、`target` はオブジェクトを初期化するロジックを指定し、`newTarget.prototype` は構築されたオブジェクトのプロトタイプを指定します。

### 返値

`target` (または、もしあれば `newTarget`) の新しいインスタンスで、 `target` に `argumentsList` を渡してコンストラクターとして呼び出すことで初期化します。

### 例外

- {{jsxref("TypeError")}}
  - : `target` または `newTarget` がコンストラクターではない場合、または `argumentsList` がオブジェクトではない場合に発生します。

## 解説

`Reflect.construct()` はコンストラクター呼び出しの反射的意味づけを提供します。つまり、`Reflect.construct(target, argumentsList, newTarget)` は意味的に次のものと同等です。

```js
new target(...argumentsList);
```

`new` 演算子を使用する場合、`target` と `newTarget` は常に同じコンストラクターであることに注意してください。ただし、`Reflect.construct()` を使用すると、異なる [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) 値を渡すことが可能です。概念的には、`newTarget` は `new` が呼び出された関数であり、`newTarget.prototype` が構築されたオブジェクトのプロトタイプとなります。一方、`target` はオブジェクトを初期化するために実際に実行されるコンストラクターです。例えば、クラス継承において `new.target` は現在実行中のコンストラクターとは異なる場合もあります。

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {}

new B(); // "B"
```

`Reflect.construct()` によって、可変長引数を指定してコンストラクターを呼び出すことができます。（これは通常のコンストラクター呼び出しで[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を組み合わせて使用することでも可能です。）

```js
const obj = new Foo(...args);
const obj = Reflect.construct(Foo, args);
```

`Reflect.construct()` は `target` の `[[Construct]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods)を呼び出します。

## 例

### Reflect.construct() の使用

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### new.target の変更

`newTarget` が渡された場合、コンストラクター内で `new.target` の値を変更します。生成されるオブジェクトは `target` ではなく `newTarget` のインスタンスとなります。

```js
function OneClass() {
  console.log("OneClass executed");
  console.log(`new.target is ${new.target.name}`);
}

function OtherClass() {
  console.log("OtherClass executed");
  console.log(`new.target is ${new.target.name}`);
}

const obj1 = Reflect.construct(OneClass, []);
// ログ出力:
// OneClass executed
// new.target is OneClass
console.log(obj1 instanceof OneClass); // true

const obj2 = Reflect.construct(OneClass, [], OtherClass);
// ログ出力:
// OneClass executed
// new.target is OtherClass
console.log(obj2 instanceof OtherClass); // true
console.log(obj2 instanceof OneClass); // false
```

もちろん、構築されたオブジェクトのプロトタイプチェーンについては、コンストラクターの実装に依存するため、確固たる保証はありません。例えば、`target` コンストラクターがオブジェクトを返す場合、`newTarget` の値に関わらず、そのオブジェクトが構築されたオブジェクトとなります。`target` が `construct` トラップを持つプロキシーである場合、そのトラップが構築プロセスを完全に制御します。

```js
function OneClass() {
  return { name: "one" };
}

function OtherClass() {
  return { name: "other" };
}

const obj1 = Reflect.construct(OneClass, [], OtherClass);
console.log(obj1.name); // 'one'
console.log(obj1 instanceof OneClass); // false
console.log(obj1 instanceof OtherClass); // false
```

有効な `new.target` は、[`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) プロパティを持つコンストラクター関数であるべきですが、後者は強制されません。`prototype` プロパティの値がオブジェクトでない場合、初期化されたオブジェクトは `Object.prototype` から継承します。

```js
function OneClass() {
  console.log("OneClass executed");
  console.log(`new.target is ${new.target.name}`);
}

function OtherClass() {
  console.log("OtherClass executed");
  console.log(`new.target is ${new.target.name}`);
}

OtherClass.prototype = null;

const obj = Reflect.construct(OneClass, [], OtherClass);
// ログ出力:
// OneClass executed
// new.target is OtherClass
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### Reflect.construct() と Object.create()

`Reflect` が導入される前は、オブジェクトを構築するのにコンストラクターとプロトタイプの任意の組み合わせで {{jsxref("Object.create()")}} を使用して構築することができました。

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

const args = [];
const obj1 = Reflect.construct(OneClass, args, OtherClass);
const obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

この 2 つの手法の最終結果は同じですが、その過程に重要な違いがあります。 `Object.create()` と {{jsxref("Function.prototype.apply()")}} を使用する場合、 `new.target` 演算子はコンストラクター内で `undefined` を返します。これは、 `new` 演算子を用いないためです。（実際には、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply) の意味づけを使用しており、`construct` ではありません。ただし、通常の関数はほぼ同じように動作します。）

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

const obj1 = Reflect.construct(OneClass, args);
// ログ出力:
// OneClass
// function OneClass { ... }

const obj2 = Reflect.construct(OneClass, args, OtherClass);
// ログ出力:
// OneClass
// function OtherClass { ... }

const obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
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
- [`handler.construct()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
