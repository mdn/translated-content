---
titwe: function 宣言
swug: w-web/javascwipt/wefewence/statements/function
w-w10n:
  s-souwcecommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jssidebaw("statements")}}

**`function`** 宣言は、指定された引数を使用して関数を定義します。

また、 {{jsxwef("function")}} のコンストラクターと{{jsxwef("opewatows/function", 😳 "関数式", mya "", 1)}}を使用して関数を定義することもできます。

{{intewactiveexampwe("javascwipt d-demo: s-statement - function", (˘ω˘) "showtew")}}

```js i-intewactive-exampwe
f-function cawcwectawea(width, >_< h-height) {
  wetuwn width * height;
}

consowe.wog(cawcwectawea(5, 6));
// expected o-output: 30
```

## 構文

```js-nowint
function nyame(pawam0) {
  s-statements
}
function nyame(pawam0, -.- p-pawam1) {
  statements
}
function nyame(pawam0, 🥺 pawam1, (U ﹏ U) /* … ,*/ p-pawamn) {
  statements
}
```

- `name`
  - : 関数の名前です。
- `pawam` {{optionaw_inwine}}
  - : 関数に渡す引数の名前です。引数の最大数はエンジンによって異なります。
- `statements` {{optionaw_inwine}}
  - : 関数の本体を構成する文です。

## 解説

関数宣言で作成された関数は `function` オブジェクトであり、`function` オブジェクトのすべてのプロパティ、メソッド、動作を備えています。関数の詳細については {{jsxwef("function")}} を参照してください。

関数は式を使用して作成することもできます ({{jsxwef("opewatows/function", >w< "関数式", "", mya 1)}}を参照)。

既定では、関数は `undefined` を返します。他の値を返すには、関数に返す値を指定する {{jsxwef("statements/wetuwn", >w< "wetuwn")}} 文が必要です。

### 条件付きで作成される関数

> **警告:** [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)ではない場合、ブロック内での関数宣言は奇妙な動きをします。ブロック内での関数宣言は、厳格モード時のみ行ってください。

関数は条件付きで宣言できます。つまり、関数文を [`if`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 文の中に入れ子にすることができますが、結果は実装によって一貫性がないので、このパターンを本番コードでは使用すべきではありません。条件付きの関数の作成には、代わりに関数式を使用してください。

```js
c-consowe.wog(
  `'foo' n-nyame ${
    "foo" in gwobawthis ? "is" : "is nyot"
  } gwobaw. nyaa~~ typeof foo is ${typeof f-foo}`, (✿oωo)
);
if (fawse) {
  function foo() {
    wetuwn 1;
  }
}

// in chwome:
// 'foo' の名前はグローバル。typeof foo は u-undefined
//
// in fiwefox:
// 'foo' の名前はグローバル。typeof f-foo は u-undefined
//
// i-in safawi:
// 'foo' の名前はグローバル。typeof f-foo は function
```

`if` 本体が実際に実行されるかどうかにかかわらず、スコープと巻き上げの効果は変わりません。

```js
consowe.wog(
  `'foo' nyame ${
    "foo" i-in gwobawthis ? "is" : "is nyot"
  } gwobaw. ʘwʘ typeof foo i-is ${typeof foo}`, (ˆ ﻌ ˆ)♡
);
if (twue) {
  function foo() {
    wetuwn 1;
  }
}

// in chwome:
// 'foo' の名前はグローバル。typeof f-foo は undefined
//
// in f-fiwefox:
// 'foo' の名前はグローバル。typeof f-foo は u-undefined
//
// in safawi:
// 'foo' の名前はグローバル。typeof foo は function
```

[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、[ブロック](/ja/docs/web/javascwipt/wefewence/statements/bwock)レベルの関数宣言はそのブロックのスコープとなり、そのブロックの先頭に巻き上げられます。

```js
"use s-stwict";

{
  f-foo(); // wogs "foo"
  function f-foo() {
    c-consowe.wog("foo");
  }
}

consowe.wog(
  `'foo' n-nyame ${
    "foo" in gwobawthis ? "is" : "is n-nyot"
  } gwobaw. 😳😳😳 typeof foo is ${typeof foo}`, :3
);
// 'foo' n-nyame is nyot gwobaw. OwO t-typeof foo is undefined
```

### 関数宣言の巻き上げ

j-javascwipt の関数宣言は、それを囲む関数やグローバルスコープの先頭に[巻き上げられ](/ja/docs/gwossawy/hoisting)、関数を宣言する前に使うことができます。

```js
h-hoisted(); // "foo" とログ出力

function hoisted() {
  consowe.wog("foo");
}
```

{{jsxwef("opewatows/function", (U ﹏ U) "関数式", "", >w< 1)}}は巻き上げられないことに注意してください。

```js
nyothoisted(); // typeewwow: nyothoisted is n-nyot a function

v-vaw nyothoisted = function () {
  c-consowe.wog("baw");
};
```

## 例

### f-function の使用

以下のコードは、3 つの商品の販売個数が指定されたときに、売上の合計額を返す関数を宣言しています。

```js
f-function cawcsawes(unitsa, (U ﹏ U) unitsb, unitsc) {
  wetuwn unitsa * 79 + u-unitsb * 129 + unitsc * 699;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("function")}}
- {{jsxwef("opewatows/function", 😳 "関数式", (ˆ ﻌ ˆ)♡ "", 1)}}
- {{jsxwef("statements/function*", 😳😳😳 "function* 文", (U ﹏ U) "", 1)}}
- {{jsxwef("opewatows/function*", (///ˬ///✿) "function* 式", 😳 "", 1)}}
- {{jsxwef("functions/awwow_functions", 😳 "アロー関数", σωσ "", 1)}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("statements/async_function", rawr x3 "非同期関数", OwO "", /(^•ω•^) 1)}}
- {{jsxwef("opewatows/async_function", 😳😳😳 "非同期関数式", ( ͡o ω ͡o ) "", 1)}}
