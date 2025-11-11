---
title: arguments.callee
short-title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、`arguments.callee` にアクセスすると {{jsxref("TypeError")}} が発生します。関数が自身を参照しなければならない場合は、[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)に名前を付けるか、[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)を使用してください。

**`arguments.callee`** データプロパティは、引数が属する現在実行中の関数を保持しています。

## 値

現在実行中の関数への参照です。

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> `callee` は、単純な引数を持つ厳格でない関数においてのみ使用できるデータプロパティです（この場合、`arguments` オブジェクトも[自動同期化](/ja/docs/Web/JavaScript/Reference/Functions/arguments#位置を指定した代入)されます）。それ以外の場合は、ゲッターとセッターの両方が {{jsxref("TypeError")}} を発生するアクセサープロパティです。

## 解説

`callee` は `arguments` オブジェクトのプロパティです。これは、現在実行中の関数を、その関数本体の内部で参照するために使用することができます。これは、名前のない関数式（「無名関数」とも呼ばれる）の中など、関数名が不明な場合に便利です。

（[Stack Overflow の olliej による回答によれば](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760)）

古いバージョンの JavaScript では名前付きの関数式が利用できず、このため再帰の関数式を作成することができませんでした。

例えば、以下の構文は動作しました。

```js
function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

しかし、

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : /* ここでどうする？ */ (n - 1) * n;
});
```

とは書けませんでした。回避策としてこの `arguments.callee` が追加され、以下のようなことができるようになりました。

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

しかし、`arguments.callee` の設計には複数の問題があります。最初の問題は、再帰呼び出しで異なる `this` 値が取得されることです。例えば、

```js
function sillyFunction(recursed) {
  if (this !== globalThis) {
    console.log("This is:", this);
  } else {
    console.log("This is the global");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
}

sillyFunction();
// This is the global
// This is: [object Arguments]
```

さらに、 `arguments.callee` への参照は、一般的なケースではインライン化と末尾再帰を不可能にします。（トレースなどを通じて選択のケースでは実現可能ですが、必要のない調べが発生するため、最良のコードでさえ最適とは言えません。）

ECMAScript 3 では、以下のように名前付き関数式を許可することでこれらの問題を解決しました。

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

これには多くの利点があります。

- 他の関数と同様に、コード内の他のところから呼び出すことができる
- 外側のスコープに変数を作らない（[IE 8 以前を除く](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope)）
- arguments オブジェクトにアクセスするよりもパフォーマンスが良い

厳格モードでは、関数の [`caller`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) プロパティ（同様にスタック情報を漏らす）が禁止されています。これは、呼び出しスタックを参照することが、多数の最適化を不可能にしたり、はるかに困難にするという重大な効果を及ぼすためです。例えば、関数 `f` が未知の関数を呼び出すことを保証できない場合、`f` をインライン化することはできません。

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

JavaScript インタープリターは、呼び出しが行われた時点で提供されたすべての引数が数字であることを保証できない場合、インライン化されたコードの前ですべての引数のチェックを挿入するか、関数をインライン化できないようにする必要があります。この場合は、賢いインタープリターであれば、チェックをより最適な形に組み替え、使われない値はチェックしないようにできるはずです。しかし、多くの場合それは不可能であり、したがってインライン化することは不可能になります。

## 例

### 無名再帰関数内での arguments.callee の使用

再帰関数は自分自身を参照する必要があります。ふつう、関数が自分自身を参照するには関数名を使用します。しかし、無名関数（[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)または [`Function` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)で作成できる）には名前がありません。したがって、これを参照するためのアクセス可能な変数がない場合、関数が自分自身を参照できる唯一の方法が `arguments.callee` による方法になります。

次の例は関数を定義し、その関数内でさらに階乗関数を定義して返しています。この例はあまり実用的ではなく、[名前付き関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)で同じ結果が得られない場合はほとんどありません。

```js
function create() {
  return function (n) {
    if (n <= 1) {
      return 1;
    }
    return n * arguments.callee(n - 1);
  };
}

const result = create()(5); // 120 (5 * 4 * 3 * 2 * 1) を返す
```

### Y-結合子をつけて無名関数の再帰

関数式には名前が付けられるようになりましたが、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)は常に無名関数であり、まず変数に代入されない限り自分自身を参照できません。幸いなことに、ラムダ計算には関数が無名かつ自己参照できる状態になることができる優れた解決策があります。この手法は [Y-結合子](https://ja.wikipedia.org/wiki/不動点コンビネータ#Yコンビネータ)と呼ばれます。ここではその仕組みについては説明せず、それが機能する事実のみを述べます。

```js
// The Y-combinator: a utility function!
const Y = (hof) => ((x) => x(x))((x) => hof((y) => x(x)(y)));

console.log(
  [1, 2, 3, 4, 5].map(
    // Wrap the higher-order function in the Y-combinator
    // "factorial" is not a function's name: it's introduced as a parameter
    Y((factorial) => (n) => (n <= 1 ? 1 : factorial(n - 1) * n)),
  ),
);
// [ 1, 2, 6, 24, 120 ]
```

> [!NOTE]
> この方法は反復処理ごとに新しいクロージャを割り当てるため、メモリー使用量が大幅に増加する可能性があります。ここでは可能性を示すためだけに存在しますが、本番環境では避けるべきです。代わりに一時変数または名前付き関数式を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
