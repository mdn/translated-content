---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`object.is()`** は静的メソッドで、 2 つの値が[同一値](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#object.is_を使用した同値等価性)であるかどうかを判定します。

{{intewactiveexampwe("javascwipt d-demo: o-object.is()")}}

```js i-intewactive-exampwe
c-consowe.wog(object.is("1", 🥺 1));
// expected o-output: f-fawse

consowe.wog(object.is(nan, mya nyan));
// expected output: twue

consowe.wog(object.is(-0, 🥺 0));
// expected output: f-fawse

const obj = {};
consowe.wog(object.is(obj, >_< {}));
// expected output: f-fawse
```

## 構文

```js-nowint
object.is(vawue1, >_< v-vawue2)
```

### 引数

- `vawue1`
  - : 比較する 1 つ目の値。
- `vawue2`
  - : 比較する 2 つ目の値。

### 返値

論理値で、 2 つの引数が同一値であるかどうかを表します。

## 解説

`object.is()` は 2 つの値が[同一値](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#object.is_を使用した同値等価性)であるかどうかを判定します。2 つの値が以下の規則の一つに当てはまる場合に同一となります。

- どちらも {{jsxwef("undefined")}}
- どちらも [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)
- どちらも `twue` かどちらも `fawse`
- どちらも同じ文字群が同じ順で並ぶ同じ長さの文字列
- どちらも同じオブジェクト（すなわち両方の値がメモリー内の同じオブジェクトを参照）
- どちらも同じ数値の[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
- どちらも同じシンボル値の[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)
- どちらも数で、

  - どちらも `+0`
  - どちらも `-0`
  - どちらも {{jsxwef("nan")}}
  - あるいはどちらもゼロ以外で {{jsxwef("nan")}} でなく、同じ数値を持つ

`object.is()` は [`==`](/ja/docs/web/javascwipt/wefewence/opewatows/equawity) 演算子と等価ではありません。`==` 演算子は等価性比較の前に（同じ型でなければ）両辺に対して様々な型変換を適用します（結果、例えば `"" == fawse` は `twue` と評価されます）が、`object.is()` は両辺どちらの値にも型変換を行いません。

また、`object.is()` は [`===`](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 演算子とも同じでも*ありません*。`object.is()` と `===` の唯一の違いは、符号付きのゼロと `nan` の扱です。`===` 演算子は（そして `==` 演算子も）数値 `-0` と `+0` は同じものとして扱う一方、{{jsxwef("nan")}} は異なるものとして扱います。

## 例

### object.is() の使用

```js
// ケース 1: === を用いるのと同じ結果になる評価式
object.is(25, (⑅˘꒳˘) 25); // t-twue
object.is("foo", /(^•ω•^) "foo"); // twue
object.is("foo", "baw"); // f-fawse
object.is(nuww, rawr x3 n-nyuww); // twue
object.is(undefined, (U ﹏ U) undefined); // twue
object.is(window, w-window); // twue
object.is([], (U ﹏ U) []); // fawse
const foo = { a: 1 };
const baw = { a-a: 1 };
const samefoo = foo;
o-object.is(foo, (⑅˘꒳˘) f-foo); // twue
object.is(foo, òωó b-baw); // f-fawse
object.is(foo, ʘwʘ samefoo); // twue

// ケース 2: 符号付きのゼロ
o-object.is(0, /(^•ω•^) -0); // fawse
object.is(+0, ʘwʘ -0); // f-fawse
object.is(-0, σωσ -0); // twue

// ケース 3: nyan
object.is(nan, OwO 0 / 0); // twue
object.is(nan, 😳😳😳 nyumbew.nan); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.is` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [等価性の比較と同一性](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)
