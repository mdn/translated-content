---
title: クラス
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

クラスはオブジェクトを作成するためのテンプレートです。処理するためのコードでデータをカプセル化します。 JS のクラスは[プロトタイプ](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)に基づいて構築されていますが、一部の構文や意味はクラスに独特のものです。

例や説明については、[クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイドを参照してください。

## 解説

### クラスの定義

クラスは実際には「特別な[関数](/ja/docs/Web/JavaScript/Reference/Functions)」であり、[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)と[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)を定義することができるように、クラスも[クラス式](/ja/docs/Web/JavaScript/Reference/Operators/class)または[クラス宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)の 2 つの定義方法があります。

```js
// 宣言
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// 式（クラスは無名だが、変数に代入される）
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// 式（自分の名前を持つクラス）
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

関数式と同様に、クラス式も無名であったり、割り当てる変数とは異なる名前を持ったりすることができます。しかし、関数宣言とは異なり、クラス宣言は `let` や `const` と同じ[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン)の制約があり、[巻き上げられていない](/ja/docs/Web/JavaScript/Guide/Using_classes#クラス宣言の巻き上げ)かのように動作します。

### クラス本体

中括弧 `{}` 内にクラス本体を記述します。クラス本体には、メソッドやコンストラクターといったクラスメンバーを記述します。

クラス本体は `"use strict"` ディレクティブがなくても[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行されます。

クラスの要素は 3 つの側面で特徴付けられます。

- 種類: ゲッター、セッター、メソッド、フィールド
- 場所: 静的またはインスタンス
- 可視性: パブリックまたはプライベート

これらを合計すると、使用可能な組み合わせは16通りになります。リファレンスをより論理的に分割し、コンテンツの重複を避けるため、異なる要素はそれぞれ別のページで詳しく紹介しています。

- [メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : パブリックインスタンスメソッド
- [ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)
  - : パブリックインスタンスゲッター
- [セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)
  - : パブリックインスタンスセッター
- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : パブリックインスタンスフィールド
- [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static)
  - : パブリック静的メソッド、ゲッター、セッター、フィールド
- [プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)
  - : プライベートなものすべて

> [!NOTE]
> プライベート要素には、同じクラスで宣言するプライベート名はすべて固有のものでなければならないという制約があります。他のすべてのパブリックプロパティにはこの制限はなく、同じ名前の複数のパブリックプロパティを持つことができ、最後のプロパティが他のプロパティを上書きします。これは[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#重複したプロパティ名)での処理と同じです。

さらに、特別なクラス要素の構文として、 [`constructor`](#コンストラクター) と[静的初期化ブロック](#静的初期化ブロック)の 2 つがあり、自分自身で参照します。

#### コンストラクター

{{jsxref("Classes/constructor", "constructor")}} メソッドは、クラスで作成したオブジェクトを作成して初期化するための特別なメソッドです。 "constructor" という名前の特別なメソッドは、クラスに 1 つしか定義できません。クラスに複数の `constructor` メソッドが存在した場合、{{jsxref("SyntaxError")}} が発生します。

スーパークラスのコンストラクターはキーワード [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) を使用して呼び出すことができます。

コンストラクターの中でインスタンスプロパティを作成することができます。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

また、インスタンスプロパティの値がコンストラクターの引数に依存しない場合は、[クラスフィールド](#フィールド宣言)として定義することもできます。

#### 静的初期化ブロック

[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)は、初期化中に文の評価を含めることができ、プライベートスコープにアクセスしながら、静的プロパティの柔軟な初期化を行うことができます。

静的ブロックは複数宣言することができ、静的フィールドや静的メソッドの宣言と混在させることができます（静的項目はすべて宣言順に評価されます）。

#### メソッド

メソッドはクラスごとにプロトタイプに定義され、すべてのインスタンスで共有されます。メソッドには、プレーン関数、非同期関数、ジェネレーター関数、非同期ジェネレーター関数があります。詳しい情報は、[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を参照してください。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

#### 静的メソッドとフィールド

{{jsxref("Classes/static", "static")}} キーワードは、クラスの静的メソッドまたはフィールドを定義します。静的プロパティ（フィールドとメソッド）は、インスタンスごとに定義されるのではなく、クラス自体に定義されます。静的メソッドは、アプリケーションのユーティリティ関数を作成するために使用することが多く、一方、静的フィールドは、キャッシュや修正された構成など、インスタンス間で複製する必要のないデータに有益です。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

#### フィールド宣言

クラスのフィールド宣言構文では、[コンストラクター](#コンストラクター)の例は次のように書くことができます。

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

クラスのフィールドはオブジェクトのプロパティに似ていて変数ではないので、宣言するために `const` などのキーワードは使用しません。 JavaScript では、[プライベート要素](#プライベート要素)は特別な識別子構文を使うので、 `public` や `private` のような修飾子キーワードも使うべきではありません。

上で見たように、フィールドは既定値付きで宣言することも、既定値なしで宣言することもできます。既定値のないフィールドは `undefined` が既定値となります。フィールドを前もって宣言することで、クラスの宣言がよりドキュメント化され、フィールドが常に存在するようになり、最適化しやすくします。

詳細は[パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)を参照してください。

#### プライベート要素

プライベートフィールドを使うと、宣言は下記のように宣言できます。

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

クラスの外部からプライベートフィールドを参照するとエラーになります。これらのフィールドはクラス本体の内部でのみ読み書きできます。
クラスの外から見えないことを定義することで、クラスのユーザーがバージョンごとに変わる内部構造に依存しないこと保証することができます。

プライベートフィールドは、フィールド宣言でのみ宣言できます。通常のプロパティのように、後から割り当てることで作成することはできません。

プライベートメソッドとアクセサーも、パブリックメソッドやアクセサーと同じ構文を使用して定義することができますが、識別子は `#` で 始める必要があります。

詳細情報については、[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)を参照してください。

### 継承

{{jsxref("Classes/extends", "extends")}} キーワードは、クラスを別なクラス（クラスまたは関数）の子として作成するために、*クラス宣言*または*クラス式*の中で使います。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}が鳴きます。`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // スーパークラスのコンストラクターを呼び出し、 name 引数を渡す
  }

  speak() {
    console.log(`${this.name}が吠えます。`);
  }
}

const d = new Dog("ミッチー");
d.speak(); // ミッチーが吠えます。
```

