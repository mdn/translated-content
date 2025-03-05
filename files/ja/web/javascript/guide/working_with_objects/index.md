---
title: オブジェクトでの作業
slug: Web/JavaScript/Guide/Working_with_objects
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_classes")}}

JavaScript は、オブジェクトベースの枠組みで設計されています。オブジェクトはプロパティの集まりであり、[プロパティ](/ja/docs/Glossary/Property/JavaScript)は名前 (あるいは「キー」) と値との関連付けから成り立っています。プロパティの値を関数にすることもでき、その場合はプロパティは[メソッド](/ja/docs/Glossary/Method)と呼ばれます。

他の多くのプログラミング言語と同様、 JavaScript におけるオブジェクトも、現実世界の「もの」 (すなわちオブジェクト) になぞらえることができます。 JavaScript では、オブジェクトはプロパティと型を持つ独立した存在です。コップを例に考えてみましょう。コップはもの（オブジェクト）であり、さまざまな特性（プロパティ）を持っています。コップには色やデザイン、重さ、素材などがあります。同様に、 JavaScript オブジェクトにもプロパティが存在し、それらの特性を定義します。

ブラウザーで事前に定義されているオブジェクトに加えて、自分自身でオブジェクトを定義することができます。この章では、オブジェクト、プロパティ、メソッドの使用方法と、自分自身でオブジェクトを作成する方法について説明します。

## 新しいオブジェクトの作成

