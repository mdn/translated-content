---
title: Function.prototype.bind()
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

**`bind()`** は {{jsxref("Function")}} インスタンスのメソッドで、新しい関数を生成します。この関数を呼び出すと、元の関数を、`this` を指定された値に設定し、指定された引数を呼び出し時に渡された引数より前に置いて呼び出します。

{{InteractiveExample("JavaScript デモ: Function.prototype.bind()", "taller")}}

```js interactive-example
const module = {
  x: 42,
  getX() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // グローバルスコープで関数を呼び出す
// 期待される出力結果: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// 期待される出力結果: 42
```

## 構文

```js-nolint
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

### 引数

- `thisArg`
  - : バインド済み関数が呼び出される際、ターゲット関数 `func` に `this` 引数として渡される値です。関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でない場合、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) と [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) はグローバルオブジェクトに置き換えられ、プリミティブ値はオブジェクトに変換されます。バインド済み関数が {{jsxref("new")}} 演算子で構築された場合、この引数は無視されます。
- `arg1`, …, `argN` {{optional_inline}}
  - : `func` の呼び出し時に、バインド済み関数に渡される引数の前に付けて渡す引数です。

### 返値

指定された `this` の値と（指定された場合は）先頭に渡す引数を備えた、新しい関数です。

## 解説

`bind()` は新しい「バインド済み関数 (_bound function_)」を生成します。バインド済み関数を呼び出すと、通常はラップされた関数（「ターゲット関数 (_target function_)」とも呼ばれます）が実行されます。バインド済み関数は、`this` の値や先頭に渡す引数など、渡された値を内部状態としてあらかじめ格納します。これらの値は呼び出し時ではなく、バインド時に保存されます。一般に、`const boundFn = fn.bind(thisArg, arg1, arg2)` は、呼び出したときの効果については `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` と同等だと考えられます（ただし、`boundFn` を作成したときに実行されるわけではありません）。

`boundFn.bind(thisArg, /* その他の引数 */)` を呼び出すと、バインド済み関数をさらにバインドし、別のバインド済み関数 `boundFn2` を作成できます。新しい `thisArg` は無視されます。`boundFn2` のターゲット関数である `boundFn` には、すでに `this` がバインドされているためです。`boundFn2` を呼び出すと `boundFn` が呼び出され、さらに `fn` が呼び出されます。最終的に `fn` が受け取る引数の順序は、`boundFn` にバインドされた引数、`boundFn2` にバインドされた引数、`boundFn2` の呼び出し時に渡された引数です。

```js
"use strict"; // `this` がラッパーオブジェクトに変換されるのを防ぐ

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

ターゲット関数が構築可能であれば、バインド済み関数も {{jsxref("new")}} 演算子で構築できます。この場合、ターゲット関数を直接構築したかのように動作します。先頭に追加された引数は通常どおりターゲット関数に渡されますが、指定された `this` の値は無視されます（{{jsxref("Reflect.construct")}} の引数から分かるように、構築時には独自の `this` が用意されるためです）。バインド済み関数を直接構築した場合、[`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) はターゲット関数になります（つまり、バインド済み関数は `new.target` に対して透過的です）。

```js
class Base {
  constructor(...args) {
    console.log(new.target === Base);
    console.log(args);
  }
}

const BoundBase = Base.bind(null, 1, 2);

new BoundBase(3, 4); // true, [1, 2, 3, 4]
```

ただし、バインド済み関数は [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) プロパティを持たないため、[`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) の基底クラスとして使用できません。

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

バインド済み関数を [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) の右辺に置くと、`instanceof` はバインド済み関数の内部に格納されたターゲット関数の `prototype` を読み取ります。

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

バインド済み関数には以下のようなプロパティがあります。

