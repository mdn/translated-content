---
title: コンストラクター
slug: Web/JavaScript/Reference/Classes/constructor
---

{{jsSidebar("Classes")}}

`constructor` メソッドは、 {{jsxref("Statements/class", "class")}} で作成されたオブジェクトの生成と初期化のための特殊なメソッドです。

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## 構文

```
constructor([arguments]) { ... }
```

## 解説

コンストラクターを使用すると、インスタンス化されたオブジェクトに対して、他のメソッドを呼び出す前に行う必要のある独自の初期化を提供することができます。

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person("Otto");

otto.introduce();
```

独自のコンストラクターを提供しなかった場合は、既定のコンストラクターが提供されます。クラスが基底クラスである場合、既定のコンストラクターは空です。

```js
constructor() {}
```

クラスが派生クラスの場合、既定のコンストラクターが親コンストラクターを呼び出し、与えられた引数を渡します。

```js
constructor(...args) {
  super(...args);
}
```

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
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

`ValidationError` クラスは、独自の初期化を行う必要がないため、明示的なコンストラクターは必要ありません。既定のコンストラクターは、与えられた引数から親の `Error` の初期化を行います。

ただし、独自のコンストラクターを提供し、クラスが親クラスから派生している場合は、 `super` を使用して親クラスのコンストラクターを明示的に呼び出す必要があります。例えば、以下のようになります。

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // call parent class constructor
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

クラスには "`constructor`" という名前の特別なメソッドが 1 つだけ存在します。クラス内に複数の `constructor` メソッドが存在すると、 {{jsxref("SyntaxError")}} エラーが発生します。

## 例

### constructor メソッドの使用

このコードスニペットは、[classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html)) から転載しています。

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
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

### 他の例

ここでは、 `Square` クラスのプロトタイプが変更されていますが、新しいインスタンスが作成されたときには、その基底クラスである `Polygon` のコンストラクターが呼び出されます。

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.classes.constructor")}}

## 関連情報

- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Statements/class", "クラス宣言", "", "true")}}
- {{jsxref("Operators/class", "クラス式", "", "true")}}
- {{jsxref("Classes")}}
- [Object.prototype.constructor](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
