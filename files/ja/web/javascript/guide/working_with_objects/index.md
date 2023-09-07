---
title: オブジェクトでの作業
slug: Web/JavaScript/Guide/Working_with_objects
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}

JavaScript は、シンプルなオブジェクトベースの枠組みを持つ言語として設計されています。JavaScript におけるオブジェクトはプロパティの集まりであり、プロパティは名前 (あるいは*キー*) と値との関連付けから成り立っています。プロパティの値を関数にすることもでき、これはいわゆるオブジェクトのメソッドとなります。ブラウザーにあらかじめ定義されているオブジェクトに加え、独自のオブジェクトを定義することもできます。この節ではオブジェクト、プロパティ、関数、メソッドの使い方と、独自のオブジェクトを作成する方法を説明します。

## オブジェクトの概要

他の多くのプログラミング言語と同様、JavaScript におけるオブジェクトも、現実世界の「もの」 (すなわちオブジェクト) になぞらえることができます。JavaScript におけるオブジェクトの概念は、現実世界に実在する「もの」との対比で解釈できます。

JavaScript において、オブジェクトはプロパティと型を持つ独立した存在です。カップを例に考えてみましょう。カップは様々なプロパティ (特性) をもったもの (オブジェクト) です。カップは、色や形状、重さや材質といったプロパティを持っています。同様に、JavaScript のオブジェクトもプロパティを持つことができ、プロパティによってそのオブジェクトの特徴を定義することができます。

## オブジェクトとプロパティ

JavaScript のオブジェクトは、自身に関連付けられたプロパティを持ちます。オブジェクトのプロパティは、オブジェクトに関連付けられている変数と捉えることができます。オブジェクトのプロパティは、オブジェクトに属するものという点を除けば、基本的に通常の JavaScript 変数と同じようなものです。オブジェクトのプロパティは、オブジェクトの特性を定義します。オブジェクトのプロパティには、単純なドット表記でアクセスします。

```js
objectName.propertyName;
```

すべての JavaScript の変数と同じく、オブジェクト名 (通常の変数にもなります) とプロパティ名では、大文字と小文字は厳密に区別されます。プロパティに値を代入することでプロパティを定義する事ができます。以下のようにして、`myCar` という名前のオブジェクトを作成し、`make`、`model`、`year` という名前のプロパティを付与することができます

```js
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

上記の例は、**[オブジェクト初期化子](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#Object_initializers)**を使用して作成することもできます。オブジェクト初期化子は、中括弧 (`{}`) で囲まれたオブジェクトのプロパティ名と関連する値の 0 個以上のペアをカンマで区切ったリストです。

```js
var myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

オブジェクトに割り当てられていないプロパティは {{jsxref("undefined")}} です ({{jsxref("null")}} ではありません)。

```js
myCar.color; // undefined
```

