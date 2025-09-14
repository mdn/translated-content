---
title: Function.prototype.bind()
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`bind()`** は {{jsxref("Function")}} インスタンスのメソッドで、新しい関数を生成し、呼び出し時に、 `this` キーワードを指定された値に設定し、指定された引数の並びを、新しい関数が呼び出された際に指定されたものより前にして呼び出します。

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
  - : バインド済み関数が呼び出される際、 `this` 引数としてターゲット関数 `func` に渡される値です。関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でない場合、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) と [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) はグローバルオブジェクトに置き換わり、プリミティブ値はオブジェクトに変換されます。バインド済み関数が {{jsxref("Operators/new", "new")}} 演算子によって構築された場合、この引数は無視されます。
- `arg1`, …, `argN` {{optional_inline}}
  - : `func` を呼び出す時、バインド済み関数に与えられる引数の前に付けて渡す引数。

### 返値

`this` の値と初期の引数（提供された場合）が指定された関数のコピーです。

## 解説

`bind()` 関数は新しい「バインド済み関数 (_bound function_)」を生成します。バインド済み関数を呼び出すと、通常はラップされた関数のほうが実行され、それは「ターゲット関数 (_target function_)」とも呼ばれます。バインド済み関数は、渡された引数、すなわち `this` の値と最初のいくつかの引数を内部の状態として格納します。これらの値は、呼び出し時に渡されるのではなく、あらかじめ格納されています。一般に、`const boundFn = fn.bind(thisArg, arg1, arg2)` は、`const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` と呼ばれるのと同じだと考えてよいでしょう（ただし `boundFn` が構築されたときではなく、呼び出されたときに効果があります）。

バインド済み関数は、 `boundFn.bind(thisArg, /* その他の引数 */)` を呼び出すことでさらにバインドすることができ、別のバインド済み関数 `boundFn2` が作成されます。なぜなら、`boundFn2` の対象となる関数 `boundFn` はすでに `this` というバインド済み関数を持っているからです。`boundFn2` が呼ばれると、 `boundFn` を呼び出すことになり、それが `fn` を呼び出すことになります。最終的に `fn` が受け取る引数は、順に `boundFn` にバインドされた引数、 `boundFn2` にバインドされた引数、 `boundFn2` で受け取った引数になります。

```js
"use strict"; // `this` がラッパーオブジェクトの中に入ってしまうのを防ぐ

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

バインド済み関数は、そのターゲット関数が構築可能であれば、{{jsxref("Operators/new", "new")}} 演算子を使用してオブジェクトを構築することもできます。これは、あたかもターゲット関数で構築されたかのように動作します。前置された引数は通常通りターゲット関数に提供されますが、指定された `this` 値は無視されます（コンストラクターは {{jsxref("Reflect.construct")}} の引数で見られるように、自分自身で `this` を用意するためです）。バインド済み関数が直接構築された場合、代わりに [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) がターゲット関数になります（つまり、バインドされた関数は `new.target` に対して透過的です）。

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

しかし、バインド済み関数は [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティを持たないので、 [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) の基底クラスとして使用することはできません。

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

バインド済み関数を [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) の右辺として使用する場合、 `instanceof` はターゲット関数（これはバインド済み関数の内部に格納されています）に到達し、 代わりにその `prototype` を読み取ります。

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

バインド済み関数には以下のようなプロパティがあります。

- [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : ターゲット関数の `length` から、バインドされる引数の数（ `thisArg` 引数はカウントしない）を引いた値で、0が最小値になります。
- [`name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : 対象となる関数の `name` に `"bound "` という接頭辞を加えたものです。

バインド済み関数は、ターゲット関数の[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)も引き継ぎます。しかし、他にターゲット関数の独自のプロパティ（ターゲット関数がクラスの場合は[静的プロパティ](/ja/docs/Web/JavaScript/Reference/Classes/static)など）を持つことはありません。

## 例

### バインド済み関数の生成

最もよくある `bind()` の使い方は、どのように呼び出された場合でも特定の `this` 値を持つ関数を生成することです。

初心者の JavaScript プログラマーがよくやる間違いは、あるオブジェクトからメソッドを抽出し、後でその関数を呼び出すとき、その内側の `this` 値が元のオブジェクトになると考えてしまうことです（例えば、そのメソッドをコールバック関数に使う場合）。

特に配慮しなければ、ふつうは元のオブジェクトが見えなくなります。その関数に元々のオブジェクトを `bind()` してバインド済み関数を生成すれば、この問題をきちんと解決することができます。

```js
// 最上位の 'this' はスクリプト内で 'globalThis' に結び付けられる
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// 'getX' の 'this' 引数が 'module' に結び付けられる
console.log(module.getX()); // 81

const retrieveX = module.getX;
// 'retrieveX' の 'this' 引数は、非厳格モードでは 'globalThis' に結び付けられる
console.log(retrieveX()); // 9

// 新しい関数 'boundGetX' を作成し、 'this' 引数を 'module' に結びつける
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
```

