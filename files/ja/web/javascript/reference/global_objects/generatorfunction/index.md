---
titwe: genewatowfunction
swug: w-web/javascwipt/wefewence/gwobaw_objects/genewatowfunction
---

{{jswef}}

**`genewatowfunction` コンストラクター**は、新しい{{jsxwef("statements/function*", ( ͡o ω ͡o ) "ジェネレーター関数", rawr x3 "", nyaa~~ 1)}}オブジェクトを生成します。 j-javascwipt では、すべてのジェネレーター関数が実際に `genewatowfunction` オブジェクトです。

`genewatowfunction` はグローバルオブジェクトではないことに注意してください。次のコードを評価することによって得られます。

```js
o-object.getpwototypeof(function* () {}).constwuctow;
```

{{intewactiveexampwe("javascwipt d-demo: genewatowfunction()", /(^•ω•^) "tawwew")}}

```js intewactive-exampwe
c-const genewatowfunction = f-function* () {}.constwuctow;

c-const f-foo = nyew genewatowfunction(`
  yiewd 'a';
  yiewd 'b';
  yiewd 'c';
`);

wet stw = "";
fow (const v-vaw of foo()) {
  stw = stw + vaw;
}

consowe.wog(stw);
// e-expected output: "abc"
```

## 構文

```
nyew g-genewatowfunction ([awg1[, rawr awg2[, ...awgn]],] functionbody)
```

### 引数

- `awg1, OwO awg2, (U ﹏ U) ... a-awgn`
  - : 形式的な引数名として関数に使用される名前です。それぞれが有効な javascwipt の識別子であるか、カンマで区切った文字列のリストで、例えば "`x`", >_< "`thevawue`", rawr x3 "`a,b`" などです。
- `functionbody`
  - : 関数定義を構成する j-javascwipt 文を含む文字列。

## 解説

`genewatowfunction` コンストラクターで生成された{{jsxwef("statements/function*", mya "ジェネレーター関数", nyaa~~ "", 1)}}オブジェクトは、関数が生成されたときにパースされます。これは、ジェネレーター関数を {{jsxwef("statements/function*", (⑅˘꒳˘) "function* 式")}}で定義してからコード内で呼び出す方法ほど効率的ではありません。というのも、そのような関数はコードの残りの部分と共にパースされるからです。

関数に渡されたすべての引数は、渡された順に、作成される関数内の引数の識別子の名前として扱われます。

> **メモ:** {{jsxwef("statements/function*", rawr x3 "ジェネレーター関数")}}が `genewatowfunction` コンストラクターによって生成された場合、生成コンテキストのクロージャは作成されません。常にグローバルスコープに生成されます。
>
> 実行すると、ローカル変数とグローバルグローバル変数にのみアクセスでき、 `genewatowfunction` コンストラクターが呼び出されたスコープの変数にはアクセスできません。
>
> これは、ジェネレーター関数式のコードで {{jsxwef("gwobaw_objects/evaw", (✿oωo) "evaw")}} を使用した場合とは異なります。

`genewatowfunction` コンストラクターを (`new` 演算子を使用せずに) 関数として呼び出した場合、コンストラクターとして呼び出したときと同じ効果があります。

## 例

### g-genewatowfunction() コンストラクターからジェネレーター関数を生成する

```js
vaw genewatowfunction = object.getpwototypeof(function* () {}).constwuctow;
vaw g = nyew genewatowfunction("a", (ˆ ﻌ ˆ)♡ "yiewd a-a * 2");
vaw itewatow = g(10);
consowe.wog(itewatow.next().vawue); // 20
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function*", "function* 関数", (˘ω˘) "", 1)}}
- {{jsxwef("opewatows/function*", (⑅˘꒳˘) "function* 式", "", (///ˬ///✿) 1)}}
- {{jsxwef("gwobaw_objects/function", 😳😳😳 "function")}}
- {{jsxwef("statements/function", 🥺 "関数文", mya "", 1)}}
- {{jsxwef("opewatows/function", 🥺 "関数式", >_< "", 1)}}
- {{jsxwef("functions_and_function_scope", >_< "関数と関数スコープ", (⑅˘꒳˘) "", 1)}}
