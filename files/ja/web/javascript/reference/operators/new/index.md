---
title: new 演算子
slug: Web/JavaScript/Reference/Operators/new
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`new`** 演算子を使用すると、開発者はユーザー定義のオブジェクト型やコンストラクター関数を持つ組み込みオブジェクト型のインスタンスを作成することができます。

{{InteractiveExample("JavaScript デモ: new 演算子")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make);
// 予想される結果: "Eagle"
```

## 構文

```js-nolint
new constructor
new constructor()
new constructor(arg1)
new constructor(arg1, arg2)
new constructor(arg1, arg2, /* …, */ argN)
```

### 引数

- `constructor`
  - : オブジェクトインスタンスの型を規定するクラスまたは関数。この式は、十分な[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#表)を持つものならば何でもよく、例えば識別し、[プロパティアクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)、別の `new` 式でも構いませんが、[オプショナルチェーン](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)は許可されません。
- `arg1`, `arg2`, …, `argN`
  - : `constructor` が呼び出される際の引数のリストです。`new Foo` は `new Foo()` と同等です。つまり、引数のリストが指定されていない場合、 `Foo` は引数なしで呼び出されます。

## 解説

関数が **`new`** キーワード付きで呼び出されると、その関数はコンストラクターとして使用されます。 `new` は次のことを行います。

1. 空のプレーンな JavaScript オブジェクトを生成します。便宜上、これを `newInstance` と呼びましょう。
2. `newInstance` の [[Prototype]] を、このコンストラクター関数の `prototype` が {{jsxref("Object")}} であれば、その `prototype` を指すように設定します。そうでない場合、`newInstance` は `Object.prototype` を [[Prototype]] として、プレーンなオブジェクトのままにします。

   > [!NOTE]
   > したがって、コンストラクター関数の `prototype` プロパティに追加されたプロパティやオブジェクトは、そのコンストラクター関数から作成されたすべてのインスタンスからアクセス可能です。

3. `newInstance` を [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) コンテキストとしてバインドし、指定された引数でコンストラクター関数を実行します（つまり、コンストラクター関数内の `this` へのすべての参照は、 `newInstance` を参照するようになります）。
4. コンストラクター関数が[プリミティブ以外](/ja/docs/Web/JavaScript/Guide/Data_structures#primitive_values)を返した場合は、この返値が `new` 式全体の結果となります。それ以外の場合、コンストラクター関数が何も返さなかったりプリミティブ値を返したりすると、代わりに `newInstance` が返されます。 （通常、コンストラクターは値を返しません。ただし、通常のオブジェクト作成プロセスを上書きするために値を返すことも選べます。）

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)は `new` 演算子をつけないとインスタンス化することはできません。`new` なしでクラスを呼び出そうとすると `TypeError` が発生します。

ユーザー定義のオブジェクトを生成するには、2 つのステップが必要です。

1. オブジェクトの名前とプロパティを指定する関数を書くことで、オブジェクトの型を定義します。
   例えば、オブジェクト `Foo` を生成するコンストラクター関数は以下のようになります。

   ```js
   function Foo(bar1, bar2) {
     this.bar1 = bar1;
     this.bar2 = bar2;
   }
   ```

2. `new` 演算子を使用して、オブジェクトのインスタンスを生成します。

   ```js
   const myFoo = new Foo("Bar 1", 2021);
   ```

> [!NOTE]
> オブジェクトは、別のオブジェクトそのものをプロパティとして持つことができます。以下の例を参照してください。

以前定義したオブジェクトインスタンスに、いつでもプロパティを追加できます。例えば `car1.color = "black"` という構文は、`color` プロパティを `car1` に追加して、値として `"black"` を代入します。

しかし、これはそれ以外のオブジェクトには影響しません。同じ型のすべてのオブジェクトに新しいプロパティを追加するには、コンストラクターの `prototype` プロパティにそのプロパティを追加する必要があります。これにより、そのオブジェクトの単一のインスタンスではなく、その関数で生成されるすべてのオブジェクトが共有するプロパティが定義されます。次のコードは、 `Car` 型のすべてのオブジェクトに `color` プロパティを `"original color"` の値で追加するもので、その後にインスタンスオブジェクト `car1` でのみ、その値を文字列 `"black"` で上書きします。詳細については、[プロトタイプ](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)を参照してください。

```js
function Car() {}
const car1 = new Car();
const car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "original color";
console.log(car1.color); // 'original color'

car1.color = "black";
console.log(car1.color); // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color); // 'black'
console.log(car2.color); // 'original color'
```

> [!NOTE]
> コンストラクター関数は通常の関数と同様に（つまり `new` 演算子なしで）呼び出すことができますが、この場合、新しいオブジェクトは作成されず、`this` の値も異なります。

関数は、 `new` をつけて呼び出されたかどうかを [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) で確認できます。 `new.target` が `undefined` になるのは、関数が `new` なしで呼び出された場合のみです。例えば、関数が呼び出された場合とコンストラクターとして呼び出された場合で異なる動作をするようにできます。

```js
function Car(color) {
  if (!new.target) {
    // 関数として呼び出された
    return `${color} car`;
  }
  // new 付きで呼び出された
  this.color = color;
}

const a = Car("red"); // a は "red car"
const b = new Car("red"); // b は `Car { color: "red" }`
```

ES6で[クラス](/ja/docs/Web/JavaScript/Reference/Classes)が導入される前は、ほとんどの JavaScript 組み込みオブジェクトは呼び出し可能かつコンストラクターとして使用可能でしたが、その多くは異なる挙動を示していました。いくつか名前を挙げます。

- [`Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/Error), [`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) は、関数とコンストラクターのどちらとして呼び出されても同じ動作をします。
- [`Boolean()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), [`String()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String) は、関数として呼び出された場合は引数を対応するプリミティブに型変換し、コンストラクターとして呼び出された場合はラッパーオブジェクトを返します。
- [`Date()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) は、呼び出された時点での現在の日付を表す文字列を返します。これは `new Date().toString()` と同等です。

