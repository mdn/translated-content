---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`super`** キーワードは、オブジェクトリテラルやクラスの [[Prototype]] 上のプロパティにアクセスしたり、スーパークラスのコンストラクターを呼び出したりするために使用されます。

`super.prop` および `super[expr]` 式は、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)と[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の両方におけるあらゆる[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)で有効です。`super(...args)` 式はクラスコンストラクター内で有効です。

{{InteractiveExample("JavaScript デモ: super 式", "taller")}}

```js interactive-example
class Foo {
  constructor(name) {
    this.name = name;
  }

  getNameSeparator() {
    return "-";
  }
}

class FooBar extends Foo {
  constructor(name, index) {
    super(name);
    this.index = index;
  }

  // 呼び出されない
  getNameSeparator() {
    return "/";
  }

  getFullName() {
    return this.name + super.getNameSeparator() + this.index;
  }
}

const firstFooBar = new FooBar("foo", 1);

console.log(firstFooBar.name);
// 予想される結果: "foo"

console.log(firstFooBar.getFullName());
// 予想される結果: "foo-1"
```

## 構文

```js-nolint
super()
super(arg1)
super(arg1, arg2)
super(arg1, arg2, /* …, */ argN)

super.propertyOnParent
super[expression]
```

## 解説

`super` キーワードは、「関数呼び出し」（`super(...args)`）と「プロパティ参照」として（`super.prop` および `super[expr]`）の 2 つの方法で使用できます。

> [!NOTE]
> `super` はキーワードであり、これらは特別な構文構造です。`super` はプロトタイプオブジェクトを指す変数ではありません。`super` 自体を読み取ろうとすると {{jsxref("SyntaxError")}} が発生します。
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

派生クラス（`extends` を使用）の[コンストラクター](/ja/docs/Web/JavaScript/Reference/Classes/constructor)本体では、`super` キーワードが「関数呼び出し」`super(...args)` として現れることがあります。これは `this` キーワードを使用する前、かつコンストラクターが返す前に呼び出さなければなりません。これは親クラスのコンストラクターを呼び出し、親クラスのパブリックフィールドをバインドします。その後、派生クラスのコンストラクターはさらに `this` にアクセスし変更することができます。

「プロパティ参照」 の形で、オブジェクトリテラルやクラスの [[Prototype]] のメソッドやプロパティにアクセスすることができます。クラスの本体では、`super` の参照は、実行コンテキストがインスタンス作成かクラス初期化かによって、スーパークラスのコンストラクター自体か、コンストラクターの `prototype` のいずれかになります。詳細は「例」の節を参照してください。

なお、`super`の参照は、メソッドが呼び出されるオブジェクトではなく、`super`が宣言されたクラスまたはオブジェクトリテラルによって決定されます。したがって、メソッドのアンバインドや再バインドを行っても、その中の`super`の参照は変わりません（ただし、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)の参照は変わります）。`super`は、メソッドがクロージャを生成するクラスリテラルまたはオブジェクトリテラルのスコープ内の変数と見なせます（ただし上記の通り、実際には変数ではないことに注意してください）。

`super` を介してプロパティを設定したときは、そのプロパティは代わりに `this` に設定されます。

## 例

### クラス内での super の使用

このコードスニペットは、[クラスの例](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html)) からとっています。`super()` を利用することで、`Rectangle` と `Square` のコンストラクターに共通する処理を重複して記述しないようにしています。

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    // ここでは、親クラスのコンストラクターを呼び出し、指定された長さを
    // Rectangle の 幅と高さとして渡します。
    super(length, length);

    // メモ: 'this' を使う前に super() を呼び出さなければなりません。
    // でないと ReferenceError が発生します。
    this.name = "Square";
  }
}
```

### 静的メソッドでの super の呼び出し

super は[静的](/ja/docs/Web/JavaScript/Reference/Classes/static)メソッドでも呼び出すことができます。

```js
class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### クラスフィールド宣言内で super にアクセス

`super` はクラスフィールドの初期化中にもアクセスすることができます。`super` の参照は、現在のフィールドがインスタンスフィールドであるか、静的フィールドであるかによって異なります。

```js
class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField; // 90
}
```

なお、インスタンスフィールドはコンストラクターの `prototype` ではなくインスタンス自体に設定されるため、`super` を使用してスーパークラスのインスタンスフィールドにアクセスすることはできません。

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

ここでは、`extendedField` は 10 ではなく `undefined` です。`baseField` は `Base.prototype` ではなく、`Base` インスタンスの自分自身で定義されたプロパティであるからです。このコンテキストにおける `super` は、`Extended.prototype` の [[Prototype]] である `Base.prototype` 上のプロパティのみを見ていきます。

