---
title: プライベートプロパティ
slug: Web/JavaScript/Reference/Classes/Private_properties
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jsSidebar("Classes")}}

**プライベートプロパティ**は、パブリックである通常のクラスプロパティ、例えば[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)やクラスメソッドなどに対するものです。プライベートプロパティはハッシュ `#` 接頭辞を使用して作成され、クラスの外部から合法的に参照することはできません。これらのクラスプロパティのプライバシーカプセル化は JavaScript 自身によって強制されます。プライベートプロパティにアクセスするには、[ドット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ドット記法)を使用するしかなく、また、そのアクセスはプライベートプロパティを定義するクラス内でのみ可能です。

プライベートのプロパティは、この構文が存在する以前はネイティブではありませんでした。プロトタイプ継承では、 [`WeakMap`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members) オブジェクトや[クロージャ](/ja/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures)でその振る舞いをエミュレートすることができますが、使いやすさの面からは `#` 構文にはかないません。

## 構文

```js-nolint
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

さらにいくつかの構文上の制約があります。

- クラス内で宣言するプライベート識別子はすべて固有のものである必要があります。名前空間は、静的プロパティとインスタンスプロパティの間で共有されます。唯一の例外は、 2 つの宣言がゲッターとセッターのペアを定義している場合です。
- プライベート識別子は `#constructor` にすることができません。

## 解説

ほとんどのクラスプロパティには、プライベートの対応するものがあります。

- プライベートフィールド
- プライベートメソッド
- プライベート静的フィールド
- プライベート静的メソッド
- プライベートゲッター
- プライベートセッター
- プライベート静的ゲッター
- プライベート静的セッター

これらの機能をまとめてプライベートプロパティと呼びます。しかし、JavaScript で[コンストラクター](/ja/docs/Web/JavaScript/Reference/Classes/constructor)をプライベートにすることはできません。クラスの外部でクラスが構築されないようにするには、[プライベートフラグを使用する](#プライベートコンストラクターをシミュレーション)必要があります。

プライベートプロパティは **# 名前**（「ハッシュ-名前」と読みます）で宣言され、接頭辞として `#` が付けられます。ハッシュ接頭辞はプロパティ名の一部です。古いアンダースコア接頭辞規約 `_privateField` との関係を思い描いてください。しかし、普通の文字列プロパティではないので、[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット記法)を使って動的にアクセスすることはできません。

スコープ外から `#` 付きの名を参照すると構文エラーになります。また、呼び出される前に宣言されていないプライベートフィールドを参照したり、宣言されているフィールドを [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) で削除しようとしても構文エラーになります。

```js-nolint example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    delete this.#privateField; // Syntax error
    this.#undeclaredField = 42; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField; // Syntax error
```

JavaScript は動的言語ですが、ハッシュ識別子の構文が特殊であり、構文レベルで通常のプロパティとは異なるため、このコンパイル時チェックを行うことができます。

> [!NOTE]
> Chrome コンソールで実行するコードは、クラス外からプライベートプロパティにアクセスすることができます。これは JavaScript の構文制限を開発者ツール限定で緩和したものです。

プロパティを持っていないオブジェクトからプライベートプロパティにアクセスすると、通常のプロパティのように `undefined` を返すのではなく、{{jsxref("TypeError")}} が発生します。

```js example-bad
class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Cannot read private member #x from an object whose class did not declare it
```

この例では、静的関数の中や、外部で定義したクラスのインスタンスでもプライベートプロパティにアクセスできることも示しています。

[`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子を使用すると、プライベートフィールド（またはプライベートメソッド）が存在するかどうかをチェックできます。そのプライベートフィールドが存在すれば `true` を返し、そうでなければ `false` を返します。

```js example-good
class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return "obj must be an instance of C";
  }
}
console.log(C.getX(new C("foo"))); // "foo"
console.log(C.getX(new C(0.196))); // 0.196
console.log(C.getX(new C(new Date()))); // the current date and time
console.log(C.getX({})); // "obj must be an instance of C"
```

オブジェクトが現在のクラスのプライベートプロパティを 1 つでも持っていることが見つかった場合（`try...catch`または`in`チェックのいずれか）、他にもプライベートプロパティをすべて持っている必要があります。あるクラスのプライベートプロパティを持つオブジェクトは、一般的にそのクラスによって構築されたことを意味しています（[常にではありません](#オーバーライドしたオブジェクトの返却)）。

プライベートプロパティは、現在のクラス本体内でのみアクセスすることができ、サブクラスには継承されないため、[プロトタイプ継承モデル](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)にはありません。クラスが異なると、プライベートプロパティは同じ名前でも全く異なるものであり、相互運用はできません。クラスごとに管理される、インスタンスに付加された外部メタデータとして考えてください。このため、 {{DOMxRef("Window.structuredClone", "structuredClone()")}} はプライベートプロパティを複製せず、 {{jsxref("Object.freeze()")}} や {{jsxref("Object.seal()")}} は、プライベートプロパティには影響しません。

プライベートフィールドがいつ、どのように初期化されるかについての詳細は、[プライベートクラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)を参照してください。

## 例

### プライベートフィールド

プライベートフィールドには、プライベートインスタンスフィールドとプライベート静的フィールドがあります。プライベートフィールドは、クラス宣言の内部からのみアクセスすることができます。

#### プライベートインスタンスフィールド

プライベートインスタンスフィールドは、パブリック版と次の点で似ています。

- 基底クラスでコンストラクターが実行される前か、サブクラスで [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を呼び出した直後に追加されます。
- そのクラスのインスタンスでのみ利用できます。

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class Subclass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new Subclass(); // 開発者ツールでは Subclass {#privateField: 42, #subPrivateField: 23} と表示
```