JavaScript オブジェクトのプロパティは、ブラケット (角括弧) 記述法でもアクセスすることができます (詳しくは[プロパティのアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を参照してください)。個々のプロパティが文字列値と関連付けられてアクセスできるため、オブジェクトは*連想配列*と呼ばれることがあります。ですから例えば、`myCar` オブジェクトのプロパティに次のようにアクセスできます。

```js
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

オブジェクトプロパティの名前には、あらゆる有効な JavaScript 文字列 (空文字列を含む) か、文字列に変換できるものが使用できます。しかしながら、JavaScript 識別子として有効ではないプロパティ名 (例えば空白やダッシュを含んでいたり、数字で始まったりするプロパティ名) には、ブラケット (角括弧) 表記法でのみアクセスできます。この表記法はプロパティ名を動的に決める場合 (プロパティ名が実行時に決まる場合) に便利です。例を示します。

```js
// カンマで区切られた 4 つの変数が作成され、
// 1 つに割り当てられます。
var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();

myObj.type = "ドット表記";
myObj["date created"] = "空白入りの文字列";
myObj[str] = "文字列の値";
myObj[rand] = "乱数";
myObj[obj] = "オブジェクト";
myObj[""] = "空文字列も可能";

console.log(myObj);
```

なお、JavaScript のオブジェクトのプロパティ名 (キー) は文字列かシンボルしか扱えないので、各括弧表記の中のキーはすべて、シンボルを除いて文字列に変換されます (将来、[クラスフィールドの提案](https://github.com/tc39/proposal-class-fields)が進行すると、プライベート名も追加される予定ですが、`[]` の形は使用できません)。例えば、上記のコードで `obj` キーが `myObj` に追加されるとき、JavaScript は `obj.toString()` メソッドを呼び出し、結果の文字列を新しいキーとして使用します。

変数内の文字列値を使ってプロパティにアクセスすることもできます。

```js
var propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Mustang";
```

ブラケット表記法を用いて [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) でオブジェクトの列挙可能なプロパティすべてを巡回することができます。どのように動作するかを説明するため、以下にオブジェクトとオブジェクト名を引数として渡すと、オブジェクトのプロパティを表示する関数を示します。

```js
function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    // obj.hasOwnProperty() はオブジェクトのプロトタイプチェーンからプロパティを絞り込むために使用しています
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
```

そして、`showProps(myCar, "myCar")` のように関数を呼び出すと次の結果が返ります。

```js
myCar.make = Ford;
myCar.model = Mustang;
myCar.year = 1969;
```

## オブジェクトの全プロパティの列挙

[ECMAScript 5](/ja/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) 以降では、オブジェクトのプロパティをリストアップ/トラバース (横断走査) する言語特有の方法が 3 つあります。

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループ
  この方法は、オブジェクトとそのプロトタイプチェーンにある列挙可能なプロパティをすべて横断します
- {{jsxref("Object.keys", "Object.keys(o)")}}
  このメソッドは、そのオブジェクト独自の (プロトタイプチェーンを除く) 列挙可能なすべてのプロパティ名 ("keys") を配列で返します
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(o)")}}
  このメソッドは、そのオブジェクト独自のすべてのプロパティ名を (列挙可能かどうかに関わらず) 配列で返します

ECMAScript 5 よりも前では、オブジェクトの全プロパティを列挙する言語特有の方法はありません。しかし、次の関数で実現できます。

```js
function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }

  return result;
}
```

これは「隠された」プロパティ (プロトタイプチェーンのより近いところに他の同名のプロパティがあるために、オブジェクトを通してアクセスすることができないプロトタイプチェーン上のプロパティ) を見つけるのに便利です。アクセス可能なプロパティを列挙するには、配列内の重複を削除するだけで簡単に実現できます。

## 新しいオブジェクトの作成

JavaScript には数多くの定義済みオブジェクトがあります。さらに、独自のオブジェクトを定義できます。オブジェクトは{{jsxref("Operators/Object_initializer","オブジェクト初期化子","","true")}}を使って作成することができます。他にも、まずコンストラクター関数を作り、その関数を `new` 演算子との組み合わせで呼び出すことでオブジェクトをインスタンス化することもできます。

### オブジェクト初期化子の使用

コンストラクター関数を使ったオブジェクトの作成のほかに、[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を使用してオブジェクトを作成することができます。オブジェクト初期化子を使うことを、オブジェクトをリテラル表記法で作ると表現することがあります。「オブジェクト初期化子」は、C++ で使われる用語と同じ意味です。

オブジェクト初期化子を使ったオブジェクトの構文は次のようになります。

```js
var obj = {
  property_1: value_1, // property_# は識別子だったり、
  2: value_2, // 数値だったり、
  // ...,
  "property n": value_n, // 文字列だったりします
};
```

`obj` は新しいオブジェクトの名前、`property_i` は識別子 (名前、数値、または文字列リテラルのいずれか)、`value_i` は式で、その値が `property_i` に代入されます。`obj` と代入は任意です。もし他の場所でこのオブジェクトを参照する必要がないのなら、変数への代入は不要です。(なお、もしオブジェクトが文の書かれる場所に現れる場合は、リテラルがブロック文と混同されないように、オブジェクトリテラルを括弧で囲む必要がある場合があります。)

オブジェクト初期化子は式であり、それぞれのオブジェクト初期化子は、それが現れる文が実行されるたびにオブジェクトを作成する結果になります。オブジェクト初期化子が同一であっても、作成されるオブジェクトは互いに等しいとはみなされません。オブジェクトは `new Object()` の呼び出しが行われたかのように作成されます。つまり、オブジェクトリテラル式から作成されるオブジェクトは `Object` のインスタンスです。

次の文では、式 `cond` が true の場合にのみオブジェクトを作り、変数 `x` に代入します。

```js
if (cond) var x = { greeting: "hi there" };
```

次の例では 3 つのプロパティを持った `myHonda` を作ります。なお、`engine` プロパティもまた、プロパティを持つオブジェクトです。

```js
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
```

配列を作るためにオブジェクト初期化子を使うこともできます。[配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)を参照してください。

### コンストラクター関数の使用

別の方法として、次の 2 つの手順でオブジェクトを作ることができます。

1. コンストラクター関数を記述してオブジェクトの型を定義します。この時、便宜上の理由から慣習的に、1 文字目は大文字とします。
2. `new` でオブジェクトのインスタンスを作成します。

オブジェクトの型を定義するには、名前、プロパティ、メソッドを指定するオブジェクト型用の関数を作ります。例えば、車についてのオブジェクト型を作りたいとしましょう。このオブジェクト型は `car` と呼ばれ、make、model、year のプロパティを持たせたいとします。これを行うには、以下のような関数を書きます。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

`this` を使うことで、関数に渡されたオブジェクトのプロパティに対し値を代入していることに注意してください。

以下のようにして `mycar` と呼ばれるオブジェクトを作成できるようになりました。

```js
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