ES6 以降、言語はコンストラクターと関数の区別をより厳格に扱います。例えば、

- [`Symbol()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) と [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) は `new` なしでのみ呼び出すことができます。コンストラクターとして呼び出そうとすると `TypeError` が発生します。
- [`Proxy`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) と [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) は `new` 付きでのみ構築できます。関数として呼び出そうとすると `TypeError` が発生します。

## 例

### オブジェクトの型とオブジェクトのインスタンス

自動車用のオブジェクト型を作成したいとします。このオブジェクト型は `Car` という名前で、make、model、year というプロパティを持たせます。そのために、以下の関数を記述します。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

これで、以下のようにして `myCar` という名前のオブジェクトを生成できます。

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

この構文は `myCar` を生成して、プロパティに特定の値を代入しています。`myCar.make` の値は文字列 "Eagle"、`myCar.year` の値は整数 1993 などとなります。

`new` を呼び出して、`car` オブジェクトをいくつも生成できます。例えば、

```js
const kensCar = new Car("Nissan", "300ZX", 1992);
```

### それ自身が別のオブジェクトであるオブジェクトプロパティ

以下のように、`Person` という名前のオブジェクトを定義します。

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

そして、以下のように `Person` オブジェクトのインスタンスを新たに 2 つ生成します。

```js
const rand = new Person("Rand McNally", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

さらに `Car` の定義を、以下のように `Person` オブジェクトを値としてとる `owner` プロパティを持つように書き換えます:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

新しいオブジェクトを生成するため、以下のように使用します。

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

この構文では新しいオブジェクトを生成するときに文字列や整数のリテラル値を渡す代わりに、owner の引数としてオブジェクト `rand` や `ken` を渡しています。`car2` の所有者名を調べるには、以下のようにしてプロパティにアクセスできます。

```js
car2.owner.name;
```

### `new` をクラスで使用

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Caroline");
p.greet(); // Hello, my name is Caroline
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
