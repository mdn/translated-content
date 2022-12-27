---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef}}

**`bind()`** メソッドは、呼び出された際に `this` キーワードに指定された値が設定される新しい関数を生成します。この値は新しい関数が呼び出されたとき、一連の引数の前に置かれます。

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## 構文

```js
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)
```

### 引数

- `thisArg`
  - : バインドされた関数が呼び出される際、 `this` 引数としてターゲット関数 `func` に渡される値です。バインドされた関数が {{jsxref("Operators/new", "new")}} 演算子によって構築された場合、この引数は無視されます。 `bind` を使用して `setTimeout` の中で (コールバックとして提供する) 関数を生成する場合、 `thisArg` として渡されたプリミティブ値はオブジェクトに変換されます。引数が `bind` に提供されなかった場合、または `thisArg` が `null` または `undefined` であった場合は、実行スコープの `this` は新しい関数のための `thisArg` として扱われます。
- `arg1, arg2, ...argN` {{optional_inline}}
  - : `func` を呼び出す時、バインドされた関数に与えられる引数の前に付けて渡す引数。

### 返値

`this` の値と初期の引数を指定された関数のコピーです。

## 解説

**bind()** 関数は、新しい**バインドされた関数**、すなわち元の関数オブジェクトをラップする*特殊関数オブジェクト (exotic function object)* (ECMAScript 2015 からの用語) を生成します。バインドされた関数を呼び出すと、通常はラップされた関数が実行される結果になります。

バインドされた関数は、以下の内部プロパティを持ちます。

- **`[[BoundTargetFunction]]`**
  - : ラップされた関数オブジェクト
- **`[[BoundThis]]`**
  - : ラップされた関数を呼び出す時に常に **this** に渡される値。
- **`[[BoundArguments]]`**
  - : ラップされた関数を呼び出す時に、その要素が第 1 引数として使われる値のリスト。
- **`[[Call]]`**
  - : オブジェクトに関連する実行コード。関数呼び出し式を通じて実行される。内部メソッドへの引数は `this` 値と呼び出し式によって関数に渡される引数を含むリスト。

バインドされた関数が呼び出されると、内部メソッド `[[Call]]` を `[[BoundTargetFunction]]` 上で、 `Call(boundThis, ...args)` の引数で呼び出します。ここで `boundThis` は `[[BoundThis]]`、 `args` は `[[BoundArguments]]` で、その後に関数呼び出しで渡された引数が続きます。

バインドされた関数は {{jsxref("Operators/new", "new")}} 演算子でも生成されます。これを行うとターゲット関数が代わりに生成されたようになります。与えられた `this` の値は無視され、追加された引数はエミュレートされた関数に提供されます。

## 例

### バインドされた関数の生成

最もシンプルな `bind()` の使い方は、どのように呼び出された場合でも特定の `this` 値を持つ関数を生成することです。

初心者の JavaScript プログラマーがよくやる間違いは、あるオブジェクトからメソッドを取り出し、後でその関数を呼び出すとき、その内側の `this` 値が元のオブジェクトになると考えてしまうことです (例えば、そのメソッドをコールバック関数に使う場合)。

特に配慮しなければ、ふつうは元のオブジェクトが見えなくなります。その関数に元々のオブジェクトを `bind()` してバインドされた関数を生成すれば、この問題をきちんと解決することができます。

```js
this.x = 9;    // 'this' はここではブラウザーのグローバルな 'window' オブジェクト
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
// 81 を返します

const retrieveX = module.getX;
retrieveX();
// 9 を返します。この関数はグローバルスコープで呼び出されるためです。

// 'this' を module に結びつけた新しい関数を生成
// 初心者のプログラマーはグローバル変数の x と
// モジュールプロパティの x とを混同するかもしれません。
const boundGetX = retrieveX.bind(module);
boundGetX();
// 81 を返します
```

### 部分的に適用された関数

次にシンプルな `bind()` の使い方は、あらかじめ引数が指定された関数を生成することです。

これらの引数は、`this` 値の後に続けます (指定しないことも可能)。すると、バインドされた関数がいつ呼ばれても、この指定された引数を先頭にしてバインドされた関数の引数がターゲット関数に渡されます。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// 先頭の引数が設定済みの関数を生成します。
const leadingThirtysevenList = list.bind(null, 37);

// 第一引数が設定済みの関数を生成します。
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
```

### `setTimeout` での利用

既定では、 {{domxref("WindowOrWorkerGlobalScope.setTimeout()", "window.setTimeout()")}} 内部の `this` キーワードは {{domxref("window")}} (または `global` オブジェクト) に設定されます。クラスインスタンスを参照する `this` が必要なクラスメソッドを使う場合、 `this` をコールバック関数と明確に結びつけて (バインドして)、インスタンスを維持することができます。

```js
function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// 1 秒遅延させてから bloom を宣言する
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 1 second, calls 'flower.declare()'
```

### コンストラクターとして使用するバインドされた関数

> **警告:** この節では、 JavaScript の機能性を実演するため、 `bind()` メソッドの極端な例を説明しています。
>
> 以下の方法は何かを実現するのに最適な方法ではなく、むしろ本番環境では使用するべきでない方法です。

バインドされた関数は自動的に、 {{jsxref("Operators/new", "new")}} 演算子を使ってターゲット関数の新しいインスタンスを構築できるようになっています。新たな値を構築するためにバインドされた関数を使った場合、 `this` を与えても無視されます。

しかし、同時に与える引数はコンストラクター呼び出しの先頭部分に挿入されます。

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

//  以下のポリフィルには対応していません。

//  ネイティブの bind ではうまく動作します。

const YAxisPoint = Point.bind(null, 0/*x*/);

const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0/*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString();                    // '0,5'

axisPoint instanceof Point;              // true
axisPoint instanceof YAxisPoint;         // true
new YAxisPoint(17, 42) instanceof Point; // true
```