この文では `mycar` を作り、プロパティに指定した値を代入します。`mycar.make` の値は文字列 "Eagle" になり、`mycar.year` は整数 1993 になり、といった具合です。

`new` を使って `car` オブジェクトをいくつでも作れます。例えば、

```js
var kenscar = new Car("Nissan", "300ZX", 1992);
var vpgscar = new Car("Mazda", "Miata", 1990);
```

オブジェクトは、別のオブジェクトをプロパティとして持つことができます。例えば、`person` という名前のオブジェクトを次のように定義しましょう。

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

それから、2 個の新しい `person` オブジェクトを次のようにインスタンス化します。

```js
var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
```

そして、`Car` の定義を `person` オブジェクトを取る `owner` プロパティを含むよう、以下のように書き換えることができます。

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
var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
```

新しいオブジェクトを作成する際、上の文ではリテラル文字列や整数値を渡す代わりに、オブジェクト `rand` と `ken` を引数 owner として渡していることに注意してください。そして、car2 の owner の名前を知りたければ、以下のプロパティでアクセスできます。

```js
car2.owner.name;
```

なお、既に定義されたオブジェクトにはいつでもプロパティを追加することができます。例えば、以下の文は、

```js
car1.color = "black";
```

car1 にプロパティ `color` を追加し、そこに "black" という値を代入します。しかしながら、これは他のどのオブジェクトにも影響しません。同じ型のすべてのオブジェクトに新しいプロパティを追加するには、`car` オブジェクト型の定義にそのプロパティを追加する必要があります。

### Object.create メソッドの使用

オブジェクトは {{jsxref("Object.create()")}} メソッドを使用して作成することもできます。このメソッドは、コンストラクター関数の定義なしに作りたいオブジェクトのプロトタイプを選べるため、とても便利です。

```js
// Animal のプロパティとメソッドをカプセル化
var Animal = {
  type: "Invertebrates", // プロパティの既定値、「無脊椎動物」
  displayType: function () {
    // Animal の種類を表示するメソッド
    console.log(this.type);
  },
};

// animal1 という新しい animal 型を作成
var animal1 = Object.create(Animal);
animal1.displayType(); // 出力 : Invertebrates