> [!NOTE]
> 基底クラス `ClassWithPrivateField` の `#privateField` は `ClassWithPrivateField` のプライベートメンバーであり、派生クラス `Subclass` からはアクセスできません。

#### オーバーライドしたオブジェクトの返却

クラスのコンストラクターは異なるオブジェクトを返すことができ、そのオブジェクトは派生クラスのコンストラクターの新しい `this` として使用することができます。派生クラスは、返されたオブジェクトにおいてプライベートフィールドを定義することができます。つまり、無関係なオブジェクトにプライベートフィールドを「刻印」することが可能です。

```js
class Stamper extends class {
  // コンストラクターが指定されたオブジェクトを返す基底クラス
  constructor(obj) {
    return obj;
  }
} {
  // この宣言は、基底クラスのコンストラクターが返すオブジェクトに
  // プライベートフィールドを「刻印」する
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` は `Base` を呼び出して `obj` を返す。次に
// `Stamper` は `obj` に `#stamp` を定義する

console.log(obj); // 一部の開発者ツールでは {#stamp: 42} と表示
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false

// プライベートプロパティに 2 度刻印することはできません。
new Stamper(obj); // Error: Initializing an object twice is an error with private fields
```

> [!WARNING]
> これはとても混乱を招きかねないことです。一般的に、コンストラクターから任意のものを返すのは避けるようにしましょう。特に `this` に関係のないものを返すのは避けるようにしましょう。

### プライベート静的フィールド

プライベート静的フィールドは、パブリック版と次の点で似ています。

- クラスが評価される際にクラスのコンストラクターに追加されます。
- クラス自身からのみ利用できます。

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return ClassWithPrivateStaticField.#privateStaticField;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
```

プライベート静的フィールドには制限があります。プライベート静的フィールドを定義したクラスのみが、そのフィールドにアクセスできます。 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) を使用すると、予期しない動作をする可能性があります。次の例では、 `SubClass.basePublicStaticMethod()` を呼び出そうとしたときに `this` が `Subclass` クラスを（`BaseClassWithPrivateStaticField` クラスではなく）参照してしまい、 `TypeError` が発生します。

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {}

