---
title: Object.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** は {{jsxref("Object")}} インスタンスのオブジェクトで、このオブジェクトを表す文字列を返します。このメソッドは、独自の[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)ロジックのために派生オブジェクトがオーバーライドするためのものです。

{{InteractiveExample("JavaScript デモ: Object.prototype.toString()")}}

```js interactive-example
const map = new Map();

console.log(map.toString());
// 予想される結果: "[object Map]"
```

## 構文

```js-nolint
toString()
```

### 引数

既定では、 `toString()` は引数を取りません。ただし、Object を継承するオブジェクトは、パラメーターを取る独自の実装で toString() をオーバーライドできます。例えば、 [`Number.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) および [`BigInt.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) メソッドは、オプションで引数 `radix` を取ります。

### 返値

オブジェクトを表す文字列です。

## 解説

JavaScript は `toString` メソッドを[オブジェクトをプリミティブ値に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)するために呼び出します。 `toString` を呼び出す必要があるのは稀です。 JavaScript は、プリミティブ値が期待されるオブジェクトに遭遇すると、自動的に `toString` メソッドを呼び出します。

このメソッドは[文字列変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)によって優先的に呼び出されますが、[数値変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値変換)と[プリミティブ変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)は `valueOf()` を優先的に呼び出します。ただし、基底の [`valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) メソッドはオブジェクトを返すので、オブジェクトが `valueOf()` をオーバーライドしない限り、通常は最後に `toString()` メソッドが呼び出されます。例えば、 `+[1]` は `1` を返しますが、これは [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) メソッドが `"1"` を返し、それが数値に変換されるからです。

`Object.prototype` を継承するすべてのオブジェクト（ [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `toString()` メソッドを継承します。独自オブジェクトを作成するときは、`toString()` をオーバーライドして独自メソッドを呼び出し、独自オブジェクトを文字列値に変換できるようにします。また、[`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドを追加することもできます。このメソッドでは、変換処理をより細かく制御することができ、どの型の変換についても常に `valueOf` または `toString` よりも優先されます。

基底となる `Object.prototype.toString()` をオーバーライドされているオブジェクトで使用する（または `null` や `undefined` に対して呼び出す）には、 {{jsxref("Function.prototype.call()")}} または {{jsxref("Function.prototype.apply()")}} を呼び出す必要があり、最初の引数（`thisArg` と呼ばれる）として検査したいオブジェクトを渡します。

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` は、 `"[object Type]"` を返し、 `Type` のところがオブジェクト型になります。オブジェクトに値が文字列である [`Symbol.toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティがある場合、その値が `Type` として使用されます。 [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) および [`Symbol`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) を含む多くの組み込みオブジェクトには、 `Symbol.toStringTag` があります。 ES6 以前のオブジェクトの中には `Symbol.toStringTag` を持たないものもありますが、それでも特別なタグを持っています。これには次のようなものがあります（タグは下記で指定された型名と同じです）。

- [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/ja/docs/Web/JavaScript/Reference/Functions) （[`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) が `"function"` を返すものすべて）
- [`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトは `"[object Arguments]"` を返します。それ以外のものはすべて、ユーザー定義クラスを含み、独自の `Symbol.toStringTag` をない限り、 `"[object Object]"` を返します。

`Object.prototype.toString()` を [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) および {{jsxref("undefined")}} に対して呼び出すと、それぞれ `[object Null]` および `[object Undefined]` を返します。

## 例

### 独自オブジェクトの toString のオーバーライド

既定の `toString()` メソッドに代わって呼び出される関数を作ることができます。 `toString()` メソッドは文字列を返す必要があります。オブジェクトを返し、そのメソッドが[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)の際に暗黙的に呼び出された場合、その結果は無視され、代わりに相対メソッド {{jsxref("Object/valueOf", "valueOf()")}} の値が使われます。これらのメソッドのどちらもがプリミティブ値を返さない場合は `TypeError` が発生します。

以下のコードは `Dog` クラスを定義しています。

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
}
```

このカスタムオブジェクト上で `toString()` メソッドを呼び出した場合、メソッドは {{jsxref("Object")}} から継承された既定値を返します。

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

以下のコードは既定の `toString()` メソッドを上書きします。このメソッドはオブジェクトの `name`, `breed`, `color`, `sex` を格納した文字列を生成します。

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
  toString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
  }
}
```

上記のコードの中で、 `Dog` が文字列の文脈で使用されるたびに、 JavaScript は自動的に `toString()` 関数を呼び出し、以下の文字列を返します。

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### toString() を使用してオブジェクトクラスの判別

`toString()` はすべてのオブジェクトに対し、(既定では) そのクラスを得るために使用することができます。

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math には Symbol.toStringTag　がある
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

このような `toString()` の使用は信頼できません。オブジェクトは `Object.prototype.toString()` の動作を {{jsxref("Symbol.toStringTag")}} プロパティを定義することで変更でき、それによって次のように予想外の動作になります。

```js
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

myDate[Symbol.toStringTag] = "myDate";
Object.prototype.toString.call(myDate); // [object myDate]

Date.prototype[Symbol.toStringTag] = "prototype polluted";
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.prototype.toString` で `Symbol.toStringTag` に対応したポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
