---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
---

{{jsSidebar("Functions")}}

**`arguments.callee`** プロパティは現在実行中の関数を示します。

## 解説

`callee` は `arguments` オブジェクトのプロパティです。これは、現在実行中の関数を、その関数本体の内部で参照するために使用することができます。これは、名前のない関数式（「無名関数」とも呼ばれる）の中など、関数名が不明な場合に便利です。

> **警告:** ECMAScript 第 5 版では、 `arguments.callee()` を[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で使用することを禁止しています。関数式に名前を付けるか、関数が自分自身を呼び出すような関数宣言を行うことで、 `arguments.callee()` の使用を避けることができます。

### なぜ `arguments.callee` は ES5 厳格モードで削除されたのか

（[Stack Overflow の olliej による回答によれば](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760)）

古いバージョンの JavaScript では名前付きの関数式が利用できず、このため再帰の関数式を作成することができませんでした。

例えば、以下の構文は動作しました。

```js
function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

しかし、

```js
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : /* ここでどうする？ */ (n - 1) * n;
});
```

とは書けませんでした。回避策としてこの `arguments.callee` が追加され、以下のようなことができるようになりました。

```js
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

しかし、これは実際には本当に悪い解決法でした。これは（他の `arguments`、`callee`、`caller` の問題と組み合わさって）、一般的な場合に、インライン化と末尾再帰が不可能になるからです（特定のケースではトレースなどを通じて実現できますが、最高のコードでも、不要な検査が入るために最適ではありません）。他の大きな問題として、再帰呼び出しにおいては `this` の値が別のものになるというものがあります。例を示します。

```js
var global = this;

var sillyFunction = function (recursed) {
  if (!recursed) {
    return arguments.callee(true);
  }
  if (this !== global) {
    alert("This is: " + this);
  } else {
    alert("This is the global");
  }
};

sillyFunction();
```

ECMAScript 3 では、以下のように名前付き関数式を許可することでこれらの問題を解決しました。

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

これには多くの利点があります。

- 他の関数と同様に、コード内の他のところから呼び出すことができる
- 外側のスコープに変数を作らない ([IE 8 以前を除く](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope)
- arguments オブジェクトにアクセスするよりもパフォーマンスが良い

もう一つ非推奨になった機能として `arguments.callee.caller`、より具体的には `Function.caller` がありました。これはなぜでしょうか。どの時点でも、スタック上で任意の関数の最も深い呼び出し元を見つけることができますが、前述のように、コールスタックを見ることは、一つの大きな影響があります。これによって数多くの最適化が不可能になったり、はるかに困難になったりするのです。例えば、関数 `f` が未知の関数を呼び出さないことを保証できない場合、 `f` をインライン化することはできません。基本的には些細なことでインライン化できたかもしれない呼び出し箇所に、大量の防護壁が積み重なるということです。

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

JavaScript インタープリターは、呼び出しが行われた時点で提供されたすべての引数が数字であることを保証できない場合、インライン化されたコードの前ですべての引数のチェックを挿入するか、関数をインライン化できないようにする必要があります。この場合は、賢いインタープリターであれば、チェックをより最適な形に組み替え、使われない値はチェックしないようにできるはずです。しかし、多くの場合それは不可能であり、したがってインライン化することは不可能になります。

## 例

### 無名再帰関数内での `arguments.callee` の使用

再帰関数は自分自身を参照する必要があります。ふつう、関数が自分自身を参照するには関数名を使用します。しかし、無名関数（[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)または [`Function` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)で作成できる）には名前がありません。したがって、これを参照するためのアクセス可能な変数がない場合、関数が自分自身を参照できる唯一の方法が `arguments.callee` による方法になります。

次の例は関数を定義し、その関数内でさらに階乗関数を定義して返しています。この例はあまり実用的ではなく、[名前付き関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)で同じ結果が得られない場合はほとんどありません。

```js
function create() {
  return function (n) {
    if (n <= 1) return 1;
    return n * arguments.callee(n - 1);
  };
}

var result = create()(5); // 120 (5 * 4 * 3 * 2 * 1) を返す
```

### 良い代替手段がない場合の `arguments.callee` の使用

ただし、次のような場合は `arguments.callee` に代わるものが無いため、非推奨にしたことはバグである可能性があります ([bug 725398](https://bugzilla.mozilla.org/show_bug.cgi?id=725398) を参照)。

```js
function createPerson(sIdentity) {
  var oPerson = new Function("alert(arguments.callee.identity);");
  oPerson.identity = sIdentity;
  return oPerson;
}

var john = createPerson("John Smith");

john();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function")}}
