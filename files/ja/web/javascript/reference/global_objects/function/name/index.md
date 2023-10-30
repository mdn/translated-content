---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

{{jsxref("Function")}} オブジェクトの **`name`** プロパティは読み取り専用で、作成時に付けられた関数の名前、もしくは無名関数の場合は `anonymous` または `''` (空文字列) を返します。

{{EmbedInteractiveExample("pages/js/function-name.html")}}{{js_property_attributes(0,0,1)}}

> **メモ:** 標準外であった ES2015 以前の実装では、`configurable` 属性も `false` であることに注意してください。

## JavaScript の圧縮とミニファイ

> **警告:** `Function.name` を使用しているときに、 JavaScript の圧縮 (ミニファイ) や難読化のような変換を行う際には注意が必要です。これらのツールは JavaScript ビルドパイプラインの一部として、本番環境に設置する前にプログラムのサイズを縮小するためによく使用されます。それらの変換は、ビルド時に関数名を変更することがあります。

次のようなソースコードは、

```js
function Foo() {}
let foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' は 'Foo' のインスタンスである");
} else {
  console.log("おおっと！");
}
```

このように圧縮されるかもしれません。

```js
function a() {}
let b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' は 'Foo' のインスタンスである");
} else {
  console.log("おおっと！");
}
```

非圧縮版では、プログラムは真の方の分岐を実行し、「`'foo' は 'Foo' のインスタンスである`」と表示するのに対し、圧縮版は異なる振る舞いをし、偽の方の分岐を実行します。それゆえ、上述の例のように `Function.name` に依存するならば、ビルドパイプラインが関数名を変更しないようにするか、特定の関数名を想定しない構造にする必要があります。

## 例

### 関数文の名前

`name` プロパティは関数文の名前を返します。

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Function コンストラクターの名前

構文 `new Function(...)` または単に `Function(...)` で関数を作成すると、 {{jsxref("Function")}} オブジェクトが作成され、その名前は "anonymous" になります。

```js
new Function().name; // "anonymous"
```

### 無名関数式

`function` キーワードを使用して生成された関数式またはアロー関数は、名前が `""` (空文字列) になっています。

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

### 関数名の推測

変数とメソッドは、構文上の位置から無名関数の名前を推論できます (ECMAScript 2015 から)。

```js
let f = function () {};
let object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

{{jsxref("Operators/Function", "関数式", "", 1)}} で名前を持つ関数を定義することができます。

```js
let object = {
  someMethod: function object_someMethod() {},
};
console.log(object.someMethod.name); // "object_someMethod" と表示

try {
  object_someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: object_someMethod is not defined
```

name プロパティは読み取り専用であり、代入演算子で変更することはできません。

```js
let object = {
  // anonymous
  someMethod: function () {},
};

object.someMethod.name = "otherMethod";
console.log(object.someMethod.name); // someMethod
```

変更したければ、{{jsxref("Object.defineProperty()")}} を使ってください。

### 短縮メソッドの名前

```js
var o = {
  foo() {},
};
o.foo.name; // "foo";
```

### バインドされた関数の名前

{{jsxref("Function.bind()")}} が関数を作成する時、その名前は "bound " とその関数名を合わせたものとなります。

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### ゲッターとセッターの関数名

[`get`](/ja/docs/Web/JavaScript/Reference/Operators/get) と [`set`](/ja/docs/JavaScript/Reference/Operators/set) を使う時は、 "get" や "set" が関数名に含まれます。

```js
let o = {
  get foo() {},
  set foo(x) {},
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### クラスでの関数名

`obj.constructor.name` でオブジェクトの「クラス」を知ることができます (ただし、下記の警告を確認してください)。

```js
function Foo() {} // ES2015 構文の場合: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo" と表示
```

> **警告:** スクリプトインタープリターは、関数が自身の _name_ プロパティを持っていない場合に限り、組み込みの `Function.name` プロパティを設定します ([9.11.2. of the ECMAScript2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname) セクションをご覧ください)。しかし ES2015 では、_static_ キーワードを指定すると、その静的メソッドはクラスのコンストラクタ関数の OwnProperty として設定されます (ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation))。

従って、`name()` という静的メソッドを持つクラスでは、事実上そのクラス名を取得することはできません:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

`static name()` メソッドが存在する場合、`Foo.name` はクラス名ではなく、 `name()` 関数オブジェクトへの参照を持つことになります。Chrome や Firefox では、上記の ES2015 の構文によるクラス定義は、下記の ES5 構文のコードと同じような挙動をします:

```js
function Foo() {}
Object.defineProperty(Foo, "name", { writable: true });
Foo.name = function () {};
```

`fooInstance.constructor.name` で `fooInstance` のクラスを取得しようとしても、得られるのはクラス名ではなく静的メソッドへの参照です。例えば:

```js
let fooInstance = new Foo();
console.log(fooInstance.constructor.name); // 関数 name() を表示
```

先ほどの ES5 の構文の例では、Chrome や Firefox での `Foo.name` の静的な定義の際に _writable_ を指定しています。このような独自の手法を用いなければ、デフォルトでは _read-only_ となります:

```js
Foo.name = "Hello";
console.log(Foo.name); // Foo が static name() を持つ場合は "Hello"、そうでなければ "Foo" と表示する。
```

従って、`Function.name` プロパティが常にクラス名を保持しているとは考えないほうがいいでしょう。

### 関数名としての Symbol

{{jsxref("Symbol")}} を関数名として使用し、Symbol が description を持っている場合、関数名はブラケット `[ ]` 内の description となります。

```js
let sym1 = Symbol("foo");
let sym2 = Symbol();
let o = {
  [sym1]: function () {},
  [sym2]: function () {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.name")}}

## 関連情報

- {{jsxref("Function")}}
