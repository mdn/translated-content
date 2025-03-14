---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: 66a7e9459b1658e5be827f929d59f1894bea0f84
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> **メモ:** `with` 文の使用は推奨されません。混乱を招くバグや互換性問題の原因となる可能性があり、最適化ができなくなり、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では禁止されているからです。推奨される代替案は、プロパティをアクセスしたいオブジェクトを一時変数に割り当てることです。

**`with`** 文は、文に対するスコープチェーンを拡張します。

## 構文

```js-nolint
with (expression)
  statement
```

- `expression`
  - : 文を評価するときに使われるスコープチェーンに、与えられたオブジェクトを追加します。オブジェクトの周りの括弧は必須です。
- `statement`
  - : 任意の文。複数の文を実行するためには、それらの文をグループ化するために[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)文（`{ ... }`）を使ってください。

## 解説

識別子には、修飾識別子と非修飾識別子の 2 種類があります。非修飾識別子は、どこから来たのかを示さないものです。

```js
foo; // 非修飾識別子
foo.bar; // bar は修飾識別子
```

通常、非修飾識別子は、その名前を持つ変数をスコープチェーンで検索することで解決し、修飾識別子は、その名前を持つプロパティをオブジェクトのプロトタイプチェーンで検索することで解決します。

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo は変数としてスコープチェーン内で見つかる。
// bar は foo の中でプロパティとして見つかる。
```

例外として、[グローバルオブジェクト](/ja/docs/Glossary/Global_object)は、スコープチェーンの最上位に位置し、そのプロパティは自動的にグローバル変数になり、修飾子なしで参照することができます。

```js
console.log(globalThis.Math === Math); // true
```

`with` 文は、その文本体の評価の間、このスコープチェーンの先頭に、与えられたオブジェクトを追加します。すべての非修飾名は、上位スコープチェーンで検索される前に、まずオブジェクト内で（[`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) チェックを介して）検索されます。

非修飾参照がオブジェクトのメソッドを参照した場合、そのメソッドはそのオブジェクトを `this` 値として呼び出されることに注意してください。

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

オブジェクトは [`@@unscopables`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) プロパティを持つことができますが、これはスコープチェーンに（後方互換性のために）追加してはならないプロパティのリストを定義するものです。詳細は [`Symbol.unscopables`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) のドキュメントを参照してください。

`with` 文を使用する理由は、一時変数を 1 つ節約するためと、長いオブジェクト参照を繰り返すことを避けるためにファイルサイズを縮小するためです。しかし、`with` 文が好ましくない理由はもっとたくさんあります。

- パフォーマンス: `with` 文は、すべての名前検索において、指定したオブジェクトを最初に検索することを強制します。したがって、指定したオブジェクトのメンバーでない識別子はすべて、`with` ブロックの中で見つかるのがより遅くなります。さらに、オプティマイザーはそれぞれの非修飾識別子が何を参照しているのかについて仮定することができないため、識別子を使用するたびに同じプロパティの検索を繰り返さなければなりません。
- 可読性: `with` 文により、人間の読み手や JavaScript コンパイラーにとって、修飾されていない名前がスコープチェーンで見つかるかどうか、見つかるとしたらどのオブジェクトで見つけられるかを判断するのを難しくなります。以下の例を見てください。

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  `f` の定義だけを見ていると、`with`本体の`x`が何を参照しているのかがわかりません。`f` が呼び出されて初めて、`x` が `o.x` であるか、`f` の最初の形式引数であるかを判断することができます。もし、2 つ目の引数として渡すオブジェクトで `x` を定義し忘れても、エラーは発生しませんが、その代わりに予期せぬ結果が発生します。また、このようなコードが実際にどのような意図を持っているのかも不明です。

- 前方互換性: `with` を使用したコードは、前方互換性がない可能性があります。特に、将来的に複数のプロパティを持つようになるかもしれない、プレーンオブジェクト以外で使用する場合です。次のような例を考えてみましょう。

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  ECMAScript 5 環境で `f([1, 2, 3], obj)` を呼び出すと、`with` 文の中にある `values` の参照先は `obj` に解決されます。ところが、ECMAScript 2015 では [`values`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/values) プロパティが `Array.prototype` に導入されました (よって、すべての配列で使用できます)。従って、環境を更新すると、`with` 文の内部にある `values` の参照先は `[1, 2, 3].values` に解決されるようになり、バグを引き起こす可能性があります。

  この具体的な例では、`values` は [`Array.prototype[@@unscopables]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables) によってスコープ不可と定義されているので、やはり `values` 引数に正しく解決さ れます。もし、スコープ不可と定義されていなければ、デバッグが困難な課題になるのは目に見えています。

## 例

### with の使用

次の `with` 文は、{{jsxref("Math")}} オブジェクトが既定のオブジェクトであると指定しています。`with` 文内の複数の文は、オブジェクトを指定することなく、 {{jsxref("Math.PI", "PI")}} プロパティ、 {{jsxref("Math.cos", "cos")}} メソッド、および {{jsxref("Math.sin", "sin")}} メソッドを参照しています。JavaScript は、これらの参照に対して `Math` オブジェクトを仮定します。

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### プロパティを現在のスコープに分割代入して with 文を避ける

通常、[プロパティの分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)によって `with` を使用するのを避けることができます。ここでは、`with` が余分なスコープを作る動作を模倣するために余分なブロックを作成していますが、実際の使用では、通常はこのブロックを除外することができます。

```js
let a, x, y;
const r = 10;

{
  const { PI, cos, sin } = Math;
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### IIFE を使用して with 文を避ける

長い名前の参照を何度も再利用しなければならない式を作成する場合、式の中でその長い名前を排除することが目的であれば、式を [IIFE](/ja/docs/Glossary/IIFE) で囲み、長い名前を引数として提供することができます。

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### with 文とプロキシーを使用して動的な名前空間を生成

`with` はすべての変数の探索をプロパティの探索に変換し、[Proxy](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy) ではすべてのプロパティの探索の呼び出しをトラップすることができます。これらを組み合わせることで、動的な名前空間を作成することができます。

```js
const namespace = new Proxy(
  {},
  {
    has(target, key) {
      // `console` のようなグローバルプロパティはトラップしない
      if (key in globalThis) {
        return false;
      }
      // すべてのプロパティの参照をトラップ
      return true;
    },
    get(target, key) {
      return key;
    },
  },
);

with (namespace) {
  console.log(a, b, c); // "a" "b" "c"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/block", "block", "", 1)}}
- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
