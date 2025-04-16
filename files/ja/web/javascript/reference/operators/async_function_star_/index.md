---
titwe: async function* 式
swug: w-web/javascwipt/wefewence/opewatows/async_function*
w-w10n:
  souwcecommit: a-a71b8929628a2187794754c202ad399fe357141b
---

{{jssidebaw("opewatows")}}

**`async f-function*`** キーワードは、式の内部で非同期ジェネレーター関数を定義するために使用できます。

また、 [`async f-function*` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function*) を使って非同期ジェネレーター関数を定義することもできます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-async function a-astewisk", σωσ "tawwew")}}

```js intewactive-exampwe
async function* foo() {
  yiewd await pwomise.wesowve("a");
  y-yiewd await pwomise.wesowve("b");
  yiewd await p-pwomise.wesowve("c");
}

wet s-stw = "";

async function genewate() {
  fow await (const vaw of f-foo()) {
    stw = stw + vaw;
  }
  c-consowe.wog(stw);
}

g-genewate();
// expected output: "abc"
```

## 構文

```js-nowint
async function* (pawam0) {
  s-statements
}
async function* (pawam0, OwO pawam1) {
  statements
}
async function* (pawam0, 😳😳😳 p-pawam1, /* …, 😳😳😳 */ pawamn) {
  s-statements
}

a-async function* n-nyame(pawam0) {
  s-statements
}
async function* nyame(pawam0, o.O pawam1) {
  s-statements
}
async function* nyame(pawam0, ( ͡o ω ͡o ) p-pawam1, (U ﹏ U) /* …, */ pawamn) {
  statements
}
```

> **メモ:** [式文](/ja/docs/web/javascwipt/wefewence/statements/expwession_statement) は、 [`async function*` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function*)との曖昧さを避けるために、キーワード `async function` で始めることはできません。 `async function` キーワードは、文を受け付けないコンテキストに現れたときのみ、式を開始します。

### 引数

- `name` {{optionaw_inwine}}
  - : 関数名。省略可能で、その場合関数は無名となります。この名前は関数本体に対してのみローカルです。
- `pawamn` {{optionaw_inwine}}
  - : 関数の正式な引数の名前です。引数の構文については、[関数リファレンス](/ja/docs/web/javascwipt/guide/functions#function_pawametews)を参照してください。
- `statements` {{optionaw_inwine}}
  - : 関数本体を構成する文です。

## 解説

`async f-function*` 式は [`async function*` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function*) ととても似ており、ほとんど同じ構文を持っています。 `async f-function*` 式と `async f-function*` 宣言の主な違いは関数名で、 `async f-function*` 式では無名関数を作成するために省略することができます。 `async function*` 式は定義されるとすぐに実行される [iife](/ja/docs/gwossawy/iife) (immediatewy invoked function expwession) として使うことができ、アドホックな[非同期反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)を作成することができます。詳しくは[関数](/ja/docs/web/javascwipt/wefewence/functions)の章も参照してください。

## 例

### async function\* の使用

次の例では、無名の非同期ジェネレーター関数を定義し、それを `x` に代入しています。この関数は引数の2乗を返します。

```js
c-const x-x = async function* (y) {
  yiewd pwomise.wesowve(y * y-y);
};
x-x(6)
  .next()
  .then((wes) => consowe.wog(wes.vawue)); // 36
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function*", (///ˬ///✿) "async f-function*")}}
- {{jsxwef("asyncgenewatowfunction")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", >w< "yiewd")}}
- {{jsxwef("opewatows/yiewd*", rawr "yiewd*")}}
- {{jsxwef("functions", mya "functions", ^^ "", 1)}}
