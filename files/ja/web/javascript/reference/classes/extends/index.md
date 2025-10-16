---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`extends`** キーワードは、[クラス宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)や[クラス式](/ja/docs/Web/JavaScript/Reference/Operators/class)の中で、他のクラスの子であるクラスを生成するために使用します。

{{InteractiveExample("JavaScript デモ: クラスの拡張", "taller")}}

```js interactive-example
class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// 予想される結果: "19-Aug-1975"
```

## 構文

```js-nolint
class ChildClass extends ParentClass { /* … */ }
```

- `ParentClass`
  - : コンストラクター関数（クラスを含む）または `null` と評価される式。

## 解説

`extends` キーワードは、組み込みオブジェクトと同様にカスタムクラスをサブクラス化するために使用することができます。

[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) で呼び出すことができ、 [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティを持つコンストラクターであれば、親クラスの候補になることができます。例えば、[バインド済み関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)や {{jsxref("Proxy")}} は構築可能ですが、これらは `prototype` プロパティを持たないので、サブクラス化できません。

```js
function OldStyleClass() {
  this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () {};

class ChildClass extends OldStyleClass {}

class ModernClass {
  someProperty = 1;
  someMethod() {}
}

class AnotherChildClass extends ModernClass {}
```

`ParentClass`の `prototype` プロパティは {{jsxref("Object")}} または [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) でなければなりませんが、オブジェクトでない `prototype` は本来の動作をしないので、実際にはほとんど気にすることはないでしょう。（[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子では無視されます。）

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` は `ChildClass` と `ChildClass.prototype` の両方のプロトタイプを設定します。

|                                   | `ChildClass` のプロトタイプ | `ChildClass.prototype` のプロトタイプ |
| --------------------------------- | --------------------------- | ------------------------------------- |
| `extends` 節がない                | `Function.prototype`        | `Object.prototype`                    |
| [`extends null`](#extending_null) | `Function.prototype`        | `null`                                |
| `extends ParentClass`             | `ParentClass`               | `ParentClass.prototype`               |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// 静的プロパティの継承が可能
Object.getPrototypeOf(ChildClass) === ParentClass;
// インスタンスプロパティの継承が可能
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

`extends` の右辺は識別子である必要はありません。コンストラクターとして評価される式なら何でも使用することができます。これは[ミックスイン](#ミックスイン)を作成するのに有益なことが多いです。 `extends` 式の `this` 値はクラス定義の外側の `this` であり、このクラスは初期化されていないので、クラス名を参照すると {{jsxref("ReferenceError")}} になります。この式では {{jsxref("Operators/await", "await")}} および {{jsxref("Operators/yield", "yield")}} は期待通りに動作します。

```js
class SomeClass extends class {
  constructor() {
    console.log("基底クラス");
  }
} {
  constructor() {
    super();
    console.log("派生クラス");
  }
}

new SomeClass();
// 基底クラス
// 派生クラス
```

基底クラスはコンストラクターから何らかのものを返すことができますが、派生クラスはオブジェクトを返すか `undefined` を返さなければなりません。

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// オブジェクトではないため、返値は無視される
// これは関数コンストラクターと整合する

class ChildClass extends ParentClass {
  constructor() {
    super();
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

親クラスのコンストラクターがオブジェクトを返す場合、[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)をさらに初期化するときに、そのオブジェクトが派生クラスの `this` 値として使用されます。このトリックは[「返値の上書き」](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements#オーバーライドしたオブジェクトの返却)と呼ばれ、派生クラスのフィールド（[プライベート](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)のものを含む）を無関係なオブジェクトに定義することができます。

### 組み込みクラスのサブクラス化

> [!WARNING]
> 標準化委員会は、これまでの仕様にあった組み込みクラスにおけるサブクラス化メカニズムは過剰に設計されており、パフォーマンスとセキュリティへの無視できない影響を発生させているという見解を固めました。新しい組み込みメソッドはサブクラスについてあまり考慮されておらず、エンジンの実装者は[一部のサブクラス化メカニズムを除去するかどうか調査しています](https://github.com/tc39/proposal-rm-builtin-subclassing)。組み込みクラスを拡張する際には、継承の代わりにコンポジションを使用することを検討してください。

クラスを拡張する際に期待されることをいくつか示します。

- 静的ファクトリーメソッド（{{jsxref("Promise.resolve()")}} や {{jsxref("Array.from()")}}）をサブクラスで呼び出した場合、返されるインスタンスが常にサブクラスのインスタンスになること。
- 新しいインスタンスを返すインスタンスメソッド（{{jsxref("Promise.prototype.then()")}} や {{jsxref("Array.prototype.map()")}} など）をサブクラスで呼び出した場合、返されるインスタンスは常にサブクラスのインスタンスになること。
- インスタンスメソッドの移譲先は、可能な限り最小限の基本的なメソッドの集合になること。例えば、 {{jsxref("Promise")}} のサブクラスの場合、 {{jsxref("Promise/then", "then()")}} をオーバーライドすると、自動的に {{jsxref("Promise/catch", "catch()")}} の動作が変化すること。または、 {{jsxref("Map")}} のサブクラスの場合、 {{jsxref("Map/set", "set()")}} をオーバーライドすると、 {{jsxref("Map/Map", "Map()")}} コンストラクターの動作が自動的に変更さえること。

しかし、上記のような期待を適切に実装するには、只ならぬ努力が必要です。

- まず、返されるインスタンスを構築するコンストラクターを取得するために、静的メソッドで [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値を読み取ることが要求されることです。これは `[p1, p2, p3].map(Promise.resolve)` が `Promise.resolve` 内の `this` が未定義であるためにエラーを発生することになります。これを修正する方法としては、 {{jsxref("Array.from()")}} がそうであるように、 `this` がコンストラクターでない場合に基底クラスで代替処理をすることですが、それでも基底クラスが特殊ケースであることを意味しています。
- 2 つ目は、インスタンスメソッドがコンストラクター関数を取得するために [`this.constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) を読み込むことを要求されることです。しかし、コンストラクターのプロパティは書き込みと設定の両方が可能であり、保護されていないため、 `new this.constructor()` は古いコードを壊す可能性があります。そのため、組み込みメソッドをコピーする場合の多くは、代わりにコンストラクターの [`[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) プロパティを使用しています（既定では、単にコンストラクター自身である `this` を返します）。しかし、 `[Symbol.species]` によって任意のコードを実行したり、任意のタイプのインスタンスを作成したりすることができるため、セキュリティ上の問題があり、サブクラスの意味づけが非常に複雑になります。
- 3 つ目はカスタムコードを目に見える形で呼び出すことになり、多くのオプティマイザーの実装が難しくなります。例えば、 `Map()` コンストラクターが _x_ 要素の反復可能オブジェクトで呼び出された場合、内部ストレージに要素をコピーするだけではなく、目に見える形で `set()` メソッドを _x_ 回呼び出さなければなりません。

これらの問題は組み込みクラスに固有のものではありません。自分自身で作成したクラスについても、同じような決定をしなければならないことがあるでしょう。しかし、組み込みクラスでは、最適化とセキュリティがより大きな関心事です。新しい組み込みメソッドは常に基底クラスを構築し、可能な限りいくつかのカスタムメソッドを呼び出します。上記の期待値を達成しながら組み込みクラスをサブクラス化したい場合は、既定値の動作が組み込まれているメソッドをすべてオーバーライドする必要があります。既定では継承されているため、基底クラスに新しいメソッドを追加すると、サブクラスの意味づけが崩れる可能性があります。したがって、組み込みクラスを拡張するためのより良い方法は、[_コンポジション_](#継承を避ける) を使用することです。

### null を拡張

`extends null` は、[`Object.prototype` を継承しないオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)を簡単に作成できるようにするために設計されました。しかし、コンストラクター内で `super()` を呼び出すべきかどうかが未確定なため、オブジェクトを返さないコンストラクターの実装を使用して、実際にそのようなクラスを構築することは可能ではありません。 [TC39 委員会はこの機能を再び使えるようにするために作業しています](https://github.com/tc39/ecma262/pull/1321)。

```js
new (class extends null {})();
// TypeError: Super constructor null of anonymous class is not a constructor

new (class extends null {
  constructor() {}
})();
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

new (class extends null {
  constructor() {
    super();
  }
})();
// TypeError: Super constructor null of anonymous class is not a constructor
```

代わりに、コンストラクターから明示的にインスタンスを返す必要があります。

```js
class NullClass extends null {
  constructor() {
    // new.target を使用することで、派生クラスが正しいプロトタイプチェーンを
    // 持つことができる
    return Object.create(new.target.prototype);
  }
}

const proto = Object.getPrototypeOf;
console.log(proto(proto(new NullClass()))); // null
```

## 例

### extends の使用

最初の例では、 `Square` と呼ばれるクラスを `Polygon` と呼ばれるクラスから作成します。この例は、[ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html)[（ソース）](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)から転載しています。

```js
class Square extends Polygon {
  constructor(length) {
    // ここでは、親クラスのコンストラクターを呼び出し、
    // Polygon の幅と高さの寸法を渡します。
    super(length, length);
    // 注: 派生クラスでは、 'this' を使う前に super() を
    // 呼び出さなくてはなりません。さもないと参照エラーになります。
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### プレーンなオブジェクトの拡張

クラスは通常の（構築不可能な）オブジェクトを継承することはできません。このオブジェクトのすべてのプロパティを継承したインスタンスで利用できるようにして、通常のオブジェクトを継承したい場合は、代わりに {{jsxref("Object.setPrototypeOf()")}} を使用することができます。

```js
const Animal = {
  speak() {
    console.log(`${this.name}が鳴きます。`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("ミッチー");
d.speak(); // ミッチーが鳴きます。
```

### 組み込みオブジェクトでの extends の使用

この例では、組み込みの {{jsxref("Date")}} オブジェクトを拡張します。この例は、[ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html) [(ソース)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) から転載しています。

```js-nolint
class MyDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
```

### `Object` の拡張

JavaScript のオブジェクトはすべて既定では `Object.prototype` を継承しているので、一見すると `extends Object` と書くのは冗長に見えます。 `extends` をまったく書かない場合と異なる形で言えば、コンストラクター自体が {{jsxref("Object.keys()")}} のような静的メソッドを `Object` から継承していることくらいです。しかし、どの `Object` の静的メソッドも `this` の値を使用していないため、これらの静的メソッドを継承することに有益な値はありません。

{{jsxref("Object/Object", "Object()")}} コンストラクターはサブクラスのシナリオを特殊化します。 [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) によって暗黙的に呼び出された場合、常に `new.target.prototype` をプロトタイプとする新しいオブジェクトを初期化します。 `super()` に渡す値は無視されます。

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

この動作を、サブクラスを特殊化しないカスタムラッパーと比較してみてください。

```js
function MyObject(v) {
  return new Object(v);
}
class D extends MyObject {
  constructor(v) {
    super(v);
  }
}
console.log(new D(1) instanceof Number); // true
```

### species

派生配列クラス `MyArray` で {{jsxref("Array")}} オブジェクトを返したい場合もあります。 species パターンを使うと、既定のコンストラクターを上書きすることができます。

例えば、{{jsxref("Array.prototype.map()")}} のような既定のコンストラクターを返すメソッドを使用する場合、これらのメソッドは `MyArray` オブジェクトの代わりに、親の `Array` オブジェクトを返すようにします。シンボル {{jsxref("Symbol.species")}} を使用すると、これを行うことができます。

```js
class MyArray extends Array {
  // 親の Array コンストラクターの species を上書き
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

この動作は、多くの組み込みコピーメソッドで実装されています。この機能の注意点については、[組み込みクラスのサブクラス化](#組み込みクラスのサブクラス化)の説明を参照してください。

### ミックスイン

抽象サブクラスまたはミックスインは、クラスのテンプレートです。クラスはスーパークラスを 1 つしか持つことができないので、例えばツールクラスからの多重継承は不可能です。機能はスーパークラスが提供しなければなりません。

スーパークラスを入力とし、そのスーパークラスを拡張したサブクラスを出力とする関数が、ミックスインを実装するために使用することができます。

```js
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

これらのミックスインを使用するクラスは、次のように書くことができます。

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### 継承を避ける

オブジェクト指向プログラミングにおいて、継承はとても強い結合関係です。これは基底クラスのすべての振る舞いが既定でサブクラスに継承されることを意味します。例えば、 `ReadOnlyMap` の実装を考えてみましょう。

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("A read-only map must be set at construction time.");
  }
}
```

[`Map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) コンストラクターはインスタンスの `set()` メソッドを呼び出すからです。

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.
```

インスタンスが構築済みかどうかを示すためにプライベートなフラグを使用することで、これを回避することができます。しかし、この設計のより重大な問題は、[リスコフの置換原則](https://ja.wikipedia.org/wiki/リスコフの置換原則)を破ってしまうことです。これは、サブクラスはスーパークラスと置換可能であるべきだという状態です。もし関数が `Map` オブジェクトを期待するのであれば、 `ReadOnlyMap` オブジェクトも使用することができるはずです。

継承はしばしば[円-楕円問題](https://en.wikipedia.org/wiki/Circle%E2%80%93ellipse_problem)を引き起こします。なぜなら、どちらの型も、多くの共通の特徴を共有しているにもかかわらず、他の型の振る舞いを完全に内包していないからです。一般的に、継承を使用するとてもよい理由がない限り、代わりにコンポジションを使用する方がよいでしょう。コンポジションとは、あるクラスが他のクラスのオブジェクトへの参照を持っていて、そのオブジェクトを実装の詳細としてのみ使用していることを意味しています。

```js
class ReadOnlyMap {
  #data;
  constructor(values) {
    this.#data = new Map(values);
  }
  get(key) {
    return this.#data.get(key);
  }
  has(key) {
    return this.#data.has(key);
  }
  get size() {
    return this.#data.size;
  }
  *keys() {
    yield* this.#data.keys();
  }
  *values() {
    yield* this.#data.values();
  }
  *entries() {
    yield* this.#data.entries();
  }
  *[Symbol.iterator]() {
    yield* this.#data[Symbol.iterator]();
  }
}
```

この場合、 `ReadOnlyMap` クラスは `Map` のサブクラスではありませんが、同じメソッドを実装しています。これはコードの重複を意味しますが、 `ReadOnlyMap` クラスは `Map` クラスと強く結びつけられているわけではなく、 `Map` クラスが変更されても簡単に壊れることはありません。例えば、 `Map` クラスが `set()` を呼び出さない新しいユーティリティメソッド（[`getOrInsert()`](https://github.com/tc39/proposal-upsert) など）を追加した場合、 `ReadOnlyMap` クラスは `getOrInsert()` を上書きするように更新されない限り、読み取り専用になります。さらに、`ReadOnlyMap` オブジェクトは `set` メソッドをすべて持たないので、実行時にエラーを発生させるよりも正確です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/constructor", "constructor")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super")}}
