---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

**`Object.create()`** メソッドは、既存のオブジェクトを新しく生成されるオブジェクトのプロトタイプとして使用して、新しいオブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## 構文

```js
Object.create(proto);
Object.create(proto, propertiesObject);
```

### 引数

- `proto`
  - : 新たに生成されるオブジェクトのプロトタイプになるべきオブジェクトです。
- `propertiesObject` {{Optional_inline}}
  - : 指定されていて、 {{jsxref("undefined")}} でない場合、それ自身の列挙可能なプロパティ (つまり、それ自身に定義されているものであり、プロトタイプチェーンの中での列挙可能なプロパティでは*ない*もの) が、それらのプロパティ名を伴う一連のプロパティ記述子を指定し、新たに生成されるオブジェクトに追加されることになります。これらのプロパティは、 {{jsxref("Object.defineProperties()")}} の 2 番目の引数に対応するものです。

### 返値

指定したプロトタイプオブジェクトとプロパティを持つ新しいオブジェクトです。

### 例外

`proto` 引数は次のいずれかになります。

- {{jsxref("null")}} または
- {{jsxref("Object")}} ただし[プリミティブラッパーオブジェクト](/ja/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript)を除く

`proto` がどちらでもない場合、 {{jsxref("TypeError")}} が発生します。

## カスタムオブジェクトと Null オブジェクト

完全なカスタムオブジェクト (特に `null` オブジェクトから作成されたもの、基本的にはメンバーを持たないカスタムオブジェクト) から生成された新しいオブジェクトは、予想外の振る舞いをすることがあります。これは特にデバッグ時に当てはまります。一般的なオブジェクト-プロパティ変換/検出ユーティリティ関数はエラーを生成したり、単に情報を失ったりする可能性があるからです (特にエラーを無視するサイレントエラートラップを使用している場合)。例えば、ここに 2 つのオブジェクトがあります。

```js
oco = Object.create( {} );   // 通常のオブジェクトを生成
ocn = Object.create( null ); // "null" オブジェクトを生成

> console.log(oco) // {} -- 普通に見えます
> console.log(ocn) // {} -- これまでのところ、普通に見えます

oco.p = 1; // 通常オブジェクトに単純なプロパティを生成
ocn.p = 0; // "null" オブジェクトに単純なプロパティを生成

> console.log(oco) // {p: 1} -- まだ普通に見えます
> console.log(ocn) // {p: 0} -- まだ普通に見えますが、待ってください...
```

上記のように、今のところすべてが正常なように見えます。しかし、実際に使ってみると、その違いはすぐに明らかになります。

```js
> "oco is: " + oco // "oco is: [object Object]" と表示

> "ocn is: " + ocn // エラーが発生: Cannot convert object to primitive value
```

多くの最も基本的な組み込み機能のほんの一部をテストするだけで、問題の大きさがより明確にわかります。

```js
> alert(oco) // [object Object] と表示
> alert(ocn) // エラーが発生: Cannot convert object to primitive value

> oco.toString() // [object Object] と表示
> ocn.toString() // エラーが発生: ocn.toString is not a function

> oco.valueOf() // {} と表示
> ocn.valueOf() // エラーが発生: ocn.valueOf is not a function

> oco.hasOwnProperty("p") // "true" と表示
> ocn.hasOwnProperty("p") // エラーが発生: ocn.hasOwnProperty is not a function

> oco.constructor // "Object() { [native code] }" と表示
> ocn.constructor // "undefined" と表示
```

このように、これらの違いにより、一見単純そうに見える問題であっても、デバッグがすぐに迷走してしまうことがあります。例えば、以下のようなものです。

_シンプルな共通デバッグ関数です。_

```js
// 与えられたオブジェクトの最上位のプロパティ名と値の組を表示
function ShowProperties(obj) {
  for (var prop in obj) {
    console.log(prop + ": " + obj[prop] + "\n");
  }
}
```

_このような単純な結果ではありません。 (特にサイレントエラートラップがエラーメッセージを隠していた場合)_

```js
ob={}; ob.po=oco; ob.pn=ocn; // 上記のテストオブジェクトをプロパティ値として使用して、複合オブジェクトを生成します。

> ShowProperties( ob ) // 最上位のプロパティを表示
- po: [object Object]
- Error: Cannot convert object to primitive value

最初のプロパティのみが表示されることに注意してください。
```

_(しかし、同じオブジェクトが単に順番が違うだけで作成されている場合 — 少なくともいくつかの実装では...)_

```js
ob={}; ob.pn=ocn; ob.po=oco; // 同じ複合オブジェクトを再度作成しますが、同じプロパティを異なる順序で作成します。

> ShowProperties( ob ) // 最上位のプロパティを表示
- Error: Cannot convert object to primitive value

どちらのプロパティも表示されないことに注意してください。
```

なお、このような順序の変化は、静的にはここにあるような異なる固定されたコードによって生じることがありますが、動的には、このようなプロパティを追加するコードの分岐が、入力やランダム変数によって実行される順序が変わることで生じることもあります。ただし、どのような順序でメンバーを追加しても、実際の反復順序は保証されません。

また、 Object.create() で生成されたオブジェクトに Object.entries() を使用すると、空の配列が返されることにも注意してください。

```js
var obj = Object.create({ a: 1, b: 2 });

> console.log(Object.entries(obj)); // "[]" と表示
```