### super プロパティを削除するとエラーが発生する

親クラスのプロパティを削除するために、[`delete` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete) や `super.prop`、`super[expr]` を使うことはできません。{{jsxref("ReferenceError")}} が発生します。

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### オブジェクトリテラル内での super.prop の使用

super は[オブジェクト初期化子 / リテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)記法内でも使用できます。この例では、 2 つのオブジェクトがメソッドを定義しています。 2 つ目のオブジェクトの中で、`super` が最初のオブジェクトのメソッドを呼び出しています。これは {{jsxref("Object.setPrototypeOf()")}} の助けで動作し、これは `obj2` のプロトタイプを `obj1` に設定するので、`super` は `method1` を `obj1` 上で見つけることができます。

```js
const obj1 = {
  method1() {
    console.log("method 1");
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // "method 1" を出力
```

### super.prop を読み取るメソッドは、他のオブジェクトにバインドされても動作が変わらない

`super.x` へのアクセスは `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)` のように動作します。これは、プロパティが常にオブジェクトリテラル/クラス宣言のプロトタイプ上で検索されるということであり、メソッドのアンバインドや再バインドを行っても `super` の参照は変更されません。

```js
class Base {
  baseGetX() {
    return 1;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}

const e = new Extended();
console.log(e.getX()); // 1
const { getX } = e;
console.log(getX()); // 1
```

オブジェクトリテラルでも同じことになります。

```js
const parent1 = { prop: 1 };
const parent2 = { prop: 2 };

const child = {
  myParent() {
    console.log(super.prop);
  },
};

Object.setPrototypeOf(child, parent1);
child.myParent(); // "1" と出力

const myParent = child.myParent;
myParent(); // ここでも "1" と出力

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // ここでも "1" と出力
```

継承チェーン全体をリセットすることでのみ、`super` の参照が変更されます。

```js
class Base {
  baseGetX() {
    return 1;
  }
  static staticBaseGetX() {
    return 3;
  }
}
class AnotherBase {
  baseGetX() {
    return 2;
  }
  static staticBaseGetX() {
    return 4;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
  static staticGetX() {
    return super.staticBaseGetX();
  }
}

const e = new Extended();
// インスタンス継承のリセット
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // プロトタイプチェーンが変更されたため、"1" ではなく "2" をログ出力
console.log(Extended.staticGetX()); // ここでも "3" とログ出力します。静的部分をまだ変更していないため
// 静的継承のリセット
Object.setPrototypeOf(Extended, AnotherBase);
console.log(Extended.staticGetX()); // "4" とログ出力されるようになる
```

### super からのメソッド呼び出し

関数として `super.prop` を呼び出した場合、 `prop` 関数内の `this` 値は現在の `this` であり、 `super` が指すオブジェクトにはなりません。例えば、 `super.getName()` を呼び出すと、コード上は`Base.getName()` と同等に見えますが、`"Extended"` を出力します。

```js
class Base {
  static getName() {
    console.log(this.name);
  }
}

class Extended extends Base {
  static getName() {
    super.getName();
  }
}

Extended.getName(); // "Extended" と出力
```

これは特に、[プライベート静的要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements#プライベート静的フィールド)を操作する際に重要です。

### super.prop に設定すると、代わりに this のプロパティに設定される

`super` のプロパティに `super.x = 1` のように設定すると、 `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)` と同様に動作します。これは `super` を単に「プロトタイプオブジェクトへの参照」と理解するだけでは不十分なケースの一つです。実際には `this` のプロパティを設定するからです。

```js
class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true
```

`super.x = 1` は `A.prototype` 上の `x` のプロパティ記述子を見ますが（そこに定義されたセッターを呼び出す）、`this` の値は `this` （このコンテキストでは `b`）に設定されます。[`Reflect.set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) には、 `target` と `receiver` が異なる場合の詳しい説明があります。

これは、`super.prop` を取得するメソッドは通常 `this` コンテキストの変更の影響を受けない一方で、`super.prop` を設定するメソッドは影響を受けるということです。

```js example-bad
/* 上記と同じ宣言を再利用 */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

ただし、`super.x = 1` は依然としてプロトタイプオブジェクトのプロパティ記述子を参照するので、書き込み不可のプロパティは上書きできず、セッターが呼び出されます。

```js
class X {
  constructor() {
    // 書き込み不可のプロパティを作成
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // 値を上書きできない
  }
}

const y = new Y();
y.foo(); // TypeError: "prop" は読み取り専用
console.log(y.prop); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