> [!NOTE]
> この例を[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行すると、 `retrieveX` の `this` 引数は `globalThis` ではなく `undefined` に結び付けられ、 `retrieveX()` の呼び出しは失敗します。
>
> この例を ECMAScript モジュールで実行すると、最上位の `this` は `globalThis` ではなく `undefined` に結び付けられており、 `this.x = 9` の代入が失敗します。
>
> これを Node CommonJS モジュール内で実行すると、厳格モードかどうかに関わらず、最上位の `this` は `globalThis` ではなく `module.exports` を指すようになります。しかし、関数内では、バインドされていない `this` の参照は、それでも「厳格モードでなければ `globalThis` 、厳格モードならば `undefined`」というルールに従います。したがって、厳格モードでない場合（既定）は、 `retrieveX()` は `undefined` を返します。これは、 `this.x = 9` が、 `getX` が読んでいるオブジェクト (`globalThis`) とは異なるオブジェクト (`module.exports`) に書き込んでいるためです。

実際、いくつかの組み込みの「メソッド」はバインド済み関数を返すゲッターでもあります。注目すべき例は [`Intl.NumberFormat.prototype.format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map) で、アクセスすると、コールバックとして直接渡すことのできる、バインド済み関数を返します。

### 部分的に適用された関数

もう一つの `bind()` の使い方は、あらかじめ引数が指定された関数を生成することです。

これらの引数は（もしあれば）指定された `this` 値の後に続き、ターゲット関数に渡される引数の先頭に挿入され、その後に、バインドされた関数が呼ばれる際に渡される引数が続きます。

```js
function list(...args) {
  return args;
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

console.log(list(1, 2, 3)); // [1, 2, 3]

console.log(addArguments(1, 2)); // 3

// 先頭の引数が設定済みの関数を生成します。
const leadingThirtySevenList = list.bind(null, 37);

// 第一引数が設定済みの関数を生成します。
const addThirtySeven = addArguments.bind(null, 37);

console.log(leadingThirtySevenList()); // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
console.log(addThirtySeven(5)); // 42
console.log(addThirtySeven(5, 10)); // 42
// (最後の引数 10 は無視されます)
```

### setTimeout() での利用

既定では、 {{domxref("Window.setTimeout", "setTimeout()")}} 内部の `this` キーワードは [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis)、すなわちブラウザーでは {{domxref("window")}} に設定されます。クラスメソッドを使用して `this` がクラスインスタンスを参照するようにする必要がある場合、インスタンスを保守するために、明示的に `this` をコールバック関数にバインドすることができます。

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
// After 1 second, calls 'flower.declare()'
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

### コンストラクターとして使用するバインド済み関数

バインド済み関数は自動的に、 {{jsxref("Operators/new", "new")}} 演算子を使ってターゲット関数の新しいインスタンスを構築できるようになっています。新たな値を構築するためにバインド済み関数を使った場合、 `this` を与えても無視されます。しかし、同時に与える引数はコンストラクター呼び出しの先頭部分に挿入されます。

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

// thisArg の値は無視されるため、重要ではない
const YAxisPoint = Point.bind(null, 0 /* x */);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

{{jsxref("Operators/new", "new")}}で使用するためのバインド済み関数を作成するために、特別なことをする必要はないことに注意してください。[`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) などはすべて期待通り、まるでこのコンストラクターがバインドされていないかのように処理されます。唯一の異なる形は、 [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) には使用できなくなるということです。

このことから、たとえバインド済み関数が {{jsxref("Operators/new", "new")}} を使用してのみ呼び出すことを要求したい場合でも、プレーンに呼び出される関数を作成することと比べて、特別なことをする必要はないことがわかります。 `new` を使わずに呼び出すと、バインドされた `this` は突然無視されなくなります。

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// 普通の関数としても実行できます
// (あまり必要にはなりませんが)
YAxisPoint(13);

// これで `this` に対する変更が外から監視できるようになりました。
console.log(emptyObj); // { x: 0, y: 13 }
```

バインドされた関数が {{jsxref("Operators/new", "new")}} でしか呼び出せないように制限したい場合、あるいは `new` なしでのみ呼び出せるようにしたい場合、ターゲット関数は `new.target !== undefined` を参照するか、代わりに[クラス](/ja/docs/Web/JavaScript/Reference/Classes)を使用して、その制限を実施しなければなりません。

### クラスのバインド

クラスに対して `bind()` を使用すると、そのクラスの意味づけはほとんど維持されますが、現在のクラスのすべての静的な自分自身のプロパティは失われます。しかし、プロトタイプチェーンは維持されるので、親クラスから継承された静的プロパティにアクセスすることは可能です。

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

`bind()` は特定の `this` 値を必要とするメソッドを、前回の `this` 引数を通常の引数として受け入れるプレーンなユーティリティ関数に変換したい場合にも役立ちます。これは、汎用的なユーティリティ関数の動作方法に似ています。 `array.map(callback)` を呼び出す代わりに、 `map(array, callback)` を使うと、配列でない配列風オブジェクト（例えば [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) など）でも、 `Object.prototype` を変更せずに `map` が使用できるようになります。

例として、{{jsxref("Array.prototype.slice()")}} を取り上げます。この関数は、配列に似たオブジェクトを本物の配列へ変換するために使えます。まず、次のようにショートカットを作成するとします。

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

`slice.call` を保存して、普通の関数として呼び出すことはできないことに注意してください。なぜなら、 `call()` メソッドは、呼び出すべき関数である `this` の値も読み取るからです。この場合、 `bind()` を使用して、 `call()` に `this` の値をバインドすることができます。以下のコードでは、 `slice()` は {{jsxref("Function.prototype.call()")}} のバインド版で、 `this` の値は {{jsxref("Array.prototype.slice()")}} にバインドされます。これは、追加の `call()` 呼び出しを省くことができることを意味しています。

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

- [`Function.prototype.bind` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "関数", "", 1)}}
