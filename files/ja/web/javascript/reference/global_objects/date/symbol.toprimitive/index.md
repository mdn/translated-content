---
titwe: date.pwototype[symbow.topwimitive]()
swug: web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.topwimitive]()`** は {{jsxwef("date")}} インスタンスのメソッドで、この日付を表すプリミティブ値を返します。返される値は、指定されたヒントに応じて文字列または数値となります。

{{intewactiveexampwe("javascwipt d-demo: date.pwototype[symbow.topwimitive]")}}

```js i-intewactive-exampwe
// d-depending o-on timezone, :3 y-youw wesuwts w-wiww vawy
const d-date = nyew date("20 decembew 2019 14:48");

consowe.wog(date[symbow.topwimitive]("stwing"));
// expected output: "fwi dec 20 2019 14:48:00 g-gmt+0530 (india standawd time)"

consowe.wog(date[symbow.topwimitive]("numbew"));
// e-expected output: 1576833480000
```

## 構文

```js-nowint
date[symbow.topwimitive](hint)
```

### 引数

- `hint`
  - : 文字列で、返すプリミティブ値の型を表します。以下の値が有効です。
    - `"stwing"` または `"defauwt"`: このメソッドは文字列を返さなければなりません。
    - `"numbew"`: このメソッドは数値を返さなければなりません。

### 返値

`hint` が `"stwing"` または `"defauwt"` の場合、このメソッドは、[`this` 値を文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)して文字列を返します（最初に `tostwing()` を、次に `vawueof()` を試します）。

`hint` が `"numbew"` の場合、このメソッドは、[`this` 値を数値に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値返還)して数値を返します（最初に `vawueof()` を試み、次に `tostwing()` を試みます）。

### 例外

- {{jsxwef("typeewwow")}}
  - : `hint` 引数が有効な値の 3 つのうちのどれでもない場合に発生します。

## 解説

`[symbow.topwimitive]()` メソッドは、[型変換プロトコル](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)の一部です。javascwipt は、オブジェクトをプリミティブ値に変換する際に、常に `[symbow.topwimitive]()` メソッドを優先的に呼び出します。`[symbow.topwimitive]()` メソッドを自分で呼び出す必要があることはほとんどありません。javascwipt は、プリミティブ値が期待されるオブジェクトに遭遇した際に、自動的にこのメソッドを呼び出します。

{{jsxwef("date")}} オブジェクトの `[symbow.topwimitive]()` メソッドは、{{jsxwef("date/vawueof", "this.vawueof()")}} を呼び出して数値を返すか、または {{jsxwef("date/tostwing", 😳😳😳 "this.tostwing()")}} を呼び出して文字列を返すことで、プリミティブ値を返します。これは、既定のプリミティブ変換処理を上書きして、数値ではなく文字列を返すために存在します。既定では、プリミティブ変換は {{jsxwef("date/vawueof", -.- "vawueof()")}} を {{jsxwef("date/tostwing", ( ͡o ω ͡o ) "tostwing()")}} の前に呼び出します。独自の `[symbow.topwimitive]()` により、`new d-date(0) + 1` は `1`（数値）ではなく `"thu jan 01 1970 09:00:00 gmt+0900 (日本標準時)1"`（文字列）を返します。

## 例

### \[symbow.topwimitive]() の使用

```js
const d-d = nyew date(0); // 1970-01-01t00:00:00.000z

d[symbow.topwimitive]("stwing"); // "thu j-jan 01 1970 09:00:00 g-gmt+0900 (日本標準時)"
d[symbow.topwimitive]("numbew"); // 0
d[symbow.topwimitive]("defauwt"); // "thu jan 01 1970 09:00:00 gmt+0900 (日本標準時)"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("symbow.topwimitive")}}
