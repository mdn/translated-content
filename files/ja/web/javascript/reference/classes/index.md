---
title: クラス
slug: Web/JavaScript/Reference/Classes
tags:
  - クラス
  - コンストラクター
  - ECMAScript 2015
  - ガイド
  - 継承
  - 中級者
  - JavaScript
browser-compat: javascript.classes
translation_of: Web/JavaScript/Reference/Classes
---
{{JsSidebar("Classes")}}

クラスはオブジェクトを作成するためのテンプレートです。それらは、そのデータを処理するためのコードでデータをカプセル化します。JS のクラスはプロトタイプに基づいて構築されていますが、ES5 のクラス風のセマンティクスとは共有されない構文やセマンティクスも持っています。

## クラスの定義

クラスは実際には「特別な{{jsxref("Functions", "関数", "", "true")}}」であり、{{jsxref("Operators/function", "関数式", "", "true")}}と{{jsxref("Statements/function", "関数宣言", "", "true")}}を定義することができるように、クラス構文にも{{jsxref("Operators/class", "クラス式", "", "true")}}と{{jsxref("Statements/class", "クラス宣言", "", "true")}}の 2 つの定義方法があります。

### クラス宣言

クラスを定義するひとつの方法は、**クラス宣言**を使うことです。クラスを宣言するには、クラス名 (この例では "Rectangle") 付きで `class` キーワードを使います。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### 巻き上げ (ホイスティング)

**関数宣言**と**クラス宣言**の重要な違いは、関数宣言では{{Glossary("Hoisting", "巻き上げ")}}されるのに対し、クラス宣言ではされないことです。クラスにアクセスする前に、そのクラスを宣言する必要があります。そうしないと、{{jsxref("ReferenceError")}} が発生します。

```js example-bad
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### クラス式

クラスを定義するもう一つの方法は**クラス式**です。クラス式は、名前付きでも名前なしでもできます。名前付きクラスの名前は、クラス内のローカルとして扱われます。ただし、 (インスタンスのではなく) クラスの {{jsxref("Function.name", "name")}} プロパティによってアクセスできます。

```js
// 無名
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 出力: "Rectangle"

// 名前つき
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 出力: "Rectangle2"
```

> **Note:** クラス**式**にも[クラス宣言](#class_declarations)で言及したのと同様の巻き上げ問題があります。

## クラス本体とメソッド定義

中括弧 `{}` 内にクラス本体を記述します。クラス本体には、メソッドやコンストラクターといったクラスメンバーを記述します。

### Strict モード

クラス本体は {{jsxref("Strict_mode", "Strict モード", "", "true")}}で実行されます。つまり、ここで書かれたコードは、パフォーマンスを向上させるために、より厳密な構文に従います。そうでない場合はサイレントエラーが投げられます。なお、特定のキーワードは将来のバージョンの ECMAScript 用に予約されています。

### コンストラクター

{{jsxref("Classes/constructor", "コンストラクター", "", "true")}}メソッドは、`class` で作成したオブジェクトを作成して初期化するための特別なメソッドです。"constructor" という名前の特別なメソッドは、クラスに 1 つしか定義できません。クラスに複数のコンストラクターメソッドが存在する場合、{{jsxref("SyntaxError")}} が発生します。

スーパークラスのコンストラクターはキーワード `super` を使用して呼び出せます。

### プロトタイプメソッド

[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を参照してください。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // ゲッター
  get area() {
    return this.calcArea();
  }
  // メソッド
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

### ジェネレーターメソッド

[イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)も参照してください。

```js
class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for(const side of this.sides){
      yield side;
    }
  }
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]
```

### 静的メソッドとプロパティ

{{jsxref("Classes/static", "static", "", "true")}} キーワードは、クラスの静的メソッドまたはプロパティを定義します。静的メンバー (プロパティとメソッド) は、クラスを[インスタンス化](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS#constructors_and_object_instances)せずに呼び出され、クラスインスタンスを介して呼び出すことは**できません**。静的メソッドは、アプリケーションのユーティリティ関数を作成するためによく使用されますが、静的プロパティは、キャッシュ、固定構成、またはインスタンス間で複製する必要のないその他のデータに役立ちます。

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
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### プロトタイプと静的メソッドに対する `this` の結び付け

`this` に値が付けられずに静的メソッドまたはプロトタイプメソッドが呼ばれると、{{jsxref("Operators/this", "this")}} の値はメソッド内で `undefined` になります。たとえ {{jsxref("Strict_mode", "\"use strict\"")}} ディレクティブがなくても同じふるまいになります。なぜなら、`class` 本体の中のコードは常に Strict モードで実行されるからです。

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal オブジェクト
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined
```

上のコードを従来の関数ベースの構文を使って書くと、非 Strict モードでは、最初の `this` の値をもとにして、メソッド呼び出しの中で自動的に結び付けられます。最初の値が `undefined` の場合、`this` にはグローバルオブジェクトが入ります。 Strict モードでは自動結び付けは行われません。`this` の値はそのまま渡されます。

