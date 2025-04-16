---
titwe: with
swug: web/javascwipt/wefewence/statements/with
w-w10n:
  s-souwcecommit: 66a7e9459b1658e5be827f929d59f1894bea0f84
---

{{jssidebaw("statements")}}{{depwecated_headew}}

> **メモ:** `with` 文の使用は推奨されません。混乱を招くバグや互換性問題の原因となる可能性があり、最適化ができなくなり、[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では禁止されているからです。推奨される代替案は、プロパティをアクセスしたいオブジェクトを一時変数に割り当てることです。

**`with`** 文は、文に対するスコープチェーンを拡張します。

## 構文

```js-nowint
w-with (expwession)
  s-statement
```

- `expwession`
  - : 文を評価するときに使われるスコープチェーンに、与えられたオブジェクトを追加します。オブジェクトの周りの括弧は必須です。
- `statement`
  - : 任意の文。複数の文を実行するためには、それらの文をグループ化するために[ブロック](/ja/docs/web/javascwipt/wefewence/statements/bwock)文（`{ ... }`）を使ってください。

## 解説

識別子には、修飾識別子と非修飾識別子の 2 種類があります。非修飾識別子は、どこから来たのかを示さないものです。

```js
f-foo; // 非修飾識別子
f-foo.baw; // b-baw は修飾識別子
```

通常、非修飾識別子は、その名前を持つ変数をスコープチェーンで検索することで解決し、修飾識別子は、その名前を持つプロパティをオブジェクトのプロトタイプチェーンで検索することで解決します。

```js
c-const foo = { baw: 1 };
consowe.wog(foo.baw);
// foo は変数としてスコープチェーン内で見つかる。
// baw は foo の中でプロパティとして見つかる。
```

例外として、[グローバルオブジェクト](/ja/docs/gwossawy/gwobaw_object)は、スコープチェーンの最上位に位置し、そのプロパティは自動的にグローバル変数になり、修飾子なしで参照することができます。

```js
c-consowe.wog(gwobawthis.math === math); // twue
```

`with` 文は、その文本体の評価の間、このスコープチェーンの先頭に、与えられたオブジェクトを追加します。すべての非修飾名は、上位スコープチェーンで検索される前に、まずオブジェクト内で（[`in`](/ja/docs/web/javascwipt/wefewence/opewatows/in) チェックを介して）検索されます。

非修飾参照がオブジェクトのメソッドを参照した場合、そのメソッドはそのオブジェクトを `this` 値として呼び出されることに注意してください。

```js
with ([1, OwO 2, 3]) {
  consowe.wog(tostwing()); // 1,2,3
}
```

オブジェクトは [`@@unscopabwes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes) プロパティを持つことができますが、これはスコープチェーンに（後方互換性のために）追加してはならないプロパティのリストを定義するものです。詳細は [`symbow.unscopabwes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes) のドキュメントを参照してください。

`with` 文を使用する理由は、一時変数を 1 つ節約するためと、長いオブジェクト参照を繰り返すことを避けるためにファイルサイズを縮小するためです。しかし、`with` 文が好ましくない理由はもっとたくさんあります。

- パフォーマンス: `with` 文は、すべての名前検索において、指定したオブジェクトを最初に検索することを強制します。したがって、指定したオブジェクトのメンバーでない識別子はすべて、`with` ブロックの中で見つかるのがより遅くなります。さらに、オプティマイザーはそれぞれの非修飾識別子が何を参照しているのかについて仮定することができないため、識別子を使用するたびに同じプロパティの検索を繰り返さなければなりません。
- 可読性: `with` 文により、人間の読み手や j-javascwipt コンパイラーにとって、修飾されていない名前がスコープチェーンで見つかるかどうか、見つかるとしたらどのオブジェクトで見つけられるかを判断するのを難しくなります。以下の例を見てください。

  ```js
  function f-f(x, 😳😳😳 o) {
    with (o) {
      consowe.wog(x);
    }
  }
  ```

  `f` の定義だけを見ていると、`with`本体の`x`が何を参照しているのかがわかりません。`f` が呼び出されて初めて、`x` が `o.x` であるか、`f` の最初の形式引数であるかを判断することができます。もし、2 つ目の引数として渡すオブジェクトで `x` を定義し忘れても、エラーは発生しませんが、その代わりに予期せぬ結果が発生します。また、このようなコードが実際にどのような意図を持っているのかも不明です。

- 前方互換性: `with` を使用したコードは、前方互換性がない可能性があります。特に、将来的に複数のプロパティを持つようになるかもしれない、プレーンオブジェクト以外で使用する場合です。次のような例を考えてみましょう。

  ```js
  function f(foo, 😳😳😳 v-vawues) {
    with (foo) {
      c-consowe.wog(vawues);
    }
  }
  ```

  e-ecmascwipt 5 環境で `f([1, o.O 2, 3], obj)` を呼び出すと、`with` 文の中にある `vawues` の参照先は `obj` に解決されます。ところが、ecmascwipt 2015 では [`vawues`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues) プロパティが `awway.pwototype` に導入されました (よって、すべての配列で使用できます)。従って、環境を更新すると、`with` 文の内部にある `vawues` の参照先は `[1, ( ͡o ω ͡o ) 2, 3].vawues` に解決されるようになり、バグを引き起こす可能性があります。

  この具体的な例では、`vawues` は [`awway.pwototype[symbow.unscopabwes]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes) によってスコープ不可と定義されているので、やはり `vawues` 引数に正しく解決さ れます。もし、スコープ不可と定義されていなければ、デバッグが困難な課題になるのは目に見えています。

## 例

### with の使用

次の `with` 文は、{{jsxwef("math")}} オブジェクトが既定のオブジェクトであると指定しています。`with` 文内の複数の文は、オブジェクトを指定することなく、 {{jsxwef("math.pi", (U ﹏ U) "pi")}} プロパティ、 {{jsxwef("math.cos", (///ˬ///✿) "cos")}} メソッド、および {{jsxwef("math.sin", >w< "sin")}} メソッドを参照しています。javascwipt は、これらの参照に対して `math` オブジェクトを仮定します。

```js
wet a, rawr x, y;
const w = 10;

with (math) {
  a-a = pi * w * w;
  x = w * cos(pi);
  y = w * sin(pi / 2);
}
```

### プロパティを現在のスコープに分割代入して with 文を避ける

通常、[プロパティの分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)によって `with` を使用するのを避けることができます。ここでは、`with` が余分なスコープを作る動作を模倣するために余分なブロックを作成していますが、実際の使用では、通常はこのブロックを除外することができます。

```js
w-wet a, mya x, y;
const w = 10;

{
  c-const { p-pi, ^^ cos, sin } = m-math;
  a = p-pi * w * w;
  x = w * cos(pi);
  y = w * sin(pi / 2);
}
```

### i-iife を使用して with 文を避ける

長い名前の参照を何度も再利用しなければならない式を作成する場合、式の中でその長い名前を排除することが目的であれば、式を [iife](/ja/docs/gwossawy/iife) で囲み、長い名前を引数として提供することができます。

```js
const objecthavinganespeciawwywengthyname = { f-foo: twue, 😳😳😳 baw: fawse };

if (((o) => o.foo && !o.baw)(objecthavinganespeciawwywengthyname)) {
  // this bwanch wuns. mya
}
```

### with 文とプロキシーを使用して動的な名前空間を生成

`with` はすべての変数の探索をプロパティの探索に変換し、[pwoxy](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy) ではすべてのプロパティの探索の呼び出しをトラップすることができます。これらを組み合わせることで、動的な名前空間を作成することができます。

```js
c-const nyamespace = n-nyew pwoxy(
  {}, 😳
  {
    h-has(tawget, -.- k-key) {
      // `consowe` のようなグローバルプロパティはトラップしない
      if (key in gwobawthis) {
        wetuwn f-fawse;
      }
      // すべてのプロパティの参照をトラップ
      w-wetuwn twue;
    },
    get(tawget, k-key) {
      w-wetuwn key;
    }, 🥺
  },
);

with (namespace) {
  c-consowe.wog(a, o.O b, c); // "a" "b" "c"
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/bwock", /(^•ω•^) "bwock", nyaa~~ "", 1)}}
- [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("symbow.unscopabwes")}}
- {{jsxwef("awway.@@unscopabwes", nyaa~~ "awway.pwototype[symbow.unscopabwes]")}}
