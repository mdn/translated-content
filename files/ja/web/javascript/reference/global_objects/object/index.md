---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Class
  - JavaScript
  - Object
browser-compat: javascript.builtins.Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object
---
{{JSRef}}

**`Object`** クラスは [JavaScript のデータ型](/ja/docs/Web/JavaScript/Data_structures)の一つを表します。これは様々なキー付きコレクションとより複雑な実態を格納するために使用されます。 Object は {{jsxref("Object/Object", "Object()")}} コンストラクターまたは[オブジェクト初期化子/リテラル構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を使用して生成することができます。

## 解説

JavaScript のほぼすべてのオブジェクトが {{jsxref("Object")}} のインスタンスです。一般的なオブジェクトは、プロパティを (メソッドを含めて) <code>Object.prototype</code> から継承していますが、これらのプロパティはシャドウ化 (別名オーバーライド) されている場合があります。しかし、意図的にそうではない `Object` を生成したり (例えば {{jsxref("Object.create", "Object.create(null)")}} によって)、変更した結果そうではなくなる場合 (例えば {{jsxref("Object.setPrototypeOf")}}) もあります。

`Object` プロトタイプオブジェクトへの変更は、その変更の対象となるプロパティやメソッドがプロトタイプチェーンに沿ってさらにオーバーライドされない限り、プロトタイプチェーンを通して**すべての**オブジェクトに反映されます。これはとても強力ですが、オブジェクトの動作をオーバーライドしたり拡張したりするのは潜在的に危険をはらむ仕組みでもあります。

`Object` コンストラクターは、指定された値のオブジェクトラッパーを生成します。

- 値が {{jsxref("null")}} または {{jsxref("undefined")}} である場合、空のオブジェクトを生成して返します。
- それ以外の場合は、与えられた値に関連する型のオブジェクトを返します。
- 値がすでにオブジェクトであった場合は、その値を返します。

コンストラクター以外のコンテキストで呼び出された場合、 `Object` は `new Object()` と同等に動作します。

[オブジェクト初期化子/リテラル構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)も参照してください。

### オブジェクトからのプロパティの削除

オブジェクト自体には、自身のプロパティを削除するメソッド ({{jsxref("Map.prototype.delete", "Map.prototype.delete()")}} のようなもの) はありません。これを行うには、[delete 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete)を使用する必要があります。

## コンストラクター

- {{jsxref("Object/Object", "Object()")}}
  - : 新しい `Object` オブジェクトを生成します。これは指定された値のラッパーです。

## 静的メソッド

- {{jsxref("Object.assign","Object.assign()")}}
  - : 1 個以上のソースオブジェクトから、自身の列挙可能なプロパティの値をすべてターゲットオブジェクトにコピーします。
- {{jsxref("Object.create","Object.create()")}}
  - : 指定されたプロトタイプオブジェクトとプロパティから、新しいオブジェクトを生成します。
- {{jsxref("Object.defineProperty","Object.defineProperty()")}}
  - : 指定された記述子で記述された名前付きプロパティをオブジェクトへ追加します。
- {{jsxref("Object.defineProperties","Object.defineProperties()")}}
  - : 指定された記述子で記述された複数の名前付きプロパティをオブジェクトへ追加します。
- {{jsxref("Object.entries","Object.entries()")}}
  - : 指定されたオブジェクト**自身**の列挙可能な文字列プロパティのすべての `[key, value]` の組を含む配列を返します。
- {{jsxref("Object.freeze","Object.freeze()")}}
  - : オブジェクトを凍結します。他のコードがプロパティを削除したり変更したりすることができなくなります。
- {{jsxref("Object.fromEntries","Object.fromEntries()")}}
  - : 反復可能な `[key, value]` の組から新しいオブジェクトを返します。(これは {{jsxref("Object.entries")}} の逆です。)
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}}
  - : オブジェクトの名前付きプロパティに対応するプロパティ記述子を返します。
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}}
  - : オブジェクト自身のすべてのプロパティの記述子を含むオブジェクトを返します。
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}}
  - : 指定したオブジェクト**自身**の列挙可能および列挙不可なすべてのプロパティの名前を、配列として返します。
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}}
  - : 指定したオブジェクト上に直接存在するすべてのシンボルプロパティからなる配列を返します。
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}}
  - : 指定されたオブジェクトのプロトタイプ (内部の `[[Prototype]]` プロパティ) を返します。
- {{jsxref("Object.is","Object.is()")}}
  - : 二つの値が同じ値であるかどうかを比較します。 `NaN` 値はすべて同じものとして扱われます (抽象的等価比較とも厳密等価比較とも異なります)。
- {{jsxref("Object.isExtensible","Object.isExtensible()")}}
  - : オブジェクトの拡張が許可されているかどうかを判定します。
- {{jsxref("Object.isFrozen","Object.isFrozen()")}}
  - : オブジェクトが凍結されているかどうかを判定します。
- {{jsxref("Object.isSealed","Object.isSealed()")}}
  - : オブジェクトが封印されているかどうかを判定します。
- {{jsxref("Object.keys","Object.keys()")}}
  - : 指定されたオブジェクト**自身**の列挙可能なプロパティの名前をすべて含む配列を返します。
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}}
  - : オブジェクトのあらゆる拡張を抑止します。
