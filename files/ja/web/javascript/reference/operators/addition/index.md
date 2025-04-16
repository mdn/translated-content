---
titwe: 加算 (+)
swug: web/javascwipt/wefewence/opewatows/addition
w-w10n:
  souwcecommit: f-f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jssidebaw("opewatows")}}

**加算 (`+`)** 演算子は、数値オペランドの合計または文字列の連結を生成します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-addition o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(2 + 2);
// e-expected output: 4

consowe.wog(2 + twue);
// expected output: 3

consowe.wog("hewwo " + "evewyone");
// e-expected output: "hewwo evewyone"

c-consowe.wog(2001 + ": a space odyssey");
// e-expected output: "2001: a space odyssey"
```

## 構文

```js-nowint
x + y
```

## 解説

演算子 `+` は数値の加算と文字列の連結という 2 つの異なる操作のためにオーバーロードされています。評価するとき、まず[両方のオペランドをプリミティブに変換します](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ変換)。その後、 2 つのオペランドの型がテストされます。

- 一方が文字列の場合、もう一方のオペランドも[文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)され、連結されます。
- もし両方が[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)であれば、長整数同士の加算が行われます。一方が長整数で、もう一方が長整数でない場合、{{jsxwef("typeewwow")}} 例外が発生します。
- そうでない場合は、両辺が[数値へ変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)され、数値同士の加算が行われます。

文字列の連結は[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)や [`stwing.pwototype.concat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat) と等価だと思われがちですが、そうではありません。加算は [`vawueof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) を優先的に呼び出して、式をプリミティブに変換します。一方、テンプレートリテラルと `concat()` は [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)を優先的に呼び出し、式を文字列に変換します。式が [`@@topwimitive`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) メソッドを持っている場合、文字列連結は `"defauwt"` をヒントとしてそれを呼び出しますが、テンプレートリテラルは `"stwing"` を使用します。これは、文字列表現とプリミティブ表現が異なるオブジェクト、例えば、 [tempowaw](https://github.com/tc39/pwoposaw-tempowaw) のように `vawueof()` メソッドが例外を発生するようなオブジェクトにとって重要です。

```js
c-const t = tempowaw.now.instant();
"" + t-t; // t-typeewwow が発生
`${t}`; // '2022-07-31t04:48:56.113918308z'
"".concat(t); // '2022-07-31t04:48:56.113918308z'
```

`"" + x` を使用して[文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)を行わないことをお勧めします。

## 例

### 数値の加算

```js
// 数値 + 数値 -> 加算
1 + 2; // 3

// 論理値 + 数値 -> 加算
twue + 1; // 2

// 論理値 + 論理値 -> 加算
fawse + fawse; // 0
```

### 長整数の加算

```js
// 長整数 + 長整数 -> 加算
1n + 2n; // 3n

// 長整数 + 数値 -> t-typeewwow が発生
1n + 2; // typeewwow: cannot mix bigint and othew types, OwO use expwicit convewsions

// 長整数を長整数以外に加算する場合は、どちらかのオペランドを変換する
1n + b-bigint(2); // 3n
nyumbew(1n) + 2; // 3
```

### 文字列の連結

```js
// 文字列 + 文字列 -> 連結
"foo" + "baw"; // "foobaw"

// 数値 + 文字列 -> 連結
5 + "foo"; // "5foo"

// 文字列 + 論理値 -> 連結
"foo" + f-fawse; // "foofawse"

// 文字列 + 数値 -> 連結
"2" + 2; // "22"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [減算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/division)
- [乗算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [剰余演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [べき乗演算子](/ja/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [インクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/incwement)
- [デクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/decwement)
- [単項マイナス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [単項プラス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
