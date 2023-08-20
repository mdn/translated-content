---
title: クラスの使用
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript はプロトタイプベースの言語です。オブジェクトの動作は、自分自身のプロパティとプロトタイプのプロパティで指定します。しかし、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)の追加により、オブジェクトの階層の作成、プロパティとその値の継承は、Java などの他のオブジェクト指向言語とかなり方向性が近くなっています。この章では、クラスからオブジェクトを作成する方法を説明します。

他にも多くの言語では、クラスやコンストラクターは、オブジェクトやインスタンスと明確に判別されます。JavaScript では、クラスは主に既存のプロトタイプ継承の仕組みを抽象化したもので、すべてのパターンがプロトタイプベースの継承に変換可能です。クラス自体も通常の JavaScript の値であり、独自のプロトタイプチェーンを持っています。実際、JavaScript のほとんどの関数はコンストラクターとして使用することができます - 新しいオブジェクトを作成するには、コンストラクター関数と一緒に `new` 演算子を使用します。

このチュートリアルでは、よく抽象化されたクラスモデルを使って遊び、クラスがどのような意味づけをするのかについて説明します。もし、基盤となるプロトタイプシステムを深く掘り下げたいのであれば、[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)のガイドを読むと良いでしょう。

この章では、あなたがすでに JavaScript にある程度慣れていて、普通のオブジェクトを使用したことがあることを想定しています。

## クラスの概要

JavaScript をある程度使いこなしている方、あるいはガイドに沿って進んできた方は、たとえ作成していなくても、すでにクラスを使用したことがあるのではないでしょうか？例えば、これは[馴染みがあるかもしれません](/ja/docs/Web/JavaScript/Guide/Numbers_and_dates)。

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

