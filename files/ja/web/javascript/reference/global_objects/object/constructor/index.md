---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`constructor`** は {{jsxref("Object")}} インスタンスのデータプロパティで、インスタンスオブジェクトを生成したコンストラクター関数への参照を返します。なお、このプロパティの値は*関数そのものへの参照*であり、関数名を含んだ文字列ではありません。

> [!NOTE]
> これは JavaScript オブジェクトのプロパティです。クラスの `constructor` メソッドについては、[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Classes/constructor)を参照してください。

## 値

インスタンスオブジェクトを作成したコンストラクター関数への参照。

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> このプロパティは、既定ではすべてのコンストラクター関数の [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティに作成され、そのコンストラクターで作成されたすべてのオブジェクトに継承されます。

## 解説

（[`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除く）どんなオブジェクトも、その `[[Prototype]]` にコンストラクターのプロパティを持っています。例えば、配列リテラルは {{jsxref("Array")}} オブジェクトを作成し、[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer) はプレーンオブジェクトを作成します。

```js
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true
```

通常 `constructor` はコンストラクターの [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティに決まります。より長いプロトタイプチェーンがある場合、通常、チェーン内のすべてのオブジェクトが `constructor` プロパティを持つことが期待できます。

```js
const o = new TypeError(); // 継承: TypeError -> Error -> Object
const proto = Object.getPrototypeOf;

Object.hasOwn(o, "constructor"); // false
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
```

## 例

### オブジェクトのコンストラクターの表示

以下の例では、コンストラクター (`Tree`) と、その型のオブジェクト (`theTree`) を生成します。そして、 `theTree` オブジェクトの `constructor` プロパティを表示します。

```js
function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log(`theTree.constructor is ${theTree.constructor}`);
```

この例の出力は次のとおりです。

```plain
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### オブジェクトへの constructor プロパティの代入

`constructor` プロパティにプリミティブ以外を代入することができます。

```js
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const foo = new Foo();
foo.constructor = "bar";
foo.constructor === "bar"; // true

// etc.
```

これは古い `constructor` プロパティを上書きしません。これはもともとインスタンスの `[[Prototype]]` に存在するものであり、独自のプロパティではないからです。

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true — インスタンスプロパティがプロトタイプのプロパティを隠す
```

しかし、 `Object.getPrototypeOf(a).constructor` が代入し直されても、オブジェクトの他の動作は変わりません。例えば、 `instanceof` の動作は `constructor` ではなく、[`Symbol.hasInstance`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) によって制御されます。

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

`constructor` プロパティは、再代入されたりシャドウ化されたりしないように保護するものは何もありません。したがって、変数の型を検出するためにコンストラクターを使用することは通常避けるべきで、オブジェクトの場合は `instanceof` や [`Symbol.toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)、プリミティブの場合は [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) のような壊れにくい方法を選ぶべきです。

### コンストラクター関数のプロトタイプのコンストラクターを変更

すべてのコンストラクターは [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティを持っており、このプロパティは [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子で呼び出されたときにインスタンスのプロトタイプ (`[[Prototype]]`) になります。従って、コンストラクター関数 `ConstructorFunction.prototype.constructor` は前回示したように、インスタンスの `[[Prototype]]` のプロパティになります。

しかし、 `ConstructorFunction.prototype` に再代入されると、 `constructor` プロパティは失われます。例えば、次の例は継承パターンを作成する一般的な方法です。

```js
function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {};

function Child() {
  Parent.call(this); // すべてが正しく初期化されていることを確認
}
// 子のプロトタイプを親のプロトタイプで再定義
Child.prototype = Object.create(Parent.prototype);
```

`Child` のインスタンスの `constructor` は `Child.prototype` が再割り当てされるため、 `Parent` になります。

言語がオブジェクトの `constructor` プロパティを読み取ることはほとんどありません。唯一の例外は、クラスの新しいインスタンスを作成するために [`[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) を使用する場合ですが、そのような用途はまれであり、いずれにせよ、組み込みクラスのサブクラスを作成するためには [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) 構文を使用する必要があります。

しかし、呼び出し側がインスタンスから元クラスにアクセスするために `constructor` を使用している場合、`Child.prototype.constructor` が常に `Child` 自体を指していることを保証することは非常に重要です。以下はオブジェクトを作成するための `create()` メソッドを持っている場合です。

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create は undefined、 constructor === Parent だから
```

上の例では、 `constructor` が `Parent` にリンクしているため、例外が発生します。これを避けるには、使用するコンストラクターを割り当ててください。

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // Child の下のコンストラクターを返す
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // 列挙不可にすることで、 `for...in` ループで現れないようにする
    writable: true,
    configurable: true,
  },
});

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // うまく動作する
```

`constructor` のプロパティを手動で追加する場合は、そのプロパティを[列挙不可](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)にすることが重要です。そうすれば、 `constructor` が [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループで参照されることはなくなります。

上記のコードが定型文のように見える場合は、 [`Object.setPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) を使用してプロトタイプチェーンを操作することもできます。

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); //コンストラクタープロパティを再作成することなく動作する
```

`Object.setPrototypeOf()` は、プロトタイプチェーンに関与する前回作成したすべてのオブジェクトを再コンパイルする必要があるため、潜在的なパフォーマンス上のデメリットを伴いますが、上記の初期化コードが `Parent` または `CreatedConstructor` が作成される前に発生する場合、効果は最小限になるはずです。

もう一つの例を考えてみましょう。

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // 静的メンバープロパティ
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // getStartPosition が静的メソッドとして存在することを期待して this.constructor を使用
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Child(1, 1).getOffsetByInitialPosition();
// Error: this.constructor.getStartPosition is undefined, since the
// constructor is Child, which doesn't have the getStartPosition static method
```

この例が正しく動作するように、 `Parent` の静的プロパティを `Child` に再割り当てします。

```js
// …
Object.assign(Child, ParentWithStatic); // Notice that we assign it before we create() a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

しかし、さらに良いことに、クラスの [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) のように、コンストラクター関数自体を互いに拡張させることができます。

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // 静的メンバープロパティ
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// Properly create inheritance!
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype);
Object.setPrototypeOf(Child, ParentWithStatic);

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Child(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

繰り返しますが、 `Object.setPrototypeOf()`を使用するとパフォーマンスに悪影響を持つことがあるので、コンストラクター宣言の直後でインスタンスが作成される前に使用するようにしてください。

> [!NOTE]
> コンストラクターを手動で更新したり設定したりすると、異なる結果や混乱する結果を導くことがあります。これを防ぐためには、それぞれの場合に応じて `constructor` の役割を定義することが必要です。多くの場合、 `constructor` 使用されず、再割り当ての必要はありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes/constructor", "constructor")}}
- {{Glossary("Constructor", "コンストラクター")}}