オブジェクトは[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を使って作成することができます。他にも、まずコンストラクター関数を作り、その関数を `new` 演算子との組み合わせで呼び出すことでオブジェクトをインスタンス化することもできます。

### オブジェクト初期化子の使用

オブジェクト初期化子は「オブジェクトリテラル」とも呼ばれます。「オブジェクト初期化子」は、C++ で使われる用語と同じ意味です。

オブジェクト初期化子を使ったオブジェクトの構文は次のようになります。

```js
const obj = {
  property1: value1, // property_# は識別子だったり、
  2: value2, // 数値だったり、
  "property n": value3, // 文字列だったりします
};
```

コロンの前の各プロパティ名は識別子（名前、数値、文字列リテラルのいずれか）であり、それぞれの `valueN` は、プロパティ名に割り当てる値となる式です。プロパティ名も式にすることができます。計算されるキーは、角括弧で囲む必要があります。[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)のリファレンスには、構文についてより詳細な説明が記載されています。

この例では、新しく作成されたオブジェクトが変数 `obj` に代入されています。これはオプションです。このオブジェクトを他の場所で参照する必要がない場合は、変数に割り当てる必要はありません。（オブジェクトが文として表示される場合は、オブジェクトリテラルを括弧で囲む必要がある場合があります。そうしないと、リテラルがブロック文と混同される可能性があります。）

オブジェクト初期化子は式であり、オブジェクト初期化子は、それが現れる文が実行されるたびに、新しいオブジェクトを作成します。同一のオブジェクト初期化子は、他にも異なるオブジェクトを作成しますが、それらを比較しても等しくはなりません。

次の文では、式 `cond` が true の場合にのみオブジェクトを作り、変数 `x` に代入します。

```js
let x;
if (cond) {
  x = { greeting: "hi there" };
}
```

次の例では 3 つのプロパティを持った `myHonda` を作ります。なお、`engine` プロパティもまた、プロパティを持つオブジェクトです。

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
```

初期化子で作成されたオブジェクトは、 {{jsxref("Object")}} のインスタンスではあるものの、他のオブジェクト型ではないため、プレーンオブジェクトと呼ばれます。 オブジェクト型の中には、特別な初期化子構文を保有するものもあります。例えば、[配列初期化子](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#配列リテラル)や[正規表現リテラル](/ja/docs/Web/JavaScript/Guide/Regular_expressions#正規表現の作成)などです。

### コンストラクター関数の使用

別の方法として、次の 2 段階でオブジェクトを作ることができます。

1. コンストラクター関数を記述してオブジェクトの型を定義します。この時、便宜上の理由から慣習的に、 1 文字目は大文字にします。
2. [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) でオブジェクトのインスタンスを作成します。

オブジェクトの型を定義するには、名前、プロパティ、メソッドを指定するオブジェクト型用の関数を作ります。例えば、車についてのオブジェクト型を作りたいとしましょう。このオブジェクト型は `Car` と呼ばれ、make、model、year のプロパティを持たせたいとします。これを行うには、以下のような関数を書きます。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

`this` を使うことで、関数に渡されたオブジェクトのプロパティに対し値を代入していることに注意してください。

以下のようにして `myCar` と呼ばれるオブジェクトを作成できるようになりました。

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

この文は `myCar` を作成し、プロパティとして指定した値を代入します。 すると、`myCar.make` の値は文字列 "Eagle"、 `myCar.model` は文字列 `"Talon TSi"`、`myCar.year` は整数 `1993` といった具合になります。仮引数と引数の順序は同じである必要があります。

`Car` オブジェクトは `new` を呼び出すことでいくつでも作ることができます。例えば、

```js
const randCar = new Car("Nissan", "300ZX", 1992);
const kenCar = new Car("Mazda", "Miata", 1990);
```

オブジェクトは、別のオブジェクトをプロパティとして持つことができます。例えば、`Person` という名前のオブジェクトを次のように定義しましょう。

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

それから、2 個の新しい `Person` オブジェクトを次のようにインスタンス化します。

```js
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

そして、`Car` の定義を `Person` オブジェクトを取る `owner` プロパティを含むよう、以下のように書き換えることができます。

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

新しいオブジェクトをインスタンス化するには、以下のようにします。

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

新しいオブジェクトを作成する際、上の文ではリテラル文字列や整数値を渡す代わりに、オブジェクト `rand` と `ken` を引数 owner として渡していることに注意してください。そして、 `car2` の owner の名前を知りたければ、以下のプロパティでアクセスできます。

```js
car2.owner.name;
```

なお、既に定義されたオブジェクトにはいつでもプロパティを追加することができます。例えば、以下の文は、

```js
car1.color = "black";
```

car1 にプロパティ `color` を追加し、そこに "black" という値を代入します。しかしながら、これは他のどのオブジェクトにも影響しません。同じ型のすべてのオブジェクトに新しいプロパティを追加するには、`Car` オブジェクト型の定義にそのプロパティを追加する必要があります。

コンストラクター関数を定義する際に、関数構文の代わりに [`class`](/ja/docs/Web/JavaScript/Reference/Classes) 構文を使用することもできます。 詳細については、[クラスガイド](/ja/docs/Web/JavaScript/Guide/Using_classes)を参照してください。

### Object.create() メソッドの使用

オブジェクトは {{jsxref("Object.create()")}} メソッドを使用して作成することもできます。このメソッドは、コンストラクター関数を定義せずに作りたいオブジェクトの[プロトタイプ](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)を選べるため、とても便利です。

```js
// Animal のプロパティとメソッドをカプセル化
const Animal = {
  type: "Invertebrates", // プロパティの既定値、「無脊椎動物」
  displayType() {
    // Animal の種類を表示するメソッド
    console.log(this.type);
  },
};

// animal1 という新しい animal 型を作成
const animal1 = Object.create(Animal);
animal1.displayType(); // 出力 : Invertebrates

// Fishes という新しい animal 型を作成
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // 出力 : Fishes
```

## オブジェクトとプロパティ

JavaScript オブジェクトには、関連付けられたプロパティがあります。オブジェクトのプロパティは、基本的に変数と同じですが、[スコープ](/ja/docs/Glossary/Scope)ではなくオブジェクトに関連付けられているという点が異なります。オブジェクトのプロパティは、オブジェクトの特性を定義します。

例えば、この例では `myCar` という名前のオブジェクトと、`make`、`model`、`year` という名前のプロパティを作成し、それぞれ `"Ford"`、`"Mustang"`、`1969` という値を設定します。

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

JavaScript の変数と同様に、プロパティ名は大文字と小文字が区別されます。プロパティ名は文字列またはシンボルのみです。シンボルでない限り、すべてのキーは[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)されます。[配列の添字](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列の添字)は、実際には、文字列キーに整数が格納されたプロパティです。

### プロパティのアクセス

オブジェクトのプロパティは、プロパティ名でアクセスすることができます。[プロパティのアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)には「ドット記法」と「ブラケット記法」の 2 つの構文があります。例えば、`myCar` オブジェクトのプロパティに次のようにアクセスできます。

```js
// ドット記法
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// ブラケット記法
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

オブジェクトのプロパティ名には、あらゆる JavaScript 文字列（空文字列を含む）または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)にすることができます。しかし、 JavaScript の有効な識別子ではない名前のプロパティにアクセスするには、ドット記法を使用することはできません。例えば、空白やハイフンを含むプロパティ名、数字で始まるプロパティ名、または変数内に保持されているプロパティ名は、ブラケット記法を使用してのみアクセスすることができます。この記法は、プロパティ名が動的に決定される場合、すなわち実行時まで決定できない場合にとても便利です。例えば、次のようになります。

```js
const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "type という名前のキーに対するドット記法";
myObj["date created"] = "このキーは空白を含む";
myObj[str] = "このキーは変数 str に入っている";
myObj[rand] = "ここでは乱数がキーである";
myObj[anotherObj] = "このキーは anotherObj オブジェクト";
myObj[""] = "このキーは空文字列";

console.log(myObj);
// {
//   type: 'type という名前のキーに対するドット記法',
//   'date created': 'このキーは空白を含む',
//   myString: 'このキーは変数 str に入っている',
//   '0.6398914448618778': 'ここでは乱数がキーである',
//   '[object Object]': 'このキーは anotherObj オブジェクト',
//   '': 'このキーは空文字列'
// }
console.log(myObj.myString); // 'このキーは変数 str に入っている'
```

上のコードでは、キー `anotherObj` はオブジェクトであり、文字列でもシンボルでもありません。 それが `myObj` に追加されると、 JavaScript は {{jsxref("Object/toString", "toString()")}} メソッドを `anotherObj` に対して呼び出し、その結果の文字列を新しいキーとして使用します。

また、変数に格納された文字列を使用してプロパティにアクセスすることもできます。 変数はブラケット記法で渡す必要があります。 上記の例では、変数 `str` に `"myString"` が格納されており、プロパティ名は `"myString"` です。 したがって、 `myObj.str` は undefined を返します。

```js
str = "myString";
myObj[str] = "このキーは変数 str に入っている";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'このキーは変数 str に入っている'
console.log(myObj.myString); // 'このキーは変数 str に入っている'
```

これにより、実行時に決定された任意のプロパティにアクセスすることができます。

```js
let propertyName = "make";
myCar[propertyName] = "Ford";

// 変数のコンテンツを変更することで、さまざまなプロパティにアクセスする
propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar); // { make: 'Ford', model: 'Mustang' }
```

ただし、外部からの入力で指定された名前のプロパティにアクセスするためにブラケットを使用することには注意が必要です。これにより、コードが[オブジェクトインジェクション攻撃](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md)を許しやすくなる可能性があります。

オブジェクトに存在しないプロパティの値は {{jsxref("undefined")}} です（[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) ではありません）。

```js
myCar.nonexistentProperty; // undefined
```

### プロパティの列挙

オブジェクトのプロパティを列挙/走査するネイティブの方法は 3 つあります。

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループ。この方法では、オブジェクトの列挙可能な文字列プロパティすべてとプロトタイプチェーンをすべて走査します。
- {{jsxref("Object.keys()")}}。このメソッドは、オブジェクト `myObj` 内の自分自身で文字列のプロパティ名（「キー」）を配列で返しますが、プロトタイプチェーン内のものは返しません。
- {{jsxref("Object.getOwnPropertyNames()")}}。この方法では、オブジェクト `myObj` 内の自分自身の文字列プロパティ名をすべて含む配列を返します。ただし、それらが列挙可能かどうかは関係ありません。

ブラケット記法を用いて [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) でオブジェクトの列挙可能なプロパティすべてを走査することができます。どのように動作するかを説明するため、以下にオブジェクトとオブジェクト名を引数として渡すと、オブジェクトのプロパティを表示する関数を示します。

```js
function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() は、オブジェクトのプロトタイプチェーンからのプロパティを除く、「自分自身のプロパティ」のみを表示させるために使用されている
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
```

「自分自身のプロパティ」とは、オブジェクトのプロパティを指しますが、プロトタイプチェーンのプロパティは除きます。 関数呼び出し `showProps(myCar, 'myCar')` は、次のようになります。

```plain
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

