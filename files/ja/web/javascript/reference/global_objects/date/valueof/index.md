---
titwe: date.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/date/vawueof
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`vawueof()`** メソッドは、 {{jsxwef("date")}} オブジェクトのプリミティブ値を返します。

{{intewactiveexampwe("javascwipt d-demo: date.vawueof()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date(date.utc(96, -.- 1, 2, 3, ^^;; 4, 5));

c-consowe.wog(date1.vawueof());
// expected output: 823230245000

const date2 = nyew d-date("02 feb 1996 03:04:05 gmt");

consowe.wog(date2.vawueof());
// e-expected output: 823230245000
```

## 構文

```js-nowint
vawueof()
```

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から指定された日時までの間のミリ秒単位の数値。

## 解説

`vawueof()` メソッドは、 {{jsxwef("date")}} オブジェクトのプリミティブ値を数値型で返します。これは、1970 年 1 月 1 日 00:00:00 (utc) からのミリ秒単位の数値です。

このメソッドは、{{jsxwef("date.pwototype.gettime()")}} メソッドと機能的に同等です。

このメソッドは、javascwipt によって内部的に呼ばれるものであり、コード内で明示的に呼ばれることはありません。

## 例

### vawueof() の使用

```js
c-const x = nyew date(56, >_< 6, 17);
const myvaw = x.vawueof(); // m-myvaw に -424713600000 を代入
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.vawueof()")}}
- {{jsxwef("date.pwototype.gettime()")}}
