---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`Object.create()`** 静的メソッドは、既存のオブジェクトを新しく生成されるオブジェクトのプロトタイプとして使用して、新しいオブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## 構文

```js-nolint
Object.create(proto)
Object.create(proto, propertiesObject)
```

### 引数

- `proto`
  - : 新たに生成されるオブジェクトのプロトタイプになるべきオブジェクトです。
- `propertiesObject` {{Optional_inline}}
  - : 指定されていて、 {{jsxref("undefined")}} でない場合、それ自身の[列挙可能なプロパティ](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)が、それらのプロパティ名を伴う一連のプロパティ記述子を指定し、新たに生成されるオブジェクトに追加されることになります。これらのプロパティは、 {{jsxref("Object.defineProperties()")}} の 2 番目の引数に対応するものです。

### 返値

指定したプロトタイプオブジェクトとプロパティを持つ新しいオブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : `proto` が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) でも {{jsxref("Object")}} でもない場合に発生します。

## 例

### Object.create() を用いた古典的な継承

以下の例は、古典的な継承をするための `Object.create()` の使用方法です。これは、すべての JavaScript が対応している単一継承です。

```js
// Shape - スーパークラス
function Shape() {
  this.x = 0;
  this.y = 0;
}

// スーパークラスのメソッド
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - サブクラス
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// サブクラスはスーパークラスを拡張する
Rectangle.prototype = Object.create(Shape.prototype, {
  // Rectangle.prototype.constructor を Rectangle に設定しないと、
  // Shape (親) の prototype.constructor を取ることになります。
  // これを防ぐために、 prototype.constructor を Rectangle (子) に設定します。
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // 'Shape moved.' と出力
```

`create()` を使用する際には、確実に適切な意味づけをするために [`constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) プロパティを追加し直すなどの注意点があることに注意してください。 `Object.create()` は {{jsxref("Object.setPrototypeOf()")}} でプロトタイプを変更するよりもパフォーマンスが良いと信じられていますが、インスタンスが作成されておらず、プロパティアクセスがまだ最適化されていない場合、その差は実際にはごくわずかです。現行の JavaScript コードでは、どのような場合でも [class](/ja/docs/Web/JavaScript/Reference/Classes) 構文を推奨します。

### Object.create() と propertiesObject 引数の併用

`Object.create()` はオブジェクトの作成プロセスを細かく制御することができます。[オブジェクト初期化構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)は `Object.create()`の糖衣構文です。 `Object.create()` を使うと、指定したプロトタイプとプロパティを持つオブジェクトを作成することができます。 2 つ目の引数は _プロパティ記述子_ に割り当てられたキーであることに注意してください。これは、オブジェクト初期化子ではできない、各プロパティの列挙可能性や設定可能性なども制御できることを意味しています。

```js
o = {};
// これは次のものと同等
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo は普通のデータプロパティ
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar はアクセサープロパティ
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

// プロトタイプが新規の空オブジェクトである新しいオブジェクトを
// 生成し、単一のプロパティ 'p' を値を 42 にして追加します。
o = Object.create({}, { p: { value: 42 } });
```

`Object.create()` を使用すると、 [`null` をプロトタイプとする](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロパティオブジェクト)オブジェクトを作成することができます。オブジェクトの初期化子では、 [`__proto__`](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#プロトタイプセッター) キーが同等の構文になります。

```js
o = Object.create(null);
// Is equivalent to:
o = { __proto__: null };
```

既定では、プロパティは書き込み可能でも、列挙可能でも、設定可能でもありません。

```js
o.p = 24; // 厳格モードでは例外発生
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false; 厳格モードでは例外発生
```

初期化子と同じ属性を持つプロパティを指定するには、`writable`、`enumerable`、`configurable` を明示的に指定してください。

```js
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
// これは次のものと等価です。
// o2 = Object.create({ p: 42 })
// which will create an object with prototype { p: 42 }
```

`Object.create()` を使用して [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子の動作を模倣することができます。

```js
function Constructor() {}
o = new Constructor();
// 次のものと等価です。
o = Object.create(Constructor.prototype);
```

もちろん、 `constructor` 関数の中に実際の初期化コードがある場合、 `Object.create()` メソッドにそれを反映させることはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.create` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) (John Resig, 2008)