Subclass.publicStaticMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
```

これは、そのメソッドに `super` を付けて呼び出すのと同じです。 [`super` のメソッドはスーパークラスを `this` として呼び出すわけではない](/ja/docs/Web/JavaScript/Reference/Operators/super#静的メソッドでの_super_の呼び出し)からです。

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    // super を呼び出しても、 `this` は Subclass を参照している
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {
  static callSuperMethod() {
    return super.publicStaticMethod();
  }
}

Subclass.callSuperMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
```

静的プライベートフィールドには常に `this` ではなく、クラス名でアクセスするようにしてください。

### プライベートメソッド

プライベートメソッドには、プライベートインスタンスメソッドとプライベート静的メソッドがあります。プライベートメソッドは、クラス宣言の内部からのみアクセスすることができます。

#### プライベートインスタンスメソッド

プライベートインスタンスメソッドは、パブリック版と次の点で異なります。

- インスタンスフィールドが導入される前に、直ちに導入されます。
- クラスのインスタンスでのみ利用可能であり、 `.prototype` プロパティでは利用できません。

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 42;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.publicMethod()); // 42
```

プライベートインスタンスメソッドは、ジェネレーター、非同期、非同期ジェネレーターの関数にすることができます。プライベートゲッターとセッターも可能で、パブリックの[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)と[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)と同じ構文に従います。

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor(); // 🎬hello world🛑
```

パブリックメソッドと異なり、プライベートメソッドはクラスの `.prototype` プロパティからアクセスすることはできません。

```js
class C {
  #method() {}

  static getMethod(x) {
    return x.#method;
  }
}

console.log(C.getMethod(new C())); // [Function: #method]
console.log(C.getMethod(C.prototype)); // TypeError: Receiver must be an instance of class C
```

#### プライベート静的メソッド

プライベート静的メソッドは、パブリック版と次の点で似ています。

- クラスの評価時点でクラスのコンストラクターに追加されます。
- クラス自身からのみ利用できます。

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod()); // 42
```

プライベート静的メソッドは、ジェネレーター関数、非同期関数、非同期ジェネレーター関数、などがあります。

前述のプライベート静的フィールドの制限は、プライベート静的メソッドにも当てはまり、**`this`** を同様に使用すると予期しない動作が発生する可能性があります。次の例では、 `Derived.publicStaticMethod2()` を呼び出そうとすると、これは `Base` クラスではなく `Derived` クラスを参照するため、`TypeError` が発生します。

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return this.#privateStaticMethod();
  }
}

class Subclass extends ClassWithPrivateStaticMethod {}

console.log(Subclass.publicStaticMethod()); // TypeError: Cannot read private member #privateStaticMethod from an object whose class did not declare it
```

### プライベートコンストラクターをシミュレーション

他の多くの言語では、コンストラクターをプライベートとして指定する機能があり、クラス自身の外部でインスタンスを作成できないようにすることができます。 JavaScript にはこれを行うネイティブな方法はありませんが、プライベート静的フラグを使用することで実現できます。

```js
class PrivateConstructor {
  static #isInternalConstructing = false;

  constructor() {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError("PrivateConstructor は構築できません");
    }
    PrivateConstructor.#isInternalConstructing = false;
    // More initialization logic
  }

  static create() {
    PrivateConstructor.#isInternalConstructing = true;
    const instance = new PrivateConstructor();
    return instance;
  }
}

new PrivateConstructor(); // TypeError: PrivateConstructor は構築できません
PrivateConstructor.create(); // PrivateConstructor {}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Statements/class", "class")}}
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) (TC39 class-fields proposal)
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) (Shu-yu Guo, 2018)
- [Public and private class fields](https://v8.dev/features/class-fields) (v8.dev, 2018)