- {{jsxref("Object.seal","Object.seal()")}}
  - : オブジェクトのプロパティを削除するほかのコードを抑止します。
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}}
  - : オブジェクトのプロトタイプ (内部の `[[Prototype]]` プロパティ) を設定します。
- {{jsxref("Object.values","Object.values()")}}
  - : 与えられたオブジェクト**自身**の列挙可能な文字列プロパティすべてに対応する値を含む配列を返します。

## インスタンスプロパティ

- {{jsxref("Object.prototype.constructor")}}
  - : オブジェクトのプロトタイプを生成する関数を指定します。
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
  - : オブジェクトがインスタンス化されたとき、プロトタイプとして使用されたオブジェクトを指します。

## インスタンスメソッド

- {{jsxref("Object.prototype.__defineGetter__()")}}
  - : 関数をプロパティに関連付けます。そのプロパティにアクセスすると、その関数を実行して返値を返すようにします。
- {{jsxref("Object.prototype.__defineSetter__()")}}
  - : 関数をプロパティに関連付け、設定されるとプロパティを変更する関数を実行するようにします。
- {{jsxref("Object.prototype.__lookupGetter__()")}}
  - : {{jsxref("Object.prototype.__defineGetter__()", "__defineGetter__()")}} メソッドによって特定のプロパティに関連付けされた関数を返します。
- {{jsxref("Object.prototype.__lookupSetter__()")}}
  - : {{jsxref("Object.prototype.__defineSetter__()", "__defineSetter__()")}} メソッドによって特定のプロパティに関連付けされた関数を返します。
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : オブジェクトが、プロトタイプチェーンを通じて継承されたものではなくオブジェクトの直接のプロパティを持っているかどうかを示す論理値を返します。
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : このメソッドが呼び出されたオブジェクトが、指定されたオブジェクトのプロトタイプチェーンにあるかどうかを示す論理値を返します。
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : 内部の [ECMAScript \[\[Enumerable\]\] 属性](/ja/docs/Web/JavaScript/Data_structures#properties)が設定されているかどうかを表す論理値を返します。
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : {{jsxref("Object.toString", "toString()")}} を呼び出します。
- {{jsxref("Object.prototype.toString()")}}
  - : そのオブジェクトの文字列表現を返します。
- {{jsxref("Object.prototype.valueOf()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。

## 例

### `undefined` や `null` 型を指定して `Object` を使用

以下の例は、空の `Object` オブジェクトを `o` に格納します。

```js
let o = new Object()
```

```js
let o = new Object(undefined)
```

```js
let o = new Object(null)
```

### `Object` を使用して `Boolean` オブジェクトを生成

以下の例は、 {{jsxref("Boolean")}} オブジェクトを `o` に格納します。

```js
// o = new Boolean(true) と同じ
let o = new Object(true)
```

```js
// o = new Boolean(false) と同じ
let o = new Object(Boolean())
```

### オブジェクトのプロトタイプ

`Object.prototype` の既存のメソッドの動作を変更するには、既存のロジックの前または後で独自の拡張を囲む形でコードを挿入するようにしてください。例えば、この (テストされていない) コードは、組み込みロジックや誰かの拡張機能が実行される前に、条件付きで独自のロジックを実行します。

関数が呼び出されると、呼び出す引数は配列風の「変数」 [arguments](/ja/docs/Web/JavaScript/Reference/Functions/arguments) に保持されます。例えば `myFn(a, b, c)` の呼び出しでは、`myFn` の本体内での引数は `(a, b, c)` に対応する 3 つのの要素を含みます。

フックを使ってプロトタイプを変更する場合は、関数で `apply()` を呼び出すことで、 `this` と引数 (呼び出し状態) を現在の動作に渡します。このパターンは、`Node.prototype` や `Function.prototype` など、どんなプロトタイプにも使えます。

```js
var current = Object.prototype.valueOf;

// プロパティ "-prop-value" は横断的で、同じプロトタイプチェーン上に
// あるとは限らないので、 Object.prototype を修正したいと思います。
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // 私のオブジェクトのようには見えないので、現在の動作をできる限り再現して、
    // 既定の動作にフォールバックします。
    // apply は、他のいくつかの言語における "super" のような動作をします。
    // valueOf() は引数を取りませんが、他のフックによっては取るかもしれません。
    return current.apply(this, arguments);
  }
}
```

正確には JavaScript にはサブクラスのオブジェクトが存在しないので、プロトタイプは下記の例のように、オブジェクトとして動作する特定の関数の「基本クラス」オブジェクトを作るための有用な回避策となります。

```js
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Object.prototype.constructor を Employee に設定しないと、
                                            // Person (親) の prototype.constructor を取ってしまいます。
                                            //それを避けるために prototype.constructor を Employee (子) に設定しています。

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; // Object.prototype.constructor を Customer に設定しないと、
                                            // Person (親) の prototype.constructor を取ってしまいます。
                                            //それを避けるために prototype.constructor を Employee (子) に設定しています。

var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; // Object.prototype.constructor を Mime に設定しないと、
                                   // Person (親) の prototype.constructor を取ってしまいます。
                                   //それを避けるために prototype.constructor を Employee (子) に設定しています。

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
