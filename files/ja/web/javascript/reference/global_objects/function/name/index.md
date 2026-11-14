---
title: "Function: name"
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`name`** は {{jsxref("Function")}} インスタンスのデータプロパティで、作成時に付けられた関数の名前を示します。無名で作成された関数の場合は、`anonymous` または `''` （空文字列）になることもあります。

{{InteractiveExample("JavaScript デモ: Function: name")}}

```js interactive-example
const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// 予想される結果: "func1"

console.log(object.func2.name);
// 予想される結果: "func2"
```

## 値

文字列です。

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> 標準外であった ES2015 以前の実装では、`configurable` 属性も `false` であることに注意してください。

## 解説

関数の `name` プロパティは、デバッグツールやエラーメッセージで関数を識別するために使用できます。このプロパティは、言語自体の意味論には影響しません。

`name` プロパティは読み取り専用のため、代入演算子で変更することはできません。

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

変更するには、 {{jsxref("Object.defineProperty()")}} を使用してください。

`name` プロパティは、関数の定義方法から通常推測されます。次の節では、名前が推測されるさまざまな方法について説明します。

### 関数宣言

`name` プロパティは関数宣言の名前を返します。

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### デフォルトエクスポートされた関数の宣言

[`export default`](/ja/docs/Web/JavaScript/Reference/Statements/export) 宣言は、関数を式ではなく宣言としてエクスポートします。宣言が無名関数である場合、名前は `"default"` となります。

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Function コンストラクター

[`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) コンストラクターで作成された関数は、 "anonymous" の名前になります。

```js
new Function().name; // "anonymous"
```

### 関数式

関数式に名前が付いている場合、その名前が `name` プロパティとして使用されます。

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

`function` キーワードまたはアロー関数構文を使用して作成される無名関数式は、デフォルトで名前が `""` （空文字列）になります。

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

ただし、そのようなケースはまれです。通常、関数を別の場所で呼び出すためには、関数式は識別子に関連付けられます。無名関数式の名前は、特定の構文コンテキスト内、たとえば[変数宣言とメソッド](#変数宣言とメソッド)、[初期化子とデフォルト値](#初期化子とデフォルト値)で推測できます。

名前付きであることが推測できない実用的な例としては、別の関数から返される関数があります。

```js
function getFoo() {
  return () => {};
}
getFoo().name; // ""
```

### 変数宣言とメソッド

変数とメソッドは、構文上の位置から無名関数の名前を推論できます。

```js
const f = function () {};
const object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

同じことが代入にも適用されます。

```js
let f;
f = () => {};
f.name; // "f"
```

### 初期化子とデフォルト値

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#既定値)、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)などの初期化子（デフォルト値）の関数は、束縛された識別子の名前を `name` として継承します。

```js
const [f = () => {}] = [];
f.name; // "f"

const { someMethod: m = () => {} } = {};
m.name; // "m"

function foo(f = () => {}) {
  console.log(f.name);
}
foo(); // "f"

class Foo {
  static someMethod = () => {};
}
Foo.someMethod.name; // someMethod
```

### 短縮メソッド

```js
const o = {
  foo() {},
};
o.foo.name; // "foo";
```

### バインドされた関数

{{jsxref("Function.prototype.bind()")}} が関数を作成する時、その名前は "bound " とその関数名を合わせたものとなります。

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### ゲッターとセッターの関数名

[`get`](/ja/docs/Web/JavaScript/Reference/Functions/get) と [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set) を使う時は、 "get" や "set" が関数名に含まれます。

```js
const o = {
  get foo() {
    return 1;
  },
  set foo(x) {},
};

const descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### クラス

クラス名には、関数宣言や関数式と同じアルゴリズムが適用されます。

```js
class Foo {}
Foo.name; // "Foo"
```

> [!WARNING]
> JavaScript は、関数に `name` という独自のプロパティがない場合にのみ、関数の `name` プロパティを設定します。ただし、クラスの[静的メンバー](/ja/docs/Web/JavaScript/Reference/Classes/static)はクラスコンストラクター関数自身のプロパティになるため、組み込みの `name` が設定されなくなります。下記の[例](#オブジェクトのコンストラクター名を示す)をご覧ください。

### 関数名としてのシンボル

シンボル ({{jsxref("Symbol")}}) が関数名として使用されており、そのシンボルに説明が存在する場合、メソッドの名前は角カッコで囲まれた説明となります。

```js
const sym1 = Symbol("foo");
const sym2 = Symbol();

const o = {
  [sym1]() {},
  [sym2]() {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // "[]"
```

### プライベートフィールドとメソッド

プライベートフィールドとプライベートメソッドは、ハッシュ記号 (`#`) が名前の一部に含まれます。

```js
class Foo {
  #field = () => {};
  #method() {}
  getNames() {
    console.log(this.#field.name);
    console.log(this.#method.name);
  }
}

new Foo().getNames();
// "#field"
// "#method"
```

## 例

### オブジェクトのコンストラクター名を示す

オブジェクトの「クラス」を調べるには、 `obj.constructor.name` を使用することができます。

```js
function Foo() {} // または class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

しかし、静的メンバーはクラス自身のプロパティになるため、静的メソッドプロパティ `name()` を持つほぼすべてのクラスでは、クラス名を取得できません。

```js
class Foo {
  constructor() {}
  static name() {}
}
```

`static name()` メソッドが存在する場合、 `Foo.name` はクラス名ではなく、 `name()` 関数オブジェクトへの参照を持つことになります。 `fooInstance` のクラスを取得しようとして `fooInstance.constructor.name` を使用しても、まったくクラス名は得られず、代わりに静的クラスメソッドへの参照が返されます。

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

静的フィールドが存在するため、 `name` も関数ではない可能性があります。

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

クラスに `name` という静的プロパティがある場合、`name` は書き込み可能にもなります。独自の静的定義がない場合、組み込みの `name` は読み取り専用です。

```js
Foo.name = "Hello";
console.log(Foo.name); // Foo に静的な "name" がある場合は "Hello"、そうでなければ "Foo" と表示
```

したがって、組み込みの `name` プロパティに常にクラスの名前が格納されていることに頼っていると、期待通りに動作しない場合があります。

### JavaScript 圧縮ツールおよび最小化ツール

> [!WARNING]
> `name` プロパティを使用しているときに、JavaScript の圧縮（ミニファイ）や難読化のような変換を行う場合は注意が必要です。これらのツールは JavaScript のビルドパイプラインの一部として、本番環境にデプロイする前にプログラムのサイズを縮小するためによく使用されます。このような変換では、ビルド時に関数名が変更されることがあります。

次のようなソースコードは、

```js
function Foo() {}
const foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' は 'Foo' のインスタンスである");
} else {
  console.log("おおっと！");
}
```

このように圧縮されるかもしれません。

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' は 'Foo' のインスタンスである");
} else {
  console.log("おおっと！");
}
```

非圧縮版では、プログラムは「'foo' は 'Foo' のインスタンスである」とログ出力し、真値側の分岐を実行します。一方、圧縮版では動作が異なり、else 側の分岐を実行します。例えば上記のように、`name` プロパティに依存している場合は、ビルドパイプラインで関数名が変更されないようにするか、関数に具体的な名前があるとは仮定しないようにしてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Function: name` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/function)<sup>(英語)</sup>
- [`Function.prototype.name` のポリフィル (`es-shims`)](https://www.npmjs.com/package/function.prototype.name)<sup>(英語)</sup>
- {{jsxref("Function")}}