上記のものは次のものと同等です。

```js
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```

継承された列挙可能でないプロパティを列挙するネイティブの方法はありません。ただし、次の関数で実現することができます。

```js
function listAllProperties(myObj) {
  let objectToInspect = myObj;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

  return result;
}
```

詳しくは、[プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)を参照してください。

### プロパティの削除

継承されたものでないプロパティは、 [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子を使って削除できます。以下のコードはプロパティを削除する方法です。

```js
// 2 つのプロパティ a と b を持つ新しいオブジェクト myobj を作成。
const myObj = new Object();
myObj.a = 5;
myObj.b = 12;

// プロパティ a を削除すると、myobj には b プロパティだけが残る。
delete myObj.a;
console.log("a" in myObj); // false
```

## 継承

JavaScript のすべてのオブジェクトは、1 つ以上の他のオブジェクトを継承しています。継承元になるオブジェクトはプロトタイプと呼ばれ、継承されたプロパティはコンストラクターの `prototype` オブジェクトにあります。詳細は[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)を参照してください。

### ある型のオブジェクトすべてに対するプロパティの定義

特定の[コンストラクター](#コンストラクター関数の使用)で作成されたすべてのオブジェクトに対してプロパティを追加するには、 [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) プロパティを使用します。こうすると、オブジェクトの 1 つのインスタンスだけでなく、特定の型のオブジェクトすべてで共有されるプロパティを定義することができます。次のコードは `color` プロパティをすべての `Car` 型のオブジェクトに追加し、そのプロパティの値を `car1` インスタンスから読み取っています。

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

## メソッドの定義

メソッドは、オブジェクトに関連付けられた関数です。簡単に言えば、オブジェクトのプロパティである関数です。メソッドは通常の関数と同じ方法で定義されますが、オブジェクトのプロパティに代入される点が異なります。詳細は[メソッドの定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を参照してください。例えば、

```js
objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // ...処理を行う
  },

  // これでも動作します
  myOtherMethod(params) {
    // ...他の処理を行う
  },
};
```

ここで `objectName` は既存のオブジェクトを、`methodName` はメソッドを割り当てたい名前を、`functionName` は関数の名前を指しています。

次に、このオブジェクトのコンテキストでメソッドを呼び出すことができます。次のようになります。

```js
objectName.methodName(params);
```

メソッドは通常、コンストラクターの `prototype` オブジェクトで定義され、同じ型のオブジェクトすべてが同じメソッドを共有するようにします。例えば、前回定義した `Car` オブジェクトのプロパティを書式化して表示する関数を定義することができます。

```js
Car.prototype.displayCar = function () {
  const result = `美しい ${this.year} 年式の ${this.make} ${this.model}`;
  console.log(result);
};
```

メソッドが属するオブジェクトを参照する際に `this` が使用されていることに注目してください。次のようにして、個々のオブジェクトに対して `displayCar` メソッドを呼び出せます。

```js
car1.displayCar();
car2.displayCar();
```

### オブジェクト参照のための this の使用

JavaScript には、メソッド内で現在のオブジェクトを参照するための [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) という特別なキーワードがあります。以下の例には、`Manager` と `Intern` という 2 つのオブジェクトがあり、それぞれが独自の `name`, `age`, `job` を持っています。関数 `sayHi()` の中に `this.name` があることに注目してください。 2 つのオブジェクトに追加すると、同じ関数で、それぞれに添付されたオブジェクトの名前付きメッセージが出力されます。

```js
const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// 両方のオブジェクトに sayHi 関数を追加
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone
```

`this` は関数呼び出しの「隠し引数」であり、関数が呼び出される前にオブジェクトを指定することによって渡されます。例えば、 `Manager.sayHi()` では、 `this` は `Manager` オブジェクトです。 `Manager` は関数 `sayHi()` の前に来るからです。別のオブジェクトから同じ関数にアクセスすると、 `this` も同様に変更されます。 {{jsxref("Function.prototype.call()")}} や {{jsxref("Reflect.apply()")}} のような他のメソッドを使用して関数を呼び出す場合、 `this` の値を明示的に引数として渡すことができます。

## ゲッターとセッターの定義

[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)は、プロパティに結び付けられ、特定のプロパティの値を取得するメソッドです。[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)は、プロパティに結び付けられ、特定のプロパティの値を設定するメソッドです。組み合わせると、プロパティの値を間接的に表すことができます。

ゲッターとセッターは次のどちらの方法でも作れます。

- [オブジェクト初期化子](#オブジェクト初期化子の使用)の中で定義する。
- 既存のオブジェクトへ後から追加する。

[オブジェクト初期化子](#オブジェクト初期化子の使用)の中では、ゲッターとセッターは、通常の[メソッド](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)のように定義しますが、その前にキーワード `get` または `set` をつけます。ゲッターメソッドは引数を想定してはいけませんし、セッターメソッドは正確に 1 つの引数（設定する新しい値）を期待します。例えば、以下のようになります。

```js
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8、 get b() メソッドから返されたもの
myObj.c = 50; // set c(x) メソッドを呼び出し
console.log(myObj.a); // 25
```

`myObj` オブジェクトのプロパティは以下の通りです。

- `myObj.a` — 数値
- `myObj.b` — ゲッターで、 `myObj.a` + 1 を返す
- `myObj.c` — セッターで、 `myObj.c` に設定された値を 1/2 にしたものを `myObj.a` に設定する

ゲッターとセッターはまた、 {{jsxref("Object.defineProperties()")}} メソッドを使用して、生成後のオブジェクトにいつでも追加できます。このメソッドの第 1 引数はゲッターまたはセッターを定義するオブジェクトです。第 2 引数はプロパティ名がゲッターまたはセッターの名前で、プロパティ値がゲッターまたはセッター関数を定義するオブジェクトです。前回の例と同じゲッターとセッターを定義する例を見てみましょう。

```js
const myObj = { a: 0 };

Object.defineProperties(myObj, {
  b: {
    get() {
      return this.a + 1;
    },
  },
  c: {
    set(x) {
      this.a = x / 2;
    },
  },
});

myObj.c = 10; // 'a' プロパティに 10 / 2 (5) を代入するセッターを実行
console.log(myObj.b); // a + 1 つまり 6 を返すゲッターを実行
```

2 つの方法のどちらを選ぶのかは、自身のプログラミングスタイルや行っている作業によります。すでにオブジェクト初期化子を気に入っているのなら、プロトタイプの定義時にほとんどの場合、最初の方法を選ぶでしょう。この方法はより簡潔で自然です。しかしながら、ゲッターやセッターを後から追加しなければならないとき、例えば自分がプロトタイプやオブジェクトの詳細を書いていない場合には、2 番目の方法だけが使えます。2 番目の方法には JavaScript の動的な性質が表現されています。ただし、コードを読みにくく理解しづらいものにする可能性があります。

## オブジェクトの比較

JavaScript では、オブジェクトは参照型です。2 つの異なるオブジェクトは、同じプロパティを持っていても等値とは見なされません。同じオブジェクトへの参照を比較した時のみ真となります。

```js
// 2 つの変数は、同じプロパティを持つ 2 つの異なるオブジェクト
const fruit = { name: "apple" };
const anotherFruit = { name: "apple" };

fruit == anotherFruit; // false が返される
fruit === anotherFruit; // false が返される
```

```js
// 2 つの変数、オブジェクトは 1 つ
const fruit = { name: "apple" };
const anotherFruit = fruit; // anotherFruit に fruit オブジェクトへの参照を代入

// fruit と anotherFruit は同じオブジェクトを指している
fruit == anotherFruit; // true が返される
fruit === anotherFruit; // true が返される

fruit.name = "grape";
console.log(anotherFruit); // { name: "apple" } ではなく { name: "grape" } と出力される
```

比較演算子についての詳細は、[比較演算子](/ja/docs/Web/JavaScript/Reference/Operators)をご覧ください。

## 関連情報

- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Using_classes")}}