最初の行では、クラス [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) のインスタンスを作成し、`bigDay` と名付けています。2 行目では、`bigDay` インスタンスに対して [メソッド](/ja/docs/Glossary/Method) [`toLocaleDateString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) を呼び出して、文字列を返しています。次に、2 つの数値を比較しています。1 つは [`getTime()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) メソッドから返されたもの、もう 1 つは `Date` クラス自体から [`Date.now()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now) として直接呼び出されたものです。

`Date` は JavaScript の組み込みクラスです。この例から、クラスが何をするのかの基本的な考えを得ることができます。

- クラスは [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を用いてオブジェクトを作成します。
- それぞれのオブジェクトは、クラスによって追加されたいくつかのプロパティ（データまたはメソッド）を持ちます。
- クラスは、いくつかのプロパティ（データまたはメソッド）を自分自身に格納し、通常、インスタンスと対話するために使用しあｍす。

これらは、クラスの 3 大機能に対応しています。

- コンストラクター
- インスタンスメソッドとインスタンスフィールド
- 静的メソッドと静的フィールド

## クラスの宣言

クラスはふつう、クラス宣言で作成されます。

```js
class MyClass {
  // クラス本体...
}
```

クラス本体の中で、利用できる機能は多岐にわたります。

```js
class MyClass {
  // コンストラクター
  constructor() {
    // コンストラクターの本体
  }
  // インスタンスフィールド
  myField = "foo";
  // インスタンスメソッド
  myMethod() {
    // myMethod 本体
  }
  // 静的フィールド
  static myStaticField = "bar";
  // 静的メソッド
  static myStaticMethod() {
    // myStaticMethod 本体
  }
  // 静的ブロック
  static {
    // 静的初期化コード
  }
  // フィールド、メソッド、静的フィールド、静的メソッドには、すべて
  // 「プライベート」形式があります
  #myPrivateField = "bar";
}
```

ES6 以前の世界から来た人は、関数をコンストラクターとして使用することに慣れているかもしれません。上記のパターンは、関数コンストラクターを使うと、おおよそ以下のように対応させることができます。

```js
function MyClass() {
  this.myField = "foo";
  // コンストラクター本体
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod 本体
};
MyClass.prototype.myMethod = function () {
  // myMethod 本体
};

(function () {
  // 静的初期化コード
})();
```

> **メモ:** プライベートフィールドとメソッドは、クラスにおける新しい機能であり、関数コンストラクターにおける同等の機能はありません。

### クラスの構築

クラスを宣言した後は、[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new)演算子を使用してそのインスタンスを作成することができます。

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

一般的な関数コンストラクターは、`new` で構築することも、`new` なしで呼び出すことも可能です。しかし、`new` なしでクラスを「呼び出し」しようとすると、エラーになります。

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### クラス宣言の巻き上げ

関数宣言とは異なり、クラス宣言は[巻き上げ](/ja/docs/Glossary/Hoisting)が行われません（見方を変えると、巻き上げが行われるが、一時的なデッドゾーンの制約を受けます）。つまり、宣言前にクラスを使用することはできません。

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

この動作は、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) で宣言した変数と似ています。

### クラス式

関数と同様に、クラス宣言にも対応する式があります。

```js
const MyClass = class {
  // Class body...
};
```

クラス式も名前を持つことができます。式の名前は、クラス本体でのみ見ることができます。

```js
const MyClass = class MyClassLongerName {
  // クラス本体。ここでは、MyClass と MyClassLongerName は同じクラスを指しています。
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## コンストラクター

おそらくクラスの最も重要な仕事は、オブジェクトの「工場」として機能することでしょう。例えば、`Date` コンストラクターを使用する際、渡された日付データを表す新しいオブジェクトが生成されることを期待します。これでそのインスタンスが公開する、他のメソッドを操作することができます。クラスでは、インスタンスの生成は[コンストラクター](/ja/docs/Web/JavaScript/Reference/Classes/constructor)によって行われます。

例として、特定の色を表す `Color` というクラスを作成しましょう。ユーザーは [RGB](/ja/docs/Glossary/RGB) の 3 つの値を渡して色を作成します。

```js
class Color {
  constructor(r, g, b) {
    // RGB 値を `this` のプロパティとして割り当てる。
    this.values = [r, g, b];
  }
}
```

ブラウザーで開発ツールを開き、上記のコードをコンソールに貼り付け、インスタンスを作成します。

```js
const red = new Color(255, 0, 0);
console.log(red);
```

このような出力が確認できるはずです。

```
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

これで `Color` インスタンスを作成することに成功し、そのインスタンスには `values` プロパティがあり、それは渡した RGB 値の配列です。これは次のものとほぼ同じです。

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

コンストラクターの構文は通常の関数と全く同じです。つまり、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)のような他の構文も使用できます。

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// 上記と同じ形状のインスタンスを作成します。
```

`new` を呼び出すたびに、異なるインスタンスが作成されます。

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

クラスのコンストラクター内では、`this` の値は新しく作成されるインスタンスを指します。このインスタンスにプロパティを割り当てることもできますし、既存のプロパティ（特にメソッド — 次回取り上げます）を読み取ることもできます。

`this` の値は、自動的に `new` の結果として返されます。コンストラクターからは値を返さないことをお勧めします。プリミティブでない値を返すと、それが `new` 式の値となり、 `this` の値は削除されるからです。（`new`が何をするのかについては、[その解説](/ja/docs/Web/JavaScript/Reference/Operators/new#解説)で詳しく説明されています。）

```js
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}

console.log(new MyClass().myField); // undefined
```

## インスタンスメソッド

クラスがコンストラクターだけを持つ場合、それは単にプレーンなオブジェクトを作成する `createX` ファクトリー関数と大差ありません。しかし、クラスの威力は、インスタンスにメソッドを自動的に割り当てる「テンプレート」として使用できることです。

例えば `Date` インスタンスでは、[年](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)、[月](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)、[曜日](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)などのように、1 つの日付値からさまざまな情報を取得するために、さまざまなメソッドが使用できます。また、[`setFullYear`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)のように、対応する `setX` でこれらの値を設定することもできます。

自分自身で作った `Color` クラスには、色の赤成分の値を返す `getRed` というメソッドを追加することができます。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

メソッドがない場合は、コンストラクターの中で関数を定義したくなるかもしれません。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
```

これはうまく動作します。しかし、問題は、`Color`インスタンスが作成されるたびに、すべて同じことをするにもかかわらず、新しい関数が作成されることです。

```js
console.log(new Color().getRed === new Color().getRed); // false
```

これに対して、メソッドを使用すると、すべてのインスタンスで共有されることになります。関数はすべてのインスタンスで共有することができますが、それでも異なるインスタンスが呼び出すと、`this` の値が異なるため、動作が異なることがあります。このメソッドがどこに格納されているかというと、すべてのインスタンスのプロトタイプ、つまり `Color.prototype` に定義されています。詳しくは [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) に説明があります。

同様に、色の赤成分の値を設定する `setRed` という新しいメソッドを作成することができます。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed()); // 0。もちろん、この段階では「黒」と呼ばれるものなので。
```

## プライベートフィールド

インスタンスの `values` 配列に直接アクセスできるのに、わざわざ `getRed` や `setRed` メソッドを使用する必要があるのか、と思われるかもしれません。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
red.values[0] = 0;
console.log(red.values[0]); // 0
```

オブジェクト指向プログラミングには、「カプセル化」と呼ばれる哲学があります。これは、オブジェクトの基盤となる実装にはアクセスせず、オブジェクトと対話するために抽象化されたメソッドを使用することを意味しています。例えば、突然、色を [HSL](/ja/docs/Web/CSS/color_value/hsl) として表すことにしたとします。

```js
class Color {
  constructor(r, g, b) {
    // values is now an HSL array!
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.values[0]); // 0。255 ではなくなります。純粋な赤の H の値は 0 だからです。
```

ユーザーは `values` が RGB 値を突然崩壊させることを意味していると思い込み、自分のロジックが壊れる原因になりかねません。そのため、もしあなたがクラスの実装者であれば、インスタンスの内部データ構造をユーザーから隠したいでしょう。これは、API をきれいに保つためと、あなたが「害のないリファクタリング」をしたときにユーザーのコードが壊れるのを防ぐためです。クラスでは、これは [_private fields_](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields) を通して行われます。

プライベートフィールドは、接頭辞に `#` (ハッシュ記号) を持つ識別子です。このハッシュはフィールドの名前に不可欠な要素であり、プライベートプロパティがパブリックプロパティと名前が衝突することはないことを意味しています。プライベートフィールドをクラスのどこかで参照するには、クラス本体でそれを宣言する必要があります（プライベートプロパティをその場で作成することはできません）。これを除けば、プライベートフィールドは通常のプロパティとほとんど同じです。

```js
class Color {
  // 宣言: それぞれの Color インスタンスには、 #values というプライベートフィールドがある
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

クラス外からプライベートフィールドにアクセスすると、初期の構文エラーになります。`#privateField` は特殊な構文なので、静的解析を行い、コードを評価する前にプライベートフィールドの使い方をすべて見つけることができるため、言語はこれを防ぐことができます。

```js example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

JavaScript でのプライベートフィールドはハードプライベートです。クラスがこのプライベートフィールドを公開するメソッドを実装していない場合、クラスの外からそれを取得する仕組みは全くありません。つまり、公開されるメソッドの動作が変わらない限り、クラスのプライベートフィールドにどんなリファクタリングを行っても安全だということです。

`values` フィールドをプライベートにした後は、`getRed` と `setRed` のメソッドを単純なパススルーメソッドにするのではなく、いくつかのロジックを追加することができます。例として、`setRed` に有効な R 値かどうかを調べる機能を追加することができます。

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Invalid R value");
    }
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(1000); // RangeError: Invalid R value
```

もし `values` プロパティを公開したままにしておくと、ユーザーは `values[0]` に直接割り当てることで簡単にこのチェックを回避し、不正な色を作成することができます。しかし、うまくカプセル化された API を使えば、コードをより堅牢にし、下流でのロジックエラーを防ぐことができるのです。

クラスメソッドは、同じクラスに属している限り、他のインスタンスのプライベートフィールドを読み取ることができます。

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    // #values には、必ずしもここからアクセスする必要はありません。
    // 同じクラスに属する他のインスタンスのプライベートフィールドに
    // アクセスすることができます。
    return this.#values[0] - anotherColor.#values[0];
  }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red.redDifference(crimson); // 35
```

しかし、`anotherColor` が Color のインスタンスでない場合、`#values` は存在しないことになります。（他のクラスが同じ名前の `#values` プライベートフィールドを持っていたとしても、同じことを参照しているわけではないので、ここではアクセスすることができません。）存在しないプライベートプロパティにアクセスすると、通常のプロパティのように `undefined` を返すのではなく、エラーが発生します。オブジェクトにプライベートフィールドが存在するかどうかわからず、エラーを処理するために `try`/`catch` を使用せずにアクセスしたい場合は、 [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子を使用することができます。

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError("Color instance expected");
    }
    return this.#values[0] - anotherColor.#values[0];
  }
}
```

> **メモ:** このとき、`#` は特殊な識別子構文であり、フィールド名を文字列のように使用することはできないことに留意してください。`"#values" in anotherColor` は、プライベートフィールドではなく、文字通り `"#values"` というプロパティ名を探していくことになります。

