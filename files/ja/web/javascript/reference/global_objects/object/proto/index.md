---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

{{JSRef}}{{Deprecated_header}}

> **警告:** オブジェクトの `[[Prototype]]` を変更することは、最新の JavaScript エンジンがプロパティアクセスを最適化する仕組み上、**_すべての_**ブラウザーや JavaScript エンジンにおいて、とても低速な操作となります。プロトタイプの継承関係を変更することによる性能上の影響は微細で広範囲にわたり、単に `obj.__proto__ = ...` という文の実行時間に留まらず、 `[[Prototype]]` が変更された**_いずれかの_**オブジェクトへのアクセスを持つ**_あらゆる_**コードに及ぶ可能性があります。性能を気にしている場合、オブジェクトの `[[Prototype]]` の変更は避けるべきです。代わりに、 {{JSxRef("Object.create()")}} を使用して求める `[[Prototype]]` をもつオブジェクトを新たに生成してください。

> **警告:** `Object.prototype.__proto__` は現時点でほとんどのブラウザーが対応していますが、そのプロパティの存在と正確な動作は、ウェブブラウザーの互換性を確保するためのレガシー機能として、 ECMAScript 2015 で初めて標準化されました。より広く対応させるには、代わりに {{JSxRef("Object.getPrototypeOf()")}} を使用してください。

`__proto__` は {{JSxRef("Object.prototype")}} のアクセサープロパティ (ゲッター関数およびセッター関数) で、アクセスされるオブジェクトの内部の `[[Prototype]]` (オブジェクトまたは {{JSxRef("Global_Objects/null", "null")}} のどちらか) を暴露します。

`__proto__` の使用は、論争の的になり、推奨されていません。もともと ECMAScript 言語仕様には含まれていませんでしたが、現在のブラウザーでは結局それを実装しています。最近になって、 `__proto__` プロパティはウェブブラウザー間の互換性を保つために ECMAScript2015 の仕様で標準化されたので、将来的には対応されることになります。これは非推奨扱いで、代わりに {{JSxRef("Object.getPrototypeOf")}}/{{JSxRef("Reflect.getPrototypeOf")}} および {{JSxRef("Object.setPrototypeOf")}}/{{JSxRef("Reflect.setPrototypeOf")}} を推奨しています (とはいえ、オブジェクトの `[[Prototype]]` の設定は、性能が気になる場合には避けるべき低速の操作ですが)。

また、 `__proto__` プロパティは、生成時に `[[Prototype]]` オブジェクトを設定するために {{JSxRef("Object.create()")}} の代わりとしてもオブジェクトリテラルの定義で使用されます。参照: [オブジェクト初期化子 / リテラル構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## 解説

`__proto__` ゲッター関数はオブジェクトの内部の `[[Prototype]]` の値を外部に公開します。オブジェクトリテラルを使用して生成されたオブジェクトでは、この値は {{JSxRef("Object.prototype")}} です。配列リテラルを使用して生成されたオブジェクトでは、この値は {{JSxRef("Array.prototype")}} です。関数では、この値は {{JSxRef("Function.prototype")}} です。 `new fun` を使用して生成されたオブジェクトでは、 `fun` が JavaScript の ({{JSxRef("Array")}}、{{JSxRef("Boolean")}}、{{JSxRef("Date")}}、 {{JSxRef("Number")}}、 {{JSxRef("Object")}}、 {{JSxRef("String")}} などによって提供された内蔵コンストラクター関数のうちの一つである場合は — JavaScript の進化によって追加された新しいコンストラクタを含みます)、この値は常に `fun.prototype` です。 `new fun` を使用して生成されたオブジェクトでは、 `fun` がスクリプトで定義された関数である場合、この値は常に `fun.prototype` の値です。 (すなわち、コンストラクターがほかのオブジェクトを明示的に返さない場合、または `fun.prototype` に再代入されていない場合)。

`__proto__` のセッターでオブジェクトの `[[Prototype]]` を変更することができます。オブジェクトは、 {{JSxRef("Object.isExtensible()")}} に応じて拡張可能である必要があります。拡張可能ではない場合、 {{JSxRef("Global_Objects/TypeError", "TypeError")}} が発生します。与えられた値はオブジェクト、または {{JSxRef("Global_Objects/null", "null")}} である必要があります。他の値が与えられた場合は何もしません。

プロトタイプが継承のためにどのように使用されるかを理解するには、ガイド記事の[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)を参照してください。

`__proto__` プロパティは、ゲッター関数とセッター関数からなる {{JSxRef("Object")}} 上の簡単なアクセサープロパティです。最終的にの {{JSxRef("Object")}} を参照する `__proto__` に対してのプロパティアクセスはこのプロパティを探します。しかし、 {{JSxRef("Object")}} を参照しないアクセスはこのプロパティを探しません。 {{JSxRef("Object")}} が参照される前にいくつかの他の `__proto__` プロパティが見つけられた場合、そのプロパティは、 {{JSxRef("Object")}} 上で見つけられたプロパティを隠します。

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

const ShapeA = function () {};
const ShapeB = {
  a() {
    console.log("aaa");
  },
};
console.log((ShapeA.prototype.__proto__ = ShapeB));

const shapea = new ShapeA();
shapea.a(); // aaa
console.log(ShapeA.prototype === shapea.__proto__); // true

// または
const ShapeC = function () {};
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false

// または
function Test() {}
Test.prototype.myname = function () {
  console.log("myname");
};

const a = new Test();
console.log(a.__proto__ === Test.prototype); // true
a.myname(); // myname

// または
const fn = function () {};
fn.prototype.myname = function () {
  console.log("myname");
};

var obj = {
  __proto__: fn.prototype,
};

obj.myname(); // myname
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("Object.prototype.isPrototypeOf()")}}
- {{JSxRef("Object.getPrototypeOf()")}}
- {{JSxRef("Object.setPrototypeOf()")}}