サブクラスにコンストラクターが存在する場合は、 `this` を使用する前に、最初に `super()` を呼び出す必要があります。キーワード {{jsxref("Operators/super", "super")}} を使用して、スーパークラスの対応するメソッドを呼び出すこともできます。

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}が鳴きます。`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name}が吠えます。`);
  }
}

const l = new Lion("ファジー");
l.speak();
// ファジーが鳴きます。
// ファジーが吠えます。
```

### 評価の順序

[`class` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)や [`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)が評価されるとき、そのさまざまな構成要素は以下の順序で評価されます。

1. 最初に {{jsxref("Classes/extends", "extends")}} 節があれば、それが評価されます。これは有効なコンストラクター関数か `null` でなければならず、そうでなければ {{jsxref("TypeError")}} が発生します。
2. {{jsxref("Classes/constructor", "constructor")}} メソッドが抽出され、 `constructor` が存在しない場合は既定の実装で置き換えられます。しかし、 `constructor` の定義は単なるメソッド定義であるため、この段階は観察することができません。
3. クラス要素のプロパティキーは宣言順に評価されます。プロパティキーが計算されたものである場合、計算された式が評価され、 `this` 値にはクラスを囲む `this` 値が設定されます（クラスそのものではありません）。プロパティ値はまだ評価されません。
4. メソッドとアクセサーは宣言順にインストールされます。インスタンスメソッドとアクセサーは現在のクラスの `prototype` プロパティにインストールされ、静的メソッドとアクセサーはクラス自体にインストールされます。プライベートインスタンスメソッドとアクセサーは、後でインスタンスに直接インストールするために保存されます。この段階は観察することができません。
5. これでクラスは `extends` で指定したプロトタイプと `constructor` で指定した実装で初期化されます。上記のすべての段階で、評価された式がクラスの名前にアクセスしようとすると、クラスがまだ初期化されていないため {{jsxref("ReferenceError")}} が発生します。
6. クラス要素の値は宣言順に評価されます。
   - [インスタンスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)（パブリックまたはプライベート）ごとに、その初期化子式が保存されます。初期化子はインスタンス生成時、コンストラクターの開始時（基底クラスの場合）、または `super()` 呼び出しが返す直前（派生クラスの場合）に評価されます。
   - それぞれの[静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes/static)（パブリックまたはプライベート）について、その初期化子は `this` をクラス自身に設定した状態で評価され、プロパティがクラス上に作成されます。
   - [静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)は `this` をクラス自身に設定した状態で評価されます。
7. これでクラスは完全に初期化され、コンストラクター関数として使用することができます。

インスタンスがどのように作成されるかは、 {{jsxref("Classes/constructor", "constructor")}} を参照してください。

## 例

### インスタンスメソッドと静的メソッドのバインド

静的メソッドやインスタンスメソッドを {{jsxref("Operators/this", "this")}} の値なしで呼び出した場合、例えばメソッドを変数に割り当ててから呼び出すと、メソッド内部では `this` の値が `undefined` になります。この動作は、 [`"use strict"`](/ja/docs/Web/JavaScript/Reference/Strict_mode) ディレクティブが存在しない場合でも同じです。 `class` 本体の中のコードは常に厳格モードで実行されるからです。

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
const eat = Animal.eat;
eat(); // undefined
```

厳格モードでない従来の関数ベースの構文で上記を書き直すと、 `this` メソッド呼び出しは自動的に {{jsxref("globalThis")}} にバインドされます。厳格モードでは `this` の値は `undefined` のままです。

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [`class`](/ja/docs/Web/JavaScript/Reference/Statements/class)
- [`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [ES6 In Depth: Classes](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) (hacks.mozilla.org, 2015)
