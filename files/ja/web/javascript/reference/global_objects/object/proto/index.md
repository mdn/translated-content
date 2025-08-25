---
title: Object.prototype.__proto__
short-title: __proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!WARNING]
> オブジェクトの `[[Prototype]]` を変更することは、現行の JavaScript エンジンがプロパティアクセスを最適化する性質上、どのブラウザーや JavaScript エンジンでも現在とても遅い処理となります。さらに、継承を変更することの効果は微妙で広範囲に及び、 `obj.__proto__ = ...` 文に費やされる時間に限らず、`[[Prototype]]` が変更されたオブジェクトにアクセスする**あらゆる**コードに及ぶ可能性があります。詳しくは [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes) で説明されています。

> [!NOTE]
> `__proto__` を使用することは議論の余地があり、推奨されません。その存在と正確な動作は、ウェブの互換性を確実に保持するための古い機能として標準化されただけであり、セキュリティ上のいくつかの課題と足かせを表示しています。対応をよりよくするためには、 {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} や {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}} を推奨します。

**`__proto__`** は {{jsxref("Object")}} のアクセサープロパティ (ゲッター関数およびセッター関数) で、アクセスされるオブジェクトの内部の [`[[Prototype]]`](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) （オブジェクトまたは {{jsxref("Operators/null", "null")}} のどちらか）を暴露します。

オブジェクトリテラル定義内で `__proto__` プロパティを使用することで、オブジェクトの作成時にオブジェクト `[[Prototype]]` を設定することができ、 {{jsxref("Object.create()")}} の代わりになります。[オブジェクト初期化子 / リテラルの構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を参照してください。この構文は標準であり、実装に最適化されており、 `Object.prototype.__proto__` とは全く異なります。

## 構文

```js-nolint
obj.__proto__
```

### 返値

ゲッターとして使用された場合、オブジェクトの `[[Prototype]]` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : [拡張不可](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)のオブジェクト、または[不変プロトタイプエキゾチックオブジェクト](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects)、例えば `Object.prototype` や [`window`](/ja/docs/Web/API/Window) などのプロトタイプを設定しようとすると発生します。

## 解説

`__proto__` ゲッター関数はオブジェクトの内部の `[[Prototype]]` の値を外部に公開します。オブジェクトリテラルを使用して生成されたオブジェクトでは（[プロトタイプセッター](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#プロトタイプセッター)構文を使用しない限り）、この値は `Object.prototype` です。配列リテラルを使用して作成したオブジェクトの場合、この値は [`Array.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) です。関数の場合、この値は {{jsxref("Function", "Function.prototype")}} です。プロトタイプチェーンについては、[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)で詳しく説明しています。

`__proto__` のセッターでオブジェクトの `[[Prototype]]` を変更することができます。与えられた値はオブジェクト、または {{jsxref("Operators/null", "null")}} である必要があります。他の値が与えられた場合は何もしません。

{{jsxref("Object.getPrototypeOf()")}} や {{jsxref("Object.setPrototypeOf()")}} は `Object` の静的プロパティとして常に利用でき、常に `[[Prototype]]` の内部プロパティを反映しますが、 `__proto__` プロパティはすべてのオブジェクトのプロパティとして常に存在するわけではなく、結果として `[[Prototype]]` を確実に反映するわけではありません。

`__proto__` プロパティは、ゲッター関数とセッター関数からなる `Object.prototype` 上のアクセサープロパティです。最終的にの `Object.prototype` を参照する `__proto__` に対してのプロパティアクセスはこのプロパティを探します。しかし、 `Object.prototype` を参照しないアクセスはこのプロパティを探しません。 `Object.prototype` が参照される前にいくつかの他の `__proto__` プロパティが見つけられた場合、そのプロパティは、 `Object.prototype` 上で見つけられたプロパティを隠します。

[`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)は、 `__proto__` アクセサープロパティを含め、 `Object.prototype` からプロパティを継承しないため、このようなオブジェクトで `__proto__` を読み込もうとすると、オブジェクトの実際の `[[Prototype]]` に関係なく、値は常に `undefined` となり、 `__proto__` に代入すると、オブジェクトのプロトタイプを設定する代わりに、 `__proto__` という新しいプロパティを作成することになります。さらに、 `__proto__` は、セッターを発生させることなく、 {{jsxref("Object.defineProperty()")}} によって、任意のオブジェクトインスタンス上の自分自身でプロパティとして再定義することができます。この場合、 `__proto__` は `[[Prototype]]` のアクセサーにできなくなりました。できれば、オブジェクトの `[[Prototype]]` を設定したり取得したりするには、常に {{jsxref("Object.getPrototypeOf()")}} と {{jsxref("Object.setPrototypeOf()")}} を推奨します。

## 例

### \_\_proto\_\_ の使用

```js
function Circle() {}
const shape = {};
const circle = new Circle();

// オブジェクトプロトタイプの設定
// 非推奨。 参考用です。 実際のコードで使用しないでください。
shape.__proto__ = circle;

// オブジェクトプロトタイプの取得
console.log(shape.__proto__ === Circle); // false
```

```js
function ShapeA() {}
const ShapeB = {
  a() {
    console.log("aaa");
  },
};

ShapeA.prototype.__proto__ = ShapeB;
console.log(ShapeA.prototype.__proto__); // { a: [Function: a] }

const shapeA = new ShapeA();
shapeA.a(); // aaa
console.log(ShapeA.prototype === shapeA.__proto__); // true
```

```js
function ShapeC() {}
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false
```

```js
function Test() {}
Test.prototype.myName = function () {
  console.log("myName");
};

const test = new Test();
console.log(test.__proto__ === Test.prototype); // true
test.myName(); // myName

const obj = {};
obj.__proto__ = Test.prototype;
obj.myName(); // myName
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
