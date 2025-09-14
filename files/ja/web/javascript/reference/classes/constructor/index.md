---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`constructor`** メソッドは、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)で作成されたオブジェクトインスタンスの生成と初期化を行うための特殊なメソッドです。

> [!NOTE]
> このページでは `constructor` の構文を紹介します。すべてのオブジェクトに存在する `constructor` プロパティについては、 {{jsxref("Object.prototype.constructor")}} を参照してください。

{{InteractiveExample("JavaScript デモ: クラスのコンストラクター")}}

```js interactive-example
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// 予想される結果: "Polygon"
```

## 構文

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

追加の構文上の制約があります。

- `constructor` という名前のクラスメソッドは、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)、[非同期](/ja/docs/Web/JavaScript/Reference/Statements/async_function)、[ジェネレーター](/ja/docs/Web/JavaScript/Reference/Statements/function*)メソッドになることはできません。
- 1 つのクラスが複数の `constructor` メソッドを持つことはできません。

## 解説

コンストラクターを使用すると、インスタンス化されたオブジェクトに対して、他のメソッドを呼び出す前に行う必要のある独自の初期化を行うことができます。

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`こんにちは、私は${this.name}です。`);
  }
}

const otto = new Person("オットー");

otto.introduce(); // こんにちは、私はオットーです。
```

独自のコンストラクターを提供しなかった場合は、既定のコンストラクターが提供されます。クラスが基底クラスである場合、既定のコンストラクターは空です。

```js-nolint
constructor() {}
```

クラスが派生クラスの場合、既定のコンストラクターが親コンストラクターを呼び出し、与えられた引数を渡します。

```js-nolint
constructor(...args) {
  super(...args);
}
```

> [!NOTE]
> 上記のような明示的なコンストラクターと既定のコンストラクターの異なる点は、後者が実際には[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)を呼び出して[引数のスプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を行わないことです。

それがこのようなコードを動作させることができます。

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // これは ValidationError の代わりのエラー
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

`ValidationError` クラスは、独自の初期化を行う必要がないため、明示的なコンストラクターは必要ありません。
既定のコンストラクターは、与えられた引数から親の `Error` の初期化を行います。

ただし、独自のコンストラクターを提供し、クラスが親クラスから派生している場合は、 [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を使用して親クラスのコンストラクターを明示的に呼び出す必要があります。
例えば、以下のようになります。

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // 親クラスのコンストラクターの呼び出し
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `検証に失敗しました :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("正しい電話番号ではありません。");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // これは ValidationError になる
    console.log(error.printCustomerMessage());
  } else {
    console.log("未知のエラーです", error);
    throw error;
  }
}
```

クラスで [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用すると、以下の段階を踏みます。

1. （派生クラスの場合） `super()` 呼び出しが評価される前の `constructor` 本体。この部分はまだ初期化されていないので、 `this` にアクセスしてはいけません。
2. （派生クラスの場合） `super()` 呼び出しが評価され、同じ処理で親クラスが初期化されます。
3. 現在のクラスの[フィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)が初期化されます。
4. `super()` 呼び出し後の `constructor` 本体（基底クラスの場合は本体全体）が評価されます。

`constructor` 本体の中では、 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) で作成されるオブジェクトにアクセスしたり [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) で呼び出されるクラスに [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new) でアクセスしたりすることができます。メソッド（[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を含む）と[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) は `constructor` が実行される前に `this` で初期化されているので、スーパークラスのコンストラクターからサブクラスのメソッドにアクセスすることもできることに注意してください。しかし、これらのメソッドが `this` を使用している場合、 `this` はまだ完全に初期化されていません。これは、派生クラスのパブリックフィールドを読むと `undefined` になり、プライベートフィールドを読むと `TypeError` になるということです。

```js example-bad
new (class C extends class B {
  constructor() {
    console.log(this.foo());
  }
} {
  #a = 1;
  foo() {
    return this.#a; // TypeError: Cannot read private member #a from an object whose class did not declare it
    // これは、クラスが宣言していないのではなく、スーパークラスの
    // コンストラクターが実行されている時点で、プライベートフィールドが
    // まだ初期化されていないため。
  }
})();
```

`constructor` メソッドは返値を持つことができます。基底クラスはコンストラクターから何らかの値を返すことができますが、派生クラスはオブジェクトまたは `undefined` を返すか、 {{jsxref("TypeError")}} を発生させなければなりません。

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// 返値はオブジェクトではないので無視される。 これはコンストラクター関数と同じ。

class ChildClass extends ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

親クラスのコンストラクターがオブジェクトを返した場合、そのオブジェクトは派生クラスの[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)を定義する際の値として使用します。このトリックは[「返値の上書き」](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements#オーバーライドしたオブジェクトの返却)と呼ばれ、派生クラスのフィールド（[プライベート](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)なものも含む）を無関係なオブジェクトに定義することができます。

`constructor` は通常の[メソッド](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)構文に従うので、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)や[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)などをすべて使用することができます。

```js
class Person {
  constructor(name = "名無し") {
    this.name = name;
  }
  introduce() {
    console.log(`こんにちは、私は${this.name}`);
  }
}

const person = new Person();
person.introduce(); // こんにちは、私は名無し
```

コンストラクターはリテラル名でなければなりません。[算出プロパティ名](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#算出プロパティ名)はコンストラクターにはなれません。

```js
class Foo {
  // これは算出プロパティ名です。コンストラクターとしてピックアップされることはありません。
  ["constructor"]() {
    console.log("called");
    this.a = 1;
  }
}

const foo = new Foo(); // ログ出力なし
console.log(foo); // Foo {}
foo.constructor(); // "called" と出力
console.log(foo); // Foo { a: 1 }
```

非同期メソッド、ジェネレーターメソッド、アクセサ、クラスフィールドは `constructor` と名付けることは禁止されています。プライベートな名前を `#constructor` と呼び出すことはできません。 `constructor` という名前のメンバーはプレーンなメソッドでなければなりません。

## 例

### constructor メソッドの使用

このコードスニペットは、[classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html)) から転載しています。

```js
class Square extends Polygon {
  constructor(length) {
    // ここでは、ポリゴンの幅と高さを指定された長さにして、親クラスの
    // コンストラクターを呼び出しています。
    super(length, length);
    // メモ: 派生クラスでは、`this` を使用する前に `super()` を呼び出す
    // 必要があります。これを省略すると ReferenceError が発生します。
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}
```

### 異なるプロトタイプにバインドされたコンストラクターでの super を呼び出し

`super()` は現在のクラスのプロトタイプであるコンストラクターを呼び出します。現在のクラスのプロトタイプを変更した場合、 `super()` は新しいプロトタイプのコンストラクターを呼び出します。現在のクラスの `prototype` プロパティを変更しても、 `super()` が呼び出すコンストラクターには影響しません。

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

// Polygon の代わりに（基本クラスである） Rectangle を継承するようにする
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

// newInstance はまだ Polygon のインスタンスです。
// Square.prototype のプロトタイプを変更していないので、
// newInstance のプロトタイプチェーンは以下のままです。
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// ただし、 super() はコンストラクターとして Rectangle を呼び出すため、
// newInstance の name プロパティは Rectangle のロジックで初期化されます。
console.log(newInstance.name); // Rectangle
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- [静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Object.prototype.constructor")}}
