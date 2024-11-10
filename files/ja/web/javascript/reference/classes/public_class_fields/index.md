---
title: パブリッククラスフィールド
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

パブリックフィールドは、静的なものもインスタンスのものも書き込み可能、列挙可能、構成可能です。そのため、プライベートなものとは異なり、プロトタイプの継承に参加します。

## 構文

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

それ以外にも構文上の制約があります。

- 静的プロパティ（フィールドまたはメソッド）の名前を `prototype` とすることはできません。
- クラスフィールド（静的またはインスタンス）の名前を `constructor` とすることはできません。

## 解説

このページでは、パブリックインスタンスフィールドについて詳しく紹介します。

- パブリック静的フィールドについては、 [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static) を参照してください。
- プライベートフィールドについては、[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)を参照してください。
- パブリックメソッドについては、[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を参照してください。
- パブリックアクセサーについては、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)および[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を参照してください。

パブリックインスタンスフィールドは、作成されたクラスのすべてのインスタンスに存在します。パブリックフィールドを宣言することで、そのフィールドが常に存在することを保証することができ、クラスの定義がより自己文書化されます。

パブリックインスタンスフィールドは、基底クラスではコンストラクターが実行される前の時点でインスタンスに追加され、サブクラスでは `super()` が返された直後に追加されます。初期化子のないフィールドは `undefined` に初期化されます。プロパティと同様に、フィールド名は計算することができます。

```js
const PREFIX = "prefix";

class ClassWithField {
  field;
  fieldWithInitializer = "instance field";
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithField();
console.log(Object.hasOwn(instance, "field")); // true
console.log(instance.field); // undefined
console.log(instance.fieldWithInitializer); // "instance field"
console.log(instance.prefixField); // "prefixed field"
```

計算されたフィールド名は、[クラス定義時点](/ja/docs/Web/JavaScript/Reference/Classes#evaluation_order)で一度だけ評価されます。これは、クラスごとに常に固定された一連のフィールド名を持つことを意味しており、2つのインスタンスが計算された名前によって異なるフィールド名を持つことはありません。計算式の `this` 値はクラス定義を囲む `this` であり、クラス名を参照することは {{jsxref("ReferenceError")}} となります。この式では {{jsxref("Operators/await", "await")}} と {{jsxref("Operators/yield", "yield")}} は期待通りに動作します。

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

フィールド初期化子の中では、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)は作成中のクラスインスタンスを参照し、[`super`](/ja/docs/Web/JavaScript/Reference/Operators/super)は基底クラスの `prototype` プロパティを参照します。このプロパティには基底クラスのインスタンスメソッドが格納されていますが、インスタンスフィールドは格納されていません。

```js
class Base {
  baseField = "base field";
  anotherBaseField = this.baseField;
  baseMethod() {
    return "base method output";
  }
}

class Derived extends Base {
  subField = super.baseMethod();
}

const base = new Base();
const sub = new Derived();

console.log(base.anotherBaseField); // "base field"

console.log(sub.subField); // "base method output"
```

フィールドの初期化式は、新しいインスタンスが作成されるたびに評価されます。（`this` の値はインスタンスごとに異なるので、初期化式はインスタンス固有のプロパティにアクセスすることができます。）

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

式は同期的に評価されます。初期化式で {{jsxref("Operators/await", "await")}} や {{jsxref("Operators/yield", "yield")}} を使用することはできません。（初期化式は暗黙的に関数に包まれていると考えてください。）

クラスのインスタンスフィールドは、それぞれのコンストラクターが実行される前に追加されるので、コンストラクター内でフィールドの値にアクセスすることができます。しかし、派生クラスのインスタンスフィールドは `super()` を返した後に定義されるので、基底クラスのコンストラクターが派生クラスのフィールドにアクセスすることはできません。

```js
class Base {
  constructor() {
    console.log("Base constructor:", this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log("Derived constructor:", this.field);
    this.field = 2;
  }
}

const instance = new Derived();
// Base constructor: undefined
// Derived constructor: 1
console.log(instance.field); // 2
```

フィールドは 1 つずつ追加されます。フィールド初期化子はその上のフィールドの値を参照することはできますが、その下のフィールドの値を参照することはできません。インスタンスメソッドと静的メソッドはすべて事前に追加され、アクセスすることができますが、初期化されているフィールドより下のフィールドを参照している場合、呼び出すと期待した動作をしないことがあります。

```js
class C {
  a = 1;
  b = this.c;
  c = this.a + 1;
  d = this.c + 1;
}

const instance = new C();
console.log(instance.d); // 3
console.log(instance.b); // undefined
```

> [!NOTE]
> これは[プライベートフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)ではより重要です。初期化されていないプライベートフィールドにアクセスすると、たとえプライベートフィールドが下記で宣言されていても {{jsxref("TypeError")}} が発生するからです。（プライベートフィールドが宣言されていない場合は、早期に {{jsxref("SyntaxError")}} となります。）

クラスフィールドは [`[[DefineOwnProperty]]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) の意味づけ（本質的には {{jsxref("Object.defineProperty()")}}）を使用して追加されるため、派生クラスのフィールド宣言は基底クラスのセッターを呼び出すことはありません。この動作は、コンストラクターで `this.field = …` を使用するのとは異なります。

```js
class Base {
  set field(val) {
    console.log(val);
  }
}

class DerivedWithField extends Base {
  field = 1;
}

const instance = new DerivedWithField(); // No log

class DerivedWithConstructor extends Base {
  constructor() {
    super();
    this.field = 1;
  }
}

const instance2 = new DerivedWithConstructor(); // Logs 1
```

> [!NOTE]
> クラスフィールドの仕様が最終的に `[[DefineOwnProperty]]` の意味づけで決定される以前は、 [Babel](https://babeljs.io/) や [tsc](https://www.typescriptlang.org/) を含むほとんどのトランスパイラーはクラスフィールドを `DerivedWithConstructor` 形式に変換しており、クラスフィールドが標準化された後に微妙なバグが発生していました。

## 例

### クラスフィールドの使用

クラスフィールドはコンストラクターの引数に依存できないので、フィールド初期化子は通常、インスタンスごとに同じ値として評価されます（{{jsxref("Date.now()")}} やオブジェクト初期化子のように、同じ式が時刻ごとに異なる値として評価できる場合を除きます）。

```js example-bad
class Person {
  name = nameArg; // nameArg はコンストラクターのスコープ外
  constructor(nameArg) {}
}
```

```js example-good
class Person {
  // すべてのインスタンスが同じ名前になる
  name = "Dragomir";
}
```

しかし、空であってもクラスフィールドを宣言することは有益です。フィールドの存在を示すことで、人間の読者だけでなく型チェッカーもクラスの形状を静的に分析できるようになるからです。

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

上のコードは冗長なように見えますが、 `this` が動的に変更される場合を考えてみましょう。明示的にフィールド宣言を行うと、インスタンスに必ず存在するフィールドが明確になります。

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

初期化子は基底クラスが実行された後に評価されるので、基底クラスのコンストラクターで作成したプロパティにアクセスすることができます。

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Professor extends Person {
  name = `Professor ${this.name}`;
}

console.log(new Professor("Radev", 54).name); // "Professor Radev"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- [プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)
- {{jsxref("Statements/class", "class")}}
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) (Shu-yu Guo, 2018)
- [Public and private class fields](https://v8.dev/features/class-fields) (v8.dev, 2018)
