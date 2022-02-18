---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
  - クラス
  - ECMAScript 2015
  - JavaScript
  - 言語機能
  - 左辺式
  - 演算子
browser-compat: javascript.operators.super
translation_of: Web/JavaScript/Reference/Operators/super
---
{{jsSidebar("Operators")}}

**super** キーワードは、オブジェクトの親の関数を呼び出すために使用できます。

`super.prop` および `super[expr]` 式は、[class](/ja/docs/Web/JavaScript/Reference/Classes) と[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の両方におけるあらゆる[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)で有効です。

## 構文

```js
super([arguments]); // 親コンストラクターを呼び出します。
super.functionOnParent([arguments]);
```

## 解説

コンストラクターで使用する場合、`super` キーワードを単独で置き、`this` キーワードが使われる前に使用する必要があります。`super` キーワードは、親オブジェクトの関数を呼び出すためにも使用できます。

## 例

### クラス内での `super` の使用

このコードスニペットは、[クラスの例](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html)) からとっています。`super()` を利用することで、`Rectangle` と `Square` のコンストラクターに共通する処理を重複して記述しないようにしています。

```js
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError になります。super を先に呼び出さなければなりません！

    // length の値で親クラスの constructor を呼びます。
    // Rectangle の width と height になります。
    super(length, length);

    // Note: 'this' を使う前に super() をコールしなければなりません。
    // でないと reference error になります。
    this.name = 'Square';
  }
}
```

### 静的メソッドでの super の呼び出し

[static](/ja/docs/Web/JavaScript/Reference/Classes/static) メソッドでも super を呼び出すことができます。

```js
class Rectangle {
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### super プロパティを削除するとエラーが発生する

親クラスのプロパティを削除するために、[delete 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete) や `super.prop`、`super[expr]` を使うことはできません。{{jsxref("ReferenceError")}} がスローされます。

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'. 
```

### `super.prop` は書き込み不可能なプロパティを上書きできない

{{jsxref("Object.defineProperty")}} などで書き込み不可プロパティを定義した場合、`super` はプロパティの値を上書きできません。

```js
class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // 値を上書きできない
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" は読み取り専用
console.log(y.prop); // 1
```

### オブジェクトリテラル内での `super.prop` の使用

super は[オブジェクト初期化子 / リテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)記法内でも使用できます。この例では、 2 つのオブジェクトがメソッドを定義しています。 2 つ目のオブジェクトの中で、`super` が最初のオブジェクトのメソッドを呼び出しています。これは {{jsxref("Object.setPrototypeOf()")}} の助けで動作し、これは `obj2` のプロトタイプを `obj1` に設定するので、`super` は `method1` を `obj1` 上で見つけることができます。

```js
var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
    super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