プライベートプロパティを使用するには、いくつかの制限があります。同じ名前を単一のクラスで 2 回宣言することはできませんし、削除することもできません。どちらも初期の構文エラーにつながります。

```js example-bad
class BadIdeas {
  #firstName;
  #firstName; // syntax error occurs here
  #lastName;
  constructor() {
    delete this.#lastName; // also a syntax error
  }
}
```

メソッド、[ゲッター、セッター](#アクセサーフィールド)も同様にプライベートにすることができます。クラスが内部で行う必要があるが、コードの他の部分からは呼び出すことができないような複雑なものがある場合に有用です。

例えば、[HTML のカスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)を作成し、クリックしたりタップしたりしたときに何かやや複雑な動作をさせることを想像してみてください。さらに、要素がクリックされたときに起こるやや複雑なことは、このクラスに限定されるべきで、JavaScript の他の部分がそれにアクセスすることはない（あるいは、する必要がある）ためです。

```js
class Counter extends HTMLElement {
  #xValue = 0;
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  get #x() {
    return this.#xValue;
  }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  #render() {
    this.textContent = this.#x.toString();
  }
  connectedCallback() {
    this.#render();
  }
}

customElements.define("num-counter", Counter);
```

この場合、ほとんどすべてのフィールドとメソッドが、このクラスのプライベートとなります。したがって、このクラスは他のコードに対して、基本的に組み込みの HTML 要素のようなインターフェイスを表示しています。プログラムの他の部分は `Counter` の内部構造に影響を与える力はありません。

## アクセサーフィールド

`color.getRed()` と `color.setRed()` は、色の赤成分の値を読み書きできるようにするものです。Java のような言語の出身者であれば、このパターンにとても馴染みがあると思います。しかし、プロパティに単純にアクセスするためにメソッドを使用することは、JavaScript ではまだいくらか人間工学的でないようです。アクセサーフィールドを使えば、あたかも「実際のプロパティ」であるかのように、何かを操作することができるようになります。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
  set red(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 0
```

オブジェクトに `red` というプロパティがあるように見えますが、実際にはインスタンスにそのようなプロパティは存在しません。メソッドは 2 つしかありませんが、接頭辞に `get` と `set` がついているので、あたかもプロパティのように操作することが可能になっています。

もしフィールドにゲッターだけあってセッターがない場合、それは事実上読み取り専用になります。

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 255
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の場合、`red.red = 0` の行は、"Cannot set property red of #\<Color> which has only a getter" という型エラーが発生します。厳密モード以外では、代入は暗黙に無視されます。

## パブリックフィールド

プライベートフィールドに対してパブリックフィールドがあり、すべてのインスタンスがプロパティを持つことができます。フィールドは通常、コンストラクターの引数に依存しないように設計されています。

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

パブリックフィールドは、`this`にプロパティを割り当てるのとほぼ同じです。例えば、上の例も変換できます。

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## 静的プロパティ

`Date` の例では、現在の日付を返す [`Date.now()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now) メソッドにも遭遇しています。このメソッドは Date のインスタンスに属するものではなく、クラスそのものに属するものです。しかし、Dateインスタンスを扱うときに有益なメソッドであるため、グローバルな `DateNow()` 関数として公開するのではなく、`Date` クラスに搭載しています。

> **メモ:** ユーティリティメソッドの接頭辞に、そのメソッドが扱うものを付けることは「名前空間化」と呼ばれ、良い習慣とされています。例えば、JavaScript では、古い接頭辞のない [`parseInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt) メソッドに加え、後から、数字を扱うためのメソッドであることを示すために [`Number.parseInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) メソッドが追加されました。

[静的プロパティ](/ja/docs/Web/JavaScript/Reference/Classes/static)は、クラスの個々のインスタンスではなく、クラス自体に定義されるクラス機能のグループです。これらの機能には、次のようなものがあります。

- 静的メソッド
- 静的フィールド
- 静的ゲッターおよびセッター

また、すべてのものには、対応するプライベートなものがあります。例えば、`Color` クラスでは、指定された 3 つの値が有効な RGB 値であるかどうかを調べる静的メソッドを作成することができます。

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

静的プロパティは、その点を除いて、インスタンスに対応するものととてもよく似ています。

- すべてに `static` の接頭辞が付いており、
- インスタンスからはアクセスできません。

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

また、[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)という特別な構造があり、これはクラスが最初に読み込まれたときに実行されるコードのブロックです。

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

静的初期化ブロックは、クラスが宣言された後、すぐにコードを実行するのとほぼ同じです。唯一の違いは、静的なプライベートプロパティにアクセスできることです。

## 拡張と継承

クラスがもたらす重要な機能は（プライベートフィールドによる人間工学的なカプセル化に加えて）「継承」です。これは、あるオブジェクトが他のオブジェクトの動作の大部分を「借り」ながら、ある部分は自分自身でロジックを上書きしたり拡張したりできることを意味しています。

例えば、`Color` クラスがこれで透明度に対応する必要が出てきたとします。透明度を示す新しいフィールドを追加したくなるかもしれません。

```js
class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#values[3] = value;
  }
}
```

しかし、これではすべてのインスタンス — 透明でない大部分（アルファ値が 1 のもの） — が余分なアルファ値を持たなければならないことを意味しており、とても洗練されたものではありません。さらに、機能が増え続けると、`Color` クラスはとても肥大化し、メンテナンスが難しくなります。

その代わりに、オブジェクト指向プログラミングでは、「派生クラス」を作成することになります。派生クラスは、親クラスのすべてのパブリックプロパティへアクセスすることができます。JavaScript では、派生クラスは [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) 節で宣言され、そのクラスがどのクラスから拡張されているかを示します。

```js
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}
```

すぐに気付くことがいくつかあります。最初の点は、コンストラクタの中で、`super(r, g, b)` を呼び出していることです。`this` にアクセスする前に [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を呼び出すことは言語要件です。`super()` は親クラスのコンストラクターを呼び出して `this` を初期化します — ここでは `this = new Color(r, g, b)` とほぼ同じ意味です。`super()` の前にコードを置くことはできますが、`super()` の前に `this` にアクセスすることはできません。言語上、未初期化の `this` にアクセスすることはできないからです。

親クラスが `this` を変更した後、派生クラスは自分自身でロジックを作成することができます。ここでは、`#alpha` というプライベートフィールドを追加し、それと対話するためのゲッター/セッターのペアを提供しました。

派生クラスは、親クラスからすべてのメソッドを継承します。例えば、`ColorWithAlpha` は自分自身で`get red()` アクセサーを宣言していませんが、この動作は親クラスで指定されているので、`red` にアクセスすることはできます。

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

派生クラスは親クラスのメソッドを上書きすることもできます。例えば、すべてのクラスは [`Object`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) クラスを暗黙的に継承しており、[`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) など、いくつかの基本的なメソッドが定義されています。しかし、基本の `toString()` メソッドは、ほとんどの場合 `[object Object]` を表示するため、使い勝手が悪いです。

```js
console.log(red.toString()); // [object Object]
```

代わりに、このクラスは色の RGB 値を表示するようにオーバーライドすることができます。

```js
class Color {
  #values;
  // …
  toString() {
    return this.#values.join(", ");
  }
}

console.log(new Color(255, 0, 0).toString()); // '255, 0, 0'
```

派生クラス内では、`super` を使用することで、親クラスのメソッドにアクセスすることができます。これにより、強化メソッドを構築し、コードの重複を避けることができます。

```js
class ColorWithAlpha extends Color {
  #alpha;
  // …
  toString() {
    // 親クラスの toString() を呼び出し、返値を構築する
    return `${super.toString()}, ${this.#alpha}`;
  }
}

console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'
```

`extends` を使用すると、静的メソッドも同様に継承されるので、オーバーライドや拡張も可能です。

```js
class ColorWithAlpha extends Color {
  // ...
  static isValid(r, g, b, a) {
    // 親クラスの isValid() を呼び出し、返値において構築する
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

派生クラスは親クラスのプライベートフィールドにアクセスできません。これは、JavaScript のプライベートフィールドが「ハードプライベート」であることのもう一つの重要な側面です。プライベートフィールドは、クラス本体にスコープされ、外部のコードにアクセスすることはできません。

```js example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

クラスは 1 つのクラスからしか拡張できません。これにより、[ダイヤモンド問題](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem)のような多重継承における問題を防ぐことができます。しかし、JavaScriptの動的な性質上、クラス構成や[mixins](/ja/docs/Web/JavaScript/Reference/Classes/extends#ミックスイン)によって多重継承の効果を実現することは可能です。

派生クラスのインスタンスは、基底クラスの [instance of](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) でもある。

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## なぜクラスか

このガイドはこれまで実用的なものでした。私たちはクラスをどのように使用できるかに焦点を当てていますが、1つだけ未解決の疑問があります。なぜクラスを使用するのでしょうか？答えは、「場合による」です。

クラスはパラダイム、つまりコードを整理する方法を導入します。クラスはオブジェクト指向プログラミングの基礎であり、[継承](<https://ja.wikipedia.org/wiki/継承_(プログラミング)>)や[多態性](https://ja.wikipedia.org/wiki/ポリモーフィズム)（特にサブタイピング）といった概念に基づいて構築されています。しかし、多くの人は哲学的にある種の OOP の実践に反対しており、その結果クラスを使用していません。

例えば、`Date` オブジェクトが悪名高いのは、変更可能であることです。

```js
function incrementDay(date) {
  return date.setDate(date.getDate() + 1);
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// 古い日付も変わってしまう！？
console.log(date); // 2019-06-20
```

内部状態が変更可能であることは、オブジェクト指向プログラミングの重要な要素ですが、一見何の変哲もない処理が予期せぬ副作用を持ち、プログラムの他の部分の動作を変えてしまうことがあるため、コードの推論が困難になることが多いのです。

コードを再利用するために、私たちは通常、クラスを拡張しがちが、これは大きな継承パターンの階層を生み出す可能性があります。

![典型的な OOP 継承ツリーで、 5つのクラスと 3 つの階層があります。](figure8.1.png)

しかし、あるクラスが他のクラスを 1 つだけしか拡張できない場合、継承をきれいに記述するのが難しいことがよくあります。複数のクラスの振る舞いが欲しい場合もよくあります。これは、Java ではインターフェイスで、JavaScript ではミックスインで実現することができます。しかし、結局のところ、まだとても便利とは言えません。

一方、クラスは、コードをより高いレベルで整理するためのとても強力な手段です。例えば、`Color` クラスがなければ、ユーティリティ関数を何十個も作成しなければならないかもしれません。

```js
function isRed(color) {
  return color.red === 255;
}
function isValidColor(color) {
  return (
    color.red >= 0 &&
    color.red <= 255 &&
    color.green >= 0 &&
    color.green <= 255 &&
    color.blue >= 0 &&
    color.blue <= 255
  );
}
// ...
```

しかし、クラスを使えば、すべて `Color` という名前空間の下に集めることができるので、読みやすさが向上します。また、プライベートフィールドを導入することで、特定のデータを下流のユーザーから隠すことができ、クリーンな API を作成することができます。

一般的に、独自の内部データを格納し、多くの動作を公開するオブジェクトを作成したい場合には、クラスの使用を検討すべきでしょう。JavaScript の組み込みクラスを例にとると、以下のようになります。

- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) および [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) クラスは、要素の集合を保持し、 `get()`, `set()`, `has()`, などを使用してキーによって要素にアクセスすることができます。
- [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) クラスは日時を UNIX タイムスタンプ（数値）で保持し、日時の個々の部分を整形、更新、読み取りすることができます。
- [`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) クラスは、例外に関する具体的な情報、例えばエラーメッセージ、スタックトレース、原因などを保持します。これは、豊富な継承構造を持ついくつかのクラスの 1 つです。[`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) や [`ReferenceError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) など、`Error` を継承する複数の組み込みクラスがあります。エラーの場合、この継承によってエラーの意味を絞り込むことができます。それぞれのクラスが固有のエラーの種類を表すので、[`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) で容易に調べることができます。

JavaScript には、コードを正規のオブジェクト指向で整理する仕組みがありますが、それを使用するかどうか、どのように使用するかは、すべてプログラマーの裁量に委ねられています。

{{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}
