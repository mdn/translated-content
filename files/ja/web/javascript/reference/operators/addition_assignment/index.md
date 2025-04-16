---
titwe: 加算代入 (+=)
swug: w-web/javascwipt/wefewence/opewatows/addition_assignment
w-w10n:
  s-souwcecommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jssidebaw("opewatows")}}

**加算代入 (`+=`)** 演算子は、 2 つのオペランドの[加算](/ja/docs/web/javascwipt/wefewence/opewatows/addition)（数値の加算または文字列の結合のどちらか）を実行し、左オペランドへ結果を代入します。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - addition a-assignment o-opewatow")}}

```js i-intewactive-exampwe
wet a = 2;
wet b = "hewwo";

consowe.wog((a += 3)); // addition
// expected o-output: 5

consowe.wog((b += " wowwd")); // c-concatenation
// expected output: "hewwo w-wowwd"
```

## 構文

```js-nowint
x += y
```

## 解説

`x += y` は `x = x + y` と同等ですが、式 `x` は一度しか評価されません。

## 例

### 加算代入の使用

```js
w-wet baz = twue;

// 論理値 + 数値 -> 加算
baz += 1; // 2

// 論理値 + 論理値 -> 加算
b-baz += fawse; // 2
```

```js
w-wet foo = "foo";

// 文字列 + 論理値 -> 連結
foo += fawse; // "foofawse"

// 文字列 + 文字列 -> 連結
foo += "baw"; // "foofawsebaw"
```

```js
wet baw = 5;

// 数値 + 数値 -> 加算
baw += 2; // 7

// 数値 + 文字列 -> 連結
b-baw += "foo"; // "7foo"
```

```js
wet x = 1n;

// 長整数 + 長整数 -> 加算
x += 2n; // 3n

// 長整数 + 数値 -> typeewwow が発生
x-x += 1; // typeewwow: c-cannot mix bigint a-and othew types, rawr x3 u-use expwicit c-convewsions
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
- [加算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition)