// Fishes という新しい animal 型を作成
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // 出力 : Fishes
```

## 継承

JavaScript のすべてのオブジェクトは、1 つ以上の他のオブジェクトを継承しています。継承元になるオブジェクトはプロトタイプと呼ばれ、継承されたプロパティはコンストラクターの `prototype` オブジェクトにあります。詳細は[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を参照してください。

## オブジェクトプロパティのインデックス付け

オブジェクトのプロパティは、プロパティ名または番号インデックスで参照することができます。名前によってプロパティを初期定義した場合、常に名前を使って参照する必要があり、インデックスによってプロパティを初期定義した場合、常にインデックスを使って参照する必要があります。

この制限は、(以前に `Car` オブジェクト型に対して行ったように) コンストラクター関数でオブジェクトとプロパティを作るときや、個々のプロパティを明示的に定義した場合 (例えば `myCar.color = "red"`) に適用されます。初めにオブジェクトプロパティをインデックスで、たとえば `myCar[5] = "25 mpg"` のように定義した場合、以降そのプロパティは `myCar[5]` としてしか参照できません。

このルールの例外は、`forms` 配列型オブジェクトのような HTML から反映された配列型オブジェクトです。この配列型オブジェクトにあるオブジェクトは、いつでもインデックス (文書中に現れる位置を基準としたもの) と名前 (定義されていれば) のどちらからも参照できます。例えば、文書内の 2 つ目の `<FORM>` タグが `NAME` 属性として "myForm" という値を持つとき、フォームは `document.forms[1]`、`document.forms["myForm"]` 、`document.forms.myForm` のいずれかで参照できます。

## オブジェクト型に対するプロパティの定義

`prototype` プロパティを使用すると、定義済みのオブジェクト型に対してプロパティを追加することができます。このプロパティはオブジェクトの 1 つのインスタンスだけではなく、指定された型のすべてのオブジェクトで共有されます。次のコードはすべての `car` 型のオブジェクトに `color` プロパティを追加し、オブジェクト `car1` の `color` プロパティに値を代入します。

```js
Car.prototype.color = null;
car1.color = "black";
```

詳しくは、[JavaScript リファレンス](/ja/docs/JavaScript/Reference)内にある、`Function` オブジェクトの [`prototype` プロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)を参照してください。

## メソッドの定義

メソッドはオブジェクトに関連付けられた関数です。簡単に言えば、オブジェクトのプロパティである関数です。メソッドは通常の関数と同じ方法で定義されますが、オブジェクトのプロパティに代入される点が異なります。詳細は[メソッドの定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を参照してください。例えば、

```js
objectName.methodname = functionName;

var myObj = {
  myMethod: function(params) {
    // ...処理を行う
  }

  // これでも動作します

  myOtherMethod(params) {
    // ...他の処理を行う
  }
};
```

ここで `objectName` は既存のオブジェクトを、`methodname` はメソッドを割り当てたい名前を、`functionName` は関数の名前を指しています。

そして次のようにオブジェクトに続けてメソッドを呼び出します。

```js
object.methodname(params);
```

オブジェクトのコンストラクター関数にメソッドの定義を含めることで、オブジェクト型に対してメソッドを定義することができます。以前に定義した `car` オブジェクトのプロパティを整形して表示する関数を定義するとします。例えば以下の通りです。

```js
function displayCar() {
  var result = "美しい " + this.year + "年式 " + this.make + " " + this.model;
  pretty_print(result);
}
```

`pretty_print` は水平線と文字列を表示する関数です。`this` を使ってメソッドが属するオブジェクトを参照していることに注意してください。

次の文をオブジェクトの定義に追加すると、この関数を `car` のメソッドにできます。

```js
this.displayCar = displayCar;
```

そして、`car` の完全な定義は次のようになります。

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
```

次のようにして、個々のオブジェクトに対して `displayCar` メソッドを呼び出せます。

```js
car1.displayCar();
car2.displayCar();
```

## オブジェクト参照のための `this` の使用

JavaScript には、メソッド内で現在のオブジェクトを参照するための [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)
という特別なキーワードがあります。以下の例には、`Manager` と `Intern` という 2 つのオブジェクトがあり、それぞれが独自の `name`, `age`, `job` を持っています。関数 `sayHi()` の中に `this.name` があることに注目してください。2 つのオブジェクトに追加してそれらを呼び出すことで、`'Hello, My name is'` を返し、その特定のオブジェクトから `name` の値を追加しています。

```js
const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log("Hello, my name is", this.name);
}

// 両方のオブジェクトに sayHi 関数を追加
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is John'
Intern.sayHi(); // Hello, my name is Ben'
```

`this` は自身が入っているオブジェクトを参照します。上記の例に `howOldAmI()` という新しい関数を作って、その人の年齢を示す文をログに出力できます。

```js
function howOldAmI() {
  console.log("I am " + this.age + " years old.");
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI(); // I am 27 years old.
```

## ゲッターとセッターの定義

[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)は、特定のプロパティの値を取得するメソッドです。[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set) は、特定のプロパティの値を設定するメソッドです。ゲッターとセッターは、新しいプロパティの追加をサポートする定義済みのコアオブジェクト、またはユーザー定義オブジェクト上で定義できます。

ゲッターとセッターは次のどちらの方法でも作れます。

