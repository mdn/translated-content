---
title: new 演算子
slug: Web/JavaScript/Reference/Operators/new
tags:
  - JavaScript
  - 言語機能
  - 左辺値式
  - 演算子
  - リファレンス
browser-compat: javascript.operators.new
translation_of: Web/JavaScript/Reference/Operators/new
---
{{jsSidebar("Operators")}}

**`new` 演算子**を使用すると、開発者はユーザー定義のオブジェクト型やコンストラクター関数を持つ組み込みオブジェクト型のインスタンスを作成することができます。

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## 構文

```js
new constructor[([arguments])]
```

### 引数

- `constructor`
  - : オブジェクトインスタンスの型を指定するクラスまたは関数です。
- `arguments`
  - : `constructor` が呼び出される際の引数のリストです。

## 解説

**`new`** 演算子は次のことを行います。

1. 空のプレーンな JavaScript オブジェクトを生成します。
2. 新しいオブジェクトにプロパティ (`__proto__`) を追加し、コンストラクター関数のプロトタイプオブジェクトに結びつけます。

    > **Note:** コンストラクター関数のプロトタイプに追加されたプロトタイプやオブジェクトは、そのためそのコンストラクター関数で（`new` を使用して）生成されたすべてのインスタンスからアクセスできます。

3. 新しく生成されたオブジェクトインスタンスを `this` コンテキストとして結びつけます。
    （すなわち、コンストラクター関数内の `this` へのすべての参照は、最初のステップで作成されたオブジェクトを参照するようになります。）
4. 関数がオブジェクトを返さない場合は `this` を返します。

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
    var myFoo = new Foo('Bar 1', 2021);
    ```

> **Note:** オブジェクトは、別のオブジェクトそのものをプロパティとして持つことができます。後述の例をご覧ください。

コード `new Foo(...)` を実行すると、以下の処理が行われます。

1. `Foo.prototype` を継承する、新しいオブジェクトを生成します。
2. 指定した引数を伴ってコンストラクター関数 `Foo` が呼び出され、 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) が新たに生成したオブジェクトに紐づけられます。`new Foo` は `new Foo()` と等価です。すなわち、引数を指定しない場合は `Foo` が引数なしで呼び出されます。
3. コンストラクター関数が返すオブジェクト (null, false, 3.1415 などのプリミティブ型ではないもの) が、 `new` 式の結果になります。コンストラクター関数が明示的にオブジェクトを返さない場合は、ステップ 1 で生成したオブジェクトを代わりに使用します（通常、コンストラクターは値を返しませんが、通常のオブジェクト生成プロセスをオーバーライドしたい場合はそのようにすることができます）。

以前生成したオブジェクトに、いつでもプロパティを追加できます。例えば `car1.color = "black"` という構文は、`color` プロパティを `car1` に追加して、値として "`black`" を代入します。

しかし、これは他のオブジェクトには影響を与えません。同じ型のすべてのオブジェクトに新たなプロパティを追加するには、 `Car` オブジェクト型の定義に対してプロパティを追加しなければなりません。

[`Function.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティを使用して、以前定義したオブジェクトに対して共有のプロパティを追加できます。これはオブジェクト型のあるインスタンスのプロパティではなく、関数を使用して生成したすべてのオブジェクトで共有するプロパティを定義します。以下のコードでは `Car` 型のオブジェクトすべてに対して color プロパティを値 `"original color"` で定義しています。また、インスタンスオブジェクト `car1` の color プロパティに文字列の値 "`black`" を上書きしています。詳しくは[プロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)をご覧ください。

```js
function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = 'original color';
console.log(car1.color);    // 'original color'

car1.color = 'black';
console.log(car1.color);    // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color);   // 'black'
console.log(car2.color);   // 'original color'
```

> **Note:** コンストラクター関数は通常の関数と同様に（つまり `new` 演算子なしで）呼び出すことができますが、この場合、新しいオブジェクトは作成されず、`this` の値も異なります。

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
var myCar = new Car('Eagle', 'Talon TSi', 1993);
```

この構文は `myCar` を生成して、プロパティに特定の値を代入しています。`myCar.make` の値は文字列 "Eagle"、`myCar.year` の値は整数 1993 などとなります。

`new` を呼び出して、`car` オブジェクトをいくつも生成できます。例えば、

```js
var kensCar = new Car('Nissan', '300ZX', 1992);
```

### それ自身が別のオブジェクトであるプロパティ

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
var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
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
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
```

この構文では新しいオブジェクトを生成するときに文字列や整数のリテラル値を渡す代わりに、owner の引数としてオブジェクト `rand` や `ken` を渡しています。`car2` の所有者名を調べるには、以下のようにしてプロパティにアクセスできます。

```js
car2.owner.name
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
