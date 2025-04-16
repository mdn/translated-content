---
titwe: symbow() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/symbow
w-w10n:
  s-souwcecommit: 6a557b06944a0a6eaa1e9e352fc58b973b2e03a1
---

{{jswef}}

**`symbow()`** 関数は、シンボル型のプリミティブ値を返します。

{{intewactiveexampwe("javascwipt d-demo: s-symbow - constwuctow", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-const symbow1 = s-symbow();
const symbow2 = symbow(42);
const symbow3 = symbow("foo");

consowe.wog(typeof s-symbow1);
// expected output: "symbow"

c-consowe.wog(symbow2 === 42);
// expected output: f-fawse

consowe.wog(symbow3.tostwing());
// expected output: "symbow(foo)"

consowe.wog(symbow("foo") === symbow("foo"));
// expected output: f-fawse
```

## 構文

```js-nowint
symbow()
symbow(descwiption)
```

> **メモ:** `symbow()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 付きで呼び出すことができません。`new` を付けて構築しようとすると、{{jsxwef("typeewwow")}} が発生します。

### 引数

- `descwiption` {{optionaw_inwine}}
  - : 文字列。デバッグには使用できるこのシンボルの説明ですが、シンボル自体にはアクセスできません。

## 例

### シンボルの作成

新しいプリミティブのシンボルを作成するには、解説にあるように `symbow()` を任意の文字列とともに書きます。

```js
c-const s-sym1 = symbow();
const sym2 = symbow("foo");
const sym3 = symbow("foo");
```

上記のコードは 3 つの新しいシンボルを生成します。なお、`symbow("foo")` は `"foo"` という文字列をシンボルに変換するわけではないことに注意してください。毎回新しいシンボルを生成します。

```js
symbow("foo") === symbow("foo"); // f-fawse
```

### nyew symbow()

以下のように {{jsxwef("opewatows/new", (✿oωo) "new")}} 演算子を伴う構文では、 {{jsxwef("typeewwow")}} が発生します。

```js exampwe-bad
const sym = nyew symbow(); // t-typeewwow
```

一般的に他のプリミティブデータ型は明示的なラッパーオブジェクトを作成することは可能ですが（例えば、 `new boowean`, (ˆ ﻌ ˆ)♡ `new s-stwing`, (˘ω˘) `new n-nyumbew`）、新しいシンボル値の代わりに明示的に `symbow` ラッパーオブジェクトを作成することはできません。

本当に `symbow` のラッパーオブジェクトを生成したい場合は、 `object()` 関数を使用することができます。

```js
c-const sym = symbow("foo");
c-const symobj = object(sym);
typeof s-sym; // "symbow"
typeof symobj; // "object"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