```js
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // グローバルオブジェクト (Strict モードではない)

let eat = Animal.eat;
eat(); // グローバルオブジェクト (Strict モードではない)
```

### インスタンスプロパティ

インスタンスプロパティはクラスのメソッドの中で定義しなければなりません。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### フィールド宣言

#### パブリックフィールド宣言

JavaScript のフィールド宣言構文を使って、上記の例は次のように書くことができます。

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

フィールドを事前宣言することで、クラス定義はより自己文書化され、フィールドは常に存在するようになります。

上記のように、フィールドはデフォルト値の有無にかかわらず宣言できます。

詳しい情報は、{{jsxref("Classes/Public_class_fields", "パブリッククラスフィールド", "", "true")}}を参照してください。

#### プライベートフィールド宣言

プライベートフィールドを使うと、宣言は下記のように洗練できます。

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

プライベートフィールドの参照はクラス本体内でのみ可能となり、クラス外からの参照はエラーとなります。クラス外からは見えないものを定義することで、クラスのユーザーが (変更される可能性のある) 内部状態に依存できないようにします。

> **Note:** プライベートフィールドは、事前宣言のみ可能です。

プライベートフィールドは通常のプロパティとは違い、`this` への追加によって後から作成することができません。

詳しい情報は、{{jsxref("Classes/Private_class_fields", "プライベートクラスフィールド", "", "true")}}を参照してください。

## `extends` によるサブクラス化

{{jsxref("Classes/extends", "extends")}} キーワードは、クラスを別クラスの子として作成するために、*クラス宣言*または*クラス式*の中で使います。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // スーパークラスのコンストラクターを呼び出し、name パラメータを渡す
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

サブクラスにコンストラクターが存在する場合は、"this" を使う前に super() を呼ぶ必要があります。

従来の関数ベースの「クラス」も拡張できます。

```js
function Animal (name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// 同様のメソッドは、子のメソッドが親のメソッドよりも優先されます。
```

クラスは通常の (生成不可能な) オブジェクトを拡張できないことに注意してください。通常のオブジェクトから継承したければ、代わりに {{jsxref("Object.setPrototypeOf()")}} を使います。

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// このコードが無いと、speak() を実行した時に TypeError になります。
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
```

## Species

Array の派生クラスである `MyArray` の中で {{jsxref("Array")}} オブジェクトを返したいときもあるでしょう。species パターンは、デフォルトコンストラクターを上書きすることができます。

例えば、デフォルトコンストラクターを返す {{jsxref("Array.map", "map()")}} のようなメソッドを使っているとき、`MyArray` ではなく `Array` オブジェクトを返したいでしょう。{{jsxref("Symbol.species")}} シンボルを使うと次のように実現できます。

```js
class MyArray extends Array {
  // species を親の Array コンストラクターで上書きする
  static get [Symbol.species]() { return Array; }
}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
```

## `super` でスーパークラスを呼び出す

{{jsxref("Operators/super", "super")}} キーワードを使ってスーパークラスのメソッドを呼び出せます。これはプロトタイプベースの継承よりも優れています。

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## ミックスイン

抽象的なサブクラスや*ミックスイン*はクラスのためのテンプレートです。ECMAScript のクラスは 1 つだけスーパークラスを持つことができます。そのため、多重継承はできません。機能はスーパークラスから提供されます。

ECMAScript では、スーパークラスをインプットとして、そしてスーパークラスを継承した派生クラスをアウトプットとする関数をミックスインで実装できます。

```js
let calculatorMixin = Base => class extends Base {
  calc() { }
};

let randomizerMixin = Base => class extends Base {
  randomize() { }
};
```

ミックスインを使用したクラスを次のように記述することもできます。

```js
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
```

## クラス定義の再実行

クラスを再定義することはできません。再定義しようとすると `SyntaxError` が発生します。

Firefox のウェブコンソール（**メニュー** > **ウェブ開発** > **ウェブコンソール**）などでコードを試しているときに、同じ名前のクラス定義を 2 回実行すると、`SyntaxError: redeclaration of let ClassName` が発生します。（この問題については {{Bug(1428672)}} でさらに詳しく説明しています。）Chrome 開発者ツールで同様の操作を行うと、`Uncaught SyntaxError: Identifier 'ClassName' has already been declared at <anonymous>:1:1` のようなメッセージが表示されます。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions", "関数", "", "true")}}
- {{jsxref("Statements/class", "クラス宣言", "", "true")}}
- {{jsxref("Operators/class", "クラス式", "", "true")}}
- {{jsxref("Classes/Public_class_fields", "パブリッククラスフィールド", "", "true")}}
- {{jsxref("Classes/Private_class_fields", "プライベートクラスフィールド
", "", "true")}}
- {{jsxref("Operators/super", "super")}}
- [ブログ記事: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Fields and public/private class properties proposal (stage 3)](https://github.com/tc39/proposal-class-fields)