- [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : ターゲット関数の `length` から、バインドされた引数の数（`thisArg` は含みません）を引いた値です。最小値は 0 です。
- [`name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : 対象となる関数の `name` に `"bound "` という接頭辞を加えたものです。

バインド済み関数は、ターゲット関数の[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)も引き継ぎます。ただし、ターゲット関数のほかの独自プロパティ（ターゲット関数がクラスの場合は[静的プロパティ](/ja/docs/Web/JavaScript/Reference/Classes/static)など）は持ちません。

## 例

### バインド済み関数の生成

最もよくある `bind()` の使い方は、どのように呼び出された場合でも特定の `this` 値を持つ関数を生成することです。

初心者の JavaScript プログラマーがよくやる間違いは、あるオブジェクトからメソッドを抽出し、後でその関数を呼び出すとき、その内側の `this` 値が元のオブジェクトになると考えてしまうことです（例えば、そのメソッドをコールバック関数に使う場合）。

特に配慮しなければ、ふつうは元のオブジェクトが見えなくなります。その関数に元々のオブジェクトを `bind()` してバインド済み関数を生成すれば、この問題をきちんと解決することができます。

```js
// スクリプトでは、最上位の 'this' は 'globalThis' を指す
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// 'getX' の 'this' 引数は 'module' を指す
console.log(module.getX()); // 81

const retrieveX = module.getX;
// 厳格モードでない場合、'retrieveX' の 'this' 引数は 'globalThis' を指す
console.log(retrieveX()); // 9

// 'this' 引数が 'module' を指す新しい関数 'boundGetX' を作成する
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
```

> [!NOTE]
> この例を[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行すると、 `retrieveX` の `this` 引数は `globalThis` ではなく `undefined` に結び付けられ、 `retrieveX()` の呼び出しは失敗します。
>
> この例を ECMAScript モジュールで実行すると、最上位の `this` は `globalThis` ではなく `undefined` を指すため、`this.x = 9` の代入が失敗します。
>
> Node.js の CommonJS モジュール内で実行すると、厳格モードかどうかにかかわらず、最上位の `this` は `globalThis` ではなく `module.exports` を指します。ただし、関数内でバインドされていない `this` は、厳格モードでない場合は `globalThis`、厳格モードの場合は `undefined` を指します。したがって、厳格モードでない場合（デフォルト）は、`this.x = 9` が `getX` の読み取り先である `globalThis` ではなく `module.exports` に書き込むため、`retrieveX()` は `undefined` を返します。

実際、いくつかの組み込みの「メソッド」はバインド済み関数を返すゲッターでもあります。注目すべき例は [`Intl.NumberFormat.prototype.format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map) で、アクセスすると、コールバックとして直接渡すことのできる、バインド済み関数を返します。

### 部分的に適用された関数

もう一つの `bind()` の使い方は、あらかじめ引数が指定された関数を生成することです。

これらの引数は（指定されている場合）指定された `this` の値に続いてバインドされ、ターゲット関数に渡される引数の先頭に挿入されます。その後に、バインド済み関数の呼び出し時に渡された引数が続きます。

```js
function list(...args) {
  return args;
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

console.log(list(1, 2, 3)); // [1, 2, 3]

console.log(addArguments(1, 2)); // 3

// 先頭の引数があらかじめ設定された関数を生成する
const leadingThirtySevenList = list.bind(null, 37);

// 最初の引数があらかじめ設定された関数を生成する
const addThirtySeven = addArguments.bind(null, 37);

console.log(leadingThirtySevenList()); // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
console.log(addThirtySeven(5)); // 42
console.log(addThirtySeven(5, 10)); // 42
// (最後の引数 10 は無視されます)
```

### setTimeout() での利用

デフォルトでは、{{domxref("Window.setTimeout", "setTimeout()")}} 内の `this` キーワードは [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) に設定されます。ブラウザーでは、これは {{domxref("window")}} です。`this` がクラスインスタンスを参照する必要のあるクラスメソッドでは、インスタンスを維持するために、`this` をコールバック関数に明示的にバインドできます。

```js
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  bloom() {
    // 1 秒間の遅延の後に開花を宣言
    setTimeout(this.declare.bind(this), 1000);
  }
  declare() {
    console.log(`わたしは花びらが ${this.petalCount} 枚の綺麗な花です！`);
  }
}

const flower = new LateBloomer();
flower.bloom();
// 1 秒後に 'flower.declare()' を呼び出す
```

このために[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用することもできます。

```js
class LateBloomer {
  bloom() {
    // 1 秒間の遅延の後に開花を宣言
    setTimeout(() => this.declare(), 1000);
  }
}
```

### コンストラクターとしてのバインド済み関数

バインド済み関数は、{{jsxref("new")}} 演算子で呼び出してターゲット関数の新しいインスタンスを構築できます。バインド済み関数でインスタンスを構築する場合、指定された `this` は無視されます。ただし、指定された引数はコンストラクター呼び出しの引数の先頭に挿入されます。

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

// thisArg の値は無視されるため、ここでは null を指定している
const YAxisPoint = Point.bind(null, 0 /* x */);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

{{jsxref("new")}} で使用するバインド済み関数を作成する際に、特別なことをする必要はありません。[`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target)、[`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof)、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) などは、コンストラクターがバインドされていなかったかのように期待どおりに動作します。異なるのは、[`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) に使用できないことだけです。

したがって、バインド済み関数を {{jsxref("new")}} でのみ呼び出すようにしたい場合でも、通常の関数呼び出し用に作成する場合と同様に、特別な設定は必要ありません。`new` を使わずに呼び出すと、バインドされた `this` は無視されなくなります。

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// 通常の関数としても呼び出せる
// （通常は望ましくないが）
YAxisPoint(13);

// これで `this` に対する変更を外部から確認できる
console.log(emptyObj); // { x: 0, y: 13 }
```

バインド済み関数を {{jsxref("new")}} を使う場合にのみ、または `new` を使わない場合にのみ呼び出せるよう制限するには、ターゲット関数側でその制限を実施する必要があります。例えば、`new.target !== undefined` を確認するか、代わりに[クラス](/ja/docs/Web/JavaScript/Reference/Classes)を使用します。

### クラスのバインド

クラスに `bind()` を使用すると、そのクラスの意味論はほとんど維持されますが、そのクラス自身が持つ静的プロパティはすべて失われます。ただし、プロトタイプチェーンは維持されるため、親クラスから継承した静的プロパティには引き続きアクセスできます。

```js
class Base {
  static baseProp = "base";
}

class Derived extends Base {
  static derivedProp = "derived";
}

const BoundDerived = Derived.bind(null);
console.log(BoundDerived.baseProp); // "base"
console.log(BoundDerived.derivedProp); // undefined
console.log(new BoundDerived() instanceof Derived); // true
```

### メソッドのユーティリティ関数への変換

`bind()` は、特定の `this` 値を必要とするメソッドを、その `this` 値を通常の引数として受け取る汎用ユーティリティ関数に変換する場合にも役立ちます。これは汎用ユーティリティ関数の一般的な使い方に似ています。`array.map(callback)` の代わりに `map(array, callback)` を使用すれば、配列ではない配列風オブジェクト（例えば [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments)）にも `map` を使用でき、`Object.prototype` を変更する必要もありません。

例として、{{jsxref("Array.prototype.slice()")}} を取り上げます。この関数は、配列に似たオブジェクトを本物の配列へ変換するために使えます。まず、次のようにショートカットを作成するとします。

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

`slice.call` を保存して通常の関数として呼び出すことはできません。`call()` メソッドは、呼び出す関数を `this` の値から取得するためです。この場合、`bind()` を使って、`call()` の `this` の値をバインドできます。次のコードでは、`slice()` は {{jsxref("Function.prototype.call()")}} をバインドした関数であり、その `this` は {{jsxref("Array.prototype.slice()")}} にバインドされています。これにより、追加の `call()` 呼び出しを省けます。

```js
// ひとつ前の例の "slice" と同じ
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// …

slice(arguments);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Function.prototype.bind` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "関数", "", 1)}}
