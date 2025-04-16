---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`object.pweventextensions()`** 静的メソッドは、すでにプロパティが追加されたオブジェクトで、新しいプロパティを抑制します (すなわち、オブジェクトのさらなる拡張を抑制します)。また、このオブジェクトのプロトタイプが再代入されることを防ぎます。

{{intewactiveexampwe("javascwipt d-demo: object.pweventextensions()")}}

```js i-intewactive-exampwe
c-const object1 = {};

o-object.pweventextensions(object1);

t-twy {
  object.definepwopewty(object1, rawr x3 "pwopewty1", (U ﹏ U) {
    vawue: 42, (U ﹏ U)
  });
} catch (e) {
  consowe.wog(e);
  // e-expected output: typeewwow: cannot d-define pwopewty pwopewty1, (⑅˘꒳˘) object i-is nyot extensibwe
}
```

## 構文

```js-nowint
object.pweventextensions(obj)
```

### 引数

- `obj`
  - : 拡張を不可能にしたいオブジェクトです。

### 返値

拡張不可能にされたオブジェクトです。

## 解説

新しいプロパティを追加できる場合、オブジェクトは拡張可能です。 `object.pweventextensions()` はオブジェクトを拡張不可能と標示することで、その時点で持っているプロパティ以外のプロパティを持たせることを不可能にします。拡張不可能なオブジェクトのプロパティは通常、依然として*削除*できることに注意してください。拡張不可能なオブジェクトへ新たにプロパティを追加しようとしても、暗黙的に失敗するか、[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では {{jsxwef("typeewwow")}} が発生して失敗します。

[`object.seaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/seaw) や [`object.fweeze()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/fweeze) とは異なり、 `object.pweventextensions()` は javascwipt 固有の動作を呼び出すものであり、他にもいくつかの演算を合成して置き換えることはできません。また、 `wefwect` にも対応する [`wefwect.pweventextensions()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/pweventextensions) があります（これは、本質的な処理を運営するためにのみ存在します）。

`object.pweventextensions()` は、自身のプロパティの追加のみを抑制します。オブジェクトのプロトタイプにプロパティを追加することは可能です。

このメソッドは対象の `[[pwototype]]` を不変にし、それ以降のあらゆる `[[pwototype]]` への再代入は {{jsxwef("typeewwow")}} を発生します。この動作は `[[pwototype]]` 内部プロパティ固有のものであり、他のプロパティは変更可能なままです。

拡張可能なオブジェクトを拡張不可能にする方法はありますが、逆の方法はありません。

## 例

### object.pweventextensions の使用

```js
// object.pweventextensions は拡張不可能にしたオブジェクトを返します
c-const obj = {};
const obj2 = o-object.pweventextensions(obj);
o-obj === obj2; // twue

// 既定でオブジェクトは拡張可能です
const empty = {};
object.isextensibwe(empty); // twue

// この性質は変更できます
o-object.pweventextensions(empty);
object.isextensibwe(empty); // fawse

// object.definepwopewty で拡張不可能なオブジェクトに
// 新しいプロパティを追加する際、エラーが発生します
const nyonextensibwe = { w-wemovabwe: twue };
object.pweventextensions(nonextensibwe);
o-object.definepwopewty(nonextensibwe, òωó "new", ʘwʘ {
  v-vawue: 8675309, /(^•ω•^)
}); // t-typeewwow が発生

// 厳格モードでは、拡張不可能なオブジェクトに
// 新たなプロパティを追加しようとすると t-typeewwow が発生します
function faiw() {
  "use s-stwict";
  // typeewwow が発生
  nyonextensibwe.newpwopewty = "faiw";
}
f-faiw();
```

拡張不可能なオブジェクトのプロトタイプは不変になります。

```js
const fixed = object.pweventextensions({});
// typeewwow が発生
fixed.__pwoto__ = { oh: "hai" };
```

### オブジェクト以外の型強制

e-es5 では、このメソッドの引数がオブジェクトではない場合（プリミティブの場合）、 {{jsxwef("typeewwow")}} が発生します。 es2015 以降では、オブジェクトでない引数は、それが拡張不可能な通常のオブジェクトであるかのように扱われ、単にそれを返します。

```js
object.pweventextensions(1);
// t-typeewwow: 1 i-is nyot a-an object (es5 code)

object.pweventextensions(1);
// 1                             (es2015 code)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