バインドされた関数を {{jsxref("Operators/new", "new")}} で使えるように生成するのに特別なことをする必要は無いので注意してください。

当然、普通に呼び出されるバインドされた関数を生成する際も特別なことは必要ありません。もしその関数を {{jsxref("Operators/new", "new")}} 演算子とともに呼び出すことにしか使いたくないと思っても、普通に呼び出すことはできてしまいます。

```js
// この例は JavaScript コンソールで直接実行できます
// ...上の例のつづき

// 普通の関数としても実行できます
// (あまり必要にはなりませんが)
YAxisPoint(13);

`${emptyObj.x},${emptyObj.y}`;
// >  '0,13'
```

バインドされた関数を {{jsxref("Operators/new", "new")}} でしか使えないように制限したい場合、または通常の呼び出しだけに制限したい場合には、ターゲット関数がその制限を強制するようにしなければなりません。

### ショートカットの作成

`bind()` は、特定の `this` を必要とするような関数のショートカットを作成するのにも便利です。

例として、{{jsxref("Array.prototype.slice()")}} を取り上げます。この関数は、配列に似たオブジェクトを本物の配列へ変換するために使えます。まず、次のようにショートカットを作成するとします。

```js
const slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

`bind()` を使うと、さらにシンプルにできます。

次のコードでは、 `slice()` が {{jsxref("Function")}} の {{jsxref("Function.prototype.apply()", "apply()")}} 関数に結びつけられた関数になり、その内側の `this` 値は {{jsxref("Array.prototype")}} の{{jsxref("Array.prototype.slice()", "slice()")}} 関数にセットされます。こうすると、いちいち `apply()` を呼び出す必要がなくなります。

```js
// ひとつ前の例の "slice" と同じ
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## ポリフィル

古いブラウザーは一般的に遅いブラウザーでもあるので、古いブラウザーでの閲覧を少しでも悪くなくすために、性能の良いポリフィルを作成することは、多くの人が認識しているよりもはるかに重要なことです。

したがって、 `Function.prototype.bind()` のポリフィルの選択肢を二つ示します。

1. 最初の方の方がずっと小さくて性能が良いのですが、 `new` 演算子を使うとうまくいきません。
2. 2 番目の方が大きくて性能が低いですが、`new` 演算子を使ってバインドされた関数を使用することができます。

一般的に、ほとんどのコードでは、バインドされた関数で `new` が使用されることはとても稀なので、一般的には最初の選択肢を使用するのがベストです。

```js
//  Does not work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
  var slice = Array.prototype.slice;
  Function.prototype.bind = function() {
    var thatFunc = this, thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }
    return function(){
      var funcArgs = args.concat(slice.call(arguments))
      return thatFunc.apply(thatArg, funcArgs);
    };
  };
})();
```

以下のコードをスクリプトの先頭に挿入すれば、その状況をいくらか変えることができます。ネイティブで対応されていない実装において、 `bind()` の多くの機能を使えるようになります。

```js
//  Yes, it does work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.bind = function(otherThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          baseArgs.length = baseArgsLength; // reset to default base arguments
          baseArgs.push.apply(baseArgs, arguments);
          return fToBind.apply(
                 fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
          );
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
})();
```

このアルゴリズムと仕様上のアルゴリズムとの間には、いくつか大きな違いがあります (真剣に網羅することを目指したわけではないので、他にも差はあるかもしれません)。

- この部分的な実装は、 {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} という、それぞれオリジナルの値を持つ組み込みメソッドに依存している。
- この不完全な実装では、不変の「毒薬」のような {{jsxref("Function.caller", "caller")}} および `arguments` プロパティを作成し、取得、設定、削除の際に {{jsxref("Global_Objects/TypeError", "TypeError")}} を発生させます。 (これは実装が ({{jsxref("Object.defineProperty")}} に対応している場合は追加され、 {{jsxref("Object.__defineGetter__", "__defineGetter__")}} と {{jsxref("Object.__defineSetter__", "__defineSetter__")}} に対応している実装では部分的に \[削除時に例外を発生しない形で] 実装されています。)
- この部分的な実装では、 (正規のバインドされた関数には存在しない) `prototype` プロパティを持つ関数を生成します。
- この部分的な実装では、 {{jsxref("Function.length", "length")}} プロパティが ECMA-262 で示されているものと一致しないバインドされた関数を生成します。これは `length` が `0` である関数を生成します。完全な実装では、ターゲット関数の長さとあらかじめ定義された引数の数によりますが、 length が 0 でないものを返すことがあります。
- この部分的な実装では、生成されたバインドされた関数の {{jsxref("Function.name", "name")}} プロパティが元の関数名から派生したものではありません。 ECMA-262 によれば、返されるバインドされた関数の名前は "bound " + ターゲット関数の名前です (空白文字に注意してください)。

この部分的な実装を使用することを選択した場合、 **ECMA-262 第 5 版から動作が逸脱している場合には、それに頼ってはいけません!** ありがたいことに、このような仕様からの逸脱は、ほとんどのコーディングの状況では (今までにも) ほとんど出てきません。上記の仕様からの逸脱を理解していない場合は、この特定のケースでは、これらの非準拠の逸脱の詳細を気にしないのが安全です。

どうしても必要で、性能が気にならない場合は、はるかに遅い (しかし、より仕様に準拠した) 解決法が <https://github.com/Raynos/function-bind> にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
