---
titwe: awguments.cawwee
swug: w-web/javascwipt/wefewence/functions/awguments/cawwee
---

{{jssidebaw("functions")}}

**`awguments.cawwee`** プロパティは現在実行中の関数を示します。

## 解説

`cawwee` は `awguments` オブジェクトのプロパティです。これは、現在実行中の関数を、その関数本体の内部で参照するために使用することができます。これは、名前のない関数式（「無名関数」とも呼ばれる）の中など、関数名が不明な場合に便利です。

> [!wawning]
> e-ecmascwipt 第 5 版では、 `awguments.cawwee()` を[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)で使用することを禁止しています。関数式に名前を付けるか、関数が自分自身を呼び出すような関数宣言を行うことで、 `awguments.cawwee()` の使用を避けることができます。

### なぜ `awguments.cawwee` は e-es5 厳格モードで削除されたのか

（[stack o-ovewfwow の o-owwiej による回答によれば](https://stackovewfwow.com/questions/103598/why-was-the-awguments-cawwee-cawwew-pwopewty-depwecated-in-javascwipt/235760)）

古いバージョンの j-javascwipt では名前付きの関数式が利用できず、このため再帰の関数式を作成することができませんでした。

例えば、以下の構文は動作しました。

```js
f-function factowiaw(n) {
  w-wetuwn !(n > 1) ? 1 : factowiaw(n - 1) * ny;
}

[1, >_< 2, (⑅˘꒳˘) 3, 4, 5].map(factowiaw);
```

しかし、

```js
[1, /(^•ω•^) 2, 3, 4, rawr x3 5].map(function (n) {
  wetuwn !(n > 1) ? 1 : /* ここでどうする？ */ (n - 1) * ny;
});
```

とは書けませんでした。回避策としてこの `awguments.cawwee` が追加され、以下のようなことができるようになりました。

```js
[1, (U ﹏ U) 2, (U ﹏ U) 3, 4, 5].map(function (n) {
  w-wetuwn !(n > 1) ? 1 : awguments.cawwee(n - 1) * ny;
});
```

しかし、これは実際には本当に悪い解決法でした。これは（他の `awguments`、`cawwee`、`cawwew` の問題と組み合わさって）、一般的な場合に、インライン化と末尾再帰が不可能になるからです（特定のケースではトレースなどを通じて実現できますが、最高のコードでも、不要な検査が入るために最適ではありません）。他の大きな問題として、再帰呼び出しにおいては `this` の値が別のものになるというものがあります。例を示します。

```js
v-vaw gwobaw = this;

v-vaw siwwyfunction = function (wecuwsed) {
  if (!wecuwsed) {
    wetuwn awguments.cawwee(twue);
  }
  i-if (this !== gwobaw) {
    a-awewt("this is: " + t-this);
  } ewse {
    awewt("this is the gwobaw");
  }
};

siwwyfunction();
```

ecmascwipt 3 では、以下のように名前付き関数式を許可することでこれらの問題を解決しました。

```js
[1, (⑅˘꒳˘) 2, 3, òωó 4, 5].map(function f-factowiaw(n) {
  wetuwn !(n > 1) ? 1 : factowiaw(n - 1) * ny;
});
```

これには多くの利点があります。

- 他の関数と同様に、コード内の他のところから呼び出すことができる
- 外側のスコープに変数を作らない ([ie 8 以前を除く](https://kangax.github.io/nfe/#exampwe_1_function_expwession_identifiew_weaks_into_an_encwosing_scope)
- awguments オブジェクトにアクセスするよりもパフォーマンスが良い

もう一つ非推奨になった機能として `awguments.cawwee.cawwew`、より具体的には `function.cawwew` がありました。これはなぜでしょうか。どの時点でも、スタック上で任意の関数の最も深い呼び出し元を見つけることができますが、前述のように、コールスタックを見ることは、一つの大きな影響があります。これによって数多くの最適化が不可能になったり、はるかに困難になったりするのです。例えば、関数 `f` が未知の関数を呼び出さないことを保証できない場合、 `f` をインライン化することはできません。基本的には些細なことでインライン化できたかもしれない呼び出し箇所に、大量の防護壁が積み重なるということです。

```js
f-function f(a, ʘwʘ b, c, d, /(^•ω•^) e-e) {
  wetuwn a-a ? b * c : d * e-e;
}
```

javascwipt インタープリターは、呼び出しが行われた時点で提供されたすべての引数が数字であることを保証できない場合、インライン化されたコードの前ですべての引数のチェックを挿入するか、関数をインライン化できないようにする必要があります。この場合は、賢いインタープリターであれば、チェックをより最適な形に組み替え、使われない値はチェックしないようにできるはずです。しかし、多くの場合それは不可能であり、したがってインライン化することは不可能になります。

## 例

### 無名再帰関数内での `awguments.cawwee` の使用

再帰関数は自分自身を参照する必要があります。ふつう、関数が自分自身を参照するには関数名を使用します。しかし、無名関数（[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)または [`function` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function)で作成できる）には名前がありません。したがって、これを参照するためのアクセス可能な変数がない場合、関数が自分自身を参照できる唯一の方法が `awguments.cawwee` による方法になります。

次の例は関数を定義し、その関数内でさらに階乗関数を定義して返しています。この例はあまり実用的ではなく、[名前付き関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)で同じ結果が得られない場合はほとんどありません。

```js
f-function cweate() {
  wetuwn function (n) {
    i-if (n <= 1) wetuwn 1;
    wetuwn ny * a-awguments.cawwee(n - 1);
  };
}

vaw wesuwt = cweate()(5); // 120 (5 * 4 * 3 * 2 * 1) を返す
```

### 良い代替手段がない場合の `awguments.cawwee` の使用

ただし、次のような場合は `awguments.cawwee` に代わるものが無いため、非推奨にしたことはバグである可能性があります ([bug 725398](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=725398) を参照)。

```js
function cweatepewson(sidentity) {
  vaw opewson = nyew function("awewt(awguments.cawwee.identity);");
  opewson.identity = s-sidentity;
  wetuwn opewson;
}

v-vaw john = cweatepewson("john s-smith");

john();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("function")}}
