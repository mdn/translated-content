---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`instanceof`** 演算子は、あるコンストラクターの `prototype` プロパティが、あるオブジェクトのプロトタイプチェーンの中のどこかに現れるかどうかを検査します。返値は論理値です。この動作は [`Symbol.hasInstance`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) でカスタマイズすることができます。

{{InteractiveExample("JavaScript デモ: instanceof 演算子")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// 予想される結果: true

console.log(auto instanceof Object);
// 予想される結果: true
```

## 構文

```js-nolint
object instanceof constructor
```

### 引数

- `object`
  - : 検査するオブジェクトです。
- `constructor`
  - : 検査対象の関数です。

### 例外

- {{jsxref("TypeError")}}
  - : `constructor` がオブジェクトでない場合、発生します。 `constructor` が [`[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) メソッドを持っていない場合は、関数でなければなりません。

## 解説

`instanceof` 演算子は、 `object` のプロトタイプチェーンに `constructor.prototype` が存在することを検査します。これ通常（ただし[常にではない](#overriding_the_behavior_of_instanceof)）、`object`が`constructor`で構築されたということを意味しています。

```js
// コンストラクターを定義
function C() {}
function D() {}

const o = new C();

// true : Object.getPrototypeOf(o) === C.prototype であるため
o instanceof C;

// false : D.prototype は o のプロトタイプチェーンのどこにも存在しないため
o instanceof D;

o instanceof Object; // true : なぜなら...
C.prototype instanceof Object; // true であるため

// `constructor.prototype` を再代入。
// このようなことは、めったにすべきではありません。
C.prototype = {};
const o2 = new C();

o2 instanceof C; // true

// false : C.prototype は o のプロトタイプチェーンの
// どこにも存在しないため
o instanceof C;

D.prototype = new C(); // C を D の [[Prototype]] リンクに追加
const o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true : o3 のプロトタイプチェーンに C.prototype があるため
```

なお、オブジェクト作成後に `constructor.prototype` が再代入されると（通常は推奨されません）、`instanceof` 検査の値が変化する可能性があります。また、[`Object.setPrototypeOf`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) を使用して `object` のプロトタイプを変更することで、この値を変更することもできます。

クラスも同様に動作する方法です。クラスにも `prototype` プロパティが存在するためです。

```js
class A {}
class B extends A {}

const o1 = new A();
// true : Object.getPrototypeOf(o1) === A.prototype であるため
o1 instanceof A;
// false : B.prototype が o1 のプロトタイプチェーン内になったため
o1 instanceof B;

const o2 = new B();
// true : Object.getPrototypeOf(Object.getPrototypeOf(o2)) === A.prototype であるため
o2 instanceof A;
// true : Object.getPrototypeOf(o2) === B.prototype であるため
o2 instanceof B;
```

[バインド済み関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)については、`instanceof` は対象とする関数の `prototype` プロパティを見ていきます。これは、バインド済み関数には `prototype` が存在しないためです。

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

### instanceof と Symbol.hasInstance

`constructor` が [`Symbol.hasInstance`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) メソッドを持つ場合、そのメソッドが優先的に呼び出され、引数として `object` のみを受け取り、 `this` として `constructor` が渡されます。

```js
// このクラスは、具体的なフラグをプロパティとして持つ限り、プレーンオブジェクトが
// このクラスのインスタンスであるように偽装できるようにする
class Forgeable {
  static isInstanceFlag = Symbol("isInstanceFlag");

  static [Symbol.hasInstance](obj) {
    return Forgeable.isInstanceFlag in obj;
  }
}

const obj = { [Forgeable.isInstanceFlag]: true };
console.log(obj instanceof Forgeable); // true
```

すべての関数は既定で `Function.prototype` を継承するため、右辺が関数である場合、ほとんどの場合は [`Function.prototype[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) メソッドが `instanceof` の動作を指定します。 `instanceof` の正確なアルゴリズムについては、{{jsxref("Symbol.hasInstance")}} ページを参照してください。

### instanceof と複数の領域

JavaScriptの実行環境（ウィンドウ、フレームなど）は、それぞれの独自の領域に属しています。つまり、組み込まれているものも変わります（別々なグローバルオブジェクト、別々なコンストラクター、など）。これにより予期せぬ結果になる場合があります。例えば、`[] instanceof window.frames[0].Array` は `false` を返します。 `Array.prototype !== window.frames[0].Array.prototype` であり、配列は前者を継承しているからです。

これは、始めはわかりにくいかもしれませんが、スクリプトで複数のフレームやウィンドウを扱い、オブジェクトをあるコンテキストから別のコンテキストへ関数を経由して渡すようになると、正当かつ重要な事項になります。例えば、 {{jsxref("Array.isArray()")}} を使用すると、与えられたオブジェクトが実際に配列であるかどうかを安全にチェックできます。

例えば、別のコンテキストである [`Node`](/ja/docs/Web/API/Node) が [`SVGElement`](/ja/docs/Web/API/SVGElement) であるかどうかをチェックするには、`myNode instanceof myNode.ownerDocument.defaultView.SVGElement` を使用してください。

## 例

### instanceof を String に使用

次の例では、 `instanceof` を `String` オブジェクトに使用した場合の動作を示しています。

```js
const literalString = "これは文字列リテラルです";
const stringObject = new String("コンストラクターで作成された String です");

literalString instanceof String; // false : 文字列リテラルは String ではない
stringObject instanceof String; // true

literalString instanceof Object; // false : 文字列リテラルは Object ではない
stringObject instanceof Object; // true

stringObject instanceof Date; // false
```

### instanceof を Map に対して使用

次の例では、 `instanceof` を `Map` オブジェクトに使用した場合の動作を示しています。

```js
const myMap = new Map();

myMap instanceof Map; // true
myMap instanceof Object; // true
myMap instanceof String; // false
```

### Object.create() で生成されたオブジェクト

次の例では、 `instanceof` を `Object.create()` で生成したオブジェクトに使用した場合の動作を示しています。

```js
function Shape() {}

function Rectangle() {
  Shape.call(this); // スーパークラスのコンストラクターを呼び出す
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

rect instanceof Object; // true
rect instanceof Shape; // true
rect instanceof Rectangle; // true
rect instanceof String; // false

const literalObject = {};
const nullObject = Object.create(null);
nullObject.name = "My object";

literalObject instanceof Object; // true : すべてのオブジェクトリテラルは Object.prototype をプロトタイプとして持つ
({}) instanceof Object; // true : 上記と同じ
nullObject instanceof Object; // false : プロトタイプはプロトタイプチェーンの末尾 (null)
```

### myCar が Car 型および Object 型であることを示す

以下のコードは、`Car` オブジェクト型とそのインスタンスである `myCar` を生成しています。`instanceof` 演算子で、`myCar` は `Car` 型および `Object` 型であることを示します。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Honda", "Accord", 1998);
const a = myCar instanceof Car; // true を返す
const b = myCar instanceof Object; // true を返す
```

### instanceof の否定

あるオブジェクトが特定のコンストラクターの `instanceof` でないことを検査するには、次のようにします。

```js
if (!(myCar instanceof Car)) {
  // 次のようなことをする
  // myCar = new Car(myCar)
}
```

これは実際には次のものとは異なります。

```js-nolint example-bad
if (!myCar instanceof Car) {
  // ここには到達しない
}
```

これは常に `false` になります。（`!myCar` は `instanceof` の前に評価されるため、常に論理値が `Car` のインスタンスであるかどうかを検査しようとします。）

### instanceof の動作のオーバーライド

`instanceof` を使用する際のよくある落とし穴は、 `x instanceof C` が真の場合、 `x` が `C` をコンストラクターとして作成されたと信じることです。これは真ではありません。なぜなら、 `x` はプロトタイプとして `C.prototype` を直接割り当てられて作成される可能性があるからです。この場合、コードが `x` から `C` の[プライベートフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)を読み取ろうとしても失敗します。

```js
class C {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  console.log(C.getValue(x)); // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

これ避けるために、 `C` に `Symbol.hasInstance` メソッドを追加して `instanceof` の動作を上書きすることができます。これにより、 [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) を使ったブランドチェックをすることができます。

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return #value in x;
  }

  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  // x は C ではないため、実行されない
  console.log(C.getValue(x));
}
```

この動作を現在のクラスに制限 したいかもしれません。そうしないと、サブクラスで誤検知が発生する可能性があるからです。

```js
class D extends C {}
console.log(new C() instanceof D); // true : D は C から [Symbol.hasInstance] を継承しているため
```

これを行うには、`this`が現在のコンストラクターであるかどうかを調べることができます。

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return this === C && #value in x;
  }
}

class D extends C {}
console.log(new C() instanceof D); // false
console.log(new C() instanceof C); // true
console.log({ __proto__: C.prototype } instanceof C); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
