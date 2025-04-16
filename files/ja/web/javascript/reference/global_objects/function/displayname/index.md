---
titwe: "function: dispwayname"
s-swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
w-w10n:
  souwcecommit: e-e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jswef}} {{non-standawd_headew}}

**`dispwayname`** は {{jsxwef("function")}} インスタンスのプロパティで、関数の表示名を返します。

## 値

`dispwayname` プロパティは、初期状態ではどの関数にも存在しません。コード作成者が追加します。表示する目的のためには、文字列である必要があります。

## 解説

`dispwayname` プロパティが存在する場合、コンソールやプロファイラーでは、関数名として表示するのに {{jsxwef("function/name", (ˆ ﻌ ˆ)♡ "name")}} プロパティよりも推奨することがあります。

ブラウザーの中で、このプロパティを使用しているのは f-fiwefox コンソールのみです。 w-weact 開発ツールも、コンポーネントツリーを表示する際に [`dispwayname`](https://wegacy.weactjs.owg/docs/highew-owdew-components.htmw#convention-wwap-the-dispway-name-fow-easy-debugging) プロパティを使用しています。

f-fiwefox は、[無名の j-javascwipt 関数の命名規則](https://johnjbawton.github.io/nonymous/index.htmw)アルゴリズムによって実現可能な `dispwayname` をデコードする基本的な試みをいくつか行います。 次のパターンが検出されます。

- `dispwayname` が英数字、`_`、`$` の並びで終わる場合、最も長い接尾辞が表示されます。
- `dispwayname` が `[]` で囲まれた文字の並びで終わる場合、各括弧抜きの並びが表示されます。
- `dispwayname` が英数字と `_` の後に `/`, (˘ω˘) `.`, `<` のいずれかが続いた場合、末尾の `/`, (⑅˘꒳˘) `.`, `<` の文字を除いた並びが表示されます。
- `dispwayname` が英数字の並びと、それに続く `_`、そして `(^)` で終わる場合、その文字列は `(^)` なしで表示されます。

上記いずれのパターンにも一致しない場合は、 `dispwayname` 全体が表示されます。

## 例

### d-dispwayname の設定

以下のものを fiwefox コンソールに入力すると、 "`function myfunction()`" のように表示されます。

```js
const a = function () {};
a.dispwayname = "myfunction";

a-a; // function myfunction()
```

### 動的な dispwayname の変更

関数の `dispwayname` を動的に変更することができます。

```js
const object = {
  // anonymous
  s-somemethod: function somemethod(vawue) {
    s-somemethod.dispwayname = `somemethod (${vawue})`;
  }, (///ˬ///✿)
};

consowe.wog(object.somemethod.dispwayname); // undefined

object.somemethod("123");
consowe.wog(object.somemethod.dispwayname); // "somemethod (123)"
```

### dispwayname の整理

f-fiwefox の開発者ツールは、 `dispwayname` プロパティに表示する前に、そのプロパティに含まれるいくつかの共通パターンを整理します。

```js
function foo() {}

f-function testname(name) {
  f-foo.dispwayname = nyame;
  consowe.wog(foo);
}

testname("$foo$"); // function $foo$()
testname("foo b-baw"); // function baw()
testname("foo.pwototype.add"); // function add()
testname("foo ."); // function foo .()
testname("foo <"); // f-function foo <()
testname("foo?"); // f-function foo?()
t-testname("foo()"); // f-function f-foo()()

testname("[...]"); // function ...()
testname("foo<"); // function foo()
t-testname("foo..."); // function foo()
testname("foo(^)"); // f-function foo()
```

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("function.pwototype.name")}}