#### いくつかの解決しない方法

オブジェクトメソッドが不足していることについての良い解決策は、すぐには見つかりません。

不足しているオブジェクトメソッドを標準オブジェクトから直接追加してもうまくいきません。

```js
ocn = Object.create( null ); // "null" オブジェクトを生成 (既出と同じ)

ocn.toString = Object.toString; // 新しいオブジェクトにはメソッドがないので、標準オブジェクトから直接代入してみる

> ocn.toString // "toString() { [native code] }" と表示 -- 存在しないメソッドが来たように見えます
> ocn.toString == Object.toString // "true" と表示 -- 標準オブジェクトのメソッドと同じように見えるメソッド

> ocn.toString() // エラー: Function.prototype.toString requires that 'this' be a Function
```

不足しているオブジェクトメソッドを新しいオブジェクトの「プロトタイプ」に直接追加してもうまくいきません。なぜなら、新しいオブジェクトは本当のプロトタイプを持っておらず (これがすべての問題における真の原因です)、プロトタイプを**直接**追加することはできないからです。

```js
ocn = Object.create( null ); // "null" オブジェクトを生成 (既出と同じ)

ocn.prototype.toString = Object.toString; // エラー: Cannot set property 'toString' of undefined

ocn.prototype = {};                       // プロトタイプを生成してみる
ocn.prototype.toString = Object.toString; // 新しいオブジェクトにはメソッドがないので、標準オブジェクトから代入してみる

> ocn.toString() // エラー: ocn.toString is not a function
```

[`Object.setPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) の第 2 引数に標準オブジェクト自身の名前を指定して、不足しているオブジェクトメソッドを追加しようとしても、うまくいきません。

```js
ocn = Object.create( null );        // "null" オブジェクトを生成 (既出と同じ)
Object.setPrototypeOf(ocn, Object); // 間違い。新しいオブジェクトのプロトタイプを Object() 関数に設定している

> ocn.toString() // エラー: Function.prototype.toString requires that 'this' be a Function
```

#### いくつかの解決方法

繰り返しになりますが、欠落しているオブジェクトメソッドを**標準オブジェクト**から直接追加しても動作しません。しかし、**ジェネリック**メソッドを直接追加すると、動作します。

```js
ocn = Object.create( null ); // "null" オブジェクトを生成 (既出と同じ)

ocn.toString = toString; // 新しいオブジェクトにはメソッドがないので、ジェネリック版から直接代入する

> ocn.toString() // "[object Object]" と表示
> "ocn is: " + ocn // "ocn is: [object Object]" と表示

ob={}; ob.pn=ocn; ob.po=oco; // 複合オブジェクトを生成 (既出と同じ)

> ShowProperties(ob) // 最上位のプロパティを表示
- po: [object Object]
- pn: [object Object]
```

しかし、ジェネリック**プロトタイプ**を新しいオブジェクトのプロトタイプとして設定すると、さらに効果的です。

```js
ocn = Object.create(null); // "null" オブジェクトを生成 (既出と同じ)
Object.setPrototypeOf(ocn, Object.prototype); // 新しいオブジェクトのプロトタイプを (標準オブジェクトではなく) 「ジェネリック」オブジェクトに設定
```

_(上記の文字列関連の関数に加えて、以下の関数も追加されています)_

```js
> ocn.valueOf() // {} と表示
> ocn.hasOwnProperty("x") // "false" と表示
> ocn.constructor // "Object() { [native code] }" と表示

// ...そして、それ以外の Object.prototype のすべてのプロパティとメソッドも
```

このように、この方法で変更されたオブジェクトは、普通のオブジェクトと同じように見えます。

## 例

### `Object.create()` を用いた古典的な継承

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
Rectangle.prototype = Object.create(Shape.prototype);

// Rectangle.prototype.constructor を Rectangle に設定しないと、
// Shape (親) の prototype.constructor を取ることになります。
// これを防ぐために、 prototype.constructor を Rectangle (子) に設定します。
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

### Object.create() と propertiesObject 引数の併用

```js
var o;

// プロトタイプを null にしてオブジェクトを生成
o = Object.create(null);

o = {};
// これは次のものと同等です。
o = Object.create(Object.prototype);

// いくつかのサンプルプロパティを持つオブジェクトを作成
// する例です。(2 番目の引数は、キーを*プロパティ記述子*に
// マッピングしていることに注意してください。)
o = Object.create(Object.prototype, {
  // foo は普通の「値プロパティ」です
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar はゲッターとセッター (アクセサー) によるプロパティです
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
    /* ES2015 のアクセサーでは、このようになります。
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
  },
});

function Constructor() {}
o = new Constructor();
// これは次のものと同等です。
o = Object.create(Constructor.prototype);
// もちろん、コンストラクター関数に実際の初期化
// コードがある場合は、 Object.create() には反映
// されません

// プロトタイプが新規の空オブジェクトである新しいオブジェクトを
// 生成し、単一のプロパティ 'p' を値を 42 にして追加します。
o = Object.create({}, { p: { value: 42 } });

// 既定では、プロパティは書き込み可能、列挙可能、構成可能ではありません
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// ES3 プロパティを指定
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
/* 次のものと同じではありません。
これはプロトタイプが {p: 42 } であるオブジェクトを生成します。
o2 = Object.create({p: 42}) */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Object.create` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) で利用できます
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- John Resig の [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/) の投稿
