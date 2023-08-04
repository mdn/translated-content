---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{JSRef}}

**`constructor`** プロパティは、インスタンスオブジェクトを生成した {{jsxref("Object")}} のコンストラクター関数への参照を返します。なお、このプロパティの値は*関数そのものへの参照*であり、関数名を含んだ文字列ではありません。

値が `1`, `true`, `"test"` のようなプリミティブ値の場合は読み取り専用です。

## 解説

(`Object.create(null)` で生成されたオブジェクトを除いて) すべてのオブジェクトが `constructor` プロパティを持っています。明示的にコンストラクター関数を用いることなく生成されたオブジェクト (オブジェクトリテラルや配列リテラルなど) は、 `constructor` プロパティがそのオブジェクトの基礎オブジェクトのコンストラクター型を指します。

```js
let o = {};
o.constructor === Object; // true

let o = new Object();
o.constructor === Object; // true

let a = [];
a.constructor === Array; // true

let a = new Array();
a.constructor === Array; // true

let n = new Number(3);
n.constructor === Number; // true
```

## 例

### オブジェクトのコンストラクターの表示

以下の例では、コンストラクター (`Tree`) と、その型のオブジェクト (`theTree`) を生成します。そして、 `theTree` オブジェクトの `constructor` プロパティを表示します。

```js
function Tree(name) {
  this.name = name;
}

let theTree = new Tree("Redwood");
console.log("theTree.constructor is " + theTree.constructor);
```

この例の出力は次のとおりです。

```js
theTree.constructor is function Tree(name) {
  this.name = name
}
```

### オブジェクトのコンストラクターの変更

`constructor` プロパティに代入することができるのは、対応するコンストラクター関数を持たない `null` および `undefined` 以外の値 (`String`、`Number`、`Boolean` など) ですが、プリミティブ値には変更が適用されません (例外は発生しません)。これは、プリミティブ値 (`null` と `undefined` を除く) にどのようなプロパティを設定しても効果がないのと同じ仕組みによるものです。つまり、このようなプリミティブをオブジェクトとして使用すると、対応するコンストラクターのインスタンスが生成され、文の実行後すぐに破棄されることになります。

```js
let val = null;
val.constructor = 1; //TypeError: val is null

val = "abc";
val.constructor = Number; //val.constructor === String

val.foo = "bar"; //暗黙的に String('abc') のインスタンスが生成され、 foo プロパティに代入する
val.foo === undefined; //true になる。 String('abc') の新しいインスタンスがこの比較のために生成され、 foo プロパティがないため
```

つまり、上記のプリミティブ値を除いて、基本的に `constructor` プロパティの値を変更することができます。**なお、 `constructor` プロパティを変更しても、 instanceof 演算子には影響しません**。

```js
let a = [];
a.constructor = String;
a.constructor === String; // true
a instanceof String; //false
a instanceof Array; //true

a = new Foo();
a.constructor = "bar";
a.constructor === "bar"; // true

//etc.
```

オブジェクトが封印または凍結されていた場合は、変更の効果がなくなり、例外は発生しません。

```js
let a = Object.seal({});
a.constructor = Number;
a.constructor === Object; //true
```

### 関数のコンストラクターの変更

多くの場合、このプロパティは**関数コンストラクター**としての関数の定義に使用され、将来の **new** およびプロトタイプ継承チェーンでの呼び出しに使われます。

```js
function Parent() {
  /* ... */
}
Parent.prototype.parentMethod = function parentMethod() {};

function Child() {
  Parent.call(this); // すべてが正しく初期化されていることを確認
}
Child.prototype = Object.create(Parent.prototype); // 子のプロトタイプを親のプロトタイプで再定義

Child.prototype.constructor = Child; // 元のコンストラクターとして Child を返す
```

しかし、いつこの最後の行を実行する必要があるのでしょうか。残念ながら、正しい答えは、*場合による*ということです。

元のコンストラクターを再割り当てすることが重要である場合と、これがコードの未使用の一行になる場合を定義してみましょう。

以下の場合を見てみてください。オブジェクトが自分自身を生成するために `create()` メソッドを持っています。

```js
function Parent() {
  /* ... */
}
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError undefined is not a function since constructor === Parent
```

上記の例では、コンストラクターが Parent にリンクしているため、例外が発生します。

これを防ぐには、利用しようとしている必要なコンストラクターを代入するだけです。

```js
function Parent() {
  /* ... */
}
function CreatedConstructor() {
  /* ... */
}

CreatedConstructor.prototype = Object.create(Parent.prototype);
CreatedConstructor.prototype.constructor = CreatedConstructor; // 将来使用するために正しいコンストラクターを設定

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // とてもよくなった
```

これで、コンストラクターの変更が有用である理由が明確になりました。

もう一つの例を考えてみましょう。

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
};

function Child(x, y) {
  this.position = {
    x: x,
    y: y,
  };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition =
  function getOffsetByInitialPosition() {
    let position = this.position;
    let startPosition = this.constructor.getStartPosition(); // error undefined is not a function, since the constructor is Child

    return {
      offsetX: startPosition.x - position.x,
      offsetY: startPosition.y - position.y,
    };
  };
```

この例を正しく動作させるためには、コンストラクターとして `Parent` を保持するか、静的プロパティを `Child` のコンストラクターに再代入するかする必要があります。

```js
...
Child = Object.assign(Child, ParentWithStatic); // Notice that we assign it before we create(...) a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype);
...
```

または、 `Parent` のコンストラクター識別子を `Child` コンストラクター関数の別のプロパティに代入し、そのプロパティからアクセスします。

```js
...
Child.parentConstructor = ParentWithStatic
Child.prototype = Object.create(ParentWithStatic.prototype)
...
   let startPosition = this.constructor.parentConstructor.getStartPosition()
...
```

> **メモ:** コンストラクターを手動で更新したり設定したりすると、異なる結果や混乱する結果を導くことがあります。これを防ぐためには、それぞれの場合に応じて `constructor` の役割を定義することが必要です。多くの場合、 `constructor` 使用されず、再割り当ての必要はありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("statements/class","クラス宣言","",1)}}
- {{jsxref("Classes/constructor","クラスのコンストラクター","",1)}}
- 用語集: {{Glossary("constructor", "コンストラクター", 1)}}