- [オブジェクト初期化子](#Object_initializers)を使用して定義する。
- ゲッターやセッターを追加するメソッドを使用して、任意のオブジェクトへ後から追加する。

[オブジェクト初期化子](#Object_initializers)を使用してゲッターとセッターを定義するには、ゲッターメソッドの前に `get` を、セッターメソッドの前に `set` を記述するだけです。当然ですがゲッターメソッドは引数を想定してはいけませんし、セッターメソッドは正確に 1 つの引数（新しい設定値）を期待します。
例えば、以下のようになります。

```js
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- この時点で get b() メソッドが開始されます。initiated.
o.c = 50; //   <-- この時点で set c(x) メソッドが開始されます。
console.log(o.a); // 25
```

`o` オブジェクトのプロパティは以下の通りです。

- `o.a` — 数値
- `o.b` — `o.a` + 1 を返すゲッター
- `o.c` — `o.c` に設定される値を 1/2 にしたものを `o.a` に設定するセッター

`[gs]et propertyName(){ }` という構文により誤解を招くかもしれませんが、オブジェクトリテラル内で "\[gs]et _property_()" によって定義されたゲッターやセッターの関数名は、（`__define[GS]etter__` とは対照的に）ゲッターやセッター自体の名前ではないことに注意してください。

ゲッターとセッターはまた、`Object.defineProperties` メソッドを使用して、生成後のオブジェクトにいつでも追加できます。このメソッドの第 1 引数はゲッターまたはセッターを定義するオブジェクトです。第 2 引数はプロパティ名がゲッターまたはセッターの名前で、プロパティ値がゲッターまたはセッター関数を定義するオブジェクトです。前回の例と同じゲッターとセッターを定義する例を見てみましょう。

```js
var o = { a: 0 };

Object.defineProperties(o, {
  b: {
    get: function () {
      return this.a + 1;
    },
  },
  c: {
    set: function (x) {
      this.a = x / 2;
    },
  },
});

o.c = 10; // 'a' プロパティに 10 / 2 (5) を代入するセッターを実行します
console.log(o.b); // a + 1 つまり 6 を与えるゲッターを実行します
```

2 つの方法のどちらを選ぶのかは、自身のプログラミングスタイルや行っている作業によります。すでにオブジェクト初期化子を気に入っているのなら、プロトタイプの定義時にほとんどの場合、最初の書式を選ぶでしょう。この書式はより簡潔で自然です。しかしながら、ゲッターやセッターを後から追加しなければならないとき — 自分がプロトタイプやオブジェクトの詳細を書いていない場合 — には、2 番目の書式だけが使えます。2 番目の書式には JavaScript の動的な性質が表現されています — ただし、コードを読みにくく理解しづらいものにする可能性があります。

## プロパティの削除

継承されたものでないプロパティは {{jsxref("Operators/delete","delete")}} 演算子を使って削除できます。以下のコードはプロパティを削除する方法です。

```js
// 2 つのプロパティ a と b を持つ新しいオブジェクト myobj を作成。
var myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// プロパティ a を削除すると、myobj には b プロパティだけが残る。
delete myobj.a;
console.log("a" in myobj); // yields "false"
```

`delete` 演算子はまた、`var` キーワードを使わずに定義されたグローバル変数の削除にも使えます。

```js
g = 17;
delete g;
```

## オブジェクトの比較

JavaScript では、オブジェクトは参照型です。2 つの異なるオブジェクトは、同じプロパティを持っていても等値とは見なされません。同じオブジェクトへの参照を比較した時のみ真となります。

```js
// 2 つの変数は、同じプロパティを持つ 2 つの異なるオブジェクト
var fruit = { name: "apple" };
var fruitbear = { name: "apple" };

fruit == fruitbear; // false が返される
fruit === fruitbear; // false が返される
```

```js
// 2 つの変数、オブジェクトは 1 つ
var fruit = { name: "apple" };
var fruitbear = fruit; // fruitbear に fruit オブジェクトへの参照を代入

// fruit と fruitbear は同じオブジェクトを指している
fruit == fruitbear; // true が返される
fruit === fruitbear; // true が返される

fruit.name = "grape";
console.log(fruitbear); // { name: "apple" } ではなく { name: "grape" } と出力される
```

比較演算子についての詳細は、リファレンスの[比較演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)の節をご覧ください。

## 関連情報

- より詳しく知りたければ、当ガイドの[オブジェクトモデルの詳細](/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)をお読みください。
- ECMAScript 2015 のクラス (オブジェクトを作る新しい方法) について知りたければ、リファレンスの [JavaScript クラス](/ja/docs/Web/JavaScript/Reference/Classes)の節をお読みください。

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}
