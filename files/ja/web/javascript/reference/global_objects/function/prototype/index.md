---
title: "Function: prototype"
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`prototype`** は {{jsxref("Function")}} インスタンスのデータプロパティで、関数が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子でコンストラクターとして使用されたときに使用されます。これは新しいオブジェクトのプロトタイプになります。

> [!NOTE]
> すべての {{jsxref("Function")}} オブジェクトが `prototype` プロパティを持つとは限りません。[解説](#解説)を参照してください。

## 値

オブジェクトです。

{{js_property_attributes(1, 0, 0)}}

> **メモ:** [クラス](/ja/docs/Web/JavaScript/Reference/Classes)は関数の一種なので、ここで説明するほとんどの内容はクラスの `prototype` プロパティにも当てはまります。唯一の顕著な違いは、クラスの `prototype` プロパティは書き込み不可であるということです。

## 解説

関数が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) で呼び出されると、そのコンストラクターの `prototype` プロパティが、結果オブジェクトのプロトタイプになります。

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

「[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#コンストラクター)」に、コンストラクター関数の `prototype` プロパティと、結果オブジェクトのプロトタイプ間の操作に関する詳しい情報があります。

ある関数に `prototype` プロパティがあるというだけでは、コンストラクターとして認められるには不十分です。[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)は `prototype` プロパティを持っていますがが、 `new` で呼び出すことはできません。

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

代わりに、ジェネレーター関数の `prototype` プロパティは、 `new` なしで呼び出されたときに使われます。`prototype`プロパティは、返される [`Generator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator) オブジェクトのプロトタイプとなります。

さらに、一部の関数は `prototype` を持っていても、 `new` で呼び出された場合は無条件に例外を送出します。例えば、 [`Symbol()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) 関数や [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数は、 `new` で呼び出された場合には例外を発生させます。 `Symbol.prototype` と `BigInt.prototype` は、プリミティブ値のメソッドを提供するだけのためにあるので、ラッパーオブジェクトが直接構築されるべきではないからです。

次の関数には `prototype` がなく、たとえ後で `prototype` プロパティを手動で割り当てたとしても、コンストラクターとしては不適格です。

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
async function asyncFunction() {}
```

以下のものは有効なコンストラクターであり、 `prototype` があります。

```js
class Class {}
function fn() {}
```

[バインドされた関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)は `prototype` プロパティを持っていませんが、構築することができる場合があります。 構築された場合、代わりにターゲット関数が構築され、ターゲット関数が構築可能であれば、通常のインスタンスを返します。

```js
const boundFunction = function () {}.bind(null);
```

関数の `prototype` プロパティは、既定では、1つのプロパティ [`constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) を持つプレーンオブジェクトです。 `constructor` プロパティは書き込み可能で、列挙不可、構成可能なプロパティです。

関数の `prototype` が `Object` 以外の何かに再代入されている場合、関数が `new` で呼び出されると、返されるオブジェクトのプロトタイプは `Object.prototype` になります。（言い換えれば、`new` は `prototype` プロパティを無視し、プレーンなオブジェクトを構築します。）

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

## 例

### prototype プロパティを変更することで、すべてのインスタンスのプロトタイプを変更

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### クラスの prototype プロパティに、メソッド以外のプロパティを追加

[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)は、各インスタンスにプロパティを追加します。クラスメソッドは、プロトタイプに「関数」プロパティを宣言します。しかし、プロトタイプに「関数」以外のプロパティを追加する方法はありません。すべてのインスタンス間で静的データを共有したい場合（例えば、 [`Error.prototype.name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/name) はすべてのエラーインスタンスで同じです）、クラスの `prototype` に手動で割り当てることができます。

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

これは、クラスが初期化される際に呼び出される[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)を使用することで、より人間に分かりやすくにすることができます。

```js
class Dog {
  static {
    Dog.prototype.species = "dog";
  }
  constructor(name) {
    this.name = name;
  }
}

console.log(new Dog("Jack").species); // "dog"
```

## 仕様書

{{Specifications}}

## 関連情報

- {{jsxref("Function")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#コンストラクター)
